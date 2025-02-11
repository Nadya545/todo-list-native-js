import { createDiv } from "../../ui/div";

export function createLoader() {
  const loader = createDiv("", "loader");
  document.body.appendChild(loader);
  return loader;
}

export function hideLoader(loader) {
  if (loader) {
    document.body.removeChild(loader);
  }
}
