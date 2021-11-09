import axios from "axios";
export async function deleteContact(e) {
  const btn = e.target.closest(".delete");
  const id = btn.dataset.id;
  if (!isNaN(id)) {
    console.log("a number");
    const res = await axios.delete(`http://localhost:3000/api/persons/${+id}`); // no need for res
  } else {
    // on new generated ids, id is not a number
    console.log(id);
    await axios.delete(`http://localhost:3000/api/persons/${id}`); // no need for res // const res =
  }
  return e.target.closest(".person").remove(); // return
}
