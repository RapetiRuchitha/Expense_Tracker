const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

router.get("/", async (req, res) => {
  const expenses = await Expense.find({ userId: req.user.id }).sort({ date: -1 });
  res.json(expenses);
});

router.post("/", async (req, res) => {
  const newExpense = new Expense({ ...req.body, userId: req.user.id });
  await newExpense.save();
  res.json(newExpense);
});

router.delete("/:id", async (req, res) => {
  await Expense.deleteOne({ _id: req.params.id, userId: req.user.id });
  res.json({ success: true });
});

module.exports = router; // ✅ MANDATORY
