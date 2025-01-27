/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ \"./src/const.js\");\n\r\nasync function getData() {\r\n  try {\r\n    const getToDos = await fetch(`${_const_js__WEBPACK_IMPORTED_MODULE_0__.url}/todos`);\r\n    const todos = await getToDos.json();\r\n    console.log(todos);\r\n    return todos;\r\n  } catch (error) {\r\n    console.log(\"Ошибочка >>>>>>\", error);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://zzz/./src/api.js?");

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonCreate: () => (/* binding */ buttonCreate),\n/* harmony export */   buttonFind: () => (/* binding */ buttonFind),\n/* harmony export */   clearButton: () => (/* binding */ clearButton),\n/* harmony export */   inputCreate: () => (/* binding */ inputCreate),\n/* harmony export */   inputFind: () => (/* binding */ inputFind),\n/* harmony export */   spanDiv: () => (/* binding */ spanDiv),\n/* harmony export */   url: () => (/* binding */ url)\n/* harmony export */ });\nconst inputCreate = document.querySelector(\".input-create\");\r\nconst buttonCreate = document.querySelector(\".create-button\");\r\nconst spanDiv = document.querySelector(\".span\");\r\nconst inputFind = document.querySelector(\".input-find\");\r\nconst buttonFind = document.querySelector(\".button-find\");\r\nlet clearButton = null;\r\nconst url = \"https://jsonplaceholder.typicode.com\";\r\n\n\n//# sourceURL=webpack://zzz/./src/const.js?");

/***/ }),

/***/ "./src/dto.js":
/*!********************!*\
  !*** ./src/dto.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoDto: () => (/* binding */ todoDto)\n/* harmony export */ });\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\r\nfunction todoDto(userId, inputValue) {\r\n  return {\r\n    userId: userId,\r\n    id: _script_js__WEBPACK_IMPORTED_MODULE_0__.todoArray.length + 1, // Пример, устанавливать уникальный ID\r\n    title: inputValue,\r\n    completed: false,\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://zzz/./src/dto.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkIsObject: () => (/* binding */ checkIsObject)\n/* harmony export */ });\n//проверка если обьект не равен типу обьекта то выводим ошибку и false. в ином случае true\r\nfunction checkIsObject(object) {\r\n  if (typeof object !== \"object\") {\r\n    console.log(\"Некорректный тип данных:\", object);\r\n    return false;\r\n  }\r\n  return true;\r\n}\r\n\n\n//# sourceURL=webpack://zzz/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onstructorElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./сonstructorElement.js */ \"./src/сonstructorElement.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ \"./src/const.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _dto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto.js */ \"./src/dto.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _loder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loder.js */ \"./src/loder.js\");\n/* harmony import */ var _loder_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_loder_js__WEBPACK_IMPORTED_MODULE_7__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://zzz/./src/index.js?");

/***/ }),

/***/ "./src/loder.js":
/*!**********************!*\
  !*** ./src/loder.js ***!
  \**********************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://zzz/./src/loder.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createModal: () => (/* binding */ createModal)\n/* harmony export */ });\n/* harmony import */ var _onstructorElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./сonstructorElement */ \"./src/сonstructorElement.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ \"./src/script.js\");\n\r\n\r\n\r\n\r\nconst buttonModal = document.querySelector(\"#myBtn\");\r\n\r\nfunction setStyle(element, styles) {\r\n  Object.assign(element.style, styles);\r\n}\r\n\r\nfunction createModal(todoId, text = \"\", className = \"\") {\r\n  const modal = document.createElement(\"div\");\r\n  modal.className = className;\r\n\r\n  setStyle(modal, {\r\n    position: \"fixed\",\r\n    zIndex: \"1\",\r\n    left: \"0\",\r\n    top: \"0\",\r\n    width: \"100%\",\r\n    height: \"100%\",\r\n    backgroundColor: \"rgba(0,0,0,0.5)\",\r\n    padding: \"20px\",\r\n    overflow: \"auto\",\r\n  });\r\n\r\n  const modalContent = document.createElement(\"div\");\r\n\r\n  setStyle(modalContent, {\r\n    backgroundColor: \"white\",\r\n    margin: \"15% auto\",\r\n    padding: \"20px\",\r\n    border: \"1px solid #888\",\r\n    width: \"80%\",\r\n  });\r\n\r\n  const closeButton = document.createElement(\"span\");\r\n\r\n  closeButton.innerHTML = \"&times\";\r\n\r\n  setStyle(closeButton, {\r\n    cursor: \"pointer\",\r\n    float: \"right\",\r\n    fontSize: \"28px\",\r\n  });\r\n\r\n  const inputModal = document.createElement(\"input\");\r\n  inputModal.value = text;\r\n  const saveButton = (0,_onstructorElement__WEBPACK_IMPORTED_MODULE_0__.createButton)(\"Сохранить\");\r\n\r\n  closeButton.addEventListener(\"click\", () => {\r\n    deleteModal(modal);\r\n  });\r\n\r\n  saveButton.addEventListener(\"click\", () => {\r\n    const newsTodo = inputModal.value.trim();\r\n    if (newsTodo) {\r\n      mutateTodoById(todoId, newsTodo); // Передаем идентификатор и новое значение\r\n      (0,_script__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)(_script__WEBPACK_IMPORTED_MODULE_1__.todoArray); // Обновляем отображение всех задач\r\n      deleteModal(modal); // Зак\r\n    }\r\n  });\r\n\r\n  modalContent.appendChild(closeButton);\r\n  modalContent.appendChild(inputModal);\r\n  modalContent.appendChild(saveButton);\r\n  modal.appendChild(modalContent);\r\n  document.body.appendChild(modal);\r\n\r\n  function mutateTodoById(todoId, newTitle) {\r\n    _script__WEBPACK_IMPORTED_MODULE_1__.todoArray.forEach((todo) => {\r\n      if (todo.id === todoId) {\r\n        todo.title = newTitle;\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nbuttonModal.addEventListener(\"click\", handleButtonClick);\r\n\r\nfunction handleButtonClick() {\r\n  console.log(\"клик по кнопке\");\r\n  createModal(\"Это модальное окно\", \"myModal\");\r\n}\r\n\r\nfunction deleteModal(modal) {\r\n  document.body.removeChild(modal);\r\n}\r\n\n\n//# sourceURL=webpack://zzz/./src/modal.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAllTodos: () => (/* binding */ renderAllTodos),\n/* harmony export */   renderLine: () => (/* binding */ renderLine),\n/* harmony export */   textAll: () => (/* binding */ textAll),\n/* harmony export */   todoArray: () => (/* binding */ todoArray)\n/* harmony export */ });\n/* harmony import */ var _dto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dto.js */ \"./src/dto.js\");\n/* harmony import */ var _onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./сonstructorElement.js */ \"./src/сonstructorElement.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const.js */ \"./src/const.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst textAll = [];\r\nlet todoArray = [];\r\n\r\nasync function handleTodoData() {\r\n  try {\r\n    const todos = await (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getData)();\r\n    renderAllTodos(todos);\r\n    todoArray.push(...todos);\r\n  } catch (err) {\r\n    console.log(err, \"Произошла ошибка\");\r\n  }\r\n}\r\nhandleTodoData();\r\nfunction renderLine(todo) {\r\n  if (!(0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.checkIsObject)(todo)) return;\r\n  let completed = todo.completed;\r\n\r\n  const line = formTextLine(todo, completed);\r\n  const container = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"\", \"container\");\r\n  if (completed) {\r\n    container.style.textDecoration = \"line-through\";\r\n  }\r\n  const deleteButton = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"Корзиночка\", \"button deleted-button\");\r\n  const buttonComplete = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"Завершить дело\");\r\n  const buttonRedact = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"Редактировать\");\r\n  const textDiv = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(line, \"line\");\r\n\r\n  _const_js__WEBPACK_IMPORTED_MODULE_4__.spanDiv.appendChild(container);\r\n  container.appendChild(textDiv);\r\n  container.appendChild(deleteButton);\r\n  container.appendChild(buttonComplete);\r\n  container.appendChild(buttonRedact);\r\n\r\n  deleteButton.addEventListener(\"click\", () => {\r\n    _const_js__WEBPACK_IMPORTED_MODULE_4__.spanDiv.removeChild(container);\r\n  });\r\n\r\n  buttonComplete.addEventListener(\"click\", () => {\r\n    completed = setStylesCompletedTodo(completed, container);\r\n    textDiv.textContent = formTextLine(todo, completed);\r\n  });\r\n\r\n  buttonRedact.addEventListener(\"click\", () => {\r\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_5__.createModal)(todo.id, todo.title, \"myModal\");\r\n  });\r\n}\r\nfunction renderAllTodos(todos) {\r\n  todos.forEach((element) => {\r\n    renderLine(element);\r\n  });\r\n}\r\n\r\n_const_js__WEBPACK_IMPORTED_MODULE_4__.buttonFind.addEventListener(\"click\", () => {\r\n  let inputFindValue = _const_js__WEBPACK_IMPORTED_MODULE_4__.inputFind.value.trim();\r\n  if (inputFindValue) {\r\n    const foundTodos = findAndGetElements(inputFindValue);\r\n    console.log(foundTodos);\r\n\r\n    if (foundTodos.length) {\r\n      _const_js__WEBPACK_IMPORTED_MODULE_4__.spanDiv.innerHTML = \"\"; // Очищаем содержимое перед добавлением найденных элементов\r\n      renderAllTodos(foundTodos);\r\n\r\n      // Проверяем, существует ли кнопка \"Очистить\" в DOM\r\n      const existingClearButton = document.querySelector(\".clear\"); // Ищем кнопку с классом \"clear\"\r\n      if (!existingClearButton) {\r\n        // Если кнопка не найдена, создаем её\r\n        const clearButton = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"Очистить\", \"clear\");\r\n        const bigContainer = document.querySelector(\".big_container\");\r\n        bigContainer.appendChild(clearButton);\r\n\r\n        // Добавляем обработчик события для кнопки \"Очистить\"\r\n        clearButton.addEventListener(\"click\", () => {\r\n          _const_js__WEBPACK_IMPORTED_MODULE_4__.spanDiv.innerHTML = \"\"; // Очищаем содержимое\r\n          _const_js__WEBPACK_IMPORTED_MODULE_4__.inputFind.value = \"\"; // Очищаем поле ввода\r\n          bigContainer.removeChild(clearButton); // Удаляем кнопку \"Очистить\"\r\n\r\n          // Рендерим все элементы из todoArray\r\n          renderAllTodos(todoArray);\r\n        });\r\n      }\r\n    } else {\r\n      alert(\"Нет никаких совпадений !!!!\");\r\n    }\r\n  }\r\n});\r\nfunction findAndGetElements(inputFindValue) {\r\n  const foundTodosBySearch = [];\r\n  todoArray.forEach((element) => {\r\n    if (element.title?.includes(inputFindValue)) {\r\n      foundTodosBySearch.push(element);\r\n    }\r\n  });\r\n  return foundTodosBySearch;\r\n}\r\n\r\nfunction formTextLine(todo, isCompleted) {\r\n  return `userId: ${todo.userId}, ID: ${todo.id}, Title: ${todo.title}, Completed: ${isCompleted}`;\r\n}\r\n\r\nfunction setStylesCompletedTodo(completed, element) {\r\n  if (!element) return;\r\n\r\n  if (completed) {\r\n    element.style.textDecoration = \"none\";\r\n  } else {\r\n    element.style.textDecoration = \"line-through\";\r\n  }\r\n\r\n  return !completed;\r\n}\r\n\r\n_const_js__WEBPACK_IMPORTED_MODULE_4__.buttonCreate.addEventListener(\"click\", () => {\r\n  let inputValue = _const_js__WEBPACK_IMPORTED_MODULE_4__.inputCreate.value.trim();\r\n\r\n  if (inputValue) {\r\n    const newTodo = (0,_dto_js__WEBPACK_IMPORTED_MODULE_0__.todoDto)(11, \"НОВЫЙ ОБЬЕКТ!!!!!!\");\r\n    textAll.push(newTodo);\r\n    _const_js__WEBPACK_IMPORTED_MODULE_4__.inputCreate.value = \"\";\r\n    renderLine(newTodo);\r\n  } else {\r\n    alert(\"Введите текст для добавления строки!\"); // Уведомление, если поле пустое\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://zzz/./src/script.js?");

/***/ }),

/***/ "./src/сonstructorElement.js":
/*!***********************************!*\
  !*** ./src/сonstructorElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createDiv: () => (/* binding */ createDiv)\n/* harmony export */ });\nfunction createDiv(text = \"\", className = \"\") {\r\n  const lineDiv = document.createElement(\"div\");\r\n  lineDiv.className = className;\r\n  lineDiv.textContent = text;\r\n  return lineDiv;\r\n}\r\n\r\nfunction createButton(text = \"\", className = \"\") {\r\n  const inputElement = document.createElement(\"button\");\r\n  inputElement.className = className;\r\n  inputElement.textContent = text;\r\n  return inputElement;\r\n}\r\n\n\n//# sourceURL=webpack://zzz/./src/%D1%81onstructorElement.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;