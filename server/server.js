//So that we can use express:
const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('this is working');
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