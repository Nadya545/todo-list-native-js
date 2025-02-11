export function createInput(text = "", className = "", size = "medium") {
  const inputElement = document.createElement("input");
  inputElement.className = className;
  inputElement.value = text;
  inputElement.setAttribute("data-size", size);
  return inputElement;
}
