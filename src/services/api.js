import { url } from "../constants/const.js";
export async function fetchTodos(page, limit = 20) {
  const paginatedUrl = `${url}?_page=${page}&_limit=${limit}`;
  return fetch(paginatedUrl)
    .then((res) => {
      if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
      const totalCount = res.headers.get("x-total-count");
      console.log("Total Count:", totalCount);

      return res
        .json()
        .then((data) => ({ data, totalCount: parseInt(totalCount, 10) || 0 }));
    })
    .catch((error) => {
      console.error("Ошибка загрузки задач:", error);
      return { data: [], totalCount: 0 };
    });
}
const todos1 = await fetchTodos(1, 20);
console.log(todos1);
const todos2 = await fetchTodos(2, 20);
console.log(todos2);
const todos3 = await fetchTodos(3, 20);
console.log(todos3);
