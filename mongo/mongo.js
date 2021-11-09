const mongoose = require("mongoose");

// copy pasted from fullstack open \\

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack:${password}@cluster0.t49wa.mongodb.net/Phonebook?retryWrites=true&w=majority`;

mongoose.connect(url);

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

const note = new Note({
  content: "HTML is Easy",
  date: new Date(),
  important: true,
});

// note.save().then(result => {
//   console.log(result);
//   console.log("note saved!");
//   mongoose.connection.close();
// });

(async function wrapper() {
  const res = await Note.find({});
  res.forEach(note => {
    console.log(note);
  });
  mongoose.connection.close();
})();

// copy pasted from fullstack open \\
