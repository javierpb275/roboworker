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


//CONTROLLERS
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const earncoins = require('./controllers/earncoins');
const spendcoins = require('./controllers/spendcoins');


app.get('/', (req, res) => {
    res.send(database.users);
})


//SIGN IN:
app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)}) 
    
//REGISTER:
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})

//PROFILE/:USERID (get the user for the homepage):
app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)})

//update the user to increase their coins:
app.put('/earncoins', (req, res) => {earncoins.handleEarnCoins(req, res, db)})

//update the user to decrease their coins when select a product:
app.put('/spendcoins', (req, res) => {spendcoins.handleSpendCoins(req, res, db)})


//check if our server is running:
app.listen(3001, () => {
    console.log('app is running on port 3001');
})
