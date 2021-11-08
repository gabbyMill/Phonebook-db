const express = require("express");
const router = express.Router();
const dummydb = require("../lib/dummydb.js");
const uuid = require("uuid");

router.delete("/persons/:id", (req, res) => {
  console.log("deleting");
  const { id } = req.params;
  if (!dummydb.getSingle(+id)) {
    throw { status: 400, message: "Bad id" };
  }
  dummydb.deleteSingle(+id);
  res.sendStatus(204);
});

router.get("/persons/:id", (req, res) => {
  const { id } = req.params;
  if (!dummydb.getSingle(+id)) {
    throw { status: 400, message: "Bad id" };
  }
  if (+id) {
    res.json(dummydb.getSingle(+id));
  } else {
  }
});

router.get("/persons", (req, res) => {
  console.log("in persons");
  res.json(dummydb.DUMMY);
});

router.post("/persons", (req, res) => {
  const id = uuid.v4();
  const name = req.body.name;
  const number = req.body.number;
  if (!number) {
    throw { message: "Missing number", status: 400 };
  }
  if (!name) {
    throw { message: "Missing name", status: 400 };
  }
  if (isNaN(req.body.number.split("-")) || !req.body.number.includes("-")) {
    throw { message: "Not a number", status: 400 };
  }
  // else if ( !req.body.number.includes("-")) {
  //   throw { message: "Number too short", status: 400 };
  // }
  if (number.split("-")[1].length < 7) {
    throw { message: "Number too short", status: 400 };
  }
  if (isNaN(number.split("-")[0]) || isNaN(number.split("-")[1])) {
    throw { message: "Not a number", status: 400 };
  }

  const obj = {
    id,
    name,
    number,
  };
  dummydb.DUMMY.push(obj);
  res.json(obj);
});

module.exports = router;
