import axios from "axios";
export async function deleteContact(e) {
  const btn = e.target.closest(".delete");
  const id = btn.dataset.id;
  if (!isNaN(id)) {
    const res = await axios.delete(
      `https://gm-contacts.herokuapp.com/api/persons/${+id}`
    ); // no need for res
  } else {
    // on new generated ids, id is not a number
    await axios.delete(`https://gm-contacts.herokuapp.com/api/persons/${id}`); // no need for res // const res =
  }
  return e.target.closest(".person").remove(); // return
}
