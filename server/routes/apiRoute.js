const express = require("express");
const router = express.Router();
const dummydb = require("../lib/dummydb.js");
const uuid = require("uuid");
const { Person } = require("../../models/Person.js");

router.delete("/persons/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isNaN(id)) {
      if (!dummydb.getSingle(+id)) {
        throw { status: 400, message: "Bad id" };
      }
      await Person.deleteOne({ _id: id });
      // previously used deleteSingle
    } else {
      // id is not a number hence no prefix '+'
      if (!dummydb.getSingle(id)) {
        throw { status: 400, message: "Bad id" };
      } else {
        await Person.deleteOne({ _id: id });
      }
    }
    res.sendStatus(204);
  } catch (err) {
    next({ status: 400, message: "Bad Id" });
  }
});

router.get("/persons", async (req, res, next) => {
  try {
    const response = await Person.find({});
    res.json(response);
  } catch (err) {
    next(err);
  }
});

router.get("/persons/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // previously used getSingle
    const personData = await Person.findById(id);
    res.json(personData);
  } catch (err) {
    next({ status: 400, message: "Bad Id" });
  }
});

router.post("/persons", async (req, res, next) => {
  try {
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
      throw { message: "Not a number", status: 400 };
    }
    if (number.split("-")[1].length < 7) {
      throw { message: "Number too short", status: 400 };
    }
    if (isNaN(number.split("-")[0]) || isNaN(number.split("-")[1])) {
      throw { message: "Not a number", status: 400 };
    }

    const person = new Person({
      id,
      name,
      number,
    });
    const personData = await person.save();
    res.json(personData);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
