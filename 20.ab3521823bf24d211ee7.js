(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/containers/RegisterPage/index.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/containers/RegisterPage/index.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%; }\n  .register *:focus {\n    outline: none; }\n  .register #icon {\n    width: 60%; }\n", ""]);

// exports


/***/ }),

/***/ "./src/containers/RegisterPage/index.js":
/*!**********************************************!*\
  !*** ./src/containers/RegisterPage/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ "./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./index.scss */ "./src/containers/RegisterPage/index.scss");

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _Modal = __webpack_require__(/*! ../../components/Modal */ "./src/components/Modal/index.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _Notification = __webpack_require__(/*! ../../components/Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _SignInSignUp = __webpack_require__(/*! ../../components/SignInSignUp */ "./src/components/SignInSignUp/index.js");

var _SignInSignUp2 = _interopRequireDefault(_SignInSignUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Register = function (_Component) {
  (0, _inherits3.default)(Register, _Component);

  function Register(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Register);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Register.__proto__ || (0, _getPrototypeOf2.default)(Register)).call(this, props));

    _this.register = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var _this$state, name, password, res;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, name = _this$state.name, password = _this$state.password;

              if (/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(name)) {
                _context.next = 4;
                break;
              }

              (0, _Notification2.default)('Username can consist numbers, letters, and underscores', 'warn');
              return _context.abrupt('return');

            case 4:
              if (/^[A-Za-z0-9]+$/.test(password)) {
                _context.next = 7;
                break;
              }

              (0, _Notification2.default)('password只能由字母数字组成', 'warn');
              return _context.abrupt('return');

            case 7:
              _context.prev = 7;
              _context.next = 10;
              return _request2.default.axios('post', '/api/v1/register', {
                name: name,
                password: password
              });

            case 10:
              res = _context.sent;

              if (res && res.success) {
                // 弹窗
                _this.setState({
                  modal: {
                    visible: true
                  }
                });
              } else {
                (0, _Notification2.default)(res.message, 'error');
              }
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](7);

              (0, _Notification2.default)(_context.t0, 'error');

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[7, 14]]);
    }));

    _this.setValue = function (value) {
      var name = value.name,
          password = value.password;

      _this.setState({
        name: name,
        password: password
      }, (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.register();

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      })));
    };

    _this.confirm = function () {
      _this.setState({
        // eslint-disable-next-line react/no-unused-state
        visible: false
      });

      // eslint-disable-next-line react/prop-types
      _this.props.history.push('/login');
    };

    _this.state = {
      name: '',
      password: '',
      modal: {
        visible: false
      }
    };
    return _this;
  }

  (0, _createClass3.default)(Register, [{
    key: 'render',
    value: function render() {
      var visible = this.state.modal.visible;

      return _react2.default.createElement(
        'div',
        { className: 'register' },
        _react2.default.createElement(
          _Modal2.default,
          { title: 'Suggestion', visible: visible, hasConfirm: true, confirm: this.confirm, hasCancel: false },
          _react2.default.createElement(
            'p',
            { className: 'content' },
            'You have successfully registered'
          )
        ),
        _react2.default.createElement(_SignInSignUp2.default, { setValue: this.setValue, isLogin: false })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);
  return Register;
}(_react.Component);

var _default = Register;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Register, 'Register', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/RegisterPage/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/RegisterPage/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/containers/RegisterPage/index.scss":
/*!************************************************!*\
  !*** ./src/containers/RegisterPage/index.scss ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/containers/RegisterPage/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/containers/RegisterPage/index.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/containers/RegisterPage/index.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZWdpc3RlclBhZ2UvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9SZWdpc3RlclBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvUmVnaXN0ZXJQYWdlL2luZGV4LnNjc3M/YWI2MSJdLCJuYW1lcyI6WyJSZWdpc3RlciIsInByb3BzIiwicmVnaXN0ZXIiLCJzdGF0ZSIsIm5hbWUiLCJwYXNzd29yZCIsInRlc3QiLCJSZXF1ZXN0IiwiYXhpb3MiLCJyZXMiLCJzdWNjZXNzIiwic2V0U3RhdGUiLCJtb2RhbCIsInZpc2libGUiLCJtZXNzYWdlIiwic2V0VmFsdWUiLCJ2YWx1ZSIsImNvbmZpcm0iLCJoaXN0b3J5IiwicHVzaCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsY0FBYyxrQkFBa0Isa0JBQWtCLHdCQUF3QiwyQkFBMkIsNEJBQTRCLGdCQUFnQixFQUFFLHVCQUF1QixvQkFBb0IsRUFBRSxxQkFBcUIsaUJBQWlCLEVBQUU7O0FBRS9QOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLFE7OztBQUNuQixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUFBLDBJQUNYQSxLQURXOztBQUFBLFVBV25CQyxRQVhtQiw0RUFXUjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBQ2tCLE1BQUtDLEtBRHZCLEVBQ0RDLElBREMsZUFDREEsSUFEQyxFQUNLQyxRQURMLGVBQ0tBLFFBREw7O0FBQUEsa0JBRUosK0JBQStCQyxJQUEvQixDQUFvQ0YsSUFBcEMsQ0FG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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucmVnaXN0ZXIge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG4gIC5yZWdpc3RlciAqOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTsgfVxcbiAgLnJlZ2lzdGVyICNpY29uIHtcXG4gICAgd2lkdGg6IDYwJTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24nO1xuaW1wb3J0IFNpZ25JblNpZ25VcCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NpZ25JblNpZ25VcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgbW9kYWw6IHtcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWdpc3RlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmICghL15bYS16QS1aMC05X1xcdTRlMDAtXFx1OWZhNV0rJC8udGVzdChuYW1lKSkge1xuICAgICAgbm90aWZpY2F0aW9uKCdVc2VybmFtZSBjYW4gY29uc2lzdCBudW1iZXJzLCBsZXR0ZXJzLCBhbmQgdW5kZXJzY29yZXMnLCAnd2FybicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIS9eW0EtWmEtejAtOV0rJC8udGVzdChwYXNzd29yZCkpIHtcbiAgICAgIG5vdGlmaWNhdGlvbigncGFzc3dvcmTlj6rog73nlLHlrZfmr43mlbDlrZfnu4TmiJAnLCAnd2FybicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgUmVxdWVzdC5heGlvcygncG9zdCcsICcvYXBpL3YxL3JlZ2lzdGVyJywge1xuICAgICAgICBuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcyAmJiByZXMuc3VjY2Vzcykge1xuICAgICAgICAvLyDlvLnnqpdcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZmljYXRpb24ocmVzLm1lc3NhZ2UsICdlcnJvcicpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBub3RpZmljYXRpb24oZXJyb3IsICdlcnJvcicpO1xuICAgIH1cbiAgfTtcblxuICBzZXRWYWx1ZSA9IHZhbHVlID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBhc3N3b3JkIH0gPSB2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBuYW1lLFxuICAgICAgICBwYXNzd29yZCxcbiAgICAgIH0sXG4gICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHRoaXMucmVnaXN0ZXIoKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfTtcblxuICBjb25maXJtID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLXVudXNlZC1zdGF0ZVxuICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgfSk7XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlLm1vZGFsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZ2lzdGVyXCI+XG4gICAgICAgIDxNb2RhbCB0aXRsZT1cIlN1Z2dlc3Rpb25cIiB2aXNpYmxlPXt2aXNpYmxlfSBoYXNDb25maXJtIGNvbmZpcm09e3RoaXMuY29uZmlybX0gaGFzQ2FuY2VsPXtmYWxzZX0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPllvdSBoYXZlIHN1Y2Nlc3NmdWxseSByZWdpc3RlcmVkPC9wPlxuICAgICAgICA8L01vZGFsPlxuICAgICAgICB7LyogPE1lc3NhZ2UgaXNTaG93ID0ge3RoaXMuc3RhdGUubWVzc2FnZS5pc1Nob3d9ICB0eXBlID0ge3RoaXMuc3RhdGUubWVzc2FnZS50eXBlfSAgY29udGVudCA9IHt0aGlzLnN0YXRlLm1lc3NhZ2UuY29udGVudH0gLz4gKi99XG4gICAgICAgIDxTaWduSW5TaWduVXAgc2V0VmFsdWU9e3RoaXMuc2V0VmFsdWV9IGlzTG9naW49e2ZhbHNlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9pbmRleC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==