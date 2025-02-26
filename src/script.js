import { todoDto } from "./utils/dto.js";
import { fetchTodos } from "./services/api.js";
import {
  inputCreate,
  buttonCreate,
  spanDiv,
  inputFind,
  buttonFind,
  clearButton,
} from "./constants/const.js";
import { createLoader, hideLoader } from "./components/loader/loader.js";
import {
  createTodoElement,
  createPagination,
} from "./components/todoItem/todoItem.js";
import {
  notifyChange,
  getTodos,
  addTodo,
  updateTodo,
  setOnChangeCallback,
  findAndGetElements,
  resetFilter,
} from "./store/todos.js";
import { createButton } from "./ui/button.js";
import { buttonSettings } from "./components/todoItem/const.js";

setOnChangeCallback((updateTodo) => {
  renderAllTodos(updateTodo);
});

async function handleTodoData(page = 1) {
  const load = createLoader();
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { data: todos, totalCount } = await fetchTodos(page, 20);
    console.log("Fetched Todos:", todos);
    console.log("Total Todos Count:", totalCount);

    renderAllTodos(todos, Math.ceil(totalCount / 20));
  } catch (err) {
    console.log(err, "Произошла ошибка");
  } finally {
    hideLoader(load);
  }
}
handleTodoData();

document.addEventListener("DOMContentLoaded", async () => {
  const totalPages = 10;
  await handleTodoData(1);
});

function renderAllTodos(todos, totalPages) {
  clearElement(spanDiv);
  const fragment = document.createDocumentFragment();
  todos.forEach((todo) => {
    fragment.appendChild(createTodoElement(todo));
  });
  const pagination = createPagination(totalPages, handleTodoData);
  fragment.appendChild(pagination);
  spanDiv.appendChild(fragment);
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
// для кнопки очистить
function addClearButton(spanDiv, inputFind) {
  let clearButton = document.querySelector(".clear");
  if (!clearButton) {
    clearButton = createButton({
      ...buttonSettings.clear,

      onClick: () => handleClear(spanDiv, inputFind, clearButton),
    });
    document.querySelector(".big_container").appendChild(clearButton);
  }
}

function handleClear(spanDiv, inputFind, clearButton) {
  clearElement(spanDiv);
  inputFind.value = "";
  resetFilter();
  renderAllTodos(getTodos());
  if (clearButton) {
    clearButton.remove();
  }
}

buttonCreate.addEventListener("click", () => {
  const inputValue = inputCreate.value.trim();
  if (inputValue) {
    const newTodo = todoDto(11, inputValue);
    addTodo(newTodo);
    inputCreate.value = "";
  } else {
    alert("Введите текст для добавления строки!");
  }
});

buttonFind.addEventListener("click", () => {
  const inputFindValue = inputFind.value.trim();
  if (!inputFindValue) return;

  const foundTodos = findAndGetElements(inputFindValue);

  if (foundTodos.length) {
    clearElement(spanDiv);
    renderAllTodos(foundTodos);
    addClearButton(spanDiv, inputFind);
  } else {
    alert("Нет никаких совпадений!");
  }
});
