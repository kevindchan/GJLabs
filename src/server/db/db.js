var Sequelize = require('sequelize');

var sequelize = new Sequelize('mysql://root:root@localhost:3306/bru');

module.exports = sequelize;