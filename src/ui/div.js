export function createDiv(text = "", className = "") {
  const divElement = document.createElement("div");
  divElement.className = className;
  divElement.textContent = text;
  return divElement;
}
