const Plant = require('../models/plant.model')

// Create
module.exports.addPlant = (req,res) => {
    const newPlant = req.body
    Plant.create(newPlant)
    .then(plant => res.json(plant))
    .catch(err => res.status(400).json(err))
};

// Read all
module.exports.allPlants = (req,res) => {
    Plant.find()
    .then(plants => res.json(plants))
    .catch(err => res.json(err))
};

// Read one
module.exports.onePlant = (req,res) => {
    const idFromParams = req.params.id
    Plant.findOne({_id: idFromParams})
    .then(oneplant => res.json(oneplant))
    .catch(err => res.json(err))
};

// Update
module.exports.updatePlant = (req,res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    // Update: criteria, updatedValue, options
    Plant.findOneAndUpdate({_id: idFromParams}, updatedValue, {new: true, runValidators: true})
    .then(updatedPlant => res.json(updatedPlant))
    .catch(err => res.status(400).json(err))
};

// Delete
module.exports.deletePlant = (req,res) => {
    const idFromParams = req.params.id
    Plant.deleteOne({_id: idFromParams})
    .then(message => res.json(message))
    .catch(err => res.json(err))
};