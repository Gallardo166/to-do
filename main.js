"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `body {
    display: flex;
}

#sidebar {
    width: 140px;
    overflow: hidden;
}

button {
    outline: none;
    border: none;
    background: none;
}

button:hover {
    cursor: pointer;
}

.menu {
    display: flex;
    align-items: center;
    gap: 8px;
}

img {
    width: 24px;
}

.add-task-button {
    display: flex;
    align-items: center;
}

.hidden {
    visibility: hidden;
}


.removed {
    display: none;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,aAAa;AACjB","sourcesContent":["body {\n    display: flex;\n}\n\n#sidebar {\n    width: 140px;\n    overflow: hidden;\n}\n\nbutton {\n    outline: none;\n    border: none;\n    background: none;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.menu {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n\nimg {\n    width: 24px;\n}\n\n.add-task-button {\n    display: flex;\n    align-items: center;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n\n.removed {\n    display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony export */   hideElements: () => (/* binding */ hideElements),
/* harmony export */   loadProjects: () => (/* binding */ loadProjects),
/* harmony export */   loadSections: () => (/* binding */ loadSections),
/* harmony export */   loadTasksByDate: () => (/* binding */ loadTasksByDate),
/* harmony export */   removeElements: () => (/* binding */ removeElements),
/* harmony export */   revealElements: () => (/* binding */ revealElements)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");




const hideElements = function(container) {
    container.classList.add("hidden");
}

const revealElements = function(container) {
    container.classList.remove("hidden");
    container.classList.remove("removed");
}

const removeElements = function(container) {
    container.classList.add("removed");
}

const loadTasksByDate = function(container, filter) {
    container.innerHTML = "";
    _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].filterTaskByDate(filter).forEach((task) => {
        container.innerHTML += `
            <div class="task">
                <p>${task.title}</p>
                <p>${task.description}</p>
                <p>${task.priority}</p>
                <button class="delete-today" id=delete-${task.id}>Delete</button>
            </div>
        `;
    });
};

const loadTasksBySection = function(container, projectName, sectionName) {
    container.innerHTML = "";
    _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].filterTaskBySection(projectName, sectionName).forEach((task) => {
        container.innerHTML += `
            <div class="task">
                <p>${task.title}</p>
                <p>${task.priority}</p>
            </div>
        `
    });
};

const loadProjects = function(container) {
    container.innerHTML = "";
    for (let i=2; i<_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].allTasks.length; i++) {
        container.innerHTML += `
            <div class="project">
                <button class="project-name">${_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].allTasks[i].projectName}</button>
                <button class="delete-project">Delete</button>
            </div>
        `;
    };
};

const loadSections = function(container, project) {
    let sections = _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(project).sections;
    container.innerHTML = "";
    for (let i=1; i<sections.length; i++) {
        container.innerHTML += `
            <div class="section">
                <p>${sections[i].sectionName}</p>
                <button class="${sections[i].sectionName} add-task-button">
                    <img class="${sections[i].sectionName}" src=${_images_plus_svg__WEBPACK_IMPORTED_MODULE_2__} alt="Plus">
                </button>
                <div id="${sections[i].sectionName}-tasks"></div>
                <div class="${sections[i].sectionName} task-info-modal removed">
                    <form>
                        <input class="${sections[i].sectionName} task-name" type="text" placeholder="Task name" />
                        <input class="${sections[i].sectionName} description" type="text" placeholder="Description" />
                        <label for="priority">Priority</label>
                        <input class="${sections[i].sectionName} priority" type="number" min="1" max="5" />
                        <input class="${sections[i].sectionName} due-date" type="text" placeholder="Due Date" />
                        <button class="${sections[i].sectionName} cancel-add-task">Cancel</button>
                        <button class="${sections[i].sectionName} confirm-add-task">OK</button>
                    </form>
                </div>
            </div>
        `
        const tasks = document.querySelector(`#${sections[i].sectionName}-tasks`);
        loadTasksBySection(tasks, project, sections[i].sectionName);
    };
};



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _today_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today-page */ "./src/today-page.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");







(0,_today_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
(0,_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"])();

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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");




const init = function(projectName) {
    const renderProject = function(projectName) {
        const todayContent = document.querySelector("#today-content");
        todayContent.innerHTML = "";
        const projectContent = document.querySelector("#project-content");
        projectContent.innerHTML = `
            <h1>${projectName}</h1>
            <div id="sectionless"></div>
            <div id="project-sections"></div>
            <div id="add-section">
                <button id="add-section-button">
                    <img id="add-section-button-img" src="${_images_plus_svg__WEBPACK_IMPORTED_MODULE_1__}" alt="Plus">
                </button>
            </div>
            <div id="section-info-modal" class="removed">
                <form>
                    <input id="section-name" type="text" placeholder="Section Name" />
                    <button id="cancel-add-section">Cancel</button>
                    <button id="confirm-add-section">OK</button>
                </form>
            </div>
        `
    };

    renderProject(projectName);

    const addSectionButton = document.querySelector("#add-section-button");
    const sectionInfoModal = document.querySelector("#section-info-modal");
    const addSectionContainer = document.querySelector("#add-section");
    const cancelAddSectionButton = document.querySelector("#cancel-add-section");
    const confirmAddSectionButton = document.querySelector("#confirm-add-section");
    const sectionName = document.querySelector("#section-name");
    const projectSections = document.querySelector("#project-sections");
    const taskInfoModals = document.querySelectorAll(".task-info-modal");

    const addEvents = function() {
        addSectionButton.addEventListener("click", () => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(addSectionContainer);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.revealElements)(sectionInfoModal);
        });

        cancelAddSectionButton.addEventListener("click", (e) => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(sectionInfoModal);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.revealElements)(addSectionContainer);
            resetSectionModal();
            e.preventDefault();
        });

        confirmAddSectionButton.addEventListener("click", (e) => {
            _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].createSection(projectName, sectionName.value);
            console.log(_tasks__WEBPACK_IMPORTED_MODULE_2__["default"].allTasks);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.loadSections)(projectSections, projectName);
            enableAddTask();
            enableCancelAddTask();
            enableConfirmAddTask();
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(sectionInfoModal);
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.revealElements)(addSectionContainer);
            resetSectionModal();
            e.preventDefault();
        });

        const enableAddTask = function() {
            const addTaskButtons = document.querySelectorAll(".add-task-button");
            Array.from(addTaskButtons).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                console.log(sectionName);
                Array.from(taskInfoModals).forEach(element => (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(element));
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.revealElements)(currentModal);
            }));
        };

        const enableCancelAddTask = function() {
            const cancelAddTaskButtons = document.querySelectorAll(".cancel-add-task");
            Array.from(cancelAddTaskButtons).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(currentModal);
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };

        const enableConfirmAddTask = function() {
            const confirmAddTaskButtons = document.querySelectorAll(".confirm-add-task");
            Array.from(confirmAddTaskButtons).forEach((button) => button.addEventListener("click", (e) => {
                let sectionName = Array.from(e.target.classList)[0];
                const currentModal = document.querySelector(`.${sectionName}.task-info-modal`);
                const taskName = document.querySelector(`.${sectionName}.task-name`);
                const description = document.querySelector(`.${sectionName}.description`);
                const priority = document.querySelector(`.${sectionName}.priority`);
                const dueDate = document.querySelector(`.${sectionName}.due-date`);
                const newTask = _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(taskName.value, description.value, dueDate.value, priority.value, "not done");
                _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(newTask, projectName, sectionName);
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.loadSections)(projectSections, projectName);
                enableAddTask();
                enableCancelAddTask();
                enableConfirmAddTask();
                (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(currentModal);
                resetTaskModal(sectionName);
                e.preventDefault();
            }));
        };
    };

    addEvents();

    const resetSectionModal = function() {
        sectionName.value = "";
    };

    const resetTaskModal = function(sectionName) {
            const taskName = document.querySelector(`.${sectionName}.task-name`);
            const description = document.querySelector(`.${sectionName}.description`);
            const priority = document.querySelector(`.${sectionName}.priority`);
            const dueDate = document.querySelector(`.${sectionName}.due-date`);

            taskName.value = "";
            description.value = "";
            priority.value = "";
            dueDate.value = "";
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pubsub = {
    events: {},
    emit: function(eventName, dataOne, dataTwo, dataThree) {
        if (this.events[eventName]) {
            this.events[eventName].forEach((fn) => fn(dataOne, dataTwo, dataThree));
        };
    },
    on: function(eventName, fn) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(fn);
    },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);

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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-page */ "./src/project-page.js");
/* harmony import */ var _today_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./today-page */ "./src/today-page.js");





const closeSidebar = function() {
    const sidebar = document.querySelector("#sidebar");
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(sidebar);
}

const openSidebar = function() {
    const sidebar = document.querySelector("#sidebar");
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.revealElements)(sidebar);
}

const addEvents = function() {
    const closeSidebarButton = document.querySelector("#sidebar-toggle-close");
    const openSidebarButton = document.querySelector("#sidebar-toggle-open");
    const addProjectButton = document.querySelector("#add-project");
    const cancelAddProjectButton = document.querySelector("#cancel-add-project");
    const addProjectModal = document.querySelector("#add-project-modal");
    const projectList = document.querySelector("#projects-list")
    const confirmAddProjectButton = document.querySelector("#confirm-add-project");
    const projectName = document.querySelector("#project-name");

    closeSidebarButton.addEventListener("click", () => {
        closeSidebar();
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.revealElements)(openSidebarButton);
    });

    openSidebarButton.addEventListener("click", () => {
        openSidebar();
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.hideElements)(openSidebarButton);
    });

    addProjectButton.addEventListener("click", () => {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.revealElements)(addProjectModal);
    });

    cancelAddProjectButton.addEventListener("click", (e) => {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(addProjectModal);
        projectName.value = "";
        e.preventDefault();
    });

    confirmAddProjectButton.addEventListener("click", (e) => {
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.removeElements)(addProjectModal);
        _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].createProject(projectName.value);
        (0,_dom__WEBPACK_IMPORTED_MODULE_0__.loadProjects)(projectList);
        enableDelete();
        makeProjectsClickable();
        (0,_project_page__WEBPACK_IMPORTED_MODULE_2__["default"])(projectName.value);
        projectName.value = "";
        e.preventDefault();
    });

    const enableDelete = function() {
        const deleteProjectButtons = document.querySelectorAll(".delete-project");

        Array.from(deleteProjectButtons).forEach(button => button.addEventListener("click", (e) => {
            _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].deleteProject(e.target.previousElementSibling.textContent);
            (0,_today_page__WEBPACK_IMPORTED_MODULE_3__["default"])();
            (0,_dom__WEBPACK_IMPORTED_MODULE_0__.loadProjects)(projectList);
            enableDelete();
            makeProjectsClickable();
            e.preventDefault();
        }));
    };

    const makeProjectsClickable = function() {
        const projects = document.querySelectorAll(".project-name");
        Array.from(projects).forEach(element => element.addEventListener("click", (e) => {
            (0,_project_page__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target.textContent);
        }));
    };
};

const init = function() {
    addEvents();
}

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
const TaskManager = {

    allTasks: [
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
    ],

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
        console.log(this.allTasks);
    },

    createSection: function(projectName, sectionName) {
        this.getProject(projectName).sections.push({
            sectionName: sectionName,
            tasks: []
        });
    },

    createTask: function(title, description, dueDate, priority, status) {
        return { title, description, dueDate, priority, status };
    },

    addTask: function(task, projectName, sectionName) {
        this.allTasks[0].push(task);
        this.getSection(projectName, sectionName).tasks.push(task);
        this.resetTaskId();
    },

    containsObject: function(object, array) {
        for (let i=0; i<array.length; i++) {
            if (JSON.stringify(array[i]) === JSON.stringify(object)) {return true}
        }
        return false;
    },

    getTaskById: function(id) {
        return this.allTasks[0][id];
    },

    getProject: function(projectName) {
        return this.allTasks.filter((project) => (project.projectName === projectName))[0];
    },

    getSection: function(projectName, sectionName) {
        return this.getProject(projectName).sections.filter((section) => (section.sectionName === sectionName))[0];
    },

    getTaskProjectAndSection: function(task) {
        for (let i=1; i<this.allTasks.length; i++) {
            for (let j=0; j<this.allTasks[i].sections.length; j++) {
                if (this.containsObject(task, this.allTasks[i].sections[j].tasks)) {
                    return {projectName: this.allTasks[i].projectName, sectionName: this.allTasks[i].sections[j].sectionName};
                };
            };
        };
    },

    resetTaskId: function() {
        this.allTasks[0].forEach(task => task.id = this.allTasks[0].indexOf(task));
    },

    deleteTask: function(task) {
        this.allTasks[0].splice(task.id, 1);
        let { projectName , sectionName } = this.getTaskProjectAndSection(task);''
        this.getSection(projectName, sectionName).tasks.splice(task.id, 1);
        this.resetTaskId();
    },

    deleteProject: function(projectName) {
        this.allTasks.splice(this.allTasks.indexOf(this.getProject(projectName)), 1);
    },

    filterTaskByDate: function(date) {
        return this.allTasks[0].filter((task) => (task.dueDate === date));
    },

    filterTaskBySection: function(projectName, sectionName) {
        return this.getSection(projectName, sectionName).tasks;
    },

    moveTask: function(task, targetProjectName, targetSectionName) {
        this.deleteTask(task);
        this.addTask(task, targetProjectName, targetSectionName);
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
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/plus.svg */ "./src/images/plus.svg");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");





const init = function() {
    const renderTodayPageEmpty = function() {
        const projectContent = document.querySelector("#project-content");
        projectContent.innerHTML = "";
        const todayContent = document.querySelector("#today-content");
        todayContent.innerHTML = `
            <h1>Today</h1>
            <div id="today-task-container"></div>
            <div id="add-task-container">
                <button id="add-task-button">
                    <img id="add-task-button-img" src="${_images_plus_svg__WEBPACK_IMPORTED_MODULE_0__}" alt="Plus">
                    <p id="add-task-label">Add task</p>
                </button>
            </div>
            <div id="info-modal" class="removed">
                <form id="task-info-modal">
                    <input id="task-name" type="text" placeholder="Task name" />
                    <input id="description" type="text" placeholder="Description" />
                    <label for="priority">Priority</label>
                    <input id="priority" type="number" min="1" max="5" />
                    <button id="cancel-add-task">Cancel</button>
                    <button id="confirm-add-task">OK</button>
                </form>
            </div>
            <div id="no-task">
                <div id="no-task-image"></div>
                <div id="no-task-text"></div>
                    <p>What's happening today?</p>
                    <p>Click + to add a task.</p>
                </div>
            </div>
        `;
    };

    renderTodayPageEmpty();

    const addTaskButton = document.querySelector("#add-task-button");
    const confirmButton = document.querySelector("#confirm-add-task");
    const cancelButton = document.querySelector("#cancel-add-task");
    const addTaskContainer = document.querySelector("#add-task-container");
    const infoModal = document.querySelector("#info-modal");
    const todayTaskContainer = document.querySelector("#today-task-container");
    const noTask = document.querySelector("#no-task");

    const addEvents = function() {
        addTaskButton.addEventListener("click", () => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.removeElements)(addTaskContainer);
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.removeElements)(noTask);
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.revealElements)(infoModal);
        });

        confirmButton.addEventListener("click", (e) => {
            let taskInfo = getTaskInfo();
            let task = _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].createTask(taskInfo.title, taskInfo.description, taskInfo.dueDate, taskInfo.priority, taskInfo.status);
            _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(task, "projectless", "sectionless");

            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.loadTasksByDate)(todayTaskContainer, "today");
            enableDelete();
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.revealElements)(addTaskContainer);
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.removeElements)(infoModal);
            resetModal();
            e.preventDefault();

            console.log(_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].allTasks)
        });

        cancelButton.addEventListener("click", (e) => {
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.revealElements)(addTaskContainer);
            resetModal();
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.removeElements)(infoModal);
            if (_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].filterTaskByDate("today").length === 0) {
                (0,_dom__WEBPACK_IMPORTED_MODULE_2__.revealElements)(noTask);
            };
            e.preventDefault();
        });

        const enableDelete = function() {
            Array.from(document.querySelectorAll(".delete-today")).forEach(button => button.addEventListener("click", (e) => {
                let taskid = e.target.id.split("-")[1];
                _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].getTaskById(taskid));

                (0,_dom__WEBPACK_IMPORTED_MODULE_2__.loadTasksByDate)(todayTaskContainer, "today");
                enableDelete();
                if (_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].filterTaskByDate("today").length === 0) {
                    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.revealElements)(noTask);
                };
            }))
        };
    };

    addEvents();

    let taskName = document.querySelector("#task-name");
    let description = document.querySelector("#description");
    let priority = document.querySelector("#priority");

    const getTaskInfo = function() {
        return { title: taskName.value, description: description.value, dueDate: "today", priority: priority.value, status: "not done" };
    };

    const resetModal = function() {
        taskName.value = "";
        description.value = "";
        priority.value = "";
    };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);

/***/ }),

/***/ "./src/images/plus.svg":
/*!*****************************!*\
  !*** ./src/images/plus.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsNkNBQVEsQ0FBQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxvREFBYztBQUMxQixZQUFZLG9EQUFjO0FBQzFCLFlBQVksb0RBQWM7QUFDMUIsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsdUJBQXVCLDhDQUFXO0FBQ2xDLFlBQVksOENBQVc7O0FBRXZCLFlBQVkscURBQWU7QUFDM0I7QUFDQSxZQUFZLG9EQUFjO0FBQzFCLFlBQVksb0RBQWM7QUFDMUI7QUFDQTs7QUFFQSx3QkFBd0IsOENBQVc7QUFDbkMsU0FBUzs7QUFFVDtBQUNBLFlBQVksb0RBQWM7QUFDMUI7QUFDQSxZQUFZLG9EQUFjO0FBQzFCLGdCQUFnQiw4Q0FBVztBQUMzQixnQkFBZ0Isb0RBQWM7QUFDOUI7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFXLFlBQVksOENBQVc7O0FBRWxELGdCQUFnQixxREFBZTtBQUMvQjtBQUNBLG9CQUFvQiw4Q0FBVztBQUMvQixvQkFBb0Isb0RBQWM7QUFDbEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvcHJvamVjdC1wYWdlLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9zaWRlYmFyLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3RvZGF5LXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNzaWRlYmFyIHtcbiAgICB3aWR0aDogMTQwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5idXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMjRweDtcbn1cblxuLmFkZC10YXNrLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGlkZGVuIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cblxuLnJlbW92ZWQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgICB3aWR0aDogMTQwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG5pbWcge1xcbiAgICB3aWR0aDogMjRweDtcXG59XFxuXFxuLmFkZC10YXNrLWJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcblxcbi5yZW1vdmVkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBQbHVzSWNvbiBmcm9tIFwiLi9pbWFnZXMvcGx1cy5zdmdcIjtcblxuY29uc3QgaGlkZUVsZW1lbnRzID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG59XG5cbmNvbnN0IHJldmVhbEVsZW1lbnRzID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJyZW1vdmVkXCIpO1xufVxuXG5jb25zdCByZW1vdmVFbGVtZW50cyA9IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlZFwiKTtcbn1cblxuY29uc3QgbG9hZFRhc2tzQnlEYXRlID0gZnVuY3Rpb24oY29udGFpbmVyLCBmaWx0ZXIpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBUYXNrTWFuYWdlci5maWx0ZXJUYXNrQnlEYXRlKGZpbHRlcikuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrXCI+XG4gICAgICAgICAgICAgICAgPHA+JHt0YXNrLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD4ke3Rhc2suZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7dGFzay5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10b2RheVwiIGlkPWRlbGV0ZS0ke3Rhc2suaWR9PkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfSk7XG59O1xuXG5jb25zdCBsb2FkVGFza3NCeVNlY3Rpb24gPSBmdW5jdGlvbihjb250YWluZXIsIHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIFRhc2tNYW5hZ2VyLmZpbHRlclRhc2tCeVNlY3Rpb24ocHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tcIj5cbiAgICAgICAgICAgICAgICA8cD4ke3Rhc2sudGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPiR7dGFzay5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgIH0pO1xufTtcblxuY29uc3QgbG9hZFByb2plY3RzID0gZnVuY3Rpb24oY29udGFpbmVyKSB7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaT0yOyBpPFRhc2tNYW5hZ2VyLmFsbFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgKz0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtUYXNrTWFuYWdlci5hbGxUYXNrc1tpXS5wcm9qZWN0TmFtZX08L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlLXByb2plY3RcIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH07XG59O1xuXG5jb25zdCBsb2FkU2VjdGlvbnMgPSBmdW5jdGlvbihjb250YWluZXIsIHByb2plY3QpIHtcbiAgICBsZXQgc2VjdGlvbnMgPSBUYXNrTWFuYWdlci5nZXRQcm9qZWN0KHByb2plY3QpLnNlY3Rpb25zO1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGk9MTsgaTxzZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPHA+JHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9IGFkZC10YXNrLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX1cIiBzcmM9JHtQbHVzSWNvbn0gYWx0PVwiUGx1c1wiPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCIke3NlY3Rpb25zW2ldLnNlY3Rpb25OYW1lfS10YXNrc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke3NlY3Rpb25zW2ldLnNlY3Rpb25OYW1lfSB0YXNrLWluZm8tbW9kYWwgcmVtb3ZlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9IHRhc2stbmFtZVwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUYXNrIG5hbWVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX0gZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX0gcHJpb3JpdHlcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMVwiIG1heD1cIjVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiJHtzZWN0aW9uc1tpXS5zZWN0aW9uTmFtZX0gZHVlLWRhdGVcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRHVlIERhdGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9IGNhbmNlbC1hZGQtdGFza1wiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIiR7c2VjdGlvbnNbaV0uc2VjdGlvbk5hbWV9IGNvbmZpcm0tYWRkLXRhc2tcIj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYFxuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NlY3Rpb25zW2ldLnNlY3Rpb25OYW1lfS10YXNrc2ApO1xuICAgICAgICBsb2FkVGFza3NCeVNlY3Rpb24odGFza3MsIHByb2plY3QsIHNlY3Rpb25zW2ldLnNlY3Rpb25OYW1lKTtcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgaGlkZUVsZW1lbnRzLCByZXZlYWxFbGVtZW50cywgcmVtb3ZlRWxlbWVudHMsIGxvYWRUYXNrc0J5RGF0ZSwgbG9hZFByb2plY3RzLCBsb2FkU2VjdGlvbnMgfTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5pbXBvcnQgaW5pdFRvZGF5UGFnZSBmcm9tIFwiLi90b2RheS1wYWdlXCI7XG5pbXBvcnQgaW5pdFNpZGViYXIgZnJvbSBcIi4vc2lkZWJhclwiO1xuXG5pbml0VG9kYXlQYWdlKCk7XG5pbml0U2lkZWJhcigpOyIsImltcG9ydCB7IGhpZGVFbGVtZW50cywgcmV2ZWFsRWxlbWVudHMsIHJlbW92ZUVsZW1lbnRzLCBsb2FkVGFza3NCeURhdGUsIGxvYWRQcm9qZWN0cywgbG9hZFNlY3Rpb25zIH0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgUGx1c0ljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMuc3ZnXCI7XG5pbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vdGFza3NcIjtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gICAgY29uc3QgcmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9kYXktY29udGVudFwiKTtcbiAgICAgICAgdG9kYXlDb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWNvbnRlbnRcIik7XG4gICAgICAgIHByb2plY3RDb250ZW50LmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIDxoMT4ke3Byb2plY3ROYW1lfTwvaDE+XG4gICAgICAgICAgICA8ZGl2IGlkPVwic2VjdGlvbmxlc3NcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0LXNlY3Rpb25zXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWRkLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiYWRkLXNlY3Rpb24tYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJhZGQtc2VjdGlvbi1idXR0b24taW1nXCIgc3JjPVwiJHtQbHVzSWNvbn1cIiBhbHQ9XCJQbHVzXCI+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzZWN0aW9uLWluZm8tbW9kYWxcIiBjbGFzcz1cInJlbW92ZWRcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwic2VjdGlvbi1uYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlY3Rpb24gTmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWwtYWRkLXNlY3Rpb25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmZpcm0tYWRkLXNlY3Rpb25cIj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfTtcblxuICAgIHJlbmRlclByb2plY3QocHJvamVjdE5hbWUpO1xuXG4gICAgY29uc3QgYWRkU2VjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXNlY3Rpb24tYnV0dG9uXCIpO1xuICAgIGNvbnN0IHNlY3Rpb25JbmZvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3Rpb24taW5mby1tb2RhbFwiKTtcbiAgICBjb25zdCBhZGRTZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtc2VjdGlvblwiKTtcbiAgICBjb25zdCBjYW5jZWxBZGRTZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWwtYWRkLXNlY3Rpb25cIik7XG4gICAgY29uc3QgY29uZmlybUFkZFNlY3Rpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbmZpcm0tYWRkLXNlY3Rpb25cIik7XG4gICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlY3Rpb24tbmFtZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0U2VjdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3Qtc2VjdGlvbnNcIik7XG4gICAgY29uc3QgdGFza0luZm9Nb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2staW5mby1tb2RhbFwiKTtcblxuICAgIGNvbnN0IGFkZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBhZGRTZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cyhhZGRTZWN0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldmVhbEVsZW1lbnRzKHNlY3Rpb25JbmZvTW9kYWwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYW5jZWxBZGRTZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMoc2VjdGlvbkluZm9Nb2RhbCk7XG4gICAgICAgICAgICByZXZlYWxFbGVtZW50cyhhZGRTZWN0aW9uQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHJlc2V0U2VjdGlvbk1vZGFsKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbmZpcm1BZGRTZWN0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgVGFza01hbmFnZXIuY3JlYXRlU2VjdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUudmFsdWUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coVGFza01hbmFnZXIuYWxsVGFza3MpO1xuICAgICAgICAgICAgbG9hZFNlY3Rpb25zKHByb2plY3RTZWN0aW9ucywgcHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgZW5hYmxlQWRkVGFzaygpO1xuICAgICAgICAgICAgZW5hYmxlQ2FuY2VsQWRkVGFzaygpO1xuICAgICAgICAgICAgZW5hYmxlQ29uZmlybUFkZFRhc2soKTtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzKHNlY3Rpb25JbmZvTW9kYWwpO1xuICAgICAgICAgICAgcmV2ZWFsRWxlbWVudHMoYWRkU2VjdGlvbkNvbnRhaW5lcik7XG4gICAgICAgICAgICByZXNldFNlY3Rpb25Nb2RhbCgpO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlbmFibGVBZGRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWRkLXRhc2stYnV0dG9uXCIpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShhZGRUYXNrQnV0dG9ucykuZm9yRWFjaCgoYnV0dG9uKSA9PiBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNlY3Rpb25OYW1lID0gQXJyYXkuZnJvbShlLnRhcmdldC5jbGFzc0xpc3QpWzBdO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKHRhc2tJbmZvTW9kYWxzKS5mb3JFYWNoKGVsZW1lbnQgPT4gcmVtb3ZlRWxlbWVudHMoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlY3Rpb25OYW1lfS50YXNrLWluZm8tbW9kYWxgKTtcbiAgICAgICAgICAgICAgICByZXZlYWxFbGVtZW50cyhjdXJyZW50TW9kYWwpO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGVuYWJsZUNhbmNlbEFkZFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbmNlbEFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYW5jZWwtYWRkLXRhc2tcIik7XG4gICAgICAgICAgICBBcnJheS5mcm9tKGNhbmNlbEFkZFRhc2tCdXR0b25zKS5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VjdGlvbk5hbWUgPSBBcnJheS5mcm9tKGUudGFyZ2V0LmNsYXNzTGlzdClbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VjdGlvbk5hbWV9LnRhc2staW5mby1tb2RhbGApO1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzKGN1cnJlbnRNb2RhbCk7XG4gICAgICAgICAgICAgICAgcmVzZXRUYXNrTW9kYWwoc2VjdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBlbmFibGVDb25maXJtQWRkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlybUFkZFRhc2tCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb25maXJtLWFkZC10YXNrXCIpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShjb25maXJtQWRkVGFza0J1dHRvbnMpLmZvckVhY2goKGJ1dHRvbikgPT4gYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9uTmFtZSA9IEFycmF5LmZyb20oZS50YXJnZXQuY2xhc3NMaXN0KVswXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWN0aW9uTmFtZX0udGFzay1pbmZvLW1vZGFsYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWN0aW9uTmFtZX0udGFzay1uYW1lYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWN0aW9uTmFtZX0uZGVzY3JpcHRpb25gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlY3Rpb25OYW1lfS5wcmlvcml0eWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWN0aW9uTmFtZX0uZHVlLWRhdGVgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gVGFza01hbmFnZXIuY3JlYXRlVGFzayh0YXNrTmFtZS52YWx1ZSwgZGVzY3JpcHRpb24udmFsdWUsIGR1ZURhdGUudmFsdWUsIHByaW9yaXR5LnZhbHVlLCBcIm5vdCBkb25lXCIpO1xuICAgICAgICAgICAgICAgIFRhc2tNYW5hZ2VyLmFkZFRhc2sobmV3VGFzaywgcHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgICAgICBsb2FkU2VjdGlvbnMocHJvamVjdFNlY3Rpb25zLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICAgICAgZW5hYmxlQWRkVGFzaygpO1xuICAgICAgICAgICAgICAgIGVuYWJsZUNhbmNlbEFkZFRhc2soKTtcbiAgICAgICAgICAgICAgICBlbmFibGVDb25maXJtQWRkVGFzaygpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzKGN1cnJlbnRNb2RhbCk7XG4gICAgICAgICAgICAgICAgcmVzZXRUYXNrTW9kYWwoc2VjdGlvbk5hbWUpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgYWRkRXZlbnRzKCk7XG5cbiAgICBjb25zdCByZXNldFNlY3Rpb25Nb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWN0aW9uTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0VGFza01vZGFsID0gZnVuY3Rpb24oc2VjdGlvbk5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VjdGlvbk5hbWV9LnRhc2stbmFtZWApO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWN0aW9uTmFtZX0uZGVzY3JpcHRpb25gKTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VjdGlvbk5hbWV9LnByaW9yaXR5YCk7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VjdGlvbk5hbWV9LmR1ZS1kYXRlYCk7XG5cbiAgICAgICAgICAgIHRhc2tOYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHByaW9yaXR5LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0OyIsInZhciBwdWJzdWIgPSB7XG4gICAgZXZlbnRzOiB7fSxcbiAgICBlbWl0OiBmdW5jdGlvbihldmVudE5hbWUsIGRhdGFPbmUsIGRhdGFUd28sIGRhdGFUaHJlZSkge1xuICAgICAgICBpZiAodGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKChmbikgPT4gZm4oZGF0YU9uZSwgZGF0YVR3bywgZGF0YVRocmVlKSk7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBvbjogZnVuY3Rpb24oZXZlbnROYW1lLCBmbikge1xuICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gdGhpcy5ldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcHVic3ViOyIsImltcG9ydCB7IGhpZGVFbGVtZW50cywgcmV2ZWFsRWxlbWVudHMsIHJlbW92ZUVsZW1lbnRzLCBsb2FkVGFza3MsIGxvYWRQcm9qZWN0cyB9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IFRhc2tNYW5hZ2VyIGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgaW5pdFByb2plY3RQYWdlIGZyb20gXCIuL3Byb2plY3QtcGFnZVwiO1xuaW1wb3J0IGluaXRUb2RheVBhZ2UgZnJvbSBcIi4vdG9kYXktcGFnZVwiO1xuXG5jb25zdCBjbG9zZVNpZGViYXIgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWRlYmFyXCIpO1xuICAgIHJlbW92ZUVsZW1lbnRzKHNpZGViYXIpO1xufVxuXG5jb25zdCBvcGVuU2lkZWJhciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXJcIik7XG4gICAgcmV2ZWFsRWxlbWVudHMoc2lkZWJhcik7XG59XG5cbmNvbnN0IGFkZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNsb3NlU2lkZWJhckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2lkZWJhci10b2dnbGUtY2xvc2VcIik7XG4gICAgY29uc3Qgb3BlblNpZGViYXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NpZGViYXItdG9nZ2xlLW9wZW5cIik7XG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3RcIik7XG4gICAgY29uc3QgY2FuY2VsQWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLWFkZC1wcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLXByb2plY3QtbW9kYWxcIik7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzLWxpc3RcIilcbiAgICBjb25zdCBjb25maXJtQWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29uZmlybS1hZGQtcHJvamVjdFwiKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1uYW1lXCIpO1xuXG4gICAgY2xvc2VTaWRlYmFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNsb3NlU2lkZWJhcigpO1xuICAgICAgICByZXZlYWxFbGVtZW50cyhvcGVuU2lkZWJhckJ1dHRvbik7XG4gICAgfSk7XG5cbiAgICBvcGVuU2lkZWJhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBvcGVuU2lkZWJhcigpO1xuICAgICAgICBoaWRlRWxlbWVudHMob3BlblNpZGViYXJCdXR0b24pO1xuICAgIH0pO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICByZXZlYWxFbGVtZW50cyhhZGRQcm9qZWN0TW9kYWwpO1xuICAgIH0pO1xuXG4gICAgY2FuY2VsQWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcmVtb3ZlRWxlbWVudHMoYWRkUHJvamVjdE1vZGFsKTtcbiAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBjb25maXJtQWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgcmVtb3ZlRWxlbWVudHMoYWRkUHJvamVjdE1vZGFsKTtcbiAgICAgICAgVGFza01hbmFnZXIuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgIGxvYWRQcm9qZWN0cyhwcm9qZWN0TGlzdCk7XG4gICAgICAgIGVuYWJsZURlbGV0ZSgpO1xuICAgICAgICBtYWtlUHJvamVjdHNDbGlja2FibGUoKTtcbiAgICAgICAgaW5pdFByb2plY3RQYWdlKHByb2plY3ROYW1lLnZhbHVlKTtcbiAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBlbmFibGVEZWxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZS1wcm9qZWN0XCIpO1xuXG4gICAgICAgIEFycmF5LmZyb20oZGVsZXRlUHJvamVjdEJ1dHRvbnMpLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIFRhc2tNYW5hZ2VyLmRlbGV0ZVByb2plY3QoZS50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICBpbml0VG9kYXlQYWdlKCk7XG4gICAgICAgICAgICBsb2FkUHJvamVjdHMocHJvamVjdExpc3QpO1xuICAgICAgICAgICAgZW5hYmxlRGVsZXRlKCk7XG4gICAgICAgICAgICBtYWtlUHJvamVjdHNDbGlja2FibGUoKTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBtYWtlUHJvamVjdHNDbGlja2FibGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgQXJyYXkuZnJvbShwcm9qZWN0cykuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBpbml0UHJvamVjdFBhZ2UoZS50YXJnZXQudGV4dENvbnRlbnQpO1xuICAgICAgICB9KSk7XG4gICAgfTtcbn07XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBhZGRFdmVudHMoKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdDsiLCJjb25zdCBUYXNrTWFuYWdlciA9IHtcblxuICAgIGFsbFRhc2tzOiBbXG4gICAgICAgIFtdLFxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogXCJwcm9qZWN0bGVzc1wiLFxuICAgICAgICAgICAgc2VjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb25OYW1lOiBcInNlY3Rpb25sZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgIHRhc2tzOiBbXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICBdLFxuXG4gICAgY3JlYXRlUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdE5hbWUpIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogYCR7cHJvamVjdE5hbWV9YCxcbiAgICAgICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uTmFtZTogXCJzZWN0aW9ubGVzc1wiLFxuICAgICAgICAgICAgICAgICAgICB0YXNrczogW10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYWxsVGFza3MucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hbGxUYXNrcyk7XG4gICAgfSxcblxuICAgIGNyZWF0ZVNlY3Rpb246IGZ1bmN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpLnNlY3Rpb25zLnB1c2goe1xuICAgICAgICAgICAgc2VjdGlvbk5hbWU6IHNlY3Rpb25OYW1lLFxuICAgICAgICAgICAgdGFza3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBjcmVhdGVUYXNrOiBmdW5jdGlvbih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzIH07XG4gICAgfSxcblxuICAgIGFkZFRhc2s6IGZ1bmN0aW9uKHRhc2ssIHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkge1xuICAgICAgICB0aGlzLmFsbFRhc2tzWzBdLnB1c2godGFzayk7XG4gICAgICAgIHRoaXMuZ2V0U2VjdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpLnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIHRoaXMucmVzZXRUYXNrSWQoKTtcbiAgICB9LFxuXG4gICAgY29udGFpbnNPYmplY3Q6IGZ1bmN0aW9uKG9iamVjdCwgYXJyYXkpIHtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoYXJyYXlbaV0pID09PSBKU09OLnN0cmluZ2lmeShvYmplY3QpKSB7cmV0dXJuIHRydWV9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICBnZXRUYXNrQnlJZDogZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsVGFza3NbMF1baWRdO1xuICAgIH0sXG5cbiAgICBnZXRQcm9qZWN0OiBmdW5jdGlvbihwcm9qZWN0TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbGxUYXNrcy5maWx0ZXIoKHByb2plY3QpID0+IChwcm9qZWN0LnByb2plY3ROYW1lID09PSBwcm9qZWN0TmFtZSkpWzBdO1xuICAgIH0sXG5cbiAgICBnZXRTZWN0aW9uOiBmdW5jdGlvbihwcm9qZWN0TmFtZSwgc2VjdGlvbk5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2VjdGlvbnMuZmlsdGVyKChzZWN0aW9uKSA9PiAoc2VjdGlvbi5zZWN0aW9uTmFtZSA9PT0gc2VjdGlvbk5hbWUpKVswXTtcbiAgICB9LFxuXG4gICAgZ2V0VGFza1Byb2plY3RBbmRTZWN0aW9uOiBmdW5jdGlvbih0YXNrKSB7XG4gICAgICAgIGZvciAobGV0IGk9MTsgaTx0aGlzLmFsbFRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dGhpcy5hbGxUYXNrc1tpXS5zZWN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRhaW5zT2JqZWN0KHRhc2ssIHRoaXMuYWxsVGFza3NbaV0uc2VjdGlvbnNbal0udGFza3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7cHJvamVjdE5hbWU6IHRoaXMuYWxsVGFza3NbaV0ucHJvamVjdE5hbWUsIHNlY3Rpb25OYW1lOiB0aGlzLmFsbFRhc2tzW2ldLnNlY3Rpb25zW2pdLnNlY3Rpb25OYW1lfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgcmVzZXRUYXNrSWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmFsbFRhc2tzWzBdLmZvckVhY2godGFzayA9PiB0YXNrLmlkID0gdGhpcy5hbGxUYXNrc1swXS5pbmRleE9mKHRhc2spKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlVGFzazogZnVuY3Rpb24odGFzaykge1xuICAgICAgICB0aGlzLmFsbFRhc2tzWzBdLnNwbGljZSh0YXNrLmlkLCAxKTtcbiAgICAgICAgbGV0IHsgcHJvamVjdE5hbWUgLCBzZWN0aW9uTmFtZSB9ID0gdGhpcy5nZXRUYXNrUHJvamVjdEFuZFNlY3Rpb24odGFzayk7JydcbiAgICAgICAgdGhpcy5nZXRTZWN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkudGFza3Muc3BsaWNlKHRhc2suaWQsIDEpO1xuICAgICAgICB0aGlzLnJlc2V0VGFza0lkKCk7XG4gICAgfSxcblxuICAgIGRlbGV0ZVByb2plY3Q6IGZ1bmN0aW9uKHByb2plY3ROYW1lKSB7XG4gICAgICAgIHRoaXMuYWxsVGFza3Muc3BsaWNlKHRoaXMuYWxsVGFza3MuaW5kZXhPZih0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpKSwgMSk7XG4gICAgfSxcblxuICAgIGZpbHRlclRhc2tCeURhdGU6IGZ1bmN0aW9uKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsVGFza3NbMF0uZmlsdGVyKCh0YXNrKSA9PiAodGFzay5kdWVEYXRlID09PSBkYXRlKSk7XG4gICAgfSxcblxuICAgIGZpbHRlclRhc2tCeVNlY3Rpb246IGZ1bmN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTZWN0aW9uKHByb2plY3ROYW1lLCBzZWN0aW9uTmFtZSkudGFza3M7XG4gICAgfSxcblxuICAgIG1vdmVUYXNrOiBmdW5jdGlvbih0YXNrLCB0YXJnZXRQcm9qZWN0TmFtZSwgdGFyZ2V0U2VjdGlvbk5hbWUpIHtcbiAgICAgICAgdGhpcy5kZWxldGVUYXNrKHRhc2spO1xuICAgICAgICB0aGlzLmFkZFRhc2sodGFzaywgdGFyZ2V0UHJvamVjdE5hbWUsIHRhcmdldFNlY3Rpb25OYW1lKTtcbiAgICB9LFxuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYXNrTWFuYWdlcjsiLCJpbXBvcnQgUGx1c0ljb24gZnJvbSBcIi4vaW1hZ2VzL3BsdXMuc3ZnXCI7XG5pbXBvcnQgVGFza01hbmFnZXIgZnJvbSBcIi4vdGFza3NcIjtcbmltcG9ydCB7IGhpZGVFbGVtZW50cywgcmV2ZWFsRWxlbWVudHMsIHJlbW92ZUVsZW1lbnRzLCBsb2FkVGFza3NCeURhdGUgfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBwdWJzdWIgZnJvbSBcIi4vcHVic3ViXCI7XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCByZW5kZXJUb2RheVBhZ2VFbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1jb250ZW50XCIpO1xuICAgICAgICBwcm9qZWN0Q29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjb25zdCB0b2RheUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZGF5LWNvbnRlbnRcIik7XG4gICAgICAgIHRvZGF5Q29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICA8aDE+VG9kYXk8L2gxPlxuICAgICAgICAgICAgPGRpdiBpZD1cInRvZGF5LXRhc2stY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWRkLXRhc2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImFkZC10YXNrLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiYWRkLXRhc2stYnV0dG9uLWltZ1wiIHNyYz1cIiR7UGx1c0ljb259XCIgYWx0PVwiUGx1c1wiPlxuICAgICAgICAgICAgICAgICAgICA8cCBpZD1cImFkZC10YXNrLWxhYmVsXCI+QWRkIHRhc2s8L3A+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbmZvLW1vZGFsXCIgY2xhc3M9XCJyZW1vdmVkXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJ0YXNrLWluZm8tbW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwidGFzay1uYW1lXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRlc2NyaXB0aW9uXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJwcmlvcml0eVwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxXCIgbWF4PVwiNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjYW5jZWwtYWRkLXRhc2tcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmZpcm0tYWRkLXRhc2tcIj5PSzwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm5vLXRhc2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibm8tdGFzay1pbWFnZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJuby10YXNrLXRleHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2hhdCdzIGhhcHBlbmluZyB0b2RheT88L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkNsaWNrICsgdG8gYWRkIGEgdGFzay48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9O1xuXG4gICAgcmVuZGVyVG9kYXlQYWdlRW1wdHkoKTtcblxuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWJ1dHRvblwiKTtcbiAgICBjb25zdCBjb25maXJtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb25maXJtLWFkZC10YXNrXCIpO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FuY2VsLWFkZC10YXNrXCIpO1xuICAgIGNvbnN0IGFkZFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC10YXNrLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBpbmZvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2luZm8tbW9kYWxcIik7XG4gICAgY29uc3QgdG9kYXlUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2RheS10YXNrLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBub1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25vLXRhc2tcIik7XG5cbiAgICBjb25zdCBhZGRFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHMoYWRkVGFza0NvbnRhaW5lcik7XG4gICAgICAgICAgICByZW1vdmVFbGVtZW50cyhub1Rhc2spO1xuICAgICAgICAgICAgcmV2ZWFsRWxlbWVudHMoaW5mb01vZGFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uZmlybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXNrSW5mbyA9IGdldFRhc2tJbmZvKCk7XG4gICAgICAgICAgICBsZXQgdGFzayA9IFRhc2tNYW5hZ2VyLmNyZWF0ZVRhc2sodGFza0luZm8udGl0bGUsIHRhc2tJbmZvLmRlc2NyaXB0aW9uLCB0YXNrSW5mby5kdWVEYXRlLCB0YXNrSW5mby5wcmlvcml0eSwgdGFza0luZm8uc3RhdHVzKTtcbiAgICAgICAgICAgIFRhc2tNYW5hZ2VyLmFkZFRhc2sodGFzaywgXCJwcm9qZWN0bGVzc1wiLCBcInNlY3Rpb25sZXNzXCIpO1xuXG4gICAgICAgICAgICBsb2FkVGFza3NCeURhdGUodG9kYXlUYXNrQ29udGFpbmVyLCBcInRvZGF5XCIpO1xuICAgICAgICAgICAgZW5hYmxlRGVsZXRlKCk7XG4gICAgICAgICAgICByZXZlYWxFbGVtZW50cyhhZGRUYXNrQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzKGluZm9Nb2RhbCk7XG4gICAgICAgICAgICByZXNldE1vZGFsKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFRhc2tNYW5hZ2VyLmFsbFRhc2tzKVxuICAgICAgICB9KTtcblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICByZXZlYWxFbGVtZW50cyhhZGRUYXNrQ29udGFpbmVyKTtcbiAgICAgICAgICAgIHJlc2V0TW9kYWwoKTtcbiAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzKGluZm9Nb2RhbCk7XG4gICAgICAgICAgICBpZiAoVGFza01hbmFnZXIuZmlsdGVyVGFza0J5RGF0ZShcInRvZGF5XCIpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldmVhbEVsZW1lbnRzKG5vVGFzayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBlbmFibGVEZWxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGUtdG9kYXlcIikpLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdGFza2lkID0gZS50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzFdO1xuICAgICAgICAgICAgICAgIFRhc2tNYW5hZ2VyLmRlbGV0ZVRhc2soVGFza01hbmFnZXIuZ2V0VGFza0J5SWQodGFza2lkKSk7XG5cbiAgICAgICAgICAgICAgICBsb2FkVGFza3NCeURhdGUodG9kYXlUYXNrQ29udGFpbmVyLCBcInRvZGF5XCIpO1xuICAgICAgICAgICAgICAgIGVuYWJsZURlbGV0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChUYXNrTWFuYWdlci5maWx0ZXJUYXNrQnlEYXRlKFwidG9kYXlcIikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldmVhbEVsZW1lbnRzKG5vVGFzayk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBhZGRFdmVudHMoKTtcblxuICAgIGxldCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay1uYW1lXCIpO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcblxuICAgIGNvbnN0IGdldFRhc2tJbmZvID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7IHRpdGxlOiB0YXNrTmFtZS52YWx1ZSwgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLnZhbHVlLCBkdWVEYXRlOiBcInRvZGF5XCIsIHByaW9yaXR5OiBwcmlvcml0eS52YWx1ZSwgc3RhdHVzOiBcIm5vdCBkb25lXCIgfTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVzZXRNb2RhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0YXNrTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgICAgICAgcHJpb3JpdHkudmFsdWUgPSBcIlwiO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==