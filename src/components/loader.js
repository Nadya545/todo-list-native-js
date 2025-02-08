import { createDiv } from "../utils/сonstructorElement";

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
