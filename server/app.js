const express = require("express");
const app = express();
const homePage = require("./routes/homePage.js");
const infoPage = require("./routes/infoPage.js");

app.use("/", homePage);
app.use("/info", infoPage);

module.exports = app;
