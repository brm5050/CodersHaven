/* jshint node: true */
"use strict";

var express = require("express");
var path = require('path');
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
var app = express();
var mongoose = require('mongoose');


var url = 'mongodb://localhost:27017/codershavenTest';

mongoose.connect(url);


app.use(express.static(__dirname + '/public'));

var port = 3000;


require('./controllers/maincontrollers.js')(app);
//Main route
app.get('/', function(req,res) {
	res.send("");

});

app.listen(port, function() {
	console.log('App running on port ' + port);
});