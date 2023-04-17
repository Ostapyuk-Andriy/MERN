const SongController = require('../controllers/song.controllers')


module.exports = (app) => {

    // Test
    app.get("/api/test", SongController.testApi);
    // Create
    app.post("/api/songs/new", SongController.addSong);
    // Read one
    app.get("/api/songs/:id", SongController.oneSong);
    // Read all
    app.get("/api/songs", SongController.allSongs);
    // Update
    app.put("/api/songs/update/:id", SongController.updateSong);
    // Delete
    app.delete("/api/songs/delete/:id", SongController.deleteSong);
}