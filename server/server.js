require("dotenv").config();
const app = require("./app.js");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

console.log("connecting to", url);

mongoose
  .connect(url)
  .then(result => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
