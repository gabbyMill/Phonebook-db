import axios from "axios";
import createElement from "../helpers/createElement";
import { addDeleteListener } from "../listeners/addListeners";
export async function addContact() {
  // value: "value add",
  const name = document.querySelector(".name-input").value;
  const number = document.querySelector(".num-input").value;
  const body = {
    name,
    number,
  };
  const res = await axios.post(
    `https://gm-contacts.herokuapp.com/api/persons`,
    body
  );
  // seperate this block of code into a function named "make person"
  const nameEl = createElement("td", ["p-name"], res.data.name);
  const numEl = createElement("td", ["p-num"], res.data.number);
  const dltBtn = createElement("button", ["delete"], "Delete", {
    "data-id": res.data.id,
  });
  const pDiv = createElement("div", ["person"], null, null, [
    nameEl,
    numEl,
    dltBtn,
  ]);
  document.querySelector(".t-body").prepend(pDiv);
  addDeleteListener();
}
