'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserCookie = setUserCookie;
exports.clearUserCookie = clearUserCookie;
exports.logoutUser = logoutUser;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactGoogleLogin = require('react-google-login');

var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _reactI18next = require('react-i18next');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _ThemeProvider = require('react-toolbox/lib/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _theme = require('../static/theme');

var _theme2 = _interopRequireDefault(_theme);

var _Dialog = require('react-toolbox/lib/dialog/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Button = require('react-toolbox/lib/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Tab = require('react-toolbox/lib/tabs/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _Tabs = require('react-toolbox/lib/tabs/Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Input = require('react-toolbox/lib/input/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/loginDialog.js';


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

function regularRegister(_email, _pswd) {
  console.log("+Register (regular) submit (" + _email + ", " + _pswd + ")");
}

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

var LoginDialog = function (_React$Component) {
  (0, _inherits3.default)(LoginDialog, _React$Component);

  function LoginDialog(props) {
    (0, _classCallCheck3.default)(this, LoginDialog);

    //    this.handleChange = this.handleChange.bind(this);
    var _this = (0, _possibleConstructorReturn3.default)(this, (LoginDialog.__proto__ || (0, _getPrototypeOf2.default)(LoginDialog)).call(this, props));

    _this.state = {
      email: '',
      password: '',
      fixedIndex: 0
    };

    _this.handleFixedTabChange = function (index) {
      _this.setState({ fixedIndex: index });
    };

    _this.handleChange = function (name, value) {
      _this.setState((0, _extends3.default)({}, _this.state, (0, _defineProperty3.default)({}, name, value)));
    };

    _this.handleLoginSubmit = _this.handleLoginSubmit.bind(_this);
    _this.handleSignupSubmit = _this.handleSignupSubmit.bind(_this);
    _this.t = props.t;
    console.log('LoginDialog');
    return _this;
  }

  (0, _createClass3.default)(LoginDialog, [{
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

    /*
      handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
    */

  }, {
    key: 'handleLoginSubmit',
    value: function handleLoginSubmit(event) {
      event.preventDefault();
      if (this.state.email.length == 0 || this.state.password.length == 0) {
        console.log('@@ invalid email or password');
        return;
      }
      regularLogin(this.state.email, this.state.password);
    }
  }, {
    key: 'handleSignupSubmit',
    value: function handleSignupSubmit(event) {
      event.preventDefault();
      if (this.state.email.length == 0 || this.state.password.length == 0) {
        console.log('@@ invalid email or password');
        return;
      }
      regularRegister(this.state.email, this.state.password);
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
      var loginBtnStyle = {
        width: '100%',
        color: '#FFFFFF',
        backgroundColor: '#55AA00',
        textTransform: 'none'
      };
      var fbLoginBtnStyle = {
        width: '100%',
        //  height: '50px',
        color: '#FFFFFF',
        backgroundColor: '#3b5998',
        textTransform: 'none'
        //  verticalAlign: 'middle'
      };
      var googleLoginBtnStyle = {
        width: '100%',
        height: '38px',
        color: '#FFFFFF',
        backgroundColor: '#dd4b39',
        textTransform: 'none',
        border: 'none',
        marginTop: '5px'
        //  verticalAlign: 'middle'
      };
      var signupBtnStyle = {
        width: '100%',
        color: '#FFFFFF',
        backgroundColor: '#55AA00',
        textTransform: 'none'
      };
      var normalLoginDivStyle = {
        //  border:'solid 1px red'
      };
      var socialLoginDivStyle = {
        //  border:'solid 1px blue'
      };

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, _react2.default.createElement('link', { href: '/static/theme.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      })), _react2.default.createElement(_ThemeProvider2.default, { theme: _theme2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }, _react2.default.createElement(_Dialog2.default, {
        actions: this.props.actions,
        active: this.props.active,
        onEscKeyDown: this.props.onEscKeyDown,
        onOverlayClick: this.props.onOverlayClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, _react2.default.createElement(_Tabs2.default, { index: this.state.fixedIndex, onChange: this.handleFixedTabChange, fixed: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, _react2.default.createElement(_Tab2.default, { label: this.t('login'), __source: {
          fileName: _jsxFileName,
          lineNumber: 437
        }
      }, _react2.default.createElement('div', { style: normalLoginDivStyle, 'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, _react2.default.createElement('h4', {
        'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, 'Log in with e-mail'), _react2.default.createElement(_Input2.default, { type: 'email', label: 'Email address', icon: 'mail', required: true, value: this.state.email, onChange: this.handleChange.bind(this, 'email'), __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }), _react2.default.createElement(_Input2.default, { type: 'password', label: 'Password', icon: 'lock', required: true, value: this.state.password, onChange: this.handleChange.bind(this, 'password'), __source: {
          fileName: _jsxFileName,
          lineNumber: 441
        }
      }), _react2.default.createElement(_Button2.default, { raised: true, primary: true, style: loginBtnStyle, onClick: this.handleLoginSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 442
        }
      }, 'Login')), _react2.default.createElement('hr', { style: { width: '100%', border: 'solid 1px #DDDDDD' }, 'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        }
      }), _react2.default.createElement('div', { style: socialLoginDivStyle, 'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 445
        }
      }, _react2.default.createElement('h4', {
        'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }, 'Log in with social network'), _react2.default.createElement(_Button2.default, { raised: true, primary: true, style: fbLoginBtnStyle, onClick: this.handleFBLogin, __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, ' Login with facebook'), _react2.default.createElement(_reactGoogleLogin2.default, { style: googleLoginBtnStyle, clientId: '161162238880-00kh7ilj9lucg6o267iq2mdo7kcvelk7.apps.googleusercontent.com',
        onSuccess: this.onGoogleSignInSuccess,
        onFailure: this.onGoogleSignInFailure, __source: {
          fileName: _jsxFileName,
          lineNumber: 453
        }
      }))), _react2.default.createElement(_Tab2.default, { label: this.t('signup'), __source: {
          fileName: _jsxFileName,
          lineNumber: 462
        }
      }, _react2.default.createElement('section', {
        'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 463
        }
      }, _react2.default.createElement(_Input2.default, { type: 'email', label: 'Email address', icon: 'mail', required: true, value: this.state.email, onChange: this.handleChange.bind(this, 'email'), __source: {
          fileName: _jsxFileName,
          lineNumber: 465
        }
      }), _react2.default.createElement(_Input2.default, { type: 'password', label: 'Password', icon: 'lock', required: true, value: this.state.password, onChange: this.handleChange.bind(this, 'password'), __source: {
          fileName: _jsxFileName,
          lineNumber: 466
        }
      }), _react2.default.createElement(_Button2.default, { raised: true, floating: true, style: signupBtnStyle, onClick: this.handleSignupSubmit, __source: {
          fileName: _jsxFileName,
          lineNumber: 467
        }
      }, 'Sign Up')))), _react2.default.createElement(_style2.default, {
        styleId: 668434752,
        css: '@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW5EaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdWRjLEFBRTRFIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9naW5EaWFsb2cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGluaXRTdG9yZSwgYWRkQ291bnQsIHNldFVzZXJuYW1lIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nO1xuaW1wb3J0IGpzQ29va2llIGZyb20gJ2pzLWNvb2tpZSc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBUaGVtZVByb3ZpZGVyIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL1RoZW1lUHJvdmlkZXInXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vc3RhdGljL3RoZW1lJ1xuaW1wb3J0IERpYWxvZyBmcm9tICdyZWFjdC10b29sYm94L2xpYi9kaWFsb2cvRGlhbG9nJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC10b29sYm94L2xpYi9idXR0b24vQnV0dG9uJ1xuaW1wb3J0IFRhYiBmcm9tICdyZWFjdC10b29sYm94L2xpYi90YWJzL1RhYidcbmltcG9ydCBUYWJzIGZyb20gJ3JlYWN0LXRvb2xib3gvbGliL3RhYnMvVGFicydcbmltcG9ydCBJbnB1dCBmcm9tICdyZWFjdC10b29sYm94L2xpYi9pbnB1dC9JbnB1dCc7XG5cblxuLy8gdmFyIGJhY2tlbmRfYWRkcmVzcyA9ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnO1xudmFyIGJhY2tlbmRfYWRkcmVzcyA9ICdodHRwOi8vZWMyLTU0LTI1NC0yMDctMjQ3LmFwLXNvdXRoZWFzdC0xLmNvbXB1dGUuYW1hem9uYXdzLmNvbTo4MDAwJztcblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlckNvb2tpZSh1c2VybmFtZSwgZW1haWwsIHRva2VuLCB2YWxpZCkge1xuICBqc0Nvb2tpZS5zZXQoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICBqc0Nvb2tpZS5zZXQoJ2VtYWlsJywgZW1haWwpO1xuICBqc0Nvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4pO1xuICBqc0Nvb2tpZS5zZXQoJ3ZhbGlkJywgdmFsaWQpO1xuICBjb25zb2xlLmxvZygnQEAgc2V0VXNlckNvb2tpZSAoJysgdXNlcm5hbWUgKyAnLCAnICsgZW1haWwgKyAnLCAnICsgdG9rZW4gKyAnLCAnICsgdmFsaWQgKyAnKScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJVc2VyQ29va2llKCkge1xuICBqc0Nvb2tpZS5yZW1vdmUoJ3VzZXJuYW1lJyk7XG4gIGpzQ29va2llLnJlbW92ZSgnZW1haWwnKTtcbiAganNDb29raWUucmVtb3ZlKCd0b2tlbicpO1xuICBqc0Nvb2tpZS5yZW1vdmUoJ3ZhbGlkJyk7XG4gIGNvbnNvbGUubG9nKCdAQCBjbGVhclVzZXJDb29raWUgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXRVc2VyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiK2xvZ291dFVzZXJcIik7XG5cbiAgICBjbGVhclVzZXJDb29raWUoKTtcblxuICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgZmV0Y2goYmFja2VuZF9hZGRyZXNzICsgJy9yZXN0LWF1dGgvbG9nb3V0LycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICB9KVxuICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgXHQvL+WujOaIkFxuICAgICAgIFx0ICBpZiAoc3VjY2Vzcykge1xuICAgICAgIFx0ICAgICAgY29uc29sZS5sb2coJ2xvZ291dCBzdWNjZXNzJyk7XG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLWxvZ291dFVzZXIgc3VibWl0XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyUHJvZmlsZShrZXkpIHtcbiAgICBjb25zb2xlLmxvZyhcIitnZXRVc2VyUHJvZmlsZSAoXCIgKyBrZXkgKyBcIilcIik7XG5cbiAgICB2YXIgc3VjY2VzcyA9IGZhbHNlO1xuICAgIGZldGNoKGJhY2tlbmRfYWRkcmVzcyArICcvcmVzdC1hdXRoL3VzZXIvJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ1Rva2VuICcrIGtleVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIC8qXG4gICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgIH1cbiAgICAqL1xuICAgICAgIH0pXG4gICAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgIFx0Ly/lrozmiJBcbiAgICAgICBcdCAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICBcdCAgICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyUHJvZmlsZSBzdWNjZXNzLCB1c2VybmFtZTogJysgZGF0YS51c2VybmFtZSk7XG4gICAgICAgICAgICAgIHNldFVzZXJDb29raWUgKGRhdGEudXNlcm5hbWUsIGRhdGEuZW1haWwsIGtleSwgdHJ1ZSk7XG4gICAgICAgICAgICAgIC8vSGVhZGVyLmlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgLy8gcmVkaXJlY3QgdG8gaG9tZVxuICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xuICAgICAgIFx0ICAgICAgLy9oaXN0b3J5LnB1c2goXCIvXCIpOyAgLy8gZ28gdG8gcm9vdCBwYWdlXG4gICAgICAgXHQgLy8gICAgIHZhciB1c2VyX2dldCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ3VycmVudFVzZXInKSk7XG4gICAgICAgXHQgLy8gICAgIGNvbnNvbGUubG9nKFwiQEAgZW1haWw6IFwiICsgdXNlcl9nZXQuZW1haWwpO1xuICAgICAgIFx0IC8vICAgICBjb25zb2xlLmxvZyhcIkBAIGlzbG9nZ2VkSW46IFwiICsgdXNlcl9nZXQudmFsaWQpO1xuICAgICAgIFx0ICB9XG4gICAgICAgXHQgIGVsc2Uge1xuICAgICAgIFx0ICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgIFx0ICB9XG4gICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbGVkOiAnLCBlcnJvcik7XG4gICAgICAgfSkudGhlbihmdW5jdGlvbihlcnJvckRhdGEpe1xuICAgICAgICAgIC8v5aSx5pWXXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3JEYXRhKSk7XG4gICAgICAgfSk7XG5cbiAgICAgICBjb25zb2xlLmxvZyhcIi1nZXRVc2VyUHJvZmlsZSBzdWJtaXRcIik7XG59O1xuXG5mdW5jdGlvbiByZWd1bGFyUmVnaXN0ZXIoX2VtYWlsLCBfcHN3ZCkge1xuICBjb25zb2xlLmxvZyhcIitSZWdpc3RlciAocmVndWxhcikgc3VibWl0IChcIiArIF9lbWFpbCArIFwiLCBcIiArIF9wc3dkICtcIilcIik7XG59XG5cbmZ1bmN0aW9uIHJlZ3VsYXJMb2dpbihfZW1haWwsIF9wc3dkKSB7XG4gICAgY29uc29sZS5sb2coXCIrTG9naW4gKHJlZ3VsYXIpIHN1Ym1pdCAoXCIgKyBfZW1haWwgKyBcIiwgXCIgKyBfcHN3ZCArXCIpXCIpO1xuXG4gICAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgdXNlciBpbiBzZXNzaW9uIHN0b3JhZ2VcbiAgICAvLyBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiQ3VycmVudFVzZXJcIik7XG4gICAgLy9jb25zb2xlLmxvZyhcIkBAQEAgXCIrIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0N1cnJlbnRVc2VyJykpO1xuXG4gICAgdmFyIHRva2VuX2FjcXVpcmVkID0gZmFsc2U7XG4gICAgZmV0Y2goYmFja2VuZF9hZGRyZXNzICsgJy9yZXN0LWF1dGgvbG9naW4vJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOl9lbWFpbCwgcGFzc3dvcmQ6X3Bzd2R9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgfSlcbiAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgIFx0Ly/lrozmiJBcbiAgICAgICBcdCAgaWYgKHRva2VuX2FjcXVpcmVkKSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzcywga2V5OiAnKyBkYXRhLmtleSk7XG4gICAgICAgXHQgICAgICBnZXRVc2VyUHJvZmlsZShkYXRhLmtleSk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLUxvZ2luIChyZWd1bGFyKSBzdWJtaXRcIik7XG59O1xuXG5cbmZ1bmN0aW9uIGZhY2Vib29rTG9naW4oX2FjY2Vzc190b2tlbikge1xuICAgIGNvbnNvbGUubG9nKFwiK0xvZ2luIChmYWNlYm9vaykgc3VibWl0IChcIiArIF9hY2Nlc3NfdG9rZW4gKyBcIilcIik7XG5cbiAgICAvLyBjbGVhciB0aGUgY3VycmVudCB1c2VyIGluIHNlc3Npb24gc3RvcmFnZVxuICAgIGNsZWFyVXNlckNvb2tpZSgpO1xuXG4gICAgdmFyIHRva2VuX2FjcXVpcmVkID0gZmFsc2U7XG4gICAgZmV0Y2goYmFja2VuZF9hZGRyZXNzICsgJy9yZXN0LWF1dGgvZmFjZWJvb2svJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGFjY2Vzc190b2tlbjpfYWNjZXNzX3Rva2VufSlcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgdG9rZW5fYWNxdWlyZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG9rZW5fYWNxdWlyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgIH0pXG4gICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICBcdC8v5a6M5oiQXG4gICAgICAgXHQgIGlmICh0b2tlbl9hY3F1aXJlZCkge1xuICAgICAgIFx0ICAgICAgY29uc29sZS5sb2coJ2xvZ2luIHN1Y2Nlc3MsIGtleTogJysgZGF0YS5rZXkpO1xuICAgICAgIFx0ICAgICAgZ2V0VXNlclByb2ZpbGUoZGF0YS5rZXkpO1xuICAgICAgIFx0ICB9XG4gICAgICAgXHQgIGVsc2Uge1xuICAgICAgIFx0ICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgIFx0ICB9XG4gICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgY29uc29sZS5sb2coJ3JlcXVlc3QgZmFpbGVkOiAnLCBlcnJvcik7XG4gICAgICAgfSkudGhlbihmdW5jdGlvbihlcnJvckRhdGEpe1xuICAgICAgICAgIC8v5aSx5pWXXG4gICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZXJyb3JEYXRhKSk7XG4gICAgICAgfSk7XG5cbiAgICAgICBjb25zb2xlLmxvZyhcIi1Mb2dpbiAoZmFjZWJvb2spXCIpO1xufTtcblxuZnVuY3Rpb24gZ29vZ2xlTG9naW4oX2FjY2Vzc190b2tlbikge1xuICAgIGNvbnNvbGUubG9nKFwiK0xvZ2luIChHb29nbGUpIHN1Ym1pdCAoXCIgKyBfYWNjZXNzX3Rva2VuICsgXCIpXCIpO1xuXG4gICAgLy8gY2xlYXIgdGhlIGN1cnJlbnQgdXNlciBpbiBzZXNzaW9uIHN0b3JhZ2VcbiAgICBjbGVhclVzZXJDb29raWUoKTtcblxuICAgIHZhciB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgIGZldGNoKGJhY2tlbmRfYWRkcmVzcyArICcvcmVzdC1hdXRoL2dvb2dsZS8nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYWNjZXNzX3Rva2VuOl9hY2Nlc3NfdG9rZW59KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgfSlcbiAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgIFx0Ly/lrozmiJBcbiAgICAgICBcdCAgaWYgKHRva2VuX2FjcXVpcmVkKSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzcywga2V5OiAnKyBkYXRhLmtleSk7XG4gICAgICAgXHQgICAgICBnZXRVc2VyUHJvZmlsZShkYXRhLmtleSk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLUxvZ2luIChHb29nbGUpXCIpO1xufTtcblxuY2xhc3MgTG9naW5EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgZml4ZWRJbmRleDogMCxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbi8vICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUxvZ2luU3VibWl0ID0gdGhpcy5oYW5kbGVMb2dpblN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2lnbnVwU3VibWl0ID0gdGhpcy5oYW5kbGVTaWdudXBTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnQgPSBwcm9wcy50XG4gICAgY29uc29sZS5sb2coJ0xvZ2luRGlhbG9nJyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBpbml0IGZhY2Vib29rIGFwaVxuICAgIHdpbmRvdy5mYkFzeW5jSW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgd2luZG93LkZCLmluaXQoe1xuICAgICAgICBhcHBJZCAgICAgICAgICAgIDogJzk2MjIxMjkyMDU3Mjg2MCcsXG4gICAgICAgIGF1dG9Mb2dBcHBFdmVudHMgOiB0cnVlLFxuICAgICAgICB4ZmJtbCAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgdmVyc2lvbiAgICAgICAgICA6ICd2Mi4xMCdcbiAgICAgIH0pO1xuICAgICAgd2luZG93LkZCLkFwcEV2ZW50cy5sb2dQYWdlVmlldygpO1xuICAgIH07XG5cbiAgICAoZnVuY3Rpb24oZCwgcywgaWQpe1xuICAgICAgIHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcbiAgICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHtyZXR1cm47fVxuICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7IGpzLmlkID0gaWQ7XG4gICAgICBqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXCI7XG4gICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XG4gICAgfShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcbiAgfVxuXG4gIGhhbmRsZUZpeGVkVGFiQ2hhbmdlID0gKGluZGV4KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Zml4ZWRJbmRleDogaW5kZXh9KTtcbiAgfTtcblxuICBvbkdvb2dsZVNpZ25JbkZhaWx1cmUgKHJlc3BvbnNlKSB7XG4gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgfVxuXG4gIG9uR29vZ2xlU2lnbkluU3VjY2Vzcyhnb29nbGVVc2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnK29uR29vZ2xlU2lnbkluU3VjY2VzcycpO1xuICAgICAgdmFyIHByb2ZpbGUgPSBnb29nbGVVc2VyLmdldEJhc2ljUHJvZmlsZSgpO1xuICAgICAgY29uc29sZS5sb2coJ0lEOiAnICsgcHJvZmlsZS5nZXRJZCgpKTsgLy8gRG8gbm90IHNlbmQgdG8geW91ciBiYWNrZW5kISBVc2UgYW4gSUQgdG9rZW4gaW5zdGVhZC5cbiAgICAgIGNvbnNvbGUubG9nKCdOYW1lOiAnICsgcHJvZmlsZS5nZXROYW1lKCkpO1xuICAgICAgY29uc29sZS5sb2coJ0ltYWdlIFVSTDogJyArIHByb2ZpbGUuZ2V0SW1hZ2VVcmwoKSk7XG4gICAgICBjb25zb2xlLmxvZygnRW1haWw6ICcgKyBwcm9maWxlLmdldEVtYWlsKCkpOyAvLyBUaGlzIGlzIG51bGwgaWYgdGhlICdlbWFpbCcgc2NvcGUgaXMgbm90IHByZXNlbnQuXG5cbiAgICAgIHZhciBpZF90b2tlbiA9IGdvb2dsZVVzZXIuZ2V0QXV0aFJlc3BvbnNlKCkuaWRfdG9rZW47XG4gICAgICBjb25zb2xlLmxvZygnaWQgdG9rZW46ICcgKyBpZF90b2tlbik7XG5cbiAgICAgIHZhciBhY2Nlc3NfdG9rZW4gPSBnb29nbGVVc2VyLmdldEF1dGhSZXNwb25zZSgpLmFjY2Vzc190b2tlbjtcbiAgICAgIGNvbnNvbGUubG9nKCdhY2Nlc3MgdG9rZW46ICcgKyBhY2Nlc3NfdG9rZW4pO1xuXG4gICAgICBnb29nbGVMb2dpbihhY2Nlc3NfdG9rZW4pO1xuICB9XG5cbi8qXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC52YWx1ZTtcbiAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIFtuYW1lXTogdmFsdWVcbiAgICB9KTtcbiAgfVxuKi9cblxuICBoYW5kbGVDaGFuZ2UgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsuLi50aGlzLnN0YXRlLCBbbmFtZV06IHZhbHVlfSk7XG4gIH07XG5cbiAgaGFuZGxlTG9naW5TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsLmxlbmd0aCA9PTAgfHwgdGhpcy5zdGF0ZS5wYXNzd29yZC5sZW5ndGggPT0gMCkge1xuICAgICAgY29uc29sZS5sb2coJ0BAIGludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVndWxhckxvZ2luKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICB9XG5cbiAgaGFuZGxlU2lnbnVwU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbC5sZW5ndGggPT0wIHx8IHRoaXMuc3RhdGUucGFzc3dvcmQubGVuZ3RoID09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdAQCBpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZ3VsYXJSZWdpc3Rlcih0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKTtcbiAgfVxuXG4gIGhhbmRsZUZCTG9naW4oKSB7XG4gICAgICBjb25zb2xlLmxvZygnK2hhbmRsZUZCTG9naW4nKTtcbiAgICAgIHdpbmRvdy5GQi5sb2dpbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWxjb21lLCByZXRyaWV2aW5nIHlvdXIgaW5mb3JtYXRpb24uLi5cIik7XG4gICAgICAgICAgICAgIHdpbmRvdy5GQi5hcGkoJy9tZScsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvb2QgdG8gc2VlIHlvdSwgXCIgKyByZXNwb25zZS5uYW1lICsgXCIuXCIpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICB2YXIgYWNjZXNzX3Rva2VuID0gd2luZG93LkZCLmdldEF1dGhSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzX3Rva2VuLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgIGZhY2Vib29rTG9naW4oYWNjZXNzX3Rva2VuLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY2FuY2VsbGVkIGxvZ2luLi4uXCIpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHZhciBsb2dpbkJ0blN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTVBQTAwJyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICB9O1xuICAgIHZhciBmYkxvZ2luQnRuU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIC8vICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2I1OTk4JyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAvLyAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICB9O1xuICAgIHZhciBnb29nbGVMb2dpbkJ0blN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzM4cHgnLFxuICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNkZDRiMzknLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBtYXJnaW5Ub3A6ICc1cHgnXG4gICAgLy8gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgfTtcbiAgICB2YXIgc2lnbnVwQnRuU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NUFBMDAnLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgIH07XG4gICAgdmFyIG5vcm1hbExvZ2luRGl2U3R5bGUgPSB7XG4gICAgLy8gIGJvcmRlcjonc29saWQgMXB4IHJlZCdcbiAgICB9O1xuICAgIHZhciBzb2NpYWxMb2dpbkRpdlN0eWxlID0ge1xuICAgIC8vICBib3JkZXI6J3NvbGlkIDFweCBibHVlJ1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayBocmVmPScvc3RhdGljL3RoZW1lLmNzcycgcmVsPSdzdHlsZXNoZWV0JyAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8RGlhbG9nXG4gICAgICBhY3Rpb25zPXt0aGlzLnByb3BzLmFjdGlvbnN9XG4gICAgICBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlfVxuICAgICAgb25Fc2NLZXlEb3duPXt0aGlzLnByb3BzLm9uRXNjS2V5RG93bn1cbiAgICAgIG9uT3ZlcmxheUNsaWNrPXt0aGlzLnByb3BzLm9uT3ZlcmxheUNsaWNrfVxuICAgID5cbiAgICA8VGFicyBpbmRleD17dGhpcy5zdGF0ZS5maXhlZEluZGV4fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaXhlZFRhYkNoYW5nZX0gZml4ZWQ+XG4gICAgICA8VGFiIGxhYmVsPXt0aGlzLnQoJ2xvZ2luJyl9PlxuICAgICAgPGRpdiBzdHlsZT17bm9ybWFsTG9naW5EaXZTdHlsZX0+XG4gICAgICAgIDxoND5Mb2cgaW4gd2l0aCBlLW1haWw8L2g0PlxuICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbGFiZWw9J0VtYWlsIGFkZHJlc3MnIGljb249J21haWwnIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnZW1haWwnKX0vPlxuICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbGFiZWw9XCJQYXNzd29yZFwiIGljb249J2xvY2snIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAncGFzc3dvcmQnKX0vPlxuICAgICAgICA8QnV0dG9uIHJhaXNlZCBwcmltYXJ5IHN0eWxlPXtsb2dpbkJ0blN0eWxlfSAgb25DbGljaz17dGhpcy5oYW5kbGVMb2dpblN1Ym1pdH0+TG9naW48L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyIHN0eWxlPXt7d2lkdGg6JzEwMCUnLCBib3JkZXI6ICdzb2xpZCAxcHggI0RERERERCd9fSAvPlxuICAgICAgPGRpdiBzdHlsZT17c29jaWFsTG9naW5EaXZTdHlsZX0+XG4gICAgICAgIDxoND5Mb2cgaW4gd2l0aCBzb2NpYWwgbmV0d29yazwvaDQ+XG4gICAgICAgIDxCdXR0b24gcmFpc2VkIHByaW1hcnkgc3R5bGU9e2ZiTG9naW5CdG5TdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVGQkxvZ2lufT5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vay1zcXVhcmUgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgfVxuICAgICAgICAgIHsnIExvZ2luIHdpdGggZmFjZWJvb2snfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEdvb2dsZUxvZ2luIHN0eWxlPXtnb29nbGVMb2dpbkJ0blN0eWxlfSBjbGllbnRJZD1cIjE2MTE2MjIzODg4MC0wMGtoN2lsajlsdWNnNm8yNjdpcTJtZG83a2N2ZWxrNy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgb25TdWNjZXNzPXt0aGlzLm9uR29vZ2xlU2lnbkluU3VjY2Vzc31cbiAgICAgICAgICBvbkZhaWx1cmU9e3RoaXMub25Hb29nbGVTaWduSW5GYWlsdXJlfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgIC8vIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPnsnIExvZ2luIHdpdGggR29vZ2xlJ31cbiAgICAgICAgICB9XG4gICAgICAgIDwvR29vZ2xlTG9naW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvVGFiPlxuICAgICAgPFRhYiBsYWJlbD17dGhpcy50KCdzaWdudXAnKX0+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgeyAvKjxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz4gKi8gfVxuICAgICAgICA8SW5wdXQgdHlwZT0nZW1haWwnIGxhYmVsPSdFbWFpbCBhZGRyZXNzJyBpY29uPSdtYWlsJyByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2VtYWlsJyl9IC8+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD1cIlBhc3N3b3JkXCIgaWNvbj0nbG9jaycgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdwYXNzd29yZCcpfS8+XG4gICAgICAgIDxCdXR0b24gcmFpc2VkIGZsb2F0aW5nIHN0eWxlPXtzaWdudXBCdG5TdHlsZX0gb25DbGljaz17dGhpcy5oYW5kbGVTaWdudXBTdWJtaXR9PlNpZ24gVXA8L0J1dHRvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvVGFiPlxuICAgIDwvVGFicz5cblxuICA8c3R5bGUganN4PntgXG4gICAgQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo0MDAsMzAwLDUwMCk7XG4gIGB9PC9zdHlsZT5cbiAgICA8L0RpYWxvZz5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcm5hbWU6IHN0YXRlLnVzZXJuYW1lLFxuICAgIGNvdW50OiBzdGF0ZS5jb3VudFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKSxcbiAgICBzZXRVc2VybmFtZTogYmluZEFjdGlvbkNyZWF0b3JzKHNldFVzZXJuYW1lLCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRlKFsnY29tbW9uJ10pKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKExvZ2luRGlhbG9nKSlcbiJdfQ== */\n/*@ sourceURL=components/loginDialog.js */'
      }))));
    }
  }]);

  return LoginDialog;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    count: state.count
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch),
    setUsername: (0, _redux.bindActionCreators)(_store.setUsername, dispatch)
  };
};

exports.default = (0, _reactI18next.translate)(['common'])((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginDialog));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW5EaWFsb2cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJSb3V0ZXIiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5pdFN0b3JlIiwiYWRkQ291bnQiLCJzZXRVc2VybmFtZSIsIndpdGhSZWR1eCIsIkdvb2dsZUxvZ2luIiwianNDb29raWUiLCJ0cmFuc2xhdGUiLCJQcm9wVHlwZXMiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiRGlhbG9nIiwiQnV0dG9uIiwiVGFiIiwiVGFicyIsIklucHV0IiwiYmFja2VuZF9hZGRyZXNzIiwic2V0VXNlckNvb2tpZSIsInVzZXJuYW1lIiwiZW1haWwiLCJ0b2tlbiIsInZhbGlkIiwic2V0IiwiY29uc29sZSIsImxvZyIsImNsZWFyVXNlckNvb2tpZSIsInJlbW92ZSIsImxvZ291dFVzZXIiLCJzdWNjZXNzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsImNoZWNrU3RhdHVzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsInB1c2giLCJjYXRjaCIsImVycm9yIiwiZXJyb3JEYXRhIiwiZ2V0VXNlclByb2ZpbGUiLCJrZXkiLCJyZWd1bGFyUmVnaXN0ZXIiLCJfZW1haWwiLCJfcHN3ZCIsInJlZ3VsYXJMb2dpbiIsInRva2VuX2FjcXVpcmVkIiwiYm9keSIsInBhc3N3b3JkIiwiZmFjZWJvb2tMb2dpbiIsIl9hY2Nlc3NfdG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJnb29nbGVMb2dpbiIsIkxvZ2luRGlhbG9nIiwicHJvcHMiLCJzdGF0ZSIsImZpeGVkSW5kZXgiLCJoYW5kbGVGaXhlZFRhYkNoYW5nZSIsImluZGV4Iiwic2V0U3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVMb2dpblN1Ym1pdCIsImJpbmQiLCJoYW5kbGVTaWdudXBTdWJtaXQiLCJ0Iiwid2luZG93IiwiZmJBc3luY0luaXQiLCJGQiIsImluaXQiLCJhcHBJZCIsImF1dG9Mb2dBcHBFdmVudHMiLCJ4ZmJtbCIsInZlcnNpb24iLCJBcHBFdmVudHMiLCJsb2dQYWdlVmlldyIsImQiLCJzIiwiaWQiLCJqcyIsImZqcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImRvY3VtZW50IiwiZ29vZ2xlVXNlciIsInByb2ZpbGUiLCJnZXRCYXNpY1Byb2ZpbGUiLCJnZXRJZCIsImdldE5hbWUiLCJnZXRJbWFnZVVybCIsImdldEVtYWlsIiwiaWRfdG9rZW4iLCJnZXRBdXRoUmVzcG9uc2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibG9naW4iLCJhdXRoUmVzcG9uc2UiLCJhcGkiLCJhY2Nlc3NUb2tlbiIsImxvZ2luQnRuU3R5bGUiLCJ3aWR0aCIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwidGV4dFRyYW5zZm9ybSIsImZiTG9naW5CdG5TdHlsZSIsImdvb2dsZUxvZ2luQnRuU3R5bGUiLCJoZWlnaHQiLCJib3JkZXIiLCJtYXJnaW5Ub3AiLCJzaWdudXBCdG5TdHlsZSIsIm5vcm1hbExvZ2luRGl2U3R5bGUiLCJzb2NpYWxMb2dpbkRpdlN0eWxlIiwiYWN0aW9ucyIsImFjdGl2ZSIsIm9uRXNjS2V5RG93biIsIm9uT3ZlcmxheUNsaWNrIiwiaGFuZGxlRkJMb2dpbiIsIm9uR29vZ2xlU2lnbkluU3VjY2VzcyIsIm9uR29vZ2xlU2lnbkluRmFpbHVyZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7O1FBd0JPLEFBQVM7UUFRVCxBQUFTO1FBUVQsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF4Q2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFVOztBQUM5QixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBR1A7QUFDQSxJQUFJLGtCQUFKLEFBQXNCLEFBR3RCOztBQUFPLHVCQUFBLEFBQXVCLFVBQXZCLEFBQWlDLE9BQWpDLEFBQXdDLE9BQXhDLEFBQStDLE9BQU8sQUFDM0Q7cUJBQUEsQUFBUyxJQUFULEFBQWEsWUFBYixBQUF5QixBQUN6QjtxQkFBQSxBQUFTLElBQVQsQUFBYSxTQUFiLEFBQXNCLEFBQ3RCO3FCQUFBLEFBQVMsSUFBVCxBQUFhLFNBQWIsQUFBc0IsQUFDdEI7cUJBQUEsQUFBUyxJQUFULEFBQWEsU0FBYixBQUFzQixBQUN0QjtVQUFBLEFBQVEsSUFBSSx1QkFBQSxBQUFzQixXQUF0QixBQUFpQyxPQUFqQyxBQUF3QyxRQUF4QyxBQUFnRCxPQUFoRCxBQUF1RCxRQUF2RCxBQUErRCxPQUEvRCxBQUFzRSxRQUFsRixBQUEwRixBQUMzRjtBQUVEOztBQUFPLDJCQUEyQixBQUNoQztxQkFBQSxBQUFTLE9BQVQsQUFBZ0IsQUFDaEI7cUJBQUEsQUFBUyxPQUFULEFBQWdCLEFBQ2hCO3FCQUFBLEFBQVMsT0FBVCxBQUFnQixBQUNoQjtxQkFBQSxBQUFTLE9BQVQsQUFBZ0IsQUFDaEI7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNiO0FBRUQ7O0FBQU8sc0JBQXNCLEFBQ3pCO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7QUFFQTs7TUFBSSxVQUFKLEFBQWMsQUFDZDtRQUFNLGtCQUFOLEFBQXdCO1lBQXNCLEFBQ2xDLEFBQ1I7O2dCQUFTLEFBQ0csQUFDVjtzQkFKTixBQUE4QyxBQUVqQyxBQUVTO0FBRlQsQUFDUDtBQUh3QyxBQUMxQyxLQURKLEFBT0MsS0FBSyxTQUFBLEFBQVMsWUFBVCxBQUFxQixVQUFVLEFBQ2pDO1FBQUksU0FBQSxBQUFTLFdBQWIsQUFBd0IsS0FBSyxBQUN6QjtnQkFBQSxBQUFVLEFBQ2I7QUFGRCxXQUVPLEFBQ0g7Z0JBQUEsQUFBVSxBQUNiO0FBQ0Q7V0FBTyxTQUFQLEFBQU8sQUFBUyxBQUNoQjtBQWRKLEtBQUEsQUFlRSxLQUFLLFVBQUEsQUFBUyxNQUFNLEFBQ2xCO0FBQ0U7UUFBQSxBQUFJLFNBQVMsQUFDVDtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7c0JBQUEsQUFBTyxLQUFQLEFBQVksQUFDWjtjQUFBLEFBQVEsSUFBSSx5QkFBWixBQUFZLEFBQWUsQUFDOUI7QUFKRCxXQUtLLEFBQ0Q7Y0FBQSxBQUFRLElBQUkseUJBQVosQUFBWSxBQUFlLEFBQzlCO0FBQ0g7QUF6QkosS0FBQSxBQXlCTSxNQUFNLFVBQUEsQUFBUyxPQUFPLEFBQ3JCO1lBQUEsQUFBUSxJQUFSLEFBQVksb0JBQVosQUFBZ0MsQUFDbkM7QUEzQkosS0FBQSxBQTJCTSxLQUFLLFVBQUEsQUFBUyxXQUFVLEFBQ3hCO0FBQ0E7WUFBQSxBQUFRLElBQUkseUJBQVosQUFBWSxBQUFlLEFBQzdCO0FBOUJKLEFBZ0NHOztVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2xCOzs7QUFFRCxTQUFBLEFBQVMsZUFBVCxBQUF3QixLQUFLLEFBQ3pCO1VBQUEsQUFBUSxJQUFJLHNCQUFBLEFBQXNCLE1BQWxDLEFBQXdDLEFBRXhDOztNQUFJLFVBQUosQUFBYyxBQUNkO1FBQU0sa0JBQU4sQUFBd0I7WUFBb0IsQUFDaEMsQUFDUjs7Z0JBQVMsQUFDRyxBQUNWO3NCQUZPLEFBRVMsQUFDaEI7dUJBQWlCLFdBTHZCLEFBQTRDLEFBRS9CLEFBR29CO0FBSHBCLEFBQ1A7QUFIc0MsQUFDeEMsS0FESixBQVFDLEtBQUssU0FBQSxBQUFTLFlBQVQsQUFBcUIsVUFBVSxBQUNqQztRQUFJLFNBQUEsQUFBUyxXQUFiLEFBQXdCLEtBQUssQUFDekI7Z0JBQUEsQUFBVSxBQUNiO0FBRkQsV0FFTyxBQUNIO2dCQUFBLEFBQVUsQUFDYjtBQUNEO1dBQU8sU0FBUCxBQUFPLEFBQVMsQUFDcEI7QUFPSTs7Ozs7OztBQXRCSixLQUFBLEFBdUJJLEtBQUssVUFBQSxBQUFTLE1BQU0sQUFDcEI7QUFDRTtRQUFBLEFBQUksU0FBUyxBQUNUO2NBQUEsQUFBUSxJQUFJLHVDQUFzQyxLQUFsRCxBQUF1RCxBQUN2RDtvQkFBZSxLQUFmLEFBQW9CLFVBQVUsS0FBOUIsQUFBbUMsT0FBbkMsQUFBMEMsS0FBMUMsQUFBK0MsQUFDL0M7QUFDQTtBQUNBO3NCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7QUFDTDtBQUNBO0FBQ0E7QUFDRTtBQVZELFdBV0ssQUFDRDtjQUFBLEFBQVEsSUFBSSx5QkFBWixBQUFZLEFBQWUsQUFDOUI7QUFDSDtBQXZDSixLQUFBLEFBdUNNLE1BQU0sVUFBQSxBQUFTLE9BQU8sQUFDckI7WUFBQSxBQUFRLElBQVIsQUFBWSxvQkFBWixBQUFnQyxBQUNuQztBQXpDSixLQUFBLEFBeUNNLEtBQUssVUFBQSxBQUFTLFdBQVUsQUFDeEI7QUFDQTtZQUFBLEFBQVEsSUFBSSx5QkFBWixBQUFZLEFBQWUsQUFDN0I7QUE1Q0osQUE4Q0c7O1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDbEI7OztBQUVELFNBQUEsQUFBUyxnQkFBVCxBQUF5QixRQUF6QixBQUFpQyxPQUFPLEFBQ3RDO1VBQUEsQUFBUSxJQUFJLGlDQUFBLEFBQWlDLFNBQWpDLEFBQTBDLE9BQTFDLEFBQWlELFFBQTdELEFBQW9FLEFBQ3JFOzs7QUFFRCxTQUFBLEFBQVMsYUFBVCxBQUFzQixRQUF0QixBQUE4QixPQUFPLEFBQ2pDO1VBQUEsQUFBUSxJQUFJLDhCQUFBLEFBQThCLFNBQTlCLEFBQXVDLE9BQXZDLEFBQThDLFFBQTFELEFBQWlFLEFBRWpFOztBQUNBO0FBQ0E7QUFFQTs7TUFBSSxpQkFBSixBQUFxQixBQUNyQjtRQUFNLGtCQUFOLEFBQXdCO1lBQXFCLEFBQ2pDLEFBQ1I7O2dCQUFTLEFBQ0csQUFDVjtzQkFKdUMsQUFFaEMsQUFFUyxBQUVsQjtBQUpTLEFBQ1A7VUFHSSx5QkFBZSxFQUFFLE9BQUYsQUFBUSxRQUFRLFVBTnpDLEFBQTZDLEFBTW5DLEFBQWUsQUFBeUI7QUFOTCxBQUN6QyxLQURKLEFBUUMsS0FBSyxTQUFBLEFBQVMsWUFBVCxBQUFxQixVQUFVLEFBQ2pDO1FBQUksU0FBQSxBQUFTLFdBQWIsQUFBd0IsS0FBSyxBQUN6Qjt1QkFBQSxBQUFpQixBQUNwQjtBQUZELFdBRU8sQUFDSDt1QkFBQSxBQUFpQixBQUNwQjtBQUNEO1dBQU8sU0FBUCxBQUFPLEFBQVMsQUFDaEI7QUFmSixLQUFBLEFBZ0JFLEtBQUssVUFBQSxBQUFTLE1BQU0sQUFDbEI7QUFDRTtRQUFBLEFBQUksZ0JBQWdCLEFBQ2hCO2NBQUEsQUFBUSxJQUFJLHlCQUF3QixLQUFwQyxBQUF5QyxBQUN6QztxQkFBZSxLQUFmLEFBQW9CLEFBQ3ZCO0FBSEQsV0FJSyxBQUNEO2NBQUEsQUFBUSxJQUFJLHlCQUFaLEFBQVksQUFBZSxBQUM5QjtBQUNIO0FBekJKLEtBQUEsQUF5Qk0sTUFBTSxVQUFBLEFBQVMsT0FBTyxBQUNyQjtZQUFBLEFBQVEsSUFBUixBQUFZLG9CQUFaLEFBQWdDLEFBQ25DO0FBM0JKLEtBQUEsQUEyQk0sS0FBSyxVQUFBLEFBQVMsV0FBVSxBQUN4QjtBQUNBO1lBQUEsQUFBUSxJQUFJLHlCQUFaLEFBQVksQUFBZSxBQUM3QjtBQTlCSixBQWdDRzs7VUFBQSxBQUFRLElBQVIsQUFBWSxBQUNsQjs7O0FBR0QsU0FBQSxBQUFTLGNBQVQsQUFBdUIsZUFBZSxBQUNsQztVQUFBLEFBQVEsSUFBSSwrQkFBQSxBQUErQixnQkFBM0MsQUFBMkQsQUFFM0Q7O0FBQ0E7QUFFQTs7TUFBSSxpQkFBSixBQUFxQixBQUNyQjtRQUFNLGtCQUFOLEFBQXdCO1lBQXdCLEFBQ3BDLEFBQ1I7O2dCQUFTLEFBQ0csQUFDVjtzQkFKMEMsQUFFbkMsQUFFUyxBQUVsQjtBQUpTLEFBQ1A7VUFHSSx5QkFBZSxFQUFFLGNBTjNCLEFBQWdELEFBTXRDLEFBQWUsQUFBZTtBQU5RLEFBQzVDLEtBREosQUFRQyxLQUFLLFNBQUEsQUFBUyxZQUFULEFBQXFCLFVBQVUsQUFDakM7UUFBSSxTQUFBLEFBQVMsV0FBYixBQUF3QixLQUFLLEFBQ3pCO3VCQUFBLEFBQWlCLEFBQ3BCO0FBRkQsV0FFTyxBQUNIO3VCQUFBLEFBQWlCLEFBQ3BCO0FBQ0Q7V0FBTyxTQUFQLEFBQU8sQUFBUyxBQUNoQjtBQWZKLEtBQUEsQUFnQkUsS0FBSyxVQUFBLEFBQVMsTUFBTSxBQUNsQjtBQUNFO1FBQUEsQUFBSSxnQkFBZ0IsQUFDaEI7Y0FBQSxBQUFRLElBQUkseUJBQXdCLEtBQXBDLEFBQXlDLEFBQ3pDO3FCQUFlLEtBQWYsQUFBb0IsQUFDdkI7QUFIRCxXQUlLLEFBQ0Q7Y0FBQSxBQUFRLElBQUkseUJBQVosQUFBWSxBQUFlLEFBQzlCO0FBQ0g7QUF6QkosS0FBQSxBQXlCTSxNQUFNLFVBQUEsQUFBUyxPQUFPLEFBQ3JCO1lBQUEsQUFBUSxJQUFSLEFBQVksb0JBQVosQUFBZ0MsQUFDbkM7QUEzQkosS0FBQSxBQTJCTSxLQUFLLFVBQUEsQUFBUyxXQUFVLEFBQ3hCO0FBQ0E7WUFBQSxBQUFRLElBQUkseUJBQVosQUFBWSxBQUFlLEFBQzdCO0FBOUJKLEFBZ0NHOztVQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2xCOzs7QUFFRCxTQUFBLEFBQVMsWUFBVCxBQUFxQixlQUFlLEFBQ2hDO1VBQUEsQUFBUSxJQUFJLDZCQUFBLEFBQTZCLGdCQUF6QyxBQUF5RCxBQUV6RDs7QUFDQTtBQUVBOztNQUFJLGlCQUFKLEFBQXFCLEFBQ3JCO1FBQU0sa0JBQU4sQUFBd0I7WUFBc0IsQUFDbEMsQUFDUjs7Z0JBQVMsQUFDRyxBQUNWO3NCQUp3QyxBQUVqQyxBQUVTLEFBRWxCO0FBSlMsQUFDUDtVQUdJLHlCQUFlLEVBQUUsY0FOM0IsQUFBOEMsQUFNcEMsQUFBZSxBQUFlO0FBTk0sQUFDMUMsS0FESixBQVFDLEtBQUssU0FBQSxBQUFTLFlBQVQsQUFBcUIsVUFBVSxBQUNqQztRQUFJLFNBQUEsQUFBUyxXQUFiLEFBQXdCLEtBQUssQUFDekI7dUJBQUEsQUFBaUIsQUFDcEI7QUFGRCxXQUVPLEFBQ0g7dUJBQUEsQUFBaUIsQUFDcEI7QUFDRDtXQUFPLFNBQVAsQUFBTyxBQUFTLEFBQ2hCO0FBZkosS0FBQSxBQWdCRSxLQUFLLFVBQUEsQUFBUyxNQUFNLEFBQ2xCO0FBQ0U7UUFBQSxBQUFJLGdCQUFnQixBQUNoQjtjQUFBLEFBQVEsSUFBSSx5QkFBd0IsS0FBcEMsQUFBeUMsQUFDekM7cUJBQWUsS0FBZixBQUFvQixBQUN2QjtBQUhELFdBSUssQUFDRDtjQUFBLEFBQVEsSUFBSSx5QkFBWixBQUFZLEFBQWUsQUFDOUI7QUFDSDtBQXpCSixLQUFBLEFBeUJNLE1BQU0sVUFBQSxBQUFTLE9BQU8sQUFDckI7WUFBQSxBQUFRLElBQVIsQUFBWSxvQkFBWixBQUFnQyxBQUNuQztBQTNCSixLQUFBLEFBMkJNLEtBQUssVUFBQSxBQUFTLFdBQVUsQUFDeEI7QUFDQTtZQUFBLEFBQVEsSUFBSSx5QkFBWixBQUFZLEFBQWUsQUFDN0I7QUE5QkosQUFnQ0c7O1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDbEI7OztJQUVLLEE7dUNBUUo7O3VCQUFBLEFBQVksT0FBTzt3Q0FFckI7O0FBRnFCO2dKQUFBLEFBQ1g7O1VBUFIsQUFNbUI7YUFOWCxBQUNDLEFBQ1A7Z0JBRk0sQUFFSSxBQUNWO2tCQUhNLEFBR00sQUFHSztBQU5YLEFBQ047O1VBS2lCLEFBOEJuQix1QkFBdUIsVUFBQSxBQUFDLE9BQVUsQUFDaEM7WUFBQSxBQUFLLFNBQVMsRUFBQyxZQUFmLEFBQWMsQUFBYSxBQUM1QjtBQWhDa0I7O1VBQUEsQUFtRW5CLGVBQWUsVUFBQSxBQUFDLE1BQUQsQUFBTyxPQUFVLEFBQzlCO1lBQUEsQUFBSyxvQ0FBYSxNQUFsQixBQUF1Qix5Q0FBdkIsQUFBK0IsTUFBL0IsQUFBc0MsQUFDdkM7QUFyRWtCLEFBR2pCOztVQUFBLEFBQUssb0JBQW9CLE1BQUEsQUFBSyxrQkFBTCxBQUF1QixLQUFoRCxBQUNBO1VBQUEsQUFBSyxxQkFBcUIsTUFBQSxBQUFLLG1CQUFMLEFBQXdCLEtBQWxELEFBQ0E7VUFBQSxBQUFLLElBQUksTUFBVCxBQUFlLEFBQ2Y7WUFBQSxBQUFRLElBTlMsQUFNakIsQUFBWTtXQUNiOzs7Ozt3Q0FFbUIsQUFDbEI7QUFDQTthQUFBLEFBQU8sY0FBYyxZQUFXLEFBQzlCO2VBQUEsQUFBTyxHQUFQLEFBQVU7aUJBQUssQUFDTSxBQUNuQjs0QkFGYSxBQUVNLEFBQ25CO2lCQUhhLEFBR00sQUFDbkI7bUJBSkYsQUFBZSxBQUlNLEFBRXJCO0FBTmUsQUFDYjtlQUtGLEFBQU8sR0FBUCxBQUFVLFVBQVYsQUFBb0IsQUFDckI7QUFSRCxBQVVDOztpQkFBQSxBQUFTLEdBQVQsQUFBWSxHQUFaLEFBQWUsSUFBRyxBQUNoQjtZQUFBLEFBQUk7WUFBSSxNQUFNLEVBQUEsQUFBRSxxQkFBRixBQUF1QixHQUFyQyxBQUFjLEFBQTBCLEFBQ3hDO1lBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixLQUFLLEFBQUM7QUFBUTtBQUNwQzthQUFLLEVBQUEsQUFBRSxjQUFQLEFBQUssQUFBZ0IsR0FBSSxHQUFBLEFBQUcsS0FBSCxBQUFRLEFBQ2pDO1dBQUEsQUFBRyxNQUFILEFBQVMsQUFDVDtZQUFBLEFBQUksV0FBSixBQUFlLGFBQWYsQUFBNEIsSUFBNUIsQUFBZ0MsQUFDakM7QUFOQSxTQUFBLEFBTUMsVUFORCxBQU1XLFVBTlosQUFBQyxBQU1xQixBQUN2Qjs7OzswQ0FNc0IsQSxVQUFVLEFBQzlCO2NBQUEsQUFBUSxJQUFSLEFBQVksQUFDZDs7OzswQyxBQUVxQjtjQUNsQixBQUFRLElBQVIsQUFBWSxBQUNaO1VBQUksVUFBVSxXQUFkLEFBQWMsQUFBVyxBQUN6QjtjQUFBLEFBQVEsSUFBSSxTQUFTLFFBSFMsQUFHOUIsQUFBcUIsQUFBUSxTQUhDLEFBQzlCLENBRXVDLEFBQ3ZDO2NBQUEsQUFBUSxJQUFJLFdBQVcsUUFBdkIsQUFBdUIsQUFBUSxBQUMvQjtjQUFBLEFBQVEsSUFBSSxnQkFBZ0IsUUFBNUIsQUFBNEIsQUFBUSxBQUNwQztjQUFBLEFBQVEsSUFBSSxZQUFZLFFBTk0sQUFNOUIsQUFBd0IsQUFBUSxhQUFhLEFBRTdDOztVQUFJLFdBQVcsV0FBQSxBQUFXLGtCQUExQixBQUE0QyxBQUM1QztjQUFBLEFBQVEsSUFBSSxlQUFaLEFBQTJCLEFBRTNCOztVQUFJLGVBQWUsV0FBQSxBQUFXLGtCQUE5QixBQUFnRCxBQUNoRDtjQUFBLEFBQVEsSUFBSSxtQkFBWixBQUErQixBQUUvQjs7a0JBQUEsQUFBWSxBQUNmO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7c0MsQUFnQm9CLE9BQU8sQUFDdkI7WUFBQSxBQUFNLEFBQ047VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsVUFBakIsQUFBMEIsS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsVUFBdkQsQUFBaUUsR0FBRyxBQUNsRTtnQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO0FBQ0Q7QUFDRDttQkFBYSxLQUFBLEFBQUssTUFBbEIsQUFBd0IsT0FBTyxLQUFBLEFBQUssTUFBcEMsQUFBMEMsQUFDM0M7Ozs7dUMsQUFFa0IsT0FBTyxBQUN4QjtZQUFBLEFBQU0sQUFDTjtVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixVQUFqQixBQUEwQixLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixVQUF2RCxBQUFpRSxHQUFHLEFBQ2xFO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFDRDtBQUNEO3NCQUFnQixLQUFBLEFBQUssTUFBckIsQUFBMkIsT0FBTyxLQUFBLEFBQUssTUFBdkMsQUFBNkMsQUFDOUM7Ozs7b0NBRWUsQUFDWjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7YUFBQSxBQUFPLEdBQVAsQUFBVSxNQUFNLFVBQUEsQUFBUyxVQUFVLEFBQy9CO1lBQUksU0FBSixBQUFhLGNBQWMsQUFDdkI7a0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtpQkFBQSxBQUFPLEdBQVAsQUFBVSxJQUFWLEFBQWMsT0FBTyxVQUFBLEFBQVMsVUFBVSxBQUNwQztvQkFBQSxBQUFRLElBQUksc0JBQXNCLFNBQXRCLEFBQStCLE9BQTNDLEFBQWtELEFBQ2xEO29CQUFBLEFBQVEsSUFBUixBQUFZLEFBRVo7O2dCQUFJLGVBQWUsT0FBQSxBQUFPLEdBQTFCLEFBQW1CLEFBQVUsQUFDN0I7b0JBQUEsQUFBUSxJQUFJLGFBQVosQUFBeUIsQUFDekI7MEJBQWMsYUFBZCxBQUEyQixBQUM5QjtBQVBELEFBUUg7QUFWRCxlQVdLLEFBQ0Q7a0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQUNKO0FBZkQsQUFnQkg7Ozs7NkJBR1MsQUFDUjtVQUFJO2VBQWdCLEFBQ1gsQUFDUDtlQUZrQixBQUVYLEFBQ1A7eUJBSGtCLEFBR0QsQUFDakI7dUJBSkYsQUFBb0IsQUFJSCxBQUVqQjtBQU5vQixBQUNsQjtVQUtFO2VBQWtCLEFBQ2IsQUFDVDtBQUNFO2VBSG9CLEFBR2IsQUFDUDt5QkFKb0IsQUFJSCxBQUNqQjt1QkFBZSxBQUNqQjtBQU5BLEFBQXNCLEFBUXRCO0FBUnNCLEFBQ3BCO1VBT0U7ZUFBc0IsQUFDakIsQUFDUDtnQkFGd0IsQUFFaEIsQUFDUjtlQUh3QixBQUdqQixBQUNQO3lCQUp3QixBQUlQLEFBQ2pCO3VCQUx3QixBQUtULEFBQ2Y7Z0JBTndCLEFBTWhCLEFBQ1I7bUJBQVcsQUFDYjtBQVJBLEFBQTBCLEFBVTFCO0FBVjBCLEFBQ3hCO1VBU0U7ZUFBaUIsQUFDWixBQUNQO2VBRm1CLEFBRVosQUFDUDt5QkFIbUIsQUFHRixBQUNqQjt1QkFKRixBQUFxQixBQUlKLEFBRWpCO0FBTnFCLEFBQ25CO1VBS0U7QUFBSixBQUEwQixBQUcxQjtBQUgwQixBQUMxQjtVQUVJO0FBQUosQUFBMEIsQUFJMUI7QUFKMEIsQUFDMUI7OzZCQUlBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0E7QUFEQTtBQUFBLE9BQUEsa0JBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsaURBQ1EsTUFBTixBQUFXLHFCQUFvQixLQUEvQixBQUFtQztvQkFBbkM7c0JBREYsQUFDRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLDJEQUEwRCxLQUFyRSxBQUF5RTtvQkFBekU7c0JBSEYsQUFDQSxBQUVFLEFBRUY7QUFGRTsyQkFFRixBQUFDLHlDQUFELEFBQWUsQUFBTztvQkFBdEI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUM7aUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ3BCO2dCQUFRLEtBQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ25CO3NCQUFjLEtBQUEsQUFBSyxNQUhyQixBQUcyQixBQUN6Qjt3QkFBZ0IsS0FBQSxBQUFLLE1BSnZCLEFBSTZCOztvQkFKN0I7c0JBQUEsQUFNQTtBQU5BO0FBQ0UseUJBS0YsQUFBQyxnQ0FBSyxPQUFPLEtBQUEsQUFBSyxNQUFsQixBQUF3QixZQUFZLFVBQVUsS0FBOUMsQUFBbUQsc0JBQXNCLE9BQXpFO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLCtCQUFJLE9BQU8sS0FBQSxBQUFLLEVBQWpCLEFBQVksQUFBTztvQkFBbkI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUEsU0FBSyxPQUFMLEFBQVksaUNBQVo7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsdUNBQUEsQUFBQyxpQ0FBTSxNQUFQLEFBQVksU0FBUSxPQUFwQixBQUEwQixpQkFBZ0IsTUFBMUMsQUFBK0MsUUFBTyxVQUF0RCxNQUErRCxPQUFPLEtBQUEsQUFBSyxNQUEzRSxBQUFpRixPQUFPLFVBQVUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsS0FBbEIsQUFBdUIsTUFBekgsQUFBa0csQUFBNkI7b0JBQS9IO3NCQUZGLEFBRUUsQUFDQTtBQURBOzBCQUNBLEFBQUMsaUNBQU0sTUFBUCxBQUFZLFlBQVcsT0FBdkIsQUFBNkIsWUFBVyxNQUF4QyxBQUE2QyxRQUFPLFVBQXBELE1BQTZELE9BQU8sS0FBQSxBQUFLLE1BQXpFLEFBQStFLFVBQVUsVUFBVSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUFsQixBQUF1QixNQUExSCxBQUFtRyxBQUE2QjtvQkFBaEk7c0JBSEYsQUFHRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxrQ0FBTyxRQUFSLE1BQWUsU0FBZixNQUF1QixPQUF2QixBQUE4QixlQUFnQixTQUFTLEtBQXZELEFBQTREO29CQUE1RDtzQkFBQTtBQUFBO1NBTEYsQUFDQSxBQUlFLEFBRUYsaURBQUksT0FBTyxFQUFDLE9BQUQsQUFBTyxRQUFRLFFBQTFCLEFBQVcsQUFBdUIsbUNBQWxDOztvQkFBQTtzQkFQQSxBQU9BLEFBQ0E7QUFEQTswQkFDQSxjQUFBLFNBQUssT0FBTCxBQUFZLGlDQUFaOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTtvQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLCtDQUFBLEFBQUMsa0NBQU8sUUFBUixNQUFlLFNBQWYsTUFBdUIsT0FBdkIsQUFBOEIsaUJBQWlCLFNBQVMsS0FBeEQsQUFBNkQ7b0JBQTdEO3NCQUFBLEFBSUc7QUFKSDtTQUZGLEFBRUUsQUFNQSx5Q0FBQSxBQUFDLDRDQUFZLE9BQWIsQUFBb0IscUJBQXFCLFVBQXpDLEFBQWtELEFBQ2hEO21CQUFXLEtBRGIsQUFDa0IsQUFDaEI7bUJBQVcsS0FGYixBQUVrQjtvQkFGbEI7c0JBakJKLEFBQ0UsQUFRQSxBQVFFLEFBU0Y7QUFURTs0QkFTRixBQUFDLCtCQUFJLE9BQU8sS0FBQSxBQUFLLEVBQWpCLEFBQVksQUFBTztvQkFBbkI7c0JBQUEsQUFDQTtBQURBO3lCQUNBLGNBQUE7b0JBQUE7O29CQUFBO3NCQUFBLEFBRUU7QUFGRjtBQUFBLHlCQUVFLEFBQUMsaUNBQU0sTUFBUCxBQUFZLFNBQVEsT0FBcEIsQUFBMEIsaUJBQWdCLE1BQTFDLEFBQStDLFFBQU8sVUFBdEQsTUFBK0QsT0FBTyxLQUFBLEFBQUssTUFBM0UsQUFBaUYsT0FBTyxVQUFVLEtBQUEsQUFBSyxhQUFMLEFBQWtCLEtBQWxCLEFBQXVCLE1BQXpILEFBQWtHLEFBQTZCO29CQUEvSDtzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGlDQUFNLE1BQVAsQUFBWSxZQUFXLE9BQXZCLEFBQTZCLFlBQVcsTUFBeEMsQUFBNkMsUUFBTyxVQUFwRCxNQUE2RCxPQUFPLEtBQUEsQUFBSyxNQUF6RSxBQUErRSxVQUFVLFVBQVUsS0FBQSxBQUFLLGFBQUwsQUFBa0IsS0FBbEIsQUFBdUIsTUFBMUgsQUFBbUcsQUFBNkI7b0JBQWhJO3NCQUhGLEFBR0UsQUFDQTtBQURBOzBCQUNBLEFBQUMsa0NBQU8sUUFBUixNQUFlLFVBQWYsTUFBd0IsT0FBeEIsQUFBK0IsZ0JBQWdCLFNBQVMsS0FBeEQsQUFBNkQ7b0JBQTdEO3NCQUFBO0FBQUE7U0FyQ0osQUFNQSxBQTBCRSxBQUNBLEFBSUU7aUJBckNKO2FBUEEsQUFDQSxBQUtBLEFBQ0EsQUFpREQ7QUFqREM7Ozs7O0VBbktzQixnQkFBTSxBOztBQXlOaEMsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFVLEFBQ2pDOztjQUNZLE1BREwsQUFDVyxBQUNoQjtXQUFPLE1BRlQsQUFBTyxBQUVRLEFBRWhCO0FBSlEsQUFDTDtBQUZKOztBQU9BLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztpQkFBYSxBQUFtQixtREFGbEMsQUFBTyxBQUVRLEFBQWdDLEFBRWhEO0FBSlEsQUFDTDtBQUZKLEFBT0E7O2tCQUFlLDZCQUFVLENBQVYsQUFBVSxBQUFDLFdBQVcseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBOUQsQUFBZSxBQUFzQixBQUE2QyIsImZpbGUiOiJsb2dpbkRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==