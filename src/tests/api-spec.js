// Set testing to true. Will initialize temporary
// sqlite database in server/db/db.js
process.env.TESTING = true;

var path = require('path');
var chai = require('chai');
var Sequelize = require('sequelize');
var expect = chai.expect;
var request = require('supertest');
var assert = require('assert');
var app = require('../server/server.js');
var User = require('../server/models/models.js').User;
var Beer = require('../server/models/models.js').Beer;
var sequelize = require('../server/models/models.js').sequelize;

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

describe('Bru API', function() {
	before(function (done) {
		sequelize.sync({force:true}) // Recreate db tables
		.then(() => {
			User.bulkCreate(starterUsers);
			done();
		})
	})

	describe('Users', function() {
		it('Successfully created users', function() {
			User.findAll()
			.then((users) => {
				users.should.have.length(3);
			})
		})
	})

})