import axios from "axios";
export async function deleteContact(e) {
  const btn = e.target.closest(".delete");
  const id = btn.dataset.id;
  if (!isNaN(id)) {
    await axios.delete(`http://localhost:3000/api/persons/${+id}`);
  } else {
    // on new generated ids, id is not a number
    await axios.delete(`http://localhost:3000/api/persons/${id}`);
  }
  return e.target.closest(".person").remove(); // return
}
