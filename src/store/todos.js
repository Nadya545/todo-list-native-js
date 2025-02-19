import { createInput } from "../ui/input";
import { todoDto } from "../utils/dto";

let todoArray = [];
let filteredTodoArray = [];
let currentSearchValue = [];
let isFiltered = false;

// вот эта штука очень важная, и она нужна для того, чтобы когда у нас поменяется todoArray эта функцию всегда будет вызываться и вызывать рендер наших тудушек.
let onChangeCallback = () => {};

export function getTodos() {
  return isFiltered ? filteredTodoArray : todoArray;
}

export function setOnChangeCallback(callback) {
  onChangeCallback = callback;
}

export function addTodo(todo) {
  todoArray.unshift(todo);
  if (isFiltered) {
    filteredTodoArray.unshift(todo);
  }
  notifyChange();
}

export function removeTodo(id) {
  todoArray = todoArray.filter((todo) => todo.id !== id);
  if (isFiltered) {
    filteredTodoArray = filteredTodoArray.filter((todo) => todo.id !== id);
  }
  notifyChange();
}

export function updateTodo(id, newTitle) {
  const todo = todoArray.find((todo) => todo.id === id);
  if (todo) {
    todo.title = newTitle; // Update the title
  }
  if (isFiltered) {
    if (todo.title.includes(currentSearchValue)) {
      return filteredTodoArray;
    }
  }
  notifyChange();
}

export function findAndGetElements(searchValue) {
  isFiltered = true;
  currentSearchValue = searchValue;
  filteredTodoArray = todoArray.filter((todo) =>
    todo.title.includes(searchValue)
  );
  notifyChange();

  return filteredTodoArray;
}

export function getIsFiltered() {
  return isFiltered;
}
function notifyChange() {
  if (onChangeCallback) onChangeCallback(getTodos());
}
