import { url } from "../constants/const.js";
export async function fetchTodos() {
  return fetch(`${url}/todos`)
    .then((res) => {
      if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
      return res.json();
    })
    .catch((error) => {
      console.error("Ошибка загрузки задач:", error);
      return [];
    });
}
