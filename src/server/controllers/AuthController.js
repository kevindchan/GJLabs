var User = require('../models/models.js').User;

module.exports = {
	SignUp: {
		post: (req, res) => {
		  const data = req.body;
		  User.create({
		    username: data.username,
		    firstName: data.firstName,
		    lastName: data.lastName,
		    email: data.email,
		    password: data.password
		  })
		  .then((user) => {
		    res.json({results: user, message: 'Resource created'});
		  })
		  .catch((err) => {
		    res.json({results: err, message: 'Resource not created'});
		  })
		}
	},
	Login: {
		post: (req, res) => {
			res.json({results: 'login post request'});
		}
	}
}