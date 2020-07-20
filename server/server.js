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

app.get('/', (req, res)=> {
    res.send(database.users);
})

//SIGN IN:
app.post('/signin', (req, res) => {

    bcrypt.compare("pepe", '$2a$10$0AQhtrf9fVadenBg/sGoZegtMQm6yqPPtN5VRxYa4iwCXFvEm5bAi', function(err, res) {
        console.log('first guess', res);
    });
    bcrypt.compare("veggies", '$2a$10$0AQhtrf9fVadenBg/sGoZegtMQm6yqPPtN5VRxYa4iwCXFvEm5bAi', function(err, res) {
        console.log('second guess', res);
    });

    if(req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {

    res.json(database.users[0]);
}   

    else {

        res.status(400).json('error logging in');
    }


})

//REGISTER:
app.post('/register', (req, res) => {

    const { email, name, password } = req.body;

    bcrypt.hash(password, null, null, function(err, hash) {
        console.log(hash);
    });

    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        coins: 0,
        joined: new Date()
    })

    res.json(database.users[database.users.length-1]);

})

//PROFILE/:USERID (get the user for the homepage):
app.get('/profile/:id', (req, res) => {

    const { id } = req.params;
    let found = false;

    database.users.forEach(user => {

        if (user.id === id) {
            found = true;
           return res.json(user);
        }

    })

    if (!found) {
        res.status(400).json('not found');
    }

})

//update the user to increase their coins:
app.put('/earncoins', (req, res) => {

    const { id } = req.body;
    let found = false;

    database.users.forEach(user => {

        if (user.id === id) {
            found = true;
            user.coins++
           return res.json(user.coins);
        }

    })

    if (!found) {
        res.status(400).json('not found');
    }

})

/*

bcrypt.hash("bacon", null, null, function(err, hash) {
    // Store hash in your password DB.
});

// Load hash from your password DB.
bcrypt.compare("bacon", hash, function(err, res) {
    // res == true
});
bcrypt.compare("veggies", hash, function(err, res) {
    // res = false
});

*/

//check if our server is running:
app.listen(3001, ()=> {
    console.log('app is running on port 3001');
})
