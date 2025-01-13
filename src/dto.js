import { todoArray } from "./script.js";
export function todoDto(userId, inputValue) {
  return {
    userId: userId,
    id: todoArray.length + 1, // Пример, устанавливать уникальный ID
    title: inputValue,
    completed: false,
  };
}
