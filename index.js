const express = require("express");
const path = require("path");
const app = express();

// Logger
const myLogger = function (req, res, next) {
  console.log("Request IP: " + req.ip);
  console.log("Request Method: " + req.method);
  console.log("Request date: " + new Date());

  next();
};

app.use(myLogger);
// Serve static pages from the public file
app.use(express.static("public"));

// Serve specific files for specific routes
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public", "index.html"));
// });

// app.get("/contact", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public", "contact-me.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "/public", "about.html"));
// });

// Serve 404.html for all routes that do not exists
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public", "404.html"));
});

app.listen(8080);
