let todoArray = [];

export function getTodos() {
  return todoArray;
}

export function addTodo(todo) {
  todoArray.push(todo);
}

export function removeTodo(id) {
  todoArray = todoArray.filter((todo) => todo.id !== id);
}
console.log({ getTodos, addTodo, removeTodo });
