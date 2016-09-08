var Sequelize = require('sequelize');
var sequelize = require('../db/db.js');

var User = sequelize.define('user', {
  username: {type: Sequelize.STRING, null: false, unique: true},
  firstName: {type: Sequelize.STRING},
  lastName: {type: Sequelize.STRING},
  email: {type: Sequelize.STRING, unique: true}, // make null: false
  password: {type: Sequelize.STRING, null: false} // make null: false
});

var Beer = sequelize.define('beer', {
  beerId: {type: Sequelize.STRING, null:false, primaryKey: true},
  ibu: {type: Sequelize.FLOAT},
  srm: {type: Sequelize.FLOAT},
  abv: {type: Sequelize.FLOAT}
});

var BeerLog = sequelize.define('beerlog', {
  rating: {type: Sequelize.INTEGER},
  liked: {type: Sequelize.BOOLEAN}
});

// Create BeerLog table. `{force:true}` drops and recreates table
// Join table must be created before Many to Many relationship
// is defined between User and Beer
// BeerLog.sync({force:true})
// .then((success) => {
//   console.log('beerlog table created');
// })
// .catch((err) => {
//   console.log('beerlog table err:', err)
// })

// Define many to many relationship between User and Beer
// using BeerLog as a join table
User.belongsToMany(Beer, {through: BeerLog});
Beer.belongsToMany(User, {through: BeerLog});

// // Create User table. `{force:true}` drops and recreates table
// User.sync({force:true})
// .then((success) => {
//   console.log('user table created');
// })
// .catch((err) => {
//   console.log('user table err:', err)
// })

// // Create Beer table. `force:true` drops and recreates table
// Beer.sync({force:true})
// .then((success) => {
//   console.log('beer table created');
// })
// .catch((err) => {
//   console.log('beer table err:', err)
// })

module.exports.User = User;
module.exports.BeerLog = BeerLog;