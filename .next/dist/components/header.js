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

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _store = require('../store');

var _reactI18next = require('react-i18next');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

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

      return _react2.default.createElement('div', { className: 'header', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('img', { src: '../static/img/react.png', width: '80', height: '80', alt: '', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement('ul', { className: 'header', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, this.t('tenant')))), _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_routes.Link, { route: '/host', __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, this.t('roomhost')))), this.props.username ? _react2.default.createElement('li', { className: 'dropdown top_menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('a', { className: 'dropdown-toggle top_item', 'data-toggle': 'dropdown', href: '#', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), ' ' + this.props.username), _react2.default.createElement('ul', { className: 'dropdown-menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement('li', {
        'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('a', { href: '#', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Profile')), _react2.default.createElement('li', {
        'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement('a', { href: '#', onClick: this.handleLogout, 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, 'Logout')))) :
      //  loginDisplay = <li className="top_menu"><Link href='/login'><a className="top_item"> {this.t('login')} </a></Link></li>;
      //  loginDisplay = <li className="top_menu"><Button label={this.t('login')} onClick={this.handleToggle} /></li>;
      _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('a', { className: 'top_item', href: '#', onClick: this.handleToggleLogin, 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, ' ', this.t('login'), ' '))), _react2.default.createElement(_loginDialog2.default, {
        actions: this.actions,
        active: this.state.login_dialog_active,
        onEscKeyDown: this.handleToggleLogin,
        onOverlayClick: this.handleToggleLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 2926139411,
        css: 'div.header[data-jsx="2926139411"]{margin-right:30px}ul.header[data-jsx="2926139411"]{list-style:none;float:right}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"]{display:inline-block;padding:20px 0 20px;vertical-align:middle}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:hover,ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:focus,ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:active{color:#999;text-decoration:none}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]{font-family:Arial,\'Helvetica Neue\',Helvetica,sans-serif;text-decoration:none;position:relative;display:block;padding:16px 0;margin:0 12px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:12px;line-height:16px;font-weight:900;text-transform:uppercase;-webkit-transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;color:#000}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]::before{content:\'\';display:block;position:absolute;bottom:3px;left:0;height:3px;width:100%;background-color:#000;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transition:color 0.1s,-webkit-transform 0.1s ease-out;-webkit-transition:color 0.1s,transform 0.1s ease-out;transition:color 0.1s,transform 0.1s ease-out}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:active[data-jsx="2926139411"]::before{background-color:#000}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:hover[data-jsx="2926139411"]::before,a.top_item[data-jsx="2926139411"]:focus[data-jsx="2926139411"]::before{-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1)}ul.dropdown-menu[data-jsx="2926139411"]{margin-top:-30px;margin-left:5px;min-width:0px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHb0IsQUFJaUMsQUFHSixBQVNPLEFBU1YsQUFJZ0QsQUFlaEQsQUFhVyxBQUdJLEFBS1QsV0F2Q0ksQUFtQlAsS0FoQ0osQ0FxRE0sQ0E3RHBCLEdBWXdCLENBeUN4QixHQVpzQixHQWhDdEIsSUFhQSxDQXdDa0IsUUFqRFEsRUE2QlgsSUFzQmYsT0FyQlcsRUFsQmMsS0FtQlYsRUE3QmYsU0E4QmUsS0FuQk8sTUFvQkksT0FVQSxLQTdCUixVQW9CWSxJQW5CWCxlQUNELGNBQ0ssMkJBMkJ2Qiw4QkFUMEIsb0NBakJQLGVBQ0UsaUJBQ0QsT0FnQjhCLFNBZnJCLHlCQUN3QyxnSUFlckUsVUFkZSxXQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGluaXRTdG9yZSwgYWRkQ291bnQsIHNldFVzZXJuYW1lIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExvZ2luRGlhbG9nIGZyb20gJy4vbG9naW5EaWFsb2cnXG5cbi8vaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG4vKlxuaW1wb3J0IHtcbiAgICBCdXR0b24sXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5pbXBvcnQge1xuICAgIExpbmssXG59IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG4qL1xuaW1wb3J0IHtcbiAgICBsb2dvdXRVc2VyXG59IGZyb20gJy4vbG9naW5EaWFsb2cnXG4vL2ltcG9ydCB7IEZvcm1hdHRlZE1lc3NhZ2UgfSBmcm9tICdyZWFjdC1pbnRsJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbG9naW5fZGlhbG9nX2FjdGl2ZTogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVUb2dnbGVMb2dpbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dpbl9kaWFsb2dfYWN0aXZlOiAhdGhpcy5zdGF0ZS5sb2dpbl9kaWFsb2dfYWN0aXZlfSk7XG4gIH1cblxuICBhY3Rpb25zID0gW1xuICAgIHsgbGFiZWw6IFwiRGlzbWlzc1wiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVRvZ2dsZUxvZ2luIH0sXG4gIC8vICB7IGxhYmVsOiBcIlNhdmVcIiwgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGUgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIC8vY29uc29sZS5sb2coJ0BAIEhlYWRlciBjdG9yIGlzVXNlckxvZ2dlZEluICgnICsgSGVhZGVyLmlzVXNlckxvZ2dlZEluICsgJyknKTtcbiAgICB0aGlzLnQgPSBwcm9wcy50XG4gIH1cblxuICBoYW5kbGVMb2dvdXQoZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nIChcImxvZ291dFwiKTtcbiAgICAgIGxvZ291dFVzZXIoKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgLy8gdmFyIGxvZ2luTXNnID0gPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9J2xvZ2luJyBkZXNjcmlwdGlvbj0nJyBkZWZhdWx0TWVzc2FnZT0nTG9naW4nLz5cbiAgICB2YXIgY3VycmVudFVzZXJOYW1lID0gbnVsbDtcbiAgICB2YXIgbG9naW5EaXNwbGF5ID0gJyc7XG4gICAgdmFyIGlzVXNlckxvZ2dlZEluID0gZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvcmVhY3QucG5nXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgeyAvKiB1c2VyIExpbmsgdG8gYXZvaWQgdHJpZ2dlciBzZXJ2ZXIgcmVuZGVyICovIH1cbiAgICAgICAgIHtcbiAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxMaW5rIHJvdXRlPScvJz48YSBjbGFzc05hbWU9XCJ0b3BfaXRlbVwiPlxuICAgICAgICAge3RoaXMudCgndGVuYW50Jyl9XG4gICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICB9XG4gICAgICAgICB7XG4gICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48TGluayByb3V0ZT0nL2hvc3QnPjxhIGNsYXNzTmFtZT1cInRvcF9pdGVtXCI+XG4gICAgICAgICB7dGhpcy50KCdyb29taG9zdCcpfVxuICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgfVxuICAgICAgICAge1xuICAgICAgICAgICB0aGlzLnByb3BzLnVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93biB0b3BfbWVudVwiPlxuICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi10b2dnbGUgdG9wX2l0ZW1cIiBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdseXBoaWNvbiBnbHlwaGljb24tdXNlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJyAnICsgdGhpcy5wcm9wcy51c2VybmFtZSB9XG4gICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Qcm9maWxlPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5oYW5kbGVMb2dvdXR9PkxvZ291dDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgIClcbiAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgLy8gIGxvZ2luRGlzcGxheSA9IDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxMaW5rIGhyZWY9Jy9sb2dpbic+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIj4ge3RoaXMudCgnbG9naW4nKX0gPC9hPjwvTGluaz48L2xpPjtcbiAgICAgICAgICAgICAvLyAgbG9naW5EaXNwbGF5ID0gPGxpIGNsYXNzTmFtZT1cInRvcF9tZW51XCI+PEJ1dHRvbiBsYWJlbD17dGhpcy50KCdsb2dpbicpfSBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZX0gLz48L2xpPjtcbiAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48YSBjbGFzc05hbWU9XCJ0b3BfaXRlbVwiIGhyZWY9JyMnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlTG9naW59PiB7dGhpcy50KCdsb2dpbicpfSA8L2E+PC9saT5cbiAgICAgICAgICAgKVxuICAgICAgICAgfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8TG9naW5EaWFsb2dcbiAgICAgICAgICBhY3Rpb25zPXt0aGlzLmFjdGlvbnN9XG4gICAgICAgICAgYWN0aXZlPXt0aGlzLnN0YXRlLmxvZ2luX2RpYWxvZ19hY3RpdmV9XG4gICAgICAgICAgb25Fc2NLZXlEb3duPXt0aGlzLmhhbmRsZVRvZ2dsZUxvZ2lufVxuICAgICAgICAgIG9uT3ZlcmxheUNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUxvZ2lufVxuICAgICAgICAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LmhlYWRlciB7XG4gICAgICAgICAgLyogICAgYm9yZGVyOiAxcHggc29saWQgcmVkOyAgKi9cbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAvKlxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICAqL1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMCAyMHB4O1xuICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIC8qICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW06aG92ZXIsXG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW06Zm9jdXMsXG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW06YWN0aXZlIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW0ge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDA7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxMnB4O1xuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzLGJhY2tncm91bmQtY29sb3IgMC4xcyxwYWRkaW5nIDAuMnMgZWFzZS1pbjtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOjpiZWZvcmUge1xuICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgYm90dG9tOiAzcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMXMsdHJhbnNmb3JtIDAuMXMgZWFzZS1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmFjdGl2ZTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IGEudG9wX2l0ZW06aG92ZXI6OmJlZm9yZSwgYS50b3BfaXRlbTpmb2N1czo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwuZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDBweDtcbiAgICAgICAgICAvKiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjsgKi9cbiAgICAgICAgICB9XG5gfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTogc3RhdGUudXNlcm5hbWUsXG4gICAgY291bnQ6IHN0YXRlLmNvdW50XG4gIH1cbn1cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgYWRkQ291bnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhhZGRDb3VudCwgZGlzcGF0Y2gpLFxuICAgIHNldFVzZXJuYW1lOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0VXNlcm5hbWUsIGRpc3BhdGNoKSxcbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBIZWFkZXJcbmV4cG9ydCBkZWZhdWx0IHRyYW5zbGF0ZShbJ2NvbW1vbiddKShjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShIZWFkZXIpKVxuIl19 */\n/*@ sourceURL=components/header.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwidHJhbnNsYXRlIiwiSGVhZCIsIkxvZ2luRGlhbG9nIiwibG9nb3V0VXNlciIsIkhlYWRlciIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibG9naW5fZGlhbG9nX2FjdGl2ZSIsImhhbmRsZVRvZ2dsZUxvZ2luIiwic2V0U3RhdGUiLCJhY3Rpb25zIiwibGFiZWwiLCJvbkNsaWNrIiwidCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyTmFtZSIsImxvZ2luRGlzcGxheSIsImlzVXNlckxvZ2dlZEluIiwidXNlcm5hbWUiLCJoYW5kbGVMb2dvdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFXLEFBQVU7O0FBQzlCLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUFQUDs7O0FBU0E7QUFDQSxBQVNBLEFBQ0k7Ozs7Ozs7Ozs7QUFFSjs7SUFFTSxBO2tDQWNKOztrQkFBQSxBQUFZLE9BQVosQUFBbUIsU0FBUzt3Q0FFMUI7O0FBRjBCO3NJQUFBLEFBQ3BCLE9BRG9CLEFBQ2I7O1VBZGYsQUFhNEI7MkJBYnBCLEFBQ2UsQUFZSztBQWJwQixBQUNOOztVQUdGLEFBUzRCLG9CQVRSLFlBQU0sQUFDeEI7WUFBQSxBQUFLLFNBQVMsRUFBQyxxQkFBcUIsQ0FBQyxNQUFBLEFBQUssTUFBMUMsQUFBYyxBQUFrQyxBQUNqRDtBQU8yQjs7VUFMNUIsQUFLNEIs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QixBQUl1Qjs7b0JBSnZCO3NCQWxDSixBQWtDSTtBQUFBO0FBQ0U7aUJBbkNOO2FBREEsQUFDQSxBQWdIRDtBQWhIQzs7Ozs7RUFoQ2lCLGdCQUFNLEE7O0FBbUozQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1dBQU8sTUFGVCxBQUFPLEFBRVEsQUFFaEI7QUFKUSxBQUNMO0FBRko7O0FBT0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLEFBQW1CLGdEQUR4QixBQUNLLEFBQTZCLEFBQ3ZDO2lCQUFhLEFBQW1CLG1EQUZsQyxBQUFPLEFBRVEsQUFBZ0MsQUFFaEQ7QUFKUSxBQUNMO0FBRko7O0FBT0EsQUFDQTtrQkFBZSw2QkFBVSxDQUFWLEFBQVUsQUFBQyxXQUFXLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsb0JBQTlELEFBQWUsQUFBc0IsQUFBNkMiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9