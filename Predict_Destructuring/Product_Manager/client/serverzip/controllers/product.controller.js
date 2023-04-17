const Product = require('../models/product.model')

// Create one
module.exports.addProduct = (req,res) => {
    const newProduct = req.body
    Product.create(newProduct)
    .then(product => res.json(product))
    .catch(err => res.status(400).json(err))
};

// Read all
module.exports.allProducts = (req,res) => {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
};

// Read one
module.exports.oneProduct = (req,res) => {
    const idFromParams = req.params.id
    Product.findOne({_id: idFromParams})
    .then(oneproduct => res.json(oneproduct))
    .catch(err => res.json(err))
};