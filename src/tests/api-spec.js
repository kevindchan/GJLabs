var path = require('path');
var chai = require('chai');
var Sequelize = require('sequelize');
var expect = chai.expect;
var request = require('supertest');
var assert = require('assert');
var app = require('../server/server.js');
var User = require('../server/models/models.js').User;
var Beer = require('../server/models/models.js').Beer;

var starterUsers = [
	{
		username: 'BeerBuddy123',
		firstName: 'Tom',
		lastName: 'Jones',
		email: 'tomjones@example.com',
		password: 'password'
	},
	{
		username: 'BlueMonkey',
		firstName: 'Sally',
		lastName: 'Adams',
		email: 'sallya@example.com',
		password: 'password'
	},
	{
		username: 'NeverSober',
		firstName: 'Roger',
		lastName: 'Smith',
		email: 'rogerthat@example.com',
		password: 'password'
	}
]

var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'sqlite',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  storage: path.resolve(__dirname, 'database.sqlite')

});

describe('Bru API', function() {
	beforeEach(function (done) {
		User.create(starterUsers[0])
		.then(function(user) {
			console.log('user created')
		})
		.catch(function(err) {
			console.log('user not created:', err)
		})
	})

	describe('working...', function() {
		it('is this working', function() {
			console.log('its working...')
		})
	})

})