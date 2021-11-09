const mongoose = require("mongoose");

// const url = `mongodb+srv://fullstack:${``}@cluster0.t49wa.mongodb.net/Phonebook?retryWrites=true&w=majority`;
const url = process.env.MONGODB_URI;

console.log("connecting to", url);

// mongoose.connect(url);

mongoose
  .connect(url)
  .then(result => {
    console.log("connected to MongoDB");
  })
  .catch(error => {
    console.log("error connecting to MongoDB:", error.message);
  });

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: String,
});

const Person = mongoose.model("Person", contactSchema);

// this has to be after Person for it to work
contactSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = {
  Person,
};

// contactSchema,
// mongoose,
