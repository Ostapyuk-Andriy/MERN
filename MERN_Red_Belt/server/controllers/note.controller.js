const Note = require('../models/note.model')

// Create
module.exports.addNote = (req,res) => {
    const newNote = req.body
    Note.create(newNote)
    .then(note => res.json(note))
    .catch(err => res.status(400).json(err))
};

// Read all
module.exports.allNotes = (req,res) => {
    Note.find()
    .then(notes => res.json(notes))
    .catch(err => res.json(err))
};

// Read one
module.exports.oneNote = (req,res) => {
    const idFromParams = req.params.id
    Note.findOne({_id: idFromParams})
    .then(onenote => res.json(onenote))
    .catch(err => res.json(err))
};

// Update
module.exports.updateNote = (req,res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    // Update: criteria, updatedValue, options
    Note.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then(updatedNote => res.json(updatedNote))
    .catch(err => res.json(err))
};

// Delete
module.exports.deleteNote = (req,res) => {
    const idFromParams = req.params.id
    Note.deleteOne({_id: idFromParams})
    .then(message => res.json(message))
    .catch(err => res.json(err))
};