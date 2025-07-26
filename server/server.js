require("dotenv").config(); // 🟡 Gusoma .env variables mbere ya byose

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth");
// check .env 
console.log("🔐 JWT_SECRET =", process.env.JWT_SECRET);
console.log("🌐 MONGO_URL =", process.env.MONGO_URL);


const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error(" MongoDB connection error:", err));

// Start server
app.listen(port, () => {
  console.log(` Server running on http://localhost:${port}`);
});
