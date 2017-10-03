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

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _reactLoading = require('react-loading');

var _reactLoading2 = _interopRequireDefault(_reactLoading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/loginDialog.js';

var getUserProfile = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(key) {
    var response, result, data;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("+getUserProfile (" + key + ")");
            _context.next = 3;
            return fetch('http://localhost:8000/rest-auth/user/', {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + key
              }
            });

          case 3:
            response = _context.sent;
            result = false;
            _context.next = 7;
            return response.json();

          case 7:
            data = _context.sent;

            console.log(response.status);
            //console.log(data);
            if (response.status === 200) {
              console.log('getUserProfile success, username: ' + data.username);
              setUserCookie(data.username, data.email, key, true);
              //Header.isUserLoggedIn = true;
              // redirect to home
              _index2.default.push('/');
              result = true;
            } else {
              result = false;
            }

            console.log("-getUserProfile");
            return _context.abrupt('return', result);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUserProfile(_x) {
    return _ref.apply(this, arguments);
  };
}();

/*
function getUserProfile(key) {
    console.log("+getUserProfile (" + key + ")");

    var success = false;
    fetch(BACKEND_URL + '/rest-auth/user/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Token '+ key
        },
    })
    .then(function checkStatus(response) {
        if (response.status === 200) {
            success = true;
        } else {
            success = false;
        }
        return response.json();

       })
       .then(function(data) {
       	//完成
       	  if (success) {
       	      console.log('getUserProfile success, username: '+ data.username);
              setUserCookie (data.username, data.email, key, true);
              //Header.isUserLoggedIn = true;
              // redirect to home
              Router.push('/');
       	      //history.push("/");  // go to root page
       	 //     var user_get = JSON.parse(sessionStorage.getItem('CurrentUser'));
       	 //     console.log("@@ email: " + user_get.email);
       	 //     console.log("@@ isloggedIn: " + user_get.valid);
       	  }
       	  else {
       	      console.log(JSON.stringify(data));
       	  }
       }).catch(function(error) {
           console.log('request failed: ', error);
       }).then(function(errorData){
          //失敗
          console.log(JSON.stringify(errorData));
       });

       console.log("-getUserProfile submit");
};
*/

var regularRegister = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_email, _pswd) {
    var response, result, data;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log("+Register (regular) submit (" + _email + ", " + _pswd + ")");
            _context2.next = 3;
            return fetch('http://localhost:8000/rest-auth/registration/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: (0, _stringify2.default)({ email: _email, password1: _pswd, password2: _pswd })
            });

          case 3:
            response = _context2.sent;
            result = false;
            _context2.next = 7;
            return response.json();

          case 7:
            data = _context2.sent;

            console.log(response.status);
            //console.log(data);

            if (!(response.status === 200 || response.status === 201)) {
              _context2.next = 16;
              break;
            }

            console.log(data.key);
            _context2.next = 13;
            return getUserProfile(data.key);

          case 13:
            result = _context2.sent;
            _context2.next = 17;
            break;

          case 16:
            result = false;

          case 17:

            console.log("-Register (regular) submit");
            return _context2.abrupt('return', result);

          case 19:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function regularRegister(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
/*
function regularRegister(_email, _pswd) {
  console.log("+Register (regular) submit (" + _email + ", " + _pswd +")");
  // clear the current user in session storage
  // sessionStorage.removeItem("CurrentUser");
  //console.log("@@@@ "+ sessionStorage.getItem('CurrentUser'));

  var token_acquired = false;
  fetch(BACKEND_URL + '/rest-auth/registration/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email:_email, password1:_pswd, password2:_pswd})
  })
  .then(function checkStatus(response) {
      if (response.status === 200) {
          token_acquired = true;
      } else {
          token_acquired = false;
      }
      return response.json();
     })
   .then(function(data) {
      //完成
        if (token_acquired) {
            console.log('register success, key: '+ data.key);
            getUserProfile(data.key);
        }
        else {
            console.log(JSON.stringify(data));
        }
     }).catch(function(error) {
         console.log('request failed: ', error);
     }).then(function(errorData){
        //失敗
        console.log(JSON.stringify(errorData));
     });

     console.log("-Register (regular) submit");
}
*/

var regularLogin = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(_email, _pswd) {
    var response, result, data;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("+Login (regular) submit (" + _email + ", " + _pswd + ")");
            _context3.next = 3;
            return fetch('http://localhost:8000/rest-auth/login/', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: (0, _stringify2.default)({ email: _email, password: _pswd })
            });

          case 3:
            response = _context3.sent;
            result = false;
            _context3.next = 7;
            return response.json();

          case 7:
            data = _context3.sent;

            console.log(response.status);
            //console.log(data);

            if (!(response.status === 200)) {
              _context3.next = 16;
              break;
            }

            console.log(data.key);
            _context3.next = 13;
            return getUserProfile(data.key);

          case 13:
            result = _context3.sent;
            _context3.next = 17;
            break;

          case 16:
            result = false;

          case 17:

            console.log("-Login (regular) submit");
            return _context3.abrupt('return', result);

          case 19:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function regularLogin(_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}();
/*
function regularLogin(_email, _pswd) {
    console.log("+Login (regular) submit (" + _email + ", " + _pswd +")");
    var token_acquired = false;
    fetch(BACKEND_URL + '/rest-auth/login/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email:_email, password:_pswd})
    })
    .then(function checkStatus(response) {
        if (response.status === 200) {
            token_acquired = true;
        } else {
            token_acquired = false;
        }
        return response.json();
       })
     .then(function(data) {
       	//完成
       	  if (token_acquired) {
       	      console.log('login success, key: '+ data.key);
       	      getUserProfile(data.key);
       	  }
       	  else {
       	      console.log(JSON.stringify(data));
       	  }
       }).catch(function(error) {
           console.log('request failed: ', error);
       }).then(function(errorData){
          //失敗
          console.log(JSON.stringify(errorData));
       });

       console.log("-Login (regular) submit");
};
*/

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
  fetch('http://localhost:8000/rest-auth/logout/', {
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

function facebookLogin(_access_token) {
  console.log("+Login (facebook) submit (" + _access_token + ")");

  // clear the current user in session storage
  clearUserCookie();

  var token_acquired = false;
  fetch('http://localhost:8000/rest-auth/facebook/', {
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
  fetch('http://localhost:8000/rest-auth/google/', {
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
      fixedIndex: 0,
      loading: false
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
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.preventDefault();

                if (!(this.state.email.length == 0 || this.state.password.length == 0)) {
                  _context4.next = 4;
                  break;
                }

                console.log('@@ invalid email or password');
                return _context4.abrupt('return');

              case 4:

                this.setState({ loading: true });
                _context4.next = 7;
                return regularLogin(this.state.email, this.state.password);

              case 7:
                this.setState({ loading: false });

              case 8:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function handleLoginSubmit(_x6) {
        return _ref4.apply(this, arguments);
      }

      return handleLoginSubmit;
    }()
  }, {
    key: 'handleSignupSubmit',
    value: function () {
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(event) {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                event.preventDefault();

                if (!(this.state.email.length == 0 || this.state.password.length == 0)) {
                  _context5.next = 4;
                  break;
                }

                console.log('@@ invalid email or password');
                return _context5.abrupt('return');

              case 4:
                // in log-in state, show loading icon
                this.setState({ loading: true });
                _context5.next = 7;
                return regularRegister(this.state.email, this.state.password);

              case 7:
                this.setState({ loading: false });

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleSignupSubmit(_x7) {
        return _ref5.apply(this, arguments);
      }

      return handleSignupSubmit;
    }()
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
      var innerTabDivStyle = {
        //  border:'solid 1px blue',
        width: '80%',
        height: '80%',
        margin: '0 auto'
      };
      var normalLoginDivStyle = {
        //  border:'solid 1px red'
      };
      var socialLoginDivStyle = {
        //  border:'solid 1px blue'
      };
      var loadingIconStyle = {
        //  border:'solid 1px blue',
        width: '30px',
        height: '30px',
        margin: '0 auto',
        fill: '#FFF'
      };
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 559
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        }
      }, _react2.default.createElement('link', { href: '/static/theme.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 561
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 562
        }
      })), _react2.default.createElement(_ThemeProvider2.default, { theme: _theme2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 564
        }
      }, _react2.default.createElement(_Dialog2.default, {
        actions: this.props.actions,
        active: this.props.active,
        onEscKeyDown: this.props.onEscKeyDown,
        onOverlayClick: this.props.onOverlayClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 565
        }
      }, _react2.default.createElement('div', { style: innerTabDivStyle, 'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 571
        }
      }, _react2.default.createElement(_Tabs2.default, { index: this.state.fixedIndex, onChange: this.handleFixedTabChange, fixed: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 572
        }
      }, _react2.default.createElement(_Tab2.default, { label: this.t('login'), __source: {
          fileName: _jsxFileName,
          lineNumber: 573
        }
      }, _react2.default.createElement('div', { style: normalLoginDivStyle, 'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 574
        }
      }, _react2.default.createElement('h4', {
        'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 575
        }
      }, 'Log in with e-mail'), _react2.default.createElement(_Input2.default, { type: 'email', label: this.t('email_address'), icon: 'mail', required: true, value: this.state.email, onChange: this.handleChange.bind(this, 'email'), __source: {
          fileName: _jsxFileName,
          lineNumber: 576
        }
      }), _react2.default.createElement(_Input2.default, { type: 'password', label: this.t('password'), icon: 'lock', required: true, value: this.state.password, onChange: this.handleChange.bind(this, 'password'), __source: {
          fileName: _jsxFileName,
          lineNumber: 577
        }
      }), _react2.default.createElement(_Button2.default, { raised: true, primary: true, style: loginBtnStyle, onClick: this.handleLoginSubmit, disabled: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 578
        }
      }, this.state.loading ? _react2.default.createElement(_reactLoading2.default, { style: loadingIconStyle, type: 'spokes', delay: 100, __source: {
          fileName: _jsxFileName,
          lineNumber: 579
        }
      }) : this.t('login'))), _react2.default.createElement('hr', { style: { width: '100%', border: 'solid 1px #DDDDDD' }, 'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 582
        }
      }), _react2.default.createElement('div', { style: socialLoginDivStyle, 'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 583
        }
      }, _react2.default.createElement('h4', {
        'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 584
        }
      }, 'Log in with social network'), _react2.default.createElement(_Button2.default, { raised: true, primary: true, style: fbLoginBtnStyle, onClick: this.handleFBLogin, __source: {
          fileName: _jsxFileName,
          lineNumber: 585
        }
      }, ' ', this.t('login_facebook')), _react2.default.createElement(_reactGoogleLogin2.default, { style: googleLoginBtnStyle, clientId: '161162238880-00kh7ilj9lucg6o267iq2mdo7kcvelk7.apps.googleusercontent.com',
        onSuccess: this.onGoogleSignInSuccess,
        onFailure: this.onGoogleSignInFailure, __source: {
          fileName: _jsxFileName,
          lineNumber: 591
        }
      }, this.t('login_google')))), _react2.default.createElement(_Tab2.default, { label: this.t('signup'), __source: {
          fileName: _jsxFileName,
          lineNumber: 601
        }
      }, _react2.default.createElement('section', {
        'data-jsx': 668434752,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 602
        }
      }, _react2.default.createElement(_Input2.default, { type: 'email', label: this.t('email_address'), icon: 'mail', required: true, value: this.state.email, onChange: this.handleChange.bind(this, 'email'), __source: {
          fileName: _jsxFileName,
          lineNumber: 604
        }
      }), _react2.default.createElement(_Input2.default, { type: 'password', label: this.t('password'), icon: 'lock', required: true, value: this.state.password, onChange: this.handleChange.bind(this, 'password'), __source: {
          fileName: _jsxFileName,
          lineNumber: 605
        }
      }), _react2.default.createElement(_Button2.default, { raised: true, floating: true, style: signupBtnStyle, onClick: this.handleSignupSubmit, disabled: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 606
        }
      }, this.state.loading ? _react2.default.createElement(_reactLoading2.default, { style: loadingIconStyle, type: 'spokes', delay: 100, __source: {
          fileName: _jsxFileName,
          lineNumber: 607
        }
      }) : this.t('signup')))))), _react2.default.createElement(_style2.default, {
        styleId: 668434752,
        css: '@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW5EaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb21CYyxBQUU0RSIsImZpbGUiOiJjb21wb25lbnRzL2xvZ2luRGlhbG9nLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBpbml0U3RvcmUsIGFkZENvdW50LCBzZXRVc2VybmFtZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSAncmVhY3QtZ29vZ2xlLWxvZ2luJztcbmltcG9ydCBqc0Nvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICdyZWFjdC10b29sYm94L2xpYi9UaGVtZVByb3ZpZGVyJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0YXRpYy90aGVtZSdcbmltcG9ydCBEaWFsb2cgZnJvbSAncmVhY3QtdG9vbGJveC9saWIvZGlhbG9nL0RpYWxvZydcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtdG9vbGJveC9saWIvYnV0dG9uL0J1dHRvbidcbmltcG9ydCBUYWIgZnJvbSAncmVhY3QtdG9vbGJveC9saWIvdGFicy9UYWInXG5pbXBvcnQgVGFicyBmcm9tICdyZWFjdC10b29sYm94L2xpYi90YWJzL1RhYnMnXG5pbXBvcnQgSW5wdXQgZnJvbSAncmVhY3QtdG9vbGJveC9saWIvaW5wdXQvSW5wdXQnO1xuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nJztcblxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlckNvb2tpZSh1c2VybmFtZSwgZW1haWwsIHRva2VuLCB2YWxpZCkge1xuICBqc0Nvb2tpZS5zZXQoJ3VzZXJuYW1lJywgdXNlcm5hbWUpO1xuICBqc0Nvb2tpZS5zZXQoJ2VtYWlsJywgZW1haWwpO1xuICBqc0Nvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4pO1xuICBqc0Nvb2tpZS5zZXQoJ3ZhbGlkJywgdmFsaWQpO1xuICBjb25zb2xlLmxvZygnQEAgc2V0VXNlckNvb2tpZSAoJysgdXNlcm5hbWUgKyAnLCAnICsgZW1haWwgKyAnLCAnICsgdG9rZW4gKyAnLCAnICsgdmFsaWQgKyAnKScpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJVc2VyQ29va2llKCkge1xuICBqc0Nvb2tpZS5yZW1vdmUoJ3VzZXJuYW1lJyk7XG4gIGpzQ29va2llLnJlbW92ZSgnZW1haWwnKTtcbiAganNDb29raWUucmVtb3ZlKCd0b2tlbicpO1xuICBqc0Nvb2tpZS5yZW1vdmUoJ3ZhbGlkJyk7XG4gIGNvbnNvbGUubG9nKCdAQCBjbGVhclVzZXJDb29raWUgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dvdXRVc2VyKCkge1xuICAgIGNvbnNvbGUubG9nKFwiK2xvZ291dFVzZXJcIik7XG5cbiAgICBjbGVhclVzZXJDb29raWUoKTtcblxuICAgIHZhciBzdWNjZXNzID0gZmFsc2U7XG4gICAgZmV0Y2goQkFDS0VORF9VUkwgKyAnL3Jlc3QtYXV0aC9sb2dvdXQvJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgIH0pXG4gICAgIC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICBcdC8v5a6M5oiQXG4gICAgICAgXHQgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZygnbG9nb3V0IHN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgICBcdCAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICBcdCAgfVxuICAgICAgIFx0ICBlbHNlIHtcbiAgICAgICBcdCAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICBcdCAgfVxuICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWxlZDogJywgZXJyb3IpO1xuICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZXJyb3JEYXRhKXtcbiAgICAgICAgICAvL+WkseaVl1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yRGF0YSkpO1xuICAgICAgIH0pO1xuXG4gICAgICAgY29uc29sZS5sb2coXCItbG9nb3V0VXNlciBzdWJtaXRcIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJQcm9maWxlKGtleSkge1xuICAgIGNvbnNvbGUubG9nKFwiK2dldFVzZXJQcm9maWxlIChcIiArIGtleSArIFwiKVwiKTtcbiAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICcvcmVzdC1hdXRoL3VzZXIvJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ1Rva2VuICcrIGtleVxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdnZXRVc2VyUHJvZmlsZSBzdWNjZXNzLCB1c2VybmFtZTogJysgZGF0YS51c2VybmFtZSk7XG4gICAgICBzZXRVc2VyQ29va2llIChkYXRhLnVzZXJuYW1lLCBkYXRhLmVtYWlsLCBrZXksIHRydWUpO1xuICAgICAgLy9IZWFkZXIuaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgLy8gcmVkaXJlY3QgdG8gaG9tZVxuICAgICAgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCItZ2V0VXNlclByb2ZpbGVcIik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG4vKlxuZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGUoa2V5KSB7XG4gICAgY29uc29sZS5sb2coXCIrZ2V0VXNlclByb2ZpbGUgKFwiICsga2V5ICsgXCIpXCIpO1xuXG4gICAgdmFyIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICBmZXRjaChCQUNLRU5EX1VSTCArICcvcmVzdC1hdXRoL3VzZXIvJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ1Rva2VuICcrIGtleVxuICAgICAgICB9LFxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgfSlcbiAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgXHQvL+WujOaIkFxuICAgICAgIFx0ICBpZiAoc3VjY2Vzcykge1xuICAgICAgIFx0ICAgICAgY29uc29sZS5sb2coJ2dldFVzZXJQcm9maWxlIHN1Y2Nlc3MsIHVzZXJuYW1lOiAnKyBkYXRhLnVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgc2V0VXNlckNvb2tpZSAoZGF0YS51c2VybmFtZSwgZGF0YS5lbWFpbCwga2V5LCB0cnVlKTtcbiAgICAgICAgICAgICAgLy9IZWFkZXIuaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgICAgICAvLyByZWRpcmVjdCB0byBob21lXG4gICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgXHQgICAgICAvL2hpc3RvcnkucHVzaChcIi9cIik7ICAvLyBnbyB0byByb290IHBhZ2VcbiAgICAgICBcdCAvLyAgICAgdmFyIHVzZXJfZ2V0ID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDdXJyZW50VXNlcicpKTtcbiAgICAgICBcdCAvLyAgICAgY29uc29sZS5sb2coXCJAQCBlbWFpbDogXCIgKyB1c2VyX2dldC5lbWFpbCk7XG4gICAgICAgXHQgLy8gICAgIGNvbnNvbGUubG9nKFwiQEAgaXNsb2dnZWRJbjogXCIgKyB1c2VyX2dldC52YWxpZCk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLWdldFVzZXJQcm9maWxlIHN1Ym1pdFwiKTtcbn07XG4qL1xuXG5hc3luYyBmdW5jdGlvbiByZWd1bGFyUmVnaXN0ZXIoX2VtYWlsLCBfcHN3ZCkge1xuICBjb25zb2xlLmxvZyhcIitSZWdpc3RlciAocmVndWxhcikgc3VibWl0IChcIiArIF9lbWFpbCArIFwiLCBcIiArIF9wc3dkICtcIilcIik7XG4gIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJy9yZXN0LWF1dGgvcmVnaXN0cmF0aW9uLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6X2VtYWlsLCBwYXNzd29yZDE6X3Bzd2QsIHBhc3N3b3JkMjpfcHN3ZH0pXG4gIH0pO1xuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gIC8vY29uc29sZS5sb2coZGF0YSk7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCB8fFxuICAgICAgcmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpICAgLy8gMjAxOiBUaGUgcmVxdWVzdCBoYXMgYmVlbiBmdWxmaWxsZWQgYW5kIGhhcyByZXN1bHRlZCBpbiBvbmUgb3IgbW9yZSBuZXcgcmVzb3VyY2VzIGJlaW5nIGNyZWF0ZWQuXG4gIHtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmtleSk7XG4gICAgcmVzdWx0ID0gYXdhaXQgZ2V0VXNlclByb2ZpbGUoZGF0YS5rZXkpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJlc3VsdCA9IGZhbHNlO1xuICB9XG5cbiAgY29uc29sZS5sb2coXCItUmVnaXN0ZXIgKHJlZ3VsYXIpIHN1Ym1pdFwiKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qXG5mdW5jdGlvbiByZWd1bGFyUmVnaXN0ZXIoX2VtYWlsLCBfcHN3ZCkge1xuICBjb25zb2xlLmxvZyhcIitSZWdpc3RlciAocmVndWxhcikgc3VibWl0IChcIiArIF9lbWFpbCArIFwiLCBcIiArIF9wc3dkICtcIilcIik7XG4gIC8vIGNsZWFyIHRoZSBjdXJyZW50IHVzZXIgaW4gc2Vzc2lvbiBzdG9yYWdlXG4gIC8vIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJDdXJyZW50VXNlclwiKTtcbiAgLy9jb25zb2xlLmxvZyhcIkBAQEAgXCIrIHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0N1cnJlbnRVc2VyJykpO1xuXG4gIHZhciB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICBmZXRjaChCQUNLRU5EX1VSTCArICcvcmVzdC1hdXRoL3JlZ2lzdHJhdGlvbi8nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6X2VtYWlsLCBwYXNzd29yZDE6X3Bzd2QsIHBhc3N3b3JkMjpfcHN3ZH0pXG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uIGNoZWNrU3RhdHVzKHJlc3BvbnNlKSB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRva2VuX2FjcXVpcmVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICB9KVxuICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgLy/lrozmiJBcbiAgICAgICAgaWYgKHRva2VuX2FjcXVpcmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVnaXN0ZXIgc3VjY2Vzcywga2V5OiAnKyBkYXRhLmtleSk7XG4gICAgICAgICAgICBnZXRVc2VyUHJvZmlsZShkYXRhLmtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWxlZDogJywgZXJyb3IpO1xuICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgIC8v5aSx5pWXXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yRGF0YSkpO1xuICAgICB9KTtcblxuICAgICBjb25zb2xlLmxvZyhcIi1SZWdpc3RlciAocmVndWxhcikgc3VibWl0XCIpO1xufVxuKi9cblxuYXN5bmMgZnVuY3Rpb24gcmVndWxhckxvZ2luKF9lbWFpbCwgX3Bzd2QpIHtcbiAgY29uc29sZS5sb2coXCIrTG9naW4gKHJlZ3VsYXIpIHN1Ym1pdCAoXCIgKyBfZW1haWwgKyBcIiwgXCIgKyBfcHN3ZCArXCIpXCIpO1xuICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICcvcmVzdC1hdXRoL2xvZ2luLycsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6X2VtYWlsLCBwYXNzd29yZDpfcHN3ZH0pXG4gIH0pO1xuXG4gIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgdmFyIGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gIC8vY29uc29sZS5sb2coZGF0YSk7XG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMClcbiAge1xuICAgIGNvbnNvbGUubG9nKGRhdGEua2V5KTtcbiAgICByZXN1bHQgPSBhd2FpdCBnZXRVc2VyUHJvZmlsZShkYXRhLmtleSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmVzdWx0ID0gZmFsc2U7XG4gIH1cblxuICBjb25zb2xlLmxvZyhcIi1Mb2dpbiAocmVndWxhcikgc3VibWl0XCIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuLypcbmZ1bmN0aW9uIHJlZ3VsYXJMb2dpbihfZW1haWwsIF9wc3dkKSB7XG4gICAgY29uc29sZS5sb2coXCIrTG9naW4gKHJlZ3VsYXIpIHN1Ym1pdCAoXCIgKyBfZW1haWwgKyBcIiwgXCIgKyBfcHN3ZCArXCIpXCIpO1xuICAgIHZhciB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgIGZldGNoKEJBQ0tFTkRfVVJMICsgJy9yZXN0LWF1dGgvbG9naW4vJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOl9lbWFpbCwgcGFzc3dvcmQ6X3Bzd2R9KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgfSlcbiAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgIFx0Ly/lrozmiJBcbiAgICAgICBcdCAgaWYgKHRva2VuX2FjcXVpcmVkKSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzcywga2V5OiAnKyBkYXRhLmtleSk7XG4gICAgICAgXHQgICAgICBnZXRVc2VyUHJvZmlsZShkYXRhLmtleSk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLUxvZ2luIChyZWd1bGFyKSBzdWJtaXRcIik7XG59O1xuKi9cblxuZnVuY3Rpb24gZmFjZWJvb2tMb2dpbihfYWNjZXNzX3Rva2VuKSB7XG4gICAgY29uc29sZS5sb2coXCIrTG9naW4gKGZhY2Vib29rKSBzdWJtaXQgKFwiICsgX2FjY2Vzc190b2tlbiArIFwiKVwiKTtcblxuICAgIC8vIGNsZWFyIHRoZSBjdXJyZW50IHVzZXIgaW4gc2Vzc2lvbiBzdG9yYWdlXG4gICAgY2xlYXJVc2VyQ29va2llKCk7XG5cbiAgICB2YXIgdG9rZW5fYWNxdWlyZWQgPSBmYWxzZTtcbiAgICBmZXRjaChCQUNLRU5EX1VSTCArICcvcmVzdC1hdXRoL2ZhY2Vib29rLycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhY2Nlc3NfdG9rZW46X2FjY2Vzc190b2tlbn0pXG4gICAgfSlcbiAgICAudGhlbihmdW5jdGlvbiBjaGVja1N0YXR1cyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHRva2VuX2FjcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRva2VuX2FjcXVpcmVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICB9KVxuICAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgXHQvL+WujOaIkFxuICAgICAgIFx0ICBpZiAodG9rZW5fYWNxdWlyZWQpIHtcbiAgICAgICBcdCAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBzdWNjZXNzLCBrZXk6ICcrIGRhdGEua2V5KTtcbiAgICAgICBcdCAgICAgIGdldFVzZXJQcm9maWxlKGRhdGEua2V5KTtcbiAgICAgICBcdCAgfVxuICAgICAgIFx0ICBlbHNlIHtcbiAgICAgICBcdCAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICBcdCAgfVxuICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGZhaWxlZDogJywgZXJyb3IpO1xuICAgICAgIH0pLnRoZW4oZnVuY3Rpb24oZXJyb3JEYXRhKXtcbiAgICAgICAgICAvL+WkseaVl1xuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yRGF0YSkpO1xuICAgICAgIH0pO1xuXG4gICAgICAgY29uc29sZS5sb2coXCItTG9naW4gKGZhY2Vib29rKVwiKTtcbn07XG5cbmZ1bmN0aW9uIGdvb2dsZUxvZ2luKF9hY2Nlc3NfdG9rZW4pIHtcbiAgICBjb25zb2xlLmxvZyhcIitMb2dpbiAoR29vZ2xlKSBzdWJtaXQgKFwiICsgX2FjY2Vzc190b2tlbiArIFwiKVwiKTtcblxuICAgIC8vIGNsZWFyIHRoZSBjdXJyZW50IHVzZXIgaW4gc2Vzc2lvbiBzdG9yYWdlXG4gICAgY2xlYXJVc2VyQ29va2llKCk7XG5cbiAgICB2YXIgdG9rZW5fYWNxdWlyZWQgPSBmYWxzZTtcbiAgICBmZXRjaChCQUNLRU5EX1VSTCArICcvcmVzdC1hdXRoL2dvb2dsZS8nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYWNjZXNzX3Rva2VuOl9hY2Nlc3NfdG9rZW59KVxuICAgIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0b2tlbl9hY3F1aXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgfSlcbiAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgIFx0Ly/lrozmiJBcbiAgICAgICBcdCAgaWYgKHRva2VuX2FjcXVpcmVkKSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZygnbG9naW4gc3VjY2Vzcywga2V5OiAnKyBkYXRhLmtleSk7XG4gICAgICAgXHQgICAgICBnZXRVc2VyUHJvZmlsZShkYXRhLmtleSk7XG4gICAgICAgXHQgIH1cbiAgICAgICBcdCAgZWxzZSB7XG4gICAgICAgXHQgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgXHQgIH1cbiAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICBjb25zb2xlLmxvZygncmVxdWVzdCBmYWlsZWQ6ICcsIGVycm9yKTtcbiAgICAgICB9KS50aGVuKGZ1bmN0aW9uKGVycm9yRGF0YSl7XG4gICAgICAgICAgLy/lpLHmlZdcbiAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvckRhdGEpKTtcbiAgICAgICB9KTtcblxuICAgICAgIGNvbnNvbGUubG9nKFwiLUxvZ2luIChHb29nbGUpXCIpO1xufTtcblxuY2xhc3MgTG9naW5EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHN0YXRlID0ge1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gICAgZml4ZWRJbmRleDogMCxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbi8vICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUxvZ2luU3VibWl0ID0gdGhpcy5oYW5kbGVMb2dpblN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU2lnbnVwU3VibWl0ID0gdGhpcy5oYW5kbGVTaWdudXBTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLnQgPSBwcm9wcy50O1xuICAgIGNvbnNvbGUubG9nKCdMb2dpbkRpYWxvZycpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gaW5pdCBmYWNlYm9vayBhcGlcbiAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHdpbmRvdy5GQi5pbml0KHtcbiAgICAgICAgYXBwSWQgICAgICAgICAgICA6ICc5NjIyMTI5MjA1NzI4NjAnLFxuICAgICAgICBhdXRvTG9nQXBwRXZlbnRzIDogdHJ1ZSxcbiAgICAgICAgeGZibWwgICAgICAgICAgICA6IHRydWUsXG4gICAgICAgIHZlcnNpb24gICAgICAgICAgOiAndjIuMTAnXG4gICAgICB9KTtcbiAgICAgIHdpbmRvdy5GQi5BcHBFdmVudHMubG9nUGFnZVZpZXcoKTtcbiAgICB9O1xuXG4gICAgKGZ1bmN0aW9uKGQsIHMsIGlkKXtcbiAgICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XG4gICAgICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSB7cmV0dXJuO31cbiAgICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xuICAgICAganMuc3JjID0gXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1wiO1xuICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xuICAgIH0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XG4gIH1cblxuICBoYW5kbGVGaXhlZFRhYkNoYW5nZSA9IChpbmRleCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe2ZpeGVkSW5kZXg6IGluZGV4fSk7XG4gIH07XG5cbiAgb25Hb29nbGVTaWduSW5GYWlsdXJlIChyZXNwb25zZSkge1xuICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIH1cblxuICBvbkdvb2dsZVNpZ25JblN1Y2Nlc3MoZ29vZ2xlVXNlcikge1xuICAgICAgY29uc29sZS5sb2coJytvbkdvb2dsZVNpZ25JblN1Y2Nlc3MnKTtcbiAgICAgIHZhciBwcm9maWxlID0gZ29vZ2xlVXNlci5nZXRCYXNpY1Byb2ZpbGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKCdJRDogJyArIHByb2ZpbGUuZ2V0SWQoKSk7IC8vIERvIG5vdCBzZW5kIHRvIHlvdXIgYmFja2VuZCEgVXNlIGFuIElEIHRva2VuIGluc3RlYWQuXG4gICAgICBjb25zb2xlLmxvZygnTmFtZTogJyArIHByb2ZpbGUuZ2V0TmFtZSgpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdJbWFnZSBVUkw6ICcgKyBwcm9maWxlLmdldEltYWdlVXJsKCkpO1xuICAgICAgY29uc29sZS5sb2coJ0VtYWlsOiAnICsgcHJvZmlsZS5nZXRFbWFpbCgpKTsgLy8gVGhpcyBpcyBudWxsIGlmIHRoZSAnZW1haWwnIHNjb3BlIGlzIG5vdCBwcmVzZW50LlxuXG4gICAgICB2YXIgaWRfdG9rZW4gPSBnb29nbGVVc2VyLmdldEF1dGhSZXNwb25zZSgpLmlkX3Rva2VuO1xuICAgICAgY29uc29sZS5sb2coJ2lkIHRva2VuOiAnICsgaWRfdG9rZW4pO1xuXG4gICAgICB2YXIgYWNjZXNzX3Rva2VuID0gZ29vZ2xlVXNlci5nZXRBdXRoUmVzcG9uc2UoKS5hY2Nlc3NfdG9rZW47XG4gICAgICBjb25zb2xlLmxvZygnYWNjZXNzIHRva2VuOiAnICsgYWNjZXNzX3Rva2VuKTtcblxuICAgICAgZ29vZ2xlTG9naW4oYWNjZXNzX3Rva2VuKTtcbiAgfVxuXG4vKlxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlXG4gICAgfSk7XG4gIH1cbiovXG5cbiAgaGFuZGxlQ2hhbmdlID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Li4udGhpcy5zdGF0ZSwgW25hbWVdOiB2YWx1ZX0pO1xuICB9O1xuXG4gIGFzeW5jIGhhbmRsZUxvZ2luU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbC5sZW5ndGggPT0wIHx8IHRoaXMuc3RhdGUucGFzc3dvcmQubGVuZ3RoID09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKCdAQCBpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgYXdhaXQgcmVndWxhckxvZ2luKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVNpZ251cFN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMuc3RhdGUuZW1haWwubGVuZ3RoID09MCB8fCB0aGlzLnN0YXRlLnBhc3N3b3JkLmxlbmd0aCA9PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnQEAgaW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBpbiBsb2ctaW4gc3RhdGUsIHNob3cgbG9hZGluZyBpY29uXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSk7XG4gICAgYXdhaXQgcmVndWxhclJlZ2lzdGVyKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUZCTG9naW4oKSB7XG4gICAgICBjb25zb2xlLmxvZygnK2hhbmRsZUZCTG9naW4nKTtcbiAgICAgIHdpbmRvdy5GQi5sb2dpbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5hdXRoUmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJXZWxjb21lLCByZXRyaWV2aW5nIHlvdXIgaW5mb3JtYXRpb24uLi5cIik7XG4gICAgICAgICAgICAgIHdpbmRvdy5GQi5hcGkoJy9tZScsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdvb2QgdG8gc2VlIHlvdSwgXCIgKyByZXNwb25zZS5uYW1lICsgXCIuXCIpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgICB2YXIgYWNjZXNzX3Rva2VuID0gd2luZG93LkZCLmdldEF1dGhSZXNwb25zZSgpO1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzX3Rva2VuLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgICAgIGZhY2Vib29rTG9naW4oYWNjZXNzX3Rva2VuLmFjY2Vzc1Rva2VuKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVzZXIgY2FuY2VsbGVkIGxvZ2luLi4uXCIpO1xuICAgICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHZhciBsb2dpbkJ0blN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTVBQTAwJyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICB9O1xuICAgIHZhciBmYkxvZ2luQnRuU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIC8vICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjM2I1OTk4JyxcbiAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAvLyAgdmVydGljYWxBbGlnbjogJ21pZGRsZSdcbiAgICB9O1xuICAgIHZhciBnb29nbGVMb2dpbkJ0blN0eWxlID0ge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzM4cHgnLFxuICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNkZDRiMzknLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICBtYXJnaW5Ub3A6ICc1cHgnXG4gICAgLy8gIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gICAgfTtcbiAgICB2YXIgc2lnbnVwQnRuU3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NUFBMDAnLFxuICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgIH07XG4gICAgdmFyIGlubmVyVGFiRGl2U3R5bGUgPSB7XG4gICAgLy8gIGJvcmRlcjonc29saWQgMXB4IGJsdWUnLFxuICAgICAgd2lkdGg6ICc4MCUnLFxuICAgICAgaGVpZ2h0OiAnODAlJyxcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgfTtcbiAgICB2YXIgbm9ybWFsTG9naW5EaXZTdHlsZSA9IHtcbiAgICAvLyAgYm9yZGVyOidzb2xpZCAxcHggcmVkJ1xuICAgIH07XG4gICAgdmFyIHNvY2lhbExvZ2luRGl2U3R5bGUgPSB7XG4gICAgLy8gIGJvcmRlcjonc29saWQgMXB4IGJsdWUnXG4gICAgfTtcbiAgICB2YXIgbG9hZGluZ0ljb25TdHlsZSA9IHtcbiAgICAvLyAgYm9yZGVyOidzb2xpZCAxcHggYmx1ZScsXG4gICAgICB3aWR0aDogJzMwcHgnLFxuICAgICAgaGVpZ2h0OiAnMzBweCcsXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgZmlsbDogJyNGRkYnXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8bGluayBocmVmPScvc3RhdGljL3RoZW1lLmNzcycgcmVsPSdzdHlsZXNoZWV0JyAvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICA8RGlhbG9nXG4gICAgICBhY3Rpb25zPXt0aGlzLnByb3BzLmFjdGlvbnN9XG4gICAgICBhY3RpdmU9e3RoaXMucHJvcHMuYWN0aXZlfVxuICAgICAgb25Fc2NLZXlEb3duPXt0aGlzLnByb3BzLm9uRXNjS2V5RG93bn1cbiAgICAgIG9uT3ZlcmxheUNsaWNrPXt0aGlzLnByb3BzLm9uT3ZlcmxheUNsaWNrfVxuICAgID5cbiAgICA8ZGl2IHN0eWxlPXtpbm5lclRhYkRpdlN0eWxlfT5cbiAgICA8VGFicyBpbmRleD17dGhpcy5zdGF0ZS5maXhlZEluZGV4fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVGaXhlZFRhYkNoYW5nZX0gZml4ZWQ+XG4gICAgICA8VGFiIGxhYmVsPXt0aGlzLnQoJ2xvZ2luJyl9PlxuICAgICAgPGRpdiBzdHlsZT17bm9ybWFsTG9naW5EaXZTdHlsZX0+XG4gICAgICAgIDxoND5Mb2cgaW4gd2l0aCBlLW1haWw8L2g0PlxuICAgICAgICA8SW5wdXQgdHlwZT1cImVtYWlsXCIgbGFiZWw9e3RoaXMudCgnZW1haWxfYWRkcmVzcycpfSBpY29uPSdtYWlsJyByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2VtYWlsJyl9Lz5cbiAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIGxhYmVsPXt0aGlzLnQoJ3Bhc3N3b3JkJyl9IGljb249J2xvY2snIHJlcXVpcmVkIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAncGFzc3dvcmQnKX0vPlxuICAgICAgICA8QnV0dG9uIHJhaXNlZCBwcmltYXJ5IHN0eWxlPXtsb2dpbkJ0blN0eWxlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ2luU3VibWl0fSBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5sb2FkaW5nID8gPFJlYWN0TG9hZGluZyBzdHlsZT17bG9hZGluZ0ljb25TdHlsZX0gdHlwZT1cInNwb2tlc1wiIGRlbGF5PXsxMDB9IC8+IDogdGhpcy50KCdsb2dpbicpIH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxociBzdHlsZT17e3dpZHRoOicxMDAlJywgYm9yZGVyOiAnc29saWQgMXB4ICNEREREREQnfX0gLz5cbiAgICAgIDxkaXYgc3R5bGU9e3NvY2lhbExvZ2luRGl2U3R5bGV9PlxuICAgICAgICA8aDQ+TG9nIGluIHdpdGggc29jaWFsIG5ldHdvcms8L2g0PlxuICAgICAgICA8QnV0dG9uIHJhaXNlZCBwcmltYXJ5IHN0eWxlPXtmYkxvZ2luQnRuU3R5bGV9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlRkJMb2dpbn0+XG4gICAgICAgIHsnICd9e3RoaXMudCgnbG9naW5fZmFjZWJvb2snKX1cbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyA8aSBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9vay1zcXVhcmUgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEdvb2dsZUxvZ2luIHN0eWxlPXtnb29nbGVMb2dpbkJ0blN0eWxlfSBjbGllbnRJZD1cIjE2MTE2MjIzODg4MC0wMGtoN2lsajlsdWNnNm8yNjdpcTJtZG83a2N2ZWxrNy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgb25TdWNjZXNzPXt0aGlzLm9uR29vZ2xlU2lnbkluU3VjY2Vzc31cbiAgICAgICAgICBvbkZhaWx1cmU9e3RoaXMub25Hb29nbGVTaWduSW5GYWlsdXJlfT5cbiAgICAgICAgICB7XG4gICAgICAgICAgIC8vIDxpIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIH1cbiAgICAgICAgICB7dGhpcy50KCdsb2dpbl9nb29nbGUnKX1cbiAgICAgICAgPC9Hb29nbGVMb2dpbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPC9UYWI+XG4gICAgICA8VGFiIGxhYmVsPXt0aGlzLnQoJ3NpZ251cCcpfT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICB7IC8qPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgcmVxdWlyZWQgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0vPiAqLyB9XG4gICAgICAgIDxJbnB1dCB0eXBlPSdlbWFpbCcgbGFiZWw9e3RoaXMudCgnZW1haWxfYWRkcmVzcycpfSBpY29uPSdtYWlsJyByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ2VtYWlsJyl9IC8+XG4gICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBsYWJlbD17dGhpcy50KCdwYXNzd29yZCcpfSBpY29uPSdsb2NrJyByZXF1aXJlZCB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ3Bhc3N3b3JkJyl9Lz5cbiAgICAgICAgPEJ1dHRvbiByYWlzZWQgZmxvYXRpbmcgc3R5bGU9e3NpZ251cEJ0blN0eWxlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVNpZ251cFN1Ym1pdH0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUubG9hZGluZyA/IDxSZWFjdExvYWRpbmcgc3R5bGU9e2xvYWRpbmdJY29uU3R5bGV9IHR5cGU9XCJzcG9rZXNcIiBkZWxheT17MTAwfSAvPiA6IHRoaXMudCgnc2lnbnVwJykgfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvVGFiPlxuICAgIDwvVGFicz5cbiAgICA8L2Rpdj5cbiAgPHN0eWxlIGpzeD57YFxuICAgIEBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDMwMCw1MDApO1xuICBgfTwvc3R5bGU+XG4gICAgPC9EaWFsb2c+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuXG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOiBzdGF0ZS51c2VybmFtZSxcbiAgICBjb3VudDogc3RhdGUuY291bnRcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRDb3VudDogYmluZEFjdGlvbkNyZWF0b3JzKGFkZENvdW50LCBkaXNwYXRjaCksXG4gICAgc2V0VXNlcm5hbWU6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VybmFtZSwgZGlzcGF0Y2gpLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0ZShbJ2NvbW1vbiddKShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShMb2dpbkRpYWxvZykpXG4iXX0= */\n/*@ sourceURL=components/loginDialog.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9naW5EaWFsb2cuanMiXSwibmFtZXMiOlsia2V5IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJ1c2VybmFtZSIsInNldFVzZXJDb29raWUiLCJlbWFpbCIsIlJvdXRlciIsInB1c2giLCJnZXRVc2VyUHJvZmlsZSIsIl9lbWFpbCIsIl9wc3dkIiwiYm9keSIsInBhc3N3b3JkMSIsInBhc3N3b3JkMiIsInJlZ3VsYXJSZWdpc3RlciIsInBhc3N3b3JkIiwicmVndWxhckxvZ2luIiwiUmVhY3QiLCJjb25uZWN0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5pdFN0b3JlIiwiYWRkQ291bnQiLCJzZXRVc2VybmFtZSIsIndpdGhSZWR1eCIsIkdvb2dsZUxvZ2luIiwianNDb29raWUiLCJ0cmFuc2xhdGUiLCJQcm9wVHlwZXMiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsInRoZW1lIiwiRGlhbG9nIiwiQnV0dG9uIiwiVGFiIiwiVGFicyIsIklucHV0IiwiUmVhY3RMb2FkaW5nIiwidG9rZW4iLCJ2YWxpZCIsInNldCIsImNsZWFyVXNlckNvb2tpZSIsInJlbW92ZSIsImxvZ291dFVzZXIiLCJzdWNjZXNzIiwidGhlbiIsImNoZWNrU3RhdHVzIiwiY2F0Y2giLCJlcnJvciIsImVycm9yRGF0YSIsImZhY2Vib29rTG9naW4iLCJfYWNjZXNzX3Rva2VuIiwidG9rZW5fYWNxdWlyZWQiLCJhY2Nlc3NfdG9rZW4iLCJnb29nbGVMb2dpbiIsIkxvZ2luRGlhbG9nIiwicHJvcHMiLCJzdGF0ZSIsImZpeGVkSW5kZXgiLCJsb2FkaW5nIiwiaGFuZGxlRml4ZWRUYWJDaGFuZ2UiLCJpbmRleCIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInZhbHVlIiwiaGFuZGxlTG9naW5TdWJtaXQiLCJiaW5kIiwiaGFuZGxlU2lnbnVwU3VibWl0IiwidCIsIndpbmRvdyIsImZiQXN5bmNJbml0IiwiRkIiLCJpbml0IiwiYXBwSWQiLCJhdXRvTG9nQXBwRXZlbnRzIiwieGZibWwiLCJ2ZXJzaW9uIiwiQXBwRXZlbnRzIiwibG9nUGFnZVZpZXciLCJkIiwicyIsImlkIiwianMiLCJmanMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJkb2N1bWVudCIsImdvb2dsZVVzZXIiLCJwcm9maWxlIiwiZ2V0QmFzaWNQcm9maWxlIiwiZ2V0SWQiLCJnZXROYW1lIiwiZ2V0SW1hZ2VVcmwiLCJnZXRFbWFpbCIsImlkX3Rva2VuIiwiZ2V0QXV0aFJlc3BvbnNlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImxlbmd0aCIsImxvZ2luIiwiYXV0aFJlc3BvbnNlIiwiYXBpIiwiYWNjZXNzVG9rZW4iLCJsb2dpbkJ0blN0eWxlIiwid2lkdGgiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsInRleHRUcmFuc2Zvcm0iLCJmYkxvZ2luQnRuU3R5bGUiLCJnb29nbGVMb2dpbkJ0blN0eWxlIiwiaGVpZ2h0IiwiYm9yZGVyIiwibWFyZ2luVG9wIiwic2lnbnVwQnRuU3R5bGUiLCJpbm5lclRhYkRpdlN0eWxlIiwibWFyZ2luIiwibm9ybWFsTG9naW5EaXZTdHlsZSIsInNvY2lhbExvZ2luRGl2U3R5bGUiLCJsb2FkaW5nSWNvblN0eWxlIiwiZmlsbCIsImFjdGlvbnMiLCJhY3RpdmUiLCJvbkVzY0tleURvd24iLCJvbk92ZXJsYXlDbGljayIsImhhbmRsZUZCTG9naW4iLCJvbkdvb2dsZVNpZ25JblN1Y2Nlc3MiLCJvbkdvb2dsZVNpZ25JbkZhaWx1cmUiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7OztRQXFCTyxBQUFTO1FB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QUFBLEFBQ0E7QUFEQTt5QkFDQSxjQUFBO29CQUFBOztvQkFBQTtzQkFBQSxBQUVFO0FBRkY7QUFBQSx5QkFFRSxBQUFDLGlDQUFNLE1BQVAsQUFBWSxTQUFRLE9BQU8sS0FBQSxBQUFLLEVBQWhDLEFBQTJCLEFBQU8sa0JBQWtCLE1BQXBELEFBQXlELFFBQU8sVUFBaEUsTUFBeUUsT0FBTyxLQUFBLEFBQUssTUFBckYsQUFBMkYsT0FBTyxVQUFVLEtBQUEsQUFBSyxhQUFMLEFBQWtCLEtBQWxCLEFBQXVCLE1BQW5JLEFBQTRHLEFBQTZCO29CQUF6STtzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGlDQUFNLE1BQVAsQUFBWSxZQUFXLE9BQU8sS0FBQSxBQUFLLEVBQW5DLEFBQThCLEFBQU8sYUFBYSxNQUFsRCxBQUF1RCxRQUFPLFVBQTlELE1BQXVFLE9BQU8sS0FBQSxBQUFLLE1BQW5GLEFBQXlGLFVBQVUsVUFBVSxLQUFBLEFBQUssYUFBTCxBQUFrQixLQUFsQixBQUF1QixNQUFwSSxBQUE2RyxBQUE2QjtvQkFBMUk7c0JBSEYsQUFHRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyxrQ0FBTyxRQUFSLE1BQWUsVUFBZixNQUF3QixPQUF4QixBQUErQixnQkFBZ0IsU0FBUyxLQUF4RCxBQUE2RCxvQkFBb0IsVUFBVSxLQUFBLEFBQUssTUFBaEcsQUFBc0c7b0JBQXRHO3NCQUFBLEFBQ007QUFETjtjQUNNLEFBQUssTUFBTCxBQUFXLDBCQUFVLEFBQUMsd0NBQWEsT0FBZCxBQUFxQixrQkFBa0IsTUFBdkMsQUFBNEMsVUFBUyxPQUFyRCxBQUE0RDtvQkFBNUQ7c0JBQXJCLEFBQXFCO0FBQUE7T0FBQSxJQUFzRSxLQUFBLEFBQUssRUExQzFHLEFBTUEsQUFDQSxBQTZCRSxBQUNBLEFBSUUsQUFDaUcsQUFBTztpQkExQzVHO2FBUEEsQUFDQSxBQUtBLEFBQ0EsQUF1REQ7QUF2REM7Ozs7O0VBdExzQixnQixBQUFNOztBQWtQaEMsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFVLEFBQ2pDOztjQUNZLE1BREwsQUFDVyxBQUNoQjtXQUFPLE1BRlQsQUFBTyxBQUVRLEFBRWhCO0FBSlEsQUFDTDtBQUZKOztBQU9BLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztpQkFBYSxBQUFtQixtREFGbEMsQUFBTyxBQUVRLEFBQWdDLEFBRWhEO0FBSlEsQUFDTDtBQUZKLEFBT0E7O2tCQUFlLDZCQUFVLENBQVYsQUFBVSxBQUFDLFdBQVcseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBOUQsQUFBZSxBQUFzQixBQUE2QyIsImZpbGUiOiJsb2dpbkRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==