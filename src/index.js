import "./style.css";
import axios from "axios";
import createElement from "./helpers/createElement.js";
import { addAddListener, addDeleteListener } from "./listeners/addListeners";

const head = document.querySelector(".t-head");
const tBody = document.querySelector(".t-body");
(async function paintHomePage() {
  const res = await axios.get(`http://localhost:3000/db`);
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
  const addBtn = createElement("button", ["add-btn"], "Add");
  const headRow = createElement("tr", ["head-row"], null, null, [
    inputName,
    inputNum,
    addBtn,
  ]);
  head.append(headRow);
  for (const obj of res.data) {
    const name = createElement("td", ["p-name"], ` ${obj.name}`);
    const number = createElement("td", ["p-num"], `${obj.number}`);
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
