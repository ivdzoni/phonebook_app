// Dependencies
const express = require('express');
const router = express.Router();

// Models
const User = require('../models/User.server.model.js');

// GET requests

// Getting list of ALL users
router.get('/userlist', function (req,res,next) {
User.find({}, function(err,users) {
   if (err) {
      next(err);
	  } else {
	  res.send(users);
	  }
    });
});

// second option using ES6 features

/*
router.route('/userlist').get((req,res,next) => {
	User.find({}).then( (users) => {
		res.send(users);
	}).catch( (err) => {
		next(err);
	});
});
*/

// Getting list of users matching LAST NAME

router.get('/userlist/last_name/:last_name', function (req,res,next) {
User.find({
	last_name: req.params.last_name
}, function(err,users) {
   if (err) {
      next(err);
	  } else {
	  res.send(users);
	  }
    });
});

// second option using ES6 features

/*
router.route('/userlist/last_name/:last_name').get((req,res,next) => {
	User.find({ last_name: req.params.last_name }).then( (users) => {
		res.send(users);
	}).catch( (err) => {
		next(err);
	});
});
*/

// Getting display of SINGLE user using ID
router.get('/userlist/user_id/:id', function(req,res,next) {
	User.findOne({
	_id: req.params.id
	}, function(err, user) {
		if (err) {
			next(err);
		} else {
			res.send(user);
		}
	});
});

// second option using ES6 features

/*
router.route('/userlist/user_id/:id').get( (req,res,next) => {
	User.findOne({
		_id: req.params.id
	}).then( (user) => {
		res.send(user);
	}).catch( (err) => {
	   next(err);
	});
});
*/

// POST requests

router.post('/userlist', function(req,res,next) {         // Not using mongoose save method
	User.create(req.body, function(err,user) {
		if (err) {
			next(err);
		} else {
			res.send(user);
		}
	});
});

// second option using ES6 features

/*
router.route('/userlist').post( (req,res,next) => {
	User.create(req.body).then( (user) => {
		res.send(user);
	}).catch( (err) => {
		next(err);
	});
});
*/

// PUT requests

router.put('/userlist/user_id/:id', function(req,res,next) {
	User.findByIdAndUpdate({
		_id: req.params.id
	}, {
		first_name: req.body.first_name, 
		last_name: req.body.last_name, 
		telephone_number: req.body.telephone_number
		}, function(err) {
		if (err) {
		next(err);
		} else {
			User.findById({
		_id: req.params.id
	},  function(user) {
		res.send(user);
		});
	}
	});
});

// second option using ES6 features

/*
router.route('/userlist/user_id/:id').put( (req,res,next) => {
	User.findByIdAndUpdate({
		_id: req.params.id
	}, {
		first_name: req.body.first_name, 
		last_name: req.body.last_name, 
		telephone_number: req.body.telephone_number
		}).then( () => {
		User.findById({
		_id: req.params.id
	}).then( (user) => {
		res.send(user);
	});	
	}).catch( (err) => { next(err) });
	});
*/

// DELETE requests

router.delete('/userlist/user_id/:id', function(req,res,next) {
	User.findByIdAndRemove({
		_id: req.params.id
	}, function(err, user) {
		if (err) {
			next(err);
		} else {
			res.send(user/*`The following user has been succssfully deleted: ${user.name}`*/);
	}
	});
});

// second option using ES6 features

/*
router.route('/userlist/user_id/:id').delete( (req,res,next) => {
	User.findByIdAndRemove({
	_id: req.params.id
	}).then( (user) => {
	res.send(`The following user has been successfully deleted: ${user.name}`);
	}).catch( (err) => {
	next(err);
	});
});
*/

// Return router
module.exports = router;