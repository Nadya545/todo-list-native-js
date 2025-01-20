export function createDiv(text = "", className = "") {
  const lineDiv = document.createElement("div");
  lineDiv.className = className;
  lineDiv.textContent = text;
  return lineDiv;
}

export function createButton(text = "", className = "") {
  const inputElement = document.createElement("button");
  inputElement.className = className;
  inputElement.textContent = text;
  return inputElement;
}
