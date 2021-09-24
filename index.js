/*
* File entry point
*/

const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

const routesModule = require("./app/routes/customer.routes");

// parse requests of content-type: application/json
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Kehinde's application."});
});

routesModule(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});