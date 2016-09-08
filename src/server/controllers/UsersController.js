var User = require('../models/models.js').User;

module.exports = {
  get: (req, res) => {
    User.findAll({})
    .then((users) => {
      users.getBeers()
      res.json({results: users, message: 'Successfully fetched resources'});
    }) 
    .catch((err) => {
      res.json({results: err, message: 'Error fetching resources'})
    })
  },
  post: (req, res) => {
    const data = req.body;
    User.create({username: data.username})
    .then((success) => {
      res.json({results: success, message: 'Resource created'});
    })
    .catch((err) => {
      res.json({results: err, message: 'Resource not created'});
    })
  }
}