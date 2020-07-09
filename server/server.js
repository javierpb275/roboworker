//So that we can use express:
const express = require('express');
const app = express();

//check if our server is running:
app.listen(3001, ()=> {
    console.log('app is running on port 3001');
})