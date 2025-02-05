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
import { createModal, textElement } from "./modal.js";
import { createLoader, hideLoader } from "./loader.js";

export const textAll = [];
export let todoArray = [];

async function handleTodoData() {
  const load = createLoader();
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const todos = await getData();
    renderAllTodos(todos);
    todoArray.push(...todos);
  } catch (err) {
    console.log(err, "Произошла ошибка");
  } finally {
    hideLoader(load);
  }
}
handleTodoData();

export function renderLine(todo) {
  if (!checkIsObject(todo)) return;
  let completed = todo.completed;

  const line = formTextLine(todo, completed);
  const container = createDiv("", "container");
  const mini_container = createDiv("", "mini_container");
  const container_for_btn = createDiv("", "cont_for_btn");
  if (completed) {
    mini_container.style.textDecoration = "line-through";
  }
  const buttonRedact = createButton(
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
  container_for_btn.appendChild(buttonRedact);
  container_for_btn.appendChild(buttonComplete);
  container_for_btn.appendChild(deleteButton);
  container.appendChild(container_for_btn);
  spanDiv.appendChild(container);
  deleteButton.addEventListener("click", () => {
    spanDiv.removeChild(container);
  });

  buttonComplete.addEventListener("click", () => {
    completed = setStylesCompletedTodo(completed, mini_container);
    textDiv.textContent = formTextLine(todo, completed);
  });

  buttonRedact.addEventListener("click", () => {
    createModal(todo.id, todo.title, "myModal");
  });
}
export function renderAllTodos(todos) {
  todos.forEach((element) => {
    renderLine(element);
  });
}

buttonFind.addEventListener("click", () => {
  let inputFindValue = inputFind.value.trim();
  if (inputFindValue) {
    const foundTodos = findAndGetElements(inputFindValue);
    console.log(foundTodos);

    if (foundTodos.length) {
      spanDiv.innerHTML = ""; // Очищаем содержимое перед добавлением найденных элементов
      renderAllTodos(foundTodos);

      // Проверяем, существует ли кнопка "Очистить" в DOM
      const existingClearButton = document.querySelector(".clear"); // Ищем кнопку с классом "clear"
      if (!existingClearButton) {
        // Если кнопка не найдена, создаем её
        const clearButton = createButton("Очистить", "clear");
        const bigContainer = document.querySelector(".big_container");
        bigContainer.appendChild(clearButton);

        // Добавляем обработчик события для кнопки "Очистить"
        clearButton.addEventListener("click", () => {
          spanDiv.innerHTML = ""; // Очищаем содержимое
          inputFind.value = ""; // Очищаем поле ввода
          bigContainer.removeChild(clearButton); // Удаляем кнопку "Очистить"

          // Рендерим все элементы из todoArray
          renderAllTodos(todoArray);
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
    if (element.title?.includes(inputFindValue)) {
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
