import { createButton } from "./сonstructorElement";
import { todoArray } from "./script";
import { renderAllTodos } from "./script";
import { createInput } from "./сonstructorElement";
const buttonModal = document.querySelector("#myBtn");

function setStyle(element, styles) {
  Object.assign(element.style, styles);
}

export function createModal(todoId, text = "", className = "") {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal_content";

  const inputModal = createInput(text, "input-modal", "medium");

  const saveButton = createButton("Сохранить", "save-button");

  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "&times";

  closeButton.addEventListener("click", () => {
    deleteModal(modal);

    return modal;
  });

  saveButton.addEventListener("click", () => {
    const newTitle = inputModal.value.trim();
    if (newTitle) {
      mutateTodoById(todoId, newTitle);
      rerenderTodos();
      deleteModal(modal);
    }
  });

  modalContent.appendChild(closeButton);
  modalContent.appendChild(inputModal);
  modalContent.appendChild(saveButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

function mutateTodoById(todoId, newTitle) {
  todoArray.forEach((todo) => {
    if (todo.id === todoId) {
      todo.title = newTitle;
    }
  });
}
function rerenderTodos() {
  const spanDiv = document.querySelector(".container_todo");
  spanDiv.innerHTML = "";
  renderAllTodos(todoArray);
}

buttonModal.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  console.log("клик по кнопке");
  createModal("Это модальное окно", "Это модалка)))))");
}

function deleteModal(modal) {
  document.body.removeChild(modal);
}
