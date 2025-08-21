import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const app = express();

// Middleware
app.use(express.json());

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
