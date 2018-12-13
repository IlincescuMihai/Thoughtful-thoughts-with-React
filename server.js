/* eslint-disable */
var express = require("express");
var path = require("path");

var port = process.env.PORT || 3000;
var app = express();
const index = path.join(__dirname, "build", "index.html");
app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (_req, res) => {
  res.sendFile(index);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started port: ${port}`);
  }
});
