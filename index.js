
// importations
const express = require('express');
let logger = require("morgan");
const mongoose = require('mongoose');
const config = require("./config/config.json");
const bodyParser = require ('body-parser');
var cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || config.port;

// Instantiations
const app = express()

//Connexion
mongoose.connect(config.datasource, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then(() => {
    console.log("Connected to the database");
})
.catch(() => {
    console.log("Connection failed!");
});




app.use(logger("dev"));
app.use (bodyParser.json ())
app.set('view engine', 'ejs'); 
app.use(cors());

// Routes
const postRoute = require("./routes/postRoute")
const commentRoute = require("./routes/commentRoute");
const themeRoute = require("./routes/themeRoute");
const userRoute = require("./routes/userRoute");
const forumRoute = require("./routes/forumRoute");

app.use(postRoute)
app.use(commentRoute);
app.use(themeRoute);
app.use(userRoute);
app.use(forumRoute);

// démarage du serveur
app.listen(PORT, function () {
        console.log(`server running at : `+PORT);
    });