// these are routes that can be reached to perform CRUD operations

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
    await Expense.create({ name, price, description });
    res.redirect("/expenses");
  } catch (error) {
    res.json({ error }).status(500);
  }
});

// delete route
router.delete("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByIdAndDelete(id);
    res
      .json({
        data: expense,
        message: "this document has been successfully deleted",
        success: true,
      })
      .status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
});

// update route
router.patch("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const expense = await Expense.findByIdAndUpdate(id, req.body);
    res
      .json({
        data: expense,
        success: true,
      })
      .status(200);
  } catch (error) {
    res.json({ error }).status(500);
  }
});

module.exports = router;
