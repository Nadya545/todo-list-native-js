import { createButton } from "../../ui/button.js";
import { createInput } from "../../ui/input.js";
import { updateTodo } from "../../store/todos.js";
import { modalButtonSettings } from "./const.js";

export function createModal(todoId, text = "") {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal_content";

  const inputModal = createInput(text, "input-modal", "medium");

  // создаём кнопку с настройками (их выносим в отдельную переменную, чтобы было удобнее)
  // также пробрасываем функцию, которая применится к созданной кнопке (чтобы не писать тыщу раз addEventListener)
  const saveButton = createButton({
    ...modalButtonSettings.save,
    onClick: () => handleSaveClick(todoId, inputModal, modal),
  });

  // здесь аналогично
  const closeButton = createButton({
    ...modalButtonSettings.close,
    onClick: () => handleCloseClick(modal),
  });

  modalContent.append(closeButton, inputModal, saveButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

// фукнции ниже это отдельные кусочки логики, чтобы было удобно контролировать кто за что отвечает
function handleSaveClick(todoId, inputModal, modal) {
  const newTitle = inputModal.value.trim();
  if (newTitle) {
    updateTodo(todoId, newTitle);
    deleteModal(modal);
  }
}

function handleCloseClick(modal) {
  deleteModal(modal);
}
