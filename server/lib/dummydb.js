let DUMMY = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

function init() {
  DUMMY = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523",
    },
    {
      id: 3,
      name: "Dan Abramov",
      number: "12-43-234345",
    },
    {
      id: 4,
      name: "Mary Poppendieck",
      number: "39-23-6423122",
    },
  ];
}

function getAll() {
  return DUMMY;
}

function addSingle(obj) {
  return DUMMY.push(obj);
}

function getLength() {
  return DUMMY.length;
}

function getSingle(id) {
  for (const obj of DUMMY) {
    if (obj.id === id) return obj;
  }
  return { error: { status: 400, message: "Bad id" } };
}

function deleteSingle(id) {
  for (let i = 0; i < DUMMY.length; i++) {
    if (DUMMY[i].id === id) {
      DUMMY.splice(i, 1);
    }
  }
}

module.exports = {
  DUMMY,
  init,
  getAll,
  addSingle,
  getSingle,
  getLength,
  deleteSingle,
};
