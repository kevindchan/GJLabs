var User = require('../models/models.js').User;

module.exports = {
  get: (req, res) => {
    res.json('user controller get request')
  },
  post: (req, res) => {
    res.json('user controller post request')
  },
  put: (req, res) => {
    res.json('users controller put request')
  }
}