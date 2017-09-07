var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	author: String,
	title: String,
	body: String,
	date: Date
});

var Comments = mongoose.model('Comments',commentSchema);

module.exports = Comments;