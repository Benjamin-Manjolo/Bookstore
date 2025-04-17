// app.js
const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");

// Routes
app.use("/books", bookRoutes);
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Database connection (example)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
