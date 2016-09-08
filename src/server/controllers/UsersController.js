var User = require('../models/models.js').User;

module.exports = {
  get: (req, res) => {
    User.findAll({
      attributes: ['username', 'firstName', 'lastName', 'email']
    })
    .then((users) => {
      res.json({results: users, message: 'Successfully fetched resources'});
    }) 
    .catch((err) => {
      res.json({results: err, message: 'Error fetching resources'})
    })
  },
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
}