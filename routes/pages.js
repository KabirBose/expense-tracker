const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    console.log(expenses);
    res.render("expenses");
  } catch (err) {
    console.log(err);
    res.send("Could not load data from DB");
  }
});

module.exports = router;
