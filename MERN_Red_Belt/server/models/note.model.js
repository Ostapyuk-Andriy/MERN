const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: [true, "Title is required"],
        minlength: [2, "Title must be 2 characters long"]
    },
    body: {
        type: String,
        requried: [true, "Body is required"],
        maxlength: [255, "Body must contain max of 255 characters"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Note', NoteSchema)