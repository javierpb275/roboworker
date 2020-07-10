//So that we can use express:
const express = require('express');
const app = express();

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
    res.send('this is working');
})

app.post('/signin', (req, res) => {
    res.json('signin');
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