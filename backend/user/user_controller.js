var mongoose = require('../schema');
var schema = mongoose.model('user');

/**Handels all ticketing requests based on the user tabel, this class manipulates data in the user tabel */ 
var user_controller = function() { 

/** insert method to insert data into user table */ 
    this.insert=function(data){ 
        return new Promise(function(resolve,reject){ 
            var user=schema({ 
                name:data.name, 
                email:data.email, 
                password:data.password, 
                address:data.address, 
                nic:data.nic,
                phone:data.phone
            }) 
            user.save().then(function(){ 
                resolve({status: 200, message: "Added a new user"})
            }).catch(err => { 
                reject({status: 500, message: "Error:- "+err}); 
            }) 
        }) 
    } 
    /** get method to retrieve all data */ 
    this.get = () => { 
        return new Promise((resolve, reject) => { 
            schema.find().sort({random: 1}).limit(1).exec().then((data) => { 
                resolve({status: 200, data: data}); 
            }).catch(err => { 
                reject({status: 500, message: "Error:- " + err}); 
            }) 
        }) 
    } 
    /** getOne method to retrieve data of specified user by the email and password */ 
    this.getOne = (email,password) => { 
        return new Promise((resolve, reject) => { 
            schema.find({email:email,password:password}).exec().then((data) => { 
                resolve({status: 200, data: data});
            }).catch(err => { 
                reject({status: 500, message: "Error:- " + err}); 
            }) 
        }) 
    } 
    /* 
    * this method checkemail is used to check whether the email entered during the sign up has been already taken 
    */ 
    this.checkEmail = (email) => { 
        return new Promise((resolve, reject) => { 
            schema.find({email:email}).exec().then((data) => { 
                resolve({status: 200, data: data}); 
            }).catch(err => { 
                reject({status: 500, message: "Error:- " + err}); 
            }) 
        }) 
    }

    this.deleteOne = (id) => { 
        return new Promise((resolve, reject) => { 
            schema.remove({_id:id}).exec().then((data) => { 
                resolve({status: 200, message: "Deleted"}); 
            }).catch(err => { 
                reject({status: 500, message: "Error:- " + err}); 
            }) 
        })
    }
}

/* * The user_controller() method is exported for the user_router class */ 
module.exports=new user_controller();