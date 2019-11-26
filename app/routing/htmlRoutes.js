var path = require("path");

module.exports = function (app) {
  app.get("/survey.html", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
    console.log("Successfully connected to survey.");
  });

  app.get("/", function (res, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
    console.log("Successfully connected to home.");
  });
}