var nodemailer = require('nodemailer');

var send_email = function() {

    // To send email to users using Nodemailer module about the ticket details
    this.mail = function(email, train_name, ticket_count){ 
        var receiver = email;
        var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trainticketer@gmail.com',
            pass: 'trainticketer123'
        }
        });

        var output=`Dear Sir/Madam, You have booked ${ticket_count} tickets to travel in "${train_name}". Happy Go!.`;

        var mailOptions = {
            from: '"Train Ticketer" <trainticketer@gmail.com>',
            to: receiver,
            subject: 'Ticket Purchase',
            text: output
        };

        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
        });
    }

}

module.exports=new send_email();