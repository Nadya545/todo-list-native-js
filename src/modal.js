const buttonModal = document.querySelector("#myBtn");

function setStyle(element, styles) {
  Object.assign(element.style, styles);
}

function createModal(text = "", className = "") {
  const modal = document.createElement("div");
  modal.className = className;

  setStyle(modal, {
    position: "fixed",
    zIndex: "1",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "20px",
    overflow: "auto",
  });

  const modalContent = document.createElement("div");

  setStyle(modalContent, {
    backgroundColor: "white",
    margin: "15% auto",
    padding: "20px",
    border: "1px solid #888",
    width: "80%",
  });

  const closeButton = document.createElement("span");

  closeButton.innerHTML = "&times";

  setStyle(closeButton, {
    cursor: "pointer",
    float: "right",
    fontSize: "28px",
  });

  const textElement = document.createElement("div");
  textElement.textContent = text;

  closeButton.addEventListener("click", () => {
    deleteModal(modal);
  });

  modalContent.appendChild(closeButton);
  modalContent.appendChild(textElement);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

buttonModal.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  console.log("клик по кнопке");
  createModal("Это модальное окно", "myModal");
}

function deleteModal(modal) {
  if (modal && modal.parentNode) {
    document.body.removeChild(modal);
  }
}
