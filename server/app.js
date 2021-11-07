const express = require("express");
const app = express();
const homePage = require("./routes/homePage.js");
const infoPage = require("./routes/infoPage.js");
const apiRoute = require("./routes/apiRoute.js");

app.use("/", homePage);
app.use("/info", infoPage);
app.use("/api", apiRoute);

module.exports = app;
