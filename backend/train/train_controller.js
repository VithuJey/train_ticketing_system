var mongoose = require('../schema');
var schema = mongoose.model('train');

/**Handels all ticketing requests based on the train table*/ 
var train_controller = function() { 

    /** insert method to insert data into train table */
        this.insert=function(data){
            return new Promise(function(resolve,reject){
                var train=schema({ 
                    name:data.name, 
                    number:data.number, 
                    start_location:data.start_location, 
                    end_location:data.end_location, 
                    start_time:data.start_time,
                    end_time:data.end_time,
                    ticket_price:data.ticket_price
                })
                train.save().then(function(){ 
                    resolve({status: 200, message: "Added a new train detail"}) 
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

        /** this method checkTrainName is used to get train details based on its name */ 
        this.getTrainDetail = (name) => { 
            return new Promise((resolve, reject) => { 
                schema.find({name:name}).exec().then((data) => { 
                    resolve({status: 200, data: data}); 
                }).catch(err => { 
                    reject({status: 500, message: "Error:- " + err});
                }) 
            }) 
        }
}

/* * The train_controller() method is exported for the train_router class */ 
module.exports=new train_controller();