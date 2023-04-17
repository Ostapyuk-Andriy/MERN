const JokeController = require('../controllers/jokes.controller')

module.exports = (app) => {



    app.post("/api/jokes/new", JokeController.addJoke);

    app.get("/api/jokes/:_id", JokeController.oneJoke);

    app.get("/api/jokes", JokeController.allJokes);

    app.get("/api/jokes/random", JokeController.randomJoke)

    app.put("/api/jokes/update/:_id", JokeController.updateJoke);

    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
}