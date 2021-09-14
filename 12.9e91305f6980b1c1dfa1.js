(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/CreateGroupModal/styles.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/CreateGroupModal/styles.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".groupModalContent {\n  font-size: 22px;\n  margin-top: 20px;\n  text-align: center; }\n  .groupModalContent div {\n    text-align: left; }\n    .groupModalContent div input, .groupModalContent div textarea {\n      font-size: 14px;\n      outline: none;\n      resize: none;\n      padding-left: 10px;\n      border: 1px solid #fff;\n      color: #999;\n      width: 70%; }\n    .groupModalContent div span {\n      left: 10px;\n      text-align: right;\n      float: left;\n      font-size: 14px;\n      margin-top: 4px;\n      width: 30%; }\n    .groupModalContent div textarea {\n      padding-top: 6px;\n      width: 70%; }\n    .groupModalContent div input::-webkit-input-placeholder, .groupModalContent div textarea::-webkit-input-placeholder {\n      /* WebKit browsers */\n      color: #cccccc; }\n    .groupModalContent div input:-moz-placeholder, .groupModalContent div textarea:-moz-placeholder {\n      /* Mozilla Firefox 4 to 18 */\n      color: #cccccc; }\n    .groupModalContent div input::-moz-placeholder, .groupModalContent div textarea::-moz-placeholder {\n      /* Mozilla Firefox 19+ */\n      color: #cccccc; }\n    .groupModalContent div input:-ms-input-placeholder, .groupModalContent div textarea:-ms-input-placeholder {\n      /* Internet Explorer 10+ */\n      color: #cccccc; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/GroupChat/styles.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/GroupChat/styles.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-wrapper {\n  height: 100%;\n  width: 100%;\n  position: relative; }\n  .chat-wrapper .chat-content-list {\n    height: calc(100% - 100px);\n    padding: 20px 0;\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    overflow-y: auto; }\n    .chat-wrapper .chat-content-list li {\n      padding: 0; }\n  .chat-wrapper .button {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%); }\n\n.groupChatInfoMask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  opacity: 0;\n  z-index: 98; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/GroupChatInfo/styles.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/GroupChatInfo/styles.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chatInformation {\n  height: calc(100% - 50px);\n  width: 200px;\n  position: absolute;\n  top: 50px;\n  right: 0;\n  background-color: #f6f7f9;\n  opacity: 0.97;\n  z-index: 99; }\n  .chatInformation .info {\n    padding: 10px 16px; }\n    .chatInformation .info .noticeTitle {\n      color: #676767;\n      padding-bottom: 10px;\n      font-size: 14px;\n      position: relative; }\n      .chatInformation .info .noticeTitle .iconEditor {\n        position: absolute;\n        right: 10px;\n        font-size: 18px;\n        cursor: pointer; }\n    .chatInformation .info .noticeContent {\n      word-wrap: break-word;\n      height: 60px;\n      overflow: hidden;\n      overflow-y: auto;\n      font-size: 12px; }\n    .chatInformation .info .memberTitle {\n      font-size: 14px;\n      padding-top: 10px;\n      color: #676767;\n      display: flex;\n      justify-content: space-between; }\n      .chatInformation .info .memberTitle .showAllMember {\n        color: #66b3ef;\n        cursor: pointer; }\n  .chatInformation .members {\n    list-style: none;\n    overflow-y: auto;\n    font-size: 18px;\n    height: calc(100% - 190px); }\n    .chatInformation .members .member {\n      padding: 6px 10px;\n      display: flex;\n      align-items: center;\n      cursor: pointer; }\n      .chatInformation .members .member:hover {\n        background-color: #fff; }\n      .chatInformation .members .member .memberName {\n        font-size: 14px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n        width: 120px;\n        padding-left: 10px; }\n  .chatInformation .leave {\n    position: absolute;\n    bottom: 0;\n    border-top: 1px solid #f3eeee;\n    width: 100%;\n    text-align: center;\n    padding: 10px 0;\n    font-size: 14px;\n    color: #e44545;\n    cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/CreateGroupModal/index.js":
/*!**************************************************!*\
  !*** ./src/components/CreateGroupModal/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Modal = __webpack_require__(/*! ../Modal */ "./src/components/Modal/index.js");

var _Modal2 = _interopRequireDefault(_Modal);

__webpack_require__(/*! ./styles.scss */ "./src/components/CreateGroupModal/styles.scss");

var _Notification = __webpack_require__(/*! ../Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var GroupModal = function (_Component) {
  (0, _inherits3.default)(GroupModal, _Component);

  function GroupModal(props) {
    (0, _classCallCheck3.default)(this, GroupModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GroupModal.__proto__ || (0, _getPrototypeOf2.default)(GroupModal)).call(this, props));

    _this.handleChange = function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      _this.setState((0, _defineProperty3.default)({}, name, value));
    };

    _this._confirm = function () {
      var _this$state = _this.state,
          groupName = _this$state.groupName,
          groupNotice = _this$state.groupNotice;

      if (!groupName || !groupNotice) {
        (0, _Notification2.default)('你有空行没填哦', 'error');
        return;
      }
      if (groupName === 'ghChat') {
        (0, _Notification2.default)('这个Group name仅供项目本身使用啦，请用别的Group name', 'error');
        return;
      }
      _this.props.confirm({ groupName: groupName, groupNotice: groupNotice });
    };

    _this.state = {
      groupName: props.defaultGroupName,
      groupNotice: props.defaultGroupNotice
    };
    return _this;
  }

  (0, _createClass3.default)(GroupModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          modalVisible = _props.modalVisible,
          cancel = _props.cancel,
          title = _props.title;
      var _state = this.state,
          groupName = _state.groupName,
          groupNotice = _state.groupNotice;

      return _react2.default.createElement(
        _Modal2.default,
        {
          title: title,
          visible: modalVisible,
          confirm: this._confirm,
          hasCancel: true,
          hasConfirm: true,
          cancel: cancel
        },
        _react2.default.createElement(
          'div',
          { className: 'groupModalContent' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Group name:'
            ),
            _react2.default.createElement('input', {
              name: 'groupName',
              value: groupName,
              onChange: this.handleChange,
              type: 'text',
              placeholder: 'No more than 12 words',
              maxLength: '12'
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'span',
              null,
              'Group announcement:'
            ),
            _react2.default.createElement('textarea', {
              name: 'groupNotice',
              value: groupNotice,
              onChange: this.handleChange,
              rows: '3',
              type: 'text',
              placeholder: 'No more than 60 words',
              maxLength: '60'
            })
          )
        )
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
  return GroupModal;
}(_react.Component);

var _default = GroupModal;
exports.default = _default;


GroupModal.propTypes = {
  modalVisible: _propTypes2.default.bool,
  confirm: _propTypes2.default.func,
  cancel: _propTypes2.default.func,
  title: _propTypes2.default.string,
  defaultGroupName: _propTypes2.default.string,
  defaultGroupNotice: _propTypes2.default.string
};

GroupModal.defaultProps = {
  modalVisible: false,
  confirm: function confirm() {},
  cancel: function cancel() {},

  title: '',
  defaultGroupName: '',
  defaultGroupNotice: ''
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GroupModal, 'GroupModal', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/CreateGroupModal/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/CreateGroupModal/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/CreateGroupModal/styles.scss":
/*!*****************************************************!*\
  !*** ./src/components/CreateGroupModal/styles.scss ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/CreateGroupModal/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/CreateGroupModal/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/CreateGroupModal/styles.scss");

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

/***/ "./src/components/GroupChat/index.js":
/*!*******************************************!*\
  !*** ./src/components/GroupChat/index.js ***!
  \*******************************************/
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

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "./node_modules/babel-runtime/helpers/extends.js");

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ChatHeader = __webpack_require__(/*! ../ChatHeader */ "./src/components/ChatHeader/index.js");

var _ChatHeader2 = _interopRequireDefault(_ChatHeader);

var _InputArea = __webpack_require__(/*! ../InputArea */ "./src/components/InputArea/index.js");

var _InputArea2 = _interopRequireDefault(_InputArea);

var _ChatContentList = __webpack_require__(/*! ../ChatContentList */ "./src/components/ChatContentList/index.js");

var _ChatContentList2 = _interopRequireDefault(_ChatContentList);

var _GroupChatInfo = __webpack_require__(/*! ../GroupChatInfo */ "./src/components/GroupChatInfo/index.js");

var _GroupChatInfo2 = _interopRequireDefault(_GroupChatInfo);

var _Modal = __webpack_require__(/*! ../Modal */ "./src/components/Modal/index.js");

var _Modal2 = _interopRequireDefault(_Modal);

var _ShareModal = __webpack_require__(/*! ../ShareModal */ "./src/components/ShareModal/index.js");

var _ShareModal2 = _interopRequireDefault(_ShareModal);

var _PersonalInfo = __webpack_require__(/*! ../PersonalInfo */ "./src/components/PersonalInfo/index.js");

var _PersonalInfo2 = _interopRequireDefault(_PersonalInfo);

var _Notification = __webpack_require__(/*! ../Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _Chat = __webpack_require__(/*! ../../modules/Chat */ "./src/modules/Chat/index.js");

var _Chat2 = _interopRequireDefault(_Chat);

var _Button = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

__webpack_require__(/*! ./styles.scss */ "./src/components/GroupChat/styles.scss");

var _debounce = __webpack_require__(/*! ../../utils/debounce */ "./src/utils/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var GroupChat = function (_Component) {
  (0, _inherits3.default)(GroupChat, _Component);

  function GroupChat(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, GroupChat);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GroupChat.__proto__ || (0, _getPrototypeOf2.default)(GroupChat)).call(this, props));

    _this.sendMessage = function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var inputMsg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var attachments = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var _this$_userInfo, user_id, avatar, name, github_id, _this$props, allGroupChats, homePageList, updateHomePageList, addGroupMessages, data, response;

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
                _this$props = _this.props, allGroupChats = _this$props.allGroupChats, homePageList = _this$props.homePageList, updateHomePageList = _this$props.updateHomePageList, addGroupMessages = _this$props.addGroupMessages;
                data = {
                  from_user: user_id, // 自己的id
                  avatar: avatar, // 自己的头像
                  name: name,
                  github_id: github_id,
                  groupName: _this.groupName,
                  message: inputMsg === '' ? name + ': [' + (attachments[0].type || 'file') + ']' : name + ': ' + inputMsg, // 消息内容
                  attachments: attachments, // 附件
                  to_group_id: _this.chatId
                  // time: Date.parse(new Date()) / 1000 // 时间
                };

                _this._sendByMe = true;
                _context.next = 8;
                return _request2.default.socketEmitAndGetResponse('sendGroupMsg', data, function (error) {
                  (0, _Notification2.default)('信息Send失败', 'error', 2);
                });

              case 8:
                response = _context.sent;

                addGroupMessages({ allGroupChats: allGroupChats, message: response, groupId: _this.chatId });
                updateHomePageList({ data: response, homePageList: homePageList, myUserId: user_id });

              case 11:
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

    _this.joinGroup = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var _this$props2, allGroupChats, homePageList, updateHomePageList, addGroupMessageAndInfo, response, messages, groupInfo, lastContent;

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
              _this$props2 = _this.props, allGroupChats = _this$props2.allGroupChats, homePageList = _this$props2.homePageList, updateHomePageList = _this$props2.updateHomePageList, addGroupMessageAndInfo = _this$props2.addGroupMessageAndInfo;
              _context2.next = 6;
              return _request2.default.socketEmitAndGetResponse('joinGroup', { userInfo: _this._userInfo, toGroupId: _this.chatId }, function (error) {
                (0, _Notification2.default)('加群失败', 'error', 1.5);
                _this.setState({ disableJoinButton: false });
              });

            case 6:
              response = _context2.sent;
              messages = response.messages, groupInfo = response.groupInfo;
              lastContent = {
                name: '群助手',
                message: '您已加群成功，可以开始聊天啦~',
                time: Date.parse(new Date()) / 1000
              };

              messages.push(lastContent);
              addGroupMessageAndInfo({
                allGroupChats: allGroupChats,
                messages: messages,
                groupId: _this.chatId,
                groupInfo: groupInfo
              });
              updateHomePageList({ data: (0, _extends3.default)({}, lastContent, groupInfo), homePageList: homePageList });

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    _this._showLeaveModal = function () {
      _this.setState(function (state) {
        return { showLeaveGroupModal: !state.showLeaveGroupModal };
      });
    };

    _this.leaveGroup = function () {
      var user_id = _this._userInfo.user_id;
      var _this$props3 = _this.props,
          homePageList = _this$props3.homePageList,
          deleteHomePageList = _this$props3.deleteHomePageList,
          allGroupChats = _this$props3.allGroupChats,
          deleteGroupChat = _this$props3.deleteGroupChat;

      window.socket.emit('leaveGroup', { user_id: user_id, toGroupId: _this.chatId });
      deleteHomePageList({ homePageList: homePageList, chatId: _this.chatId });
      deleteGroupChat({ allGroupChats: allGroupChats, groupId: _this.chatId });
      _this.props.history.push('/');
    };

    _this._clickPersonAvatar = function (user_id) {
      var allGroupChats = _this.props.allGroupChats;

      var _ref3 = allGroupChats.get(_this.chatId) && allGroupChats.get(_this.chatId).groupInfo || {},
          _ref3$members = _ref3.members,
          members = _ref3$members === undefined ? [] : _ref3$members;

      var personalInfo = members.filter(function (member) {
        return member.user_id === user_id;
      })[0];
      if (!members.length || !user_id) return;
      if (!personalInfo) {
        (0, _Notification2.default)('此人已不在群中啦', 'warn', 1.5);
        return;
      }
      _this.setState({ personalInfo: personalInfo }, function () {
        _this._showPersonalInfo(true);
      });
    };

    _this._showShareModal = function () {
      _this.setState(function (state) {
        return { showShareModal: !state.showShareModal };
      });
    };

    _this._sendByMe = false;
    _this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    _this.state = {
      groupMsgAndInfo: {},
      showGroupChatInfo: false,
      showPersonalInfo: false,
      personalInfo: {},
      showLeaveGroupModal: false,
      showShareModal: false,
      disableJoinButton: false
    };
    _this._chat = new _Chat2.default();
    return _this;
  }

  (0, _createClass3.default)(GroupChat, [{
    key: '_showGroupChatInfo',
    value: function _showGroupChatInfo(value) {
      this.setState({ showGroupChatInfo: value });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var relatedCurrentChat = nextProps.relatedCurrentChat,
          match = nextProps.match;

      if (relatedCurrentChat || match.params.to_group_id !== this.chatId || this._sendByMe) {
        this._sendByMe = false;
        return true;
      }

      var showGroupChatInfo = nextState.showGroupChatInfo,
          showPersonalInfo = nextState.showPersonalInfo,
          showLeaveGroupModal = nextState.showLeaveGroupModal;

      if (showGroupChatInfo !== this.state.showGroupChatInfo || showPersonalInfo !== this.state.showPersonalInfo || showLeaveGroupModal !== this.state.showLeaveGroupModal) return true;

      return false;
    }
  }, {
    key: '_showPersonalInfo',
    value: function _showPersonalInfo(value) {
      this.setState({ showPersonalInfo: value });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      var allGroupChats = this.props.allGroupChats;

      var chatItem = allGroupChats && allGroupChats.get(this.chatId);
      // (产品设计) 当查找没加过的群，点击去没群内容，请求出群内容，避免不了解而后悔加群
      if (!chatItem && window.socket) {
        window.socket.emit('getOneGroupItem', { groupId: this.chatId, start: 1 }, function (groupMsgAndInfo) {
          _this3.setState({ groupMsgAndInfo: groupMsgAndInfo });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          allGroupChats = _props.allGroupChats,
          updateGroupTitleNotice = _props.updateGroupTitleNotice,
          updateListGroupName = _props.updateListGroupName,
          homePageList = _props.homePageList,
          shareData = _props.shareData,
          deleteHomePageList = _props.deleteHomePageList,
          allPrivateChats = _props.allPrivateChats,
          deletePrivateChat = _props.deletePrivateChat,
          initApp = _props.initApp;
      var _state = this.state,
          groupMsgAndInfo = _state.groupMsgAndInfo,
          showGroupChatInfo = _state.showGroupChatInfo,
          showLeaveGroupModal = _state.showLeaveGroupModal,
          personalInfo = _state.personalInfo,
          showPersonalInfo = _state.showPersonalInfo,
          showShareModal = _state.showShareModal,
          disableJoinButton = _state.disableJoinButton;

      if (!allGroupChats && !allGroupChats.size || !this.chatId) return null;
      var chatItem = allGroupChats.get(this.chatId);
      var messages = chatItem ? chatItem.messages : groupMsgAndInfo.messages;
      var groupInfo = chatItem ? chatItem.groupInfo : groupMsgAndInfo.groupInfo;
      return _react2.default.createElement(
        'div',
        { className: 'chat-wrapper' },
        _react2.default.createElement(_ChatHeader2.default, {
          title: groupInfo && groupInfo.name || '----',
          chatType: 'group',
          hasShowed: showGroupChatInfo,
          showShareModal: this._showShareModal,
          showGroupChatInfo: function showGroupChatInfo(value) {
            return _this4._showGroupChatInfo(value);
          },
          showShareIcon: !!chatItem
        }),
        _react2.default.createElement(_Modal2.default, {
          title: 'Leave this group?',
          visible: showLeaveGroupModal,
          confirm: this.leaveGroup,
          hasCancel: true,
          hasConfirm: true,
          cancel: this._showLeaveModal
        }),
        _react2.default.createElement(_ShareModal2.default, {
          title: 'Share this group with',
          modalVisible: showShareModal,
          chatId: this.chatId,
          showShareModal: this._showShareModal,
          cancel: this._showShareModal,
          allGroupChats: allGroupChats,
          homePageList: homePageList
        }),
        _react2.default.createElement(_PersonalInfo2.default, {
          userInfo: personalInfo,
          hide: function hide() {
            return _this4._showPersonalInfo(false);
          },
          homePageList: homePageList,
          allPrivateChats: allPrivateChats,
          deleteHomePageList: deleteHomePageList,
          deletePrivateChat: deletePrivateChat,
          modalVisible: chatItem && showPersonalInfo
        }),
        _react2.default.createElement(_ChatContentList2.default, {
          chat: this._chat,
          chats: allGroupChats,
          ChatContent: messages,
          shouldScrollToFetchData: !!chatItem,
          chatId: this.chatId,
          chatType: 'groupChat',
          clickAvatar: function clickAvatar(user_id) {
            return _this4._clickPersonAvatar(user_id);
          }
        }),
        showGroupChatInfo && _react2.default.createElement('div', { onClick: function onClick() {
            return _this4._showGroupChatInfo(false);
          }, className: 'groupChatInfoMask' }),
        showGroupChatInfo && _react2.default.createElement(_GroupChatInfo2.default, {
          groupInfo: groupInfo,
          allGroupChats: allGroupChats,
          homePageList: homePageList,
          leaveGroup: this._showLeaveModal,
          clickMember: function clickMember(user_id) {
            return _this4._clickPersonAvatar(user_id);
          },
          updateGroupTitleNotice: updateGroupTitleNotice,
          updateListGroupName: updateListGroupName,
          chatId: this.chatId
        }),
        chatItem ? _react2.default.createElement(_InputArea2.default, {
          shareData: shareData,
          sendMessage: this.sendMessage,
          groupMembers: groupInfo.members
        }) : initApp && _react2.default.createElement(_Button2.default, {
          clickFn: (0, _debounce2.default)(this.joinGroup, 2000, true),
          value: '\u52A0\u5165\u7FA4\u804A',
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
      // eslint-disable-next-line react/prop-types
      return this.props.match.params.to_group_id;
    }
  }]);
  return GroupChat;
}(_react.Component);

var _default = (0, _reactRouterDom.withRouter)(GroupChat);

exports.default = _default;


GroupChat.propTypes = {
  allGroupChats: _propTypes2.default.instanceOf(_map2.default),
  allPrivateChats: _propTypes2.default.instanceOf(_map2.default),
  homePageList: _propTypes2.default.array,
  updateHomePageList: _propTypes2.default.func,
  addGroupMessages: _propTypes2.default.func,
  addGroupMessageAndInfo: _propTypes2.default.func,
  deleteHomePageList: _propTypes2.default.func,
  deleteGroupChat: _propTypes2.default.func,
  updateGroupTitleNotice: _propTypes2.default.func,
  updateListGroupName: _propTypes2.default.func,
  shareData: _propTypes2.default.object,
  deletePrivateChat: _propTypes2.default.func,
  initApp: _propTypes2.default.bool
};

GroupChat.defaultProps = {
  allGroupChats: new _map2.default(),
  allPrivateChats: new _map2.default(),
  homePageList: [],
  updateHomePageList: function updateHomePageList() {},
  addGroupMessages: function addGroupMessages() {},
  addGroupMessageAndInfo: function addGroupMessageAndInfo() {},
  deleteHomePageList: function deleteHomePageList() {},
  deleteGroupChat: function deleteGroupChat() {},
  updateGroupTitleNotice: function updateGroupTitleNotice() {},
  updateListGroupName: function updateListGroupName() {},

  shareData: undefined,
  deletePrivateChat: function deletePrivateChat() {},

  initApp: false
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GroupChat, 'GroupChat', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/GroupChat/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/GroupChat/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/GroupChat/styles.scss":
/*!**********************************************!*\
  !*** ./src/components/GroupChat/styles.scss ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/GroupChat/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/GroupChat/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/GroupChat/styles.scss");

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

/***/ "./src/components/GroupChatInfo/index.js":
/*!***********************************************!*\
  !*** ./src/components/GroupChatInfo/index.js ***!
  \***********************************************/
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

var _UserAvatar = __webpack_require__(/*! ../UserAvatar */ "./src/components/UserAvatar/index.js");

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

__webpack_require__(/*! ./styles.scss */ "./src/components/GroupChatInfo/styles.scss");

var _CreateGroupModal = __webpack_require__(/*! ../CreateGroupModal */ "./src/components/CreateGroupModal/index.js");

var _CreateGroupModal2 = _interopRequireDefault(_CreateGroupModal);

var _Notification = __webpack_require__(/*! ../Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var GroupChatInfo = function (_Component) {
  (0, _inherits3.default)(GroupChatInfo, _Component);

  function GroupChatInfo(props) {
    (0, _classCallCheck3.default)(this, GroupChatInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GroupChatInfo.__proto__ || (0, _getPrototypeOf2.default)(GroupChatInfo)).call(this, props));

    _this._clickMember = function (user_id) {
      _this.props.clickMember(user_id);
    };

    _this._openEditorInfoModal = function () {
      _this.setState({ modalVisible: true });
    };

    _this.GroupMemberRender = function (groupMember) {
      return _react2.default.createElement(
        'ul',
        { className: 'members' },
        groupMember.length > 0 && groupMember.map(function (e) {
          return (!_this.state.justShowOnlineMember || !!e.status) && _react2.default.createElement(
            'li',
            { key: e.user_id, className: 'member', onClick: function onClick() {
                return _this._clickMember(e.user_id);
              } },
            _react2.default.createElement(_UserAvatar2.default, {
              src: e.avatar,
              name: e.name,
              isGray: !e.status,
              showLogo: !!e.github_id
            }),
            _react2.default.createElement(
              'span',
              { className: 'memberName' },
              e.name
            )
          );
        })
      );
    };

    _this._confirm = function (_ref) {
      var groupName = _ref.groupName,
          groupNotice = _ref.groupNotice;

      _this._closeModal();
      _this._updateGroupInfo({ groupName: groupName, groupNotice: groupNotice });
    };

    _this._closeModal = function () {
      _this.setState({
        modalVisible: false
      });
    };

    _this._updateGroupInfo = function (_ref2) {
      var groupName = _ref2.groupName,
          groupNotice = _ref2.groupNotice;
      var _this$props = _this.props,
          groupInfo = _this$props.groupInfo,
          allGroupChats = _this$props.allGroupChats,
          updateGroupTitleNotice = _this$props.updateGroupTitleNotice,
          updateListGroupName = _this$props.updateListGroupName,
          homePageList = _this$props.homePageList;
      var to_group_id = groupInfo.to_group_id;

      var data = {
        name: groupName,
        group_notice: groupNotice,
        to_group_id: to_group_id
      };
      window.socket.emit('updateGroupInfo', data, function (res) {
        updateGroupTitleNotice({
          allGroupChats: allGroupChats,
          groupNotice: groupNotice,
          groupName: groupName,
          groupId: to_group_id
        });
        updateListGroupName({
          homePageList: homePageList,
          name: groupName,
          to_group_id: to_group_id
        });
        (0, _Notification2.default)(res, 'success');
        _this._closeModal();
      });
    };

    _this._showAllMember = function () {
      _this.setState(function (_ref3) {
        var justShowOnlineMember = _ref3.justShowOnlineMember;
        return {
          justShowOnlineMember: !justShowOnlineMember
        };
      });
    };

    _this.state = {
      groupMember: [],
      onlineNumber: '--',
      modalVisible: false,
      justShowOnlineMember: true
    };
    _this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    _this._isCreator = _this._userInfo.user_id === parseInt(props.groupInfo.creator_id, 10);
    return _this;
  }

  (0, _createClass3.default)(GroupChatInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var groupId = this.props.chatId;
      window.socket.emit('getGroupMember', groupId, function (data) {
        data.sort(function (a, b) {
          return b.status - a.status;
        });
        var onlineMember = data.filter(function (e) {
          return e.status === 1;
        });
        _this2.setState({
          groupMember: data,
          onlineNumber: onlineMember.length
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          groupMember = _state.groupMember,
          onlineNumber = _state.onlineNumber,
          modalVisible = _state.modalVisible,
          justShowOnlineMember = _state.justShowOnlineMember;
      var _props = this.props,
          groupInfo = _props.groupInfo,
          leaveGroup = _props.leaveGroup;

      return _react2.default.createElement(
        'div',
        { className: 'chatInformation' },
        _react2.default.createElement(_CreateGroupModal2.default, {
          title: 'Modify group info',
          modalVisible: modalVisible,
          confirm: function confirm(args) {
            return _this3._confirm(args);
          },
          hasCancel: true,
          hasConfirm: true,
          cancel: this._closeModal,
          defaultGroupName: groupInfo.name,
          defaultGroupNotice: groupInfo.group_notice
        }),
        _react2.default.createElement(
          'div',
          { className: 'info' },
          _react2.default.createElement(
            'p',
            { className: 'noticeTitle' },
            'Group announcement',
            this._isCreator && _react2.default.createElement(
              'svg',
              {
                onClick: this._openEditorInfoModal,
                className: 'icon iconEditor',
                'aria-hidden': 'true'
              },
              _react2.default.createElement('use', { xlinkHref: '#icon-editor' })
            )
          ),
          _react2.default.createElement(
            'p',
            { className: 'noticeContent' },
            groupInfo.group_notice
          ),
          _react2.default.createElement(
            'p',
            { className: 'memberTitle' },
            'online users: ' + onlineNumber,
            _react2.default.createElement(
              'span',
              { className: 'showAllMember', onClick: this._showAllMember },
              '' + (justShowOnlineMember ? 'view all' : 'Just watch online')
            )
          )
        ),
        this.GroupMemberRender(groupMember),
        _react2.default.createElement(
          'p',
          { className: 'leave', onClick: leaveGroup },
          'Exit group chat'
        )
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
    key: 'userInfo',
    get: function get() {
      return JSON.parse(localStorage.getItem('userInfo'));
    }
  }]);
  return GroupChatInfo;
}(_react.Component);

var _default = GroupChatInfo;
exports.default = _default;


GroupChatInfo.propTypes = {
  leaveGroup: _propTypes2.default.func.isRequired,
  chatId: _propTypes2.default.string.isRequired,
  groupInfo: _propTypes2.default.object,
  updateGroupTitleNotice: _propTypes2.default.func,
  updateListGroupName: _propTypes2.default.func,
  allGroupChats: _propTypes2.default.instanceOf(_map2.default),
  homePageList: _propTypes2.default.array
};

GroupChatInfo.defaultProps = {
  groupInfo: {},
  updateGroupTitleNotice: function updateGroupTitleNotice() {},
  updateListGroupName: function updateListGroupName() {},

  allGroupChats: new _map2.default(),
  homePageList: []
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GroupChatInfo, 'GroupChatInfo', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/GroupChatInfo/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/GroupChatInfo/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/GroupChatInfo/styles.scss":
/*!**************************************************!*\
  !*** ./src/components/GroupChatInfo/styles.scss ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/GroupChatInfo/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/GroupChatInfo/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/GroupChatInfo/styles.scss");

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

/***/ "./src/containers/GroupChatPage/index.js":
/*!***********************************************!*\
  !*** ./src/containers/GroupChatPage/index.js ***!
  \***********************************************/
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

var _groupChatAction = __webpack_require__(/*! ./groupChatAction */ "./src/containers/GroupChatPage/groupChatAction.js");

var _privateChatAction = __webpack_require__(/*! ../PrivateChatPage/privateChatAction */ "./src/containers/PrivateChatPage/privateChatAction.js");

var _GroupChat = __webpack_require__(/*! ../../components/GroupChat */ "./src/components/GroupChat/index.js");

var _GroupChat2 = _interopRequireDefault(_GroupChat);

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
    allGroupChats: state.allGroupChatsState,
    allPrivateChats: state.allPrivateChatsState,
    homePageList: state.homePageListState,
    relatedCurrentChat: state.relatedCurrentChat,
    initApp: state.initAppState,
    shareData: state.shareState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addGroupMessageAndInfo: function addGroupMessageAndInfo() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _groupChatAction.addGroupMessageAndInfoAction)((0, _extends3.default)({}, arg)));
    },
    addGroupMessages: function addGroupMessages() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _groupChatAction.addGroupMessagesAction)((0, _extends3.default)({}, arg)));
    },
    deleteGroupChat: function deleteGroupChat() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _groupChatAction.deleteGroupChatAction)((0, _extends3.default)({}, arg)));
    },
    addGroupInfo: function addGroupInfo() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _groupChatAction.addGroupInfoAction)((0, _extends3.default)({}, arg)));
    },
    updateHomePageList: function updateHomePageList() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _homePageListAction.updateHomePageListAction)((0, _extends3.default)({}, arg)));
    },
    deleteHomePageList: function deleteHomePageList() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _homePageListAction.deleteHomePageListAction)((0, _extends3.default)({}, arg)));
    },
    updateGroupTitleNotice: function updateGroupTitleNotice() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _groupChatAction.updateGroupTitleNoticeAction)((0, _extends3.default)({}, arg)));
    },
    updateListGroupName: function updateListGroupName() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _homePageListAction.updateListGroupNameAction)((0, _extends3.default)({}, arg)));
    },
    deletePrivateChat: function deletePrivateChat() {
      var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      dispatch((0, _privateChatAction.deletePrivateChatAction)((0, _extends3.default)({}, arg)));
    }
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_GroupChat2.default));

exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/GroupChatPage/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/GroupChatPage/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/GroupChatPage/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DcmVhdGVHcm91cE1vZGFsL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyb3VwQ2hhdC9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Hcm91cENoYXRJbmZvL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NyZWF0ZUdyb3VwTW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3JlYXRlR3JvdXBNb2RhbC9zdHlsZXMuc2Nzcz84ZTY0Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyb3VwQ2hhdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Hcm91cENoYXQvc3R5bGVzLnNjc3M/MjgwNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Hcm91cENoYXRJbmZvL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0dyb3VwQ2hhdEluZm8vc3R5bGVzLnNjc3M/ZjA2NiIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9Hcm91cENoYXRQYWdlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdyb3VwTW9kYWwiLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2V0U3RhdGUiLCJfY29uZmlybSIsInN0YXRlIiwiZ3JvdXBOYW1lIiwiZ3JvdXBOb3RpY2UiLCJjb25maXJtIiwiZGVmYXVsdEdyb3VwTmFtZSIsImRlZmF1bHRHcm91cE5vdGljZSIsIm1vZGFsVmlzaWJsZSIsImNhbmNlbCIsInRpdGxlIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsImZ1bmMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJHcm91cENoYXQiLCJzZW5kTWVzc2FnZSIsImlucHV0TXNnIiwiYXR0YWNobWVudHMiLCJ0cmltIiwibGVuZ3RoIiwiX3VzZXJJbmZvIiwidXNlcl9pZCIsImF2YXRhciIsImdpdGh1Yl9pZCIsImFsbEdyb3VwQ2hhdHMiLCJob21lUGFnZUxpc3QiLCJ1cGRhdGVIb21lUGFnZUxpc3QiLCJhZGRHcm91cE1lc3NhZ2VzIiwiZGF0YSIsImZyb21fdXNlciIsIm1lc3NhZ2UiLCJ0eXBlIiwidG9fZ3JvdXBfaWQiLCJjaGF0SWQiLCJfc2VuZEJ5TWUiLCJyZXF1ZXN0Iiwic29ja2V0RW1pdEFuZEdldFJlc3BvbnNlIiwicmVzcG9uc2UiLCJncm91cElkIiwibXlVc2VySWQiLCJqb2luR3JvdXAiLCJkaXNhYmxlSm9pbkJ1dHRvbiIsImFkZEdyb3VwTWVzc2FnZUFuZEluZm8iLCJ1c2VySW5mbyIsInRvR3JvdXBJZCIsIm1lc3NhZ2VzIiwiZ3JvdXBJbmZvIiwibGFzdENvbnRlbnQiLCJ0aW1lIiwiRGF0ZSIsInBhcnNlIiwicHVzaCIsIl9zaG93TGVhdmVNb2RhbCIsInNob3dMZWF2ZUdyb3VwTW9kYWwiLCJsZWF2ZUdyb3VwIiwiZGVsZXRlSG9tZVBhZ2VMaXN0IiwiZGVsZXRlR3JvdXBDaGF0Iiwid2luZG93Iiwic29ja2V0IiwiZW1pdCIsImhpc3RvcnkiLCJfY2xpY2tQZXJzb25BdmF0YXIiLCJnZXQiLCJtZW1iZXJzIiwicGVyc29uYWxJbmZvIiwiZmlsdGVyIiwibWVtYmVyIiwiX3Nob3dQZXJzb25hbEluZm8iLCJfc2hvd1NoYXJlTW9kYWwiLCJzaG93U2hhcmVNb2RhbCIsIkpTT04iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ3JvdXBNc2dBbmRJbmZvIiwic2hvd0dyb3VwQ2hhdEluZm8iLCJzaG93UGVyc29uYWxJbmZvIiwiX2NoYXQiLCJDaGF0IiwibmV4dFByb3BzIiwibmV4dFN0YXRlIiwicmVsYXRlZEN1cnJlbnRDaGF0IiwibWF0Y2giLCJwYXJhbXMiLCJjaGF0SXRlbSIsInN0YXJ0IiwidXBkYXRlR3JvdXBUaXRsZU5vdGljZSIsInVwZGF0ZUxpc3RHcm91cE5hbWUiLCJzaGFyZURhdGEiLCJhbGxQcml2YXRlQ2hhdHMiLCJkZWxldGVQcml2YXRlQ2hhdCIsImluaXRBcHAiLCJzaXplIiwiX3Nob3dHcm91cENoYXRJbmZvIiwiaW5zdGFuY2VPZiIsImFycmF5Iiwib2JqZWN0IiwidW5kZWZpbmVkIiwiR3JvdXBDaGF0SW5mbyIsIl9jbGlja01lbWJlciIsImNsaWNrTWVtYmVyIiwiX29wZW5FZGl0b3JJbmZvTW9kYWwiLCJHcm91cE1lbWJlclJlbmRlciIsImdyb3VwTWVtYmVyIiwibWFwIiwianVzdFNob3dPbmxpbmVNZW1iZXIiLCJlIiwic3RhdHVzIiwiX2Nsb3NlTW9kYWwiLCJfdXBkYXRlR3JvdXBJbmZvIiwiZ3JvdXBfbm90aWNlIiwicmVzIiwiX3Nob3dBbGxNZW1iZXIiLCJvbmxpbmVOdW1iZXIiLCJfaXNDcmVhdG9yIiwicGFyc2VJbnQiLCJjcmVhdG9yX2lkIiwic29ydCIsImEiLCJiIiwib25saW5lTWVtYmVyIiwiYXJncyIsImlzUmVxdWlyZWQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJhbGxHcm91cENoYXRzU3RhdGUiLCJhbGxQcml2YXRlQ2hhdHNTdGF0ZSIsImhvbWVQYWdlTGlzdFN0YXRlIiwiaW5pdEFwcFN0YXRlIiwic2hhcmVTdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFyZyIsImRpc3BhdGNoIiwiYWRkR3JvdXBJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIsb0JBQW9CLHFCQUFxQix1QkFBdUIsRUFBRSw0QkFBNEIsdUJBQXVCLEVBQUUscUVBQXFFLHdCQUF3QixzQkFBc0IscUJBQXFCLDJCQUEyQiwrQkFBK0Isb0JBQW9CLG1CQUFtQixFQUFFLG1DQUFtQyxtQkFBbUIsMEJBQTBCLG9CQUFvQix3QkFBd0Isd0JBQXdCLG1CQUFtQixFQUFFLHVDQUF1Qyx5QkFBeUIsbUJB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Z0NBYVQ7QUFBQSxVQUFWdUcsR0FBVSx1RUFBSixFQUFJOztBQUMzQkMsZUFBUyw2RUFBOEJELEdBQTlCLEVBQVQ7QUFDRCxLQWZxQztBQWdCdEMxRSxzQkFoQnNDLGdDQWdCVDtBQUFBLFVBQVYwRSxHQUFVLHVFQUFKLEVBQUk7O0FBQzNCQyxlQUFTLDZFQUE4QkQsR0FBOUIsRUFBVDtBQUNELEtBbEJxQztBQW1CdEM1QywwQkFuQnNDLG9DQW1CTDtBQUFBLFVBQVY0QyxHQUFVLHVFQUFKLEVBQUk7O0FBQy9CQyxlQUFTLDhFQUFrQ0QsR0FBbEMsRUFBVDtBQUNELEtBckJxQztBQXNCdEMzQyx1QkF0QnNDLGlDQXNCUjtBQUFBLFVBQVYyQyxHQUFVLHVFQUFKLEVBQUk7O0FBQzVCQyxlQUFTLDhFQUErQkQsR0FBL0IsRUFBVDtBQUNELEtBeEJxQztBQXlCdEN4QyxxQkF6QnNDLCtCQXlCVjtBQUFBLFVBQVZ3QyxHQUFVLHVFQUFKLEVBQUk7O0FBQzFCQyxlQUFTLDJFQUE2QkQsR0FBN0IsRUFBVDtBQUNEO0FBM0JxQyxHQUFiO0FBQUEsQ0FBM0I7O2VBOEJlLGdDQUFXLHlCQUFRUCxlQUFSLEVBQXlCTSxrQkFBekIsRUFBNkNsSCxtQkFBN0MsQ0FBWCxDOzs7Ozs7Ozs7Ozs7MEJBdkNUNEcsZTswQkFTQU0sa0IiLCJmaWxlIjoiMTIuOWU5MTMwNWY2OTgwYjFjMWRmYTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ncm91cE1vZGFsQ29udGVudCB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IHtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgICAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IGlucHV0LCAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IHRleHRhcmVhIHtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICAgICAgY29sb3I6ICM5OTk7XFxuICAgICAgd2lkdGg6IDcwJTsgfVxcbiAgICAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IHNwYW4ge1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcXG4gICAgICB3aWR0aDogMzAlOyB9XFxuICAgIC5ncm91cE1vZGFsQ29udGVudCBkaXYgdGV4dGFyZWEge1xcbiAgICAgIHBhZGRpbmctdG9wOiA2cHg7XFxuICAgICAgd2lkdGg6IDcwJTsgfVxcbiAgICAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLCAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICAvKiBXZWJLaXQgYnJvd3NlcnMgKi9cXG4gICAgICBjb2xvcjogI2NjY2NjYzsgfVxcbiAgICAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IGlucHV0Oi1tb3otcGxhY2Vob2xkZXIsIC5ncm91cE1vZGFsQ29udGVudCBkaXYgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7XFxuICAgICAgLyogTW96aWxsYSBGaXJlZm94IDQgdG8gMTggKi9cXG4gICAgICBjb2xvcjogI2NjY2NjYzsgfVxcbiAgICAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IGlucHV0OjotbW96LXBsYWNlaG9sZGVyLCAuZ3JvdXBNb2RhbENvbnRlbnQgZGl2IHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHtcXG4gICAgICAvKiBNb3ppbGxhIEZpcmVmb3ggMTkrICovXFxuICAgICAgY29sb3I6ICNjY2NjY2M7IH1cXG4gICAgLmdyb3VwTW9kYWxDb250ZW50IGRpdiBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIC5ncm91cE1vZGFsQ29udGVudCBkaXYgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXG4gICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cXG4gICAgICBjb2xvcjogI2NjY2NjYzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNoYXQtd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmNoYXQtd3JhcHBlciAuY2hhdC1jb250ZW50LWxpc3Qge1xcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XFxuICAgIC5jaGF0LXdyYXBwZXIgLmNoYXQtY29udGVudC1saXN0IGxpIHtcXG4gICAgICBwYWRkaW5nOiAwOyB9XFxuICAuY2hhdC13cmFwcGVyIC5idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpOyB9XFxuXFxuLmdyb3VwQ2hhdEluZm9NYXNrIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBvcGFjaXR5OiAwO1xcbiAgei1pbmRleDogOTg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jaGF0SW5mb3JtYXRpb24ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTBweDtcXG4gIHJpZ2h0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjdmOTtcXG4gIG9wYWNpdHk6IDAuOTc7XFxuICB6LWluZGV4OiA5OTsgfVxcbiAgLmNoYXRJbmZvcm1hdGlvbiAuaW5mbyB7XFxuICAgIHBhZGRpbmc6IDEwcHggMTZweDsgfVxcbiAgICAuY2hhdEluZm9ybWF0aW9uIC5pbmZvIC5ub3RpY2VUaXRsZSB7XFxuICAgICAgY29sb3I6ICM2NzY3Njc7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgIC5jaGF0SW5mb3JtYXRpb24gLmluZm8gLm5vdGljZVRpdGxlIC5pY29uRWRpdG9yIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHJpZ2h0OiAxMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5jaGF0SW5mb3JtYXRpb24gLmluZm8gLm5vdGljZUNvbnRlbnQge1xcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgICAuY2hhdEluZm9ybWF0aW9uIC5pbmZvIC5tZW1iZXJUaXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgIGNvbG9yOiAjNjc2NzY3O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgLmNoYXRJbmZvcm1hdGlvbiAuaW5mbyAubWVtYmVyVGl0bGUgLnNob3dBbGxNZW1iZXIge1xcbiAgICAgICAgY29sb3I6ICM2NmIzZWY7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5jaGF0SW5mb3JtYXRpb24gLm1lbWJlcnMge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTkwcHgpOyB9XFxuICAgIC5jaGF0SW5mb3JtYXRpb24gLm1lbWJlcnMgLm1lbWJlciB7XFxuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgIC5jaGF0SW5mb3JtYXRpb24gLm1lbWJlcnMgLm1lbWJlcjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XFxuICAgICAgLmNoYXRJbmZvcm1hdGlvbiAubWVtYmVycyAubWVtYmVyIC5tZW1iZXJOYW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICB3aWR0aDogMTIwcHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7IH1cXG4gIC5jaGF0SW5mb3JtYXRpb24gLmxlYXZlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjNlZWVlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY29sb3I6ICNlNDQ1NDU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL01vZGFsJztcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgbm90aWZpY2F0aW9uIGZyb20gJy4uL05vdGlmaWNhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwTW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ3JvdXBOYW1lOiBwcm9wcy5kZWZhdWx0R3JvdXBOYW1lLFxuICAgICAgZ3JvdXBOb3RpY2U6IHByb3BzLmRlZmF1bHRHcm91cE5vdGljZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGV2ZW50LnRhcmdldDtcbiAgICB0aGlzLnNldFN0YXRlKHsgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBfY29uZmlybSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdyb3VwTmFtZSwgZ3JvdXBOb3RpY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKCFncm91cE5hbWUgfHwgIWdyb3VwTm90aWNlKSB7XG4gICAgICBub3RpZmljYXRpb24oJ+S9oOacieepuuihjOayoeWhq+WTpicsICdlcnJvcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZ3JvdXBOYW1lID09PSAnZ2hDaGF0Jykge1xuICAgICAgbm90aWZpY2F0aW9uKCfov5nkuKpHcm91cCBuYW1l5LuF5L6b6aG555uu5pys6Lqr5L2/55So5ZWm77yM6K+355So5Yir55qER3JvdXAgbmFtZScsICdlcnJvcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLmNvbmZpcm0oeyBncm91cE5hbWUsIGdyb3VwTm90aWNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG1vZGFsVmlzaWJsZSwgY2FuY2VsLCB0aXRsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGdyb3VwTmFtZSwgZ3JvdXBOb3RpY2UgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIHZpc2libGU9e21vZGFsVmlzaWJsZX1cbiAgICAgICAgY29uZmlybT17dGhpcy5fY29uZmlybX1cbiAgICAgICAgaGFzQ2FuY2VsXG4gICAgICAgIGhhc0NvbmZpcm1cbiAgICAgICAgY2FuY2VsPXtjYW5jZWx9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBNb2RhbENvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHNwYW4+R3JvdXAgbmFtZTo8L3NwYW4+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgbmFtZT1cImdyb3VwTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtncm91cE5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIG1vcmUgdGhhbiAxMiB3b3Jkc1wiXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjEyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzcGFuPkdyb3VwIGFubm91bmNlbWVudDo8L3NwYW4+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgbmFtZT1cImdyb3VwTm90aWNlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2dyb3VwTm90aWNlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5vIG1vcmUgdGhhbiA2MCB3b3Jkc1wiXG4gICAgICAgICAgICAgIG1heExlbmd0aD1cIjYwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICApO1xuICB9XG59XG5cbkdyb3VwTW9kYWwucHJvcFR5cGVzID0ge1xuICBtb2RhbFZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBjb25maXJtOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRHcm91cE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRHcm91cE5vdGljZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbkdyb3VwTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBtb2RhbFZpc2libGU6IGZhbHNlLFxuICBjb25maXJtKCkge30sXG4gIGNhbmNlbCgpIHt9LFxuICB0aXRsZTogJycsXG4gIGRlZmF1bHRHcm91cE5hbWU6ICcnLFxuICBkZWZhdWx0R3JvdXBOb3RpY2U6ICcnLFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENoYXRIZWFkZXIgZnJvbSAnLi4vQ2hhdEhlYWRlcic7XG5pbXBvcnQgSW5wdXRBcmVhIGZyb20gJy4uL0lucHV0QXJlYSc7XG5pbXBvcnQgQ2hhdENvbnRlbnRMaXN0IGZyb20gJy4uL0NoYXRDb250ZW50TGlzdCc7XG5pbXBvcnQgR3JvdXBDaGF0SW5mbyBmcm9tICcuLi9Hcm91cENoYXRJbmZvJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XG5pbXBvcnQgU2hhcmVNb2RhbCBmcm9tICcuLi9TaGFyZU1vZGFsJztcbmltcG9ydCBQZXJzb25hbEluZm8gZnJvbSAnLi4vUGVyc29uYWxJbmZvJztcbmltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi4vTm90aWZpY2F0aW9uJztcbmltcG9ydCBDaGF0IGZyb20gJy4uLy4uL21vZHVsZXMvQ2hhdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL0J1dHRvbic7XG5pbXBvcnQgcmVxdWVzdCBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGVib3VuY2UnO1xuXG5jbGFzcyBHcm91cENoYXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLl9zZW5kQnlNZSA9IGZhbHNlO1xuICAgIHRoaXMuX3VzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKSk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGdyb3VwTXNnQW5kSW5mbzoge30sXG4gICAgICBzaG93R3JvdXBDaGF0SW5mbzogZmFsc2UsXG4gICAgICBzaG93UGVyc29uYWxJbmZvOiBmYWxzZSxcbiAgICAgIHBlcnNvbmFsSW5mbzoge30sXG4gICAgICBzaG93TGVhdmVHcm91cE1vZGFsOiBmYWxzZSxcbiAgICAgIHNob3dTaGFyZU1vZGFsOiBmYWxzZSxcbiAgICAgIGRpc2FibGVKb2luQnV0dG9uOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuX2NoYXQgPSBuZXcgQ2hhdCgpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2UgPSBhc3luYyAoaW5wdXRNc2cgPSAnJywgYXR0YWNobWVudHMgPSBbXSkgPT4ge1xuICAgIGlmIChpbnB1dE1zZy50cmltKCkgPT09ICcnICYmIGF0dGFjaG1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHsgdXNlcl9pZCwgYXZhdGFyLCBuYW1lLCBnaXRodWJfaWQgfSA9IHRoaXMuX3VzZXJJbmZvO1xuICAgIGNvbnN0IHsgYWxsR3JvdXBDaGF0cywgaG9tZVBhZ2VMaXN0LCB1cGRhdGVIb21lUGFnZUxpc3QsIGFkZEdyb3VwTWVzc2FnZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGZyb21fdXNlcjogdXNlcl9pZCwgLy8g6Ieq5bex55qEaWRcbiAgICAgIGF2YXRhciwgLy8g6Ieq5bex55qE5aS05YOPXG4gICAgICBuYW1lLFxuICAgICAgZ2l0aHViX2lkLFxuICAgICAgZ3JvdXBOYW1lOiB0aGlzLmdyb3VwTmFtZSxcbiAgICAgIG1lc3NhZ2U6XG4gICAgICAgIGlucHV0TXNnID09PSAnJyA/IGAke25hbWV9OiBbJHthdHRhY2htZW50c1swXS50eXBlIHx8ICdmaWxlJ31dYCA6IGAke25hbWV9OiAke2lucHV0TXNnfWAsIC8vIOa2iOaBr+WGheWuuVxuICAgICAgYXR0YWNobWVudHMsIC8vIOmZhOS7tlxuICAgICAgdG9fZ3JvdXBfaWQ6IHRoaXMuY2hhdElkLFxuICAgICAgLy8gdGltZTogRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSAvIDEwMDAgLy8g5pe26Ze0XG4gICAgfTtcbiAgICB0aGlzLl9zZW5kQnlNZSA9IHRydWU7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnNvY2tldEVtaXRBbmRHZXRSZXNwb25zZSgnc2VuZEdyb3VwTXNnJywgZGF0YSwgZXJyb3IgPT4ge1xuICAgICAgbm90aWZpY2F0aW9uKCfkv6Hmga9TZW5k5aSx6LSlJywgJ2Vycm9yJywgMik7XG4gICAgfSk7XG4gICAgYWRkR3JvdXBNZXNzYWdlcyh7IGFsbEdyb3VwQ2hhdHMsIG1lc3NhZ2U6IHJlc3BvbnNlLCBncm91cElkOiB0aGlzLmNoYXRJZCB9KTtcbiAgICB1cGRhdGVIb21lUGFnZUxpc3QoeyBkYXRhOiByZXNwb25zZSwgaG9tZVBhZ2VMaXN0LCBteVVzZXJJZDogdXNlcl9pZCB9KTtcbiAgfTtcblxuICBqb2luR3JvdXAgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHRoaXMuc3RhdGUuZGlzYWJsZUpvaW5CdXR0b24pIHJldHVybjtcbiAgICB0aGlzLnNldFN0YXRlKHsgZGlzYWJsZUpvaW5CdXR0b246IHRydWUgfSk7XG4gICAgY29uc3QgeyBhbGxHcm91cENoYXRzLCBob21lUGFnZUxpc3QsIHVwZGF0ZUhvbWVQYWdlTGlzdCwgYWRkR3JvdXBNZXNzYWdlQW5kSW5mbyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Quc29ja2V0RW1pdEFuZEdldFJlc3BvbnNlKFxuICAgICAgJ2pvaW5Hcm91cCcsXG4gICAgICB7IHVzZXJJbmZvOiB0aGlzLl91c2VySW5mbywgdG9Hcm91cElkOiB0aGlzLmNoYXRJZCB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICBub3RpZmljYXRpb24oJ+WKoOe+pOWksei0pScsICdlcnJvcicsIDEuNSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNhYmxlSm9pbkJ1dHRvbjogZmFsc2UgfSk7XG4gICAgICB9LFxuICAgICk7XG4gICAgY29uc3QgeyBtZXNzYWdlcywgZ3JvdXBJbmZvIH0gPSByZXNwb25zZTtcbiAgICBjb25zdCBsYXN0Q29udGVudCA9IHtcbiAgICAgIG5hbWU6ICfnvqTliqnmiYsnLFxuICAgICAgbWVzc2FnZTogJ+aCqOW3suWKoOe+pOaIkOWKn++8jOWPr+S7peW8gOWni+iBiuWkqeWVpn4nLFxuICAgICAgdGltZTogRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSAvIDEwMDAsXG4gICAgfTtcbiAgICBtZXNzYWdlcy5wdXNoKGxhc3RDb250ZW50KTtcbiAgICBhZGRHcm91cE1lc3NhZ2VBbmRJbmZvKHtcbiAgICAgIGFsbEdyb3VwQ2hhdHMsXG4gICAgICBtZXNzYWdlcyxcbiAgICAgIGdyb3VwSWQ6IHRoaXMuY2hhdElkLFxuICAgICAgZ3JvdXBJbmZvLFxuICAgIH0pO1xuICAgIHVwZGF0ZUhvbWVQYWdlTGlzdCh7IGRhdGE6IHsgLi4ubGFzdENvbnRlbnQsIC4uLmdyb3VwSW5mbyB9LCBob21lUGFnZUxpc3QgfSk7XG4gIH07XG5cbiAgX3Nob3dMZWF2ZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgc2hvd0xlYXZlR3JvdXBNb2RhbDogIXN0YXRlLnNob3dMZWF2ZUdyb3VwTW9kYWwgfSkpO1xuICB9O1xuXG4gIGxlYXZlR3JvdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyX2lkIH0gPSB0aGlzLl91c2VySW5mbztcbiAgICBjb25zdCB7IGhvbWVQYWdlTGlzdCwgZGVsZXRlSG9tZVBhZ2VMaXN0LCBhbGxHcm91cENoYXRzLCBkZWxldGVHcm91cENoYXQgfSA9IHRoaXMucHJvcHM7XG4gICAgd2luZG93LnNvY2tldC5lbWl0KCdsZWF2ZUdyb3VwJywgeyB1c2VyX2lkLCB0b0dyb3VwSWQ6IHRoaXMuY2hhdElkIH0pO1xuICAgIGRlbGV0ZUhvbWVQYWdlTGlzdCh7IGhvbWVQYWdlTGlzdCwgY2hhdElkOiB0aGlzLmNoYXRJZCB9KTtcbiAgICBkZWxldGVHcm91cENoYXQoeyBhbGxHcm91cENoYXRzLCBncm91cElkOiB0aGlzLmNoYXRJZCB9KTtcbiAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaCgnLycpO1xuICB9O1xuXG4gIF9zaG93R3JvdXBDaGF0SW5mbyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93R3JvdXBDaGF0SW5mbzogdmFsdWUgfSk7XG4gIH1cblxuICBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICBjb25zdCB7IHJlbGF0ZWRDdXJyZW50Q2hhdCwgbWF0Y2ggfSA9IG5leHRQcm9wcztcbiAgICBpZiAocmVsYXRlZEN1cnJlbnRDaGF0IHx8IG1hdGNoLnBhcmFtcy50b19ncm91cF9pZCAhPT0gdGhpcy5jaGF0SWQgfHwgdGhpcy5fc2VuZEJ5TWUpIHtcbiAgICAgIHRoaXMuX3NlbmRCeU1lID0gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB7IHNob3dHcm91cENoYXRJbmZvLCBzaG93UGVyc29uYWxJbmZvLCBzaG93TGVhdmVHcm91cE1vZGFsIH0gPSBuZXh0U3RhdGU7XG4gICAgaWYgKFxuICAgICAgc2hvd0dyb3VwQ2hhdEluZm8gIT09IHRoaXMuc3RhdGUuc2hvd0dyb3VwQ2hhdEluZm8gfHxcbiAgICAgIHNob3dQZXJzb25hbEluZm8gIT09IHRoaXMuc3RhdGUuc2hvd1BlcnNvbmFsSW5mbyB8fFxuICAgICAgc2hvd0xlYXZlR3JvdXBNb2RhbCAhPT0gdGhpcy5zdGF0ZS5zaG93TGVhdmVHcm91cE1vZGFsXG4gICAgKVxuICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBfc2hvd1BlcnNvbmFsSW5mbyh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93UGVyc29uYWxJbmZvOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIF9jbGlja1BlcnNvbkF2YXRhciA9IHVzZXJfaWQgPT4ge1xuICAgIGNvbnN0IHsgYWxsR3JvdXBDaGF0cyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1lbWJlcnMgPSBbXSB9ID1cbiAgICAgIChhbGxHcm91cENoYXRzLmdldCh0aGlzLmNoYXRJZCkgJiYgYWxsR3JvdXBDaGF0cy5nZXQodGhpcy5jaGF0SWQpLmdyb3VwSW5mbykgfHwge307XG4gICAgY29uc3QgcGVyc29uYWxJbmZvID0gbWVtYmVycy5maWx0ZXIobWVtYmVyID0+IG1lbWJlci51c2VyX2lkID09PSB1c2VyX2lkKVswXTtcbiAgICBpZiAoIW1lbWJlcnMubGVuZ3RoIHx8ICF1c2VyX2lkKSByZXR1cm47XG4gICAgaWYgKCFwZXJzb25hbEluZm8pIHtcbiAgICAgIG5vdGlmaWNhdGlvbign5q2k5Lq65bey5LiN5Zyo576k5Lit5ZWmJywgJ3dhcm4nLCAxLjUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgcGVyc29uYWxJbmZvIH0sICgpID0+IHtcbiAgICAgIHRoaXMuX3Nob3dQZXJzb25hbEluZm8odHJ1ZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBhbGxHcm91cENoYXRzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNoYXRJdGVtID0gYWxsR3JvdXBDaGF0cyAmJiBhbGxHcm91cENoYXRzLmdldCh0aGlzLmNoYXRJZCk7XG4gICAgLy8gKOS6p+WTgeiuvuiuoSkg5b2T5p+l5om+5rKh5Yqg6L+H55qE576k77yM54K55Ye75Y675rKh576k5YaF5a6577yM6K+35rGC5Ye6576k5YaF5a6577yM6YG/5YWN5LiN5LqG6Kej6ICM5ZCO5oKU5Yqg576kXG4gICAgaWYgKCFjaGF0SXRlbSAmJiB3aW5kb3cuc29ja2V0KSB7XG4gICAgICB3aW5kb3cuc29ja2V0LmVtaXQoJ2dldE9uZUdyb3VwSXRlbScsIHsgZ3JvdXBJZDogdGhpcy5jaGF0SWQsIHN0YXJ0OiAxIH0sIGdyb3VwTXNnQW5kSW5mbyA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBncm91cE1zZ0FuZEluZm8gfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXQgY2hhdElkKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgcmV0dXJuIHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLnRvX2dyb3VwX2lkO1xuICB9XG5cbiAgX3Nob3dTaGFyZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgc2hvd1NoYXJlTW9kYWw6ICFzdGF0ZS5zaG93U2hhcmVNb2RhbCB9KSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGFsbEdyb3VwQ2hhdHMsXG4gICAgICB1cGRhdGVHcm91cFRpdGxlTm90aWNlLFxuICAgICAgdXBkYXRlTGlzdEdyb3VwTmFtZSxcbiAgICAgIGhvbWVQYWdlTGlzdCxcbiAgICAgIHNoYXJlRGF0YSxcbiAgICAgIGRlbGV0ZUhvbWVQYWdlTGlzdCxcbiAgICAgIGFsbFByaXZhdGVDaGF0cyxcbiAgICAgIGRlbGV0ZVByaXZhdGVDaGF0LFxuICAgICAgaW5pdEFwcCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBncm91cE1zZ0FuZEluZm8sXG4gICAgICBzaG93R3JvdXBDaGF0SW5mbyxcbiAgICAgIHNob3dMZWF2ZUdyb3VwTW9kYWwsXG4gICAgICBwZXJzb25hbEluZm8sXG4gICAgICBzaG93UGVyc29uYWxJbmZvLFxuICAgICAgc2hvd1NoYXJlTW9kYWwsXG4gICAgICBkaXNhYmxlSm9pbkJ1dHRvbixcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAoKCFhbGxHcm91cENoYXRzICYmICFhbGxHcm91cENoYXRzLnNpemUpIHx8ICF0aGlzLmNoYXRJZCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgY2hhdEl0ZW0gPSBhbGxHcm91cENoYXRzLmdldCh0aGlzLmNoYXRJZCk7XG4gICAgY29uc3QgbWVzc2FnZXMgPSBjaGF0SXRlbSA/IGNoYXRJdGVtLm1lc3NhZ2VzIDogZ3JvdXBNc2dBbmRJbmZvLm1lc3NhZ2VzO1xuICAgIGNvbnN0IGdyb3VwSW5mbyA9IGNoYXRJdGVtID8gY2hhdEl0ZW0uZ3JvdXBJbmZvIDogZ3JvdXBNc2dBbmRJbmZvLmdyb3VwSW5mbztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGF0LXdyYXBwZXJcIj5cbiAgICAgICAgPENoYXRIZWFkZXJcbiAgICAgICAgICB0aXRsZT17KGdyb3VwSW5mbyAmJiBncm91cEluZm8ubmFtZSkgfHwgJy0tLS0nfVxuICAgICAgICAgIGNoYXRUeXBlPVwiZ3JvdXBcIlxuICAgICAgICAgIGhhc1Nob3dlZD17c2hvd0dyb3VwQ2hhdEluZm99XG4gICAgICAgICAgc2hvd1NoYXJlTW9kYWw9e3RoaXMuX3Nob3dTaGFyZU1vZGFsfVxuICAgICAgICAgIHNob3dHcm91cENoYXRJbmZvPXt2YWx1ZSA9PiB0aGlzLl9zaG93R3JvdXBDaGF0SW5mbyh2YWx1ZSl9XG4gICAgICAgICAgc2hvd1NoYXJlSWNvbj17ISFjaGF0SXRlbX1cbiAgICAgICAgLz5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgdGl0bGU9XCJMZWF2ZSB0aGlzIGdyb3VwP1wiXG4gICAgICAgICAgdmlzaWJsZT17c2hvd0xlYXZlR3JvdXBNb2RhbH1cbiAgICAgICAgICBjb25maXJtPXt0aGlzLmxlYXZlR3JvdXB9XG4gICAgICAgICAgaGFzQ2FuY2VsXG4gICAgICAgICAgaGFzQ29uZmlybVxuICAgICAgICAgIGNhbmNlbD17dGhpcy5fc2hvd0xlYXZlTW9kYWx9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaGFyZU1vZGFsXG4gICAgICAgICAgdGl0bGU9XCJTaGFyZSB0aGlzIGdyb3VwIHdpdGhcIlxuICAgICAgICAgIG1vZGFsVmlzaWJsZT17c2hvd1NoYXJlTW9kYWx9XG4gICAgICAgICAgY2hhdElkPXt0aGlzLmNoYXRJZH1cbiAgICAgICAgICBzaG93U2hhcmVNb2RhbD17dGhpcy5fc2hvd1NoYXJlTW9kYWx9XG4gICAgICAgICAgY2FuY2VsPXt0aGlzLl9zaG93U2hhcmVNb2RhbH1cbiAgICAgICAgICBhbGxHcm91cENoYXRzPXthbGxHcm91cENoYXRzfVxuICAgICAgICAgIGhvbWVQYWdlTGlzdD17aG9tZVBhZ2VMaXN0fVxuICAgICAgICAvPlxuICAgICAgICA8UGVyc29uYWxJbmZvXG4gICAgICAgICAgdXNlckluZm89e3BlcnNvbmFsSW5mb31cbiAgICAgICAgICBoaWRlPXsoKSA9PiB0aGlzLl9zaG93UGVyc29uYWxJbmZvKGZhbHNlKX1cbiAgICAgICAgICBob21lUGFnZUxpc3Q9e2hvbWVQYWdlTGlzdH1cbiAgICAgICAgICBhbGxQcml2YXRlQ2hhdHM9e2FsbFByaXZhdGVDaGF0c31cbiAgICAgICAgICBkZWxldGVIb21lUGFnZUxpc3Q9e2RlbGV0ZUhvbWVQYWdlTGlzdH1cbiAgICAgICAgICBkZWxldGVQcml2YXRlQ2hhdD17ZGVsZXRlUHJpdmF0ZUNoYXR9XG4gICAgICAgICAgbW9kYWxWaXNpYmxlPXtjaGF0SXRlbSAmJiBzaG93UGVyc29uYWxJbmZvfVxuICAgICAgICAvPlxuICAgICAgICA8Q2hhdENvbnRlbnRMaXN0XG4gICAgICAgICAgY2hhdD17dGhpcy5fY2hhdH1cbiAgICAgICAgICBjaGF0cz17YWxsR3JvdXBDaGF0c31cbiAgICAgICAgICBDaGF0Q29udGVudD17bWVzc2FnZXN9XG4gICAgICAgICAgc2hvdWxkU2Nyb2xsVG9GZXRjaERhdGE9eyEhY2hhdEl0ZW19XG4gICAgICAgICAgY2hhdElkPXt0aGlzLmNoYXRJZH1cbiAgICAgICAgICBjaGF0VHlwZT1cImdyb3VwQ2hhdFwiXG4gICAgICAgICAgY2xpY2tBdmF0YXI9e3VzZXJfaWQgPT4gdGhpcy5fY2xpY2tQZXJzb25BdmF0YXIodXNlcl9pZCl9XG4gICAgICAgIC8+XG4gICAgICAgIHtzaG93R3JvdXBDaGF0SW5mbyAmJiAoXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLl9zaG93R3JvdXBDaGF0SW5mbyhmYWxzZSl9IGNsYXNzTmFtZT1cImdyb3VwQ2hhdEluZm9NYXNrXCIgLz5cbiAgICAgICAgKX1cbiAgICAgICAge3Nob3dHcm91cENoYXRJbmZvICYmIChcbiAgICAgICAgICA8R3JvdXBDaGF0SW5mb1xuICAgICAgICAgICAgZ3JvdXBJbmZvPXtncm91cEluZm99XG4gICAgICAgICAgICBhbGxHcm91cENoYXRzPXthbGxHcm91cENoYXRzfVxuICAgICAgICAgICAgaG9tZVBhZ2VMaXN0PXtob21lUGFnZUxpc3R9XG4gICAgICAgICAgICBsZWF2ZUdyb3VwPXt0aGlzLl9zaG93TGVhdmVNb2RhbH1cbiAgICAgICAgICAgIGNsaWNrTWVtYmVyPXt1c2VyX2lkID0+IHRoaXMuX2NsaWNrUGVyc29uQXZhdGFyKHVzZXJfaWQpfVxuICAgICAgICAgICAgdXBkYXRlR3JvdXBUaXRsZU5vdGljZT17dXBkYXRlR3JvdXBUaXRsZU5vdGljZX1cbiAgICAgICAgICAgIHVwZGF0ZUxpc3RHcm91cE5hbWU9e3VwZGF0ZUxpc3RHcm91cE5hbWV9XG4gICAgICAgICAgICBjaGF0SWQ9e3RoaXMuY2hhdElkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtjaGF0SXRlbSA/IChcbiAgICAgICAgICA8SW5wdXRBcmVhXG4gICAgICAgICAgICBzaGFyZURhdGE9e3NoYXJlRGF0YX1cbiAgICAgICAgICAgIHNlbmRNZXNzYWdlPXt0aGlzLnNlbmRNZXNzYWdlfVxuICAgICAgICAgICAgZ3JvdXBNZW1iZXJzPXtncm91cEluZm8ubWVtYmVyc31cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIGluaXRBcHAgJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGlja0ZuPXtkZWJvdW5jZSh0aGlzLmpvaW5Hcm91cCwgMjAwMCwgdHJ1ZSl9XG4gICAgICAgICAgICAgIHZhbHVlPVwi5Yqg5YWl576k6IGKXCJcbiAgICAgICAgICAgICAgZGlzYWJsZT17ZGlzYWJsZUpvaW5CdXR0b259XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihHcm91cENoYXQpO1xuXG5Hcm91cENoYXQucHJvcFR5cGVzID0ge1xuICBhbGxHcm91cENoYXRzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihNYXApLFxuICBhbGxQcml2YXRlQ2hhdHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1hcCksXG4gIGhvbWVQYWdlTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICB1cGRhdGVIb21lUGFnZUxpc3Q6IFByb3BUeXBlcy5mdW5jLFxuICBhZGRHcm91cE1lc3NhZ2VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgYWRkR3JvdXBNZXNzYWdlQW5kSW5mbzogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlbGV0ZUhvbWVQYWdlTGlzdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGRlbGV0ZUdyb3VwQ2hhdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHVwZGF0ZUdyb3VwVGl0bGVOb3RpY2U6IFByb3BUeXBlcy5mdW5jLFxuICB1cGRhdGVMaXN0R3JvdXBOYW1lOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hhcmVEYXRhOiBQcm9wVHlwZXMub2JqZWN0LFxuICBkZWxldGVQcml2YXRlQ2hhdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGluaXRBcHA6IFByb3BUeXBlcy5ib29sLFxufTtcblxuR3JvdXBDaGF0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWxsR3JvdXBDaGF0czogbmV3IE1hcCgpLFxuICBhbGxQcml2YXRlQ2hhdHM6IG5ldyBNYXAoKSxcbiAgaG9tZVBhZ2VMaXN0OiBbXSxcbiAgdXBkYXRlSG9tZVBhZ2VMaXN0KCkge30sXG4gIGFkZEdyb3VwTWVzc2FnZXMoKSB7fSxcbiAgYWRkR3JvdXBNZXNzYWdlQW5kSW5mbygpIHt9LFxuICBkZWxldGVIb21lUGFnZUxpc3QoKSB7fSxcbiAgZGVsZXRlR3JvdXBDaGF0KCkge30sXG4gIHVwZGF0ZUdyb3VwVGl0bGVOb3RpY2UoKSB7fSxcbiAgdXBkYXRlTGlzdEdyb3VwTmFtZSgpIHt9LFxuICBzaGFyZURhdGE6IHVuZGVmaW5lZCxcbiAgZGVsZXRlUHJpdmF0ZUNoYXQoKSB7fSxcbiAgaW5pdEFwcDogZmFsc2UsXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgVXNlckFkYXB0ZXIgZnJvbSAnLi4vVXNlckF2YXRhcic7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuaW1wb3J0IENyZWF0ZUdyb3VwTW9kYWwgZnJvbSAnLi4vQ3JlYXRlR3JvdXBNb2RhbCc7XG5pbXBvcnQgbm90aWZpY2F0aW9uIGZyb20gJy4uL05vdGlmaWNhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwQ2hhdEluZm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZ3JvdXBNZW1iZXI6IFtdLFxuICAgICAgb25saW5lTnVtYmVyOiAnLS0nLFxuICAgICAgbW9kYWxWaXNpYmxlOiBmYWxzZSxcbiAgICAgIGp1c3RTaG93T25saW5lTWVtYmVyOiB0cnVlLFxuICAgIH07XG4gICAgdGhpcy5fdXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpKTtcbiAgICB0aGlzLl9pc0NyZWF0b3IgPSB0aGlzLl91c2VySW5mby51c2VyX2lkID09PSBwYXJzZUludChwcm9wcy5ncm91cEluZm8uY3JlYXRvcl9pZCwgMTApO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgZ3JvdXBJZCA9IHRoaXMucHJvcHMuY2hhdElkO1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgnZ2V0R3JvdXBNZW1iZXInLCBncm91cElkLCBkYXRhID0+IHtcbiAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4gYi5zdGF0dXMgLSBhLnN0YXR1cyk7XG4gICAgICBjb25zdCBvbmxpbmVNZW1iZXIgPSBkYXRhLmZpbHRlcihlID0+IGUuc3RhdHVzID09PSAxKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBncm91cE1lbWJlcjogZGF0YSxcbiAgICAgICAgb25saW5lTnVtYmVyOiBvbmxpbmVNZW1iZXIubGVuZ3RoLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfY2xpY2tNZW1iZXIgPSB1c2VyX2lkID0+IHtcbiAgICB0aGlzLnByb3BzLmNsaWNrTWVtYmVyKHVzZXJfaWQpO1xuICB9O1xuXG4gIF9vcGVuRWRpdG9ySW5mb01vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb2RhbFZpc2libGU6IHRydWUgfSk7XG4gIH07XG5cbiAgR3JvdXBNZW1iZXJSZW5kZXIgPSBncm91cE1lbWJlciA9PiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm1lbWJlcnNcIj5cbiAgICAgIHtncm91cE1lbWJlci5sZW5ndGggPiAwICYmXG4gICAgICAgIGdyb3VwTWVtYmVyLm1hcChcbiAgICAgICAgICBlID0+XG4gICAgICAgICAgICAoIXRoaXMuc3RhdGUuanVzdFNob3dPbmxpbmVNZW1iZXIgfHwgISFlLnN0YXR1cykgJiYgKFxuICAgICAgICAgICAgICA8bGkga2V5PXtlLnVzZXJfaWR9IGNsYXNzTmFtZT1cIm1lbWJlclwiIG9uQ2xpY2s9eygpID0+IHRoaXMuX2NsaWNrTWVtYmVyKGUudXNlcl9pZCl9PlxuICAgICAgICAgICAgICAgIDxVc2VyQWRhcHRlclxuICAgICAgICAgICAgICAgICAgc3JjPXtlLmF2YXRhcn1cbiAgICAgICAgICAgICAgICAgIG5hbWU9e2UubmFtZX1cbiAgICAgICAgICAgICAgICAgIGlzR3JheT17IWUuc3RhdHVzfVxuICAgICAgICAgICAgICAgICAgc2hvd0xvZ289eyEhZS5naXRodWJfaWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW1iZXJOYW1lXCI+e2UubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApLFxuICAgICAgICApfVxuICAgIDwvdWw+XG4gICk7XG5cbiAgX2NvbmZpcm0gPSAoeyBncm91cE5hbWUsIGdyb3VwTm90aWNlIH0pID0+IHtcbiAgICB0aGlzLl9jbG9zZU1vZGFsKCk7XG4gICAgdGhpcy5fdXBkYXRlR3JvdXBJbmZvKHsgZ3JvdXBOYW1lLCBncm91cE5vdGljZSB9KTtcbiAgfTtcblxuICBfY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG1vZGFsVmlzaWJsZTogZmFsc2UsXG4gICAgfSk7XG4gIH07XG5cbiAgX3VwZGF0ZUdyb3VwSW5mbyA9ICh7IGdyb3VwTmFtZSwgZ3JvdXBOb3RpY2UgfSkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGdyb3VwSW5mbyxcbiAgICAgIGFsbEdyb3VwQ2hhdHMsXG4gICAgICB1cGRhdGVHcm91cFRpdGxlTm90aWNlLFxuICAgICAgdXBkYXRlTGlzdEdyb3VwTmFtZSxcbiAgICAgIGhvbWVQYWdlTGlzdCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHRvX2dyb3VwX2lkIH0gPSBncm91cEluZm87XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIG5hbWU6IGdyb3VwTmFtZSxcbiAgICAgIGdyb3VwX25vdGljZTogZ3JvdXBOb3RpY2UsXG4gICAgICB0b19ncm91cF9pZCxcbiAgICB9O1xuICAgIHdpbmRvdy5zb2NrZXQuZW1pdCgndXBkYXRlR3JvdXBJbmZvJywgZGF0YSwgcmVzID0+IHtcbiAgICAgIHVwZGF0ZUdyb3VwVGl0bGVOb3RpY2Uoe1xuICAgICAgICBhbGxHcm91cENoYXRzLFxuICAgICAgICBncm91cE5vdGljZSxcbiAgICAgICAgZ3JvdXBOYW1lLFxuICAgICAgICBncm91cElkOiB0b19ncm91cF9pZCxcbiAgICAgIH0pO1xuICAgICAgdXBkYXRlTGlzdEdyb3VwTmFtZSh7XG4gICAgICAgIGhvbWVQYWdlTGlzdCxcbiAgICAgICAgbmFtZTogZ3JvdXBOYW1lLFxuICAgICAgICB0b19ncm91cF9pZCxcbiAgICAgIH0pO1xuICAgICAgbm90aWZpY2F0aW9uKHJlcywgJ3N1Y2Nlc3MnKTtcbiAgICAgIHRoaXMuX2Nsb3NlTW9kYWwoKTtcbiAgICB9KTtcbiAgfTtcblxuICBfc2hvd0FsbE1lbWJlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKCh7IGp1c3RTaG93T25saW5lTWVtYmVyIH0pID0+ICh7XG4gICAgICBqdXN0U2hvd09ubGluZU1lbWJlcjogIWp1c3RTaG93T25saW5lTWVtYmVyLFxuICAgIH0pKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBncm91cE1lbWJlciwgb25saW5lTnVtYmVyLCBtb2RhbFZpc2libGUsIGp1c3RTaG93T25saW5lTWVtYmVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZ3JvdXBJbmZvLCBsZWF2ZUdyb3VwIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXRJbmZvcm1hdGlvblwiPlxuICAgICAgICA8Q3JlYXRlR3JvdXBNb2RhbFxuICAgICAgICAgIHRpdGxlPVwiTW9kaWZ5IGdyb3VwIGluZm9cIlxuICAgICAgICAgIG1vZGFsVmlzaWJsZT17bW9kYWxWaXNpYmxlfVxuICAgICAgICAgIGNvbmZpcm09e2FyZ3MgPT4gdGhpcy5fY29uZmlybShhcmdzKX1cbiAgICAgICAgICBoYXNDYW5jZWxcbiAgICAgICAgICBoYXNDb25maXJtXG4gICAgICAgICAgY2FuY2VsPXt0aGlzLl9jbG9zZU1vZGFsfVxuICAgICAgICAgIGRlZmF1bHRHcm91cE5hbWU9e2dyb3VwSW5mby5uYW1lfVxuICAgICAgICAgIGRlZmF1bHRHcm91cE5vdGljZT17Z3JvdXBJbmZvLmdyb3VwX25vdGljZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibm90aWNlVGl0bGVcIj5cbiAgICAgICAgICAgIEdyb3VwIGFubm91bmNlbWVudFxuICAgICAgICAgICAge3RoaXMuX2lzQ3JlYXRvciAmJiAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9vcGVuRWRpdG9ySW5mb01vZGFsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbkVkaXRvclwiXG4gICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI2ljb24tZWRpdG9yXCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJub3RpY2VDb250ZW50XCI+e2dyb3VwSW5mby5ncm91cF9ub3RpY2V9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1lbWJlclRpdGxlXCI+XG4gICAgICAgICAgICB7YG9ubGluZSB1c2VyczogJHtvbmxpbmVOdW1iZXJ9YH1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNob3dBbGxNZW1iZXJcIiBvbkNsaWNrPXt0aGlzLl9zaG93QWxsTWVtYmVyfT5cbiAgICAgICAgICAgICAge2Ake2p1c3RTaG93T25saW5lTWVtYmVyID8gJ3ZpZXcgYWxsJyA6ICdKdXN0IHdhdGNoIG9ubGluZSd9YH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5Hcm91cE1lbWJlclJlbmRlcihncm91cE1lbWJlcil9XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYXZlXCIgb25DbGljaz17bGVhdmVHcm91cH0+XG4gICAgICAgICAgRXhpdCBncm91cCBjaGF0XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBnZXQgdXNlckluZm8oKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJbmZvJykpO1xuICB9XG59XG5cbkdyb3VwQ2hhdEluZm8ucHJvcFR5cGVzID0ge1xuICBsZWF2ZUdyb3VwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGF0SWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZ3JvdXBJbmZvOiBQcm9wVHlwZXMub2JqZWN0LFxuICB1cGRhdGVHcm91cFRpdGxlTm90aWNlOiBQcm9wVHlwZXMuZnVuYyxcbiAgdXBkYXRlTGlzdEdyb3VwTmFtZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFsbEdyb3VwQ2hhdHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE1hcCksXG4gIGhvbWVQYWdlTGlzdDogUHJvcFR5cGVzLmFycmF5LFxufTtcblxuR3JvdXBDaGF0SW5mby5kZWZhdWx0UHJvcHMgPSB7XG4gIGdyb3VwSW5mbzoge30sXG4gIHVwZGF0ZUdyb3VwVGl0bGVOb3RpY2UoKSB7fSxcbiAgdXBkYXRlTGlzdEdyb3VwTmFtZSgpIHt9LFxuICBhbGxHcm91cENoYXRzOiBuZXcgTWFwKCksXG4gIGhvbWVQYWdlTGlzdDogW10sXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7XG4gIHVwZGF0ZUhvbWVQYWdlTGlzdEFjdGlvbixcbiAgZGVsZXRlSG9tZVBhZ2VMaXN0QWN0aW9uLFxuICB1cGRhdGVMaXN0R3JvdXBOYW1lQWN0aW9uLFxufSBmcm9tICcuLi9Ib21lUGFnZUxpc3QvaG9tZVBhZ2VMaXN0QWN0aW9uJztcbmltcG9ydCB7XG4gIGFkZEdyb3VwTWVzc2FnZXNBY3Rpb24sXG4gIGRlbGV0ZUdyb3VwQ2hhdEFjdGlvbixcbiAgYWRkR3JvdXBJbmZvQWN0aW9uLFxuICBhZGRHcm91cE1lc3NhZ2VBbmRJbmZvQWN0aW9uLFxuICB1cGRhdGVHcm91cFRpdGxlTm90aWNlQWN0aW9uLFxufSBmcm9tICcuL2dyb3VwQ2hhdEFjdGlvbic7XG5pbXBvcnQgeyBkZWxldGVQcml2YXRlQ2hhdEFjdGlvbiB9IGZyb20gJy4uL1ByaXZhdGVDaGF0UGFnZS9wcml2YXRlQ2hhdEFjdGlvbic7XG5pbXBvcnQgR3JvdXBDaGF0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvR3JvdXBDaGF0JztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgYWxsR3JvdXBDaGF0czogc3RhdGUuYWxsR3JvdXBDaGF0c1N0YXRlLFxuICBhbGxQcml2YXRlQ2hhdHM6IHN0YXRlLmFsbFByaXZhdGVDaGF0c1N0YXRlLFxuICBob21lUGFnZUxpc3Q6IHN0YXRlLmhvbWVQYWdlTGlzdFN0YXRlLFxuICByZWxhdGVkQ3VycmVudENoYXQ6IHN0YXRlLnJlbGF0ZWRDdXJyZW50Q2hhdCxcbiAgaW5pdEFwcDogc3RhdGUuaW5pdEFwcFN0YXRlLFxuICBzaGFyZURhdGE6IHN0YXRlLnNoYXJlU3RhdGUsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgYWRkR3JvdXBNZXNzYWdlQW5kSW5mbyhhcmcgPSB7fSkge1xuICAgIGRpc3BhdGNoKGFkZEdyb3VwTWVzc2FnZUFuZEluZm9BY3Rpb24oeyAuLi5hcmcgfSkpO1xuICB9LFxuICBhZGRHcm91cE1lc3NhZ2VzKGFyZyA9IHt9KSB7XG4gICAgZGlzcGF0Y2goYWRkR3JvdXBNZXNzYWdlc0FjdGlvbih7IC4uLmFyZyB9KSk7XG4gIH0sXG4gIGRlbGV0ZUdyb3VwQ2hhdChhcmcgPSB7fSkge1xuICAgIGRpc3BhdGNoKGRlbGV0ZUdyb3VwQ2hhdEFjdGlvbih7IC4uLmFyZyB9KSk7XG4gIH0sXG4gIGFkZEdyb3VwSW5mbyhhcmcgPSB7fSkge1xuICAgIGRpc3BhdGNoKGFkZEdyb3VwSW5mb0FjdGlvbih7IC4uLmFyZyB9KSk7XG4gIH0sXG4gIHVwZGF0ZUhvbWVQYWdlTGlzdChhcmcgPSB7fSkge1xuICAgIGRpc3BhdGNoKHVwZGF0ZUhvbWVQYWdlTGlzdEFjdGlvbih7IC4uLmFyZyB9KSk7XG4gIH0sXG4gIGRlbGV0ZUhvbWVQYWdlTGlzdChhcmcgPSB7fSkge1xuICAgIGRpc3BhdGNoKGRlbGV0ZUhvbWVQYWdlTGlzdEFjdGlvbih7IC4uLmFyZyB9KSk7XG4gIH0sXG4gIHVwZGF0ZUdyb3VwVGl0bGVOb3RpY2UoYXJnID0ge30pIHtcbiAgICBkaXNwYXRjaCh1cGRhdGVHcm91cFRpdGxlTm90aWNlQWN0aW9uKHsgLi4uYXJnIH0pKTtcbiAgfSxcbiAgdXBkYXRlTGlzdEdyb3VwTmFtZShhcmcgPSB7fSkge1xuICAgIGRpc3BhdGNoKHVwZGF0ZUxpc3RHcm91cE5hbWVBY3Rpb24oeyAuLi5hcmcgfSkpO1xuICB9LFxuICBkZWxldGVQcml2YXRlQ2hhdChhcmcgPSB7fSkge1xuICAgIGRpc3BhdGNoKGRlbGV0ZVByaXZhdGVDaGF0QWN0aW9uKHsgLi4uYXJnIH0pKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdyb3VwQ2hhdCkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==