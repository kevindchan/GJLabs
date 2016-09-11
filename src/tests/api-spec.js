// Set testing to true. Will initialize temporary
// sqlite database in server/db/db.js
process.env.TESTING = true;

var path = require('path');
var chai = require('chai');
var Sequelize = require('sequelize');
var expect = chai.expect;
var request = require('request');
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

describe('Bru API', () => {
	before(function (done) {
		sequelize.sync({force:true}) // Recreate db tables
		.then(() => {
			User.bulkCreate(starterUsers);
			done();
		})
	})

	describe('Users', () => {
		it('Successfully created users', (done) => {
			User.findAll()
			.then((users) => {
				expect(users).to.have.length(3);
				done()
			})
		})

		it('/signup POST request should create a new user.', (done) => {
			const options = {
				username: 'beerfan', // updates/changes username
				firstName: 'Pam',
				lastName: 'Roth',
				email: 'pam123@example.com',
			}
			request({
				uri: 'http://127.0.0.1:3000/signup', 
				method: 'POST', form: options}, 
				(err, res, body) => {
				expect(JSON.parse(body).results).to.equal(4); // returns id of new user
				done();
			});
		});
	
		it('/api/users GET request should return all users.', (done) => {
			request('http://127.0.0.1:3000/api/users', (err, res, body) => {
				expect(JSON.parse(body).results).to.have.length(4);
				done();
			})
		});

		it('/api/users/1 GET request should return first user.', (done) => {
			request('http://127.0.0.1:3000/api/users/1', (err, res, body) => {
				expect(JSON.parse(body).results.firstName).to.equal('Tom');
				done();
			});		
		});

		it('/api/users/1 PUT request should return updated user.', (done) => {
			const options = {
				username: 'BeerKing', // updates/changes username
				firstName: 'Tom',
				lastName: 'Jones',
				email: 'bobjones@example.com',
			}
			request({
				uri: 'http://127.0.0.1:3000/api/users/1', 
				method: 'PUT', form: options}, 
				(err, res, body) => {
				expect(JSON.parse(body).results.username).to.equal('BeerKing');
				done();
			});
		});				
	
	})


})