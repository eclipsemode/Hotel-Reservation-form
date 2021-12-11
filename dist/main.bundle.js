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

/***/ "./style/style.scss":
/*!**************************!*\
  !*** ./style/style.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style/style.scss?");

/***/ }),

/***/ "./components/calendar/calendar.js":
/*!*****************************************!*\
  !*** ./components/calendar/calendar.js ***!
  \*****************************************/
/***/ (() => {

eval("const date = new Date();\r\n\r\nconst renderCalendar = () => {\r\n    date.setDate(7);\r\n\r\n    const monthDays = document.querySelector('.calendar_days');\r\n\r\n    const lastDay = new Date(\r\n        date.getFullYear(),\r\n        date.getMonth() + 1,\r\n        0\r\n    ).getDate();\r\n\r\n    const prevLastDay = new Date(\r\n        date.getFullYear(),\r\n        date.getMonth(),\r\n        0\r\n    ).getDate();\r\n\r\n    const firstDayIndex = date.getDay();\r\n\r\n    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();\r\n\r\n    const nextDays = 7 - lastDayIndex;\r\n\r\n    const months = [\r\n        \"Январь\",\r\n        \"Февраль\",\r\n        \"Март\",\r\n        \"Апрель\",\r\n        \"Май\",\r\n        \"Июнь\",\r\n        \"Июль\",\r\n        \"Август\",\r\n        \"Сентябрь\",\r\n        \"Октябрь\",\r\n        \"Ноябрь\",\r\n        \"Декабрь\"\r\n    ];\r\n\r\n    document.querySelector('.calendar_month__date h2').innerHTML = months[date.getMonth()];\r\n\r\n    document.querySelector('.calendar_month__date span').innerHTML = date.getFullYear();\r\n\r\n    let days = \"\";\r\n\r\n    for (let x = firstDayIndex; x > 0; x--) {\r\n        days += `<div class=\"calendar_days__prev-date \">${prevLastDay - x + 1}</div>`;\r\n    }\r\n\r\n    for (let i = 1; i <= lastDay; i++) {\r\n        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {\r\n            days += `<div class=\"calendar_days__today\">${i}</div>`;\r\n        } else {\r\n            days += `<div>${i}</div>`;\r\n        }\r\n    }\r\n\r\n    for (let j = 1; j <= nextDays; j++) {\r\n        days += `<div class=\"calendar_days__next-date\">${j}</div>`;\r\n        monthDays.innerHTML = days;\r\n    }\r\n\r\n\r\n    monthDays.addEventListener('click', (e) => {\r\n        e.currentTarget.childNodes.forEach((x) => {\r\n            x.classList.remove(\"selected--day\")\r\n        })\r\n        e.target.classList.add(\"selected--day\")\r\n    });\r\n\r\n    document.querySelector('.calendar_buttons__clear').addEventListener('click', () => {\r\n        monthDays.childNodes.forEach((i) => {\r\n            i.classList.remove('selected--day');\r\n        })\r\n    })\r\n\r\n};\r\n\r\ndocument.querySelector(\".calendar_month__left\").addEventListener('click', () => {\r\n    date.setMonth(date.getMonth() - 1);\r\n    renderCalendar();\r\n});\r\n\r\ndocument.querySelector(\".calendar_month__right\").addEventListener('click', () => {\r\n    date.setMonth(date.getMonth() + 1);\r\n    renderCalendar();\r\n});\r\n\r\n\r\nrenderCalendar();\n\n//# sourceURL=webpack:///./components/calendar/calendar.js?");

/***/ }),

/***/ "./components/dropdown/dropdown.js":
/*!*****************************************!*\
  !*** ./components/dropdown/dropdown.js ***!
  \*****************************************/
/***/ (() => {

eval("// CLICK ON BUTTON DROPDOWN. OPEN /  CLOSE DROPDOWN\r\ndocument.addEventListener('click', (event) => {\r\n    if (event.target.closest('.dropdown-type')) {\r\n        document.querySelector('.dropdown').classList.toggle('active');\r\n    } else if (!event.target.closest('.dropdown')) {\r\n        document.querySelector('.dropdown').classList.remove('active');\r\n    } else if (document.querySelector('.dropdown').classList.contains('active')) {\r\n        document.querySelector('.dropdown-type').focus();\r\n    }\r\n\r\n    if (document.querySelector('[name=\"children\"]').value == 0 && document.querySelector('[name=\"adults\"]').value == 0 && document.querySelector('[name=\"babies\"]').value == 0) {\r\n        document.querySelector('[name=\"clear\"]').style = 'opacity: 0; pointer-events: none;';\r\n    } else {\r\n        document.querySelector('[name=\"clear\"]').style = 'opacity: 1; pointer-events: auto;';\r\n        document.querySelector('[name=\"clear\"]').setAttribute('style', ':hover {opacity: 0.5;}')\r\n    }\r\n});\r\n\r\n// ITEM COUNTER\r\n\r\nconst buttons = document.querySelectorAll(\".counter__btn\");\r\nconst sumArr = [+document.querySelector('[name=\"adults\"]').value, +document.querySelector('[name=\"children\"]').value, +document.querySelector('[name=\"babies\"]').value];\r\n\r\nbuttons.forEach(btn => {\r\n    btn.addEventListener(\"click\", function (event) {\r\n\r\n        const inp = this.parentElement.querySelector(\".counter__value\");\r\n        const currentValue = +inp.value;\r\n        let newValue;\r\n\r\n        if (this.dataset.direction === \"plus\") {\r\n            newValue = currentValue + 1;\r\n        } else {\r\n            newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;\r\n        }\r\n\r\n        inp.value = newValue;\r\n\r\n        if (inp.value > 0) {\r\n            inp.previousElementSibling.style = 'opacity: 1;';\r\n        } else {\r\n            inp.previousElementSibling.style = 'opacity: 0.5;';\r\n        }\r\n\r\n        if (inp.value >= 9) {\r\n            inp.value = 9;\r\n            inp.nextElementSibling.style = 'opacity: 0.5;';\r\n        } else {\r\n            inp.nextElementSibling.style = 'opacity: 1;';\r\n        }\r\n    });\r\n});\r\n\r\n// DROPDOWN BUTTONS CLEAR AND SUBMIT\r\n\r\ndocument.querySelectorAll('.dropdown-guest__list-button').forEach(element => {\r\n    let dropText = document.querySelector('.dropdown-type').textContent;\r\n    element.addEventListener('click', (event) => {\r\n        if (event.target.closest('[name=\"submit\"]')) {\r\n            let countGuest = +document.querySelector('[name=\"children\"]').value + +document.querySelector('[name=\"adults\"]').value + +document.querySelector('[name=\"babies\"]').value;\r\n            document.querySelector('.dropdown-type').textContent = countGuest;\r\n            document.querySelector('.dropdown').classList.remove('active');\r\n            document.querySelector('.dropdown-type').focus();\r\n        } else if (event.target.closest('[name=\"clear\"]')) {\r\n            document.querySelector('.dropdown-type').textContent = dropText;\r\n            document.querySelector('[name=\"children\"]').value = 0;\r\n            document.querySelector('[name=\"children\"]').previousElementSibling.style = 'opacity: 0.5;';\r\n            document.querySelector('[name=\"children\"]').nextElementSibling.style = 'opacity: 1;';\r\n            document.querySelector('[name=\"adults\"]').value = 0;\r\n            document.querySelector('[name=\"adults\"]').previousElementSibling.style = 'opacity: 0.5;';\r\n            document.querySelector('[name=\"adults\"]').nextElementSibling.style = 'opacity: 1;';\r\n            document.querySelector('[name=\"babies\"]').value = 0;\r\n            document.querySelector('[name=\"babies\"]').previousElementSibling.style = 'opacity: 0.5;';\r\n            document.querySelector('[name=\"babies\"]').nextElementSibling.style = 'opacity: 1';\r\n        }\r\n\r\n        if (document.querySelector('.dropdown-type').textContent == 0) {\r\n            document.querySelector('.dropdown-type').textContent = dropText;\r\n        } else if (document.querySelector('.dropdown-type').textContent != 11 && document.querySelector('.dropdown-type').textContent.slice(-1) == 1) {\r\n            document.querySelector('.dropdown-type').textContent += ' гость';\r\n        } else if (document.querySelector('.dropdown-type').textContent > 1 && document.querySelector('.dropdown-type').textContent < 5 || document.querySelector('.dropdown-type').textContent > 20 && document.querySelector('.dropdown-type').textContent.slice(-1) < 5) {\r\n            document.querySelector('.dropdown-type').textContent += ' гостя';\r\n        } else if (document.querySelector('.dropdown-type').textContent !== dropText) {\r\n            document.querySelector('.dropdown-type').textContent += ' гостей';\r\n        }\r\n    })\r\n});\n\n//# sourceURL=webpack:///./components/dropdown/dropdown.js?");

/***/ }),

/***/ "./components/expandable-checkbox-list/expandable-checkbox-list.js":
/*!*************************************************************************!*\
  !*** ./components/expandable-checkbox-list/expandable-checkbox-list.js ***!
  \*************************************************************************/
/***/ (() => {

eval("const checkbox = document.querySelector('.expandable-checkbox-container');\r\nconst checkboxForm = document.querySelector('.expandable-checkbox');\r\n\r\ncheckbox.addEventListener('click', () => {\r\n    checkboxForm.classList.toggle('expandable-checkbox--disabled');\r\n    checkbox.classList.toggle('expandable-checkbox-container--disabled');\r\n})\n\n//# sourceURL=webpack:///./components/expandable-checkbox-list/expandable-checkbox-list.js?");

/***/ }),

/***/ "./components/like-button/like-button.js":
/*!***********************************************!*\
  !*** ./components/like-button/like-button.js ***!
  \***********************************************/
/***/ (() => {

eval("const likeBtn = document.querySelector('.like-btn');\r\n\r\nlikeBtn.addEventListener('click', event => {\r\n    let value = +likeBtn.innerText;\r\n    likeBtn.classList.toggle('like-btn--active');\r\n})\n\n//# sourceURL=webpack:///./components/like-button/like-button.js?");

/***/ }),

/***/ "./components/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./components/pagination/pagination.js ***!
  \*********************************************/
/***/ (() => {

eval("const pagList = document.querySelector('.pagination__list');\r\nconst pagListItem = document.querySelectorAll('.pagination__item');\r\nconst pagItemActive = document.querySelector('.pagination__item--active');\r\nconst pagPrev = document.querySelector('.pagination__prev');\r\nconst pagNext = document.querySelector('.pagination__next');\r\nconst pagDots = document.querySelectorAll('.pagination__dots');\r\n\r\nfunction pagFunc(totalPages, page) {\r\n    pagListItem.forEach((item) => {\r\n        item.addEventListener('click', event => {\r\n            if (event.target == pagNext || event.target == pagItemActive.nextElementSibling) {\r\n                if (pagItemActive.textContent < totalPages - 2) {\r\n                    pagItemActive.textContent++;\r\n                    pagItemActive.previousElementSibling.textContent++;\r\n                    pagItemActive.nextElementSibling.textContent++;\r\n                    if (pagItemActive.textContent == totalPages - 2) {\r\n                        pagNext.previousElementSibling.textContent = totalPages;\r\n                    }\r\n                }\r\n            } else if (event.target == pagPrev || event.target == pagItemActive.previousElementSibling) {\r\n                if (pagItemActive.textContent > 3) {\r\n                    pagItemActive.textContent--;\r\n                    pagItemActive.previousElementSibling.textContent--;\r\n                    pagItemActive.nextElementSibling.textContent--;\r\n                    if (pagItemActive.textContent == 3) {\r\n                        pagPrev.nextElementSibling.textContent = 1;\r\n                    }\r\n                }\r\n                // else if (pagItemActive.textContent == 3) {\r\n                //     pagPrev.nextElementSibling.nextElementSibling.classList.add('pagination__item--active');\r\n                //     pagPrev.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove('pagination__item--active');\r\n                // }\r\n            }\r\n\r\n            if (pagItemActive.textContent > 3) {\r\n                pagPrev.nextElementSibling.textContent = '...';\r\n            }\r\n            if (pagItemActive.textContent < totalPages - 2) {\r\n                pagNext.previousElementSibling.textContent = '...';\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\npagFunc(20, 5)\n\n//# sourceURL=webpack:///./components/pagination/pagination.js?");

/***/ }),

/***/ "./components/radio-buttons/radio-buttons.js":
/*!***************************************************!*\
  !*** ./components/radio-buttons/radio-buttons.js ***!
  \***************************************************/
/***/ (() => {

eval("const labelMale = document.querySelector('[value=\"male\"]').parentElement;\r\nconst labelFemale = document.querySelector('[value=\"female\"]').parentElement;\r\n\r\ndocument.addEventListener('click', (event) => {\r\n    if (event.target.closest('[value=\"male\"]')) {\r\n        labelMale.classList.add('radio-container__label--checked');\r\n        if (labelFemale.classList.contains('radio-container__label--checked')) {\r\n            labelFemale.classList.remove('radio-container__label--checked');\r\n        }\r\n    } else if (event.target.closest('[value=\"female\"]')) {\r\n        labelFemale.classList.add('radio-container__label--checked');\r\n        if (labelMale.classList.contains('radio-container__label--checked')) {\r\n            labelMale.classList.remove('radio-container__label--checked');\r\n        }\r\n    }\r\n})\n\n//# sourceURL=webpack:///./components/radio-buttons/radio-buttons.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./style/style.scss\");\n/* harmony import */ var _js_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components */ \"./js/components.js\");\n// import AirDatepicker from 'air-datepicker';\r\n// import 'air-datepicker/air-datepicker.css';\r\n\r\n\r\n\r\n\r\n\r\n// import { render } from 'pug';\r\n\r\n\r\n\r\n// // AIR DATEPICKER\r\n// let selectItem = {\r\n//     content: 'Применить',\r\n//     className: 'custom-button-classname',\r\n//     onClick: (dp) => {\r\n//         let date = new onSelect();\r\n//         dp.selectDate(date);\r\n//         dp.setViewDate(date);\r\n//     },\r\n// }\r\n\r\n\r\n// new AirDatepicker('#el', {\r\n//     buttons: ['clear', selectItem],\r\n//     multipleDatesSeparator: ' - ',\r\n//     classes: 'dp-style',\r\n//     minDate: new Date(),\r\n// })\r\n// new AirDatepicker('#el2', {\r\n//     buttons: ['clear', selectItem],\r\n//     multipleDatesSeparator: ' - ',\r\n//     classes: 'dp-style',\r\n//     minDate: new Date(),\r\n// })\r\n// new AirDatepicker('#el3', {\r\n//     buttons: ['clear', selectItem],\r\n//     multipleDatesSeparator: ' - ',\r\n//     classes: 'dp-style',\r\n//     minDate: new Date(),\r\n// })\r\n// new AirDatepicker('#el-filter', {\r\n//     buttons: ['clear', selectItem],\r\n//     multipleDatesSeparator: ' - ',\r\n//     classes: 'dp-style',\r\n//     minDate: new Date(),\r\n//     multipleDates: 2,\r\n//     range: true,\r\n// })\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/components.js":
/*!**************************!*\
  !*** ./js/components.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/calendar/calendar */ \"./components/calendar/calendar.js\");\n/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/dropdown/dropdown */ \"./components/dropdown/dropdown.js\");\n/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/radio-buttons/radio-buttons */ \"./components/radio-buttons/radio-buttons.js\");\n/* harmony import */ var _components_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_expandable_checkbox_list_expandable_checkbox_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/expandable-checkbox-list/expandable-checkbox-list */ \"./components/expandable-checkbox-list/expandable-checkbox-list.js\");\n/* harmony import */ var _components_expandable_checkbox_list_expandable_checkbox_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_expandable_checkbox_list_expandable_checkbox_list__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_like_button_like_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/like-button/like-button */ \"./components/like-button/like-button.js\");\n/* harmony import */ var _components_like_button_like_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_like_button_like_button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pagination/pagination */ \"./components/pagination/pagination.js\");\n/* harmony import */ var _components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_pagination_pagination__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/components.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;