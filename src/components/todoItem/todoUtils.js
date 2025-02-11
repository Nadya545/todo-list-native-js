export function formTextLine(todo) {
  return `userId: ${todo.userId}, ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`;
}

export function applyCompletedStyles(isCompleted, element) {
  element.style.textDecoration = isCompleted ? "line-through" : "none";
}
