//So that we can use express:
const express = require('express');
const app = express();

//bodyParser
app.use(express.json());

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
            password: 'banana',
            coins: 0,
            joined: new Date()
        }
    ]
}

app.get('/', (req, res)=> {
    res.send(database.users);
})

//SIGN IN:
app.post('/signin', (req, res) => {

    if(req.body.email === database.users[0].email && 
        req.body.password === database.users[0].password) {

    res.json('success');
}   

    else {

        res.status(400).json('error logging in');
    }


})

//REGISTER:
app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    database.users.push({
        id: '125',
        name: name,
        email: email,
        password: password,
        coins: 0,
        joined: new Date()
    })

    res.json(databse.users[database.users.length-1]);

})



//check if our server is running:
app.listen(3001, ()=> {
    console.log('app is running on port 3001');
})


/*

/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = new user
/profile/:userId --> GET = user
/coin --> PUT --> user object updated

*/ 