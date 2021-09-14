(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Button/styles.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/Button/styles.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".baseButton {\n  background-color: #66b3ef;\n  border: none;\n  color: white;\n  padding: 10px 40px;\n  text-align: center;\n  border-radius: 4px 4px 4px 4px;\n  display: inline-block;\n  cursor: pointer; }\n\n.disable {\n  background-color: #f6f7f9;\n  color: #555;\n  cursor: not-allowed; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Setting/styles.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/Setting/styles.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!rc-switch/assets/index.css */ "./node_modules/css-loader/index.js!./node_modules/rc-switch/assets/index.css"), "");

// module
exports.push([module.i, ".setting {\n  width: 100%;\n  height: 100%;\n  padding-top: 100px;\n  text-align: center;\n  position: relative;\n  color: #555; }\n  .setting .notificationConfig {\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .setting .notificationConfig .rc-switch-checked {\n      border: 1px solid #66b3ef;\n      background-color: #66b3ef; }\n  .setting .githubStarRender {\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #9baec8;\n    height: 26px;\n    margin-left: 20px;\n    position: absolute;\n    right: 20px;\n    top: 30px;\n    cursor: pointer; }\n    .setting .githubStarRender .githubIcon {\n      height: 30px;\n      font-size: 28px;\n      padding-right: 4px;\n      padding-left: 4px; }\n    .setting .githubStarRender .starTitle {\n      font-size: 12px;\n      height: 26px;\n      padding-right: 4px;\n      padding-left: 4px;\n      line-height: 26px;\n      color: #fff;\n      background-color: #5893d4; }\n  .setting .userInfo p {\n    font-size: 12px;\n    padding-top: 20px; }\n  .setting .name {\n    font-size: 18px;\n    padding-top: 20px; }\n  .setting .baseButton {\n    position: relative;\n    font-size: 12px;\n    margin-top: 80px; }\n  .setting .contact, .setting .contact a {\n    text-decoration: none;\n    margin: 40px 0;\n    font-size: 14px;\n    cursor: pointer;\n    display: block; }\n", ""]);

// exports


/***/ }),

/***/ "./src/components/Button/index.js":
/*!****************************************!*\
  !*** ./src/components/Button/index.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

__webpack_require__(/*! ./styles.scss */ "./src/components/Button/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function Button(_ref) {
  var clickFn = _ref.clickFn,
      value = _ref.value,
      className = _ref.className,
      disable = _ref.disable;

  return _react2.default.createElement('input', {
    type: 'button',
    onClick: clickFn,
    className: (0, _classnames2.default)('baseButton', className, disable && 'disable'),
    value: value,
    disable: disable.toString()
  });
}

Button.propTypes = {
  clickFn: _propTypes2.default.func,
  value: _propTypes2.default.string,
  className: _propTypes2.default.string,
  disable: _propTypes2.default.bool
};

Button.defaultProps = {
  clickFn: undefined,
  value: '',
  className: undefined,
  disable: false
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Button, 'Button', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Button/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Button/styles.scss":
/*!*******************************************!*\
  !*** ./src/components/Button/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Button/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Button/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Button/styles.scss");

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

/***/ "./src/components/Setting/index.js":
/*!*****************************************!*\
  !*** ./src/components/Setting/index.js ***!
  \*****************************************/
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

var _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _rcSwitch = __webpack_require__(/*! rc-switch */ "./node_modules/rc-switch/es/index.js");

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _settingReducer = __webpack_require__(/*! ../../containers/SettingPage/settingReducer */ "./src/containers/SettingPage/settingReducer.js");

__webpack_require__(/*! ./styles.scss */ "./src/components/Setting/styles.scss");

var _Button = __webpack_require__(/*! ../Button */ "./src/components/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _Modal = __webpack_require__(/*! ../Modal */ "./src/components/Modal/index.js");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function openRepoUrl(history) {
  if (false) {} else {
    window.open('https://im.hanaminhtran.top/group_chat/ddbffd80-3663-11e9-a580-d119b23ef62e');
  }
}

function Setting(_ref) {
  var initApp = _ref.initApp,
      history = _ref.history,
      globalSettings = _ref.globalSettings,
      setGlobalSettings = _ref.setGlobalSettings;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray3.default)(_useState, 2),
      logoutModalVisible = _useState2[0],
      setLogoutModalVisible = _useState2[1];

  var _useState3 = (0, _react.useState)('--'),
      _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
      githubStars = _useState4[0],
      setGithubStars = _useState4[1];

  var logout = function logout() {
    window.socket.disconnect();
    localStorage.removeItem('userInfo');
    initApp(false);
    history.push('/login');
  };

  (0, _react.useEffect)(function () {
    _axios2.default.get('https://api.github.com/repos/aermin/ghChat').then(function (res) {
      setGithubStars(res.data.stargazers_count);
    });
  });

  var _onChange = function _onChange(type, value) {
    setGlobalSettings((0, _defineProperty3.default)({}, type, value));
  };

  return _react2.default.createElement(
    'div',
    { className: 'setting' },
    _react2.default.createElement(_Modal2.default, {
      title: 'Are you sure ?',
      visible: logoutModalVisible,
      confirm: logout,
      hasCancel: true,
      hasConfirm: true,
      cancel: function cancel() {
        return setLogoutModalVisible(false);
      }
    }),
    _react2.default.createElement(
      'div',
      { className: 'notificationConfig' },
      _react2.default.createElement(
        'span',
        null,
        'notification: '
      ),
      _react2.default.createElement(_rcSwitch2.default, {
        onChange: function onChange(value) {
          return _onChange(_settingReducer.GLOBAL_SETTINGS.NOTIFICATION, value);
        },
        checked: globalSettings.notification
      })
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'githubStarRender',
        onClick: function onClick() {
          return window.open('https://github.com/hanaminhtran/ghChat');
        }
      },
      _react2.default.createElement(
        'svg',
        { className: 'icon githubIcon', 'aria-hidden': 'true' },
        _react2.default.createElement('use', { xlinkHref: '#icon-github-copy' })
      ),
      _react2.default.createElement(
        'span',
        { className: 'starTitle' },
        githubStars + '  Stars'
      )
    ),
    _react2.default.createElement(
      'div',
      {
        className: 'contact',
        onClick: function onClick() {
          return window.open('https://github.com/hanaminhtran/blog/issues/63');
        }
      },
      'Open PWA (install ghChat to the desktop)'
    ),
    _react2.default.createElement(
      'div',
      { className: 'contact', onClick: function onClick() {
          return window.open('https://github.com/hanaminhtran/ghChat');
        } },
      'Project address & welcome star'
    ),
    _react2.default.createElement(
      'div',
      { className: 'contact', onClick: function onClick() {
          return openRepoUrl(history);
        } },
      'Project Exchange Group'
    ),
    _react2.default.createElement(_Button2.default, { clickFn: function clickFn() {
        return setLogoutModalVisible(true);
      }, value: 'Quit' })
  );
}

__signature__(Setting, 'useState{[logoutModalVisible, setLogoutModalVisible](false)}\nuseState{[githubStars, setGithubStars](\'--\')}\nuseEffect{}');

Setting.propTypes = {
  initApp: _propTypes2.default.func,
  history: _propTypes2.default.object.isRequired,
  globalSettings: _propTypes2.default.object,
  setGlobalSettings: _propTypes2.default.func
};

Setting.defaultProps = {
  initApp: function initApp() {},

  globalSettings: {},
  setGlobalSettings: function setGlobalSettings() {}
};

var _default = (0, _reactRouterDom.withRouter)(Setting);

exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(openRepoUrl, 'openRepoUrl', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Setting/index.js');
  reactHotLoader.register(Setting, 'Setting', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Setting/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Setting/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Setting/styles.scss":
/*!********************************************!*\
  !*** ./src/components/Setting/styles.scss ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Setting/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Setting/styles.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./styles.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Setting/styles.scss");

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

/***/ "./src/containers/SettingPage/index.js":
/*!*********************************************!*\
  !*** ./src/containers/SettingPage/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Setting = __webpack_require__(/*! ../../components/Setting */ "./src/components/Setting/index.js");

var _Setting2 = _interopRequireDefault(_Setting);

var _initAppAction = __webpack_require__(/*! ../../redux/actions/initAppAction */ "./src/redux/actions/initAppAction.js");

var _settingAction = __webpack_require__(/*! ./settingAction */ "./src/containers/SettingPage/settingAction.js");

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
    globalSettings: state.globalSettingsState
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    initApp: function initApp(arg) {
      dispatch((0, _initAppAction.initAppAction)(arg));
    },
    setGlobalSettings: function setGlobalSettings(arg) {
      dispatch((0, _settingAction.setGlobalSettingsAction)(arg));
    }
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Setting2.default));

exports.default = _default;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, 'mapStateToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/SettingPage/index.js');
  reactHotLoader.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/SettingPage/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/containers/SettingPage/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uL3N0eWxlcy5zY3NzPzlhZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2V0dGluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZXR0aW5nL3N0eWxlcy5zY3NzP2UyOWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lcnMvU2V0dGluZ1BhZ2UvaW5kZXguanMiXSwibmFtZXMiOlsiQnV0dG9uIiwiY2xpY2tGbiIsInZhbHVlIiwiY2xhc3NOYW1lIiwiZGlzYWJsZSIsInRvU3RyaW5nIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ1bmRlZmluZWQiLCJvcGVuUmVwb1VybCIsImhpc3RvcnkiLCJwcm9jZXNzIiwid2luZG93Iiwib3BlbiIsIlNldHRpbmciLCJpbml0QXBwIiwiZ2xvYmFsU2V0dGluZ3MiLCJzZXRHbG9iYWxTZXR0aW5ncyIsImxvZ291dE1vZGFsVmlzaWJsZSIsInNldExvZ291dE1vZGFsVmlzaWJsZSIsImdpdGh1YlN0YXJzIiwic2V0R2l0aHViU3RhcnMiLCJsb2dvdXQiLCJzb2NrZXQiLCJkaXNjb25uZWN0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwic3RhcmdhemVyc19jb3VudCIsIl9vbkNoYW5nZSIsInR5cGUiLCJHTE9CQUxfU0VUVElOR1MiLCJOT1RJRklDQVRJT04iLCJub3RpZmljYXRpb24iLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJnbG9iYWxTZXR0aW5nc1N0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYXJnIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQkFBMkIsbUJBQU8sQ0FBQyxtR0FBa0Q7QUFDckY7OztBQUdBO0FBQ0EsY0FBYyxRQUFTLGdCQUFnQiw4QkFBOEIsaUJBQWlCLGlCQUFpQix1QkFBdUIsdUJBQXVCLG1DQUFtQywwQkFBMEIsb0JBQW9CLEVBQUUsY0FBYyw4QkFBOEIsZ0JBQWdCLHdCQUF3QixFQUFFOztBQUU5VDs7Ozs7Ozs7Ozs7OztBQ1BBLDJCQUEyQixtQkFBTyxDQUFDLG1HQUFrRDtBQUNyRjtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxtSkFBd0U7O0FBRTFGO0FBQ0EsY0FBYyxRQUFTLGFBQWEsZ0JBQWdCLGlCQUFpQix1QkFBdUIsdUJBQXVCLHVCQUF1QixnQkFBZ0IsRUFBRSxrQ0FBa0Msb0JBQW9CLDBCQUEwQiw4QkFBOEIsRUFBRSx1REFBdUQsa0NBQWtDLGtDQUFrQyxFQUFFLGdDQUFnQyxrQkFBa0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsZ0NBQWdDLG1CQUFtQix3QkFBd0IseUJBQXlCLGtCQUFrQixnQkFBZ0Isc0JBQXNCLEVBQUUsOENBQThDLHFCQUFxQix3QkFBd0IsMkJBQTJCLDBCQUEwQixFQUFFLDZDQUE2Qyx3QkFBd0IscUJBQXFCLDJCQUEyQiwwQkFBMEIsMEJBQTBCLG9CQUFvQixrQ0FBa0MsRUFBRSwwQkFBMEIsc0JBQXNCLHdCQUF3QixFQUFFLG9CQUFvQixzQkFBc0Isd0JBQXdCLEVBQUUsMEJBQTBCLHlCQUF5QixzQkFBc0IsdUJBQXVCLEVBQUUsNENBQTRDLDRCQUE0QixxQkFBcUIsc0JBQXNCLHNCQUFzQixxQkFBcUIsRUFBRTs7QUFFeDZDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0Z3QkEsTTs7QUFMeEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFFZSxT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QjtBQUFBLFNBQWE7QUFDdEM3QixXQURzQyxtQkFDOUI4QixHQUQ4QixFQUN6QjtBQUNYQyxlQUFTLGtDQUFjRCxHQUFkLENBQVQ7QUFDRCxLQUhxQztBQUl0QzVCLHFCQUpzQyw2QkFJcEI0QixHQUpvQixFQUlmO0FBQ3JCQyxlQUFTLDRDQUF3QkQsR0FBeEIsQ0FBVDtBQUNEO0FBTnFDLEdBQWI7QUFBQSxDQUEzQjs7ZUFTZSxnQ0FBVyx5QkFBUUosZUFBUixFQUF5Qkcsa0JBQXpCLEVBQTZDOUIsaUJBQTdDLENBQVgsQzs7Ozs7Ozs7Ozs7OzBCQWJUMkIsZTswQkFJQUcsa0IiLCJmaWxlIjoiMTQuN2NiYzkzZmQzY2VlZGE4MTVhMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5iYXNlQnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NmIzZWY7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDRweCA0cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uZGlzYWJsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmN2Y5O1xcbiAgY29sb3I6ICM1NTU7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5leHBvcnRzLmkocmVxdWlyZShcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhcmMtc3dpdGNoL2Fzc2V0cy9pbmRleC5jc3NcIiksIFwiXCIpO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZXR0aW5nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICM1NTU7IH1cXG4gIC5zZXR0aW5nIC5ub3RpZmljYXRpb25Db25maWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAuc2V0dGluZyAubm90aWZpY2F0aW9uQ29uZmlnIC5yYy1zd2l0Y2gtY2hlY2tlZCB7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2YjNlZjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiM2VmOyB9XFxuICAuc2V0dGluZyAuZ2l0aHViU3RhclJlbmRlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzliYWVjODtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMjBweDtcXG4gICAgdG9wOiAzMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnNldHRpbmcgLmdpdGh1YlN0YXJSZW5kZXIgLmdpdGh1Ykljb24ge1xcbiAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICBmb250LXNpemU6IDI4cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4OyB9XFxuICAgIC5zZXR0aW5nIC5naXRodWJTdGFyUmVuZGVyIC5zdGFyVGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBoZWlnaHQ6IDI2cHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODkzZDQ7IH1cXG4gIC5zZXR0aW5nIC51c2VySW5mbyBwIHtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDsgfVxcbiAgLnNldHRpbmcgLm5hbWUge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4OyB9XFxuICAuc2V0dGluZyAuYmFzZUJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBtYXJnaW4tdG9wOiA4MHB4OyB9XFxuICAuc2V0dGluZyAuY29udGFjdCwgLnNldHRpbmcgLmNvbnRhY3QgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgbWFyZ2luOiA0MHB4IDA7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgJy4vc3R5bGVzLnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oeyBjbGlja0ZuLCB2YWx1ZSwgY2xhc3NOYW1lLCBkaXNhYmxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgb25DbGljaz17Y2xpY2tGbn1cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnYmFzZUJ1dHRvbicsIGNsYXNzTmFtZSwgZGlzYWJsZSAmJiAnZGlzYWJsZScpfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgZGlzYWJsZT17ZGlzYWJsZS50b1N0cmluZygpfVxuICAgIC8+XG4gICk7XG59XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIGNsaWNrRm46IFByb3BUeXBlcy5mdW5jLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsaWNrRm46IHVuZGVmaW5lZCxcbiAgdmFsdWU6ICcnLFxuICBjbGFzc05hbWU6IHVuZGVmaW5lZCxcbiAgZGlzYWJsZTogZmFsc2UsXG59O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAncmMtc3dpdGNoJztcbmltcG9ydCB7IEdMT0JBTF9TRVRUSU5HUyB9IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvU2V0dGluZ1BhZ2Uvc2V0dGluZ1JlZHVjZXInO1xuaW1wb3J0ICcuL3N0eWxlcy5zY3NzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9Nb2RhbCc7XG5cbmZ1bmN0aW9uIG9wZW5SZXBvVXJsKGhpc3RvcnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICBoaXN0b3J5LnB1c2goJy9ncm91cF9jaGF0L2RkYmZmZDgwLTM2NjMtMTFlOS1hNTgwLWQxMTliMjNlZjYyZScpO1xuICB9IGVsc2Uge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2ltLmhhbmFtaW5odHJhbi50b3AvZ3JvdXBfY2hhdC9kZGJmZmQ4MC0zNjYzLTExZTktYTU4MC1kMTE5YjIzZWY2MmUnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBTZXR0aW5nKHsgaW5pdEFwcCwgaGlzdG9yeSwgZ2xvYmFsU2V0dGluZ3MsIHNldEdsb2JhbFNldHRpbmdzIH0pIHtcbiAgY29uc3QgW2xvZ291dE1vZGFsVmlzaWJsZSwgc2V0TG9nb3V0TW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2dpdGh1YlN0YXJzLCBzZXRHaXRodWJTdGFyc10gPSB1c2VTdGF0ZSgnLS0nKTtcblxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG4gICAgd2luZG93LnNvY2tldC5kaXNjb25uZWN0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJbmZvJyk7XG4gICAgaW5pdEFwcChmYWxzZSk7XG4gICAgaGlzdG9yeS5wdXNoKCcvbG9naW4nKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGF4aW9zLmdldCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9hZXJtaW4vZ2hDaGF0JykudGhlbihyZXMgPT4ge1xuICAgICAgc2V0R2l0aHViU3RhcnMocmVzLmRhdGEuc3RhcmdhemVyc19jb3VudCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IF9vbkNoYW5nZSA9ICh0eXBlLCB2YWx1ZSkgPT4ge1xuICAgIHNldEdsb2JhbFNldHRpbmdzKHtcbiAgICAgIFt0eXBlXTogdmFsdWUsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdcIj5cbiAgICAgIDxNb2RhbFxuICAgICAgICB0aXRsZT1cIkFyZSB5b3Ugc3VyZSA/XCJcbiAgICAgICAgdmlzaWJsZT17bG9nb3V0TW9kYWxWaXNpYmxlfVxuICAgICAgICBjb25maXJtPXtsb2dvdXR9XG4gICAgICAgIGhhc0NhbmNlbFxuICAgICAgICBoYXNDb25maXJtXG4gICAgICAgIGNhbmNlbD17KCkgPT4gc2V0TG9nb3V0TW9kYWxWaXNpYmxlKGZhbHNlKX1cbiAgICAgIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uQ29uZmlnXCI+XG4gICAgICAgIDxzcGFuPm5vdGlmaWNhdGlvbjogPC9zcGFuPlxuICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IF9vbkNoYW5nZShHTE9CQUxfU0VUVElOR1MuTk9USUZJQ0FUSU9OLCB2YWx1ZSl9XG4gICAgICAgICAgY2hlY2tlZD17Z2xvYmFsU2V0dGluZ3Mubm90aWZpY2F0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZ2l0aHViU3RhclJlbmRlclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vaGFuYW1pbmh0cmFuL2doQ2hhdCcpfVxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb24gZ2l0aHViSWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDx1c2UgeGxpbmtIcmVmPVwiI2ljb24tZ2l0aHViLWNvcHlcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhclRpdGxlXCI+e2Ake2dpdGh1YlN0YXJzfSAgU3RhcnNgfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImNvbnRhY3RcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL2hhbmFtaW5odHJhbi9ibG9nL2lzc3Vlcy82MycpfVxuICAgICAgPlxuICAgICAgICBPcGVuIFBXQSAoaW5zdGFsbCBnaENoYXQgdG8gdGhlIGRlc2t0b3ApXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vaGFuYW1pbmh0cmFuL2doQ2hhdCcpfT5cbiAgICAgICAgUHJvamVjdCBhZGRyZXNzICYgd2VsY29tZSBzdGFyXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdFwiIG9uQ2xpY2s9eygpID0+IG9wZW5SZXBvVXJsKGhpc3RvcnkpfT5cbiAgICAgICAgUHJvamVjdCBFeGNoYW5nZSBHcm91cFxuICAgICAgPC9kaXY+XG4gICAgICA8QnV0dG9uIGNsaWNrRm49eygpID0+IHNldExvZ291dE1vZGFsVmlzaWJsZSh0cnVlKX0gdmFsdWU9XCJRdWl0XCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU2V0dGluZy5wcm9wVHlwZXMgPSB7XG4gIGluaXRBcHA6IFByb3BUeXBlcy5mdW5jLFxuICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGdsb2JhbFNldHRpbmdzOiBQcm9wVHlwZXMub2JqZWN0LFxuICBzZXRHbG9iYWxTZXR0aW5nczogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG5TZXR0aW5nLmRlZmF1bHRQcm9wcyA9IHtcbiAgaW5pdEFwcCgpIHt9LFxuICBnbG9iYWxTZXR0aW5nczoge30sXG4gIHNldEdsb2JhbFNldHRpbmdzKCkge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKFNldHRpbmcpO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBTZXR0aW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2V0dGluZyc7XG5pbXBvcnQgeyBpbml0QXBwQWN0aW9uIH0gZnJvbSAnLi4vLi4vcmVkdXgvYWN0aW9ucy9pbml0QXBwQWN0aW9uJztcbmltcG9ydCB7IHNldEdsb2JhbFNldHRpbmdzQWN0aW9uIH0gZnJvbSAnLi9zZXR0aW5nQWN0aW9uJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZ2xvYmFsU2V0dGluZ3M6IHN0YXRlLmdsb2JhbFNldHRpbmdzU3RhdGUsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgaW5pdEFwcChhcmcpIHtcbiAgICBkaXNwYXRjaChpbml0QXBwQWN0aW9uKGFyZykpO1xuICB9LFxuICBzZXRHbG9iYWxTZXR0aW5ncyhhcmcpIHtcbiAgICBkaXNwYXRjaChzZXRHbG9iYWxTZXR0aW5nc0FjdGlvbihhcmcpKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNldHRpbmcpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=