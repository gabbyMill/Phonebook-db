require("dotenv").config(); // is this the right place for this ?
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const cors = require("cors");

morgan.token("body", req => JSON.stringify(req.body));

const db = require("./routes/homePage.js");
const infoPage = require("./routes/infoPage.js");
const apiRoute = require("./routes/apiRoute.js");
const errorHandler = require("./middleware/errorHandler.js");

app.use(cors());
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);

app.use("/db", db);
app.use("/info", infoPage);
app.use("/api", apiRoute);
app.use(errorHandler);

app.use("/", express.static(path.resolve("./dist"))); // serve main path as static dir
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("./dist/index.html"));
});

module.exports = app;

// ## MONGO ## \\
// const mongoose = require("mongoose");

// const password = process.argv[2];

// const url = `mongodb+srv://fullstack:${password}@cluster0.t49wa.mongodb.net/Phonebook?retryWrites=true&w=majority`;

// mongoose.connect(url);

// const contactSchema = new mongoose.Schema({
//   name: String,
//   number: String,
//   id: String,
// });

// contactSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });

// const Person = mongoose.model("Person", contactSchema);

// async function addContact() {
//   const res = await person.save();
//   console.log(`added ${res.name} number ${res.number} to phonebook`);
//   mongoose.connection.close();
// }

// async function findContact() {
//   const res = await Person.find({});
//   console.log("phonebook:");
//   res.forEach(note => {
//     console.log(`${note.name} ${note.number}`);
//   });
//   mongoose.connection.close();
// }

//\\ ^^ ## MONGO ## ^^ \\//
