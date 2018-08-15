/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/current_user');

                        case 2:
                            res = _context.sent;

                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var FETCH_FUNDRAISERS = exports.FETCH_FUNDRAISERS = 'fetch_fundraisers';
var fetchFundraisers = exports.fetchFundraisers = function fetchFundraisers() {
    return function () {
        var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/fundraisers');

                        case 2:
                            res = _context2.sent;

                            dispatch({
                                type: FETCH_FUNDRAISERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var FETCH_PETITIONS = exports.FETCH_PETITIONS = 'FETCH_PETITIONS';
var fetchPetitions = exports.fetchPetitions = function fetchPetitions() {
    return function () {
        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var petitions;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get('/petitions');

                        case 2:
                            petitions = _context3.sent;

                            dispatch({
                                type: FETCH_PETITIONS,
                                payload: petitions
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/f0afebeef.jpg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_BASE_URL = exports.API_BASE_URL = 'http://localhost:3000';
// export const API_BASE_URL = 'https://sharing-panda-api.herokuapp.com';

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(24);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(32);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _routes = __webpack_require__(37);

var _routes2 = _interopRequireDefault(_routes);

var _routes3 = __webpack_require__(50);

var _routes4 = _interopRequireDefault(_routes3);

var _routes5 = __webpack_require__(57);

var _routes6 = _interopRequireDefault(_routes5);

var _routes7 = __webpack_require__(60);

var _routes8 = _interopRequireDefault(_routes7);

var _routes9 = __webpack_require__(62);

var _routes10 = _interopRequireDefault(_routes9);

var _routes11 = __webpack_require__(66);

var _routes12 = _interopRequireDefault(_routes11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    })].concat(_toConsumableArray(_routes2.default), _toConsumableArray(_routes4.default), _toConsumableArray(_routes6.default), _toConsumableArray(_routes8.default), _toConsumableArray(_routes12.default), _toConsumableArray(_routes10.default))
})];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var Redux = _interopRequireWildcard(_reactRedux);

var _reactRouterDom = __webpack_require__(1);

var _googleLogo = __webpack_require__(11);

var _googleLogo2 = _interopRequireDefault(_googleLogo);

var _facebookLogo = __webpack_require__(12);

var _facebookLogo2 = _interopRequireDefault(_facebookLogo);

__webpack_require__(13);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = exports.LoginForm = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm() {
        _classCallCheck(this, LoginForm);

        return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'login-form' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-text-center' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'uk-text-bold uk-margin-small-bottom ' },
                        'Log In'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'uk-h6 uk-margin-remove-top' },
                        'Don\'t have an account? ',
                        _react2.default.createElement(
                            'span',
                            { className: 'uk-link', 'data-uk-toggle': 'target: #sign-up-modal' },
                            'Sign Up'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'uk-margin-small' },
                    _react2.default.createElement(
                        'a',
                        { href: '/api/auth/google', target: '_self' },
                        _react2.default.createElement(
                            'button',
                            { id: 'google-button', type: 'button', className: 'uk-button uk-button-small uk-button-default uk-width-1-1 uk-box-shadow-small' },
                            _react2.default.createElement('img', { className: 'uk-preserve uk-margin-small-right', src: _googleLogo2.default, width: '25', height: '25', 'data-uk-svg': true }),
                            'Log in with Google'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'uk-margin-small' },
                    _react2.default.createElement(
                        'a',
                        { href: '/api/auth/facebook', target: '_self' },
                        _react2.default.createElement(
                            'button',
                            { id: 'facebook-button', type: 'button', className: 'uk-button uk-button-small uk-button-default uk-width-1-1' },
                            _react2.default.createElement('img', { className: 'uk-preserve uk-margin-small-right', src: _facebookLogo2.default, width: '25', height: '25', 'data-uk-svg': true }),
                            'Log In with Facebook'
                        )
                    )
                ),
                _react2.default.createElement('hr', { className: 'uk-divider-icon' }),
                _react2.default.createElement(
                    'form',
                    { id: 'login-form', className: 'uk-form-stacked', action: '/api/login', method: 'post', target: '_parent' },
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-small' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-form-controls' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-inline' },
                                _react2.default.createElement('span', { className: 'uk-form-icon', 'data-uk-icon': 'icon: user' }),
                                _react2.default.createElement('input', { id: 'login-email', name: 'email', className: 'uk-input uk-form-width-large', type: 'text', placeholder: 'Email Id', onChange: this.handleInputChange })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-small' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-form-controls' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-inline' },
                                _react2.default.createElement('span', { className: 'uk-form-icon', 'data-uk-icon': 'icon: lock' }),
                                _react2.default.createElement('input', { id: 'login-password', name: 'password', className: 'uk-input uk-form-width-large', type: 'password', placeholder: 'Password', onChange: this.handleInputChange })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-small' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-form-controls' },
                            _react2.default.createElement(
                                'button',
                                { className: 'uk-button uk-button-large uk-button-primary uk-width-1-1', type: 'submit' },
                                'SIGN IN'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-clearfix' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-float-left' },
                            _react2.default.createElement(
                                'label',
                                { style: { 'fontSize': '0.7rem' } },
                                'Forgot Details?'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-float-right' },
                            _react2.default.createElement(
                                'label',
                                { style: { 'fontSize': '0.7rem' } },
                                _react2.default.createElement('input', { className: 'uk-checkbox', type: 'checkbox' }),
                                ' Remember me'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return LoginForm;
}(_react.Component);

exports.default = LoginForm;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/google-logo.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/facebook-logo.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignUpForm = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var Redux = _interopRequireWildcard(_reactRedux);

var _reactRouterDom = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _googleLogo = __webpack_require__(11);

var _googleLogo2 = _interopRequireDefault(_googleLogo);

var _facebookLogo = __webpack_require__(12);

var _facebookLogo2 = _interopRequireDefault(_facebookLogo);

__webpack_require__(13);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpForm = exports.SignUpForm = function (_Component) {
    _inherits(SignUpForm, _Component);

    function SignUpForm() {
        _classCallCheck(this, SignUpForm);

        return _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).apply(this, arguments));
    }

    _createClass(SignUpForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'sign-up-form' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-text-center' },
                    _react2.default.createElement(
                        'h4',
                        { className: 'uk-text-bold uk-margin-small-bottom ' },
                        'Sign Up'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'uk-h6 uk-margin-remove-top' },
                        'Already have an account? ',
                        _react2.default.createElement(
                            'span',
                            { className: 'uk-link', 'data-uk-toggle': 'target: #login-modal' },
                            'Log In'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'uk-margin-small' },
                    _react2.default.createElement(
                        'a',
                        { href: '/api/auth/google', target: '_self' },
                        _react2.default.createElement(
                            'button',
                            { id: 'google-button', type: 'button', className: 'uk-button uk-button-small uk-button-default uk-width-1-1 uk-box-shadow-small' },
                            _react2.default.createElement('img', { className: 'uk-preserve uk-margin-small-right', src: _googleLogo2.default, width: '25', height: '25', 'data-uk-svg': true }),
                            'Sign up with Google'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'uk-margin-small' },
                    _react2.default.createElement(
                        'a',
                        { href: '/api/auth/facebook', target: '_self' },
                        _react2.default.createElement(
                            'button',
                            { id: 'facebook-button', type: 'button', className: 'uk-button uk-button-small uk-button-default uk-width-1-1' },
                            _react2.default.createElement('img', { className: 'uk-preserve uk-margin-small-right', src: _facebookLogo2.default, width: '25', height: '25', 'data-uk-svg': true }),
                            'Sign up with Facebook'
                        )
                    )
                ),
                _react2.default.createElement('hr', { className: 'uk-divider-icon' }),
                _react2.default.createElement(
                    'form',
                    { action: '/api/signup', method: 'post', target: '_parent', id: 'signup-form', className: 'uk-form-stacked' },
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-small' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-form-controls' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-inline' },
                                _react2.default.createElement('span', { className: 'uk-form-icon', 'data-uk-icon': 'icon: user' }),
                                _react2.default.createElement('input', { id: 'first_name', name: 'first_name', className: 'uk-input uk-form-width-large', type: 'text', placeholder: 'First Name' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-small' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-form-controls' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-inline' },
                                _react2.default.createElement('span', { className: 'uk-form-icon', 'data-uk-icon': 'icon: user' }),
                                _react2.default.createElement('input', { id: 'last_name', name: 'last_name', className: 'uk-input uk-form-width-large', type: 'text', placeholder: 'Last Name' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-small' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-form-controls' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-inline' },
                                _react2.default.createElement('span', { className: 'uk-form-icon', 'data-uk-icon': 'icon: user' }),
                                _react2.default.createElement('input', { id: 'signup-email', name: 'email', className: 'uk-input uk-form-width-large', type: 'text', placeholder: 'Email Id' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-small' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-form-controls' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-inline' },
                                _react2.default.createElement('span', { className: 'uk-form-icon', 'data-uk-icon': 'icon: lock' }),
                                _react2.default.createElement('input', { id: 'signup-password', name: 'password', className: 'uk-input uk-form-width-large', type: 'password', placeholder: 'Password' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-small' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-form-controls' },
                            _react2.default.createElement(
                                'button',
                                { type: 'submit', className: 'uk-button uk-button-large uk-button-primary uk-width-1-1' },
                                'SIGN UP'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return SignUpForm;
}(_react.Component);

exports.default = SignUpForm;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/03899dfcf.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spinner = function (_Component) {
    _inherits(Spinner, _Component);

    function Spinner() {
        _classCallCheck(this, Spinner);

        return _possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).apply(this, arguments));
    }

    _createClass(Spinner, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'sp sp-3balls' });
        }
    }]);

    return Spinner;
}(_react.Component);

exports.default = Spinner;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var API_BASE_URL = exports.API_BASE_URL = 'http://localhost:3000';
// export const API_BASE_URL = 'https://sharing-panda-api.herokuapp.com';

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(21);

var _express = __webpack_require__(22);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(6);

var _expressHttpProxy = __webpack_require__(23);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _Routes = __webpack_require__(9);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(70);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(73);

var _createStore2 = _interopRequireDefault(_createStore);

var _constants = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use('/api', (0, _expressHttpProxy2.default)(_constants.API_BASE_URL, {
    proxyReqOptDecorator: function proxyReqOptDecorator(opts) {
        opts.headers['X-Forwarded-Host'] = 'localhost:8080';
        // opts.headers['X-Forwarded-Host'] = 'sharing-panda-ui.herokuapp.com';
        return opts;
    }
}));

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req);
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(resolve).catch(resolve);
            });
        }
    });
    Promise.all(promises).then(function () {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);
        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
    return console.log('Server initialized on // ' + new Date());
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(6);

var _Header = __webpack_require__(25);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(29);

var _Footer2 = _interopRequireDefault(_Footer);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes),
        _react2.default.createElement(_Footer2.default, null)
    );
};

exports.default = {
    component: App,
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchCurrentUser)());
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(26);

var _reactRedux = __webpack_require__(3);

var _logo = __webpack_require__(27);

var _logo2 = _interopRequireDefault(_logo);

var _profile = __webpack_require__(28);

var _profile2 = _interopRequireDefault(_profile);

var _LoginForm = __webpack_require__(10);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _SignUpForm = __webpack_require__(14);

var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;
    return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
            'nav',
            { className: 'uk-navbar-container uk-navbar-default', 'data-uk-navbar': 'mode: click' },
            _react2.default.createElement(
                'div',
                { className: 'uk-navbar-left' },
                _react2.default.createElement(
                    'ul',
                    { className: 'uk-navbar-nav' },
                    _react2.default.createElement(
                        'li',
                        { className: 'uk-logo' },
                        _react2.default.createElement(
                            _reactRouterDom.NavLink,
                            { to: '/', exact: true },
                            _react2.default.createElement('img', { src: _logo2.default, width: '250', height: '160', alt: '' })
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'uk-visible@m' },
                        _react2.default.createElement(
                            _reactRouterDom.NavLink,
                            { to: '/start-petition' },
                            'Start Petition'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'uk-visible@m' },
                        _react2.default.createElement(
                            _reactRouterDom.NavLink,
                            { to: '/petitions' },
                            'Browse'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'uk-navbar-right' },
                _react2.default.createElement(
                    'ul',
                    { className: 'uk-navbar-nav' },
                    _react2.default.createElement(
                        'li',
                        { className: 'uk-visible@m' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-search', 'aria-hidden': 'true' })
                        )
                    ),
                    auth ? _react2.default.createElement(
                        'li',
                        { className: 'uk-visible@m' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-bell-o', 'aria-hidden': 'true' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-text-center uk-width-large', 'data-uk-dropdown': 'mode: click; pos: bottom-center' },
                            _react2.default.createElement(
                                'h4',
                                null,
                                'You don\'t have any notifications.'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'When there is activity on a petition you support, you will see it here. Meanwhile, you can browse Change.org to find other petitions you want to support.'
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/petitions', target: '_self' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'uk-link' },
                                    'Discover Petitions'
                                )
                            )
                        )
                    ) : null,
                    auth ? _react2.default.createElement(
                        'li',
                        { className: 'uk-visible@m' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-user-circle-o', 'aria-hidden': 'true' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-navbar-dropdown' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'uk-nav uk-navbar-dropdown-nav' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/user/' + auth._id, target: '_self' },
                                        'Profile'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/user/' + auth._id + '/settings', target: '_self' },
                                        'Settings'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/user/' + auth._id, target: '_self' },
                                        'My Petitions'
                                    )
                                ),
                                _react2.default.createElement('li', { className: 'uk-nav-divider' }),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'uk-text-bold' },
                                        auth.google && auth.google.name || auth.facebook && auth.facebook.name
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/api/logout', target: '_self' },
                                        'Log Out'
                                    )
                                )
                            )
                        )
                    ) : _react2.default.createElement(
                        'li',
                        { className: 'uk-visible@m' },
                        _react2.default.createElement(
                            'a',
                            { 'data-uk-toggle': 'target: #login-modal' },
                            'Log In'
                        )
                    ),
                    auth ? _react2.default.createElement(
                        'li',
                        { className: 'uk-hidden@m' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-user-circle-o', 'aria-hidden': 'true' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-navbar-dropdown' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'uk-nav uk-navbar-dropdown-nav' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/user/' + auth._id, target: '_self' },
                                        'Profile'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/user/' + auth._id + '/settings', target: '_self' },
                                        'Settings'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/user/' + auth._id, target: '_self' },
                                        'My Petitions'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/start-petition', target: '_self' },
                                        'Start a Petition'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Search'
                                    )
                                ),
                                _react2.default.createElement('li', { className: 'uk-nav-divider' }),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'uk-text-bold' },
                                        auth.google && auth.google.name || auth.facebook && auth.facebook.name
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '/api/logout', target: '_self' },
                                        'Log Out'
                                    )
                                )
                            )
                        )
                    ) : _react2.default.createElement(
                        'li',
                        { className: 'uk-hidden@m' },
                        _react2.default.createElement(
                            'a',
                            null,
                            _react2.default.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-navbar-dropdown' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'uk-nav uk-navbar-dropdown-nav' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/start-petition', target: '_self' },
                                        'Start Petition'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/petitions', target: '_self' },
                                        'Browse Petition'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Search'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { 'data-uk-toggle': 'target: #login-modal' },
                                        'Log In'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'login-modal', className: 'uk-flex-top', 'data-uk-modal': true },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-modal-dialog uk-modal-body uk-margin-auto-vertical' },
                            _react2.default.createElement(_LoginForm2.default, null)
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'sign-up-modal', className: 'uk-flex-top', 'data-uk-modal': true },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-modal-dialog uk-modal-body uk-margin-auto-vertical' },
                            _react2.default.createElement(_SignUpForm2.default, null)
                        )
                    )
                )
            )
        )
    );
};

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/logo.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/5b2a9017b.jpg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(30);

var _sharingPandaLogo = __webpack_require__(31);

var _sharingPandaLogo2 = _interopRequireDefault(_sharingPandaLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(_ref) {
    var match = _ref.match;
    return _react2.default.createElement(
        'footer',
        { id: 'footer' },
        _react2.default.createElement(
            'div',
            { className: 'uk-section uk-section-primary' },
            _react2.default.createElement(
                'div',
                { className: 'uk-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-flex uk-flex-center uk-margin-medium' },
                    _react2.default.createElement(
                        'div',
                        { className: 'footer-list uk-text-center' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'CONNECT WITH US'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'icon-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('a', { href: '', className: 'uk-icon-button', 'data-uk-icon': 'icon: twitter' })
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('a', { href: '', className: 'uk-icon-button', 'data-uk-icon': 'icon: facebook' })
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('a', { href: '', className: 'uk-icon-button', 'data-uk-icon': 'icon: google-plus' })
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('a', { href: '', className: 'uk-icon-button', 'data-uk-icon': 'icon: whatsapp' })
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement('a', { href: '', className: 'uk-icon-button', 'data-uk-icon': 'icon: youtube' })
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'uk-grid-small uk-flex uk-flex-center', 'data-uk-grid': true },
                    _react2.default.createElement(
                        'div',
                        { className: 'footer-list uk-width-1-5@m' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Fundraise'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'other-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Movie & Film Projects '
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Music Projects'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Other Entrepreneurial Projects'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Fundraising for NGOs'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Personal Causes'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Crowdfunding for Education'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer-list uk-width-1-5@m' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'How it works'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'other-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'NGOS'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Corporates'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Individuals'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer-list uk-width-1-5@m' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'About Us'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'other-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/support/team-sharing-panda', target: '_self' },
                                    'Team Sharing Panda'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Our Partners'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Careers'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Press Club'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                ' ',
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Blog'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'footer-list uk-width-1-5@m' },
                        _react2.default.createElement(
                            'p',
                            null,
                            'Support'
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'other-list' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/support/faqs', target: '_self' },
                                    'FAQs'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.NavLink,
                                    { to: '/support/fundraising-tips', target: '_self' },
                                    'Fundraising Tips'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Fundraiser Video'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Project Handbook'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Plans & Pricing'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Payouts'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Contact Us'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Trust & Safety'
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = (0, _reactRouterDom.withRouter)(Footer);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/sharing-panda-logo.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(5);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _img = __webpack_require__(15);

var _img2 = _interopRequireDefault(_img);

var _img3 = __webpack_require__(33);

var _img4 = _interopRequireDefault(_img3);

var _img5 = __webpack_require__(34);

var _img6 = _interopRequireDefault(_img5);

var _img7 = __webpack_require__(35);

var _img8 = _interopRequireDefault(_img7);

var _img9 = __webpack_require__(7);

var _img10 = _interopRequireDefault(_img9);

var _Spinner = __webpack_require__(16);

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomePage = function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HomePage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HomePage.__proto__ || Object.getPrototypeOf(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.handleUpload = function (e) {
      e.preventDefault();
      _axios2.default.get('/api/upload');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HomePage, [{
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          'Sharing Panda | India\'s Crowdfunding Platform'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'uk-section uk-section-muted uk-margin-remove' },
            _react2.default.createElement(
              'div',
              { className: 'uk-container uk-text-center' },
              _react2.default.createElement(
                'div',
                { className: 'uk-grid', 'data-uk-grid': true },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-width-1-3@m' },
                  _react2.default.createElement(
                    'div',
                    { className: 'uk-text uk-text-default' },
                    _react2.default.createElement('span', { 'data-uk-icon': 'icon: credit-card; ratio:8' }),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h1 uk-margin-small-top uk-margin-small-bottom', style: { 'color': 'black' } },
                      'Rs.100 Crore+'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-margin-remove', style: { 'color': 'black' } },
                      'raised'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'uk-width-1-3@m' },
                  _react2.default.createElement(
                    'div',
                    { className: 'uk-text uk-text-default uk-margin-left' },
                    _react2.default.createElement('span', { 'data-uk-icon': 'icon: users; ratio:8' }),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h1 uk-margin-small-top uk-margin-small-bottom', style: { 'color': 'black' } },
                      '2,00,000+'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-margin-remove', style: { 'color': 'black' } },
                      'supporters'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'uk-width-1-3@m' },
                  _react2.default.createElement(
                    'div',
                    { className: 'uk-text uk-text-default uk-margin-left' },
                    _react2.default.createElement('span', { 'data-uk-icon': 'icon: push; ratio:8' }),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h1 uk-margin-small-top uk-margin-small-bottom', style: { 'color': 'black' } },
                      '30,000+'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-margin-remove', style: { 'color': 'black' } },
                      'fundraisers'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'my-element', className: 'uk-section uk-section-secondary uk-margin-remove' },
            _react2.default.createElement(
              'div',
              { className: 'uk-container uk-text-center' },
              _react2.default.createElement(
                'div',
                { className: 'uk-h2 uk-margin-medium-bottom', style: { 'color': 'black' } },
                'Asia\'s Most Visited And Trusted Crowdfunding Platform'
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-flex uk-flex-center' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-grid', 'data-uk-grid': true },
                  _react2.default.createElement(
                    'div',
                    { className: 'uk-width-1-2@m' },
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-text-left uk-margin-top-remove', style: { 'color': 'black' } },
                      _react2.default.createElement('span', { className: 'uk-margin-small-right', style: { 'color': 'red' }, 'data-uk-icon': 'icon: check; ratio:2' }),
                      '24 X 7 chat, email support'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-text-left uk-margin-top-remove', style: { 'color': 'black' } },
                      _react2.default.createElement('span', { className: 'uk-margin-small-right', style: { 'color': 'red' }, 'data-uk-icon': 'icon: check; ratio:2' }),
                      'Indian and foreign donations'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-text-left uk-margin-top-remove', style: { 'color': 'black' } },
                      _react2.default.createElement('span', { className: 'uk-margin-small-right', style: { 'color': 'red' }, 'data-uk-icon': 'icon: check; ratio:2' }),
                      'Mobile-friendly fundraisers'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'uk-width-1-2@m' },
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-text-left uk-margin-top-remove', style: { 'color': 'black' } },
                      _react2.default.createElement('span', { className: 'uk-margin-small-right', style: { 'color': 'red' }, 'data-uk-icon': 'icon: check; ratio:2' }),
                      'Sign up for free'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-text-left uk-margin-top-remove', style: { 'color': 'black' } },
                      _react2.default.createElement('span', { className: 'uk-margin-small-right', style: { 'color': 'red' }, 'data-uk-icon': 'icon: check; ratio:2' }),
                      'No time-limit or minimum goals'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'uk-h4 uk-text-left uk-margin-top-remove', style: { 'color': 'black' } },
                      _react2.default.createElement('span', { className: 'uk-margin-small-right', style: { 'color': 'red' }, 'data-uk-icon': 'icon: check; ratio:2' }),
                      'Daily access to funds'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'uk-section uk-section-muted uk-margin-remove' },
            _react2.default.createElement(
              'div',
              { className: 'uk-container uk-container-small' },
              _react2.default.createElement(
                'div',
                { className: 'uk-h2 uk-margin-medium-bottom uk-text-center', style: { 'color': 'black' } },
                'Trending Now'
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-child-width-1-2@s uk-child-width-1-3@m uk-flex-center', 'data-uk-grid': true },
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('div', { className: 'uk-tile uk-tile-default uk-padding-small' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('div', { className: 'uk-tile uk-tile-default uk-padding-small' })
                ),
                _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement('div', { className: 'uk-tile uk-tile-default uk-padding-small' })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { id: 'my-other-element', className: 'uk-visible@s uk-section uk-section-muted uk-padding-remove uk-margin-remove' },
            _react2.default.createElement(
              'div',
              { className: 'uk-text-center uk-grid-collapse', 'data-uk-grid': true },
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-3@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-medium uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img2.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-4@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-medium uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img4.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-6@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-medium uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img8.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-4@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-medium uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img8.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-6@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-medium uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img4.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-3@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-medium uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img2.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-6@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-medium uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img8.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-3@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-medium uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img2.default + ')' } })
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'uk-hidden@s uk-section uk-section-muted uk-padding-remove uk-margin-remove' },
            _react2.default.createElement(
              'div',
              { className: 'uk-text-center uk-grid-collapse', 'data-uk-grid': true },
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-3@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-small uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img2.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-4@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-small uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img4.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-6@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-small uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img8.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-4@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-small uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img8.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-6@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-small uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img4.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-3@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-small uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img2.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-6@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-small uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img8.default + ')' } })
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'uk-width-1-2@s uk-width-1-3@m' },
                _react2.default.createElement(
                  'div',
                  { className: 'uk-tile uk-height-small uk-tile-primary uk-padding-remove' },
                  _react2.default.createElement('div', { className: 'uk-background-cover uk-height-small uk-panel uk-flex uk-flex-center uk-flex-middle', style: { 'backgroundImage': 'url(' + _img2.default + ')' } })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HomePage;
}(_react.Component);

exports.default = {
  component: HomePage
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/91d3d7edb.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/0219a7450.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./images/7716500fe.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _BrowseFundraiserPage = __webpack_require__(38);

var _BrowseFundraiserPage2 = _interopRequireDefault(_BrowseFundraiserPage);

var _FundraiserDetailPage = __webpack_require__(43);

var _FundraiserDetailPage2 = _interopRequireDefault(_FundraiserDetailPage);

var _AddFundraiserPage = __webpack_require__(49);

var _AddFundraiserPage2 = _interopRequireDefault(_AddFundraiserPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _AddFundraiserPage2.default, {
    path: '/fundraisers/start-fundraiser'
}), _extends({}, _FundraiserDetailPage2.default, {
    path: '/fundraisers/:fundraiserId'
}), _extends({}, _BrowseFundraiserPage2.default, {
    path: '/fundraisers'
})];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FundraiserCard = __webpack_require__(39);

var _FundraiserCard2 = _interopRequireDefault(_FundraiserCard);

var _reactRouterDom = __webpack_require__(1);

var _reactHelmet = __webpack_require__(5);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowseFundraiserPage = function (_Component) {
  _inherits(BrowseFundraiserPage, _Component);

  function BrowseFundraiserPage() {
    _classCallCheck(this, BrowseFundraiserPage);

    return _possibleConstructorReturn(this, (BrowseFundraiserPage.__proto__ || Object.getPrototypeOf(BrowseFundraiserPage)).apply(this, arguments));
  }

  _createClass(BrowseFundraiserPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchFundraisers();
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement('meta', { property: 'og:title', content: 'CrowdFunding App' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var fundraisers = this.props.fundraisers;

      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'div',
          { className: 'uk-section' },
          _react2.default.createElement(
            'div',
            { className: 'uk-container uk-container-small' },
            _react2.default.createElement(
              'div',
              { className: 'uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-small uk-grid-match uk-flex', 'data-uk-grid': true },
              fundraisers && fundraisers.map(function (fundraiser) {
                return _react2.default.createElement(
                  'div',
                  { key: fundraiser._id },
                  _react2.default.createElement(_FundraiserCard2.default, _extends({ id: fundraiser._id }, fundraiser))
                );
              })
            )
          )
        )
      );
    }
  }]);

  return BrowseFundraiserPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    fundraisers: state.fundraisers.docs
  };
};

var loadData = function loadData(store) {
  return store.dispatch((0, _actions.fetchFundraisers)());
};

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchFundraisers: _actions.fetchFundraisers })(BrowseFundraiserPage)
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Button = __webpack_require__(40);

var _Button2 = _interopRequireDefault(_Button);

var _img = __webpack_require__(7);

var _img2 = _interopRequireDefault(_img);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FundraiserCard = function FundraiserCard(_ref) {
    var match = _ref.match,
        fundraiser_id = _ref.fundraiser_id,
        id = _ref.id,
        title = _ref.title,
        description = _ref.description,
        author = _ref.author;

    return _react2.default.createElement(
        'div',
        { className: 'campaign-card' },
        _react2.default.createElement(
            'div',
            { className: 'card-image' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: match.path + '/' + fundraiser_id },
                _react2.default.createElement('div', { className: 'uk-background-cover uk-height-medium', style: { 'backgroundImage': 'url(' + _img2.default + ')' } })
            ),
            _react2.default.createElement(
                'div',
                { className: 'category' },
                _react2.default.createElement(
                    'span',
                    null,
                    'Wildlife Conservation'
                )
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'social' },
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-facebook' })
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement('i', { className: 'fa fa-whatsapp' })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'campaign-info' },
            _react2.default.createElement(
                'p',
                null,
                title
            ),
            _react2.default.createElement(
                'span',
                null,
                'by'
            ),
            _react2.default.createElement(
                'span',
                null,
                author.first_name + '  ' + author.last_name
            ),
            _react2.default.createElement(
                'p',
                null,
                description
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'campaign-progress' },
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    'Raised '
                ),
                _react2.default.createElement('i', { className: 'fa fa-inr' }),
                _react2.default.createElement(
                    'p',
                    null,
                    ' 5,60,400'
                )
            ),
            _react2.default.createElement(
                'span',
                null,
                _react2.default.createElement(
                    'p',
                    null,
                    '56%'
                )
            ),
            _react2.default.createElement('progress', { id: 'progressbar', className: 'uk-progress', value: '55', max: '100' })
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
            'div',
            { className: 'campaign-status' },
            _react2.default.createElement(
                'div',
                { className: 'goal' },
                _react2.default.createElement('i', { className: 'fa fa-inr' }),
                _react2.default.createElement(
                    'span',
                    null,
                    '10,00,000'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'goal'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'supporter' },
                _react2.default.createElement('i', { className: 'fa fa-heart' }),
                _react2.default.createElement(
                    'span',
                    null,
                    '145'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'supporters'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'days' },
                _react2.default.createElement('i', { className: 'fa fa-clock-o' }),
                _react2.default.createElement(
                    'span',
                    null,
                    '26'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'days left'
                )
            )
        )
    );
};

exports.default = (0, _reactRouterDom.withRouter)(FundraiserCard);

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(41);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
    var type = _ref.type,
        text = _ref.text;

    var btnClass = (0, _classnames2.default)({
        'uk-button': true,
        'uk-button-primary': type === 'primary',
        'uk-button-secondary': type === 'secondary'
    });
    return _react2.default.createElement(
        'button',
        { className: btnClass },
        text
    );
};

exports.default = Button;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _CommentsContainer = __webpack_require__(44);

var _CommentsContainer2 = _interopRequireDefault(_CommentsContainer);

var _DonationContainer = __webpack_require__(47);

var _DonationContainer2 = _interopRequireDefault(_DonationContainer);

var _img = __webpack_require__(15);

var _img2 = _interopRequireDefault(_img);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

;

// import Quill from 'quill';

var FundraiserDetailPage = function (_Component) {
    _inherits(FundraiserDetailPage, _Component);

    function FundraiserDetailPage(props) {
        _classCallCheck(this, FundraiserDetailPage);

        var _this = _possibleConstructorReturn(this, (FundraiserDetailPage.__proto__ || Object.getPrototypeOf(FundraiserDetailPage)).call(this, props));

        _this.state = {
            fundraiser: {}
        };
        return _this;
    }

    _createClass(FundraiserDetailPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var tour = new Tour({
                steps: [{
                    element: "#title",
                    title: "Title of my step",
                    content: "Content of my step",
                    placement: "right",
                    smartPlacement: true
                }, {
                    element: "#donation",
                    title: "Title of my step",
                    content: "Content of my step",
                    placement: "bottom",
                    smartPlacement: true
                }],
                container: "body",
                smartPlacement: true,
                keyboard: false,
                debug: false,
                backdrop: true,
                backdropContainer: 'body',
                backdropPadding: 40,
                redirect: true,
                orphan: false,
                duration: false,
                delay: false,
                basePath: "",
                template: '<div class=\'popover tour\'>\n              <div class=\'arrow\'></div>\n              <h3 class=\'popover-title\'></h3>\n              <div class=\'popover-content\'></div>\n              <div class=\'popover-navigation\'>\n                  <button class=\'btn btn-default\' data-role=\'prev\'>\xAB Prev</button>\n                  <span data-role=\'separator\'>|</span>\n                  <button class=\'btn btn-default\' data-role=\'next\'>Next \xBB</button>\n              </div>\n              <button class=\'btn btn-default\' data-role=\'end\'>End tour</button>\n            </div>'
            });

            // Initialize the tour
            tour.init();
            // Start the tour
            tour.start();
            var quill = void 0;
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
                quill = new Quill('#story', {
                    theme: 'bubble'
                });
                quill.enable(false);
            }

            (0, _axios2.default)({
                method: 'get',
                url: _constants.API_BASE_URL + '/fundraisers/' + this.props.match.params.fundraiserId
            }).then(function (fundraiser) {
                _this2.setState({
                    fundraiser: fundraiser.data
                }, function () {
                    quill.setContents(JSON.parse(_this2.state.fundraiser.story));
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var fundraiser = this.state.fundraiser;

            return _react2.default.createElement(
                'div',
                { className: 'uk-container uk-container-small' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-section' },
                    _react2.default.createElement(
                        'h2',
                        { id: 'title', className: 'uk-margin-remove-bottom' },
                        fundraiser.title
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        fundraiser.description
                    ),
                    _react2.default.createElement('div', { className: 'uk-background-cover uk-height-large', style: { 'backgroundImage': 'url(' + _img2.default + ')' } }),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-h4' },
                        'Story'
                    ),
                    _react2.default.createElement('div', { id: 'story' }),
                    _react2.default.createElement(
                        'div',
                        { id: 'post', className: 'uk-h4' },
                        'Posts',
                        _react2.default.createElement(_CommentsContainer2.default, fundraiser)
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'donation', className: 'uk-h4' },
                        'Donations',
                        _react2.default.createElement(_DonationContainer2.default, fundraiser)
                    ),
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { style: { 'color': 'black' }, to: '/donations', activeClassName: 'uk-active' },
                        _react2.default.createElement(
                            'button',
                            { className: 'uk-button uk-button-primary', id: 'donate' },
                            'Donate Now'
                        )
                    )
                )
            );
        }
    }]);

    return FundraiserDetailPage;
}(_react.Component);

exports.default = {
    component: FundraiserDetailPage
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _Posts = __webpack_require__(45);

var _Posts2 = _interopRequireDefault(_Posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CommentsContainer = function (_Component) {
    _inherits(CommentsContainer, _Component);

    function CommentsContainer(props) {
        _classCallCheck(this, CommentsContainer);

        var _this = _possibleConstructorReturn(this, (CommentsContainer.__proto__ || Object.getPrototypeOf(CommentsContainer)).call(this, props));

        _this.handleInputChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var data = _this.state;
            if (data.text) {
                (0, _axios2.default)({
                    method: 'post',
                    url: '/api/v1/comments',
                    data: data
                }).then(function (comment) {
                    _this.resetForm();
                    console.log('Comment Added Successfully');
                });
            }
        };

        _this.resetForm = function () {
            _this.setState({
                'text': ''
            });
        };

        _this.state = {
            text: '',
            user_id: '5a0323a019b7ef276cda8b5d',
            fundraiser_id: _this.props.match.params.fundraiserId
        };
        return _this;
    }

    _createClass(CommentsContainer, [{
        key: 'render',
        value: function render() {
            var comments = this.props.comments;

            return _react2.default.createElement(
                'div',
                { className: 'comments-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'comment-post' },
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'fieldset',
                            { className: 'uk-fieldset' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement('textarea', { id: 'text', name: 'text', className: 'uk-textarea', rows: '5', value: this.state.text, placeholder: 'Write Comment...', onChange: this.handleInputChange })
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'uk-button uk-button-primary' },
                                'Post'
                            )
                        )
                    ),
                    _react2.default.createElement('hr', { className: 'uk-divider-icon' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-comment-list' },
                            comments && comments.map(function (comment) {
                                return _react2.default.createElement(_Posts2.default, _extends({ key: comment._id }, comment));
                            })
                        )
                    )
                )
            );
        }
    }]);

    return CommentsContainer;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(CommentsContainer);

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(17);

var _moment2 = _interopRequireDefault(_moment);

var _Reply = __webpack_require__(46);

var _Reply2 = _interopRequireDefault(_Reply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
    _inherits(Posts, _Component);

    function Posts(props) {
        _classCallCheck(this, Posts);

        var _this = _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));

        _this.handleInputChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.handleReplyClick = function (e) {
            _this.setState({
                toggleReplyBox: !_this.state.toggleReplyBox
            });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var data = _this.state;
            if (data.text) {
                (0, _axios2.default)({
                    method: 'post',
                    url: '/api/v1/comments/' + _this.props._id,
                    data: data
                }).then(function (comment) {
                    _this.resetForm();
                    _this.setState({
                        toggleReplyBox: false
                    });
                    console.log('Replied.');
                });
            }
        };

        _this.resetForm = function () {
            _this.setState({
                text: ''
            });
        };

        _this.handleViewReplyClick = function (e) {
            e.preventDefault();
            _this.setState({
                viewReplyRequested: true
            }, function () {
                (0, _axios2.default)({
                    method: 'get',
                    url: '/api/v1/comments/' + _this.props._id
                }).then(function (comment) {
                    _this.setState({
                        replies: comment.data.replies,
                        viewReplies: true
                    });
                });
            });
        };

        _this.state = {
            text: '',
            user_id: '5a0323ac19b7ef276cda8b5e',
            fundraiser_id: _this.props.match.params.fundraiserId,
            toggleReplyBox: false,
            viewReplies: false,
            viewReplyRequested: false,
            replies: []
        };

        return _this;
    }

    _createClass(Posts, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                _id = _props._id,
                text = _props.text,
                comment_date = _props.comment_date,
                commentor = _props.commentor;
            var _state = this.state,
                toggleReplyBox = _state.toggleReplyBox,
                viewReplies = _state.viewReplies,
                viewReplyRequested = _state.viewReplyRequested,
                replies = _state.replies;

            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'article',
                    { className: 'uk-comment uk-visible-toggle' },
                    _react2.default.createElement(
                        'header',
                        { className: 'uk-comment-header uk-position-relative' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-grid-medium uk-flex-middle', 'data-uk-grid': true },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-width-auto' },
                                _react2.default.createElement('img', { className: 'uk-border-circle', src: 'http://lorempixel.com/80/80', width: '80', height: '80', alt: '' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-width-expand' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'uk-comment-title uk-margin-remove' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'uk-link-reset' },
                                        commentor.first_name + ' ' + commentor.last_name
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'uk-comment-meta uk-margin-remove-top' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'uk-link-reset' },
                                        (0, _moment2.default)(comment_date).fromNow()
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-position-top-right uk-position-small uk-hidden-hover' },
                            _react2.default.createElement(
                                'a',
                                { className: 'uk-link-muted', onClick: this.handleReplyClick },
                                'Reply'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-comment-body' },
                        _react2.default.createElement(
                            'p',
                            null,
                            text
                        )
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'uk-button uk-buttom-primary', onClick: this.handleViewReplyClick },
                        'View Replies'
                    )
                ),
                toggleReplyBox ? _react2.default.createElement(
                    'div',
                    { className: 'uk-margin' },
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'fieldset',
                            { className: 'uk-fieldset' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement('textarea', { id: 'text', name: 'text', className: 'uk-textarea', rows: '5', value: this.state.text, placeholder: 'Reply...', onChange: this.handleInputChange, onBlur: this.handleReplyClick })
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'uk-button uk-button-primary' },
                                'Post'
                            )
                        )
                    )
                ) : null,
                viewReplyRequested ? viewReplies ? _react2.default.createElement(
                    'ul',
                    null,
                    replies && replies.map(function (reply) {
                        return _react2.default.createElement(_Reply2.default, _extends({ key: reply._id }, reply));
                    })
                ) : _react2.default.createElement(
                    'div',
                    null,
                    'Spinner'
                ) : null
            );
        }
    }]);

    return Posts;
}(_react.Component);

exports.default = (0, _reactRouterDom.withRouter)(Posts);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(17);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reply = function (_Component) {
    _inherits(Reply, _Component);

    function Reply(props) {
        _classCallCheck(this, Reply);

        var _this = _possibleConstructorReturn(this, (Reply.__proto__ || Object.getPrototypeOf(Reply)).call(this, props));

        _this.handleInputChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.handleReplyClick = function (e) {
            _this.setState({
                toggleReplyBox: !_this.state.toggleReplyBox
            });
        };

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var data = _this.state;
            if (data.text) {
                (0, _axios2.default)({
                    method: 'post',
                    url: '/api/v1/comments/' + _this.props._id,
                    data: data
                }).then(function (comment) {
                    _this.resetForm();
                    _this.setState({
                        toggleReplyBox: false
                    });
                    console.log('Replied.');
                });
            }
        };

        _this.resetForm = function () {
            _this.setState({
                'text': ''
            });
        };

        _this.state = {
            text: '',
            toggleReplyBox: false,
            viewReplies: true
        };

        return _this;
    }

    _createClass(Reply, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                text = _props.text,
                comment_date = _props.comment_date,
                commentor = _props.commentor;

            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'article',
                    { className: 'uk-comment uk-comment-secondary uk-visible-toggle' },
                    _react2.default.createElement(
                        'header',
                        { className: 'uk-comment-header uk-position-relative' },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-grid-medium uk-flex-middle', 'data-uk-grid': true },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-width-auto' },
                                _react2.default.createElement('img', { className: 'uk-border-circle', src: 'http://lorempixel.com/80/80', width: '80', height: '80', alt: '' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-width-expand' },
                                _react2.default.createElement(
                                    'h4',
                                    { className: 'uk-comment-title uk-margin-remove' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'uk-link-reset', href: '#' },
                                        commentor.first_name + ' ' + commentor.last_name
                                    )
                                ),
                                _react2.default.createElement(
                                    'p',
                                    { className: 'uk-comment-meta uk-margin-remove-top' },
                                    _react2.default.createElement(
                                        'a',
                                        { className: 'uk-link-reset', href: '#' },
                                        (0, _moment2.default)(comment_date).fromNow()
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-position-top-right uk-position-small uk-hidden-hover' },
                            _react2.default.createElement(
                                'a',
                                { className: 'uk-link-muted', href: '#' },
                                'Reply'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-comment-body' },
                        _react2.default.createElement(
                            'p',
                            null,
                            text
                        )
                    )
                )
            );
        }
    }]);

    return Reply;
}(_react.Component);

exports.default = Reply;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DonationCard = __webpack_require__(48);

var _DonationCard2 = _interopRequireDefault(_DonationCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DonationContainer = function (_Component) {
    _inherits(DonationContainer, _Component);

    function DonationContainer(props) {
        _classCallCheck(this, DonationContainer);

        var _this = _possibleConstructorReturn(this, (DonationContainer.__proto__ || Object.getPrototypeOf(DonationContainer)).call(this, props));

        _this.state = {
            donations: []
        };
        return _this;
    }

    _createClass(DonationContainer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var donations = this.props.donations;

            return _react2.default.createElement(
                'div',
                { className: 'uk-margin' },
                donations && donations.map(function (donation) {
                    return _react2.default.createElement(_DonationCard2.default, _extends({ key: donation._id }, donation));
                })
            );
        }
    }]);

    return DonationContainer;
}(_react.Component);

exports.default = DonationContainer;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DonationCard = function (_Component) {
    _inherits(DonationCard, _Component);

    function DonationCard() {
        _classCallCheck(this, DonationCard);

        return _possibleConstructorReturn(this, (DonationCard.__proto__ || Object.getPrototypeOf(DonationCard)).apply(this, arguments));
    }

    _createClass(DonationCard, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                amount = _props.amount,
                donor = _props.donor;

            return _react2.default.createElement(
                "div",
                { className: "uk-card uk-card-default" },
                _react2.default.createElement(
                    "p",
                    null,
                    "Amount : " + amount
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    "By : " + donor.first_name + " " + donor.last_name
                )
            );
        }
    }]);

    return DonationCard;
}(_react.Component);

exports.default = DonationCard;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(3);

var _constants = __webpack_require__(18);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quill = void 0;

var AddFundraiserPage = function (_Component) {
    _inherits(AddFundraiserPage, _Component);

    function AddFundraiserPage(props) {
        _classCallCheck(this, AddFundraiserPage);

        var _this = _possibleConstructorReturn(this, (AddFundraiserPage.__proto__ || Object.getPrototypeOf(AddFundraiserPage)).call(this, props));

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var story = quill.getContents();
            _this.setState({
                story: JSON.stringify(story)
            }, function () {
                var data = this.state;
                (0, _axios2.default)({
                    method: 'post',
                    url: '/api/fundraisers',
                    data: data
                }).then(function (fundraisers) {
                    console.log('Fundraiser Added Successfully');
                });
            });
        };

        _this.handleInputChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.state = {
            fundraiser_id: '',
            title: '',
            description: '',
            story: ''
        };
        return _this;
    }

    _createClass(AddFundraiserPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
                var toolbarOptions = [['bold', 'italic', 'underline', 'strike'], // toggled buttons
                ['blockquote', 'code-block'], [{ 'header': 1 }, { 'header': 2 }], [{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'script': 'sub' }, { 'script': 'super' }], [{ 'indent': '-1' }, { 'indent': '+1' }], [{ 'direction': 'rtl' }], [{ 'size': ['small', false, 'large', 'huge'] }], [{ 'header': [1, 2, 3, 4, 5, 6, false] }], [{ 'color': [] }, { 'background': [] }], [{ 'font': [] }], [{ 'align': [] }], ['link', 'image', 'video'], ['clean']];

                quill = new Quill('#story', {
                    modules: {
                        toolbar: toolbarOptions
                    },
                    placeholder: 'Write your story...',
                    theme: 'snow'
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'fieldset',
                            { className: 'uk-fieldset' },
                            _react2.default.createElement(
                                'legend',
                                { className: 'uk-legend' },
                                'Legend'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement('input', { id: 'fundraiser_id', name: 'fundraiser_id', className: 'uk-input', type: 'text', placeholder: 'Fundraiser Unique Id', onChange: this.handleInputChange })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement('input', { id: 'title', name: 'title', className: 'uk-input', type: 'text', placeholder: 'Title', onChange: this.handleInputChange })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement('textarea', { id: 'description', name: 'description', className: 'uk-textarea', rows: '5', placeholder: 'Description', onChange: this.handleInputChange })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement('div', { id: 'story', name: 'story', className: 'uk-height-large' })
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'uk-button uk-button-primary' },
                                'Submit'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddFundraiserPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps)(AddFundraiserPage)
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _BrowsePetitionPage = __webpack_require__(51);

var _BrowsePetitionPage2 = _interopRequireDefault(_BrowsePetitionPage);

var _PetitionDetailPage = __webpack_require__(54);

var _PetitionDetailPage2 = _interopRequireDefault(_PetitionDetailPage);

var _AddPetitionPage = __webpack_require__(55);

var _AddPetitionPage2 = _interopRequireDefault(_AddPetitionPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _AddPetitionPage2.default, {
    path: '/start-Petition'
}), _extends({}, _PetitionDetailPage2.default, {
    path: '/petitions/:petitionId'
}), _extends({}, _BrowsePetitionPage2.default, {
    path: '/petitions'
})];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(1);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _PetitionCard = __webpack_require__(52);

var _PetitionCard2 = _interopRequireDefault(_PetitionCard);

var _Spinner = __webpack_require__(16);

var _Spinner2 = _interopRequireDefault(_Spinner);

var _constants = __webpack_require__(18);

var _actions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BrowsePetitionPage = function (_Component) {
    _inherits(BrowsePetitionPage, _Component);

    function BrowsePetitionPage() {
        _classCallCheck(this, BrowsePetitionPage);

        return _possibleConstructorReturn(this, (BrowsePetitionPage.__proto__ || Object.getPrototypeOf(BrowsePetitionPage)).apply(this, arguments));
    }

    _createClass(BrowsePetitionPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchPetitions();
        }
    }, {
        key: 'render',
        value: function render() {
            var petitions = this.props.petitions;

            return _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-grid', 'data-uk-grid': true },
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-width-2-3@m' },
                            _react2.default.createElement(
                                'ul',
                                { className: 'uk-subnav uk-subnav-pill', 'data-uk-switcher': 'animation: uk-animation-fade' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Featured'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Popular'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'Recent'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        'a',
                                        { href: '#' },
                                        'My Petitions'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'uk-switcher uk-margin' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    petitions.isFetching ? _react2.default.createElement(
                                        'div',
                                        { className: 'uk-flex uk-flex-center uk-flex-middle uk-height-medium' },
                                        _react2.default.createElement(_Spinner2.default, null)
                                    ) : _react2.default.createElement(
                                        'div',
                                        null,
                                        petitions.data && petitions.data.length > 0 ? petitions.data.map(function (petition) {
                                            return _react2.default.createElement(
                                                'div',
                                                { key: petition._id },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                )
                                            );
                                        }) : _react2.default.createElement(
                                            'h3',
                                            { className: 'uk-text-center' },
                                            'No Petitions Found'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    petitions.isFetching ? _react2.default.createElement(
                                        'div',
                                        { className: 'uk-flex uk-flex-center uk-flex-middle uk-height-medium' },
                                        _react2.default.createElement(_Spinner2.default, null)
                                    ) : _react2.default.createElement(
                                        'div',
                                        null,
                                        petitions.data && petitions.data.length > 0 ? petitions.data.map(function (petition) {
                                            return _react2.default.createElement(
                                                'div',
                                                { key: petition._id },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                )
                                            );
                                        }) : _react2.default.createElement(
                                            'h3',
                                            { className: 'uk-text-center' },
                                            'No Petitions Found'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    petitions.isFetching ? _react2.default.createElement(
                                        'div',
                                        { className: 'uk-flex uk-flex-center uk-flex-middle uk-height-medium' },
                                        _react2.default.createElement(_Spinner2.default, null)
                                    ) : _react2.default.createElement(
                                        'div',
                                        null,
                                        petitions.data && petitions.data.length > 0 ? petitions.data.map(function (petition) {
                                            return _react2.default.createElement(
                                                'div',
                                                { key: petition._id },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                )
                                            );
                                        }) : _react2.default.createElement(
                                            'h3',
                                            { className: 'uk-text-center' },
                                            'No Petitions Found'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    petitions.isFetching ? _react2.default.createElement(
                                        'div',
                                        { className: 'uk-flex uk-flex-center uk-flex-middle uk-height-medium' },
                                        _react2.default.createElement(_Spinner2.default, null)
                                    ) : _react2.default.createElement(
                                        'div',
                                        null,
                                        petitions.data && petitions.data.length > 0 ? petitions.data.map(function (petition) {
                                            return _react2.default.createElement(
                                                'div',
                                                { key: petition._id },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                ),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'uk-flex-middle', 'data-uk-grid': true },
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-2-3@m' },
                                                        _react2.default.createElement(
                                                            'p',
                                                            null,
                                                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: 'uk-width-1-3@m uk-flex-first' },
                                                        _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                                    )
                                                )
                                            );
                                        }) : _react2.default.createElement(
                                            'h3',
                                            { className: 'uk-text-center' },
                                            'No Petitions Found'
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-width-1-3@m' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/start-petition' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'uk-button uk-button-primary uk-button-large uk-width-1-1' },
                                    'Start a Petition'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin-small-top' },
                                petitions.data && petitions.data.length > 0 ? petitions.data.map(function (petition) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: petition._id },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-flex-middle', 'data-uk-grid': true },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-2-3@m' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-1-3@m uk-flex-first' },
                                                _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-flex-middle', 'data-uk-grid': true },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-2-3@m' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-1-3@m uk-flex-first' },
                                                _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-flex-middle', 'data-uk-grid': true },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-2-3@m' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-1-3@m uk-flex-first' },
                                                _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-flex-middle', 'data-uk-grid': true },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-2-3@m' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-1-3@m uk-flex-first' },
                                                _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-flex-middle', 'data-uk-grid': true },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-2-3@m' },
                                                _react2.default.createElement(
                                                    'p',
                                                    null,
                                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'uk-width-1-3@m uk-flex-first' },
                                                _react2.default.createElement('img', { src: 'https://getuikit.com/docs/images/light.jpg', alt: 'Image' })
                                            )
                                        )
                                    );
                                }) : _react2.default.createElement(
                                    'h3',
                                    { className: 'uk-text-center' },
                                    'No Petitions Found'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return BrowsePetitionPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        petitions: state.petitions
    };
};

var loadData = function loadData(store) {
    return store.dispatch((0, _actions.fetchPetitions)());
};

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchPetitions: _actions.fetchPetitions })(BrowsePetitionPage)
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _img = __webpack_require__(7);

var _img2 = _interopRequireDefault(_img);

__webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PetitionCard = function PetitionCard(_ref) {
    var match = _ref.match,
        id = _ref.id,
        title = _ref.title,
        description = _ref.description,
        author = _ref.author;
    return _react2.default.createElement(
        'div',
        { className: 'petition-card' },
        _react2.default.createElement(
            'div',
            { className: 'bookmark' },
            _react2.default.createElement('i', { className: false ? "fa fa-heart" : "fa fa-heart-o" })
        ),
        _react2.default.createElement(
            _reactRouterDom.Link,
            { to: match.path + '/' + id },
            _react2.default.createElement(
                'div',
                { className: 'petition-image' },
                _react2.default.createElement('img', { src: _img2.default, alt: 'Petition Image' })
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'petition-info' },
            _react2.default.createElement(
                'div',
                { className: 'petition-title' },
                title
            ),
            _react2.default.createElement(
                'div',
                { className: 'petitioner' },
                _react2.default.createElement('img', { src: 'https://api.adorable.io/avatars/200/excite.png', width: '30', height: '30', alt: 'Border circle' }),
                _react2.default.createElement(
                    'span',
                    null,
                    ' by'
                ),
                _react2.default.createElement(
                    'span',
                    null,
                    author.first_name + '  ' + author.last_name
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'petition-description' },
                description
            )
        ),
        _react2.default.createElement('hr', { className: 'uk-divider' }),
        _react2.default.createElement(
            'div',
            { className: 'petition-status' },
            _react2.default.createElement(
                'div',
                { className: 'supporter' },
                _react2.default.createElement('i', { className: 'fa fa-heart' }),
                _react2.default.createElement(
                    'span',
                    null,
                    '145'
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    'supporters'
                )
            )
        )
    );
};

exports.default = (0, _reactRouterDom.withRouter)(PetitionCard);

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PetitionDetailPage = function (_Component) {
    _inherits(PetitionDetailPage, _Component);

    function PetitionDetailPage(props) {
        _classCallCheck(this, PetitionDetailPage);

        var _this = _possibleConstructorReturn(this, (PetitionDetailPage.__proto__ || Object.getPrototypeOf(PetitionDetailPage)).call(this, props));

        _this.state = {
            petition: {}
        };
        return _this;
    }

    _createClass(PetitionDetailPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
                var quill = new Quill('#story', {
                    theme: 'bubble'
                });
                quill.enable(false);

                (0, _axios2.default)({
                    method: 'get',
                    url: '/api/petitions/' + this.props.match.params.petitionId
                }).then(function (petition) {
                    _this2.setState({
                        petition: petition.data
                    }, function () {
                        quill.setContents(JSON.parse(_this2.state.petition.story));
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var petition = this.state.petition;

            return _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        petition.title
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        petition.description
                    ),
                    _react2.default.createElement('div', { id: 'story' })
                )
            );
        }
    }]);

    return PetitionDetailPage;
}(_react.Component);

exports.default = {
    component: PetitionDetailPage
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(5);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(3);

__webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var quill = void 0;

var AddPetitionPage = function (_Component) {
    _inherits(AddPetitionPage, _Component);

    function AddPetitionPage(props) {
        _classCallCheck(this, AddPetitionPage);

        var _this = _possibleConstructorReturn(this, (AddPetitionPage.__proto__ || Object.getPrototypeOf(AddPetitionPage)).call(this, props));

        _this.handleSubmit = function (e) {
            e.preventDefault();
            var story = quill.getContents();
            _this.setState({
                story: JSON.stringify(story)
            }, function () {
                var data = this.state;
                (0, _axios2.default)({
                    method: 'post',
                    url: '/api/petitions',
                    data: data
                }).then(function (petitions) {
                    console.log('Petition Added Successfully');
                });
            });
        };

        _this.handleInputChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.state = {
            title: '',
            description: '',
            story: ''
        };
        return _this;
    }

    _createClass(AddPetitionPage, [{
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    'Start a Petition | SharingPanda.org'
                )
            );
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined) {
                var toolbarOptions = [['bold', 'italic', 'underline', 'strike'], // toggled buttons
                [{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'indent': '-1' }, { 'indent': '+1' }], [{ 'size': ['small', false, 'large', 'huge'] }], [{ 'header': [1, 2, 3, 4, 5, 6, false] }], [{ 'color': [] }, { 'background': [] }], [{ 'font': [] }], [{ 'align': [] }], ['clean']];

                quill = new Quill('#story', {
                    modules: {
                        toolbar: toolbarOptions
                    },
                    placeholder: 'Write your story...',
                    theme: 'snow'
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { id: 'add-petition' },
                this.head(),
                _react2.default.createElement(
                    'section',
                    { className: 'uk-section uk-padding-medium' },
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-container uk-container-small' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'uk-subnav uk-subnav-pill', 'data-uk-switcher': 'animation: uk-animation-fade' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '1'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '2'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '3'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    '4'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'uk-switcher uk-margin' },
                            _react2.default.createElement(
                                'li',
                                { id: 'step-1' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form' },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Write your petition title'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'This is the first thing people will see about your petition. Get their attention with a short title that focusses on the change you\u2019d like them to support.'
                                    ),
                                    _react2.default.createElement('textarea', { className: 'uk-textarea', name: '', id: '', placeholder: 'What do you want to achieve' }),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'uk-button uk-button-primary', 'data-uk-switcher-item': 'next' },
                                        'Continue'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tips' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Keep it short and to the point'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Example: "Buy organic, free-range eggs for your restaurants"',
                                        _react2.default.createElement('br', null),
                                        'Not: "Stop the inhumane treatment of chickens in battery farms that are force-fed..."'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Focus on the solution'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Example: "Raise the minimum wage in to 300\u20B9 a day"',
                                        _react2.default.createElement('br', null),
                                        'Not: "Stop rising income inequality"'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Communicate urgency'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Example: "Approve life-saving medication for my daughter\'s insurance before it\u2019s too late"'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { id: 'step-2' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form' },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Choose a decision maker'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'This is the person, organisation, or group that can make a decision about your petition. Change.org will send them updates on your petition and encourage a response.'
                                    ),
                                    _react2.default.createElement('textarea', { className: 'uk-textarea', name: '', id: '', placeholder: 'What do you want to achieve' }),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'uk-button uk-button-primary', 'data-uk-switcher-item': 'next' },
                                        'Continue'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tips' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Choose someone who can give you what you want'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'You might need to do some research to find the right person who can make or influence the decision.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Don\'t go straight to the top'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'You might see faster results if you choose a more junior person who is petitioned less often than more recognisable figures.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Choose someone you can work with'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Your petition is most likely to win by reaching an agreement with your decision maker.'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { id: 'step-3' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form' },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Explain the problem you want to solve'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'People are more likely to support your petition if it\u2019s clear why you care. Explain how this change will impact you, your family, or your community.'
                                    ),
                                    _react2.default.createElement('div', { id: 'story', name: 'story', className: 'uk-height-medium uk-margin-small-bottom' }),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'uk-button uk-button-primary', 'data-uk-switcher-item': 'next' },
                                        'Save and Continue'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tips' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Describe the people involved and the problem they are facing'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Readers are most likely to take action when they understand who is affected.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Describe the solution'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Explain what needs to happen and who can make the change. Make it clear what happens if you win or lose.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Make it personal'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Respect others'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                { id: 'step-4' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form' },
                                    _react2.default.createElement(
                                        'h1',
                                        null,
                                        'Add a photo or video'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        null,
                                        'Petitions with a photo or video receive six times more signatures than those without. Include one that captures the emotion of your story.'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'js-upload uk-placeholder uk-text-center' },
                                        _react2.default.createElement('span', { 'data-uk-icon': 'icon: cloud-upload' }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'uk-text-middle' },
                                            'Attach binaries by dropping them here or '
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { 'data-uk-form-custom': true },
                                            _react2.default.createElement('input', { type: 'file', multiple: true }),
                                            _react2.default.createElement(
                                                'span',
                                                { className: 'uk-link' },
                                                'selecting one'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement('progress', { id: 'js-progressbar', className: 'uk-progress', value: '0', max: '100', hidden: true }),
                                    _react2.default.createElement(
                                        'button',
                                        { className: 'uk-button uk-button-primary' },
                                        'Save and Preview'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tips' },
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Choose a photo that captures the emotion of your petition'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Photos of people or animals work well.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Try to upload photos that are 1600 x 900 pixels or larger'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Large photos look good on all screen sizes.'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip' },
                                        'Keep it friendly for all audiences'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { className: 'tip-example' },
                                        'Make sure your photo doesn\'t include graphic violence or sexual content.'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddPetitionPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps)(AddPetitionPage)
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _LoginPage = __webpack_require__(58);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _SignUpPage = __webpack_require__(59);

var _SignUpPage2 = _interopRequireDefault(_SignUpPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _LoginPage2.default, {
    path: '/login',
    exact: true
}), _extends({}, _SignUpPage2.default, {
    path: '/signup'
})];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _LoginForm = __webpack_require__(10);

var _LoginForm2 = _interopRequireDefault(_LoginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Component) {
    _inherits(LoginPage, _Component);

    function LoginPage() {
        _classCallCheck(this, LoginPage);

        return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).apply(this, arguments));
    }

    _createClass(LoginPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-grid-large uk-grid-divider uk-grid-match uk-child-width-1-2@s uk-flex-center uk-text-center', 'data-uk-grid': true },
                        _react2.default.createElement(_LoginForm2.default, null)
                    )
                )
            );
        }
    }]);

    return LoginPage;
}(_react.Component);

exports.default = {
    component: LoginPage
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _SignUpForm = __webpack_require__(14);

var _SignUpForm2 = _interopRequireDefault(_SignUpForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SignUpPage = function (_Component) {
    _inherits(SignUpPage, _Component);

    function SignUpPage() {
        _classCallCheck(this, SignUpPage);

        return _possibleConstructorReturn(this, (SignUpPage.__proto__ || Object.getPrototypeOf(SignUpPage)).apply(this, arguments));
    }

    _createClass(SignUpPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-grid-large uk-grid-divider uk-grid-match uk-child-width-1-2@s uk-flex-center uk-text-center', 'data-uk-grid': true },
                        _react2.default.createElement(_SignUpForm2.default, null)
                    )
                )
            );
        }
    }]);

    return SignUpPage;
}(_react.Component);

exports.default = {
    component: SignUpPage
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _DonationPage = __webpack_require__(61);

var _DonationPage2 = _interopRequireDefault(_DonationPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _DonationPage2.default, {
    path: '/donations'
})];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DonationPage = function (_Component) {
    _inherits(DonationPage, _Component);

    function DonationPage(props) {
        _classCallCheck(this, DonationPage);

        var _this = _possibleConstructorReturn(this, (DonationPage.__proto__ || Object.getPrototypeOf(DonationPage)).call(this, props));

        _this.handleInputChange = function (e) {
            _this.setState(_defineProperty({}, e.target.name, e.target.value));
        };

        _this.handleRazorPay = function (e) {
            e.preventDefault();

            var razorpay = new Razorpay({
                "key": "rzp_test_pEBJwqm1DVxFh1",
                "amount": _this.state.amount * 100,
                "name": "Sharing Panda",
                "description": _this.state.description,
                "image": "https://stripe.com/img/documentation/checkout/marketplace.png",
                "handler": _this.handleAfterRazorPayPayment,
                "prefill": {
                    "name": "Aayush Rajvanshi",
                    "email": "aayushrajvanshii@gmail.com",
                    "contact": "9997064005"
                },
                "notes": {},
                "theme": {
                    "color": "#F2D023"
                }
            });
            razorpay.open();

            window.addEventListener('popstate', function () {
                razorpay.close();
            });
        };

        _this.handleAfterRazorPayPayment = function (response) {
            (0, _axios2.default)({
                method: 'post',
                url: 'http://localhost:3000/api/v1/payments',
                data: {
                    payment_id: response.razorpay_payment_id
                }
            }).then(function (payment) {
                if (payment.data.status === "authorized") {
                    var data = {
                        amount: payment.data.amount / 100,
                        user_id: '5a0323a019b7ef276cda8b5d', //TODO
                        fundraiser_id: '5a03245e19b7ef276cda8b5f' //TODO
                    };
                    (0, _axios2.default)({
                        method: 'post',
                        data: data,
                        url: 'http://localhost:3000/api/v1/donations'
                    }).then(function (donation) {
                        console.log('Donated succesfully');
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            }).catch(function (err) {
                console.log('Error', err);
            });
        };

        _this.handleStripePay = function (e) {
            e.preventDefault();

            var stripe = StripeCheckout.configure({
                key: 'pk_test_pRhXSzUXgPy7K6If90yUe53t',
                image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
                locale: 'auto',
                name: 'Aayush Rajvanshi',
                description: _this.state.description,
                currency: _this.state.currency,
                panelLabel: 'Pay {{amount}}',
                amount: _this.state.amount * 100,
                token: _this.handleAfterStripePayment
            });

            stripe.open();

            window.addEventListener('popstate', function () {
                stripe.close();
            });
        };

        _this.handleAfterStripePayment = function (token) {
            (0, _axios2.default)({
                method: 'post',
                url: 'http://localhost:3000/api/v1/charge',
                data: {
                    stripeToken: token.id,
                    stripeEmail: token.email,
                    amount: _this.state.amount * 100,
                    description: _this.state.description,
                    currency: _this.state.currency
                }
            }).then(function (payment) {
                if (payment.data.status === "succeeded") {
                    var data = {
                        amount: payment.data.amount / 100,
                        user_id: '5a0323a019b7ef276cda8b5d', //TODO
                        fundraiser_id: '5a03245e19b7ef276cda8b5f' //TODO
                    };
                    (0, _axios2.default)({
                        method: 'post',
                        data: data,
                        url: 'http://localhost:3000/api/v1/donations'
                    }).then(function (donation) {
                        console.log('Donated succesfully');
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            }).catch(function (err) {
                console.log('Error', err);
            });
        };

        _this.state = {
            amount: 3000,
            description: 'Fundraiser Payment',
            currency: 'INR'
        };
        return _this;
    }

    _createClass(DonationPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small' },
                    _react2.default.createElement(
                        'form',
                        null,
                        _react2.default.createElement(
                            'fieldset',
                            { className: 'uk-fieldset' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'select',
                                    { name: 'currency', id: 'currency', className: 'uk-select', value: this.state.currency, onChange: this.handleInputChange },
                                    _react2.default.createElement(
                                        'option',
                                        { value: 'INR' },
                                        'INR'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: 'AUD' },
                                        'AUD'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: 'USD' },
                                        'USD'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: 'EUR' },
                                        'EUR'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement('input', { id: 'amount', name: 'amount', className: 'uk-input', type: 'text', placeholder: 'Amount', value: this.state.amount, onChange: this.handleInputChange })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'uk-button uk-button-primary', onClick: this.handleRazorPay },
                                    'Pay Now By Razor Pay'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'uk-button uk-button-primary', onClick: this.handleStripePay },
                                    'Pay Now By Stripe'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'form',
                        { action: '/your-server-side-code', method: 'POST' },
                        _react2.default.createElement('script', {
                            src: 'https://checkout.stripe.com/checkout.js', className: 'stripe-button',
                            'data-key': 'pk_test_pRhXSzUXgPy7K6If90yUe53t',
                            'data-amount': '999',
                            'data-name': 'Aayush Rajvanshi',
                            'data-description': 'Widget',
                            'data-image': 'https://stripe.com/img/documentation/checkout/marketplace.png',
                            'data-locale': 'auto' })
                    )
                )
            );
        }
    }]);

    return DonationPage;
}(_react.Component);

exports.default = {
    component: DonationPage
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _TeamPage = __webpack_require__(63);

var _TeamPage2 = _interopRequireDefault(_TeamPage);

var _FaqsPage = __webpack_require__(65);

var _FaqsPage2 = _interopRequireDefault(_FaqsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _TeamPage2.default, {
    path: '/support/team-sharing-panda'
}), _extends({}, _FaqsPage2.default, {
    path: '/support/faqs'
})];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _TeamMember = __webpack_require__(64);

var _TeamMember2 = _interopRequireDefault(_TeamMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TeamPage = function TeamPage() {
    return _react2.default.createElement(
        'div',
        { className: 'uk-section' },
        _react2.default.createElement(
            'div',
            { className: 'uk-container uk-text-center' },
            _react2.default.createElement(
                'div',
                { className: 'uk-heading-primary' },
                'Our Team'
            ),
            _react2.default.createElement(
                'p',
                null,
                'Aliquip duis dolor pariatur amet sunt velit officia ipsum consectetur reprehenderit reprehenderit. Eiusmod proident nulla est nulla velit dolor et eu qui laborum ipsum dolore exercitation ea. Aute tempor quis cupidatat pariatur. Tempor sunt exercitation mollit aute incididunt ea fugiat ullamco minim Lorem. Labore ut duis minim ad enim minim qui anim. Cillum nisi est culpa dolore elit sit amet esse. Minim veniam ut in non aliqua.'
            ),
            _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-grid-small uk-child-width-1-3@s uk-child-width-1-4@m uk-flex-center uk-text-center', 'data-uk-grid': true },
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TeamMember2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TeamMember2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TeamMember2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TeamMember2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TeamMember2.default, null)
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(_TeamMember2.default, null)
                    )
                )
            )
        )
    );
};

exports.default = {
    component: TeamPage
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TeamMember = function (_Component) {
    _inherits(TeamMember, _Component);

    function TeamMember() {
        _classCallCheck(this, TeamMember);

        return _possibleConstructorReturn(this, (TeamMember.__proto__ || Object.getPrototypeOf(TeamMember)).apply(this, arguments));
    }

    _createClass(TeamMember, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "uk-text-center" },
                _react2.default.createElement("img", { className: "uk-border-circle", src: "https://api.adorable.io/avatars/200/excite.png", width: "200", height: "200", alt: "Border circle" }),
                _react2.default.createElement(
                    "h4",
                    { className: "uk-text-bold uk-margin-remove-bottom" },
                    "Bernard Scott"
                ),
                _react2.default.createElement(
                    "p",
                    { className: "uk-text-primary uk-margin-remove-top" },
                    "Co-Founder"
                ),
                _react2.default.createElement("a", { className: "uk-icon-button uk-margin-small-right", "data-uk-icon": "icon: facebook" }),
                _react2.default.createElement("a", { className: "uk-icon-button  uk-margin-small-right", "data-uk-icon": "icon: twitter" }),
                _react2.default.createElement("a", { className: "uk-icon-button", "data-uk-icon": "icon: google-plus" })
            );
        }
    }]);

    return TeamMember;
}(_react.Component);

exports.default = TeamMember;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FaqsPage = function (_Component) {
    _inherits(FaqsPage, _Component);

    function FaqsPage() {
        _classCallCheck(this, FaqsPage);

        return _possibleConstructorReturn(this, (FaqsPage.__proto__ || Object.getPrototypeOf(FaqsPage)).apply(this, arguments));
    }

    _createClass(FaqsPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'FAQS'
            );
        }
    }]);

    return FaqsPage;
}(_react.Component);

exports.default = {
    component: FaqsPage
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ViewProfilePage = __webpack_require__(67);

var _ViewProfilePage2 = _interopRequireDefault(_ViewProfilePage);

var _EditProfilePage = __webpack_require__(68);

var _EditProfilePage2 = _interopRequireDefault(_EditProfilePage);

var _UserSettingsPage = __webpack_require__(69);

var _UserSettingsPage2 = _interopRequireDefault(_UserSettingsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _EditProfilePage2.default, {
    path: '/user/:id/edit'
}), _extends({}, _UserSettingsPage2.default, {
    path: '/user/:id/settings'
}), _extends({}, _ViewProfilePage2.default, {
    path: '/user/:id'
})];

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ViewProfilePage = function (_Component) {
    _inherits(ViewProfilePage, _Component);

    function ViewProfilePage() {
        _classCallCheck(this, ViewProfilePage);

        return _possibleConstructorReturn(this, (ViewProfilePage.__proto__ || Object.getPrototypeOf(ViewProfilePage)).apply(this, arguments));
    }

    _createClass(ViewProfilePage, [{
        key: 'render',
        value: function render() {
            var auth = this.props.auth;

            return _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small', style: { 'maxWidth': '650px' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-text-center' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            auth.google.name
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'India'
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/user/' + auth._id + '/edit' },
                            _react2.default.createElement(
                                'button',
                                { className: 'uk-button uk-button-default' },
                                'Edit Profile'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-medium-top' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'uk-subnav uk-subnav-pill uk-flex-center', 'data-uk-switcher': 'animation: uk-animation-fade' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Signed (3)'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: '#' },
                                    'Started (5)'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'ul',
                            { className: 'uk-switcher uk-margin' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-grid-small uk-child-width-1-1 uk-flex-center uk-text-center', 'data-uk-grid': true },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-card uk-card-default uk-card-body' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'uk-card-title' },
                                                'Default'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lorem ipsum ',
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    'dolor'
                                                ),
                                                ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-card uk-card-default uk-card-body' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'uk-card-title' },
                                                'Default'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lorem ipsum ',
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    'dolor'
                                                ),
                                                ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-card uk-card-default uk-card-body' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'uk-card-title' },
                                                'Default'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lorem ipsum ',
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    'dolor'
                                                ),
                                                ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                            )
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-grid-small uk-child-width-1-1 uk-flex-center uk-text-center', 'data-uk-grid': true },
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-card uk-card-default uk-card-body' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'uk-card-title' },
                                                'Default'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lorem ipsum ',
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    'dolor'
                                                ),
                                                ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-card uk-card-default uk-card-body' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'uk-card-title' },
                                                'Default'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lorem ipsum ',
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    'dolor'
                                                ),
                                                ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-card uk-card-default uk-card-body' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'uk-card-title' },
                                                'Default'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lorem ipsum ',
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    'dolor'
                                                ),
                                                ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-card uk-card-default uk-card-body' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'uk-card-title' },
                                                'Default'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lorem ipsum ',
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    'dolor'
                                                ),
                                                ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'uk-card uk-card-default uk-card-body' },
                                            _react2.default.createElement(
                                                'h3',
                                                { className: 'uk-card-title' },
                                                'Default'
                                            ),
                                            _react2.default.createElement(
                                                'p',
                                                null,
                                                'Lorem ipsum ',
                                                _react2.default.createElement(
                                                    'a',
                                                    { href: '#' },
                                                    'dolor'
                                                ),
                                                ' sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ViewProfilePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps)(ViewProfilePage)
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditProfilePage = function (_Component) {
    _inherits(EditProfilePage, _Component);

    function EditProfilePage() {
        _classCallCheck(this, EditProfilePage);

        return _possibleConstructorReturn(this, (EditProfilePage.__proto__ || Object.getPrototypeOf(EditProfilePage)).apply(this, arguments));
    }

    _createClass(EditProfilePage, [{
        key: 'render',
        value: function render() {
            var auth = this.props.auth;

            return _react2.default.createElement(
                'div',
                { className: 'uk-section' },
                _react2.default.createElement(
                    'div',
                    { className: 'uk-container uk-container-small', style: { 'maxWidth': '650px' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-text-center' },
                        _react2.default.createElement(
                            'h2',
                            null,
                            'Edit Profile'
                        ),
                        _react2.default.createElement('img', { className: 'uk-border-circle uk-margin-small-bottom', src: 'https://getuikit.com/docs/images/avatar.jpg', width: '200', height: '200', alt: 'Profile Photo' }),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'button',
                                { className: 'uk-button uk-button-default' },
                                'Upload'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'uk-margin-medium-top' },
                        _react2.default.createElement(
                            'form',
                            { className: 'uk-form-stacked' },
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'uk-form-label', htmlFor: 'firstname' },
                                    'First Name'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2.default.createElement('input', { className: 'uk-input', id: 'firstname', name: 'firstname', type: 'text', placeholder: 'First Name' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'uk-form-label', htmlFor: 'lastname' },
                                    'Last Name'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2.default.createElement('input', { className: 'uk-input', id: 'lastname', type: 'text', placeholder: 'Last Name' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'uk-form-label', htmlFor: 'about' },
                                    'About Me'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2.default.createElement('input', { className: 'uk-textarea', id: 'about', name: 'about', type: 'text', placeholder: 'Write a short description about yourself' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'uk-form-label', htmlFor: 'city' },
                                    'City'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2.default.createElement('input', { className: 'uk-input', id: 'city', name: 'city', type: 'text', placeholder: 'City' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'uk-form-label', htmlFor: 'country' },
                                    'Country'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2.default.createElement(
                                        'select',
                                        { className: 'uk-select', id: 'country', name: 'country' },
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'India'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'Australia'
                                        ),
                                        _react2.default.createElement(
                                            'option',
                                            null,
                                            'United States'
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'uk-form-label', htmlFor: 'twitter' },
                                    'Twitter'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2.default.createElement('input', { className: 'uk-input', id: 'twitter', name: 'twitter', type: 'text', placeholder: '@username' })
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'uk-margin' },
                                _react2.default.createElement(
                                    'label',
                                    { className: 'uk-form-label', htmlFor: 'profile' },
                                    'Profile Shortcut'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'uk-form-controls' },
                                    _react2.default.createElement('input', { className: 'uk-input', id: 'profile', name: 'profile', type: 'text', placeholder: 'Create a shortcut link to your profile' })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'uk-margin' },
                            _react2.default.createElement(
                                'button',
                                { className: 'uk-button uk-button-primary uk-margin-small-right' },
                                'Save'
                            ),
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/user/' + auth._id, target: '_self' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'uk-button uk-button-default' },
                                    'Cancel'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditProfilePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps)(EditProfilePage)
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserSettingsPage = function (_Component) {
    _inherits(UserSettingsPage, _Component);

    function UserSettingsPage() {
        _classCallCheck(this, UserSettingsPage);

        return _possibleConstructorReturn(this, (UserSettingsPage.__proto__ || Object.getPrototypeOf(UserSettingsPage)).apply(this, arguments));
    }

    _createClass(UserSettingsPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'UserSettingsPage'
            );
        }
    }]);

    return UserSettingsPage;
}(_react.Component);

exports.default = {
    component: UserSettingsPage
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(71);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(3);

var _reactRouterConfig = __webpack_require__(6);

var _serializeJavascript = __webpack_require__(72);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(5);

var _Routes = __webpack_require__(9);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <meta http-equiv="X-UA-Compatible" content="ie=edge">\n        <link rel="stylesheet" href="/styles/app.css">\n        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">\n        <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tour/0.11.0/css/bootstrap-tour-standalone.min.css" rel="stylesheet">\n        <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet">\n        <script src="https://checkout.razorpay.com/v1/checkout.js"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.34/js/uikit.min.js"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.34/js/uikit-icons.min.js"></script>\n        <script src="https://checkout.stripe.com/checkout.js"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.4/quill.min.js"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tour/0.11.0/js/bootstrap-tour-standalone.min.js"></script>\n        <script type="text/javascript">\n          if (window.location.hash && window.location.hash == \'#_=_\') {\n              if (window.history && history.pushState) {\n                  window.history.pushState("", document.title, window.location.pathname);\n              } else {\n                  var scroll = {\n                      top: document.body.scrollTop,\n                      left: document.body.scrollLeft\n                  };\n                  window.location.hash = \'\';\n                  document.body.scrollTop = scroll.top;\n                  document.body.scrollLeft = scroll.left;\n              }\n          }\n      </script>\n        <base href="/" target="_blank">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="/bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(19);

var _reduxThunk = __webpack_require__(74);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(2);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(75);

var _reducers2 = _interopRequireDefault(_reducers);

var _constants = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: _constants.API_BASE_URL,
        headers: { cookie: req.get('cookie') || '' }
    });
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));
    return store;
};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(19);

var _fundraisersReducer = __webpack_require__(76);

var _fundraisersReducer2 = _interopRequireDefault(_fundraisersReducer);

var _petitionReducer = __webpack_require__(77);

var _petitionReducer2 = _interopRequireDefault(_petitionReducer);

var _authReducer = __webpack_require__(78);

var _authReducer2 = _interopRequireDefault(_authReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const fs = require('fs');

// fs.readdirSync(__dirname + '/api/').forEach((file) => {
//     require(`./api/${file.substr(0, file.indexOf('.'))}`)(router);
// });

exports.default = (0, _redux.combineReducers)({
    fundraisers: _fundraisersReducer2.default,
    petitions: _petitionReducer2.default,
    auth: _authReducer2.default
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(4);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_FUNDRAISERS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = __webpack_require__(4);

var initialState = {
    data: [],
    isFetching: true
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_PETITIONS:
            return _extends({}, state, {
                data: action.payload.data.docs,
                isFetching: false
            });
        default:
            return state;
    }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

var _actions = __webpack_require__(4);

/***/ })
/******/ ]);