const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: [true, "Name is required"],
        minlength: [2, "Name must be 2 characters long"]
    },
    image: {
        type: String,
        requried: [true, "Image is required"],
    },
    tips: {
        type: String,
        requried: [true, "Name is required"],
        minlength: [2, "Name must be 2 characters long"]
    },
    description: {
        type: String,
        requried: [true, "Description is required"],
        minlength: [2, "Description must be 2 characters long"],
        maxlength: [1000, "Description must contain max of 1000 characters"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Plant', PlantSchema)