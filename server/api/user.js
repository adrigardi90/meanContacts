var express = require('express');
var router = express.Router();
var User = require('../models/user');
var service = require('../service/service');

router.use(function(req, res,next){
	console.log("Midelware server");
	next();
})

//---------- API AUTH ----------------

//post register
router.post('/auth/register', function(req, res){

	var user = new User();
	user.name = req.body.name;
	user.surname = req.body.surname;
	user.email = req.body.email;
	user.password = req.body.password;
	user.contacts = [];


	user.save(function(err){
		if (err){
			//revisar error al responder
			res.status(400).send(err);
		}	
			
		res.status(200)
		   .send({token:service.createToken(user)});
	});
})

//post login
router.post('/auth/login', function(req, res){
	User.findOne({email: req.body.email.toLowerCase()}, function(err, user){
		if(err)
			res.status(400).send(err);
		//Valid the password
		if(user){
			if(user.password == req.body.password){
				console.log("Login correcto");
				res.status(200)
			        .send({token:service.createToken(user), name: user.name, surname: user.surname, id: user._id});
			}else{
				console.log("Login incorrecto");
				res.status(401).send({message: "Authorization failed"});
			}
		}else{
			res.status(401).send({message: "Email not found"});
		}	
	});

});


// --------------------- API ---------------------------- 

//update user
router.put('/contact/:_id', function(req, res){
	User.findById(req.params._id, function(err, user){
		if(err)
			res.status(400).send(err);

		if(req.body.name != null)
			user.name = req.body.name;
		if(req.body.surname != null)
			user.surname = req.body.surname;
		if(req.body.email != null)
			user.email = req.body.email;
		if(req.body.password != null)
			user.password = req.body.password;
		if(req.body.contacts != null){
			
			for(var i = 0; i< user.contacts.length ; i++){
				if(user.contacts[i].mobilephone === req.body.contacts.mobilephone){
					//revisar error al devolver response
					res.status(200).send({message:'Numero de movil ya existe'});
				}
			}
			console.log("aqui")
			user.contacts.push(req.body.contacts);
		}
			

	user.save(function(err){
			if(err)
				res.status(400).send(err);

			res.status(200).send({message:'User update correctly'})
		});
	});
});

//update contacts user
/*router.put('/profile/:_id', function(req, res){
	User.findById(req.params._id, function(err, user){
		if(err)
			res.status(400).send(err);

		if(req.body.name != null)
			user.name = req.body.name;
		if(req.body.surname != null)
			user.surname = req.body.surname;
		if(req.body.email != null)
			user.email = req.body.email;
		if(req.body.password != null)
			user.password = req.body.password;

	user.save(function(err){
			if(err)
				res.status(400).send(err);

			res.status(200).send({message:'User update correctly'})
		});
	});
});*/

//Get user by id
router.get('/contact/:_id', function(req, res){
	User.findById(req.params._id, function(err, user){
		if(err)
			res.status(400).send(err);
		res.status(200).send(user);
	});

});

//Delete one contact of logged user
router.get('/deletecontact/:_id/:_phone', function(req, res){
	User.findById(req.params._id, function(err, user){
		var index;

		if(err)
			res.status(400).send(err);

		user.contacts.map(function(obj, i){
			if(obj.mobilephone === req.params._phone)
				index = i;
		});

		user.contacts.splice(index,1);

		user.save(function(err){
			if(err)
				res.status(400).send(err);

			res.status(200).send({message:'Contact deleted correctly'})
		});
	});

});

//Get info one contact of logged user
router.get('/infocontact/:_id/:_phone', function(req, res){
	User.findById(req.params._id, function(err, user){
		var info;
		console.log(req.params._phone)

		if(err)
			res.status(400).send(err);

		for(var i=0; i < user.contacts.length; i++){
			if(user.contacts[i].mobilephone === req.params._phone){
				info = user.contacts[i];
				res.status(200).send(user.contacts[i]);
			}
				
		}

		
		/*user.contacts.forEach(function(obj){		
			if(obj.mobilephone === req.params._phone)
				info = obj;
		});*/

		
	});

});


//Delete user by id
router.delete('/contact/:_id', function(req, res){
	console.log("delete");
	User.remove({_id: req.params._id}, function(err,user){
		if(err)
			res.status(400).send(err)

		res.status(200).send("User delete successfully")
	});
});


module.exports = router;