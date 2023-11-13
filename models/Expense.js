const mongoose = require("mongoose");

// schema for an "expense" document
const expenseSchema = new mongoose.Schema({
  // must have a unique name as a string
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // must have a price as a number
  price: {
    type: Number,
    required: true,
  },
  // can have an optional description as a string
  description: String,
});

module.exports = mongoose.model("Expense", expenseSchema);
