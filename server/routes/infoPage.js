const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const dummydb = require("../lib/dummydb.js");
  const msg = `Phonebook has info for ${dummydb.getLength()} people\n${Date()}`;
  res.send(msg);
});

module.exports = router;
