import { deleteContact } from "../handlers/deleteContact.js";
import { addContact } from "../handlers/addContact.js";
export function addDeleteListener() {
  const dltButtons = document.querySelectorAll(".delete");
  dltButtons.forEach(b => {
    b.addEventListener("click", deleteContact);
  });
}

export function addAddListener() {
  const nameInp = document.querySelector(".name-input");
  const numInp = document.querySelector(".num-input");
  const addButtons = document.querySelector(".add-btn");
  addButtons.addEventListener("click", addContact);
  nameInp.addEventListener("keypress", keyEvent => {
    if (keyEvent.key === "Enter") {
      addContact();
    }
  });
  numInp.addEventListener("keypress", keyEvent => {
    if (keyEvent.key === "Enter") {
      addContact();
    }
  });
}
