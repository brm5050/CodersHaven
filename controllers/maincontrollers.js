'use strict';

var mongoose = require('mongoose');
var Posts = require('../models/posts.js');
var Comments = require('../models/posts.js');
mongoose.Promise = global.Promise;



module.exports = function(app) {

	app.post('/api/newpost', function(req,res) {
		console.log(req.body);
		var newPost = new Posts(req.body);

		newPost.save(function(err) {
			if(err) throw err;
			res.send("Post saved!");
		});
	});

	app.post('/api/newcomment', function(req,res) {
		var newComment = new Comments(req.body);

		newComment.save(function(err) {
			if(err) throw err;
			res.send("Comment saved!");
		});

	});

	app.get('/api/getposts', function(req,res) {
		Posts.find()

		.populate("comments")
		.exec(function(error, data) {
			if(error) {
				console.log(error);
				console.log("check your comments id route");
			} else {
				res.json(data);
				console.log(data.comments);
				console.log("pushed data to front end");
			}
		});
	});
};
