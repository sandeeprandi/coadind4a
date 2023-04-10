const express = require("express");
const app = express();
app.get("/about", (request, response) => {
  response.send("About page");
});
app.get("/", (request, response) => {
  response.send("Home page");
});
module.exports = app;
