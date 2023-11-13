// third-party modules
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");

const DB = require("../config/db");

// imported route handlers for api and ejs pages
const pagesRouter = require("../routes/pages");
const apiRouter = require("../routes/api");

const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/javascript", express.static(__dirname + "public/javascript"));
app.set("view engine", "ejs");

// connect to MongoDB
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection error"));
mongoDB.once("open", () => {
  console.log("MongoDB Connected");
});

// route handlers
app.use("/", pagesRouter);
app.use("/api", apiRouter);

// listen to server
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
