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
  }
}