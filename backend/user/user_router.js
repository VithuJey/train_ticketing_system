var user_controller = require('./user_controller'); 
var express = require('express'); 
var router = express.Router(); 

/* * post request calls the insert method in user_controller class to insert a new user */ 
router.post('/',function(req,res){ 
    user_controller.insert(req.body).then(function(data){ 
        res.status(data.status).send({message:data.message}); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); 
    }) 
}); 
    
/* * get request calls the get method in user_controller class to get all user details */ 
router.get('/', (req, res) => { 
    user_controller.get().then(data => {
        res.status(data.status).send(data.data); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); 
    }); 
});

/* * get request calls the getOne method in user_controller class to get details of a particular user based on the email and password */ 
router.get('/:email/:password', (req, res) => { 
    user_controller.getOne(req.params.email,req.params.password).then(data => { 
        res.status(data.status).send(data.data); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); 
    }); 
});

/* * get request calls the checkEmail method in user_controller class to get details of a particular user based on the email */ 
router.get('/:email', (req, res) => { 
    user_controller.checkEmail(req.params.email).then(data => { 
        res.status(data.status).send(data.data); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); 
    }); 
}); 
 
// delete a user by theire id 
router.delete('/:id', (req, res) => { 
    user_controller.deleteOne(req.params.id).then(data => { 
        res.status(data.status).send({data: data.data}); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); }); }); 


router.put('/:email', (req, res) => { 
    user_controller.update(req.params.email,req.body).then(data => { 
        res.status(data.status).send({data: data.data}); 
    }).catch(err => { 
        res.status(err.status).send({message: err.message}); }); }); 
        
module.exports=router;