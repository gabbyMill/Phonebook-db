const express = require("express");
const app = express();

const homePage = require("./routes/homePage.js");
const infoPage = require("./routes/infoPage.js");
const apiRoute = require("./routes/apiRoute.js");
const errorHandler = require("./middleware/errorHandler.js");

// cors ?
app.use(express.json());

app.use("/", homePage);
app.use("/info", infoPage);
app.use("/api", apiRoute);
app.use(errorHandler);

module.exports = app;
