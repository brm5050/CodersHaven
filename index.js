/* jshint node: true */
"use strict";

var express = require("express");
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
var app = express();

var url = 'mongodb://localhost:27017/codershavenTest';

MongoClient.connect(url, fuction(err, db) {
	assert.equal(null,err);
	console.log("Connected correctly to server");
});


app.use(express.static('public'));

var port = 3000;

//Main route
app.get('/', function(req,res) {
	res.send("");

});

app.listen(port, function() {
	console.log('App running on port ' + port);
});