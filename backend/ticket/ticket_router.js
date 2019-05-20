var ticket_controller = require('./ticket_controller'); 
var express = require('express'); 
var router = express.Router(); 

/* * post request calls the insert method in ticket_controller class to insert a new transaction */ 
router.post('/',function(req,res){ 
    ticket_controller.insert(req.body).then(function(data){ 
        res.status(data.status).send({message:data.message}); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); 
    }) 
});

module.exports=router;