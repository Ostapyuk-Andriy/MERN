const Joke = require('../models/jokes.model');

module.exports.allJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ results: allJokes });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

module.exports.oneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(one => {res.json({ results: one })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
};
module.exports.randomJoke = (req, res) => {
    Joke.aggregate([{ $sample: {size: 1} }])
        .then(oneRandomJoke => {res.json({ results: oneRandomJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
};

module.exports.addJoke = (req, res) => {
    Joke.create(req.body)
        .then(joke => {
            res.json({ results: joke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ results: updatedJoke });
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
    
};
