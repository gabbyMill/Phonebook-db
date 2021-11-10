const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const cors = require("cors");

morgan.token("body", req => JSON.stringify(req.body));

const homePage = require("./routes/homePage.js");
const infoPage = require("./routes/infoPage.js");
const apiRoute = require("./routes/apiRoute.js");
const errorHandler = require("./middleware/errorHandler.js");

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use("/", homePage);
app.use("/info", infoPage);
app.use("/api", apiRoute);
app.use(errorHandler);

app.use("/", express.static(path.resolve("./dist"))); // serve main path as static dir
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("./dist/index.html"));
});

module.exports = app;
