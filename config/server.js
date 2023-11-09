// modules
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 3000;

// middleware
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
