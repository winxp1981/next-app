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
                        lineNumber: 58
                    }
                }, _react2.default.createElement('a', { className: 'dropdown-toggle top_item', 'data-toggle': 'dropdown', href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                }), ' ' + this.props.username), _react2.default.createElement('ul', { className: 'dropdown-menu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('li', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement('a', { href: '#', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, 'Profile')), _react2.default.createElement('li', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, _react2.default.createElement('a', { href: '#', onClick: this.handleLogout, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }, 'Logout'))));
            } else {
                loginDisplay = _react2.default.createElement('li', { className: 'top_menu', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }, _react2.default.createElement('a', { className: 'top_item', href: '/login', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 70
                    }
                }, ' Login '));
            }

            return _react2.default.createElement('div', { className: 'header', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('img', { src: '../static/img/react.png', width: '80', height: '80', alt: '', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }), _react2.default.createElement('ul', { className: 'header', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('a', { className: 'top_item', href: '/about', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'About')), _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('a', { className: 'top_item', href: '/stuff', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, 'Search')), loginDisplay), _react2.default.createElement(_style2.default, {
                styleId: 2926139411,
                css: 'div.header{margin-right:30px}ul.header{list-style:none;float:right}ul.header li.top_menu{display:inline-block;padding:20px 0 20px;vertical-align:middle}ul.header li.top_menu a.top_item:hover,ul.header li.top_menu a.top_item:focus,ul.header li.top_menu a.top_item:active{color:#999;text-decoration:none}ul.header li.top_menu a.top_item{font-family:Arial,\'Helvetica Neue\',Helvetica,sans-serif;text-decoration:none;position:relative;display:block;padding:16px 0;margin:0 12px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:12px;line-height:16px;font-weight:900;text-transform:uppercase;-webkit-transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;color:#000}ul.header li.top_menu a.top_item::before{content:\'\';display:block;position:absolute;bottom:3px;left:0;height:3px;width:100%;background-color:#000;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transition:color 0.1s,-webkit-transform 0.1s ease-out;-webkit-transition:color 0.1s,transform 0.1s ease-out;transition:color 0.1s,transform 0.1s ease-out}ul.header li.top_menu a.top_item:active::before{background-color:#000}ul.header li.top_menu a.top_item:hover::before,a.top_item:focus::before{-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1)}ul.dropdown-menu{margin-top:-30px;margin-left:5px;min-width:0px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGMkIsQUFJaUMsQUFHSixBQVNPLEFBU1YsQUFJZ0QsQUFlaEQsQUFhVyxBQUdJLEFBS1QsV0F2Q0ksQUFtQlAsS0FoQ0osQ0FxRE0sQ0E3RHBCLEdBWXdCLENBeUN4QixHQVpzQixHQWhDdEIsSUFhQSxDQXdDa0IsUUFqRFEsRUE2QlgsSUFzQmYsT0FyQlcsRUFsQmMsS0FtQlYsRUE3QmYsU0E4QmUsS0FuQk8sTUFvQkksT0FVQSxLQTdCUixVQW9CWSxJQW5CWCxlQUNELGNBQ0ssMkJBMkJ2Qiw4QkFUMEIsb0NBakJQLGVBQ0UsaUJBQ0QsT0FnQjhCLFNBZnJCLHlCQUN3QyxnSUFlckUsVUFkZSxXQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgaW5pdFN0b3JlLCBhZGRDb3VudCwgc2V0VXNlcm5hbWUgfSBmcm9tICcuLi9zdG9yZSdcbi8vaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vKlxuaW1wb3J0IHtcbiAgICBCdXR0b24sXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5pbXBvcnQge1xuICAgIExpbmssXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG4qL1xuaW1wb3J0IHtcbiAgICBsb2dvdXRVc2VyXG59IGZyb20gJy4uL3BhZ2VzL2xvZ2luJ1xuLy9pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIC8vY29uc29sZS5sb2coJ0BAIEhlYWRlciBjdG9yIGlzVXNlckxvZ2dlZEluICgnICsgSGVhZGVyLmlzVXNlckxvZ2dlZEluICsgJyknKTtcbiAgfVxuXG4gIGhhbmRsZUxvZ291dChldmVudCkge1xuICAgICAgY29uc29sZS5sb2cgKFwibG9nb3V0XCIpO1xuICAgICAgbG9nb3V0VXNlcigpO1xuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICAvLyB2YXIgbG9naW5Nc2cgPSA8Rm9ybWF0dGVkTWVzc2FnZSBpZD0nbG9naW4nIGRlc2NyaXB0aW9uPScnIGRlZmF1bHRNZXNzYWdlPSdMb2dpbicvPlxuICAgIHZhciBjdXJyZW50VXNlck5hbWUgPSBudWxsO1xuICAgIHZhciBsb2dpbkRpc3BsYXkgPSAnJztcbiAgICB2YXIgaXNVc2VyTG9nZ2VkSW4gPSBmYWxzZTtcblxuICAgIC8vIGNoZWNrIEN1cnJlbnRVc2VyIGlzIG5vdCBudWxsIChjb25kaXRpb25hbCByZW5kZXJpbmcpXG4gICAgLypcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKTtcbiAgICAgIGN1cnJlbnRVc2VyTmFtZSA9IGNvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgICAgaWYgKGN1cnJlbnRVc2VyTmFtZSkge1xuICAgICAgICAgIGlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudCB1c2VyOiAnICsgY3VycmVudFVzZXJOYW1lKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gc2VydmVyIHNpZGVcbiAgICAgIC8vIFRPRE86IGhvdyB0byBnZXQgc2VydmVyIGNvb2tpZXM/XG4gICAgICAgICBjdXJyZW50VXNlck5hbWUgPSAnbW9ycmlzJztcbiAgICAgICAgIGlzVXNlckxvZ2dlZEluID0gdHJ1ZTtcbiAgICB9XG4gICAgKi9cblxuICAgIGlmICh0aGlzLnByb3BzLnVzZXJuYW1lKSB7XG4gICAgICAgIC8vIG5vdGU6IGNhbiBvbmx5IHJldHVybiBcIm9uZVwiIHJvb3QgZWxlbWVudCBpbiBhIHZhcmlhYmxlXG4gICAgICAgIGxvZ2luRGlzcGxheSA9XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gdG9wX21lbnVcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgdG9wX2l0ZW1cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7ICcgJyArIHRoaXMucHJvcHMudXNlcm5hbWUgfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZmlsZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXR9PkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxvZ2luRGlzcGxheSA9IDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxhIGNsYXNzTmFtZT1cInRvcF9pdGVtXCIgaHJlZj1cIi9sb2dpblwiPiBMb2dpbiA8L2E+PC9saT47XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1nL3JlYWN0LnBuZ1wiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48YSBjbGFzc05hbWU9XCJ0b3BfaXRlbVwiIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgIHtcbiAgICAgICAgIC8vIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPSdhYm91dCcgZGVzY3JpcHRpb249JycgZGVmYXVsdE1lc3NhZ2U9J0Fib3V0Jy8+XG4gICAgICAgICB9XG4gICAgICAgICBBYm91dFxuICAgICAgICAgPC9hPjwvbGk+XG4gICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48YSBjbGFzc05hbWU9XCJ0b3BfaXRlbVwiIGhyZWY9XCIvc3R1ZmZcIj5cbiAgICAgICAgIHtcbiAgICAgICAgIC8vIDxGb3JtYXR0ZWRNZXNzYWdlIGlkPSdzdHVmZicgZGVzY3JpcHRpb249JycgZGVmYXVsdE1lc3NhZ2U9J1N0dWZmJy8+XG4gICAgICAgICB9XG4gICAgICAgICBTZWFyY2hcbiAgICAgICAgIDwvYT48L2xpPlxuICAgICAgICAgICAgIHsgbG9naW5EaXNwbGF5IH1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBkaXYuaGVhZGVyIHtcbiAgICAgICAgICAvKiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgICAgICAgICovXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgLyogICAgYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTpob3ZlcixcbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTpmb2N1cyxcbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTphY3RpdmUge1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMsYmFja2dyb3VuZC1jb2xvciAwLjFzLHBhZGRpbmcgMC4ycyBlYXNlLWluO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW06OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyx0cmFuc2Zvcm0gMC4xcyBlYXNlLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW06YWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTpob3Zlcjo6YmVmb3JlLCBhLnRvcF9pdGVtOmZvY3VzOjpiZWZvcmUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgICAgICAgIC8qICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xuICAgICAgICAgIH1cbmB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOiBzdGF0ZS51c2VybmFtZSxcbiAgICBjb3VudDogc3RhdGUuY291bnRcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRDb3VudDogYmluZEFjdGlvbkNyZWF0b3JzKGFkZENvdW50LCBkaXNwYXRjaCksXG4gICAgc2V0VXNlcm5hbWU6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VybmFtZSwgZGlzcGF0Y2gpLFxuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhlYWRlclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKVxuIl19 */\n/*@ sourceURL=components/header.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29va2llcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwibG9nb3V0VXNlciIsIkhlYWRlciIsInByb3BzIiwiY29udGV4dCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyTmFtZSIsImxvZ2luRGlzcGxheSIsImlzVXNlckxvZ2dlZEluIiwidXNlcm5hbWUiLCJoYW5kbGVMb2dvdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFVOztBQVc5QixBQUNJOzs7OztBQVhKO0FBQ0E7Ozs7Ozs7Ozs7QUFZQTs7SUFFTSxBO29DQUNKOztvQkFBQSxBQUFZLE9BQVosQUFBbUIsU0FBUzs0Q0FBQTs7cUlBQUEsQUFDcEIsT0FEb0IsQUFDYixBQUNiO0FBQ0Q7Ozs7O3FDQUVZLEEsT0FBTyxBQUNoQjtvQkFBQSxBQUFRLElBQVIsQUFBYSxBQUNiO0FBQ0g7Ozs7aUNBRVMsQUFDUjtBQUNBO2dCQUFJLGtCQUFKLEFBQXNCLEFBQ3RCO2dCQUFJLGVBQUosQUFBbUIsQUFDbkI7Z0JBQUksaUJBQUosQUFBcUIsQUFFckI7O0FBQ0E7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBQUksS0FBQSxBQUFLLE1BQVQsQUFBZSxVQUFVLEFBQ3JCO0FBQ0E7K0NBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYztrQ0FBZDtvQ0FBQSxBQUNJO0FBREo7aUJBQUEsa0JBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYSw0QkFBMkIsZUFBeEMsQUFBb0QsWUFBVyxNQUEvRCxBQUFvRTtrQ0FBcEU7b0NBQUEsQUFDSTtBQURKOzJEQUNVLFdBQU4sQUFBZ0I7a0NBQWhCO29DQURKLEFBQ0ksQUFDRTtBQURGOzBCQUNRLEtBQUEsQUFBSyxNQUhyQixBQUNJLEFBRXVCLEFBRXZCLDJCQUFBLGNBQUEsUUFBSSxXQUFKLEFBQWM7a0NBQWQ7b0NBQUEsQUFDRTtBQURGO21DQUNFLGNBQUE7O2tDQUFBO29DQUFBLEFBQUk7QUFBSjtBQUFBLG1DQUFJLGNBQUEsT0FBRyxNQUFILEFBQVE7a0NBQVI7b0NBQUE7QUFBQTttQkFETixBQUNFLEFBQUksQUFDSiw2QkFBQSxjQUFBOztrQ0FBQTtvQ0FBQSxBQUFJO0FBQUo7QUFBQSxtQ0FBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksU0FBUyxLQUFyQixBQUEwQjtrQ0FBMUI7b0NBQUE7QUFBQTttQkFSZCxBQUNJLEFBS0ksQUFFRSxBQUFJLEFBR2pCO0FBYkQsbUJBY0ssQUFDRDsrQ0FBZSxjQUFBLFFBQUksV0FBSixBQUFjO2tDQUFkO29DQUFBLEFBQXlCO0FBQXpCO2lCQUFBLGtCQUF5QixjQUFBLE9BQUcsV0FBSCxBQUFhLFlBQVcsTUFBeEIsQUFBNkI7a0NBQTdCO29DQUFBO0FBQUE7bUJBQXhDLEFBQWUsQUFBeUIsQUFDM0M7QUFFRDs7bUNBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZSxzQkFBZjs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEseUNBQ1MsS0FBTCxBQUFTLDJCQUEwQixPQUFuQyxBQUF5QyxNQUFLLFFBQTlDLEFBQXFELE1BQUssS0FBMUQsQUFBOEQsZ0JBQTlEOzs4QkFBQTtnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxjQUFBLFFBQUksV0FBSixBQUFjLHNCQUFkOzs4QkFBQTtnQ0FBQSxBQUNDO0FBREQ7K0JBQ0MsY0FBQSxRQUFJLFdBQUosQUFBYyx3QkFBZDs7OEJBQUE7Z0NBQUEsQUFBeUI7QUFBekI7K0JBQXlCLGNBQUEsT0FBRyxXQUFILEFBQWEsWUFBVyxNQUF4QixBQUE2QixzQkFBN0I7OzhCQUFBO2dDQUFBO0FBQUE7ZUFEMUIsQUFDQyxBQUF5QixBQU16QiwyQkFBQSxjQUFBLFFBQUksV0FBSixBQUFjLHdCQUFkOzs4QkFBQTtnQ0FBQSxBQUF5QjtBQUF6QjsrQkFBeUIsY0FBQSxPQUFHLFdBQUgsQUFBYSxZQUFXLE1BQXhCLEFBQTZCLHNCQUE3Qjs7OEJBQUE7Z0NBQUE7QUFBQTtlQVAxQixBQU9DLEFBQXlCLEFBTW5CLFlBZlgsQUFFSTt5QkFGSjtxQkFEQSxBQUNBLEFBeUZEO0FBekZDOzs7OztFQXJEaUIsZ0JBQU0sQTs7QUFpSjNCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQzs7a0JBQ1ksTUFETCxBQUNXLEFBQ2hCO2VBQU8sTUFGVCxBQUFPLEFBRVEsQUFFaEI7QUFKUSxBQUNMO0FBRko7O0FBT0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztrQkFDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztxQkFBYSxBQUFtQixtREFGbEMsQUFBTyxBQUVRLEFBQWdDLEFBRWhEO0FBSlEsQUFDTDtBQUZKOztBQU9BLEFBQ0E7a0JBQWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBeEMsQUFBZSxBQUE2QyIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=