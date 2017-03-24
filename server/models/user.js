var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
	name: {type: String, default:''},
	surname: {type: String, default:''},
	email: {type: String, default:'',unique: true},
	password: {type: String, default:''},
	contacts:[]
});


module.exports = mongoose.model('User', user);
