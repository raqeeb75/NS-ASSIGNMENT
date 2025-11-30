const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Home Page" });
});

app.get("/about", (req, res) => {
  res.json({ message: "About Page" });
});

app.get("/user/:id", (req, res) => {
  res.json({ userId: req.params.id });
});

app.listen(3000, () => console.log("Server running"));
