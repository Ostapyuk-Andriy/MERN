const mongoose = require('mongoose')

const database = 'songDBFeb23'

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Established a Database CommLink Sync with the RebelBase: ${database}`))
.catch(err => console.log('Something is wring!!!', err))