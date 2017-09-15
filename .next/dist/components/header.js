'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _store = require('../store');

var _login = require('../pages/login');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/header.js';
//import ReactDOM from 'react-dom';
/*
import {
    Button,
} from 'reactstrap';

import {
    Link,
} from 'react-router-dom'
*/

//import { FormattedMessage } from 'react-intl';

var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header(props, context) {
        (0, _classCallCheck3.default)(this, Header);

        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props, context));
        //console.log('@@ Header ctor isUserLoggedIn (' + Header.isUserLoggedIn + ')');
    }

    (0, _createClass3.default)(Header, [{
        key: 'handleLogout',
        value: function handleLogout(event) {
            console.log("logout");
            (0, _login.logoutUser)();
        }
    }, {
        key: 'render',
        value: function render() {
            // var loginMsg = <FormattedMessage id='login' description='' defaultMessage='Login'/>
            var currentUserName = null;
            var loginDisplay = '';
            var isUserLoggedIn = false;

            // check CurrentUser is not null (conditional rendering)
            /*
            if (process.browser) {
              const cookies = new Cookies();
              currentUserName = cookies.get('username');
              if (currentUserName) {
                  isUserLoggedIn = true;
                  console.log('current user: ' + currentUserName);
              }
            } else {
              // server side
              // TODO: how to get server cookies?
                 currentUserName = 'morris';
                 isUserLoggedIn = true;
            }
            */

            if (this.props.username) {
                // note: can only return "one" root element in a variable
                loginDisplay = _react2.default.createElement('li', { className: 'dropdown top_menu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, _react2.default.createElement('a', { className: 'dropdown-toggle top_item', 'data-toggle': 'dropdown', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 61
                    }
                }), ' ' + this.props.username), _react2.default.createElement('ul', { className: 'dropdown-menu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('li', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, 'Profile')), _react2.default.createElement('li', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, _react2.default.createElement('a', { href: '#', onClick: this.handleLogout, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 66
                    }
                }, 'Logout'))));
            } else {
                loginDisplay = _react2.default.createElement('li', { className: 'top_menu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                }, _react2.default.createElement(_link2.default, { href: '/login', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                }, _react2.default.createElement('a', { className: 'top_item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 71
                    }
                }, ' Login ')));
            }

            return _react2.default.createElement('div', { className: 'header', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement('img', { src: '../static/img/react.png', width: '80', height: '80', alt: '', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }), _react2.default.createElement('ul', { className: 'header', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, 'About'))), _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_link2.default, { href: '/stuff', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, 'Search'))), loginDisplay), _react2.default.createElement(_style2.default, {
                styleId: 2926139411,
                css: 'div.header{margin-right:30px}ul.header{list-style:none;float:right}ul.header li.top_menu{display:inline-block;padding:20px 0 20px;vertical-align:middle}ul.header li.top_menu a.top_item:hover,ul.header li.top_menu a.top_item:focus,ul.header li.top_menu a.top_item:active{color:#999;text-decoration:none}ul.header li.top_menu a.top_item{font-family:Arial,\'Helvetica Neue\',Helvetica,sans-serif;text-decoration:none;position:relative;display:block;padding:16px 0;margin:0 12px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:12px;line-height:16px;font-weight:900;text-transform:uppercase;-webkit-transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;color:#000}ul.header li.top_menu a.top_item::before{content:\'\';display:block;position:absolute;bottom:3px;left:0;height:3px;width:100%;background-color:#000;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transition:color 0.1s,-webkit-transform 0.1s ease-out;-webkit-transition:color 0.1s,transform 0.1s ease-out;transition:color 0.1s,transform 0.1s ease-out}ul.header li.top_menu a.top_item:active::before{background-color:#000}ul.header li.top_menu a.top_item:hover::before,a.top_item:focus::before{-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1)}ul.dropdown-menu{margin-top:-30px;margin-left:5px;min-width:0px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGMkIsQUFJaUMsQUFHSixBQVNPLEFBU1YsQUFJZ0QsQUFlaEQsQUFhVyxBQUdJLEFBS1QsV0F2Q0ksQUFtQlAsS0FoQ0osQ0FxRE0sQ0E3RHBCLEdBWXdCLENBeUN4QixHQVpzQixHQWhDdEIsSUFhQSxDQXdDa0IsUUFqRFEsRUE2QlgsSUFzQmYsT0FyQlcsRUFsQmMsS0FtQlYsRUE3QmYsU0E4QmUsS0FuQk8sTUFvQkksT0FVQSxLQTdCUixVQW9CWSxJQW5CWCxlQUNELGNBQ0ssMkJBMkJ2Qiw4QkFUMEIsb0NBakJQLGVBQ0UsaUJBQ0QsT0FnQjhCLFNBZnJCLHlCQUN3QyxnSUFlckUsVUFkZSxXQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgaW5pdFN0b3JlLCBhZGRDb3VudCwgc2V0VXNlcm5hbWUgfSBmcm9tICcuLi9zdG9yZSdcbi8vaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vKlxuaW1wb3J0IHtcbiAgICBCdXR0b24sXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5pbXBvcnQge1xuICAgIExpbmssXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG4qL1xuaW1wb3J0IHtcbiAgICBsb2dvdXRVc2VyXG59IGZyb20gJy4uL3BhZ2VzL2xvZ2luJ1xuLy9pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIC8vY29uc29sZS5sb2coJ0BAIEhlYWRlciBjdG9yIGlzVXNlckxvZ2dlZEluICgnICsgSGVhZGVyLmlzVXNlckxvZ2dlZEluICsgJyknKTtcbiAgfVxuXG4gIGhhbmRsZUxvZ291dChldmVudCkge1xuICAgICAgY29uc29sZS5sb2cgKFwibG9nb3V0XCIpO1xuICAgICAgbG9nb3V0VXNlcigpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICAvLyB2YXIgbG9naW5Nc2cgPSA8Rm9ybWF0dGVkTWVzc2FnZSBpZD0nbG9naW4nIGRlc2NyaXB0aW9uPScnIGRlZmF1bHRNZXNzYWdlPSdMb2dpbicvPlxuICAgIHZhciBjdXJyZW50VXNlck5hbWUgPSBudWxsO1xuICAgIHZhciBsb2dpbkRpc3BsYXkgPSAnJztcbiAgICB2YXIgaXNVc2VyTG9nZ2VkSW4gPSBmYWxzZTtcblxuICAgIC8vIGNoZWNrIEN1cnJlbnRVc2VyIGlzIG5vdCBudWxsIChjb25kaXRpb25hbCByZW5kZXJpbmcpXG4gICAgLypcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgIGN1cnJlbnRVc2VyTmFtZSA9IGNvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgICAgaWYgKGN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICAgIGlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCB1c2VyOiAnICsgY3VycmVudFVzZXJOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2VydmVyIHNpZGVcbiAgICAgIC8vIFRPRE86IGhvdyB0byBnZXQgc2VydmVyIGNvb2tpZXM/XG4gICAgICAgICBjdXJyZW50VXNlck5hbWUgPSAnbW9ycmlzJztcbiAgICAgICAgIGlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICB9XG4gICAgKi9cblxuICAgIGlmICh0aGlzLnByb3BzLnVzZXJuYW1lKSB7XG4gICAgICAgIC8vIG5vdGU6IGNhbiBvbmx5IHJldHVybiBcIm9uZVwiIHJvb3QgZWxlbWVudCBpbiBhIHZhcmlhYmxlXG4gICAgICAgIGxvZ2luRGlzcGxheSA9XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gdG9wX21lbnVcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgdG9wX2l0ZW1cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7ICcgJyArIHRoaXMucHJvcHMudXNlcm5hbWUgfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZmlsZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXR9PkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvZ2luRGlzcGxheSA9IDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxMaW5rIGhyZWY9Jy9sb2dpbic+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIj4gTG9naW4gPC9hPjwvTGluaz48L2xpPjtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvcmVhY3QucG5nXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgeyAvKiB1c2VyIExpbmsgdG8gYXZvaWQgdHJpZ2dlciBzZXJ2ZXIgcmVuZGVyICovIH1cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvcF9tZW51XCI+PExpbmsgaHJlZj0nL2Fib3V0Jz48YSBjbGFzc05hbWU9XCJ0b3BfaXRlbVwiPlxuICAgICAgICAge1xuICAgICAgICAgLy8gPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9J2Fib3V0JyBkZXNjcmlwdGlvbj0nJyBkZWZhdWx0TWVzc2FnZT0nQWJvdXQnLz5cbiAgICAgICAgIH1cbiAgICAgICAgIEFib3V0XG4gICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48TGluayBocmVmPScvc3R1ZmYnPjxhIGNsYXNzTmFtZT1cInRvcF9pdGVtXCI+XG4gICAgICAgICB7XG4gICAgICAgICAvLyA8Rm9ybWF0dGVkTWVzc2FnZSBpZD0nc3R1ZmYnIGRlc2NyaXB0aW9uPScnIGRlZmF1bHRNZXNzYWdlPSdTdHVmZicvPlxuICAgICAgICAgfVxuICAgICAgICAgU2VhcmNoXG4gICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICAgICAgeyBsb2dpbkRpc3BsYXkgfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGRpdi5oZWFkZXIge1xuICAgICAgICAgIC8qICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgICAgICAgKi9cbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAvKiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmhvdmVyLFxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmZvY3VzLFxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyxiYWNrZ3JvdW5kLWNvbG9yIDAuMXMscGFkZGluZyAwLjJzIGVhc2UtaW47XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzLHRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTphY3RpdmU6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmhvdmVyOjpiZWZvcmUsIGEudG9wX2l0ZW06Zm9jdXM6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgICAgICAgLyogICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gICAgICAgICAgfVxuYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcm5hbWU6IHN0YXRlLnVzZXJuYW1lLFxuICAgIGNvdW50OiBzdGF0ZS5jb3VudFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKSxcbiAgICBzZXRVc2VybmFtZTogYmluZEFjdGlvbkNyZWF0b3JzKHNldFVzZXJuYW1lLCBkaXNwYXRjaCksXG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpXG4iXX0= */\n/*@ sourceURL=components/header.js */'
            }));
        }
    }]);

    return Header;
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

// export default Header
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0IiwiaW5pdFN0b3JlIiwiYWRkQ291bnQiLCJzZXRVc2VybmFtZSIsImxvZ291dFVzZXIiLCJIZWFkZXIiLCJwcm9wcyIsImNvbnRleHQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VXNlck5hbWUiLCJsb2dpbkRpc3BsYXkiLCJpc1VzZXJMb2dnZWRJbiIsInVzZXJuYW1lIiwiaGFuZGxlTG9nb3V0IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFXLEFBQVU7O0FBVzlCLEFBQ0k7Ozs7O0FBWEo7QUFDQTs7Ozs7Ozs7OztBQVlBOztJQUVNLEE7b0NBQ0o7O29CQUFBLEFBQVksT0FBWixBQUFtQixTQUFTOzRDQUFBOztxSUFBQSxBQUNwQixPQURvQixBQUNiLEFBQ2I7QUFDRDs7Ozs7cUMsQUFFWSxPQUFPLEFBQ2hCO29CQUFBLEFBQVEsSUFBUixBQUFhLEFBQ2I7QUFDSDs7OztpQ0FFUyxBQUNSO0FBQ0E7Z0JBQUksa0JBQUosQUFBc0IsQUFDdEI7Z0JBQUksZUFBSixBQUFtQixBQUNuQjtnQkFBSSxpQkFBSixBQUFxQixBQUVyQjs7QUFDQTtBQWdCQTs7Ozs7Ozs7Ozs7Ozs7OztnQkFBSSxLQUFBLEFBQUssTUFBVCxBQUFlLFVBQVUsQUFDckI7QUFDQTsrQ0FDSSxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBLEFBQ0k7QUFESjtpQkFBQSxrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhLDRCQUEyQixlQUF4QyxBQUFvRCxZQUFXLE1BQS9ELEFBQW9FO2tDQUFwRTtvQ0FBQSxBQUNJO0FBREo7MkRBQ1UsV0FBTixBQUFnQjtrQ0FBaEI7b0NBREosQUFDSSxBQUNFO0FBREY7MEJBQ1EsS0FBQSxBQUFLLE1BSHJCLEFBQ0ksQUFFdUIsQUFFdkIsMkJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYztrQ0FBZDtvQ0FBQSxBQUNFO0FBREY7bUNBQ0UsY0FBQTs7a0NBQUE7b0NBQUEsQUFBSTtBQUFKO0FBQUEsbUNBQUksY0FBQSxPQUFHLE1BQUgsQUFBUTtrQ0FBUjtvQ0FBQTtBQUFBO21CQUROLEFBQ0UsQUFBSSxBQUNKLDZCQUFBLGNBQUE7O2tDQUFBO29DQUFBLEFBQUk7QUFBSjtBQUFBLG1DQUFJLGNBQUEsT0FBRyxNQUFILEFBQVEsS0FBSSxTQUFTLEtBQXJCLEFBQTBCO2tDQUExQjtvQ0FBQTtBQUFBO21CQVJkLEFBQ0ksQUFLSSxBQUVFLEFBQUksQUFHakI7QUFiRCxtQkFjSyxBQUNEOytDQUFlLGNBQUEsUUFBSSxXQUFKLEFBQWM7a0NBQWQ7b0NBQUEsQUFBeUI7QUFBekI7aUJBQUEsa0JBQXlCLEFBQUMsZ0NBQUssTUFBTixBQUFXO2tDQUFYO29DQUFBLEFBQW9CO0FBQXBCO21DQUFvQixjQUFBLE9BQUcsV0FBSCxBQUFhO2tDQUFiO29DQUFBO0FBQUE7bUJBQTVELEFBQWUsQUFBeUIsQUFBb0IsQUFDL0Q7QUFFRDs7bUNBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZSxzQkFBZjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEseUNBQ1MsS0FBTCxBQUFTLDJCQUEwQixPQUFuQyxBQUF5QyxNQUFLLFFBQTlDLEFBQXFELE1BQUssS0FBMUQsQUFBOEQsZ0JBQTlEOzs4QkFBQTtnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBLFFBQUksV0FBSixBQUFjLHNCQUFkOzs4QkFBQTtnQ0FBQSxBQUVBO0FBRkE7K0JBRUEsY0FBQSxRQUFJLFdBQUosQUFBYyx3QkFBZDs7OEJBQUE7Z0NBQUEsQUFBeUI7QUFBekI7K0JBQXlCLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQW9CO0FBQXBCOytCQUFvQixjQUFBLE9BQUcsV0FBSCxBQUFhLHdCQUFiOzs4QkFBQTtnQ0FBQTtBQUFBO2VBRjdDLEFBRUEsQUFBeUIsQUFBb0IsQUFNNUMsNEJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYyx3QkFBZDs7OEJBQUE7Z0NBQUEsQUFBeUI7QUFBekI7K0JBQXlCLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQW9CO0FBQXBCOytCQUFvQixjQUFBLE9BQUcsV0FBSCxBQUFhLHdCQUFiOzs4QkFBQTtnQ0FBQTtBQUFBO2VBUjlDLEFBUUMsQUFBeUIsQUFBb0IsQUFNdkMsYUFoQlgsQUFFSTt5QkFGSjtxQkFEQSxBQUNBLEFBMEZEO0FBMUZDOzs7OztFQXJEaUIsZ0IsQUFBTTs7QUFrSjNCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQzs7a0JBQ1ksTUFETCxBQUNXLEFBQ2hCO2VBQU8sTUFGVCxBQUFPLEFBRVEsQUFFaEI7QUFKUSxBQUNMO0FBRko7O0FBT0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztrQkFDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztxQkFBYSxBQUFtQixtREFGbEMsQUFBTyxBQUVRLEFBQWdDLEFBRWhEO0FBSlEsQUFDTDtBQUZKOztBQU9BLEFBQ0E7a0JBQWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBeEMsQUFBZSxBQUE2QyIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=