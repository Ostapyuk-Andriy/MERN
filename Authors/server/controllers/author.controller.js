const Author = require('../models/author.model')

// Create
module.exports.addAuthor= (req,res) => {
    const newAuthor= req.body
    Author.create(newAuthor)
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
};

// Read all
module.exports.allAuthors = (req,res) => {
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.json(err))
};

// Read one
module.exports.oneAuthor = (req,res) => {
    const idFromParams = req.params.id
    Author.findOne({_id: idFromParams})
    .then(oneauthor => res.json(oneauthor))
    .catch(err => res.json(err))
};

// Update
module.exports.updateAuthor = (req,res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    // Update: criteria, updatedValue, options
    Author.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then(updatedAuthor => res.json(updatedAuthor))
    .catch(err => res.status(400).json(err))
};

// Delete
module.exports.deleteAuthor = (req,res) => {
    const idFromParams = req.params.id
    Author.deleteOne({_id: idFromParams})
    .then(message => res.json(message))
    .catch(err => res.json(err))
};
