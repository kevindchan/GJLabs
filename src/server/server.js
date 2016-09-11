
///// BASIC EXPRESS MIDDLEWARE /////////

var express = require('express'); 
var path = require('path');
var bodyParser = require('body-parser'); 
var morgan = require('morgan');
var Promise = require('bluebird'); 

///// HTTP REQUEST MODULE FOR REACT /////////

// var axios = require('axios')

///// INIT SERVER ////////////////////////

var app = express(); 

app.set('port', 3000); 

//// EXPRESS MIDDLEWARE /////////////////
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use('/static', express.static(path.resolve(__dirname, '..', '..', 'beerdata')));

///// ROUTING /////////////////////////////
require('./routes.js')(app, express);

var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Bru is listening on port', port); 
});

module.exports = app;

