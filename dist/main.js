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

/***/ "./modules/add.js":
/*!************************!*\
  !*** ./modules/add.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"addNewLikeToAPI\": () => (/* binding */ addNewLikeToAPI),\n/* harmony export */   \"clearInputValues\": () => (/* binding */ clearInputValues),\n/* harmony export */   \"closeCommentWindow\": () => (/* binding */ closeCommentWindow),\n/* harmony export */   \"displayComments\": () => (/* binding */ displayComments),\n/* harmony export */   \"displayItemsTotal\": () => (/* binding */ displayItemsTotal),\n/* harmony export */   \"getItemsTotal\": () => (/* binding */ getItemsTotal),\n/* harmony export */   \"populateMeals\": () => (/* binding */ populateMeals),\n/* harmony export */   \"popupComments\": () => (/* binding */ popupComments),\n/* harmony export */   \"updateCommentCounter\": () => (/* binding */ updateCommentCounter),\n/* harmony export */   \"updateLastComment\": () => (/* binding */ updateLastComment)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./modules/api.js\");\n/* harmony import */ var _api2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api2.js */ \"./modules/api2.js\");\n\n\n\n\nconst listItems = document.querySelector('.list-items');\nconst items = document.querySelector('.all-items');\n\nconst populateMeals = async () => {\n  const allMeals = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getMeals)();\n  let allLikes = await (0,_api2_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\n  allLikes = JSON.parse(allLikes);\n  allMeals.categories.forEach((meal) => {\n    let mealLikes = 0;\n    if (allLikes.length === 0) {\n      (0,_api2_js__WEBPACK_IMPORTED_MODULE_1__.addNewLike)(meal.idCategory);\n    }\n    allLikes.forEach((like) => {\n      if (like.item_id === meal.idCategory) {\n        mealLikes = like.likes;\n      }\n    });\n    const listItem = document.createElement('div');\n    listItem.id = meal.idCategory;\n    listItem.className = 'list-item';\n    listItem.innerHTML = `<img src=${meal.strCategoryThumb} alt=\"Meal-image\" class=\"meal-image\">\n        <div class=\"meal-title\">\n          <h2>${meal.strCategory}</h2>\n          <i class=\"fas fa-heart like-icon\"></i>\n        </div>\n        <span class=\"meal-likes\">${mealLikes} likes</span>\n        <button class=\"comments\">Comments</button>\n        <button class=\"reservations\">Reservations</button>\n    `;\n    listItems.appendChild(listItem);\n  });\n};\n\nconst addNewLikeToAPI = (mealId, likes) => {\n  const likeSpans = document.querySelectorAll('.meal-likes');\n  likeSpans.forEach((likeSpan) => {\n    if (likeSpan.parentNode.id === mealId) {\n      let newlikes = parseInt(likes, 10) + 1;\n      newlikes = newlikes.toString();\n      likeSpan.textContent = `${newlikes} likes`;\n      (0,_api2_js__WEBPACK_IMPORTED_MODULE_1__.updateLike)(mealId, newlikes);\n    }\n  });\n};\n\nconst popupComments = async (meal) => {\n  const allMeals = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getMeals)();\n  const commentMeal = allMeals.categories[meal - 1];\n  const commentWindow = document.querySelector('.comment-window');\n  commentWindow.id = meal;\n  commentWindow.innerHTML = `\n    <i class=\"fa-solid fa-x\"></i>\n    <div class=\"comment-meal-info\">\n      <img src=${commentMeal.strCategoryThumb} alt=\"Meal-image\" class=\"comment-meal-image\">\n      <h2 class='window-title'>${commentMeal.strCategory}</h2>\n      <p class='window-description'>${commentMeal.strCategoryDescription}</p>\n    </div>\n    <section class=\"main-comment\">\n    <span class=\"comment-counter\"></span>\n    <ul class=\"comment-list\"></ul>\n    </section>\n    <h3 class=\"comment-title\">Add a comment</h3>\n    <div class=\"comment-form\">\n      <input type=\"text\" class=\"name-input\" placeholder=\"Your name\" required/>\n      <textarea class=\"comment-input\" placeholder=\"Your insgihts...\" required/></textarea>\n      <button class=\"comment-btn\">Comment</button>\n    </div>`;\n  commentWindow.classList.toggle('show-comment-window');\n};\n\nconst updateCommentCounter = async (itemID) => {\n  const allComments = await (0,_api2_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(itemID);\n  const counter = document.querySelector('.comment-counter');\n  counter.innerHTML = `<i class=\"fa-solid fa-comment\"></i>${allComments.length ? allComments.length : 0} comments`;\n};\n\nconst clearInputValues = () => {\n  const nameInput = document.querySelector('.name-input');\n  const commentInput = document.querySelector('.comment-input');\n  nameInput.value = '';\n  commentInput.value = '';\n};\n\nconst updateLastComment = async (itemID) => {\n  const allComments = await (0,_api2_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(itemID);\n  const lastComment = allComments[allComments.length - 1];\n  const commentList = document.querySelector('.comment-list');\n  const commentItem = document.createElement('li');\n  commentItem.className = 'comment-item';\n  commentItem.innerHTML = `\n    <li class=\"comment-info\">\n      <p class=\"comment-text\">${lastComment.creation_date} ${lastComment.username}:  ${lastComment.comment}</p>\n    </li>\n  `;\n  commentList.appendChild(commentItem);\n  updateCommentCounter(itemID);\n};\n\nconst addComment = async (itemID) => {\n  if (document.querySelector('.name-input').value !== '' && document.querySelector('.comment-input').value !== '') {\n    const reponse = await (0,_api2_js__WEBPACK_IMPORTED_MODULE_1__.addNewComment)(itemID, document.querySelector('.name-input').value, document.querySelector('.comment-input').value);\n    if (reponse === 201) {\n      await (0,_api2_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(itemID);\n      updateLastComment(itemID);\n    }\n  }\n};\n\nconst displayComments = async (itemID) => {\n  const allComments = await (0,_api2_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(itemID);\n  const commentList = document.querySelector('.comment-list');\n  allComments.forEach((comment) => {\n    const commentItem = document.createElement('li');\n    commentItem.className = 'comment-item';\n    commentItem.innerHTML = `\n      <li class=\"comment-info\">\n        <p class=\"comment-text\">${comment.creation_date} ${comment.username}:  ${comment.comment}</p>\n      </li>\n    `;\n    commentList.appendChild(commentItem);\n  });\n  updateCommentCounter(itemID);\n};\n\nconst closeCommentWindow = () => {\n  const commentWindow = document.querySelector('.comment-window');\n  commentWindow.classList.toggle('show-comment-window');\n};\n\nconst getItemsTotal = async () => {\n  const allMeals = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getMeals)();\n  const mealsCount = allMeals.categories.length;\n  return mealsCount;\n};\n\nconst displayItemsTotal = async () => {\n  const mealsCount = await getItemsTotal();\n  items.append(document.createTextNode(` (${mealsCount})`));\n};\n\n\n//# sourceURL=webpack://javascript-group-capstone/./modules/add.js?");

/***/ }),

/***/ "./modules/api.js":
/*!************************!*\
  !*** ./modules/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMealById\": () => (/* binding */ getMealById),\n/* harmony export */   \"getMeals\": () => (/* binding */ getMeals)\n/* harmony export */ });\nconst baseURL = 'https://themealdb.com/api/json/v1/1/';\n\nconst getMeals = async () => {\n  const result = await fetch(`${baseURL}/categories.php`);\n  const allMeals = result.json();\n  return allMeals;\n};\n\nconst getMealById = async (mealId) => {\n  const result = await fetch(`${baseURL}/lookup.php?i=${mealId}`);\n  const singleMeal = result.json();\n  return singleMeal;\n};\n\n\n//# sourceURL=webpack://javascript-group-capstone/./modules/api.js?");

/***/ }),

/***/ "./modules/api2.js":
/*!*************************!*\
  !*** ./modules/api2.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewApp\": () => (/* binding */ addNewApp),\n/* harmony export */   \"addNewComment\": () => (/* binding */ addNewComment),\n/* harmony export */   \"addNewLike\": () => (/* binding */ addNewLike),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"updateLike\": () => (/* binding */ updateLike)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\n// 5qYB5XqSvfCHbkA99j4e NtHb3d5dTrNZkt8GXbKc\nlet appId = 'NtHb3d5dTrNZkt8GXbKc';\nconst addNewApp = async () => {\n  if (appId === '') {\n    const result = await fetch(`${baseURL}/apps/`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n    appId = await result.text();\n  }\n};\n\nconst addNewLike = async (itemId) => {\n  const data = { item_id: itemId };\n  const result = await fetch(`${baseURL}/apps/${appId}/likes/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n  return result;\n};\n\nconst getLikes = async () => {\n  const result = await fetch(`${baseURL}/apps/${appId}/likes/`);\n  const result2 = await result.text();\n  if (result2 === '') {\n    const likes = [];\n    return likes;\n  }\n  const likes = result2;\n  return likes;\n};\n\nconst addNewComment = async (itemID, inputName, inputComment) => {\n  const input = { item_id: itemID, username: inputName, comment: inputComment };\n  const result = await fetch(`${baseURL}/apps/${appId}/comments/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(input),\n  });\n  return result.status;\n};\n\nconst updateLike = async (itemId, likes) => {\n  const data = {\n    item_id: itemId,\n    likes,\n  };\n  const result = await fetch(`${baseURL}/apps/${appId}/likes/`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  });\n  return result;\n};\n\nconst getComments = async (id) => {\n  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NtHb3d5dTrNZkt8GXbKc/comments?item_id=${id}`);\n  const comments = await result.json();\n  return comments;\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./modules/api2.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n/* Core Styles */\\n\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  font-family: 'Lato', sans-serif;\\n}\\n\\nmain {\\n  padding: 2% 15%;\\n}\\n\\n/* Homepage-section */\\n.list-items {\\n  display: grid;\\n  grid-template-columns: repeat(3, 25%);\\n  width: auto;\\n  column-gap: 10%;\\n  overflow: hidden;\\n  justify-content: center;\\n}\\n\\n.list-item {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  padding: 5%;\\n}\\n\\n.list-item .meal-image {\\n  width: auto;\\n  height: auto;\\n}\\n\\n.list-item .meal-title {\\n  display: flex;\\n  align-self: stretch;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\n.list-item .meal-title h2 {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.list-item .meal-title .like-icon {\\n  color: #000;\\n}\\n\\n.list-item .meal-likes {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n.list-item .comments,\\n.list-item .reservations {\\n  background: #fff;\\n  padding: 2%;\\n  font-family: 'Lato', sans-serif;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n/* header */\\nheader {\\n  display: flex;\\n  align-items: center;\\n  padding-left: 10%;\\n  margin-top: 2rem;\\n  margin-bottom: 5rem;\\n  gap: 5rem;\\n  background: rgba(0, 0, 0, 0.5);\\n}\\n\\n.navList {\\n  width: 100%;\\n  display: flex;\\n  gap: 5rem;\\n  margin-left: 20%;\\n  font-size: 20px;\\n}\\n\\n.tags {\\n  color: #562629;\\n}\\n\\n/* Footer-section */\\n.footer-section {\\n  display: flex;\\n  flex-direction: column;\\n  padding: 0;\\n  border: 2px solid #000;\\n  width: auto;\\n  font-size: 18px;\\n}\\n\\n.footer-section p {\\n  margin-left: 3%;\\n  padding: 2% 0;\\n}\\n\\n.footer-section .bottom {\\n  display: flex;\\n  justify-content: flex-end;\\n  background: gray;\\n  border: 2px solid #000;\\n  padding-right: 2px;\\n}\\n\\n/* meal popup comment window */\\n.comment-window {\\n  display: none;\\n}\\n\\n.show-comment-window {\\n  display: grid;\\n  width: 50vw;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  left: 50%;\\n  overflow-y: scroll;\\n  overflow-x: hidden;\\n  transform: translate(-50%, 0);\\n  padding: 2rem;\\n  z-index: 1;\\n  box-shadow: 10px 10px 10px #000;\\n  background: #fff;\\n  border: 3px solid #000;\\n}\\n\\n.comment-meal-image {\\n  width: 200px;\\n  height: auto;\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\\n}\\n\\n.fa-x {\\n  display: flex;\\n  justify-content: flex-end;\\n  font-size: 1.5rem;\\n  margin-bottom: 5%;\\n}\\n\\n.comment-meal-info {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding-bottom: 2rem;\\n}\\n\\n.window-title {\\n  margin: 2rem 0;\\n  font-size: 15px;\\n}\\n\\n.window-description {\\n  font-size: 12px;\\n}\\n\\n.comment-form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  padding-left: 10%;\\n}\\n\\n.comment-title {\\n  text-align: center;\\n  font-size: 20px;\\n  margin-bottom: 2rem;\\n}\\n\\n.name-input {\\n  width: 30%;\\n  height: 20px;\\n  border: 1px solid #000;\\n  padding: 0 5px;\\n  font-size: 15px;\\n}\\n\\n.comment-input {\\n  width: 40%;\\n  min-height: 60px;\\n  border: 1px solid #000;\\n  padding: 0 5px;\\n  font-size: 15px;\\n}\\n\\n.name-input,\\n.comment-input:focus {\\n  outline: none;\\n}\\n\\n.comment-btn {\\n  min-width: 20%;\\n  width: fit-content;\\n  height: 20px;\\n  color: #000;\\n  background: #fff;\\n}\\n\\n.comment-list {\\n  display: grid;\\n  margin-top: 0.5rem;\\n  grid-template-columns: repeat(1, 3fr);\\n  row-gap: 5px;\\n}\\n\\n.comment-text {\\n  display: flex;\\n  font-size: 12px;\\n}\\n\\n.comment-counter {\\n  font-size: 12px;\\n}\\n\\n.main-comment {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1rem;\\n  align-items: center;\\n  padding-bottom: 1rem;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-group-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-group-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/add.js */ \"./modules/add.js\");\n/* harmony import */ var _modules_api2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/api2.js */ \"./modules/api2.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.populateMeals)();\n  (0,_modules_api2_js__WEBPACK_IMPORTED_MODULE_2__.addNewApp)();\n  (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.displayItemsTotal)();\n});\n\ndocument.addEventListener('click', (e) => {\n  if (e.target.classList.contains('like-icon')) {\n    const likes = e.target.parentNode.nextElementSibling.textContent.split(' ')[0];\n    const mealId = e.target.parentNode.parentNode.id;\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.addNewLikeToAPI)(mealId, likes);\n  } else if (e.target.className === 'comments') {\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.popupComments)(e.target.parentElement.id);\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.displayComments)(e.target.parentElement.id);\n    document.getElementsByTagName('main')[0].style.filter = 'blur(4px)';\n    document.getElementsByTagName('body')[0].style.overflow = 'hidden';\n  } else if (e.target.className === 'fa-solid fa-x') {\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.closeCommentWindow)();\n    document.getElementsByTagName('main')[0].style.filter = 'none';\n    document.getElementsByTagName('body')[0].style.overflow = 'auto';\n  }\n});\n\ndocument.addEventListener('click', (e) => {\n  if (e.target.className === 'comment-btn') {\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.addComment)(e.target.parentElement.parentElement.id);\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.updateCommentCounter)(e.target.parentElement.parentElement.id);\n    (0,_modules_add_js__WEBPACK_IMPORTED_MODULE_1__.clearInputValues)();\n  }\n});\n\n//# sourceURL=webpack://javascript-group-capstone/./src/index.js?");

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