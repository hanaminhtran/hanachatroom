(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/*!***********************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/object/get-prototype-of.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };
 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/object/get-prototype-of.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/babel-runtime/core-js/object/get-prototype-of.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-prototype-of.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-prototype-of.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.get-prototype-of */ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getPrototypeOf;

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/object/get-prototype-of.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/fn/object/get-prototype-of.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/modules/_object-sap.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_object-sap.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/library/modules/_core.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/_object-sap.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/_object-sap.js"); } }(); 

/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.get-prototype-of.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/library/modules/_to-object.js");
var $getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/library/modules/_object-gpo.js");

__webpack_require__(/*! ./_object-sap */ "./node_modules/core-js/library/modules/_object-sap.js")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

 void function register() { /* react-hot-loader/webpack */ var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined; if (!reactHotLoader) { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports; /* eslint-enable camelcase, no-undef */ if (!webpackExports) { return; } if (typeof webpackExports === 'function') { reactHotLoader.register(webpackExports, 'module.exports', "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/es6.object.get-prototype-of.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } reactHotLoader.register(namedExport, key, "/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/node_modules/core-js/library/modules/es6.object.get-prototype-of.js"); } }(); 

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/SignInSignUp/index.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/SignInSignUp/index.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".formContent {\n  border-radius: 12px 12px 12px 12px;\n  background: #fff;\n  padding: 32px;\n  width: 100%;\n  max-width: 330px;\n  position: relative;\n  padding: 10px 0 20px;\n  box-shadow: 0 32px 62px 0 rgba(0, 0, 0, 0.3);\n  text-align: center; }\n  .formContent .ghChatLogo {\n    position: absolute;\n    top: -80px;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%); }\n    .formContent .ghChatLogo img {\n      width: 80px;\n      height: 80px; }\n  .formContent .center {\n    text-align: center;\n    margin-top: 30px; }\n    .formContent .center .authTips {\n      color: #b4b8b9d3;\n      font-size: 14px;\n      padding: 10px; }\n  .formContent .version {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    color: #b4b8b9d3;\n    font-size: 12px; }\n  .formContent .userAvatarWrapper {\n    margin: 10px 0 20px; }\n  .formContent .active, .formContent .inactive {\n    text-align: center;\n    font-size: 18px;\n    text-transform: uppercase;\n    display: inline-block;\n    padding: 10px 10px 20px;\n    color: #b4b8b9d3; }\n  .formContent .active {\n    color: #66b3ef; }\n  .formContent input[type=button] {\n    display: inline-block;\n    background-color: #66b3ef;\n    border: none;\n    color: white;\n    padding: 10px 30px;\n    text-align: center;\n    text-decoration: none;\n    cursor: pointer;\n    text-transform: uppercase;\n    font-size: 14px;\n    box-shadow: 0 6px 16px 0 rgba(95, 186, 233, 0.4);\n    border-radius: 4px 4px 4px 4px; }\n  .formContent input[type=password],\n  .formContent input[type=text] {\n    background-color: #f6f6f6;\n    border: none;\n    color: #0d0d0d;\n    padding: 8px 18px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 14px;\n    width: 76%;\n    border: 1px solid #f6f6f6;\n    transition: all 0.5s ease-in-out;\n    border-radius: 4px 4px 4px 4px; }\n  .formContent input[type=text]:focus {\n    background-color: #fff;\n    border-bottom: 1px solid #5fbae9; }\n  .formContent input[type=password]:focus {\n    background-color: #fff;\n    border-bottom: 1px solid #5fbae9; }\n  .formContent input[type=text]:placeholder {\n    color: #b4b8b9d3; }\n  .formContent input[type=password]:placeholder {\n    color: #b4b8b9d3; }\n  .formContent .githubOAuth {\n    text-decoration: none;\n    font-size: 36px; }\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Spinner/index.scss":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib!./src/components/Spinner/index.scss ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinnerWrapper {\n  background-color: #000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 998;\n  width: 100%;\n  height: 100%;\n  opacity: 0.8;\n  font-size: 20px; }\n  .spinnerWrapper .spinner {\n    position: absolute;\n    color: #fff;\n    z-index: 999;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    -moz-transform: translate(-50%, -50%);\n    -webkit-transform: translate(-50%, -50%);\n    -o-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n", ""]);

// exports


/***/ }),

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

/***/ "./src/components/SignInSignUp/index.js":
/*!**********************************************!*\
  !*** ./src/components/SignInSignUp/index.js ***!
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

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "./node_modules/babel-runtime/core-js/json/stringify.js");

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "./node_modules/babel-runtime/helpers/asyncToGenerator.js");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

__webpack_require__(/*! ./index.scss */ "./src/components/SignInSignUp/index.scss");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");

var _request = __webpack_require__(/*! ../../utils/request */ "./src/utils/request.js");

var _request2 = _interopRequireDefault(_request);

var _Spinner = __webpack_require__(/*! ../Spinner */ "./src/components/Spinner/index.js");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _UserAvatar = __webpack_require__(/*! ../UserAvatar */ "./src/components/UserAvatar/index.js");

var _UserAvatar2 = _interopRequireDefault(_UserAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

var SignInSignUp = function (_Component) {
  (0, _inherits3.default)(SignInSignUp, _Component);

  function SignInSignUp(props) {
    (0, _classCallCheck3.default)(this, SignInSignUp);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SignInSignUp.__proto__ || (0, _getPrototypeOf2.default)(SignInSignUp)).call(this, props));

    _this.handleChange = function (event) {
      var target = event.target;

      _this.setState((0, _defineProperty3.default)({}, target.name, target.value));
    };

    _this.handleClick = function () {
      _this.props.setValue(_this.state);
    };

    _this.state = {
      name: '',
      password: '',
      showSpinner: true
    };
    return _this;
  }

  (0, _createClass3.default)(SignInSignUp, [{
    key: 'loginGithub',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var href, code;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                href = window.location.href;

                if (/\/login\?code/.test(href)) {
                  code = href.split('?code=')[1];

                  _request2.default.axios('post', '/api/v1/github_oauth', {
                    code: code,
                    clientId: this.clientId
                  }).then(function (response) {
                    localStorage.setItem('userInfo', (0, _stringify2.default)(response));
                    window.location.reload();
                    var originalLink = sessionStorage.getItem('originalLink');
                    if (originalLink) {
                      sessionStorage.removeItem('originalLink');
                      window.location.href = originalLink;
                      return;
                    }
                    window.location.href = '/';
                  }).catch(function (error) {
                    console.log('使用githubLog in前请OK你的github设置了public的email，否则可能会失败 error => ', error);
                    window.open('https://user-images.githubusercontent.com/24861316/75133098-6b564600-5714-11ea-824a-b367ed55b1a1.png');
                    window.location.href = '/login';
                  });
                }

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loginGithub() {
        return _ref.apply(this, arguments);
      }

      return loginGithub;
    }()
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.loginGithub().then(function () {
        _this2.setState({ showSpinner: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isLogin = this.props.isLogin;
      var _state = this.state,
          name = _state.name,
          password = _state.password;

      var loginClass = isLogin ? 'active' : 'inactive';
      var registerClass = isLogin ? 'inactive' : 'active';
      var linkUrl = isLogin ? '/register' : '/login';
      var buttonName = isLogin ? 'Log in' : 'Register';
      var OAuthHref = 'https://github.com/login/oauth/authorize?client_id=' + this.clientId;
      return _react2.default.createElement(
        'div',
        { className: 'formContent fadeInDown' },
        this.state.showSpinner && _react2.default.createElement(_Spinner2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'ghChatLogo' },
          _react2.default.createElement('img', { src: 'https://cdn.aermin.top/ghChatIcon.png', alt: 'ghChatLogo' })
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: linkUrl },
          _react2.default.createElement(
            'span',
            { className: loginClass },
            'Log in'
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: linkUrl },
          _react2.default.createElement(
            'span',
            { className: registerClass },
            'Register'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'userAvatarWrapper' },
          _react2.default.createElement(_UserAvatar2.default, { name: name || 'Ÿ', size: '100' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'center' },
          _react2.default.createElement('input', {
            type: 'text',
            name: 'name',
            value: name,
            onChange: this.handleChange,
            placeholder: 'Username'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'center' },
          _react2.default.createElement('input', {
            type: 'password',
            name: 'password',
            value: password,
            onChange: this.handleChange,
            placeholder: 'password'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'center' },
          _react2.default.createElement('input', { type: 'button', onClick: this.handleClick, value: buttonName })
        ),
        _react2.default.createElement(
          'div',
          { className: 'center' },
          _react2.default.createElement(
            'p',
            { className: 'authTips' },
            'myGitHub\x1CGitHubLog in'
          ),
          _react2.default.createElement(
            'a',
            { className: 'githubOAuth', href: OAuthHref },
            _react2.default.createElement(
              'svg',
              { className: 'icon githubIcon', 'aria-hidden': 'true' },
              _react2.default.createElement('use', { xlinkHref: '#icon-github' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'version' },
          'Version: 2.5.6'
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
    key: 'clientId',
    get: function get() {
      return '8c694af835d62f8fd490';
    }
  }]);
  return SignInSignUp;
}(_react.Component);

var _default = SignInSignUp;
exports.default = _default;


SignInSignUp.propTypes = {
  setValue: _propTypes2.default.func,
  isLogin: _propTypes2.default.bool
};

SignInSignUp.defaultProps = {
  setValue: function setValue() {},

  isLogin: false
};
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignInSignUp, 'SignInSignUp', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/SignInSignUp/index.js');
  reactHotLoader.register(_default, 'default', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/SignInSignUp/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/SignInSignUp/index.scss":
/*!************************************************!*\
  !*** ./src/components/SignInSignUp/index.scss ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/SignInSignUp/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/SignInSignUp/index.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/SignInSignUp/index.scss");

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

/***/ "./src/components/Spinner/index.js":
/*!*****************************************!*\
  !*** ./src/components/Spinner/index.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./index.scss */ "./src/components/Spinner/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function Spinner() {
  return _react2.default.createElement(
    'div',
    { className: 'spinnerWrapper' },
    _react2.default.createElement(
      'div',
      { className: 'spinner' },
      'Loading...'
    )
  );
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Spinner, 'Spinner', '/Users/hanaminhtran/Documents/JS/NODEJS/hanaChatRoom/client/src/components/Spinner/index.js');
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/components/Spinner/index.scss":
/*!*******************************************!*\
  !*** ./src/components/Spinner/index.scss ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Spinner/index.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Spinner/index.scss", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/postcss-loader/lib!./index.scss */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./node_modules/postcss-loader/lib/index.js!./src/components/Spinner/index.scss");

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluU2lnblVwL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU3Bpbm5lci9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJBdmF0YXIvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TaWduSW5TaWduVXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2lnbkluU2lnblVwL2luZGV4LnNjc3M/YzAzZCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcGlubmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NwaW5uZXIvaW5kZXguc2Nzcz84YWQ2Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJBdmF0YXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlckF2YXRhci9zdHlsZS5zY3NzPzY1NWMiXSwibmFtZXMiOlsiU2lnbkluU2lnblVwIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJldmVudCIsInNldFN0YXRlIiwibmFtZSIsInZhbHVlIiwiaGFuZGxlQ2xpY2siLCJzZXRWYWx1ZSIsInN0YXRlIiwicGFzc3dvcmQiLCJzaG93U3Bpbm5lciIsImhyZWYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInRlc3QiLCJjb2RlIiwic3BsaXQiLCJSZXF1ZXN0IiwiYXhpb3MiLCJjbGllbnRJZCIsInRoZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVzcG9uc2UiLCJyZWxvYWQiLCJvcmlnaW5hbExpbmsiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJyZW1vdmVJdGVtIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJvcGVuIiwibG9naW5HaXRodWIiLCJpc0xvZ2luIiwibG9naW5DbGFzcyIsInJlZ2lzdGVyQ2xhc3MiLCJsaW5rVXJsIiwiYnV0dG9uTmFtZSIsIk9BdXRoSHJlZiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJib29sIiwiZGVmYXVsdFByb3BzIiwiU3Bpbm5lciIsIlVzZXJBdmF0YXIiLCJkZWZhdWx0Q29sb3JzIiwic3VtQ2hhcnMiLCJzdHIiLCJzdW0iLCJpIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsInNyYyIsImlzR3JheSIsImNvbG9yIiwiY29sb3JzIiwiY2xpY2tBdmF0YXIiLCJzaXplIiwiYm9yZGVyUmFkaXVzIiwic2hvd0xvZ28iLCJjbGFzc05hbWUiLCJpbm5lclN0eWxlIiwidGV4dEFsaWduIiwid2lkdGgiLCJoZWlnaHQiLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImltZ1N0eWxlIiwiaW5uZXIiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiY2hhckF0Iiwic3RyaW5nIiwiYXJyYXkiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw4QkFBOEIsbUJBQU8sQ0FBQyxnSEFBNEMsc0I7Ozs7Ozs7Ozs7Ozs7QUNBbEYsbUJBQU8sQ0FBQyx3SEFBMkM7QUFDbkQsaUJBQWlCLG1CQUFPLENBQUMsNEVBQXFCOzs7Ozs7Ozs7Ozs7OztBQ0Q5QztB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QixlQUFhakIsb0JBQVVDLElBTkY7QUFPckJpQixRQUFNbEIsb0JBQVVpQyxNQVBLO0FBUXJCZCxnQkFBY25CLG9CQUFVaUMsTUFSSDtBQVNyQmIsWUFBVXBCLG9CQUFVRSxJQVRDO0FBVXJCbUIsYUFBV3JCLG9CQUFVaUM7QUFWQSxDQUF2Qjs7QUFhQTVCLFdBQVdGLFlBQVgsR0FBMEI7QUFDeEJVLE9BQUtzQixTQURtQjtBQUV4QjFFLFFBQU0sR0FGa0I7QUFHeEJxRCxVQUFRLEtBSGdCO0FBSXhCQyxTQUFPb0IsU0FKaUI7QUFLeEJuQixVQUFRVixhQUxnQjtBQU14QlcsZUFBYWtCLFNBTlc7QUFPeEJqQixRQUFNLElBUGtCO0FBUXhCQyxnQkFBYyxLQVJVO0FBU3hCQyxZQUFVLEtBVGM7QUFVeEJDLGFBQVdjO0FBVmEsQ0FBMUI7Ozs7Ozs7Ozs7MEJBakdNN0IsYTswQkFVR0MsUTswQkFVZUYsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCeEIsY0FBYyxtQkFBTyxDQUFDLDhTQUE0Sjs7QUFFbEwsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLHlHQUFzRDs7QUFFM0U7O0FBRUEsR0FBRyxJQUFVO0FBQ2IsbUJBQW1CLDhTQUE0SjtBQUMvSyxtQkFBbUIsbUJBQU8sQ0FBQyw4U0FBNEo7O0FBRXZMLG9EQUFvRCxRQUFTOztBQUU3RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBLEVBQUU7O0FBRUYsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6IjYuZmNmODAxNzQyOTFlNzk2YTYzZjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1wcm90b3R5cGUtb2ZcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG4iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KSB7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtQ29udGVudCB7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4IDEycHggMTJweCAxMnB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzMwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMHB4IDAgMjBweDtcXG4gIGJveC1zaGFkb3c6IDAgMzJweCA2MnB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAuZm9ybUNvbnRlbnQgLmdoQ2hhdExvZ28ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogLTgwcHg7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTsgfVxcbiAgICAuZm9ybUNvbnRlbnQgLmdoQ2hhdExvZ28gaW1nIHtcXG4gICAgICB3aWR0aDogODBweDtcXG4gICAgICBoZWlnaHQ6IDgwcHg7IH1cXG4gIC5mb3JtQ29udGVudCAuY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyB9XFxuICAgIC5mb3JtQ29udGVudCAuY2VudGVyIC5hdXRoVGlwcyB7XFxuICAgICAgY29sb3I6ICNiNGI4YjlkMztcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgcGFkZGluZzogMTBweDsgfVxcbiAgLmZvcm1Db250ZW50IC52ZXJzaW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBjb2xvcjogI2I0YjhiOWQzO1xcbiAgICBmb250LXNpemU6IDEycHg7IH1cXG4gIC5mb3JtQ29udGVudCAudXNlckF2YXRhcldyYXBwZXIge1xcbiAgICBtYXJnaW46IDEwcHggMCAyMHB4OyB9XFxuICAuZm9ybUNvbnRlbnQgLmFjdGl2ZSwgLmZvcm1Db250ZW50IC5pbmFjdGl2ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAyMHB4O1xcbiAgICBjb2xvcjogI2I0YjhiOWQzOyB9XFxuICAuZm9ybUNvbnRlbnQgLmFjdGl2ZSB7XFxuICAgIGNvbG9yOiAjNjZiM2VmOyB9XFxuICAuZm9ybUNvbnRlbnQgaW5wdXRbdHlwZT1idXR0b25dIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiM2VmO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE2cHggMCByZ2JhKDk1LCAxODYsIDIzMywgMC40KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4OyB9XFxuICAuZm9ybUNvbnRlbnQgaW5wdXRbdHlwZT1wYXNzd29yZF0sXFxuICAuZm9ybUNvbnRlbnQgaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6ICMwZDBkMGQ7XFxuICAgIHBhZGRpbmc6IDhweCAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICB3aWR0aDogNzYlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjZmNmY2O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCA0cHggNHB4OyB9XFxuICAuZm9ybUNvbnRlbnQgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNWZiYWU5OyB9XFxuICAuZm9ybUNvbnRlbnQgaW5wdXRbdHlwZT1wYXNzd29yZF06Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzVmYmFlOTsgfVxcbiAgLmZvcm1Db250ZW50IGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2I0YjhiOWQzOyB9XFxuICAuZm9ybUNvbnRlbnQgaW5wdXRbdHlwZT1wYXNzd29yZF06cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI2I0YjhiOWQzOyB9XFxuICAuZm9ybUNvbnRlbnQgLmdpdGh1Yk9BdXRoIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBmb250LXNpemU6IDM2cHg7IH1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zcGlubmVyV3JhcHBlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDk5ODtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuICAuc3Bpbm5lcldyYXBwZXIgLnNwaW5uZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZ3JheSB7XFxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgLW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIC1tcy1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcXG4gIC1vLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XFxuICAtd2Via2l0LWZpbHRlcjogZ3JheTtcXG4gIGZpbHRlcjogZ3JheTsgfVxcblxcbi52aWFHaXRodWIge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtNnB4O1xcbiAgbGVmdDogMzRweDsgfVxcblxcbi51c2VyQXZhdGFyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi9TcGlubmVyJztcbmltcG9ydCBVc2VyQXZhdGFyIGZyb20gJy4uL1VzZXJBdmF0YXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduSW5TaWduVXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmFtZTogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgICBzaG93U3Bpbm5lcjogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcbiAgICB0aGlzLnNldFN0YXRlKHsgW3RhcmdldC5uYW1lXTogdGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuXG4gIGFzeW5jIGxvZ2luR2l0aHViKCkge1xuICAgIGNvbnN0IGhyZWYgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBpZiAoL1xcL2xvZ2luXFw/Y29kZS8udGVzdChocmVmKSkge1xuICAgICAgY29uc3QgY29kZSA9IGhyZWYuc3BsaXQoJz9jb2RlPScpWzFdO1xuICAgICAgUmVxdWVzdC5heGlvcygncG9zdCcsICcvYXBpL3YxL2dpdGh1Yl9vYXV0aCcsIHtcbiAgICAgICAgY29kZSxcbiAgICAgICAgY2xpZW50SWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxMaW5rID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnb3JpZ2luYWxMaW5rJyk7XG4gICAgICAgICAgaWYgKG9yaWdpbmFsTGluaykge1xuICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnb3JpZ2luYWxMaW5rJyk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG9yaWdpbmFsTGluaztcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAn5L2/55SoZ2l0aHViTG9nIGlu5YmN6K+3T0vkvaDnmoRnaXRodWLorr7nva7kuoZwdWJsaWPnmoRlbWFpbO+8jOWQpuWImeWPr+iDveS8muWksei0pSBlcnJvciA9PiAnLFxuICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgKTtcbiAgICAgICAgICB3aW5kb3cub3BlbihcbiAgICAgICAgICAgICdodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS8yNDg2MTMxNi83NTEzMzA5OC02YjU2NDYwMC01NzE0LTExZWEtODI0YS1iMzY3ZWQ1NWIxYTEucG5nJyxcbiAgICAgICAgICApO1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubG9naW5HaXRodWIoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93U3Bpbm5lcjogZmFsc2UgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLnNldFZhbHVlKHRoaXMuc3RhdGUpO1xuICB9O1xuXG4gIGdldCBjbGllbnRJZCgpIHtcbiAgICByZXR1cm4gJzhjNjk0YWY4MzVkNjJmOGZkNDkwJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzTG9naW4gfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBuYW1lLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBsb2dpbkNsYXNzID0gaXNMb2dpbiA/ICdhY3RpdmUnIDogJ2luYWN0aXZlJztcbiAgICBjb25zdCByZWdpc3RlckNsYXNzID0gaXNMb2dpbiA/ICdpbmFjdGl2ZScgOiAnYWN0aXZlJztcbiAgICBjb25zdCBsaW5rVXJsID0gaXNMb2dpbiA/ICcvcmVnaXN0ZXInIDogJy9sb2dpbic7XG4gICAgY29uc3QgYnV0dG9uTmFtZSA9IGlzTG9naW4gPyAnTG9nIGluJyA6ICdSZWdpc3Rlcic7XG4gICAgY29uc3QgT0F1dGhIcmVmID0gYGh0dHBzOi8vZ2l0aHViLmNvbS9sb2dpbi9vYXV0aC9hdXRob3JpemU/Y2xpZW50X2lkPSR7dGhpcy5jbGllbnRJZH1gO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1Db250ZW50IGZhZGVJbkRvd25cIj5cbiAgICAgICAge3RoaXMuc3RhdGUuc2hvd1NwaW5uZXIgJiYgPFNwaW5uZXIgLz59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2hDaGF0TG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9jZG4uYWVybWluLnRvcC9naENoYXRJY29uLnBuZ1wiIGFsdD1cImdoQ2hhdExvZ29cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgdG89e2xpbmtVcmx9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bG9naW5DbGFzc30+TG9nIGluPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIHRvPXtsaW5rVXJsfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3JlZ2lzdGVyQ2xhc3N9PlJlZ2lzdGVyPC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlckF2YXRhcldyYXBwZXJcIj5cbiAgICAgICAgICA8VXNlckF2YXRhciBuYW1lPXtuYW1lIHx8ICfFuCd9IHNpemU9XCIxMDBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gdmFsdWU9e2J1dHRvbk5hbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImF1dGhUaXBzXCI+bXlHaXRIdWJcdTAwMWNHaXRIdWJMb2cgaW48L3A+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2l0aHViT0F1dGhcIiBocmVmPXtPQXV0aEhyZWZ9PlxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uIGdpdGh1Ykljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgPHVzZSB4bGlua0hyZWY9XCIjaWNvbi1naXRodWJcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJzaW9uXCI+VmVyc2lvbjogMi41LjY8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuU2lnbkluU2lnblVwLnByb3BUeXBlcyA9IHtcbiAgc2V0VmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuICBpc0xvZ2luOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cblNpZ25JblNpZ25VcC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNldFZhbHVlKCkge30sXG4gIGlzTG9naW46IGZhbHNlLFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vaW5kZXguc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vaW5kZXguc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyV3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyXCI+TG9hZGluZy4uLjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9pbmRleC5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vaW5kZXguc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanMhLi9pbmRleC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8g5oSf6LCiIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL3JlYWN0LXVzZXItYXZhdGFyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCBkZWZhdWx0Q29sb3JzID0gW1xuICAnIzJlY2M3MScsIC8vIGVtZXJhbGRcbiAgJyMzNDk4ZGInLCAvLyBwZXRlciByaXZlclxuICAnIzhlNDRhZCcsIC8vIHdpc3RlcmlhXG4gICcjZTY3ZTIyJywgLy8gY2Fycm90XG4gICcjZTc0YzNjJywgLy8gYWxpemFyaW5cbiAgJyMxYWJjOWMnLCAvLyB0dXJxdW9pc2VcbiAgJyMyYzNlNTAnLCAvLyBtaWRuaWdodCBibHVlXG5dO1xuXG5mdW5jdGlvbiBzdW1DaGFycyhzdHIpIHtcbiAgbGV0IHN1bSA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgc3VtICs9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICB9XG5cbiAgcmV0dXJuIHN1bTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBdmF0YXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNyYyxcbiAgICBuYW1lLFxuICAgIGlzR3JheSxcbiAgICBjb2xvcixcbiAgICBjb2xvcnMgPSBkZWZhdWx0Q29sb3JzLFxuICAgIGNsaWNrQXZhdGFyLFxuICAgIHNpemUsXG4gICAgYm9yZGVyUmFkaXVzLFxuICAgIHNob3dMb2dvLFxuICAgIGNsYXNzTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGlubmVyU3R5bGUgPSB7XG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB3aWR0aDogYCR7c2l6ZX1weGAsXG4gICAgaGVpZ2h0OiBgJHtzaXplfXB4YCxcbiAgICBib3JkZXJSYWRpdXMsXG4gICAgbGluZUhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIH07XG5cbiAgY29uc3QgaW1nU3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke3NpemV9cHhgLFxuICAgIGhlaWdodDogYCR7c2l6ZX1weGAsXG4gICAgYm9yZGVyUmFkaXVzLFxuICB9O1xuXG4gIGxldCBpbm5lcjtcbiAgaWYgKHNyYykge1xuICAgIGlubmVyID0gPGltZyBzdHlsZT17aW1nU3R5bGV9IHNyYz17c3JjfSBhbHQ9e25hbWV9IC8+O1xuICB9IGVsc2Uge1xuICAgIGxldCBiYWNrZ3JvdW5kO1xuICAgIGlmIChjb2xvcikge1xuICAgICAgYmFja2dyb3VuZCA9IGNvbG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBwaWNrIGEgZGV0ZXJtaW5pc3RpYyBjb2xvciBmcm9tIHRoZSBsaXN0XG4gICAgICBjb25zdCBpID0gc3VtQ2hhcnMobmFtZSkgJSBjb2xvcnMubGVuZ3RoO1xuICAgICAgYmFja2dyb3VuZCA9IGNvbG9yc1tpXTtcbiAgICB9XG5cbiAgICBpbm5lclN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmQ7XG5cbiAgICBpbm5lciA9IDxzcGFuPntuYW1lLmNoYXJBdCgwKX08L3NwYW4+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NOYW1lLCBpc0dyYXkgPyAndXNlckF2YXRhciBncmF5JyA6ICd1c2VyQXZhdGFyJyl9XG4gICAgICBzdHlsZT17aW5uZXJTdHlsZX1cbiAgICAgIG9uQ2xpY2s9e2NsaWNrQXZhdGFyfVxuICAgID5cbiAgICAgIHtzaG93TG9nbyAmJiAoXG4gICAgICAgIDxzdmcgY2xhc3NOYW1lPVwiaWNvbiB2aWFHaXRodWJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8dXNlIHhsaW5rSHJlZj1cIiNpY29uLWdpdGh1YlwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgKX1cbiAgICAgIHtpbm5lcn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuVXNlckF2YXRhci5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNHcmF5OiBQcm9wVHlwZXMuYm9vbCxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbG9yczogUHJvcFR5cGVzLmFycmF5LFxuICBjbGlja0F2YXRhcjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNpemU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJvcmRlclJhZGl1czogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hvd0xvZ286IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Vc2VyQXZhdGFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc3JjOiB1bmRlZmluZWQsXG4gIG5hbWU6ICc/JyxcbiAgaXNHcmF5OiBmYWxzZSxcbiAgY29sb3I6IHVuZGVmaW5lZCxcbiAgY29sb3JzOiBkZWZhdWx0Q29sb3JzLFxuICBjbGlja0F2YXRhcjogdW5kZWZpbmVkLFxuICBzaXplOiAnNDAnLFxuICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICBzaG93TG9nbzogZmFsc2UsXG4gIGNsYXNzTmFtZTogdW5kZWZpbmVkLFxufTtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2xpYi9pbmRleC5qcyEuL3N0eWxlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=