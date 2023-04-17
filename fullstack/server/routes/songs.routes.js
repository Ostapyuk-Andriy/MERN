const SongController = require('../controllers/song.controller')


module.exports = (app) => {

    // Create
    app.post('/api/songs/new', SongController.addSong)
    // Read all
    app.get('/api/songs', SongController.allSongs)
    // Read one
    app.get('/api/song/:id', SongController.oneSong)
    // Update one
    app.put('/api/song/:id', SongController.updateSong)
    // Delete one
    app.delete('/api/song/:id', SongController.deleteSong)
}