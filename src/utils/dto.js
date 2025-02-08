import { getTodos } from "../store/todos";
export function todoDto(userId, inputValue) {
  const todos = getTodos();
  return {
    userId: userId,
    id: todos.length + 1,
    title: inputValue,
    completed: false,
  };
}
