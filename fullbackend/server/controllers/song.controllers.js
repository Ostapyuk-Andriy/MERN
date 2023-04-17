const Song = require('../models/song.model');

module.exports.allSongs = (req, res) => {
    Song.find()
        .then((allSongs) => {
            res.json({ results: allSongs });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.oneSong = (req, res) => {
    Song.findOne({ _id: req.params.id })
        .then(one => {res.json({ results: one })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    }

module.exports.addSong = (req, res) => {
    Song.create(req.body)
        .then(song => {
            res.json({ results: song })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    }

module.exports.updateSong = (req, res) => {
    Song.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedSong => {
            res.json({ results: updatedSong });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    }

module.exports.deleteSong = (req, res) => {
    Song.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    
    }