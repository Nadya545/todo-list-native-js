import { textAll } from "./script.js";
export function todoDto(userId, inputValue) {
  return {
    userId: userId,
    id: textAll.length + 1, // Пример, устанавливать уникальный ID
    title: inputValue,
    completed: false,
  };
}
