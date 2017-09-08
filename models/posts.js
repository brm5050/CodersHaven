var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	author: { type: String, required: true, unique: true },
	title: { type: String, required: true, unique: true },
	body: String,
	date: { type: Date, default: Date.now()}
});

var Posts = mongoose.model('Posts',postSchema);

module.exports = Posts;