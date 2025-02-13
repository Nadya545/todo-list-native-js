export function createInput({
  text = "",
  className = "",
  size = "medium",
  color = "input_modal",
}) {
  const inputElement = document.createElement("input");
  inputElement.className = className;
  inputElement.value = text;
  inputElement.setAttribute("data-size", size);
  inputElement.setAttribute("data-color", color);
  return inputElement;
}
