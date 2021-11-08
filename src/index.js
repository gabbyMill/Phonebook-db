import "./style.css";
import axios from "axios";
import createElement from "./helpers/createElement.js";

// const container = document.querySelector(".container");
const phonebook = document.querySelector(".phonebook");
const head = document.querySelector(".t-head");
const tBody = document.querySelector(".t-body");

(async function paintHomePage() {
  const res = await axios.get(`http://localhost:3000/`);
  console.log(res.data.DUMMY);
  head.textContent = "";
  tBody.textContent = "";
  const headRow = createElement("tr", ["head-row"]);
  const headName = createElement("th", ["head-name"], "Name");
  const headNum = createElement("th", ["head-num"], "Number");
  headRow.append(headName, headNum);
  head.append(headRow);
  // phonebook.append(head);
  for (const obj of res.data.DUMMY) {
    const name = createElement("td", ["p-name"], ` ${obj.name}`); // Name:
    const number = createElement("td", ["p-num"], `${obj.number}`); // Number:
    const person = createElement("td", ["person"], null, null, [name, number]);
    tBody.append(person);
  }
})();

// document.body.addEventListener("click", paintHomePage);
