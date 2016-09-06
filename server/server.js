
///// BASIC EXPRESS MIDDLEWARE /////////

var express = require('express'); 
var bodyParser = require('body-parser'); 
var morgan = require('morgan');

///// HTTP REQUEST MODULE FOR REACT /////////

// var axios = require('axios')

///// INIT SERVER ////////////////////////

var app = express(); 

app.set('port', 3000); 

//// EXPRESS MIDDLEWARE /////////////////
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));


///// ROUTING /////////////////////////////
require('./routes.js')(app, express);

app.listen(3000);
console.log('Bru is listening on: 3000'); 

