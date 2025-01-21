let modal = document.querySelector("#myModal");
let buttonModal = document.querySelector("#myBtn");
let spanModal = document.querySelector(".close");

buttonModal.addEventListener("click", () => {
  modal.style.display = "block";
});
spanModal.addEventListener("click", () => {
  modal.style.display = "none";
});
