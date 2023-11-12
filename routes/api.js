const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

// get route
router.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res
      .json({
        data: expenses,
        dataLen: expenses.length,
        success: true,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        error,
      })
      .status(500);
  }
});

// post route
router.post("/expenses", async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const expense = await Expense.create({ name, price, description });
    res
      .json({
        data: expense,
        success: true,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        error,
      })
      .status(500);
  }
});

// router.delete("/expenses", async (req, res) => {
//   const id = req.body;
//   console.log(id);
//   res.json({ id });
//   //   const expense = await Expense.findByIdAndDelete();
// });

module.exports = router;
