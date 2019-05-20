var train_controller = require('./train_controller'); 
var express = require('express'); 
var router = express.Router(); 

/* * post request calls the insert method in train_controller class to insert a new user */ 
router.post('/',function(req,res){ 
    train_controller.insert(req.body).then(function(data){ 
        res.status(data.status).send({message:data.message}); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); }) 
    }); 
    
/* * get request calls the get method in train_controller class to get all user details */ 
router.get('/', (req, res) => { 
    train_controller.get().then(data => {
        res.status(data.status).send(data.data); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); 
    }); 
});

/* * get request calls the getTrainDetail method in train_controller class to get details of a particular train based on the name */ 
router.get('/:name', (req, res) => { 
    train_controller.getTrainDetail(req.params.name).then(data => { 
        res.status(data.status).send(data.data); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message});
    }); 
}); 

module.exports=router;