(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/NotFound/styles.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/NotFound/styles.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page404 {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center; }\n  .page404 .container {\n    width: 50%; }\n  .page404 img {\n    width: 100%; }\n  .page404 .fourZeroFourBg {\n    background-image: url(https://cdn.aermin.top/ghchat404.gif);\n    height: 400px;\n    background-position: center; }\n  .page404 .fourZeroFourBg h1 {\n    font-size: 80px; }\n  .page404 .fourZeroFourBg h3 {\n    font-size: 80px; }\n  .page404 .link {\n    color: #fff;\n    padding: 10px 20px;\n    background: #66b3ef;\n    margin: 20px 0;\n    display: inline-block;\n    text-decoration: none; }\n  .page404 .contentBox {\n    margin-top: -50px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/components/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

__webpack_require__(/*! ./styles.scss */ "./src/components/NotFound/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
}; // thanks => https://codepen.io/Navedkhan012/pen/vrWQMY

function NotFound() {
  return _react2.default.createElement(
    'section',
    { className: 'page404' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'fourZeroFourBg' },
        _react2.default.createElement(
          'h1',
          null,
          '404'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'contentBox' },
        _react2.default.createElement(
          'p',
          null,
          '\u4F60\u6240\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: 'link', to: '/' },
          '\u8FD4\u56DE\u9996\u9875'
        )
      )
    )
  );
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(NotFound, 'NotFound', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/NotFound/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/NotFound/styles.scss":
/*!*********************************************!*\
  !*** ./src/components/NotFound/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/NotFound/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/NotFound/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/NotFound/styles.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RGb3VuZC9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RGb3VuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ob3RGb3VuZC9zdHlsZXMuc2Nzcz8xYzcyIl0sIm5hbWVzIjpbIk5vdEZvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxhQUFhLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3Qix1QkFBdUIsRUFBRSx5QkFBeUIsaUJBQWlCLEVBQUUsa0JBQWtCLGtCQUFrQixFQUFFLDhCQUE4QixrRUFBa0Usb0JBQW9CLGtDQUFrQyxFQUFFLGlDQUFpQyxzQkFBc0IsRUFBRSxpQ0FBaUMsc0JBQXNCLEVBQUUsb0JBQW9CLGtCQUFrQix5QkFBeUIsMEJBQTBCLHFCQUFxQiw0QkFBNEIsNEJBQTRCLEVBQUUsMEJBQTBCLHdCQUF3QixFQUFFOztBQUUzc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDRHdCQSxROztBQUp4Qjs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7OztHQUpBOztBQU1lLFNBQVNBLFFBQVQsR0FBb0I7QUFDakMsU0FDRTtBQUFBO0FBQUEsTUFBUyxXQUFVLFNBQW5CO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQURGO0FBSUU7QUFBQTtBQUFBLFVBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQyw4QkFBRDtBQUFBLFlBQU0sV0FBVSxNQUFoQixFQUF1QixJQUFHLEdBQTFCO0FBQUE7QUFBQTtBQUZGO0FBSkY7QUFERixHQURGO0FBZUQ7Ozs7Ozs7Ozs7MEJBaEJ1QkEsUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x4QixjQUFjLG1CQUFPLENBQUMsOFNBQTZKOztBQUVuTCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsOFNBQTZKO0FBQ2hMLG1CQUFtQixtQkFBTyxDQUFDLDhTQUE2Sjs7QUFFeEwsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiMTguZTM4ZWMyNjlmNTE5OTIyZDRlOGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wYWdlNDA0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgLnBhZ2U0MDQgLmNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiA1MCU7IH1cXG4gIC5wYWdlNDA0IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAucGFnZTQwNCAuZm91clplcm9Gb3VyQmcge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9jZG4uYWVybWluLnRvcC9naGNoYXQ0MDQuZ2lmKTtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XFxuICAucGFnZTQwNCAuZm91clplcm9Gb3VyQmcgaDEge1xcbiAgICBmb250LXNpemU6IDgwcHg7IH1cXG4gIC5wYWdlNDA0IC5mb3VyWmVyb0ZvdXJCZyBoMyB7XFxuICAgIGZvbnQtc2l6ZTogODBweDsgfVxcbiAgLnBhZ2U0MDQgLmxpbmsge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjNjZiM2VmO1xcbiAgICBtYXJnaW46IDIwcHggMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gIC5wYWdlNDA0IC5jb250ZW50Qm94IHtcXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyB0aGFua3MgPT4gaHR0cHM6Ly9jb2RlcGVuLmlvL05hdmVka2hhbjAxMi9wZW4vdnJXUU1ZXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RGb3VuZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwYWdlNDA0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvdXJaZXJvRm91ckJnXCI+XG4gICAgICAgICAgPGgxPjQwNDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRCb3hcIj5cbiAgICAgICAgICA8cD7kvaDmiYDorr/pl67nmoTpobXpnaLkuI3lrZjlnKg8L3A+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibGlua1wiIHRvPVwiL1wiPlxuICAgICAgICAgICAg6L+U5Zue6aaW6aG1XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=