var path = require('path');
var Sequelize = require('sequelize');

module.exports = () => {
	if (process.env.TESTING) {
		return new Sequelize(
			'testdb',
			'username',
			'password',
			{
				host: 'localhost',
				dialect: 'sqlite',
				storage: path.resolve(__dirname, 'testdb.sqlite')
			}
		);		
	} else {
		return new Sequelize('mysql://root:root@localhost:3306/bru');
	}
}