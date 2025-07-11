const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  amount: Number,
  category: String,
  date: Date,
  description: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model("Expense", expenseSchema);