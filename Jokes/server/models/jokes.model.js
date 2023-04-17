const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        minLength: [10, "Setup must have at least 10 characters"]
    },
    punchline: {
        type: String,
        minLength: [3, "Punchline must be 3 characters long"]
    },
}, {timestamps: true})

module.exports = mongoose.model('Joke', JokeSchema)