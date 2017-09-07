var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	author: String,
	title: String,
	body: String,
	date: Date
});

var Posts = mongoose.model('Posts',postSchema);

module.exports = Posts;