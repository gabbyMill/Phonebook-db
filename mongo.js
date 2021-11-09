const mongoose = require("mongoose");

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.t49wa.mongodb.net/Phonebook?retryWrites=true&w=majority`;

mongoose.connect(url);

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: String,
});

const Person = mongoose.model("Person", contactSchema);

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
  // id: 1, // id is generated by mongo automatically
});

if (process.argv.length < 4) {
  console.log(`Fetching phonebook`);
  findContact();
} else {
  (async function addContact() {
    const res = await person.save();
    console.log(`added ${res.name} number ${res.number} to phonebook`);
    mongoose.connection.close();
  })();
}

async function findContact() {
  const res = await Person.find({});
  console.log("phonebook:");
  res.forEach(note => {
    console.log(`${note.name} ${note.number}`);
  });
  mongoose.connection.close();
}
