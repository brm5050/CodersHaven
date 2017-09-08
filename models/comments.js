var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	author: { type: String, required: true, unique: true },
	title: { type: String, required: true, unique: true },
	body: String,
	date: { type: Date, default: Date.now()}
});

var Comments = mongoose.model('Comments',commentSchema);

module.exports = Comments;