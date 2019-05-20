var gov_controller = require('./gov_controller'); 
var express = require('express'); 
var router = express.Router();

/* * post request calls the insert method in gov_controller class to insert a new Government employee detail for discount */ 
router.post('/',function(req,res){ 
    gov_controller.insert(req.body).then(function(data){ 
        res.status(data.status).send({message:data.message}); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); 
    }) 
});

/* * get request calls the checkNIC method in gov_controller class to get details of a particular Government Employee based on the NIC */ 
router.get('/:nic', (req, res) => { 
    gov_controller.checkNIC(req.params.nic).then(data => { 
        res.status(data.status).send(data.data); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); 
    }); 
});

module.exports=router;
