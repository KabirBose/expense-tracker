const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

router.get("/expenses", async (req, res) => {
  const expenses = await Expense.find();
  res.json({
    data: expenses,
    dataLen: expenses.length,
  });
});

module.exports = router;
