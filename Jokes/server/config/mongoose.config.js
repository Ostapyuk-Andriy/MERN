const mongoose = require('mongoose')

const database = 'jokeDBFeb23'

mongoose.connect(`mongodb://127.0.0.1/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established a Database CommLink Sync with the RebelBase: ${database}`))
.catch(err => console.log('Something is wring!!!', err))