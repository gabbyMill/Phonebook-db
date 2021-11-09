const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

// no path redirects here
// can be deleted
router.get("/", (req, res) => {
  const dummydb = require("../lib/dummydb.js");
  res.json(dummydb);
});

module.exports = router;
