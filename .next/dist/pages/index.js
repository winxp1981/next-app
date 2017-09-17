'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactI18next = require('react-i18next');

var _startI18n = require('../tools/startI18n');

var _startI18n2 = _interopRequireDefault(_startI18n);

var _translationHelpers = require('../tools/translationHelpers');

var _ThemeProvider = require('react-toolbox/lib/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _theme = require('../static/theme');

var _theme2 = _interopRequireDefault(_theme);

var _Dropdown = require('react-toolbox/lib/dropdown/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/index.js?entry';


var cities = [{ value: 'New-Taipei City', label: '新北市' }, { value: 'Taipei City', label: '台北市' }, { value: 'HsinChu City', label: '新竹市' }];

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  (0, _createClass3.default)(Index, null, [{
    key: 'getInitialProps',

    /*
     constructor() {
       super();
     }
     */
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            store = _ref.store,
            isServer = _ref.isServer;

        var initProps, cookies, _cookies, translations;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // only support in server side if there is req in parameter
                initProps = {};

                if (req && req.headers) {
                  console.log("@@ getInitialProps @ server");
                  cookies = new _universalCookie2.default(req.headers.cookie);

                  console.log("@@ Header username = " + cookies.get('username'));
                  console.log("@@ Header email = " + cookies.get('email'));
                  console.log("@@ Header token = " + cookies.get('token'));
                  initProps.username = cookies.get('username');
                  console.log(req.headers['accept-language']);
                  //    cookies.set('locale', lang);
                } else {
                  console.log("@@ getInitialProps @ client");
                  _cookies = new _universalCookie2.default();

                  console.log("@@ Header username = " + _cookies.get('username'));
                  initProps.username = _cookies.get('username');
                }

                initProps.locale = 'tw';

                _context.next = 5;
                return (0, _translationHelpers.getTranslation)(initProps.locale, ['common', 'namespace1'], 'http://localhost:3000/static/locales/');

              case 5:
                translations = _context.sent;

                initProps.translations = translations;

                store.dispatch((0, _store.setUsername)(initProps.username));
                store.dispatch((0, _store.setLocale)(initProps.locale));
                return _context.abrupt('return', initProps);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.state = { value: 'Taipei City' };

    _this.handleChange = function (value) {
      _this.setState({ value: value });
    };

    _this.i18n = (0, _startI18n2.default)(props.translations, props.locale);
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      var cityDropdownStyle = {
        width: '100%'
      };
      var cityDropdownDivStyle = {
        width: '10%'
      };
      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, 'HOME')), _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('link', { href: '/static/theme.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react2.default.createElement(_ThemeProvider2.default, { theme: _theme2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('div', { style: cityDropdownDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_Dropdown2.default, {
        auto: true,
        onChange: this.handleChange,
        source: cities,
        value: this.state.value,
        style: cityDropdownStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))), _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, this.props.username))));
    }
  }]);

  return Index;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    count: state.count,
    locale: state.locale
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: (0, _redux.bindActionCreators)(_store.addCount, dispatch),
    setUsername: (0, _redux.bindActionCreators)(_store.setUsername, dispatch),
    setLocale: (0, _redux.bindActionCreators)(_store.setLocale, dispatch)
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, mapDispatchToProps)(Index);

// export default Index
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwic2V0TG9jYWxlIiwid2l0aFJlZHV4IiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJUaGVtZVByb3ZpZGVyIiwiSGVhZCIsInRoZW1lIiwiRHJvcGRvd24iLCJjaXRpZXMiLCJ2YWx1ZSIsImxhYmVsIiwiSW5kZXgiLCJyZXEiLCJzdG9yZSIsImlzU2VydmVyIiwiaW5pdFByb3BzIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJjb29raWVzIiwiY29va2llIiwiZ2V0IiwidXNlcm5hbWUiLCJsb2NhbGUiLCJ0cmFuc2xhdGlvbnMiLCJkaXNwYXRjaCIsInByb3BzIiwic3RhdGUiLCJoYW5kbGVDaGFuZ2UiLCJzZXRTdGF0ZSIsImkxOG4iLCJjaXR5RHJvcGRvd25TdHlsZSIsIndpZHRoIiwiY2l0eURyb3Bkb3duRGl2U3R5bGUiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQ0UsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLENBQ2IsRUFBRSxPQUFGLEFBQVMsbUJBQW1CLE9BRGYsQUFDYixBQUFtQyxTQUNuQyxFQUFFLE9BQUYsQUFB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QUFHVSxBQUNSO2VBQU8sS0FBQSxBQUFLLE1BSmQsQUFJb0IsQUFDbEI7ZUFMRixBQUtTOztvQkFMVDtzQkFQSixBQUtJLEFBQ0EsQUFDQSxBQVNBO0FBVEE7QUFDRSw0QkFRRixjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQTJCO0FBQTNCO3lCQUEyQixjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxjQUFNLEFBQUssTUFsQjFDLEFBQ0EsQUFDQSxBQWdCSSxBQUEyQixBQUFpQixBQUlqRDs7Ozs7RUEvRWlCLGdCQUFNLEE7O0FBbUYxQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1dBQU8sTUFGRixBQUVRLEFBQ2I7WUFBUSxNQUhWLEFBQU8sQUFHUyxBQUVqQjtBQUxRLEFBQ0w7QUFGSjs7QUFRQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2NBQ1ksQUFBbUIsZ0RBRHhCLEFBQ0ssQUFBNkIsQUFDdkM7aUJBQWEsQUFBbUIsbURBRjNCLEFBRVEsQUFBZ0MsQUFDN0M7ZUFBVyxBQUFtQixpREFIaEMsQUFBTyxBQUdNLEFBQThCLEFBRTVDO0FBTFEsQUFDTDtBQUZKLEFBUUE7O2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsaUJBQXJCLEFBQXNDLG9CQUFyRCxBQUFlLEFBQTBEOztBQUV6RSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==