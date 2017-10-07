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

var _jsxFileName = '/home/morris/project/nextjs/pages/room_detail.js?entry';


var RoomDetail = function (_React$Component) {
  (0, _inherits3.default)(RoomDetail, _React$Component);

  (0, _createClass3.default)(RoomDetail, null, [{
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

  function RoomDetail(props) {
    (0, _classCallCheck3.default)(this, RoomDetail);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RoomDetail.__proto__ || (0, _getPrototypeOf2.default)(RoomDetail)).call(this, props));

    _this.i18n = (0, _startI18n2.default)(props.translations, props.locale);
    console.log('hello RoomDetail');
    return _this;
  }

  (0, _createClass3.default)(RoomDetail, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'Room')), _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, this.props.url.query.id)), _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      })));
    }
  }]);

  return RoomDetail;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    count: state.count
  };
};
// export default About
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, null)(RoomDetail);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jvb21fZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5pdFN0b3JlIiwiYWRkQ291bnQiLCJzZXRVc2VybmFtZSIsIndpdGhSZWR1eCIsInRyYW5zbGF0ZSIsIkkxOG5leHRQcm92aWRlciIsInN0YXJ0STE4biIsImdldFRyYW5zbGF0aW9uIiwiSGVhZCIsIlJvb21EZXRhaWwiLCJyZXEiLCJzdG9yZSIsInF1ZXJ5IiwiaW5pdFByb3BzIiwibG9jYWxlIiwidHJhbnNsYXRpb25zIiwiY29uc29sZSIsImxvZyIsImlkIiwicHJvcHMiLCJpMThuIiwidXJsIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VybmFtZSIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFVOztBQUM5QixBQUFPOzs7O0FBQ1AsQUFBUyxBQUNULEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7O0ksQUFHRDs7Ozs7OztZLEFBQzJCLFlBQUEsQTtZQUFLLEEsYyxBQUFBO1lBQU8sQSxjQUFBLEE7Ozs7O21CQUFZO0FBQy9DO0EsNEIsQUFBWSxBQUNsQjs7MEJBQUEsQUFBVSxTQUFWLEFBQW1COzt1QkFDUSx3Q0FDekIsVUFEeUIsQUFDZixRQUNWLENBQUEsQUFBQyxVQUZ3QixBQUV6QixBQUFXLGU7O21CQUZQO0Esd0NBS047OzBCQUFBLEFBQVUsZUFBVixBQUF5QixBQUN6Qjt3QkFBQSxBQUFRLElBQUksTUFBWixBQUFrQjtpREFDWCxBOzs7Ozs7Ozs7Ozs7Ozs7QUFHVDs7O3NCQUFBLEFBQVksT0FBTzt3Q0FBQTs7OElBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUssT0FBTyx5QkFBVSxNQUFWLEFBQWdCLGNBQWMsTUFBMUMsQUFBWSxBQUFvQyxBQUNoRDtZQUFBLEFBQVEsSUFIUyxBQUdqQixBQUFZO1dBQ2I7Ozs7OzZCQUVTLEFBQ1I7NkJBQ0UsQUFBQywrQ0FBZ0IsTUFBTSxLQUF2QixBQUE0QjtvQkFBNUI7c0JBQUEsQUFDQTtBQURBO09BQUEsa0JBQ0EsQUFBQyxrQ0FBTyxPQUFSLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUEyQjtBQUEzQjt5QkFBMkIsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRDdCLEFBQ0UsQUFBMkIsQUFDM0IsMEJBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUEyQjtBQUEzQjt5QkFBMkIsY0FBQTs7b0JBQUE7c0JBQUEsQUFBSztBQUFMO0FBQUEsY0FBSyxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFGakQsQUFFRSxBQUEyQixBQUEwQixBQUNyRCxzQkFBQSxBQUFDOztvQkFBRDtzQkFIRixBQUdFLEFBRUE7QUFGQTtBQUFBOztvQkFFQTtzQkFQSixBQUNFLEFBQ0EsQUFLRSxBQU1MO0FBTks7QUFBQTs7Ozs7RUE1QmlCLGdCQUFNLEE7O0FBcUMvQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1dBQU8sTUFGVCxBQUFPLEFBRVEsQUFFaEI7QUFKUSxBQUNMO0FBRko7QUFNQSxBQUNBO2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsaUJBQXJCLEFBQXNDLE1BQXJELEFBQWUsQUFBNEMiLCJmaWxlIjoicm9vbV9kZXRhaWwuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=