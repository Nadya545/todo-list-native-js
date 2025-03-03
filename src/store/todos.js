import { createInput } from "../ui/input";
import { todoDto } from "../utils/dto";
import { renderAllTodos } from "../script";

let todoArray = [];
let filteredTodoArray = [];
let currentSearchValue = [];
export let isFiltered = false;

// вот эта штука очень важная, и она нужна для того, чтобы когда у нас поменяется todoArray эта функцию всегда будет вызываться и вызывать рендер наших тудушек.
let onChangeCallback = () => {};

export function getTodos() {
  return isFiltered ? filteredTodoArray : todoArray;
}

export function resetFilter() {
  isFiltered = false;
  const totalPages = Math.ceil(todoArray.length / 20);
  renderAllTodos(todoArray, totalPages);
}

export function setOnChangeCallback(callback) {
  onChangeCallback = callback;
}

export function clearTodos() {
  todoArray = []; // Очищаем массив
  if (isFiltered) {
    filteredTodoArray = []; // Очищаем отфильтрованный массив, если фильтрация активна
  }
}

export function addTodo(todo) {
  todoArray.unshift(todo);
  if (isFiltered) {
    if (todo.title.includes(currentSearchValue)) {
      filteredTodoArray.unshift(todo);
    }
    const totalPages = Math.ceil(filteredTodoArray.length / 20);
    renderAllTodos(filteredTodoArray, totalPages);
  } else {
    const totalPages = Math.ceil(todoArray.length / 20);
    renderAllTodos(todoArray, totalPages);
  }
}

export function removeTodo(id) {
  todoArray = todoArray.filter((todo) => todo.id !== id);
  if (isFiltered) {
    filteredTodoArray = filteredTodoArray.filter((todo) => todo.id !== id);
  }
  const todos = getTodos();
  const totalPages = Math.ceil(todos.length / 20);
  renderAllTodos(todos, totalPages);
}

export function updateTodo(id, newTitle) {
  const todo = todoArray.find((todo) => todo.id === id);
  if (todo) {
    todo.title = newTitle; // Update thegetTodos()
    if (isFiltered) {
      filteredTodoArray = todoArray.filter((todo) =>
        todo.title.includes(currentSearchValue)
      );
    }
    const todos = getTodos();
    const totalPages = Math.ceil(todos.length / 20);
    renderAllTodos(todos, totalPages);
  }
}

export function findAndGetElements(searchValue) {
  isFiltered = true;
  currentSearchValue = searchValue;
  filteredTodoArray = todoArray.filter((todo) =>
    todo.title.includes(searchValue)
  );
  const totalPages = Math.ceil(filteredTodoArray.length / 20);

  renderAllTodos(filteredTodoArray, totalPages);
  return filteredTodoArray;
}

export function getIsFiltered() {
  return isFiltered;
}
export function notifyChange() {
  if (onChangeCallback) {
    const todos = getTodos();
    const totalPages = Math.ceil(todos.length / 20);
    onChangeCallback(todos, totalPages);
  }
}
