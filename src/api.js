import { url } from "./const.js";
export async function getData() {
  try {
    const getToDos = await fetch(`${url}/todos`);
    const todos = await getToDos.json();
    console.log(todos);
    return todos;
  } catch (error) {
    console.log("Ошибочка >>>>>>", error);
  }
}
