const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: [true, "Name is required"],
        minlength: [3, "Name must be 3 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Author', AuthorSchema)