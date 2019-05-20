var mongoose = require('../schema');
var schema = mongoose.model('ticket');
var send_mail = require('../external_service/send_mail'); 
var send_sms = require('../external_service/send_sms'); 

/**Handels all payment requests based on the ticket table, this class manipulates data in the ticket table */ 
var ticket_controller = function() { 

/** insert method to add data into ticket table */ 
    this.insert=function(data){
        return new Promise(function(resolve,reject){ 
            var ticket=schema({
                purchase_id:data.purchase_id,
                train_name:data.train_name,
                ticket_count:data.ticket_count,
                user_email:data.user_email,
                total:data.total,
                pay_mode:data.pay_mode
            }) 
            ticket.save().then(function(){
                resolve({status: 200, message: "Added a new transaction"})
                // send mail to the user using nodemailer
                // Tickets purchased through Dialog Pay and Sampath Bank payments are saved in ticket table. 
                // After saving it successfully a mail will be sent to the user citing the details of the ticket he/she bought.
                send_mail.mail(this.user_email, this.train_name, this.ticket_count);
                // send message to the user using Twilio
                // Tickets purchased through Dialog Pay and Sampath Bank payments are saved in ticket table. 
                // After saving it successfully a mail will be sent to the user citing the details of the ticket he/she bought.
                var phone_no = this.find_phone_no(this.user_email);
                send_sms.sms(this.phone_no, this.train_name, this.ticket_count);
            }).catch(err => { 
                reject({status: 500, message: "Error:- "+err}); 
            }) 
        }) 
    } 
}

find_phone_no = function(email) {
    fetch('http://localhost:3001/user/' + email, {
                method: 'GET', 
                headers: {'Content-Type': 'application/json'} 
            }).then(response => {
                return response.json(); 
            }).then(data => {
                var phone = data.phone;
                return phone;
            }).catch(err => { 
                alert("First Err: "+err); 
            }) 
}

/* * The ticket_controller() method is exported for the ticket_router class */ 
module.exports=new ticket_controller();