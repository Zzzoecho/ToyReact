/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react */ "./toy-react.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var My = /*#__PURE__*/function (_Component) {
  _inherits(My, _Component);

  var _super = _createSuper(My);

  function My() {
    var _this;

    _classCallCheck(this, My);

    _this = _super.call(this);
    _this.state = {
      a: 1,
      b: 3
    };
    return _this;
  }

  _createClass(My, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        a: this.state.a + 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, "This is My Component"), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
        onClick: function onClick() {
          return _this2.handleClick();
        }
      }, "add"), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "  ", this.state.a.toString()));
    }
  }]);

  return My;
}(_toy_react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var dom = Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(My, {
  className: "title"
}, Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "hello world"), Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "hi"));
console.log(dom);
Object(_toy_react__WEBPACK_IMPORTED_MODULE_0__["render"])(dom, document.body);

/***/ }),

/***/ "./toy-react.js":
/*!**********************!*\
  !*** ./toy-react.js ***!
  \**********************/
/*! exports provided: Component, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RENDER_TO_DOM = Symbol("render_to_dom"); // 渲染组件

var ElementWrapper = /*#__PURE__*/function () {
  function ElementWrapper(type) {
    _classCallCheck(this, ElementWrapper);

    this.root = document.createElement(type);
  }

  _createClass(ElementWrapper, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      if (/^on([\s\S]*)$/.test(name)) {
        console.log('--on--', RegExp.$1, value);
        this.root.addEventListener(RegExp.$1.toLowerCase(), value);
      } else {
        this.root.setAttribute(name, value);
      }
    } // 注意传入参数 和 实际渲染的是 component.root

  }, {
    key: "appendChild",
    value: function appendChild(component) {
      // append 一定是放最后的
      var range = document.createRange();
      range.setStart(this.root, this.root.childNodes.length);
      range.setEnd(this.root, this.root.childNodes.length);
      component[RENDER_TO_DOM](range);
    }
  }, {
    key: RENDER_TO_DOM,
    value: function value(range) {
      range.deleteContents();
      range.insertNode(this.root);
    }
  }]);

  return ElementWrapper;
}(); // 渲染文本


var TextWrapper = /*#__PURE__*/function () {
  function TextWrapper(string) {
    _classCallCheck(this, TextWrapper);

    this.root = document.createTextNode(string);
  }

  _createClass(TextWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      range.deleteContents();
      range.insertNode(this.root);
    }
  }]);

  return TextWrapper;
}(); // 为了组件不用每次手动实现setAttribute 或 appendChild


var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.props[name] = value;
    }
  }, {
    key: "appendChild",
    value: function appendChild(component) {
      this.children.push(component);
    }
  }, {
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range;
      this.render()[RENDER_TO_DOM](range);
    }
  }, {
    key: "rerender",
    value: function rerender() {
      var oldRange = this._range; // 先插入再删除

      var range = document.createRange(); // 插入的点是一个没有范围的点

      range.setStart(oldRange.startContainer, oldRange.startOffset);
      range.setEnd(oldRange.startContainer, oldRange.startOffset); // 先删除会引起一个bug， 全空的 range 会被下一个 range 吞进去

      this[RENDER_TO_DOM](range); // 将老的 range 的start移到range之后

      oldRange.setStart(range.endContainer, range.endOffset);
      oldRange.deleteContents();
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      // 短路逻辑，state 不是对象说明值类型 可直接替换
      if (this.state === null || _typeof(this.state) !== 'object') {
        this.state = newState;
        this.rerender();
        return;
      }

      var merge = function merge(oldState, newState) {
        for (var p in newState) {
          if (oldState[p] === null || _typeof(oldState[p]) !== 'object') {
            oldState[p] = newState[p];
          } else {
            merge(oldState[p], newState[p]);
          }
        }
      };

      merge(this.state, newState);
      this.rerender();
    } // 当 appendChild 被调用，传参 component.root 时会被调用
    // get root() {
    //     if (!this._root) {
    //         console.log('root', this.render().root)
    //         // this.render() 是自定义组件自己一定会实现的方法
    //         this._root = this.render().root
    //     }
    //     return this._root
    // }

  }]);

  return Component;
}();
/**
 * 创建Dom元素
 * @param type
 * @param {object} attr 属性
 * @param children
 * @returns {*}
 */

function createElement(type, attr) {
  var e;

  if (typeof type !== 'string') {
    e = new type();
  } else {
    e = new ElementWrapper(type);
  }

  for (var key in attr) {
    if (key === 'className') {
      e.setAttribute('class', attr[key]);
    } else {
      e.setAttribute(key, attr[key]);
    }
  }

  var insertChildren = function insertChildren(children) {
    children.forEach(function (child) {
      if (typeof child === 'string') {
        child = new TextWrapper(child);
      }

      if (Array.isArray(child)) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    });
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  insertChildren(children);
  return e;
}
/**
 * 渲染
 * @param component createElement 生成的dom
 * @param parentElement 挂载的目标dom
 */

function render(component, parentElement) {
  console.log('render', component);
  var range = document.createRange();
  range.setStart(parentElement, 0);
  range.setEnd(parentElement, parentElement.childNodes.length);
  range.deleteContents();
  component[RENDER_TO_DOM](range);
}

/***/ })

/******/ });
//# sourceMappingURL=main.js.map