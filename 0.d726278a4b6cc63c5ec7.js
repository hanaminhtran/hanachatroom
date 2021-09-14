(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Modal/style.scss":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/Modal/style.scss ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dialogRender h3 {\n  text-align: center;\n  font-size: 14px;\n  padding: 10px 0;\n  border-bottom: 1px solid #ebe8e8; }\n\n.dialogRender p {\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.808);\n  margin-bottom: 10px; }\n\n.dialogRender .twoButton {\n  height: 40px; }\n  .dialogRender .twoButton p {\n    background: transparent;\n    color: #66b3ef;\n    font-size: 14px;\n    height: 40px;\n    line-height: 40px;\n    width: 50%;\n    position: absolute;\n    cursor: pointer; }\n  .dialogRender .twoButton p:nth-of-type(1) {\n    border-top: 1px solid #ebe8e8;\n    border-right: 1px solid #ebe8e8;\n    left: 0;\n    border-radius: 0 0 0 8px; }\n  .dialogRender .twoButton p:nth-of-type(2) {\n    border-top: 1px solid #ebe8e8;\n    right: 0;\n    border-radius: 0 0 8px 0; }\n  .dialogRender .twoButton p:focus,\n  .dialogRender .twoButton p:hover {\n    font-weight: bold;\n    background: #EFEFEF; }\n  .dialogRender .twoButton p:active {\n    background: #D6D6D6; }\n\n.dialogRender .oneButton {\n  height: 40px; }\n  .dialogRender .oneButton p {\n    background: transparent;\n    color: #66b3ef;\n    height: 40px;\n    font-size: 16px;\n    line-height: 40px;\n    width: 100%;\n    position: absolute;\n    text-decoration: none;\n    border-top: 1px solid #ebe8e8;\n    left: 0;\n    right: 0;\n    border-radius: 0 0 0 8px; }\n  .dialogRender .oneButton p:focus,\n  .dialogRender .oneButton p:hover {\n    font-weight: bold;\n    background: #EFEFEF; }\n  .dialogRender .oneButton p:active {\n    background: #D6D6D6; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/ModalBase/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/ModalBase/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal .mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  opacity: 0.3;\n  z-index: 998; }\n\n.modal .modalWrapper {\n  position: fixed;\n  min-width: 30%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: white;\n  border-radius: 8px;\n  border-top: 1px solid white;\n  text-align: center;\n  z-index: 999; }\n  .modal .modalWrapper .xIcon {\n    font-size: 18px;\n    line-height: 18px;\n    padding: 6px 12px;\n    cursor: pointer;\n    position: absolute;\n    right: 0px; }\n\n.showModalBase {\n  position: absolute; }\n\n.hideModalBase {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/Modal/index.js":
/*!***************************************!*\
  !*** ./src/components/Modal/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

exports.default = Modal;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./style.scss */ "./src/components/Modal/style.scss");

var _ModalBase = __webpack_require__(/*! ../ModalBase */ "./src/components/ModalBase/index.js");

var _ModalBase2 = _interopRequireDefault(_ModalBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function confirmCancelRender(props) {
  var hasCancel = props.hasCancel,
      hasConfirm = props.hasConfirm,
      confirm = props.confirm,
      cancel = props.cancel;

  if (hasCancel && hasConfirm) {
    return _react2.default.createElement(
      'div',
      { className: 'twoButton' },
      _react2.default.createElement(
        'p',
        { onClick: cancel },
        'Cancel'
      ),
      _react2.default.createElement(
        'p',
        { onClick: confirm },
        'OK'
      )
    );
  }
  if (hasConfirm || hasCancel) {
    return _react2.default.createElement(
      'div',
      { className: 'oneButton' },
      hasCancel && _react2.default.createElement(
        'p',
        { onClick: cancel },
        'Cancel'
      ),
      hasConfirm && _react2.default.createElement(
        'p',
        { onClick: confirm },
        'OK'
      )
    );
  }
  return null;
}

confirmCancelRender.propTypes = {
  hasCancel: _propTypes2.default.bool,
  hasConfirm: _propTypes2.default.bool,
  cancel: _propTypes2.default.func, // 点击遮罩CancelModal的前提是有传cancel方法
  confirm: _propTypes2.default.func
};

confirmCancelRender.defaultProps = {
  hasCancel: false,
  hasConfirm: false,
  cancel: undefined,
  confirm: undefined
};

function dialogRender(props) {
  var title = props.title,
      children = props.children;

  return _react2.default.createElement(
    'div',
    { className: 'dialogRender' },
    _react2.default.createElement(
      'h3',
      { className: 'title' },
      title
    ),
    children,
    confirmCancelRender((0, _extends3.default)({}, props))
  );
}

dialogRender.propTypes = {
  title: _propTypes2.default.string,
  children: _propTypes2.default.node
};

dialogRender.defaultProps = {
  title: '',
  children: undefined
};

var ModalDialogRender = (0, _ModalBase2.default)(dialogRender);
// TODO: （refactor）take thinner component
function Modal(props) {
  return _react2.default.createElement(ModalDialogRender, props);
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(confirmCancelRender, 'confirmCancelRender', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Modal/index.js');
  reactHotLoader.register(dialogRender, 'dialogRender', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Modal/index.js');
  reactHotLoader.register(ModalDialogRender, 'ModalDialogRender', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Modal/index.js');
  reactHotLoader.register(Modal, 'Modal', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Modal/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Modal/style.scss":
/*!*****************************************!*\
  !*** ./src/components/Modal/style.scss ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Modal/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Modal/style.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Modal/style.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/ModalBase/index.js":
/*!*******************************************!*\
  !*** ./src/components/ModalBase/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./styles.scss */ "./src/components/ModalBase/styles.scss");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function ModalBase(Comp) {
  return function (props) {
    var _props$visible = props.visible,
        visible = _props$visible === undefined ? false : _props$visible,
        cancel = props.cancel,
        modalWrapperClassName = props.modalWrapperClassName;

    return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('modal', visible ? 'showModalBase' : 'hideModalBase') },
      _react2.default.createElement('div', { onClick: cancel, className: 'mask' }),
      _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('modalWrapper', modalWrapperClassName) },
        cancel && _react2.default.createElement(
          'span',
          { onClick: cancel, className: 'xIcon' },
          'x'
        ),
        _react2.default.createElement(Comp, props)
      )
    );
  };
}

var _default = ModalBase;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ModalBase, 'ModalBase', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/ModalBase/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/ModalBase/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/ModalBase/styles.scss":
/*!**********************************************!*\
  !*** ./src/components/ModalBase/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/ModalBase/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/ModalBase/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/ModalBase/styles.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsQmFzZS9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2RhbC9zdHlsZS5zY3NzPzNjMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWxCYXNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsQmFzZS9zdHlsZXMuc2Nzcz84YmE2Il0sIm5hbWVzIjpbIk1vZGFsIiwiY29uZmlybUNhbmNlbFJlbmRlciIsInByb3BzIiwiaGFzQ2FuY2VsIiwiaGFzQ29uZmlybSIsImNvbmZpcm0iLCJjYW5jZWwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsImRpYWxvZ1JlbmRlciIsInRpdGxlIiwiY2hpbGRyZW4iLCJzdHJpbmciLCJub2RlIiwiTW9kYWxEaWFsb2dSZW5kZXIiLCJNb2RhbEJhc2UiLCJDb21wIiwidmlzaWJsZSIsIm1vZGFsV3JhcHBlckNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMscUJBQXFCLHVCQUF1QixvQkFBb0Isb0JBQW9CLHFDQUFxQyxFQUFFLHFCQUFxQixvQkFBb0IsZ0NBQWdDLHdCQUF3QixFQUFFLDhCQUE4QixpQkFBaUIsRUFBRSxnQ0FBZ0MsOEJBQThCLHFCQUFxQixzQkFBc0IsbUJBQW1CLHdCQUF3QixpQkFBaUIseUJBQXlCLHNCQUFzQixFQUFFLCtDQUErQyxvQ0FBb0Msc0NBQXNDLGNBQWMsK0JBQStCLEVBQUUsK0NBQStDLG9DQUFvQyxl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QUFVLE1BQWhDLEdBREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFXLDBCQUFXLGNBQVgsRUFBMkJnQixxQkFBM0IsQ0FBaEI7QUFDR2hCLGtCQUNDO0FBQUE7QUFBQSxZQUFNLFNBQVNBLE1BQWYsRUFBdUIsV0FBVSxPQUFqQztBQUFBO0FBQUEsU0FGSjtBQU1FLHNDQUFDLElBQUQsRUFBVUosS0FBVjtBQU5GO0FBRkYsS0FERjtBQWFELEdBZkQ7QUFnQkQ7O2VBRWNpQixTOzs7Ozs7Ozs7OzswQkFuQk5BLFM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSFQsY0FBYyxtQkFBTyxDQUFDLCtTQUE2Sjs7QUFFbkwsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxJQUFVO0FBQ2IsbUJBQW1CLCtTQUE2SjtBQUNoTCxtQkFBbUIsbUJBQU8sQ0FBQywrU0FBNko7O0FBRXhMLG9EQUFvRCxRQUFTOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6IjAuZDcyNjI3OGE0YjZjYzYzYzVlYzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5kaWFsb2dSZW5kZXIgaDMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmU4ZTg7IH1cXG5cXG4uZGlhbG9nUmVuZGVyIHAge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44MDgpO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi5kaWFsb2dSZW5kZXIgLnR3b0J1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7IH1cXG4gIC5kaWFsb2dSZW5kZXIgLnR3b0J1dHRvbiBwIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjNjZiM2VmO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZGlhbG9nUmVuZGVyIC50d29CdXR0b24gcDpudGgtb2YtdHlwZSgxKSB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlOGU4O1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlOGU4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCA4cHg7IH1cXG4gIC5kaWFsb2dSZW5kZXIgLnR3b0J1dHRvbiBwOm50aC1vZi10eXBlKDIpIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmU4ZTg7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDA7IH1cXG4gIC5kaWFsb2dSZW5kZXIgLnR3b0J1dHRvbiBwOmZvY3VzLFxcbiAgLmRpYWxvZ1JlbmRlciAudHdvQnV0dG9uIHA6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZDogI0VGRUZFRjsgfVxcbiAgLmRpYWxvZ1JlbmRlciAudHdvQnV0dG9uIHA6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogI0Q2RDZENjsgfVxcblxcbi5kaWFsb2dSZW5kZXIgLm9uZUJ1dHRvbiB7XFxuICBoZWlnaHQ6IDQwcHg7IH1cXG4gIC5kaWFsb2dSZW5kZXIgLm9uZUJ1dHRvbiBwIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGNvbG9yOiAjNjZiM2VmO1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmU4ZTg7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCA4cHg7IH1cXG4gIC5kaWFsb2dSZW5kZXIgLm9uZUJ1dHRvbiBwOmZvY3VzLFxcbiAgLmRpYWxvZ1JlbmRlciAub25lQnV0dG9uIHA6aG92ZXIge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZDogI0VGRUZFRjsgfVxcbiAgLmRpYWxvZ1JlbmRlciAub25lQnV0dG9uIHA6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogI0Q2RDZENjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vZGFsIC5tYXNrIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjM7XFxuICB6LWluZGV4OiA5OTg7IH1cXG5cXG4ubW9kYWwgLm1vZGFsV3JhcHBlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBtaW4td2lkdGg6IDMwJTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiA5OTk7IH1cXG4gIC5tb2RhbCAubW9kYWxXcmFwcGVyIC54SWNvbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDBweDsgfVxcblxcbi5zaG93TW9kYWxCYXNlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxcblxcbi5oaWRlTW9kYWxCYXNlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBNb2RhbEJhc2UgZnJvbSAnLi4vTW9kYWxCYXNlJztcblxuZnVuY3Rpb24gY29uZmlybUNhbmNlbFJlbmRlcihwcm9wcykge1xuICBjb25zdCB7IGhhc0NhbmNlbCwgaGFzQ29uZmlybSwgY29uZmlybSwgY2FuY2VsIH0gPSBwcm9wcztcbiAgaWYgKGhhc0NhbmNlbCAmJiBoYXNDb25maXJtKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHdvQnV0dG9uXCI+XG4gICAgICAgIDxwIG9uQ2xpY2s9e2NhbmNlbH0+Q2FuY2VsPC9wPlxuICAgICAgICA8cCBvbkNsaWNrPXtjb25maXJtfT5PSzwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgaWYgKGhhc0NvbmZpcm0gfHwgaGFzQ2FuY2VsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lQnV0dG9uXCI+XG4gICAgICAgIHtoYXNDYW5jZWwgJiYgPHAgb25DbGljaz17Y2FuY2VsfT5DYW5jZWw8L3A+fVxuICAgICAgICB7aGFzQ29uZmlybSAmJiA8cCBvbkNsaWNrPXtjb25maXJtfT5PSzwvcD59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5jb25maXJtQ2FuY2VsUmVuZGVyLnByb3BUeXBlcyA9IHtcbiAgaGFzQ2FuY2VsOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGFzQ29uZmlybTogUHJvcFR5cGVzLmJvb2wsXG4gIGNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsIC8vIOeCueWHu+mBrue9qUNhbmNlbE1vZGFs55qE5YmN5o+Q5piv5pyJ5LygY2FuY2Vs5pa55rOVXG4gIGNvbmZpcm06IFByb3BUeXBlcy5mdW5jLFxufTtcblxuY29uZmlybUNhbmNlbFJlbmRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGhhc0NhbmNlbDogZmFsc2UsXG4gIGhhc0NvbmZpcm06IGZhbHNlLFxuICBjYW5jZWw6IHVuZGVmaW5lZCxcbiAgY29uZmlybTogdW5kZWZpbmVkLFxufTtcblxuZnVuY3Rpb24gZGlhbG9nUmVuZGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWxvZ1JlbmRlclwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+e3RpdGxlfTwvaDM+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7Y29uZmlybUNhbmNlbFJlbmRlcih7IC4uLnByb3BzIH0pfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5kaWFsb2dSZW5kZXIucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxufTtcblxuZGlhbG9nUmVuZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6ICcnLFxuICBjaGlsZHJlbjogdW5kZWZpbmVkLFxufTtcblxuY29uc3QgTW9kYWxEaWFsb2dSZW5kZXIgPSBNb2RhbEJhc2UoZGlhbG9nUmVuZGVyKTtcbi8vIFRPRE86IO+8iHJlZmFjdG9y77yJdGFrZSB0aGlubmVyIGNvbXBvbmVudFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwocHJvcHMpIHtcbiAgcmV0dXJuIDxNb2RhbERpYWxvZ1JlbmRlciB7Li4ucHJvcHN9IC8+O1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcblxuZnVuY3Rpb24gTW9kYWxCYXNlKENvbXApIHtcbiAgcmV0dXJuIHByb3BzID0+IHtcbiAgICBjb25zdCB7IHZpc2libGUgPSBmYWxzZSwgY2FuY2VsLCBtb2RhbFdyYXBwZXJDbGFzc05hbWUgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnbW9kYWwnLCB2aXNpYmxlID8gJ3Nob3dNb2RhbEJhc2UnIDogJ2hpZGVNb2RhbEJhc2UnKX0+XG4gICAgICAgIDxkaXYgb25DbGljaz17Y2FuY2VsfSBjbGFzc05hbWU9XCJtYXNrXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ21vZGFsV3JhcHBlcicsIG1vZGFsV3JhcHBlckNsYXNzTmFtZSl9PlxuICAgICAgICAgIHtjYW5jZWwgJiYgKFxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17Y2FuY2VsfSBjbGFzc05hbWU9XCJ4SWNvblwiPlxuICAgICAgICAgICAgICB4XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8Q29tcCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kYWxCYXNlO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==