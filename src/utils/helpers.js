//проверка если обьект не равен типу обьекта то выводим ошибку и false. в ином случае true
export function checkIsObject(object) {
  if (typeof object !== "object") {
    console.log("Некорректный тип данных:", object);
    return false;
  }
  return true;
}
