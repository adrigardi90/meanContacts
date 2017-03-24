// Import the Modules installed to our server
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var api = require('./server/api/user');

// Start the Express web framework
var app = express();

// configure app
app.use(bodyParser());


//Serve client part
app.use('/api', api);
app.use(express.static(__dirname + '/client'));




//DB connection
mongoose.connect('mongodb://localhost/users');
var db = mongoose.connection;

db.on('error', function(){
	console.log('Error to connect DB');
})
db.once('open', function(){
	console.log('Connect to DB');
})


//Port listen
app.listen(3030, function(){
	console.log("App listening on port 3030");
})