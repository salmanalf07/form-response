require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var Cookies = require("cookies");
var logger = require("morgan");
var session = require("express-session");
var flash = require("connect-flash");

var db = require("./database/database");
// var syncData = require("./app/quistionnaire_soal/model");

var homeRouter = require("./app/home/router");
var respondenRouter = require("./app/responden/router");
var authRouter = require("./app/auth/router");
var auzeRouter = require("./app/authAzure/router");
var userRouter = require("./app/user/router");
var eventQuistionnaire = require("./app/quistionnaire/router");
var ruanganRouter = require("./app/ruangan/router");
var questionRouter = require("./app/quistionnaire_soal/router");
var reportQuistionnaire = require("./app/report/router");

var app = express();

// view engine setup
app.use(
  session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // set this to true on production
    },
  })
);
app.use(flash());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//connect database
try {
  db.authenticate();
  console.log("Koneksi Berhasil!");
  //untuk migrations
  // syncData.sync();
} catch (error) {
  console.log(error);
}

app.use("/", authRouter);
app.use("/auth", auzeRouter);
app.use("/dashboard", homeRouter);
app.use("/responden", respondenRouter);
app.use("/user", userRouter);
app.use("/ruangan", ruanganRouter);
app.use("/eventQuistionnaire", eventQuistionnaire);
app.use("/question", questionRouter);
app.use("/reportQuistionnaire", reportQuistionnaire);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
