import { todoDto } from "./dto.js";
import { createDiv, createButton } from "./сonstructorElement.js";
import { checkIsObject } from "./helpers.js";
import { getData } from "./api.js";
import {
  inputCreate,
  buttonCreate,
  spanDiv,
  inputFind,
  buttonFind,
  clearButton,
} from "./const.js";
export const textAll = [];
export let todoArray = [];

async function handleTodoData() {
  try {
    const todos = await getData();
    todos.forEach((todo) => {
      renderLine(todo);
    });
  } catch (err) {
    console.log(err, "Произошла ошибка");
  }
}
handleTodoData();

buttonFind.addEventListener("click", () => {
  let inputFindValue = inputFind.value.trim();
  if (inputFindValue) {
    const foundTodos = findAndGetElements(inputFindValue);
    console.log(foundTodos);
    if (foundTodos.length) {
      spanDiv.innerHTML = "";
      foundTodos.forEach((element) => {
        renderLine(element);
      });
      if (!clearButton) {
        clearButton = createButton("Очистить", "clear");
        const bigContainer = document.querySelector(".big_container");
        bigContainer.appendChild(clearButton);

        clearButton.addEventListener("click", () => {
          spanDiv.innerHTML = "";
          inputFind.value = "";
          bigContainer.removeChild(clearButton);
          clearButton = null;
          todoArray.forEach((element) => {
            renderLine(element);
          });
        });
      }
    } else {
      alert("Нет никаких совпадений !!!!");
    }
  }
});

function findAndGetElements(inputFindValue) {
  const foundTodosBySearch = [];
  todoArray.forEach((element) => {
    if (element.title.includes(inputFindValue)) {
      foundTodosBySearch.push(element);
    }
  });
  return foundTodosBySearch;
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

function renderLine(todo) {
  if (!checkIsObject(todo)) return;
  let completed = todo.completed;

  const line = formTextLine(todo, completed);
  const container = createDiv("", "container");
  if (completed) {
    container.style.textDecoration = "line-through";
  }
  const deleteButton = createButton("Корзиночка", "button deleted-button");
  const buttonComplete = createButton("Завершить дело");
  const textDiv = createDiv(line, "line");

  spanDiv.appendChild(container);
  container.appendChild(textDiv);
  container.appendChild(deleteButton);
  container.appendChild(buttonComplete);

  deleteButton.addEventListener("click", () => {
    spanDiv.removeChild(container);
  });

  buttonComplete.addEventListener("click", () => {
    completed = setStylesCompletedTodo(completed, container);
    textDiv.textContent = formTextLine(todo, completed);
  });
}

buttonCreate.addEventListener("click", () => {
  let inputValue = inputCreate.value.trim();

  if (inputValue) {
    const newTodo = todoDto(11, "НОВЫЙ ОБЬЕКТ!!!!!!");
    textAll.push(newTodo);
    inputCreate.value = "";
    renderLine(newTodo);
  } else {
    alert("Введите текст для добавления строки!"); // Уведомление, если поле пустое
  }
});
