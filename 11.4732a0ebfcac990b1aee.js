(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/MyInfo/styles.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/MyInfo/styles.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".myInfo {\n  display: none;\n  cursor: pointer; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Tabs/style.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/Tabs/style.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tabs-wrapper {\n  background-color: #f3f3f3;\n  align-items: center;\n  text-align: center;\n  z-index: 99; }\n  .tabs-wrapper .tab .icon {\n    font-size: 44px;\n    padding: 6px; }\n  .tabs-wrapper .userAvatar {\n    font-size: 14px;\n    text-align: center; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/MyInfo/index.js":
/*!****************************************!*\
  !*** ./src/components/MyInfo/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _UserAvatar = __webpack_require__(/*! ../UserAvatar */ "./src/components/UserAvatar/index.js");

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

var _PersonalInfo = __webpack_require__(/*! ../PersonalInfo */ "./src/components/PersonalInfo/index.js");

var _PersonalInfo2 = _interopRequireDefault(_PersonalInfo);

var _ShareModal = __webpack_require__(/*! ../ShareModal */ "./src/components/ShareModal/index.js");

var _ShareModal2 = _interopRequireDefault(_ShareModal);

var _store = __webpack_require__(/*! ../../redux/store */ "./src/redux/store.js");

var _store2 = _interopRequireDefault(_store);

__webpack_require__(/*! ./styles.scss */ "./src/components/MyInfo/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var MyInfo = function (_Component) {
  (0, _inherits3.default)(MyInfo, _Component);

  function MyInfo(props) {
    (0, _classCallCheck3.default)(this, MyInfo);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MyInfo.__proto__ || (0, _getPrototypeOf2.default)(MyInfo)).call(this, props));

    _this._showPersonalInfo = function () {
      _this.setState(function (state) {
        return { showPersonalInfo: !state.showPersonalInfo };
      });
    };

    _this._showShareModal = function () {
      _this.setState(function (state) {
        return {
          showShareModal: !state.showShareModal,
          showPersonalInfo: false
        };
      });
    };

    _this._closeShareModal = function () {
      _this.setState({ showShareModal: false });
    };

    _this.state = {
      showShareModal: false,
      showPersonalInfo: false
    };
    _this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return _this;
  }

  (0, _createClass3.default)(MyInfo, [{
    key: 'render',
    value: function render() {
      var _userInfo = this._userInfo,
          name = _userInfo.name,
          avatar = _userInfo.avatar,
          github_id = _userInfo.github_id,
          user_id = _userInfo.user_id;

      var _store$getState = _store2.default.getState(),
          allGroupChatsState = _store$getState.allGroupChatsState,
          homePageListState = _store$getState.homePageListState;

      return _react2.default.createElement(
        'div',
        { className: 'myInfo' },
        _react2.default.createElement(_UserAvatar2.default, {
          name: name,
          src: avatar,
          size: '36',
          clickAvatar: this._showPersonalInfo,
          showLogo: !!github_id
        }),
        _react2.default.createElement(_PersonalInfo2.default, {
          userInfo: this._userInfo,
          hide: this._showPersonalInfo,
          modalVisible: this.state.showPersonalInfo,
          showContactButton: false,
          showShareModal: this._showShareModal,
          showShareIcon: true
        }),
        _react2.default.createElement(_ShareModal2.default, {
          title: 'Share this contact with',
          modalVisible: this.state.showShareModal,
          chatId: user_id,
          cancel: this._closeShareModal,
          allGroupChats: allGroupChatsState,
          homePageList: homePageListState,
          userInfo: this._userInfo,
          shareLink: this.shareLink
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
    key: 'shareLink',
    get: function get() {
      return window.location.origin + '/private_chat/' + this._userInfo.user_id;
    }
  }]);
  return MyInfo;
}(_react.Component);

var _default = MyInfo;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(MyInfo, 'MyInfo', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/MyInfo/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/MyInfo/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/MyInfo/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/MyInfo/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/MyInfo/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/MyInfo/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/MyInfo/styles.scss");

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

/***/ "./src/components/Tabs/help.js":
/*!*************************************!*\
  !*** ./src/components/Tabs/help.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAppOnce = undefined;

var _InitApp = __webpack_require__(/*! ../../modules/InitApp */ "./src/modules/InitApp/index.js");

var _InitApp2 = _interopRequireDefault(_InitApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function initAppOnce(props) {
  if (Object.prototype.toString.call(props) !== '[object Object]') {
    throw new Error('please input props for init function');
  }
  if (!props.initializedApp && props.initApp) {
    var InitAppInstance = new _InitApp2.default({ history: props.history });
    InitAppInstance.init().then(function () {
      props.initApp(true);
    });
  }
}

exports.initAppOnce = initAppOnce;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initAppOnce, 'initAppOnce', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Tabs/help.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Tabs/index.js":
/*!**************************************!*\
  !*** ./src/components/Tabs/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

__webpack_require__(/*! ./style.scss */ "./src/components/Tabs/style.scss");

var _MyInfo = __webpack_require__(/*! ../MyInfo */ "./src/components/MyInfo/index.js");

var _MyInfo2 = _interopRequireDefault(_MyInfo);

var _help = __webpack_require__(/*! ./help */ "./src/components/Tabs/help.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
}; /* eslint-disable react/no-unused-prop-types */


var Tabs = function (_Component) {
  (0, _inherits3.default)(Tabs, _Component);

  function Tabs(props) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || (0, _getPrototypeOf2.default)(Tabs)).call(this, props));

    _this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    (0, _help.initAppOnce)(props);
    return _this;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'render',
    value: function render() {
      var pathname = this.props.location.pathname;

      var showMessageIcon = pathname === '/' || /\/group_chat|\/private_chat|\/robot_chat/.test(pathname);
      return _react2.default.createElement(
        'div',
        { className: 'tabs-wrapper' },
        _react2.default.createElement(_MyInfo2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'tab' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            _react2.default.createElement(
              'svg',
              { className: 'icon ', 'aria-hidden': 'true' },
              _react2.default.createElement('use', { xlinkHref: showMessageIcon ? '#icon-message-copy' : '#icon-message' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'tab' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/setting' },
            _react2.default.createElement(
              'svg',
              { className: 'icon ', 'aria-hidden': 'true' },
              _react2.default.createElement('use', { xlinkHref: pathname === '/setting' ? '#icon-setting-copy' : '#icon-setting' })
            )
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
  return Tabs;
}(_react.Component);

var _default = (0, _reactRouterDom.withRouter)(Tabs);

exports.default = _default;


Tabs.propTypes = {
  location: _propTypes2.default.object,
  initializedApp: _propTypes2.default.bool,
  initApp: _propTypes2.default.func
};

Tabs.defaultProps = {
  location: { pathname: '/' },
  initializedApp: false,
  initApp: function initApp() {}
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Tabs, 'Tabs', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Tabs/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Tabs/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Tabs/style.scss":
/*!****************************************!*\
  !*** ./src/components/Tabs/style.scss ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Tabs/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Tabs/style.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Tabs/style.scss");

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

/***/ "./src/containers/Tabs/index.js":
/*!**************************************!*\
  !*** ./src/containers/Tabs/index.js ***!
  \**************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Tabs = __webpack_require__(/*! ../../components/Tabs */ "./src/components/Tabs/index.js");

var _Tabs2 = _interopRequireDefault(_Tabs);

var _initAppAction = __webpack_require__(/*! ../../redux/actions/initAppAction */ "./src/redux/actions/initAppAction.js");

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
    initializedApp: state.initAppState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initApp: function initApp(arg) {
      dispatch((0, _initAppAction.initAppAction)(arg));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Tabs2.default);

exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/Tabs/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/Tabs/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/Tabs/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/modules/BrowserNotification/index.js":
/*!**************************************************!*\
  !*** ./src/modules/BrowserNotification/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _Notification = __webpack_require__(/*! ../../components/Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _store = __webpack_require__(/*! ../../redux/store */ "./src/redux/store.js");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var BrowserNotification = function () {
  function BrowserNotification() {
    (0, _classCallCheck3.default)(this, BrowserNotification);

    this._notificationEnable = false;
    this._checkOrRequirePermission();
  }

  (0, _createClass3.default)(BrowserNotification, [{
    key: '_checkOrRequirePermission',
    value: function _checkOrRequirePermission() {
      var _this = this;

      if (!this.notification) {
        // eslint-disable-next-line no-alert
        (0, _Notification2.default)('此浏览器不支持浏览器Suggestion', 'warn', 3);
        return;
      }
      if (this.hasPermission) {
        this._notificationEnable = true;
        return;
      }
      if (this.permission && this.permission !== 'denied') {
        this.notification.requestPermission(function (status) {
          if (_this.permission !== status) {
            _this.permission = status;
          }
          if (status === 'granted') {
            _this._notificationEnable = true;
          }
        });
      }
    }
  }, {
    key: 'notify',
    value: function notify(_ref) {
      var title = _ref.title,
          text = _ref.text,
          icon = _ref.icon,
          onClick = _ref.onClick,
          audio = _ref.audio;

      var _store$getState = _store2.default.getState(),
          notification = _store$getState.globalSettingsState.notification;

      if (!this._notificationEnable || !notification) {
        return;
      }
      var n = new window.Notification(title, { body: text, icon: icon });
      n.onclick = function () {
        onClick();
        n.close();
      };
      this._onPlay(audio);
    }
  }, {
    key: '_onPlay',
    value: function _onPlay(src) {
      var audio = document.createElement('audio');
      audio.setAttribute('src', src);
      audio.play();
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }, {
    key: 'permission',
    get: function get() {
      return this.notification.permission;
    },
    set: function set(value) {
      if (value) {
        this.notification.permission = value;
      }
    }
  }, {
    key: 'hasPermission',
    get: function get() {
      return this.permission && this.permission === 'granted';
    }
  }, {
    key: 'notification',
    get: function get() {
      return window.Notification;
    }
  }]);
  return BrowserNotification;
}();

var _default = BrowserNotification;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BrowserNotification, 'BrowserNotification', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/modules/BrowserNotification/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/modules/BrowserNotification/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/modules/InitApp/index.js":
/*!**************************************!*\
  !*** ./src/modules/InitApp/index.js ***!
  \**************************************/
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

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _socket = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");

var _socket2 = _interopRequireDefault(_socket);

var _store = __webpack_require__(/*! ../../redux/store */ "./src/redux/store.js");

var _store2 = _interopRequireDefault(_store);

var _homePageListAction = __webpack_require__(/*! ../../containers/HomePageList/homePageListAction */ "./src/containers/HomePageList/homePageListAction.js");

var _groupChatAction = __webpack_require__(/*! ../../containers/GroupChatPage/groupChatAction */ "./src/containers/GroupChatPage/groupChatAction.js");

var _privateChatAction = __webpack_require__(/*! ../../containers/PrivateChatPage/privateChatAction */ "./src/containers/PrivateChatPage/privateChatAction.js");

var _Notification = __webpack_require__(/*! ../../components/Notification */ "./src/components/Notification/index.js");

var _Notification2 = _interopRequireDefault(_Notification);

var _BrowserNotification = __webpack_require__(/*! ../BrowserNotification */ "./src/modules/BrowserNotification/index.js");

var _BrowserNotification2 = _interopRequireDefault(_BrowserNotification);

var _Chat = __webpack_require__(/*! ../Chat */ "./src/modules/Chat/index.js");

var _Chat2 = _interopRequireDefault(_Chat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var InitApp = function () {
  function InitApp(props) {
    var _this = this;

    (0, _classCallCheck3.default)(this, InitApp);

    this._browserNotificationHandle = function (data) {
      var _store$getState = _store2.default.getState(),
          homePageListState = _store$getState.homePageListState;

      var name = data.name,
          message = data.message,
          avatar = data.avatar;

      var chatType = data.to_group_id ? 'group_chat' : 'private_chat';
      var chatFromId = data.to_group_id ? data.to_group_id : data.from_user;
      var title = data.to_group_id && data.groupName ? data.groupName : name;
      var audio = 'https://cdn.aermin.top/audio.aac';
      _this._browserNotification.notify({
        title: title,
        text: message,
        icon: avatar,
        audio: audio,
        onClick: function onClick() {
          _this._history.push('/' + chatType + '/' + chatFromId);
          window.focus();
          _this._chat.clearUnreadHandle({
            homePageList: homePageListState,
            chatFromId: chatFromId
          });
        }
      });
    };

    this._init = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this._connectSocket();
              _this.subscribeSocket();
              console.log('init app success. ', 'time=>', new Date().toLocaleString());

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));
    this.init = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var afterReconnecting;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(_this._userInfo && !_this.initialized)) {
                _context3.next = 11;
                break;
              }

              _context3.next = 3;
              return _this._init();

            case 3:
              _this.initialized = true;
              console.log('initialized');
              afterReconnecting = false;

              window.socket.on('error', function (error) {
                (0, _Notification2.default)(error, 'error');
              });
              window.socket.on('reconnect', function (attemptNumber) {
                if (!afterReconnecting) {
                  window.socket.disconnect();
                  _this._init();
                  afterReconnecting = true;
                  console.log('not reconnecting, open automatically time=>', new Date().toLocaleString());
                }
                console.log('reconnect successfully. attemptNumber =>', attemptNumber, 'socket-id => ', window.socket.id, 'time=>', new Date().toLocaleString());
              });
              window.socket.on('reconnecting', function (attemptNumber) {
                afterReconnecting = true;
                console.log('reconnecting. attemptNumber =>', attemptNumber, 'time=>', new Date().toLocaleString());
              });
              window.socket.on('disconnect', function () {
                var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(reason) {
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          afterReconnecting = false;
                          console.log('disconnect in client, disconnect reason =>', reason, 'time=>', new Date().toLocaleString());

                        case 2:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this);
                }));

                return function (_x) {
                  return _ref3.apply(this, arguments);
                };
              }());
              window.socket.on('reconnect_error', function (error) {
                afterReconnecting = false;
                console.log('reconnect_error. error =>', error, 'time=>', new Date().toLocaleString());
                (0, _Notification2.default)(error, 'error');
              });

            case 11:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    this.WEBSITE_ADDRESS =  false ? undefined : 'http://localhost:3000';
    this._userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this._hasCalledMe = false;
    this._browserNotification = new _BrowserNotification2.default();
    this._chat = new _Chat2.default();
    this._history = props.history;
    this.initialized = false;
  }

  (0, _createClass3.default)(InitApp, [{
    key: '_listeningPrivateChatMsg',
    value: function _listeningPrivateChatMsg() {
      var _this2 = this;

      window.socket.on('getPrivateMsg', function (data) {
        var _store$getState2 = _store2.default.getState(),
            homePageListState = _store$getState2.homePageListState,
            allPrivateChatsState = _store$getState2.allPrivateChatsState;
        // eslint-disable-next-line radix


        var chatId = parseInt(window.location.pathname.split('/').slice(-1)[0]);
        var isRelatedCurrentChat = data.from_user === chatId || data.to_user === chatId;
        var increaseUnread = isRelatedCurrentChat ? 0 : 1;
        _store2.default.dispatch((0, _homePageListAction.relatedCurrentChatAction)(isRelatedCurrentChat));
        if (!allPrivateChatsState.get(data.from_user) || !allPrivateChatsState.get(data.from_user).userInfo) {
          var userInfo = (0, _extends3.default)({}, data, {
            user_id: data.from_user
          });
          _store2.default.dispatch((0, _privateChatAction.addPrivateChatMessageAndInfoAction)({
            allPrivateChats: allPrivateChatsState,
            message: data,
            chatId: data.from_user,
            userInfo: userInfo
          }));
        } else {
          _store2.default.dispatch((0, _privateChatAction.addPrivateChatMessagesAction)({
            allPrivateChats: allPrivateChatsState,
            message: data,
            chatId: data.from_user
          }));
        }
        _store2.default.dispatch((0, _homePageListAction.updateHomePageListAction)({
          data: data,
          homePageList: homePageListState,
          myUserId: _this2.user_id,
          increaseUnread: increaseUnread
        }));
        _this2._browserNotificationHandle(data);
        // TODO: mute notifications switch
      });
    }
  }, {
    key: '_listeningGroupChatMsg',
    value: function _listeningGroupChatMsg() {
      var _this3 = this;

      window.socket.on('getGroupMsg', function (data) {
        var _store$getState3 = _store2.default.getState(),
            allGroupChatsState = _store$getState3.allGroupChatsState,
            homePageListState = _store$getState3.homePageListState;
        // eslint-disable-next-line radix


        var chatId = window.location.pathname.split('/').slice(-1)[0];
        var isRelatedCurrentChat = data.to_group_id === chatId;
        _store2.default.dispatch((0, _homePageListAction.relatedCurrentChatAction)(isRelatedCurrentChat));
        if (data.tip === 'joinGroup') {
          _store2.default.dispatch((0, _groupChatAction.addGroupMessageAndInfoAction)({
            allGroupChats: allGroupChatsState,
            groupId: data.to_group_id,
            message: data,
            member: data
          }));
        } else {
          _store2.default.dispatch((0, _groupChatAction.addGroupMessagesAction)({
            allGroupChats: allGroupChatsState,
            message: data,
            groupId: data.to_group_id
          }));
        }
        if (data.message && !_this3._hasCalledMe) {
          var regexp = new RegExp('@' + _this3._userInfo.name + '\\s\\S*|@' + _this3._userInfo.name + '$');
          _this3._hasCalledMe = regexp.test(data.message);
        }
        _store2.default.dispatch((0, _homePageListAction.updateHomePageListAction)({
          data: data,
          homePageList: homePageListState,
          increaseUnread: isRelatedCurrentChat ? 0 : 1,
          showCallMeTip: _this3._hasCalledMe
        }));
        _this3._browserNotificationHandle(data);
        // TODO: mute notifications switch
      });
    }
  }, {
    key: '_listeningBeDelete',
    value: function _listeningBeDelete() {
      window.socket.on('beDeleted', function (from_user) {
        var homePageList = _store2.default.getState().homePageListState;
        var allPrivateChats = _store2.default.getState().allPrivateChats;
        _store2.default.dispatch((0, _homePageListAction.deleteHomePageListAction)({ homePageList: homePageList, chatId: from_user }));
        _store2.default.dispatch((0, _privateChatAction.deletePrivateChatAction)({ allPrivateChats: allPrivateChats, chatId: from_user }));
      });
    }
  }, {
    key: '_listeningInitMessage',
    value: function _listeningInitMessage() {
      var _this4 = this;

      window.socket.on('initSocketSuccess', function (allMessage) {
        var privateChat = new _map2.default(allMessage.privateChat);
        var groupChat = new _map2.default(allMessage.groupChat);
        _store2.default.dispatch((0, _homePageListAction.setHomePageListAction)(allMessage.homePageList));
        _store2.default.dispatch((0, _privateChatAction.setAllPrivateChatsAction)({ data: privateChat }));
        _store2.default.dispatch((0, _groupChatAction.setAllGroupChatsAction)({ data: groupChat }));
        console.log('initMessage success. ', 'time=>', new Date().toLocaleString());
      });
      window.socket.on('initSocket', function (socketId, fn) {
        var clientHomePageList = JSON.parse(localStorage.getItem('homePageList-' + _this4.user_id));
        fn(_this4.user_id, clientHomePageList);
      });
    }
  }, {
    key: 'subscribeSocket',
    value: function subscribeSocket() {
      window.socket.removeAllListeners();
      this._listeningInitMessage();
      this._listeningPrivateChatMsg();
      this._listeningGroupChatMsg();
      this._listeningBeDelete();
      console.log('subscribeSocket success. ', 'time=>', new Date().toLocaleString());
    }
  }, {
    key: '_connectSocket',
    value: function _connectSocket() {
      window.socket = (0, _socket2.default)(this.WEBSITE_ADDRESS + '?token=' + this._userInfo.token);
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }, {
    key: 'user_id',
    get: function get() {
      return this._userInfo && this._userInfo.user_id || null;
    }
  }]);
  return InitApp;
}();

var _default = InitApp;
exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(InitApp, 'InitApp', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/modules/InitApp/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/modules/InitApp/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NeUluZm8vc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFicy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL015SW5mby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NeUluZm8vc3R5bGVzLnNjc3M/ZjZhNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJzL2hlbHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFicy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJzL3N0eWxlLnNjc3M/YjA2MSIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVycy9UYWJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL0Jyb3dzZXJOb3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvSW5pdEFwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpIl0sIm5hbWVzIjpbIk15SW5mbyIsInByb3BzIiwiX3Nob3dQZXJzb25hbEluZm8iLCJzZXRTdGF0ZSIsInNob3dQZXJzb25hbEluZm8iLCJzdGF0ZSIsIl9zaG93U2hhcmVNb2RhbCIsInNob3dTaGFyZU1vZGFsIiwiX2Nsb3NlU2hhcmVNb2RhbCIsIl91c2VySW5mbyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuYW1lIiwiYXZhdGFyIiwiZ2l0aHViX2lkIiwidXNlcl9pZCIsInN0b3JlIiwiZ2V0U3RhdGUiLCJhbGxHcm91cENoYXRzU3RhdGUiLCJob21lUGFnZUxpc3RTdGF0ZSIsInNoYXJlTGluayIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiQ29tcG9uZW50IiwiaW5pdEFwcE9uY2UiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJFcnJvciIsImluaXRpYWxpemVkQXBwIiwiaW5pdEFwcCIsIkluaXRBcHBJbnN0YW5jZSIsIkluaXRBcHAiLCJoaXN0b3J5IiwiaW5pdCIsInRoZW4iLCJUYWJzIiwicGF0aG5hbWUiLCJzaG93TWVzc2FnZUljb24iLCJ0ZXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiYm9vbCIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJpbml0QXBwU3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJhcmciLCJkaXNwYXRjaCIsIkJyb3dzZXJOb3RpZmljYXRpb24iLCJfbm90aWZpY2F0aW9uRW5hYmxlIiwiX2NoZWNrT3JSZXF1aXJlUGVybWlzc2lvbiIsIm5vdGlmaWNhdGlvbiIsImhhc1Blcm1pc3Npb24iLCJwZXJtaXNzaW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJzdGF0dXMiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwib25DbGljayIsImF1ZGlvIiwiZ2xvYmFsU2V0dGluZ3NTdGF0ZSIsIm4iLCJOb3RpZmljYXRpb24iLCJib2R5Iiwib25jbGljayIsImNsb3NlIiwiX29uUGxheSIsInNyYyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInBsYXkiLCJ2YWx1ZSIsIl9icm93c2VyTm90aWZpY2F0aW9uSGFuZGxlIiwiZGF0YSIsIm1lc3NhZ2UiLCJjaGF0VHlwZSIsInRvX2dyb3VwX2lkIiwiY2hhdEZyb21JZCIsImZyb21fdXNlciIsImdyb3VwTmFtZSIsIl9icm93c2VyTm90aWZpY2F0aW9uIiwibm90aWZ5IiwiX2hpc3RvcnkiLCJwdXNoIiwiZm9jdXMiLCJfY2hhdCIsImNsZWFyVW5yZWFkSGFuZGxlIiwiaG9tZVBhZ2VMaXN0IiwiX2luaXQiLCJfY29ubmVjdFNvY2tldCIsInN1YnNjcmliZVNvY2tldCIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJpbml0aWFsaXplZCIsImFmdGVyUmVjb25uZWN0aW5nIiwic29ja2V0Iiwib24iLCJlcnJvciIsImRpc2Nvbm5lY3QiLCJhdHRlbXB0TnVtYmVyIiwiaWQiLCJyZWFzb24iLCJXRUJTSVRFX0FERFJFU1MiLCJwcm9jZXNzIiwiX2hhc0NhbGxlZE1lIiwiQ2hhdCIsImFsbFByaXZhdGVDaGF0c1N0YXRlIiwiY2hhdElkIiwicGFyc2VJbnQiLCJzcGxpdCIsInNsaWNlIiwiaXNSZWxhdGVkQ3VycmVudENoYXQiLCJ0b191c2VyIiwiaW5jcmVhc2VVbnJlYWQiLCJnZXQiLCJ1c2VySW5mbyIsImFsbFByaXZhdGVDaGF0cyIsIm15VXNlcklkIiwidGlwIiwiYWxsR3JvdXBDaGF0cyIsImdyb3VwSWQiLCJtZW1iZXIiLCJyZWdleHAiLCJSZWdFeHAiLCJzaG93Q2FsbE1lVGlwIiwicHJpdmF0ZUNoYXQiLCJhbGxNZXNzYWdlIiwiZ3JvdXBDaGF0Iiwic29ja2V0SWQiLCJmbiIsImNsaWVudEhvbWVQYWdlTGlzdCIsInJlbW92ZUFsbExpc3RlbmVycyIsIl9saXN0ZW5pbmdJbml0TWVzc2FnZSIsIl9saXN0ZW5pbmdQcml2YXRlQ2hhdE1zZyIsIl9saXN0ZW5pbmdHcm91cENoYXRNc2ciLCJfbGlzdGVuaW5nQmVEZWxldGUiLCJ0b2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjs7O0FBR0E7QUFDQSxjQUFjLFFBQVMsWUFBWSxrQkFBa0Isb0JBQW9CLEVBQUU7O0FBRTNFOzs7Ozs7Ozs7Ozs7O0FDUEEsMkJBQTJCLG1CQUFPLENBQUMsbUdBQWtEO0FBQ3JGOzs7QUFHQTtBQUNBLGNBQWMsUUFBUyxrQkFBa0IsOEJBQThCLHdCQUF3Qix1QkFBdUIsZ0JBQWdCLEVBQUUsOEJBQThCLHNCQUFzQixtQkFBbUIsRUFBRSwrQkFBK0Isc0JBQXNCLHlCQUF5QixFQUFFOztBQUVqUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNmaEYsYUFBT21GLE1BQVAsR0FBZ0Isc0JBQU0sS0FBS08sZUFBWCxlQUFvQyxLQUFLeEcsU0FBTCxDQUFlMEksS0FBbkQsQ0FBaEI7QUFDRDs7Ozs7Ozs7Ozt3QkEyRGE7QUFDWixhQUFRLEtBQUsxSSxTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZVEsT0FBbEMsSUFBOEMsSUFBckQ7QUFDRDs7Ozs7ZUFHWW1CLE87Ozs7Ozs7Ozs7OzBCQTlOVEEsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCTixlIiwiZmlsZSI6IjExLjQ3MzJhMGViZmNhYzk5MGIxYWVlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubXlJbmZvIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YWJzLXdyYXBwZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiA5OTsgfVxcbiAgLnRhYnMtd3JhcHBlciAudGFiIC5pY29uIHtcXG4gICAgZm9udC1zaXplOiA0NHB4O1xcbiAgICBwYWRkaW5nOiA2cHg7IH1cXG4gIC50YWJzLXdyYXBwZXIgLnVzZXJBdmF0YXIge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlckF2YXRhciBmcm9tICcuLi9Vc2VyQXZhdGFyJztcbmltcG9ydCBQZXJzb25hbEluZm8gZnJvbSAnLi4vUGVyc29uYWxJbmZvJztcbmltcG9ydCBTaGFyZU1vZGFsIGZyb20gJy4uL1NoYXJlTW9kYWwnO1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3JlZHV4L3N0b3JlJztcbmltcG9ydCAnLi9zdHlsZXMuc2Nzcyc7XG5cbmNsYXNzIE15SW5mbyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93U2hhcmVNb2RhbDogZmFsc2UsXG4gICAgICBzaG93UGVyc29uYWxJbmZvOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMuX3VzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKSk7XG4gIH1cblxuICBfc2hvd1BlcnNvbmFsSW5mbyA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHN0YXRlID0+ICh7IHNob3dQZXJzb25hbEluZm86ICFzdGF0ZS5zaG93UGVyc29uYWxJbmZvIH0pKTtcbiAgfTtcblxuICBfc2hvd1NoYXJlTW9kYWwgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgc2hvd1NoYXJlTW9kYWw6ICFzdGF0ZS5zaG93U2hhcmVNb2RhbCxcbiAgICAgIHNob3dQZXJzb25hbEluZm86IGZhbHNlLFxuICAgIH0pKTtcbiAgfTtcblxuICBfY2xvc2VTaGFyZU1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U2hhcmVNb2RhbDogZmFsc2UgfSk7XG4gIH07XG5cbiAgZ2V0IHNoYXJlTGluaygpIHtcbiAgICByZXR1cm4gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vcHJpdmF0ZV9jaGF0LyR7dGhpcy5fdXNlckluZm8udXNlcl9pZH1gO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgYXZhdGFyLCBnaXRodWJfaWQsIHVzZXJfaWQgfSA9IHRoaXMuX3VzZXJJbmZvO1xuICAgIGNvbnN0IHsgYWxsR3JvdXBDaGF0c1N0YXRlLCBob21lUGFnZUxpc3RTdGF0ZSB9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteUluZm9cIj5cbiAgICAgICAgPFVzZXJBdmF0YXJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHNyYz17YXZhdGFyfVxuICAgICAgICAgIHNpemU9XCIzNlwiXG4gICAgICAgICAgY2xpY2tBdmF0YXI9e3RoaXMuX3Nob3dQZXJzb25hbEluZm99XG4gICAgICAgICAgc2hvd0xvZ289eyEhZ2l0aHViX2lkfVxuICAgICAgICAvPlxuICAgICAgICA8UGVyc29uYWxJbmZvXG4gICAgICAgICAgdXNlckluZm89e3RoaXMuX3VzZXJJbmZvfVxuICAgICAgICAgIGhpZGU9e3RoaXMuX3Nob3dQZXJzb25hbEluZm99XG4gICAgICAgICAgbW9kYWxWaXNpYmxlPXt0aGlzLnN0YXRlLnNob3dQZXJzb25hbEluZm99XG4gICAgICAgICAgc2hvd0NvbnRhY3RCdXR0b249e2ZhbHNlfVxuICAgICAgICAgIHNob3dTaGFyZU1vZGFsPXt0aGlzLl9zaG93U2hhcmVNb2RhbH1cbiAgICAgICAgICBzaG93U2hhcmVJY29uXG4gICAgICAgIC8+XG4gICAgICAgIDxTaGFyZU1vZGFsXG4gICAgICAgICAgdGl0bGU9XCJTaGFyZSB0aGlzIGNvbnRhY3Qgd2l0aFwiXG4gICAgICAgICAgbW9kYWxWaXNpYmxlPXt0aGlzLnN0YXRlLnNob3dTaGFyZU1vZGFsfVxuICAgICAgICAgIGNoYXRJZD17dXNlcl9pZH1cbiAgICAgICAgICBjYW5jZWw9e3RoaXMuX2Nsb3NlU2hhcmVNb2RhbH1cbiAgICAgICAgICBhbGxHcm91cENoYXRzPXthbGxHcm91cENoYXRzU3RhdGV9XG4gICAgICAgICAgaG9tZVBhZ2VMaXN0PXtob21lUGFnZUxpc3RTdGF0ZX1cbiAgICAgICAgICB1c2VySW5mbz17dGhpcy5fdXNlckluZm99XG4gICAgICAgICAgc2hhcmVMaW5rPXt0aGlzLnNoYXJlTGlua31cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlJbmZvO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IEluaXRBcHAgZnJvbSAnLi4vLi4vbW9kdWxlcy9Jbml0QXBwJztcblxuZnVuY3Rpb24gaW5pdEFwcE9uY2UocHJvcHMpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9wcykgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwbGVhc2UgaW5wdXQgcHJvcHMgZm9yIGluaXQgZnVuY3Rpb24nKTtcbiAgfVxuICBpZiAoIXByb3BzLmluaXRpYWxpemVkQXBwICYmIHByb3BzLmluaXRBcHApIHtcbiAgICBjb25zdCBJbml0QXBwSW5zdGFuY2UgPSBuZXcgSW5pdEFwcCh7IGhpc3Rvcnk6IHByb3BzLmhpc3RvcnkgfSk7XG4gICAgSW5pdEFwcEluc3RhbmNlLmluaXQoKS50aGVuKCgpID0+IHtcbiAgICAgIHByb3BzLmluaXRBcHAodHJ1ZSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IHsgaW5pdEFwcE9uY2UgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCBNeUluZm8gZnJvbSAnLi4vTXlJbmZvJztcbmltcG9ydCB7IGluaXRBcHBPbmNlIH0gZnJvbSAnLi9oZWxwJztcblxuY2xhc3MgVGFicyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuX3VzZXJJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKSk7XG4gICAgaW5pdEFwcE9uY2UocHJvcHMpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHRoaXMucHJvcHMubG9jYXRpb247XG4gICAgY29uc3Qgc2hvd01lc3NhZ2VJY29uID1cbiAgICAgIHBhdGhuYW1lID09PSAnLycgfHwgL1xcL2dyb3VwX2NoYXR8XFwvcHJpdmF0ZV9jaGF0fFxcL3JvYm90X2NoYXQvLnRlc3QocGF0aG5hbWUpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnMtd3JhcHBlclwiPlxuICAgICAgICA8TXlJbmZvIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb24gXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPXtzaG93TWVzc2FnZUljb24gPyAnI2ljb24tbWVzc2FnZS1jb3B5JyA6ICcjaWNvbi1tZXNzYWdlJ30gLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiXCI+XG4gICAgICAgICAgPExpbmsgdG89XCIvc2V0dGluZ1wiPlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uIFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICA8dXNlIHhsaW5rSHJlZj17cGF0aG5hbWUgPT09ICcvc2V0dGluZycgPyAnI2ljb24tc2V0dGluZy1jb3B5JyA6ICcjaWNvbi1zZXR0aW5nJ30gLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoVGFicyk7XG5cblRhYnMucHJvcFR5cGVzID0ge1xuICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgaW5pdGlhbGl6ZWRBcHA6IFByb3BUeXBlcy5ib29sLFxuICBpbml0QXBwOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblRhYnMuZGVmYXVsdFByb3BzID0ge1xuICBsb2NhdGlvbjogeyBwYXRobmFtZTogJy8nIH0sXG4gIGluaXRpYWxpemVkQXBwOiBmYWxzZSxcbiAgaW5pdEFwcCgpIHt9LFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVGFicyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYnMnO1xuaW1wb3J0IHsgaW5pdEFwcEFjdGlvbiB9IGZyb20gJy4uLy4uL3JlZHV4L2FjdGlvbnMvaW5pdEFwcEFjdGlvbic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGluaXRpYWxpemVkQXBwOiBzdGF0ZS5pbml0QXBwU3RhdGUsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgaW5pdEFwcChhcmcpIHtcbiAgICBkaXNwYXRjaChpbml0QXBwQWN0aW9uKGFyZykpO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFRhYnMpO1xuIiwiaW1wb3J0IG5vdGlmaWNhdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbic7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vcmVkdXgvc3RvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcm93c2VyTm90aWZpY2F0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fbm90aWZpY2F0aW9uRW5hYmxlID0gZmFsc2U7XG4gICAgdGhpcy5fY2hlY2tPclJlcXVpcmVQZXJtaXNzaW9uKCk7XG4gIH1cblxuICBfY2hlY2tPclJlcXVpcmVQZXJtaXNzaW9uKCkge1xuICAgIGlmICghdGhpcy5ub3RpZmljYXRpb24pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hbGVydFxuICAgICAgbm90aWZpY2F0aW9uKCfmraTmtY/op4jlmajkuI3mlK/mjIHmtY/op4jlmahTdWdnZXN0aW9uJywgJ3dhcm4nLCAzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaGFzUGVybWlzc2lvbikge1xuICAgICAgdGhpcy5fbm90aWZpY2F0aW9uRW5hYmxlID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMucGVybWlzc2lvbiAmJiB0aGlzLnBlcm1pc3Npb24gIT09ICdkZW5pZWQnKSB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbihzdGF0dXMgPT4ge1xuICAgICAgICBpZiAodGhpcy5wZXJtaXNzaW9uICE9PSBzdGF0dXMpIHtcbiAgICAgICAgICB0aGlzLnBlcm1pc3Npb24gPSBzdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ2dyYW50ZWQnKSB7XG4gICAgICAgICAgdGhpcy5fbm90aWZpY2F0aW9uRW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KHsgdGl0bGUsIHRleHQsIGljb24sIG9uQ2xpY2ssIGF1ZGlvIH0pIHtcbiAgICBjb25zdCB7XG4gICAgICBnbG9iYWxTZXR0aW5nc1N0YXRlOiB7IG5vdGlmaWNhdGlvbiB9LFxuICAgIH0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGlmICghdGhpcy5fbm90aWZpY2F0aW9uRW5hYmxlIHx8ICFub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbiA9IG5ldyB3aW5kb3cuTm90aWZpY2F0aW9uKHRpdGxlLCB7IGJvZHk6IHRleHQsIGljb24gfSk7XG4gICAgbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgb25DbGljaygpO1xuICAgICAgbi5jbG9zZSgpO1xuICAgIH07XG4gICAgdGhpcy5fb25QbGF5KGF1ZGlvKTtcbiAgfVxuXG4gIF9vblBsYXkoc3JjKSB7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgIGF1ZGlvLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cblxuICBnZXQgcGVybWlzc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ub3RpZmljYXRpb24ucGVybWlzc2lvbjtcbiAgfVxuXG4gIHNldCBwZXJtaXNzaW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLm5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc1Blcm1pc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbiAmJiB0aGlzLnBlcm1pc3Npb24gPT09ICdncmFudGVkJztcbiAgfVxuXG4gIGdldCBub3RpZmljYXRpb24oKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5Ob3RpZmljYXRpb247XG4gIH1cbn1cbiIsImltcG9ydCBpbyBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcbmltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi9yZWR1eC9zdG9yZSc7XG5pbXBvcnQge1xuICB1cGRhdGVIb21lUGFnZUxpc3RBY3Rpb24sXG4gIHJlbGF0ZWRDdXJyZW50Q2hhdEFjdGlvbixcbiAgc2V0SG9tZVBhZ2VMaXN0QWN0aW9uLFxuICBkZWxldGVIb21lUGFnZUxpc3RBY3Rpb24sXG59IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvSG9tZVBhZ2VMaXN0L2hvbWVQYWdlTGlzdEFjdGlvbic7XG5pbXBvcnQge1xuICBhZGRHcm91cE1lc3NhZ2VzQWN0aW9uLFxuICBhZGRHcm91cE1lc3NhZ2VBbmRJbmZvQWN0aW9uLFxuICBzZXRBbGxHcm91cENoYXRzQWN0aW9uLFxufSBmcm9tICcuLi8uLi9jb250YWluZXJzL0dyb3VwQ2hhdFBhZ2UvZ3JvdXBDaGF0QWN0aW9uJztcbmltcG9ydCB7XG4gIGFkZFByaXZhdGVDaGF0TWVzc2FnZXNBY3Rpb24sXG4gIGFkZFByaXZhdGVDaGF0TWVzc2FnZUFuZEluZm9BY3Rpb24sXG4gIHNldEFsbFByaXZhdGVDaGF0c0FjdGlvbixcbiAgZGVsZXRlUHJpdmF0ZUNoYXRBY3Rpb24sXG59IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvUHJpdmF0ZUNoYXRQYWdlL3ByaXZhdGVDaGF0QWN0aW9uJztcbmltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Ob3RpZmljYXRpb24nO1xuaW1wb3J0IEJyb3dzZXJOb3RpZmljYXRpb24gZnJvbSAnLi4vQnJvd3Nlck5vdGlmaWNhdGlvbic7XG5pbXBvcnQgQ2hhdCBmcm9tICcuLi9DaGF0JztcblxuY2xhc3MgSW5pdEFwcCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5XRUJTSVRFX0FERFJFU1MgPVxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2ltLmFlcm1pbi50b3AnIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gICAgdGhpcy5fdXNlckluZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpKTtcbiAgICB0aGlzLl9oYXNDYWxsZWRNZSA9IGZhbHNlO1xuICAgIHRoaXMuX2Jyb3dzZXJOb3RpZmljYXRpb24gPSBuZXcgQnJvd3Nlck5vdGlmaWNhdGlvbigpO1xuICAgIHRoaXMuX2NoYXQgPSBuZXcgQ2hhdCgpO1xuICAgIHRoaXMuX2hpc3RvcnkgPSBwcm9wcy5oaXN0b3J5O1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9icm93c2VyTm90aWZpY2F0aW9uSGFuZGxlID0gZGF0YSA9PiB7XG4gICAgY29uc3QgeyBob21lUGFnZUxpc3RTdGF0ZSB9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBjb25zdCB7IG5hbWUsIG1lc3NhZ2UsIGF2YXRhciB9ID0gZGF0YTtcbiAgICBjb25zdCBjaGF0VHlwZSA9IGRhdGEudG9fZ3JvdXBfaWQgPyAnZ3JvdXBfY2hhdCcgOiAncHJpdmF0ZV9jaGF0JztcbiAgICBjb25zdCBjaGF0RnJvbUlkID0gZGF0YS50b19ncm91cF9pZCA/IGRhdGEudG9fZ3JvdXBfaWQgOiBkYXRhLmZyb21fdXNlcjtcbiAgICBjb25zdCB0aXRsZSA9IGRhdGEudG9fZ3JvdXBfaWQgJiYgZGF0YS5ncm91cE5hbWUgPyBkYXRhLmdyb3VwTmFtZSA6IG5hbWU7XG4gICAgY29uc3QgYXVkaW8gPSAnaHR0cHM6Ly9jZG4uYWVybWluLnRvcC9hdWRpby5hYWMnO1xuICAgIHRoaXMuX2Jyb3dzZXJOb3RpZmljYXRpb24ubm90aWZ5KHtcbiAgICAgIHRpdGxlLFxuICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICAgIGljb246IGF2YXRhcixcbiAgICAgIGF1ZGlvLFxuICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2goYC8ke2NoYXRUeXBlfS8ke2NoYXRGcm9tSWR9YCk7XG4gICAgICAgIHdpbmRvdy5mb2N1cygpO1xuICAgICAgICB0aGlzLl9jaGF0LmNsZWFyVW5yZWFkSGFuZGxlKHtcbiAgICAgICAgICBob21lUGFnZUxpc3Q6IGhvbWVQYWdlTGlzdFN0YXRlLFxuICAgICAgICAgIGNoYXRGcm9tSWQsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICBfbGlzdGVuaW5nUHJpdmF0ZUNoYXRNc2coKSB7XG4gICAgd2luZG93LnNvY2tldC5vbignZ2V0UHJpdmF0ZU1zZycsIGRhdGEgPT4ge1xuICAgICAgY29uc3QgeyBob21lUGFnZUxpc3RTdGF0ZSwgYWxsUHJpdmF0ZUNoYXRzU3RhdGUgfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmFkaXhcbiAgICAgIGNvbnN0IGNoYXRJZCA9IHBhcnNlSW50KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpLnNsaWNlKC0xKVswXSk7XG4gICAgICBjb25zdCBpc1JlbGF0ZWRDdXJyZW50Q2hhdCA9IGRhdGEuZnJvbV91c2VyID09PSBjaGF0SWQgfHwgZGF0YS50b191c2VyID09PSBjaGF0SWQ7XG4gICAgICBjb25zdCBpbmNyZWFzZVVucmVhZCA9IGlzUmVsYXRlZEN1cnJlbnRDaGF0ID8gMCA6IDE7XG4gICAgICBzdG9yZS5kaXNwYXRjaChyZWxhdGVkQ3VycmVudENoYXRBY3Rpb24oaXNSZWxhdGVkQ3VycmVudENoYXQpKTtcbiAgICAgIGlmIChcbiAgICAgICAgIWFsbFByaXZhdGVDaGF0c1N0YXRlLmdldChkYXRhLmZyb21fdXNlcikgfHxcbiAgICAgICAgIWFsbFByaXZhdGVDaGF0c1N0YXRlLmdldChkYXRhLmZyb21fdXNlcikudXNlckluZm9cbiAgICAgICkge1xuICAgICAgICBjb25zdCB1c2VySW5mbyA9IHtcbiAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgIHVzZXJfaWQ6IGRhdGEuZnJvbV91c2VyLFxuICAgICAgICB9O1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBhZGRQcml2YXRlQ2hhdE1lc3NhZ2VBbmRJbmZvQWN0aW9uKHtcbiAgICAgICAgICAgIGFsbFByaXZhdGVDaGF0czogYWxsUHJpdmF0ZUNoYXRzU3RhdGUsXG4gICAgICAgICAgICBtZXNzYWdlOiBkYXRhLFxuICAgICAgICAgICAgY2hhdElkOiBkYXRhLmZyb21fdXNlcixcbiAgICAgICAgICAgIHVzZXJJbmZvLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgYWRkUHJpdmF0ZUNoYXRNZXNzYWdlc0FjdGlvbih7XG4gICAgICAgICAgICBhbGxQcml2YXRlQ2hhdHM6IGFsbFByaXZhdGVDaGF0c1N0YXRlLFxuICAgICAgICAgICAgbWVzc2FnZTogZGF0YSxcbiAgICAgICAgICAgIGNoYXRJZDogZGF0YS5mcm9tX3VzZXIsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgdXBkYXRlSG9tZVBhZ2VMaXN0QWN0aW9uKHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGhvbWVQYWdlTGlzdDogaG9tZVBhZ2VMaXN0U3RhdGUsXG4gICAgICAgICAgbXlVc2VySWQ6IHRoaXMudXNlcl9pZCxcbiAgICAgICAgICBpbmNyZWFzZVVucmVhZCxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgICAgdGhpcy5fYnJvd3Nlck5vdGlmaWNhdGlvbkhhbmRsZShkYXRhKTtcbiAgICAgIC8vIFRPRE86IG11dGUgbm90aWZpY2F0aW9ucyBzd2l0Y2hcbiAgICB9KTtcbiAgfVxuXG4gIF9saXN0ZW5pbmdHcm91cENoYXRNc2coKSB7XG4gICAgd2luZG93LnNvY2tldC5vbignZ2V0R3JvdXBNc2cnLCBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHsgYWxsR3JvdXBDaGF0c1N0YXRlLCBob21lUGFnZUxpc3RTdGF0ZSB9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByYWRpeFxuICAgICAgY29uc3QgY2hhdElkID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoLTEpWzBdO1xuICAgICAgY29uc3QgaXNSZWxhdGVkQ3VycmVudENoYXQgPSBkYXRhLnRvX2dyb3VwX2lkID09PSBjaGF0SWQ7XG4gICAgICBzdG9yZS5kaXNwYXRjaChyZWxhdGVkQ3VycmVudENoYXRBY3Rpb24oaXNSZWxhdGVkQ3VycmVudENoYXQpKTtcbiAgICAgIGlmIChkYXRhLnRpcCA9PT0gJ2pvaW5Hcm91cCcpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgYWRkR3JvdXBNZXNzYWdlQW5kSW5mb0FjdGlvbih7XG4gICAgICAgICAgICBhbGxHcm91cENoYXRzOiBhbGxHcm91cENoYXRzU3RhdGUsXG4gICAgICAgICAgICBncm91cElkOiBkYXRhLnRvX2dyb3VwX2lkLFxuICAgICAgICAgICAgbWVzc2FnZTogZGF0YSxcbiAgICAgICAgICAgIG1lbWJlcjogZGF0YSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgIGFkZEdyb3VwTWVzc2FnZXNBY3Rpb24oe1xuICAgICAgICAgICAgYWxsR3JvdXBDaGF0czogYWxsR3JvdXBDaGF0c1N0YXRlLFxuICAgICAgICAgICAgbWVzc2FnZTogZGF0YSxcbiAgICAgICAgICAgIGdyb3VwSWQ6IGRhdGEudG9fZ3JvdXBfaWQsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YS5tZXNzYWdlICYmICF0aGlzLl9oYXNDYWxsZWRNZSkge1xuICAgICAgICBjb25zdCByZWdleHAgPSBuZXcgUmVnRXhwKGBAJHt0aGlzLl91c2VySW5mby5uYW1lfVxcXFxzXFxcXFMqfEAke3RoaXMuX3VzZXJJbmZvLm5hbWV9JGApO1xuICAgICAgICB0aGlzLl9oYXNDYWxsZWRNZSA9IHJlZ2V4cC50ZXN0KGRhdGEubWVzc2FnZSk7XG4gICAgICB9XG4gICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgdXBkYXRlSG9tZVBhZ2VMaXN0QWN0aW9uKHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGhvbWVQYWdlTGlzdDogaG9tZVBhZ2VMaXN0U3RhdGUsXG4gICAgICAgICAgaW5jcmVhc2VVbnJlYWQ6IGlzUmVsYXRlZEN1cnJlbnRDaGF0ID8gMCA6IDEsXG4gICAgICAgICAgc2hvd0NhbGxNZVRpcDogdGhpcy5faGFzQ2FsbGVkTWUsXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICAgIHRoaXMuX2Jyb3dzZXJOb3RpZmljYXRpb25IYW5kbGUoZGF0YSk7XG4gICAgICAvLyBUT0RPOiBtdXRlIG5vdGlmaWNhdGlvbnMgc3dpdGNoXG4gICAgfSk7XG4gIH1cblxuICBfbGlzdGVuaW5nQmVEZWxldGUoKSB7XG4gICAgd2luZG93LnNvY2tldC5vbignYmVEZWxldGVkJywgZnJvbV91c2VyID0+IHtcbiAgICAgIGNvbnN0IGhvbWVQYWdlTGlzdCA9IHN0b3JlLmdldFN0YXRlKCkuaG9tZVBhZ2VMaXN0U3RhdGU7XG4gICAgICBjb25zdCBhbGxQcml2YXRlQ2hhdHMgPSBzdG9yZS5nZXRTdGF0ZSgpLmFsbFByaXZhdGVDaGF0cztcbiAgICAgIHN0b3JlLmRpc3BhdGNoKGRlbGV0ZUhvbWVQYWdlTGlzdEFjdGlvbih7IGhvbWVQYWdlTGlzdCwgY2hhdElkOiBmcm9tX3VzZXIgfSkpO1xuICAgICAgc3RvcmUuZGlzcGF0Y2goZGVsZXRlUHJpdmF0ZUNoYXRBY3Rpb24oeyBhbGxQcml2YXRlQ2hhdHMsIGNoYXRJZDogZnJvbV91c2VyIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIF9saXN0ZW5pbmdJbml0TWVzc2FnZSgpIHtcbiAgICB3aW5kb3cuc29ja2V0Lm9uKCdpbml0U29ja2V0U3VjY2VzcycsIGFsbE1lc3NhZ2UgPT4ge1xuICAgICAgY29uc3QgcHJpdmF0ZUNoYXQgPSBuZXcgTWFwKGFsbE1lc3NhZ2UucHJpdmF0ZUNoYXQpO1xuICAgICAgY29uc3QgZ3JvdXBDaGF0ID0gbmV3IE1hcChhbGxNZXNzYWdlLmdyb3VwQ2hhdCk7XG4gICAgICBzdG9yZS5kaXNwYXRjaChzZXRIb21lUGFnZUxpc3RBY3Rpb24oYWxsTWVzc2FnZS5ob21lUGFnZUxpc3QpKTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHNldEFsbFByaXZhdGVDaGF0c0FjdGlvbih7IGRhdGE6IHByaXZhdGVDaGF0IH0pKTtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKHNldEFsbEdyb3VwQ2hhdHNBY3Rpb24oeyBkYXRhOiBncm91cENoYXQgfSkpO1xuICAgICAgY29uc29sZS5sb2coJ2luaXRNZXNzYWdlIHN1Y2Nlc3MuICcsICd0aW1lPT4nLCBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCkpO1xuICAgIH0pO1xuICAgIHdpbmRvdy5zb2NrZXQub24oJ2luaXRTb2NrZXQnLCAoc29ja2V0SWQsIGZuKSA9PiB7XG4gICAgICBjb25zdCBjbGllbnRIb21lUGFnZUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBob21lUGFnZUxpc3QtJHt0aGlzLnVzZXJfaWR9YCkpO1xuICAgICAgZm4odGhpcy51c2VyX2lkLCBjbGllbnRIb21lUGFnZUxpc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgc3Vic2NyaWJlU29ja2V0KCkge1xuICAgIHdpbmRvdy5zb2NrZXQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fbGlzdGVuaW5nSW5pdE1lc3NhZ2UoKTtcbiAgICB0aGlzLl9saXN0ZW5pbmdQcml2YXRlQ2hhdE1zZygpO1xuICAgIHRoaXMuX2xpc3RlbmluZ0dyb3VwQ2hhdE1zZygpO1xuICAgIHRoaXMuX2xpc3RlbmluZ0JlRGVsZXRlKCk7XG4gICAgY29uc29sZS5sb2coJ3N1YnNjcmliZVNvY2tldCBzdWNjZXNzLiAnLCAndGltZT0+JywgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcbiAgfVxuXG4gIF9jb25uZWN0U29ja2V0KCkge1xuICAgIHdpbmRvdy5zb2NrZXQgPSBpbyhgJHt0aGlzLldFQlNJVEVfQUREUkVTU30/dG9rZW49JHt0aGlzLl91c2VySW5mby50b2tlbn1gKTtcbiAgfVxuXG4gIF9pbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRoaXMuX2Nvbm5lY3RTb2NrZXQoKTtcbiAgICB0aGlzLnN1YnNjcmliZVNvY2tldCgpO1xuICAgIGNvbnNvbGUubG9nKCdpbml0IGFwcCBzdWNjZXNzLiAnLCAndGltZT0+JywgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpKTtcbiAgfTtcblxuICBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICh0aGlzLl91c2VySW5mbyAmJiAhdGhpcy5pbml0aWFsaXplZCkge1xuICAgICAgYXdhaXQgdGhpcy5faW5pdCgpO1xuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZygnaW5pdGlhbGl6ZWQnKTtcbiAgICAgIGxldCBhZnRlclJlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgd2luZG93LnNvY2tldC5vbignZXJyb3InLCBlcnJvciA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbihlcnJvciwgJ2Vycm9yJyk7XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5zb2NrZXQub24oJ3JlY29ubmVjdCcsIGF0dGVtcHROdW1iZXIgPT4ge1xuICAgICAgICBpZiAoIWFmdGVyUmVjb25uZWN0aW5nKSB7XG4gICAgICAgICAgd2luZG93LnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgdGhpcy5faW5pdCgpO1xuICAgICAgICAgIGFmdGVyUmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbm90IHJlY29ubmVjdGluZywgb3BlbiBhdXRvbWF0aWNhbGx5IHRpbWU9PicsIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgJ3JlY29ubmVjdCBzdWNjZXNzZnVsbHkuIGF0dGVtcHROdW1iZXIgPT4nLFxuICAgICAgICAgIGF0dGVtcHROdW1iZXIsXG4gICAgICAgICAgJ3NvY2tldC1pZCA9PiAnLFxuICAgICAgICAgIHdpbmRvdy5zb2NrZXQuaWQsXG4gICAgICAgICAgJ3RpbWU9PicsXG4gICAgICAgICAgbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpLFxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cuc29ja2V0Lm9uKCdyZWNvbm5lY3RpbmcnLCBhdHRlbXB0TnVtYmVyID0+IHtcbiAgICAgICAgYWZ0ZXJSZWNvbm5lY3RpbmcgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAncmVjb25uZWN0aW5nLiBhdHRlbXB0TnVtYmVyID0+JyxcbiAgICAgICAgICBhdHRlbXB0TnVtYmVyLFxuICAgICAgICAgICd0aW1lPT4nLFxuICAgICAgICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSxcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgd2luZG93LnNvY2tldC5vbignZGlzY29ubmVjdCcsIGFzeW5jIHJlYXNvbiA9PiB7XG4gICAgICAgIGFmdGVyUmVjb25uZWN0aW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICdkaXNjb25uZWN0IGluIGNsaWVudCwgZGlzY29ubmVjdCByZWFzb24gPT4nLFxuICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgICAndGltZT0+JyxcbiAgICAgICAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCksXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5zb2NrZXQub24oJ3JlY29ubmVjdF9lcnJvcicsIGVycm9yID0+IHtcbiAgICAgICAgYWZ0ZXJSZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlY29ubmVjdF9lcnJvci4gZXJyb3IgPT4nLCBlcnJvciwgJ3RpbWU9PicsIG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoKSk7XG4gICAgICAgIG5vdGlmaWNhdGlvbihlcnJvciwgJ2Vycm9yJyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0IHVzZXJfaWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl91c2VySW5mbyAmJiB0aGlzLl91c2VySW5mby51c2VyX2lkKSB8fCBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluaXRBcHA7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9