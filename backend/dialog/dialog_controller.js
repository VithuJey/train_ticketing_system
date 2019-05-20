var mongoose = require('../schema');
var schema = mongoose.model('dialogpay'); 

/**Handels all payment requests based on the dialogpay tabel, this class manipulates data in the dialogpay tabel */ 
var dialog_controller = function() { 

/** insert method to insert data into dialogpay table */ 
    this.insert=function(data){ 
        return new Promise(function(resolve,reject){ 
            var dialogpay=schema({ 
                fullname:data.fullname, 
                phone:data.phone, 
                total:data.total,
                pin:data.pin
            }) 
            dialogpay.save().then(function(){ 
                resolve({status: 200, message: "Added a new transaction"}) 
            }).catch(err => { 
                reject({status: 500, message: "Error:- "+err}); 
            }) 
        }) 
    } 
}

/* * The dialog_controller() method is exported for the dialog_router class */ 
module.exports=new dialog_controller();