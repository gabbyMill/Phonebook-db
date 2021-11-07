const express = require("express");
const router = express.Router();
const dummydb = require("../lib/dummydb.js");

router.get("/persons/:id", (req, res) => {
  const { id } = req.params;
  res.json(dummydb.getSingle(+id));
});
router.get("/persons", (req, res) => {
  console.log("persons");
  res.json(dummydb.DUMMY);
});

module.exports = router;
