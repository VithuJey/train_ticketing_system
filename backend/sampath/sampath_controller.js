var mongoose = require('../schema');
var schema = mongoose.model('sampathpay'); 

/**Handels all payment requests based on the sampathpay table, this class manipulates data in the sampathpaypay table */ 
var sampath_controller = function() { 

/** insert method to insert data into sampathpay table */ 
    this.insert=function(data){ 
        return new Promise(function(resolve,reject){ 
            var sampathpay=schema({ 
                fullname:data.fullname, 
                cardnumber:data.cardnumber, 
                total:data.total,
                cvc:data.cvc
            }) 
            sampathpay.save().then(function(){ 
                resolve({status: 200, message: "Added a new transaction"}) 
            }).catch(err => { 
                reject({status: 500, message: "Error:- "+err}); 
            }) 
        }) 
    } 
}

/* * The sampath_controller() method is exported for the sampath_router class */ 
module.exports=new sampath_controller();