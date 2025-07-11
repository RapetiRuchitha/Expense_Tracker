const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const authMiddleware = require("./middleware/authMiddleware");

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Public routes
app.use("/api/auth", require("./routes/auth"));

// Protected routes
app.use("/api/expenses", authMiddleware, require("./routes/expenses"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server started on port", PORT));
