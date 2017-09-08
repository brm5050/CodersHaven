'use strict';

var mongoose = require('mongoose');
var Posts = require('../models/posts.js');
var Comments = require('../models/posts.js');
mongoose.Promise = global.Promise;



module.exports = function(app) {

	app.get('/custom', function(req,res) {
		res.send("Got it");

	});

	app.post('/newpost', function(req,res) {
		console.log(req.body);
		var newPost = new Posts(req.body);

		newPost.save(function(err) {
			if(err) throw err;
			res.send("Post saved!");
		});
	});

	app.post('/newcomment', function(req,res) {
		var newComment = new Comments(req.body);

		newComment.save(function(err) {
			if(err) throw err;
			res.send("Comment saved!");
		});

	});

	app.get('/getposts', function(req,res) {
		Posts.find()
			.then(function(data) {
				console.log(data);
				res.send("Get complete!");
			});
	});














};