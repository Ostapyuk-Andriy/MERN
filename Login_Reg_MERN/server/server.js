// IMPORT PACKAGES
const express = require('express');
const cookies = require("cookie-parser");
const cors = require('cors')
const app = express();
const port = 8000;
// const jwt = require("jsonwebtoken");
require('dotenv').config()


// CONFIG EXPRESS
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookies());


// CONFIG MONGOOSE
require("./config/mongoose.config");
// ROUTES
require("./routes/user.routes")(app)

// PORT
app.listen(port, () => console.log(`Please report to the bridge: ${port}`));