const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
import wrapper from "../../mongo.js";
wrapper();
// no path redirects here
// can be deleted
router.get("/", async (req, res) => {
  const result = await Person.find({});
  res.json(result);
});

module.exports = router;
