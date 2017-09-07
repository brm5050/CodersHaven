var mongoose = require('mongoose');
var Posts = require('../models/posts.js');
var Comments = require('../models/posts.js');
mongoose.Promise = global.Promise;



module.exports = function(app) {

	app.get('/custom', function(req,res) {
		res.send("Got it");

	});

	app.post('/newpost', function(req,res) {
		var newPost = new Posts({
			author: req.author,
			title: req.title,
			body: req.body,
			date: new Date()
		});

		newPost.save(function(err) {
			if(err) throw err;
			res.send("Saved!");
		});
	});

	app.post('/newcomment', function(req,res) {

	})

};