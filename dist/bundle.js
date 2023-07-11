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

/***/ "./cardsMass.js":
/*!**********************!*\
  !*** ./cardsMass.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   allCardsMass: () => (/* binding */ allCardsMass)\n/* harmony export */ });\nconst allCardsMass = [\r\n  { value: 6, suit: \"diamonds\", img: \"./cards/diamonds/6.png\" },\r\n  { value: 7, suit: \"diamonds\", img: \"./cards/diamonds/7.png\" },\r\n  { value: 8, suit: \"diamonds\", img: \"./cards/diamonds/8.png\" },\r\n  { value: 9, suit: \"diamonds\", img: \"./cards/diamonds/9.png\" },\r\n  { value: 10, suit: \"diamonds\", img: \"./cards/diamonds/10.png\" },\r\n  { value: 11, suit: \"diamonds\", img: \"./cards/diamonds/11.png\" },\r\n  { value: 12, suit: \"diamonds\", img: \"./cards/diamonds/12.png\" },\r\n  { value: 13, suit: \"diamonds\", img: \"./cards/diamonds/13.png\" },\r\n  { value: 14, suit: \"diamonds\", img: \"./cards/diamonds/14.png\" },\r\n  { value: 6, suit: \"clubs\", img: \"./cards/clubs/6.png\" },\r\n  { value: 7, suit: \"clubs\", img: \"./cards/clubs/7.png\" },\r\n  { value: 8, suit: \"clubs\", img: \"./cards/clubs/8.png\" },\r\n  { value: 9, suit: \"clubs\", img: \"./cards/clubs/9.png\" },\r\n  { value: 10, suit: \"clubs\", img: \"./cards/clubs/10.png\" },\r\n  { value: 11, suit: \"clubs\", img: \"./cards/clubs/11.png\" },\r\n  { value: 12, suit: \"clubs\", img: \"./cards/clubs/12.png\" },\r\n  { value: 13, suit: \"clubs\", img: \"./cards/clubs/13.png\" },\r\n  { value: 14, suit: \"clubs\", img: \"./cards/clubs/14.png\" },\r\n  { value: 6, suit: \"hearts\", img: \"./cards/hearts/6.png\" },\r\n  { value: 7, suit: \"hearts\", img: \"./cards/hearts/7.png\" },\r\n  { value: 8, suit: \"hearts\", img: \"./cards/hearts/8.png\" },\r\n  { value: 9, suit: \"hearts\", img: \"./cards/hearts/9.png\" },\r\n  { value: 10, suit: \"hearts\", img: \"./cards/hearts/10.png\" },\r\n  { value: 11, suit: \"hearts\", img: \"./cards/hearts/11.png\" },\r\n  { value: 12, suit: \"hearts\", img: \"./cards/hearts/12.png\" },\r\n  { value: 13, suit: \"hearts\", img: \"./cards/hearts/13.png\" },\r\n  { value: 14, suit: \"hearts\", img: \"./cards/hearts/14.png\" },\r\n  { value: 6, suit: \"spades\", img: \"./cards/spades/6.png\" },\r\n  { value: 7, suit: \"spades\", img: \"./cards/spades/7.png\" },\r\n  { value: 8, suit: \"spades\", img: \"./cards/spades/8.png\" },\r\n  { value: 9, suit: \"spades\", img: \"./cards/spades/9.png\" },\r\n  { value: 10, suit: \"spades\", img: \"./cards/spades/10.png\" },\r\n  { value: 11, suit: \"spades\", img: \"./cards/spades/11.png\" },\r\n  { value: 12, suit: \"spades\", img: \"./cards/spades/12.png\" },\r\n  { value: 13, suit: \"spades\", img: \"./cards/spades/13.png\" },\r\n  { value: 14, suit: \"spades\", img: \"./cards/spades/14.png\" },\r\n];\r\n\n\n//# sourceURL=webpack://game-card/./cardsMass.js?");

/***/ }),

/***/ "./endGame.js":
/*!********************!*\
  !*** ./endGame.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   endGame: () => (/* binding */ endGame)\n/* harmony export */ });\n/* harmony import */ var _levelChoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levelChoice.js */ \"./levelChoice.js\");\n\r\nfunction endGame() {\r\n  let el = document.querySelector(\"body\");\r\n  let html = `\r\n    <div div class=\"end-container container center\">\r\n    <img src=\"./cards/win.png\" class=\"end-img\" alt=\"win\">\r\n    <div><p class=\"end-text\">Вы выиграли!</p></div>\r\n    <div><p class=\"text\">Затраченное время:</p></div>\r\n    <div><p class=\"time-result\">01.20</p></div>\r\n    <div class=\"container-start-button\"><button class=\"start-button\" id=\"start\">Играть снова</button></div>\r\n    </div>`;\r\n  el.innerHTML = el.innerHTML + html;\r\n  let buttonAgain = document.getElementById(\"start\");\r\n  buttonAgain.addEventListener(\"click\", () => {\r\n    (0,_levelChoice_js__WEBPACK_IMPORTED_MODULE_0__.levelStr)();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://game-card/./endGame.js?");

/***/ }),

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   goGame: () => (/* binding */ goGame)\n/* harmony export */ });\n/* harmony import */ var _levelChoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levelChoice.js */ \"./levelChoice.js\");\n/* harmony import */ var _endGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endGame.js */ \"./endGame.js\");\n\r\n\r\nlet answer = null;\r\nlet checkRight = 0;\r\nlet timerTablo;\r\nlet sec = 0;\r\nlet min = 0;\r\nlet t;\r\nlet buttonTime = 5;\r\nlet button;\r\n\r\nfunction goGame(cardRandomMass, levelChoice) {\r\n  let levelEl = document.querySelector(\"body\");\r\n  let levelHtml = `\r\n    <header class=\"header\"><div class=\"header-time-box\"><div class=\"header-time-name\"><p class=\"min-sec\">min</p><p class=\"min-sec\">sec</p></div><h1 class=\"timer\"><time class=\"timer\">00:00</time></h1></div><button class=\"header-button\">5</button></header>\r\n    <div class=\"cards-container center\"></div>`;\r\n  levelEl.innerHTML = levelHtml;\r\n  levelEl = document.getElementsByTagName(\"div\")[2];\r\n  levelHtml = cardRandomMass\r\n    .map((card) => {\r\n      return `<img src=${card.img} data=${card.img} class=\"card\" alt=\"card\">`;\r\n    })\r\n    .join(\"\");\r\n\r\n  levelEl.innerHTML = levelHtml;\r\n  levelEl = document.querySelector(\"body\");\r\n  levelEl.removeAttribute(\"class\");\r\n  const buttonInterval = setInterval(() => {\r\n    button = document.getElementsByClassName(\"header-button\")[0];\r\n    button.textContent = buttonTime;\r\n    buttonTime--;\r\n    button.textContent = buttonTime;\r\n    if (buttonTime === 0) {\r\n      clearInterval(buttonInterval);\r\n      button.textContent = \"Начать заново\";\r\n    }\r\n  }, 1000);\r\n  setTimeout(timer, 5 * 1000);\r\n  setTimeout(goBackButton, 5 * 1000, cardRandomMass);\r\n  setTimeout(hideAndShow, 5 * 1000, levelChoice);\r\n\r\n  reset();\r\n\r\n  // victory()\r\n}\r\n\r\nfunction hideAndShow(levelChoice) {\r\n  let cards = document.getElementsByClassName(\"card\");\r\n\r\n  for (const card of cards) {\r\n    card.setAttribute(\"src\", \"./cards/mask.png\");\r\n  }\r\n  for (const card of cards) {\r\n    card.addEventListener(\"click\", () => {\r\n      const oldSrc = card.getAttribute(\"data\");\r\n\r\n      const checkEndGame = document.getElementsByTagName(\"body\")[0];\r\n      // console.log(checkEndGame.getAttribute('class'));\r\n      checkEndGame.getAttribute(\"class\") === null ? gameClick() : clg();\r\n      function clg() {\r\n        return;\r\n      }\r\n      function gameClick() {\r\n        card.setAttribute(\"src\", oldSrc);\r\n        if (answer === null) {\r\n          answer = oldSrc;\r\n        } else if (answer === oldSrc) {\r\n          answer = null;\r\n          checkRight++;\r\n          if (checkRight === levelChoice) {\r\n            let levelEl = document.querySelector(\"body\");\r\n            levelEl.setAttribute(\"class\", \"hiden\");\r\n            clearTimeout(t);\r\n            (0,_endGame_js__WEBPACK_IMPORTED_MODULE_1__.endGame)();\r\n          }\r\n        } else {\r\n          alert(\"Вы проиграли ---> меню поражения\");\r\n          let levelEl = document.querySelector(\"body\");\r\n          levelEl.setAttribute(\"class\", \"hiden\");\r\n          clearTimeout(t);\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction tick() {\r\n  sec++;\r\n  if (sec >= 60) {\r\n    sec = 0;\r\n    min++;\r\n    if (min >= 60) {\r\n      min = 0;\r\n    }\r\n  }\r\n}\r\nfunction add() {\r\n  tick();\r\n  timerTablo.textContent =\r\n    (min > 9 ? min : \"0\" + min) + \":\" + (sec > 9 ? sec : \"0\" + sec);\r\n  timer();\r\n}\r\nfunction timer() {\r\n  timerTablo = document.getElementsByTagName(\"h1\")[0];\r\n  t = setTimeout(add, 1000);\r\n}\r\nfunction reset() {\r\n  clearTimeout(t);\r\n  timerTablo = document.getElementsByTagName(\"h1\")[0];\r\n  timerTablo.textContent = \"00:00\";\r\n  sec = 0;\r\n  min = 0;\r\n}\r\nfunction goBackButton(cardRandomMass) {\r\n  document.querySelector(\"button\").addEventListener(\"click\", () => {\r\n    cardRandomMass.splice(0, 18);\r\n    buttonTime = 5;\r\n    answer = null;\r\n    clearTimeout(t);\r\n    (0,_levelChoice_js__WEBPACK_IMPORTED_MODULE_0__.levelStr)();\r\n  });\r\n}\r\n\r\n// function victory() {\r\n//     let click = document.querySelector('header');\r\n//     click.addEventListener(\"click\", () => {\r\n//         let levelEl = document.querySelector('body');\r\n//         levelEl.setAttribute('class', 'hiden');\r\n//         clearTimeout(t)\r\n//     })\r\n\r\n// }\r\n\n\n//# sourceURL=webpack://game-card/./game.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _levelChoice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levelChoice.js */ \"./levelChoice.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n\r\n\r\nwindow.user = {};\r\n\r\n(0,_levelChoice_js__WEBPACK_IMPORTED_MODULE_0__.levelStr)();\r\n\r\n//ограничение по времени\r\n// анимация карт\r\n// удаление карт после правильных ответов\r\n\n\n//# sourceURL=webpack://game-card/./index.js?");

/***/ }),

/***/ "./levelChoice.js":
/*!************************!*\
  !*** ./levelChoice.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   levelChoice: () => (/* binding */ levelChoice),\n/* harmony export */   levelStr: () => (/* binding */ levelStr)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./game.js\");\n/* harmony import */ var _random_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random.js */ \"./random.js\");\n/* harmony import */ var _cardsMass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cardsMass.js */ \"./cardsMass.js\");\n\r\n\r\n\r\nlet levelChoice = 0;\r\nfunction levelStr() {\r\n  const levelEl = document.querySelector(\"body\");\r\n  const levelHtml = `\r\n<div class=\"container center\">\r\n    <div class=\"container-text\"><p>Выбери сложность</p></div>\r\n    <div class=\"container-level-buttons\">\r\n        <div><button class=${\r\n          levelChoice === 0\r\n            ? \"buttons-button\"\r\n            : levelChoice === 3\r\n            ? \"choice-button\"\r\n            : \"buttons-button\"\r\n        } id=\"3\">1</button></div>\r\n        <div><button class=${\r\n          levelChoice === 0\r\n            ? \"buttons-button\"\r\n            : levelChoice === 6\r\n            ? \"choice-button\"\r\n            : \"buttons-button\"\r\n        } id=\"6\">2</button></div>\r\n        <div><button class=${\r\n          levelChoice === 0\r\n            ? \"buttons-button\"\r\n            : levelChoice === 9\r\n            ? \"choice-button\"\r\n            : \"buttons-button\"\r\n        } id=\"9\">3</button></div>\r\n    </div>\r\n    <div class=\"container-start-button\"><button class=\"start-button\" id=\"start\">Старт</button></div>\r\n</div>`;\r\n  levelEl.innerHTML = levelHtml;\r\n\r\n  choiceButton();\r\n  startButton();\r\n}\r\n\r\nfunction choiceButton() {\r\n  const choiceButtons = document.getElementsByClassName(\"buttons-button\");\r\n  for (const choiceButton of choiceButtons) {\r\n    choiceButton.addEventListener(\"click\", () => {\r\n      levelChoice = Number(choiceButton.id);\r\n      levelStr();\r\n    });\r\n  }\r\n}\r\nfunction startButton() {\r\n  document.getElementById(\"start\").addEventListener(\"click\", () => {\r\n    if (levelChoice === 0) {\r\n      alert(\"Выберете сложность\");\r\n      return;\r\n    }\r\n\r\n    _random_js__WEBPACK_IMPORTED_MODULE_1__.cardRandomMass.splice(0, 18);\r\n    window.user.level = levelChoice;\r\n    (0,_random_js__WEBPACK_IMPORTED_MODULE_1__.randomCards)(levelChoice, _cardsMass_js__WEBPACK_IMPORTED_MODULE_2__.allCardsMass);\r\n    _random_js__WEBPACK_IMPORTED_MODULE_1__.cardRandomMass.push.apply(_random_js__WEBPACK_IMPORTED_MODULE_1__.cardRandomMass, _random_js__WEBPACK_IMPORTED_MODULE_1__.cardRandomMass);\r\n\r\n    shuffle(_random_js__WEBPACK_IMPORTED_MODULE_1__.cardRandomMass);\r\n    (0,_game_js__WEBPACK_IMPORTED_MODULE_0__.goGame)(_random_js__WEBPACK_IMPORTED_MODULE_1__.cardRandomMass, levelChoice);\r\n  });\r\n}\r\nconst shuffle = (cardRandomMass) => {\r\n  let m = cardRandomMass.length,\r\n    t,\r\n    i;\r\n\r\n  while (m) {\r\n    i = Math.floor(Math.random() * m--);\r\n    t = cardRandomMass[m];\r\n    cardRandomMass[m] = cardRandomMass[i];\r\n    cardRandomMass[i] = t;\r\n  }\r\n\r\n  return cardRandomMass;\r\n};\r\n\n\n//# sourceURL=webpack://game-card/./levelChoice.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://game-card/./styles.css?");

/***/ }),

/***/ "./random.js":
/*!*******************!*\
  !*** ./random.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardRandomMass: () => (/* binding */ cardRandomMass),\n/* harmony export */   randomCards: () => (/* binding */ randomCards)\n/* harmony export */ });\nlet cardRandomMass = [];\r\nfunction randomCards(levelChoice, allCardsMass) {\r\n  if (cardRandomMass.length < levelChoice) {\r\n    let rand = Math.floor(Math.random() * allCardsMass.length);\r\n    if (cardRandomMass.includes(allCardsMass[rand])) {\r\n      randomCards(levelChoice, allCardsMass);\r\n    } else {\r\n      cardRandomMass.push(allCardsMass[rand]);\r\n      randomCards(levelChoice, allCardsMass);\r\n    }\r\n  }\r\n  return;\r\n}\r\n\n\n//# sourceURL=webpack://game-card/./random.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;