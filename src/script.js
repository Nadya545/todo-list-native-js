import { todoDto } from "./utils/dto.js";
import { createDiv, createButton } from "./utils/сonstructorElement.js";
import { checkIsObject } from "./utils/helpers.js";
import { fetchTodos } from "./services/api.js";
import {
  inputCreate,
  buttonCreate,
  spanDiv,
  inputFind,
  buttonFind,
  clearButton,
} from "./constants/const.js";
import { createModal, textElement } from "./components/modal.js";
import { createLoader, hideLoader } from "./components/loader.js";
import { createTodoElement } from "./components/todoItem.js";

export const textAll = [];
let todoArray = [];

async function handleTodoData() {
  const load = createLoader();
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const todos = await fetchTodos();
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

  spanDiv.appendChild(createTodoElement(todo));
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
      while (spanDiv.firstChild) {
        spanDiv.removeChild(spanDiv.firstChild);
      } // Очищаем содержимое перед добавлением найденных элементов
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
          while (spanDiv.firstChild) {
            spanDiv.removeChild(spanDiv.firstChild);
          } // Очищаем содержимое
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

buttonCreate.addEventListener("click", () => {
  let inputValue = inputCreate.value.trim();

  if (inputValue) {
    const newTodo = todoDto(1, inputValue);
    todoArray.unshift(newTodo);

    inputCreate.value = "";
    renderLines();
  } else {
    alert("Введите текст для добавления строки!"); // Уведомление, если поле пустое
  }
});

function renderLines() {
  while (spanDiv.firstChild) {
    spanDiv.removeChild(spanDiv.firstChild);
  }
  todoArray.forEach((todo) => renderLine(todo));
}
