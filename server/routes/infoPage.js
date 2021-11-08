const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const dummydb = require("../lib/dummydb.js");
  const str1 = `Phonebook has info for ${dummydb.getLength()} people`;
  const nl = "\n";
  const str2 = Date();
  res.send(str1 + nl + str2);
});

module.exports = router;
