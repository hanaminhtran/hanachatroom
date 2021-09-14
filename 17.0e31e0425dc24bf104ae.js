(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/assets/chat.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/assets/chat.scss ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-wrapper {\n  height: 100%;\n  width: 100%;\n  position: relative; }\n  .chat-wrapper .chat-content-list {\n    height: calc(100% - 100px);\n    padding: 20px 0;\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    overflow-y: auto; }\n    .chat-wrapper .chat-content-list li {\n      padding: 0; }\n  .chat-wrapper .button {\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); }\n", ""]);

// exports


/***/ }),

/***/ "./src/assets/chat.scss":
/*!******************************!*\
  !*** ./src/assets/chat.scss ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib!./chat.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/assets/chat.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib!./chat.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/assets/chat.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/sass-loader/lib/loader.js!../../node_modules/postcss-loader/lib!./chat.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/assets/chat.scss");

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

/***/ "./src/components/Robot/index.js":
/*!***************************************!*\
  !*** ./src/components/Robot/index.js ***!
  \***************************************/
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

__webpack_require__(/*! ../../assets/chat.scss */ "./src/assets/chat.scss");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ChatHeader = __webpack_require__(/*! ../ChatHeader */ "./src/components/ChatHeader/index.js");

var _ChatHeader2 = _interopRequireDefault(_ChatHeader);

var _ChatItem = __webpack_require__(/*! ../ChatItem */ "./src/components/ChatItem/index.js");

var _ChatItem2 = _interopRequireDefault(_ChatItem);

var _InputArea = __webpack_require__(/*! ../InputArea */ "./src/components/InputArea/index.js");

var _InputArea2 = _interopRequireDefault(_InputArea);

var _transformTime = __webpack_require__(/*! ../../utils/transformTime */ "./src/utils/transformTime.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Robot = function (_Component) {
  (0, _inherits3.default)(Robot, _Component);

  function Robot() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Robot);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Robot.__proto__ || (0, _getPrototypeOf2.default)(Robot)).call(this));

    _this.sendMessage = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(value) {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.setState({
                  inputMsg: value
                }, (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                  var _this$props, insertMsg, getRobotMsg, inputMsg;

                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this$props = _this.props, insertMsg = _this$props.insertMsg, getRobotMsg = _this$props.getRobotMsg;
                          inputMsg = _this.state.inputMsg;

                          insertMsg({ message: inputMsg });
                          _context.next = 5;
                          return getRobotMsg({
                            message: inputMsg,
                            user_id: _this._userInfo.user_id
                          });

                        case 5:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this2);
                })));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    _this.state = {
      inputMsg: ''
    };
    return _this;
  }

  (0, _createClass3.default)(Robot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollBottomRef.scrollIntoView();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollBottomRef.scrollIntoView();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var robotState = this.props.robotState;

      if (nextProps.robotState === robotState) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var robotState = this.props.robotState;

      var listItems = robotState.map(function (msg, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          msg.user && _react2.default.createElement(_ChatItem2.default, {
            msg: msg.message,
            name: msg.user,
            time: (0, _transformTime.toNormalTime)(Date.parse(new Date()) / 1000)
          }),
          !msg.user && _react2.default.createElement(_ChatItem2.default, {
            me: true,
            img: _this3._userInfo.avatar,
            msg: msg.message,
            name: _this3._userInfo.name,
            time: (0, _transformTime.toNormalTime)(Date.parse(new Date()) / 1000)
          })
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'chat-wrapper' },
        _react2.default.createElement(_ChatHeader2.default, { title: 'Bot chat', chatType: 'robot' }),
        _react2.default.createElement(
          'ul',
          { className: 'chat-content-list' },
          listItems,
          _react2.default.createElement('div', {
            style: { float: 'left', clear: 'both' },
            ref: function ref(el) {
              _this3.scrollBottomRef = el;
            }
          })
        ),
        _react2.default.createElement(_InputArea2.default, { sendMessage: this.sendMessage, isRobotChat: true })
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
  return Robot;
}(_react.Component);

var _default = Robot;
exports.default = _default;


Robot.propTypes = {
  insertMsg: _propTypes2.default.func,
  getRobotMsg: _propTypes2.default.func,
  robotState: _propTypes2.default.array
};

Robot.defaultProps = {
  insertMsg: undefined,
  getRobotMsg: undefined,
  robotState: []
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Robot, 'Robot', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Robot/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Robot/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/containers/RobotPage/index.js":
/*!*******************************************!*\
  !*** ./src/containers/RobotPage/index.js ***!
  \*******************************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _robotAction = __webpack_require__(/*! ./robotAction */ "./src/containers/RobotPage/robotAction.js");

var _Robot = __webpack_require__(/*! ../../components/Robot */ "./src/components/Robot/index.js");

var _Robot2 = _interopRequireDefault(_Robot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    robotState: state.robotState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    insertMsg: function insertMsg(data) {
      dispatch((0, _robotAction.insertMsgAction)(data));
    },
    getRobotMsg: function getRobotMsg(data) {
      var _this = this;

      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = dispatch;
                _context.next = 3;
                return (0, _robotAction.getRobotMsgAction)(data);

              case 3:
                _context.t1 = _context.sent;
                (0, _context.t0)(_context.t1);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Robot2.default);

exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/RobotPage/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/RobotPage/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/RobotPage/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NoYXQuc2Nzcz9iYzA0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1JvYm90L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1JvYm90UGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJSb2JvdCIsInNlbmRNZXNzYWdlIiwidmFsdWUiLCJzZXRTdGF0ZSIsImlucHV0TXNnIiwicHJvcHMiLCJpbnNlcnRNc2ciLCJnZXRSb2JvdE1zZyIsInN0YXRlIiwibWVzc2FnZSIsInVzZXJfaWQiLCJfdXNlckluZm8iLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2Nyb2xsQm90dG9tUmVmIiwic2Nyb2xsSW50b1ZpZXciLCJuZXh0UHJvcHMiLCJyb2JvdFN0YXRlIiwibGlzdEl0ZW1zIiwibWFwIiwibXNnIiwiaW5kZXgiLCJ1c2VyIiwiRGF0ZSIsImF2YXRhciIsIm5hbWUiLCJmbG9hdCIsImNsZWFyIiwiZWwiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkYXRhIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxnR0FBK0M7QUFDbEY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGtCQUFrQixpQkFBaUIsZ0JBQWdCLHVCQUF1QixFQUFFLHNDQUFzQyxpQ0FBaUMsc0JBQXNCLG9CQUFvQiw2QkFBNkIsdUJBQXVCLHVCQUF1QixFQUFFLDJDQUEyQyxtQkFBbUIsRUFBRSwyQkFBMkIseUJBQXlCLGdCQUFnQiwwQ0FBMEMsa0NBQWtDLEVBQUU7O0FBRW5mOzs7Ozs7Ozs7Ozs7OztBQ05B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LGVBSmdDLHVCQUlwQmlDLElBSm9CLEVBSWQ7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQ3RCQyxRQURzQjtBQUFBO0FBQUEsdUJBQ1Asb0NBQWtCRCxJQUFsQixDQURPOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUV2QjtBQU5xQyxHQUFiO0FBQUEsQ0FBM0I7O2VBU2UseUJBQVFGLGVBQVIsRUFBeUJDLGtCQUF6QixFQUE2Q3ZDLGVBQTdDLEM7Ozs7Ozs7Ozs7OzswQkFiVHNDLGU7MEJBSUFDLGtCIiwiZmlsZSI6IjE3LjBlMzFlMDQyNWRjMjRiZjEwNGFlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hhdC13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2hhdC13cmFwcGVyIC5jaGF0LWNvbnRlbnQtbGlzdCB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cXG4gICAgLmNoYXQtd3JhcHBlciAuY2hhdC1jb250ZW50LWxpc3QgbGkge1xcbiAgICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5jaGF0LXdyYXBwZXIgLmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9jaGF0LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9jaGF0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vY2hhdC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2NoYXQuc2Nzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENoYXRIZWFkZXIgZnJvbSAnLi4vQ2hhdEhlYWRlcic7XG5pbXBvcnQgQ2hhdEl0ZW0gZnJvbSAnLi4vQ2hhdEl0ZW0nO1xuaW1wb3J0IElucHV0QXJlYSBmcm9tICcuLi9JbnB1dEFyZWEnO1xuXG5pbXBvcnQgeyB0b05vcm1hbFRpbWUgfSBmcm9tICcuLi8uLi91dGlscy90cmFuc2Zvcm1UaW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9ib3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3VzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlucHV0TXNnOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UgPSBhc3luYyB2YWx1ZSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIHtcbiAgICAgICAgaW5wdXRNc2c6IHZhbHVlLFxuICAgICAgfSxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgeyBpbnNlcnRNc2csIGdldFJvYm90TXNnIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IGlucHV0TXNnIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBpbnNlcnRNc2coeyBtZXNzYWdlOiBpbnB1dE1zZyB9KTtcbiAgICAgICAgYXdhaXQgZ2V0Um9ib3RNc2coe1xuICAgICAgICAgIG1lc3NhZ2U6IGlucHV0TXNnLFxuICAgICAgICAgIHVzZXJfaWQ6IHRoaXMuX3VzZXJJbmZvLnVzZXJfaWQsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICApO1xuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsQm90dG9tUmVmLnNjcm9sbEludG9WaWV3KCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5zY3JvbGxCb3R0b21SZWYuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfVxuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IHJvYm90U3RhdGUgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKG5leHRQcm9wcy5yb2JvdFN0YXRlID09PSByb2JvdFN0YXRlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm9ib3RTdGF0ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsaXN0SXRlbXMgPSByb2JvdFN0YXRlLm1hcCgobXNnLCBpbmRleCkgPT4gKFxuICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICB7bXNnLnVzZXIgJiYgKFxuICAgICAgICAgIDxDaGF0SXRlbVxuICAgICAgICAgICAgbXNnPXttc2cubWVzc2FnZX1cbiAgICAgICAgICAgIG5hbWU9e21zZy51c2VyfVxuICAgICAgICAgICAgdGltZT17dG9Ob3JtYWxUaW1lKERhdGUucGFyc2UobmV3IERhdGUoKSkgLyAxMDAwKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7IW1zZy51c2VyICYmIChcbiAgICAgICAgICA8Q2hhdEl0ZW1cbiAgICAgICAgICAgIG1lXG4gICAgICAgICAgICBpbWc9e3RoaXMuX3VzZXJJbmZvLmF2YXRhcn1cbiAgICAgICAgICAgIG1zZz17bXNnLm1lc3NhZ2V9XG4gICAgICAgICAgICBuYW1lPXt0aGlzLl91c2VySW5mby5uYW1lfVxuICAgICAgICAgICAgdGltZT17dG9Ob3JtYWxUaW1lKERhdGUucGFyc2UobmV3IERhdGUoKSkgLyAxMDAwKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9saT5cbiAgICApKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXdyYXBwZXJcIj5cbiAgICAgICAgPENoYXRIZWFkZXIgdGl0bGU9XCJCb3QgY2hhdFwiIGNoYXRUeXBlPVwicm9ib3RcIiAvPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2hhdC1jb250ZW50LWxpc3RcIj5cbiAgICAgICAgICB7bGlzdEl0ZW1zfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIGNsZWFyOiAnYm90aCcgfX1cbiAgICAgICAgICAgIHJlZj17ZWwgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNjcm9sbEJvdHRvbVJlZiA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8SW5wdXRBcmVhIHNlbmRNZXNzYWdlPXt0aGlzLnNlbmRNZXNzYWdlfSBpc1JvYm90Q2hhdCAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Sb2JvdC5wcm9wVHlwZXMgPSB7XG4gIGluc2VydE1zZzogUHJvcFR5cGVzLmZ1bmMsXG4gIGdldFJvYm90TXNnOiBQcm9wVHlwZXMuZnVuYyxcbiAgcm9ib3RTdGF0ZTogUHJvcFR5cGVzLmFycmF5LFxufTtcblxuUm9ib3QuZGVmYXVsdFByb3BzID0ge1xuICBpbnNlcnRNc2c6IHVuZGVmaW5lZCxcbiAgZ2V0Um9ib3RNc2c6IHVuZGVmaW5lZCxcbiAgcm9ib3RTdGF0ZTogW10sXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGdldFJvYm90TXNnQWN0aW9uLCBpbnNlcnRNc2dBY3Rpb24gfSBmcm9tICcuL3JvYm90QWN0aW9uJztcbmltcG9ydCBSb2JvdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JvYm90JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcm9ib3RTdGF0ZTogc3RhdGUucm9ib3RTdGF0ZSxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBpbnNlcnRNc2coZGF0YSkge1xuICAgIGRpc3BhdGNoKGluc2VydE1zZ0FjdGlvbihkYXRhKSk7XG4gIH0sXG4gIGFzeW5jIGdldFJvYm90TXNnKGRhdGEpIHtcbiAgICBkaXNwYXRjaChhd2FpdCBnZXRSb2JvdE1zZ0FjdGlvbihkYXRhKSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUm9ib3QpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==