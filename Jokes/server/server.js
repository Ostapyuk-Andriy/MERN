const express = require("express")
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))


require('./config/mongoose.config')

const Routes = require('./routes/jokes.routes')
Routes(app)


app.listen(port, () => console.log(`Welcome to the Death Star! you are on bridge port: ${port}`))