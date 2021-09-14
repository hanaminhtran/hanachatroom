(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/get-iterator */ "./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/get-iterator.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/get-iterator.js"); } }(); 

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/is-iterable */ "./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/is-iterable.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/is-iterable.js"); } }(); 

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(/*! ../core-js/is-iterable */ "./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(/*! ../core-js/get-iterator */ "./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/helpers/slicedToArray.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/helpers/slicedToArray.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/fn/get-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.get-iterator */ "./node_modules/core-js/library/modules/core.get-iterator.js");

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/get-iterator.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/get-iterator.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/library/modules/es6.string.iterator.js");
module.exports = __webpack_require__(/*! ../modules/core.is-iterable */ "./node_modules/core-js/library/modules/core.is-iterable.js");

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/is-iterable.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/is-iterable.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.get-iterator.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var get = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/library/modules/core.get-iterator-method.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/core.get-iterator.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/core.get-iterator.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/library/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/library/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/library/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/core.is-iterable.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/core.is-iterable.js"); } }(); 

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/rc-switch/assets/index.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/rc-switch/assets/index.css ***!
  \***************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rc-switch {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 44px;\n  height: 22px;\n  line-height: 20px;\n  padding: 0;\n  vertical-align: middle;\n  border-radius: 20px 20px;\n  border: 1px solid #ccc;\n  background-color: #ccc;\n  cursor: pointer;\n  transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n}\n.rc-switch-inner {\n  color: #fff;\n  font-size: 12px;\n  position: absolute;\n  left: 24px;\n  top: 0;\n}\n.rc-switch:after {\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  left: 2px;\n  top: 1px;\n  border-radius: 50% 50%;\n  background-color: #fff;\n  content: \" \";\n  cursor: pointer;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  transition: left 0.3s cubic-bezier(0.35, 0, 0.25, 1);\n  -webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);\n          animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);\n  -webkit-animation-duration: 0.3s;\n          animation-duration: 0.3s;\n  -webkit-animation-name: rcSwitchOff;\n          animation-name: rcSwitchOff;\n}\n.rc-switch:hover:after {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n  -webkit-animation-name: rcSwitchOn;\n          animation-name: rcSwitchOn;\n}\n.rc-switch:focus {\n  box-shadow: 0 0 0 2px #d5f1fd;\n  outline: none;\n}\n.rc-switch-checked {\n  border: 1px solid #87d068;\n  background-color: #87d068;\n}\n.rc-switch-checked .rc-switch-inner {\n  left: 6px;\n}\n.rc-switch-checked:after {\n  left: 22px;\n}\n.rc-switch-disabled {\n  cursor: no-drop;\n  background: #ccc;\n  border-color: #ccc;\n}\n.rc-switch-disabled:after {\n  background: #9e9e9e;\n  -webkit-animation-name: none;\n          animation-name: none;\n  cursor: no-drop;\n}\n.rc-switch-disabled:hover:after {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  -webkit-animation-name: none;\n          animation-name: none;\n}\n.rc-switch-label {\n  display: inline-block;\n  line-height: 20px;\n  font-size: 14px;\n  padding-left: 10px;\n  vertical-align: middle;\n  white-space: normal;\n  pointer-events: none;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\n@-webkit-keyframes rcSwitchOn {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25);\n  }\n  100% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n@keyframes rcSwitchOn {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  50% {\n    -webkit-transform: scale(1.25);\n            transform: scale(1.25);\n  }\n  100% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n@-webkit-keyframes rcSwitchOff {\n  0% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n@keyframes rcSwitchOff {\n  0% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/rc-switch/es/Switch.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-switch/es/Switch.js ***!
  \*********************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var classNames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var Switch =
/*#__PURE__*/
function (_Component) {
  _inherits(Switch, _Component);

  function Switch(props) {
    var _this;

    _classCallCheck(this, Switch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Switch).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (e) {
      var checked = _this.state.checked;
      var onClick = _this.props.onClick;
      var newChecked = !checked;

      _this.setChecked(newChecked, e);

      if (onClick) {
        onClick(newChecked, e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (e) {
      if (e.keyCode === 37) {
        // Left
        _this.setChecked(false, e);
      } else if (e.keyCode === 39) {
        // Right
        _this.setChecked(true, e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleMouseUp", function (e) {
      var onMouseUp = _this.props.onMouseUp;

      if (_this.node) {
        _this.node.blur();
      }

      if (onMouseUp) {
        onMouseUp(e);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveNode", function (node) {
      _this.node = node;
    });

    var _checked = false;

    if ('checked' in props) {
      _checked = !!props.checked;
    } else {
      _checked = !!props.defaultChecked;
    }

    _this.state = {
      checked: _checked
    };
    return _this;
  }

  _createClass(Switch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          autoFocus = _this$props.autoFocus,
          disabled = _this$props.disabled;

      if (autoFocus && !disabled) {
        this.focus();
      }
    }
  }, {
    key: "setChecked",
    value: function setChecked(checked, e) {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          onChange = _this$props2.onChange;

      if (disabled) {
        return;
      }

      if (!('checked' in this.props)) {
        this.setState({
          checked: checked
        });
      }

      if (onChange) {
        onChange(checked, e);
      }
    }
  }, {
    key: "focus",
    value: function focus() {
      this.node.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.node.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          className = _this$props3.className,
          prefixCls = _this$props3.prefixCls,
          disabled = _this$props3.disabled,
          loadingIcon = _this$props3.loadingIcon,
          checkedChildren = _this$props3.checkedChildren,
          unCheckedChildren = _this$props3.unCheckedChildren,
          restProps = _objectWithoutProperties(_this$props3, ["className", "prefixCls", "disabled", "loadingIcon", "checkedChildren", "unCheckedChildren"]);

      var checked = this.state.checked;
      var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, "".concat(prefixCls, "-checked"), checked), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), disabled), _classNames));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({}, restProps, {
        type: "button",
        role: "switch",
        "aria-checked": checked,
        disabled: disabled,
        className: switchClassName,
        ref: this.saveNode,
        onKeyDown: this.handleKeyDown,
        onClick: this.handleClick,
        onMouseUp: this.handleMouseUp
      }), loadingIcon, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "".concat(prefixCls, "-inner")
      }, checked ? checkedChildren : unCheckedChildren));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var newState = {};
      var checked = nextProps.checked;

      if ('checked' in nextProps) {
        newState.checked = !!checked;
      }

      return newState;
    }
  }]);

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

Switch.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  prefixCls: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  checkedChildren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  unCheckedChildren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  checked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  loadingIcon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
Switch.defaultProps = {
  prefixCls: 'rc-switch',
  checkedChildren: null,
  unCheckedChildren: null,
  className: '',
  defaultChecked: false
};
Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_2__["polyfill"])(Switch);
/* harmony default export */ __webpack_exports__["default"] = (Switch);
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/rc-switch/es/Switch.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/rc-switch/es/Switch.js"); } }(); 

/***/ }),

/***/ "./node_modules/rc-switch/es/index.js":
/*!********************************************!*\
  !*** ./node_modules/rc-switch/es/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./Switch */ "./node_modules/rc-switch/es/Switch.js");
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/rc-switch/es/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/rc-switch/es/index.js"); } }(); 

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2lzLWl0ZXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtc3dpdGNoL2Fzc2V0cy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXN3aXRjaC9lcy9Td2l0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXN3aXRjaC9lcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOEJBQThCLG1CQUFPLENBQUMsMEZBQWlDLHNCOzs7Ozs7Ozs7Ozs7O0FDQXZFLDhCQUE4QixtQkFBTyxDQUFDLHdGQUFnQyxzQjs7Ozs7Ozs7Ozs7Ozs7QUNBekQ7QUFDYjtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQU8sQ0FBQyxtRkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFPLENBQUMscUZBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QVM7QUFDckIsbUJBQW1CLGlEQUFTO0FBQzVCLHFCQUFxQixpREFBUztBQUM5QixZQUFZLGlEQUFTO0FBQ3JCLGFBQWEsaURBQVM7QUFDdEIsV0FBVyxpREFBUztBQUNwQixZQUFZLGlEQUFTO0FBQ3JCLFdBQVcsaURBQVM7QUFDcEIsa0JBQWtCLGlEQUFTO0FBQzNCLGFBQWEsaURBQVM7QUFDdEIsZUFBZSxpREFBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQVE7QUFDTyxxRUFBTSxFOzs7Ozs7Ozs7Ozs7O0FDOU1yQixpQkFBaUIsbUJBQU8sQ0FBQyx1REFBVSxFIiwiZmlsZSI6IjEzLjcwMzEzNmQyMmRjM2ExZjNiNmYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9pcy1pdGVyYWJsZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2lzSXRlcmFibGUyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvaXMtaXRlcmFibGVcIik7XG5cbnZhciBfaXNJdGVyYWJsZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc0l0ZXJhYmxlMik7XG5cbnZhciBfZ2V0SXRlcmF0b3IyID0gcmVxdWlyZShcIi4uL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG52YXIgX2dldEl0ZXJhdG9yMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2dldEl0ZXJhdG9yMik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHtcbiAgICB2YXIgX2FyciA9IFtdO1xuICAgIHZhciBfbiA9IHRydWU7XG4gICAgdmFyIF9kID0gZmFsc2U7XG4gICAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gICAgdHJ5IHtcbiAgICAgIGZvciAodmFyIF9pID0gKDAsIF9nZXRJdGVyYXRvcjMuZGVmYXVsdCkoYXJyKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBfZCA9IHRydWU7XG4gICAgICBfZSA9IGVycjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hcnI7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiBhcnI7XG4gICAgfSBlbHNlIGlmICgoMCwgX2lzSXRlcmFibGUzLmRlZmF1bHQpKE9iamVjdChhcnIpKSkge1xuICAgICAgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2VcIik7XG4gICAgfVxuICB9O1xufSgpOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5pcy1pdGVyYWJsZScpO1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0ID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmlzSXRlcmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8gPSBPYmplY3QoaXQpO1xuICByZXR1cm4gT1tJVEVSQVRPUl0gIT09IHVuZGVmaW5lZFxuICAgIHx8ICdAQGl0ZXJhdG9yJyBpbiBPXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgIHx8IEl0ZXJhdG9ycy5oYXNPd25Qcm9wZXJ0eShjbGFzc29mKE8pKTtcbn07XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJjLXN3aXRjaCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDIycHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XFxufVxcbi5yYy1zd2l0Y2gtaW5uZXIge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAyNHB4O1xcbiAgdG9wOiAwO1xcbn1cXG4ucmMtc3dpdGNoOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgbGVmdDogMnB4O1xcbiAgdG9wOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XFxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcmNTd2l0Y2hPZmY7XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiByY1N3aXRjaE9mZjtcXG59XFxuLnJjLXN3aXRjaDpob3ZlcjphZnRlciB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcmNTd2l0Y2hPbjtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJjU3dpdGNoT247XFxufVxcbi5yYy1zd2l0Y2g6Zm9jdXMge1xcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNkNWYxZmQ7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4ucmMtc3dpdGNoLWNoZWNrZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg3ZDA2ODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4N2QwNjg7XFxufVxcbi5yYy1zd2l0Y2gtY2hlY2tlZCAucmMtc3dpdGNoLWlubmVyIHtcXG4gIGxlZnQ6IDZweDtcXG59XFxuLnJjLXN3aXRjaC1jaGVja2VkOmFmdGVyIHtcXG4gIGxlZnQ6IDIycHg7XFxufVxcbi5yYy1zd2l0Y2gtZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBuby1kcm9wO1xcbiAgYmFja2dyb3VuZDogI2NjYztcXG4gIGJvcmRlci1jb2xvcjogI2NjYztcXG59XFxuLnJjLXN3aXRjaC1kaXNhYmxlZDphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiAjOWU5ZTllO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbm9uZTtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG5vbmU7XFxuICBjdXJzb3I6IG5vLWRyb3A7XFxufVxcbi5yYy1zd2l0Y2gtZGlzYWJsZWQ6aG92ZXI6YWZ0ZXIge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbm9uZTtcXG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG5vbmU7XFxufVxcbi5yYy1zd2l0Y2gtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IHRleHQ7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogdGV4dDtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHJjU3dpdGNoT24ge1xcbiAgMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMjUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByY1N3aXRjaE9uIHtcXG4gIDAlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA1MCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyByY1N3aXRjaE9mZiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyByY1N3aXRjaE9mZiB7XFxuICAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTsgdmFyIGtleSwgaTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkgeyByZXR1cm4gY2FsbDsgfSByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTsgfVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YobykgeyByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pOyB9OyByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBvLl9fcHJvdG9fXyA9IHA7IHJldHVybiBvOyB9OyByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApOyB9XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHBvbHlmaWxsIH0gZnJvbSAncmVhY3QtbGlmZWN5Y2xlcy1jb21wYXQnO1xuXG52YXIgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIFN3aXRjaCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU3dpdGNoLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTd2l0Y2gocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3dpdGNoKTtcblxuICAgIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKFN3aXRjaCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImhhbmRsZUNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgY2hlY2tlZCA9IF90aGlzLnN0YXRlLmNoZWNrZWQ7XG4gICAgICB2YXIgb25DbGljayA9IF90aGlzLnByb3BzLm9uQ2xpY2s7XG4gICAgICB2YXIgbmV3Q2hlY2tlZCA9ICFjaGVja2VkO1xuXG4gICAgICBfdGhpcy5zZXRDaGVja2VkKG5ld0NoZWNrZWQsIGUpO1xuXG4gICAgICBpZiAob25DbGljaykge1xuICAgICAgICBvbkNsaWNrKG5ld0NoZWNrZWQsIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImhhbmRsZUtleURvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgIC8vIExlZnRcbiAgICAgICAgX3RoaXMuc2V0Q2hlY2tlZChmYWxzZSwgZSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgLy8gUmlnaHRcbiAgICAgICAgX3RoaXMuc2V0Q2hlY2tlZCh0cnVlLCBlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJoYW5kbGVNb3VzZVVwXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25Nb3VzZVVwID0gX3RoaXMucHJvcHMub25Nb3VzZVVwO1xuXG4gICAgICBpZiAoX3RoaXMubm9kZSkge1xuICAgICAgICBfdGhpcy5ub2RlLmJsdXIoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9uTW91c2VVcCkge1xuICAgICAgICBvbk1vdXNlVXAoZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwic2F2ZU5vZGVcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIF90aGlzLm5vZGUgPSBub2RlO1xuICAgIH0pO1xuXG4gICAgdmFyIF9jaGVja2VkID0gZmFsc2U7XG5cbiAgICBpZiAoJ2NoZWNrZWQnIGluIHByb3BzKSB7XG4gICAgICBfY2hlY2tlZCA9ICEhcHJvcHMuY2hlY2tlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2NoZWNrZWQgPSAhIXByb3BzLmRlZmF1bHRDaGVja2VkO1xuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hlY2tlZDogX2NoZWNrZWRcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhTd2l0Y2gsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBhdXRvRm9jdXMgPSBfdGhpcyRwcm9wcy5hdXRvRm9jdXMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wcy5kaXNhYmxlZDtcblxuICAgICAgaWYgKGF1dG9Gb2N1cyAmJiAhZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXRDaGVja2VkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldENoZWNrZWQoY2hlY2tlZCwgZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRwcm9wczIuZGlzYWJsZWQsXG4gICAgICAgICAgb25DaGFuZ2UgPSBfdGhpcyRwcm9wczIub25DaGFuZ2U7XG5cbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICghKCdjaGVja2VkJyBpbiB0aGlzLnByb3BzKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjaGVja2VkOiBjaGVja2VkXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgICAgb25DaGFuZ2UoY2hlY2tlZCwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvY3VzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvY3VzKCkge1xuICAgICAgdGhpcy5ub2RlLmZvY3VzKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImJsdXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYmx1cigpIHtcbiAgICAgIHRoaXMubm9kZS5ibHVyKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzMy5jbGFzc05hbWUsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMzLnByZWZpeENscyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBsb2FkaW5nSWNvbiA9IF90aGlzJHByb3BzMy5sb2FkaW5nSWNvbixcbiAgICAgICAgICBjaGVja2VkQ2hpbGRyZW4gPSBfdGhpcyRwcm9wczMuY2hlY2tlZENoaWxkcmVuLFxuICAgICAgICAgIHVuQ2hlY2tlZENoaWxkcmVuID0gX3RoaXMkcHJvcHMzLnVuQ2hlY2tlZENoaWxkcmVuLFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfdGhpcyRwcm9wczMsIFtcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcImRpc2FibGVkXCIsIFwibG9hZGluZ0ljb25cIiwgXCJjaGVja2VkQ2hpbGRyZW5cIiwgXCJ1bkNoZWNrZWRDaGlsZHJlblwiXSk7XG5cbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy5zdGF0ZS5jaGVja2VkO1xuICAgICAgdmFyIHN3aXRjaENsYXNzTmFtZSA9IGNsYXNzTmFtZXMoKF9jbGFzc05hbWVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgY2xhc3NOYW1lLCAhIWNsYXNzTmFtZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgcHJlZml4Q2xzLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNoZWNrZWRcIiksIGNoZWNrZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWRcIiksIGRpc2FibGVkKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIF9leHRlbmRzKHt9LCByZXN0UHJvcHMsIHtcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgcm9sZTogXCJzd2l0Y2hcIixcbiAgICAgICAgXCJhcmlhLWNoZWNrZWRcIjogY2hlY2tlZCxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBjbGFzc05hbWU6IHN3aXRjaENsYXNzTmFtZSxcbiAgICAgICAgcmVmOiB0aGlzLnNhdmVOb2RlLFxuICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGljayxcbiAgICAgICAgb25Nb3VzZVVwOiB0aGlzLmhhbmRsZU1vdXNlVXBcbiAgICAgIH0pLCBsb2FkaW5nSWNvbiwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXJcIilcbiAgICAgIH0sIGNoZWNrZWQgPyBjaGVja2VkQ2hpbGRyZW4gOiB1bkNoZWNrZWRDaGlsZHJlbikpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICB2YXIgbmV3U3RhdGUgPSB7fTtcbiAgICAgIHZhciBjaGVja2VkID0gbmV4dFByb3BzLmNoZWNrZWQ7XG5cbiAgICAgIGlmICgnY2hlY2tlZCcgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgIG5ld1N0YXRlLmNoZWNrZWQgPSAhIWNoZWNrZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3dpdGNoO1xufShDb21wb25lbnQpO1xuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2VkQ2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIHVuQ2hlY2tlZENoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VVcDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgYXV0b0ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgbG9hZGluZ0ljb246IFByb3BUeXBlcy5ub2RlXG59O1xuU3dpdGNoLmRlZmF1bHRQcm9wcyA9IHtcbiAgcHJlZml4Q2xzOiAncmMtc3dpdGNoJyxcbiAgY2hlY2tlZENoaWxkcmVuOiBudWxsLFxuICB1bkNoZWNrZWRDaGlsZHJlbjogbnVsbCxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGVmYXVsdENoZWNrZWQ6IGZhbHNlXG59O1xucG9seWZpbGwoU3dpdGNoKTtcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vU3dpdGNoJyk7Il0sInNvdXJjZVJvb3QiOiIifQ==