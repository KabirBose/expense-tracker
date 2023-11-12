const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/expenses", (req, res) => {
  res.render("expenses");
});

router.get("/new-expense", (req, res) => {
  res.render("new-expense");
});

router.get("/update-expense", (req, res) => {
  res.render("update-expense");
});

module.exports = router;
