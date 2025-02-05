export function createDiv(text = "", className = "") {
  const divElement = document.createElement("div");
  divElement.className = className;
  divElement.textContent = text;
  return divElement;
}

export function createButton(
  text = "",
  className = "",
  size = "medium",
  color = "primary"
) {
  const buttonElement = document.createElement("button");
  buttonElement.className = className;
  buttonElement.textContent = text;
  buttonElement.setAttribute("data-size", size);
  buttonElement.setAttribute("data-color", color);
  return buttonElement;
}

export function createInput(text = "", className = "", size = "medium") {
  const inputElement = document.createElement("input");
  inputElement.className = className;
  inputElement.value = text;
  inputElement.setAttribute("data-size", size);
  return inputElement;
}
