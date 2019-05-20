var send_sms = function() {

    // To send message(SMS) using Twillio Client to users about the ticket details
    this.sms = function(phone_no, train_name, ticket_count){ 
        const accountSid = 'AC55d40a55bce0e7d5bf81e1e4087ef7d8';
        const authToken = '6f257e5904fb9f63f8510c7d84f18d82';
        const client = require('twilio')(accountSid, authToken);

        client.messages
        .create({
            body: 'Dear Sir/Madam, You have booked ' + ticket_count + ' tickets to travel in "' + train_name + '". Happy Go!.',
            from: '+19388887251',
            to: phone_no
        })
        .then(message => console.log(message.sid));
    }
}

module.exports=new send_sms();
