import "./style.css";
import axios from "axios";
import createElement from "./helpers/createElement.js";
import { addAddListener, addDeleteListener } from "./listeners/addListeners";

// const container = document.querySelector(".container");
const phonebook = document.querySelector(".phonebook");
const head = document.querySelector(".t-head");
const tBody = document.querySelector(".t-body");

(async function paintHomePage() {
  const res = await axios.get(`https://gm-contacts.herokuapp.com/db`);
  head.textContent = "";
  tBody.textContent = "";
  const inputName = createElement("input", ["name-input"], null, {
    placeholder: "Name",
    type: "text",
  });
  const inputNum = createElement("input", ["num-input"], null, {
    placeholder: "Phone Number",
    type: "text",
  });
  const addBtn = createElement("button", ["add-btn"], "Add"); // value: "value add"
  const headRow = createElement("tr", ["head-row"], null, null, [
    inputName,
    inputNum,
    addBtn,
  ]);
  head.append(headRow);
  console.log(res);
  for (const obj of res.data.DUMMY) {
    const name = createElement("td", ["p-name"], ` ${obj.name}`); // Name:
    const number = createElement("td", ["p-num"], `${obj.number}`); // Number:
    const btn = createElement("button", ["delete"], "Delete", {
      "data-id": obj.id,
    });
    const person = createElement("div", ["person"], null, null, [
      name,
      number,
      btn,
    ]);
    tBody.append(person);
    addDeleteListener();
  }
  addAddListener();
})();
