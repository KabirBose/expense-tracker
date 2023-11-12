const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/expenses", (req, res) => {
  res.render("expenses");
});

module.exports = router;
