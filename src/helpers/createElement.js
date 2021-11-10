export default function createElement(
  tagName,
  classes = [],
  text,
  attributes = {},
  children = []
) {
  const el = document.createElement(tagName);
  // Children
  for (const child of children) {
    el.append(child);
  }
  // Classes
  for (const cls of classes) {
    el.classList.add(cls);
  }
  // Attributes
  for (const attr in attributes) {
    el.setAttribute(attr, attributes[attr]);
  }
  if (text != undefined) el.innerText = text;
  return el;
}
