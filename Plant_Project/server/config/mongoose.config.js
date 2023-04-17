const mongoose = require('mongoose')

const database = "plant23"

mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established a connectiopn to the server db: ${database}`))
    .catch(err => console.log("Something is wrong with the server db!", err))