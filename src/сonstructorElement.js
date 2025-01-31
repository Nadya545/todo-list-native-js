export function createDiv(text = "", className = "") {
  const lineDiv = document.createElement("div");
  lineDiv.className = className;
  lineDiv.textContent = text;
  return lineDiv;
}

export function createButton(
  text = "",
  className = "",
  size = "medium",
  color = "primary"
) {
  const inputElement = document.createElement("button");
  inputElement.className = className;
  inputElement.textContent = text;
  inputElement.setAttribute("data-size", size);
  inputElement.setAttribute("data-color", color);
  return inputElement;
}
