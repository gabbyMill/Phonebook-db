const express = require("express");
const morgan = require("morgan");
const app = express();

morgan.token("body", req => JSON.stringify(req.body));

const homePage = require("./routes/homePage.js");
const infoPage = require("./routes/infoPage.js");
const apiRoute = require("./routes/apiRoute.js");
const errorHandler = require("./middleware/errorHandler.js");

// cors ?
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use("/", homePage);
app.use("/info", infoPage);
app.use("/api", apiRoute);
app.use(errorHandler);

module.exports = app;
