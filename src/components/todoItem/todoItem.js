import { createDiv } from "../../ui/div.js";
import { applyCompletedStyles, formTextLine } from "./todoUtils.js";
import { removeTodo, updateTodo } from "../../store/todos.js";
import { createModal } from "../modal/modal.js";
import { createButton } from "../../ui/button.js";
import { buttonSettings } from "./const.js";

export function createTodoElement(todo) {
  const container = createDiv("", "container");
  const miniContainer = createDiv("", "mini_container");
  const buttonContainer = createDiv("", "cont_for_btn");
  const textDiv = createDiv(formTextLine(todo), "line");
  // создаём кнопку с настройками (их выносим в отдельную переменную, чтобы было удобнее)
  // также пробрасываем функцию, которая применится к созданной кнопке (чтобы не писать тыщу раз addEventListener)
  const buttonEdit = createButton({
    ...buttonSettings.edit,
    onClick: handleEditClick(todo),
  });
  const buttonComplete = createButton({
    ...buttonSettings.complete,
    onClick: handleCompleteClick(todo, miniContainer, textDiv),
  });
  const deleteButton = createButton({
    ...buttonSettings.delete,
    onClick: handleDeleteClick(todo),
  });

  applyCompletedStyles(todo.completed, miniContainer);

  miniContainer.appendChild(textDiv);
  buttonContainer.append(buttonEdit, buttonComplete, deleteButton);
  container.append(miniContainer, buttonContainer);

  return container;
}

function handleDeleteClick(todo) {
  return () => {
    removeTodo(todo.id);
  };
}

function handleCompleteClick(todo, miniContainer, textDiv) {
  return () => {
    todo.completed = !todo.completed;
    updateTodo(todo.id, todo.title, todo.completed);
    applyCompletedStyles(todo.completed, miniContainer);
    textDiv.textContent = formTextLine(todo);
  };
}

function handleEditClick(todo) {
  return () => {
    createModal(todo.id, todo.title, "myModal");
  };
}

/*if (completed) {
    mini_container.style.textDecoration = "line-through";
  }
  const buttonEdit = createButton(
    "Редактировать",
    "correct",
    "medium",
    "correct"
  );

  const buttonComplete = createButton("Завершить дело", "complete");

  const deleteButton = createButton(
    "Корзиночка",
    "button deleted-button",
    "medium",
    "delete"
  );

  const textDiv = createDiv(line, "line");

  mini_container.appendChild(textDiv);
  container.appendChild(mini_container);
  container_for_btn.appendChild(buttonEdit);
  container_for_btn.appendChild(buttonComplete);
  container_for_btn.appendChild(deleteButton);
  container.appendChild(container_for_btn);
  //spanDiv.appendChild(container);
  deleteButton.addEventListener("click", () => {
    spanDiv.removeChild(container);
  });

  buttonComplete.addEventListener("click", () => {
    completed = setStylesCompletedTodo(completed, mini_container);
    textDiv.textContent = formTextLine(todo, completed);
  });

  buttonEdit.addEventListener("click", () => {
    createModal(todo.id, todo.title, "myModal");
  });
  return container;
}
function formTextLine(todo, isCompleted) {
  return `userId: ${todo.userId}, ID: ${todo.id}, Title: ${todo.title}, Completed: ${isCompleted}`;
}

function setStylesCompletedTodo(completed, element) {
  if (!element) return;

  if (completed) {
    element.style.textDecoration = "none";
  } else {
    element.style.textDecoration = "line-through";
  }

  return !completed;
}*/
