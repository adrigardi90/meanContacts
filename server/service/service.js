var jwt = require('jwt-simple');
var moment = require('moment');

//Creation of the token
exports.createToken = function(user){

	//Secret Key
	TOKEN = process.env.TOKEN_SECRET || "ContactCalendarMeanApp";

	//Payload
	var payload = {
		sub: user._id,
		iat: moment().unix(),
		//Expiration time
		exp: moment().add(10, "minutes").unix()
	};

	return jwt.encode(payload, TOKEN);

};