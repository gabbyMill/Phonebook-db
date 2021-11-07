const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const dummydb = require("../lib/dummydb.js");

  res.send(`Phonebook has ${dummydb.length} people.
  ${Date()}`);
});

module.exports = router;
