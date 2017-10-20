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
          lineNumber: 48
        }
      }, _react2.default.createElement('img', { src: '../static/img/react.png', width: '80', height: '80', alt: '', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement('ul', { className: 'header', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_routes.Link, { route: '/host', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, this.t('roomhost')))), _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement('a', { className: 'top_item', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, this.t('tenant')))), _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
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
      }, this.t('download_app')))), this.props.username ? _react2.default.createElement('li', { className: 'dropdown top_menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement('a', { className: 'dropdown-toggle top_item', 'data-toggle': 'dropdown', href: '#', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), ' ' + this.props.username), _react2.default.createElement('ul', { className: 'dropdown-menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('li', {
        'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('a', { href: '#', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, 'Profile')), _react2.default.createElement('li', {
        'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement('a', { href: '#', onClick: this.handleLogout, 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Logout')))) :
      //  loginDisplay = <li className="top_menu"><Link href='/login'><a className="top_item"> {this.t('login')} </a></Link></li>;
      //  loginDisplay = <li className="top_menu"><Button label={this.t('login')} onClick={this.handleToggle} /></li>;
      _react2.default.createElement('li', { className: 'top_menu', 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement('a', { className: 'top_item', href: '#', onClick: this.handleToggleLogin, 'data-jsx': 2926139411,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, ' ', this.t('login'), ' '))), _react2.default.createElement(_loginDialog2.default, {
        actions: this.actions,
        active: this.state.login_dialog_active,
        onEscKeyDown: this.handleToggleLogin,
        onOverlayClick: this.handleToggleLogin,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: 2926139411,
        css: 'div.header[data-jsx="2926139411"]{margin-right:30px}ul.header[data-jsx="2926139411"]{list-style:none;float:right}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"]{display:inline-block;padding:20px 0 20px;vertical-align:middle}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:hover,ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:focus,ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:active{color:#999;text-decoration:none}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]{font-family:Arial,\'Helvetica Neue\',Helvetica,sans-serif;text-decoration:none;position:relative;display:block;padding:16px 0;margin:0 12px;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:12px;line-height:16px;font-weight:900;text-transform:uppercase;-webkit-transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;transition:color 0.1s,background-color 0.1s,padding 0.2s ease-in;color:#000}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]::before{content:\'\';display:block;position:absolute;bottom:3px;left:0;height:3px;width:100%;background-color:#000;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(0,1);-ms-transform:scale(0,1);transform:scale(0,1);-webkit-transition:color 0.1s,-webkit-transform 0.1s ease-out;-webkit-transition:color 0.1s,transform 0.1s ease-out;transition:color 0.1s,transform 0.1s ease-out}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:active[data-jsx="2926139411"]::before{background-color:#000}ul.header[data-jsx="2926139411"] li.top_menu[data-jsx="2926139411"] a.top_item[data-jsx="2926139411"]:hover[data-jsx="2926139411"]::before,a.top_item[data-jsx="2926139411"]:focus[data-jsx="2926139411"]::before{-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1)}ul.dropdown-menu[data-jsx="2926139411"]{margin-top:-30px;margin-left:5px;min-width:0px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGb0IsQUFJaUMsQUFHSixBQVNPLEFBU1YsQUFJZ0QsQUFlaEQsQUFhVyxBQUdJLEFBS1QsV0F2Q0ksQUFtQlAsS0FoQ0osQ0FxRE0sQ0E3RHBCLEdBWXdCLENBeUN4QixHQVpzQixHQWhDdEIsSUFhQSxDQXdDa0IsUUFqRFEsRUE2QlgsSUFzQmYsT0FyQlcsRUFsQmMsS0FtQlYsRUE3QmYsU0E4QmUsS0FuQk8sTUFvQkksT0FVQSxLQTdCUixVQW9CWSxJQW5CWCxlQUNELGNBQ0ssMkJBMkJ2Qiw4QkFUMEIsb0NBakJQLGVBQ0UsaUJBQ0QsT0FnQjhCLFNBZnJCLHlCQUN3QyxnSUFlckUsVUFkZSxXQUNmIiwiZmlsZSI6ImNvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vL2ltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCI7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGluaXRTdG9yZSwgYWRkQ291bnQsIHNldFVzZXJuYW1lIH0gZnJvbSAnLi4vc3RvcmUnXG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExvZ2luRGlhbG9nIGZyb20gJy4vbG9naW5EaWFsb2cnXG4vL2ltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQge1xuICAgIGxvZ291dFVzZXJcbn0gZnJvbSAnLi9sb2dpbkRpYWxvZydcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgbG9naW5fZGlhbG9nX2FjdGl2ZTogZmFsc2VcbiAgfTtcblxuICBoYW5kbGVUb2dnbGVMb2dpbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtsb2dpbl9kaWFsb2dfYWN0aXZlOiAhdGhpcy5zdGF0ZS5sb2dpbl9kaWFsb2dfYWN0aXZlfSk7XG4gIH1cblxuICBhY3Rpb25zID0gW1xuICAgIHsgbGFiZWw6IFwiRGlzbWlzc1wiLCBvbkNsaWNrOiB0aGlzLmhhbmRsZVRvZ2dsZUxvZ2luIH0sXG4gIC8vICB7IGxhYmVsOiBcIlNhdmVcIiwgb25DbGljazogdGhpcy5oYW5kbGVUb2dnbGUgfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIC8vY29uc29sZS5sb2coJ0BAIEhlYWRlciBjdG9yIGlzVXNlckxvZ2dlZEluICgnICsgSGVhZGVyLmlzVXNlckxvZ2dlZEluICsgJyknKTtcbiAgICB0aGlzLnQgPSBwcm9wcy50XG4gIH1cblxuICBoYW5kbGVMb2dvdXQoZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nIChcImxvZ291dFwiKTtcbiAgICAgIGxvZ291dFVzZXIoKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgLy8gdmFyIGxvZ2luTXNnID0gPEZvcm1hdHRlZE1lc3NhZ2UgaWQ9J2xvZ2luJyBkZXNjcmlwdGlvbj0nJyBkZWZhdWx0TWVzc2FnZT0nTG9naW4nLz5cbiAgICB2YXIgY3VycmVudFVzZXJOYW1lID0gbnVsbDtcbiAgICB2YXIgbG9naW5EaXNwbGF5ID0gJyc7XG4gICAgdmFyIGlzVXNlckxvZ2dlZEluID0gZmFsc2U7XG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvcmVhY3QucG5nXCIgd2lkdGg9XCI4MFwiIGhlaWdodD1cIjgwXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgeyAvKiB1c2VyIExpbmsgdG8gYXZvaWQgdHJpZ2dlciBzZXJ2ZXIgcmVuZGVyICovIH1cbiAgICAgICAgIHtcbiAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxMaW5rIHJvdXRlPScvaG9zdCc+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIj5cbiAgICAgICAgIHt0aGlzLnQoJ3Jvb21ob3N0Jyl9XG4gICAgICAgICA8L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgICB9XG4gICAgICAgICB7XG4gICAgICAgICA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48TGluayByb3V0ZT0nLyc+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIj5cbiAgICAgICAgIHt0aGlzLnQoJ3RlbmFudCcpfVxuICAgICAgICAgPC9hPjwvTGluaz48L2xpPlxuICAgICAgICAgfVxuICAgICAgICAge1xuICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvcF9tZW51XCI+PExpbmsgcm91dGU9Jy8nPjxhIGNsYXNzTmFtZT1cInRvcF9pdGVtXCI+XG4gICAgICAgICB7dGhpcy50KCdkb3dubG9hZF9hcHAnKX1cbiAgICAgICAgIDwvYT48L0xpbms+PC9saT5cbiAgICAgICAgIH1cbiAgICAgICAgIHtcbiAgICAgICAgICAgdGhpcy5wcm9wcy51c2VybmFtZSA/IChcbiAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24gdG9wX21lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlIHRvcF9pdGVtXCIgZGF0YS10b2dnbGU9XCJkcm9wZG93blwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXVzZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB7ICcgJyArIHRoaXMucHJvcHMudXNlcm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJvZmlsZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTG9nb3V0fT5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICApXG4gICAgICAgICAgIDogKFxuICAgICAgICAgICAgIC8vICBsb2dpbkRpc3BsYXkgPSA8bGkgY2xhc3NOYW1lPVwidG9wX21lbnVcIj48TGluayBocmVmPScvbG9naW4nPjxhIGNsYXNzTmFtZT1cInRvcF9pdGVtXCI+IHt0aGlzLnQoJ2xvZ2luJyl9IDwvYT48L0xpbms+PC9saT47XG4gICAgICAgICAgICAgLy8gIGxvZ2luRGlzcGxheSA9IDxsaSBjbGFzc05hbWU9XCJ0b3BfbWVudVwiPjxCdXR0b24gbGFiZWw9e3RoaXMudCgnbG9naW4nKX0gb25DbGljaz17dGhpcy5oYW5kbGVUb2dnbGV9IC8+PC9saT47XG4gICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRvcF9tZW51XCI+PGEgY2xhc3NOYW1lPVwidG9wX2l0ZW1cIiBocmVmPScjJyBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZUxvZ2lufT4ge3RoaXMudCgnbG9naW4nKX0gPC9hPjwvbGk+XG4gICAgICAgICAgIClcbiAgICAgICAgIH1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPExvZ2luRGlhbG9nXG4gICAgICAgICAgYWN0aW9ucz17dGhpcy5hY3Rpb25zfVxuICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5sb2dpbl9kaWFsb2dfYWN0aXZlfVxuICAgICAgICAgIG9uRXNjS2V5RG93bj17dGhpcy5oYW5kbGVUb2dnbGVMb2dpbn1cbiAgICAgICAgICBvbk92ZXJsYXlDbGljaz17dGhpcy5oYW5kbGVUb2dnbGVMb2dpbn1cbiAgICAgICAgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi5oZWFkZXIge1xuICAgICAgICAgIC8qICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgICovXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgLypcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgICAgICAgKi9cbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwuaGVhZGVyIGxpLnRvcF9tZW51IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDAgMjBweDtcbiAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAvKiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICAqL1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmhvdmVyLFxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmZvY3VzLFxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmFjdGl2ZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgMTJweDtcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xcyxiYWNrZ3JvdW5kLWNvbG9yIDAuMXMscGFkZGluZyAwLjJzIGVhc2UtaW47XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzLHRyYW5zZm9ybSAwLjFzIGVhc2Utb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5oZWFkZXIgbGkudG9wX21lbnUgYS50b3BfaXRlbTphY3RpdmU6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsLmhlYWRlciBsaS50b3BfbWVudSBhLnRvcF9pdGVtOmhvdmVyOjpiZWZvcmUsIGEudG9wX2l0ZW06Zm9jdXM6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsLmRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAwcHg7XG4gICAgICAgICAgLyogICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47ICovXG4gICAgICAgICAgfVxuYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdXNlcm5hbWU6IHN0YXRlLnVzZXJuYW1lLFxuICAgIGNvdW50OiBzdGF0ZS5jb3VudFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKSxcbiAgICBzZXRVc2VybmFtZTogYmluZEFjdGlvbkNyZWF0b3JzKHNldFVzZXJuYW1lLCBkaXNwYXRjaCksXG4gIH1cbn1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5leHBvcnQgZGVmYXVsdCB0cmFuc2xhdGUoWydjb21tb24nXSkoY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKSlcbiJdfQ== */\n/*@ sourceURL=components/header.js */'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwidHJhbnNsYXRlIiwiSGVhZCIsIkxvZ2luRGlhbG9nIiwibG9nb3V0VXNlciIsIkhlYWRlciIsInByb3BzIiwiY29udGV4dCIsInN0YXRlIiwibG9naW5fZGlhbG9nX2FjdGl2ZSIsImhhbmRsZVRvZ2dsZUxvZ2luIiwic2V0U3RhdGUiLCJhY3Rpb25zIiwibGFiZWwiLCJvbkNsaWNrIiwidCIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRVc2VyTmFtZSIsImxvZ2luRGlzcGxheSIsImlzVXNlckxvZ2dlZEluIiwidXNlcm5hbWUiLCJoYW5kbGVMb2dvdXQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImRpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBUyxBQUFXLEFBQVU7O0FBQzlCLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUFQUDs7QUFRQSxBQUVBLEFBQ0k7O0ksQUFHRTtrQ0FjSjs7a0JBQUEsQUFBWSxPQUFaLEFBQW1CLFNBQVM7d0NBRTFCOztBQUYwQjtzSUFBQSxBQUNwQixPQURvQixBQUNiOztVQWRmLEFBYTRCOzJCQWJwQixBQUNlLEFBWUs7QUFicEIsQUFDTjs7VUFHRixBQVM0QixvQkFUUixZQUFNLEFBQ3hCO1lBQUEsQUFBSyxTQUFTLEVBQUMscUJBQXFCLENBQUMsTUFBQSxBQUFLLE1BQTFDLEFBQWMsQUFBa0MsQUFDakQ7QUFPMkI7O1VBTDVCLEFBSzRCLFVBTGxCLENBQ1IsRUFBRSxPQUFG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LEFBQStDLCtCQUEvQzs7b0JBQUE7c0JBQUE7QUFBQTtTQUFvRSxVQUFBLEFBQUssRUFBekUsQUFBb0UsQUFBTyxVQW5DN0csQUFFSSxBQWlDSyxBQUF5QixBQUk5Qix3QkFBQSxBQUFDO2lCQUNVLEtBRFgsQUFDZ0IsQUFDZDtnQkFBUSxLQUFBLEFBQUssTUFGZixBQUVxQixBQUNuQjtzQkFBYyxLQUhoQixBQUdxQixBQUNuQjt3QkFBZ0IsS0FKbEIsQUFJdUI7O29CQUp2QjtzQkF2Q0osQUF1Q0k7QUFBQTtBQUNFO2lCQXhDTjthQURBLEFBQ0EsQUFxSEQ7QUFySEM7Ozs7O0VBaENpQixnQixBQUFNOztBQXdKM0IsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFVLEFBQ2pDOztjQUNZLE1BREwsQUFDVyxBQUNoQjtXQUFPLE1BRlQsQUFBTyxBQUVRLEFBRWhCO0FBSlEsQUFDTDtBQUZKOztBQU9BLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztpQkFBYSxBQUFtQixtREFGbEMsQUFBTyxBQUVRLEFBQWdDLEFBRWhEO0FBSlEsQUFDTDtBQUZKOztBQU9BLEFBQ0E7a0JBQWUsNkJBQVUsQ0FBVixBQUFVLEFBQUMsV0FBVyx5QkFBQSxBQUFRLGlCQUFSLEFBQXlCLG9CQUE5RCxBQUFlLEFBQXNCLEFBQTZDIiwiZmlsZSI6ImhlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==