(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/UserAvatar/style.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/UserAvatar/style.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".gray {\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  -ms-filter: grayscale(100%);\n  -o-filter: grayscale(100%);\n  filter: grayscale(100%);\n  -webkit-filter: gray;\n  filter: gray; }\n\n.viaGithub {\n  font-size: 10px;\n  position: absolute;\n  top: -6px;\n  left: 34px; }\n\n.userAvatar {\n  position: relative; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/UserAvatar/index.js":
/*!********************************************!*\
  !*** ./src/components/UserAvatar/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserAvatar;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./style.scss */ "./src/components/UserAvatar/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
}; // 感谢 https://www.npmjs.com/package/react-user-avatar


var defaultColors = ['#2ecc71', // emerald
'#3498db', // peter river
'#8e44ad', // wisteria
'#e67e22', // carrot
'#e74c3c', // alizarin
'#1abc9c', // turquoise
'#2c3e50'];

function sumChars(str) {
  var sum = 0;
  for (var i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

// eslint-disable-next-line react/prefer-stateless-function
function UserAvatar(props) {
  var src = props.src,
      name = props.name,
      isGray = props.isGray,
      color = props.color,
      _props$colors = props.colors,
      colors = _props$colors === undefined ? defaultColors : _props$colors,
      clickAvatar = props.clickAvatar,
      size = props.size,
      borderRadius = props.borderRadius,
      showLogo = props.showLogo,
      className = props.className;


  var innerStyle = {
    textAlign: 'center',
    width: size + 'px',
    height: size + 'px',
    borderRadius: borderRadius,
    lineHeight: size + 'px',
    color: 'white',
    display: 'inline-block'
  };

  var imgStyle = {
    width: size + 'px',
    height: size + 'px',
    borderRadius: borderRadius
  };

  var inner = void 0;
  if (src) {
    inner = _react2.default.createElement('img', { style: imgStyle, src: src, alt: name });
  } else {
    var background = void 0;
    if (color) {
      background = color;
    } else {
      // pick a deterministic color from the list
      var i = sumChars(name) % colors.length;
      background = colors[i];
    }

    innerStyle.backgroundColor = background;

    inner = _react2.default.createElement(
      'span',
      null,
      name.charAt(0)
    );
  }

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(className, isGray ? 'userAvatar gray' : 'userAvatar'),
      style: innerStyle,
      onClick: clickAvatar
    },
    showLogo && _react2.default.createElement(
      'svg',
      { className: 'icon viaGithub', 'aria-hidden': 'true' },
      _react2.default.createElement('use', { xlinkHref: '#icon-github' })
    ),
    inner
  );
}

UserAvatar.propTypes = {
  src: _propTypes2.default.string,
  name: _propTypes2.default.string,
  isGray: _propTypes2.default.bool,
  color: _propTypes2.default.string,
  colors: _propTypes2.default.array,
  clickAvatar: _propTypes2.default.func,
  size: _propTypes2.default.string,
  borderRadius: _propTypes2.default.string,
  showLogo: _propTypes2.default.bool,
  className: _propTypes2.default.string
};

UserAvatar.defaultProps = {
  src: undefined,
  name: '?',
  isGray: false,
  color: undefined,
  colors: defaultColors,
  clickAvatar: undefined,
  size: '40',
  borderRadius: '50%',
  showLogo: false,
  className: undefined
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(defaultColors, 'defaultColors', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/UserAvatar/index.js');
  reactHotLoader.register(sumChars, 'sumChars', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/UserAvatar/index.js');
  reactHotLoader.register(UserAvatar, 'UserAvatar', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/UserAvatar/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/UserAvatar/style.scss":
/*!**********************************************!*\
  !*** ./src/components/UserAvatar/style.scss ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/UserAvatar/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/UserAvatar/style.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/UserAvatar/style.scss");

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

/***/ "./src/modules/Chat/index.js":
/*!***********************************!*\
  !*** ./src/modules/Chat/index.js ***!
  \***********************************/
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

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _homePageListAction = __webpack_require__(/*! ../../containers/HomePageList/homePageListAction */ "./src/containers/HomePageList/homePageListAction.js");

var _groupChatAction = __webpack_require__(/*! ../../containers/GroupChatPage/groupChatAction */ "./src/containers/GroupChatPage/groupChatAction.js");

var _privateChatAction = __webpack_require__(/*! ../../containers/PrivateChatPage/privateChatAction */ "./src/containers/PrivateChatPage/privateChatAction.js");

var _shareAction = __webpack_require__(/*! ../../redux/actions/shareAction */ "./src/redux/actions/shareAction.js");

var _store = __webpack_require__(/*! ../../redux/store */ "./src/redux/store.js");

var _store2 = _interopRequireDefault(_store);

var _Notification = __webpack_require__(/*! ../../components/Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var Chat = function () {
  function Chat() {
    (0, _classCallCheck3.default)(this, Chat);

    this.clickItemToShare = function (_ref) {
      var homePageList = _ref.homePageList,
          chatId = _ref.chatId,
          userInfo = _ref.userInfo;

      var data = homePageList.filter(function (e) {
        return e.user_id === chatId || e.to_group_id === chatId;
      });
      if (!data) {
        throw Error("can't find the date of this item");
      }

      var _ref2 = userInfo || data[0],
          name = _ref2.name,
          avatar = _ref2.avatar,
          user_id = _ref2.user_id,
          to_group_id = _ref2.to_group_id;

      _store2.default.dispatch((0, _shareAction.shareAction)({
        name: name,
        avatar: avatar,
        user_id: user_id,
        to_group_id: to_group_id
      }));
    };

    this._hasLoadAllMessages = false;
  }

  (0, _createClass3.default)(Chat, [{
    key: 'clearUnreadHandle',
    value: function clearUnreadHandle(_ref3) {
      var homePageList = _ref3.homePageList,
          chatFromId = _ref3.chatFromId;

      _store2.default.dispatch((0, _homePageListAction.clearUnreadAction)({ homePageList: homePageList, chatFromId: chatFromId }));
    }
  }, {
    key: 'lazyLoadGroupMessages',
    value: function lazyLoadGroupMessages(_ref4) {
      var _this = this;

      var chats = _ref4.chats,
          chatId = _ref4.chatId,
          start = _ref4.start,
          count = _ref4.count;

      return new _promise2.default(function (resolve, reject) {
        if (!_this._hasLoadAllMessages) {
          try {
            window.socket.emit('getOneGroupMessages', { groupId: chatId, start: start, count: count }, function (groupMessages) {
              if (groupMessages && groupMessages.length === 0) {
                _this._hasLoadAllMessages = true;
                (0, _Notification2.default)('已经到底啦', 'warn', 2);
                reject();
              }
              _store2.default.dispatch((0, _groupChatAction.addGroupMessagesAction)({
                allGroupChats: chats,
                messages: groupMessages,
                groupId: chatId,
                inLazyLoading: true
              }));
              resolve();
            });
          } catch (error) {
            console.log(error);
            (0, _Notification2.default)('出错啦，请稍后再试', 'error');
            var errorText = 'try again later';
            reject(errorText);
          }
        }
      });
    }
  }, {
    key: 'lazyLoadPrivateChatMessages',
    value: function lazyLoadPrivateChatMessages(_ref5) {
      var _this2 = this;

      var chats = _ref5.chats,
          user_id = _ref5.user_id,
          chatId = _ref5.chatId,
          start = _ref5.start,
          count = _ref5.count;

      return new _promise2.default(function (resolve, reject) {
        if (!_this2._hasLoadAllMessages) {
          window.socket.emit('getOnePrivateChatMessages', {
            user_id: user_id,
            toUser: chatId,
            start: start,
            count: count
          }, function (privateChatMessages) {
            if (privateChatMessages && privateChatMessages.length === 0) {
              _this2._hasLoadAllMessages = true;
              (0, _Notification2.default)('已经到底啦', 'warn', 2);
              reject();
            }
            _store2.default.dispatch((0, _privateChatAction.addPrivateChatMessagesAction)({
              allPrivateChats: chats,
              messages: privateChatMessages,
              chatId: chatId,
              inLazyLoading: true
            }));
            resolve('success!');
          });
        }
      });
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }, {
    key: 'isScrollInBottom',
    get: function get() {
      var ulDom = document.getElementsByClassName('chat-content-list')[0];
      if (ulDom) {
        var scrollTop = ulDom.scrollTop,
            offsetHeight = ulDom.offsetHeight,
            scrollHeight = ulDom.scrollHeight;

        return scrollTop === scrollHeight - offsetHeight;
      }
      return false;
    }
  }]);
  return Chat;
}();

var _default = Chat;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Chat, 'Chat', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/modules/Chat/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/modules/Chat/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/utils/transformTime.js":
/*!************************************!*\
  !*** ./src/utils/transformTime.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

/**
 *
 * @param   时间戳
 * @return   yyyy-MM-dd hh:mm 格式的时间
 */

function addZero(data) {
  if (data.toString().length === 1) {
    return "0" + data;
  }
  return data;
}

function monthHandle(month) {
  return "" + (month + 1 < 10 ? "0" + (month + 1) : month + 1);
}

var toNormalTime = exports.toNormalTime = function toNormalTime(timestamp) {
  var dateOfArg = new Date(timestamp * 1000);
  var _ref = [dateOfArg.getFullYear(), dateOfArg.getMonth(), dateOfArg.getDate(), dateOfArg.getHours(), dateOfArg.getMinutes()],
      yearOfArg = _ref[0],
      monthOfArg = _ref[1],
      dayOfArg = _ref[2],
      hourOfArg = _ref[3],
      minuteOfArg = _ref[4];

  var date = new Date();
  var _ref2 = [date.getDate(), new Date(new Date().setDate(new Date().getDate() - 1)).getDate(), date.getMonth(), date.getFullYear()],
      today = _ref2[0],
      yesterday = _ref2[1],
      thisMonth = _ref2[2],
      thisYear = _ref2[3];


  var isToday = thisYear === yearOfArg && thisMonth === monthOfArg && today === dayOfArg;
  if (isToday) {
    return addZero(hourOfArg) + ":" + addZero(minuteOfArg);
  }

  var isYesterday = thisYear === yearOfArg && thisMonth === monthOfArg && yesterday === dayOfArg;
  if (isYesterday) {
    return "\u6628\u5929 " + addZero(hourOfArg) + ":" + addZero(minuteOfArg);
  }

  if (yearOfArg === thisYear) {
    return monthHandle(monthOfArg) + "/" + addZero(dayOfArg);
  }

  return yearOfArg + "/" + monthHandle(monthOfArg) + "/" + addZero(dayOfArg);
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addZero, "addZero", "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/utils/transformTime.js");
  reactHotLoader.register(monthHandle, "monthHandle", "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/utils/transformTime.js");
  reactHotLoader.register(toNormalTime, "toNormalTime", "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/utils/transformTime.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQXZhdGFyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckF2YXRhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VyQXZhdGFyL3N0eWxlLnNjc3M/NjU1YyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9DaGF0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy90cmFuc2Zvcm1UaW1lLmpzIl0sIm5hbWVzIjpbIlVzZXJBdmF0YXIiLCJkZWZhdWx0Q29sb3JzIiwic3VtQ2hhcnMiLCJzdHIiLCJzdW0iLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInByb3BzIiwic3JjIiwibmFtZSIsImlzR3JheSIsImNvbG9yIiwiY29sb3JzIiwiY2xpY2tBdmF0YXIiLCJzaXplIiwiYm9yZGVyUmFkaXVzIiwic2hvd0xvZ28iLCJjbGFzc05hbWUiLCJpbm5lclN0eWxlIiwidGV4dEFsaWduIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImltZ1N0eWxlIiwiaW5uZXIiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhckF0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImFycmF5IiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInVuZGVmaW5lZCIsIkNoYXQiLCJjbGlja0l0ZW1Ub1NoYXJlIiwiaG9tZVBhZ2VMaXN0IiwiY2hhdElkIiwidXNlckluZm8iLCJkYXRhIiwiZmlsdGVyIiwiZSIsInVzZXJfaWQiLCJ0b19ncm91cF9pZCIsIkVycm9yIiwiYXZhdGFyIiwic3RvcmUiLCJkaXNwYXRjaCIsIl9oYXNMb2FkQWxsTWVzc2FnZXMiLCJjaGF0RnJvbUlkIiwiY2hhdHMiLCJzdGFydCIsImNvdW50IiwicmVzb2x2ZSIsInJlamVjdCIsIndpbmRvdyIsInNvY2tldCIsImVtaXQiLCJncm91cElkIiwiZ3JvdXBNZXNzYWdlcyIsImFsbEdyb3VwQ2hhdHMiLCJtZXNzYWdlcyIsImluTGF6eUxvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvclRleHQiLCJ0b1VzZXIiLCJwcml2YXRlQ2hhdE1lc3NhZ2VzIiwiYWxsUHJpdmF0ZUNoYXRzIiwidWxEb20iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJzY3JvbGxUb3AiLCJvZmZzZXRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRaZXJvIiwidG9TdHJpbmciLCJtb250aEhhbmRsZSIsIm1vbnRoIiwidG9Ob3JtYWxUaW1lIiwiZGF0ZU9mQXJnIiwiRGF0ZSIsInRpbWVzdGFtcCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwieWVhck9mQXJnIiwibW9udGhPZkFyZyIsImRheU9mQXJnIiwiaG91ck9mQXJnIiwibWludXRlT2ZBcmciLCJkYXRlIiwic2V0RGF0ZSIsInRvZGF5IiwieWVzdGVyZGF5IiwidGhpc01vbnRoIiwidGhpc1llYXIiLCJpc1RvZGF5IiwiaXNZZXN0ZXJkYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLFVBQVUsb0NBQW9DLGlDQUFpQyxnQ0FBZ0MsK0JBQStCLDRCQUE0Qix5QkFBeUIsaUJBQWlCLEVBQUUsZ0JBQWdCLG9CQUFvQix1QkFBdUIsY0FBYyxlQUFlLEVBQUUsaUJBQWlCLHVCQUF1QixFQUFFOztBQUVqWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNtQndCQSxVOztBQXpCeEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0dBSkE7OztBQU1BLElBQU1DLGdCQUFnQixDQUNwQixTQURvQixFQUNUO0FBQ1gsU0FGb0IsRUFFVDtBQUNYLFNBSG9CLEVBR1Q7QUFDWCxTQUpv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QUFjVSxRQUFsQixFQUE0QjtBQUMxQixXQUFVckIsWUFBWVksVUFBWixDQUFWLFNBQXFDZCxRQUFRZSxRQUFSLENBQXJDO0FBQ0Q7O0FBRUQsU0FBVUYsU0FBVixTQUF1QlgsWUFBWVksVUFBWixDQUF2QixTQUFrRGQsUUFBUWUsUUFBUixDQUFsRDtBQUNELENBaENNOzs7Ozs7Ozs7OzBCQVhFZixPOzBCQU9BRSxXOzBCQUlJRSxZIiwiZmlsZSI6IjEuYjM0MzVkODk2ZTgzNGVmYTIwNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ncmF5IHtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgLW1zLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgLW8tZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIC13ZWJraXQtZmlsdGVyOiBncmF5O1xcbiAgZmlsdGVyOiBncmF5OyB9XFxuXFxuLnZpYUdpdGh1YiB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC02cHg7XFxuICBsZWZ0OiAzNHB4OyB9XFxuXFxuLnVzZXJBdmF0YXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLy8g5oSf6LCiIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXVzZXItYXZhdGFyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBkZWZhdWx0Q29sb3JzID0gW1xuICAnIzJlY2M3MScsIC8vIGVtZXJhbGRcbiAgJyMzNDk4ZGInLCAvLyBwZXRlciByaXZlclxuICAnIzhlNDRhZCcsIC8vIHdpc3RlcmlhXG4gICcjZTY3ZTIyJywgLy8gY2Fycm90XG4gICcjZTc0YzNjJywgLy8gYWxpemFyaW5cbiAgJyMxYWJjOWMnLCAvLyB0dXJxdW9pc2VcbiAgJyMyYzNlNTAnLCAvLyBtaWRuaWdodCBibHVlXG5dO1xuXG5mdW5jdGlvbiBzdW1DaGFycyhzdHIpIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc3VtICs9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBdmF0YXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNyYyxcbiAgICBuYW1lLFxuICAgIGlzR3JheSxcbiAgICBjb2xvcixcbiAgICBjb2xvcnMgPSBkZWZhdWx0Q29sb3JzLFxuICAgIGNsaWNrQXZhdGFyLFxuICAgIHNpemUsXG4gICAgYm9yZGVyUmFkaXVzLFxuICAgIHNob3dMb2dvLFxuICAgIGNsYXNzTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlubmVyU3R5bGUgPSB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICBib3JkZXJSYWRpdXMsXG4gICAgbGluZUhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIH07XG5cbiAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgYm9yZGVyUmFkaXVzLFxuICB9O1xuXG4gIGxldCBpbm5lcjtcbiAgaWYgKHNyYykge1xuICAgIGlubmVyID0gPGltZyBzdHlsZT17aW1nU3R5bGV9IHNyYz17c3JjfSBhbHQ9e25hbWV9IC8+O1xuICB9IGVsc2Uge1xuICAgIGxldCBiYWNrZ3JvdW5kO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgYmFja2dyb3VuZCA9IGNvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBwaWNrIGEgZGV0ZXJtaW5pc3RpYyBjb2xvciBmcm9tIHRoZSBsaXN0XG4gICAgICBjb25zdCBpID0gc3VtQ2hhcnMobmFtZSkgJSBjb2xvcnMubGVuZ3RoO1xuICAgICAgYmFja2dyb3VuZCA9IGNvbG9yc1tpXTtcbiAgICB9XG5cbiAgICBpbm5lclN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XG5cbiAgICBpbm5lciA9IDxzcGFuPntuYW1lLmNoYXJBdCgwKX08L3NwYW4+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCBpc0dyYXkgPyAndXNlckF2YXRhciBncmF5JyA6ICd1c2VyQXZhdGFyJyl9XG4gICAgICBzdHlsZT17aW5uZXJTdHlsZX1cbiAgICAgIG9uQ2xpY2s9e2NsaWNrQXZhdGFyfVxuICAgID5cbiAgICAgIHtzaG93TG9nbyAmJiAoXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaWNvbiB2aWFHaXRodWJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNpY29uLWdpdGh1YlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKX1cbiAgICAgIHtpbm5lcn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuVXNlckF2YXRhci5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNHcmF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yczogUHJvcFR5cGVzLmFycmF5LFxuICBjbGlja0F2YXRhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJvcmRlclJhZGl1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd0xvZ286IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Vc2VyQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3JjOiB1bmRlZmluZWQsXG4gIG5hbWU6ICc/JyxcbiAgaXNHcmF5OiBmYWxzZSxcbiAgY29sb3I6IHVuZGVmaW5lZCxcbiAgY29sb3JzOiBkZWZhdWx0Q29sb3JzLFxuICBjbGlja0F2YXRhcjogdW5kZWZpbmVkLFxuICBzaXplOiAnNDAnLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBzaG93TG9nbzogZmFsc2UsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IGNsZWFyVW5yZWFkQWN0aW9uIH0gZnJvbSAnLi4vLi4vY29udGFpbmVycy9Ib21lUGFnZUxpc3QvaG9tZVBhZ2VMaXN0QWN0aW9uJztcbmltcG9ydCB7IGFkZEdyb3VwTWVzc2FnZXNBY3Rpb24gfSBmcm9tICcuLi8uLi9jb250YWluZXJzL0dyb3VwQ2hhdFBhZ2UvZ3JvdXBDaGF0QWN0aW9uJztcbmltcG9ydCB7IGFkZFByaXZhdGVDaGF0TWVzc2FnZXNBY3Rpb24gfSBmcm9tICcuLi8uLi9jb250YWluZXJzL1ByaXZhdGVDaGF0UGFnZS9wcml2YXRlQ2hhdEFjdGlvbic7XG5pbXBvcnQgeyBzaGFyZUFjdGlvbiB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvc2hhcmVBY3Rpb24nO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGF0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5faGFzTG9hZEFsbE1lc3NhZ2VzID0gZmFsc2U7XG4gIH1cblxuICBjbGlja0l0ZW1Ub1NoYXJlID0gKHsgaG9tZVBhZ2VMaXN0LCBjaGF0SWQsIHVzZXJJbmZvIH0pID0+IHtcbiAgICBjb25zdCBkYXRhID0gaG9tZVBhZ2VMaXN0LmZpbHRlcihlID0+IGUudXNlcl9pZCA9PT0gY2hhdElkIHx8IGUudG9fZ3JvdXBfaWQgPT09IGNoYXRJZCk7XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBFcnJvcihcImNhbid0IGZpbmQgdGhlIGRhdGUgb2YgdGhpcyBpdGVtXCIpO1xuICAgIH1cbiAgICBjb25zdCB7IG5hbWUsIGF2YXRhciwgdXNlcl9pZCwgdG9fZ3JvdXBfaWQgfSA9IHVzZXJJbmZvIHx8IGRhdGFbMF07XG4gICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICBzaGFyZUFjdGlvbih7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGF2YXRhcixcbiAgICAgICAgdXNlcl9pZCxcbiAgICAgICAgdG9fZ3JvdXBfaWQsXG4gICAgICB9KSxcbiAgICApO1xuICB9O1xuXG4gIGNsZWFyVW5yZWFkSGFuZGxlKHsgaG9tZVBhZ2VMaXN0LCBjaGF0RnJvbUlkIH0pIHtcbiAgICBzdG9yZS5kaXNwYXRjaChjbGVhclVucmVhZEFjdGlvbih7IGhvbWVQYWdlTGlzdCwgY2hhdEZyb21JZCB9KSk7XG4gIH1cblxuICBsYXp5TG9hZEdyb3VwTWVzc2FnZXMoeyBjaGF0cywgY2hhdElkLCBzdGFydCwgY291bnQgfSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX2hhc0xvYWRBbGxNZXNzYWdlcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdpbmRvdy5zb2NrZXQuZW1pdChcbiAgICAgICAgICAgICdnZXRPbmVHcm91cE1lc3NhZ2VzJyxcbiAgICAgICAgICAgIHsgZ3JvdXBJZDogY2hhdElkLCBzdGFydCwgY291bnQgfSxcbiAgICAgICAgICAgIGdyb3VwTWVzc2FnZXMgPT4ge1xuICAgICAgICAgICAgICBpZiAoZ3JvdXBNZXNzYWdlcyAmJiBncm91cE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhc0xvYWRBbGxNZXNzYWdlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgbm90aWZpY2F0aW9uKCflt7Lnu4/liLDlupXllaYnLCAnd2FybicsIDIpO1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICAgIGFkZEdyb3VwTWVzc2FnZXNBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgYWxsR3JvdXBDaGF0czogY2hhdHMsXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlczogZ3JvdXBNZXNzYWdlcyxcbiAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IGNoYXRJZCxcbiAgICAgICAgICAgICAgICAgIGluTGF6eUxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgbm90aWZpY2F0aW9uKCflh7rplJnllabvvIzor7fnqI3lkI7lho3or5UnLCAnZXJyb3InKTtcbiAgICAgICAgICBjb25zdCBlcnJvclRleHQgPSAndHJ5IGFnYWluIGxhdGVyJztcbiAgICAgICAgICByZWplY3QoZXJyb3JUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbGF6eUxvYWRQcml2YXRlQ2hhdE1lc3NhZ2VzKHsgY2hhdHMsIHVzZXJfaWQsIGNoYXRJZCwgc3RhcnQsIGNvdW50IH0pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9oYXNMb2FkQWxsTWVzc2FnZXMpIHtcbiAgICAgICAgd2luZG93LnNvY2tldC5lbWl0KFxuICAgICAgICAgICdnZXRPbmVQcml2YXRlQ2hhdE1lc3NhZ2VzJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1c2VyX2lkLFxuICAgICAgICAgICAgdG9Vc2VyOiBjaGF0SWQsXG4gICAgICAgICAgICBzdGFydCxcbiAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJpdmF0ZUNoYXRNZXNzYWdlcyA9PiB7XG4gICAgICAgICAgICBpZiAocHJpdmF0ZUNoYXRNZXNzYWdlcyAmJiBwcml2YXRlQ2hhdE1lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9oYXNMb2FkQWxsTWVzc2FnZXMgPSB0cnVlO1xuICAgICAgICAgICAgICBub3RpZmljYXRpb24oJ+W3sue7j+WIsOW6leWVpicsICd3YXJuJywgMik7XG4gICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICAgIGFkZFByaXZhdGVDaGF0TWVzc2FnZXNBY3Rpb24oe1xuICAgICAgICAgICAgICAgIGFsbFByaXZhdGVDaGF0czogY2hhdHMsXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHByaXZhdGVDaGF0TWVzc2FnZXMsXG4gICAgICAgICAgICAgICAgY2hhdElkLFxuICAgICAgICAgICAgICAgIGluTGF6eUxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJlc29sdmUoJ3N1Y2Nlc3MhJyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBpc1Njcm9sbEluQm90dG9tKCkge1xuICAgIGNvbnN0IHVsRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2hhdC1jb250ZW50LWxpc3QnKVswXTtcbiAgICBpZiAodWxEb20pIHtcbiAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wLCBvZmZzZXRIZWlnaHQsIHNjcm9sbEhlaWdodCB9ID0gdWxEb207XG4gICAgICByZXR1cm4gc2Nyb2xsVG9wID09PSBzY3JvbGxIZWlnaHQgLSBvZmZzZXRIZWlnaHQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiLyoqXG4gKlxuICogQHBhcmFtICAg5pe26Ze05oizXG4gKiBAcmV0dXJuICAgeXl5eS1NTS1kZCBoaDptbSDmoLzlvI/nmoTml7bpl7RcbiAqL1xuXG5mdW5jdGlvbiBhZGRaZXJvKGRhdGEpIHtcbiAgaWYgKGRhdGEudG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gYDAke2RhdGF9YDtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gbW9udGhIYW5kbGUobW9udGgpIHtcbiAgcmV0dXJuIGAke21vbnRoICsgMSA8IDEwID8gYDAke21vbnRoICsgMX1gIDogbW9udGggKyAxfWA7XG59XG5cbmV4cG9ydCBjb25zdCB0b05vcm1hbFRpbWUgPSB0aW1lc3RhbXAgPT4ge1xuICBjb25zdCBkYXRlT2ZBcmcgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKiAxMDAwKTtcbiAgY29uc3QgW3llYXJPZkFyZywgbW9udGhPZkFyZywgZGF5T2ZBcmcsIGhvdXJPZkFyZywgbWludXRlT2ZBcmddID0gW1xuICAgIGRhdGVPZkFyZy5nZXRGdWxsWWVhcigpLFxuICAgIGRhdGVPZkFyZy5nZXRNb250aCgpLFxuICAgIGRhdGVPZkFyZy5nZXREYXRlKCksXG4gICAgZGF0ZU9mQXJnLmdldEhvdXJzKCksXG4gICAgZGF0ZU9mQXJnLmdldE1pbnV0ZXMoKSxcbiAgXTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IFt0b2RheSwgeWVzdGVyZGF5LCB0aGlzTW9udGgsIHRoaXNZZWFyXSA9IFtcbiAgICBkYXRlLmdldERhdGUoKSxcbiAgICBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldERhdGUobmV3IERhdGUoKS5nZXREYXRlKCkgLSAxKSkuZ2V0RGF0ZSgpLFxuICAgIGRhdGUuZ2V0TW9udGgoKSxcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXG4gIF07XG5cbiAgY29uc3QgaXNUb2RheSA9IHRoaXNZZWFyID09PSB5ZWFyT2ZBcmcgJiYgdGhpc01vbnRoID09PSBtb250aE9mQXJnICYmIHRvZGF5ID09PSBkYXlPZkFyZztcbiAgaWYgKGlzVG9kYXkpIHtcbiAgICByZXR1cm4gYCR7YWRkWmVybyhob3VyT2ZBcmcpfToke2FkZFplcm8obWludXRlT2ZBcmcpfWA7XG4gIH1cblxuICBjb25zdCBpc1llc3RlcmRheSA9IHRoaXNZZWFyID09PSB5ZWFyT2ZBcmcgJiYgdGhpc01vbnRoID09PSBtb250aE9mQXJnICYmIHllc3RlcmRheSA9PT0gZGF5T2ZBcmc7XG4gIGlmIChpc1llc3RlcmRheSkge1xuICAgIHJldHVybiBg5pio5aSpICR7YWRkWmVybyhob3VyT2ZBcmcpfToke2FkZFplcm8obWludXRlT2ZBcmcpfWA7XG4gIH1cblxuICBpZiAoeWVhck9mQXJnID09PSB0aGlzWWVhcikge1xuICAgIHJldHVybiBgJHttb250aEhhbmRsZShtb250aE9mQXJnKX0vJHthZGRaZXJvKGRheU9mQXJnKX1gO1xuICB9XG5cbiAgcmV0dXJuIGAke3llYXJPZkFyZ30vJHttb250aEhhbmRsZShtb250aE9mQXJnKX0vJHthZGRaZXJvKGRheU9mQXJnKX1gO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=