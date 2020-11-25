var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Comment', CommentSchema);

