(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/ChatContentList/styles.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/ChatContentList/styles.scss ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!react-viewer/dist/index.css */ "./node_modules/css-loader/index.js!./node_modules/react-viewer/dist/index.css"), "");

// module
exports.push([module.i, ".tip {\n  font-size: 12px;\n  color: #555;\n  text-align: center;\n  margin: 10px 0; }\n\n.react-viewer-toolbar :nth-child(3),\n.react-viewer-toolbar :nth-child(5) {\n  display: none; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/ChatContentList/index.js":
/*!*************************************************!*\
  !*** ./src/components/ChatContentList/index.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__(/*! babel-runtime/core-js/map */ "./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactViewer = __webpack_require__(/*! react-viewer */ "./node_modules/react-viewer/dist/index.js");

var _reactViewer2 = _interopRequireDefault(_reactViewer);

var _ChatItem = __webpack_require__(/*! ../ChatItem */ "./src/components/ChatItem/index.js");

var _ChatItem2 = _interopRequireDefault(_ChatItem);

var _transformTime = __webpack_require__(/*! ../../utils/transformTime */ "./src/utils/transformTime.js");

__webpack_require__(/*! ./styles.scss */ "./src/components/ChatContentList/styles.scss");

var _sleep = __webpack_require__(/*! ../../utils/sleep */ "./src/utils/sleep.js");

var _sleep2 = _interopRequireDefault(_sleep);

var _Notification = __webpack_require__(/*! ../Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _Chat = __webpack_require__(/*! ../../modules/Chat */ "./src/modules/Chat/index.js");

var _Chat2 = _interopRequireDefault(_Chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var ChatContentList = function (_Component) {
  (0, _inherits3.default)(ChatContentList, _Component);

  function ChatContentList(props) {
    (0, _classCallCheck3.default)(this, ChatContentList);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ChatContentList.__proto__ || (0, _getPrototypeOf2.default)(ChatContentList)).call(this, props));

    _this._lazyLoadMessage = function () {
      _this._executeNextLoad = false;
      var _this$props = _this.props,
          chats = _this$props.chats,
          chatId = _this$props.chatId,
          ChatContent = _this$props.ChatContent,
          chatType = _this$props.chatType;

      if (chatType === 'groupChat') {
        _this._chat.lazyLoadGroupMessages({
          chats: chats,
          chatId: chatId,
          start: ChatContent.length + 1,
          count: 20
        }).then(function () {
          _this._executeNextLoad = true;
        }).catch(function (error) {
          if (error === 'try again later') {
            (0, _sleep2.default)(3000).then(function () {
              _this._executeNextLoad = true;
            });
          }
        });
      } else if (chatType === 'privateChat') {
        _this._chat.lazyLoadPrivateChatMessages({
          chats: chats,
          user_id: _this._userInfo.user_id,
          chatId: chatId,
          start: ChatContent.length + 1,
          count: 20
        }).then(function () {
          _this._executeNextLoad = true;
        }).catch(function (error) {
          if (error === 'try again later') {
            (0, _sleep2.default)(3000).then(function () {
              _this._executeNextLoad = true;
            });
          }
        });
      }
      _this._loadingNewMessages = true;
    };

    _this._onScroll = function (e) {
      if (!_this._ulRef) return;

      var _ref = e && e.target,
          scrollTop = _ref.scrollTop,
          scrollHeight = _ref.scrollHeight,
          clientHeight = _ref.clientHeight;

      _this._scrollHeight = scrollHeight;
      if (scrollTop === 0 && scrollHeight !== clientHeight && _this._executeNextLoad) {
        if (!_this.props.shouldScrollToFetchData) {
          (0, _Notification2.default)('查看更多请先加群哦', 'warn');
          return;
        }
        _this._lazyLoadMessage();
      }
    };

    _this.clickImage = function (imageUrl) {
      _this.setState({ imageUrl: imageUrl, imageVisible: true });
    };

    _this._closeImageView = function () {
      _this.setState({ imageVisible: false });
    };

    _this._chat = new _Chat2.default();
    _this._scrollHeight = 0;
    _this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    _this._loadingNewMessages = false;
    _this._executeNextLoad = true;
    _this.state = {
      imageVisible: false,
      imageUrl: null
    };
    return _this;
  }

  (0, _createClass3.default)(ChatContentList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollBottomRef.scrollIntoView();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(nextProps) {
      if (nextProps.chatId !== this.props.chatId) {
        // go to another chat
        this._loadingNewMessages = false;
      }
      if (this._scrollHeight && this._loadingNewMessages) {
        this._ulRef.scrollTop = this._ulRef.scrollHeight - this._scrollHeight;
        this._loadingNewMessages = false;
        return;
      }
      if (nextProps.ChatContent !== this.props.ChatContent) {
        this.scrollBottomRef.scrollIntoView();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          ChatContent = _props.ChatContent,
          _clickAvatar = _props.clickAvatar;

      var listItems = ChatContent.map(function (item, index) {
        var isMe = void 0;
        if (item.to_user) {
          // is private chat
          isMe = _this2._userInfo && _this2._userInfo.user_id === item.from_user;
        } else if (item.to_group_id) {
          // is group chat
          isMe = _this2._userInfo && _this2._userInfo.user_id === item.from_user;
        }
        var message = void 0;
        if (item.message) {
          var beginWithName = /\S.*:\s/.test(item.message);
          message = beginWithName ? item.message.substring(item.name.length + 2) : item.message;
        }
        var time = (0, _transformTime.toNormalTime)(item.time);
        var attachments = item.attachments;
        if (item.tip) {
          return _react2.default.createElement(
            'li',
            { className: 'tip', key: index },
            item.message
          );
        }
        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement(_ChatItem2.default, {
            me: isMe,
            img: item.avatar,
            msg: message,
            name: item.name,
            time: time,
            github_id: item.github_id,
            clickImage: _this2.clickImage,
            shouldScrollIntoView: !(_this2._scrollHeight && _this2._loadingNewMessages),
            clickAvatar: function clickAvatar() {
              return _clickAvatar(item.from_user);
            },
            attachments: attachments
          })
        );
      });
      return _react2.default.createElement(
        'ul',
        {
          className: 'chat-content-list',
          ref: function ref(el) {
            _this2._ulRef = el;
          },
          onScroll: this._onScroll
        },
        _react2.default.createElement(_reactViewer2.default, {
          visible: this.state.imageVisible,
          noNavbar: true,
          onClose: this._closeImageView,
          images: [{ src: this.state.imageUrl, alt: '' }]
        }),
        listItems,
        _react2.default.createElement('div', {
          style: { float: 'left', clear: 'both' },
          ref: function ref(el) {
            _this2.scrollBottomRef = el;
          }
        })
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
  return ChatContentList;
}(_react.Component);

var _default = ChatContentList;
exports.default = _default;


ChatContentList.propTypes = {
  ChatContent: _propTypes2.default.array,
  chatId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  clickAvatar: _propTypes2.default.func,
  chatType: _propTypes2.default.string.isRequired,
  chats: _propTypes2.default.instanceOf(_map2.default),
  shouldScrollToFetchData: _propTypes2.default.bool
};

ChatContentList.defaultProps = {
  ChatContent: [],
  chatId: null,
  clickAvatar: function clickAvatar() {},

  chats: new _map2.default(),
  shouldScrollToFetchData: true
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ChatContentList, 'ChatContentList', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/ChatContentList/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/ChatContentList/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/ChatContentList/styles.scss":
/*!****************************************************!*\
  !*** ./src/components/ChatContentList/styles.scss ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/ChatContentList/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/ChatContentList/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/ChatContentList/styles.scss");

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

/***/ "./src/utils/sleep.js":
/*!****************************!*\
  !*** ./src/utils/sleep.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = __webpack_require__(/*! babel-runtime/core-js/promise */ "./node_modules/babel-runtime/core-js/promise.js");

var _promise2 = _interopRequireDefault(_promise);

exports.default = sleep;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function sleep() {
  var ms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  return new _promise2.default(function (resolve) {
    setTimeout(resolve, ms);
  });
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sleep, "sleep", "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/utils/sleep.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaGF0Q29udGVudExpc3Qvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhdENvbnRlbnRMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NoYXRDb250ZW50TGlzdC9zdHlsZXMuc2Nzcz84NjY3Iiwid2VicGFjazovLy8uL3NyYy91dGlscy9zbGVlcC5qcyJdLCJuYW1lcyI6WyJDaGF0Q29udGVudExpc3QiLCJwcm9wcyIsIl9sYXp5TG9hZE1lc3NhZ2UiLCJfZXhlY3V0ZU5leHRMb2FkIiwiY2hhdHMiLCJjaGF0SWQiLCJDaGF0Q29udGVudCIsImNoYXRUeXBlIiwiX2NoYXQiLCJsYXp5TG9hZEdyb3VwTWVzc2FnZXMiLCJzdGFydCIsImxlbmd0aCIsImNvdW50IiwidGhlbiIsImNhdGNoIiwiZXJyb3IiLCJsYXp5TG9hZFByaXZhdGVDaGF0TWVzc2FnZXMiLCJ1c2VyX2lkIiwiX3VzZXJJbmZvIiwiX2xvYWRpbmdOZXdNZXNzYWdlcyIsIl9vblNjcm9sbCIsIl91bFJlZiIsImUiLCJ0YXJnZXQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJfc2Nyb2xsSGVpZ2h0Iiwic2hvdWxkU2Nyb2xsVG9GZXRjaERhdGEiLCJjbGlja0ltYWdlIiwic2V0U3RhdGUiLCJpbWFnZVVybCIsImltYWdlVmlzaWJsZSIsIl9jbG9zZUltYWdlVmlldyIsIkNoYXQiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RhdGUiLCJzY3JvbGxCb3R0b21SZWYiLCJzY3JvbGxJbnRvVmlldyIsIm5leHRQcm9wcyIsImNsaWNrQXZhdGFyIiwibGlzdEl0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiaXNNZSIsInRvX3VzZXIiLCJmcm9tX3VzZXIiLCJ0b19ncm91cF9pZCIsIm1lc3NhZ2UiLCJiZWdpbldpdGhOYW1lIiwidGVzdCIsInN1YnN0cmluZyIsIm5hbWUiLCJ0aW1lIiwiYXR0YWNobWVudHMiLCJ0aXAiLCJhdmF0YXIiLCJnaXRodWJfaWQiLCJlbCIsInNyYyIsImFsdCIsImZsb2F0IiwiY2xlYXIiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm51bWJlciIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiaW5zdGFuY2VPZiIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJzbGVlcCIsIm1zIiwic2V0VGltZW91dCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7QUFDQSxVQUFVLG1CQUFPLENBQUMscUpBQXlFOztBQUUzRjtBQUNBLGNBQWMsUUFBUyxTQUFTLG9CQUFvQixnQkFBZ0IsdUJBQXVCLG1CQUFtQixFQUFFLCtFQUErRSxrQkFBa0IsRUFBRTs7QUFFbk47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7O0FBQ25CLDJCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0pBQ1hBLEtBRFc7O0FBQUEsVUFnQ25CQyxnQkFoQ21CLEdBZ0NBLFlBQU07QUFDdkIsWUFBS0MsZ0JBQUwsR0FBd0IsS0FBeEI7QUFEdUIsd0JBRTBCLE1BQUtGLEtBRi9CO0FBQUEsVUFFZkcsS0FGZSxlQUVmQSxLQUZlO0FBQUEsVUFFUkMsTUFGUSxlQUVSQSxNQUZRO0FBQUEsVUFFQUMsV0FGQSxlQUVBQSxXQUZBO0FBQUEsVUFFYUMsUUFGYixlQUVhQSxRQUZiOztBQUd2QixVQUFJQSxhQUFhLFdBQWpCLEVBQThCO0FBQzVCLGNBQUtDLEtBQUwsQ0FDR0MscUJBREgsQ0FDeUI7QUFDckJM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RUFBUSx1RUFBSCxDQUFHOztBQUNwQyxTQUFPLHNCQUFZLG1CQUFXO0FBQzVCQyxlQUFXQyxPQUFYLEVBQW9CRixFQUFwQjtBQUNELEdBRk0sQ0FBUDtBQUdEOzs7Ozs7Ozs7OzBCQUp1QkQsSyIsImZpbGUiOiI3LjM5MGZlZmEzMTY4ZTBlMTQ4NmY5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhcmVhY3Qtdmlld2VyL2Rpc3QvaW5kZXguY3NzXCIpLCBcIlwiKTtcblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGlwIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAxMHB4IDA7IH1cXG5cXG4ucmVhY3Qtdmlld2VyLXRvb2xiYXIgOm50aC1jaGlsZCgzKSxcXG4ucmVhY3Qtdmlld2VyLXRvb2xiYXIgOm50aC1jaGlsZCg1KSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVmlld2VyIGZyb20gJ3JlYWN0LXZpZXdlcic7XG5pbXBvcnQgQ2hhdEl0ZW0gZnJvbSAnLi4vQ2hhdEl0ZW0nO1xuaW1wb3J0IHsgdG9Ob3JtYWxUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHJhbnNmb3JtVGltZSc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IHNsZWVwIGZyb20gJy4uLy4uL3V0aWxzL3NsZWVwJztcbmltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi4vTm90aWZpY2F0aW9uJztcbmltcG9ydCBDaGF0IGZyb20gJy4uLy4uL21vZHVsZXMvQ2hhdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYXRDb250ZW50TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuX2NoYXQgPSBuZXcgQ2hhdCgpO1xuICAgIHRoaXMuX3Njcm9sbEhlaWdodCA9IDA7XG4gICAgdGhpcy5fdXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpKTtcbiAgICB0aGlzLl9sb2FkaW5nTmV3TWVzc2FnZXMgPSBmYWxzZTtcbiAgICB0aGlzLl9leGVjdXRlTmV4dExvYWQgPSB0cnVlO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbWFnZVZpc2libGU6IGZhbHNlLFxuICAgICAgaW1hZ2VVcmw6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsQm90dG9tUmVmLnNjcm9sbEludG9WaWV3KCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgaWYgKG5leHRQcm9wcy5jaGF0SWQgIT09IHRoaXMucHJvcHMuY2hhdElkKSB7XG4gICAgICAvLyBnbyB0byBhbm90aGVyIGNoYXRcbiAgICAgIHRoaXMuX2xvYWRpbmdOZXdNZXNzYWdlcyA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2Nyb2xsSGVpZ2h0ICYmIHRoaXMuX2xvYWRpbmdOZXdNZXNzYWdlcykge1xuICAgICAgdGhpcy5fdWxSZWYuc2Nyb2xsVG9wID0gdGhpcy5fdWxSZWYuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5fc2Nyb2xsSGVpZ2h0O1xuICAgICAgdGhpcy5fbG9hZGluZ05ld01lc3NhZ2VzID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuZXh0UHJvcHMuQ2hhdENvbnRlbnQgIT09IHRoaXMucHJvcHMuQ2hhdENvbnRlbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsQm90dG9tUmVmLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgX2xhenlMb2FkTWVzc2FnZSA9ICgpID0+IHtcbiAgICB0aGlzLl9leGVjdXRlTmV4dExvYWQgPSBmYWxzZTtcbiAgICBjb25zdCB7IGNoYXRzLCBjaGF0SWQsIENoYXRDb250ZW50LCBjaGF0VHlwZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY2hhdFR5cGUgPT09ICdncm91cENoYXQnKSB7XG4gICAgICB0aGlzLl9jaGF0XG4gICAgICAgIC5sYXp5TG9hZEdyb3VwTWVzc2FnZXMoe1xuICAgICAgICAgIGNoYXRzLFxuICAgICAgICAgIGNoYXRJZCxcbiAgICAgICAgICBzdGFydDogQ2hhdENvbnRlbnQubGVuZ3RoICsgMSxcbiAgICAgICAgICBjb3VudDogMjAsXG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9leGVjdXRlTmV4dExvYWQgPSB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGlmIChlcnJvciA9PT0gJ3RyeSBhZ2FpbiBsYXRlcicpIHtcbiAgICAgICAgICAgIHNsZWVwKDMwMDApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9leGVjdXRlTmV4dExvYWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNoYXRUeXBlID09PSAncHJpdmF0ZUNoYXQnKSB7XG4gICAgICB0aGlzLl9jaGF0XG4gICAgICAgIC5sYXp5TG9hZFByaXZhdGVDaGF0TWVzc2FnZXMoe1xuICAgICAgICAgIGNoYXRzLFxuICAgICAgICAgIHVzZXJfaWQ6IHRoaXMuX3VzZXJJbmZvLnVzZXJfaWQsXG4gICAgICAgICAgY2hhdElkLFxuICAgICAgICAgIHN0YXJ0OiBDaGF0Q29udGVudC5sZW5ndGggKyAxLFxuICAgICAgICAgIGNvdW50OiAyMCxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2V4ZWN1dGVOZXh0TG9hZCA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yID09PSAndHJ5IGFnYWluIGxhdGVyJykge1xuICAgICAgICAgICAgc2xlZXAoMzAwMCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuX2V4ZWN1dGVOZXh0TG9hZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9sb2FkaW5nTmV3TWVzc2FnZXMgPSB0cnVlO1xuICB9O1xuXG4gIF9vblNjcm9sbCA9IGUgPT4ge1xuICAgIGlmICghdGhpcy5fdWxSZWYpIHJldHVybjtcbiAgICBjb25zdCB7IHNjcm9sbFRvcCwgc2Nyb2xsSGVpZ2h0LCBjbGllbnRIZWlnaHQgfSA9IGUgJiYgZS50YXJnZXQ7XG4gICAgdGhpcy5fc2Nyb2xsSGVpZ2h0ID0gc2Nyb2xsSGVpZ2h0O1xuICAgIGlmIChzY3JvbGxUb3AgPT09IDAgJiYgc2Nyb2xsSGVpZ2h0ICE9PSBjbGllbnRIZWlnaHQgJiYgdGhpcy5fZXhlY3V0ZU5leHRMb2FkKSB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuc2hvdWxkU2Nyb2xsVG9GZXRjaERhdGEpIHtcbiAgICAgICAgbm90aWZpY2F0aW9uKCfmn6XnnIvmm7TlpJror7flhYjliqDnvqTlk6YnLCAnd2FybicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9sYXp5TG9hZE1lc3NhZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgY2xpY2tJbWFnZSA9IGltYWdlVXJsID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaW1hZ2VVcmwsIGltYWdlVmlzaWJsZTogdHJ1ZSB9KTtcbiAgfTtcblxuICBfY2xvc2VJbWFnZVZpZXcgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGltYWdlVmlzaWJsZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ2hhdENvbnRlbnQsIGNsaWNrQXZhdGFyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxpc3RJdGVtcyA9IENoYXRDb250ZW50Lm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBpc01lO1xuICAgICAgaWYgKGl0ZW0udG9fdXNlcikge1xuICAgICAgICAvLyBpcyBwcml2YXRlIGNoYXRcbiAgICAgICAgaXNNZSA9IHRoaXMuX3VzZXJJbmZvICYmIHRoaXMuX3VzZXJJbmZvLnVzZXJfaWQgPT09IGl0ZW0uZnJvbV91c2VyO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnRvX2dyb3VwX2lkKSB7XG4gICAgICAgIC8vIGlzIGdyb3VwIGNoYXRcbiAgICAgICAgaXNNZSA9IHRoaXMuX3VzZXJJbmZvICYmIHRoaXMuX3VzZXJJbmZvLnVzZXJfaWQgPT09IGl0ZW0uZnJvbV91c2VyO1xuICAgICAgfVxuICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICBpZiAoaXRlbS5tZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IGJlZ2luV2l0aE5hbWUgPSAvXFxTLio6XFxzLy50ZXN0KGl0ZW0ubWVzc2FnZSk7XG4gICAgICAgIG1lc3NhZ2UgPSBiZWdpbldpdGhOYW1lID8gaXRlbS5tZXNzYWdlLnN1YnN0cmluZyhpdGVtLm5hbWUubGVuZ3RoICsgMikgOiBpdGVtLm1lc3NhZ2U7XG4gICAgICB9XG4gICAgICBjb25zdCB0aW1lID0gdG9Ob3JtYWxUaW1lKGl0ZW0udGltZSk7XG4gICAgICBjb25zdCBhdHRhY2htZW50cyA9IGl0ZW0uYXR0YWNobWVudHM7XG4gICAgICBpZiAoaXRlbS50aXApIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGlwXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICB7aXRlbS5tZXNzYWdlfVxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgPENoYXRJdGVtXG4gICAgICAgICAgICBtZT17aXNNZX1cbiAgICAgICAgICAgIGltZz17aXRlbS5hdmF0YXJ9XG4gICAgICAgICAgICBtc2c9e21lc3NhZ2V9XG4gICAgICAgICAgICBuYW1lPXtpdGVtLm5hbWV9XG4gICAgICAgICAgICB0aW1lPXt0aW1lfVxuICAgICAgICAgICAgZ2l0aHViX2lkPXtpdGVtLmdpdGh1Yl9pZH1cbiAgICAgICAgICAgIGNsaWNrSW1hZ2U9e3RoaXMuY2xpY2tJbWFnZX1cbiAgICAgICAgICAgIHNob3VsZFNjcm9sbEludG9WaWV3PXshKHRoaXMuX3Njcm9sbEhlaWdodCAmJiB0aGlzLl9sb2FkaW5nTmV3TWVzc2FnZXMpfVxuICAgICAgICAgICAgY2xpY2tBdmF0YXI9eygpID0+IGNsaWNrQXZhdGFyKGl0ZW0uZnJvbV91c2VyKX1cbiAgICAgICAgICAgIGF0dGFjaG1lbnRzPXthdHRhY2htZW50c31cbiAgICAgICAgICAvPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT1cImNoYXQtY29udGVudC1saXN0XCJcbiAgICAgICAgcmVmPXtlbCA9PiB7XG4gICAgICAgICAgdGhpcy5fdWxSZWYgPSBlbDtcbiAgICAgICAgfX1cbiAgICAgICAgb25TY3JvbGw9e3RoaXMuX29uU2Nyb2xsfVxuICAgICAgPlxuICAgICAgICA8Vmlld2VyXG4gICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pbWFnZVZpc2libGV9XG4gICAgICAgICAgbm9OYXZiYXJcbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLl9jbG9zZUltYWdlVmlld31cbiAgICAgICAgICBpbWFnZXM9e1t7IHNyYzogdGhpcy5zdGF0ZS5pbWFnZVVybCwgYWx0OiAnJyB9XX1cbiAgICAgICAgLz5cbiAgICAgICAge2xpc3RJdGVtc31cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7IGZsb2F0OiAnbGVmdCcsIGNsZWFyOiAnYm90aCcgfX1cbiAgICAgICAgICByZWY9e2VsID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsQm90dG9tUmVmID0gZWw7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxufVxuXG5DaGF0Q29udGVudExpc3QucHJvcFR5cGVzID0ge1xuICBDaGF0Q29udGVudDogUHJvcFR5cGVzLmFycmF5LFxuICBjaGF0SWQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcbiAgY2xpY2tBdmF0YXI6IFByb3BUeXBlcy5mdW5jLFxuICBjaGF0VHlwZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGF0czogUHJvcFR5cGVzLmluc3RhbmNlT2YoTWFwKSxcbiAgc2hvdWxkU2Nyb2xsVG9GZXRjaERhdGE6IFByb3BUeXBlcy5ib29sLFxufTtcblxuQ2hhdENvbnRlbnRMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgQ2hhdENvbnRlbnQ6IFtdLFxuICBjaGF0SWQ6IG51bGwsXG4gIGNsaWNrQXZhdGFyKCkge30sXG4gIGNoYXRzOiBuZXcgTWFwKCksXG4gIHNob3VsZFNjcm9sbFRvRmV0Y2hEYXRhOiB0cnVlLFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsZWVwKG1zID0gMCkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dChyZXNvbHZlLCBtcyk7XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==