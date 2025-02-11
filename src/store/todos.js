let todoArray = [];
let isFiltered = false;

// вот эта штука очень важная, и она нужна для того, чтобы когда у нас поменяется todoArray эта функцию всегда будет вызываться и вызывать рендер наших тудушек.
let onChangeCallback = () => {};

export function getTodos() {
  return todoArray;
}

export function setOnChangeCallback(callback) {
  onChangeCallback = callback;
}

export function addTodo(todo) {
  todoArray.unshift(todo);
  if (onChangeCallback) onChangeCallback();
}

export function removeTodo(id) {
  todoArray = todoArray.filter((todo) => todo.id !== id);
  if (onChangeCallback) onChangeCallback();
}

export function updateTodo(id, newTitle) {
  const todo = todoArray.find((todo) => todo.id === id);
  if (todo) {
    todo.title = newTitle;
    if (onChangeCallback) onChangeCallback();
  }
}

export function findAndGetElements(searchValue) {
  isFiltered = true;
  return getTodos().filter((todo) => todo.title.includes(searchValue));
}

export function getIsFiltered() {
  return isFiltered;
}
