export function createDiv(
  text = "",
  className = "",
  size = "medium",
  color = "primary",
  onClick
) {
  const divElement = document.createElement("div");
  divElement.className = className;
  divElement.textContent = text;
  divElement.setAttribute("data-size", size);
  divElement.setAttribute("data-color", color);
  divElement.addEventListener("click", onClick);
  return divElement;
}
