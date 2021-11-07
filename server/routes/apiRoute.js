const express = require("express");
const router = express.Router();
const dummydb = require("../lib/dummydb.js");

router.get("/persons/:id", (req, res) => {
  const { id } = req.params;
  res.json(dummydb.getSingle(+id));
});

module.exports = router;
