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

var _routes = require('../routes');

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _store = require('../store');

var _reactI18next = require('react-i18next');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _ThemeProvider = require('react-toolbox/lib/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _theme = require('../static/theme');

var _theme2 = _interopRequireDefault(_theme);

var _loginDialog = require('./loginDialog');

var _loginDialog2 = _interopRequireDefault(_loginDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/header.js';
//import Link from 'next/link'


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

        //console.log('@@ Header ctor isUserLoggedIn (' + Header.isUserLoggedIn + ')');
        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props, context));

        _this.state = {
            login_dialog_active: false
        };

        _this.handleToggleLogin = function () {
            _this.setState({ login_dialog_active: !_this.state.login_dialog_active });
        };

        _this.actions = [{ label: "Dismiss", onClick: _this.handleToggleLogin }];
        _this.t = props.t;
        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'handleLogout',
        value: function handleLogout(event) {
            console.log("logout");
            (0, _loginDialog.logoutUser)();
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
            /*
                if (this.props.username) {
                    // note: can only return "one" root element in a variable
                    loginDisplay =
                        <li className="dropdown top_menu">
                            <a className="dropdown-toggle top_item" data-toggle="dropdown" href="#">
                                <span className="glyphicon glyphicon-user"></span>
                                { ' ' + this.props.username }
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="#">Profile</a></li>
                              <li><a href="#" onClick={this.handleLogout}>Logout</a></li>
                            </ul>
                        </li>;
                }
                else {
                  //  loginDisplay = <li className="top_menu"><Link href='/login'><a className="top_item"> {this.t('login')} </a></Link></li>;
                  //  loginDisplay = <li className="top_menu"><Button label={this.t('login')} onClick={this.handleToggle} /></li>;
                  loginDisplay = <li className="top_menu"><a className="top_item" href='#' onClick={this.handleToggleLogin}> {this.t('login')} </a></li>;
                }
            */
            return _react2.default.createElement('div', { className: 'header', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement('img', { src: '../static/img/react.png', width: '80', height: '80', alt: '', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }), _react2.default.createElement('ul', { className: 'header', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement(_routes.Link, { route: 'about', params: { id: '888' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, this.t('about')))), _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, this.t('租屋')))), _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement(_routes.Link, { route: '/host', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, this.t('房東')))), this.props.username ? _react2.default.createElement('li', { className: 'dropdown top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 117
                }
            }, _react2.default.createElement('a', { className: 'dropdown-toggle top_item', 'data-toggle': 'dropdown', href: '#', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }), ' ' + this.props.username), _react2.default.createElement('ul', { className: 'dropdown-menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement('li', {
                'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, _react2.default.createElement('a', { href: '#', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, 'Profile')), _react2.default.createElement('li', {
                'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, _react2.default.createElement('a', { href: '#', onClick: this.handleLogout, 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 124
                }
            }, 'Logout')))) :
            //  loginDisplay = <li className="top_menu"><Link href='/login'><a className="top_item"> {this.t('login')} </a></Link></li>;
            //  loginDisplay = <li className="top_menu"><Button label={this.t('login')} onClick={this.handleToggle} /></li>;
            _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, _react2.default.createElement('a', { className: 'top_item', href: '#', onClick: this.handleToggleLogin, 'data-jsx': 2926139411,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }, ' ', this.t('login'), ' '))), _react2.default.createElement(_loginDialog2.default, {
                actions: this.actions,
                active: this.state.login_dialog_active,
                onEscKeyDown: this.handleToggleLogin,
                onOverlayClick: this.handleToggleLogin,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 135
                }
            }), _react2.default.createElement(_style2.default, {
                styleId: 2926139411,
                css: 'div.header[data-jsx="2926139411"]{margin-right:30px}ul.header[data-jsx="2926139411"]{list-style:none;float:right}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"]{display:inline-block;padding:20px 0 20px;vertical-align:middle}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:hover,ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:focus,ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:active{color:#999;text-decoration:none}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]{font-family:Arial,\'Helvetica Neue\',Helvetica,sans-serif;text-decoration:none;position:relative;display:block;padding:16px 0;margin:0 12px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:12px;line-height:16px;font-weight:900;text-transform:uppercase;-webkit-transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;color:#000}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]::before{content:\'\';display:block;position:absolute;bottom:3px;left:0;height:3px;width:100%;background-color:#000;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transition:color 0.1s,-webkit-transform 0.1s ease-out;-webkit-transition:color 0.1s,transform 0.1s ease-out;transition:color 0.1s,transform 0.1s ease-out}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:active[data-jsx="2926139411"]::before{background-color:#000}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:hover[data-jsx="2926139411"]::before,a.top_item[data-jsx="2926139411"]:focus[data-jsx="2926139411"]::before{-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1)}ul.dropdown-menu[data-jsx="2926139411"]{margin-top:-30px;margin-left:5px;min-width:0px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRJb0IsQUFJaUMsQUFHSixBQVNPLEFBU1YsQUFJZ0QsQUFlaEQsQUFhVyxBQUdJLEFBS1QsV0F2Q0ksQUFtQlAsS0FoQ0osQ0FxRE0sQ0E3RHBCLEdBWXdCLENBeUN4QixHQVpzQixHQWhDdEIsSUFhQSxDQXdDa0IsUUFqRFEsRUE2QlgsSUFzQmYsT0FyQlcsRUFsQmMsS0FtQlYsRUE3QmYsU0E4QmUsS0FuQk8sTUFvQkksT0FVQSxLQTdCUixVQW9CWSxJQW5CWCxlQUNELGNBQ0ssMkJBMkJ2Qiw4QkFUMEIsb0NBakJQLGVBQ0UsaUJBQ0QsT0FnQjhCLFNBZnJCLHlCQUN3QyxnSUFlckUsVUFkZSxXQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgaW5pdFN0b3JlLCBhZGRDb3VudCwgc2V0VXNlcm5hbWUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICdyZWFjdC10b29sYm94L2xpYi9UaGVtZVByb3ZpZGVyJ1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0YXRpYy90aGVtZSdcbmltcG9ydCBMb2dpbkRpYWxvZyBmcm9tICcuL2xvZ2luRGlhbG9nJ1xuXG4vL2ltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLypcbmltcG9ydCB7XG4gICAgQnV0dG9uLFxufSBmcm9tICdyZWFjdHN0cmFwJztcblxuaW1wb3J0IHtcbiAgICBMaW5rLFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuKi9cbmltcG9ydCB7XG4gICAgbG9nb3V0VXNlclxufSBmcm9tICcuL2xvZ2luRGlhbG9nJ1xuLy9pbXBvcnQgeyBGb3JtYXR0ZWRNZXNzYWdlIH0gZnJvbSAncmVhY3QtaW50bCc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGxvZ2luX2RpYWxvZ19hY3RpdmU6IGZhbHNlXG4gIH07XG5cbiAgaGFuZGxlVG9nZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bG9naW5fZGlhbG9nX2FjdGl2ZTogIXRoaXMuc3RhdGUubG9naW5fZGlhbG9nX2FjdGl2ZX0pO1xuICB9XG5cbiAgYWN0aW9ucyA9IFtcbiAgICB7IGxhYmVsOiBcIkRpc21pc3NcIiwgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGVMb2dpbiB9LFxuICAvLyAgeyBsYWJlbDogXCJTYXZlXCIsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlVG9nZ2xlIH1cbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICAvL2NvbnNvbGUubG9nKCdAQCBIZWFkZXIgY3RvciBpc1VzZXJMb2dnZWRJbiAoJyArIEhlYWRlci5pc1VzZXJMb2dnZWRJbiArICcpJyk7XG4gICAgdGhpcy50ID0gcHJvcHMudFxuICB9XG5cbiAgaGFuZGxlTG9nb3V0KGV2ZW50KSB7XG4gICAgICBjb25zb2xlLmxvZyAoXCJsb2dvdXRcIik7XG4gICAgICBsb2dvdXRVc2VyKCk7XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIC8vIHZhciBsb2dpbk1zZyA9IDxGb3JtYXR0ZWRNZXNzYWdlIGlkPSdsb2dpbicgZGVzY3JpcHRpb249JycgZGVmYXVsdE1lc3NhZ2U9J0xvZ2luJy8+XG4gICAgdmFyIGN1cnJlbnRVc2VyTmFtZSA9IG51bGw7XG4gICAgdmFyIGxvZ2luRGlzcGxheSA9ICcnO1xuICAgIHZhciBpc1VzZXJMb2dnZWRJbiA9IGZhbHNlO1xuXG4gICAgLy8gY2hlY2sgQ3VycmVudFVzZXIgaXMgbm90IG51bGwgKGNvbmRpdGlvbmFsIHJlbmRlcmluZylcbiAgICAvKlxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgICAgY3VycmVudFVzZXJOYW1lID0gY29va2llcy5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgICBpZiAoY3VycmVudFVzZXJOYW1lKSB7XG4gICAgICAgICAgaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50IHVzZXI6ICcgKyBjdXJyZW50VXNlck5hbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzZXJ2ZXIgc2lkZVxuICAgICAgLy8gVE9ETzogaG93IHRvIGdldCBzZXJ2ZXIgY29va2llcz9cbiAgICAgICAgIGN1cnJlbnRVc2VyTmFtZSA9ICdtb3JyaXMnO1xuICAgICAgICAgaXNVc2VyTG9nZ2VkSW4gPSB0cnVlO1xuICAgIH1cbiAgICAqL1xuLypcbiAgICBpZiAodGhpcy5wcm9wcy51c2VybmFtZSkge1xuICAgICAgICAvLyBub3RlOiBjYW4gb25seSByZXR1cm4gXCJvbmVcIiByb290IGVsZW1lbnQgaW4gYSB2YXJpYWJsZVxuICAgICAgICBsb2dpbkRpc3BsYXkgPVxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIHRvcF9tZW51XCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlIHRvcF9pdGVtXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgeyAnICcgKyB0aGlzLnByb3BzLnVzZXJuYW1lIH1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2ZpbGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy8gIGxvZ2luRGlzcGxheSA9IDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxMaW5rIGhyZWY9Jy9sb2dpbic+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIj4ge3RoaXMudCgnbG9naW4nKX0gPC9hPjwvTGluaz48L2xpPjtcbiAgICAgIC8vICBsb2dpbkRpc3BsYXkgPSA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48QnV0dG9uIGxhYmVsPXt0aGlzLnQoJ2xvZ2luJyl9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfSAvPjwvbGk+O1xuICAgICAgbG9naW5EaXNwbGF5ID0gPGxpIGNsYXNzTmFtZT1cInRvcF9tZW51XCI+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIiBocmVmPScjJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUxvZ2lufT4ge3RoaXMudCgnbG9naW4nKX0gPC9hPjwvbGk+O1xuICAgIH1cbiovXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1nL3JlYWN0LnBuZ1wiIHdpZHRoPVwiODBcIiBoZWlnaHQ9XCI4MFwiIGFsdD1cIlwiIC8+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIHsgLyogdXNlciBMaW5rIHRvIGF2b2lkIHRyaWdnZXIgc2VydmVyIHJlbmRlciAqLyB9XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxMaW5rIHJvdXRlPSdhYm91dCcgcGFyYW1zPXt7aWQ6ICc4ODgnfX0+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIj5cbiAgICAgICAgIHt0aGlzLnQoJ2Fib3V0Jyl9XG4gICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICB7XG4gICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48TGluayByb3V0ZT0nLyc+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIj5cbiAgICAgICAgIHt0aGlzLnQoJ+enn+WxiycpfVxuICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgfVxuICAgICAgICAge1xuICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvcF9tZW51XCI+PExpbmsgcm91dGU9Jy9ob3N0Jz48YSBjbGFzc05hbWU9XCJ0b3BfaXRlbVwiPlxuICAgICAgICAge3RoaXMudCgn5oi/5p2xJyl9XG4gICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICB9XG4gICAgICAgICB7XG4gICAgICAgICAgIHRoaXMucHJvcHMudXNlcm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duIHRvcF9tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZSB0b3BfaXRlbVwiIGRhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIiBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi11c2VyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAnICcgKyB0aGlzLnByb3BzLnVzZXJuYW1lIH1cbiAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlByb2ZpbGU8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUxvZ291dH0+TG9nb3V0PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgKVxuICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAvLyAgbG9naW5EaXNwbGF5ID0gPGxpIGNsYXNzTmFtZT1cInRvcF9tZW51XCI+PExpbmsgaHJlZj0nL2xvZ2luJz48YSBjbGFzc05hbWU9XCJ0b3BfaXRlbVwiPiB7dGhpcy50KCdsb2dpbicpfSA8L2E+PC9MaW5rPjwvbGk+O1xuICAgICAgICAgICAgIC8vICBsb2dpbkRpc3BsYXkgPSA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48QnV0dG9uIGxhYmVsPXt0aGlzLnQoJ2xvZ2luJyl9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlfSAvPjwvbGk+O1xuICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxhIGNsYXNzTmFtZT1cInRvcF9pdGVtXCIgaHJlZj0nIycgb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGVMb2dpbn0+IHt0aGlzLnQoJ2xvZ2luJyl9IDwvYT48L2xpPlxuICAgICAgICAgICApXG4gICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxMb2dpbkRpYWxvZ1xuICAgICAgICAgIGFjdGlvbnM9e3RoaXMuYWN0aW9uc31cbiAgICAgICAgICBhY3RpdmU9e3RoaXMuc3RhdGUubG9naW5fZGlhbG9nX2FjdGl2ZX1cbiAgICAgICAgICBvbkVzY0tleURvd249e3RoaXMuaGFuZGxlVG9nZ2xlTG9naW59XG4gICAgICAgICAgb25PdmVybGF5Q2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlTG9naW59XG4gICAgICAgIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYuaGVhZGVyIHtcbiAgICAgICAgICAvKiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIC8qXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgICAgICAgICovXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwIDIwcHg7XG4gICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgLyogICAgYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTpob3ZlcixcbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTpmb2N1cyxcbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTphY3RpdmUge1xuICAgICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEycHg7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMsYmFja2dyb3VuZC1jb2xvciAwLjFzLHBhZGRpbmcgMC4ycyBlYXNlLWluO1xuICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW06OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyx0cmFuc2Zvcm0gMC4xcyBlYXNlLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW06YWN0aXZlOjpiZWZvcmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTpob3Zlcjo6YmVmb3JlLCBhLnRvcF9pdGVtOmZvY3VzOjpiZWZvcmUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgICAgICAgIC8qICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuOyAqL1xuICAgICAgICAgIH1cbmB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHVzZXJuYW1lOiBzdGF0ZS51c2VybmFtZSxcbiAgICBjb3VudDogc3RhdGUuY291bnRcbiAgfVxufVxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBhZGRDb3VudDogYmluZEFjdGlvbkNyZWF0b3JzKGFkZENvdW50LCBkaXNwYXRjaCksXG4gICAgc2V0VXNlcm5hbWU6IGJpbmRBY3Rpb25DcmVhdG9ycyhzZXRVc2VybmFtZSwgZGlzcGF0Y2gpLFxuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEhlYWRlclxuZXhwb3J0IGRlZmF1bHQgdHJhbnNsYXRlKFsnY29tbW9uJ10pKGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlcikpXG4iXX0= */\n/*@ sourceURL=components/header.js */'
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
exports.default = (0, _reactI18next.translate)(['common'])((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0IiwiaW5pdFN0b3JlIiwiYWRkQ291bnQiLCJzZXRVc2VybmFtZSIsInRyYW5zbGF0ZSIsIkhlYWQiLCJUaGVtZVByb3ZpZGVyIiwidGhlbWUiLCJMb2dpbkRpYWxvZyIsImxvZ291dFVzZXIiLCJIZWFkZXIiLCJwcm9wcyIsImNvbnRleHQiLCJzdGF0ZSIsImxvZ2luX2RpYWxvZ19hY3RpdmUiLCJoYW5kbGVUb2dnbGVMb2dpbiIsInNldFN0YXRlIiwiYWN0aW9ucyIsImxhYmVsIiwib25DbGljayIsInQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VXNlck5hbWUiLCJsb2dpbkRpc3BsYXkiLCJpc1VzZXJMb2dnZWRJbiIsImlkIiwidXNlcm5hbWUiLCJoYW5kbGVMb2dvdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFVOztBQUM5QixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUFWUDs7O0FBWUE7QUFDQSxBQVNBLEFBQ0k7Ozs7Ozs7Ozs7QUFFSjs7SUFFTSxBO29DQWNKOztvQkFBQSxBQUFZLE9BQVosQUFBbUIsU0FBUzs0Q0FFMUI7O0FBRjBCOzBJQUFBLEFBQ3BCLE9BRG9CLEFBQ2I7O2NBZGYsQUFhNEI7aUNBYnBCLEFBQ2UsQUFZSztBQWJwQixBQUNOOztjQUdGLEFBUzRCLG9CQVRSLFlBQU0sQUFDeEI7a0JBQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLENBQUMsTUFBQSxBQUFLLE1BQTFDLEFBQWMsQUFBa0MsQUFDakQ7QUFPMkI7O2NBTDVCLEFBSzRCLFVBTGxCLENBQ1IsRUFBRSxPQUFGLEFBQVMsV0FBVyxTQUFTLE1BRHJCLEFBQ1IsQUFBa0MsQUFJUixBQUcxQjtjQUFBLEFBQUssSUFBSSxNQUhpQixBQUcxQixBQUFlO2VBQ2hCOzs7OztxQ0FFWSxBLE9BQU8sQUFDaEI7b0JBQUEsQUFBUSxJQUFSLEFBQWEsQUFDYjtBQUNIOzs7O2lDQUVTLEFBQ1I7QUFDQTtnQkFBSSxrQkFBSixBQUFzQixBQUN0QjtnQkFBSSxlQUFKLEFBQW1CLEFBQ25CO2dCQUFJLGlCQUFKLEFBQXFCLEFBRXJCOztBQUNBO0FBZUo7Ozs7Ozs7Ozs7Ozs7OztBQXFCSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWUsc0JBQWY7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjthQUFBLHlDQUNTLEtBQUwsQUFBUywyQkFBMEIsT0FBbkMsQUFBeUMsTUFBSyxRQUE5QyxBQUFxRCxNQUFLLEtBQTFELEFBQThELGdCQUE5RDs7OEJBQUE7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsY0FBQSxRQUFJLFdBQUosQUFBYyxzQkFBZDs7OEJBQUE7Z0NBQUEsQUFFQTtBQUZBOytCQUVBLGNBQUEsUUFBSSxXQUFKLEFBQWMsd0JBQWQ7OzhCQUFBO2dDQUFBLEFBQXlCO0FBQXpCOytCQUF5QixBQUFDLDhCQUFLLE9BQU4sQUFBWSxTQUFRLFFBQVEsRUFBQyxJQUE3QixBQUE0QixBQUFLOzhCQUFqQztnQ0FBQSxBQUF5QztBQUF6QzsrQkFBeUMsY0FBQSxPQUFHLFdBQUgsQUFBYSx3QkFBYjs7OEJBQUE7Z0NBQUEsQUFDaEU7QUFEZ0U7b0JBQ2hFLEFBQUssRUFIUCxBQUVBLEFBQXlCLEFBQXlDLEFBQ2hFLEFBQU8sQUFHUiw2QkFBQSxjQUFBLFFBQUksV0FBSixBQUFjLHdCQUFkOzs4QkFBQTtnQ0FBQSxBQUF5QjtBQUF6QjsrQkFBeUIsQUFBQyw4QkFBSyxPQUFOLEFBQVk7OEJBQVo7Z0NBQUEsQUFBZ0I7QUFBaEI7K0JBQWdCLGNBQUEsT0FBRyxXQUFILEFBQWEsd0JBQWI7OzhCQUFBO2dDQUFBLEFBQ3hDO0FBRHdDO29CQUN4QyxBQUFLLEVBUFAsQUFNQyxBQUF5QixBQUFnQixBQUN4QyxBQUFPLEFBSVIsMEJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYyx3QkFBZDs7OEJBQUE7Z0NBQUEsQUFBeUI7QUFBekI7K0JBQXlCLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQW9CO0FBQXBCOytCQUFvQixjQUFBLE9BQUcsV0FBSCxBQUFhLHdCQUFiOzs4QkFBQTtnQ0FBQSxBQUM1QztBQUQ0QztvQkFDNUMsQUFBSyxFQVpQLEFBV0MsQUFBeUIsQUFBb0IsQUFDNUMsQUFBTyxBQUlOLGVBQUEsQUFBSyxNQUFMLEFBQVcsMkJBQ0gsY0FBQSxRQUFJLFdBQUosQUFBYyxpQ0FBZDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYSw0QkFBMkIsZUFBeEMsQUFBb0QsWUFBVyxNQUEvRCxBQUFvRSxpQkFBcEU7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjt1REFDVSxXQUFOLEFBQWdCLHdDQUFoQjs7OEJBQUE7Z0NBREosQUFDSSxBQUNFO0FBREY7c0JBQ1EsS0FBQSxBQUFLLE1BSHJCLEFBQ0ksQUFFdUIsQUFFdkIsMkJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYyw2QkFBZDs7OEJBQUE7Z0NBQUEsQUFDRTtBQURGOytCQUNFLGNBQUE7NEJBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLCtCQUFJLGNBQUEsT0FBRyxNQUFILEFBQVEsaUJBQVI7OzhCQUFBO2dDQUFBO0FBQUE7ZUFETixBQUNFLEFBQUksQUFDSiw2QkFBQSxjQUFBOzRCQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSwrQkFBSSxjQUFBLE9BQUcsTUFBSCxBQUFRLEtBQUksU0FBUyxLQUFyQixBQUEwQiwwQkFBMUI7OzhCQUFBO2dDQUFBO0FBQUE7ZUFSbEIsQUFDUSxBQUtJLEFBRUUsQUFBSSxBQUtoQjtBQUNBO0FBQ0E7NEJBQUEsY0FBQSxRQUFJLFdBQUosQUFBYyx3QkFBZDs7OEJBQUE7Z0NBQUEsQUFBeUI7QUFBekI7K0JBQXlCLGNBQUEsT0FBRyxXQUFILEFBQWEsWUFBVyxNQUF4QixBQUE2QixLQUFJLFNBQVMsS0FBMUMsQUFBK0MsK0JBQS9DOzs4QkFBQTtnQ0FBQTtBQUFBO2VBQW9FLFVBQUEsQUFBSyxFQUF6RSxBQUFvRSxBQUFPLFVBakM3RyxBQUVJLEFBK0JLLEFBQXlCLEFBSTlCLHdCQUFBLEFBQUM7eUJBQ1UsS0FEWCxBQUNnQixBQUNkO3dCQUFRLEtBQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ25COzhCQUFjLEtBSGhCLEFBR3FCLEFBQ25CO2dDQUFnQixLQUpsQixBQUl1Qjs7OEJBSnZCO2dDQXJDSixBQXFDSTtBQUFBO0FBQ0U7eUJBdENOO3FCQURBLEFBQ0EsQUFtSEQ7QUFuSEM7Ozs7O0VBckVpQixnQkFBTSxBOztBQTJMM0IsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFVLEFBQ2pDOztrQkFDWSxNQURMLEFBQ1csQUFDaEI7ZUFBTyxNQUZULEFBQU8sQUFFUSxBQUVoQjtBQUpRLEFBQ0w7QUFGSjs7QUFPQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2tCQUNZLEFBQW1CLGdEQUR4QixBQUNLLEFBQTZCLEFBQ3ZDO3FCQUFhLEFBQW1CLG1EQUZsQyxBQUFPLEFBRVEsQUFBZ0MsQUFFaEQ7QUFKUSxBQUNMO0FBRko7O0FBT0EsQUFDQTtrQkFBZSw2QkFBVSxDQUFWLEFBQVUsQUFBQyxXQUFXLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsb0JBQTlELEFBQWUsQUFBc0IsQUFBNkMiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9