import { createDiv } from "../utils/сonstructorElement";
import { createButton } from "../utils/сonstructorElement";
import { createModal } from "./modal";
export function createTodoElement(todo) {
  let completed = todo.completed;

  const line = formTextLine(todo, completed);
  const container = createDiv("", "container");
  const mini_container = createDiv("", "mini_container");
  const container_for_btn = createDiv("", "cont_for_btn");
  if (completed) {
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
}
