const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { username, contact, password, confirmPassword } = req.body;

  if (!username || !contact || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const existingUser = await User.findOne({ contact });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    username,
    contact,
    password: hashedPassword,
  });

  await newUser.save();

  res.status(201).json({ message: "User registered successfully" });
});


// Login route
router.post("/login", async (req, res) => {
  const { contact, password } = req.body;
  console.log("Login attempt:", contact, password);

  const user = await User.findOne({ contact });
  if (!user) {
    console.log("User not found");
    return res.status(404).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log("Invalid credentials");
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  console.log("Login successful");
  res.status(200).json({ message: "Login successful", token });
});


module.exports = router;
