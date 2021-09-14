(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/containers/LogInPage/index.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/containers/LogInPage/index.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%; }\n  .login *:focus {\n    outline: none; }\n  .login .content {\n    padding: 30px 0px 10px; }\n  .login #icon {\n    width: 60%; }\n", ""]);

// exports


/***/ }),

/***/ "./src/containers/LogInPage/index.js":
/*!*******************************************!*\
  !*** ./src/containers/LogInPage/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

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

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _Modal = __webpack_require__(/*! ../../components/Modal */ "./src/components/Modal/index.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _Notification = __webpack_require__(/*! ../../components/Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _SignInSignUp = __webpack_require__(/*! ../../components/SignInSignUp */ "./src/components/SignInSignUp/index.js");

var _SignInSignUp2 = _interopRequireDefault(_SignInSignUp);

__webpack_require__(/*! ./index.scss */ "./src/containers/LogInPage/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var LogIn = function (_Component) {
  (0, _inherits3.default)(LogIn, _Component);

  function LogIn(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, LogIn);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LogIn.__proto__ || (0, _getPrototypeOf2.default)(LogIn)).call(this, props));

    _this.setValue = function (value) {
      var name = value.name,
          password = value.password;

      _this.setState({ name: name, password: password }, (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.login();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      })));
    };

    _this.confirm = function () {
      _this.setState({
        modal: {
          visible: true
        }
      });
      window.location.reload();
      var originalLink = sessionStorage.getItem('originalLink');
      if (originalLink) {
        sessionStorage.removeItem('originalLink');
        window.location.href = originalLink;
        return;
      }
      window.location.href = '/';
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

  (0, _createClass3.default)(LogIn, [{
    key: 'login',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _state, name, password, res;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _state = this.state, name = _state.name, password = _state.password;

                if (/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(name)) {
                  _context2.next = 4;
                  break;
                }

                (0, _Notification2.default)('Username can consist numbers, letters, and underscores', 'warn');
                return _context2.abrupt('return');

              case 4:
                if (/^[A-Za-z0-9]+$/.test(password)) {
                  _context2.next = 7;
                  break;
                }

                (0, _Notification2.default)('password只能由字母数字组成', 'warn');
                return _context2.abrupt('return');

              case 7:
                _context2.prev = 7;
                _context2.next = 10;
                return _request2.default.axios('post', '/api/v1/login', { name: name, password: password });

              case 10:
                res = _context2.sent;

                if (res && res.success) {
                  localStorage.setItem('userInfo', (0, _stringify2.default)(res.userInfo));
                  // 弹窗
                  this.setState({
                    modal: {
                      visible: true
                    }
                  });
                } else {
                  (0, _Notification2.default)(res.message, 'error');
                }
                _context2.next = 17;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](7);

                (0, _Notification2.default)(_context2.t0, 'error');

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[7, 14]]);
      }));

      function login() {
        return _ref2.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'render',
    value: function render() {
      var visible = this.state.modal.visible;

      return _react2.default.createElement(
        'div',
        { className: 'login' },
        _react2.default.createElement(
          _Modal2.default,
          { title: 'Suggestion', visible: visible, confirm: this.confirm, hasConfirm: true },
          _react2.default.createElement(
            'p',
            { className: 'content' },
            'You have logged in successfully'
          )
        ),
        _react2.default.createElement(_SignInSignUp2.default, { setValue: this.setValue, isLogin: true })
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
  return LogIn;
}(_react.Component);

var _default = LogIn;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LogIn, 'LogIn', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/LogInPage/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/LogInPage/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/containers/LogInPage/index.scss":
/*!*********************************************!*\
  !*** ./src/containers/LogInPage/index.scss ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/containers/LogInPage/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/containers/LogInPage/index.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/containers/LogInPage/index.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dJblBhZ2UvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Mb2dJblBhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvTG9nSW5QYWdlL2luZGV4LnNjc3M/NjBjYiJdLCJuYW1lcyI6WyJMb2dJbiIsInByb3BzIiwic2V0VmFsdWUiLCJuYW1lIiwidmFsdWUiLCJwYXNzd29yZCIsInNldFN0YXRlIiwibG9naW4iLCJjb25maXJtIiwibW9kYWwiLCJ2aXNpYmxlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJvcmlnaW5hbExpbmsiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiaHJlZiIsInN0YXRlIiwidGVzdCIsIlJlcXVlc3QiLCJheGlvcyIsInJlcyIsInN1Y2Nlc3MiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlckluZm8iLCJtZXNzYWdlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxXQUFXLGtCQUFrQixrQkFBa0Isd0JBQXdCLDJCQUEyQiw0QkFBNEIsZ0JBQWdCLEVBQUUsb0JBQW9CLG9CQUFvQixFQUFFLHFCQUFxQiw2QkFBNkIsRUFBRSxrQkFBa0IsaUJBQWlCLEVBQUU7O0FBRTFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQUEsb0lBQ1hBLEtBRFc7O0FBQUEsVUF3Q25CQyxRQXhDbUIsR0F3Q1IsaUJBQVM7QUFBQSxVQUNWQyxJQURVLEdBQ1NDLEtBRFQsQ0FDVkQsSUFEVTtBQUFBLFVBQ0pFLFFBREksR0FDU0QsS0FEVCxDQUNKQyxRQURJOztBQUVsQixZQUFLQyxRQUFMLENBQWMsRUFBRUgsVUFBRixFQUFRRSxrQkFBUixFQUFkLDJFQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDMUIsTUFBS0UsS0FBTCxFQUQwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFsQztBQUdELEtBN0NrQjs7QUFBQSxVQStDbkJDLE9BL0NtQixHQStDVCxZQUFNO0FBQ2QsWUFBS0YsUUFBTCxDQUFjO0FBQ1pHLGVBQU87QUFDTEMsbUJBQVM7QUFESjtBQURLLE9BQWQ7QUFLQUMsYUFBT0MsUUFBUCxDQUFnQkMsTUFBaEI7QUFDQSxVQUFNQyxlQUFlQyxlQUFlQyxPQUFmLENBQXVCLGNBQXZCLENBQXJCO0FBQ0EsVUFBSUYsWUFBSixFQUFrQjtBQUNoQkMsdUJBQWVFLFVBQWYsQ0FBMEIsY0FBMUI7QUFDQU4sZUFBT0MsUUFBUCxDQUFnQk0sSUFBaEIsR0FBdUJKLFlBQXZCO0FBQ0E7QUFDRDtBQUNESCxhQUFPQyxRQUFQLENBQWdCTSxJQUFoQixHQUF1QixHQUF2QjtBQUNELEtBN0RrQjs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hoQixZQUFNLEVBREs7QUFFWEUsZ0JBQVUsRUFGQztBQUdYSSxhQUFPO0FBQ0xDLGlCQUFTO0FBREo7QUFISSxLQUFiO0FBSGlCO0FBVWxCOzs7Ozs7Ozs7Ozs7eUJBRzRCLEtBQUtTLEssRUFBeEJoQixJLFVBQUFBLEksRUFBTUUsUSxVQUFBQSxROztvQkFDVCwrQkFBK0JlLElBQS9CLENBQW9DakIsSUFBcEMsQzs7Ozs7QUFDSCw0Q0FBYSx3REFBYixFQUF1RSxNQUF2RTs7OztvQkFHRyxpQkFBaUJpQixJQUFqQixDQUFzQmYsUUFBdEIsQzs7Ozs7QUFDSCw0Q0FBYSxtQkFBYixFQUFrQyxNQUFsQzs7Ozs7O3VCQUlrQmdCLGtCQUFRQyxLQUFSLENBQWMsTUFBZCxFQUFzQixlQUF0QixFQUF1QyxFQUFFbkIsVUFBRixFQUFRRSxrQkFBUixFQUF2QyxDOzs7QUFBWmtCLG1COztBQUNOLG9CQUFJQSxPQUFPQSxJQUFJQyxPQUFmLEVBQXdCO0FBQ3RCQywrQkFBYUMsT0FBYixDQUFxQixVQUFyQixFQUFpQyx5QkFBZUgsSUFBSUksUUFBbkIsQ0FBakM7QUFDQTtBQUNBLHVCQUFLckIsUUFBTCxDQUFjO0FBQ1pHLDJCQUFPO0FBQ0xDLCtCQUFTO0FBREo7QUFESyxtQkFBZDtBQUtELGlCQVJELE1BUU87QUFDTCw4Q0FBYWEsSUFBSUssT0FBakIsRUFBMEIsT0FBMUI7QUFDRDs7Ozs7Ozs7QUFFRCwwREFBb0IsT0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkEyQks7QUFBQSxVQUNDbEIsT0FERCxHQUNhLEtBQUtTLEtBQUwsQ0FBV1YsS0FEeEIsQ0FDQ0MsT0FERDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsT0FBZjtBQUNFO0FBQUMseUJBQUQ7QUFBQSxZQUFPLE9BQU0sWUFBYixFQUEwQixTQUFTQSxPQUFuQyxFQUE0QyxTQUFTLEtBQUtGLE9BQTFELEVBQW1FLGdCQUFuRTtBQUNFO0FBQUE7QUFBQSxjQUFHLFdBQVUsU0FBYjtBQUFBO0FBQUE7QUFERixTQURGO0FBSUUsc0NBQUMsc0JBQUQsSUFBYyxVQUFVLEtBQUtOLFFBQTdCLEVBQXVDLGFBQXZDO0FBSkYsT0FERjtBQVFEOzs7Ozs7Ozs7O0VBMUVpQjJCLGdCOztlQTZFTDdCLEs7Ozs7Ozs7Ozs7OzBCQTdFVEEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOTixjQUFjLG1CQUFPLENBQUMsNlNBQTRKOztBQUVsTCw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMseUdBQXNEOztBQUUzRTs7QUFFQSxHQUFHLElBQVU7QUFDYixtQkFBbUIsNlNBQTRKO0FBQy9LLG1CQUFtQixtQkFBTyxDQUFDLDZTQUE0Sjs7QUFFdkwsb0RBQW9ELFFBQVM7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0EsRUFBRTs7QUFFRixnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiMTkuY2Q4NGFlZjZlODAzNmQ5MmMwOWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sb2dpbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmxvZ2luICo6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAubG9naW4gLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAzMHB4IDBweCAxMHB4OyB9XFxuICAubG9naW4gI2ljb24ge1xcbiAgICB3aWR0aDogNjAlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJy4uLy4uL3V0aWxzL3JlcXVlc3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbic7XG5pbXBvcnQgU2lnbkluU2lnblVwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2lnbkluU2lnblVwJztcbmltcG9ydCAnLi9pbmRleC5zY3NzJztcblxuY2xhc3MgTG9nSW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBuYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIG1vZGFsOiB7XG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgYXN5bmMgbG9naW4oKSB7XG4gICAgY29uc3QgeyBuYW1lLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoIS9eW2EtekEtWjAtOV9cXHU0ZTAwLVxcdTlmYTVdKyQvLnRlc3QobmFtZSkpIHtcbiAgICAgIG5vdGlmaWNhdGlvbignVXNlcm5hbWUgY2FuIGNvbnNpc3QgbnVtYmVycywgbGV0dGVycywgYW5kIHVuZGVyc2NvcmVzJywgJ3dhcm4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEvXltBLVphLXowLTldKyQvLnRlc3QocGFzc3dvcmQpKSB7XG4gICAgICBub3RpZmljYXRpb24oJ3Bhc3N3b3Jk5Y+q6IO955Sx5a2X5q+N5pWw5a2X57uE5oiQJywgJ3dhcm4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IFJlcXVlc3QuYXhpb3MoJ3Bvc3QnLCAnL2FwaS92MS9sb2dpbicsIHsgbmFtZSwgcGFzc3dvcmQgfSk7XG4gICAgICBpZiAocmVzICYmIHJlcy5zdWNjZXNzKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KHJlcy51c2VySW5mbykpO1xuICAgICAgICAvLyDlvLnnqpdcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RpZmljYXRpb24ocmVzLm1lc3NhZ2UsICdlcnJvcicpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBub3RpZmljYXRpb24oZXJyb3IsICdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG4gIHNldFZhbHVlID0gdmFsdWUgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGFzc3dvcmQgfSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lLCBwYXNzd29yZCB9LCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB0aGlzLmxvZ2luKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uZmlybSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsOiB7XG4gICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICBjb25zdCBvcmlnaW5hbExpbmsgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdvcmlnaW5hbExpbmsnKTtcbiAgICBpZiAob3JpZ2luYWxMaW5rKSB7XG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdvcmlnaW5hbExpbmsnKTtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gb3JpZ2luYWxMaW5rO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2aXNpYmxlIH0gPSB0aGlzLnN0YXRlLm1vZGFsO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luXCI+XG4gICAgICAgIDxNb2RhbCB0aXRsZT1cIlN1Z2dlc3Rpb25cIiB2aXNpYmxlPXt2aXNpYmxlfSBjb25maXJtPXt0aGlzLmNvbmZpcm19IGhhc0NvbmZpcm0+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY29udGVudFwiPllvdSBoYXZlIGxvZ2dlZCBpbiBzdWNjZXNzZnVsbHk8L3A+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDxTaWduSW5TaWduVXAgc2V0VmFsdWU9e3RoaXMuc2V0VmFsdWV9IGlzTG9naW4gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9nSW47XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL2luZGV4LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9pbmRleC5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL2luZGV4LnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9