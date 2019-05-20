var mongoose=require('mongoose'); 
var schema=mongoose.Schema; 

// User Details Schema
var user = new schema({
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    nic: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    phone: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    }
})

// Train Details Schema
var train = new schema({
    name: {
        type:String,
        required:true
    },
    number: {
        type:String,
        required:true
    },
    start_location: {
        type: String,
        required:true
    },
    end_location: {
        type: String,
        required:true
    },
    start_time: {
        type: String,
        required:true
    },
    end_time: {
        type: String,
        required:true
    },
    ticket_price: {
        type: String,
        required:true
    }
})

// Ticket Details schema
var ticket =  new schema({
    purchase_id: {
        type:String,
        required:true
    },
    train_name: {
        type: String,
        required:true
    },
    ticket_count: {
        type: String,
        required:true
    },
    user_email: {
        type: String,
        required:true
    },
    total: {
        type: String,
        required:true
    },
    pay_mode: {
        type: String,
        required:true
    }
})

// CreditCard Details schema
var sampathpay =  new schema({
    fullname: {
        type:String,
        required:true
    },
    cardnumber: {
        type: String,
        required:true
    },
    total: {
        type: String,
        required:true
    },
    cvc: {
        type: String,
        required:true
    }
})

// DialogPay Details schema
var dialogpay =  new schema({
    fullname: {
        type:String,
        required:true
    },
    phone: {
        type: String,
        required:true
    },
    total: {
        type: String,
        required:true
    },
    pin: {
        type: String,
        required:true
    }
})

// Government employee schema
var govEmployee =  new schema({
    email: {
        type:String,
        required:true
    },
    nic: {
        type: String,
        required:true
    }
})

// renaming schema
mongoose.model('user', user);
mongoose.model('train', train);
mongoose.model('ticket', ticket);
mongoose.model('sampathpay', sampathpay);
mongoose.model('dialogpay', dialogpay);
mongoose.model('govEmployee', govEmployee);

mongoose.connect('mongodb://127.0.0.1:27017/ticketing_system', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

module.exports = mongoose;