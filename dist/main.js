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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const tasks = [\n  { description: 'Task1', isCompleted: false, index: 1 },\n  { description: 'Task2', isCompleted: false, index: 2 },\n  { description: 'Task3', isCompleted: false, index: 3 },\n  { description: 'Task4', isCompleted: false, index: 4 },\n  { description: 'Task5', isCompleted: false, index: 5 },\n  { description: 'Task6', isCompleted: false, index: 6 },\n  { description: 'Task7', isCompleted: false, index: 7 },\n  { description: 'Task8', isCompleted: false, index: 8 },\n  { description: 'Task9', isCompleted: false, index: 9 },\n];\n\nconst createTaskItem = (task) => {\n  const taskItem = document.createElement('li');\n  const form = document.createElement('form');\n  form.innerHTML = '<input type=\"checkbox\" name=\"isCompleted\" value=${task.isCompleted}/>';\n  const taskDescription = document.createElement('p');\n  taskDescription.textContent = task.description;\n\n  taskItem.id = task.index;\n  taskItem.appendChild(form);\n  taskItem.appendChild(taskDescription);\n\n  return taskItem;\n}\n\nwindow.addEventListener('load', () => {\n  const todoList = document.querySelector('.todo-list');\n\n  tasks.forEach(task => {\n    todoList.appendChild(createTaskItem(task));\n  })\n\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;