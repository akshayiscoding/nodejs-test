const mongoose = require("mongoose");

const AnswerSchema = mongoose.Schema({
    answer: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('AnswerSchema', AnswerSchema);