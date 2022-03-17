const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "contact-me.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "about.html"));
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "404.html"));
});

app.listen(8080);
