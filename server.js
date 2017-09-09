/* jshint node: true */
"use strict";

var express = require("express");
var path = require('path');
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var url = 'mongodb://localhost:27017/codershavenTest';

mongoose.connect(url, {
	useMongoClient: true

});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var port = 3000;


require('./controllers/maincontrollers.js')(app);
require('./migrations/seeds.js')(mongoose);
//Main route

app.listen(port, function() {
	console.log('App running on port ' + port);
});