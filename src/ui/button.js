export function createButton({
  text = "",
  className = "",
  size = "medium",
  color = "primary",
  onClick,
}) {
  const buttonElement = document.createElement("button");
  buttonElement.className = className;
  buttonElement.textContent = text;
  buttonElement.setAttribute("data-size", size);
  buttonElement.setAttribute("data-color", color);
  buttonElement.addEventListener("click", onClick);
  return buttonElement;
}
