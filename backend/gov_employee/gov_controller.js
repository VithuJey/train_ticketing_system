var mongoose = require('../schema');
var schema = mongoose.model('govEmployee'); 

/**Handels all ticketing requests based on the user tabel, this class manipulates data in the govEmployee tabel */ 
var gov_controller = function() { 

/** insert method to insert data into govEmployee table */ 
    this.insert=function(data){ 
        return new Promise(function(resolve,reject){ 
            var govEmployee=schema({ 
                email:data.email, 
                nic:data.nic
            }) 
            user.save().then(function(){ 
                resolve({status: 200, message: "Added a new Government Employee detail"}) 
            }).catch(err => { 
                reject({status: 500, message: "Error:- "+err}); 
            }) 
        }) 
    }

    /* 
    * this method checkNIC is used to check whether the NIC belogs to government employee 
    */ 
    this.checkNIC = (nic) => {
        return new Promise((resolve, reject) => { 
            schema.find({nic:nic}).exec().then((data) => { 
                resolve({status: 200, data: data}); 
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err}); 
            }) 
        }) 
    }
}

/* * The gov_controller() method is exported for the user_router class */ 
module.exports=new gov_controller();