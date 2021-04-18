const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;
const app = express();
const http = require("http").Server(app);
const { window } = new JSDOM(`...`);

http.listen(8085, function () {
  console.log("listening on localhost:8085");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(logger('dev'));
//test
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/css", express.static(__dirname + "/public/css"));

app.use(express.static(path.join(__dirname, "public")));

//app.use('/', routes);
//app.use('/users', users);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/products.html", function (req, res) {
  res.sendFile(__dirname + "/products.html");
});

app.get("/cart.html", function (req, res) {
  res.sendFile(__dirname + "/cart.html");
});

app.get("/register.html", function (req, res) {
  res.sendFile(__dirname + "/register.html");
});

app.get("/login.html", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

let db = new sqlite3.Database("db/logindata.db", (err) => {
  if (err) {
    console.error(err.message);
    console.error(
      "Make sure the db directory is present in the parent directory"
    );
  } else console.log("Connected to the userdata database.");
});
