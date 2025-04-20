const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Book must have a title"],
        trim: true,
        maxLength: [100, "Not more than 100 chars."]
    },
    author: {
        type: String,
        required: [true, "Author is required for a book"],
        trim: true
    },
    year: {
        type: Number,
        required: [true, "Year is a required field for book"],
        min: [1000, "Year must not be less than 1000"],
        max: [new Date().getFullYear(), "Year must not be in the future."]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Book", bookSchema);