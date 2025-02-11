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
import { createTodoElement } from "./components/todoItem/todoItem.js";
import {
  getTodos,
  addTodo,
  setOnChangeCallback,
  findAndGetElements,
} from "./store/todos.js";
import { createButton } from "./ui/button.js";
import { buttonSettings } from "./components/todoItem/const.js";

setOnChangeCallback(() => {
  renderAllTodos(getTodos());
});

async function handleTodoData() {
  const load = createLoader();
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const todos = await fetchTodos();
    todos.forEach(addTodo);
  } catch (err) {
    console.log(err, "Произошла ошибка");
  } finally {
    hideLoader(load);
  }
}
handleTodoData();

function renderAllTodos(todos) {
  while (spanDiv.firstChild) {
    spanDiv.removeChild(spanDiv.firstChild);
  }

  const fragment = document.createDocumentFragment();
  todos.forEach((todo) => {
    fragment.appendChild(createTodoElement(todo));
  });

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
  renderAllTodos(getTodos());
  if (clearButton) {
    clearButton.remove();
  }
}

buttonCreate.addEventListener("click", () => {
  const inputValue = inputCreate.value.trim();
  if (inputValue) {
    addTodo(todoDto(11, inputValue));
    inputCreate.value = "";
  } else {
    alert("Введите текст для добавления строки!");
  }
});

buttonFind.addEventListener("click", () => {
  const inputFindValue = inputFind.value.trim();
  if (!inputFindValue) return;

  const foundTodos = findAndGetElements(inputFindValue);

  clearElement(spanDiv);
  if (foundTodos.length) {
    renderAllTodos(foundTodos);
    addClearButton();
  } else {
    alert("Нет никаких совпадений!");
  }
});
