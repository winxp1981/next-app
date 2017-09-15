'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/about.js?entry';


var About = function (_React$Component) {
  (0, _inherits3.default)(About, _React$Component);

  function About() {
    (0, _classCallCheck3.default)(this, About);

    return (0, _possibleConstructorReturn3.default)(this, (About.__proto__ || (0, _getPrototypeOf2.default)(About)).apply(this, arguments));
  }

  (0, _createClass3.default)(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'About us')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            store = _ref.store;
        var initProps;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // only support in server side if there is req in parameter
                initProps = {};

                if (req && req.headers) {} else {}
                return _context.abrupt('return', initProps);

              case 3:
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

  return About;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    count: state.count
  };
};
// export default About
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, null)(About);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ29va2llcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImluaXRTdG9yZSIsImFkZENvdW50Iiwic2V0VXNlcm5hbWUiLCJ3aXRoUmVkdXgiLCJBYm91dCIsInJlcSIsInN0b3JlIiwiaW5pdFByb3BzIiwiaGVhZGVycyIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUyxBQUFXLEFBQVU7O0FBQzlCLEFBQU87Ozs7Ozs7OztJLEFBRUQ7Ozs7Ozs7Ozs7OzZCQVVNLEFBQ1I7NkJBQ0UsQUFBQyxrQ0FBTyxPQUFSLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQTJCO0FBQTNCO3lCQUEyQixjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FGL0IsQUFDRSxBQUNFLEFBQTJCLEFBR2hDOzs7Ozs7WSxBQWY4QixXQUFBLEE7WSxBQUFLLGEsQUFBQTs7Ozs7bUJBQVc7QUFDekM7QSw0QkFBWSxBQUNsQixBOztvQkFBSSxPQUFPLElBQVgsQUFBZSxTQUFTLEFBQ3ZCLENBREQsT0FFSyxBQUNKO2lEQUNNLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQVyxnQixBQUFNOztBQW1CMUIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFVLEFBQ2pDOztjQUNZLE1BREwsQUFDVyxBQUNoQjtXQUFPLE1BRlQsQUFBTyxBQUVRLEFBRWhCO0FBSlEsQUFDTDtBQUZKO0FBTUEsQUFDQTtrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLE1BQXJCLEFBQTJCLE1BQTFDLEFBQWUsQUFBaUMiLCJmaWxlIjoiYWJvdXQuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=