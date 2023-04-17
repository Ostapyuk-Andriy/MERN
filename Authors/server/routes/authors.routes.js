const AuthorController = require('../controllers/author.controller')


module.exports = (app) => {

    // Create
    app.post('/api/authors/new', AuthorController.addAuthor)
    // Read all
    app.get('/api/authors', AuthorController.allAuthors)
    // Read one
    app.get('/api/author/:id', AuthorController.oneAuthor)
    // Update one
    app.put('/api/author/:id', AuthorController.updateAuthor)
    // Delete one
    app.delete('/api/author/:id', AuthorController.deleteAuthor)
}