/*
* File entry point
*/

const express = require("express");
// const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

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
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});