const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const { Person } = require("../../models/Person.js");

router.get("/", async (req, res) => {
  const response = await Person.find({});
  res.json(response);
});

module.exports = router;
