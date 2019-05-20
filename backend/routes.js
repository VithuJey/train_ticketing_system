var express = require('express'); 
var routes = express.Router();

/* * requires all classes that handles routes */ 
var trainrouter=require('./train/train_router'); 
var userrouter = require('./user/user_router'); 
var govrouter=require('./gov_employee/gov_router'); 
var dialogrouter=require('./dialog/dialog_router'); 
var sampathrouter=require('./sampath/sampath_router');
var ticketrouter=require('./ticket/ticket_router');

/* * routes the request to the specified class */ 
routes.use('/train',trainrouter); 
routes.use('/user',userrouter); 
routes.use('/gov',govrouter); 
routes.use('/dialog',dialogrouter); 
routes.use('/sampath',sampathrouter);
routes.use('/ticket',ticketrouter);
module.exports = routes;