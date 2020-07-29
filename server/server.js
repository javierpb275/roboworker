//So that we can use express:
const express = require('express');
const app = express();


//bodyParser:
app.use(express.json());


//BCRYPT:
const bcrypt = require('bcrypt-nodejs');


//CORS:
const cors = require('cors');
app.use(cors());


//KNEX
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',//this is the same as localhost. 127.0.0.1 = home.
      user : 'postgres',
      password : 'postgres',
      database : 'roboworker'
    }
  });


//fake database
const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            coins: 0,
            joined: new Date()
        },
        {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            coins: 0,
            joined: new Date()
        }
    ],
    login: [
        {
            id: '987',
            hash: '',
            email: 'john@gmail.com'
        }
    ]
}


app.get('/', (req, res) => {
    res.send(database.users);
})


//SIGN IN:
app.post('/signin', (req, res) => {

    db.select('email', 'hash').from('login')
    .where('email', '=', req.body.email)
        .then(data => {

           const isValid = bcrypt.compareSync(req.body.password, data[0].hash);

           if (isValid) {

               return db.select('*').from('users')
               .where('email', '=', req.body.email)
               .then(user => {
                res.json(user[0])
               })

               .catch(err => res.status(400).json('unable to get user'));

           } 
           
           else {
            res.status(400).json('wrong credentials')
           }
           
        })

        .catch(err => res.status(400).json('wrong credentials'))

})


//REGISTER:
app.post('/register', (req, res) => {

    const { email, name, password } = req.body;
    const hash = bcrypt.hashSync(password);

    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
            .returning('*')
            .insert({
                email: loginEmail[0],
                name: name,
                joined: new Date()
            })
    
                .then(user => {
                    res.json(user[0]);
                })

            })

            .then(trx.commit)
            .catch(trx.rollback)

        })

    .catch(err => res.status(400).json('unable to register'))
    
})


//PROFILE/:USERID (get the user for the homepage):
app.get('/profile/:id', (req, res) => {

    const { id } = req.params;

    db.select('*').from('users').where({
        id: id
    })
    
    .then(user => {
        if (user.length) {
        res.json(user[0]);
    }

    else {
        res.status(400).json('Not found')
    }

    })

    .catch(err => res.status(400).json('error getting user'))

})


//update the user to increase their coins:
app.put('/earncoins', (req, res) => {

    const { id } = req.body;

    db('users').where('id', '=', id)

    .increment('coins', 1)

    .returning('coins')

    .then(coins => {
        res.json(coins[0]);
    })

    .catch(err => res.status(400).json('unable to earn coins'));

})


//update the user to decrease their coins when select a product:
app.put('/spendcoins', (req, res) => {

    const { id, price } = req.body;

    const user = db('users').where('id', '=', id).then(user => {res.json(user[0])})
    
    const coins = db('users').where('id', '=', id).then(user => {res.json(user[0].coins)})

    if (typeof user !== "undefined") {

        if (coins >= price) {

            db('users').where('id', '=', id)

            .decrement('coins', price)

            .returning('coins')

            .then(coins => {
                res.json(coins[0]);
            })

            .catch(err => res.status(400).json('unable to spend coins'));
        }

        else {
            return res.status(202).json('You can`t afford this product. Keep Working!');
        }
    }

    else {
        res.status(404).json('user id not found');
    }

})


//check if our server is running:
app.listen(3001, () => {
    console.log('app is running on port 3001');
})
