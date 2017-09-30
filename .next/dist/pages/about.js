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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/about.js?entry';


var About = function (_React$Component) {
  (0, _inherits3.default)(About, _React$Component);

  (0, _createClass3.default)(About, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
        var req = _ref2.req,
            store = _ref2.store,
            query = _ref2.query;
        var initProps, translations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // only support in server side if there is req in parameter
                initProps = {};

                initProps.locale = 'tw';
                _context.next = 4;
                return (0, _translationHelpers.getTranslation)(initProps.locale, ['common', 'namespace1'], 'http://localhost:3000/static/locales/');

              case 4:
                translations = _context.sent;

                initProps.translations = translations;
                console.log(query.id);
                return _context.abrupt('return', initProps);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function About(props) {
    (0, _classCallCheck3.default)(this, About);

    var _this = (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).call(this, props));

    _this.i18n = (0, _startI18n2.default)(props.translations, props.locale);
    console.log('hello about');
    return _this;
  }

  (0, _createClass3.default)(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'About us')), _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, this.props.url.query.id)), _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })));
    }
  }]);

  return About;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    count: state.count
  };
};
// export default About
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, null)(About);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ29va2llcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImluaXRTdG9yZSIsImFkZENvdW50Iiwic2V0VXNlcm5hbWUiLCJ3aXRoUmVkdXgiLCJ0cmFuc2xhdGUiLCJJMThuZXh0UHJvdmlkZXIiLCJzdGFydEkxOG4iLCJnZXRUcmFuc2xhdGlvbiIsIkhlYWQiLCJBYm91dCIsInJlcSIsInN0b3JlIiwicXVlcnkiLCJpbml0UHJvcHMiLCJsb2NhbGUiLCJ0cmFuc2xhdGlvbnMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJwcm9wcyIsImkxOG4iLCJ1cmwiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFVOztBQUM5QixBQUFPOzs7O0FBQ1AsQUFBUyxBQUNULEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0ksQUFHRDs7Ozs7OztZQUMyQixBLFlBQUEsQTtZQUFLLEEsYyxBQUFBO1ksQUFBTyxjQUFBLEE7Ozs7O21CQUFZO0FBQy9DO0EsNEJBQVksQUFDbEIsQTs7MEJBQUEsQUFBVSxTQUFWLEFBQW1COzt1QkFDUSx3Q0FDekIsVUFEeUIsQUFDZixRQUNWLENBQUEsQUFBQyxVQUZ3QixBQUV6QixBQUFXLGUsQUFGYyxBQUd6Qjs7bUJBSEk7QSx3Q0FLTjs7MEJBQUEsQUFBVSxlQUFWLEFBQXlCLEFBQ3pCO3dCQUFBLEFBQVEsSUFBSSxNQUFaLEFBQWtCO2lEQUNYLEE7Ozs7Ozs7Ozs7Ozs7OztBQUdUOzs7aUJBQUEsQUFBWSxPQUFPO3dDQUFBOztvSUFBQSxBQUNYLEFBQ047O1VBQUEsQUFBSyxPQUFPLHlCQUFVLE1BQVYsQUFBZ0IsY0FBYyxNQUExQyxBQUFZLEFBQW9DLEFBQ2hEO1lBQUEsQUFBUSxJQUhTLEFBR2pCLEFBQVk7V0FDYjs7Ozs7NkJBRVMsQUFDUjs2QkFDRSxBQUFDLCtDQUFnQixNQUFNLEtBQXZCLEFBQTRCO29CQUE1QjtzQkFBQSxBQUNBO0FBREE7T0FBQSxrQkFDQSxBQUFDLGtDQUFPLE9BQVIsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQTJCO0FBQTNCO3lCQUEyQixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FEN0IsQUFDRSxBQUEyQixBQUMzQiw4QkFBQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQTJCO0FBQTNCO3lCQUEyQixjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUZqRCxBQUVFLEFBQTJCLEFBQTBCLEFBQ3JELHNCQUFBLEFBQUM7O29CQUFEO3NCQUhGLEFBR0UsQUFFQTtBQUZBO0FBQUE7O29CQUVBO3NCQVBKLEFBQ0UsQUFDQSxBQUtFLEFBTUw7QUFOSztBQUFBOzs7OztFQTVCWSxnQkFBTSxBOztBQXFDMUIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFVLEFBQ2pDOztjQUNZLE1BREwsQUFDVyxBQUNoQjtXQUFPLE1BRlQsQUFBTyxBQUVRLEFBRWhCO0FBSlEsQUFDTDtBQUZKO0FBTUEsQUFDQTtrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLGlCQUFyQixBQUFzQyxNQUFyRCxBQUFlLEFBQTRDIiwiZmlsZSI6ImFib3V0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9