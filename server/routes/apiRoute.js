const express = require("express");
const router = express.Router();
const dummydb = require("../lib/dummydb.js");
const uuid = require("uuid");

router.delete("/persons/:id", (req, res) => {
  const { id } = req.params;
  if (!isNaN(id)) {
    if (!dummydb.getSingle(+id)) {
      throw { status: 400, message: "Bad id" };
    }
    dummydb.deleteSingle(+id);
  } else {
    // id is not a number hence no prefix '+'
    if (!dummydb.getSingle(id)) {
      throw { status: 400, message: "Bad id" };
    } else {
      dummydb.deleteSingle(id);
    }
  }
  res.sendStatus(204);
});

router.get("/persons/:id", (req, res) => {
  const { id } = req.params;
  if (!dummydb.getSingle(+id)) {
    throw { status: 400, message: "Bad id" };
  }
  if (+id) {
    res.json(dummydb.getSingle(+id));
  }
});

router.get("/persons", async (req, res) => {
  // res.json(dummydb.DUMMY);
  const result = await Person.find({});
  res.json(result);
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
  if (number.length > 15) {
    throw { message: "Number too long", status: 400 };
  }
  if (!req.body.number.includes("-")) {
    // || isNaN(req.body.number.split("-"))
    throw { message: "Not a number", status: 400 };
  }
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
