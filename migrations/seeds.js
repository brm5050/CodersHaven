var Posts = require('../models/postsModel.js');
var Comments = require('../models/commentsModel.js');


module.exports = function(db) {

	Posts.remove({}, function(err) {
		if(err) throw err;
		// console.log("Posts removed");
	});

	Comments.remove({}, function(err) {
		if(err) throw err;
		// console.log("Comments removed");
	});


	var seedPostCount = 10;

	// console.log("Seeding...");

	var newPost0 = new Posts({
		author: "Bryan",
		title: "Test Post Please Ignore 0",
		body: "This is just a test post, please ignore.",
		upvotes: 0,
		downvotes: 0
	});

	newPost0.save(function(err) {
		if(err) throw err;
		// console.log("Post0 saved!");
	});

	var newPost1 = new Posts({
		author: "Dan",
		title: "Test Post Please Ignore 1",
		body: "This is just a test post, please ignore.",
		upvotes: 0,
		downvotes: 0
	});

	newPost1.save(function(err) {
		if(err) throw err;
		// console.log("Post1 saved!");
	});

	var newPost2 = new Posts({
		author: "Mike",
		title: "Test Post Please Ignore 2",
		body: "This is just a test post, please ignore.",
		upvotes: 0,
		downvotes: 0
	});

	newPost2.save(function(err) {
		if(err) throw err;
		// console.log("Post2 saved!");
	});

	var newPost3 = new Posts({
		author: "Chris",
		title: "Test Post Please Ignore 3",
		body: "This is just a test post, please ignore.",
		upvotes: 0,
		downvotes: 0
	});

	newPost3.save(function(err) {
		if(err) throw err;
		// console.log("Post3 saved!");
	});

	var newPost4 = new Posts({
		author: "Pete",
		title: "Test Post Please Ignore 4",
		body: "This is just a test post, please ignore.",
		upvotes: 0,
		downvotes: 0
	});

	newPost4.save(function(err) {
		if(err) throw err;
		// console.log("Post4 saved!");
	});


	var newComment0 = new Comments({
		author: "shitposter98",
		parentPostId: newPost0._id,
		body: "I think this post is stupid and so is the poster #relevant 0",
		upvotes: 0,
		downvotes: 0
	});

	newComment0.save(function(err) {
		if(err) throw err;
		// console.log("Comment0 saved!");
	});

	var newComment1 = new Comments({
		author: "shitposter98",
		parentPostId: newPost1._id,
		body: "I think this post is stupid and so is the poster #relevant 1",
		upvotes: 0,
		downvotes: 0
	});

	newComment1.save(function(err) {
		if(err) throw err;
		// console.log("Comment1 saved!");
	});

	var newComment2 = new Comments({
		author: "shitposter98",
		parentPostId: newPost2._id,
		body: "I think this post is stupid and so is the poster #relevant",
		upvotes: 0,
		downvotes: 0
	});

	newComment2.save(function(err) {
		if(err) throw err;
		// console.log("Comment2 saved!");
	});

	var newComment3 = new Comments({
		author: "shitposter98",
		parentPostId: newPost3._id,
		body: "I think this post is stupid and so is the poster #relevant",
		upvotes: 0,
		downvotes: 0
	});

	newComment3.save(function(err) {
		if(err) throw err;
		// console.log("Comment3 saved!");
	});

	var newComment4 = new Comments({
		author: "shitposter98",
		parentPostId: newPost4._id,
		body: "I think this post is stupid and so is the poster #relevant",
		upvotes: 0,
		downvotes: 0
	});

	newComment4.save(function(err) {
		if(err) throw err;
		// console.log("Comment4 saved!");
	});


}
