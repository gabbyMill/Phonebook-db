import axios from "axios";
export async function deleteContact(e) {
  const btn = e.target.closest(".delete");
  const id = btn.dataset.id;
  if (!isNaN(id)) {
    await axios.delete(`https://gm-contacts.herokuapp.com/api/persons/${+id}`);
  } else {
    // on new generated ids, id is not a number
    await axios.delete(`https://gm-contacts.herokuapp.com/api/persons/${id}`);
  }
  return e.target.closest(".person").remove(); // return
}
