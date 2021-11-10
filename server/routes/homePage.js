const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const { Person } = require("../../models/Person.js");

// no path redirects here
// can be deleted
router.get("/", async (req, res) => {
  // forgot to change this to get from actual db
  // const dummydb = require("../lib/dummydb.js");
  // res.json(dummydb);
  const response = await Person.find({});
  res.json(response);
});

module.exports = router;

// there is a problem
// the requests get lost or something...
// it takes too much time maybe ?
// they cause a timeout ?
