const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var routes = require('./routes');
const PORT = 3001;

app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); app.use(cors()); 
app.use((req,res,next) => { 
    res.setHeader('Access-Control-Allow-Origin','*'); 
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE'); 
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type'); 
    res.setHeader('Access-Control-Allow-Credentials',true); 
    next(); 
})

// Route all requests to the routes.js file
app.use('/',routes);
// Backend server is lisenting to the port PORT
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});