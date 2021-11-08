import { deleteContact } from "../deleteContact";
export function addDeleteListener() {
  const dltButtons = document.querySelectorAll(".delete");
  dltButtons.forEach(b => {
    b.addEventListener("click", deleteContact);
  });
}
