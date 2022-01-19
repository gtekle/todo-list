/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/cocogoose-pro-regular.ttf */ \"./src/assets/fonts/cocogoose-pro-regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  box-sizing: border-box;\\n}\\n\\n@font-face {\\n  font-family: cocogoose;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\nbody {\\n  background-color: #ddd;\\n  margin: 0;\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.btn {\\n  cursor: pointer;\\n}\\n\\n#header,\\n#footer {\\n  background-color: darkgray;\\n  width: 100%;\\n  height: 5px;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n#main {\\n  max-width: 94%;\\n  min-height: calc(100vh - 64px);\\n  margin: 12px auto;\\n  text-align: center;\\n}\\n\\n.main-section-title {\\n  color: darkslategray;\\n  font-family: cocogoose, sans-serif;\\n}\\n\\n.todo-list {\\n  list-style: none;\\n  text-align: center;\\n  padding: 0;\\n  background-color: #d3d3d3;\\n  margin: 0;\\n  box-shadow: 4px 4px 4px 2px rgba(0, 0, 0, 0.2);\\n}\\n\\n.todo-heading {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.todo-heading h2 {\\n  color: darkgray;\\n  font-size: 20px;\\n  line-height: 24px;\\n  font-weight: 700;\\n}\\n\\n.todo-heading .btn-refresh {\\n  border: none;\\n  background-color: #fff;\\n  text-align: right;\\n  padding: 0;\\n  margin: 0;\\n  margin-right: 10px;\\n}\\n\\n.todo-heading i {\\n  color: darkgray;\\n  font-size: 22px;\\n  font-weight: 500;\\n}\\n\\n.btn i:hover {\\n  color: black;\\n}\\n\\n.btn i:active {\\n  color: blueviolet;\\n}\\n\\n#form-add-task {\\n  display: flex;\\n  width: 100%;\\n  text-align: justify;\\n  background-color: #fff;\\n  border-bottom: 1px solid gray;\\n}\\n\\n#form-add-task input {\\n  width: calc(100% - 43px);\\n  margin: 0;\\n  font-size: 17px;\\n  line-height: 32px;\\n  padding: 3px 10px;\\n  font-style: italic;\\n  border: none;\\n  outline: none;\\n}\\n\\n#form-add-task .btn-add-task {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  color: grey;\\n  border: none;\\n  margin: 0;\\n  font-weight: 700;\\n  vertical-align: text-top;\\n  font-size: 16px;\\n  line-height: 24px;\\n  background-color: #fff;\\n}\\n\\n.todo-list li {\\n  display: flex;\\n  border-bottom: 1px solid #bbb;\\n  justify-content: space-between;\\n  align-items: center;\\n  background-color: #fff;\\n  padding-left: 10px;\\n  font-size: 16px;\\n  font-weight: 500;\\n  cursor: text;\\n}\\n\\ninput[name=\\\"isCompleted\\\"] {\\n  cursor: pointer;\\n}\\n\\n.item-description {\\n  display: flex;\\n  align-items: center;\\n  font-size: 18px;\\n  width: 100%;\\n}\\n\\n.todo-list li .task-description {\\n  color: rgba(0, 0, 0, 0.8);\\n  width: 100%;\\n  margin: 0;\\n  padding: 10px;\\n  font-size: 16px;\\n  font-weight: 500;\\n  text-align: left;\\n}\\n\\n.todo-list .fa-ellipsis-v {\\n  color: grey;\\n  font-size: 16px;\\n  padding: 5px;\\n  cursor: move;\\n  z-index: 10;\\n}\\n\\n.todo-list .btn-v-ellipsis {\\n  border: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n  z-index: 100;\\n}\\n\\n.todo-list .btn-trash {\\n  border: none;\\n  background-color: transparent;\\n  cursor: pointer;\\n  z-index: 110;\\n}\\n\\n.todo-list .fa-trash {\\n  color: red;\\n  font-size: 16px;\\n  padding: 5px;\\n}\\n\\n.todo-list .fa-ellipsis-v:hover {\\n  color: black;\\n}\\n\\n.todo-list .over {\\n  background-color: #cababa;\\n}\\n\\n.todo-list li > * {\\n  margin-right: 10px;\\n}\\n\\n.btn-clear-completed {\\n  border: none;\\n  padding: 6px;\\n  margin: 10px;\\n  font-size: 16px;\\n  background-color: transparent;\\n  font-weight: 700;\\n  color: darkslategray;\\n}\\n\\n.d-off {\\n  display: none;\\n}\\n\\n@media screen and (min-width: 768px) {\\n  #main {\\n    max-width: 40%;\\n    min-height: calc(100vh - 88px);\\n    margin: 24px auto;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/assets/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/ClearAllButton.js":
/*!******************************************!*\
  !*** ./src/components/ClearAllButton.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst btnClearAllCompleted = () => {\n  const btnClearCompleted = document.createElement('button');\n  btnClearCompleted.setAttribute('type', 'button');\n  btnClearCompleted.setAttribute('name', 'btnClearCompleted');\n  btnClearCompleted.innerText = 'Clear all completed';\n  btnClearCompleted.classList.add('btn', 'btn-clear-completed');\n\n  return btnClearCompleted;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (btnClearAllCompleted);\n\n//# sourceURL=webpack://todo-list/./src/components/ClearAllButton.js?");

/***/ }),

/***/ "./src/components/CreateNewTaskItem.js":
/*!*********************************************!*\
  !*** ./src/components/CreateNewTaskItem.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/DataStore.js */ \"./src/modules/DataStore.js\");\n/* harmony import */ var _TaskListItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TaskListItem.js */ \"./src/components/TaskListItem.js\");\n\n\n\n\n\nconst formAddTask = () => {\n  const form = document.createElement('form');\n  form.id = 'form-add-task';\n  form.innerHTML = `<input type=\"text\" name=\"newTask\" placeholder=\"Add new task ...\" required/>\n    <button type=\"submit\" tabindex=-1 class=\"btn btn-add-task\">\n    <i class=\"material-icons\">&#xe31b;</i>\n    </button>`;\n\n  form.addEventListener('submit', (event) => {\n    event.preventDefault();\n\n    if (localStorage.getItem('tasks') === 'undefined') {\n      localStorage.setItem('tasks', JSON.stringify([]));\n    }\n\n    _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tasks = JSON.parse(localStorage.getItem('tasks'));\n\n    const { newTask } = form.elements;\n    const task = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](newTask.value, false, _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].tasks.length + 1);\n    task.addTask();\n    (0,_TaskListItem_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(task);\n    (0,_TaskListItem_js__WEBPACK_IMPORTED_MODULE_2__.refreshTaskList)();\n    newTask.value = '';\n    newTask.style.focus = false;\n  });\n  return form;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formAddTask);\n\n//# sourceURL=webpack://todo-list/./src/components/CreateNewTaskItem.js?");

/***/ }),

/***/ "./src/components/HeadingTaskListItem.js":
/*!***********************************************!*\
  !*** ./src/components/HeadingTaskListItem.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkRefreshButtonEvent\": () => (/* binding */ checkRefreshButtonEvent),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _TaskListItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskListItem.js */ \"./src/components/TaskListItem.js\");\n\n\nconst todoListHeading = () => {\n  const todoHeading = document.createElement('li');\n  todoHeading.innerHTML = `<h2> Today's Tasks </h2>\n    <button type='button' class='btn btn-refresh'>\n    <i class=\"fa fa-refresh\"></i></button>`;\n  todoHeading.classList.add('todo-heading');\n\n  return todoHeading;\n};\n\nconst checkRefreshButtonEvent = () => {\n  const btnRefreshList = document.querySelector('.btn-refresh');\n\n  btnRefreshList.addEventListener('click', (event) => {\n    event.stopPropagation();\n\n    (0,_TaskListItem_js__WEBPACK_IMPORTED_MODULE_0__.refreshTaskList)();\n  });\n\n  (0,_TaskListItem_js__WEBPACK_IMPORTED_MODULE_0__.clearAllCompletedTasksEvent)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoListHeading);\n\n//# sourceURL=webpack://todo-list/./src/components/HeadingTaskListItem.js?");

/***/ }),

/***/ "./src/components/TaskListItem.js":
/*!****************************************!*\
  !*** ./src/components/TaskListItem.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"refreshTaskList\": () => (/* binding */ refreshTaskList),\n/* harmony export */   \"isTaskCompleted\": () => (/* binding */ isTaskCompleted),\n/* harmony export */   \"isTaskClicked\": () => (/* binding */ isTaskClicked),\n/* harmony export */   \"checkTaskDragEvents\": () => (/* binding */ checkTaskDragEvents),\n/* harmony export */   \"clearAllCompletedTasksEvent\": () => (/* binding */ clearAllCompletedTasksEvent),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/DataStore.js */ \"./src/modules/DataStore.js\");\n/* harmony import */ var _modules_Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/Task.js */ \"./src/modules/Task.js\");\n\n\n\nconst refreshTaskList = () => {\n  const tasks = document.querySelectorAll('.task');\n  tasks.forEach((prevTask) => {\n    prevTask.parentNode.removeChild(prevTask);\n  });\n\n  _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks = _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateTaskIndex();\n  _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tasks.forEach((task) => {\n    // eslint-disable-next-line\n    renderTaskItem(task);\n  });\n};\n\nconst isTaskCompleted = () => {\n  const completedTasks = document.querySelectorAll('input[name=\"isCompleted\"]');\n  completedTasks.forEach((btnIsCompleted) => {\n    btnIsCompleted.addEventListener('click', () => {\n      if (btnIsCompleted.checked) {\n        btnIsCompleted.checked = true;\n        btnIsCompleted.parentNode.nextSibling.nextSibling.style.textDecoration = 'line-through';\n      } else {\n        btnIsCompleted.checked = false;\n        btnIsCompleted.parentNode.nextSibling.nextSibling.style.textDecoration = '';\n      }\n    });\n  });\n};\n\nconst isTaskClicked = () => {\n  const allTasks = document.querySelectorAll('.task');\n\n  allTasks.forEach((task) => {\n    const newTaskDescription = ['', ''];\n    const taskDescription = task.childNodes[0].childNodes[2];\n    const btnEllipsis = task.childNodes[2];\n    const btnDeleteTask = task.childNodes[4];\n\n    task.addEventListener('click', () => {\n      newTaskDescription[0] = taskDescription.innerText;\n      newTaskDescription.push(parseInt(task.id, 10));\n      taskDescription.contentEditable = true;\n      taskDescription.focus();\n\n      // The following two lines of code are used to move the cursor\n      // to the end of existing text in contentEditable HTML5 elements.\n      document.execCommand('selectAll', false, null);\n      document.getSelection().collapseToEnd();\n\n      taskDescription.style.outline = 'none';\n      task.style.backgroundColor = 'lightgreen';\n      taskDescription.style.color = 'blue';\n      btnEllipsis.classList.add('d-off');\n      btnDeleteTask.classList.remove('d-off');\n\n      if (!btnDeleteTask.classList.contains('d-off')) {\n        btnDeleteTask.addEventListener('click', (event) => {\n          event.stopImmediatePropagation();\n\n          const task = btnDeleteTask.parentNode;\n          const targetTask = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n          targetTask.removeTask(parseInt(task.id, 10));\n          task.parentNode.removeChild(task);\n          refreshTaskList();\n        });\n      }\n\n      allTasks.forEach((inactiveTask) => {\n        if (task !== inactiveTask) {\n          inactiveTask.childNodes[0].childNodes[2].contentEditable = false;\n          inactiveTask.style.backgroundColor = '#fff';\n          inactiveTask.childNodes[0].childNodes[2].style.color = '#000';\n          inactiveTask.childNodes[0].childNodes[2].style.opacity = '0.8';\n          inactiveTask.childNodes[0].childNodes[2].style.border = 'none';\n          inactiveTask.childNodes[4].classList.add('d-off');\n          inactiveTask.childNodes[2].classList.remove('d-off');\n        }\n      });\n    });\n\n    taskDescription.addEventListener('input', () => {\n      newTaskDescription[1] = task.childNodes[0].childNodes[2].innerText;\n    });\n\n    taskDescription.addEventListener('focusout', () => {\n      if (newTaskDescription[0] !== newTaskDescription[1] && newTaskDescription[1] !== '') {\n        const targetTask = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        targetTask.editTask(newTaskDescription[1], parseInt(task.id, 10) - 1);\n        newTaskDescription.length = 2;\n      }\n    });\n  });\n};\n\nconst dragDropIndices = [];\nconst checkTaskDragEvents = () => {\n  const taskItems = document.querySelectorAll('.task');\n\n  taskItems.forEach((task) => {\n    task.addEventListener('dragstart', () => {\n      if (dragDropIndices.length === 0) {\n        dragDropIndices.push(parseInt(task.id, 10) - 1);\n      }\n    });\n\n    task.addEventListener('dragover', (event) => {\n      event.preventDefault();\n\n      task.classList.add('over');\n    });\n\n    task.addEventListener('drop', (event) => {\n      event.stopImmediatePropagation();\n\n      dragDropIndices.push(parseInt(task.id, 10) - 1);\n      task.classList.remove('over');\n      _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].swapTasks(dragDropIndices[0], dragDropIndices[1]);\n      refreshTaskList();\n    }, (function runAfterAll() {\n      dragDropIndices.length = 0;\n    }()));\n\n    task.addEventListener('dragleave', () => {\n      task.classList.remove('over');\n    });\n  });\n};\n\nconst clearAllCompletedTasksEvent = () => {\n  const btnClearAllCompleted = document.querySelector('.btn-clear-completed');\n\n  btnClearAllCompleted.addEventListener('click', (event) => {\n    event.stopPropagation();\n\n    let completedTasksArray = [];\n    const completedTasks = document.querySelectorAll('input[name=\"isCompleted\"]');\n    [...completedTasks].filter((btnChecked) => btnChecked.checked === true);\n    completedTasks.forEach((btnCheck) => {\n      if (btnCheck.checked === true) {\n        const targetTaskItem = btnCheck.parentNode.parentNode.parentNode;\n        completedTasksArray.push(targetTaskItem);\n      }\n    });\n\n    completedTasksArray.forEach((item) => {\n      const targetTask = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      targetTask.removeTask(parseInt(item.id, 10));\n      item.parentNode.removeChild(item);\n    }, (function runAfterAll() {\n      completedTasksArray = [];\n      refreshTaskList();\n    }()));\n  });\n};\n\nconst renderTaskItem = (task) => {\n  if (!task) return;\n\n  const tasksContainer = document.querySelector('.todo-list');\n  const taskItem = document.createElement('li');\n  taskItem.innerHTML = `<div class=\"item-description\"><form id=\"form-is-completed\">\n  <input type=\"checkbox\" id='chkcompleted-${task.index}' name=\"isCompleted\" value=${task.isCompleted}></input></form>\n  <p class=\"task-description\">${task.description}</p></div>\n  <button type='button' class='btn btn-v-ellipsis'><i class=\"fa fa-ellipsis-v\"></i></button>\n  <button type='button' class='btn btn-trash d-off'><i class=\"fa fa-trash\" aria-hidden=\"true\"></i></button>`;\n  taskItem.id = task.index;\n  taskItem.setAttribute('draggable', 'true');\n  taskItem.classList.add('task');\n\n  tasksContainer.appendChild(taskItem);\n\n  isTaskClicked();\n  checkTaskDragEvents();\n  isTaskCompleted();\n  clearAllCompletedTasksEvent();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTaskItem);\n\n//# sourceURL=webpack://todo-list/./src/components/TaskListItem.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ \"./src/assets/css/style.css\");\n/* harmony import */ var _assets_img_todo_list_desktop_v_snapshot_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/img/todo-list-desktop-v-snapshot.png */ \"./src/assets/img/todo-list-desktop-v-snapshot.png\");\n/* harmony import */ var _modules_Task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/DataStore.js */ \"./src/modules/DataStore.js\");\n/* harmony import */ var _components_HeadingTaskListItem_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HeadingTaskListItem.js */ \"./src/components/HeadingTaskListItem.js\");\n/* harmony import */ var _components_TaskListItem_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TaskListItem.js */ \"./src/components/TaskListItem.js\");\n/* harmony import */ var _components_CreateNewTaskItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CreateNewTaskItem.js */ \"./src/components/CreateNewTaskItem.js\");\n/* harmony import */ var _components_ClearAllButton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ClearAllButton.js */ \"./src/components/ClearAllButton.js\");\n\n\n\n\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  const todoList = document.querySelector('.todo-list');\n  todoList.appendChild((0,_components_HeadingTaskListItem_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n  todoList.appendChild((0,_components_CreateNewTaskItem_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n\n  if (localStorage.getItem('tasks') === 'undefined' || localStorage.getItem('tasks') === null) {\n    localStorage.setItem('tasks', JSON.stringify([]));\n  }\n\n  _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].tasks = JSON.parse(localStorage.getItem('tasks'));\n\n  _modules_DataStore_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].tasks.forEach((task) => {\n    if (task?.description === '') {\n      const taskToBeRemoved = new _modules_Task_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n      taskToBeRemoved.removeTask(parseInt(task.index, 10));\n      (0,_components_TaskListItem_js__WEBPACK_IMPORTED_MODULE_5__.refreshTaskList)();\n    } else (0,_components_TaskListItem_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(task);\n  });\n\n  todoList.parentNode.appendChild((0,_components_ClearAllButton_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n\n  (0,_components_HeadingTaskListItem_js__WEBPACK_IMPORTED_MODULE_4__.checkRefreshButtonEvent)();\n});\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/DataStore.js":
/*!**********************************!*\
  !*** ./src/modules/DataStore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataStore)\n/* harmony export */ });\nclass DataStore {\n  static constructor() {\n    this.tasks = [];\n  }\n\n  static getTasks() {\n    this.tasks = JSON.parse(localStorage.getItem('tasks'));\n    return JSON.parse(localStorage.getItem('tasks'));\n  }\n\n  static saveTasks(task) {\n    this.tasks.push(task);\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\n  }\n\n  static editTask(newDescription, index) {\n    this.tasks[index].description = newDescription;\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\n  }\n\n  static deleteTask(index) {\n    this.tasks = this.tasks.filter((task) => task.index !== index);\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\n  }\n\n  static updateTaskIndex() {\n    for (let i = 0; i < this.tasks.length; i += 1) {\n      this.tasks[i].index = i + 1;\n    }\n\n    localStorage.setItem('tasks', JSON.stringify(this.tasks));\n\n    return this.tasks;\n  }\n\n  static swapTasks(taskOneIndex, taskTwoIndex) {\n    const temp = this.tasks[taskTwoIndex];\n    this.tasks[taskTwoIndex] = this.tasks[taskOneIndex];\n    this.tasks[taskOneIndex] = temp;\n\n    DataStore.updateTaskIndex();\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/DataStore.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _DataStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataStore.js */ \"./src/modules/DataStore.js\");\n\n\nclass Task {\n  constructor(description, isCompleted = false, index) {\n    this.description = description;\n    this.isCompleted = isCompleted;\n    this.index = index;\n  }\n\n  addTask() {\n    _DataStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveTasks(this);\n  }\n\n  removeTask(index) {\n    this.index = index;\n    _DataStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteTask(this.index);\n  }\n\n  editTask(description, index) {\n    this.index = index;\n    _DataStore_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].editTask(description, this.index);\n  }\n}\n\n//# sourceURL=webpack://todo-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/assets/fonts/cocogoose-pro-regular.ttf":
/*!****************************************************!*\
  !*** ./src/assets/fonts/cocogoose-pro-regular.ttf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6731ef40f4416b5c9069.ttf\";\n\n//# sourceURL=webpack://todo-list/./src/assets/fonts/cocogoose-pro-regular.ttf?");

/***/ }),

/***/ "./src/assets/img/todo-list-desktop-v-snapshot.png":
/*!*********************************************************!*\
  !*** ./src/assets/img/todo-list-desktop-v-snapshot.png ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a0d3b87095ec6aee15f3.png\";\n\n//# sourceURL=webpack://todo-list/./src/assets/img/todo-list-desktop-v-snapshot.png?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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