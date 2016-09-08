var User = require('../models/models.js').User;

module.exports = {
  get: (req, res) => {
  	const data = req.body;
  	const userId = req.params.id;
  	User.findById(userId)
  	.then((user) => {
  		res.json({'results': user, 'message': 'Resource retrieved.'})
  	})
  	.catch((err) => {
	    res.json({'results': err, 'message': 'Error retrieving resource.'})
  	})
  },
  put: (req, res) => {
  	const data = req.body;
  	const userId = req.params.id;
  	console.log("DATA:", data)
  	User.findById(userId)
  	.then((user) => {
  		user.username = data.username,
  		user.firstName = data.firstName,
  		user.lastName = data.lastName,
  		user.email = data.email,
  		user.save();
  		return user;
  	})
  	.then((user) => {
	    res.json({results: user, message: 'Resource updated'});
  	})
  	.catch((err) => {
  		res.json({results: err, message: 'Error updating resource.'})
  	})
  }
}