const PlantController = require('../controllers/plant.controller')


module.exports = (app) => {

    // Create
    app.post('/api/plants/new', PlantController.addPlant)
    // Read all
    app.get('/api/plants', PlantController.allPlants)
    // Read one
    app.get('/api/plant/:id', PlantController.onePlant)
    // Update one
    app.put('/api/plant/:id', PlantController.updatePlant)
    // Delete one
    app.delete('/api/plant/:id', PlantController.deletePlant)
}