import axios from "axios";
export async function deleteContact(e) {
  const btn = e.target.closest(".delete");
  const id = btn.dataset.id;
  console.log(id);
  const res = await axios.delete(`http://localhost:3000/api/persons/${+id}`);
  console.log(res);
  return e.target.closest(".person").remove(); // return
}
