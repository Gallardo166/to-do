"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/project-page-style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/project-page-style.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#project-content {
    margin-left: 42px;
    display: flex;
    flex-direction: column;
}

#project-title {
    position: fixed;
    margin-top: 4px;
    font-size: 2.5rem;
    font-family: space-grotesk, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.section-name {
    font-size: 1rem;
}

#project-title, .section-name {
    padding: 4px;
    appearance: none;
    outline: none;
    background: none;
    border: 1px solid transparent;
    border-radius: 5px;
    color: #d4d4d4;
    transition: border 140ms ease-in-out;
}

#project-title:hover, .section-name:hover {
    border: 1px solid #8e8b8b;
    transition: border 140ms ease-in-out;
}

#project-container {
    display: flex;
    margin-top: 84px;
}

#project-sections {
    width: fit-content;
    margin-left: 24px;
    margin-right: 24px;
    display: flex;
    gap: 24px;

    .section {
        width: 280px;

        .section-header {
            margin: 12px 0;
            display: flex;
            justify-content: start;
            gap: 36px;
        }

        .delete-section-button {
            display: flex;
            align-items: center;
            
            img {
                width: 24px;
            }
        }

        .add-task-button {
            padding: 0;
            display: flex;
            justify-content: flex-start;
            gap: 8px;
        }

        .tasks {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }
    }

    .task-container:last-child {
        margin-bottom: 8px;
    }
}

.project-page-task-info-modal:not(.removed), #section-info-modal:not(.removed) {
    box-sizing: border-box;
    width: 280px;
    margin-right: 36px;
    padding: 12px 24px 16px 16px;
    border: 0.4px solid #837e7e;
    border-radius: 5px;

    .task-name, .description, .priority, .due-date, #section-name {
        width: 100%;
        outline: 0px;
        border: none;
        background: none;
        caret-color: #d4d4d4;
        color: #d4d4d4;
    }

    .task-name, #section-name {
        padding: 8px 5px 0 5px;
        font-size: 1rem;
        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .description {
        box-sizing: border-box;
        height: 8vh;
        resize: none;
        padding: 0 16px 0 5px;
        margin-bottom: 12px;
        font-size: 0.9rem;
    }

    hr {
        margin: 8px 0;
        border: 0.1px solid #837e7e;
    }

    .extra-task-info {
        width: 60%;
        display: flex;
        flex-direction: column;
        gap:4px;
    }

    .priority-container {
        display: flex;
        gap: 8px;
        color: #d4d4d4;
        font-size: 0.9rem;
        align-items: center;
    }

    .priority, .due-date {
        box-sizing: border-box;
        width: 100%;
        padding: 3px;
        border: 0.4px solid #837e7e;
        border-radius: 3px;
    }

    .due-date::-webkit-calendar-picker-indicator {
        filter: invert(98%) sepia(0%) saturate(2388%) hue-rotate(183deg) brightness(109%) contrast(66%);
    }

    .task-info-modal-buttons button, #cancel-add-section, #confirm-add-section {
        margin-top: 16px;
        padding: 5px;
        color: #d4d4d4;
        background-color: #444343;
        border-radius: 5px;
    }

    .task-info-modal-buttons button:hover, #cancel-add-section:hover, #confirm-add-section:hover {
        background-color:#5b5a5a;
        transition: background-color 140ms ease-in-out;
    }

    .task-info-modal-buttons button[disabled], #confirm-add-section[disabled] {
        color:#a6a6a6;
        background-color: #353333;
        cursor: not-allowed;
    }

    .task-info-modal-buttons button[disabled]:hover .message, #confirm-add-section[disabled]:hover #message {
        display: block;
        margin-left: 14px;
        padding: 0 2px;
    }

    .message, #message {
        display: none;
        position: absolute;
        color:#d4d4d4;
        background-color: #212020;
        border: 1px solid #837e7e;
    }
}

#add-section {
    padding-right: 24px;

    #add-section-button {
        padding: 0;
        width: 280px;
        display: flex;
        align-items: center;
    }

    #section-info-modal {
        margin-top: -4px;
    }
}

.overdue {
    border-color: #a73d3d;;
}`, "",{"version":3,"sources":["webpack://./src/project-page-style.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,eAAe;IACf,iBAAiB;IACjB,kKAAkK;AACtK;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,6BAA6B;IAC7B,kBAAkB;IAClB,cAAc;IACd,oCAAoC;AACxC;;AAEA;IACI,yBAAyB;IACzB,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,SAAS;;IAET;QACI,YAAY;;QAEZ;YACI,cAAc;YACd,aAAa;YACb,sBAAsB;YACtB,SAAS;QACb;;QAEA;YACI,aAAa;YACb,mBAAmB;;YAEnB;gBACI,WAAW;YACf;QACJ;;QAEA;YACI,UAAU;YACV,aAAa;YACb,2BAA2B;YAC3B,QAAQ;QACZ;;QAEA;YACI,aAAa;YACb,sBAAsB;YACtB,QAAQ;QACZ;IACJ;;IAEA;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,2BAA2B;IAC3B,kBAAkB;;IAElB;QACI,WAAW;QACX,YAAY;QACZ,YAAY;QACZ,gBAAgB;QAChB,oBAAoB;QACpB,cAAc;IAClB;;IAEA;QACI,sBAAsB;QACtB,eAAe;QACf,mKAAmK;IACvK;;IAEA;QACI,sBAAsB;QACtB,WAAW;QACX,YAAY;QACZ,qBAAqB;QACrB,mBAAmB;QACnB,iBAAiB;IACrB;;IAEA;QACI,aAAa;QACb,2BAA2B;IAC/B;;IAEA;QACI,UAAU;QACV,aAAa;QACb,sBAAsB;QACtB,OAAO;IACX;;IAEA;QACI,aAAa;QACb,QAAQ;QACR,cAAc;QACd,iBAAiB;QACjB,mBAAmB;IACvB;;IAEA;QACI,sBAAsB;QACtB,WAAW;QACX,YAAY;QACZ,2BAA2B;QAC3B,kBAAkB;IACtB;;IAEA;QACI,+FAA+F;IACnG;;IAEA;QACI,gBAAgB;QAChB,YAAY;QACZ,cAAc;QACd,yBAAyB;QACzB,kBAAkB;IACtB;;IAEA;QACI,wBAAwB;QACxB,8CAA8C;IAClD;;IAEA;QACI,aAAa;QACb,yBAAyB;QACzB,mBAAmB;IACvB;;IAEA;QACI,cAAc;QACd,iBAAiB;QACjB,cAAc;IAClB;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,aAAa;QACb,yBAAyB;QACzB,yBAAyB;IAC7B;AACJ;;AAEA;IACI,mBAAmB;;IAEnB;QACI,UAAU;QACV,YAAY;QACZ,aAAa;QACb,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;IACpB;AACJ;;AAEA;IACI,qBAAqB;AACzB","sourcesContent":["#project-content {\n    margin-left: 42px;\n    display: flex;\n    flex-direction: column;\n}\n\n#project-title {\n    position: fixed;\n    margin-top: 4px;\n    font-size: 2.5rem;\n    font-family: space-grotesk, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n.section-name {\n    font-size: 1rem;\n}\n\n#project-title, .section-name {\n    padding: 4px;\n    appearance: none;\n    outline: none;\n    background: none;\n    border: 1px solid transparent;\n    border-radius: 5px;\n    color: #d4d4d4;\n    transition: border 140ms ease-in-out;\n}\n\n#project-title:hover, .section-name:hover {\n    border: 1px solid #8e8b8b;\n    transition: border 140ms ease-in-out;\n}\n\n#project-container {\n    display: flex;\n    margin-top: 84px;\n}\n\n#project-sections {\n    width: fit-content;\n    margin-left: 24px;\n    margin-right: 24px;\n    display: flex;\n    gap: 24px;\n\n    .section {\n        width: 280px;\n\n        .section-header {\n            margin: 12px 0;\n            display: flex;\n            justify-content: start;\n            gap: 36px;\n        }\n\n        .delete-section-button {\n            display: flex;\n            align-items: center;\n            \n            img {\n                width: 24px;\n            }\n        }\n\n        .add-task-button {\n            padding: 0;\n            display: flex;\n            justify-content: flex-start;\n            gap: 8px;\n        }\n\n        .tasks {\n            display: flex;\n            flex-direction: column;\n            gap: 8px;\n        }\n    }\n\n    .task-container:last-child {\n        margin-bottom: 8px;\n    }\n}\n\n.project-page-task-info-modal:not(.removed), #section-info-modal:not(.removed) {\n    box-sizing: border-box;\n    width: 280px;\n    margin-right: 36px;\n    padding: 12px 24px 16px 16px;\n    border: 0.4px solid #837e7e;\n    border-radius: 5px;\n\n    .task-name, .description, .priority, .due-date, #section-name {\n        width: 100%;\n        outline: 0px;\n        border: none;\n        background: none;\n        caret-color: #d4d4d4;\n        color: #d4d4d4;\n    }\n\n    .task-name, #section-name {\n        padding: 8px 5px 0 5px;\n        font-size: 1rem;\n        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    }\n\n    .description {\n        box-sizing: border-box;\n        height: 8vh;\n        resize: none;\n        padding: 0 16px 0 5px;\n        margin-bottom: 12px;\n        font-size: 0.9rem;\n    }\n\n    hr {\n        margin: 8px 0;\n        border: 0.1px solid #837e7e;\n    }\n\n    .extra-task-info {\n        width: 60%;\n        display: flex;\n        flex-direction: column;\n        gap:4px;\n    }\n\n    .priority-container {\n        display: flex;\n        gap: 8px;\n        color: #d4d4d4;\n        font-size: 0.9rem;\n        align-items: center;\n    }\n\n    .priority, .due-date {\n        box-sizing: border-box;\n        width: 100%;\n        padding: 3px;\n        border: 0.4px solid #837e7e;\n        border-radius: 3px;\n    }\n\n    .due-date::-webkit-calendar-picker-indicator {\n        filter: invert(98%) sepia(0%) saturate(2388%) hue-rotate(183deg) brightness(109%) contrast(66%);\n    }\n\n    .task-info-modal-buttons button, #cancel-add-section, #confirm-add-section {\n        margin-top: 16px;\n        padding: 5px;\n        color: #d4d4d4;\n        background-color: #444343;\n        border-radius: 5px;\n    }\n\n    .task-info-modal-buttons button:hover, #cancel-add-section:hover, #confirm-add-section:hover {\n        background-color:#5b5a5a;\n        transition: background-color 140ms ease-in-out;\n    }\n\n    .task-info-modal-buttons button[disabled], #confirm-add-section[disabled] {\n        color:#a6a6a6;\n        background-color: #353333;\n        cursor: not-allowed;\n    }\n\n    .task-info-modal-buttons button[disabled]:hover .message, #confirm-add-section[disabled]:hover #message {\n        display: block;\n        margin-left: 14px;\n        padding: 0 2px;\n    }\n\n    .message, #message {\n        display: none;\n        position: absolute;\n        color:#d4d4d4;\n        background-color: #212020;\n        border: 1px solid #837e7e;\n    }\n}\n\n#add-section {\n    padding-right: 24px;\n\n    #add-section-button {\n        padding: 0;\n        width: 280px;\n        display: flex;\n        align-items: center;\n    }\n\n    #section-info-modal {\n        margin-top: -4px;\n    }\n}\n\n.overdue {\n    border-color: #a73d3d;;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sidebar-style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sidebar-style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Satoshi-Regular.otf */ "./src/fonts/Satoshi-Regular.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/SpaceGrotesk-Bold.ttf */ "./src/fonts/SpaceGrotesk-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: satoshi-regular;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: space-grotesk;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

body {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    margin: 0;
}

#sidebar {
    width: 250px;
    height: 100vh;
    overflow: hidden;
    background-color: #2a2929;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
    flex-shrink: 0;
}

p {
    color: #d4d4d4;
    font-family: satoshi-regular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1rem;
    text-wrap: nowrap;
}

h1 {
    color: #d4d4d4;
    font-family: space-grotesk, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 2.5rem;
    margin: 16px 0;
}

input, button, label, select, option, textarea {
    font-family: satoshi-regular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#sidebar-container {
    padding: 12px;
}

img[src*="svg"] {
    width: 30px;
    filter: invert(92%) sepia(0%) saturate(0%) hue-rotate(185deg) brightness(99%) contrast(80%);
}

button {
    outline: none;
    border: none;
    background: none;
}

button#sidebar-toggle-close, button#sidebar-toggle-open, #add-project, #cancel-add-project, #confirm-add-project, .delete-project {
    padding: 3px;
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

button#sidebar-toggle-open {
    position: fixed;
    top: 12px;
}

button#today {
    margin-top: 12px;
    position: relative;
}

button#upcoming {
    margin-top: 4px;
}

button#today, button#upcoming {
    padding: 0;
    padding-left: 3px;
    width: 100%;
    height: 38px;
    border-radius: 5px;
}

#today-icon {
    position: relative;
    display: flex;
    align-items: center;
}

img[alt="Today Calendar"] {
    position: absolute;
}

#date {
    width: 30px;
    margin-top: 15px;
    font-size: 0.6rem;
}

div#projects-header {
    margin-top: 12px;
    padding: 0 8px;
    display: flex;
    justify-content: space-between;
}

#add-project-img {
    width: 20px;
    opacity:1;
    transition: opacity 300ms ease-in;
}

#project-name {
    outline: 0px;
    border: none;
    background: none;
    border: 0.4px solid #d4d4d4;
    margin: 4px 0 8px 0;
    padding: 8px 5px;
    width: 95%;
    border-radius: 5px;
    font-size: 0.9rem;
    caret-color: #d4d4d4;
    color: #d4d4d4;
}

#cancel-add-project, #confirm-add-project {
    padding: 5px;
    color: #d4d4d4;
    background-color: #444343;
    transition: background-color 140ms ease-in-out;
}

#confirm-add-project[disabled] {
    color:#a6a6a6;
    background-color: #353333;
    cursor: not-allowed;
}

#confirm-add-project[disabled]:hover #sidebar-message {
    display: block;
    margin-left: 14px;
    padding: 0 2px;
}

#sidebar-message {
    display: none;
    position: absolute;
    color:#d4d4d4;
    background-color: #212020;
    border: 1px solid #837e7e;
}

.sidebar-project {
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.sidebar-project:not(:first-child) {
    margin-top: 4px;
}

.sidebar-project-name {
    width: 188px;
    height: 38px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family : system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #d4d4d4;
    padding: 4px;
    display: flex;
    align-items: center;
}

.menu {
    display: flex;
    align-items: center;
    gap: 8px;
}

.delete-project-icon {
    width: 18px !important;
    display: none;
}

button:hover {
    cursor: pointer;
}

#sidebar-toggle-close:hover, #sidebar-toggle-open:hover, .sidebar-project:not(.highlighted):hover, #today:not(.highlighted):hover, #upcoming:not(.highlighted):hover, #add-project:hover {
    background-color: #444343;
    transition: background-color 140ms ease-in-out;
}

#cancel-add-project:hover, #confirm-add-project:hover, .sidebar-project:not(.highlighted):hover .delete-project:hover {
    background-color: #5b5a5a;
    transition: background-color 140ms ease-in-out;
}

.sidebar-project.sidebar-project.highlighted:hover .delete-project:hover {
    background-color: #6b4b71;
    transition: background-color 140ms ease-in-out;
}

.sidebar-project:hover .delete-project {
    display: flex;
    align-items: center;
    border-radius: 5px;
}

.sidebar-project:hover .delete-project-icon {
    display: initial;
}

.add-task-button {
    display: flex;
    align-items: center;
}

#sidebar-toggle-open:not(.hidden) {
    opacity: 1;
    transition: opacity 250ms ease-in;
}

#sidebar-toggle-open.hidden {
    opacity: 0;
}

.removed {
    width: 0;
    height: 0;
    overflow: hidden;
}

.highlighted {
    background-color: #50285a;
}

.highlighted p {
    color: #b895c0;
}

.highlighted img[src*="svg"] {
    filter: invert(73%) sepia(21%) saturate(469%) hue-rotate(243deg) brightness(85%) contrast(82%);
}

#sidebar.removed {
    width: 0px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

#sidebar.removed #add-project-img {
    opacity: 0;
    transition: opacity 300ms ease-in;
}`, "",{"version":3,"sources":["webpack://./src/sidebar-style.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,4CAAqC;AACzC;;AAEA;IACI,0BAA0B;IAC1B,4CAAuC;AAC3C;;AAEA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,aAAa;IACb,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,yBAAyB;IACzB,oDAAoD;IACpD,cAAc;AAClB;;AAEA;IACI,cAAc;IACd,oKAAoK;IACpK,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kKAAkK;IAClK,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,oKAAoK;AACxK;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,2FAA2F;AAC/F;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;IACpB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,2BAA2B;IAC3B,mBAAmB;IACnB,gBAAgB;IAChB,UAAU;IACV,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;IACpB,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,yBAAyB;IACzB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,uBAAuB;IACvB,oJAAoJ;IACpJ,cAAc;IACd,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,yBAAyB;IACzB,8CAA8C;AAClD;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,iCAAiC;AACrC;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,8FAA8F;AAClG;;AAEA;IACI,UAAU;IACV,oDAAoD;AACxD;;AAEA;IACI,UAAU;IACV,iCAAiC;AACrC","sourcesContent":["@font-face {\n    font-family: satoshi-regular;\n    src: url(./fonts/Satoshi-Regular.otf);\n}\n\n@font-face {\n    font-family: space-grotesk;\n    src: url(./fonts/SpaceGrotesk-Bold.ttf);\n}\n\nbody {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: flex;\n    margin: 0;\n}\n\n#sidebar {\n    width: 250px;\n    height: 100vh;\n    overflow: hidden;\n    background-color: #2a2929;\n    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);\n    flex-shrink: 0;\n}\n\np {\n    color: #d4d4d4;\n    font-family: satoshi-regular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 1rem;\n    text-wrap: nowrap;\n}\n\nh1 {\n    color: #d4d4d4;\n    font-family: space-grotesk, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    font-size: 2.5rem;\n    margin: 16px 0;\n}\n\ninput, button, label, select, option, textarea {\n    font-family: satoshi-regular, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n#sidebar-container {\n    padding: 12px;\n}\n\nimg[src*=\"svg\"] {\n    width: 30px;\n    filter: invert(92%) sepia(0%) saturate(0%) hue-rotate(185deg) brightness(99%) contrast(80%);\n}\n\nbutton {\n    outline: none;\n    border: none;\n    background: none;\n}\n\nbutton#sidebar-toggle-close, button#sidebar-toggle-open, #add-project, #cancel-add-project, #confirm-add-project, .delete-project {\n    padding: 3px;\n    border-radius: 5px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n}\n\nbutton#sidebar-toggle-open {\n    position: fixed;\n    top: 12px;\n}\n\nbutton#today {\n    margin-top: 12px;\n    position: relative;\n}\n\nbutton#upcoming {\n    margin-top: 4px;\n}\n\nbutton#today, button#upcoming {\n    padding: 0;\n    padding-left: 3px;\n    width: 100%;\n    height: 38px;\n    border-radius: 5px;\n}\n\n#today-icon {\n    position: relative;\n    display: flex;\n    align-items: center;\n}\n\nimg[alt=\"Today Calendar\"] {\n    position: absolute;\n}\n\n#date {\n    width: 30px;\n    margin-top: 15px;\n    font-size: 0.6rem;\n}\n\ndiv#projects-header {\n    margin-top: 12px;\n    padding: 0 8px;\n    display: flex;\n    justify-content: space-between;\n}\n\n#add-project-img {\n    width: 20px;\n    opacity:1;\n    transition: opacity 300ms ease-in;\n}\n\n#project-name {\n    outline: 0px;\n    border: none;\n    background: none;\n    border: 0.4px solid #d4d4d4;\n    margin: 4px 0 8px 0;\n    padding: 8px 5px;\n    width: 95%;\n    border-radius: 5px;\n    font-size: 0.9rem;\n    caret-color: #d4d4d4;\n    color: #d4d4d4;\n}\n\n#cancel-add-project, #confirm-add-project {\n    padding: 5px;\n    color: #d4d4d4;\n    background-color: #444343;\n    transition: background-color 140ms ease-in-out;\n}\n\n#confirm-add-project[disabled] {\n    color:#a6a6a6;\n    background-color: #353333;\n    cursor: not-allowed;\n}\n\n#confirm-add-project[disabled]:hover #sidebar-message {\n    display: block;\n    margin-left: 14px;\n    padding: 0 2px;\n}\n\n#sidebar-message {\n    display: none;\n    position: absolute;\n    color:#d4d4d4;\n    background-color: #212020;\n    border: 1px solid #837e7e;\n}\n\n.sidebar-project {\n    display: flex;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.sidebar-project:not(:first-child) {\n    margin-top: 4px;\n}\n\n.sidebar-project-name {\n    width: 188px;\n    height: 38px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-family : system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    color: #d4d4d4;\n    padding: 4px;\n    display: flex;\n    align-items: center;\n}\n\n.menu {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\n.delete-project-icon {\n    width: 18px !important;\n    display: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n#sidebar-toggle-close:hover, #sidebar-toggle-open:hover, .sidebar-project:not(.highlighted):hover, #today:not(.highlighted):hover, #upcoming:not(.highlighted):hover, #add-project:hover {\n    background-color: #444343;\n    transition: background-color 140ms ease-in-out;\n}\n\n#cancel-add-project:hover, #confirm-add-project:hover, .sidebar-project:not(.highlighted):hover .delete-project:hover {\n    background-color: #5b5a5a;\n    transition: background-color 140ms ease-in-out;\n}\n\n.sidebar-project.sidebar-project.highlighted:hover .delete-project:hover {\n    background-color: #6b4b71;\n    transition: background-color 140ms ease-in-out;\n}\n\n.sidebar-project:hover .delete-project {\n    display: flex;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.sidebar-project:hover .delete-project-icon {\n    display: initial;\n}\n\n.add-task-button {\n    display: flex;\n    align-items: center;\n}\n\n#sidebar-toggle-open:not(.hidden) {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n}\n\n#sidebar-toggle-open.hidden {\n    opacity: 0;\n}\n\n.removed {\n    width: 0;\n    height: 0;\n    overflow: hidden;\n}\n\n.highlighted {\n    background-color: #50285a;\n}\n\n.highlighted p {\n    color: #b895c0;\n}\n\n.highlighted img[src*=\"svg\"] {\n    filter: invert(73%) sepia(21%) saturate(469%) hue-rotate(243deg) brightness(85%) contrast(82%);\n}\n\n#sidebar.removed {\n    width: 0px;\n    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n#sidebar.removed #add-project-img {\n    opacity: 0;\n    transition: opacity 300ms ease-in;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/today-page-style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/today-page-style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Satoshi-Medium.otf */ "./src/fonts/Satoshi-Medium.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: satoshi-medium;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
    background-color: #212020;
}

#main-content {
    height: 100vh;
    background-color: #212020;
    flex-grow: 1;
    margin-top: 32px;
    padding: 12px;
    box-sizing: border-box;
    overflow: scroll;
    z-index: -2;
}

#today-content {
    min-width: 360px;
    margin-left: 42px;
    display: flex;
    flex-direction: column;
}

#today-title {
    position: fixed
}

#add-task-container:not(.removed) {
    margin-top: 16px;
}

#add-task-button, .add-task-button {
    padding: 0 0 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 6px;
    width: 100%;
}

#add-task-button-img-container, .add-task-button-img-container {
    width: 20px;
    clip-path: circle();
    display: flex;
    justify-content: center;
    align-items: center;
}

#add-task-button-img {
    filter: invert(32%) sepia(10%) saturate(2902%) hue-rotate(242deg) brightness(93%) contrast(91%);
}

#add-task-label, .add-task-label {
    color:#8e8b8b;
    margin: 0;
}

#add-task-button:hover {
    #add-task-button-img-container {
        background-color: #774384;
    }

    #add-task-button-img {
        filter: invert(92%) sepia(0%) saturate(0%) hue-rotate(185deg) brightness(99%) contrast(80%);
    }

    #add-task-label {
        color: #774384;
    }
}

#info-modal:not(.removed) {
    min-width: 240px;
    margin-top: 16px;
    margin-right: 36px;
    padding: 12px 24px 16px 16px;
    border: 0.4px solid #837e7e;
    border-radius: 5px;

    #task-name, #description, #priority, #select-project {
        width: 100%;
        outline: 0px;
        border: none;
        background: none;
        caret-color: #d4d4d4;
        color: #d4d4d4;
    }

    #task-name {
        padding: 8px 5px 0 5px;
        font-size: 1rem;
        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    #description {
        box-sizing: border-box;
        height: 8vh;
        resize: none;
        padding: 0 16px 0 5px;
        margin-bottom: 12px;
        font-size: 0.9rem;
    }

    hr {
        margin: 8px 0;
        border: 0.1px solid #837e7e;
    }

    #task-extra-info {
        display: flex;
        justify-content: space-between;
    }

    #priority-container {
        display: flex;
        gap: 8px;
        color: #d4d4d4;
        font-size: 0.9rem;
        align-items: center;
    }

    #priority, #select-project {
        padding: 3px;
        border: 0.4px solid #837e7e;
        border-radius: 3px;
    }

    #select-project {
        width: 50%;
    }

    #task-info-modal-buttons button {
        margin-top: 16px;
        padding: 5px;
        color: #d4d4d4;
        background-color: #444343;
        border-radius: 5px;
    }

    #task-info-modal-buttons button:hover {
        background-color:#5b5a5a;
        transition: background-color 140ms ease-in-out;
    }

    #task-info-modal-buttons button[disabled] {
        color:#a6a6a6;
        background-color: #353333;
        cursor: not-allowed;
    }

    #task-info-modal-buttons button[disabled]:hover #message {
        display: block;
        margin-left: 14px;
        padding: 0 2px;
    }

    #message {
        display: none;
        position: absolute;
        color:#d4d4d4;
        background-color: #212020;
        border: 1px solid #837e7e;
    }
}

#no-task {
    align-self: center;
    width: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: -12px;
    padding-right: 42px;
}

#no-task-image img {
    margin-top: calc(6vh);
    width: 280px;
}

#no-task-text {
    margin-top: -20px;
    display: grid;
    grid-template: repeat(2, 32px) / 1fr;
    justify-items: center;
    align-items: center;
}

#today-task-container {
    padding-right: 42px;
    display: grid;
    grid-auto-flow: row;
    row-gap: 8px;
    margin-top: 96px;
}

.task-container {
    height: 54px;
    padding-right: 8px;
    background-color: #2a2929;
    border: 1px solid #3d3c3c;
    border-radius: 7px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: border 150ms ease-in-out;
}

.task {
    flex-grow: 1;
    display: grid;
    margin-left: 32px;
    width: 100%;
    grid-template: 25px 20px / 42px 1fr;
    justify-items: start;
    align-items: center;

    img {
        position: absolute;
        width: 40px !important;
        top: -6px;
        left: -3px;
    }

    img[data-priority="1"] {
        filter: invert(36%) sepia(45%) saturate(714%) hue-rotate(158deg) brightness(93%) contrast(91%);
    }

    img[data-priority="2"] {
        filter: invert(30%) sepia(77%) saturate(446%) hue-rotate(100deg) brightness(89%) contrast(86%);
    }

    img[data-priority="3"] {
        filter: invert(61%) sepia(13%) saturate(2074%) hue-rotate(21deg) brightness(88%) contrast(86%);
    }

    img[data-priority="4"] {
        filter: invert(41%) sepia(68%) saturate(446%) hue-rotate(339deg) brightness(90%) contrast(91%);
    }

    img[data-priority="5"] {
        filter: invert(12%) sepia(95%) saturate(2687%) hue-rotate(349deg) brightness(94%) contrast(85%);
    }

    .priority {
        position: absolute;
        font-size: 0.8rem;
        top: -10px;
        left: 14px;
    }

    .checkbox {
        grid-area: 1 / 1 / span 2 / span 1;
        width: 26px;
        height: 26px;
        border: 1px solid #837e7e;
        border-radius: 50px;
    }

    .task-title {
        grid-area: 1 / 2 / span 1 / span 1;
        width: 100%;
        text-align: start;
        font-size: 1.1rem;
    }

    .task-project, .due-date {
        grid-area: 2 / 2 / span 1 / span 1;
        font-size: 0.85rem;
        color:#a6a6a6;
    }
}

.delete-task {
    padding: 3px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.delete-task-icon {
    width: 18px !important;
    display: none;
}

.task-container:hover{
    border-color: #837e7e;
    transition: border 100ms ease-in-out;

    .delete-task-icon {
        display: initial;
    }
}

.delete-task:hover {
    background-color: #444343;
    transition: background-color 140ms ease-in-out;
}

.checkbox[data-checked="done"] {
    background-color: #399e4f;
    transition: background-color 140ms ease-in-out;
}

.checkbox[data-checked="done"]::after {
    content: "✓";
    position: absolute;
    top: 12px;
    left: 46px;
    font-size: 1.2rem;
    color: #d4d4d4;
}

#task-dialog {
    width: 68%;
    height: 90%;
    padding: 0;
    background-color: #212020;
    border: 1px solid #837e7e;
    border-radius: 5px;
    overflow: hidden;
}

#task-dialog-container {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    padding: 24px;
    display: flex;
    flex-direction: column;

    #edit-task-title, #edit-task-description, #edit-task-due-date, #edit-task-priority, #dropdown-projects {
        appearance: none;
        outline: none;
        background: none;
        border: none;
        color: #d4d4d4;
    }

    label, button {
        color: #d4d4d4;
    }

    #edit-task-title {
        margin-top: 18px;
        width: 97%;
        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.5rem;
        text-overflow: ellipsis;
    }

    #edit-task-description-container {
        width: 97%;
        display: flex;
        align-items: start;
        margin-top: 8px;
    }

    #edit-task-description-icon {
        width: 16px;
        filter: invert(52%) sepia(7%) saturate(164%) hue-rotate(314deg) brightness(94%) contrast(89%);
    }

    #edit-task-description-icon.removed {
        width: 0 !important;
        height: 0 !important;
    }

    #edit-task-description {
        flex-grow: 1;
        resize: none;
        max-height: 40vh;
        margin-top: -5px;
        font-size: 1rem;
    }

    #edit-task-title, #edit-task-description-container, #edit-task-due-date, #edit-task-priority {
        padding: 4px 3px;
        border: 1px solid transparent;
        border-radius: 5px;
        transition: border 140ms ease-in-out;
    }

    #edit-task-title:hover, #edit-task-description-container:hover, #edit-task-due-date:hover, #edit-task-priority:hover {
        border: 1px solid #8e8b8b;
        transition: border 140ms ease-in-out;
    }

    #other-task-info {
        width: 97%;
        margin-top: 12px;
        display: grid;
        grid-template: repeat(4, 36px) /78px auto;
        row-gap: 4px;
        align-items: center;
    }

    #edit-task-due-date {
        width: 100px;
    }

    #edit-task-due-date::-webkit-calendar-picker-indicator {
        filter: invert(98%) sepia(0%) saturate(2388%) hue-rotate(183deg) brightness(109%) contrast(66%);
    }

    #edit-task-priority {
        justify-self: center;
        width: 100%;
        background: transparent;
    }

    #edit-task-priority::-webkit-slider-runnable-track {
        border: 1px solid #8e8b8b;
        border-radius: 6px;
        height: 0.8rem;
    }

    #edit-task-priority::-webkit-slider-thumb {
        appearance: none;
        background-color: #d4d4d4;
        margin-top: -2.5px;
        width: 1rem;
        height: 1rem;
        border-radius: 50px;
    }

    #scale {
        grid-area: 3 / 2 / span 1 / span 1;
        justify-self: center;
        align-self: start;
        width: 95%;
        margin-top: -4px;
        display: flex;
        justify-content: space-between;
        color: #d4d4d4;
        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 0.8rem;
    }

    #dropdown-projects {
        grid-area: 4 / 1 / span 1 / span 2;
        width: 120px;
        text-overflow: ellipsis;
        padding: 5px;
        border: 1px solid #5b5a5a;
        border-radius: 5px;
        transition: border 140ms ease-in-out;
        cursor: pointer;
    }

    #dropdown-projects:hover {
        border: 1px solid #8e8b8b;
    }

    #close-task {
        position: absolute;
        top: 14px;
        right: 14px;
        width: 32px;
        height: 32px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 140ms ease-in-out;
    }

    #close-task:hover {
        background-color:#5b5a5a;
        transition: background-color 140ms ease-in-out;
    }

    #close-task-icon {
        width: 24px;
    }

    #confirm-edit-task {
        grid-area: 4 / 2 / span 1 / span 1;
        justify-self: end;
        padding: 5px 14px;
        border-radius: 5px;
        background-color: #7c3ca1;
        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        transition: background-color 140ms ease-in-out;
    }

    #confirm-edit-task:hover {
        background-color: #9d5dc2;
        transition: background-color 140ms ease-in-out;
    }

    .empty {
        flex-grow: 1;
    }

    > img {
        width: 240px;
        margin-left: -36px;
        margin-bottom: -36px;
    }
}

#task-dialog::backdrop {
    background: rgb(0 0 0 / 55%)
}`, "",{"version":3,"sources":["webpack://./src/today-page-style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: satoshi-medium;\n    src: url(./fonts/Satoshi-Medium.otf);\n}\n\nbody {\n    background-color: #212020;\n}\n\n#main-content {\n    height: 100vh;\n    background-color: #212020;\n    flex-grow: 1;\n    margin-top: 32px;\n    padding: 12px;\n    box-sizing: border-box;\n    overflow: scroll;\n    z-index: -2;\n}\n\n#today-content {\n    min-width: 360px;\n    margin-left: 42px;\n    display: flex;\n    flex-direction: column;\n}\n\n#today-title {\n    position: fixed\n}\n\n#add-task-container:not(.removed) {\n    margin-top: 16px;\n}\n\n#add-task-button, .add-task-button {\n    padding: 0 0 0 6px;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    gap: 6px;\n    width: 100%;\n}\n\n#add-task-button-img-container, .add-task-button-img-container {\n    width: 20px;\n    clip-path: circle();\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#add-task-button-img {\n    filter: invert(32%) sepia(10%) saturate(2902%) hue-rotate(242deg) brightness(93%) contrast(91%);\n}\n\n#add-task-label, .add-task-label {\n    color:#8e8b8b;\n    margin: 0;\n}\n\n#add-task-button:hover {\n    #add-task-button-img-container {\n        background-color: #774384;\n    }\n\n    #add-task-button-img {\n        filter: invert(92%) sepia(0%) saturate(0%) hue-rotate(185deg) brightness(99%) contrast(80%);\n    }\n\n    #add-task-label {\n        color: #774384;\n    }\n}\n\n#info-modal:not(.removed) {\n    min-width: 240px;\n    margin-top: 16px;\n    margin-right: 36px;\n    padding: 12px 24px 16px 16px;\n    border: 0.4px solid #837e7e;\n    border-radius: 5px;\n\n    #task-name, #description, #priority, #select-project {\n        width: 100%;\n        outline: 0px;\n        border: none;\n        background: none;\n        caret-color: #d4d4d4;\n        color: #d4d4d4;\n    }\n\n    #task-name {\n        padding: 8px 5px 0 5px;\n        font-size: 1rem;\n        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    }\n\n    #description {\n        box-sizing: border-box;\n        height: 8vh;\n        resize: none;\n        padding: 0 16px 0 5px;\n        margin-bottom: 12px;\n        font-size: 0.9rem;\n    }\n\n    hr {\n        margin: 8px 0;\n        border: 0.1px solid #837e7e;\n    }\n\n    #task-extra-info {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    #priority-container {\n        display: flex;\n        gap: 8px;\n        color: #d4d4d4;\n        font-size: 0.9rem;\n        align-items: center;\n    }\n\n    #priority, #select-project {\n        padding: 3px;\n        border: 0.4px solid #837e7e;\n        border-radius: 3px;\n    }\n\n    #select-project {\n        width: 50%;\n    }\n\n    #task-info-modal-buttons button {\n        margin-top: 16px;\n        padding: 5px;\n        color: #d4d4d4;\n        background-color: #444343;\n        border-radius: 5px;\n    }\n\n    #task-info-modal-buttons button:hover {\n        background-color:#5b5a5a;\n        transition: background-color 140ms ease-in-out;\n    }\n\n    #task-info-modal-buttons button[disabled] {\n        color:#a6a6a6;\n        background-color: #353333;\n        cursor: not-allowed;\n    }\n\n    #task-info-modal-buttons button[disabled]:hover #message {\n        display: block;\n        margin-left: 14px;\n        padding: 0 2px;\n    }\n\n    #message {\n        display: none;\n        position: absolute;\n        color:#d4d4d4;\n        background-color: #212020;\n        border: 1px solid #837e7e;\n    }\n}\n\n#no-task {\n    align-self: center;\n    width: 280px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-left: -12px;\n    padding-right: 42px;\n}\n\n#no-task-image img {\n    margin-top: calc(6vh);\n    width: 280px;\n}\n\n#no-task-text {\n    margin-top: -20px;\n    display: grid;\n    grid-template: repeat(2, 32px) / 1fr;\n    justify-items: center;\n    align-items: center;\n}\n\n#today-task-container {\n    padding-right: 42px;\n    display: grid;\n    grid-auto-flow: row;\n    row-gap: 8px;\n    margin-top: 96px;\n}\n\n.task-container {\n    height: 54px;\n    padding-right: 8px;\n    background-color: #2a2929;\n    border: 1px solid #3d3c3c;\n    border-radius: 7px;\n    position: relative;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    transition: border 150ms ease-in-out;\n}\n\n.task {\n    flex-grow: 1;\n    display: grid;\n    margin-left: 32px;\n    width: 100%;\n    grid-template: 25px 20px / 42px 1fr;\n    justify-items: start;\n    align-items: center;\n\n    img {\n        position: absolute;\n        width: 40px !important;\n        top: -6px;\n        left: -3px;\n    }\n\n    img[data-priority=\"1\"] {\n        filter: invert(36%) sepia(45%) saturate(714%) hue-rotate(158deg) brightness(93%) contrast(91%);\n    }\n\n    img[data-priority=\"2\"] {\n        filter: invert(30%) sepia(77%) saturate(446%) hue-rotate(100deg) brightness(89%) contrast(86%);\n    }\n\n    img[data-priority=\"3\"] {\n        filter: invert(61%) sepia(13%) saturate(2074%) hue-rotate(21deg) brightness(88%) contrast(86%);\n    }\n\n    img[data-priority=\"4\"] {\n        filter: invert(41%) sepia(68%) saturate(446%) hue-rotate(339deg) brightness(90%) contrast(91%);\n    }\n\n    img[data-priority=\"5\"] {\n        filter: invert(12%) sepia(95%) saturate(2687%) hue-rotate(349deg) brightness(94%) contrast(85%);\n    }\n\n    .priority {\n        position: absolute;\n        font-size: 0.8rem;\n        top: -10px;\n        left: 14px;\n    }\n\n    .checkbox {\n        grid-area: 1 / 1 / span 2 / span 1;\n        width: 26px;\n        height: 26px;\n        border: 1px solid #837e7e;\n        border-radius: 50px;\n    }\n\n    .task-title {\n        grid-area: 1 / 2 / span 1 / span 1;\n        width: 100%;\n        text-align: start;\n        font-size: 1.1rem;\n    }\n\n    .task-project, .due-date {\n        grid-area: 2 / 2 / span 1 / span 1;\n        font-size: 0.85rem;\n        color:#a6a6a6;\n    }\n}\n\n.delete-task {\n    padding: 3px;\n    border-radius: 5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.delete-task-icon {\n    width: 18px !important;\n    display: none;\n}\n\n.task-container:hover{\n    border-color: #837e7e;\n    transition: border 100ms ease-in-out;\n\n    .delete-task-icon {\n        display: initial;\n    }\n}\n\n.delete-task:hover {\n    background-color: #444343;\n    transition: background-color 140ms ease-in-out;\n}\n\n.checkbox[data-checked=\"done\"] {\n    background-color: #399e4f;\n    transition: background-color 140ms ease-in-out;\n}\n\n.checkbox[data-checked=\"done\"]::after {\n    content: \"✓\";\n    position: absolute;\n    top: 12px;\n    left: 46px;\n    font-size: 1.2rem;\n    color: #d4d4d4;\n}\n\n#task-dialog {\n    width: 68%;\n    height: 90%;\n    padding: 0;\n    background-color: #212020;\n    border: 1px solid #837e7e;\n    border-radius: 5px;\n    overflow: hidden;\n}\n\n#task-dialog-container {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n    padding: 24px;\n    display: flex;\n    flex-direction: column;\n\n    #edit-task-title, #edit-task-description, #edit-task-due-date, #edit-task-priority, #dropdown-projects {\n        appearance: none;\n        outline: none;\n        background: none;\n        border: none;\n        color: #d4d4d4;\n    }\n\n    label, button {\n        color: #d4d4d4;\n    }\n\n    #edit-task-title {\n        margin-top: 18px;\n        width: 97%;\n        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 1.5rem;\n        text-overflow: ellipsis;\n    }\n\n    #edit-task-description-container {\n        width: 97%;\n        display: flex;\n        align-items: start;\n        margin-top: 8px;\n    }\n\n    #edit-task-description-icon {\n        width: 16px;\n        filter: invert(52%) sepia(7%) saturate(164%) hue-rotate(314deg) brightness(94%) contrast(89%);\n    }\n\n    #edit-task-description-icon.removed {\n        width: 0 !important;\n        height: 0 !important;\n    }\n\n    #edit-task-description {\n        flex-grow: 1;\n        resize: none;\n        max-height: 40vh;\n        margin-top: -5px;\n        font-size: 1rem;\n    }\n\n    #edit-task-title, #edit-task-description-container, #edit-task-due-date, #edit-task-priority {\n        padding: 4px 3px;\n        border: 1px solid transparent;\n        border-radius: 5px;\n        transition: border 140ms ease-in-out;\n    }\n\n    #edit-task-title:hover, #edit-task-description-container:hover, #edit-task-due-date:hover, #edit-task-priority:hover {\n        border: 1px solid #8e8b8b;\n        transition: border 140ms ease-in-out;\n    }\n\n    #other-task-info {\n        width: 97%;\n        margin-top: 12px;\n        display: grid;\n        grid-template: repeat(4, 36px) /78px auto;\n        row-gap: 4px;\n        align-items: center;\n    }\n\n    #edit-task-due-date {\n        width: 100px;\n    }\n\n    #edit-task-due-date::-webkit-calendar-picker-indicator {\n        filter: invert(98%) sepia(0%) saturate(2388%) hue-rotate(183deg) brightness(109%) contrast(66%);\n    }\n\n    #edit-task-priority {\n        justify-self: center;\n        width: 100%;\n        background: transparent;\n    }\n\n    #edit-task-priority::-webkit-slider-runnable-track {\n        border: 1px solid #8e8b8b;\n        border-radius: 6px;\n        height: 0.8rem;\n    }\n\n    #edit-task-priority::-webkit-slider-thumb {\n        appearance: none;\n        background-color: #d4d4d4;\n        margin-top: -2.5px;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50px;\n    }\n\n    #scale {\n        grid-area: 3 / 2 / span 1 / span 1;\n        justify-self: center;\n        align-self: start;\n        width: 95%;\n        margin-top: -4px;\n        display: flex;\n        justify-content: space-between;\n        color: #d4d4d4;\n        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size: 0.8rem;\n    }\n\n    #dropdown-projects {\n        grid-area: 4 / 1 / span 1 / span 2;\n        width: 120px;\n        text-overflow: ellipsis;\n        padding: 5px;\n        border: 1px solid #5b5a5a;\n        border-radius: 5px;\n        transition: border 140ms ease-in-out;\n        cursor: pointer;\n    }\n\n    #dropdown-projects:hover {\n        border: 1px solid #8e8b8b;\n    }\n\n    #close-task {\n        position: absolute;\n        top: 14px;\n        right: 14px;\n        width: 32px;\n        height: 32px;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        transition: background-color 140ms ease-in-out;\n    }\n\n    #close-task:hover {\n        background-color:#5b5a5a;\n        transition: background-color 140ms ease-in-out;\n    }\n\n    #close-task-icon {\n        width: 24px;\n    }\n\n    #confirm-edit-task {\n        grid-area: 4 / 2 / span 1 / span 1;\n        justify-self: end;\n        padding: 5px 14px;\n        border-radius: 5px;\n        background-color: #7c3ca1;\n        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        transition: background-color 140ms ease-in-out;\n    }\n\n    #confirm-edit-task:hover {\n        background-color: #9d5dc2;\n        transition: background-color 140ms ease-in-out;\n    }\n\n    .empty {\n        flex-grow: 1;\n    }\n\n    > img {\n        width: 240px;\n        margin-left: -36px;\n        margin-bottom: -36px;\n    }\n}\n\n#task-dialog::backdrop {\n    background: rgb(0 0 0 / 55%)\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/upcoming-page-style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/upcoming-page-style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#upcoming-content {
    min-width: 360px;
    margin-left: 42px;
    display: flex;
    flex-direction: column;
    overflow-x: scroll;
    overflow-y: hidden;
}

#month-title {
    position:fixed;
    display: flex;
    gap: 8px;

    button {
        color: #d4d4d4;
        font-size: 1.2rem;
        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h1 {
        width: 320px;
        text-align: center;
    }
}

#upcoming-container {
    display: flex;
    width:fit-content;
    height: 80vh;
    margin-top: 84px;
}

#overdue {
    margin-right: 24px;
    width: 280px;

    #overdue-tasks {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;

        .task-container {
            border-color: #a73d3d;
        }

        .task-container:hover {
            border-color: #837e7e;
        }
    }
}

#overdue.removed {
    width: 0;
    height: 0;
}

#month-page {
    padding-right: 64px;
    display: flex;
    gap: 24px;

    #today, #tomorrow, #this-week, #this-month {
        background: none;
        width: 280px;
    }

    #today-tasks, #tomorrow-tasks, #this-week-tasks, #this-month-tasks {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow: scroll;

        .task-container:last-child {
            margin-bottom: 8px;
        }
    }

    .overdue {
        border-color: #a73d3d;
    }

    .overdue:hover {
        border-color: #837e7e;
    }
}

.add-task-button-img[alt="Plus"] {
    filter: invert(32%) sepia(10%) saturate(2902%) hue-rotate(242deg) brightness(93%) contrast(91%);
}

.add-task-button:hover {

    .add-task-button-img-container {
        background-color: #774384;
    }

    .add-task-button-img {
        filter: invert(92%) sepia(0%) saturate(0%) hue-rotate(185deg) brightness(99%) contrast(80%);
    }

    .add-task-label {
        color: #774384;
    }
}

.upcoming-page-task-info-modal:not(.removed) {
    box-sizing: border-box;
    width: 280px;
    margin-right: 36px;
    padding: 12px 24px 16px 16px;
    border: 0.4px solid #837e7e;
    border-radius: 5px;

    .task-name, .description, .priority, .select-project, .due-date {
        width: 100%;
        outline: 0px;
        border: none;
        background: none;
        caret-color: #d4d4d4;
        color: #d4d4d4;
    }

    .task-name {
        padding: 8px 5px 0 5px;
        font-size: 1rem;
        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .description {
        box-sizing: border-box;
        height: 8vh;
        resize: none;
        padding: 0 16px 0 5px;
        margin-bottom: 12px;
        font-size: 0.9rem;
    }

    hr {
        margin: 8px 0;
        border: 0.1px solid #837e7e;
    }

    .extra-task-info {
        width: 60%;
        display: flex;
        flex-direction: column;
        gap:4px;
    }

    .priority-container {
        display: flex;
        gap: 8px;
        color: #d4d4d4;
        font-size: 0.9rem;
        align-items: center;
    }

    .priority, .select-project, .due-date {
        box-sizing: border-box;
        width: 100%;
        padding: 3px;
        border: 0.4px solid #837e7e;
        border-radius: 3px;
    }

    .due-date::-webkit-calendar-picker-indicator {
        filter: invert(98%) sepia(0%) saturate(2388%) hue-rotate(183deg) brightness(109%) contrast(66%);
    }

    .task-info-modal-buttons button {
        margin-top: 16px;
        padding: 5px;
        color: #d4d4d4;
        background-color: #444343;
        border-radius: 5px;
    }

    .task-info-modal-buttons button:hover , #cancel-add-section:hover, #confirm-add-section:hover {
        background-color:#5b5a5a;
        transition: background-color 140ms ease-in-out;
    }

    .task-info-modal-buttons button[disabled] {
        color:#a6a6a6;
        background-color: #353333;
        cursor: not-allowed;
    }

    .task-info-modal-buttons button[disabled]:hover .message {
        display: block;
        margin-left: 14px;
        padding: 0 2px;
    }

    .message {
        display: none;
        position: absolute;
        color:#d4d4d4;
        background-color: #212020;
        border: 1px solid #837e7e;
    }
}

#image-container {
    position: fixed;
    top: 360px;
    display: flex;
    align-items: center;
    width: 280px;
    
    img {
        margin-left: 70px;
        width: 280px;
    }

    p {
        margin-left: -48px;
    }

    z-index: -1;
}`, "",{"version":3,"sources":["webpack://./src/upcoming-page-style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,QAAQ;;IAER;QACI,cAAc;QACd,iBAAiB;QACjB,mKAAmK;IACvK;;IAEA;QACI,YAAY;QACZ,kBAAkB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,YAAY;;IAEZ;QACI,WAAW;QACX,aAAa;QACb,sBAAsB;QACtB,QAAQ;;QAER;YACI,qBAAqB;QACzB;;QAEA;YACI,qBAAqB;QACzB;IACJ;AACJ;;AAEA;IACI,QAAQ;IACR,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,SAAS;;IAET;QACI,gBAAgB;QAChB,YAAY;IAChB;;IAEA;QACI,WAAW;QACX,aAAa;QACb,sBAAsB;QACtB,QAAQ;QACR,gBAAgB;;QAEhB;YACI,kBAAkB;QACtB;IACJ;;IAEA;QACI,qBAAqB;IACzB;;IAEA;QACI,qBAAqB;IACzB;AACJ;;AAEA;IACI,+FAA+F;AACnG;;AAEA;;IAEI;QACI,yBAAyB;IAC7B;;IAEA;QACI,2FAA2F;IAC/F;;IAEA;QACI,cAAc;IAClB;AACJ;;AAEA;IACI,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,4BAA4B;IAC5B,2BAA2B;IAC3B,kBAAkB;;IAElB;QACI,WAAW;QACX,YAAY;QACZ,YAAY;QACZ,gBAAgB;QAChB,oBAAoB;QACpB,cAAc;IAClB;;IAEA;QACI,sBAAsB;QACtB,eAAe;QACf,mKAAmK;IACvK;;IAEA;QACI,sBAAsB;QACtB,WAAW;QACX,YAAY;QACZ,qBAAqB;QACrB,mBAAmB;QACnB,iBAAiB;IACrB;;IAEA;QACI,aAAa;QACb,2BAA2B;IAC/B;;IAEA;QACI,UAAU;QACV,aAAa;QACb,sBAAsB;QACtB,OAAO;IACX;;IAEA;QACI,aAAa;QACb,QAAQ;QACR,cAAc;QACd,iBAAiB;QACjB,mBAAmB;IACvB;;IAEA;QACI,sBAAsB;QACtB,WAAW;QACX,YAAY;QACZ,2BAA2B;QAC3B,kBAAkB;IACtB;;IAEA;QACI,+FAA+F;IACnG;;IAEA;QACI,gBAAgB;QAChB,YAAY;QACZ,cAAc;QACd,yBAAyB;QACzB,kBAAkB;IACtB;;IAEA;QACI,wBAAwB;QACxB,8CAA8C;IAClD;;IAEA;QACI,aAAa;QACb,yBAAyB;QACzB,mBAAmB;IACvB;;IAEA;QACI,cAAc;QACd,iBAAiB;QACjB,cAAc;IAClB;;IAEA;QACI,aAAa;QACb,kBAAkB;QAClB,aAAa;QACb,yBAAyB;QACzB,yBAAyB;IAC7B;AACJ;;AAEA;IACI,eAAe;IACf,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,YAAY;;IAEZ;QACI,iBAAiB;QACjB,YAAY;IAChB;;IAEA;QACI,kBAAkB;IACtB;;IAEA,WAAW;AACf","sourcesContent":["#upcoming-content {\n    min-width: 360px;\n    margin-left: 42px;\n    display: flex;\n    flex-direction: column;\n    overflow-x: scroll;\n    overflow-y: hidden;\n}\n\n#month-title {\n    position:fixed;\n    display: flex;\n    gap: 8px;\n\n    button {\n        color: #d4d4d4;\n        font-size: 1.2rem;\n        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    }\n\n    h1 {\n        width: 320px;\n        text-align: center;\n    }\n}\n\n#upcoming-container {\n    display: flex;\n    width:fit-content;\n    height: 80vh;\n    margin-top: 84px;\n}\n\n#overdue {\n    margin-right: 24px;\n    width: 280px;\n\n    #overdue-tasks {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n\n        .task-container {\n            border-color: #a73d3d;\n        }\n\n        .task-container:hover {\n            border-color: #837e7e;\n        }\n    }\n}\n\n#overdue.removed {\n    width: 0;\n    height: 0;\n}\n\n#month-page {\n    padding-right: 64px;\n    display: flex;\n    gap: 24px;\n\n    #today, #tomorrow, #this-week, #this-month {\n        background: none;\n        width: 280px;\n    }\n\n    #today-tasks, #tomorrow-tasks, #this-week-tasks, #this-month-tasks {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n        overflow: scroll;\n\n        .task-container:last-child {\n            margin-bottom: 8px;\n        }\n    }\n\n    .overdue {\n        border-color: #a73d3d;\n    }\n\n    .overdue:hover {\n        border-color: #837e7e;\n    }\n}\n\n.add-task-button-img[alt=\"Plus\"] {\n    filter: invert(32%) sepia(10%) saturate(2902%) hue-rotate(242deg) brightness(93%) contrast(91%);\n}\n\n.add-task-button:hover {\n\n    .add-task-button-img-container {\n        background-color: #774384;\n    }\n\n    .add-task-button-img {\n        filter: invert(92%) sepia(0%) saturate(0%) hue-rotate(185deg) brightness(99%) contrast(80%);\n    }\n\n    .add-task-label {\n        color: #774384;\n    }\n}\n\n.upcoming-page-task-info-modal:not(.removed) {\n    box-sizing: border-box;\n    width: 280px;\n    margin-right: 36px;\n    padding: 12px 24px 16px 16px;\n    border: 0.4px solid #837e7e;\n    border-radius: 5px;\n\n    .task-name, .description, .priority, .select-project, .due-date {\n        width: 100%;\n        outline: 0px;\n        border: none;\n        background: none;\n        caret-color: #d4d4d4;\n        color: #d4d4d4;\n    }\n\n    .task-name {\n        padding: 8px 5px 0 5px;\n        font-size: 1rem;\n        font-family: satoshi-medium, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    }\n\n    .description {\n        box-sizing: border-box;\n        height: 8vh;\n        resize: none;\n        padding: 0 16px 0 5px;\n        margin-bottom: 12px;\n        font-size: 0.9rem;\n    }\n\n    hr {\n        margin: 8px 0;\n        border: 0.1px solid #837e7e;\n    }\n\n    .extra-task-info {\n        width: 60%;\n        display: flex;\n        flex-direction: column;\n        gap:4px;\n    }\n\n    .priority-container {\n        display: flex;\n        gap: 8px;\n        color: #d4d4d4;\n        font-size: 0.9rem;\n        align-items: center;\n    }\n\n    .priority, .select-project, .due-date {\n        box-sizing: border-box;\n        width: 100%;\n        padding: 3px;\n        border: 0.4px solid #837e7e;\n        border-radius: 3px;\n    }\n\n    .due-date::-webkit-calendar-picker-indicator {\n        filter: invert(98%) sepia(0%) saturate(2388%) hue-rotate(183deg) brightness(109%) contrast(66%);\n    }\n\n    .task-info-modal-buttons button {\n        margin-top: 16px;\n        padding: 5px;\n        color: #d4d4d4;\n        background-color: #444343;\n        border-radius: 5px;\n    }\n\n    .task-info-modal-buttons button:hover , #cancel-add-section:hover, #confirm-add-section:hover {\n        background-color:#5b5a5a;\n        transition: background-color 140ms ease-in-out;\n    }\n\n    .task-info-modal-buttons button[disabled] {\n        color:#a6a6a6;\n        background-color: #353333;\n        cursor: not-allowed;\n    }\n\n    .task-info-modal-buttons button[disabled]:hover .message {\n        display: block;\n        margin-left: 14px;\n        padding: 0 2px;\n    }\n\n    .message {\n        display: none;\n        position: absolute;\n        color:#d4d4d4;\n        background-color: #212020;\n        border: 1px solid #837e7e;\n    }\n}\n\n#image-container {\n    position: fixed;\n    top: 360px;\n    display: flex;\n    align-items: center;\n    width: 280px;\n    \n    img {\n        margin-left: 70px;\n        width: 280px;\n    }\n\n    p {\n        margin-left: -48px;\n    }\n\n    z-index: -1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/project-page-style.css":
/*!************************************!*\
  !*** ./src/project-page-style.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_page_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./project-page-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/project-page-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/sidebar-style.css":
/*!*******************************!*\
  !*** ./src/sidebar-style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./sidebar-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/sidebar-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sidebar_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/today-page-style.css":
/*!**********************************!*\
  !*** ./src/today-page-style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_today_page_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./today-page-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/today-page-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_today_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_today_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_today_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_today_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/upcoming-page-style.css":
/*!*************************************!*\
  !*** ./src/upcoming-page-style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_upcoming_page_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./upcoming-page-style.css */ "./node_modules/css-loader/dist/cjs.js!./src/upcoming-page-style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_upcoming_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_upcoming_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_upcoming_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_upcoming_page_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeSidebarHighlight: () => (/* binding */ changeSidebarHighlight),
/* harmony export */   hideElements: () => (/* binding */ hideElements),
/* harmony export */   loadCurrentMonth: () => (/* binding */ loadCurrentMonth),
/* harmony export */   loadFutureMonth: () => (/* binding */ loadFutureMonth),
/* harmony export */   loadPastMonth: () => (/* binding */ loadPastMonth),
/* harmony export */   loadProjectsToDropdown: () => (/* binding */ loadProjectsToDropdown),
/* harmony export */   loadProjectsToSidebar: () => (/* binding */ loadProjectsToSidebar),
/* harmony export */   loadSections: () => (/* binding */ loadSections),
/* harmony export */   loadSortedTasksByDate: () => (/* binding */ loadSortedTasksByDate),
/* harmony export */   loadTasksByDate: () => (/* binding */ loadTasksByDate),
/* harmony export */   openTask: () => (/* binding */ openTask),
/* harmony export */   removeElements: () => (/* binding */ removeElements),
/* harmony export */   requiredFieldAlert: () => (/* binding */ requiredFieldAlert),
/* harmony export */   revealElements: () => (/* binding */ revealElements)
/* harmony export */ });
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_hammer_wrench_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hammer-wrench.svg */ "./src/images/hammer-wrench.svg");
/* harmony import */ var _images_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg");
/* harmony import */ var _images_bookmark_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/bookmark.svg */ "./src/images/bookmark.svg");
/* harmony import */ var _images_text_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/text.svg */ "./src/images/text.svg");
/* harmony import */ var _images_mouse_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/mouse.png */ "./src/images/mouse.png");
/* harmony import */ var _images_walkingmouse_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/walkingmouse.png */ "./src/images/walkingmouse.png");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/add.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/endOfMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isTomorrow.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisWeek.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isSameMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/startOfMonth.mjs");










const hideElements = function(container) {
  container.classList.add("hidden");
};

const revealElements = function(container) {
  container.classList.remove("hidden");
  container.classList.remove("removed");
};

const removeElements = function(container) {
  container.classList.add("removed");
};

const changeSidebarHighlight = function(highlightedElement) {
  Array.from(document.querySelectorAll(".menu")).forEach((element) =>
    element.classList.remove("highlighted"),
  );
  highlightedElement.classList.add("highlighted");
};

const loadTasksByDate = function(container, filter, comparison) {
  container.innerHTML = "";
  _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterTaskByDate(filter, comparison).forEach((task) => {
    container.innerHTML += `
        <div data-open="task-dialog" class="task-container" data-task>
            <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                <div data-task-id="${task.id}" class="checkbox"></div>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${_images_bookmark_svg__WEBPACK_IMPORTED_MODULE_4__}" />
                <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-project">
                    ${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName === "projectless" ? "No project" : _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName}${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName === "sectionless" ? "" : " &middot " + _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName}
                </p>
            </button>
            <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Delete" />
            </button>
        </div>
    `;
    if (task.status === "done") {
      document
        .querySelector(`[data-task-id="${task.id}"][class~="checkbox"]`)
        .setAttribute("data-checked", "done");
    }
  });
};

const loadSortedTasksByDate = function(container, filter, comparison) {
  container.innerHTML = "";
  const sortedTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].sortTaskByDate(
    _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterTaskByDate(filter, comparison),
  );
  const overdueTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterOverdueTasks(sortedTasks);
  const notOverdueTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterNotOverdueTasks(sortedTasks);

  overdueTasks.forEach((task) => {
    container.innerHTML += `
        <div data-open="task-dialog" class="task-container overdue">
            <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                <div data-task-id="${task.id}" class="checkbox"></div>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${_images_bookmark_svg__WEBPACK_IMPORTED_MODULE_4__}" />
                <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-project due-date">${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(task.dueDate, "d MMM")}, ${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName === "projectless" ? "No project" : _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName}${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName === "sectionless" ? "" : " &middot " + _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName}</p>
            </button>
            <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Delete" />
            </button>
        </div>
    `;
  });

  notOverdueTasks.forEach((task) => {
    container.innerHTML += `
        <div data-open="task-dialog" class="task-container">
            <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                <div data-task-id="${task.id}" class="checkbox"></div>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${_images_bookmark_svg__WEBPACK_IMPORTED_MODULE_4__}" />
                <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-project due-date">${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(task.dueDate, "d MMM")}, ${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName === "projectless" ? "No project" : _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName}${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName === "sectionless" ? "" : " &middot " + _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName}</p>
            </button>
            <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Delete" />
            </button>
        </div>
    `;
    if (task.status === "done") {
      Array.from(
        document.querySelectorAll(
          `[data-task-id="${task.id}"][class~="checkbox"]`,
        ),
      ).forEach((button) => button.setAttribute("data-checked", "done"));
    }
  });
};

const loadOverdueSortedTasksByDate = function(container) {
  container.innerHTML = "";
  const overdueTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterOverdueTasks(_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[0]);
  const sortedOverdueTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].sortTaskByDate(overdueTasks);
  sortedOverdueTasks.forEach((task) => {
    container.innerHTML += `
        <div data-open="task-dialog" class="task-container" data-task>
            <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                <div data-task-id="${task.id}" class="checkbox"></div>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${_images_bookmark_svg__WEBPACK_IMPORTED_MODULE_4__}" />
                <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-project due-date">${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(task.dueDate, "d MMM")}, ${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName === "projectless" ? "No project" : _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName}${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName === "sectionless" ? "" : " &middot " + _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName}</p>
            </button>
            <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Delete" />
            </button>
        </div>
    `;
  });
};

const loadProjectsToSidebar = function(container) {
  container.innerHTML = "";
  for (let i = 2; i < _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks.length; i++) {
    container.innerHTML += `
        <div data-project-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}" class="menu sidebar-project">
            <button data-project-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}" class="menu sidebar-project-name">
                <img data-project-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}" src=${_images_hammer_wrench_svg__WEBPACK_IMPORTED_MODULE_2__} alt="Project">
                <p data-project-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}">${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}<p>
            </button>
            <button data-project-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}" class="delete-project">
                <img data-project-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Delete" class="delete-project-icon">
            </button>
        </div>
    `;
  }
};

const loadProjectsToDropdown = function(container, task) {
  container.innerHTML = `
        <option data-project-name="projectless" data-section-name="sectionless" class="dropdown-project-name">No projects</option>
    `;
  for (let i = 2; i < _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks.length; i++) {
    container.innerHTML += `
        <option data-project-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}" data-section-name="sectionless" class="dropdown-project-name">${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}</option>
        `;
    for (let j = 1; j < _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].sections.length; j++) {
      container.innerHTML += `
            <option data-project-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].projectName}" data-section-name="${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].sections[j].sectionName}" class="dropdown-section-name">&nbsp &#x25B8 ${_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[i].sections[j].sectionName}</option>
            `;
    }
  }

  if (task) {
    const options = document.querySelectorAll(
      ".dropdown-project-name, .dropdown-section-name",
    );
    Array.from(options).forEach((option) => {
      if (
        option.getAttribute("data-project-name") ===
          _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).projectName &&
        option.getAttribute("data-section-name") ===
          _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getTaskProjectAndSection(task).sectionName
      ) {
        option.setAttribute("selected", true);
      }
    });
  }
};

const loadTasksBySection = function(container, projectName, sectionName) {
  container.innerHTML = "";
  const sortedTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].sortTaskByDate(
    _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterTaskBySection(projectName, sectionName),
  );
  const overdueTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterOverdueTasks(sortedTasks);
  const notOverdueTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterNotOverdueTasks(sortedTasks);
  overdueTasks.forEach((task) => {
    container.innerHTML += `
        <div data-open="task-dialog" class="task-container overdue">
            <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                <div data-task-id="${task.id}" class="checkbox"></div>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${_images_bookmark_svg__WEBPACK_IMPORTED_MODULE_4__}" />
                <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                <p data-open="task-dialog" data-task-id="${task.id}" class="due-date">${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(task.dueDate, "d MMM")}</p>
            </button>
            <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Delete" />
            </button>
        </div>
    `;
    if (task.status === "done") {
      document
        .querySelector(`[data-task-id="${task.id}"][class~="checkbox"]`)
        .setAttribute("data-checked", "done");
    }
  });
  notOverdueTasks.forEach((task) => {
    container.innerHTML += `
        <div data-open="task-dialog" class="task-container">
            <button data-open="task-dialog" data-task-id="${task.id}" class="task">
                <div data-task-id="${task.id}" class="checkbox"></div>
                <p data-open="task-dialog" data-task-id="${task.id}" class="task-title">${task.title}</p>
                <img data-open="task-dialog" data-task-id="${task.id}" data-priority="${task.priority}" src="${_images_bookmark_svg__WEBPACK_IMPORTED_MODULE_4__}" />
                <p data-open="task-dialog" data-task-id="${task.id}" class="priority">${task.priority}</p>
                <p data-open="task-dialog" data-task-id="${task.id}" class="due-date">${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(task.dueDate, "d MMM")}</p>
            </button>
            <button data-open="task-dialog" data-task-id="${task.id}" class="delete-task">
                <img data-open="task-dialog" data-task-id="${task.id}" class="delete-task-icon" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Delete" />
            </button>
        </div>
    `;
    if (task.status === "done") {
      document
        .querySelector(`[data-task-id="${task.id}"][class~="checkbox"]`)
        .setAttribute("data-checked", "done");
    }
  });
};

const loadSections = function(container, projectName) {
  let sections = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(projectName).sections;
  container.innerHTML = "";
  for (let i = 1; i < sections.length; i++) {
    container.innerHTML += `
        <div class="section">
            <div class="section-header">
                <input data-section-name="${sections[i].sectionName}" type="text" value="${sections[i].sectionName}" class="section-name" autocomplete="off">
                <button data-section-name="${sections[i].sectionName}" class="delete-section-button">
                    <img data-section-name="${sections[i].sectionName}" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Close" />
                </button>
            </div>
            <div data-section-name="${sections[i].sectionName}" class="tasks"></div>
            <button data-open="add task modal" data-section-name="${sections[i].sectionName}" class="add-task-button">
                <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="add-task-button-img-container">
                    <img data-open="add task modal" data-section-name="${sections[i].sectionName}" src=${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__} class="add-task-button-img" alt="Plus">
                </div>
                <p data-open="add task modal" data-section-name="${sections[i].sectionName}" class="add-task-label">Add task</p>
            </button>
            <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="project-page-task-info-modal removed">
                <form data-open="add task modal">
                    <input data-open="add task modal" data-section-name="${sections[i].sectionName}" class="task-name" type="text" placeholder="Task name" />
                    <hr data-open="add task modal">
                    <textarea data-open="add task modal" data-section-name="${sections[i].sectionName}" class="description" placeholder="Description"></textarea>
                    <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="extra-task-info">
                        <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="priority-container">
                            <label data-open="add task modal" for="priority">Priority</label>
                            <input data-open="add task modal" data-section-name="${sections[i].sectionName}" class="priority" type="number" value="1" min="1" max="5" />
                        </div>
                        <input data-open="add task modal" data-section-name="${sections[i].sectionName}" class="due-date" type="date" value="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(), "yyyy-MM-dd")}" min="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(), "yyyy-MM-dd")}"/>
                    </div>
                    <div data-open="add task modal" data-section-name="${sections[i].sectionName}" class="task-info-modal-buttons">
                        <button data-open="add task modal" data-section-name="${sections[i].sectionName}" class="confirm-add-task" disabled>OK<div data-section-name="${sections[i].sectionName}" class="message"></div></button>
                        <button data-open="add task modal" data-section-name="${sections[i].sectionName}" class="cancel-add-task">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    const taskContainer = document.querySelector(
      `[data-section-name="${sections[i].sectionName}"][class~="tasks"]`,
    );
    loadTasksBySection(taskContainer, projectName, sections[i].sectionName);
  }
  container.innerHTML += `
        <div class="section">
            <p>No section</p>
            <div data-section-name="sectionless" class="tasks"></div>
            <button data-open="add task modal" data-section-name="sectionless" class="add-task-button">
                <div data-open="add task modal" data-section-name="sectionless" class="add-task-button-img-container">
                    <img data-open="add task modal" data-section-name="sectionless" src=${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__} alt="Plus" class="add-task-button-img">
                </div>
                <p data-open="add task modal" data-section-name="sectionless" class="add-task-label">Add task</p>
            </button>
            <div data-open="add task modal" data-section-name="sectionless" class="project-page-task-info-modal removed">
                <form data-open="add task modal">
                    <input data-open="add task modal" data-section-name="sectionless" class="task-name" type="text" placeholder="Task name" />
                    <hr data-open="add task modal">
                    <textarea data-open="add task modal" data-section-name="sectionless" class="description" placeholder="Description"></textarea>
                    <div data-open="add task modal" data-section-name="sectionless" class="extra-task-info">
                            <div data-open="add task modal" data-section-name="sectionless" class="priority-container">
                                <label data-open="add task modal" for="priority">Priority</label>
                                <input data-open="add task modal" data-section-name="sectionless" class="priority" type="number" value="1" min="1" max="5" />
                            </div>
                            <input data-open="add task modal" data-section-name="sectionless" class="due-date" type="date" value="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(), "yyyy-MM-dd")}" min="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(), "yyyy-MM-dd")}"/>
                        </div>
                    <div data-open="add task modal" data-section-name="sectionless" class="task-info-modal-buttons">
                        <button data-open="add task modal" data-section-name="sectionless" class="confirm-add-task" disabled>OK<div data-section-name="sectionless" class="message"></div></button>
                        <button data-open="add task modal" data-section-name="sectionless" class="cancel-add-task">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    `;
  loadTasksBySection(
    document.querySelector(`[data-section-name="sectionless"][class~="tasks"]`),
    projectName,
    "sectionless",
  );
};

const openTask = function(task) {
  const taskDialog = document.querySelector("#task-dialog");
  const taskDialogContainer = document.querySelector("#task-dialog-container");
  taskDialogContainer.innerHTML = `
        <input data-open="task-dialog" type="text" style="position:fixed; left: -100000000000px" />
        <input data-open="task-dialog" type="text" id="edit-task-title" value="${task.title}" />
        <div data-open="task-dialog" id="edit-task-description-container">
        <img data-open="task-dialog" src="${_images_text_svg__WEBPACK_IMPORTED_MODULE_5__}" alt="Text" id="edit-task-description-icon" class="removed"/>
        <textarea data-open="task-dialog" id="edit-task-description" placeholder="Description">${task.description}</textarea>
        </div>
        <div data-open="task-dialog" id="other-task-info">
            <label for="edit-task-due-date">Due date:</label>
            <input data-open="task-dialog" type="date" id="edit-task-due-date" value="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(task.dueDate, "yyyy-MM-dd")}" min="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(new Date(), "yyyy-MM-dd")}"/>
            <label for="edit-task-priority">Priority:</label>
            <input data-open="task-dialog" type="range" id="edit-task-priority" value="${task.priority}" min="1" max="5" />
            <div id="scale"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div></div>
            <select data-open="task-dialog" data-task-id="${task.id}" id="dropdown-projects">
            </select>
            <button data-open="task-dialog" id="confirm-edit-task">OK</button>
        </div>
        <button data-open="task-dialog" id="close-task">
            <img data-open"task-dialog" id="close-task-icon" src="${_images_close_svg__WEBPACK_IMPORTED_MODULE_3__}" alt="Close" />
        </button>
        <div data-open="task-dialog" class="empty"></div>
        <img src="${_images_mouse_png__WEBPACK_IMPORTED_MODULE_6__}" />
  `;

  const editTaskDescriptionIcon = document.querySelector(
    "#edit-task-description-icon",
  );
  const editTaskDescription = document.querySelector("#edit-task-description");
  loadProjectsToDropdown(document.querySelector("#dropdown-projects"), task);
  taskDialog.showModal();

  editTaskDescriptionIcon.addEventListener("click", () =>
    editTaskDescription.focus(),
  );
  if (editTaskDescription.value === "") {
    revealElements(editTaskDescriptionIcon);
  }

  editTaskDescription.style.height =
    editTaskDescription.scrollHeight + 3 + "px";
  editTaskDescription.addEventListener("input", () => {
    if (editTaskDescription.value !== "") {
      removeElements(editTaskDescriptionIcon);
    } else revealElements(editTaskDescriptionIcon);
    editTaskDescription.style.height = "";
    editTaskDescription.style.height =
      editTaskDescription.scrollHeight + 3 + "px";
  });

  enableCloseTask(taskDialog);
  enableClickOut(taskDialog);
};

const enableClickOut = function(taskDialog) {
  document.addEventListener("click", (e) => {
    if (e.target.getAttribute("data-open") !== "task-dialog") {
      taskDialog.close();
    }
  });
};

const enableCloseTask = function(taskDialog) {
  const closeTaskButton = document.querySelector("#close-task");
  closeTaskButton.addEventListener("click", () => {
    taskDialog.close();
  });
};

const loadCurrentMonth = function(today) {
  const tomorrow = (0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_9__.add)(today, { days: 1 }), "yyyy-MM-dd");

  document.querySelector("#today-content").innerHTML = "";
  document.querySelector("#project-content").innerHTML = "";
  document.querySelector("#upcoming-content").innerHTML = `
        <div id="month-title">
            <button id="previous-month"><</button>
            <h1>${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(today, "MMMM yyyy")}</h1>
            <button id="next-month">></button>
        </div>
        <div id="upcoming-container">
            <div id="overdue">
                <p>Overdue</p>
                <div id="overdue-tasks">
                </div>
            </div>
            <div id="month-page" data-month="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(today, "MMMM yyyy")}">
                <div id="today">
                    <p>${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(today, "d MMM")} &middot Today</p>
                    <div id="today-tasks"></div>
                    <button data-open="add task modal" data-due-date="${today}" class="add-task-button">
                        <div data-open="add task modal" data-due-date="${today}" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="${today}" src=${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__} class="add-task-button-img" alt="Plus">
                        </div>
                        <p data-open="add task modal" data-due-date="${today}" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="${today}" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="${today}" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="${today}" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="${today}" class="extra-task-info">
                                <div data-open="add task modal" data-due-date="${today}" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="${today}" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <select data-open="add task modal" data-due-date="${today}" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="${today}" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="${today}" disabled class="confirm-add-task">OK<div data-due-date="${today}" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="${today}" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="tomorrow">
                    <p>${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(tomorrow, "d MMM")} &middot Tomorrow</p>
                    <div id="tomorrow-tasks"></div>
                    <button data-open="add task modal" data-due-date="${tomorrow}" class="add-task-button">
                        <div data-open="add task modal" data-due-date="${tomorrow}" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="${tomorrow}" src=${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__} class="add-task-button-img" alt="Plus">
                        </div>
                         <p data-open="add task modal" data-due-date="${tomorrow}" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="${tomorrow}" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="${tomorrow}" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="${tomorrow}" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="${tomorrow}" class="extra-task-info">
                                <div data-open="add task modal" data-due-dat3="${tomorrow}" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="${tomorrow}" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <select data-open="add task modal" data-due-date="${tomorrow}" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="${tomorrow}" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="${tomorrow}" disabled class="confirm-add-task">OK<div data-due-date="${tomorrow}" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="${tomorrow}" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="this-week">
                    <p>This Week</p>
                    <div id="this-week-tasks"></div>
                    <button data-open="add task modal" data-due-date="this-week" class="add-task-button">
                        <div data-open="add task modal" data-due-date="this-week" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="this-week" src=${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__} class="add-task-button-img" alt="Plus">
                        </div>
                        <p data-open="add task modal" data-due-date="this-week" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="this-week" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="this-week" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="this-week" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="this-week" class="extra-task-info">
                                <div data-open="add task modal" data-due-date="this-week" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="this-week" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <input data-open="add task modal" data-due-date="this-week" class="due-date" type="date" value="${today}" min="${today}" max="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_10__.endOfWeek)(today, { weekStartsOn: 1 }), "yyyy-MM-dd")}" />
                                <select data-open="add task modal" data-due-date="this-week" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="this-week" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="this-week" disabled class="confirm-add-task">OK<div data-due-date="this-week" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="this-week" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="this-month">
                    <p>This Month</p>
                    <div id="this-month-tasks"></div>
                    <button data-open="add task modal" data-due-date="this-month" class="add-task-button">
                        <div data-open="add task modal" data-due-date="this-month" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="this-month" src=${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__} class="add-task-button-img" alt="Plus">
                        </div>
                        <p data-open="add task modal" data-due-date="this-month" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="this-month" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="this-month" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="this-month" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="this-month" class="extra-task-info">
                                <div data-open="add task modal" data-due-date="this-month" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="this-month" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <input data-open="add task modal" data-due-date="this-month" class="due-date" type="date" value="${today}" min="${today}" max="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.endOfMonth)(today), "yyyy-MM-dd")}" />
                                <select data-open="add task modal" data-due-date="this-month" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="this-month" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="this-month" disabled class="confirm-add-task">OK<div data-due-date="this-month" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="this-month" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="image-container">
                <img src="${_images_walkingmouse_png__WEBPACK_IMPORTED_MODULE_7__}" />
                <p>Nothing here!</p>
            </div>
        </div>
    `;

  const overdueContainer = document.querySelector("#overdue");
  const overdueTaskContainer = document.querySelector("#overdue-tasks");
  const todayTaskContainer = document.querySelector("#today-tasks");
  const tomorrowTaskContainer = document.querySelector("#tomorrow-tasks");
  const thisWeekTaskContainer = document.querySelector("#this-week-tasks");
  const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

  if (_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterOverdueTasks(_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[0]).length > 0) {
    revealElements(overdueContainer);
  } else removeElements(overdueContainer);
  loadOverdueSortedTasksByDate(overdueTaskContainer);
  loadTasksByDate(todayTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_12__.isToday);
  loadTasksByDate(tomorrowTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_13__.isTomorrow);
  loadSortedTasksByDate(thisWeekTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_14__.isThisWeek, { weekStartsOn: 1 });
  loadSortedTasksByDate(thisMonthTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_15__.isThisMonth);
};

const loadPastMonth = function(month) {
  document.querySelector("#upcoming-content").innerHTML = `
        <div id="month-title">
            <button id="previous-month"><</button>
            <h1>${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(month, "MMMM yyyy")}</h1>
            <button id="next-month">></button>
        </div>
        <div id="upcoming-container">
            <div id="overdue">
                <p>Overdue</p>
                <div id="overdue-tasks">
                </div>
            </div>
            <div id="month-page" data-month="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(month, "MMMM yyyy")}">
                <p>This Month</p>
                <div id="this-month-tasks"></div>
            </div>
            <div id="image-container">
                <img src="${_images_walkingmouse_png__WEBPACK_IMPORTED_MODULE_7__}" />
                <p>Nothing here!</p>
            </div>
        </div>
    `;

  const overdueContainer = document.querySelector("#overdue");
  const overdueTaskContainer = document.querySelector("#overdue-tasks");
  const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

  if (_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterOverdueTasks(_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[0]).length > 0) {
    revealElements(overdueContainer);
  } else removeElements(overdueContainer);
  loadOverdueSortedTasksByDate(overdueTaskContainer);
  loadSortedTasksByDate(thisMonthTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_16__.isSameMonth, month);
};

const loadFutureMonth = function(today, month) {
  document.querySelector("#upcoming-content").innerHTML = `
        <div id="month-title">
            <button id="previous-month"><</button>
            <h1>${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(month, "MMMM yyyy")}</h1>
            <button id="next-month">></button>
        </div>
        <div id="upcoming-container">
            <div id="overdue">
                <p>Overdue</p>
                <div id="overdue-tasks">
                </div>
            </div>
            <div id="month-page" data-month="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)(month, "MMMM yyyy")}">
                <div id="this-month">
                    <p>This Month</p>
                    <div id="this-month-tasks"></div>
                    <button data-open="add task modal" data-due-date="${month}" class="add-task-button">
                        <div data-open="add task modal" data-due-date="${month}" class="add-task-button-img-container">
                            <img data-open="add task modal" data-due-date="${month}" src=${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__} class="add-task-button-img" alt="Plus">
                        </div>
                         <p data-open="add task modal" data-due-date="${month}" class="add-task-label">Add task</p>
                    </button>
                    <div data-open="add task modal" data-due-date="${month}" class="upcoming-page-task-info-modal removed">
                        <form data-open="add task modal">
                            <input data-open="add task modal" data-due-date="${month}" class="task-name" type="text" placeholder="Task name" autocomplete="off"/>
                            <hr data-open="add task modal">
                            <textarea data-open="add task modal" data-due-date="${month}" class="description" placeholder="Description" autocomplete="off"></textarea>
                            <div data-open="add task modal" data-due-date="${month}" class="extra-task-info">
                                <div data-open="add task modal" data-due-date="${month}" class="priority-container">
                                    <label data-open="add task modal" for="priority">Priority</label>
                                    <input data-open="add task modal" data-due-date="${month}" class="priority" type="number" min="1" max="5" value="1" />
                                </div>
                                <input data-open="add task modal" data-due-date="${month}" class="due-date" type="date" value="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_17__.startOfMonth)(month), "yyyy-MM-dd")}" min="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_17__.startOfMonth)(month), "yyyy-MM-dd")}" max="${(0,date_fns__WEBPACK_IMPORTED_MODULE_8__.format)((0,date_fns__WEBPACK_IMPORTED_MODULE_11__.endOfMonth)(month), "yyyy-MM-dd")}" />
                                <select data-open="add task modal" data-due-date="${month}" data-open="add task modal" class="select-project"></select>
                            </div>
                            <div data-open="add task modal" data-due-date="${month}" class="task-info-modal-buttons">
                                <button data-open="add task modal" data-due-date="${month}" disabled class="confirm-add-task">OK<div data-due-date="${month}" class="message"></div></button>
                                <button data-open="add task modal" data-due-date="${month}" class="cancel-add-task">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="image-container">
            <img src="${_images_walkingmouse_png__WEBPACK_IMPORTED_MODULE_7__}" />
            <p>Nothing here!</p>
        </div>
    `;

  const overdueContainer = document.querySelector("#overdue");
  const overdueTaskContainer = document.querySelector("#overdue-tasks");
  const thisMonthTaskContainer = document.querySelector("#this-month-tasks");

  if (_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].filterOverdueTasks(_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks[0]).length > 0) {
    revealElements(overdueContainer);
  } else removeElements(overdueContainer);
  loadOverdueSortedTasksByDate(overdueTaskContainer);
  loadSortedTasksByDate(thisMonthTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_16__.isSameMonth, month);
};

const customCursor = function(selector, message, e) {
  const customMessage = document.querySelector(selector);
  customMessage.textContent = message;
  customMessage.style.top = e.clientY + "px";
  customMessage.style.left = e.clientX + "px";
};

const requiredFieldAlert = function(button, selector, message) {
  button.addEventListener("mousemove", (e) => {
    customCursor(selector, message, e);
  });
};




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _today_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./today-page */ "./src/today-page.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");




_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].allTasks = _tasks__WEBPACK_IMPORTED_MODULE_0__["default"].fetchTasks();
_tasks__WEBPACK_IMPORTED_MODULE_0__["default"].makeObjectsEqual();
(0,_today_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_sidebar__WEBPACK_IMPORTED_MODULE_2__["default"])();


/***/ }),

/***/ "./src/project-page.js":
/*!*****************************!*\
  !*** ./src/project-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-page-style.css */ "./src/project-page-style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");







const init = function(projectName) {
  const projectButton = document.querySelector(
    `[data-project-name="${projectName}"][class~="sidebar-project"]`,
  );
  const renderProjectPage = function(projectName) {
    const todayContent = document.querySelector("#today-content");
    const upcomingContent = document.querySelector("#upcoming-content");
    const projectContent = document.querySelector("#project-content");

    todayContent.innerHTML = "";
    upcomingContent.innerHTML = "";
    projectContent.innerHTML = `
        <input type="text" id="project-title" value="${projectName}" autocomplete="off">
        <div id="project-container">
            <div id="project-sections"></div>
            <div id="add-section">
                <button data-open="add section modal" id="add-section-button">
                    <img data-open="add section modal" id="add-section-button-img" src="${_images_plus_svg__WEBPACK_IMPORTED_MODULE_2__}" alt="Plus">
                    <p data-open="add section modal">Add section</p>
                </button>
                <div data-open="add section modal" id="section-info-modal" class="removed">
                    <form data-open="add section modal">
                        <input data-open="add section modal" id="section-name" type="text" placeholder="Section Name" autocomplete="off"/>
                        <button data-open="add section modal" id="confirm-add-section" disabled>OK<div id="message"></div></button>
                        <button data-open="add section modal" id="cancel-add-section">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    `;
  };

  renderProjectPage(projectName);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeSidebarHighlight)(projectButton);

  const projectTitle = document.querySelector("#project-title");
  const addSectionButton = document.querySelector("#add-section-button");
  const sectionInfoModal = document.querySelector("#section-info-modal");
  const cancelAddSectionButton = document.querySelector("#cancel-add-section");
  const confirmAddSectionButton = document.querySelector(
    "#confirm-add-section",
  );
  const sectionName = document.querySelector("#section-name");
  const projectSections = document.querySelector("#project-sections");
  const taskInfoModals = document.querySelectorAll(
    ".project-page-task-info-modal",
  );
  const taskDialog = document.querySelector("#task-dialog");

  const addEvents = function() {
    const enableAddTask = function() {
      Array.from(document.querySelectorAll(".add-task-button")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const sectionName = e.target.getAttribute("data-section-name");
            Array.from(taskInfoModals).forEach((element) =>
              (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(element),
            );
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="add-task-button"]`,
              ),
            );
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="project-page-task-info-modal"]`,
              ),
            );
            document
              .querySelector(
                `[data-section-name="${sectionName}"][class~="task-name"]`,
              )
              .focus();
            document
              .querySelector(
                `[data-section-name="${e.target.getAttribute("data-section-name")}"][class~="confirm-add-task"]`,
              )
              .setAttribute("disabled", "");
            enableClickOutTaskModal();
            e.preventDefault();
          }),
      );
    };

    const enableCancelAddTask = function() {
      Array.from(document.querySelectorAll(".cancel-add-task")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const sectionName = e.target.getAttribute("data-section-name");
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="project-page-task-info-modal"]`,
              ),
            );
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="add-task-button"]`,
              ),
            );
            resetTaskModal(sectionName);
            e.preventDefault();
          }),
      );
    };

    const enableConfirmAddTask = function() {
      Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const sectionName = e.target.getAttribute("data-section-name");
            const taskName = document.querySelector(
              `[data-section-name="${sectionName}"][class~="task-name"]`,
            );
            const description = document.querySelector(
              `[data-section-name="${sectionName}"][class~="description"]`,
            );
            const priority = document.querySelector(
              `[data-section-name="${sectionName}"][class~="priority"]`,
            );
            const dueDate = document.querySelector(
              `[data-section-name="${sectionName}"][class~="due-date"]`,
            );

            const newTask = _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(
              taskName.value,
              description.value,
              dueDate.value,
              priority.value,
              "not done",
            );

            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(newTask, projectName, sectionName);
            reloadFlow();
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="project-page-task-info-modal"]`,
              ),
            );
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(
              document.querySelector(
                `[data-section-name="${sectionName}"][class~="add-task-button"]`,
              ),
            );
            resetTaskModal(sectionName);
            e.preventDefault();
          }),
      );
    };

    const enableDeleteTask = function() {
      Array.from(document.querySelectorAll(".delete-task")).forEach((button) =>
        button.addEventListener("click", (e) => {
          _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].getTaskById(e.target.getAttribute("data-task-id")),
          );
          reloadFlow();
          e.preventDefault();
        }),
      );
    };

    const enableDeleteSection = function() {
      Array.from(document.querySelectorAll(".delete-section-button")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const sectionName = e.target.getAttribute("data-section-name");
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].deleteSection(projectName, sectionName);
            reloadFlow();
            e.preventDefault();
          }),
      );
    };

    const enableClickOutTaskModal = function() {
      document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "add task modal") {
          Array.from(
            document.querySelectorAll(".project-page-task-info-modal"),
          ).forEach((modal) => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(modal);
            resetTaskModal(modal.getAttribute("data-section-name"));
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(
              document.querySelector(
                `[data-section-name="${modal.getAttribute("data-section-name")}"][class~="add-task-button"]`,
              ),
            );
          });
          e.preventDefault();
        }
      });
    };

    const enableClickOutSectionModal = function() {
      document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "add section modal") {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(sectionInfoModal);
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(addSectionButton);
          resetSectionModal();
        }
        e.preventDefault();
      });
    };

    const makeTasksClickable = function() {
      Array.from(document.querySelectorAll(".task")).forEach((task) =>
        task.addEventListener("click", (e) => {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.openTask)(
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].getTaskById(e.target.getAttribute("data-task-id")),
          );
          enableConfirmEditTask(
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].getTaskById(e.target.getAttribute("data-task-id")),
          );
          e.preventDefault();
        }),
      );
    };

    const enableCompleteTask = function() {
      Array.from(document.querySelectorAll(".checkbox")).forEach((button) =>
        button.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-checked")) {
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].completeTask(e.target.getAttribute("data-task-id"));
            e.target.setAttribute("data-checked", "done");
          } else {
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].uncompleteTask(e.target.getAttribute("data-task-id"));
            e.target.removeAttribute("data-checked");
          }
          reloadFlow();
        }),
      );
    };

    const enableConfirmEditTask = function(task) {
      const confirmEditTaskButton =
        document.querySelector("#confirm-edit-task");
      const selection = document.querySelector("#dropdown-projects");

      confirmEditTaskButton.addEventListener("click", (e) => {
        const newTitle = document.querySelector("#edit-task-title").value;
        const newDescription = document.querySelector(
          "#edit-task-description",
        ).value;
        const newDueDate = document.querySelector("#edit-task-due-date").value;
        const newPriority = document.querySelector("#edit-task-priority").value;
        const selectedOption = Array.from(selection.children)[
          selection.selectedIndex
        ];
        const newProject = selectedOption.getAttribute("data-project-name");
        const newSection = selectedOption.getAttribute("data-section-name");

        _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].editTask(
          task,
          newTitle,
          newDescription,
          newDueDate,
          newPriority,
          task.status,
          newProject,
          newSection,
        );
        reloadFlow();
        taskDialog.close();
        e.preventDefault();
      });
    };

    const reloadFlow = function() {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadSections)(projectSections, projectName);
      makeTasksClickable();
      enableAddTask();
      enableCancelAddTask();
      enableConfirmAddTask();
      enableDeleteTask();
      enableDeleteSection();
      enableCompleteTask();
      Array.from(document.querySelectorAll(".task-name")).forEach((element) =>
        element.addEventListener("input", (e) => {
          const sectionName = e.target.getAttribute("data-section-name");
          if (e.target.value !== "") {
            document
              .querySelector(
                `[data-section-name="${sectionName}"][class~="confirm-add-task"]`,
              )
              .removeAttribute("disabled");
          } else {
            document
              .querySelector(
                `[data-section-name="${sectionName}"][class~="confirm-add-task"]`,
              )
              .setAttribute("disabled", "");
          }
        }),
      );
      Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
        (button) => {
          const sectionName = button.getAttribute("data-section-name");
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.requiredFieldAlert)(
            button,
            `[data-section-name="${sectionName}"][class="message"]`,
            "Please fill in task name",
          );
        },
      );
      Array.from(document.querySelectorAll(".section-name")).forEach(
        (element) =>
          element.addEventListener("change", (e) => {
            if (
              !_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].checkRepeatedSectionName(
                projectName,
                e.target.value,
              ) &&
              e.target.value !== ""
            ) {
              const oldSectionName = e.target.getAttribute("data-section-name");
              _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].changeSectionName(
                projectName,
                oldSectionName,
                e.target.value,
              );
              e.target.blur();
              init(projectName);
            } else {
              const oldSectionName = e.target.getAttribute("data-section-name");
              e.target.value = oldSectionName;
              e.target.blur();
            }
            e.preventDefault();
          }),
      );
    };

    reloadFlow();

    addSectionButton.addEventListener("click", () => {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(addSectionButton);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(sectionInfoModal);
      sectionName.focus();
      confirmAddSectionButton.setAttribute("disabled", "");
      enableClickOutSectionModal();
    });

    cancelAddSectionButton.addEventListener("click", (e) => {
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(sectionInfoModal);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(addSectionButton);
      resetSectionModal();
      e.preventDefault();
    });

    confirmAddSectionButton.addEventListener("click", (e) => {
      _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].createSection(projectName, sectionName.value);
      reloadFlow();
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(sectionInfoModal);
      (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(addSectionButton);
      resetSectionModal();
      e.preventDefault();
    });
  };

  addEvents();

  const resetSectionModal = function() {
    sectionName.value = "";
  };

  const resetTaskModal = function(sectionName) {
    const taskName = document.querySelector(
      `[data-section-name="${sectionName}"][class~="task-name"]`,
    );
    const description = document.querySelector(
      `[data-section-name="${sectionName}"][class~="description"]`,
    );
    const priority = document.querySelector(
      `[data-section-name="${sectionName}"][class~="priority"]`,
    );
    const dueDate = document.querySelector(
      `[data-section-name="${sectionName}"][class~="due-date"]`,
    );

    taskName.value = "";
    description.value = "";
    priority.value = "1";
    dueDate.value = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(), "yyyy-MM-dd");
  };

  sectionName.addEventListener("input", () => {
    if (
      sectionName.value !== "" &&
      !_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].checkRepeatedSectionName(projectName, sectionName.value)
    ) {
      confirmAddSectionButton.removeAttribute("disabled");
    } else {
      confirmAddSectionButton.setAttribute("disabled", "");
    }
  });
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.requiredFieldAlert)(
    confirmAddSectionButton,
    "#message",
    "Please fill in section name",
  );

  projectTitle.addEventListener("change", (e) => {
    if (
      !_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].checkRepeatedProjectName(projectTitle.value) &&
      projectTitle.value !== ""
    ) {
      _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].changeProjectName(projectName, projectTitle.value);
      e.target.blur();
      (0,_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"])();
      init(projectTitle.value);
    } else {
      projectTitle.value = projectName;
      e.target.blur();
    }
    e.preventDefault();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar-style.css */ "./src/sidebar-style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-page */ "./src/project-page.js");
/* harmony import */ var _today_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./today-page */ "./src/today-page.js");
/* harmony import */ var _upcoming_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upcoming-page */ "./src/upcoming-page.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");








const closeSidebar = function() {
  const sidebar = document.querySelector("#sidebar");
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(sidebar);
};

const openSidebar = function() {
  const sidebar = document.querySelector("#sidebar");
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(sidebar);
};

const addEvents = function() {
  const closeSidebarButton = document.querySelector("#sidebar-toggle-close");
  const openSidebarButton = document.querySelector("#sidebar-toggle-open");
  const addProjectButton = document.querySelector("#add-project");
  const cancelAddProjectButton = document.querySelector("#cancel-add-project");
  const addProjectModal = document.querySelector("#add-project-modal");
  const projectList = document.querySelector("#projects-list");
  const confirmAddProjectButton = document.querySelector(
    "#confirm-add-project",
  );
  const projectName = document.querySelector("#project-name");
  const todayButton = document.querySelector("#today");
  const upcomingButton = document.querySelector("#upcoming");

  closeSidebarButton.addEventListener("click", () => {
    closeSidebar();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(openSidebarButton);
  });

  openSidebarButton.addEventListener("click", () => {
    openSidebar();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.hideElements)(openSidebarButton);
  });

  todayButton.addEventListener("click", (e) => {
    (0,_today_page__WEBPACK_IMPORTED_MODULE_4__["default"])();
    e.preventDefault();
  });

  upcomingButton.addEventListener("click", (e) => {
    (0,_upcoming_page__WEBPACK_IMPORTED_MODULE_5__["default"])();
    e.preventDefault();
  });

  addProjectButton.addEventListener("click", () => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(addProjectModal);
    projectName.focus();
    confirmAddProjectButton.setAttribute("disabled", "");
  });

  cancelAddProjectButton.addEventListener("click", (e) => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(addProjectModal);
    projectName.value = "";
    e.preventDefault();
  });

  confirmAddProjectButton.addEventListener("click", (e) => {
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(addProjectModal);
    _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].createProject(projectName.value);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadProjectsToSidebar)(projectList);
    enableDelete();
    enableClickOut();
    makeProjectsClickable();
    (0,_project_page__WEBPACK_IMPORTED_MODULE_3__["default"])(projectName.value);
    projectName.value = "";
    e.preventDefault();
  });

  projectName.addEventListener("input", (e) => {
    if (
      e.target.value !== "" &&
      !_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].checkRepeatedProjectName(e.target.value)
    ) {
      confirmAddProjectButton.removeAttribute("disabled");
    } else confirmAddProjectButton.setAttribute("disabled", "");
  });

  const enableDelete = function() {
    const deleteProjectButtons = document.querySelectorAll(".delete-project");

    Array.from(deleteProjectButtons).forEach((button) =>
      button.addEventListener("click", (e) => {
        _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(e.target.getAttribute("data-project-name"));
        (0,_today_page__WEBPACK_IMPORTED_MODULE_4__["default"])();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadProjectsToSidebar)(projectList);
        enableDelete();
        enableClickOut();
        makeProjectsClickable();
        e.preventDefault();
      }),
    );
  };

  const enableClickOut = function() {
    document.addEventListener("click", (e) => {
      if (e.target.getAttribute("data-open") !== "add project modal") {
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(addProjectModal);
        projectName.value = "";
      }
    });
  };

  const makeProjectsClickable = function() {
    const projects = document.querySelectorAll(".sidebar-project-name");
    Array.from(projects).forEach((element) =>
      element.addEventListener("click", (e) => {
        (0,_project_page__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target.getAttribute("data-project-name"));
      }),
    );
  };

  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadProjectsToSidebar)(projectList);
  enableDelete();
  enableClickOut();
  makeProjectsClickable();
};

const init = function() {
  const confirmAddProjectButton = document.querySelector(
    "#confirm-add-project",
  );
  const date = document.querySelector("#date");
  date.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(), "dd");

  addEvents();
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.requiredFieldAlert)(
    confirmAddProjectButton,
    "#sidebar-message",
    "Project names can't be empty or same",
  );
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/compareDesc.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");


const TaskManager = {
  fetchTasks: function() {
    if (!localStorage.getItem("allTasks")) {
      return [
        [],
        {
          projectName: "projectless",
          sections: [
            {
              sectionName: "sectionless",
              tasks: [],
            },
          ],
        },
      ];
    } else {
      return JSON.parse(localStorage.getItem("allTasks"));
    }
  },

  makeObjectsEqual: function() {
    this.allTasks[0].forEach((task) => {
      let { projectName, sectionName } = this.getTaskProjectAndSection(task);
      this.getSection(projectName, sectionName).tasks.splice(
        this.getSectionTaskId(task, projectName, sectionName),
        1,
        task,
      );
    });
    this.saveTasks();
  },

  saveTasks: function() {
    localStorage.setItem("allTasks", JSON.stringify(this.allTasks));
  },

  createProject: function(projectName) {
    let newProject = {
      projectName: `${projectName}`,
      sections: [
        {
          sectionName: "sectionless",
          tasks: [],
        },
      ],
    };
    this.allTasks.push(newProject);
    this.saveTasks();
  },

  createSection: function(projectName, sectionName) {
    this.getProject(projectName).sections.push({
      sectionName: sectionName,
      tasks: [],
    });
    this.saveTasks();
  },

  createTask: function(title, description, dueDate, priority, status) {
    return { title, description, dueDate, priority, status };
  },

  addTask: function(task, projectName, sectionName) {
    this.allTasks[0].push(task);
    this.getSection(projectName, sectionName).tasks.push(task);
    this.resetTaskId();
    this.saveTasks();
  },

  containsObject: function(object, array) {
    for (let i = 0; i < array.length; i++) {
      if (JSON.stringify(array[i]) === JSON.stringify(object)) {
        return true;
      }
    }
    return false;
  },

  getTaskById: function(id) {
    return this.allTasks[0][id];
  },

  getProject: function(projectName) {
    return this.allTasks.filter(
      (project) => project.projectName === projectName,
    )[0];
  },

  getSection: function(projectName, sectionName) {
    return this.getProject(projectName).sections.filter(
      (section) => section.sectionName === sectionName,
    )[0];
  },

  getTaskProjectAndSection: function(task) {
    for (let i = 1; i < this.allTasks.length; i++) {
      for (let j = 0; j < this.allTasks[i].sections.length; j++) {
        if (this.containsObject(task, this.allTasks[i].sections[j].tasks)) {
          return {
            projectName: this.allTasks[i].projectName,
            sectionName: this.allTasks[i].sections[j].sectionName,
          };
        }
      }
    }
  },

  getSectionTaskId: function(task, projectName, sectionName) {
    for (
      let i = 0;
      i < this.getSection(projectName, sectionName).tasks.length;
      i++
    ) {
      if (this.getSection(projectName, sectionName).tasks[i].id === task.id) {
        return i;
      }
    }
  },

  checkRepeatedProjectName: function(projectName) {
    for (let i = 1; i < this.allTasks.length; i++) {
      if (projectName === this.allTasks[i].projectName) {
        return true;
      }
    }
    return false;
  },

  checkRepeatedSectionName: function(projectName, sectionName) {
    for (let i = 0; i < this.getProject(projectName).sections.length; i++) {
      if (sectionName === this.getProject(projectName).sections[i]) {
        return true;
      }
    }
    return false;
  },

  resetTaskId: function() {
    this.allTasks[0].forEach(
      (task) => (task.id = this.allTasks[0].indexOf(task)),
    );
    this.saveTasks();
  },

  deleteTask: function(task) {
    this.allTasks[0].splice(task.id, 1);
    let { projectName, sectionName } = this.getTaskProjectAndSection(task);
    this.getSection(projectName, sectionName).tasks.splice(
      this.getSectionTaskId(task, projectName, sectionName),
      1,
    );
    this.resetTaskId();
    this.saveTasks();
  },

  deleteSection: function(projectName, sectionName) {
    for (
      let i = 0;
      i < this.getSection(projectName, sectionName).tasks.length;
      i++
    ) {
      this.deleteTask(this.getSection(projectName, sectionName).tasks[i]);
    }
    this.getProject(projectName).sections.splice(
      this.getProject(projectName).sections.indexOf(
        this.getSection(projectName, sectionName),
      ),
      1,
    );
    this.saveTasks();
  },

  deleteProject: function(projectName) {
    for (let i = 0; i < this.getProject(projectName).sections.length; i++) {
      for (
        let j = 0;
        j < this.getProject(projectName).sections[i].tasks.length;
        j++
      ) {
        this.deleteTask(this.getProject(projectName).sections[i].tasks[j]);
      }
    }
    this.allTasks.splice(
      this.allTasks.indexOf(this.getProject(projectName)),
      1,
    );
    this.saveTasks();
  },

  filterTaskByDate: function(filter, comparison) {
    return this.allTasks[0].filter((task) => filter(task.dueDate, comparison));
  },

  sortTaskByDate: function(array) {
    const compareDate = function(a, b) {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.compareDesc)(a.dueDate, b.dueDate) > 0) {
        return -1;
      } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__.compareDesc)(a.dueDate, b.dueDate) < 0) {
        return 1;
      }
      return 0;
    };

    return array.sort(compareDate);
  },

  filterTaskBySection: function(projectName, sectionName) {
    return this.getSection(projectName, sectionName).tasks;
  },

  filterTaskByStatus: function(array) {
    return {
      done: array.filter((task) => task.status === "done"),
      notDone: array.filter((task) => task.status === "not done"),
    };
  },

  filterOverdueTasks: function(array) {
    const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(), "yyyy-MM-dd");
    return this.filterTaskByStatus(array).notDone.filter((task) =>
      (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isBefore)(task.dueDate, today),
    );
  },

  filterNotOverdueTasks: function(array) {
    const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(new Date(), "yyyy-MM-dd");
    return array.filter(
      (task) => !(0,date_fns__WEBPACK_IMPORTED_MODULE_2__.isBefore)(task.dueDate, today) || task.status === "done",
    );
  },

  editTask: function(
    task,
    newTitle,
    newDescription,
    newDueDate,
    newPriority,
    newStatus,
    newProject,
    newSection,
  ) {
    let { projectName, sectionName } = this.getTaskProjectAndSection(task);
    const newTask = this.createTask(
      newTitle,
      newDescription,
      newDueDate,
      newPriority,
      newStatus,
    );
    newTask.id = task.id;
    this.allTasks[0].splice(this.allTasks[0].indexOf(task), 1, newTask);
    this.getSection(projectName, sectionName).tasks.splice(
      this.getSectionTaskId(task, projectName, sectionName),
      1,
      newTask,
    );

    if (
      !(
        this.getTaskProjectAndSection(newTask).projectName === newProject &&
        this.getTaskProjectAndSection(newTask).sectionName === newSection
      )
    ) {
      this.deleteTask(newTask);
      this.addTask(newTask, newProject, newSection);
      this.saveTasks();
    }
    this.saveTasks();
  },

  changeProjectName: function(oldProjectName, newProjectName) {
    const oldProject = this.getProject(oldProjectName);
    oldProject.projectName = newProjectName;
    this.saveTasks();
  },

  changeSectionName: function(projectName, oldSectionName, newSectionName) {
    const oldSection = this.getSection(projectName, oldSectionName);
    oldSection.sectionName = newSectionName;
    this.saveTasks();
  },

  completeTask: function(taskid) {
    const task = TaskManager.getTaskById(taskid);
    TaskManager.editTask(
      task,
      task.title,
      task.description,
      task.dueDate,
      task.priority,
      "done",
      TaskManager.getTaskProjectAndSection(task).projectName,
      TaskManager.getTaskProjectAndSection(task).sectionName,
    );
  },

  uncompleteTask: function(taskid) {
    const task = TaskManager.getTaskById(taskid);
    TaskManager.editTask(
      task,
      task.title,
      task.description,
      task.dueDate,
      task.priority,
      "not done",
      TaskManager.getTaskProjectAndSection(task).projectName,
      TaskManager.getTaskProjectAndSection(task).sectionName,
    );
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaskManager);


/***/ }),

/***/ "./src/today-page.js":
/*!***************************!*\
  !*** ./src/today-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _today_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./today-page-style.css */ "./src/today-page-style.css");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _images_hamster_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hamster.png */ "./src/images/hamster.png");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isToday.mjs");







const init = function() {
  const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.format)(new Date(), "yyyy-MM-dd");

  const renderTodayPageEmpty = function() {
    const todayContent = document.querySelector("#today-content");
    const upcomingContent = document.querySelector("#upcoming-content");
    const projectContent = document.querySelector("#project-content");

    upcomingContent.innerHTML = "";
    projectContent.innerHTML = "";
    todayContent.innerHTML = `
        <h1 id="today-title">Today</h1>
        <div id="today-task-container"></div>
        <div id="add-task-container" data-open="add task modal">
            <button id="add-task-button" data-open="add task modal">
                <div id="add-task-button-img-container" data-open="add task modal">
                    <img id="add-task-button-img" src="${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Plus" data-open="add task modal">
                </div>
                <p id="add-task-label" data-open="add task modal">Add task</p>
            </button>
        </div>
        <div data-open="add task modal" id="info-modal" class="removed">
            <form data-open="add task modal" id="task-info-modal">
                <input data-open="add task modal" id="task-name" type="text" placeholder="Task name" autocomplete="off" required="true" />
                <hr data-open="add task modal">
                <textarea data-open="add task modal" id="description" placeholder="Description" autocomplete="off" required></textarea>
                <div data-open="add task modal" id="task-extra-info">
                    <div data-open="add task modal" id="priority-container">
                        <label data-open="add task modal" for="priority">Priority:</label>
                        <input data-open="add task modal" id="priority" type="number" min="1" max="5" value="1"/>
                    </div>
                    <select data-open="add task modal" id="select-project"></select>
                </div>
                <div data-open="add task modal" id="task-info-modal-buttons">
                    <button class="submit" id="confirm-add-task" disabled data-open="add task modal">OK<div id="message"></div></button>
                    <button id="cancel-add-task" data-open="add task modal">Cancel</button>
                </div>
            </form>
        </div>
        <div id="no-task">
            <div id="no-task-image">
                <img src="${_images_hamster_png__WEBPACK_IMPORTED_MODULE_2__}">
            </div>
            <div id="no-task-text">
                <p>What's happening today?</p>
            </div>
        </div>
    `;
  };

  renderTodayPageEmpty();

  const todayButton = document.querySelector("#today");
  const addTaskButton = document.querySelector("#add-task-button");
  const confirmButton = document.querySelector("#confirm-add-task");
  const cancelButton = document.querySelector("#cancel-add-task");
  const addTaskContainer = document.querySelector("#add-task-container");
  const infoModal = document.querySelector("#info-modal");
  const todayTaskContainer = document.querySelector("#today-task-container");
  const noTask = document.querySelector("#no-task");
  const taskDialog = document.querySelector("#task-dialog");
  const taskName = document.querySelector("#task-name");
  const description = document.querySelector("#description");
  const priority = document.querySelector("#priority");
  const project = document.querySelector("#select-project");

  (0,_dom__WEBPACK_IMPORTED_MODULE_4__.changeSidebarHighlight)(todayButton);

  const addEvents = function() {
    const enableDelete = function() {
      Array.from(document.querySelectorAll(".delete-task")).forEach((button) =>
        button.addEventListener("click", (e) => {
          const taskid = e.target.getAttribute("data-task-id");
          _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].deleteTask(_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].getTaskById(taskid));
          (0,_dom__WEBPACK_IMPORTED_MODULE_4__.loadTasksByDate)(todayTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday);
          makeTasksClickable();
          enableDelete();
          enableCompleteTask();
          if (_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].filterTaskByDate(date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday).length === 0) {
            (0,_dom__WEBPACK_IMPORTED_MODULE_4__.revealElements)(noTask);
          }
          e.preventDefault();
        }),
      );
    };

    const enableClickOut = function() {
      document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "add task modal") {
          (0,_dom__WEBPACK_IMPORTED_MODULE_4__.revealElements)(addTaskContainer);
          resetModal();
          (0,_dom__WEBPACK_IMPORTED_MODULE_4__.removeElements)(infoModal);
          if (_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].filterTaskByDate(date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday).length === 0) {
            (0,_dom__WEBPACK_IMPORTED_MODULE_4__.revealElements)(noTask);
          }
        }
      });
    };

    const makeTasksClickable = function() {
      Array.from(document.querySelectorAll(".task")).forEach((task) =>
        task.addEventListener("click", (e) => {
          (0,_dom__WEBPACK_IMPORTED_MODULE_4__.openTask)(
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].getTaskById(e.target.getAttribute("data-task-id")),
          );
          enableConfirmEditTask(
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].getTaskById(e.target.getAttribute("data-task-id")),
          );
          e.preventDefault();
        }),
      );
    };

    const enableCompleteTask = function() {
      Array.from(document.querySelectorAll(".checkbox")).forEach((button) =>
        button.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-checked")) {
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].completeTask(e.target.getAttribute("data-task-id"));
            e.target.setAttribute("data-checked", "done");
          } else {
            _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].uncompleteTask(e.target.getAttribute("data-task-id"));
            e.target.removeAttribute("data-checked");
          }
        }),
      );
    };

    const enableConfirmEditTask = function(task) {
      const confirmEditTaskButton =
        document.querySelector("#confirm-edit-task");
      const selection = document.querySelector("#dropdown-projects");

      confirmEditTaskButton.addEventListener("click", (e) => {
        const newTitle = document.querySelector("#edit-task-title").value;
        const newDescription = document.querySelector(
          "#edit-task-description",
        ).value;
        const newDueDate = document.querySelector("#edit-task-due-date").value;
        const newPriority = document.querySelector("#edit-task-priority").value;
        const selectedOption = Array.from(selection.children)[
          selection.selectedIndex
        ];
        const newProject = selectedOption.getAttribute("data-project-name");
        const newSection = selectedOption.getAttribute("data-section-name");

        _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].editTask(
          task,
          newTitle,
          newDescription,
          newDueDate,
          newPriority,
          task.status,
          newProject,
          newSection,
        );
        (0,_dom__WEBPACK_IMPORTED_MODULE_4__.loadTasksByDate)(todayTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday);
        makeTasksClickable();
        enableDelete();
        enableCompleteTask();
        if (_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].filterTaskByDate(date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday).length === 0) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_4__.revealElements)(noTask);
        }
        taskDialog.close();
        e.preventDefault();
      });
    };

    if (_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].filterTaskByDate(date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday).length > 0) {
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.removeElements)(noTask);
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.loadTasksByDate)(todayTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday);
      makeTasksClickable();
      enableDelete();
      enableCompleteTask();
    }

    addTaskButton.addEventListener("click", () => {
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.removeElements)(addTaskContainer);
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.removeElements)(noTask);
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.revealElements)(infoModal);
      taskName.focus();
      confirmButton.setAttribute("disabled", "");
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.loadProjectsToDropdown)(project);
      enableClickOut();
    });

    confirmButton.addEventListener("click", (e) => {
      const taskInfo = getTaskInfo();
      const task = _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].createTask(
        taskInfo.title,
        taskInfo.description,
        taskInfo.dueDate,
        taskInfo.priority,
        taskInfo.status,
      );
      const selectedOption = Array.from(project.children)[
        project.selectedIndex
      ];
      const taskProject = selectedOption.getAttribute("data-project-name");
      const taskSection = selectedOption.getAttribute("data-section-name");
      _tasks__WEBPACK_IMPORTED_MODULE_3__["default"].addTask(task, taskProject, taskSection);
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.loadTasksByDate)(todayTaskContainer, date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday);
      makeTasksClickable();
      enableDelete();
      enableCompleteTask();
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.revealElements)(addTaskContainer);
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.removeElements)(infoModal);
      resetModal();
      e.preventDefault();
    });

    taskName.addEventListener("input", () => {
      if (taskName.value !== "") {
        confirmButton.removeAttribute("disabled");
      } else {
        confirmButton.setAttribute("disabled", "");
      }
    });

    cancelButton.addEventListener("click", (e) => {
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.revealElements)(addTaskContainer);
      resetModal();
      (0,_dom__WEBPACK_IMPORTED_MODULE_4__.removeElements)(infoModal);
      if (_tasks__WEBPACK_IMPORTED_MODULE_3__["default"].filterTaskByDate(date_fns__WEBPACK_IMPORTED_MODULE_6__.isToday).length === 0) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_4__.revealElements)(noTask);
      }
      e.preventDefault();
    });

    const getTaskInfo = function() {
      return {
        title: taskName.value,
        description: description.value,
        dueDate: today,
        priority: priority.value,
        status: "not done",
      };
    };

    const resetModal = function() {
      taskName.value = "";
      description.value = "";
      priority.value = "1";
    };
  };

  addEvents();
  (0,_dom__WEBPACK_IMPORTED_MODULE_4__.requiredFieldAlert)(confirmButton, "#message", "Please fill in task name");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ }),

/***/ "./src/upcoming-page.js":
/*!******************************!*\
  !*** ./src/upcoming-page.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _upcoming_page_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upcoming-page-style.css */ "./src/upcoming-page-style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isThisMonth.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/sub.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/isBefore.mjs");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/add.mjs");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





const init = function() {
  const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(), "yyyy-MM-dd");
  const upcomingButton = document.querySelector("#upcoming");
  const taskDialog = document.querySelector("#task-dialog");

  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadCurrentMonth)(today);
  (0,_dom__WEBPACK_IMPORTED_MODULE_1__.changeSidebarHighlight)(upcomingButton);

  const addEvents = function() {
    const enableSwitchMonths = function() {
      const previousMonthButton = document.querySelector("#previous-month");
      const nextMonthButton = document.querySelector("#next-month");

      previousMonthButton.addEventListener("click", () => {
        const pageMonth = document
          .querySelector("#month-page")
          .getAttribute("data-month");
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isThisMonth)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.sub)(pageMonth, { months: 1 }))) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadCurrentMonth)(today);
        } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.isBefore)(pageMonth, (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.add)(today, { months: 1 }))) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadPastMonth)((0,date_fns__WEBPACK_IMPORTED_MODULE_5__.sub)(pageMonth, { months: 1 }));
        } else {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadFutureMonth)(today, (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.sub)(pageMonth, { months: 1 }));
        }

        enableSwitchMonths();
        enableDeleteTask();
        enableAddTask();
        enableCancelAddTask();
        enableConfirmAddTask();
        makeTasksClickable();
        enableCompleteTask();
        Array.from(document.querySelectorAll(".task-name")).forEach((element) =>
          element.addEventListener("input", (e) => {
            const dataDueDate = e.target.getAttribute("data-due-date");
            if (e.target.value !== "") {
              document
                .querySelector(
                  `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
                )
                .removeAttribute("disabled");
            } else {
              document
                .querySelector(
                  `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
                )
                .setAttribute("disabled", "");
            }
          }),
        );
        Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
          (button) => {
            const dataDueDate = button.getAttribute("data-due-date");
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.requiredFieldAlert)(
              button,
              `[data-due-date="${dataDueDate}"][class="message"]`,
              "Please fill in task name",
            );
          },
        );
        Array.from(document.querySelectorAll(".task")).length == 0
          ? (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(document.querySelector("#image-container"))
          : (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(document.querySelector("#image-container"));
      });

      nextMonthButton.addEventListener("click", () => {
        const pageMonth = document
          .querySelector("#month-page")
          .getAttribute("data-month");
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isThisMonth)((0,date_fns__WEBPACK_IMPORTED_MODULE_7__.add)(pageMonth, { months: 1 }))) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadCurrentMonth)(today);
        } else if ((0,date_fns__WEBPACK_IMPORTED_MODULE_6__.isBefore)(pageMonth, (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.sub)(today, { months: 1 }))) {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadPastMonth)(today, (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.add)(pageMonth, { months: 1 }));
        } else {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadFutureMonth)(today, (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.add)(pageMonth, { months: 1 }));
        }

        enableSwitchMonths();
        enableDeleteTask();
        enableAddTask();
        enableCancelAddTask();
        enableConfirmAddTask();
        makeTasksClickable();
        enableCompleteTask();
        Array.from(document.querySelectorAll(".task-name")).forEach((element) =>
          element.addEventListener("input", (e) => {
            const dataDueDate = e.target.getAttribute("data-due-date");
            if (e.target.value !== "") {
              document
                .querySelector(
                  `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
                )
                .removeAttribute("disabled");
            } else {
              document
                .querySelector(
                  `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
                )
                .setAttribute("disabled", "");
            }
          }),
        );
        Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
          (button) => {
            const dataDueDate = button.getAttribute("data-due-date");
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.requiredFieldAlert)(
              button,
              `[data-due-date="${dataDueDate}"][class="message"]`,
              "Please fill in task name",
            );
          },
        );
        Array.from(document.querySelectorAll(".task")).length == 0
          ? (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(document.querySelector("#image-container"))
          : (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(document.querySelector("#image-container"));
      });
    };

    const enableDeleteTask = function() {
      Array.from(document.querySelectorAll(".delete-task")).forEach((button) =>
        button.addEventListener("click", (e) => {
          const taskid = e.target.getAttribute("data-task-id");
          _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskById(taskid));
          reloadFlow();
          e.preventDefault();
        }),
      );
    };

    const enableClickOut = function() {
      document.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-open") !== "add task modal") {
          Array.from(
            document.querySelectorAll(".upcoming-page-task-info-modal"),
          ).forEach((modal) => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(modal);
            resetModal(modal.getAttribute("data-due-date"));
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(
              document.querySelector(
                `[data-due-date="${modal.getAttribute("data-due-date")}"][class~="add-task-button"]`,
              ),
            );
            if (document.querySelectorAll(".task").length === 0) {
              (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(document.querySelector("#image-container"));
            }
          });
          e.preventDefault();
        }
      });
    };

    const enableAddTask = function() {
      Array.from(document.querySelectorAll(".add-task-button")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="upcoming-page-task-info-modal"]`,
              ),
            );
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="add-task-button"]`,
              ),
            );
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(document.querySelector("#image-container"));
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadProjectsToDropdown)(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="select-project"]`,
              ),
            );
            document
              .querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="task-name"]`,
              )
              .focus();
            document
              .querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="confirm-add-task"]`,
              )
              .setAttribute("disabled", "");
            enableClickOut();
            e.preventDefault();
          }),
      );
    };

    const enableCancelAddTask = function() {
      Array.from(document.querySelectorAll(".cancel-add-task")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="add-task-button"]`,
              ),
            );
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(
              document.querySelector(
                `[data-due-date="${e.target.getAttribute("data-due-date")}"][class~="upcoming-page-task-info-modal"]`,
              ),
            );
            if (document.querySelectorAll(".task").length === 0) {
              (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(document.querySelector("#image-container"));
            }
            resetModal(e.target.getAttribute("data-due-date"));
            e.preventDefault();
          }),
      );
    };

    const enableConfirmAddTask = function() {
      Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
        (button) =>
          button.addEventListener("click", (e) => {
            const dataDueDate = e.target.getAttribute("data-due-date");
            const taskName = document.querySelector(
              `[data-due-date="${dataDueDate}"][class~="task-name"]`,
            );
            const description = document.querySelector(
              `[data-due-date="${dataDueDate}"][class~="description"]`,
            );
            const priority = document.querySelector(
              `[data-due-date="${dataDueDate}"][class~="priority"]`,
            );
            const project = document.querySelector(
              `[data-due-date="${dataDueDate}"][class~="select-project"]`,
            );
            const selectedOption = Array.from(project.children)[
              project.selectedIndex
            ];
            const taskProject =
              selectedOption.getAttribute("data-project-name");
            const taskSection =
              selectedOption.getAttribute("data-section-name");

            if (
              !(dataDueDate === "this-week" || dataDueDate === "this-month")
            ) {
              const task = _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(
                taskName.value,
                description.value,
                dataDueDate,
                priority.value,
                "not done",
              );
              _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(task, taskProject, taskSection);
            } else {
              const dueDate = document.querySelector(
                `[data-due-date="${dataDueDate}"][class~="due-date"]`,
              );
              const task = _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(
                taskName.value,
                description.value,
                dueDate.value,
                priority.value,
                "not done",
              );
              _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(task, taskProject, taskSection);
            }

            reloadFlow();
            e.preventDefault();
          }),
      );
    };

    const makeTasksClickable = function() {
      Array.from(document.querySelectorAll(".task")).forEach((task) =>
        task.addEventListener("click", (e) => {
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.openTask)(
            _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskById(e.target.getAttribute("data-task-id")),
          );
          enableConfirmEditTask(
            _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].getTaskById(e.target.getAttribute("data-task-id")),
          );
          e.preventDefault();
        }),
      );
    };

    const enableConfirmEditTask = function(task) {
      const confirmEditTaskButton =
        document.querySelector("#confirm-edit-task");
      const selection = document.querySelector("#dropdown-projects");

      confirmEditTaskButton.addEventListener("click", (e) => {
        const newTitle = document.querySelector("#edit-task-title").value;
        const newDescription = document.querySelector(
          "#edit-task-description",
        ).value;
        const newDueDate = document.querySelector("#edit-task-due-date").value;
        const newPriority = document.querySelector("#edit-task-priority").value;
        const selectedOption = Array.from(selection.children)[
          selection.selectedIndex
        ];
        const newProject = selectedOption.getAttribute("data-project-name");
        const newSection = selectedOption.getAttribute("data-section-name");

        _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].editTask(
          task,
          newTitle,
          newDescription,
          newDueDate,
          newPriority,
          task.status,
          newProject,
          newSection,
        );
        reloadFlow();
        taskDialog.close();
        e.preventDefault();
      });
    };

    const enableCompleteTask = function() {
      Array.from(document.querySelectorAll(".checkbox")).forEach((button) =>
        button.addEventListener("click", (e) => {
          if (!e.target.getAttribute("data-checked")) {
            _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].completeTask(e.target.getAttribute("data-task-id"));
            e.target.setAttribute("data-checked", "done");
          } else {
            _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].uncompleteTask(e.target.getAttribute("data-task-id"));
            e.target.removeAttribute("data-checked");
          }
          reloadFlow();
        }),
      );
    };

    const reloadFlow = function() {
      const pageMonth = document
        .querySelector("#month-page")
        .getAttribute("data-month");
      (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.isThisMonth)(pageMonth)
        ? (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadCurrentMonth)(today)
        : (0,_dom__WEBPACK_IMPORTED_MODULE_1__.loadFutureMonth)(today, pageMonth);
      enableSwitchMonths();
      enableDeleteTask();
      enableAddTask();
      enableCancelAddTask();
      enableConfirmAddTask();
      makeTasksClickable();
      enableCompleteTask();
      Array.from(document.querySelectorAll(".task-name")).forEach((element) =>
        element.addEventListener("input", (e) => {
          const dataDueDate = e.target.getAttribute("data-due-date");
          if (e.target.value !== "") {
            document
              .querySelector(
                `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
              )
              .removeAttribute("disabled");
          } else {
            document
              .querySelector(
                `[data-due-date="${dataDueDate}"][class~="confirm-add-task"]`,
              )
              .setAttribute("disabled", "");
          }
        }),
      );
      Array.from(document.querySelectorAll(".confirm-add-task")).forEach(
        (button) => {
          const dataDueDate = button.getAttribute("data-due-date");
          (0,_dom__WEBPACK_IMPORTED_MODULE_1__.requiredFieldAlert)(
            button,
            `[data-due-date="${dataDueDate}"][class="message"]`,
            "Please fill in task name",
          );
        },
      );
      Array.from(document.querySelectorAll(".task")).length == 0
        ? (0,_dom__WEBPACK_IMPORTED_MODULE_1__.revealElements)(document.querySelector("#image-container"))
        : (0,_dom__WEBPACK_IMPORTED_MODULE_1__.removeElements)(document.querySelector("#image-container"));
    };

    reloadFlow();
  };
  addEvents();

  const resetModal = function(dataDueDate) {
    const taskName = document.querySelector(
      `[data-due-date="${dataDueDate}"][class~="task-name"]`,
    );
    const description = document.querySelector(
      `[data-due-date="${dataDueDate}"][class~="description"]`,
    );
    const priority = document.querySelector(
      `[data-due-date="${dataDueDate}"][class~="priority"]`,
    );

    taskName.value = "";
    description.value = "";
    priority.value = "1";

    if (dataDueDate === "this-week" || dataDueDate === "this-month") {
      const dueDate = document.querySelector(
        `[data-due-date="${dataDueDate}"][class~="due-date"]`,
      );
      dueDate.value = today;
    }
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ }),

/***/ "./src/fonts/Satoshi-Medium.otf":
/*!**************************************!*\
  !*** ./src/fonts/Satoshi-Medium.otf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e9d34f0493a853cf10c1.otf";

/***/ }),

/***/ "./src/fonts/Satoshi-Regular.otf":
/*!***************************************!*\
  !*** ./src/fonts/Satoshi-Regular.otf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "811ccb0b5af1892a71df.otf";

/***/ }),

/***/ "./src/fonts/SpaceGrotesk-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/fonts/SpaceGrotesk-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ee2fc15497f7869312f.ttf";

/***/ }),

/***/ "./src/images/bookmark.svg":
/*!*********************************!*\
  !*** ./src/images/bookmark.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a9b7dfb7ac2ee964435.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97d4c0a10ac97607dc65.svg";

/***/ }),

/***/ "./src/images/hammer-wrench.svg":
/*!**************************************!*\
  !*** ./src/images/hammer-wrench.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e385677ae035ab43cf3a.svg";

/***/ }),

/***/ "./src/images/hamster.png":
/*!********************************!*\
  !*** ./src/images/hamster.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb83cf39eec35755f145.png";

/***/ }),

/***/ "./src/images/mouse.png":
/*!******************************!*\
  !*** ./src/images/mouse.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a278266676161bc89796.png";

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8f038690ec4a679df399.svg";

/***/ }),

/***/ "./src/images/text.svg":
/*!*****************************!*\
  !*** ./src/images/text.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "279a4fea9d647fdbb199.svg";

/***/ }),

/***/ "./src/images/walkingmouse.png":
/*!*************************************!*\
  !*** ./src/images/walkingmouse.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c83e45157481c2f0b887.png";

/***/ }),

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/add.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/add.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name add
 * @category Common Helpers
 * @summary Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @description
 * Add the specified years, months, weeks, days, hours, minutes and seconds to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be added.
 *
 * | Key            | Description                        |
 * |----------------|------------------------------------|
 * | years          | Amount of years to be added        |
 * | months         | Amount of months to be added       |
 * | weeks          | Amount of weeks to be added        |
 * | days           | Amount of days to be added         |
 * | hours          | Amount of hours to be added        |
 * | minutes        | Amount of minutes to be added      |
 * | seconds        | Amount of seconds to be added      |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds added
 *
 * @example
 * // Add the following duration to 1 September 2014, 10:19:50
 * const result = add(new Date(2014, 8, 1, 10, 19, 50), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,\\-7
 *   minutes: 9,
 *   seconds: 30,
 * })
 * //=> Thu Jun 15 2017 15:29:20
 */
function add(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Add years and months
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const dateWithMonths =
    months || years ? (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_1__.addMonths)(_date, months + years * 12) : _date;

  // Add weeks and days
  const dateWithDays =
    days || weeks ? (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_2__.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60;
  const secondsToAdd = seconds + minutesToAdd * 60;
  const msToAdd = secondsToAdd * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_3__.constructFrom)(date, dateWithDays.getTime() + msToAdd);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (add);


/***/ }),

/***/ "./node_modules/date-fns/addDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/addDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be added.
 *
 * @returns The new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  _date.setDate(_date.getDate() + amount);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addDays);


/***/ }),

/***/ "./node_modules/date-fns/addMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/addMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMonths: () => (/* binding */ addMonths),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name addMonths
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be added.
 *
 * @returns The new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * const result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 *
 * // Add one month to 30 January 2023:
 * const result = addMonths(new Date(2023, 0, 30), 1)
 * //=> Tue Feb 28 2023 00:00:00
 */
function addMonths(date, amount) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  if (isNaN(amount)) return (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, NaN);
  if (!amount) {
    // If 0 months, no-op to avoid changing times in the hour before end of DST
    return _date;
  }
  const dayOfMonth = _date.getDate();

  // The JS Date object supports date math by accepting out-of-bounds values for
  // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
  // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
  // want except that dates will wrap around the end of a month, meaning that
  // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
  // we'll default to the end of the desired month by adding 1 to the desired
  // month and using a date of 0 to back up one day to the end of the desired
  // month.
  const endOfDesiredMonth = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, _date.getTime());
  endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    // If we're already at the end of the month, then this is the correct date
    // and we're done.
    return endOfDesiredMonth;
  } else {
    // Otherwise, we now know that setting the original day-of-month value won't
    // cause an overflow, so set the desired day-of-month. Note that we can't
    // just set the date of `endOfDesiredMonth` because that object may have had
    // its time changed in the unusual case where where a DST transition was on
    // the last day of the month and its local time was in the hour skipped or
    // repeated next to a DST transition.  So we use `date` instead which is
    // guaranteed to still have the original time.
    _date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth,
    );
    return _date;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMonths);


/***/ }),

/***/ "./node_modules/date-fns/compareDesc.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/compareDesc.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareDesc: () => (/* binding */ compareDesc),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name compareDesc
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to compare
 * @param dateRight - The second date to compare
 *
 * @returns The result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * const result = compareDesc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const diff = _dateLeft.getTime() - _dateRight.getTime();

  if (diff > 0) {
    return -1;
  } else if (diff < 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareDesc);


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/endOfMonth.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/endOfMonth.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfMonth: () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const month = _date.getMonth();
  _date.setFullYear(_date.getFullYear(), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfMonth);


/***/ }),

/***/ "./node_modules/date-fns/endOfWeek.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/endOfWeek.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   endOfWeek: () => (/* binding */ endOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link endOfWeek} function options.
 */

/**
 * @name endOfWeek
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  _date.setDate(_date.getDate() + diff);
  _date.setHours(23, 59, 59, 999);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isBefore.mjs":
/*!********************************************!*\
  !*** ./node_modules/date-fns/isBefore.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isBefore: () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be before the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * const result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore(date, dateToCompare) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _dateToCompare = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateToCompare);
  return +_date < +_dateToCompare;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isBefore);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isSameDay.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/isSameDay.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameDay: () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check

 * @returns The dates are in the same day (and year and month)
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dateLeft, dateRight) {
  const dateLeftStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const dateRightStartOfDay = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  return +dateLeftStartOfDay === +dateRightStartOfDay;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameDay);


/***/ }),

/***/ "./node_modules/date-fns/isSameMonth.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isSameMonth.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameMonth: () => (/* binding */ isSameMonth)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name isSameMonth
 * @category Month Helpers
 * @summary Are the given dates in the same month (and year)?
 *
 * @description
 * Are the given dates in the same month (and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 *
 * @returns The dates are in the same month (and year)
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2014, 8, 25))
 * //=> true
 *
 * @example
 * // Are 2 September 2014 and 25 September 2015 in the same month?
 * const result = isSameMonth(new Date(2014, 8, 2), new Date(2015, 8, 25))
 * //=> false
 */
function isSameMonth(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);
  return (
    _dateLeft.getFullYear() === _dateRight.getFullYear() &&
    _dateLeft.getMonth() === _dateRight.getMonth()
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameMonth);


/***/ }),

/***/ "./node_modules/date-fns/isSameWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * The {@link isSameWeek} function options.
 */

/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The first date to check
 * @param dateRight - The second date to check
 * @param options - An object with options
 *
 * @returns The dates are in the same week (and month and year)
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);
  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);

  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);


/***/ }),

/***/ "./node_modules/date-fns/isThisMonth.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/isThisMonth.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisMonth: () => (/* binding */ isThisMonth)
/* harmony export */ });
/* harmony import */ var _isSameMonth_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameMonth.mjs */ "./node_modules/date-fns/isSameMonth.mjs");


/**
 * @name isThisMonth
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * const result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */

function isThisMonth(date) {
  return (0,_isSameMonth_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameMonth)(Date.now(), date);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisMonth);


/***/ }),

/***/ "./node_modules/date-fns/isThisWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isThisWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isThisWeek: () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameWeek.mjs */ "./node_modules/date-fns/isSameWeek.mjs");


/**
 * The {@link isThisWeek} function options.
 */

/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 * @param options - The object with options
 *
 * @returns The date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */
function isThisWeek(date, options) {
  return (0,_isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(date, Date.now(), options);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isThisWeek);


/***/ }),

/***/ "./node_modules/date-fns/isToday.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isToday.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isToday: () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, Date.now());
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isToday);


/***/ }),

/***/ "./node_modules/date-fns/isTomorrow.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/isTomorrow.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isTomorrow: () => (/* binding */ isTomorrow)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");
/* harmony import */ var _isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isSameDay.mjs */ "./node_modules/date-fns/isSameDay.mjs");



/**
 * @name isTomorrow
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 * @pure false
 *
 * @description
 * Is the given date tomorrow?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * const result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow(date) {
  return (0,_isSameDay_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameDay)(date, (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_1__.addDays)(Date.now(), 1));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isTomorrow);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfMonth.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/startOfMonth.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfMonth: () => (/* binding */ startOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfMonth
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfMonth);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/sub.mjs":
/*!***************************************!*\
  !*** ./node_modules/date-fns/sub.mjs ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   sub: () => (/* binding */ sub)
/* harmony export */ });
/* harmony import */ var _subDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subDays.mjs */ "./node_modules/date-fns/subDays.mjs");
/* harmony import */ var _subMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subMonths.mjs */ "./node_modules/date-fns/subMonths.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name sub
 * @category Common Helpers
 * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @description
 * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param duration - The object with years, months, weeks, days, hours, minutes and seconds to be subtracted
 *
 * | Key     | Description                        |
 * |---------|------------------------------------|
 * | years   | Amount of years to be subtracted   |
 * | months  | Amount of months to be subtracted  |
 * | weeks   | Amount of weeks to be subtracted   |
 * | days    | Amount of days to be subtracted    |
 * | hours   | Amount of hours to be subtracted   |
 * | minutes | Amount of minutes to be subtracted |
 * | seconds | Amount of seconds to be subtracted |
 *
 * All values default to 0
 *
 * @returns The new date with the seconds subtracted
 *
 * @example
 * // Subtract the following duration from 15 June 2017 15:29:20
 * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
 *   years: 2,
 *   months: 9,
 *   weeks: 1,
 *   days: 7,
 *   hours: 5,
 *   minutes: 9,
 *   seconds: 30
 * })
 * //=> Mon Sep 1 2014 10:19:50
 */
function sub(date, duration) {
  const {
    years = 0,
    months = 0,
    weeks = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
  } = duration;

  // Subtract years and months
  const dateWithoutMonths = (0,_subMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.subMonths)(date, months + years * 12);

  // Subtract weeks and days
  const dateWithoutDays = (0,_subDays_mjs__WEBPACK_IMPORTED_MODULE_1__.subDays)(dateWithoutMonths, days + weeks * 7);

  // Subtract hours, minutes and seconds
  const minutestoSub = minutes + hours * 60;
  const secondstoSub = seconds + minutestoSub * 60;
  const mstoSub = secondstoSub * 1000;
  const finalDate = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, dateWithoutDays.getTime() - mstoSub);

  return finalDate;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sub);


/***/ }),

/***/ "./node_modules/date-fns/subDays.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/subDays.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subDays: () => (/* binding */ subDays)
/* harmony export */ });
/* harmony import */ var _addDays_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addDays.mjs */ "./node_modules/date-fns/addDays.mjs");


/**
 * @name subDays
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of days to be subtracted.
 *
 * @returns The new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * const result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays(date, amount) {
  return (0,_addDays_mjs__WEBPACK_IMPORTED_MODULE_0__.addDays)(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subDays);


/***/ }),

/***/ "./node_modules/date-fns/subMonths.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/subMonths.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   subMonths: () => (/* binding */ subMonths)
/* harmony export */ });
/* harmony import */ var _addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addMonths.mjs */ "./node_modules/date-fns/addMonths.mjs");


/**
 * @name subMonths
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param amount - The amount of months to be subtracted.
 *
 * @returns The new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * const result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths(date, amount) {
  return (0,_addMonths_mjs__WEBPACK_IMPORTED_MODULE_0__.addMonths)(date, -amount);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subMonths);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sNkZBQTZGLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsS0FBSyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxhQUFhLE1BQU0sV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZ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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx3RkFBd0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUss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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sMkZBQTJGLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxjQUFjLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxjQUFjLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FB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Ozs7QUMxZ0J2QztBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsT0FBTyw4RkFBOEYsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVks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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ3pCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFFBQVEsNkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHOztBQUVILFlBQVksNkVBQWlCO0FBQzdCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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UyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0J6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3QtcGFnZS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2lkZWJhci1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdG9kYXktcGFnZS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdXBjb21pbmctcGFnZS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Byb2plY3QtcGFnZS1zdHlsZS5jc3M/ZTNiYiIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zaWRlYmFyLXN0eWxlLmNzcz8yOGI3Iiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZGF5LXBhZ2Utc3R5bGUuY3NzPzYwZDQiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvdXBjb21pbmctcGFnZS1zdHlsZS5jc3M/MTNiMSIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9wcm9qZWN0LXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy90b2RheS1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3VwY29taW5nLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9hZGRMZWFkaW5nWmVyb3MubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZGVmYXVsdE9wdGlvbnMubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9wcm90ZWN0ZWRUb2tlbnMubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZC5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkTW9udGhzLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb21wYXJlRGVzYy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdHJ1Y3RGcm9tLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZE9mTW9udGgubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZm9ybWF0Lm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXREYXlPZlllYXIubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWsubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldElTT1dlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRXZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNCZWZvcmUubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lRGF5Lm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc1NhbWVNb250aC5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNTYW1lV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNUaGlzTW9udGgubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVGhpc1dlZWsubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVG9kYXkubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVG9tb3Jyb3cubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzVmFsaWQubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4ubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZklTT1dlZWsubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZJU09XZWVrWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZk1vbnRoLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mV2Vlay5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZldlZWtZZWFyLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mWWVhci5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdWJEYXlzLm1qcyIsIndlYnBhY2s6Ly90by1kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdWJNb250aHMubWpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNwcm9qZWN0LWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI3Byb2plY3QtdGl0bGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgZm9udC1mYW1pbHk6IHNwYWNlLWdyb3Rlc2ssIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4uc2VjdGlvbi1uYW1lIHtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbiNwcm9qZWN0LXRpdGxlLCAuc2VjdGlvbi1uYW1lIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgIHRyYW5zaXRpb246IGJvcmRlciAxNDBtcyBlYXNlLWluLW91dDtcbn1cblxuI3Byb2plY3QtdGl0bGU6aG92ZXIsIC5zZWN0aW9uLW5hbWU6aG92ZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZThiOGI7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDE0MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4jcHJvamVjdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogODRweDtcbn1cblxuI3Byb2plY3Qtc2VjdGlvbnMge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDI0cHg7XG5cbiAgICAuc2VjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAyODBweDtcblxuICAgICAgICAuc2VjdGlvbi1oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICAgIGdhcDogMzZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZWxldGUtc2VjdGlvbi1idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkLXRhc2stYnV0dG9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGFza3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50YXNrLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbn1cblxuLnByb2plY3QtcGFnZS10YXNrLWluZm8tbW9kYWw6bm90KC5yZW1vdmVkKSwgI3NlY3Rpb24taW5mby1tb2RhbDpub3QoLnJlbW92ZWQpIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG4gICAgcGFkZGluZzogMTJweCAyNHB4IDE2cHggMTZweDtcbiAgICBib3JkZXI6IDAuNHB4IHNvbGlkICM4MzdlN2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgLnRhc2stbmFtZSwgLmRlc2NyaXB0aW9uLCAucHJpb3JpdHksIC5kdWUtZGF0ZSwgI3NlY3Rpb24tbmFtZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdXRsaW5lOiAwcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgY2FyZXQtY29sb3I6ICNkNGQ0ZDQ7XG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgIH1cblxuICAgIC50YXNrLW5hbWUsICNzZWN0aW9uLW5hbWUge1xuICAgICAgICBwYWRkaW5nOiA4cHggNXB4IDAgNXB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYXRvc2hpLW1lZGl1bSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgaGVpZ2h0OiA4dmg7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICB9XG5cbiAgICBociB7XG4gICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIGJvcmRlcjogMC4xcHggc29saWQgIzgzN2U3ZTtcbiAgICB9XG5cbiAgICAuZXh0cmEtdGFzay1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgZ2FwOjRweDtcbiAgICB9XG5cbiAgICAucHJpb3JpdHktY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAucHJpb3JpdHksIC5kdWUtZGF0ZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIGJvcmRlcjogMC40cHggc29saWQgIzgzN2U3ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgIC5kdWUtZGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoOTglKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjM4OCUpIGh1ZS1yb3RhdGUoMTgzZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDY2JSk7XG4gICAgfVxuXG4gICAgLnRhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbiwgI2NhbmNlbC1hZGQtc2VjdGlvbiwgI2NvbmZpcm0tYWRkLXNlY3Rpb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MzQzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuXG4gICAgLnRhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbjpob3ZlciwgI2NhbmNlbC1hZGQtc2VjdGlvbjpob3ZlciwgI2NvbmZpcm0tYWRkLXNlY3Rpb246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1YjVhNWE7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLnRhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbltkaXNhYmxlZF0sICNjb25maXJtLWFkZC1zZWN0aW9uW2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiNhNmE2YTY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTMzMzM7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgfVxuXG4gICAgLnRhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbltkaXNhYmxlZF06aG92ZXIgLm1lc3NhZ2UsICNjb25maXJtLWFkZC1zZWN0aW9uW2Rpc2FibGVkXTpob3ZlciAjbWVzc2FnZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICAgICAgcGFkZGluZzogMCAycHg7XG4gICAgfVxuXG4gICAgLm1lc3NhZ2UsICNtZXNzYWdlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjojZDRkNGQ0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODM3ZTdlO1xuICAgIH1cbn1cblxuI2FkZC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xuXG4gICAgI2FkZC1zZWN0aW9uLWJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjc2VjdGlvbi1pbmZvLW1vZGFsIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcbiAgICB9XG59XG5cbi5vdmVyZHVlIHtcbiAgICBib3JkZXItY29sb3I6ICNhNzNkM2Q7O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Byb2plY3QtcGFnZS1zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtLQUFrSztBQUN0Szs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUzs7SUFFVDtRQUNJLFlBQVk7O1FBRVo7WUFDSSxjQUFjO1lBQ2QsYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixTQUFTO1FBQ2I7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1COztZQUVuQjtnQkFDSSxXQUFXO1lBQ2Y7UUFDSjs7UUFFQTtZQUNJLFVBQVU7WUFDVixhQUFhO1lBQ2IsMkJBQTJCO1lBQzNCLFFBQVE7UUFDWjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsUUFBUTtRQUNaO0lBQ0o7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCOztJQUVsQjtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2YsbUtBQW1LO0lBQ3ZLOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsT0FBTztJQUNYOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFFBQVE7UUFDUixjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsWUFBWTtRQUNaLDJCQUEyQjtRQUMzQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSwrRkFBK0Y7SUFDbkc7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLDhDQUE4QztJQUNsRDs7SUFFQTtRQUNJLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksY0FBYztRQUNkLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0ksbUJBQW1COztJQUVuQjtRQUNJLFVBQVU7UUFDVixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNwcm9qZWN0LWNvbnRlbnQge1xcbiAgICBtYXJnaW4tbGVmdDogNDJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBzcGFjZS1ncm90ZXNrLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnNlY3Rpb24tbmFtZSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUsIC5zZWN0aW9uLW5hbWUge1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMTQwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlOmhvdmVyLCAuc2VjdGlvbi1uYW1lOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhlOGI4YjtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDE0MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiA4NHB4O1xcbn1cXG5cXG4jcHJvamVjdC1zZWN0aW9ucyB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcblxcbiAgICAuc2VjdGlvbiB7XFxuICAgICAgICB3aWR0aDogMjgwcHg7XFxuXFxuICAgICAgICAuc2VjdGlvbi1oZWFkZXIge1xcbiAgICAgICAgICAgIG1hcmdpbjogMTJweCAwO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgICAgICAgICBnYXA6IDM2cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlLXNlY3Rpb24tYnV0dG9uIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgICAgICBnYXA6IDhweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YXNrcyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogOHB4O1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC50YXNrLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcXG4gICAgfVxcbn1cXG5cXG4ucHJvamVjdC1wYWdlLXRhc2staW5mby1tb2RhbDpub3QoLnJlbW92ZWQpLCAjc2VjdGlvbi1pbmZvLW1vZGFsOm5vdCgucmVtb3ZlZCkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMTJweCAyNHB4IDE2cHggMTZweDtcXG4gICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjODM3ZTdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIC50YXNrLW5hbWUsIC5kZXNjcmlwdGlvbiwgLnByaW9yaXR5LCAuZHVlLWRhdGUsICNzZWN0aW9uLW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBvdXRsaW5lOiAwcHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgY2FyZXQtY29sb3I6ICNkNGQ0ZDQ7XFxuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgfVxcblxcbiAgICAudGFzay1uYW1lLCAjc2VjdGlvbi1uYW1lIHtcXG4gICAgICAgIHBhZGRpbmc6IDhweCA1cHggMCA1cHg7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBmb250LWZhbWlseTogc2F0b3NoaS1tZWRpdW0sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICB9XFxuXFxuICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgaGVpZ2h0OiA4dmg7XFxuICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMCA1cHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIH1cXG5cXG4gICAgaHIge1xcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcXG4gICAgICAgIGJvcmRlcjogMC4xcHggc29saWQgIzgzN2U3ZTtcXG4gICAgfVxcblxcbiAgICAuZXh0cmEtdGFzay1pbmZvIHtcXG4gICAgICAgIHdpZHRoOiA2MCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDo0cHg7XFxuICAgIH1cXG5cXG4gICAgLnByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAucHJpb3JpdHksIC5kdWUtZGF0ZSB7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAzcHg7XFxuICAgICAgICBib3JkZXI6IDAuNHB4IHNvbGlkICM4MzdlN2U7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIH1cXG5cXG4gICAgLmR1ZS1kYXRlOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoOTglKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjM4OCUpIGh1ZS1yb3RhdGUoMTgzZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDY2JSk7XFxuICAgIH1cXG5cXG4gICAgLnRhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbiwgI2NhbmNlbC1hZGQtc2VjdGlvbiwgI2NvbmZpcm0tYWRkLXNlY3Rpb24ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcblxcbiAgICAudGFzay1pbmZvLW1vZGFsLWJ1dHRvbnMgYnV0dG9uOmhvdmVyLCAjY2FuY2VsLWFkZC1zZWN0aW9uOmhvdmVyLCAjY29uZmlybS1hZGQtc2VjdGlvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1YjVhNWE7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWluZm8tbW9kYWwtYnV0dG9ucyBidXR0b25bZGlzYWJsZWRdLCAjY29uZmlybS1hZGQtc2VjdGlvbltkaXNhYmxlZF0ge1xcbiAgICAgICAgY29sb3I6I2E2YTZhNjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTMzMzM7XFxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWluZm8tbW9kYWwtYnV0dG9ucyBidXR0b25bZGlzYWJsZWRdOmhvdmVyIC5tZXNzYWdlLCAjY29uZmlybS1hZGQtc2VjdGlvbltkaXNhYmxlZF06aG92ZXIgI21lc3NhZ2Uge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMnB4O1xcbiAgICB9XFxuXFxuICAgIC5tZXNzYWdlLCAjbWVzc2FnZSB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgY29sb3I6I2Q0ZDRkNDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIwMjA7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODM3ZTdlO1xcbiAgICB9XFxufVxcblxcbiNhZGQtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI0cHg7XFxuXFxuICAgICNhZGQtc2VjdGlvbi1idXR0b24ge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNzZWN0aW9uLWluZm8tbW9kYWwge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLTRweDtcXG4gICAgfVxcbn1cXG5cXG4ub3ZlcmR1ZSB7XFxuICAgIGJvcmRlci1jb2xvcjogI2E3M2QzZDs7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9TYXRvc2hpLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9TcGFjZUdyb3Rlc2stQm9sZC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogc2F0b3NoaS1yZWd1bGFyO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogc3BhY2UtZ3JvdGVzaztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuYm9keSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuI3NpZGViYXIge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMjkyOTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuXG5wIHtcbiAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICBmb250LWZhbWlseTogc2F0b3NoaS1yZWd1bGFyLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC13cmFwOiBub3dyYXA7XG59XG5cbmgxIHtcbiAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICBmb250LWZhbWlseTogc3BhY2UtZ3JvdGVzaywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbmlucHV0LCBidXR0b24sIGxhYmVsLCBzZWxlY3QsIG9wdGlvbiwgdGV4dGFyZWEge1xuICAgIGZvbnQtZmFtaWx5OiBzYXRvc2hpLXJlZ3VsYXIsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xufVxuXG4jc2lkZWJhci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG59XG5cbmltZ1tzcmMqPVwic3ZnXCJdIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBmaWx0ZXI6IGludmVydCg5MiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxODVkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg4MCUpO1xufVxuXG5idXR0b24ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbmJ1dHRvbiNzaWRlYmFyLXRvZ2dsZS1jbG9zZSwgYnV0dG9uI3NpZGViYXItdG9nZ2xlLW9wZW4sICNhZGQtcHJvamVjdCwgI2NhbmNlbC1hZGQtcHJvamVjdCwgI2NvbmZpcm0tYWRkLXByb2plY3QsIC5kZWxldGUtcHJvamVjdCB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24jc2lkZWJhci10b2dnbGUtb3BlbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMTJweDtcbn1cblxuYnV0dG9uI3RvZGF5IHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYnV0dG9uI3VwY29taW5nIHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbmJ1dHRvbiN0b2RheSwgYnV0dG9uI3VwY29taW5nIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBhZGRpbmctbGVmdDogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzhweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbiN0b2RheS1pY29uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5pbWdbYWx0PVwiVG9kYXkgQ2FsZW5kYXJcIl0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI2RhdGUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgZm9udC1zaXplOiAwLjZyZW07XG59XG5cbmRpdiNwcm9qZWN0cy1oZWFkZXIge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZzogMCA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNhZGQtcHJvamVjdC1pbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG9wYWNpdHk6MTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW47XG59XG5cbiNwcm9qZWN0LW5hbWUge1xuICAgIG91dGxpbmU6IDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDAuNHB4IHNvbGlkICNkNGQ0ZDQ7XG4gICAgbWFyZ2luOiA0cHggMCA4cHggMDtcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xuICAgIHdpZHRoOiA5NSU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGNhcmV0LWNvbG9yOiAjZDRkNGQ0O1xuICAgIGNvbG9yOiAjZDRkNGQ0O1xufVxuXG4jY2FuY2VsLWFkZC1wcm9qZWN0LCAjY29uZmlybS1hZGQtcHJvamVjdCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQzNDM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcbn1cblxuI2NvbmZpcm0tYWRkLXByb2plY3RbZGlzYWJsZWRdIHtcbiAgICBjb2xvcjojYTZhNmE2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTMzMzM7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuI2NvbmZpcm0tYWRkLXByb2plY3RbZGlzYWJsZWRdOmhvdmVyICNzaWRlYmFyLW1lc3NhZ2Uge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgIHBhZGRpbmc6IDAgMnB4O1xufVxuXG4jc2lkZWJhci1tZXNzYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjojZDRkNGQ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIwMjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgzN2U3ZTtcbn1cblxuLnNpZGViYXItcHJvamVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnNpZGViYXItcHJvamVjdDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uc2lkZWJhci1wcm9qZWN0LW5hbWUge1xuICAgIHdpZHRoOiAxODhweDtcbiAgICBoZWlnaHQ6IDM4cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LWZhbWlseSA6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG59XG5cbi5kZWxldGUtcHJvamVjdC1pY29uIHtcbiAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2lkZWJhci10b2dnbGUtY2xvc2U6aG92ZXIsICNzaWRlYmFyLXRvZ2dsZS1vcGVuOmhvdmVyLCAuc2lkZWJhci1wcm9qZWN0Om5vdCguaGlnaGxpZ2h0ZWQpOmhvdmVyLCAjdG9kYXk6bm90KC5oaWdobGlnaHRlZCk6aG92ZXIsICN1cGNvbWluZzpub3QoLmhpZ2hsaWdodGVkKTpob3ZlciwgI2FkZC1wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MzQzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbiNjYW5jZWwtYWRkLXByb2plY3Q6aG92ZXIsICNjb25maXJtLWFkZC1wcm9qZWN0OmhvdmVyLCAuc2lkZWJhci1wcm9qZWN0Om5vdCguaGlnaGxpZ2h0ZWQpOmhvdmVyIC5kZWxldGUtcHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViNWE1YTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uc2lkZWJhci1wcm9qZWN0LnNpZGViYXItcHJvamVjdC5oaWdobGlnaHRlZDpob3ZlciAuZGVsZXRlLXByb2plY3Q6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjRiNzE7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcbn1cblxuLnNpZGViYXItcHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5zaWRlYmFyLXByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWljb24ge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG59XG5cbi5hZGQtdGFzay1idXR0b24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI3NpZGViYXItdG9nZ2xlLW9wZW46bm90KC5oaWRkZW4pIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcbn1cblxuI3NpZGViYXItdG9nZ2xlLW9wZW4uaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ucmVtb3ZlZCB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5oaWdobGlnaHRlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUwMjg1YTtcbn1cblxuLmhpZ2hsaWdodGVkIHAge1xuICAgIGNvbG9yOiAjYjg5NWMwO1xufVxuXG4uaGlnaGxpZ2h0ZWQgaW1nW3NyYyo9XCJzdmdcIl0ge1xuICAgIGZpbHRlcjogaW52ZXJ0KDczJSkgc2VwaWEoMjElKSBzYXR1cmF0ZSg0NjklKSBodWUtcm90YXRlKDI0M2RlZykgYnJpZ2h0bmVzcyg4NSUpIGNvbnRyYXN0KDgyJSk7XG59XG5cbiNzaWRlYmFyLnJlbW92ZWQge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cblxuI3NpZGViYXIucmVtb3ZlZCAjYWRkLXByb2plY3QtaW1nIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zaWRlYmFyLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJ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O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw4RkFBOEY7QUFDbEc7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhdG9zaGktcmVndWxhcjtcXG4gICAgc3JjOiB1cmwoLi9mb250cy9TYXRvc2hpLVJlZ3VsYXIub3RmKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBzcGFjZS1ncm90ZXNrO1xcbiAgICBzcmM6IHVybCguL2ZvbnRzL1NwYWNlR3JvdGVzay1Cb2xkLnR0Zik7XFxufVxcblxcbmJvZHkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMjkyOTtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbnAge1xcbiAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgZm9udC1mYW1pbHk6IHNhdG9zaGktcmVndWxhciwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC13cmFwOiBub3dyYXA7XFxufVxcblxcbmgxIHtcXG4gICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgIGZvbnQtZmFtaWx5OiBzcGFjZS1ncm90ZXNrLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG5pbnB1dCwgYnV0dG9uLCBsYWJlbCwgc2VsZWN0LCBvcHRpb24sIHRleHRhcmVhIHtcXG4gICAgZm9udC1mYW1pbHk6IHNhdG9zaGktcmVndWxhciwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNzaWRlYmFyLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbmltZ1tzcmMqPVxcXCJzdmdcXFwiXSB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBmaWx0ZXI6IGludmVydCg5MiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxODVkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg4MCUpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiNzaWRlYmFyLXRvZ2dsZS1jbG9zZSwgYnV0dG9uI3NpZGViYXItdG9nZ2xlLW9wZW4sICNhZGQtcHJvamVjdCwgI2NhbmNlbC1hZGQtcHJvamVjdCwgI2NvbmZpcm0tYWRkLXByb2plY3QsIC5kZWxldGUtcHJvamVjdCB7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiNzaWRlYmFyLXRvZ2dsZS1vcGVuIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDEycHg7XFxufVxcblxcbmJ1dHRvbiN0b2RheSB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uI3VwY29taW5nIHtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG5idXR0b24jdG9kYXksIGJ1dHRvbiN1cGNvbWluZyB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiN0b2RheS1pY29uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbWdbYWx0PVxcXCJUb2RheSBDYWxlbmRhclxcXCJdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4jZGF0ZSB7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDAuNnJlbTtcXG59XFxuXFxuZGl2I3Byb2plY3RzLWhlYWRlciB7XFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgIHBhZGRpbmc6IDAgOHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNhZGQtcHJvamVjdC1pbWcge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgb3BhY2l0eToxO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW47XFxufVxcblxcbiNwcm9qZWN0LW5hbWUge1xcbiAgICBvdXRsaW5lOiAwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjZDRkNGQ0O1xcbiAgICBtYXJnaW46IDRweCAwIDhweCAwO1xcbiAgICBwYWRkaW5nOiA4cHggNXB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBjYXJldC1jb2xvcjogI2Q0ZDRkNDtcXG4gICAgY29sb3I6ICNkNGQ0ZDQ7XFxufVxcblxcbiNjYW5jZWwtYWRkLXByb2plY3QsICNjb25maXJtLWFkZC1wcm9qZWN0IHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2NvbmZpcm0tYWRkLXByb2plY3RbZGlzYWJsZWRdIHtcXG4gICAgY29sb3I6I2E2YTZhNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzMzMztcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuI2NvbmZpcm0tYWRkLXByb2plY3RbZGlzYWJsZWRdOmhvdmVyICNzaWRlYmFyLW1lc3NhZ2Uge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbn1cXG5cXG4jc2lkZWJhci1tZXNzYWdlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjojZDRkNGQ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODM3ZTdlO1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0Om5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgbWFyZ2luLXRvcDogNHB4O1xcbn1cXG5cXG4uc2lkZWJhci1wcm9qZWN0LW5hbWUge1xcbiAgICB3aWR0aDogMTg4cHg7XFxuICAgIGhlaWdodDogMzhweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIGZvbnQtZmFtaWx5IDogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1pY29uIHtcXG4gICAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUtY2xvc2U6aG92ZXIsICNzaWRlYmFyLXRvZ2dsZS1vcGVuOmhvdmVyLCAuc2lkZWJhci1wcm9qZWN0Om5vdCguaGlnaGxpZ2h0ZWQpOmhvdmVyLCAjdG9kYXk6bm90KC5oaWdobGlnaHRlZCk6aG92ZXIsICN1cGNvbWluZzpub3QoLmhpZ2hsaWdodGVkKTpob3ZlciwgI2FkZC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuI2NhbmNlbC1hZGQtcHJvamVjdDpob3ZlciwgI2NvbmZpcm0tYWRkLXByb2plY3Q6aG92ZXIsIC5zaWRlYmFyLXByb2plY3Q6bm90KC5oaWdobGlnaHRlZCk6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViNWE1YTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdC5zaWRlYmFyLXByb2plY3QuaGlnaGxpZ2h0ZWQ6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiNGI3MTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLnNpZGViYXItcHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaWRlYmFyLXByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWljb24ge1xcbiAgICBkaXNwbGF5OiBpbml0aWFsO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlLW9wZW46bm90KC5oaWRkZW4pIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUtb3Blbi5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucmVtb3ZlZCB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MDI4NWE7XFxufVxcblxcbi5oaWdobGlnaHRlZCBwIHtcXG4gICAgY29sb3I6ICNiODk1YzA7XFxufVxcblxcbi5oaWdobGlnaHRlZCBpbWdbc3JjKj1cXFwic3ZnXFxcIl0ge1xcbiAgICBmaWx0ZXI6IGludmVydCg3MyUpIHNlcGlhKDIxJSkgc2F0dXJhdGUoNDY5JSkgaHVlLXJvdGF0ZSgyNDNkZWcpIGJyaWdodG5lc3MoODUlKSBjb250cmFzdCg4MiUpO1xcbn1cXG5cXG4jc2lkZWJhci5yZW1vdmVkIHtcXG4gICAgd2lkdGg6IDBweDtcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuXFxuI3NpZGViYXIucmVtb3ZlZCAjYWRkLXByb2plY3QtaW1nIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvU2F0b3NoaS1NZWRpdW0ub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogc2F0b3NoaS1tZWRpdW07XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIwMjA7XG59XG5cbiNtYWluLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjAyMDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB6LWluZGV4OiAtMjtcbn1cblxuI3RvZGF5LWNvbnRlbnQge1xuICAgIG1pbi13aWR0aDogMzYwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jdG9kYXktdGl0bGUge1xuICAgIHBvc2l0aW9uOiBmaXhlZFxufVxuXG4jYWRkLXRhc2stY29udGFpbmVyOm5vdCgucmVtb3ZlZCkge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbiNhZGQtdGFzay1idXR0b24sIC5hZGQtdGFzay1idXR0b24ge1xuICAgIHBhZGRpbmc6IDAgMCAwIDZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2FkZC10YXNrLWJ1dHRvbi1pbWctY29udGFpbmVyLCAuYWRkLXRhc2stYnV0dG9uLWltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGNsaXAtcGF0aDogY2lyY2xlKCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jYWRkLXRhc2stYnV0dG9uLWltZyB7XG4gICAgZmlsdGVyOiBpbnZlcnQoMzIlKSBzZXBpYSgxMCUpIHNhdHVyYXRlKDI5MDIlKSBodWUtcm90YXRlKDI0MmRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDkxJSk7XG59XG5cbiNhZGQtdGFzay1sYWJlbCwgLmFkZC10YXNrLWxhYmVsIHtcbiAgICBjb2xvcjojOGU4YjhiO1xuICAgIG1hcmdpbjogMDtcbn1cblxuI2FkZC10YXNrLWJ1dHRvbjpob3ZlciB7XG4gICAgI2FkZC10YXNrLWJ1dHRvbi1pbWctY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NDM4NDtcbiAgICB9XG5cbiAgICAjYWRkLXRhc2stYnV0dG9uLWltZyB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDkyJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDAlKSBodWUtcm90YXRlKDE4NWRlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDgwJSk7XG4gICAgfVxuXG4gICAgI2FkZC10YXNrLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICM3NzQzODQ7XG4gICAgfVxufVxuXG4jaW5mby1tb2RhbDpub3QoLnJlbW92ZWQpIHtcbiAgICBtaW4td2lkdGg6IDI0MHB4O1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xuICAgIHBhZGRpbmc6IDEycHggMjRweCAxNnB4IDE2cHg7XG4gICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjODM3ZTdlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAgICN0YXNrLW5hbWUsICNkZXNjcmlwdGlvbiwgI3ByaW9yaXR5LCAjc2VsZWN0LXByb2plY3Qge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3V0bGluZTogMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNhcmV0LWNvbG9yOiAjZDRkNGQ0O1xuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICB9XG5cbiAgICAjdGFzay1uYW1lIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDVweCAwIDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LWZhbWlseTogc2F0b3NoaS1tZWRpdW0sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgICNkZXNjcmlwdGlvbiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogOHZoO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAwIDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuXG4gICAgaHIge1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBib3JkZXI6IDAuMXB4IHNvbGlkICM4MzdlN2U7XG4gICAgfVxuXG4gICAgI3Rhc2stZXh0cmEtaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAjcHJpb3JpdHktY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjcHJpb3JpdHksICNzZWxlY3QtcHJvamVjdCB7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjODM3ZTdlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgfVxuXG4gICAgI3NlbGVjdC1wcm9qZWN0IHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAjdGFzay1pbmZvLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cblxuICAgICN0YXNrLWluZm8tbW9kYWwtYnV0dG9ucyBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1YjVhNWE7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgI3Rhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjojYTZhNmE2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzMzMzO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cblxuICAgICN0YXNrLWluZm8tbW9kYWwtYnV0dG9ucyBidXR0b25bZGlzYWJsZWRdOmhvdmVyICNtZXNzYWdlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICB9XG5cbiAgICAjbWVzc2FnZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6I2Q0ZDRkNDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjAyMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzgzN2U3ZTtcbiAgICB9XG59XG5cbiNuby10YXNrIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MnB4O1xufVxuXG4jbm8tdGFzay1pbWFnZSBpbWcge1xuICAgIG1hcmdpbi10b3A6IGNhbGMoNnZoKTtcbiAgICB3aWR0aDogMjgwcHg7XG59XG5cbiNuby10YXNrLXRleHQge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDMycHgpIC8gMWZyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jdG9kYXktdGFzay1jb250YWluZXIge1xuICAgIHBhZGRpbmctcmlnaHQ6IDQycHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIHJvdy1nYXA6IDhweDtcbiAgICBtYXJnaW4tdG9wOiA5NnB4O1xufVxuXG4udGFzay1jb250YWluZXIge1xuICAgIGhlaWdodDogNTRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMjkyOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2QzYzNjO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMTUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi50YXNrIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlOiAyNXB4IDIwcHggLyA0MnB4IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIGxlZnQ6IC0zcHg7XG4gICAgfVxuXG4gICAgaW1nW2RhdGEtcHJpb3JpdHk9XCIxXCJdIHtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMzYlKSBzZXBpYSg0NSUpIHNhdHVyYXRlKDcxNCUpIGh1ZS1yb3RhdGUoMTU4ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTElKTtcbiAgICB9XG5cbiAgICBpbWdbZGF0YS1wcmlvcml0eT1cIjJcIl0ge1xuICAgICAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDc3JSkgc2F0dXJhdGUoNDQ2JSkgaHVlLXJvdGF0ZSgxMDBkZWcpIGJyaWdodG5lc3MoODklKSBjb250cmFzdCg4NiUpO1xuICAgIH1cblxuICAgIGltZ1tkYXRhLXByaW9yaXR5PVwiM1wiXSB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDYxJSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSgyMDc0JSkgaHVlLXJvdGF0ZSgyMWRlZykgYnJpZ2h0bmVzcyg4OCUpIGNvbnRyYXN0KDg2JSk7XG4gICAgfVxuXG4gICAgaW1nW2RhdGEtcHJpb3JpdHk9XCI0XCJdIHtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNDElKSBzZXBpYSg2OCUpIHNhdHVyYXRlKDQ0NiUpIGh1ZS1yb3RhdGUoMzM5ZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoOTElKTtcbiAgICB9XG5cbiAgICBpbWdbZGF0YS1wcmlvcml0eT1cIjVcIl0ge1xuICAgICAgICBmaWx0ZXI6IGludmVydCgxMiUpIHNlcGlhKDk1JSkgc2F0dXJhdGUoMjY4NyUpIGh1ZS1yb3RhdGUoMzQ5ZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoODUlKTtcbiAgICB9XG5cbiAgICAucHJpb3JpdHkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICB0b3A6IC0xMHB4O1xuICAgICAgICBsZWZ0OiAxNHB4O1xuICAgIH1cblxuICAgIC5jaGVja2JveCB7XG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyBzcGFuIDIgLyBzcGFuIDE7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MzdlN2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgfVxuXG4gICAgLnRhc2stdGl0bGUge1xuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gc3BhbiAxIC8gc3BhbiAxO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIH1cblxuICAgIC50YXNrLXByb2plY3QsIC5kdWUtZGF0ZSB7XG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyBzcGFuIDEgLyBzcGFuIDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgICAgY29sb3I6I2E2YTZhNjtcbiAgICB9XG59XG5cbi5kZWxldGUtdGFzayB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kZWxldGUtdGFzay1pY29uIHtcbiAgICB3aWR0aDogMThweCAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50YXNrLWNvbnRhaW5lcjpob3ZlcntcbiAgICBib3JkZXItY29sb3I6ICM4MzdlN2U7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDEwMG1zIGVhc2UtaW4tb3V0O1xuXG4gICAgLmRlbGV0ZS10YXNrLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgIH1cbn1cblxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MzQzO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jaGVja2JveFtkYXRhLWNoZWNrZWQ9XCJkb25lXCJdIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzk5ZTRmO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5jaGVja2JveFtkYXRhLWNoZWNrZWQ9XCJkb25lXCJdOjphZnRlciB7XG4gICAgY29udGVudDogXCLinJNcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMnB4O1xuICAgIGxlZnQ6IDQ2cHg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgY29sb3I6ICNkNGQ0ZDQ7XG59XG5cbiN0YXNrLWRpYWxvZyB7XG4gICAgd2lkdGg6IDY4JTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIwMjA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgzN2U3ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuI3Rhc2stZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgI2VkaXQtdGFzay10aXRsZSwgI2VkaXQtdGFzay1kZXNjcmlwdGlvbiwgI2VkaXQtdGFzay1kdWUtZGF0ZSwgI2VkaXQtdGFzay1wcmlvcml0eSwgI2Ryb3Bkb3duLXByb2plY3RzIHtcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICB9XG5cbiAgICBsYWJlbCwgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNkNGQ0ZDQ7XG4gICAgfVxuXG4gICAgI2VkaXQtdGFzay10aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYXRvc2hpLW1lZGl1bSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAjZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiA5NyU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cblxuICAgICNlZGl0LXRhc2stZGVzY3JpcHRpb24taWNvbiB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBmaWx0ZXI6IGludmVydCg1MiUpIHNlcGlhKDclKSBzYXR1cmF0ZSgxNjQlKSBodWUtcm90YXRlKDMxNGRlZykgYnJpZ2h0bmVzcyg5NCUpIGNvbnRyYXN0KDg5JSk7XG4gICAgfVxuXG4gICAgI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pY29uLnJlbW92ZWQge1xuICAgICAgICB3aWR0aDogMCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAjZWRpdC10YXNrLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwdmg7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICAjZWRpdC10YXNrLXRpdGxlLCAjZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lciwgI2VkaXQtdGFzay1kdWUtZGF0ZSwgI2VkaXQtdGFzay1wcmlvcml0eSB7XG4gICAgICAgIHBhZGRpbmc6IDRweCAzcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAxNDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAjZWRpdC10YXNrLXRpdGxlOmhvdmVyLCAjZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lcjpob3ZlciwgI2VkaXQtdGFzay1kdWUtZGF0ZTpob3ZlciwgI2VkaXQtdGFzay1wcmlvcml0eTpob3ZlciB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZThiOGI7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAxNDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAjb3RoZXItdGFzay1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDk3JTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIDM2cHgpIC83OHB4IGF1dG87XG4gICAgICAgIHJvdy1nYXA6IDRweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAjZWRpdC10YXNrLWR1ZS1kYXRlIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cblxuICAgICNlZGl0LXRhc2stZHVlLWRhdGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDk4JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIzODglKSBodWUtcm90YXRlKDE4M2RlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg2NiUpO1xuICAgIH1cblxuICAgICNlZGl0LXRhc2stcHJpb3JpdHkge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICNlZGl0LXRhc2stcHJpb3JpdHk6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhlOGI4YjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBoZWlnaHQ6IDAuOHJlbTtcbiAgICB9XG5cbiAgICAjZWRpdC10YXNrLXByaW9yaXR5Ojotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yLjVweDtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB9XG5cbiAgICAjc2NhbGUge1xuICAgICAgICBncmlkLWFyZWE6IDMgLyAyIC8gc3BhbiAxIC8gc3BhbiAxO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgY29sb3I6ICNkNGQ0ZDQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYXRvc2hpLW1lZGl1bSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cblxuICAgICNkcm9wZG93bi1wcm9qZWN0cyB7XG4gICAgICAgIGdyaWQtYXJlYTogNCAvIDEgLyBzcGFuIDEgLyBzcGFuIDI7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzViNWE1YTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMTQwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAjZHJvcGRvd24tcHJvamVjdHM6aG92ZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGU4YjhiO1xuICAgIH1cblxuICAgICNjbG9zZS10YXNrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDE0cHg7XG4gICAgICAgIHJpZ2h0OiAxNHB4O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICNjbG9zZS10YXNrOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNWI1YTVhO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgICNjbG9zZS10YXNrLWljb24ge1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICB9XG5cbiAgICAjY29uZmlybS1lZGl0LXRhc2sge1xuICAgICAgICBncmlkLWFyZWE6IDQgLyAyIC8gc3BhbiAxIC8gc3BhbiAxO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdjM2NhMTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhdG9zaGktbWVkaXVtLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICAjY29uZmlybS1lZGl0LXRhc2s6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWQ1ZGMyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cblxuICAgIC5lbXB0eSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICA+IGltZyB7XG4gICAgICAgIHdpZHRoOiAyNDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMzZweDtcbiAgICB9XG59XG5cbiN0YXNrLWRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDU1JSlcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RheS1wYWdlLXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw0Q0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLCtGQUErRjtBQUNuRzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLDJGQUEyRjtJQUMvRjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lB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dFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogc2F0b3NoaS1tZWRpdW07XFxuICAgIHNyYzogdXJsKC4vZm9udHMvU2F0b3NoaS1NZWRpdW0ub3RmKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIwMjA7XFxufVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIwO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG92ZXJmbG93OiBzY3JvbGw7XFxuICAgIHotaW5kZXg6IC0yO1xcbn1cXG5cXG4jdG9kYXktY29udGVudCB7XFxuICAgIG1pbi13aWR0aDogMzYwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdG9kYXktdGl0bGUge1xcbiAgICBwb3NpdGlvbjogZml4ZWRcXG59XFxuXFxuI2FkZC10YXNrLWNvbnRhaW5lcjpub3QoLnJlbW92ZWQpIHtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbiwgLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDAgMCAwIDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jYWRkLXRhc2stYnV0dG9uLWltZy1jb250YWluZXIsIC5hZGQtdGFzay1idXR0b24taW1nLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBjbGlwLXBhdGg6IGNpcmNsZSgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FkZC10YXNrLWJ1dHRvbi1pbWcge1xcbiAgICBmaWx0ZXI6IGludmVydCgzMiUpIHNlcGlhKDEwJSkgc2F0dXJhdGUoMjkwMiUpIGh1ZS1yb3RhdGUoMjQyZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTElKTtcXG59XFxuXFxuI2FkZC10YXNrLWxhYmVsLCAuYWRkLXRhc2stbGFiZWwge1xcbiAgICBjb2xvcjojOGU4YjhiO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNhZGQtdGFzay1idXR0b246aG92ZXIge1xcbiAgICAjYWRkLXRhc2stYnV0dG9uLWltZy1jb250YWluZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NDM4NDtcXG4gICAgfVxcblxcbiAgICAjYWRkLXRhc2stYnV0dG9uLWltZyB7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg5MiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxODVkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg4MCUpO1xcbiAgICB9XFxuXFxuICAgICNhZGQtdGFzay1sYWJlbCB7XFxuICAgICAgICBjb2xvcjogIzc3NDM4NDtcXG4gICAgfVxcbn1cXG5cXG4jaW5mby1tb2RhbDpub3QoLnJlbW92ZWQpIHtcXG4gICAgbWluLXdpZHRoOiAyNDBweDtcXG4gICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMTZweCAxNnB4O1xcbiAgICBib3JkZXI6IDAuNHB4IHNvbGlkICM4MzdlN2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXG4gICAgI3Rhc2stbmFtZSwgI2Rlc2NyaXB0aW9uLCAjcHJpb3JpdHksICNzZWxlY3QtcHJvamVjdCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG91dGxpbmU6IDBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBjYXJldC1jb2xvcjogI2Q0ZDRkNDtcXG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICB9XFxuXFxuICAgICN0YXNrLW5hbWUge1xcbiAgICAgICAgcGFkZGluZzogOHB4IDVweCAwIDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYXRvc2hpLW1lZGl1bSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG5cXG4gICAgI2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBoZWlnaHQ6IDh2aDtcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAwIDVweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcblxcbiAgICBociB7XFxuICAgICAgICBtYXJnaW46IDhweCAwO1xcbiAgICAgICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjODM3ZTdlO1xcbiAgICB9XFxuXFxuICAgICN0YXNrLWV4dHJhLWluZm8ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcblxcbiAgICAjcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDhweDtcXG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNwcmlvcml0eSwgI3NlbGVjdC1wcm9qZWN0IHtcXG4gICAgICAgIHBhZGRpbmc6IDNweDtcXG4gICAgICAgIGJvcmRlcjogMC40cHggc29saWQgIzgzN2U3ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgfVxcblxcbiAgICAjc2VsZWN0LXByb2plY3Qge1xcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgfVxcblxcbiAgICAjdGFzay1pbmZvLW1vZGFsLWJ1dHRvbnMgYnV0dG9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQzNDM7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgI3Rhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1YjVhNWE7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgICN0YXNrLWluZm8tbW9kYWwtYnV0dG9ucyBidXR0b25bZGlzYWJsZWRdIHtcXG4gICAgICAgIGNvbG9yOiNhNmE2YTY7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzMzMzO1xcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgfVxcblxcbiAgICAjdGFzay1pbmZvLW1vZGFsLWJ1dHRvbnMgYnV0dG9uW2Rpc2FibGVkXTpob3ZlciAjbWVzc2FnZSB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xcbiAgICAgICAgcGFkZGluZzogMCAycHg7XFxuICAgIH1cXG5cXG4gICAgI21lc3NhZ2Uge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGNvbG9yOiNkNGQ0ZDQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMDIwO1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzgzN2U3ZTtcXG4gICAgfVxcbn1cXG5cXG4jbm8tdGFzayB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MnB4O1xcbn1cXG5cXG4jbm8tdGFzay1pbWFnZSBpbWcge1xcbiAgICBtYXJnaW4tdG9wOiBjYWxjKDZ2aCk7XFxuICAgIHdpZHRoOiAyODBweDtcXG59XFxuXFxuI25vLXRhc2stdGV4dCB7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgMzJweCkgLyAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3RvZGF5LXRhc2stY29udGFpbmVyIHtcXG4gICAgcGFkZGluZy1yaWdodDogNDJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gICAgcm93LWdhcDogOHB4O1xcbiAgICBtYXJnaW4tdG9wOiA5NnB4O1xcbn1cXG5cXG4udGFzay1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDU0cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMjkyOTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNkM2MzYztcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDE1MG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFzayB7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlOiAyNXB4IDIwcHggLyA0MnB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGltZyB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xcbiAgICAgICAgdG9wOiAtNnB4O1xcbiAgICAgICAgbGVmdDogLTNweDtcXG4gICAgfVxcblxcbiAgICBpbWdbZGF0YS1wcmlvcml0eT1cXFwiMVxcXCJdIHtcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDM2JSkgc2VwaWEoNDUlKSBzYXR1cmF0ZSg3MTQlKSBodWUtcm90YXRlKDE1OGRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDkxJSk7XFxuICAgIH1cXG5cXG4gICAgaW1nW2RhdGEtcHJpb3JpdHk9XFxcIjJcXFwiXSB7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCgzMCUpIHNlcGlhKDc3JSkgc2F0dXJhdGUoNDQ2JSkgaHVlLXJvdGF0ZSgxMDBkZWcpIGJyaWdodG5lc3MoODklKSBjb250cmFzdCg4NiUpO1xcbiAgICB9XFxuXFxuICAgIGltZ1tkYXRhLXByaW9yaXR5PVxcXCIzXFxcIl0ge1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNjElKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDIwNzQlKSBodWUtcm90YXRlKDIxZGVnKSBicmlnaHRuZXNzKDg4JSkgY29udHJhc3QoODYlKTtcXG4gICAgfVxcblxcbiAgICBpbWdbZGF0YS1wcmlvcml0eT1cXFwiNFxcXCJdIHtcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDQxJSkgc2VwaWEoNjglKSBzYXR1cmF0ZSg0NDYlKSBodWUtcm90YXRlKDMzOWRlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDkxJSk7XFxuICAgIH1cXG5cXG4gICAgaW1nW2RhdGEtcHJpb3JpdHk9XFxcIjVcXFwiXSB7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCgxMiUpIHNlcGlhKDk1JSkgc2F0dXJhdGUoMjY4NyUpIGh1ZS1yb3RhdGUoMzQ5ZGVnKSBicmlnaHRuZXNzKDk0JSkgY29udHJhc3QoODUlKTtcXG4gICAgfVxcblxcbiAgICAucHJpb3JpdHkge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICB0b3A6IC0xMHB4O1xcbiAgICAgICAgbGVmdDogMTRweDtcXG4gICAgfVxcblxcbiAgICAuY2hlY2tib3gge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMSAvIHNwYW4gMiAvIHNwYW4gMTtcXG4gICAgICAgIHdpZHRoOiAyNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzgzN2U3ZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2stdGl0bGUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIHNwYW4gMSAvIHNwYW4gMTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gICAgfVxcblxcbiAgICAudGFzay1wcm9qZWN0LCAuZHVlLWRhdGUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIHNwYW4gMSAvIHNwYW4gMTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgICAgIGNvbG9yOiNhNmE2YTY7XFxuICAgIH1cXG59XFxuXFxuLmRlbGV0ZS10YXNrIHtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLXRhc2staWNvbiB7XFxuICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50YXNrLWNvbnRhaW5lcjpob3ZlcntcXG4gICAgYm9yZGVyLWNvbG9yOiAjODM3ZTdlO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgMTAwbXMgZWFzZS1pbi1vdXQ7XFxuXFxuICAgIC5kZWxldGUtdGFzay1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XFxuICAgIH1cXG59XFxuXFxuLmRlbGV0ZS10YXNrOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNoZWNrYm94W2RhdGEtY2hlY2tlZD1cXFwiZG9uZVxcXCJdIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5OWU0ZjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmNoZWNrYm94W2RhdGEtY2hlY2tlZD1cXFwiZG9uZVxcXCJdOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTJweDtcXG4gICAgbGVmdDogNDZweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGNvbG9yOiAjZDRkNGQ0O1xcbn1cXG5cXG4jdGFzay1kaWFsb2cge1xcbiAgICB3aWR0aDogNjglO1xcbiAgICBoZWlnaHQ6IDkwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjAyMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgzN2U3ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jdGFzay1kaWFsb2ctY29udGFpbmVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBwYWRkaW5nOiAyNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAjZWRpdC10YXNrLXRpdGxlLCAjZWRpdC10YXNrLWRlc2NyaXB0aW9uLCAjZWRpdC10YXNrLWR1ZS1kYXRlLCAjZWRpdC10YXNrLXByaW9yaXR5LCAjZHJvcGRvd24tcHJvamVjdHMge1xcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgIH1cXG5cXG4gICAgbGFiZWwsIGJ1dHRvbiB7XFxuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgfVxcblxcbiAgICAjZWRpdC10YXNrLXRpdGxlIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XFxuICAgICAgICB3aWR0aDogOTclO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhdG9zaGktbWVkaXVtLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIH1cXG5cXG4gICAgI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1jb250YWluZXIge1xcbiAgICAgICAgd2lkdGg6IDk3JTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICAgIH1cXG5cXG4gICAgI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pY29uIHtcXG4gICAgICAgIHdpZHRoOiAxNnB4O1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoNTIlKSBzZXBpYSg3JSkgc2F0dXJhdGUoMTY0JSkgaHVlLXJvdGF0ZSgzMTRkZWcpIGJyaWdodG5lc3MoOTQlKSBjb250cmFzdCg4OSUpO1xcbiAgICB9XFxuXFxuICAgICNlZGl0LXRhc2stZGVzY3JpcHRpb24taWNvbi5yZW1vdmVkIHtcXG4gICAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcXG4gICAgfVxcblxcbiAgICAjZWRpdC10YXNrLWRlc2NyaXB0aW9uIHtcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwdmg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgICNlZGl0LXRhc2stdGl0bGUsICNlZGl0LXRhc2stZGVzY3JpcHRpb24tY29udGFpbmVyLCAjZWRpdC10YXNrLWR1ZS1kYXRlLCAjZWRpdC10YXNrLXByaW9yaXR5IHtcXG4gICAgICAgIHBhZGRpbmc6IDRweCAzcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAxNDBtcyBlYXNlLWluLW91dDtcXG4gICAgfVxcblxcbiAgICAjZWRpdC10YXNrLXRpdGxlOmhvdmVyLCAjZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lcjpob3ZlciwgI2VkaXQtdGFzay1kdWUtZGF0ZTpob3ZlciwgI2VkaXQtdGFzay1wcmlvcml0eTpob3ZlciB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGU4YjhiO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDE0MG1zIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgICNvdGhlci10YXNrLWluZm8ge1xcbiAgICAgICAgd2lkdGg6IDk3JTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIDM2cHgpIC83OHB4IGF1dG87XFxuICAgICAgICByb3ctZ2FwOiA0cHg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICNlZGl0LXRhc2stZHVlLWRhdGUge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgICNlZGl0LXRhc2stZHVlLWRhdGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgICAgICBmaWx0ZXI6IGludmVydCg5OCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgyMzg4JSkgaHVlLXJvdGF0ZSgxODNkZWcpIGJyaWdodG5lc3MoMTA5JSkgY29udHJhc3QoNjYlKTtcXG4gICAgfVxcblxcbiAgICAjZWRpdC10YXNrLXByaW9yaXR5IHtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAjZWRpdC10YXNrLXByaW9yaXR5Ojotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGU4YjhiO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAgICAgaGVpZ2h0OiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgI2VkaXQtdGFzay1wcmlvcml0eTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGQ0ZDQ7XFxuICAgICAgICBtYXJnaW4tdG9wOiAtMi41cHg7XFxuICAgICAgICB3aWR0aDogMXJlbTtcXG4gICAgICAgIGhlaWdodDogMXJlbTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIH1cXG5cXG4gICAgI3NjYWxlIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDIgLyBzcGFuIDEgLyBzcGFuIDE7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgd2lkdGg6IDk1JTtcXG4gICAgICAgIG1hcmdpbi10b3A6IC00cHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgICAgICBmb250LWZhbWlseTogc2F0b3NoaS1tZWRpdW0sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIH1cXG5cXG4gICAgI2Ryb3Bkb3duLXByb2plY3RzIHtcXG4gICAgICAgIGdyaWQtYXJlYTogNCAvIDEgLyBzcGFuIDEgLyBzcGFuIDI7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1YjVhNWE7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMTQwbXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG5cXG4gICAgI2Ryb3Bkb3duLXByb2plY3RzOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ZThiOGI7XFxuICAgIH1cXG5cXG4gICAgI2Nsb3NlLXRhc2sge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAxNHB4O1xcbiAgICAgICAgcmlnaHQ6IDE0cHg7XFxuICAgICAgICB3aWR0aDogMzJweDtcXG4gICAgICAgIGhlaWdodDogMzJweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgICNjbG9zZS10YXNrOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzViNWE1YTtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgI2Nsb3NlLXRhc2staWNvbiB7XFxuICAgICAgICB3aWR0aDogMjRweDtcXG4gICAgfVxcblxcbiAgICAjY29uZmlybS1lZGl0LXRhc2sge1xcbiAgICAgICAgZ3JpZC1hcmVhOiA0IC8gMiAvIHNwYW4gMSAvIHNwYW4gMTtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2MzY2ExO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhdG9zaGktbWVkaXVtLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZS1pbi1vdXQ7XFxuICAgIH1cXG5cXG4gICAgI2NvbmZpcm0tZWRpdC10YXNrOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZDVkYzI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zIGVhc2UtaW4tb3V0O1xcbiAgICB9XFxuXFxuICAgIC5lbXB0eSB7XFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxuICAgIH1cXG5cXG4gICAgPiBpbWcge1xcbiAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNnB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTM2cHg7XFxuICAgIH1cXG59XFxuXFxuI3Rhc2stZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigwIDAgMCAvIDU1JSlcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjdXBjb21pbmctY29udGVudCB7XG4gICAgbWluLXdpZHRoOiAzNjBweDtcbiAgICBtYXJnaW4tbGVmdDogNDJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuI21vbnRoLXRpdGxlIHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgY29sb3I6ICNkNGQ0ZDQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICBmb250LWZhbWlseTogc2F0b3NoaS1tZWRpdW0sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4jdXBjb21pbmctY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOmZpdC1jb250ZW50O1xuICAgIGhlaWdodDogODB2aDtcbiAgICBtYXJnaW4tdG9wOiA4NHB4O1xufVxuXG4jb3ZlcmR1ZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgIHdpZHRoOiAyODBweDtcblxuICAgICNvdmVyZHVlLXRhc2tzIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDogOHB4O1xuXG4gICAgICAgIC50YXNrLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNhNzNkM2Q7XG4gICAgICAgIH1cblxuICAgICAgICAudGFzay1jb250YWluZXI6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjODM3ZTdlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4jb3ZlcmR1ZS5yZW1vdmVkIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG59XG5cbiNtb250aC1wYWdlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyNHB4O1xuXG4gICAgI3RvZGF5LCAjdG9tb3Jyb3csICN0aGlzLXdlZWssICN0aGlzLW1vbnRoIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xuICAgIH1cblxuICAgICN0b2RheS10YXNrcywgI3RvbW9ycm93LXRhc2tzLCAjdGhpcy13ZWVrLXRhc2tzLCAjdGhpcy1tb250aC10YXNrcyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgICAgICAudGFzay1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAub3ZlcmR1ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2E3M2QzZDtcbiAgICB9XG5cbiAgICAub3ZlcmR1ZTpob3ZlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzgzN2U3ZTtcbiAgICB9XG59XG5cbi5hZGQtdGFzay1idXR0b24taW1nW2FsdD1cIlBsdXNcIl0ge1xuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgyOTAyJSkgaHVlLXJvdGF0ZSgyNDJkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg5MSUpO1xufVxuXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcblxuICAgIC5hZGQtdGFzay1idXR0b24taW1nLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzQzODQ7XG4gICAgfVxuXG4gICAgLmFkZC10YXNrLWJ1dHRvbi1pbWcge1xuICAgICAgICBmaWx0ZXI6IGludmVydCg5MiUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgwJSkgaHVlLXJvdGF0ZSgxODVkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCg4MCUpO1xuICAgIH1cblxuICAgIC5hZGQtdGFzay1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAjNzc0Mzg0O1xuICAgIH1cbn1cblxuLnVwY29taW5nLXBhZ2UtdGFzay1pbmZvLW1vZGFsOm5vdCgucmVtb3ZlZCkge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzZweDtcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHggMTZweCAxNnB4O1xuICAgIGJvcmRlcjogMC40cHggc29saWQgIzgzN2U3ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAudGFzay1uYW1lLCAuZGVzY3JpcHRpb24sIC5wcmlvcml0eSwgLnNlbGVjdC1wcm9qZWN0LCAuZHVlLWRhdGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3V0bGluZTogMHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGNhcmV0LWNvbG9yOiAjZDRkNGQ0O1xuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICB9XG5cbiAgICAudGFzay1uYW1lIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDVweCAwIDVweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBmb250LWZhbWlseTogc2F0b3NoaS1tZWRpdW0sIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xuICAgIH1cblxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGhlaWdodDogOHZoO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAwIDVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgfVxuXG4gICAgaHIge1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICBib3JkZXI6IDAuMXB4IHNvbGlkICM4MzdlN2U7XG4gICAgfVxuXG4gICAgLmV4dHJhLXRhc2staW5mbyB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGdhcDo0cHg7XG4gICAgfVxuXG4gICAgLnByaW9yaXR5LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnByaW9yaXR5LCAuc2VsZWN0LXByb2plY3QsIC5kdWUtZGF0ZSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIGJvcmRlcjogMC40cHggc29saWQgIzgzN2U3ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgIC5kdWUtZGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoOTglKSBzZXBpYSgwJSkgc2F0dXJhdGUoMjM4OCUpIGh1ZS1yb3RhdGUoMTgzZGVnKSBicmlnaHRuZXNzKDEwOSUpIGNvbnRyYXN0KDY2JSk7XG4gICAgfVxuXG4gICAgLnRhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgY29sb3I6ICNkNGQ0ZDQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQzNDM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICAudGFzay1pbmZvLW1vZGFsLWJ1dHRvbnMgYnV0dG9uOmhvdmVyICwgI2NhbmNlbC1hZGQtc2VjdGlvbjpob3ZlciwgI2NvbmZpcm0tYWRkLXNlY3Rpb246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1YjVhNWE7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTQwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuXG4gICAgLnRhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjojYTZhNmE2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzMzMzO1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cblxuICAgIC50YXNrLWluZm8tbW9kYWwtYnV0dG9ucyBidXR0b25bZGlzYWJsZWRdOmhvdmVyIC5tZXNzYWdlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDJweDtcbiAgICB9XG5cbiAgICAubWVzc2FnZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6I2Q0ZDRkNDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjAyMDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzgzN2U3ZTtcbiAgICB9XG59XG5cbiNpbWFnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDM2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMjgwcHg7XG4gICAgXG4gICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00OHB4O1xuICAgIH1cblxuICAgIHotaW5kZXg6IC0xO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3VwY29taW5nLXBhZ2Utc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFFBQVE7O0lBRVI7UUFDSSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLG1LQUFtSztJQUN2Szs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZOztJQUVaO1FBQ0ksV0FBVztRQUNYLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsUUFBUTs7UUFFUjtZQUNJLHFCQUFxQjtRQUN6Qjs7UUFFQTtZQUNJLHFCQUFxQjtRQUN6QjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixTQUFTOztJQUVUO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixRQUFRO1FBQ1IsZ0JBQWdCOztRQUVoQjtZQUNJLGtCQUFrQjtRQUN0QjtJQUNKOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSwrRkFBK0Y7QUFDbkc7O0FBRUE7O0lBRUk7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSwyRkFBMkY7SUFDL0Y7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0o7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtCQUFrQjs7SUFFbEI7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLG1LQUFtSztJQUN2Szs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLE9BQU87SUFDWDs7SUFFQTtRQUNJLGFBQWE7UUFDYixRQUFRO1FBQ1IsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLFlBQVk7UUFDWiwyQkFBMkI7UUFDM0Isa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksK0ZBQStGO0lBQ25HOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHdCQUF3QjtRQUN4Qiw4Q0FBOEM7SUFDbEQ7O0lBRUE7UUFDSSxhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLHlCQUF5QjtRQUN6Qix5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZOztJQUVaO1FBQ0ksaUJBQWlCO1FBQ2pCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUEsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiN1cGNvbWluZy1jb250ZW50IHtcXG4gICAgbWluLXdpZHRoOiAzNjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDQycHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG5cXG4jbW9udGgtdGl0bGUge1xcbiAgICBwb3NpdGlvbjpmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA4cHg7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhdG9zaGktbWVkaXVtLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgICB3aWR0aDogMzIwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXFxuI3VwY29taW5nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOmZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIG1hcmdpbi10b3A6IDg0cHg7XFxufVxcblxcbiNvdmVyZHVlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogMjgwcHg7XFxuXFxuICAgICNvdmVyZHVlLXRhc2tzIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDhweDtcXG5cXG4gICAgICAgIC50YXNrLWNvbnRhaW5lciB7XFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYTczZDNkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICM4MzdlN2U7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI292ZXJkdWUucmVtb3ZlZCB7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcblxcbiNtb250aC1wYWdlIHtcXG4gICAgcGFkZGluZy1yaWdodDogNjRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyNHB4O1xcblxcbiAgICAjdG9kYXksICN0b21vcnJvdywgI3RoaXMtd2VlaywgI3RoaXMtbW9udGgge1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIHdpZHRoOiAyODBweDtcXG4gICAgfVxcblxcbiAgICAjdG9kYXktdGFza3MsICN0b21vcnJvdy10YXNrcywgI3RoaXMtd2Vlay10YXNrcywgI3RoaXMtbW9udGgtdGFza3Mge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogOHB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG5cXG4gICAgICAgIC50YXNrLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgLm92ZXJkdWUge1xcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYTczZDNkO1xcbiAgICB9XFxuXFxuICAgIC5vdmVyZHVlOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlci1jb2xvcjogIzgzN2U3ZTtcXG4gICAgfVxcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uLWltZ1thbHQ9XFxcIlBsdXNcXFwiXSB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDMyJSkgc2VwaWEoMTAlKSBzYXR1cmF0ZSgyOTAyJSkgaHVlLXJvdGF0ZSgyNDJkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg5MSUpO1xcbn1cXG5cXG4uYWRkLXRhc2stYnV0dG9uOmhvdmVyIHtcXG5cXG4gICAgLmFkZC10YXNrLWJ1dHRvbi1pbWctY29udGFpbmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzQzODQ7XFxuICAgIH1cXG5cXG4gICAgLmFkZC10YXNrLWJ1dHRvbi1pbWcge1xcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoOTIlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTg1ZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoODAlKTtcXG4gICAgfVxcblxcbiAgICAuYWRkLXRhc2stbGFiZWwge1xcbiAgICAgICAgY29sb3I6ICM3NzQzODQ7XFxuICAgIH1cXG59XFxuXFxuLnVwY29taW5nLXBhZ2UtdGFzay1pbmZvLW1vZGFsOm5vdCgucmVtb3ZlZCkge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzZweDtcXG4gICAgcGFkZGluZzogMTJweCAyNHB4IDE2cHggMTZweDtcXG4gICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjODM3ZTdlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuXFxuICAgIC50YXNrLW5hbWUsIC5kZXNjcmlwdGlvbiwgLnByaW9yaXR5LCAuc2VsZWN0LXByb2plY3QsIC5kdWUtZGF0ZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG91dGxpbmU6IDBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBjYXJldC1jb2xvcjogI2Q0ZDRkNDtcXG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICB9XFxuXFxuICAgIC50YXNrLW5hbWUge1xcbiAgICAgICAgcGFkZGluZzogOHB4IDVweCAwIDVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYXRvc2hpLW1lZGl1bSwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIH1cXG5cXG4gICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBoZWlnaHQ6IDh2aDtcXG4gICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAwIDVweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgfVxcblxcbiAgICBociB7XFxuICAgICAgICBtYXJnaW46IDhweCAwO1xcbiAgICAgICAgYm9yZGVyOiAwLjFweCBzb2xpZCAjODM3ZTdlO1xcbiAgICB9XFxuXFxuICAgIC5leHRyYS10YXNrLWluZm8ge1xcbiAgICAgICAgd2lkdGg6IDYwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOjRweDtcXG4gICAgfVxcblxcbiAgICAucHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDhweDtcXG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5wcmlvcml0eSwgLnNlbGVjdC1wcm9qZWN0LCAuZHVlLWRhdGUge1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogM3B4O1xcbiAgICAgICAgYm9yZGVyOiAwLjRweCBzb2xpZCAjODM3ZTdlO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICB9XFxuXFxuICAgIC5kdWUtZGF0ZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgICAgIGZpbHRlcjogaW52ZXJ0KDk4JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDIzODglKSBodWUtcm90YXRlKDE4M2RlZykgYnJpZ2h0bmVzcygxMDklKSBjb250cmFzdCg2NiUpO1xcbiAgICB9XFxuXFxuICAgIC50YXNrLWluZm8tbW9kYWwtYnV0dG9ucyBidXR0b24ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDM0MztcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgfVxcblxcbiAgICAudGFzay1pbmZvLW1vZGFsLWJ1dHRvbnMgYnV0dG9uOmhvdmVyICwgI2NhbmNlbC1hZGQtc2VjdGlvbjpob3ZlciwgI2NvbmZpcm0tYWRkLXNlY3Rpb246aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojNWI1YTVhO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcyBlYXNlLWluLW91dDtcXG4gICAgfVxcblxcbiAgICAudGFzay1pbmZvLW1vZGFsLWJ1dHRvbnMgYnV0dG9uW2Rpc2FibGVkXSB7XFxuICAgICAgICBjb2xvcjojYTZhNmE2O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MzMzMztcXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIH1cXG5cXG4gICAgLnRhc2staW5mby1tb2RhbC1idXR0b25zIGJ1dHRvbltkaXNhYmxlZF06aG92ZXIgLm1lc3NhZ2Uge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMnB4O1xcbiAgICB9XFxuXFxuICAgIC5tZXNzYWdlIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBjb2xvcjojZDRkNGQ0O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjAyMDtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4MzdlN2U7XFxuICAgIH1cXG59XFxuXFxuI2ltYWdlLWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAzNjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBcXG4gICAgaW1nIHtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xcbiAgICB9XFxuXFxuICAgIHAge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00OHB4O1xcbiAgICB9XFxuXFxuICAgIHotaW5kZXg6IC0xO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1wYWdlLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdC1wYWdlLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zaWRlYmFyLXN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc2lkZWJhci1zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kYXktcGFnZS1zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZGF5LXBhZ2Utc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3VwY29taW5nLXBhZ2Utc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi91cGNvbWluZy1wYWdlLXN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgUGx1c0ljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMuc3ZnXCI7XG5pbXBvcnQgV3JlbmNoIGZyb20gXCIuL2ltYWdlcy9oYW1tZXItd3JlbmNoLnN2Z1wiO1xuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiLi9pbWFnZXMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgQm9va21hcmsgZnJvbSBcIi4vaW1hZ2VzL2Jvb2ttYXJrLnN2Z1wiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vaW1hZ2VzL3RleHQuc3ZnXCI7XG5pbXBvcnQgTW91c2UgZnJvbSBcIi4vaW1hZ2VzL21vdXNlLnBuZ1wiO1xuaW1wb3J0IFdhbGtpbmdNb3VzZSBmcm9tIFwiLi9pbWFnZXMvd2Fsa2luZ21vdXNlLnBuZ1wiO1xuaW1wb3J0IHtcbiAgaXNUb2RheSxcbiAgaXNUb21vcnJvdyxcbiAgaXNUaGlzV2VlayxcbiAgaXNUaGlzTW9udGgsXG4gIGlzU2FtZU1vbnRoLFxuICBzdGFydE9mTW9udGgsXG4gIGVuZE9mV2VlayxcbiAgZW5kT2ZNb250aCxcbiAgZm9ybWF0LFxuICBhZGQsXG59IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBoaWRlRWxlbWVudHMgPSBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59O1xuXG5jb25zdCByZXZlYWxFbGVtZW50cyA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmVkXCIpO1xufTtcblxuY29uc3QgcmVtb3ZlRWxlbWVudHMgPSBmdW5jdGlvbihjb250YWluZXIpIHtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmVkXCIpO1xufTtcblxuY29uc3QgY2hhbmdlU2lkZWJhckhpZ2hsaWdodCA9IGZ1bmN0aW9uKGhpZ2hsaWdodGVkRWxlbWVudCkge1xuICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudVwiKSkuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWdobGlnaHRlZFwiKSxcbiAgKTtcbiAgaGlnaGxpZ2h0ZWRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiKTtcbn07XG5cbmNvbnN0IGxvYWRUYXNrc0J5RGF0ZSA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgZmlsdGVyLCBjb21wYXJpc29uKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBUYXNrTWFuYWdlci5maWx0ZXJUYXNrQnlEYXRlKGZpbHRlciwgY29tcGFyaXNvbikuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lclwiIGRhdGEtdGFzaz5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJjaGVja2JveFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBkYXRhLXByaW9yaXR5PVwiJHt0YXNrLnByaW9yaXR5fVwiIHNyYz1cIiR7Qm9va21hcmt9XCIgLz5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cInByaW9yaXR5XCI+JHt0YXNrLnByaW9yaXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cInRhc2stcHJvamVjdFwiPlxuICAgICAgICAgICAgICAgICAgICAke1Rhc2tNYW5hZ2VyLmdldFRhc2tQcm9qZWN0QW5kU2VjdGlvbih0YXNrKS5wcm9qZWN0TmFtZSA9PT0gXCJwcm9qZWN0bGVzc1wiID8gXCJObyBwcm9qZWN0XCIgOiBUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykucHJvamVjdE5hbWV9JHtUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykuc2VjdGlvbk5hbWUgPT09IFwic2VjdGlvbmxlc3NcIiA/IFwiXCIgOiBcIiAmbWlkZG90IFwiICsgVGFza01hbmFnZXIuZ2V0VGFza1Byb2plY3RBbmRTZWN0aW9uKHRhc2spLnNlY3Rpb25OYW1lfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrLWljb25cIiBzcmM9XCIke0Nsb3NlSWNvbn1cIiBhbHQ9XCJEZWxldGVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgaWYgKHRhc2suc3RhdHVzID09PSBcImRvbmVcIikge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCJdW2NsYXNzfj1cImNoZWNrYm94XCJdYClcbiAgICAgICAgLnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiLCBcImRvbmVcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRTb3J0ZWRUYXNrc0J5RGF0ZSA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgZmlsdGVyLCBjb21wYXJpc29uKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCBzb3J0ZWRUYXNrcyA9IFRhc2tNYW5hZ2VyLnNvcnRUYXNrQnlEYXRlKFxuICAgIFRhc2tNYW5hZ2VyLmZpbHRlclRhc2tCeURhdGUoZmlsdGVyLCBjb21wYXJpc29uKSxcbiAgKTtcbiAgY29uc3Qgb3ZlcmR1ZVRhc2tzID0gVGFza01hbmFnZXIuZmlsdGVyT3ZlcmR1ZVRhc2tzKHNvcnRlZFRhc2tzKTtcbiAgY29uc3Qgbm90T3ZlcmR1ZVRhc2tzID0gVGFza01hbmFnZXIuZmlsdGVyTm90T3ZlcmR1ZVRhc2tzKHNvcnRlZFRhc2tzKTtcblxuICBvdmVyZHVlVGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lciBvdmVyZHVlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwiY2hlY2tib3hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgZGF0YS1wcmlvcml0eT1cIiR7dGFzay5wcmlvcml0eX1cIiBzcmM9XCIke0Jvb2ttYXJrfVwiIC8+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJwcmlvcml0eVwiPiR7dGFzay5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJ0YXNrLXByb2plY3QgZHVlLWRhdGVcIj4ke2Zvcm1hdCh0YXNrLmR1ZURhdGUsIFwiZCBNTU1cIil9LCAke1Rhc2tNYW5hZ2VyLmdldFRhc2tQcm9qZWN0QW5kU2VjdGlvbih0YXNrKS5wcm9qZWN0TmFtZSA9PT0gXCJwcm9qZWN0bGVzc1wiID8gXCJObyBwcm9qZWN0XCIgOiBUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykucHJvamVjdE5hbWV9JHtUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykuc2VjdGlvbk5hbWUgPT09IFwic2VjdGlvbmxlc3NcIiA/IFwiXCIgOiBcIiAmbWlkZG90IFwiICsgVGFza01hbmFnZXIuZ2V0VGFza1Byb2plY3RBbmRTZWN0aW9uKHRhc2spLnNlY3Rpb25OYW1lfTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrLWljb25cIiBzcmM9XCIke0Nsb3NlSWNvbn1cIiBhbHQ9XCJEZWxldGVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH0pO1xuXG4gIG5vdE92ZXJkdWVUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwiY2hlY2tib3hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgZGF0YS1wcmlvcml0eT1cIiR7dGFzay5wcmlvcml0eX1cIiBzcmM9XCIke0Jvb2ttYXJrfVwiIC8+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJwcmlvcml0eVwiPiR7dGFzay5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJ0YXNrLXByb2plY3QgZHVlLWRhdGVcIj4ke2Zvcm1hdCh0YXNrLmR1ZURhdGUsIFwiZCBNTU1cIil9LCAke1Rhc2tNYW5hZ2VyLmdldFRhc2tQcm9qZWN0QW5kU2VjdGlvbih0YXNrKS5wcm9qZWN0TmFtZSA9PT0gXCJwcm9qZWN0bGVzc1wiID8gXCJObyBwcm9qZWN0XCIgOiBUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykucHJvamVjdE5hbWV9JHtUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykuc2VjdGlvbk5hbWUgPT09IFwic2VjdGlvbmxlc3NcIiA/IFwiXCIgOiBcIiAmbWlkZG90IFwiICsgVGFza01hbmFnZXIuZ2V0VGFza1Byb2plY3RBbmRTZWN0aW9uKHRhc2spLnNlY3Rpb25OYW1lfTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrLWljb25cIiBzcmM9XCIke0Nsb3NlSWNvbn1cIiBhbHQ9XCJEZWxldGVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgaWYgKHRhc2suc3RhdHVzID09PSBcImRvbmVcIikge1xuICAgICAgQXJyYXkuZnJvbShcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICBgW2RhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIl1bY2xhc3N+PVwiY2hlY2tib3hcIl1gLFxuICAgICAgICApLFxuICAgICAgKS5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrZWRcIiwgXCJkb25lXCIpKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZE92ZXJkdWVTb3J0ZWRUYXNrc0J5RGF0ZSA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3Qgb3ZlcmR1ZVRhc2tzID0gVGFza01hbmFnZXIuZmlsdGVyT3ZlcmR1ZVRhc2tzKFRhc2tNYW5hZ2VyLmFsbFRhc2tzWzBdKTtcbiAgY29uc3Qgc29ydGVkT3ZlcmR1ZVRhc2tzID0gVGFza01hbmFnZXIuc29ydFRhc2tCeURhdGUob3ZlcmR1ZVRhc2tzKTtcbiAgc29ydGVkT3ZlcmR1ZVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGNsYXNzPVwidGFzay1jb250YWluZXJcIiBkYXRhLXRhc2s+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwidGFza1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwiY2hlY2tib3hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cInRhc2stdGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgZGF0YS1wcmlvcml0eT1cIiR7dGFzay5wcmlvcml0eX1cIiBzcmM9XCIke0Jvb2ttYXJrfVwiIC8+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJwcmlvcml0eVwiPiR7dGFzay5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJ0YXNrLXByb2plY3QgZHVlLWRhdGVcIj4ke2Zvcm1hdCh0YXNrLmR1ZURhdGUsIFwiZCBNTU1cIil9LCAke1Rhc2tNYW5hZ2VyLmdldFRhc2tQcm9qZWN0QW5kU2VjdGlvbih0YXNrKS5wcm9qZWN0TmFtZSA9PT0gXCJwcm9qZWN0bGVzc1wiID8gXCJObyBwcm9qZWN0XCIgOiBUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykucHJvamVjdE5hbWV9JHtUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykuc2VjdGlvbk5hbWUgPT09IFwic2VjdGlvbmxlc3NcIiA/IFwiXCIgOiBcIiAmbWlkZG90IFwiICsgVGFza01hbmFnZXIuZ2V0VGFza1Byb2plY3RBbmRTZWN0aW9uKHRhc2spLnNlY3Rpb25OYW1lfTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrLWljb25cIiBzcmM9XCIke0Nsb3NlSWNvbn1cIiBhbHQ9XCJEZWxldGVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH0pO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RzVG9TaWRlYmFyID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMjsgaSA8IFRhc2tNYW5hZ2VyLmFsbFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgZGF0YS1wcm9qZWN0LW5hbWU9XCIke1Rhc2tNYW5hZ2VyLmFsbFRhc2tzW2ldLnByb2plY3ROYW1lfVwiIGNsYXNzPVwibWVudSBzaWRlYmFyLXByb2plY3RcIj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1wcm9qZWN0LW5hbWU9XCIke1Rhc2tNYW5hZ2VyLmFsbFRhc2tzW2ldLnByb2plY3ROYW1lfVwiIGNsYXNzPVwibWVudSBzaWRlYmFyLXByb2plY3QtbmFtZVwiPlxuICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1wcm9qZWN0LW5hbWU9XCIke1Rhc2tNYW5hZ2VyLmFsbFRhc2tzW2ldLnByb2plY3ROYW1lfVwiIHNyYz0ke1dyZW5jaH0gYWx0PVwiUHJvamVjdFwiPlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtcHJvamVjdC1uYW1lPVwiJHtUYXNrTWFuYWdlci5hbGxUYXNrc1tpXS5wcm9qZWN0TmFtZX1cIj4ke1Rhc2tNYW5hZ2VyLmFsbFRhc2tzW2ldLnByb2plY3ROYW1lfTxwPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtcHJvamVjdC1uYW1lPVwiJHtUYXNrTWFuYWdlci5hbGxUYXNrc1tpXS5wcm9qZWN0TmFtZX1cIiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0XCI+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLXByb2plY3QtbmFtZT1cIiR7VGFza01hbmFnZXIuYWxsVGFza3NbaV0ucHJvamVjdE5hbWV9XCIgc3JjPVwiJHtDbG9zZUljb259XCIgYWx0PVwiRGVsZXRlXCIgY2xhc3M9XCJkZWxldGUtcHJvamVjdC1pY29uXCI+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxufTtcblxuY29uc3QgbG9hZFByb2plY3RzVG9Ecm9wZG93biA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgdGFzaykge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxuICAgICAgICA8b3B0aW9uIGRhdGEtcHJvamVjdC1uYW1lPVwicHJvamVjdGxlc3NcIiBkYXRhLXNlY3Rpb24tbmFtZT1cInNlY3Rpb25sZXNzXCIgY2xhc3M9XCJkcm9wZG93bi1wcm9qZWN0LW5hbWVcIj5ObyBwcm9qZWN0czwvb3B0aW9uPlxuICAgIGA7XG4gIGZvciAobGV0IGkgPSAyOyBpIDwgVGFza01hbmFnZXIuYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPG9wdGlvbiBkYXRhLXByb2plY3QtbmFtZT1cIiR7VGFza01hbmFnZXIuYWxsVGFza3NbaV0ucHJvamVjdE5hbWV9XCIgZGF0YS1zZWN0aW9uLW5hbWU9XCJzZWN0aW9ubGVzc1wiIGNsYXNzPVwiZHJvcGRvd24tcHJvamVjdC1uYW1lXCI+JHtUYXNrTWFuYWdlci5hbGxUYXNrc1tpXS5wcm9qZWN0TmFtZX08L29wdGlvbj5cbiAgICAgICAgYDtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8IFRhc2tNYW5hZ2VyLmFsbFRhc2tzW2ldLnNlY3Rpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxvcHRpb24gZGF0YS1wcm9qZWN0LW5hbWU9XCIke1Rhc2tNYW5hZ2VyLmFsbFRhc2tzW2ldLnByb2plY3ROYW1lfVwiIGRhdGEtc2VjdGlvbi1uYW1lPVwiJHtUYXNrTWFuYWdlci5hbGxUYXNrc1tpXS5zZWN0aW9uc1tqXS5zZWN0aW9uTmFtZX1cIiBjbGFzcz1cImRyb3Bkb3duLXNlY3Rpb24tbmFtZVwiPiZuYnNwICYjeDI1QjggJHtUYXNrTWFuYWdlci5hbGxUYXNrc1tpXS5zZWN0aW9uc1tqXS5zZWN0aW9uTmFtZX08L29wdGlvbj5cbiAgICAgICAgICAgIGA7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRhc2spIHtcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgIFwiLmRyb3Bkb3duLXByb2plY3QtbmFtZSwgLmRyb3Bkb3duLXNlY3Rpb24tbmFtZVwiLFxuICAgICk7XG4gICAgQXJyYXkuZnJvbShvcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgb3B0aW9uLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIpID09PVxuICAgICAgICAgIFRhc2tNYW5hZ2VyLmdldFRhc2tQcm9qZWN0QW5kU2VjdGlvbih0YXNrKS5wcm9qZWN0TmFtZSAmJlxuICAgICAgICBvcHRpb24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWN0aW9uLW5hbWVcIikgPT09XG4gICAgICAgICAgVGFza01hbmFnZXIuZ2V0VGFza1Byb2plY3RBbmRTZWN0aW9uKHRhc2spLnNlY3Rpb25OYW1lXG4gICAgICApIHtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInNlbGVjdGVkXCIsIHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBsb2FkVGFza3NCeVNlY3Rpb24gPSBmdW5jdGlvbihjb250YWluZXIsIHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3Qgc29ydGVkVGFza3MgPSBUYXNrTWFuYWdlci5zb3J0VGFza0J5RGF0ZShcbiAgICBUYXNrTWFuYWdlci5maWx0ZXJUYXNrQnlTZWN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSksXG4gICk7XG4gIGNvbnN0IG92ZXJkdWVUYXNrcyA9IFRhc2tNYW5hZ2VyLmZpbHRlck92ZXJkdWVUYXNrcyhzb3J0ZWRUYXNrcyk7XG4gIGNvbnN0IG5vdE92ZXJkdWVUYXNrcyA9IFRhc2tNYW5hZ2VyLmZpbHRlck5vdE92ZXJkdWVUYXNrcyhzb3J0ZWRUYXNrcyk7XG4gIG92ZXJkdWVUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBjbGFzcz1cInRhc2stY29udGFpbmVyIG92ZXJkdWVcIj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJjaGVja2JveFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBkYXRhLXByaW9yaXR5PVwiJHt0YXNrLnByaW9yaXR5fVwiIHNyYz1cIiR7Qm9va21hcmt9XCIgLz5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cInByaW9yaXR5XCI+JHt0YXNrLnByaW9yaXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImR1ZS1kYXRlXCI+JHtmb3JtYXQodGFzay5kdWVEYXRlLCBcImQgTU1NXCIpfTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrLWljb25cIiBzcmM9XCIke0Nsb3NlSWNvbn1cIiBhbHQ9XCJEZWxldGVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgaWYgKHRhc2suc3RhdHVzID09PSBcImRvbmVcIikge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCJdW2NsYXNzfj1cImNoZWNrYm94XCJdYClcbiAgICAgICAgLnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiLCBcImRvbmVcIik7XG4gICAgfVxuICB9KTtcbiAgbm90T3ZlcmR1ZVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGNsYXNzPVwidGFzay1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCIgY2xhc3M9XCJjaGVja2JveFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgZGF0YS10YXNrLWlkPVwiJHt0YXNrLmlkfVwiIGNsYXNzPVwidGFzay10aXRsZVwiPiR7dGFzay50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBkYXRhLXByaW9yaXR5PVwiJHt0YXNrLnByaW9yaXR5fVwiIHNyYz1cIiR7Qm9va21hcmt9XCIgLz5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cInByaW9yaXR5XCI+JHt0YXNrLnByaW9yaXR5fTwvcD5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImR1ZS1kYXRlXCI+JHtmb3JtYXQodGFzay5kdWVEYXRlLCBcImQgTU1NXCIpfTwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrXCI+XG4gICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBjbGFzcz1cImRlbGV0ZS10YXNrLWljb25cIiBzcmM9XCIke0Nsb3NlSWNvbn1cIiBhbHQ9XCJEZWxldGVcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gICAgaWYgKHRhc2suc3RhdHVzID09PSBcImRvbmVcIikge1xuICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhc2staWQ9XCIke3Rhc2suaWR9XCJdW2NsYXNzfj1cImNoZWNrYm94XCJdYClcbiAgICAgICAgLnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiLCBcImRvbmVcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRTZWN0aW9ucyA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgcHJvamVjdE5hbWUpIHtcbiAgbGV0IHNlY3Rpb25zID0gVGFza01hbmFnZXIuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2VjdGlvbnM7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCArPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1zZWN0aW9uLW5hbWU9XCIke3NlY3Rpb25zW2ldLnNlY3Rpb25OYW1lfVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3NlY3Rpb25zW2ldLnNlY3Rpb25OYW1lfVwiIGNsYXNzPVwic2VjdGlvbi1uYW1lXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgY2xhc3M9XCJkZWxldGUtc2VjdGlvbi1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgc3JjPVwiJHtDbG9zZUljb259XCIgYWx0PVwiQ2xvc2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX1cIiBjbGFzcz1cInRhc2tzXCI+PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1zZWN0aW9uLW5hbWU9XCIke3NlY3Rpb25zW2ldLnNlY3Rpb25OYW1lfVwiIGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX1cIiBjbGFzcz1cImFkZC10YXNrLWJ1dHRvbi1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgc3JjPSR7UGx1c0ljb259IGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uLWltZ1wiIGFsdD1cIlBsdXNcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX1cIiBjbGFzcz1cImFkZC10YXNrLWxhYmVsXCI+QWRkIHRhc2s8L3A+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgY2xhc3M9XCJwcm9qZWN0LXBhZ2UtdGFzay1pbmZvLW1vZGFsIHJlbW92ZWRcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgY2xhc3M9XCJ0YXNrLW5hbWVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX1cIiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgY2xhc3M9XCJleHRyYS10YXNrLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgY2xhc3M9XCJwcmlvcml0eS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgY2xhc3M9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIjFcIiBtaW49XCIxXCIgbWF4PVwiNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX1cIiBjbGFzcz1cImR1ZS1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Zm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKX1cIiBtaW49XCIke2Zvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIil9XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX1cIiBjbGFzcz1cInRhc2staW5mby1tb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1zZWN0aW9uLW5hbWU9XCIke3NlY3Rpb25zW2ldLnNlY3Rpb25OYW1lfVwiIGNsYXNzPVwiY29uZmlybS1hZGQtdGFza1wiIGRpc2FibGVkPk9LPGRpdiBkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCIgY2xhc3M9XCJtZXNzYWdlXCI+PC9kaXY+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1zZWN0aW9uLW5hbWU9XCIke3NlY3Rpb25zW2ldLnNlY3Rpb25OYW1lfVwiIGNsYXNzPVwiY2FuY2VsLWFkZC10YXNrXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cInRhc2tzXCJdYCxcbiAgICApO1xuICAgIGxvYWRUYXNrc0J5U2VjdGlvbih0YXNrQ29udGFpbmVyLCBwcm9qZWN0TmFtZSwgc2VjdGlvbnNbaV0uc2VjdGlvbk5hbWUpO1xuICB9XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgPHA+Tm8gc2VjdGlvbjwvcD5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zZWN0aW9uLW5hbWU9XCJzZWN0aW9ubGVzc1wiIGNsYXNzPVwidGFza3NcIj48L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cInNlY3Rpb25sZXNzXCIgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1zZWN0aW9uLW5hbWU9XCJzZWN0aW9ubGVzc1wiIGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwic2VjdGlvbmxlc3NcIiBzcmM9JHtQbHVzSWNvbn0gYWx0PVwiUGx1c1wiIGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uLWltZ1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1zZWN0aW9uLW5hbWU9XCJzZWN0aW9ubGVzc1wiIGNsYXNzPVwiYWRkLXRhc2stbGFiZWxcIj5BZGQgdGFzazwvcD5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwic2VjdGlvbmxlc3NcIiBjbGFzcz1cInByb2plY3QtcGFnZS10YXNrLWluZm8tbW9kYWwgcmVtb3ZlZFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwic2VjdGlvbmxlc3NcIiBjbGFzcz1cInRhc2stbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8aHIgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1zZWN0aW9uLW5hbWU9XCJzZWN0aW9ubGVzc1wiIGNsYXNzPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwic2VjdGlvbmxlc3NcIiBjbGFzcz1cImV4dHJhLXRhc2staW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cInNlY3Rpb25sZXNzXCIgY2xhc3M9XCJwcmlvcml0eS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtc2VjdGlvbi1uYW1lPVwic2VjdGlvbmxlc3NcIiBjbGFzcz1cInByaW9yaXR5XCIgdHlwZT1cIm51bWJlclwiIHZhbHVlPVwiMVwiIG1pbj1cIjFcIiBtYXg9XCI1XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cInNlY3Rpb25sZXNzXCIgY2xhc3M9XCJkdWUtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2Zvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIil9XCIgbWluPVwiJHtmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpfVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1zZWN0aW9uLW5hbWU9XCJzZWN0aW9ubGVzc1wiIGNsYXNzPVwidGFzay1pbmZvLW1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cInNlY3Rpb25sZXNzXCIgY2xhc3M9XCJjb25maXJtLWFkZC10YXNrXCIgZGlzYWJsZWQ+T0s8ZGl2IGRhdGEtc2VjdGlvbi1uYW1lPVwic2VjdGlvbmxlc3NcIiBjbGFzcz1cIm1lc3NhZ2VcIj48L2Rpdj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLXNlY3Rpb24tbmFtZT1cInNlY3Rpb25sZXNzXCIgY2xhc3M9XCJjYW5jZWwtYWRkLXRhc2tcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIGxvYWRUYXNrc0J5U2VjdGlvbihcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zZWN0aW9uLW5hbWU9XCJzZWN0aW9ubGVzc1wiXVtjbGFzc349XCJ0YXNrc1wiXWApLFxuICAgIHByb2plY3ROYW1lLFxuICAgIFwic2VjdGlvbmxlc3NcIixcbiAgKTtcbn07XG5cbmNvbnN0IG9wZW5UYXNrID0gZnVuY3Rpb24odGFzaykge1xuICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRpYWxvZ1wiKTtcbiAgY29uc3QgdGFza0RpYWxvZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1kaWFsb2ctY29udGFpbmVyXCIpO1xuICB0YXNrRGlhbG9nQ29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGlucHV0IGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgdHlwZT1cInRleHRcIiBzdHlsZT1cInBvc2l0aW9uOmZpeGVkOyBsZWZ0OiAtMTAwMDAwMDAwMDAwcHhcIiAvPlxuICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiB0eXBlPVwidGV4dFwiIGlkPVwiZWRpdC10YXNrLXRpdGxlXCIgdmFsdWU9XCIke3Rhc2sudGl0bGV9XCIgLz5cbiAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGlkPVwiZWRpdC10YXNrLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8aW1nIGRhdGEtb3Blbj1cInRhc2stZGlhbG9nXCIgc3JjPVwiJHtUZXh0fVwiIGFsdD1cIlRleHRcIiBpZD1cImVkaXQtdGFzay1kZXNjcmlwdGlvbi1pY29uXCIgY2xhc3M9XCJyZW1vdmVkXCIvPlxuICAgICAgICA8dGV4dGFyZWEgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBpZD1cImVkaXQtdGFzay1kZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIj4ke3Rhc2suZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBpZD1cIm90aGVyLXRhc2staW5mb1wiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtdGFzay1kdWUtZGF0ZVwiPkR1ZSBkYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiB0eXBlPVwiZGF0ZVwiIGlkPVwiZWRpdC10YXNrLWR1ZS1kYXRlXCIgdmFsdWU9XCIke2Zvcm1hdCh0YXNrLmR1ZURhdGUsIFwieXl5eS1NTS1kZFwiKX1cIiBtaW49XCIke2Zvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIil9XCIvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtdGFzay1wcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiB0eXBlPVwicmFuZ2VcIiBpZD1cImVkaXQtdGFzay1wcmlvcml0eVwiIHZhbHVlPVwiJHt0YXNrLnByaW9yaXR5fVwiIG1pbj1cIjFcIiBtYXg9XCI1XCIgLz5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzY2FsZVwiPjxkaXY+MTwvZGl2PjxkaXY+MjwvZGl2PjxkaXY+MzwvZGl2PjxkaXY+NDwvZGl2PjxkaXY+NTwvZGl2PjwvZGl2PlxuICAgICAgICAgICAgPHNlbGVjdCBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGRhdGEtdGFzay1pZD1cIiR7dGFzay5pZH1cIiBpZD1cImRyb3Bkb3duLXByb2plY3RzXCI+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBpZD1cImNvbmZpcm0tZWRpdC10YXNrXCI+T0s8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwidGFzay1kaWFsb2dcIiBpZD1cImNsb3NlLXRhc2tcIj5cbiAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuXCJ0YXNrLWRpYWxvZ1wiIGlkPVwiY2xvc2UtdGFzay1pY29uXCIgc3JjPVwiJHtDbG9zZUljb259XCIgYWx0PVwiQ2xvc2VcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJ0YXNrLWRpYWxvZ1wiIGNsYXNzPVwiZW1wdHlcIj48L2Rpdj5cbiAgICAgICAgPGltZyBzcmM9XCIke01vdXNlfVwiIC8+XG4gIGA7XG5cbiAgY29uc3QgZWRpdFRhc2tEZXNjcmlwdGlvbkljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2VkaXQtdGFzay1kZXNjcmlwdGlvbi1pY29uXCIsXG4gICk7XG4gIGNvbnN0IGVkaXRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1kZXNjcmlwdGlvblwiKTtcbiAgbG9hZFByb2plY3RzVG9Ecm9wZG93bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duLXByb2plY3RzXCIpLCB0YXNrKTtcbiAgdGFza0RpYWxvZy5zaG93TW9kYWwoKTtcblxuICBlZGl0VGFza0Rlc2NyaXB0aW9uSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cbiAgICBlZGl0VGFza0Rlc2NyaXB0aW9uLmZvY3VzKCksXG4gICk7XG4gIGlmIChlZGl0VGFza0Rlc2NyaXB0aW9uLnZhbHVlID09PSBcIlwiKSB7XG4gICAgcmV2ZWFsRWxlbWVudHMoZWRpdFRhc2tEZXNjcmlwdGlvbkljb24pO1xuICB9XG5cbiAgZWRpdFRhc2tEZXNjcmlwdGlvbi5zdHlsZS5oZWlnaHQgPVxuICAgIGVkaXRUYXNrRGVzY3JpcHRpb24uc2Nyb2xsSGVpZ2h0ICsgMyArIFwicHhcIjtcbiAgZWRpdFRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgIGlmIChlZGl0VGFza0Rlc2NyaXB0aW9uLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICByZW1vdmVFbGVtZW50cyhlZGl0VGFza0Rlc2NyaXB0aW9uSWNvbik7XG4gICAgfSBlbHNlIHJldmVhbEVsZW1lbnRzKGVkaXRUYXNrRGVzY3JpcHRpb25JY29uKTtcbiAgICBlZGl0VGFza0Rlc2NyaXB0aW9uLnN0eWxlLmhlaWdodCA9IFwiXCI7XG4gICAgZWRpdFRhc2tEZXNjcmlwdGlvbi5zdHlsZS5oZWlnaHQgPVxuICAgICAgZWRpdFRhc2tEZXNjcmlwdGlvbi5zY3JvbGxIZWlnaHQgKyAzICsgXCJweFwiO1xuICB9KTtcblxuICBlbmFibGVDbG9zZVRhc2sodGFza0RpYWxvZyk7XG4gIGVuYWJsZUNsaWNrT3V0KHRhc2tEaWFsb2cpO1xufTtcblxuY29uc3QgZW5hYmxlQ2xpY2tPdXQgPSBmdW5jdGlvbih0YXNrRGlhbG9nKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wZW5cIikgIT09IFwidGFzay1kaWFsb2dcIikge1xuICAgICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBlbmFibGVDbG9zZVRhc2sgPSBmdW5jdGlvbih0YXNrRGlhbG9nKSB7XG4gIGNvbnN0IGNsb3NlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtdGFza1wiKTtcbiAgY2xvc2VUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0RpYWxvZy5jbG9zZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGxvYWRDdXJyZW50TW9udGggPSBmdW5jdGlvbih0b2RheSkge1xuICBjb25zdCB0b21vcnJvdyA9IGZvcm1hdChhZGQodG9kYXksIHsgZGF5czogMSB9KSwgXCJ5eXl5LU1NLWRkXCIpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXktY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwY29taW5nLWNvbnRlbnRcIikuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGlkPVwibW9udGgtdGl0bGVcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aW91cy1tb250aFwiPjw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT4ke2Zvcm1hdCh0b2RheSwgXCJNTU1NIHl5eXlcIil9PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJuZXh0LW1vbnRoXCI+PjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInVwY29taW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJkdWVcIj5cbiAgICAgICAgICAgICAgICA8cD5PdmVyZHVlPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVyZHVlLXRhc2tzXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb250aC1wYWdlXCIgZGF0YS1tb250aD1cIiR7Zm9ybWF0KHRvZGF5LCBcIk1NTU0geXl5eVwiKX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidG9kYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+JHtmb3JtYXQodG9kYXksIFwiZCBNTU1cIil9ICZtaWRkb3QgVG9kYXk8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b2RheS10YXNrc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9kYXl9XCIgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHt0b2RheX1cIiBjbGFzcz1cImFkZC10YXNrLWJ1dHRvbi1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvZGF5fVwiIHNyYz0ke1BsdXNJY29ufSBjbGFzcz1cImFkZC10YXNrLWJ1dHRvbi1pbWdcIiBhbHQ9XCJQbHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9kYXl9XCIgY2xhc3M9XCJhZGQtdGFzay1sYWJlbFwiPkFkZCB0YXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvZGF5fVwiIGNsYXNzPVwidXBjb21pbmctcGFnZS10YXNrLWluZm8tbW9kYWwgcmVtb3ZlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHt0b2RheX1cIiBjbGFzcz1cInRhc2stbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiBhdXRvY29tcGxldGU9XCJvZmZcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9kYXl9XCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBhdXRvY29tcGxldGU9XCJvZmZcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHt0b2RheX1cIiBjbGFzcz1cImV4dHJhLXRhc2staW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9kYXl9XCIgY2xhc3M9XCJwcmlvcml0eS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9kYXl9XCIgY2xhc3M9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbWF4PVwiNVwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9kYXl9XCIgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBjbGFzcz1cInNlbGVjdC1wcm9qZWN0XCI+PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvZGF5fVwiIGNsYXNzPVwidGFzay1pbmZvLW1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvZGF5fVwiIGRpc2FibGVkIGNsYXNzPVwiY29uZmlybS1hZGQtdGFza1wiPk9LPGRpdiBkYXRhLWR1ZS1kYXRlPVwiJHt0b2RheX1cIiBjbGFzcz1cIm1lc3NhZ2VcIj48L2Rpdj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvZGF5fVwiIGNsYXNzPVwiY2FuY2VsLWFkZC10YXNrXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b21vcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8cD4ke2Zvcm1hdCh0b21vcnJvdywgXCJkIE1NTVwiKX0gJm1pZGRvdCBUb21vcnJvdzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRvbW9ycm93LXRhc2tzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHt0b21vcnJvd31cIiBjbGFzcz1cImFkZC10YXNrLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvbW9ycm93fVwiIGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uLWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9tb3Jyb3d9XCIgc3JjPSR7UGx1c0ljb259IGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uLWltZ1wiIGFsdD1cIlBsdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9tb3Jyb3d9XCIgY2xhc3M9XCJhZGQtdGFzay1sYWJlbFwiPkFkZCB0YXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvbW9ycm93fVwiIGNsYXNzPVwidXBjb21pbmctcGFnZS10YXNrLWluZm8tbW9kYWwgcmVtb3ZlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHt0b21vcnJvd31cIiBjbGFzcz1cInRhc2stbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiBhdXRvY29tcGxldGU9XCJvZmZcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9tb3Jyb3d9XCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBhdXRvY29tcGxldGU9XCJvZmZcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHt0b21vcnJvd31cIiBjbGFzcz1cImV4dHJhLXRhc2staW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0Mz1cIiR7dG9tb3Jyb3d9XCIgY2xhc3M9XCJwcmlvcml0eS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9tb3Jyb3d9XCIgY2xhc3M9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbWF4PVwiNVwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7dG9tb3Jyb3d9XCIgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBjbGFzcz1cInNlbGVjdC1wcm9qZWN0XCI+PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvbW9ycm93fVwiIGNsYXNzPVwidGFzay1pbmZvLW1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvbW9ycm93fVwiIGRpc2FibGVkIGNsYXNzPVwiY29uZmlybS1hZGQtdGFza1wiPk9LPGRpdiBkYXRhLWR1ZS1kYXRlPVwiJHt0b21vcnJvd31cIiBjbGFzcz1cIm1lc3NhZ2VcIj48L2Rpdj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke3RvbW9ycm93fVwiIGNsYXNzPVwiY2FuY2VsLWFkZC10YXNrXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aGlzLXdlZWtcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyBXZWVrPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGhpcy13ZWVrLXRhc2tzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgY2xhc3M9XCJhZGQtdGFzay1idXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgY2xhc3M9XCJhZGQtdGFzay1idXR0b24taW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgc3JjPSR7UGx1c0ljb259IGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uLWltZ1wiIGFsdD1cIlBsdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgY2xhc3M9XCJhZGQtdGFzay1sYWJlbFwiPkFkZCB0YXNrPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCJ0aGlzLXdlZWtcIiBjbGFzcz1cInVwY29taW5nLXBhZ2UtdGFzay1pbmZvLW1vZGFsIHJlbW92ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtd2Vla1wiIGNsYXNzPVwidGFzay1uYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiBhdXRvY29tcGxldGU9XCJvZmZcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgY2xhc3M9XCJleHRyYS10YXNrLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCJ0aGlzLXdlZWtcIiBjbGFzcz1cInByaW9yaXR5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgY2xhc3M9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbWF4PVwiNVwiIHZhbHVlPVwiMVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgY2xhc3M9XCJkdWUtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke3RvZGF5fVwiIG1pbj1cIiR7dG9kYXl9XCIgbWF4PVwiJHtmb3JtYXQoZW5kT2ZXZWVrKHRvZGF5LCB7IHdlZWtTdGFydHNPbjogMSB9KSwgXCJ5eXl5LU1NLWRkXCIpfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBjbGFzcz1cInNlbGVjdC1wcm9qZWN0XCI+PC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCJ0aGlzLXdlZWtcIiBjbGFzcz1cInRhc2staW5mby1tb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy13ZWVrXCIgZGlzYWJsZWQgY2xhc3M9XCJjb25maXJtLWFkZC10YXNrXCI+T0s8ZGl2IGRhdGEtZHVlLWRhdGU9XCJ0aGlzLXdlZWtcIiBjbGFzcz1cIm1lc3NhZ2VcIj48L2Rpdj48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCJ0aGlzLXdlZWtcIiBjbGFzcz1cImNhbmNlbC1hZGQtdGFza1wiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGhpcy1tb250aFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5UaGlzIE1vbnRoPC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGhpcy1tb250aC10YXNrc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBjbGFzcz1cImFkZC10YXNrLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCJ0aGlzLW1vbnRoXCIgY2xhc3M9XCJhZGQtdGFzay1idXR0b24taW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy1tb250aFwiIHNyYz0ke1BsdXNJY29ufSBjbGFzcz1cImFkZC10YXNrLWJ1dHRvbi1pbWdcIiBhbHQ9XCJQbHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBjbGFzcz1cImFkZC10YXNrLWxhYmVsXCI+QWRkIHRhc2s8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBjbGFzcz1cInVwY29taW5nLXBhZ2UtdGFzay1pbmZvLW1vZGFsIHJlbW92ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBjbGFzcz1cInRhc2stbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiBhdXRvY29tcGxldGU9XCJvZmZcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCJ0aGlzLW1vbnRoXCIgY2xhc3M9XCJleHRyYS10YXNrLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCJ0aGlzLW1vbnRoXCIgY2xhc3M9XCJwcmlvcml0eS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBjbGFzcz1cInByaW9yaXR5XCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBtYXg9XCI1XCIgdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCJ0aGlzLW1vbnRoXCIgY2xhc3M9XCJkdWUtZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke3RvZGF5fVwiIG1pbj1cIiR7dG9kYXl9XCIgbWF4PVwiJHtmb3JtYXQoZW5kT2ZNb250aCh0b2RheSksIFwieXl5eS1NTS1kZFwiKX1cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGNsYXNzPVwic2VsZWN0LXByb2plY3RcIj48L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBjbGFzcz1cInRhc2staW5mby1tb2RhbC1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwidGhpcy1tb250aFwiIGRpc2FibGVkIGNsYXNzPVwiY29uZmlybS1hZGQtdGFza1wiPk9LPGRpdiBkYXRhLWR1ZS1kYXRlPVwidGhpcy1tb250aFwiIGNsYXNzPVwibWVzc2FnZVwiPjwvZGl2PjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cInRoaXMtbW9udGhcIiBjbGFzcz1cImNhbmNlbC1hZGQtdGFza1wiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtXYWxraW5nTW91c2V9XCIgLz5cbiAgICAgICAgICAgICAgICA8cD5Ob3RoaW5nIGhlcmUhPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgY29uc3Qgb3ZlcmR1ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmR1ZVwiKTtcbiAgY29uc3Qgb3ZlcmR1ZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJkdWUtdGFza3NcIik7XG4gIGNvbnN0IHRvZGF5VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXktdGFza3NcIik7XG4gIGNvbnN0IHRvbW9ycm93VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9tb3Jyb3ctdGFza3NcIik7XG4gIGNvbnN0IHRoaXNXZWVrVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGhpcy13ZWVrLXRhc2tzXCIpO1xuICBjb25zdCB0aGlzTW9udGhUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGlzLW1vbnRoLXRhc2tzXCIpO1xuXG4gIGlmIChUYXNrTWFuYWdlci5maWx0ZXJPdmVyZHVlVGFza3MoVGFza01hbmFnZXIuYWxsVGFza3NbMF0pLmxlbmd0aCA+IDApIHtcbiAgICByZXZlYWxFbGVtZW50cyhvdmVyZHVlQ29udGFpbmVyKTtcbiAgfSBlbHNlIHJlbW92ZUVsZW1lbnRzKG92ZXJkdWVDb250YWluZXIpO1xuICBsb2FkT3ZlcmR1ZVNvcnRlZFRhc2tzQnlEYXRlKG92ZXJkdWVUYXNrQ29udGFpbmVyKTtcbiAgbG9hZFRhc2tzQnlEYXRlKHRvZGF5VGFza0NvbnRhaW5lciwgaXNUb2RheSk7XG4gIGxvYWRUYXNrc0J5RGF0ZSh0b21vcnJvd1Rhc2tDb250YWluZXIsIGlzVG9tb3Jyb3cpO1xuICBsb2FkU29ydGVkVGFza3NCeURhdGUodGhpc1dlZWtUYXNrQ29udGFpbmVyLCBpc1RoaXNXZWVrLCB7IHdlZWtTdGFydHNPbjogMSB9KTtcbiAgbG9hZFNvcnRlZFRhc2tzQnlEYXRlKHRoaXNNb250aFRhc2tDb250YWluZXIsIGlzVGhpc01vbnRoKTtcbn07XG5cbmNvbnN0IGxvYWRQYXN0TW9udGggPSBmdW5jdGlvbihtb250aCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwY29taW5nLWNvbnRlbnRcIikuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGlkPVwibW9udGgtdGl0bGVcIj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJwcmV2aW91cy1tb250aFwiPjw8L2J1dHRvbj5cbiAgICAgICAgICAgIDxoMT4ke2Zvcm1hdChtb250aCwgXCJNTU1NIHl5eXlcIil9PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJuZXh0LW1vbnRoXCI+PjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInVwY29taW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJkdWVcIj5cbiAgICAgICAgICAgICAgICA8cD5PdmVyZHVlPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVyZHVlLXRhc2tzXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtb250aC1wYWdlXCIgZGF0YS1tb250aD1cIiR7Zm9ybWF0KG1vbnRoLCBcIk1NTU0geXl5eVwiKX1cIj5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIE1vbnRoPC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aGlzLW1vbnRoLXRhc2tzXCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7V2Fsa2luZ01vdXNlfVwiIC8+XG4gICAgICAgICAgICAgICAgPHA+Tm90aGluZyBoZXJlITwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gIGNvbnN0IG92ZXJkdWVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJkdWVcIik7XG4gIGNvbnN0IG92ZXJkdWVUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNvdmVyZHVlLXRhc2tzXCIpO1xuICBjb25zdCB0aGlzTW9udGhUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aGlzLW1vbnRoLXRhc2tzXCIpO1xuXG4gIGlmIChUYXNrTWFuYWdlci5maWx0ZXJPdmVyZHVlVGFza3MoVGFza01hbmFnZXIuYWxsVGFza3NbMF0pLmxlbmd0aCA+IDApIHtcbiAgICByZXZlYWxFbGVtZW50cyhvdmVyZHVlQ29udGFpbmVyKTtcbiAgfSBlbHNlIHJlbW92ZUVsZW1lbnRzKG92ZXJkdWVDb250YWluZXIpO1xuICBsb2FkT3ZlcmR1ZVNvcnRlZFRhc2tzQnlEYXRlKG92ZXJkdWVUYXNrQ29udGFpbmVyKTtcbiAgbG9hZFNvcnRlZFRhc2tzQnlEYXRlKHRoaXNNb250aFRhc2tDb250YWluZXIsIGlzU2FtZU1vbnRoLCBtb250aCk7XG59O1xuXG5jb25zdCBsb2FkRnV0dXJlTW9udGggPSBmdW5jdGlvbih0b2RheSwgbW9udGgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGNvbWluZy1jb250ZW50XCIpLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBpZD1cIm1vbnRoLXRpdGxlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwicHJldmlvdXMtbW9udGhcIj48PC9idXR0b24+XG4gICAgICAgICAgICA8aDE+JHtmb3JtYXQobW9udGgsIFwiTU1NTSB5eXl5XCIpfTwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwibmV4dC1tb250aFwiPj48L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ1cGNvbWluZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVyZHVlXCI+XG4gICAgICAgICAgICAgICAgPHA+T3ZlcmR1ZTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwib3ZlcmR1ZS10YXNrc1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibW9udGgtcGFnZVwiIGRhdGEtbW9udGg9XCIke2Zvcm1hdChtb250aCwgXCJNTU1NIHl5eXlcIil9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRoaXMtbW9udGhcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+VGhpcyBNb250aDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInRoaXMtbW9udGgtdGFza3NcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke21vbnRofVwiIGNsYXNzPVwiYWRkLXRhc2stYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7bW9udGh9XCIgY2xhc3M9XCJhZGQtdGFzay1idXR0b24taW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHttb250aH1cIiBzcmM9JHtQbHVzSWNvbn0gY2xhc3M9XCJhZGQtdGFzay1idXR0b24taW1nXCIgYWx0PVwiUGx1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHttb250aH1cIiBjbGFzcz1cImFkZC10YXNrLWxhYmVsXCI+QWRkIHRhc2s8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7bW9udGh9XCIgY2xhc3M9XCJ1cGNvbWluZy1wYWdlLXRhc2staW5mby1tb2RhbCByZW1vdmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke21vbnRofVwiIGNsYXNzPVwidGFzay1uYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHttb250aH1cIiBjbGFzcz1cImRlc2NyaXB0aW9uXCIgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke21vbnRofVwiIGNsYXNzPVwiZXh0cmEtdGFzay1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHttb250aH1cIiBjbGFzcz1cInByaW9yaXR5LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHttb250aH1cIiBjbGFzcz1cInByaW9yaXR5XCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBtYXg9XCI1XCIgdmFsdWU9XCIxXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGRhdGEtZHVlLWRhdGU9XCIke21vbnRofVwiIGNsYXNzPVwiZHVlLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtmb3JtYXQoc3RhcnRPZk1vbnRoKG1vbnRoKSwgXCJ5eXl5LU1NLWRkXCIpfVwiIG1pbj1cIiR7Zm9ybWF0KHN0YXJ0T2ZNb250aChtb250aCksIFwieXl5eS1NTS1kZFwiKX1cIiBtYXg9XCIke2Zvcm1hdChlbmRPZk1vbnRoKG1vbnRoKSwgXCJ5eXl5LU1NLWRkXCIpfVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBkYXRhLWR1ZS1kYXRlPVwiJHttb250aH1cIiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGNsYXNzPVwic2VsZWN0LXByb2plY3RcIj48L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7bW9udGh9XCIgY2xhc3M9XCJ0YXNrLWluZm8tbW9kYWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7bW9udGh9XCIgZGlzYWJsZWQgY2xhc3M9XCJjb25maXJtLWFkZC10YXNrXCI+T0s8ZGl2IGRhdGEtZHVlLWRhdGU9XCIke21vbnRofVwiIGNsYXNzPVwibWVzc2FnZVwiPjwvZGl2PjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgZGF0YS1kdWUtZGF0ZT1cIiR7bW9udGh9XCIgY2xhc3M9XCJjYW5jZWwtYWRkLXRhc2tcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtXYWxraW5nTW91c2V9XCIgLz5cbiAgICAgICAgICAgIDxwPk5vdGhpbmcgaGVyZSE8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgY29uc3Qgb3ZlcmR1ZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmR1ZVwiKTtcbiAgY29uc3Qgb3ZlcmR1ZVRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI292ZXJkdWUtdGFza3NcIik7XG4gIGNvbnN0IHRoaXNNb250aFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RoaXMtbW9udGgtdGFza3NcIik7XG5cbiAgaWYgKFRhc2tNYW5hZ2VyLmZpbHRlck92ZXJkdWVUYXNrcyhUYXNrTWFuYWdlci5hbGxUYXNrc1swXSkubGVuZ3RoID4gMCkge1xuICAgIHJldmVhbEVsZW1lbnRzKG92ZXJkdWVDb250YWluZXIpO1xuICB9IGVsc2UgcmVtb3ZlRWxlbWVudHMob3ZlcmR1ZUNvbnRhaW5lcik7XG4gIGxvYWRPdmVyZHVlU29ydGVkVGFza3NCeURhdGUob3ZlcmR1ZVRhc2tDb250YWluZXIpO1xuICBsb2FkU29ydGVkVGFza3NCeURhdGUodGhpc01vbnRoVGFza0NvbnRhaW5lciwgaXNTYW1lTW9udGgsIG1vbnRoKTtcbn07XG5cbmNvbnN0IGN1c3RvbUN1cnNvciA9IGZ1bmN0aW9uKHNlbGVjdG9yLCBtZXNzYWdlLCBlKSB7XG4gIGNvbnN0IGN1c3RvbU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgY3VzdG9tTWVzc2FnZS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIGN1c3RvbU1lc3NhZ2Uuc3R5bGUudG9wID0gZS5jbGllbnRZICsgXCJweFwiO1xuICBjdXN0b21NZXNzYWdlLnN0eWxlLmxlZnQgPSBlLmNsaWVudFggKyBcInB4XCI7XG59O1xuXG5jb25zdCByZXF1aXJlZEZpZWxkQWxlcnQgPSBmdW5jdGlvbihidXR0b24sIHNlbGVjdG9yLCBtZXNzYWdlKSB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIChlKSA9PiB7XG4gICAgY3VzdG9tQ3Vyc29yKHNlbGVjdG9yLCBtZXNzYWdlLCBlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBoaWRlRWxlbWVudHMsXG4gIHJldmVhbEVsZW1lbnRzLFxuICByZW1vdmVFbGVtZW50cyxcbiAgY2hhbmdlU2lkZWJhckhpZ2hsaWdodCxcbiAgbG9hZFRhc2tzQnlEYXRlLFxuICBsb2FkU29ydGVkVGFza3NCeURhdGUsXG4gIGxvYWRQcm9qZWN0c1RvU2lkZWJhcixcbiAgbG9hZFByb2plY3RzVG9Ecm9wZG93bixcbiAgbG9hZFNlY3Rpb25zLFxuICBsb2FkQ3VycmVudE1vbnRoLFxuICBsb2FkUGFzdE1vbnRoLFxuICBsb2FkRnV0dXJlTW9udGgsXG4gIG9wZW5UYXNrLFxuICByZXF1aXJlZEZpZWxkQWxlcnQsXG59O1xuIiwiaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgaW5pdFRvZGF5UGFnZSBmcm9tIFwiLi90b2RheS1wYWdlXCI7XG5pbXBvcnQgaW5pdFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiO1xuXG5UYXNrTWFuYWdlci5hbGxUYXNrcyA9IFRhc2tNYW5hZ2VyLmZldGNoVGFza3MoKTtcblRhc2tNYW5hZ2VyLm1ha2VPYmplY3RzRXF1YWwoKTtcbmluaXRUb2RheVBhZ2UoKTtcbmluaXRTaWRlYmFyKCk7XG4iLCJpbXBvcnQgXCIuL3Byb2plY3QtcGFnZS1zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIHJldmVhbEVsZW1lbnRzLFxuICByZW1vdmVFbGVtZW50cyxcbiAgY2hhbmdlU2lkZWJhckhpZ2hsaWdodCxcbiAgbG9hZFNlY3Rpb25zLFxuICBvcGVuVGFzayxcbiAgcmVxdWlyZWRGaWVsZEFsZXJ0LFxufSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBQbHVzSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGx1cy5zdmdcIjtcbmltcG9ydCBUYXNrTWFuYWdlciBmcm9tIFwiLi90YXNrc1wiO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgaW5pdFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiO1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgY29uc3QgcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYFtkYXRhLXByb2plY3QtbmFtZT1cIiR7cHJvamVjdE5hbWV9XCJdW2NsYXNzfj1cInNpZGViYXItcHJvamVjdFwiXWAsXG4gICk7XG4gIGNvbnN0IHJlbmRlclByb2plY3RQYWdlID0gZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgICBjb25zdCB0b2RheUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5LWNvbnRlbnRcIik7XG4gICAgY29uc3QgdXBjb21pbmdDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGNvbWluZy1jb250ZW50XCIpO1xuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRlbnRcIik7XG5cbiAgICB0b2RheUNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB1cGNvbWluZ0NvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0Q29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC10aXRsZVwiIHZhbHVlPVwiJHtwcm9qZWN0TmFtZX1cIiBhdXRvY29tcGxldGU9XCJvZmZcIj5cbiAgICAgICAgPGRpdiBpZD1cInByb2plY3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvamVjdC1zZWN0aW9uc1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFkZC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkYXRhLW9wZW49XCJhZGQgc2VjdGlvbiBtb2RhbFwiIGlkPVwiYWRkLXNlY3Rpb24tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgZGF0YS1vcGVuPVwiYWRkIHNlY3Rpb24gbW9kYWxcIiBpZD1cImFkZC1zZWN0aW9uLWJ1dHRvbi1pbWdcIiBzcmM9XCIke1BsdXNJY29ufVwiIGFsdD1cIlBsdXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1vcGVuPVwiYWRkIHNlY3Rpb24gbW9kYWxcIj5BZGQgc2VjdGlvbjwvcD5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCBzZWN0aW9uIG1vZGFsXCIgaWQ9XCJzZWN0aW9uLWluZm8tbW9kYWxcIiBjbGFzcz1cInJlbW92ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gZGF0YS1vcGVuPVwiYWRkIHNlY3Rpb24gbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBkYXRhLW9wZW49XCJhZGQgc2VjdGlvbiBtb2RhbFwiIGlkPVwic2VjdGlvbi1uYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlY3Rpb24gTmFtZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1vcGVuPVwiYWRkIHNlY3Rpb24gbW9kYWxcIiBpZD1cImNvbmZpcm0tYWRkLXNlY3Rpb25cIiBkaXNhYmxlZD5PSzxkaXYgaWQ9XCJtZXNzYWdlXCI+PC9kaXY+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGRhdGEtb3Blbj1cImFkZCBzZWN0aW9uIG1vZGFsXCIgaWQ9XCJjYW5jZWwtYWRkLXNlY3Rpb25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH07XG5cbiAgcmVuZGVyUHJvamVjdFBhZ2UocHJvamVjdE5hbWUpO1xuICBjaGFuZ2VTaWRlYmFySGlnaGxpZ2h0KHByb2plY3RCdXR0b24pO1xuXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC10aXRsZVwiKTtcbiAgY29uc3QgYWRkU2VjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXNlY3Rpb24tYnV0dG9uXCIpO1xuICBjb25zdCBzZWN0aW9uSW5mb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWN0aW9uLWluZm8tbW9kYWxcIik7XG4gIGNvbnN0IGNhbmNlbEFkZFNlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1hZGQtc2VjdGlvblwiKTtcbiAgY29uc3QgY29uZmlybUFkZFNlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiI2NvbmZpcm0tYWRkLXNlY3Rpb25cIixcbiAgKTtcbiAgY29uc3Qgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3Rpb24tbmFtZVwiKTtcbiAgY29uc3QgcHJvamVjdFNlY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LXNlY3Rpb25zXCIpO1xuICBjb25zdCB0YXNrSW5mb01vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgXCIucHJvamVjdC1wYWdlLXRhc2staW5mby1tb2RhbFwiLFxuICApO1xuICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRpYWxvZ1wiKTtcblxuICBjb25zdCBhZGRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBlbmFibGVBZGRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLXRhc2stYnV0dG9uXCIpKS5mb3JFYWNoKFxuICAgICAgICAoYnV0dG9uKSA9PlxuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25OYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWN0aW9uLW5hbWVcIik7XG4gICAgICAgICAgICBBcnJheS5mcm9tKHRhc2tJbmZvTW9kYWxzKS5mb3JFYWNoKChlbGVtZW50KSA9PlxuICAgICAgICAgICAgICByZW1vdmVFbGVtZW50cyhlbGVtZW50KSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cyhcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uTmFtZX1cIl1bY2xhc3N+PVwiYWRkLXRhc2stYnV0dG9uXCJdYCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXZlYWxFbGVtZW50cyhcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uTmFtZX1cIl1bY2xhc3N+PVwicHJvamVjdC1wYWdlLXRhc2staW5mby1tb2RhbFwiXWAsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cInRhc2stbmFtZVwiXWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmZvY3VzKCk7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtc2VjdGlvbi1uYW1lPVwiJHtlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlY3Rpb24tbmFtZVwiKX1cIl1bY2xhc3N+PVwiY29uZmlybS1hZGQtdGFza1wiXWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgZW5hYmxlQ2xpY2tPdXRUYXNrTW9kYWwoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVuYWJsZUNhbmNlbEFkZFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYW5jZWwtYWRkLXRhc2tcIikpLmZvckVhY2goXG4gICAgICAgIChidXR0b24pID0+XG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlY3Rpb24tbmFtZVwiKTtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzKFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1zZWN0aW9uLW5hbWU9XCIke3NlY3Rpb25OYW1lfVwiXVtjbGFzc349XCJwcm9qZWN0LXBhZ2UtdGFzay1pbmZvLW1vZGFsXCJdYCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXZlYWxFbGVtZW50cyhcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uTmFtZX1cIl1bY2xhc3N+PVwiYWRkLXRhc2stYnV0dG9uXCJdYCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXNldFRhc2tNb2RhbChzZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSksXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBlbmFibGVDb25maXJtQWRkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbmZpcm0tYWRkLXRhc2tcIikpLmZvckVhY2goXG4gICAgICAgIChidXR0b24pID0+XG4gICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlY3Rpb24tbmFtZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cInRhc2stbmFtZVwiXWAsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICBgW2RhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uTmFtZX1cIl1bY2xhc3N+PVwiZGVzY3JpcHRpb25cIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cInByaW9yaXR5XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cImR1ZS1kYXRlXCJdYCxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBUYXNrTWFuYWdlci5jcmVhdGVUYXNrKFxuICAgICAgICAgICAgICB0YXNrTmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlLFxuICAgICAgICAgICAgICBcIm5vdCBkb25lXCIsXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBUYXNrTWFuYWdlci5hZGRUYXNrKG5ld1Rhc2ssIHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICByZWxvYWRGbG93KCk7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cyhcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uTmFtZX1cIl1bY2xhc3N+PVwicHJvamVjdC1wYWdlLXRhc2staW5mby1tb2RhbFwiXWAsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV2ZWFsRWxlbWVudHMoXG4gICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cImFkZC10YXNrLWJ1dHRvblwiXWAsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmVzZXRUYXNrTW9kYWwoc2VjdGlvbk5hbWUpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5hYmxlRGVsZXRlVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10YXNrXCIpKS5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBUYXNrTWFuYWdlci5kZWxldGVUYXNrKFxuICAgICAgICAgICAgVGFza01hbmFnZXIuZ2V0VGFza0J5SWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlbG9hZEZsb3coKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5hYmxlRGVsZXRlU2VjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1zZWN0aW9uLWJ1dHRvblwiKSkuZm9yRWFjaChcbiAgICAgICAgKGJ1dHRvbikgPT5cbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2VjdGlvbi1uYW1lXCIpO1xuICAgICAgICAgICAgVGFza01hbmFnZXIuZGVsZXRlU2VjdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpO1xuICAgICAgICAgICAgcmVsb2FkRmxvdygpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5hYmxlQ2xpY2tPdXRUYXNrTW9kYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcGVuXCIpICE9PSBcImFkZCB0YXNrIG1vZGFsXCIpIHtcbiAgICAgICAgICBBcnJheS5mcm9tKFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXBhZ2UtdGFzay1pbmZvLW1vZGFsXCIpLFxuICAgICAgICAgICkuZm9yRWFjaCgobW9kYWwpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzKG1vZGFsKTtcbiAgICAgICAgICAgIHJlc2V0VGFza01vZGFsKG1vZGFsLmdldEF0dHJpYnV0ZShcImRhdGEtc2VjdGlvbi1uYW1lXCIpKTtcbiAgICAgICAgICAgIHJldmVhbEVsZW1lbnRzKFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1zZWN0aW9uLW5hbWU9XCIke21vZGFsLmdldEF0dHJpYnV0ZShcImRhdGEtc2VjdGlvbi1uYW1lXCIpfVwiXVtjbGFzc349XCJhZGQtdGFzay1idXR0b25cIl1gLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlbmFibGVDbGlja091dFNlY3Rpb25Nb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wZW5cIikgIT09IFwiYWRkIHNlY3Rpb24gbW9kYWxcIikge1xuICAgICAgICAgIHJlbW92ZUVsZW1lbnRzKHNlY3Rpb25JbmZvTW9kYWwpO1xuICAgICAgICAgIHJldmVhbEVsZW1lbnRzKGFkZFNlY3Rpb25CdXR0b24pO1xuICAgICAgICAgIHJlc2V0U2VjdGlvbk1vZGFsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUYXNrc0NsaWNrYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikpLmZvckVhY2goKHRhc2spID0+XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgb3BlblRhc2soXG4gICAgICAgICAgICBUYXNrTWFuYWdlci5nZXRUYXNrQnlJZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZW5hYmxlQ29uZmlybUVkaXRUYXNrKFxuICAgICAgICAgICAgVGFza01hbmFnZXIuZ2V0VGFza0J5SWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBlbmFibGVDb21wbGV0ZVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKSkuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgIFRhc2tNYW5hZ2VyLmNvbXBsZXRlVGFzayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpO1xuICAgICAgICAgICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja2VkXCIsIFwiZG9uZVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGFza01hbmFnZXIudW5jb21wbGV0ZVRhc2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsb2FkRmxvdygpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVuYWJsZUNvbmZpcm1FZGl0VGFzayA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgIGNvbnN0IGNvbmZpcm1FZGl0VGFza0J1dHRvbiA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1lZGl0LXRhc2tcIik7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duLXByb2plY3RzXCIpO1xuXG4gICAgICBjb25maXJtRWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIiNlZGl0LXRhc2stZGVzY3JpcHRpb25cIixcbiAgICAgICAgKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWR1ZS1kYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IEFycmF5LmZyb20oc2VsZWN0aW9uLmNoaWxkcmVuKVtcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWRJbmRleFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIik7XG4gICAgICAgIGNvbnN0IG5ld1NlY3Rpb24gPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlY3Rpb24tbmFtZVwiKTtcblxuICAgICAgICBUYXNrTWFuYWdlci5lZGl0VGFzayhcbiAgICAgICAgICB0YXNrLFxuICAgICAgICAgIG5ld1RpdGxlLFxuICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgICAgICAgIG5ld0R1ZURhdGUsXG4gICAgICAgICAgbmV3UHJpb3JpdHksXG4gICAgICAgICAgdGFzay5zdGF0dXMsXG4gICAgICAgICAgbmV3UHJvamVjdCxcbiAgICAgICAgICBuZXdTZWN0aW9uLFxuICAgICAgICApO1xuICAgICAgICByZWxvYWRGbG93KCk7XG4gICAgICAgIHRhc2tEaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbG9hZEZsb3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxvYWRTZWN0aW9ucyhwcm9qZWN0U2VjdGlvbnMsIHByb2plY3ROYW1lKTtcbiAgICAgIG1ha2VUYXNrc0NsaWNrYWJsZSgpO1xuICAgICAgZW5hYmxlQWRkVGFzaygpO1xuICAgICAgZW5hYmxlQ2FuY2VsQWRkVGFzaygpO1xuICAgICAgZW5hYmxlQ29uZmlybUFkZFRhc2soKTtcbiAgICAgIGVuYWJsZURlbGV0ZVRhc2soKTtcbiAgICAgIGVuYWJsZURlbGV0ZVNlY3Rpb24oKTtcbiAgICAgIGVuYWJsZUNvbXBsZXRlVGFzaygpO1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stbmFtZVwiKSkuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2VjdGlvbi1uYW1lXCIpO1xuICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cImNvbmZpcm0tYWRkLXRhc2tcIl1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cImNvbmZpcm0tYWRkLXRhc2tcIl1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb25maXJtLWFkZC10YXNrXCIpKS5mb3JFYWNoKFxuICAgICAgICAoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWN0aW9uLW5hbWVcIik7XG4gICAgICAgICAgcmVxdWlyZWRGaWVsZEFsZXJ0KFxuICAgICAgICAgICAgYnV0dG9uLFxuICAgICAgICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzPVwibWVzc2FnZVwiXWAsXG4gICAgICAgICAgICBcIlBsZWFzZSBmaWxsIGluIHRhc2sgbmFtZVwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb24tbmFtZVwiKSkuZm9yRWFjaChcbiAgICAgICAgKGVsZW1lbnQpID0+XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICFUYXNrTWFuYWdlci5jaGVja1JlcGVhdGVkU2VjdGlvbk5hbWUoXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICkgJiZcbiAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgIT09IFwiXCJcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb25zdCBvbGRTZWN0aW9uTmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2VjdGlvbi1uYW1lXCIpO1xuICAgICAgICAgICAgICBUYXNrTWFuYWdlci5jaGFuZ2VTZWN0aW9uTmFtZShcbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICBvbGRTZWN0aW9uTmFtZSxcbiAgICAgICAgICAgICAgICBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgZS50YXJnZXQuYmx1cigpO1xuICAgICAgICAgICAgICBpbml0KHByb2plY3ROYW1lKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IG9sZFNlY3Rpb25OYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWN0aW9uLW5hbWVcIik7XG4gICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gb2xkU2VjdGlvbk5hbWU7XG4gICAgICAgICAgICAgIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIHJlbG9hZEZsb3coKTtcblxuICAgIGFkZFNlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHJlbW92ZUVsZW1lbnRzKGFkZFNlY3Rpb25CdXR0b24pO1xuICAgICAgcmV2ZWFsRWxlbWVudHMoc2VjdGlvbkluZm9Nb2RhbCk7XG4gICAgICBzZWN0aW9uTmFtZS5mb2N1cygpO1xuICAgICAgY29uZmlybUFkZFNlY3Rpb25CdXR0b24uc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgXCJcIik7XG4gICAgICBlbmFibGVDbGlja091dFNlY3Rpb25Nb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsQWRkU2VjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIHJlbW92ZUVsZW1lbnRzKHNlY3Rpb25JbmZvTW9kYWwpO1xuICAgICAgcmV2ZWFsRWxlbWVudHMoYWRkU2VjdGlvbkJ1dHRvbik7XG4gICAgICByZXNldFNlY3Rpb25Nb2RhbCgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgY29uZmlybUFkZFNlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBUYXNrTWFuYWdlci5jcmVhdGVTZWN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZS52YWx1ZSk7XG4gICAgICByZWxvYWRGbG93KCk7XG4gICAgICByZW1vdmVFbGVtZW50cyhzZWN0aW9uSW5mb01vZGFsKTtcbiAgICAgIHJldmVhbEVsZW1lbnRzKGFkZFNlY3Rpb25CdXR0b24pO1xuICAgICAgcmVzZXRTZWN0aW9uTW9kYWwoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBhZGRFdmVudHMoKTtcblxuICBjb25zdCByZXNldFNlY3Rpb25Nb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHNlY3Rpb25OYW1lLnZhbHVlID0gXCJcIjtcbiAgfTtcblxuICBjb25zdCByZXNldFRhc2tNb2RhbCA9IGZ1bmN0aW9uKHNlY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cInRhc2stbmFtZVwiXWAsXG4gICAgKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtc2VjdGlvbi1uYW1lPVwiJHtzZWN0aW9uTmFtZX1cIl1bY2xhc3N+PVwiZGVzY3JpcHRpb25cIl1gLFxuICAgICk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cInByaW9yaXR5XCJdYCxcbiAgICApO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLXNlY3Rpb24tbmFtZT1cIiR7c2VjdGlvbk5hbWV9XCJdW2NsYXNzfj1cImR1ZS1kYXRlXCJdYCxcbiAgICApO1xuXG4gICAgdGFza05hbWUudmFsdWUgPSBcIlwiO1xuICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICBwcmlvcml0eS52YWx1ZSA9IFwiMVwiO1xuICAgIGR1ZURhdGUudmFsdWUgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpO1xuICB9O1xuXG4gIHNlY3Rpb25OYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc2VjdGlvbk5hbWUudmFsdWUgIT09IFwiXCIgJiZcbiAgICAgICFUYXNrTWFuYWdlci5jaGVja1JlcGVhdGVkU2VjdGlvbk5hbWUocHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lLnZhbHVlKVxuICAgICkge1xuICAgICAgY29uZmlybUFkZFNlY3Rpb25CdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpcm1BZGRTZWN0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgIH1cbiAgfSk7XG4gIHJlcXVpcmVkRmllbGRBbGVydChcbiAgICBjb25maXJtQWRkU2VjdGlvbkJ1dHRvbixcbiAgICBcIiNtZXNzYWdlXCIsXG4gICAgXCJQbGVhc2UgZmlsbCBpbiBzZWN0aW9uIG5hbWVcIixcbiAgKTtcblxuICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xuICAgIGlmIChcbiAgICAgICFUYXNrTWFuYWdlci5jaGVja1JlcGVhdGVkUHJvamVjdE5hbWUocHJvamVjdFRpdGxlLnZhbHVlKSAmJlxuICAgICAgcHJvamVjdFRpdGxlLnZhbHVlICE9PSBcIlwiXG4gICAgKSB7XG4gICAgICBUYXNrTWFuYWdlci5jaGFuZ2VQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSwgcHJvamVjdFRpdGxlLnZhbHVlKTtcbiAgICAgIGUudGFyZ2V0LmJsdXIoKTtcbiAgICAgIGluaXRTaWRlYmFyKCk7XG4gICAgICBpbml0KHByb2plY3RUaXRsZS52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RUaXRsZS52YWx1ZSA9IHByb2plY3ROYW1lO1xuICAgICAgZS50YXJnZXQuYmx1cigpO1xuICAgIH1cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdDtcbiIsImltcG9ydCBcIi4vc2lkZWJhci1zdHlsZS5jc3NcIjtcbmltcG9ydCB7XG4gIGhpZGVFbGVtZW50cyxcbiAgcmV2ZWFsRWxlbWVudHMsXG4gIHJlbW92ZUVsZW1lbnRzLFxuICBsb2FkUHJvamVjdHNUb1NpZGViYXIsXG4gIHJlcXVpcmVkRmllbGRBbGVydCxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBpbml0UHJvamVjdFBhZ2UgZnJvbSBcIi4vcHJvamVjdC1wYWdlXCI7XG5pbXBvcnQgaW5pdFRvZGF5UGFnZSBmcm9tIFwiLi90b2RheS1wYWdlXCI7XG5pbXBvcnQgaW5pdFVwY29taW5nUGFnZSBmcm9tIFwiLi91cGNvbWluZy1wYWdlXCI7XG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgY2xvc2VTaWRlYmFyID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG4gIHJlbW92ZUVsZW1lbnRzKHNpZGViYXIpO1xufTtcblxuY29uc3Qgb3BlblNpZGViYXIgPSBmdW5jdGlvbigpIHtcbiAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhclwiKTtcbiAgcmV2ZWFsRWxlbWVudHMoc2lkZWJhcik7XG59O1xuXG5jb25zdCBhZGRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgY2xvc2VTaWRlYmFyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyLXRvZ2dsZS1jbG9zZVwiKTtcbiAgY29uc3Qgb3BlblNpZGViYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItdG9nZ2xlLW9wZW5cIik7XG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1wcm9qZWN0XCIpO1xuICBjb25zdCBjYW5jZWxBZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXByb2plY3RcIik7XG4gIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtbW9kYWxcIik7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cy1saXN0XCIpO1xuICBjb25zdCBjb25maXJtQWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIjY29uZmlybS1hZGQtcHJvamVjdFwiLFxuICApO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuICBjb25zdCB0b2RheUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXlcIik7XG4gIGNvbnN0IHVwY29taW5nQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGNvbWluZ1wiKTtcblxuICBjbG9zZVNpZGViYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbG9zZVNpZGViYXIoKTtcbiAgICByZXZlYWxFbGVtZW50cyhvcGVuU2lkZWJhckJ1dHRvbik7XG4gIH0pO1xuXG4gIG9wZW5TaWRlYmFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3BlblNpZGViYXIoKTtcbiAgICBoaWRlRWxlbWVudHMob3BlblNpZGViYXJCdXR0b24pO1xuICB9KTtcblxuICB0b2RheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpbml0VG9kYXlQYWdlKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICB1cGNvbWluZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpbml0VXBjb21pbmdQYWdlKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcmV2ZWFsRWxlbWVudHMoYWRkUHJvamVjdE1vZGFsKTtcbiAgICBwcm9qZWN0TmFtZS5mb2N1cygpO1xuICAgIGNvbmZpcm1BZGRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICB9KTtcblxuICBjYW5jZWxBZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHJlbW92ZUVsZW1lbnRzKGFkZFByb2plY3RNb2RhbCk7XG4gICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgY29uZmlybUFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlRWxlbWVudHMoYWRkUHJvamVjdE1vZGFsKTtcbiAgICBUYXNrTWFuYWdlci5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICBsb2FkUHJvamVjdHNUb1NpZGViYXIocHJvamVjdExpc3QpO1xuICAgIGVuYWJsZURlbGV0ZSgpO1xuICAgIGVuYWJsZUNsaWNrT3V0KCk7XG4gICAgbWFrZVByb2plY3RzQ2xpY2thYmxlKCk7XG4gICAgaW5pdFByb2plY3RQYWdlKHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBwcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC52YWx1ZSAhPT0gXCJcIiAmJlxuICAgICAgIVRhc2tNYW5hZ2VyLmNoZWNrUmVwZWF0ZWRQcm9qZWN0TmFtZShlLnRhcmdldC52YWx1ZSlcbiAgICApIHtcbiAgICAgIGNvbmZpcm1BZGRQcm9qZWN0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xuICAgIH0gZWxzZSBjb25maXJtQWRkUHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgfSk7XG5cbiAgY29uc3QgZW5hYmxlRGVsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1wcm9qZWN0XCIpO1xuXG4gICAgQXJyYXkuZnJvbShkZWxldGVQcm9qZWN0QnV0dG9ucykuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBUYXNrTWFuYWdlci5kZWxldGVQcm9qZWN0KGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIpKTtcbiAgICAgICAgaW5pdFRvZGF5UGFnZSgpO1xuICAgICAgICBsb2FkUHJvamVjdHNUb1NpZGViYXIocHJvamVjdExpc3QpO1xuICAgICAgICBlbmFibGVEZWxldGUoKTtcbiAgICAgICAgZW5hYmxlQ2xpY2tPdXQoKTtcbiAgICAgICAgbWFrZVByb2plY3RzQ2xpY2thYmxlKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pLFxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgZW5hYmxlQ2xpY2tPdXQgPSBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wZW5cIikgIT09IFwiYWRkIHByb2plY3QgbW9kYWxcIikge1xuICAgICAgICByZW1vdmVFbGVtZW50cyhhZGRQcm9qZWN0TW9kYWwpO1xuICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgbWFrZVByb2plY3RzQ2xpY2thYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItcHJvamVjdC1uYW1lXCIpO1xuICAgIEFycmF5LmZyb20ocHJvamVjdHMpLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBpbml0UHJvamVjdFBhZ2UoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIikpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfTtcblxuICBsb2FkUHJvamVjdHNUb1NpZGViYXIocHJvamVjdExpc3QpO1xuICBlbmFibGVEZWxldGUoKTtcbiAgZW5hYmxlQ2xpY2tPdXQoKTtcbiAgbWFrZVByb2plY3RzQ2xpY2thYmxlKCk7XG59O1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IGNvbmZpcm1BZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIiNjb25maXJtLWFkZC1wcm9qZWN0XCIsXG4gICk7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVcIik7XG4gIGRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJkZFwiKTtcblxuICBhZGRFdmVudHMoKTtcbiAgcmVxdWlyZWRGaWVsZEFsZXJ0KFxuICAgIGNvbmZpcm1BZGRQcm9qZWN0QnV0dG9uLFxuICAgIFwiI3NpZGViYXItbWVzc2FnZVwiLFxuICAgIFwiUHJvamVjdCBuYW1lcyBjYW4ndCBiZSBlbXB0eSBvciBzYW1lXCIsXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiaW1wb3J0IHsgY29tcGFyZURlc2MsIGlzQmVmb3JlLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgVGFza01hbmFnZXIgPSB7XG4gIGZldGNoVGFza3M6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhbGxUYXNrc1wiKSkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgW10sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9qZWN0TmFtZTogXCJwcm9qZWN0bGVzc1wiLFxuICAgICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlY3Rpb25OYW1lOiBcInNlY3Rpb25sZXNzXCIsXG4gICAgICAgICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWxsVGFza3NcIikpO1xuICAgIH1cbiAgfSxcblxuICBtYWtlT2JqZWN0c0VxdWFsOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFsbFRhc2tzWzBdLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGxldCB7IHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSB9ID0gdGhpcy5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzayk7XG4gICAgICB0aGlzLmdldFNlY3Rpb24ocHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lKS50YXNrcy5zcGxpY2UoXG4gICAgICAgIHRoaXMuZ2V0U2VjdGlvblRhc2tJZCh0YXNrLCBwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpLFxuICAgICAgICAxLFxuICAgICAgICB0YXNrLFxuICAgICAgKTtcbiAgICB9KTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICB9LFxuXG4gIHNhdmVUYXNrczogZnVuY3Rpb24oKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhbGxUYXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmFsbFRhc2tzKSk7XG4gIH0sXG5cbiAgY3JlYXRlUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgICBsZXQgbmV3UHJvamVjdCA9IHtcbiAgICAgIHByb2plY3ROYW1lOiBgJHtwcm9qZWN0TmFtZX1gLFxuICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNlY3Rpb25OYW1lOiBcInNlY3Rpb25sZXNzXCIsXG4gICAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICAgIHRoaXMuYWxsVGFza3MucHVzaChuZXdQcm9qZWN0KTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICB9LFxuXG4gIGNyZWF0ZVNlY3Rpb246IGZ1bmN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkge1xuICAgIHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2VjdGlvbnMucHVzaCh7XG4gICAgICBzZWN0aW9uTmFtZTogc2VjdGlvbk5hbWUsXG4gICAgICB0YXNrczogW10sXG4gICAgfSk7XG4gICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgfSxcblxuICBjcmVhdGVUYXNrOiBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcbiAgICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMgfTtcbiAgfSxcblxuICBhZGRUYXNrOiBmdW5jdGlvbih0YXNrLCBwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpIHtcbiAgICB0aGlzLmFsbFRhc2tzWzBdLnB1c2godGFzayk7XG4gICAgdGhpcy5nZXRTZWN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkudGFza3MucHVzaCh0YXNrKTtcbiAgICB0aGlzLnJlc2V0VGFza0lkKCk7XG4gICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgfSxcblxuICBjb250YWluc09iamVjdDogZnVuY3Rpb24ob2JqZWN0LCBhcnJheSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChKU09OLnN0cmluZ2lmeShhcnJheVtpXSkgPT09IEpTT04uc3RyaW5naWZ5KG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICBnZXRUYXNrQnlJZDogZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxUYXNrc1swXVtpZF07XG4gIH0sXG5cbiAgZ2V0UHJvamVjdDogZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxUYXNrcy5maWx0ZXIoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUsXG4gICAgKVswXTtcbiAgfSxcblxuICBnZXRTZWN0aW9uOiBmdW5jdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5zZWN0aW9ucy5maWx0ZXIoXG4gICAgICAoc2VjdGlvbikgPT4gc2VjdGlvbi5zZWN0aW9uTmFtZSA9PT0gc2VjdGlvbk5hbWUsXG4gICAgKVswXTtcbiAgfSxcblxuICBnZXRUYXNrUHJvamVjdEFuZFNlY3Rpb246IGZ1bmN0aW9uKHRhc2spIHtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYWxsVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5hbGxUYXNrc1tpXS5zZWN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICBpZiAodGhpcy5jb250YWluc09iamVjdCh0YXNrLCB0aGlzLmFsbFRhc2tzW2ldLnNlY3Rpb25zW2pdLnRhc2tzKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogdGhpcy5hbGxUYXNrc1tpXS5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHNlY3Rpb25OYW1lOiB0aGlzLmFsbFRhc2tzW2ldLnNlY3Rpb25zW2pdLnNlY3Rpb25OYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0U2VjdGlvblRhc2tJZDogZnVuY3Rpb24odGFzaywgcHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lKSB7XG4gICAgZm9yIChcbiAgICAgIGxldCBpID0gMDtcbiAgICAgIGkgPCB0aGlzLmdldFNlY3Rpb24ocHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lKS50YXNrcy5sZW5ndGg7XG4gICAgICBpKytcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmdldFNlY3Rpb24ocHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lKS50YXNrc1tpXS5pZCA9PT0gdGFzay5pZCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgY2hlY2tSZXBlYXRlZFByb2plY3ROYW1lOiBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5hbGxUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3ROYW1lID09PSB0aGlzLmFsbFRhc2tzW2ldLnByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgY2hlY2tSZXBlYXRlZFNlY3Rpb25OYW1lOiBmdW5jdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2VjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzZWN0aW9uTmFtZSA9PT0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5zZWN0aW9uc1tpXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIHJlc2V0VGFza0lkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFsbFRhc2tzWzBdLmZvckVhY2goXG4gICAgICAodGFzaykgPT4gKHRhc2suaWQgPSB0aGlzLmFsbFRhc2tzWzBdLmluZGV4T2YodGFzaykpLFxuICAgICk7XG4gICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgfSxcblxuICBkZWxldGVUYXNrOiBmdW5jdGlvbih0YXNrKSB7XG4gICAgdGhpcy5hbGxUYXNrc1swXS5zcGxpY2UodGFzay5pZCwgMSk7XG4gICAgbGV0IHsgcHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lIH0gPSB0aGlzLmdldFRhc2tQcm9qZWN0QW5kU2VjdGlvbih0YXNrKTtcbiAgICB0aGlzLmdldFNlY3Rpb24ocHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lKS50YXNrcy5zcGxpY2UoXG4gICAgICB0aGlzLmdldFNlY3Rpb25UYXNrSWQodGFzaywgcHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lKSxcbiAgICAgIDEsXG4gICAgKTtcbiAgICB0aGlzLnJlc2V0VGFza0lkKCk7XG4gICAgdGhpcy5zYXZlVGFza3MoKTtcbiAgfSxcblxuICBkZWxldGVTZWN0aW9uOiBmdW5jdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpIHtcbiAgICBmb3IgKFxuICAgICAgbGV0IGkgPSAwO1xuICAgICAgaSA8IHRoaXMuZ2V0U2VjdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpLnRhc2tzLmxlbmd0aDtcbiAgICAgIGkrK1xuICAgICkge1xuICAgICAgdGhpcy5kZWxldGVUYXNrKHRoaXMuZ2V0U2VjdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpLnRhc2tzW2ldKTtcbiAgICB9XG4gICAgdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5zZWN0aW9ucy5zcGxpY2UoXG4gICAgICB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpLnNlY3Rpb25zLmluZGV4T2YoXG4gICAgICAgIHRoaXMuZ2V0U2VjdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpLFxuICAgICAgKSxcbiAgICAgIDEsXG4gICAgKTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICB9LFxuXG4gIGRlbGV0ZVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpLnNlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgIGogPCB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpLnNlY3Rpb25zW2ldLnRhc2tzLmxlbmd0aDtcbiAgICAgICAgaisrXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5kZWxldGVUYXNrKHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2VjdGlvbnNbaV0udGFza3Nbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFsbFRhc2tzLnNwbGljZShcbiAgICAgIHRoaXMuYWxsVGFza3MuaW5kZXhPZih0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpKSxcbiAgICAgIDEsXG4gICAgKTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICB9LFxuXG4gIGZpbHRlclRhc2tCeURhdGU6IGZ1bmN0aW9uKGZpbHRlciwgY29tcGFyaXNvbikge1xuICAgIHJldHVybiB0aGlzLmFsbFRhc2tzWzBdLmZpbHRlcigodGFzaykgPT4gZmlsdGVyKHRhc2suZHVlRGF0ZSwgY29tcGFyaXNvbikpO1xuICB9LFxuXG4gIHNvcnRUYXNrQnlEYXRlOiBmdW5jdGlvbihhcnJheSkge1xuICAgIGNvbnN0IGNvbXBhcmVEYXRlID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgaWYgKGNvbXBhcmVEZXNjKGEuZHVlRGF0ZSwgYi5kdWVEYXRlKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIGlmIChjb21wYXJlRGVzYyhhLmR1ZURhdGUsIGIuZHVlRGF0ZSkgPCAwKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnJheS5zb3J0KGNvbXBhcmVEYXRlKTtcbiAgfSxcblxuICBmaWx0ZXJUYXNrQnlTZWN0aW9uOiBmdW5jdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRTZWN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkudGFza3M7XG4gIH0sXG5cbiAgZmlsdGVyVGFza0J5U3RhdHVzOiBmdW5jdGlvbihhcnJheSkge1xuICAgIHJldHVybiB7XG4gICAgICBkb25lOiBhcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdHVzID09PSBcImRvbmVcIiksXG4gICAgICBub3REb25lOiBhcnJheS5maWx0ZXIoKHRhc2spID0+IHRhc2suc3RhdHVzID09PSBcIm5vdCBkb25lXCIpLFxuICAgIH07XG4gIH0sXG5cbiAgZmlsdGVyT3ZlcmR1ZVRhc2tzOiBmdW5jdGlvbihhcnJheSkge1xuICAgIGNvbnN0IHRvZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKTtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJUYXNrQnlTdGF0dXMoYXJyYXkpLm5vdERvbmUuZmlsdGVyKCh0YXNrKSA9PlxuICAgICAgaXNCZWZvcmUodGFzay5kdWVEYXRlLCB0b2RheSksXG4gICAgKTtcbiAgfSxcblxuICBmaWx0ZXJOb3RPdmVyZHVlVGFza3M6IGZ1bmN0aW9uKGFycmF5KSB7XG4gICAgY29uc3QgdG9kYXkgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJ5eXl5LU1NLWRkXCIpO1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoXG4gICAgICAodGFzaykgPT4gIWlzQmVmb3JlKHRhc2suZHVlRGF0ZSwgdG9kYXkpIHx8IHRhc2suc3RhdHVzID09PSBcImRvbmVcIixcbiAgICApO1xuICB9LFxuXG4gIGVkaXRUYXNrOiBmdW5jdGlvbihcbiAgICB0YXNrLFxuICAgIG5ld1RpdGxlLFxuICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgIG5ld0R1ZURhdGUsXG4gICAgbmV3UHJpb3JpdHksXG4gICAgbmV3U3RhdHVzLFxuICAgIG5ld1Byb2plY3QsXG4gICAgbmV3U2VjdGlvbixcbiAgKSB7XG4gICAgbGV0IHsgcHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lIH0gPSB0aGlzLmdldFRhc2tQcm9qZWN0QW5kU2VjdGlvbih0YXNrKTtcbiAgICBjb25zdCBuZXdUYXNrID0gdGhpcy5jcmVhdGVUYXNrKFxuICAgICAgbmV3VGl0bGUsXG4gICAgICBuZXdEZXNjcmlwdGlvbixcbiAgICAgIG5ld0R1ZURhdGUsXG4gICAgICBuZXdQcmlvcml0eSxcbiAgICAgIG5ld1N0YXR1cyxcbiAgICApO1xuICAgIG5ld1Rhc2suaWQgPSB0YXNrLmlkO1xuICAgIHRoaXMuYWxsVGFza3NbMF0uc3BsaWNlKHRoaXMuYWxsVGFza3NbMF0uaW5kZXhPZih0YXNrKSwgMSwgbmV3VGFzayk7XG4gICAgdGhpcy5nZXRTZWN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkudGFza3Muc3BsaWNlKFxuICAgICAgdGhpcy5nZXRTZWN0aW9uVGFza0lkKHRhc2ssIHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSksXG4gICAgICAxLFxuICAgICAgbmV3VGFzayxcbiAgICApO1xuXG4gICAgaWYgKFxuICAgICAgIShcbiAgICAgICAgdGhpcy5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24obmV3VGFzaykucHJvamVjdE5hbWUgPT09IG5ld1Byb2plY3QgJiZcbiAgICAgICAgdGhpcy5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24obmV3VGFzaykuc2VjdGlvbk5hbWUgPT09IG5ld1NlY3Rpb25cbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuZGVsZXRlVGFzayhuZXdUYXNrKTtcbiAgICAgIHRoaXMuYWRkVGFzayhuZXdUYXNrLCBuZXdQcm9qZWN0LCBuZXdTZWN0aW9uKTtcbiAgICAgIHRoaXMuc2F2ZVRhc2tzKCk7XG4gICAgfVxuICAgIHRoaXMuc2F2ZVRhc2tzKCk7XG4gIH0sXG5cbiAgY2hhbmdlUHJvamVjdE5hbWU6IGZ1bmN0aW9uKG9sZFByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IG9sZFByb2plY3QgPSB0aGlzLmdldFByb2plY3Qob2xkUHJvamVjdE5hbWUpO1xuICAgIG9sZFByb2plY3QucHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0TmFtZTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICB9LFxuXG4gIGNoYW5nZVNlY3Rpb25OYW1lOiBmdW5jdGlvbihwcm9qZWN0TmFtZSwgb2xkU2VjdGlvbk5hbWUsIG5ld1NlY3Rpb25OYW1lKSB7XG4gICAgY29uc3Qgb2xkU2VjdGlvbiA9IHRoaXMuZ2V0U2VjdGlvbihwcm9qZWN0TmFtZSwgb2xkU2VjdGlvbk5hbWUpO1xuICAgIG9sZFNlY3Rpb24uc2VjdGlvbk5hbWUgPSBuZXdTZWN0aW9uTmFtZTtcbiAgICB0aGlzLnNhdmVUYXNrcygpO1xuICB9LFxuXG4gIGNvbXBsZXRlVGFzazogZnVuY3Rpb24odGFza2lkKSB7XG4gICAgY29uc3QgdGFzayA9IFRhc2tNYW5hZ2VyLmdldFRhc2tCeUlkKHRhc2tpZCk7XG4gICAgVGFza01hbmFnZXIuZWRpdFRhc2soXG4gICAgICB0YXNrLFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgXCJkb25lXCIsXG4gICAgICBUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykucHJvamVjdE5hbWUsXG4gICAgICBUYXNrTWFuYWdlci5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzaykuc2VjdGlvbk5hbWUsXG4gICAgKTtcbiAgfSxcblxuICB1bmNvbXBsZXRlVGFzazogZnVuY3Rpb24odGFza2lkKSB7XG4gICAgY29uc3QgdGFzayA9IFRhc2tNYW5hZ2VyLmdldFRhc2tCeUlkKHRhc2tpZCk7XG4gICAgVGFza01hbmFnZXIuZWRpdFRhc2soXG4gICAgICB0YXNrLFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgXCJub3QgZG9uZVwiLFxuICAgICAgVGFza01hbmFnZXIuZ2V0VGFza1Byb2plY3RBbmRTZWN0aW9uKHRhc2spLnByb2plY3ROYW1lLFxuICAgICAgVGFza01hbmFnZXIuZ2V0VGFza1Byb2plY3RBbmRTZWN0aW9uKHRhc2spLnNlY3Rpb25OYW1lLFxuICAgICk7XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrTWFuYWdlcjtcbiIsImltcG9ydCBcIi4vdG9kYXktcGFnZS1zdHlsZS5jc3NcIjtcbmltcG9ydCBQbHVzSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGx1cy5zdmdcIjtcbmltcG9ydCBIYW1zdGVyIGZyb20gXCIuL2ltYWdlcy9oYW1zdGVyLnBuZ1wiO1xuaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQge1xuICByZXZlYWxFbGVtZW50cyxcbiAgcmVtb3ZlRWxlbWVudHMsXG4gIGNoYW5nZVNpZGViYXJIaWdobGlnaHQsXG4gIGxvYWRUYXNrc0J5RGF0ZSxcbiAgbG9hZFByb2plY3RzVG9Ecm9wZG93bixcbiAgb3BlblRhc2ssXG4gIHJlcXVpcmVkRmllbGRBbGVydCxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBmb3JtYXQsIGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uKCkge1xuICBjb25zdCB0b2RheSA9IGZvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIik7XG5cbiAgY29uc3QgcmVuZGVyVG9kYXlQYWdlRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCB0b2RheUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5LWNvbnRlbnRcIik7XG4gICAgY29uc3QgdXBjb21pbmdDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGNvbWluZy1jb250ZW50XCIpO1xuICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRlbnRcIik7XG5cbiAgICB1cGNvbWluZ0NvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBwcm9qZWN0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHRvZGF5Q29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoMSBpZD1cInRvZGF5LXRpdGxlXCI+VG9kYXk8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwidG9kYXktdGFzay1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImFkZC10YXNrLWNvbnRhaW5lclwiIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXRhc2stYnV0dG9uXCIgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiYWRkLXRhc2stYnV0dG9uLWltZy1jb250YWluZXJcIiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiYWRkLXRhc2stYnV0dG9uLWltZ1wiIHNyYz1cIiR7UGx1c0ljb259XCIgYWx0PVwiUGx1c1wiIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJhZGQtdGFzay1sYWJlbFwiIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCI+QWRkIHRhc2s8L3A+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBpZD1cImluZm8tbW9kYWxcIiBjbGFzcz1cInJlbW92ZWRcIj5cbiAgICAgICAgICAgIDxmb3JtIGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgaWQ9XCJ0YXNrLWluZm8tbW9kYWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBpZD1cInRhc2stbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiBhdXRvY29tcGxldGU9XCJvZmZcIiByZXF1aXJlZD1cInRydWVcIiAvPlxuICAgICAgICAgICAgICAgIDxociBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGlkPVwiZGVzY3JpcHRpb25cIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgaWQ9XCJ0YXNrLWV4dHJhLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGlkPVwicHJpb3JpdHktY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIiBpZD1cInByaW9yaXR5XCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjFcIiBtYXg9XCI1XCIgdmFsdWU9XCIxXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiIGlkPVwic2VsZWN0LXByb2plY3RcIj48L3NlbGVjdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtb3Blbj1cImFkZCB0YXNrIG1vZGFsXCIgaWQ9XCJ0YXNrLWluZm8tbW9kYWwtYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic3VibWl0XCIgaWQ9XCJjb25maXJtLWFkZC10YXNrXCIgZGlzYWJsZWQgZGF0YS1vcGVuPVwiYWRkIHRhc2sgbW9kYWxcIj5PSzxkaXYgaWQ9XCJtZXNzYWdlXCI+PC9kaXY+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWwtYWRkLXRhc2tcIiBkYXRhLW9wZW49XCJhZGQgdGFzayBtb2RhbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cIm5vLXRhc2tcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuby10YXNrLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke0hhbXN0ZXJ9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJuby10YXNrLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8cD5XaGF0J3MgaGFwcGVuaW5nIHRvZGF5PzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICB9O1xuXG4gIHJlbmRlclRvZGF5UGFnZUVtcHR5KCk7XG5cbiAgY29uc3QgdG9kYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5XCIpO1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1idXR0b25cIik7XG4gIGNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tYWRkLXRhc2tcIik7XG4gIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLWFkZC10YXNrXCIpO1xuICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtdGFzay1jb250YWluZXJcIik7XG4gIGNvbnN0IGluZm9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5mby1tb2RhbFwiKTtcbiAgY29uc3QgdG9kYXlUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheS10YXNrLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgbm9UYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuby10YXNrXCIpO1xuICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRpYWxvZ1wiKTtcbiAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbmFtZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG4gIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlbGVjdC1wcm9qZWN0XCIpO1xuXG4gIGNoYW5nZVNpZGViYXJIaWdobGlnaHQodG9kYXlCdXR0b24pO1xuXG4gIGNvbnN0IGFkZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGVuYWJsZURlbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10YXNrXCIpKS5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNraWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIik7XG4gICAgICAgICAgVGFza01hbmFnZXIuZGVsZXRlVGFzayhUYXNrTWFuYWdlci5nZXRUYXNrQnlJZCh0YXNraWQpKTtcbiAgICAgICAgICBsb2FkVGFza3NCeURhdGUodG9kYXlUYXNrQ29udGFpbmVyLCBpc1RvZGF5KTtcbiAgICAgICAgICBtYWtlVGFza3NDbGlja2FibGUoKTtcbiAgICAgICAgICBlbmFibGVEZWxldGUoKTtcbiAgICAgICAgICBlbmFibGVDb21wbGV0ZVRhc2soKTtcbiAgICAgICAgICBpZiAoVGFza01hbmFnZXIuZmlsdGVyVGFza0J5RGF0ZShpc1RvZGF5KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldmVhbEVsZW1lbnRzKG5vVGFzayk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBlbmFibGVDbGlja091dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9wZW5cIikgIT09IFwiYWRkIHRhc2sgbW9kYWxcIikge1xuICAgICAgICAgIHJldmVhbEVsZW1lbnRzKGFkZFRhc2tDb250YWluZXIpO1xuICAgICAgICAgIHJlc2V0TW9kYWwoKTtcbiAgICAgICAgICByZW1vdmVFbGVtZW50cyhpbmZvTW9kYWwpO1xuICAgICAgICAgIGlmIChUYXNrTWFuYWdlci5maWx0ZXJUYXNrQnlEYXRlKGlzVG9kYXkpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV2ZWFsRWxlbWVudHMobm9UYXNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlVGFza3NDbGlja2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpKS5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIG9wZW5UYXNrKFxuICAgICAgICAgICAgVGFza01hbmFnZXIuZ2V0VGFza0J5SWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGVuYWJsZUNvbmZpcm1FZGl0VGFzayhcbiAgICAgICAgICAgIFRhc2tNYW5hZ2VyLmdldFRhc2tCeUlkKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKSksXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5hYmxlQ29tcGxldGVUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3hcIikpLmZvckVhY2goKGJ1dHRvbikgPT5cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGlmICghZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja2VkXCIpKSB7XG4gICAgICAgICAgICBUYXNrTWFuYWdlci5jb21wbGV0ZVRhc2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiLCBcImRvbmVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFRhc2tNYW5hZ2VyLnVuY29tcGxldGVUYXNrKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtdGFzay1pZFwiKSk7XG4gICAgICAgICAgICBlLnRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrZWRcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVuYWJsZUNvbmZpcm1FZGl0VGFzayA9IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgIGNvbnN0IGNvbmZpcm1FZGl0VGFza0J1dHRvbiA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1lZGl0LXRhc2tcIik7XG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Ryb3Bkb3duLXByb2plY3RzXCIpO1xuXG4gICAgICBjb25maXJtRWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIiNlZGl0LXRhc2stZGVzY3JpcHRpb25cIixcbiAgICAgICAgKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWR1ZS1kYXRlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IEFycmF5LmZyb20oc2VsZWN0aW9uLmNoaWxkcmVuKVtcbiAgICAgICAgICBzZWxlY3Rpb24uc2VsZWN0ZWRJbmRleFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIik7XG4gICAgICAgIGNvbnN0IG5ld1NlY3Rpb24gPSBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlY3Rpb24tbmFtZVwiKTtcblxuICAgICAgICBUYXNrTWFuYWdlci5lZGl0VGFzayhcbiAgICAgICAgICB0YXNrLFxuICAgICAgICAgIG5ld1RpdGxlLFxuICAgICAgICAgIG5ld0Rlc2NyaXB0aW9uLFxuICAgICAgICAgIG5ld0R1ZURhdGUsXG4gICAgICAgICAgbmV3UHJpb3JpdHksXG4gICAgICAgICAgdGFzay5zdGF0dXMsXG4gICAgICAgICAgbmV3UHJvamVjdCxcbiAgICAgICAgICBuZXdTZWN0aW9uLFxuICAgICAgICApO1xuICAgICAgICBsb2FkVGFza3NCeURhdGUodG9kYXlUYXNrQ29udGFpbmVyLCBpc1RvZGF5KTtcbiAgICAgICAgbWFrZVRhc2tzQ2xpY2thYmxlKCk7XG4gICAgICAgIGVuYWJsZURlbGV0ZSgpO1xuICAgICAgICBlbmFibGVDb21wbGV0ZVRhc2soKTtcbiAgICAgICAgaWYgKFRhc2tNYW5hZ2VyLmZpbHRlclRhc2tCeURhdGUoaXNUb2RheSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgcmV2ZWFsRWxlbWVudHMobm9UYXNrKTtcbiAgICAgICAgfVxuICAgICAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBpZiAoVGFza01hbmFnZXIuZmlsdGVyVGFza0J5RGF0ZShpc1RvZGF5KS5sZW5ndGggPiAwKSB7XG4gICAgICByZW1vdmVFbGVtZW50cyhub1Rhc2spO1xuICAgICAgbG9hZFRhc2tzQnlEYXRlKHRvZGF5VGFza0NvbnRhaW5lciwgaXNUb2RheSk7XG4gICAgICBtYWtlVGFza3NDbGlja2FibGUoKTtcbiAgICAgIGVuYWJsZURlbGV0ZSgpO1xuICAgICAgZW5hYmxlQ29tcGxldGVUYXNrKCk7XG4gICAgfVxuXG4gICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcmVtb3ZlRWxlbWVudHMoYWRkVGFza0NvbnRhaW5lcik7XG4gICAgICByZW1vdmVFbGVtZW50cyhub1Rhc2spO1xuICAgICAgcmV2ZWFsRWxlbWVudHMoaW5mb01vZGFsKTtcbiAgICAgIHRhc2tOYW1lLmZvY3VzKCk7XG4gICAgICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgbG9hZFByb2plY3RzVG9Ecm9wZG93bihwcm9qZWN0KTtcbiAgICAgIGVuYWJsZUNsaWNrT3V0KCk7XG4gICAgfSk7XG5cbiAgICBjb25maXJtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgY29uc3QgdGFza0luZm8gPSBnZXRUYXNrSW5mbygpO1xuICAgICAgY29uc3QgdGFzayA9IFRhc2tNYW5hZ2VyLmNyZWF0ZVRhc2soXG4gICAgICAgIHRhc2tJbmZvLnRpdGxlLFxuICAgICAgICB0YXNrSW5mby5kZXNjcmlwdGlvbixcbiAgICAgICAgdGFza0luZm8uZHVlRGF0ZSxcbiAgICAgICAgdGFza0luZm8ucHJpb3JpdHksXG4gICAgICAgIHRhc2tJbmZvLnN0YXR1cyxcbiAgICAgICk7XG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IEFycmF5LmZyb20ocHJvamVjdC5jaGlsZHJlbilbXG4gICAgICAgIHByb2plY3Quc2VsZWN0ZWRJbmRleFxuICAgICAgXTtcbiAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcm9qZWN0LW5hbWVcIik7XG4gICAgICBjb25zdCB0YXNrU2VjdGlvbiA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZShcImRhdGEtc2VjdGlvbi1uYW1lXCIpO1xuICAgICAgVGFza01hbmFnZXIuYWRkVGFzayh0YXNrLCB0YXNrUHJvamVjdCwgdGFza1NlY3Rpb24pO1xuICAgICAgbG9hZFRhc2tzQnlEYXRlKHRvZGF5VGFza0NvbnRhaW5lciwgaXNUb2RheSk7XG4gICAgICBtYWtlVGFza3NDbGlja2FibGUoKTtcbiAgICAgIGVuYWJsZURlbGV0ZSgpO1xuICAgICAgZW5hYmxlQ29tcGxldGVUYXNrKCk7XG4gICAgICByZXZlYWxFbGVtZW50cyhhZGRUYXNrQ29udGFpbmVyKTtcbiAgICAgIHJlbW92ZUVsZW1lbnRzKGluZm9Nb2RhbCk7XG4gICAgICByZXNldE1vZGFsKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICB0YXNrTmFtZS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRhc2tOYW1lLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgIGNvbmZpcm1CdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgcmV2ZWFsRWxlbWVudHMoYWRkVGFza0NvbnRhaW5lcik7XG4gICAgICByZXNldE1vZGFsKCk7XG4gICAgICByZW1vdmVFbGVtZW50cyhpbmZvTW9kYWwpO1xuICAgICAgaWYgKFRhc2tNYW5hZ2VyLmZpbHRlclRhc2tCeURhdGUoaXNUb2RheSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldmVhbEVsZW1lbnRzKG5vVGFzayk7XG4gICAgICB9XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRUYXNrSW5mbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IHRhc2tOYW1lLnZhbHVlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgIGR1ZURhdGU6IHRvZGF5LFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHkudmFsdWUsXG4gICAgICAgIHN0YXR1czogXCJub3QgZG9uZVwiLFxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGFza05hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgICAgcHJpb3JpdHkudmFsdWUgPSBcIjFcIjtcbiAgICB9O1xuICB9O1xuXG4gIGFkZEV2ZW50cygpO1xuICByZXF1aXJlZEZpZWxkQWxlcnQoY29uZmlybUJ1dHRvbiwgXCIjbWVzc2FnZVwiLCBcIlBsZWFzZSBmaWxsIGluIHRhc2sgbmFtZVwiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQ7XG4iLCJpbXBvcnQgXCIuL3VwY29taW5nLXBhZ2Utc3R5bGUuY3NzXCI7XG5pbXBvcnQge1xuICBjaGFuZ2VTaWRlYmFySGlnaGxpZ2h0LFxuICBsb2FkQ3VycmVudE1vbnRoLFxuICBsb2FkUGFzdE1vbnRoLFxuICBsb2FkRnV0dXJlTW9udGgsXG4gIHJldmVhbEVsZW1lbnRzLFxuICByZW1vdmVFbGVtZW50cyxcbiAgb3BlblRhc2ssXG4gIGxvYWRQcm9qZWN0c1RvRHJvcGRvd24sXG4gIHJlcXVpcmVkRmllbGRBbGVydCxcbn0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgeyBpc0JlZm9yZSwgaXNUaGlzTW9udGgsIGFkZCwgc3ViLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBUYXNrTWFuYWdlciBmcm9tIFwiLi90YXNrc1wiO1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHRvZGF5ID0gZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKTtcbiAgY29uc3QgdXBjb21pbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwY29taW5nXCIpO1xuICBjb25zdCB0YXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrLWRpYWxvZ1wiKTtcblxuICBsb2FkQ3VycmVudE1vbnRoKHRvZGF5KTtcbiAgY2hhbmdlU2lkZWJhckhpZ2hsaWdodCh1cGNvbWluZ0J1dHRvbik7XG5cbiAgY29uc3QgYWRkRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZW5hYmxlU3dpdGNoTW9udGhzID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zdCBwcmV2aW91c01vbnRoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmV2aW91cy1tb250aFwiKTtcbiAgICAgIGNvbnN0IG5leHRNb250aEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dC1tb250aFwiKTtcblxuICAgICAgcHJldmlvdXNNb250aEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zdCBwYWdlTW9udGggPSBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI21vbnRoLXBhZ2VcIilcbiAgICAgICAgICAuZ2V0QXR0cmlidXRlKFwiZGF0YS1tb250aFwiKTtcbiAgICAgICAgaWYgKGlzVGhpc01vbnRoKHN1YihwYWdlTW9udGgsIHsgbW9udGhzOiAxIH0pKSkge1xuICAgICAgICAgIGxvYWRDdXJyZW50TW9udGgodG9kYXkpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQmVmb3JlKHBhZ2VNb250aCwgYWRkKHRvZGF5LCB7IG1vbnRoczogMSB9KSkpIHtcbiAgICAgICAgICBsb2FkUGFzdE1vbnRoKHN1YihwYWdlTW9udGgsIHsgbW9udGhzOiAxIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2FkRnV0dXJlTW9udGgodG9kYXksIHN1YihwYWdlTW9udGgsIHsgbW9udGhzOiAxIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuYWJsZVN3aXRjaE1vbnRocygpO1xuICAgICAgICBlbmFibGVEZWxldGVUYXNrKCk7XG4gICAgICAgIGVuYWJsZUFkZFRhc2soKTtcbiAgICAgICAgZW5hYmxlQ2FuY2VsQWRkVGFzaygpO1xuICAgICAgICBlbmFibGVDb25maXJtQWRkVGFzaygpO1xuICAgICAgICBtYWtlVGFza3NDbGlja2FibGUoKTtcbiAgICAgICAgZW5hYmxlQ29tcGxldGVUYXNrKCk7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLW5hbWVcIikpLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFEdWVEYXRlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1kdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYFtkYXRhLWR1ZS1kYXRlPVwiJHtkYXRhRHVlRGF0ZX1cIl1bY2xhc3N+PVwiY29uZmlybS1hZGQtdGFza1wiXWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2RhdGFEdWVEYXRlfVwiXVtjbGFzc349XCJjb25maXJtLWFkZC10YXNrXCJdYCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29uZmlybS1hZGQtdGFza1wiKSkuZm9yRWFjaChcbiAgICAgICAgICAoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhRHVlRGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWR1ZS1kYXRlXCIpO1xuICAgICAgICAgICAgcmVxdWlyZWRGaWVsZEFsZXJ0KFxuICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgIGBbZGF0YS1kdWUtZGF0ZT1cIiR7ZGF0YUR1ZURhdGV9XCJdW2NsYXNzPVwibWVzc2FnZVwiXWAsXG4gICAgICAgICAgICAgIFwiUGxlYXNlIGZpbGwgaW4gdGFzayBuYW1lXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpKS5sZW5ndGggPT0gMFxuICAgICAgICAgID8gcmV2ZWFsRWxlbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1jb250YWluZXJcIikpXG4gICAgICAgICAgOiByZW1vdmVFbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLWNvbnRhaW5lclwiKSk7XG4gICAgICB9KTtcblxuICAgICAgbmV4dE1vbnRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhZ2VNb250aCA9IGRvY3VtZW50XG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIjbW9udGgtcGFnZVwiKVxuICAgICAgICAgIC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1vbnRoXCIpO1xuICAgICAgICBpZiAoaXNUaGlzTW9udGgoYWRkKHBhZ2VNb250aCwgeyBtb250aHM6IDEgfSkpKSB7XG4gICAgICAgICAgbG9hZEN1cnJlbnRNb250aCh0b2RheSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNCZWZvcmUocGFnZU1vbnRoLCBzdWIodG9kYXksIHsgbW9udGhzOiAxIH0pKSkge1xuICAgICAgICAgIGxvYWRQYXN0TW9udGgodG9kYXksIGFkZChwYWdlTW9udGgsIHsgbW9udGhzOiAxIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2FkRnV0dXJlTW9udGgodG9kYXksIGFkZChwYWdlTW9udGgsIHsgbW9udGhzOiAxIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVuYWJsZVN3aXRjaE1vbnRocygpO1xuICAgICAgICBlbmFibGVEZWxldGVUYXNrKCk7XG4gICAgICAgIGVuYWJsZUFkZFRhc2soKTtcbiAgICAgICAgZW5hYmxlQ2FuY2VsQWRkVGFzaygpO1xuICAgICAgICBlbmFibGVDb25maXJtQWRkVGFzaygpO1xuICAgICAgICBtYWtlVGFza3NDbGlja2FibGUoKTtcbiAgICAgICAgZW5hYmxlQ29tcGxldGVUYXNrKCk7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrLW5hbWVcIikpLmZvckVhY2goKGVsZW1lbnQpID0+XG4gICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFEdWVEYXRlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1kdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgYFtkYXRhLWR1ZS1kYXRlPVwiJHtkYXRhRHVlRGF0ZX1cIl1bY2xhc3N+PVwiY29uZmlybS1hZGQtdGFza1wiXWAsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2RhdGFEdWVEYXRlfVwiXVtjbGFzc349XCJjb25maXJtLWFkZC10YXNrXCJdYCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29uZmlybS1hZGQtdGFza1wiKSkuZm9yRWFjaChcbiAgICAgICAgICAoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhRHVlRGF0ZSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWR1ZS1kYXRlXCIpO1xuICAgICAgICAgICAgcmVxdWlyZWRGaWVsZEFsZXJ0KFxuICAgICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICAgIGBbZGF0YS1kdWUtZGF0ZT1cIiR7ZGF0YUR1ZURhdGV9XCJdW2NsYXNzPVwibWVzc2FnZVwiXWAsXG4gICAgICAgICAgICAgIFwiUGxlYXNlIGZpbGwgaW4gdGFzayBuYW1lXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICk7XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpKS5sZW5ndGggPT0gMFxuICAgICAgICAgID8gcmV2ZWFsRWxlbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1jb250YWluZXJcIikpXG4gICAgICAgICAgOiByZW1vdmVFbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLWNvbnRhaW5lclwiKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5hYmxlRGVsZXRlVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS10YXNrXCIpKS5mb3JFYWNoKChidXR0b24pID0+XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNraWQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIik7XG4gICAgICAgICAgVGFza01hbmFnZXIuZGVsZXRlVGFzayhUYXNrTWFuYWdlci5nZXRUYXNrQnlJZCh0YXNraWQpKTtcbiAgICAgICAgICByZWxvYWRGbG93KCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVuYWJsZUNsaWNrT3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtb3BlblwiKSAhPT0gXCJhZGQgdGFzayBtb2RhbFwiKSB7XG4gICAgICAgICAgQXJyYXkuZnJvbShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudXBjb21pbmctcGFnZS10YXNrLWluZm8tbW9kYWxcIiksXG4gICAgICAgICAgKS5mb3JFYWNoKChtb2RhbCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMobW9kYWwpO1xuICAgICAgICAgICAgcmVzZXRNb2RhbChtb2RhbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWR1ZS1kYXRlXCIpKTtcbiAgICAgICAgICAgIHJldmVhbEVsZW1lbnRzKFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1kdWUtZGF0ZT1cIiR7bW9kYWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1kdWUtZGF0ZVwiKX1cIl1bY2xhc3N+PVwiYWRkLXRhc2stYnV0dG9uXCJdYCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICByZXZlYWxFbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLWNvbnRhaW5lclwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5hYmxlQWRkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFkZC10YXNrLWJ1dHRvblwiKSkuZm9yRWFjaChcbiAgICAgICAgKGJ1dHRvbikgPT5cbiAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICByZXZlYWxFbGVtZW50cyhcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2UudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZHVlLWRhdGVcIil9XCJdW2NsYXNzfj1cInVwY29taW5nLXBhZ2UtdGFzay1pbmZvLW1vZGFsXCJdYCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cyhcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2UudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZHVlLWRhdGVcIil9XCJdW2NsYXNzfj1cImFkZC10YXNrLWJ1dHRvblwiXWAsXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbWFnZS1jb250YWluZXJcIikpO1xuICAgICAgICAgICAgbG9hZFByb2plY3RzVG9Ecm9wZG93bihcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2UudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZHVlLWRhdGVcIil9XCJdW2NsYXNzfj1cInNlbGVjdC1wcm9qZWN0XCJdYCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2UudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZHVlLWRhdGVcIil9XCJdW2NsYXNzfj1cInRhc2stbmFtZVwiXWAsXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLmZvY3VzKCk7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2UudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZHVlLWRhdGVcIil9XCJdW2NsYXNzfj1cImNvbmZpcm0tYWRkLXRhc2tcIl1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIGVuYWJsZUNsaWNrT3V0KCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgfSksXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBlbmFibGVDYW5jZWxBZGRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FuY2VsLWFkZC10YXNrXCIpKS5mb3JFYWNoKFxuICAgICAgICAoYnV0dG9uKSA9PlxuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIHJldmVhbEVsZW1lbnRzKFxuICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1kdWUtZGF0ZT1cIiR7ZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1kdWUtZGF0ZVwiKX1cIl1bY2xhc3N+PVwiYWRkLXRhc2stYnV0dG9uXCJdYCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cyhcbiAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2UudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZHVlLWRhdGVcIil9XCJdW2NsYXNzfj1cInVwY29taW5nLXBhZ2UtdGFzay1pbmZvLW1vZGFsXCJdYCxcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICByZXZlYWxFbGVtZW50cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ltYWdlLWNvbnRhaW5lclwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNldE1vZGFsKGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZHVlLWRhdGVcIikpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZW5hYmxlQ29uZmlybUFkZFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb25maXJtLWFkZC10YXNrXCIpKS5mb3JFYWNoKFxuICAgICAgICAoYnV0dG9uKSA9PlxuICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGFEdWVEYXRlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1kdWUtZGF0ZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWR1ZS1kYXRlPVwiJHtkYXRhRHVlRGF0ZX1cIl1bY2xhc3N+PVwidGFzay1uYW1lXCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS1kdWUtZGF0ZT1cIiR7ZGF0YUR1ZURhdGV9XCJdW2NsYXNzfj1cImRlc2NyaXB0aW9uXCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgIGBbZGF0YS1kdWUtZGF0ZT1cIiR7ZGF0YUR1ZURhdGV9XCJdW2NsYXNzfj1cInByaW9yaXR5XCJdYCxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgYFtkYXRhLWR1ZS1kYXRlPVwiJHtkYXRhRHVlRGF0ZX1cIl1bY2xhc3N+PVwic2VsZWN0LXByb2plY3RcIl1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gQXJyYXkuZnJvbShwcm9qZWN0LmNoaWxkcmVuKVtcbiAgICAgICAgICAgICAgcHJvamVjdC5zZWxlY3RlZEluZGV4XG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPVxuICAgICAgICAgICAgICBzZWxlY3RlZE9wdGlvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tTZWN0aW9uID1cbiAgICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWN0aW9uLW5hbWVcIik7XG5cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIShkYXRhRHVlRGF0ZSA9PT0gXCJ0aGlzLXdlZWtcIiB8fCBkYXRhRHVlRGF0ZSA9PT0gXCJ0aGlzLW1vbnRoXCIpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29uc3QgdGFzayA9IFRhc2tNYW5hZ2VyLmNyZWF0ZVRhc2soXG4gICAgICAgICAgICAgICAgdGFza05hbWUudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0YUR1ZURhdGUsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICAgICAgXCJub3QgZG9uZVwiLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBUYXNrTWFuYWdlci5hZGRUYXNrKHRhc2ssIHRhc2tQcm9qZWN0LCB0YXNrU2VjdGlvbik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2RhdGFEdWVEYXRlfVwiXVtjbGFzc349XCJkdWUtZGF0ZVwiXWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBUYXNrTWFuYWdlci5jcmVhdGVUYXNrKFxuICAgICAgICAgICAgICAgIHRhc2tOYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgIGR1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHkudmFsdWUsXG4gICAgICAgICAgICAgICAgXCJub3QgZG9uZVwiLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBUYXNrTWFuYWdlci5hZGRUYXNrKHRhc2ssIHRhc2tQcm9qZWN0LCB0YXNrU2VjdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlbG9hZEZsb3coKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IG1ha2VUYXNrc0NsaWNrYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikpLmZvckVhY2goKHRhc2spID0+XG4gICAgICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgb3BlblRhc2soXG4gICAgICAgICAgICBUYXNrTWFuYWdlci5nZXRUYXNrQnlJZChlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgZW5hYmxlQ29uZmlybUVkaXRUYXNrKFxuICAgICAgICAgICAgVGFza01hbmFnZXIuZ2V0VGFza0J5SWQoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKSxcbiAgICAgICAgICApO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH07XG5cbiAgICBjb25zdCBlbmFibGVDb25maXJtRWRpdFRhc2sgPSBmdW5jdGlvbih0YXNrKSB7XG4gICAgICBjb25zdCBjb25maXJtRWRpdFRhc2tCdXR0b24gPVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tZWRpdC10YXNrXCIpO1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkcm9wZG93bi1wcm9qZWN0c1wiKTtcblxuICAgICAgY29uZmlybUVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIjZWRpdC10YXNrLWRlc2NyaXB0aW9uXCIsXG4gICAgICAgICkudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1kdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBBcnJheS5mcm9tKHNlbGVjdGlvbi5jaGlsZHJlbilbXG4gICAgICAgICAgc2VsZWN0aW9uLnNlbGVjdGVkSW5kZXhcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHNlbGVjdGVkT3B0aW9uLmdldEF0dHJpYnV0ZShcImRhdGEtcHJvamVjdC1uYW1lXCIpO1xuICAgICAgICBjb25zdCBuZXdTZWN0aW9uID0gc2VsZWN0ZWRPcHRpb24uZ2V0QXR0cmlidXRlKFwiZGF0YS1zZWN0aW9uLW5hbWVcIik7XG5cbiAgICAgICAgVGFza01hbmFnZXIuZWRpdFRhc2soXG4gICAgICAgICAgdGFzayxcbiAgICAgICAgICBuZXdUaXRsZSxcbiAgICAgICAgICBuZXdEZXNjcmlwdGlvbixcbiAgICAgICAgICBuZXdEdWVEYXRlLFxuICAgICAgICAgIG5ld1ByaW9yaXR5LFxuICAgICAgICAgIHRhc2suc3RhdHVzLFxuICAgICAgICAgIG5ld1Byb2plY3QsXG4gICAgICAgICAgbmV3U2VjdGlvbixcbiAgICAgICAgKTtcbiAgICAgICAgcmVsb2FkRmxvdygpO1xuICAgICAgICB0YXNrRGlhbG9nLmNsb3NlKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBlbmFibGVDb21wbGV0ZVRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKSkuZm9yRWFjaCgoYnV0dG9uKSA9PlxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgaWYgKCFlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgIFRhc2tNYW5hZ2VyLmNvbXBsZXRlVGFzayhlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2staWRcIikpO1xuICAgICAgICAgICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja2VkXCIsIFwiZG9uZVwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVGFza01hbmFnZXIudW5jb21wbGV0ZVRhc2soZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS10YXNrLWlkXCIpKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtY2hlY2tlZFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVsb2FkRmxvdygpO1xuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbG9hZEZsb3cgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHBhZ2VNb250aCA9IGRvY3VtZW50XG4gICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiI21vbnRoLXBhZ2VcIilcbiAgICAgICAgLmdldEF0dHJpYnV0ZShcImRhdGEtbW9udGhcIik7XG4gICAgICBpc1RoaXNNb250aChwYWdlTW9udGgpXG4gICAgICAgID8gbG9hZEN1cnJlbnRNb250aCh0b2RheSlcbiAgICAgICAgOiBsb2FkRnV0dXJlTW9udGgodG9kYXksIHBhZ2VNb250aCk7XG4gICAgICBlbmFibGVTd2l0Y2hNb250aHMoKTtcbiAgICAgIGVuYWJsZURlbGV0ZVRhc2soKTtcbiAgICAgIGVuYWJsZUFkZFRhc2soKTtcbiAgICAgIGVuYWJsZUNhbmNlbEFkZFRhc2soKTtcbiAgICAgIGVuYWJsZUNvbmZpcm1BZGRUYXNrKCk7XG4gICAgICBtYWtlVGFza3NDbGlja2FibGUoKTtcbiAgICAgIGVuYWJsZUNvbXBsZXRlVGFzaygpO1xuICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2stbmFtZVwiKSkuZm9yRWFjaCgoZWxlbWVudCkgPT5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRhRHVlRGF0ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZHVlLWRhdGVcIik7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2RhdGFEdWVEYXRlfVwiXVtjbGFzc349XCJjb25maXJtLWFkZC10YXNrXCJdYCxcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIGBbZGF0YS1kdWUtZGF0ZT1cIiR7ZGF0YUR1ZURhdGV9XCJdW2NsYXNzfj1cImNvbmZpcm0tYWRkLXRhc2tcIl1gLFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb25maXJtLWFkZC10YXNrXCIpKS5mb3JFYWNoKFxuICAgICAgICAoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0YUR1ZURhdGUgPSBidXR0b24uZ2V0QXR0cmlidXRlKFwiZGF0YS1kdWUtZGF0ZVwiKTtcbiAgICAgICAgICByZXF1aXJlZEZpZWxkQWxlcnQoXG4gICAgICAgICAgICBidXR0b24sXG4gICAgICAgICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2RhdGFEdWVEYXRlfVwiXVtjbGFzcz1cIm1lc3NhZ2VcIl1gLFxuICAgICAgICAgICAgXCJQbGVhc2UgZmlsbCBpbiB0YXNrIG5hbWVcIixcbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpKS5sZW5ndGggPT0gMFxuICAgICAgICA/IHJldmVhbEVsZW1lbnRzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2UtY29udGFpbmVyXCIpKVxuICAgICAgICA6IHJlbW92ZUVsZW1lbnRzKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW1hZ2UtY29udGFpbmVyXCIpKTtcbiAgICB9O1xuXG4gICAgcmVsb2FkRmxvdygpO1xuICB9O1xuICBhZGRFdmVudHMoKTtcblxuICBjb25zdCByZXNldE1vZGFsID0gZnVuY3Rpb24oZGF0YUR1ZURhdGUpIHtcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBgW2RhdGEtZHVlLWRhdGU9XCIke2RhdGFEdWVEYXRlfVwiXVtjbGFzc349XCJ0YXNrLW5hbWVcIl1gLFxuICAgICk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWR1ZS1kYXRlPVwiJHtkYXRhRHVlRGF0ZX1cIl1bY2xhc3N+PVwiZGVzY3JpcHRpb25cIl1gLFxuICAgICk7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWR1ZS1kYXRlPVwiJHtkYXRhRHVlRGF0ZX1cIl1bY2xhc3N+PVwicHJpb3JpdHlcIl1gLFxuICAgICk7XG5cbiAgICB0YXNrTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgZGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIHByaW9yaXR5LnZhbHVlID0gXCIxXCI7XG5cbiAgICBpZiAoZGF0YUR1ZURhdGUgPT09IFwidGhpcy13ZWVrXCIgfHwgZGF0YUR1ZURhdGUgPT09IFwidGhpcy1tb250aFwiKSB7XG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtkYXRhLWR1ZS1kYXRlPVwiJHtkYXRhRHVlRGF0ZX1cIl1bY2xhc3N+PVwiZHVlLWRhdGVcIl1gLFxuICAgICAgKTtcbiAgICAgIGR1ZURhdGUudmFsdWUgPSB0b2RheTtcbiAgICB9XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICBjb25zdCBzaWduID0gbnVtYmVyIDwgMCA/IFwiLVwiIDogXCJcIjtcbiAgY29uc3Qgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpLnBhZFN0YXJ0KHRhcmdldExlbmd0aCwgXCIwXCIpO1xuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn1cbiIsImxldCBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufVxuIiwiaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSBcIi4uLy4uL2dldERheU9mWWVhci5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWsgfSBmcm9tIFwiLi4vLi4vZ2V0SVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGdldElTT1dlZWtZZWFyIH0gZnJvbSBcIi4uLy4uL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gXCIuLi8uLi9nZXRXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0V2Vla1llYXIgfSBmcm9tIFwiLi4vLi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVyb3MgfSBmcm9tIFwiLi4vYWRkTGVhZGluZ1plcm9zLm1qc1wiO1xuaW1wb3J0IHsgbGlnaHRGb3JtYXR0ZXJzIH0gZnJvbSBcIi4vbGlnaHRGb3JtYXR0ZXJzLm1qc1wiO1xuXG5jb25zdCBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogXCJhbVwiLFxuICBwbTogXCJwbVwiLFxuICBtaWRuaWdodDogXCJtaWRuaWdodFwiLFxuICBub29uOiBcIm5vb25cIixcbiAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gIGFmdGVybm9vbjogXCJhZnRlcm5vb25cIixcbiAgZXZlbmluZzogXCJldmVuaW5nXCIsXG4gIG5pZ2h0OiBcIm5pZ2h0XCIsXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgZXJhID0gZGF0ZS5nZXRGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSBcIkdcIjpcbiAgICAgIGNhc2UgXCJHR1wiOlxuICAgICAgY2FzZSBcIkdHR1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJhYmJyZXZpYXRlZFwiIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSBcIkdHR0dHXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7IHdpZHRoOiBcIm5hcnJvd1wiIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgXCJHR0dHXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwgeyB3aWR0aDogXCJ3aWRlXCIgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSBcInlvXCIpIHtcbiAgICAgIGNvbnN0IHNpZ25lZFllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwgeyB1bml0OiBcInllYXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHNpZ25lZFdlZWtZZWFyID0gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICBjb25zdCB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09IFwiWVlcIikge1xuICAgICAgY29uc3QgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09IFwiWW9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHsgdW5pdDogXCJ5ZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgY29uc3QgaXNvV2Vla1llYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0TW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSBcIlFcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlIFwiUVFcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSBcIlFvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHsgdW5pdDogXCJxdWFydGVyXCIgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSBcIlFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgXCJRUVFRUVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwibmFycm93XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgXCJRUVFRXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlIFwicVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgXCJxcVwiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlIFwicW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwgeyB1bml0OiBcInF1YXJ0ZXJcIiB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlIFwicXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSBcInFxcXFxXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSBcInFxcXFcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcIk1cIjpcbiAgICAgIGNhc2UgXCJNTVwiOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIk1vXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJNTU1cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJNTU1NTVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIk1NTU1cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSBcIkxcIjpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlIFwiTExcIjpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSBcIkxvXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwgeyB1bml0OiBcIm1vbnRoXCIgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgXCJMTExcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgXCJMTExMTFwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSBcIkxMTExcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwgeyB3aWR0aDogXCJ3aWRlXCIsIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IHdlZWsgPSBnZXRXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIndvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGlzb1dlZWsgPSBnZXRJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSBcIklvXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHsgdW5pdDogXCJ3ZWVrXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJkb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldERhdGUoKSwgeyB1bml0OiBcImRhdGVcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiRG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7IHVuaXQ6IFwiZGF5T2ZZZWFyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlIFwiRVwiOlxuICAgICAgY2FzZSBcIkVFXCI6XG4gICAgICBjYXNlIFwiRUVFXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlIFwiRUVFRUVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSBcIkVFRUVFRVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcInNob3J0XCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSBcIkVFRUVcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwid2lkZVwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgXCJlXCI6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSBcImVlXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiZW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJlZWVcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJlZWVlZVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiZWVlZWVlXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiZWVlZVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICBjb25zdCBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgXCJjY1wiOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlIFwiY29cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHsgdW5pdDogXCJkYXlcIiB9KTtcbiAgICAgIGNhc2UgXCJjY2NcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJjY2NjY1wiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiY2NjY2NjXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcInN0YW5kYWxvbmVcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiY2NjY1wiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJzdGFuZGFsb25lXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7XG4gICAgY29uc3QgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlIFwiaVwiOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSBcImlpXCI6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlIFwiaW9cIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7IHVuaXQ6IFwiZGF5XCIgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgXCJpaWlcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgXCJpaWlpaVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlIFwiaWlpaWlpXCI6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6IFwic2hvcnRcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlIFwiaWlpaVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImFhYVwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYWFhYVwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyBcInBtXCIgOiBcImFtXCI7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImJcIjpcbiAgICAgIGNhc2UgXCJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcImFiYnJldmlhdGVkXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSBcImJiYlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemVcbiAgICAgICAgICAuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgICAgd2lkdGg6IFwiYWJicmV2aWF0ZWRcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYmJiYmJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJuYXJyb3dcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgICBjYXNlIFwiYmJiYlwiOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJ3aWRlXCIsXG4gICAgICAgICAgY29udGV4dDogXCJmb3JtYXR0aW5nXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBsZXQgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgXCJCXCI6XG4gICAgICBjYXNlIFwiQkJcIjpcbiAgICAgIGNhc2UgXCJCQkJcIjpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogXCJhYmJyZXZpYXRlZFwiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCQlwiOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIm5hcnJvd1wiLFxuICAgICAgICAgIGNvbnRleHQ6IFwiZm9ybWF0dGluZ1wiLFxuICAgICAgICB9KTtcbiAgICAgIGNhc2UgXCJCQkJCXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICAgICAgICBjb250ZXh0OiBcImZvcm1hdHRpbmdcIixcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiaG9cIikge1xuICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09IFwiSG9cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRIb3VycygpLCB7IHVuaXQ6IFwiaG91clwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09IFwiS29cIikge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHsgdW5pdDogXCJob3VyXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gXCJrb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3VycywgeyB1bml0OiBcImhvdXJcIiB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSBcIm1vXCIpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0TWludXRlcygpLCB7IHVuaXQ6IFwibWludXRlXCIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcblxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gXCJzb1wiKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFNlY29uZHMoKSwgeyB1bml0OiBcInNlY29uZFwiIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFwiWlwiO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwiWFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlIFwiWFhYWFwiOlxuICAgICAgY2FzZSBcIlhYXCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlIFwiWFhYWFhcIjpcbiAgICAgIGNhc2UgXCJYWFhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlIFwieHh4eFwiOlxuICAgICAgY2FzZSBcInh4XCI6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlIFwieHh4eHhcIjpcbiAgICAgIGNhc2UgXCJ4eHhcIjogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwiT1wiOlxuICAgICAgY2FzZSBcIk9PXCI6XG4gICAgICBjYXNlIFwiT09PXCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcIk9PT09cIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lem9uZU9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlIFwielwiOlxuICAgICAgY2FzZSBcInp6XCI6XG4gICAgICBjYXNlIFwienp6XCI6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgXCI6XCIpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSBcInp6enpcIjpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIkdNVFwiICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsIFwiOlwiKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUpIHtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBNYXRoLnRydW5jKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSkge1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRlbGltaXRlciA9IFwiXCIpIHtcbiAgY29uc3Qgc2lnbiA9IG9mZnNldCA+IDAgPyBcIi1cIiA6IFwiK1wiO1xuICBjb25zdCBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICBjb25zdCBob3VycyA9IE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApO1xuICBjb25zdCBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIGNvbnN0IHNpZ24gPSBvZmZzZXQgPiAwID8gXCItXCIgOiBcIitcIjtcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGVsaW1pdGVyID0gXCJcIikge1xuICBjb25zdCBzaWduID0gb2Zmc2V0ID4gMCA/IFwiLVwiIDogXCIrXCI7XG4gIGNvbnN0IGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIGNvbnN0IGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGgudHJ1bmMoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgY29uc3QgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuIiwiaW1wb3J0IHsgYWRkTGVhZGluZ1plcm9zIH0gZnJvbSBcIi4uL2FkZExlYWRpbmdaZXJvcy5tanNcIjtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxuZXhwb3J0IGNvbnN0IGxpZ2h0Rm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICBjb25zdCBzaWduZWRZZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgY29uc3QgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09IFwieXlcIiA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIE1vbnRoXG4gIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09IFwiTVwiID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcblxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIEFNIG9yIFBNXG4gIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICBjb25zdCBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldEhvdXJzKCkgLyAxMiA+PSAxID8gXCJwbVwiIDogXCJhbVwiO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSBcImFcIjpcbiAgICAgIGNhc2UgXCJhYVwiOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlIFwiYWFhXCI6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlIFwiYWFhYWFcIjpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgXCJhYWFhXCI6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSBcImFtXCIgPyBcImEubS5cIiA6IFwicC5tLlwiO1xuICAgIH1cbiAgfSxcblxuICAvLyBIb3VyIFsxLTEyXVxuICBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBIb3VyIFswLTIzXVxuICBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEhvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG5cbiAgLy8gTWludXRlXG4gIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuXG4gIC8vIFNlY29uZFxuICBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFNlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcblxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUyhkYXRlLCB0b2tlbikge1xuICAgIGNvbnN0IG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XG4gICAgY29uc3QgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLnRydW5jKFxuICAgICAgbWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMyksXG4gICAgKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxufTtcbiIsImNvbnN0IGRhdGVMb25nRm9ybWF0dGVyID0gKHBhdHRlcm4sIGZvcm1hdExvbmcpID0+IHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSBcIlBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgIGNhc2UgXCJQUFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcIm1lZGl1bVwiIH0pO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoeyB3aWR0aDogXCJsb25nXCIgfSk7XG4gICAgY2FzZSBcIlBQUFBcIjpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgfVxufTtcblxuY29uc3QgdGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlIFwicFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcInNob3J0XCIgfSk7XG4gICAgY2FzZSBcInBwXCI6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwibWVkaXVtXCIgfSk7XG4gICAgY2FzZSBcInBwcFwiOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICBjYXNlIFwicHBwcFwiOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHsgd2lkdGg6IFwiZnVsbFwiIH0pO1xuICB9XG59O1xuXG5jb25zdCBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSAocGF0dGVybiwgZm9ybWF0TG9uZykgPT4ge1xuICBjb25zdCBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICBjb25zdCBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICBjb25zdCB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICBsZXQgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgXCJQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJzaG9ydFwiIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBQXCI6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoeyB3aWR0aDogXCJtZWRpdW1cIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBcIjpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImxvbmdcIiB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJQUFBQXCI6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7IHdpZHRoOiBcImZ1bGxcIiB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0XG4gICAgLnJlcGxhY2UoXCJ7e2RhdGV9fVwiLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpXG4gICAgLnJlcGxhY2UoXCJ7e3RpbWV9fVwiLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgdXRjRGF0ZSA9IG5ldyBEYXRlKFxuICAgIERhdGUuVVRDKFxuICAgICAgX2RhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBfZGF0ZS5nZXREYXRlKCksXG4gICAgICBfZGF0ZS5nZXRIb3VycygpLFxuICAgICAgX2RhdGUuZ2V0TWludXRlcygpLFxuICAgICAgX2RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgX2RhdGUuZ2V0TWlsbGlzZWNvbmRzKCksXG4gICAgKSxcbiAgKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihfZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuICtkYXRlIC0gK3V0Y0RhdGU7XG59XG4iLCJjb25zdCBkYXlPZlllYXJUb2tlblJFID0gL15EKyQvO1xuY29uc3Qgd2Vla1llYXJUb2tlblJFID0gL15ZKyQvO1xuXG5jb25zdCB0aHJvd1Rva2VucyA9IFtcIkRcIiwgXCJERFwiLCBcIllZXCIsIFwiWVlZWVwiXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIGRheU9mWWVhclRva2VuUkUudGVzdCh0b2tlbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHdlZWtZZWFyVG9rZW5SRS50ZXN0KHRva2VuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PclRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgY29uc3QgX21lc3NhZ2UgPSBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KTtcbiAgY29uc29sZS53YXJuKF9tZXNzYWdlKTtcbiAgaWYgKHRocm93VG9rZW5zLmluY2x1ZGVzKHRva2VuKSkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoX21lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGNvbnN0IHN1YmplY3QgPSB0b2tlblswXSA9PT0gXCJZXCIgPyBcInllYXJzXCIgOiBcImRheXMgb2YgdGhlIG1vbnRoXCI7XG4gIHJldHVybiBgVXNlIFxcYCR7dG9rZW4udG9Mb3dlckNhc2UoKX1cXGAgaW5zdGVhZCBvZiBcXGAke3Rva2VufVxcYCAoaW4gXFxgJHtmb3JtYXR9XFxgKSBmb3IgZm9ybWF0dGluZyAke3N1YmplY3R9IHRvIHRoZSBpbnB1dCBcXGAke2lucHV0fVxcYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kYDtcbn1cbiIsImltcG9ydCB7IGFkZERheXMgfSBmcm9tIFwiLi9hZGREYXlzLm1qc1wiO1xuaW1wb3J0IHsgYWRkTW9udGhzIH0gZnJvbSBcIi4vYWRkTW9udGhzLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIHllYXJzLCBtb250aHMsIHdlZWtzLCBkYXlzLCBob3VycywgbWludXRlcyBhbmQgc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBkdXJhdGlvbiAtIFRoZSBvYmplY3Qgd2l0aCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgdG8gYmUgYWRkZWQuXG4gKlxuICogfCBLZXkgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCB5ZWFycyAgICAgICAgICB8IEFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtb250aHMgICAgICAgICB8IEFtb3VudCBvZiBtb250aHMgdG8gYmUgYWRkZWQgICAgICAgfFxuICogfCB3ZWVrcyAgICAgICAgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBkYXlzICAgICAgICAgICB8IEFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkICAgICAgICAgfFxuICogfCBob3VycyAgICAgICAgICB8IEFtb3VudCBvZiBob3VycyB0byBiZSBhZGRlZCAgICAgICAgfFxuICogfCBtaW51dGVzICAgICAgICB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIGFkZGVkICAgICAgfFxuICogfCBzZWNvbmRzICAgICAgICB8IEFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkICAgICAgfFxuICpcbiAqIEFsbCB2YWx1ZXMgZGVmYXVsdCB0byAwXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIHNlY29uZHMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIHRoZSBmb2xsb3dpbmcgZHVyYXRpb24gdG8gMSBTZXB0ZW1iZXIgMjAxNCwgMTA6MTk6NTBcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZChuZXcgRGF0ZSgyMDE0LCA4LCAxLCAxMCwgMTksIDUwKSwge1xuICogICB5ZWFyczogMixcbiAqICAgbW9udGhzOiA5LFxuICogICB3ZWVrczogMSxcbiAqICAgZGF5czogNyxcbiAqICAgaG91cnM6IDUsXFxcXC03XG4gKiAgIG1pbnV0ZXM6IDksXG4gKiAgIHNlY29uZHM6IDMwLFxuICogfSlcbiAqIC8vPT4gVGh1IEp1biAxNSAyMDE3IDE1OjI5OjIwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGQoZGF0ZSwgZHVyYXRpb24pIHtcbiAgY29uc3Qge1xuICAgIHllYXJzID0gMCxcbiAgICBtb250aHMgPSAwLFxuICAgIHdlZWtzID0gMCxcbiAgICBkYXlzID0gMCxcbiAgICBob3VycyA9IDAsXG4gICAgbWludXRlcyA9IDAsXG4gICAgc2Vjb25kcyA9IDAsXG4gIH0gPSBkdXJhdGlvbjtcblxuICAvLyBBZGQgeWVhcnMgYW5kIG1vbnRoc1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF0ZVdpdGhNb250aHMgPVxuICAgIG1vbnRocyB8fCB5ZWFycyA/IGFkZE1vbnRocyhfZGF0ZSwgbW9udGhzICsgeWVhcnMgKiAxMikgOiBfZGF0ZTtcblxuICAvLyBBZGQgd2Vla3MgYW5kIGRheXNcbiAgY29uc3QgZGF0ZVdpdGhEYXlzID1cbiAgICBkYXlzIHx8IHdlZWtzID8gYWRkRGF5cyhkYXRlV2l0aE1vbnRocywgZGF5cyArIHdlZWtzICogNykgOiBkYXRlV2l0aE1vbnRocztcblxuICAvLyBBZGQgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcbiAgY29uc3QgbWludXRlc1RvQWRkID0gbWludXRlcyArIGhvdXJzICogNjA7XG4gIGNvbnN0IHNlY29uZHNUb0FkZCA9IHNlY29uZHMgKyBtaW51dGVzVG9BZGQgKiA2MDtcbiAgY29uc3QgbXNUb0FkZCA9IHNlY29uZHNUb0FkZCAqIDEwMDA7XG4gIGNvbnN0IGZpbmFsRGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgZGF0ZVdpdGhEYXlzLmdldFRpbWUoKSArIG1zVG9BZGQpO1xuXG4gIHJldHVybiBmaW5hbERhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgYWRkO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgYWRkRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGFtb3VudCAtIFRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBhbW91bnQpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGlmIChpc05hTihhbW91bnQpKSByZXR1cm4gY29uc3RydWN0RnJvbShkYXRlLCBOYU4pO1xuICBpZiAoIWFtb3VudCkge1xuICAgIC8vIElmIDAgZGF5cywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gX2RhdGU7XG4gIH1cbiAgX2RhdGUuc2V0RGF0ZShfZGF0ZS5nZXREYXRlKCkgKyBhbW91bnQpO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgYWRkRGF5cztcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGFkZE1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIGFtb3VudCAtIFRoZSBhbW91bnQgb2YgbW9udGhzIHRvIGJlIGFkZGVkLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIDUpXG4gKiAvLz0+IFN1biBGZWIgMDEgMjAxNSAwMDowMDowMFxuICpcbiAqIC8vIEFkZCBvbmUgbW9udGggdG8gMzAgSmFudWFyeSAyMDIzOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMjMsIDAsIDMwKSwgMSlcbiAqIC8vPT4gVHVlIEZlYiAyOCAyMDIzIDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRNb250aHMoZGF0ZSwgYW1vdW50KSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkgcmV0dXJuIGNvbnN0cnVjdEZyb20oZGF0ZSwgTmFOKTtcbiAgaWYgKCFhbW91bnQpIHtcbiAgICAvLyBJZiAwIG1vbnRocywgbm8tb3AgdG8gYXZvaWQgY2hhbmdpbmcgdGltZXMgaW4gdGhlIGhvdXIgYmVmb3JlIGVuZCBvZiBEU1RcbiAgICByZXR1cm4gX2RhdGU7XG4gIH1cbiAgY29uc3QgZGF5T2ZNb250aCA9IF9kYXRlLmdldERhdGUoKTtcblxuICAvLyBUaGUgSlMgRGF0ZSBvYmplY3Qgc3VwcG9ydHMgZGF0ZSBtYXRoIGJ5IGFjY2VwdGluZyBvdXQtb2YtYm91bmRzIHZhbHVlcyBmb3JcbiAgLy8gbW9udGgsIGRheSwgZXRjLiBGb3IgZXhhbXBsZSwgbmV3IERhdGUoMjAyMCwgMCwgMCkgcmV0dXJucyAzMSBEZWMgMjAxOSBhbmRcbiAgLy8gbmV3IERhdGUoMjAyMCwgMTMsIDEpIHJldHVybnMgMSBGZWIgMjAyMS4gIFRoaXMgaXMgKmFsbW9zdCogdGhlIGJlaGF2aW9yIHdlXG4gIC8vIHdhbnQgZXhjZXB0IHRoYXQgZGF0ZXMgd2lsbCB3cmFwIGFyb3VuZCB0aGUgZW5kIG9mIGEgbW9udGgsIG1lYW5pbmcgdGhhdFxuICAvLyBuZXcgRGF0ZSgyMDIwLCAxMywgMzEpIHdpbGwgcmV0dXJuIDMgTWFyIDIwMjEgbm90IDI4IEZlYiAyMDIxIGFzIGRlc2lyZWQuIFNvXG4gIC8vIHdlJ2xsIGRlZmF1bHQgdG8gdGhlIGVuZCBvZiB0aGUgZGVzaXJlZCBtb250aCBieSBhZGRpbmcgMSB0byB0aGUgZGVzaXJlZFxuICAvLyBtb250aCBhbmQgdXNpbmcgYSBkYXRlIG9mIDAgdG8gYmFjayB1cCBvbmUgZGF5IHRvIHRoZSBlbmQgb2YgdGhlIGRlc2lyZWRcbiAgLy8gbW9udGguXG4gIGNvbnN0IGVuZE9mRGVzaXJlZE1vbnRoID0gY29uc3RydWN0RnJvbShkYXRlLCBfZGF0ZS5nZXRUaW1lKCkpO1xuICBlbmRPZkRlc2lyZWRNb250aC5zZXRNb250aChfZGF0ZS5nZXRNb250aCgpICsgYW1vdW50ICsgMSwgMCk7XG4gIGNvbnN0IGRheXNJbk1vbnRoID0gZW5kT2ZEZXNpcmVkTW9udGguZ2V0RGF0ZSgpO1xuICBpZiAoZGF5T2ZNb250aCA+PSBkYXlzSW5Nb250aCkge1xuICAgIC8vIElmIHdlJ3JlIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZW4gdGhpcyBpcyB0aGUgY29ycmVjdCBkYXRlXG4gICAgLy8gYW5kIHdlJ3JlIGRvbmUuXG4gICAgcmV0dXJuIGVuZE9mRGVzaXJlZE1vbnRoO1xuICB9IGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSwgd2Ugbm93IGtub3cgdGhhdCBzZXR0aW5nIHRoZSBvcmlnaW5hbCBkYXktb2YtbW9udGggdmFsdWUgd29uJ3RcbiAgICAvLyBjYXVzZSBhbiBvdmVyZmxvdywgc28gc2V0IHRoZSBkZXNpcmVkIGRheS1vZi1tb250aC4gTm90ZSB0aGF0IHdlIGNhbid0XG4gICAgLy8ganVzdCBzZXQgdGhlIGRhdGUgb2YgYGVuZE9mRGVzaXJlZE1vbnRoYCBiZWNhdXNlIHRoYXQgb2JqZWN0IG1heSBoYXZlIGhhZFxuICAgIC8vIGl0cyB0aW1lIGNoYW5nZWQgaW4gdGhlIHVudXN1YWwgY2FzZSB3aGVyZSB3aGVyZSBhIERTVCB0cmFuc2l0aW9uIHdhcyBvblxuICAgIC8vIHRoZSBsYXN0IGRheSBvZiB0aGUgbW9udGggYW5kIGl0cyBsb2NhbCB0aW1lIHdhcyBpbiB0aGUgaG91ciBza2lwcGVkIG9yXG4gICAgLy8gcmVwZWF0ZWQgbmV4dCB0byBhIERTVCB0cmFuc2l0aW9uLiAgU28gd2UgdXNlIGBkYXRlYCBpbnN0ZWFkIHdoaWNoIGlzXG4gICAgLy8gZ3VhcmFudGVlZCB0byBzdGlsbCBoYXZlIHRoZSBvcmlnaW5hbCB0aW1lLlxuICAgIF9kYXRlLnNldEZ1bGxZZWFyKFxuICAgICAgZW5kT2ZEZXNpcmVkTW9udGguZ2V0RnVsbFllYXIoKSxcbiAgICAgIGVuZE9mRGVzaXJlZE1vbnRoLmdldE1vbnRoKCksXG4gICAgICBkYXlPZk1vbnRoLFxuICAgICk7XG4gICAgcmV0dXJuIF9kYXRlO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgYWRkTW9udGhzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGNvbXBhcmVEZXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyByZXZlcnNlIGNocm9ub2xvZ2ljYWxseSBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqXG4gKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5IHJldmVyc2UgY2hyb25vbG9naWNhbGx5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZURlc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IDFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXMgaW4gcmV2ZXJzZSBjaHJvbm9sb2dpY2FsIG9yZGVyOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlRGVzYylcbiAqIC8vPT4gW1xuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlRGVzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBkaWZmID0gX2RhdGVMZWZ0LmdldFRpbWUoKSAtIF9kYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAxO1xuICAgIC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgY29tcGFyZURlc2M7XG4iLCIvKipcbiAqIEBtb2R1bGUgY29uc3RhbnRzXG4gKiBAc3VtbWFyeSBVc2VmdWwgY29uc3RhbnRzXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbGxlY3Rpb24gb2YgdXNlZnVsIGRhdGUgY29uc3RhbnRzLlxuICpcbiAqIFRoZSBjb25zdGFudHMgY291bGQgYmUgaW1wb3J0ZWQgZnJvbSBgZGF0ZS1mbnMvY29uc3RhbnRzYDpcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgbWF4VGltZSwgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBmdW5jdGlvbiBpc0FsbG93ZWRUaW1lKHRpbWUpIHtcbiAqICAgcmV0dXJuIHRpbWUgPD0gbWF4VGltZSAmJiB0aW1lID49IG1pblRpbWU7XG4gKiB9XG4gKiBgYGBcbiAqL1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQHN1bW1hcnkgRGF5cyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB5ZWFyLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSG93IG1hbnkgZGF5cyBpbiBhIHllYXIuXG4gKlxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKi9cbmV4cG9ydCBjb25zdCBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAc3VtbWFyeSBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWF4VGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gODY0MDAwMDAwMDAwMDAwMSA8PSBtYXhUaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKDg2NDAwMDAwMDAwMDAwMDEpO1xuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWluVGltZVxuICogQHN1bW1hcnkgTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IC04NjQwMDAwMDAwMDAwMDAxID49IG1pblRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoLTg2NDAwMDAwMDAwMDAwMDEpXG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5XZWVrID0gNjA0ODAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luRGF5ID0gODY0MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luWWVhclxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5ZZWFyID0gNTI1NjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luTW9udGhcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBtb250aC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbk1vbnRoID0gNDMyMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5EYXlcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5EYXkgPSAxNDQwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQHN1bW1hcnkgUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKi9cbmV4cG9ydCBjb25zdCBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbWludXRlLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgbW9udGhcbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHF1YXJ0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzO1xuIiwiLyoqXG4gKiBAbmFtZSBjb25zdHJ1Y3RGcm9tXG4gKiBAY2F0ZWdvcnkgR2VuZXJpYyBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb25zdHJ1Y3RzIGEgZGF0ZSB1c2luZyB0aGUgcmVmZXJlbmNlIGRhdGUgYW5kIHRoZSB2YWx1ZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogVGhlIGZ1bmN0aW9uIGNvbnN0cnVjdHMgYSBuZXcgZGF0ZSB1c2luZyB0aGUgY29uc3RydWN0b3IgZnJvbSB0aGUgcmVmZXJlbmNlXG4gKiBkYXRlIGFuZCB0aGUgZ2l2ZW4gdmFsdWUuIEl0IGhlbHBzIHRvIGJ1aWxkIGdlbmVyaWMgZnVuY3Rpb25zIHRoYXQgYWNjZXB0XG4gKiBkYXRlIGV4dGVuc2lvbnMuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgcmVmZXJlbmNlIGRhdGUgdG8gdGFrZSBjb25zdHJ1Y3RvciBmcm9tXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY3JlYXRlIHRoZSBkYXRlXG4gKlxuICogQHJldHVybnMgRGF0ZSBpbml0aWFsaXplZCB1c2luZyB0aGUgZ2l2ZW4gZGF0ZSBhbmQgdmFsdWVcbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gJ2RhdGUtZm5zJ1xuICpcbiAqIC8vIEEgZnVuY3Rpb24gdGhhdCBjbG9uZXMgYSBkYXRlIHByZXNlcnZpbmcgdGhlIG9yaWdpbmFsIHR5cGVcbiAqIGZ1bmN0aW9uIGNsb25lRGF0ZTxEYXRlVHlwZSBleHRlbmRzIERhdGUoZGF0ZTogRGF0ZVR5cGUpOiBEYXRlVHlwZSB7XG4gKiAgIHJldHVybiBjb25zdHJ1Y3RGcm9tKFxuICogICAgIGRhdGUsIC8vIFVzZSBjb250cnVzdG9yIGZyb20gdGhlIGdpdmVuIGRhdGVcbiAqICAgICBkYXRlLmdldFRpbWUoKSAvLyBVc2UgdGhlIGRhdGUgdmFsdWUgdG8gY3JlYXRlIGEgbmV3IGRhdGVcbiAqICAgKVxuICogfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RydWN0RnJvbShkYXRlLCB2YWx1ZSkge1xuICBpZiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gbmV3IGRhdGUuY29uc3RydWN0b3IodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBjb25zdHJ1Y3RGcm9tO1xuIiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5EYXkgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mRGF5IH0gZnJvbSBcIi4vc3RhcnRPZkRheS5tanNcIjtcbmltcG9ydCB7IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgfSBmcm9tIFwiLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLiBUaGlzIG1lYW5zIHRoYXQgdGhlIHRpbWVzIGFyZSByZW1vdmVkXG4gKiBmcm9tIHRoZSBkYXRlcyBhbmQgdGhlbiB0aGUgZGlmZmVyZW5jZSBpbiBkYXlzIGlzIGNhbGN1bGF0ZWQuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgZWFybGllciBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjAwOjAwIGFuZCAyIEp1bHkgMjAxMiAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjZcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMywgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCA1OSlcbiAqIClcbiAqIC8vPT4gMVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3Qgc3RhcnRPZkRheUxlZnQgPSBzdGFydE9mRGF5KGRhdGVMZWZ0KTtcbiAgY29uc3Qgc3RhcnRPZkRheVJpZ2h0ID0gc3RhcnRPZkRheShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHRpbWVzdGFtcExlZnQgPVxuICAgICtzdGFydE9mRGF5TGVmdCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheUxlZnQpO1xuICBjb25zdCB0aW1lc3RhbXBSaWdodCA9XG4gICAgK3N0YXJ0T2ZEYXlSaWdodCAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoc3RhcnRPZkRheVJpZ2h0KTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlciBiZWNhdXNlIHRoZSBudW1iZXIgb2ZcbiAgLy8gbWlsbGlzZWNvbmRzIGluIGEgZGF5IGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIG1pbGxpc2Vjb25kc0luRGF5KTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZW5kIG9mIGEgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IG1vbnRoID0gX2RhdGUuZ2V0TW9udGgoKTtcbiAgX2RhdGUuc2V0RnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgX2RhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuZE9mTW9udGg7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuL19saWIvZGVmYXVsdE9wdGlvbnMubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBlbmRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBlbmRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgZW5kIG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTYXQgU2VwIDA2IDIwMTQgMjM6NTk6NTkuOTk5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBlbmQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5kT2ZXZWVrKGRhdGUsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkYXkgPSBfZGF0ZS5nZXREYXkoKTtcbiAgY29uc3QgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyAtNyA6IDApICsgNiAtIChkYXkgLSB3ZWVrU3RhcnRzT24pO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpICsgZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBlbmRPZldlZWs7XG4iLCJpbXBvcnQgeyBkZWZhdWx0TG9jYWxlIH0gZnJvbSBcIi4vX2xpYi9kZWZhdWx0TG9jYWxlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMubWpzXCI7XG5pbXBvcnQgeyBsb25nRm9ybWF0dGVycyB9IGZyb20gXCIuL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzLm1qc1wiO1xuaW1wb3J0IHtcbiAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbixcbiAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLFxuICB3YXJuT3JUaHJvd1Byb3RlY3RlZEVycm9yLFxufSBmcm9tIFwiLi9fbGliL3Byb3RlY3RlZFRva2Vucy5tanNcIjtcbmltcG9ydCB7IGlzVmFsaWQgfSBmcm9tIFwiLi9pc1ZhbGlkLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vLyBSZXhwb3J0cyBvZiBpbnRlcm5hbCBmb3IgbGlicmFyaWVzIHRvIHVzZS5cbi8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNjM4I2lzc3VlY29tbWVudC0xODc3MDgyODc0XG5leHBvcnQgeyBmb3JtYXR0ZXJzLCBsb25nRm9ybWF0dGVycyB9O1xuXG4vLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbmNvbnN0IGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPVxuICAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbmNvbnN0IGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbmNvbnN0IGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbmNvbnN0IGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG5jb25zdCB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbmV4cG9ydCB7IGZvcm1hdCBhcyBmb3JtYXREYXRlIH07XG5cbi8qKlxuICogVGhlIHtAbGluayBmb3JtYXR9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBhbGlhcyBmb3JtYXREYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXIpXG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXShodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyKSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSBmb3JtYXQgLSBUaGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIG9wdGlvbnMgLSBBbiBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEB0aHJvd3MgYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3MgdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChkYXRlLCBmb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBsb2NhbGUgPSBvcHRpb25zPy5sb2NhbGUgPz8gZGVmYXVsdE9wdGlvbnMubG9jYWxlID8/IGRlZmF1bHRMb2NhbGU7XG5cbiAgY29uc3QgZmlyc3RXZWVrQ29udGFpbnNEYXRlID1cbiAgICBvcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgMTtcblxuICBjb25zdCB3ZWVrU3RhcnRzT24gPVxuICAgIG9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICAwO1xuXG4gIGNvbnN0IG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCB0aW1lIHZhbHVlXCIpO1xuICB9XG5cbiAgbGV0IHBhcnRzID0gZm9ybWF0U3RyXG4gICAgLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwicFwiIHx8IGZpcnN0Q2hhcmFjdGVyID09PSBcIlBcIikge1xuICAgICAgICBjb25zdCBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdWJzdHJpbmc7XG4gICAgfSlcbiAgICAuam9pbihcIlwiKVxuICAgIC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKVxuICAgIC5tYXAoKHN1YnN0cmluZykgPT4ge1xuICAgICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogXCInXCIgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZykgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdKSB7XG4gICAgICAgIHJldHVybiB7IGlzVG9rZW46IHRydWUsIHZhbHVlOiBzdWJzdHJpbmcgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcbiAgICAgICAgICBcIkZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgXCIgK1xuICAgICAgICAgICAgZmlyc3RDaGFyYWN0ZXIgK1xuICAgICAgICAgICAgXCJgXCIsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGlzVG9rZW46IGZhbHNlLCB2YWx1ZTogc3Vic3RyaW5nIH07XG4gICAgfSk7XG5cbiAgLy8gaW52b2tlIGxvY2FsaXplIHByZXByb2Nlc3NvciAob25seSBmb3IgZnJlbmNoIGxvY2FsZXMgYXQgdGhlIG1vbWVudClcbiAgaWYgKGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3IpIHtcbiAgICBwYXJ0cyA9IGxvY2FsZS5sb2NhbGl6ZS5wcmVwcm9jZXNzb3Iob3JpZ2luYWxEYXRlLCBwYXJ0cyk7XG4gIH1cblxuICBjb25zdCBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlLFxuICB9O1xuXG4gIHJldHVybiBwYXJ0c1xuICAgIC5tYXAoKHBhcnQpID0+IHtcbiAgICAgIGlmICghcGFydC5pc1Rva2VuKSByZXR1cm4gcGFydC52YWx1ZTtcblxuICAgICAgY29uc3QgdG9rZW4gPSBwYXJ0LnZhbHVlO1xuXG4gICAgICBpZiAoXG4gICAgICAgICghb3B0aW9ucz8udXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSkgfHxcbiAgICAgICAgKCFvcHRpb25zPy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmXG4gICAgICAgICAgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikpXG4gICAgICApIHtcbiAgICAgICAgd2Fybk9yVGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0U3RyLCBTdHJpbmcoZGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW3Rva2VuWzBdXTtcbiAgICAgIHJldHVybiBmb3JtYXR0ZXIob3JpZ2luYWxEYXRlLCB0b2tlbiwgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9KVxuICAgIC5qb2luKFwiXCIpO1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgY29uc3QgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBmb3JtYXQ7XG4iLCJpbXBvcnQgeyBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgfSBmcm9tIFwiLi9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mWWVhciB9IGZyb20gXCIuL3N0YXJ0T2ZZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldERheU9mWWVhclxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF5IG9mIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB5ZWFyIGlzIDIgSnVseSAyMDE0P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiAxODNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKF9kYXRlLCBzdGFydE9mWWVhcihfZGF0ZSkpO1xuICBjb25zdCBkYXlPZlllYXIgPSBkaWZmICsgMTtcbiAgcmV0dXJuIGRheU9mWWVhcjtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXREYXlPZlllYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mSVNPV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZJU09XZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZklTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGdldElTT1dlZWtcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBJU08gd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZ2l2ZW4gZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBJU08gd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldElTT1dlZWsobmV3IERhdGUoMjAwNSwgMCwgMikpXG4gKiAvLz0+IDUzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IGRpZmYgPSArc3RhcnRPZklTT1dlZWsoX2RhdGUpIC0gK3N0YXJ0T2ZJU09XZWVrWWVhcihfZGF0ZSk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudCAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZlxuICAvLyB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpLlxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gbWlsbGlzZWNvbmRzSW5XZWVrKSArIDE7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2VlaztcbiIsImltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBnZXRJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiBjb25zdCByZXN1bHQgPSBnZXRJU09XZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcblxuICBjb25zdCBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgY29uc3Qgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKF9kYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZ2V0SVNPV2Vla1llYXI7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbldlZWsgfSBmcm9tIFwiLi9jb25zdGFudHMubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZldlZWtZZWFyIH0gZnJvbSBcIi4vc3RhcnRPZldlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla30gZnVuY3Rpb24gb3B0aW9ucy5cbiAqL1xuXG4vKipcbiAqIEBuYW1lIGdldFdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbG9jYWwgd2VlayBpbmRleCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1IHdpdGggZGVmYXVsdCBvcHRpb25zP1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG9mIHRoZSBsb2NhbCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDIgSmFudWFyeSAyMDA1LFxuICogLy8gaWYgTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWssXG4gKiAvLyBhbmQgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIgYWx3YXlzIGNvbnRhaW5zIDQgSmFudWFyeT9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWsobmV3IERhdGUoMjAwNSwgMCwgMiksIHtcbiAqICAgd2Vla1N0YXJ0c09uOiAxLFxuICogICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDRcbiAqIH0pXG4gKiAvLz0+IDUzXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGlmZiA9ICtzdGFydE9mV2VlayhfZGF0ZSwgb3B0aW9ucykgLSArc3RhcnRPZldlZWtZZWFyKF9kYXRlLCBvcHRpb25zKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBtaWxsaXNlY29uZHNJbldlZWspICsgMTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrO1xuIiwiaW1wb3J0IHsgY29uc3RydWN0RnJvbSB9IGZyb20gXCIuL2NvbnN0cnVjdEZyb20ubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgZ2V0V2Vla1llYXJ9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBnZXRXZWVrWWVhclxuICogQGNhdGVnb3J5IFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIGV4YWN0IGNhbGN1bGF0aW9uIGRlcGVuZHMgb24gdGhlIHZhbHVlcyBvZlxuICogYG9wdGlvbnMud2Vla1N0YXJ0c09uYCAod2hpY2ggaXMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWspXG4gKiBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAod2hpY2ggaXMgdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpcyBhbHdheXMgaW5cbiAqIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyKVxuICpcbiAqIFdlZWsgbnVtYmVyaW5nOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9XZWVrI1RoZV9JU09fd2Vla19kYXRlX3N5c3RlbVxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGdpdmVuIGRhdGVcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyBUaGUgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgd2l0aCB0aGUgZGVmYXVsdCBzZXR0aW5ncz9cbiAqIGNvbnN0IHJlc3VsdCA9IGdldFdlZWtZZWFyKG5ldyBEYXRlKDIwMDQsIDExLCAyNikpXG4gKiAvLz0+IDIwMDVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBudW1iZXJpbmcgeWVhciBpcyAyNiBEZWNlbWJlciAyMDA0IGlmIHdlZWsgc3RhcnRzIG9uIFNhdHVyZGF5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyB3ZWVrU3RhcnRzT246IDYgfSlcbiAqIC8vPT4gMjAwNFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCB3ZWVrIG51bWJlcmluZyB5ZWFyIGlzIDI2IERlY2VtYmVyIDIwMDQgaWYgdGhlIGZpcnN0IHdlZWsgY29udGFpbnMgNCBKYW51YXJ5P1xuICogY29uc3QgcmVzdWx0ID0gZ2V0V2Vla1llYXIobmV3IERhdGUoMjAwNCwgMTEsIDI2KSwgeyBmaXJzdFdlZWtDb250YWluc0RhdGU6IDQgfSlcbiAqIC8vPT4gMjAwNFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgeWVhciA9IF9kYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICBjb25zdCBmaXJzdFdlZWtDb250YWluc0RhdGUgPVxuICAgIG9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIG9wdGlvbnM/LmxvY2FsZT8ub3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgZGVmYXVsdE9wdGlvbnMubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICAxO1xuXG4gIGNvbnN0IGZpcnN0V2Vla09mTmV4dFllYXIgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcblxuICBjb25zdCBmaXJzdFdlZWtPZlRoaXNZZWFyID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoX2RhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBnZXRXZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIGRhdGVUb0NvbXBhcmUgLSBUaGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqXG4gKiBAcmV0dXJucyBUaGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzQmVmb3JlKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZWZvcmUoZGF0ZSwgZGF0ZVRvQ29tcGFyZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgX2RhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiArX2RhdGUgPCArX2RhdGVUb0NvbXBhcmU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNCZWZvcmU7XG4iLCIvKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB2YWx1ZSAtIFRoZSB2YWx1ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXR1cm4gKFxuICAgIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzRGF0ZTtcbiIsImltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG5cbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgcmV0dXJuICtkYXRlTGVmdFN0YXJ0T2ZEYXkgPT09ICtkYXRlUmlnaHRTdGFydE9mRGF5O1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZURheTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgbW9udGggKGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgbW9udGg/XG4gKiBjb25zdCByZXN1bHQgPSBpc1NhbWVNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyKSwgbmV3IERhdGUoMjAxNCwgOCwgMjUpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyIFNlcHRlbWJlciAyMDE0IGFuZCAyNSBTZXB0ZW1iZXIgMjAxNSBpbiB0aGUgc2FtZSBtb250aD9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZU1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIpLCBuZXcgRGF0ZSgyMDE1LCA4LCAyNSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVNb250aChkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIChcbiAgICBfZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gX2RhdGVSaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgX2RhdGVMZWZ0LmdldE1vbnRoKCkgPT09IF9kYXRlUmlnaHQuZ2V0TW9udGgoKVxuICApO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZU1vbnRoO1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBUaGUge0BsaW5rIGlzU2FtZVdlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBpc1NhbWVXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWsgKGFuZCBtb250aCBhbmQgeWVhcik/XG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGVMZWZ0IC0gVGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBkYXRlUmlnaHQgLSBUaGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSBvcHRpb25zIC0gQW4gb2JqZWN0IHdpdGggb3B0aW9uc1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVXZWVrKGRhdGVMZWZ0LCBkYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgY29uc3QgZGF0ZUxlZnRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRhdGVMZWZ0LCBvcHRpb25zKTtcbiAgY29uc3QgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkYXRlUmlnaHQsIG9wdGlvbnMpO1xuXG4gIHJldHVybiArZGF0ZUxlZnRTdGFydE9mV2VlayA9PT0gK2RhdGVSaWdodFN0YXJ0T2ZXZWVrO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzU2FtZVdlZWs7XG4iLCJpbXBvcnQgeyBpc1NhbWVNb250aCB9IGZyb20gXCIuL2lzU2FtZU1vbnRoLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVGhpc01vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIGRhdGUgdG8gY2hlY2tcbiAqXG4gKiBAcmV0dXJucyBUaGUgZGF0ZSBpcyBpbiB0aGlzIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAxNSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIG1vbnRoP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMTUpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGhpc01vbnRoKGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZU1vbnRoKERhdGUubm93KCksIGRhdGUpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc01vbnRoO1xuIiwiaW1wb3J0IHsgaXNTYW1lV2VlayB9IGZyb20gXCIuL2lzU2FtZVdlZWsubWpzXCI7XG5cbi8qKlxuICogVGhlIHtAbGluayBpc1RoaXNXZWVrfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgaXNUaGlzV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0gb3B0aW9ucyAtIFRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RoaXNXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCBhbmQgd2VlayBzdGFydHMgd2l0aCBNb25kYXlcbiAqIC8vIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNUaGlzV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRhdGUsIERhdGUubm93KCksIG9wdGlvbnMpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGlzVGhpc1dlZWs7XG4iLCJpbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvZGF5KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBEYXRlLm5vdygpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvZGF5O1xuIiwiaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gXCIuL2FkZERheXMubWpzXCI7XG5pbXBvcnQgeyBpc1NhbWVEYXkgfSBmcm9tIFwiLi9pc1NhbWVEYXkubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgaXNUb21vcnJvd1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGNoZWNrXG4gKlxuICogQHJldHVybnMgVGhlIGRhdGUgaXMgdG9tb3Jyb3dcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDcgT2N0b2JlciAxNDowMDowMCB0b21vcnJvdz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVG9tb3Jyb3cobmV3IERhdGUoMjAxNCwgOSwgNywgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RvbW9ycm93KGRhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZURheShkYXRlLCBhZGREYXlzKERhdGUubm93KCksIDEpKTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBpc1RvbW9ycm93O1xuIiwiaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSBcIi4vaXNEYXRlLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVdKGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlKVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBjaGVja1xuICpcbiAqIEByZXR1cm5zIFRoZSBkYXRlIGlzIHZhbGlkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGRhdGUpIHtcbiAgaWYgKCFpc0RhdGUoZGF0ZSkgJiYgdHlwZW9mIGRhdGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKF9kYXRlKSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgaXNWYWxpZDtcbiIsImV4cG9ydCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiAob3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgY29uc3Qgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgY29uc3QgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFRoZSBsb2NhbGl6ZSBmdW5jdGlvbiBhcmd1bWVudCBjYWxsYmFjayB3aGljaCBhbGxvd3MgdG8gY29udmVydCByYXcgdmFsdWUgdG9cbiAqIHRoZSBhY3R1YWwgdHlwZS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBjb252ZXJ0ZWQgdmFsdWVcbiAqL1xuXG4vKipcbiAqIFRoZSBtYXAgb2YgbG9jYWxpemVkIHZhbHVlcyBmb3IgZWFjaCB3aWR0aC5cbiAqL1xuXG4vKipcbiAqIFRoZSBpbmRleCB0eXBlIG9mIHRoZSBsb2NhbGUgdW5pdCB2YWx1ZS4gSXQgdHlwZXMgY29udmVyc2lvbiBvZiB1bml0cyBvZlxuICogdmFsdWVzIHRoYXQgZG9uJ3Qgc3RhcnQgYXQgMCAoaS5lLiBxdWFydGVycykuXG4gKi9cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgdW5pdCB2YWx1ZSB0byB0aGUgdHVwbGUgb2YgdmFsdWVzLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBlcmEgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEJDLFxuICogdGhlIHNlY29uZCBlbGVtZW50IHJlcHJlc2VudHMgQUQuXG4gKi9cblxuLyoqXG4gKiBUaGUgdHVwbGUgb2YgbG9jYWxpemVkIHF1YXJ0ZXIgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFExLlxuICovXG5cbi8qKlxuICogVGhlIHR1cGxlIG9mIGxvY2FsaXplZCBkYXkgdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIFN1bmRheS5cbiAqL1xuXG4vKipcbiAqIFRoZSB0dXBsZSBvZiBsb2NhbGl6ZWQgbW9udGggdmFsdWVzLiBUaGUgZmlyc3QgZWxlbWVudCByZXByZXNlbnRzIEphbnVhcnkuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiAodmFsdWUsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gb3B0aW9ucz8uY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogXCJzdGFuZGFsb25lXCI7XG5cbiAgICBsZXQgdmFsdWVzQXJyYXk7XG4gICAgaWYgKGNvbnRleHQgPT09IFwiZm9ybWF0dGluZ1wiICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgY29uc3QgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgY29uc3Qgd2lkdGggPSBvcHRpb25zPy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPVxuICAgICAgICBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIGNvbnN0IHdpZHRoID0gb3B0aW9ucz8ud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1t3aWR0aF0gfHwgYXJncy52YWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG5cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG5cbiAgICBjb25zdCBtYXRjaFBhdHRlcm4gPVxuICAgICAgKHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0pIHx8XG4gICAgICBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgY29uc3QgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG5cbiAgICBjb25zdCBwYXJzZVBhdHRlcm5zID1cbiAgICAgICh3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdKSB8fFxuICAgICAgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuXG4gICAgY29uc3Qga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKVxuICAgICAgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgKHBhdHRlcm4pID0+IHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKSlcbiAgICAgIDogLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgICAgICBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZykpO1xuXG4gICAgbGV0IHZhbHVlO1xuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFja1xuICAgICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAtLSBJIGNoYWxsYW5nZSB5b3UgdG8gZml4IHRoZSB0eXBlXG4gICAgICAgIG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSlcbiAgICAgIDogdmFsdWU7XG5cbiAgICBjb25zdCByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcblxuICAgIHJldHVybiB7IHZhbHVlLCByZXN0IH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJlxuICAgICAgcHJlZGljYXRlKG9iamVjdFtrZXldKVxuICAgICkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yIChsZXQga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiAoc3RyaW5nLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuXG4gICAgY29uc3QgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIGxldCB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFja1xuICAgICAgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pXG4gICAgICA6IHBhcnNlUmVzdWx0WzBdO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnkgLS0gSSBjaGFsbGFuZ2UgeW91IHRvIGZpeCB0aGUgdHlwZVxuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuXG4gICAgY29uc3QgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG5cbiAgICByZXR1cm4geyB2YWx1ZSwgcmVzdCB9O1xuICB9O1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2UgfSBmcm9tIFwiLi9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlLm1qc1wiO1xuaW1wb3J0IHsgZm9ybWF0TG9uZyB9IGZyb20gXCIuL2VuLVVTL19saWIvZm9ybWF0TG9uZy5tanNcIjtcbmltcG9ydCB7IGZvcm1hdFJlbGF0aXZlIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS5tanNcIjtcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9sb2NhbGl6ZS5tanNcIjtcbmltcG9ydCB7IG1hdGNoIH0gZnJvbSBcIi4vZW4tVVMvX2xpYi9tYXRjaC5tanNcIjtcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXShodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycClcbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc10oaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zcylcbiAqL1xuZXhwb3J0IGNvbnN0IGVuVVMgPSB7XG4gIGNvZGU6IFwiZW4tVVNcIixcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDEsXG4gIH0sXG59O1xuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGVuVVM7XG4iLCJjb25zdCBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogXCJsZXNzIHRoYW4gYSBzZWNvbmRcIixcbiAgICBvdGhlcjogXCJsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHNcIixcbiAgfSxcblxuICB4U2Vjb25kczoge1xuICAgIG9uZTogXCIxIHNlY29uZFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBzZWNvbmRzXCIsXG4gIH0sXG5cbiAgaGFsZkFNaW51dGU6IFwiaGFsZiBhIG1pbnV0ZVwiLFxuXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwibGVzcyB0aGFuIGEgbWludXRlXCIsXG4gICAgb3RoZXI6IFwibGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzXCIsXG4gIH0sXG5cbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6IFwiMSBtaW51dGVcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gbWludXRlc1wiLFxuICB9LFxuXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiBcImFib3V0IDEgaG91clwiLFxuICAgIG90aGVyOiBcImFib3V0IHt7Y291bnR9fSBob3Vyc1wiLFxuICB9LFxuXG4gIHhIb3Vyczoge1xuICAgIG9uZTogXCIxIGhvdXJcIixcbiAgICBvdGhlcjogXCJ7e2NvdW50fX0gaG91cnNcIixcbiAgfSxcblxuICB4RGF5czoge1xuICAgIG9uZTogXCIxIGRheVwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBkYXlzXCIsXG4gIH0sXG5cbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6IFwiYWJvdXQgMSB3ZWVrXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IHdlZWtzXCIsXG4gIH0sXG5cbiAgeFdlZWtzOiB7XG4gICAgb25lOiBcIjEgd2Vla1wiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSB3ZWVrc1wiLFxuICB9LFxuXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogXCJhYm91dCAxIG1vbnRoXCIsXG4gICAgb3RoZXI6IFwiYWJvdXQge3tjb3VudH19IG1vbnRoc1wiLFxuICB9LFxuXG4gIHhNb250aHM6IHtcbiAgICBvbmU6IFwiMSBtb250aFwiLFxuICAgIG90aGVyOiBcInt7Y291bnR9fSBtb250aHNcIixcbiAgfSxcblxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogXCJhYm91dCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhYm91dCB7e2NvdW50fX0geWVhcnNcIixcbiAgfSxcblxuICB4WWVhcnM6IHtcbiAgICBvbmU6IFwiMSB5ZWFyXCIsXG4gICAgb3RoZXI6IFwie3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogXCJvdmVyIDEgeWVhclwiLFxuICAgIG90aGVyOiBcIm92ZXIge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG5cbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiBcImFsbW9zdCAxIHllYXJcIixcbiAgICBvdGhlcjogXCJhbG1vc3Qge3tjb3VudH19IHllYXJzXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0RGlzdGFuY2UgPSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSA9PiB7XG4gIGxldCByZXN1bHQ7XG5cbiAgY29uc3QgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZShcInt7Y291bnR9fVwiLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zPy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiBcImluIFwiICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgXCIgYWdvXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJpbXBvcnQgeyBidWlsZEZvcm1hdExvbmdGbiB9IGZyb20gXCIuLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuLm1qc1wiO1xuXG5jb25zdCBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJFRUVFLCBNTU1NIGRvLCB5XCIsXG4gIGxvbmc6IFwiTU1NTSBkbywgeVwiLFxuICBtZWRpdW06IFwiTU1NIGQsIHlcIixcbiAgc2hvcnQ6IFwiTU0vZGQveXl5eVwiLFxufTtcblxuY29uc3QgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwiaDptbTpzcyBhIHp6enpcIixcbiAgbG9uZzogXCJoOm1tOnNzIGEgelwiLFxuICBtZWRpdW06IFwiaDptbTpzcyBhXCIsXG4gIHNob3J0OiBcImg6bW0gYVwiLFxufTtcblxuY29uc3QgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogXCJ7e2RhdGV9fSwge3t0aW1lfX1cIixcbiAgc2hvcnQ6IFwie3tkYXRlfX0sIHt7dGltZX19XCIsXG59O1xuXG5leHBvcnQgY29uc3QgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJmdWxsXCIsXG4gIH0pLFxuXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcblxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6IFwiZnVsbFwiLFxuICB9KSxcbn07XG4iLCJjb25zdCBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6IFwiUFwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdFJlbGF0aXZlID0gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykgPT5cbiAgZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xuIiwiaW1wb3J0IHsgYnVpbGRMb2NhbGl6ZUZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuLm1qc1wiO1xuXG5jb25zdCBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiQlwiLCBcIkFcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJCQ1wiLCBcIkFEXCJdLFxuICB3aWRlOiBbXCJCZWZvcmUgQ2hyaXN0XCIsIFwiQW5ubyBEb21pbmlcIl0sXG59O1xuXG5jb25zdCBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXCJRMVwiLCBcIlEyXCIsIFwiUTNcIiwgXCJRNFwiXSxcbiAgd2lkZTogW1wiMXN0IHF1YXJ0ZXJcIiwgXCIybmQgcXVhcnRlclwiLCBcIjNyZCBxdWFydGVyXCIsIFwiNHRoIHF1YXJ0ZXJcIl0sXG59O1xuXG4vLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5jb25zdCBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl0sXG4gIGFiYnJldmlhdGVkOiBbXG4gICAgXCJKYW5cIixcbiAgICBcIkZlYlwiLFxuICAgIFwiTWFyXCIsXG4gICAgXCJBcHJcIixcbiAgICBcIk1heVwiLFxuICAgIFwiSnVuXCIsXG4gICAgXCJKdWxcIixcbiAgICBcIkF1Z1wiLFxuICAgIFwiU2VwXCIsXG4gICAgXCJPY3RcIixcbiAgICBcIk5vdlwiLFxuICAgIFwiRGVjXCIsXG4gIF0sXG5cbiAgd2lkZTogW1xuICAgIFwiSmFudWFyeVwiLFxuICAgIFwiRmVicnVhcnlcIixcbiAgICBcIk1hcmNoXCIsXG4gICAgXCJBcHJpbFwiLFxuICAgIFwiTWF5XCIsXG4gICAgXCJKdW5lXCIsXG4gICAgXCJKdWx5XCIsXG4gICAgXCJBdWd1c3RcIixcbiAgICBcIlNlcHRlbWJlclwiLFxuICAgIFwiT2N0b2JlclwiLFxuICAgIFwiTm92ZW1iZXJcIixcbiAgICBcIkRlY2VtYmVyXCIsXG4gIF0sXG59O1xuXG5jb25zdCBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogW1wiU1wiLCBcIk1cIiwgXCJUXCIsIFwiV1wiLCBcIlRcIiwgXCJGXCIsIFwiU1wiXSxcbiAgc2hvcnQ6IFtcIlN1XCIsIFwiTW9cIiwgXCJUdVwiLCBcIldlXCIsIFwiVGhcIiwgXCJGclwiLCBcIlNhXCJdLFxuICBhYmJyZXZpYXRlZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxuICB3aWRlOiBbXG4gICAgXCJTdW5kYXlcIixcbiAgICBcIk1vbmRheVwiLFxuICAgIFwiVHVlc2RheVwiLFxuICAgIFwiV2VkbmVzZGF5XCIsXG4gICAgXCJUaHVyc2RheVwiLFxuICAgIFwiRnJpZGF5XCIsXG4gICAgXCJTYXR1cmRheVwiLFxuICBdLFxufTtcblxuY29uc3QgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJtb3JuaW5nXCIsXG4gICAgYWZ0ZXJub29uOiBcImFmdGVybm9vblwiLFxuICAgIGV2ZW5pbmc6IFwiZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcIm5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogXCJhXCIsXG4gICAgcG06IFwicFwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pXCIsXG4gICAgbm9vbjogXCJuXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06IFwiQU1cIixcbiAgICBwbTogXCJQTVwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogXCJhLm0uXCIsXG4gICAgcG06IFwicC5tLlwiLFxuICAgIG1pZG5pZ2h0OiBcIm1pZG5pZ2h0XCIsXG4gICAgbm9vbjogXCJub29uXCIsXG4gICAgbW9ybmluZzogXCJpbiB0aGUgbW9ybmluZ1wiLFxuICAgIGFmdGVybm9vbjogXCJpbiB0aGUgYWZ0ZXJub29uXCIsXG4gICAgZXZlbmluZzogXCJpbiB0aGUgZXZlbmluZ1wiLFxuICAgIG5pZ2h0OiBcImF0IG5pZ2h0XCIsXG4gIH0sXG59O1xuXG5jb25zdCBvcmRpbmFsTnVtYmVyID0gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykgPT4ge1xuICBjb25zdCBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgY29uc3QgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInN0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIm5kXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcInJkXCI7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyBcInRoXCI7XG59O1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXIsXG5cbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gICAgYXJndW1lbnRDYWxsYmFjazogKHF1YXJ0ZXIpID0+IHF1YXJ0ZXIgLSAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogXCJ3aWRlXCIsXG4gIH0pLFxuXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6IFwid2lkZVwiLFxuICB9KSxcblxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiBcIndpZGVcIixcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6IFwid2lkZVwiLFxuICB9KSxcbn07XG4iLCJpbXBvcnQgeyBidWlsZE1hdGNoRm4gfSBmcm9tIFwiLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4ubWpzXCI7XG5pbXBvcnQgeyBidWlsZE1hdGNoUGF0dGVybkZuIH0gZnJvbSBcIi4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi5tanNcIjtcblxuY29uc3QgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbmNvbnN0IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xuXG5jb25zdCBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2ksXG59O1xuY29uc3QgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV0sXG59O1xuXG5jb25zdCBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pLFxufTtcbmNvbnN0IHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXSxcbn07XG5cbmNvbnN0IG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pLFxufTtcbmNvbnN0IHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbXG4gICAgL15qL2ksXG4gICAgL15mL2ksXG4gICAgL15tL2ksXG4gICAgL15hL2ksXG4gICAgL15tL2ksXG4gICAgL15qL2ksXG4gICAgL15qL2ksXG4gICAgL15hL2ksXG4gICAgL15zL2ksXG4gICAgL15vL2ksXG4gICAgL15uL2ksXG4gICAgL15kL2ksXG4gIF0sXG5cbiAgYW55OiBbXG4gICAgL15qYS9pLFxuICAgIC9eZi9pLFxuICAgIC9ebWFyL2ksXG4gICAgL15hcC9pLFxuICAgIC9ebWF5L2ksXG4gICAgL15qdW4vaSxcbiAgICAvXmp1bC9pLFxuICAgIC9eYXUvaSxcbiAgICAvXnMvaSxcbiAgICAvXm8vaSxcbiAgICAvXm4vaSxcbiAgICAvXmQvaSxcbiAgXSxcbn07XG5cbmNvbnN0IG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldLFxufTtcblxuY29uc3QgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG59O1xuY29uc3QgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6ICh2YWx1ZSkgPT4gcGFyc2VJbnQodmFsdWUsIDEwKSxcbiAgfSksXG5cbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiBcImFueVwiLFxuICAgIHZhbHVlQ2FsbGJhY2s6IChpbmRleCkgPT4gaW5kZXggKyAxLFxuICB9KSxcblxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogXCJhbnlcIixcbiAgfSksXG5cbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6IFwid2lkZVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxuXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiBcImFueVwiLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6IFwiYW55XCIsXG4gIH0pLFxufTtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlIC0gVGhlIG9yaWdpbmFsIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSBkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGF0ZSkge1xuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgX2RhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mRGF5O1xuIiwiaW1wb3J0IHsgc3RhcnRPZldlZWsgfSBmcm9tIFwiLi9zdGFydE9mV2Vlay5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mSVNPV2Vla1xuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZJU09XZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsoZGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGF0ZSwgeyB3ZWVrU3RhcnRzT246IDEgfSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZklTT1dlZWs7XG4iLCJpbXBvcnQgeyBnZXRJU09XZWVrWWVhciB9IGZyb20gXCIuL2dldElTT1dlZWtZZWFyLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZklTT1dlZWsgfSBmcm9tIFwiLi9zdGFydE9mSVNPV2Vlay5tanNcIjtcbmltcG9ydCB7IGNvbnN0cnVjdEZyb20gfSBmcm9tIFwiLi9jb25zdHJ1Y3RGcm9tLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZJU09XZWVrWWVhclxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcixcbiAqIHdoaWNoIGFsd2F5cyBzdGFydHMgMyBkYXlzIGJlZm9yZSB0aGUgeWVhcidzIGZpcnN0IFRodXJzZGF5LlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1OlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZklTT1dlZWtZZWFyKG5ldyBEYXRlKDIwMDUsIDYsIDIpKVxuICogLy89PiBNb24gSmFuIDAzIDIwMDUgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2ZJU09XZWVrWWVhcihkYXRlKSB7XG4gIGNvbnN0IHllYXIgPSBnZXRJU09XZWVrWWVhcihkYXRlKTtcbiAgY29uc3QgZm91cnRoT2ZKYW51YXJ5ID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZJU09XZWVrWWVhcjtcbiIsImltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZk1vbnRoKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldERhdGUoMSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZk1vbnRoO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWt9IGZ1bmN0aW9uIG9wdGlvbnMuXG4gKi9cblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mV2Vla1xuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIHN0YXJ0IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwgeyB3ZWVrU3RhcnRzT246IDEgfSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2VlayhkYXRlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0c09uID1cbiAgICBvcHRpb25zPy53ZWVrU3RhcnRzT24gPz9cbiAgICBvcHRpb25zPy5sb2NhbGU/Lm9wdGlvbnM/LndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbiA/P1xuICAgIGRlZmF1bHRPcHRpb25zLmxvY2FsZT8ub3B0aW9ucz8ud2Vla1N0YXJ0c09uID8/XG4gICAgMDtcblxuICBjb25zdCBfZGF0ZSA9IHRvRGF0ZShkYXRlKTtcbiAgY29uc3QgZGF5ID0gX2RhdGUuZ2V0RGF5KCk7XG4gIGNvbnN0IGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuXG4gIF9kYXRlLnNldERhdGUoX2RhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZldlZWs7XG4iLCJpbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcbmltcG9ydCB7IGdldFdlZWtZZWFyIH0gZnJvbSBcIi4vZ2V0V2Vla1llYXIubWpzXCI7XG5pbXBvcnQgeyBzdGFydE9mV2VlayB9IGZyb20gXCIuL3N0YXJ0T2ZXZWVrLm1qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi9fbGliL2RlZmF1bHRPcHRpb25zLm1qc1wiO1xuXG4vKipcbiAqIFRoZSB7QGxpbmsgc3RhcnRPZldlZWtZZWFyfSBmdW5jdGlvbiBvcHRpb25zLlxuICovXG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtZZWFyXG4gKiBAY2F0ZWdvcnkgV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqIFRoZSBleGFjdCBjYWxjdWxhdGlvbiBkZXBlbmRzIG9uIHRoZSB2YWx1ZXMgb2ZcbiAqIGBvcHRpb25zLndlZWtTdGFydHNPbmAgKHdoaWNoIGlzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrKVxuICogYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKHdoaWNoIGlzIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXMgYWx3YXlzIGluXG4gKiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhcilcbiAqXG4gKiBXZWVrIG51bWJlcmluZzogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvV2VlayNUaGVfSVNPX3dlZWtfZGF0ZV9zeXN0ZW1cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEFuIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqXG4gKiBAcmV0dXJucyBUaGUgc3RhcnQgb2YgYSB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1IHdpdGggZGVmYXVsdCBzZXR0aW5nczpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIERlYyAyNiAyMDA0IDAwOjAwOjAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHdlZWstbnVtYmVyaW5nIHllYXIgZm9yIDIgSnVseSAyMDA1XG4gKiAvLyBpZiBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB3ZWVrXG4gKiAvLyBhbmQgNCBKYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhcjpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSwge1xuICogICB3ZWVrU3RhcnRzT246IDEsXG4gKiAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogNFxuICogfSlcbiAqIC8vPT4gTW9uIEphbiAwMyAyMDA1IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykge1xuICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIGNvbnN0IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9XG4gICAgb3B0aW9ucz8uZmlyc3RXZWVrQ29udGFpbnNEYXRlID8/XG4gICAgb3B0aW9ucz8ubG9jYWxlPy5vcHRpb25zPy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPz9cbiAgICBkZWZhdWx0T3B0aW9ucy5sb2NhbGU/Lm9wdGlvbnM/LmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA/P1xuICAgIDE7XG5cbiAgY29uc3QgeWVhciA9IGdldFdlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICBjb25zdCBmaXJzdFdlZWsgPSBjb25zdHJ1Y3RGcm9tKGRhdGUsIDApO1xuICBmaXJzdFdlZWsuc2V0RnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICBjb25zdCBfZGF0ZSA9IHN0YXJ0T2ZXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBfZGF0ZTtcbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBzdGFydE9mV2Vla1llYXI7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdGFydE9mWWVhclxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZlllYXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwMCkpXG4gKiAvLz0+IFdlZCBKYW4gMDEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZlllYXIoZGF0ZSkge1xuICBjb25zdCBjbGVhbkRhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IF9kYXRlID0gY29uc3RydWN0RnJvbShkYXRlLCAwKTtcbiAgX2RhdGUuc2V0RnVsbFllYXIoY2xlYW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZZZWFyO1xuIiwiaW1wb3J0IHsgc3ViRGF5cyB9IGZyb20gXCIuL3N1YkRheXMubWpzXCI7XG5pbXBvcnQgeyBzdWJNb250aHMgfSBmcm9tIFwiLi9zdWJNb250aHMubWpzXCI7XG5pbXBvcnQgeyBjb25zdHJ1Y3RGcm9tIH0gZnJvbSBcIi4vY29uc3RydWN0RnJvbS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBzdWJcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCB5ZWFycywgbW9udGhzLCB3ZWVrcywgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gZHVyYXRpb24gLSBUaGUgb2JqZWN0IHdpdGggeWVhcnMsIG1vbnRocywgd2Vla3MsIGRheXMsIGhvdXJzLCBtaW51dGVzIGFuZCBzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWRcbiAqXG4gKiB8IEtleSAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCB5ZWFycyAgIHwgQW1vdW50IG9mIHllYXJzIHRvIGJlIHN1YnRyYWN0ZWQgICB8XG4gKiB8IG1vbnRocyAgfCBBbW91bnQgb2YgbW9udGhzIHRvIGJlIHN1YnRyYWN0ZWQgIHxcbiAqIHwgd2Vla3MgICB8IEFtb3VudCBvZiB3ZWVrcyB0byBiZSBzdWJ0cmFjdGVkICAgfFxuICogfCBkYXlzICAgIHwgQW1vdW50IG9mIGRheXMgdG8gYmUgc3VidHJhY3RlZCAgICB8XG4gKiB8IGhvdXJzICAgfCBBbW91bnQgb2YgaG91cnMgdG8gYmUgc3VidHJhY3RlZCAgIHxcbiAqIHwgbWludXRlcyB8IEFtb3VudCBvZiBtaW51dGVzIHRvIGJlIHN1YnRyYWN0ZWQgfFxuICogfCBzZWNvbmRzIHwgQW1vdW50IG9mIHNlY29uZHMgdG8gYmUgc3VidHJhY3RlZCB8XG4gKlxuICogQWxsIHZhbHVlcyBkZWZhdWx0IHRvIDBcbiAqXG4gKiBAcmV0dXJucyBUaGUgbmV3IGRhdGUgd2l0aCB0aGUgc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IHRoZSBmb2xsb3dpbmcgZHVyYXRpb24gZnJvbSAxNSBKdW5lIDIwMTcgMTU6Mjk6MjBcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YihuZXcgRGF0ZSgyMDE3LCA1LCAxNSwgMTUsIDI5LCAyMCksIHtcbiAqICAgeWVhcnM6IDIsXG4gKiAgIG1vbnRoczogOSxcbiAqICAgd2Vla3M6IDEsXG4gKiAgIGRheXM6IDcsXG4gKiAgIGhvdXJzOiA1LFxuICogICBtaW51dGVzOiA5LFxuICogICBzZWNvbmRzOiAzMFxuICogfSlcbiAqIC8vPT4gTW9uIFNlcCAxIDIwMTQgMTA6MTk6NTBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YihkYXRlLCBkdXJhdGlvbikge1xuICBjb25zdCB7XG4gICAgeWVhcnMgPSAwLFxuICAgIG1vbnRocyA9IDAsXG4gICAgd2Vla3MgPSAwLFxuICAgIGRheXMgPSAwLFxuICAgIGhvdXJzID0gMCxcbiAgICBtaW51dGVzID0gMCxcbiAgICBzZWNvbmRzID0gMCxcbiAgfSA9IGR1cmF0aW9uO1xuXG4gIC8vIFN1YnRyYWN0IHllYXJzIGFuZCBtb250aHNcbiAgY29uc3QgZGF0ZVdpdGhvdXRNb250aHMgPSBzdWJNb250aHMoZGF0ZSwgbW9udGhzICsgeWVhcnMgKiAxMik7XG5cbiAgLy8gU3VidHJhY3Qgd2Vla3MgYW5kIGRheXNcbiAgY29uc3QgZGF0ZVdpdGhvdXREYXlzID0gc3ViRGF5cyhkYXRlV2l0aG91dE1vbnRocywgZGF5cyArIHdlZWtzICogNyk7XG5cbiAgLy8gU3VidHJhY3QgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcbiAgY29uc3QgbWludXRlc3RvU3ViID0gbWludXRlcyArIGhvdXJzICogNjA7XG4gIGNvbnN0IHNlY29uZHN0b1N1YiA9IHNlY29uZHMgKyBtaW51dGVzdG9TdWIgKiA2MDtcbiAgY29uc3QgbXN0b1N1YiA9IHNlY29uZHN0b1N1YiAqIDEwMDA7XG4gIGNvbnN0IGZpbmFsRGF0ZSA9IGNvbnN0cnVjdEZyb20oZGF0ZSwgZGF0ZVdpdGhvdXREYXlzLmdldFRpbWUoKSAtIG1zdG9TdWIpO1xuXG4gIHJldHVybiBmaW5hbERhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3ViO1xuIiwiaW1wb3J0IHsgYWRkRGF5cyB9IGZyb20gXCIuL2FkZERheXMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3ViRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0gYW1vdW50IC0gVGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWQuXG4gKlxuICogQHJldHVybnMgVGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgc3VidHJhY3RlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCAxMCBkYXlzIGZyb20gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1YkRheXMoZGF0ZSwgYW1vdW50KSB7XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIC1hbW91bnQpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN1YkRheXM7XG4iLCJpbXBvcnQgeyBhZGRNb250aHMgfSBmcm9tIFwiLi9hZGRNb250aHMubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3ViTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtb250aHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSBhbW91bnQgLSBUaGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBzdWJ0cmFjdGVkLlxuICpcbiAqIEByZXR1cm5zIFRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgc3VidHJhY3RlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA1IG1vbnRocyBmcm9tIDEgRmVicnVhcnkgMjAxNTpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1vbnRocyhuZXcgRGF0ZSgyMDE1LCAxLCAxKSwgNSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWJNb250aHMoZGF0ZSwgYW1vdW50KSB7XG4gIHJldHVybiBhZGRNb250aHMoZGF0ZSwgLWFtb3VudCk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3ViTW9udGhzO1xuIiwiLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGFyZ3VtZW50IC0gVGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqXG4gKiBAcmV0dXJucyBUaGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICBjb25zdCBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpO1xuXG4gIC8vIENsb25lIHRoZSBkYXRlXG4gIGlmIChcbiAgICBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHxcbiAgICAodHlwZW9mIGFyZ3VtZW50ID09PSBcIm9iamVjdFwiICYmIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IERhdGVdXCIpXG4gICkge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgYXJndW1lbnQuY29uc3RydWN0b3IoK2FyZ3VtZW50KTtcbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwibnVtYmVyXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBOdW1iZXJdXCIgfHxcbiAgICB0eXBlb2YgYXJndW1lbnQgPT09IFwic3RyaW5nXCIgfHxcbiAgICBhcmdTdHIgPT09IFwiW29iamVjdCBTdHJpbmddXCJcbiAgKSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHRvRGF0ZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==