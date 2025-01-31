export function createLoader() {
  const loader = document.querySelector(".loader");
  document.body.appendChild(loader);
}

export function hideLoader() {
  const loader = document.querySelector(".loader");
  document.body.removeChild(loader);
}
