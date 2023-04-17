const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: [true, "Title is required"],
        minlength: [5, "Title must be 5 characters long"]
    },
    artist: {
        type: String,
        requried: [true, "Artist is required"],
        minlength: [3, "Artist must be 5 characters long"]
    },
    rating: {
        type: Number,
        min: [1, "Rating has to be 1-10"],
        max: [10, "Rating has to be 1-10"]
    },
    top50: {
        type: Boolean,
        required: [false]
    }
}, {timestamps: true})

module.exports = mongoose.model('Song', SongSchema)