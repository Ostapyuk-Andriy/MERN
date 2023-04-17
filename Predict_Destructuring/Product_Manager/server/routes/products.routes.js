const ProductController = require('../controllers/product.controller')


module.exports = (app) => {

    // Create
    app.post('/api/products/new', ProductController.addProduct)
    // Read all
    app.get('/api/products', ProductController.allProducts)
    // // Read one
    app.get('/api/product/:id', ProductController.oneProduct)
    // // Update one
    app.put('/api/product/:id', ProductController.updateProduct)
    // // Delete one
    app.delete('/api/product/:id', ProductController.deleteProduct)
}