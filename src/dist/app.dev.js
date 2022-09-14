"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var path = require('path');

var hbs = require('hbs');

var staticPath = path.join(__dirname, "../public");
var templetePath = path.join(__dirname, "../templetes/views");
var partials_path = path.join(__dirname, "../templetes/partials");
app.set('view engine', 'hbs'); // app.set("views", "../views")

app.set("views", templetePath);
hbs.registerPartials(partials_path);
app.use(express["static"](staticPath));
app.get("/", function (req, res) {
  res.render("index");
});
app.get('/about', function (req, res) {
  res.render("about");
});
app.get('/wheather', function (req, res) {
  res.render("wheather");
});
app.get('*', function (req, res) {
  res.render("for", {
    errmsg: "OOPS! Page Not Found"
  });
});
app.listen(port, function () {
  console.log("server is listinig on localhost 3000");
});