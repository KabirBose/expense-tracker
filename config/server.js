// modules
const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

const DB = require("../config/db");
const pagesRouter = require("../routes/pages");
const apiRouter = require("../routes/api");

const app = express();
const port = 3000;

// middleware
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.set("view engine", "ejs");

// db
// connect to DB
mongoose.connect(DB.URI);
let mongoDB = mongoose.connection;
mongoDB.on("error", console.error.bind(console, "Connection error"));
mongoDB.once("open", () => {
  console.log("MongoDB Connected");
});

// routes
app.use("/", pagesRouter);
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
