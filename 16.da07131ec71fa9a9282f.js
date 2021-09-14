(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./src/components/PrivateChat/index.js":
/*!*********************************************!*\
  !*** ./src/components/PrivateChat/index.js ***!
  \*********************************************/
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

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "./node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ChatHeader = __webpack_require__(/*! ../ChatHeader */ "./src/components/ChatHeader/index.js");

var _ChatHeader2 = _interopRequireDefault(_ChatHeader);

var _InputArea = __webpack_require__(/*! ../InputArea */ "./src/components/InputArea/index.js");

var _InputArea2 = _interopRequireDefault(_InputArea);

var _ChatContentList = __webpack_require__(/*! ../ChatContentList */ "./src/components/ChatContentList/index.js");

var _ChatContentList2 = _interopRequireDefault(_ChatContentList);

var _PersonalInfo = __webpack_require__(/*! ../PersonalInfo */ "./src/components/PersonalInfo/index.js");

var _PersonalInfo2 = _interopRequireDefault(_PersonalInfo);

var _Notification = __webpack_require__(/*! ../Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

__webpack_require__(/*! ../../assets/chat.scss */ "./src/assets/chat.scss");

var _ShareModal = __webpack_require__(/*! ../ShareModal */ "./src/components/ShareModal/index.js");

var _ShareModal2 = _interopRequireDefault(_ShareModal);

var _Chat = __webpack_require__(/*! ../../modules/Chat */ "./src/modules/Chat/index.js");

var _Chat2 = _interopRequireDefault(_Chat);

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _debounce = __webpack_require__(/*! ../../utils/debounce */ "./src/utils/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _Button = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var PrivateChat = function (_Component) {
  (0, _inherits3.default)(PrivateChat, _Component);

  function PrivateChat() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, PrivateChat);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PrivateChat.__proto__ || (0, _getPrototypeOf2.default)(PrivateChat)).call(this));

    _this.sendMessage = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var inputMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var attachments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var _this$_userInfo, user_id, avatar, name, github_id, _this$props, allPrivateChats, homePageList, updateHomePageList, addPrivateChatMessages, data, response, dataForHomePage;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(inputMsg.trim() === '' && attachments.length === 0)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                _this$_userInfo = _this._userInfo, user_id = _this$_userInfo.user_id, avatar = _this$_userInfo.avatar, name = _this$_userInfo.name, github_id = _this$_userInfo.github_id;
                _this$props = _this.props, allPrivateChats = _this$props.allPrivateChats, homePageList = _this$props.homePageList, updateHomePageList = _this$props.updateHomePageList, addPrivateChatMessages = _this$props.addPrivateChatMessages;
                data = {
                  from_user: user_id, // 自己的id
                  to_user: _this.friendId, // 对方id
                  avatar: avatar, // 自己的头像
                  name: name,
                  github_id: github_id,
                  message: inputMsg === '' ? name + ': [' + (attachments[0].type || 'file') + ']' : name + ': ' + inputMsg, // 消息内容
                  attachments: attachments // 附件
                  // time: Date.parse(new Date()) / 1000 // 时间
                };

                _this._sendByMe = true;
                _context.next = 8;
                return _request2.default.socketEmitAndGetResponse('sendPrivateMsg', data, function (error) {
                  (0, _Notification2.default)('消息Send失败', 'error', 2);
                });

              case 8:
                response = _context.sent;

                addPrivateChatMessages({
                  allPrivateChats: allPrivateChats,
                  message: response,
                  chatId: _this.friendId
                });
                // eslint-disable-next-line no-restricted-globals
                dataForHomePage = (0, _extends3.default)({}, response, { name: location.search.split('=')[1] });

                updateHomePageList({ data: dataForHomePage, homePageList: homePageList, myUserId: user_id });

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function () {
        return _ref.apply(this, arguments);
      };
    }();

    _this.addAsTheContact = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _this$props2, allPrivateChats, homePageList, updateHomePageList, addPrivateChatInfo, data, dataInHomePageList;

      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!_this.state.disableJoinButton) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt('return');

            case 2:
              _this.setState({ disableJoinButton: true });
              _this$props2 = _this.props, allPrivateChats = _this$props2.allPrivateChats, homePageList = _this$props2.homePageList, updateHomePageList = _this$props2.updateHomePageList, addPrivateChatInfo = _this$props2.addPrivateChatInfo;

              if (!(_this.chatId === _this._userInfo.user_id)) {
                _context2.next = 7;
                break;
              }

              (0, _Notification2.default)('不能添加自己为联系人哦', 'error', 2);
              return _context2.abrupt('return');

            case 7:
              _context2.next = 9;
              return _request2.default.socketEmitAndGetResponse('addAsTheContact', { user_id: _this._userInfo.user_id, from_user: _this.friendId }, function (error) {
                (0, _Notification2.default)('添加失败！', 'error', 1.5);
                _this.setState({ disableJoinButton: false });
              });

            case 9:
              data = _context2.sent;

              addPrivateChatInfo({ allPrivateChats: allPrivateChats, chatId: _this.friendId, userInfo: data });
              dataInHomePageList = (0, _extends3.default)({}, data, {
                to_user: data.user_id,
                message: '添加联系人成功，给我发消息吧:)',
                time: Date.parse(new Date()) / 1000
              });

              updateHomePageList({ data: dataInHomePageList, homePageList: homePageList });

            case 13:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    _this._showShareModal = function () {
      _this.setState(function (state) {
        return { showShareModal: !state.showShareModal };
      });
    };

    _this._deletePrivateChat = function () {
      var _this$props3 = _this.props,
          deletePrivateChat = _this$props3.deletePrivateChat,
          allPrivateChats = _this$props3.allPrivateChats;

      deletePrivateChat({ allPrivateChats: allPrivateChats, chatId: _this.chatId });
    };

    _this._deleteHomePageList = function () {
      var _this$props4 = _this.props,
          deleteHomePageList = _this$props4.deleteHomePageList,
          homePageList = _this$props4.homePageList;

      deleteHomePageList({ homePageList: homePageList, chatId: _this.chatId });
    };

    _this._sendByMe = false;
    _this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    _this._hasBeenFriend = false;
    _this._chat = new _Chat2.default();
    _this.state = {
      showPersonalInfo: false,
      showShareModal: false,
      toUserInfo: {},
      disableJoinButton: false
    };
    return _this;
  }

  (0, _createClass3.default)(PrivateChat, [{
    key: '_showPersonalInfo',
    value: function _showPersonalInfo(value) {
      this.setState({ showPersonalInfo: value });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var relatedCurrentChat = nextProps.relatedCurrentChat,
          match = nextProps.match;
      // console.log('shouldComponentUpdate', relatedCurrentChat, chatId, this.props.chatId, this._sendByMe);

      if (relatedCurrentChat || match.params.user_id !== this.chatId || this._sendByMe) {
        this._sendByMe = false;
        return true;
      }

      var showPersonalInfo = nextState.showPersonalInfo;

      if (showPersonalInfo !== this.state.showPersonalInfo) return true;

      return false;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var allPrivateChats = this.props.allPrivateChats;

      var chatItem = allPrivateChats && allPrivateChats.get(this.chatId);
      if (!chatItem && window.socket) {
        window.socket.emit('getUserInfo', this.chatId, function (toUserInfo) {
          _this3.setState({ toUserInfo: toUserInfo });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          allPrivateChats = _props.allPrivateChats,
          shareData = _props.shareData,
          homePageList = _props.homePageList,
          allGroupChats = _props.allGroupChats,
          deleteHomePageList = _props.deleteHomePageList,
          deletePrivateChat = _props.deletePrivateChat,
          initApp = _props.initApp;
      var _state = this.state,
          showPersonalInfo = _state.showPersonalInfo,
          showShareModal = _state.showShareModal,
          toUserInfo = _state.toUserInfo,
          disableJoinButton = _state.disableJoinButton;

      if (!allPrivateChats && !allPrivateChats.size || !this.chatId) return null;
      var chatItem = allPrivateChats.get(this.chatId);
      var messages = chatItem ? chatItem.messages : [];
      var userInfo = chatItem ? chatItem.userInfo : toUserInfo;
      return _react2.default.createElement(
        'div',
        { className: 'chat-wrapper' },
        _react2.default.createElement(_ShareModal2.default, {
          title: 'Share this contact with',
          modalVisible: showShareModal,
          chatId: this.chatId,
          showShareModal: this._showShareModal,
          cancel: this._showShareModal,
          allGroupChats: allGroupChats,
          homePageList: homePageList
        }),
        _react2.default.createElement(_ChatHeader2.default, {
          showPersonalInfo: function showPersonalInfo() {
            return _this4._showPersonalInfo(true);
          },
          title: userInfo && userInfo.name || '----',
          showShareModal: this._showShareModal,
          chatType: 'private',
          showShareIcon: !!chatItem
        }),
        _react2.default.createElement(_ChatContentList2.default, {
          chat: this._chat,
          chats: allPrivateChats,
          ChatContent: messages,
          chatId: this.chatId,
          chatType: 'privateChat',
          clickAvatar: function clickAvatar() {
            return _this4._showPersonalInfo(true);
          }
        }),
        _react2.default.createElement(_PersonalInfo2.default, {
          userInfo: userInfo,
          hide: function hide() {
            return _this4._showPersonalInfo(false);
          },
          modalVisible: showPersonalInfo,
          homePageList: homePageList,
          allPrivateChats: allPrivateChats,
          deleteHomePageList: deleteHomePageList,
          deletePrivateChat: deletePrivateChat
        }),
        chatItem ? _react2.default.createElement(_InputArea2.default, { shareData: shareData, sendMessage: this.sendMessage }) : initApp && _react2.default.createElement(_Button2.default, {
          clickFn: (0, _debounce2.default)(this.addAsTheContact, 2000, true),
          value: '\u52A0\u4E3A\u8054\u7CFB\u4EBA',
          disable: disableJoinButton,
          className: 'button'
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
  }, {
    key: 'chatId',
    get: function get() {
      return parseInt(this.props.match.params.user_id, 10);
    }

    // question: writing as this is ok ?

  }, {
    key: 'friendId',
    get: function get() {
      return parseInt(this.props.location.pathname.split('private_chat/')[1], 10);
    }
  }]);
  return PrivateChat;
}(_react.Component);

var _default = PrivateChat;
exports.default = _default;


PrivateChat.propTypes = {
  allPrivateChats: _propTypes2.default.instanceOf(_map2.default),
  allGroupChats: _propTypes2.default.instanceOf(_map2.default),
  homePageList: _propTypes2.default.array,
  updateHomePageList: _propTypes2.default.func,
  addPrivateChatMessages: _propTypes2.default.func,
  addPrivateChatInfo: _propTypes2.default.func,
  shareData: _propTypes2.default.object,
  deleteHomePageList: _propTypes2.default.func,
  deletePrivateChat: _propTypes2.default.func,
  initApp: _propTypes2.default.bool
};

PrivateChat.defaultProps = {
  allPrivateChats: new _map2.default(),
  allGroupChats: new _map2.default(),
  homePageList: [],
  updateHomePageList: undefined,
  addPrivateChatMessages: undefined,
  addPrivateChatInfo: undefined,
  shareData: undefined,
  deleteHomePageList: function deleteHomePageList() {},
  deletePrivateChat: function deletePrivateChat() {},

  initApp: false
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PrivateChat, 'PrivateChat', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/PrivateChat/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/PrivateChat/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/containers/PrivateChatPage/index.js":
/*!*************************************************!*\
  !*** ./src/containers/PrivateChatPage/index.js ***!
  \*************************************************/
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

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _homePageListAction = __webpack_require__(/*! ../HomePageList/homePageListAction */ "./src/containers/HomePageList/homePageListAction.js");

var _privateChatAction = __webpack_require__(/*! ./privateChatAction */ "./src/containers/PrivateChatPage/privateChatAction.js");

var _PrivateChat = __webpack_require__(/*! ../../components/PrivateChat */ "./src/components/PrivateChat/index.js");

var _PrivateChat2 = _interopRequireDefault(_PrivateChat);

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
    allPrivateChats: state.allPrivateChatsState,
    homePageList: state.homePageListState,
    relatedCurrentChat: state.relatedCurrentChat,
    shareData: state.shareState,
    allGroupChats: state.allGroupChatsState,
    initApp: state.initAppState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addPrivateChatMessages: function addPrivateChatMessages() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _privateChatAction.addPrivateChatMessagesAction)((0, _extends3.default)({}, arg)));
    },
    addPrivateChatInfo: function addPrivateChatInfo() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _privateChatAction.addPrivateChatInfoAction)((0, _extends3.default)({}, arg)));
    },
    updateHomePageList: function updateHomePageList() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _homePageListAction.updateHomePageListAction)((0, _extends3.default)({}, arg)));
    },
    deleteHomePageList: function deleteHomePageList() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _homePageListAction.deleteHomePageListAction)((0, _extends3.default)({}, arg)));
    },
    deletePrivateChat: function deletePrivateChat() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _privateChatAction.deletePrivateChatAction)((0, _extends3.default)({}, arg)));
    }
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_PrivateChat2.default));

exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/PrivateChatPage/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/PrivateChatPage/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/PrivateChatPage/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NoYXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NoYXQuc2Nzcz9iYzA0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ByaXZhdGVDaGF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXJzL1ByaXZhdGVDaGF0UGFnZS9pbmRleC5qcyJdLCJuYW1lcyI6WyJQcml2YXRlQ2hhdCIsInNlbmRNZXNzYWdlIiwiaW5wdXRNc2ciLCJhdHRhY2htZW50cyIsInRyaW0iLCJsZW5ndGgiLCJfdXNlckluZm8iLCJ1c2VyX2lkIiwiYXZhdGFyIiwibmFtZSIsImdpdGh1Yl9pZCIsInByb3BzIiwiYWxsUHJpdmF0ZUNoYXRzIiwiaG9tZVBhZ2VMaXN0IiwidXBkYXRlSG9tZVBhZ2VMaXN0IiwiYWRkUHJpdmF0ZUNoYXRNZXNzYWdlcyIsImRhdGEiLCJmcm9tX3VzZXIiLCJ0b191c2VyIiwiZnJpZW5kSWQiLCJtZXNzYWdlIiwidHlwZSIsIl9zZW5kQnlNZSIsInJlcXVlc3QiLCJzb2NrZXRFbWl0QW5kR2V0UmVzcG9uc2UiLCJyZXNwb25zZSIsImNoYXRJZCIsImRhdGFGb3JIb21lUGFnZSIsImxvY2F0aW9uIiwic2VhcmNoIiwic3BsaXQiLCJteVVzZXJJZCIsImFkZEFzVGhlQ29udGFjdCIsInN0YXRlIiwiZGlzYWJsZUpvaW5CdXR0b24iLCJzZXRTdGF0ZSIsImFkZFByaXZhdGVDaGF0SW5mbyIsInVzZXJJbmZvIiwiZGF0YUluSG9tZVBhZ2VMaXN0IiwidGltZSIsIkRhdGUiLCJwYXJzZSIsIl9zaG93U2hhcmVNb2RhbCIsInNob3dTaGFyZU1vZGFsIiwiX2RlbGV0ZVByaXZhdGVDaGF0IiwiZGVsZXRlUHJpdmF0ZUNoYXQiLCJfZGVsZXRlSG9tZVBhZ2VMaXN0IiwiZGVsZXRlSG9tZVBhZ2VMaXN0IiwiSlNPTiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJfaGFzQmVlbkZyaWVuZCIsIl9jaGF0IiwiQ2hhdCIsInNob3dQZXJzb25hbEluZm8iLCJ0b1VzZXJJbmZvIiwidmFsdWUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJyZWxhdGVkQ3VycmVudENoYXQiLCJtYXRjaCIsInBhcmFtcyIsImNoYXRJdGVtIiwiZ2V0Iiwid2luZG93Iiwic29ja2V0IiwiZW1pdCIsInNoYXJlRGF0YSIsImFsbEdyb3VwQ2hhdHMiLCJpbml0QXBwIiwic2l6ZSIsIm1lc3NhZ2VzIiwiX3Nob3dQZXJzb25hbEluZm8iLCJwYXJzZUludCIsInBhdGhuYW1lIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaW5zdGFuY2VPZiIsImFycmF5IiwiZnVuYyIsIm9iamVjdCIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhbGxQcml2YXRlQ2hhdHNTdGF0ZSIsImhvbWVQYWdlTGlzdFN0YXRlIiwic2hhcmVTdGF0ZSIsImFsbEdyb3VwQ2hhdHNTdGF0ZSIsImluaXRBcHBTdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFyZyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsZ0dBQStDO0FBQ2xGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsaUJBQWlCLGdCQUFnQix1QkFBdUIsRUFBRSxzQ0FBc0MsaUNBQWlDLHNCQUFzQixvQkFBb0IsNkJBQTZCLHVCQUF1Qix1QkFBdUIsRUFBRSwyQ0FBMkMsbUJBQW1CLEVBQUUsMkJBQTJCLHlCQUF5QixnQkFBZ0IsMENBQTBDLGtDQUFrQyxFQUFFOztBQUVuZjs7Ozs7Ozs7Ozs7Ozs7QUNOQSxjQUFjLG1CQUFPLENBQUMsb1JBQWtKOztBQUV4Syw0Q0FBNEMsUUFBUzs7QUFFckQ7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQSxhQUFhLG1CQUFPLENBQUMsc0dBQW1EOztBQUV4RTs7QUFFQSxHQUFHLElBQVU7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QkMsZUFBUyw2RUFBOEJELEdBQTlCLEVBQVQ7QUFDRCxLQVRxQztBQVV0QzdDLHNCQVZzQyxnQ0FVVDtBQUFBLFVBQVY2QyxHQUFVLHVFQUFKLEVBQUk7O0FBQzNCQyxlQUFTLDZFQUE4QkQsR0FBOUIsRUFBVDtBQUNELEtBWnFDO0FBYXRDL0MscUJBYnNDLCtCQWFWO0FBQUEsVUFBVitDLEdBQVUsdUVBQUosRUFBSTs7QUFDMUJDLGVBQVMsMkVBQTZCRCxHQUE3QixFQUFUO0FBQ0Q7QUFmcUMsR0FBYjtBQUFBLENBQTNCOztlQWtCZSxnQ0FBVyx5QkFBUVAsZUFBUixFQUF5Qk0sa0JBQXpCLEVBQTZDM0YscUJBQTdDLENBQVgsQzs7Ozs7Ozs7Ozs7OzBCQTNCVHFGLGU7MEJBU0FNLGtCIiwiZmlsZSI6IjE2LmRhMDcxMzFlYzcxZmE5YTkyODJmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2hhdC13cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAuY2hhdC13cmFwcGVyIC5jaGF0LWNvbnRlbnQtbGlzdCB7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cXG4gICAgLmNoYXQtd3JhcHBlciAuY2hhdC1jb250ZW50LWxpc3QgbGkge1xcbiAgICAgIHBhZGRpbmc6IDA7IH1cXG4gIC5jaGF0LXdyYXBwZXIgLmJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9jaGF0LnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9jaGF0LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vY2hhdC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2hhdEhlYWRlciBmcm9tICcuLi9DaGF0SGVhZGVyJztcbmltcG9ydCBJbnB1dEFyZWEgZnJvbSAnLi4vSW5wdXRBcmVhJztcbmltcG9ydCBDaGF0Q29udGVudExpc3QgZnJvbSAnLi4vQ2hhdENvbnRlbnRMaXN0JztcbmltcG9ydCBQZXJzb25hbEluZm8gZnJvbSAnLi4vUGVyc29uYWxJbmZvJztcbmltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi4vTm90aWZpY2F0aW9uJztcbmltcG9ydCAnLi4vLi4vYXNzZXRzL2NoYXQuc2Nzcyc7XG5pbXBvcnQgU2hhcmVNb2RhbCBmcm9tICcuLi9TaGFyZU1vZGFsJztcbmltcG9ydCBDaGF0IGZyb20gJy4uLy4uL21vZHVsZXMvQ2hhdCc7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi8uLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByaXZhdGVDaGF0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zZW5kQnlNZSA9IGZhbHNlO1xuICAgIHRoaXMuX3VzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKSk7XG4gICAgdGhpcy5faGFzQmVlbkZyaWVuZCA9IGZhbHNlO1xuICAgIHRoaXMuX2NoYXQgPSBuZXcgQ2hhdCgpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93UGVyc29uYWxJbmZvOiBmYWxzZSxcbiAgICAgIHNob3dTaGFyZU1vZGFsOiBmYWxzZSxcbiAgICAgIHRvVXNlckluZm86IHt9LFxuICAgICAgZGlzYWJsZUpvaW5CdXR0b246IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBzZW5kTWVzc2FnZSA9IGFzeW5jIChpbnB1dE1zZyA9ICcnLCBhdHRhY2htZW50cyA9IFtdKSA9PiB7XG4gICAgaWYgKGlucHV0TXNnLnRyaW0oKSA9PT0gJycgJiYgYXR0YWNobWVudHMubGVuZ3RoID09PSAwKSByZXR1cm47XG4gICAgY29uc3QgeyB1c2VyX2lkLCBhdmF0YXIsIG5hbWUsIGdpdGh1Yl9pZCB9ID0gdGhpcy5fdXNlckluZm87XG4gICAgY29uc3Qge1xuICAgICAgYWxsUHJpdmF0ZUNoYXRzLFxuICAgICAgaG9tZVBhZ2VMaXN0LFxuICAgICAgdXBkYXRlSG9tZVBhZ2VMaXN0LFxuICAgICAgYWRkUHJpdmF0ZUNoYXRNZXNzYWdlcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZnJvbV91c2VyOiB1c2VyX2lkLCAvLyDoh6rlt7HnmoRpZFxuICAgICAgdG9fdXNlcjogdGhpcy5mcmllbmRJZCwgLy8g5a+55pa5aWRcbiAgICAgIGF2YXRhciwgLy8g6Ieq5bex55qE5aS05YOPXG4gICAgICBuYW1lLFxuICAgICAgZ2l0aHViX2lkLFxuICAgICAgbWVzc2FnZTpcbiAgICAgICAgaW5wdXRNc2cgPT09ICcnID8gYCR7bmFtZX06IFske2F0dGFjaG1lbnRzWzBdLnR5cGUgfHwgJ2ZpbGUnfV1gIDogYCR7bmFtZX06ICR7aW5wdXRNc2d9YCwgLy8g5raI5oGv5YaF5a65XG4gICAgICBhdHRhY2htZW50cywgLy8g6ZmE5Lu2XG4gICAgICAvLyB0aW1lOiBEYXRlLnBhcnNlKG5ldyBEYXRlKCkpIC8gMTAwMCAvLyDml7bpl7RcbiAgICB9O1xuICAgIHRoaXMuX3NlbmRCeU1lID0gdHJ1ZTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Quc29ja2V0RW1pdEFuZEdldFJlc3BvbnNlKCdzZW5kUHJpdmF0ZU1zZycsIGRhdGEsIGVycm9yID0+IHtcbiAgICAgIG5vdGlmaWNhdGlvbign5raI5oGvU2VuZOWksei0pScsICdlcnJvcicsIDIpO1xuICAgIH0pO1xuICAgIGFkZFByaXZhdGVDaGF0TWVzc2FnZXMoe1xuICAgICAgYWxsUHJpdmF0ZUNoYXRzLFxuICAgICAgbWVzc2FnZTogcmVzcG9uc2UsXG4gICAgICBjaGF0SWQ6IHRoaXMuZnJpZW5kSWQsXG4gICAgfSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFsc1xuICAgIGNvbnN0IGRhdGFGb3JIb21lUGFnZSA9IHsgLi4ucmVzcG9uc2UsIG5hbWU6IGxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPScpWzFdIH07XG4gICAgdXBkYXRlSG9tZVBhZ2VMaXN0KHsgZGF0YTogZGF0YUZvckhvbWVQYWdlLCBob21lUGFnZUxpc3QsIG15VXNlcklkOiB1c2VyX2lkIH0pO1xuICB9O1xuXG4gIGFkZEFzVGhlQ29udGFjdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZS5kaXNhYmxlSm9pbkJ1dHRvbikgcmV0dXJuO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlSm9pbkJ1dHRvbjogdHJ1ZSB9KTtcbiAgICBjb25zdCB7IGFsbFByaXZhdGVDaGF0cywgaG9tZVBhZ2VMaXN0LCB1cGRhdGVIb21lUGFnZUxpc3QsIGFkZFByaXZhdGVDaGF0SW5mbyB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5jaGF0SWQgPT09IHRoaXMuX3VzZXJJbmZvLnVzZXJfaWQpIHtcbiAgICAgIG5vdGlmaWNhdGlvbign5LiN6IO95re75Yqg6Ieq5bex5Li66IGU57O75Lq65ZOmJywgJ2Vycm9yJywgMik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXF1ZXN0LnNvY2tldEVtaXRBbmRHZXRSZXNwb25zZShcbiAgICAgICdhZGRBc1RoZUNvbnRhY3QnLFxuICAgICAgeyB1c2VyX2lkOiB0aGlzLl91c2VySW5mby51c2VyX2lkLCBmcm9tX3VzZXI6IHRoaXMuZnJpZW5kSWQgfSxcbiAgICAgIGVycm9yID0+IHtcbiAgICAgICAgbm90aWZpY2F0aW9uKCfmt7vliqDlpLHotKXvvIEnLCAnZXJyb3InLCAxLjUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGlzYWJsZUpvaW5CdXR0b246IGZhbHNlIH0pO1xuICAgICAgfSxcbiAgICApO1xuICAgIGFkZFByaXZhdGVDaGF0SW5mbyh7IGFsbFByaXZhdGVDaGF0cywgY2hhdElkOiB0aGlzLmZyaWVuZElkLCB1c2VySW5mbzogZGF0YSB9KTtcbiAgICBjb25zdCBkYXRhSW5Ib21lUGFnZUxpc3QgPSB7XG4gICAgICAuLi5kYXRhLFxuICAgICAgdG9fdXNlcjogZGF0YS51c2VyX2lkLFxuICAgICAgbWVzc2FnZTogJ+a3u+WKoOiBlOezu+S6uuaIkOWKn++8jOe7meaIkeWPkea2iOaBr+WQpzopJyxcbiAgICAgIHRpbWU6IERhdGUucGFyc2UobmV3IERhdGUoKSkgLyAxMDAwLFxuICAgIH07XG4gICAgdXBkYXRlSG9tZVBhZ2VMaXN0KHsgZGF0YTogZGF0YUluSG9tZVBhZ2VMaXN0LCBob21lUGFnZUxpc3QgfSk7XG4gIH07XG5cbiAgX3Nob3dQZXJzb25hbEluZm8odmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd1BlcnNvbmFsSW5mbzogdmFsdWUgfSk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCB7IHJlbGF0ZWRDdXJyZW50Q2hhdCwgbWF0Y2ggfSA9IG5leHRQcm9wcztcbiAgICAvLyBjb25zb2xlLmxvZygnc2hvdWxkQ29tcG9uZW50VXBkYXRlJywgcmVsYXRlZEN1cnJlbnRDaGF0LCBjaGF0SWQsIHRoaXMucHJvcHMuY2hhdElkLCB0aGlzLl9zZW5kQnlNZSk7XG4gICAgaWYgKHJlbGF0ZWRDdXJyZW50Q2hhdCB8fCBtYXRjaC5wYXJhbXMudXNlcl9pZCAhPT0gdGhpcy5jaGF0SWQgfHwgdGhpcy5fc2VuZEJ5TWUpIHtcbiAgICAgIHRoaXMuX3NlbmRCeU1lID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHNob3dQZXJzb25hbEluZm8gfSA9IG5leHRTdGF0ZTtcbiAgICBpZiAoc2hvd1BlcnNvbmFsSW5mbyAhPT0gdGhpcy5zdGF0ZS5zaG93UGVyc29uYWxJbmZvKSByZXR1cm4gdHJ1ZTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIF9zaG93U2hhcmVNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IHNob3dTaGFyZU1vZGFsOiAhc3RhdGUuc2hvd1NoYXJlTW9kYWwgfSkpO1xuICB9O1xuXG4gIF9kZWxldGVQcml2YXRlQ2hhdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRlbGV0ZVByaXZhdGVDaGF0LCBhbGxQcml2YXRlQ2hhdHMgfSA9IHRoaXMucHJvcHM7XG4gICAgZGVsZXRlUHJpdmF0ZUNoYXQoeyBhbGxQcml2YXRlQ2hhdHMsIGNoYXRJZDogdGhpcy5jaGF0SWQgfSk7XG4gIH07XG5cbiAgX2RlbGV0ZUhvbWVQYWdlTGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGRlbGV0ZUhvbWVQYWdlTGlzdCwgaG9tZVBhZ2VMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIGRlbGV0ZUhvbWVQYWdlTGlzdCh7IGhvbWVQYWdlTGlzdCwgY2hhdElkOiB0aGlzLmNoYXRJZCB9KTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGFsbFByaXZhdGVDaGF0cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGF0SXRlbSA9IGFsbFByaXZhdGVDaGF0cyAmJiBhbGxQcml2YXRlQ2hhdHMuZ2V0KHRoaXMuY2hhdElkKTtcbiAgICBpZiAoIWNoYXRJdGVtICYmIHdpbmRvdy5zb2NrZXQpIHtcbiAgICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnZ2V0VXNlckluZm8nLCB0aGlzLmNoYXRJZCwgdG9Vc2VySW5mbyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b1VzZXJJbmZvIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsbFByaXZhdGVDaGF0cyxcbiAgICAgIHNoYXJlRGF0YSxcbiAgICAgIGhvbWVQYWdlTGlzdCxcbiAgICAgIGFsbEdyb3VwQ2hhdHMsXG4gICAgICBkZWxldGVIb21lUGFnZUxpc3QsXG4gICAgICBkZWxldGVQcml2YXRlQ2hhdCxcbiAgICAgIGluaXRBcHAsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93UGVyc29uYWxJbmZvLCBzaG93U2hhcmVNb2RhbCwgdG9Vc2VySW5mbywgZGlzYWJsZUpvaW5CdXR0b24gfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCghYWxsUHJpdmF0ZUNoYXRzICYmICFhbGxQcml2YXRlQ2hhdHMuc2l6ZSkgfHwgIXRoaXMuY2hhdElkKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBjaGF0SXRlbSA9IGFsbFByaXZhdGVDaGF0cy5nZXQodGhpcy5jaGF0SWQpO1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gY2hhdEl0ZW0gPyBjaGF0SXRlbS5tZXNzYWdlcyA6IFtdO1xuICAgIGNvbnN0IHVzZXJJbmZvID0gY2hhdEl0ZW0gPyBjaGF0SXRlbS51c2VySW5mbyA6IHRvVXNlckluZm87XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhdC13cmFwcGVyXCI+XG4gICAgICAgIDxTaGFyZU1vZGFsXG4gICAgICAgICAgdGl0bGU9XCJTaGFyZSB0aGlzIGNvbnRhY3Qgd2l0aFwiXG4gICAgICAgICAgbW9kYWxWaXNpYmxlPXtzaG93U2hhcmVNb2RhbH1cbiAgICAgICAgICBjaGF0SWQ9e3RoaXMuY2hhdElkfVxuICAgICAgICAgIHNob3dTaGFyZU1vZGFsPXt0aGlzLl9zaG93U2hhcmVNb2RhbH1cbiAgICAgICAgICBjYW5jZWw9e3RoaXMuX3Nob3dTaGFyZU1vZGFsfVxuICAgICAgICAgIGFsbEdyb3VwQ2hhdHM9e2FsbEdyb3VwQ2hhdHN9XG4gICAgICAgICAgaG9tZVBhZ2VMaXN0PXtob21lUGFnZUxpc3R9XG4gICAgICAgIC8+XG4gICAgICAgIDxDaGF0SGVhZGVyXG4gICAgICAgICAgc2hvd1BlcnNvbmFsSW5mbz17KCkgPT4gdGhpcy5fc2hvd1BlcnNvbmFsSW5mbyh0cnVlKX1cbiAgICAgICAgICB0aXRsZT17KHVzZXJJbmZvICYmIHVzZXJJbmZvLm5hbWUpIHx8ICctLS0tJ31cbiAgICAgICAgICBzaG93U2hhcmVNb2RhbD17dGhpcy5fc2hvd1NoYXJlTW9kYWx9XG4gICAgICAgICAgY2hhdFR5cGU9XCJwcml2YXRlXCJcbiAgICAgICAgICBzaG93U2hhcmVJY29uPXshIWNoYXRJdGVtfVxuICAgICAgICAvPlxuICAgICAgICA8Q2hhdENvbnRlbnRMaXN0XG4gICAgICAgICAgY2hhdD17dGhpcy5fY2hhdH1cbiAgICAgICAgICBjaGF0cz17YWxsUHJpdmF0ZUNoYXRzfVxuICAgICAgICAgIENoYXRDb250ZW50PXttZXNzYWdlc31cbiAgICAgICAgICBjaGF0SWQ9e3RoaXMuY2hhdElkfVxuICAgICAgICAgIGNoYXRUeXBlPVwicHJpdmF0ZUNoYXRcIlxuICAgICAgICAgIGNsaWNrQXZhdGFyPXsoKSA9PiB0aGlzLl9zaG93UGVyc29uYWxJbmZvKHRydWUpfVxuICAgICAgICAvPlxuICAgICAgICA8UGVyc29uYWxJbmZvXG4gICAgICAgICAgdXNlckluZm89e3VzZXJJbmZvfVxuICAgICAgICAgIGhpZGU9eygpID0+IHRoaXMuX3Nob3dQZXJzb25hbEluZm8oZmFsc2UpfVxuICAgICAgICAgIG1vZGFsVmlzaWJsZT17c2hvd1BlcnNvbmFsSW5mb31cbiAgICAgICAgICBob21lUGFnZUxpc3Q9e2hvbWVQYWdlTGlzdH1cbiAgICAgICAgICBhbGxQcml2YXRlQ2hhdHM9e2FsbFByaXZhdGVDaGF0c31cbiAgICAgICAgICBkZWxldGVIb21lUGFnZUxpc3Q9e2RlbGV0ZUhvbWVQYWdlTGlzdH1cbiAgICAgICAgICBkZWxldGVQcml2YXRlQ2hhdD17ZGVsZXRlUHJpdmF0ZUNoYXR9XG4gICAgICAgIC8+XG4gICAgICAgIHtjaGF0SXRlbSA/IChcbiAgICAgICAgICA8SW5wdXRBcmVhIHNoYXJlRGF0YT17c2hhcmVEYXRhfSBzZW5kTWVzc2FnZT17dGhpcy5zZW5kTWVzc2FnZX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBpbml0QXBwICYmIChcbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xpY2tGbj17ZGVib3VuY2UodGhpcy5hZGRBc1RoZUNvbnRhY3QsIDIwMDAsIHRydWUpfVxuICAgICAgICAgICAgICB2YWx1ZT1cIuWKoOS4uuiBlOezu+S6ulwiXG4gICAgICAgICAgICAgIGRpc2FibGU9e2Rpc2FibGVKb2luQnV0dG9ufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZ2V0IGNoYXRJZCgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMudXNlcl9pZCwgMTApO1xuICB9XG5cbiAgLy8gcXVlc3Rpb246IHdyaXRpbmcgYXMgdGhpcyBpcyBvayA/XG4gIGdldCBmcmllbmRJZCgpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wcm9wcy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgncHJpdmF0ZV9jaGF0LycpWzFdLCAxMCk7XG4gIH1cbn1cblxuUHJpdmF0ZUNoYXQucHJvcFR5cGVzID0ge1xuICBhbGxQcml2YXRlQ2hhdHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1hcCksXG4gIGFsbEdyb3VwQ2hhdHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1hcCksXG4gIGhvbWVQYWdlTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICB1cGRhdGVIb21lUGFnZUxpc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBhZGRQcml2YXRlQ2hhdE1lc3NhZ2VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWRkUHJpdmF0ZUNoYXRJbmZvOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hhcmVEYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkZWxldGVIb21lUGFnZUxpc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBkZWxldGVQcml2YXRlQ2hhdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGluaXRBcHA6IFByb3BUeXBlcy5ib29sLFxufTtcblxuUHJpdmF0ZUNoYXQuZGVmYXVsdFByb3BzID0ge1xuICBhbGxQcml2YXRlQ2hhdHM6IG5ldyBNYXAoKSxcbiAgYWxsR3JvdXBDaGF0czogbmV3IE1hcCgpLFxuICBob21lUGFnZUxpc3Q6IFtdLFxuICB1cGRhdGVIb21lUGFnZUxpc3Q6IHVuZGVmaW5lZCxcbiAgYWRkUHJpdmF0ZUNoYXRNZXNzYWdlczogdW5kZWZpbmVkLFxuICBhZGRQcml2YXRlQ2hhdEluZm86IHVuZGVmaW5lZCxcbiAgc2hhcmVEYXRhOiB1bmRlZmluZWQsXG4gIGRlbGV0ZUhvbWVQYWdlTGlzdCgpIHt9LFxuICBkZWxldGVQcml2YXRlQ2hhdCgpIHt9LFxuICBpbml0QXBwOiBmYWxzZSxcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHtcbiAgdXBkYXRlSG9tZVBhZ2VMaXN0QWN0aW9uLFxuICBkZWxldGVIb21lUGFnZUxpc3RBY3Rpb24sXG59IGZyb20gJy4uL0hvbWVQYWdlTGlzdC9ob21lUGFnZUxpc3RBY3Rpb24nO1xuaW1wb3J0IHtcbiAgYWRkUHJpdmF0ZUNoYXRNZXNzYWdlc0FjdGlvbixcbiAgYWRkUHJpdmF0ZUNoYXRJbmZvQWN0aW9uLFxuICBkZWxldGVQcml2YXRlQ2hhdEFjdGlvbixcbn0gZnJvbSAnLi9wcml2YXRlQ2hhdEFjdGlvbic7XG5pbXBvcnQgUHJpdmF0ZUNoYXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcml2YXRlQ2hhdCc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGFsbFByaXZhdGVDaGF0czogc3RhdGUuYWxsUHJpdmF0ZUNoYXRzU3RhdGUsXG4gIGhvbWVQYWdlTGlzdDogc3RhdGUuaG9tZVBhZ2VMaXN0U3RhdGUsXG4gIHJlbGF0ZWRDdXJyZW50Q2hhdDogc3RhdGUucmVsYXRlZEN1cnJlbnRDaGF0LFxuICBzaGFyZURhdGE6IHN0YXRlLnNoYXJlU3RhdGUsXG4gIGFsbEdyb3VwQ2hhdHM6IHN0YXRlLmFsbEdyb3VwQ2hhdHNTdGF0ZSxcbiAgaW5pdEFwcDogc3RhdGUuaW5pdEFwcFN0YXRlLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGFkZFByaXZhdGVDaGF0TWVzc2FnZXMoYXJnID0ge30pIHtcbiAgICBkaXNwYXRjaChhZGRQcml2YXRlQ2hhdE1lc3NhZ2VzQWN0aW9uKHsgLi4uYXJnIH0pKTtcbiAgfSxcbiAgYWRkUHJpdmF0ZUNoYXRJbmZvKGFyZyA9IHt9KSB7XG4gICAgZGlzcGF0Y2goYWRkUHJpdmF0ZUNoYXRJbmZvQWN0aW9uKHsgLi4uYXJnIH0pKTtcbiAgfSxcbiAgdXBkYXRlSG9tZVBhZ2VMaXN0KGFyZyA9IHt9KSB7XG4gICAgZGlzcGF0Y2godXBkYXRlSG9tZVBhZ2VMaXN0QWN0aW9uKHsgLi4uYXJnIH0pKTtcbiAgfSxcbiAgZGVsZXRlSG9tZVBhZ2VMaXN0KGFyZyA9IHt9KSB7XG4gICAgZGlzcGF0Y2goZGVsZXRlSG9tZVBhZ2VMaXN0QWN0aW9uKHsgLi4uYXJnIH0pKTtcbiAgfSxcbiAgZGVsZXRlUHJpdmF0ZUNoYXQoYXJnID0ge30pIHtcbiAgICBkaXNwYXRjaChkZWxldGVQcml2YXRlQ2hhdEFjdGlvbih7IC4uLmFyZyB9KSk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShQcml2YXRlQ2hhdCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==