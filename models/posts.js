var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	author: { type: String, required: true, unique: true},
	title: { type: String, required: true, unique: true },
	body: String,
	upvotes: { type: Number, default: 0 },
	downvotes: { type: Number, default: 0 },
	date: { type: Date, default: Date.now()}
});

var Posts = mongoose.model('Posts',postSchema);

module.exports = Posts;