const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "/public", "index.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;
          res.end(data);
        }
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "/public", "contact-me.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;
          res.end(data);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "/public", "about.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;
          res.end(data);
        }
      );
    } else {
      fs.readFile(
        path.join(__dirname, "/public", "404.html"),
        "utf8",
        (err, data) => {
          if (err) throw err;
          res.end(data);
        }
      );
    }
  })
  .listen(8080);
