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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getData: () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./const.js */ \"./src/const.js\");\n\nasync function getData() {\n  try {\n    const getToDos = await fetch(`${_const_js__WEBPACK_IMPORTED_MODULE_0__.url}/todos`);\n    const todos = await getToDos.json();\n    console.log(todos);\n    return todos;\n  } catch (error) {\n    console.log(\"Ошибочка >>>>>>\", error);\n  }\n}\n\n\n//# sourceURL=webpack://zzz/./src/api.js?");

/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonCreate: () => (/* binding */ buttonCreate),\n/* harmony export */   buttonFind: () => (/* binding */ buttonFind),\n/* harmony export */   clearButton: () => (/* binding */ clearButton),\n/* harmony export */   inputCreate: () => (/* binding */ inputCreate),\n/* harmony export */   inputFind: () => (/* binding */ inputFind),\n/* harmony export */   spanDiv: () => (/* binding */ spanDiv),\n/* harmony export */   url: () => (/* binding */ url)\n/* harmony export */ });\nconst inputCreate = document.querySelector(\".input-create\");\nconst buttonCreate = document.querySelector(\".create-button\");\nconst spanDiv = document.querySelector(\".span\");\nconst inputFind = document.querySelector(\".input-find\");\nconst buttonFind = document.querySelector(\".button-find\");\nlet clearButton = null;\nconst url = \"https://jsonplaceholder.typicode.com\";\n\n\n//# sourceURL=webpack://zzz/./src/const.js?");

/***/ }),

/***/ "./src/dto.js":
/*!********************!*\
  !*** ./src/dto.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoDto: () => (/* binding */ todoDto)\n/* harmony export */ });\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\nfunction todoDto(userId, inputValue) {\n  return {\n    userId: userId,\n    id: _script_js__WEBPACK_IMPORTED_MODULE_0__.todoArray.length + 1, // Пример, устанавливать уникальный ID\n    title: inputValue,\n    completed: false,\n  };\n}\n\n\n//# sourceURL=webpack://zzz/./src/dto.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkIsObject: () => (/* binding */ checkIsObject)\n/* harmony export */ });\n//проверка если обьект не равен типу обьекта то выводим ошибку и false. в ином случае true\nfunction checkIsObject(object) {\n  if (typeof object !== \"object\") {\n    console.log(\"Некорректный тип данных:\", object);\n    return false;\n  }\n  return true;\n}\n\n\n//# sourceURL=webpack://zzz/./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _onstructorElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./сonstructorElement.js */ \"./src/сonstructorElement.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ \"./src/const.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _dto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dto.js */ \"./src/dto.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.js */ \"./src/modal.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modal_js__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://zzz/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ (() => {

eval("const buttonModal = document.querySelector(\"#myBtn\");\r\n\r\nfunction setStyle(element, styles) {\r\n  Object.assign(element.style, styles);\r\n}\r\n\r\nfunction createModal(text = \"\", className = \"\") {\r\n  const modal = document.createElement(\"div\");\r\n  modal.className = className;\r\n\r\n  setStyle(modal, {\r\n    position: \"fixed\",\r\n    zIndex: \"1\",\r\n    left: \"0\",\r\n    top: \"0\",\r\n    width: \"100%\",\r\n    height: \"100%\",\r\n    backgroundColor: \"rgba(0,0,0,0.5)\",\r\n    padding: \"20px\",\r\n    overflow: \"auto\",\r\n  });\r\n\r\n  const modalContent = document.createElement(\"div\");\r\n\r\n  setStyle(modalContent, {\r\n    backgroundColor: \"white\",\r\n    margin: \"15% auto\",\r\n    padding: \"20px\",\r\n    border: \"1px solid #888\",\r\n    width: \"80%\",\r\n  });\r\n\r\n  const closeButton = document.createElement(\"span\");\r\n\r\n  closeButton.innerHTML = \"&times\";\r\n\r\n  setStyle(closeButton, {\r\n    cursor: \"pointer\",\r\n    float: \"right\",\r\n    fontSize: \"28px\",\r\n  });\r\n\r\n  const textElement = document.createElement(\"div\");\r\n  textElement.textContent = text;\r\n\r\n  closeButton.addEventListener(\"click\", () => {\r\n    deleteModal(modal);\r\n  });\r\n\r\n  modalContent.appendChild(closeButton);\r\n  modalContent.appendChild(textElement);\r\n  modal.appendChild(modalContent);\r\n  document.body.appendChild(modal);\r\n}\r\n\r\nbuttonModal.addEventListener(\"click\", handleButtonClick);\r\n\r\nfunction handleButtonClick() {\r\n  console.log(\"клик по кнопке\");\r\n  createModal(\"Это модальное окно\", \"myModal\");\r\n}\r\n\r\nfunction deleteModal(modal) {\r\n  if (modal && modal.parentNode) {\r\n    document.body.removeChild(modal);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://zzz/./src/modal.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   textAll: () => (/* binding */ textAll),\n/* harmony export */   todoArray: () => (/* binding */ todoArray)\n/* harmony export */ });\n/* harmony import */ var _dto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dto.js */ \"./src/dto.js\");\n/* harmony import */ var _onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./сonstructorElement.js */ \"./src/сonstructorElement.js\");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ \"./src/helpers.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ \"./src/api.js\");\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./const.js */ \"./src/const.js\");\n\n\n\n\n\nconst textAll = [];\nlet todoArray = [];\n\nasync function handleTodoData() {\n  try {\n    const todos = await (0,_api_js__WEBPACK_IMPORTED_MODULE_3__.getData)();\n    renderAllTodos(todos);\n    todoArray.push(...todos);\n  } catch (err) {\n    console.log(err, \"Произошла ошибка\");\n  }\n}\nhandleTodoData();\n\nfunction renderAllTodos(todos) {\n  todos.forEach((element) => {\n    renderLine(element);\n  });\n}\n\n_const_js__WEBPACK_IMPORTED_MODULE_4__.buttonFind.addEventListener(\"click\", () => {\n  let inputFindValue = _const_js__WEBPACK_IMPORTED_MODULE_4__.inputFind.value.trim();\n  if (inputFindValue) {\n    const foundTodos = findAndGetElements(inputFindValue);\n    console.log(foundTodos);\n\n    if (foundTodos.length) {\n      _const_js__WEBPACK_IMPORTED_MODULE_4__.spanDiv.innerHTML = \"\"; // Очищаем содержимое перед добавлением найденных элементов\n      renderAllTodos(foundTodos);\n\n      // Проверяем, существует ли кнопка \"Очистить\" в DOM\n      const existingClearButton = document.querySelector(\".clear\"); // Ищем кнопку с классом \"clear\"\n      if (!existingClearButton) {\n        // Если кнопка не найдена, создаем её\n        const clearButton = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"Очистить\", \"clear\");\n        const bigContainer = document.querySelector(\".big_container\");\n        bigContainer.appendChild(clearButton);\n\n        // Добавляем обработчик события для кнопки \"Очистить\"\n        clearButton.addEventListener(\"click\", () => {\n          _const_js__WEBPACK_IMPORTED_MODULE_4__.spanDiv.innerHTML = \"\"; // Очищаем содержимое\n          _const_js__WEBPACK_IMPORTED_MODULE_4__.inputFind.value = \"\"; // Очищаем поле ввода\n          bigContainer.removeChild(clearButton); // Удаляем кнопку \"Очистить\"\n\n          // Рендерим все элементы из todoArray\n          renderAllTodos(todoArray);\n        });\n      }\n    } else {\n      alert(\"Нет никаких совпадений !!!!\");\n    }\n  }\n});\nfunction findAndGetElements(inputFindValue) {\n  const foundTodosBySearch = [];\n  todoArray.forEach((element) => {\n    if (element.title?.includes(inputFindValue)) {\n      foundTodosBySearch.push(element);\n    }\n  });\n  return foundTodosBySearch;\n}\n\nfunction formTextLine(todo, isCompleted) {\n  return `userId: ${todo.userId}, ID: ${todo.id}, Title: ${todo.title}, Completed: ${isCompleted}`;\n}\n\nfunction setStylesCompletedTodo(completed, element) {\n  if (!element) return;\n\n  if (completed) {\n    element.style.textDecoration = \"none\";\n  } else {\n    element.style.textDecoration = \"line-through\";\n  }\n\n  return !completed;\n}\n\nfunction renderLine(todo) {\n  if (!(0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.checkIsObject)(todo)) return;\n  let completed = todo.completed;\n\n  const line = formTextLine(todo, completed);\n  const container = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(\"\", \"container\");\n  if (completed) {\n    container.style.textDecoration = \"line-through\";\n  }\n  const deleteButton = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"Корзиночка\", \"button deleted-button\");\n  const buttonComplete = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createButton)(\"Завершить дело\");\n  const textDiv = (0,_onstructorElement_js__WEBPACK_IMPORTED_MODULE_1__.createDiv)(line, \"line\");\n\n  _const_js__WEBPACK_IMPORTED_MODULE_4__.spanDiv.appendChild(container);\n  container.appendChild(textDiv);\n  container.appendChild(deleteButton);\n  container.appendChild(buttonComplete);\n\n  deleteButton.addEventListener(\"click\", () => {\n    _const_js__WEBPACK_IMPORTED_MODULE_4__.spanDiv.removeChild(container);\n  });\n\n  buttonComplete.addEventListener(\"click\", () => {\n    completed = setStylesCompletedTodo(completed, container);\n    textDiv.textContent = formTextLine(todo, completed);\n  });\n}\n\n_const_js__WEBPACK_IMPORTED_MODULE_4__.buttonCreate.addEventListener(\"click\", () => {\n  let inputValue = _const_js__WEBPACK_IMPORTED_MODULE_4__.inputCreate.value.trim();\n\n  if (inputValue) {\n    const newTodo = (0,_dto_js__WEBPACK_IMPORTED_MODULE_0__.todoDto)(11, \"НОВЫЙ ОБЬЕКТ!!!!!!\");\n    textAll.push(newTodo);\n    _const_js__WEBPACK_IMPORTED_MODULE_4__.inputCreate.value = \"\";\n    renderLine(newTodo);\n  } else {\n    alert(\"Введите текст для добавления строки!\"); // Уведомление, если поле пустое\n  }\n});\n\n\n//# sourceURL=webpack://zzz/./src/script.js?");

/***/ }),

/***/ "./src/сonstructorElement.js":
/*!***********************************!*\
  !*** ./src/сonstructorElement.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButton: () => (/* binding */ createButton),\n/* harmony export */   createDiv: () => (/* binding */ createDiv)\n/* harmony export */ });\nfunction createDiv(text = \"\", className = \"\") {\n  const lineDiv = document.createElement(\"div\");\n  lineDiv.className = className;\n  lineDiv.textContent = text;\n  return lineDiv;\n}\n\nfunction createButton(text = \"\", className = \"\") {\n  const inputElement = document.createElement(\"button\");\n  inputElement.className = className;\n  inputElement.textContent = text;\n  return inputElement;\n}\n\n\n//# sourceURL=webpack://zzz/./src/%D1%81onstructorElement.js?");

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