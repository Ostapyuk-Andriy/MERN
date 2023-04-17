const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        requried: [true, "Title is required"],
        minlength: [3, "Title must be 3 characters long"]
    },
    price: {
        type: Number,
        min: [1, "Price is required"],
        max: [1000, "Price must not be more then 1000"]
    },
    description: {
        type: String,
        requried: [true, "Description is required"],
        minlength: [5, "Description must be 5 characters long"]
    },

}, {timestamps: true})

module.exports = mongoose.model('Product', ProductSchema)