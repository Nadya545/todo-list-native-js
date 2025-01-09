import { todoDto } from "./dto.js";
export const textAll = [];
const inputCreate = document.querySelector(".input-create");
const buttonCreate = document.querySelector(".create-button");
const spanDiv = document.querySelector(".span");

let todoArray = [];
const inputFind = document.querySelector(".input-find");
const buttonFind = document.querySelector(".button-find");

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
      const clearButton = createButton("Очистить", "clear");
      const bigContainer = document.querySelector(".big_container");
      bigContainer.appendChild(clearButton);
      clearButton.addEventListener("click", () => {
        spanDiv.innerHTML = "";
        bigContainer.removeChild(clearButton);
        todoArray.forEach((element) => {
          renderLine(element);
        });
      });
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
//проверка если обьект не равен типу обьекта то выводим ошибку и false. в ином случае true
function checkIsObject(object) {
  if (typeof object !== "object") {
    console.log("Некорректный тип данных:", object);
    return false;
  }
  return true;
}

function createDiv(text = "", className = "") {
  const lineDiv = document.createElement("div");
  lineDiv.className = className;
  lineDiv.textContent = text;
  return lineDiv;
}

function createButton(text = "", className = "") {
  const inputElement = document.createElement("button");
  inputElement.className = className;
  inputElement.textContent = text;
  return inputElement;
}

async function getData() {
  try {
    const getToDos = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await getToDos.json();
    todoArray = todos;
    console.log(todos);
    todos.forEach((todo) => {
      renderLine(todo);
    });
  } catch (error) {
    console.log("Ошибочка >>>>>>", error);
  }
}
getData();

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
