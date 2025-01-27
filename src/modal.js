import { createButton } from "./сonstructorElement";
import { todoArray } from "./script";
import { renderAllTodos } from "./script";
import { renderLine } from "./script";
const buttonModal = document.querySelector("#myBtn");

function setStyle(element, styles) {
  Object.assign(element.style, styles);
}

export function createModal(todoId, text = "", className = "") {
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

  const inputModal = document.createElement("input");
  inputModal.value = text;
  const saveButton = createButton("Сохранить");

  closeButton.addEventListener("click", () => {
    deleteModal(modal);
  });

  saveButton.addEventListener("click", () => {
    const newsTodo = inputModal.value.trim();
    if (newsTodo) {
      mutateTodoById(todoId, newsTodo); // Передаем идентификатор и новое значение
      renderAllTodos(todoArray); // Обновляем отображение всех задач
      deleteModal(modal); // Зак
    }
  });

  modalContent.appendChild(closeButton);
  modalContent.appendChild(inputModal);
  modalContent.appendChild(saveButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  function mutateTodoById(todoId, newTitle) {
    todoArray.forEach((todo) => {
      if (todo.id === todoId) {
        todo.title = newTitle;
      }
    });
  }
}

buttonModal.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  console.log("клик по кнопке");
  createModal("Это модальное окно", "myModal");
}

function deleteModal(modal) {
  document.body.removeChild(modal);
}
