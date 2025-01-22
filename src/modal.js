let buttonModal = document.querySelector("#myBtn");
function createModal(text = "", className = "") {
  const modal = document.createElement("div");
  modal.className = className;

  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.zIndex = "1";
  modal.style.left = "0";
  modal.style.top = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.backgroundColor = "rgba(0,0,0,0.5)";
  modal.style.padding = "20px";
  modal.style.overflow = "auto";

  const modalContent = document.createElement("div");

  modalContent.style.backgroundColor = "white";
  modalContent.style.margin = "15% auto";
  modalContent.style.padding = "20px";
  modalContent.style.border = "1px solid #888";
  modalContent.style.width = "80%";

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times";
  closeButton.style.cursor = "pointer";
  closeButton.style.float = "right";
  closeButton.style.fontSize = "28px";
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const textElement = document.createTextNode(text);

  document.body.appendChild(modal);
  modal.appendChild(modalContent);
  modalContent.appendChild(textElement);
  modalContent.appendChild(closeButton);

  return modal;
}

let modal = createModal("Это модальное окно", "myModal");

buttonModal.addEventListener("click", () => {
  modal.style.display = "block";
});
