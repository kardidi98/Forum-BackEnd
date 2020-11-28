const config = require("./config/config.json")

// importations
const express = require('express')
let logger = require("morgan")
// Instantiations
const app = express()

const bodyParser = require ('body-parser');
app.use(logger("dev"));
app.use (bodyParser.json ())
// Routes
const postRoute = require("./routes/postRoute")
const commentRoute = require("./routes/commentRoute");


app.use(postRoute)
app.use(commentRoute);

// démarage du serveur
app.listen(config.port, function () {
        console.log(`server running at http://localhost:`+config.port);
    });