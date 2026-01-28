const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About us page");
});

app.get("/contact", (req, res) => {
  res.send("Contact us page");
});

app.listen(3000);
