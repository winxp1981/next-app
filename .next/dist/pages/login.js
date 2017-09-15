'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserCookie = setUserCookie;
exports.clearUserCookie = clearUserCookie;
exports.logoutUser = logoutUser;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('next/dist/lib/router/index.js');

var _index2 = _interopRequireDefault(_index);

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactGoogleLogin = require('react-google-login');

var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/login.js?entry';
//import ReactDOM from 'react-dom';
//import './css/login.css';
//import history from './history'


// var backend_address = 'http://localhost:8000';
var backend_address = 'http://ec2-54-254-207-247.ap-southeast-1.compute.amazonaws.com:8000';

function setUserCookie(username, email, token, valid) {
  _jsCookie2.default.set('username', username);
  _jsCookie2.default.set('email', email);
  _jsCookie2.default.set('token', token);
  _jsCookie2.default.set('valid', valid);
  console.log('@@ setUserCookie (' + username + ', ' + email + ', ' + token + ', ' + valid + ')');
}

function clearUserCookie() {
  _jsCookie2.default.remove('username');
  _jsCookie2.default.remove('email');
  _jsCookie2.default.remove('token');
  _jsCookie2.default.remove('valid');
  console.log('@@ clearUserCookie ');
}

/*
class User {
    constructor(username, email, token, valid) {
        this.username = username;
        this.email = email;
        this.token = token;
        this.valid = valid;
        console.log('User instantiated(' + this.username + ', ' + this.email + ', ' + this.token + ')');
    }
}
*/

function logoutUser() {
  console.log("+logoutUser");

  clearUserCookie();

  var success = false;
  fetch(backend_address + '/rest-auth/logout/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(function checkStatus(response) {
    if (response.status === 200) {
      success = true;
    } else {
      success = false;
    }
    return response.json();
  }).then(function (data) {
    //完成
    if (success) {
      console.log('logout success');
      _index2.default.push('/');
      console.log((0, _stringify2.default)(data));
    } else {
      console.log((0, _stringify2.default)(data));
    }
  }).catch(function (error) {
    console.log('request failed: ', error);
  }).then(function (errorData) {
    //失敗
    console.log((0, _stringify2.default)(errorData));
  });

  console.log("-logoutUser submit");
}

function getUserProfile(key) {
  console.log("+getUserProfile (" + key + ")");

  var success = false;
  fetch(backend_address + '/rest-auth/user/', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Token ' + key
    }
  }).then(function checkStatus(response) {
    if (response.status === 200) {
      success = true;
    } else {
      success = false;
    }
    return response.json();
    /*
           if (response.status >= 200 && response.status < 300) {
               return response.json();
           } else {
               return response.json();
           }
    */
  }).then(function (data) {
    //完成
    if (success) {
      console.log('getUserProfile success, username: ' + data.username);
      setUserCookie(data.username, data.email, key, true);
      //Header.isUserLoggedIn = true;
      // redirect to home
      _index2.default.push('/');
      //history.push("/");  // go to root page
      //     var user_get = JSON.parse(sessionStorage.getItem('CurrentUser'));
      //     console.log("@@ email: " + user_get.email);
      //     console.log("@@ isloggedIn: " + user_get.valid);
    } else {
      console.log((0, _stringify2.default)(data));
    }
  }).catch(function (error) {
    console.log('request failed: ', error);
  }).then(function (errorData) {
    //失敗
    console.log((0, _stringify2.default)(errorData));
  });

  console.log("-getUserProfile submit");
};

function regularLogin(_email, _pswd) {
  console.log("+Login (regular) submit (" + _email + ", " + _pswd + ")");

  // clear the current user in session storage
  // sessionStorage.removeItem("CurrentUser");
  //console.log("@@@@ "+ sessionStorage.getItem('CurrentUser'));

  var token_acquired = false;
  fetch(backend_address + '/rest-auth/login/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: (0, _stringify2.default)({ email: _email, password: _pswd })
  }).then(function checkStatus(response) {
    if (response.status === 200) {
      token_acquired = true;
    } else {
      token_acquired = false;
    }
    return response.json();
  }).then(function (data) {
    //完成
    if (token_acquired) {
      console.log('login success, key: ' + data.key);
      getUserProfile(data.key);
    } else {
      console.log((0, _stringify2.default)(data));
    }
  }).catch(function (error) {
    console.log('request failed: ', error);
  }).then(function (errorData) {
    //失敗
    console.log((0, _stringify2.default)(errorData));
  });

  console.log("-Login (regular) submit");
};

function facebookLogin(_access_token) {
  console.log("+Login (facebook) submit (" + _access_token + ")");

  // clear the current user in session storage
  clearUserCookie();

  var token_acquired = false;
  fetch(backend_address + '/rest-auth/facebook/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: (0, _stringify2.default)({ access_token: _access_token })
  }).then(function checkStatus(response) {
    if (response.status === 200) {
      token_acquired = true;
    } else {
      token_acquired = false;
    }
    return response.json();
  }).then(function (data) {
    //完成
    if (token_acquired) {
      console.log('login success, key: ' + data.key);
      getUserProfile(data.key);
    } else {
      console.log((0, _stringify2.default)(data));
    }
  }).catch(function (error) {
    console.log('request failed: ', error);
  }).then(function (errorData) {
    //失敗
    console.log((0, _stringify2.default)(errorData));
  });

  console.log("-Login (facebook)");
};

function googleLogin(_access_token) {
  console.log("+Login (Google) submit (" + _access_token + ")");

  // clear the current user in session storage
  clearUserCookie();

  var token_acquired = false;
  fetch(backend_address + '/rest-auth/google/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: (0, _stringify2.default)({ access_token: _access_token })
  }).then(function checkStatus(response) {
    if (response.status === 200) {
      token_acquired = true;
    } else {
      token_acquired = false;
    }
    return response.json();
  }).then(function (data) {
    //完成
    if (token_acquired) {
      console.log('login success, key: ' + data.key);
      getUserProfile(data.key);
    } else {
      console.log((0, _stringify2.default)(data));
    }
  }).catch(function (error) {
    console.log('request failed: ', error);
  }).then(function (errorData) {
    //失敗
    console.log((0, _stringify2.default)(errorData));
  });

  console.log("-Login (Google)");
};

var Login = function (_React$Component) {
  (0, _inherits3.default)(Login, _React$Component);

  function Login(props) {
    (0, _classCallCheck3.default)(this, Login);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this, props));

    _this.state = {
      email: '',
      password: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Login, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // init facebook api
      window.fbAsyncInit = function () {
        window.FB.init({
          appId: '962212920572860',
          autoLogAppEvents: true,
          xfbml: true,
          version: 'v2.10'
        });
        window.FB.AppEvents.logPageView();
      };

      (function (d, s, id) {
        var js,
            fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }, {
    key: 'onGoogleSignInFailure',
    value: function onGoogleSignInFailure(response) {
      console.log(response);
    }
  }, {
    key: 'onGoogleSignInSuccess',
    value: function onGoogleSignInSuccess(googleUser) {
      console.log('+onGoogleSignInSuccess');
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

      var id_token = googleUser.getAuthResponse().id_token;
      console.log('id token: ' + id_token);

      var access_token = googleUser.getAuthResponse().access_token;
      console.log('access token: ' + access_token);

      googleLogin(access_token);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;

      this.setState((0, _defineProperty3.default)({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      regularLogin(this.state.email, this.state.password);
    }
  }, {
    key: 'handleFBLogin',
    value: function handleFBLogin() {
      console.log('+handleFBLogin');
      window.FB.login(function (response) {
        if (response.authResponse) {
          console.log("Welcome, retrieving your information...");
          window.FB.api('/me', function (response) {
            console.log("Good to see you, " + response.name + ".");
            console.log(response);

            var access_token = window.FB.getAuthResponse();
            console.log(access_token.accessToken);
            facebookLogin(access_token.accessToken);
          });
        } else {
          console.log("User cancelled login...");
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, { title: 'Login in', __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }, _react2.default.createElement('div', { id: 'login-box', className: 'col-6', 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, _react2.default.createElement('div', { className: 'left', 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, _react2.default.createElement('h1', {
        'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, 'Log in'), _react2.default.createElement('input', { type: 'email', name: 'email', placeholder: 'E-mail', required: true, value: this.state.email, onChange: this.handleChange, 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }), _react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'Password', required: true, value: this.state.password, onChange: this.handleChange, 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }), _react2.default.createElement('input', { type: 'submit', name: 'login_submit', value: 'Log in', onClick: this.handleSubmit, 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      })), _react2.default.createElement('div', { className: 'right', 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, _react2.default.createElement('span', { className: 'loginwith', 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }, 'Sign in with', _react2.default.createElement('br', {
        'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }), 'social network'), _react2.default.createElement('button', { className: 'social-signin facebook', onClick: this.handleFBLogin, 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        }
      }, _react2.default.createElement('i', { className: 'fa fa-facebook-square fa-2x', 'aria-hidden': 'true', 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }), ' log in'), _react2.default.createElement(_reactGoogleLogin2.default, { clientId: '161162238880-00kh7ilj9lucg6o267iq2mdo7kcvelk7.apps.googleusercontent.com',
        onSuccess: this.onGoogleSignInSuccess,
        onFailure: this.onGoogleSignInFailure, __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, _react2.default.createElement('i', { className: 'fa fa-google-plus', 'aria-hidden': 'true', 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }))), _react2.default.createElement('div', { className: 'or', 'data-jsx': 3526551867,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, 'OR')), _react2.default.createElement(_style2.default, {
        styleId: 3526551867,
        css: '@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);*[data-jsx="3526551867"]:focus{outline:none}#login-box[data-jsx="3526551867"]{position:relative;margin:5% auto;width:600px;height:400px;background:#FFF;border-radius:2px}.left[data-jsx="3526551867"]{position:absolute;top:0;left:0;box-sizing:border-box;padding:40px;width:300px;height:400px}h1[data-jsx="3526551867"]{margin:0 0 20px 0;font-weight:300;font-size:28px;color:#606060}input[type="email"][data-jsx="3526551867"],input[type="password"][data-jsx="3526551867"]{display:block;box-sizing:border-box;margin-bottom:20px;padding:4px;width:220px;height:32px;border:none;border-bottom:1px solid #AAA;font-family:\'Roboto\',sans-serif;font-weight:400;font-size:15px;-webkit-transition:0.2s ease;transition:0.2s ease}input[type="email"][data-jsx="3526551867"]:focus,input[type="password"][data-jsx="3526551867"]:focus{border-bottom:2px solid #16a085;color:#16a085;-webkit-transition:0.2s ease;transition:0.2s ease}input[type="submit"][data-jsx="3526551867"]{margin-top:28px;width:120px;height:32px;background:#16a085;border:none;border-radius:2px;color:#FFF;font-family:\'Roboto\',sans-serif;font-weight:500;text-transform:uppercase;-webkit-transition:0.1s ease;transition:0.1s ease;cursor:pointer}input[type="submit"][data-jsx="3526551867"]:hover,input[type="submit"][data-jsx="3526551867"]:focus{opacity:0.8;box-shadow:0 2px 4px rgba(0,0,0,0.4);-webkit-transition:0.1s ease;transition:0.1s ease}input[type="submit"][data-jsx="3526551867"]:active{opacity:1;box-shadow:0 1px 2px rgba(0,0,0,0.4);-webkit-transition:0.1s ease;transition:0.1s ease}.or[data-jsx="3526551867"]{position:absolute;top:180px;left:280px;width:40px;height:40px;background:#DDD;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,0.4);line-height:40px;text-align:center}.right[data-jsx="3526551867"]{position:absolute;top:0;right:0;box-sizing:border-box;padding:40px;width:300px;height:400px;background-size:cover;background-position:center;border-radius:0 2px 2px 0}.right[data-jsx="3526551867"] .loginwith[data-jsx="3526551867"]{display:block;margin-bottom:40px;font-size:28px;color:#606060;text-align:center}button.social-signin[data-jsx="3526551867"]{margin-bottom:20px;width:220px;height:36px;border:none;border-radius:2px;color:#FFF;font-family:\'Roboto\',sans-serif;font-weight:500;-webkit-transition:0.2s ease;transition:0.2s ease;cursor:pointer}button.social-signin[data-jsx="3526551867"]:hover,button.social-signin[data-jsx="3526551867"]:focus{box-shadow:0 2px 4px rgba(0,0,0,0.4);-webkit-transition:0.2s ease;transition:0.2s ease}button.social-signin[data-jsx="3526551867"]:active{box-shadow:0 1px 2px rgba(0,0,0,0.4);-webkit-transition:0.2s ease;transition:0.2s ease}button.social-signin.facebook[data-jsx="3526551867"]{background:#32508E}button.social-signin.twitter[data-jsx="3526551867"]{background:#55ACEE}button.social-signin.google[data-jsx="3526551867"]{background:#DD4B39}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZYZ0IsQUFFOEUsQUFFeEQsQUFJSyxBQVdBLEFBVUEsQUFRSixBQWdCa0IsQUFNaEIsQUFnQkosQUFNRixBQU1RLEFBYUEsQUFjSixBQVFLLEFBY3FCLEFBS0EsQUFLckIsQUFJQSxBQUlBLFVBeEVxQixFQU5BLENBdkUxQyxDQWlDd0IsQUE2RUgsRUF2RFAsRUFuREcsQUFXVCxBQVVVLEFBMEROLEFBYUosQ0FzQk0sQUF3QmQsQUFJQSxBQUlBLEtBdElTLEFBaUZDLElBekNJLEFBNEJELEdBbkVXLEFBc0dWLENBdEVFLEFBaURRLENBN0ZWLEFBMEdHLENBckZBLEVBUUksQ0FrR0UsQUFLQSxFQXBEVixDQTVCUSxHQStEUCxFQWxIQyxDQTRDUSxDQTRCQSxDQWtDUCxDQXJGQSxBQTZDTyxDQWNULEdBcEVDLENBaUZBLENBaEVELEFBc0ZNLEdBbEhGLENBbURKLEdBNkJJLEFBMEJFLENBckZwQixHQVRjLENBaUJBLEFBZ0VBLElBekNNLEVBK0RQLENBbEhPLElBWUwsQUFvRUssQ0FuRE4sQUFnRUMsQ0FhZixJQVNtQyxHQVVuQyxBQUtBLEVBOUVhLEVBdkNiLEFBaUJjLENBM0JkLEFBNEZ3QixJQXBEeEIsQUFzQzBDLENBVjFDLEVBTkEsQ0FabUMsR0F0QkosV0FpRUYsRUFvQlgsZ0JBcEZpQixBQXNCakIsQUErREssQ0FuQ0osUUFlUyxPQTFDRCxFQTRCUCxjQWxERixHQWlFbEIsQ0FkQSxLQTVCdUIsT0F0Qk4sRUFvRkEsYUFuRk0sRUFvRnZCLDBCQTlEaUIsZUFDakIsT0F0QkEiLCJmaWxlIjoicGFnZXMvbG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG4vL2ltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy9pbXBvcnQgJy4vY3NzL2xvZ2luLmNzcyc7XG4vL2ltcG9ydCBoaXN0b3J5IGZyb20gJy4vaGlzdG9yeSdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgaW5pdFN0b3JlLCBhZGRDb3VudCwgc2V0VXNlcm5hbWUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbic7XG5pbXBvcnQganNDb29raWUgZnJvbSAnanMtY29va2llJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuXG4vLyB2YXIgYmFja2VuZF9hZGRyZXNzID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCc7XG52YXIgYmFja2VuZF9hZGRyZXNzID0gJ2h0dHA6Ly9lYzItNTQtMjU0LTIwNy0yNDcuYXAtc291dGhlYXN0LTEuY29tcHV0ZS5hbWF6b25hd3MuY29tOjgwMDAnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRVc2VyQ29va2llKHVzZXJuYW1lLCBlbWFpbCwgdG9rZW4sIHZhbGlkKSB7XG4gIGpzQ29va2llLnNldCgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gIGpzQ29va2llLnNldCgnZW1haWwnLCBlbWFpbCk7XG4gIGpzQ29va2llLnNldCgndG9rZW4nLCB0b2tlbik7XG4gIGpzQ29va2llLnNldCgndmFsaWQnLCB2YWxpZCk7XG4gIGNvbnNvbGUubG9nKCdAQCBzZXRVc2VyQ29va2llICgnKyB1c2VybmFtZSArICcsICcgKyBlbWFpbCArICcsICcgKyB0b2tlbiArICcsICcgKyB2YWxpZCArICcpJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclVzZXJDb29raWUoKSB7XG4gIGpzQ29va2llLnJlbW92ZSgndXNlcm5hbWUnKTtcbiAganNDb29raWUucmVtb3ZlKCdlbWFpbCcpO1xuICBqc0Nvb2tpZS5yZW1vdmUoJ3Rva2VuJyk7XG4gIGpzQ29va2llLnJlbW92ZSgndmFsaWQnKTtcbiAgY29uc29sZS5sb2coJ0BAIGNsZWFyVXNlckNvb2tpZSAnKTtcbn1cblxuLypcbmNsYXNzIFVzZXIge1xuICAgIGNvbnN0cnVjdG9yKHVzZXJuYW1lLCBlbWFpbCwgdG9rZW4sIHZhbGlkKSB7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMudmFsaWQgPSB2YWxpZDtcbiAgICAgICAgY29uc29sZS5sb2coJ1VzZXIgaW5zdGFudGlhdGVkKCcgKyB0aGlzLnVzZXJuYW1lICsgJywgJyArIHRoaXMuZW1haWwgKyAnLCAnICsgdGhpcy50b2tlbiArICcpJyk7XG4gICAgfVxufVxuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ291dFVzZXIoKSB7XG4gICAgY29uc29sZS5sb2coXCIrbG9nb3V0VXNlclwiKTtcblxuICAgIGNsZWFyVXNlckNvb2tpZSgpO1xuXG4gICAgdmFyIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBmZXRjaChiYWNrZW5kX2FkZHJlc3MgKyAnL3Jlc3QtYXV0aC9sb2dvdXQvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgIH0pXG4gICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICBcdC8v5a6M5oiQXG4gICAgICAgXHQgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZygnbG9nb3V0IHN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICBcdCAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICBcdCAgfVxuICAgICAgIFx0ICBlbHNlIHtcbiAgICAgICBcdCAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICBcdCAgfVxuICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWxlZDogJywgZXJyb3IpO1xuICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZXJyb3JEYXRhKXtcbiAgICAgICAgICAvL+WkseaVl1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yRGF0YSkpO1xuICAgICAgIH0pO1xuXG4gICAgICAgY29uc29sZS5sb2coXCItbG9nb3V0VXNlciBzdWJtaXRcIik7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJQcm9maWxlKGtleSkge1xuICAgIGNvbnNvbGUubG9nKFwiK2dldFVzZXJQcm9maWxlIChcIiArIGtleSArIFwiKVwiKTtcblxuICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgZmV0Y2goYmFja2VuZF9hZGRyZXNzICsgJy9yZXN0LWF1dGgvdXNlci8nLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnVG9rZW4gJysga2V5XG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VjY2VzcyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgLypcbiAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgfVxuICAgICovXG4gICAgICAgfSlcbiAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgXHQvL+WujOaIkFxuICAgICAgIFx0ICBpZiAoc3VjY2Vzcykge1xuICAgICAgIFx0ICAgICAgY29uc29sZS5sb2coJ2dldFVzZXJQcm9maWxlIHN1Y2Nlc3MsIHVzZXJuYW1lOiAnKyBkYXRhLnVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgc2V0VXNlckNvb2tpZSAoZGF0YS51c2VybmFtZSwgZGF0YS5lbWFpbCwga2V5LCB0cnVlKTtcbiAgICAgICAgICAgICAgLy9IZWFkZXIuaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAvLyByZWRpcmVjdCB0byBob21lXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgXHQgICAgICAvL2hpc3RvcnkucHVzaChcIi9cIik7ICAvLyBnbyB0byByb290IHBhZ2VcbiAgICAgICBcdCAvLyAgICAgdmFyIHVzZXJfZ2V0ID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDdXJyZW50VXNlcicpKTtcbiAgICAgICBcdCAvLyAgICAgY29uc29sZS5sb2coXCJAQCBlbWFpbDogXCIgKyB1c2VyX2dldC5lbWFpbCk7XG4gICAgICAgXHQgLy8gICAgIGNvbnNvbGUubG9nKFwiQEAgaXNsb2dnZWRJbjogXCIgKyB1c2VyX2dldC52YWxpZCk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLWdldFVzZXJQcm9maWxlIHN1Ym1pdFwiKTtcbn07XG5cbmZ1bmN0aW9uIHJlZ3VsYXJMb2dpbihfZW1haWwsIF9wc3dkKSB7XG4gICAgY29uc29sZS5sb2coXCIrTG9naW4gKHJlZ3VsYXIpIHN1Ym1pdCAoXCIgKyBfZW1haWwgKyBcIiwgXCIgKyBfcHN3ZCArXCIpXCIpO1xuXG4gICAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgdXNlciBpbiBzZXNzaW9uIHN0b3JhZ2VcbiAgICAvLyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiQ3VycmVudFVzZXJcIik7XG4gICAgLy9jb25zb2xlLmxvZyhcIkBAQEAgXCIrIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0N1cnJlbnRVc2VyJykpO1xuXG4gICAgdmFyIHRva2VuX2FjcXVpcmVkID0gZmFsc2U7XG4gICAgZmV0Y2goYmFja2VuZF9hZGRyZXNzICsgJy9yZXN0LWF1dGgvbG9naW4vJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOl9lbWFpbCwgcGFzc3dvcmQ6X3Bzd2R9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgfSlcbiAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgIFx0Ly/lrozmiJBcbiAgICAgICBcdCAgaWYgKHRva2VuX2FjcXVpcmVkKSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzcywga2V5OiAnKyBkYXRhLmtleSk7XG4gICAgICAgXHQgICAgICBnZXRVc2VyUHJvZmlsZShkYXRhLmtleSk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLUxvZ2luIChyZWd1bGFyKSBzdWJtaXRcIik7XG59O1xuXG5cbmZ1bmN0aW9uIGZhY2Vib29rTG9naW4oX2FjY2Vzc190b2tlbikge1xuICAgIGNvbnNvbGUubG9nKFwiK0xvZ2luIChmYWNlYm9vaykgc3VibWl0IChcIiArIF9hY2Nlc3NfdG9rZW4gKyBcIilcIik7XG5cbiAgICAvLyBjbGVhciB0aGUgY3VycmVudCB1c2VyIGluIHNlc3Npb24gc3RvcmFnZVxuICAgIGNsZWFyVXNlckNvb2tpZSgpO1xuXG4gICAgdmFyIHRva2VuX2FjcXVpcmVkID0gZmFsc2U7XG4gICAgZmV0Y2goYmFja2VuZF9hZGRyZXNzICsgJy9yZXN0LWF1dGgvZmFjZWJvb2svJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFjY2Vzc190b2tlbjpfYWNjZXNzX3Rva2VufSlcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgdG9rZW5fYWNxdWlyZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9rZW5fYWNxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgIH0pXG4gICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICBcdC8v5a6M5oiQXG4gICAgICAgXHQgIGlmICh0b2tlbl9hY3F1aXJlZCkge1xuICAgICAgIFx0ICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3MsIGtleTogJysgZGF0YS5rZXkpO1xuICAgICAgIFx0ICAgICAgZ2V0VXNlclByb2ZpbGUoZGF0YS5rZXkpO1xuICAgICAgIFx0ICB9XG4gICAgICAgXHQgIGVsc2Uge1xuICAgICAgIFx0ICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgIFx0ICB9XG4gICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbGVkOiAnLCBlcnJvcik7XG4gICAgICAgfSkudGhlbihmdW5jdGlvbihlcnJvckRhdGEpe1xuICAgICAgICAgIC8v5aSx5pWXXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3JEYXRhKSk7XG4gICAgICAgfSk7XG5cbiAgICAgICBjb25zb2xlLmxvZyhcIi1Mb2dpbiAoZmFjZWJvb2spXCIpO1xufTtcblxuZnVuY3Rpb24gZ29vZ2xlTG9naW4oX2FjY2Vzc190b2tlbikge1xuICAgIGNvbnNvbGUubG9nKFwiK0xvZ2luIChHb29nbGUpIHN1Ym1pdCAoXCIgKyBfYWNjZXNzX3Rva2VuICsgXCIpXCIpO1xuXG4gICAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgdXNlciBpbiBzZXNzaW9uIHN0b3JhZ2VcbiAgICBjbGVhclVzZXJDb29raWUoKTtcblxuICAgIHZhciB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgIGZldGNoKGJhY2tlbmRfYWRkcmVzcyArICcvcmVzdC1hdXRoL2dvb2dsZS8nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYWNjZXNzX3Rva2VuOl9hY2Nlc3NfdG9rZW59KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgfSlcbiAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgIFx0Ly/lrozmiJBcbiAgICAgICBcdCAgaWYgKHRva2VuX2FjcXVpcmVkKSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzcywga2V5OiAnKyBkYXRhLmtleSk7XG4gICAgICAgXHQgICAgICBnZXRVc2VyUHJvZmlsZShkYXRhLmtleSk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLUxvZ2luIChHb29nbGUpXCIpO1xufTtcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGluaXQgZmFjZWJvb2sgYXBpXG4gICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB3aW5kb3cuRkIuaW5pdCh7XG4gICAgICAgIGFwcElkICAgICAgICAgICAgOiAnOTYyMjEyOTIwNTcyODYwJyxcbiAgICAgICAgYXV0b0xvZ0FwcEV2ZW50cyA6IHRydWUsXG4gICAgICAgIHhmYm1sICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICB2ZXJzaW9uICAgICAgICAgIDogJ3YyLjEwJ1xuICAgICAgfSk7XG4gICAgICB3aW5kb3cuRkIuQXBwRXZlbnRzLmxvZ1BhZ2VWaWV3KCk7XG4gICAgfTtcblxuICAgIChmdW5jdGlvbihkLCBzLCBpZCl7XG4gICAgICAgdmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xuICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkge3JldHVybjt9XG4gICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcbiAgICAgIGpzLnNyYyA9IFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIjtcbiAgICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcbiAgICB9KGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJykpO1xuICB9XG5cbiAgb25Hb29nbGVTaWduSW5GYWlsdXJlIChyZXNwb25zZSkge1xuICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIH1cblxuICBvbkdvb2dsZVNpZ25JblN1Y2Nlc3MoZ29vZ2xlVXNlcikge1xuICAgICAgY29uc29sZS5sb2coJytvbkdvb2dsZVNpZ25JblN1Y2Nlc3MnKTtcbiAgICAgIHZhciBwcm9maWxlID0gZ29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdJRDogJyArIHByb2ZpbGUuZ2V0SWQoKSk7IC8vIERvIG5vdCBzZW5kIHRvIHlvdXIgYmFja2VuZCEgVXNlIGFuIElEIHRva2VuIGluc3RlYWQuXG4gICAgICBjb25zb2xlLmxvZygnTmFtZTogJyArIHByb2ZpbGUuZ2V0TmFtZSgpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBVUkw6ICcgKyBwcm9maWxlLmdldEltYWdlVXJsKCkpO1xuICAgICAgY29uc29sZS5sb2coJ0VtYWlsOiAnICsgcHJvZmlsZS5nZXRFbWFpbCgpKTsgLy8gVGhpcyBpcyBudWxsIGlmIHRoZSAnZW1haWwnIHNjb3BlIGlzIG5vdCBwcmVzZW50LlxuXG4gICAgICB2YXIgaWRfdG9rZW4gPSBnb29nbGVVc2VyLmdldEF1dGhSZXNwb25zZSgpLmlkX3Rva2VuO1xuICAgICAgY29uc29sZS5sb2coJ2lkIHRva2VuOiAnICsgaWRfdG9rZW4pO1xuXG4gICAgICB2YXIgYWNjZXNzX3Rva2VuID0gZ29vZ2xlVXNlci5nZXRBdXRoUmVzcG9uc2UoKS5hY2Nlc3NfdG9rZW47XG4gICAgICBjb25zb2xlLmxvZygnYWNjZXNzIHRva2VuOiAnICsgYWNjZXNzX3Rva2VuKTtcblxuICAgICAgZ29vZ2xlTG9naW4oYWNjZXNzX3Rva2VuKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVndWxhckxvZ2luKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICB9XG5cbiAgaGFuZGxlRkJMb2dpbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcraGFuZGxlRkJMb2dpbicpO1xuICAgICAgd2luZG93LkZCLmxvZ2luKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgaWYgKHJlc3BvbnNlLmF1dGhSZXNwb25zZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIldlbGNvbWUsIHJldHJpZXZpbmcgeW91ciBpbmZvcm1hdGlvbi4uLlwiKTtcbiAgICAgICAgICAgICAgd2luZG93LkZCLmFwaSgnL21lJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR29vZCB0byBzZWUgeW91LCBcIiArIHJlc3BvbnNlLm5hbWUgKyBcIi5cIik7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSB3aW5kb3cuRkIuZ2V0QXV0aFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY2Nlc3NfdG9rZW4uYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgZmFjZWJvb2tMb2dpbihhY2Nlc3NfdG9rZW4uYWNjZXNzVG9rZW4pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBjYW5jZWxsZWQgbG9naW4uLi5cIik7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPSdMb2dpbiBpbic+XG4gICAgICA8ZGl2IGlkPVwibG9naW4tYm94XCIgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgPGgxPkxvZyBpbjwvaDE+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgbmFtZT1cImxvZ2luX3N1Ym1pdFwiIHZhbHVlPVwiTG9nIGluXCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9Lz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsb2dpbndpdGhcIj5TaWduIGluIHdpdGg8YnIgLz5zb2NpYWwgbmV0d29yazwvc3Bhbj5cbiAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic29jaWFsLXNpZ25pbiBmYWNlYm9va1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRkJMb2dpbn0+XG4gICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vay1zcXVhcmUgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IGxvZyBpbjwvYnV0dG9uPlxuICAgICAgICAgPEdvb2dsZUxvZ2luIGNsaWVudElkPVwiMTYxMTYyMjM4ODgwLTAwa2g3aWxqOWx1Y2c2bzI2N2lxMm1kbzdrY3ZlbGs3LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAgICAgICAgICBvblN1Y2Nlc3M9e3RoaXMub25Hb29nbGVTaWduSW5TdWNjZXNzfVxuICAgICAgICAgICAgIG9uRmFpbHVyZT17dGhpcy5vbkdvb2dsZVNpZ25JbkZhaWx1cmV9PlxuICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgPC9Hb29nbGVMb2dpbj5cbiAgICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JcIj5PUjwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCw1MDApO1xuICAgICAgKjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICNsb2dpbi1ib3gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogNSUgYXV0bztcbiAgICAgICAgd2lkdGg6IDYwMHB4O1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgLyogYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTsgKi9cbiAgICAgICAvKiBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7ICovXG4gICAgICB9XG5cbiAgICAgIC5sZWZ0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6ICM2MDYwNjA7XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9XCJlbWFpbFwiXSxcbiAgICAgIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjQUFBO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgICAgfVxuXG4gICAgICBpbnB1dFt0eXBlPVwiZW1haWxcIl06Zm9jdXMsXG4gICAgICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzE2YTA4NTtcbiAgICAgICAgY29sb3I6ICMxNmEwODU7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMTZhMDg1O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXG4gICAgICBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmZvY3VzIHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAub3Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMTgwcHg7XG4gICAgICAgIGxlZnQ6IDI4MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjREREO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgIC8qIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9nb28uZ2wvWWJrdFNqJyk7ICovXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAycHggMnB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5yaWdodCAubG9naW53aXRoIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6ICM2MDYwNjA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uLnNvY2lhbC1zaWduaW4ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uc29jaWFsLXNpZ25pbjpob3ZlcixcbiAgICAgIGJ1dHRvbi5zb2NpYWwtc2lnbmluOmZvY3VzIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xuICAgICAgfVxuXG4gICAgICBidXR0b24uc29jaWFsLXNpZ25pbjphY3RpdmUge1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5zb2NpYWwtc2lnbmluLmZhY2Vib29rIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzMyNTA4RTtcbiAgICAgIH1cblxuICAgICAgYnV0dG9uLnNvY2lhbC1zaWduaW4udHdpdHRlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICM1NUFDRUU7XG4gICAgICB9XG5cbiAgICAgIGJ1dHRvbi5zb2NpYWwtc2lnbmluLmdvb2dsZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNERDRCMzk7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbnVsbCwgbnVsbCkoTG9naW4pXG4iXX0= */\n/*@ sourceURL=pages/login.js?entry */'
      }));
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, null)(Login);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5pdFN0b3JlIiwiYWRkQ291bnQiLCJzZXRVc2VybmFtZSIsIndpdGhSZWR1eCIsIkdvb2dsZUxvZ2luIiwianNDb29raWUiLCJMYXlvdXQiLCJIZWFkZXIiLCJiYWNrZW5kX2FkZHJlc3MiLCJzZXRVc2VyQ29va2llIiwidXNlcm5hbWUiLCJlbWFpbCIsInRva2VuIiwidmFsaWQiLCJzZXQiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJVc2VyQ29va2llIiwicmVtb3ZlIiwibG9nb3V0VXNlciIsInN1Y2Nlc3MiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJ0aGVuIiwiY2hlY2tTdGF0dXMiLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwicHVzaCIsImNhdGNoIiwiZXJyb3IiLCJlcnJvckRhdGEiLCJnZXRVc2VyUHJvZmlsZSIsImtleSIsInJlZ3VsYXJMb2dpbiIsIl9lbWFpbCIsIl9wc3dkIiwidG9rZW5fYWNxdWlyZWQiLCJib2R5IiwicGFzc3dvcmQiLCJmYWNlYm9va0xvZ2luIiwiX2FjY2Vzc190b2tlbiIsImFjY2Vzc190b2tlbiIsImdvb2dsZUxvZ2luIiwiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImhhbmRsZVN1Ym1pdCIsIndpbmRvdyIsImZiQXN5bmNJbml0IiwiRkIiLCJpbml0IiwiYXBwSWQiLCJhdXRvTG9nQXBwRXZlbnRzIiwieGZibWwiLCJ2ZXJzaW9uIiwiQXBwRXZlbnRzIiwibG9nUGFnZVZpZXciLCJkIiwicyIsImlkIiwianMiLCJmanMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJkb2N1bWVudCIsImdvb2dsZVVzZXIiLCJwcm9maWxlIiwiZ2V0QmFzaWNQcm9maWxlIiwiZ2V0SWQiLCJnZXROYW1lIiwiZ2V0SW1hZ2VVcmwiLCJnZXRFbWFpbCIsImlkX3Rva2VuIiwiZ2V0QXV0aFJlc3BvbnNlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm5hbWUiLCJzZXRTdGF0ZSIsInByZXZlbnREZWZhdWx0IiwibG9naW4iLCJhdXRoUmVzcG9uc2UiLCJhcGkiLCJhY2Nlc3NUb2tlbiIsImhhbmRsZUZCTG9naW4iLCJvbkdvb2dsZVNpZ25JblN1Y2Nlc3MiLCJvbkdvb2dsZVNpZ25JbkZhaWx1cmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBaUJPLEFBQVM7UUFRVCxBQUFTO1FBb0JULEFBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE3Q2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBSVAsQUFBUzs7QUFDVCxBQUFTLEFBQVcsQUFBVTs7QUFDOUIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUFUUDtBQUNBO0FBQ0E7OztBQVNBO0FBQ0EsSUFBSSxrQkFBSixBQUFzQixBQUd0Qjs7QUFBTyx1QkFBQSxBQUF1QixVQUF2QixBQUFpQyxPQUFqQyxBQUF3QyxPQUF4QyxBQUErQyxPQUFPLEFBQzNEO3FCQUFBLEFBQVMsSUFBVCxBQUFhLFlBQWIsQUFBeUIsQUFDekI7cUJBQUEsQUFBUyxJQUFULEFBQWEsU0FBYixBQUFzQixBQUN0QjtxQkFBQSxBQUFTLElBQVQsQUFBYSxTQUFiLEFBQXNCLEFBQ3RCO3FCQUFBLEFBQVMsSUFBVCxBQUFhLFNBQWIsQUFBc0IsQUFDdEI7VUFBQSxBQUFRLElBQUksdUJBQUEsQUFBc0IsV0FBdEIsQUFBaUMsT0FBakMsQUFBd0MsUUFBeEMsQUFBZ0QsT0FBaEQsQUFBdUQsUUFBdkQsQUFBK0QsT0FBL0QsQUFBc0UsUUFBbEYsQUFBMEYsQUFDM0Y7QUFFRDs7QUFBTywyQkFBMkIsQUFDaEM7cUJBQUEs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QUFBLFNBQUssSUFBTCxBQUFRLGFBQVksV0FBcEIsQUFBOEIscUJBQTlCOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZSxvQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQURGLEFBQ0UsQUFDQSxvREFBTyxNQUFQLEFBQVksU0FBUSxNQUFwQixBQUF5QixTQUFRLGFBQWpDLEFBQTZDLFVBQVMsVUFBdEQsTUFBK0QsT0FBTyxLQUFBLEFBQUssTUFBM0UsQUFBaUYsT0FBTyxVQUFVLEtBQWxHLEFBQXVHLDBCQUF2Rzs7b0JBQUE7c0JBRkYsQUFFRSxBQUNBO0FBREE7bURBQ08sTUFBUCxBQUFZLFlBQVcsTUFBdkIsQUFBNEIsWUFBVyxhQUF2QyxBQUFtRCxZQUFXLFVBQTlELE1BQXVFLE9BQU8sS0FBQSxBQUFLLE1BQW5GLEFBQXlGLFVBQVUsVUFBVSxLQUE3RyxBQUFrSCwwQkFBbEg7O29CQUFBO3NCQUhGLEFBR0UsQUFDQTtBQURBO21EQUNPLE1BQVAsQUFBWSxVQUFTLE1BQXJCLEFBQTBCLGdCQUFlLE9BQXpDLEFBQStDLFVBQVMsU0FBUyxLQUFqRSxBQUFzRSwwQkFBdEU7O29CQUFBO3NCQUxKLEFBQ0UsQUFJRSxBQUdIO0FBSEc7MkJBR0gsY0FBQSxTQUFLLFdBQUwsQUFBZSxxQkFBZjs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsVUFBTSxXQUFOLEFBQWdCLHlCQUFoQjs7b0JBQUE7c0JBQUE7QUFBQTtTQUF3QztvQkFBQTs7b0JBQUE7c0JBQXhDLEFBQXdDO0FBQUE7QUFBQSxVQUQxQyxBQUNFLEFBQ0EsbUNBQUEsY0FBQSxZQUFRLFdBQVIsQUFBa0IsMEJBQXlCLFNBQVMsS0FBcEQsQUFBeUQsMkJBQXpEOztvQkFBQTtzQkFBQSxBQUNBO0FBREE7OENBQ0csV0FBSCxBQUFhLCtCQUE4QixlQUEzQyxBQUF1RCxvQkFBdkQ7O29CQUFBO3NCQURBLEFBQ0E7QUFBQTtVQUhGLEFBRUUsQUFFQSw0QkFBQSxBQUFDLDRDQUFZLFVBQWIsQUFBc0IsQUFDbEI7bUJBQVcsS0FEZixBQUNvQixBQUNoQjttQkFBVyxLQUZmLEFBRW9CO29CQUZwQjtzQkFBQSxBQUdJO0FBSEo7OENBR08sV0FBSCxBQUFhLHFCQUFvQixlQUFqQyxBQUE2QyxvQkFBN0M7O29CQUFBO3NCQWZQLEFBUUMsQUFJRSxBQUdJLEFBR1A7QUFITzs0QkFHUCxjQUFBLFNBQUssV0FBTCxBQUFlLGtCQUFmOztvQkFBQTtzQkFBQTtBQUFBO1NBbkJGLEFBQ0UsQUFrQkE7aUJBbkJGO2FBREEsQUFDQSxBQW1MRDtBQW5MQzs7Ozs7RUE3RmdCLGdCQUFNLEEsQUFtUjFCOztrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLE1BQXJCLEFBQTJCLE1BQTFDLEFBQWUsQUFBaUMiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=