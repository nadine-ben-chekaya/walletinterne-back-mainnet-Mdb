const express = require("express");
const accountRoutes = express.Router();
const User = require("../models/user");

// GET route for the home page
accountRoutes.get("/account/list", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    console.error("Error fetching user data:", err);
    res.status(500).json({ message: "Error fetching user data" });
  }
});

// POST route for adding a user
accountRoutes.post("/account/addaccount", async (req, res) => {
  console.log("we entered to server api add account");
  try {
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      role: req.body.role,
      pkey: req.body.pkey,
    });
    console.log("req.body f add account", req.body);
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Error saving user data:", err);
    return res.status(500).json({ message: "User not found" });
  }
});

//login
accountRoutes.post("/account/login", async (req, res) => {
  console.log("we entered to server api Login");
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    console.log("Login, user=", user);
    res.status(200).json({
      message: "Login successful",
      username: user.username, // Send the user's name
      role: user.role, // Send the user's role (admin or client)
      pkey: user.pkey,
    });
  } catch (error) {
    res.status(404).json({ message: "User not found" });
  }
});

module.exports = accountRoutes;
