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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/index.js?entry';


var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'HOME')), _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.props.username)), _react2.default.createElement('div', { className: 'jumbotron', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.props.count)));
    }
  }], [{
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

        var initProps, cookies, _cookies;

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
                } else {
                  console.log("@@ getInitialProps @ client");
                  _cookies = new _universalCookie2.default();

                  console.log("@@ Header username = " + _cookies.get('username'));
                  initProps.username = _cookies.get('username');
                }

                store.dispatch((0, _store.setUsername)(initProps.username));
                return _context.abrupt('return', initProps);

              case 4:
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

  return Index;
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

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, mapDispatchToProps)(Index);

// export default Index
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwid2l0aFJlZHV4IiwiSW5kZXgiLCJwcm9wcyIsInVzZXJuYW1lIiwiY291bnQiLCJyZXEiLCJzdG9yZSIsImlzU2VydmVyIiwiaW5pdFByb3BzIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJjb29raWVzIiwiY29va2llIiwiZ2V0IiwiZGlzcGF0Y2giLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFVOztBQUM5QixBQUFPOzs7Ozs7Ozs7SUFFRCxBOzs7Ozs7Ozs7Ozs2QkEyQk0sQUFDUjs2QkFDQSxBQUFDLGtDQUFPLE9BQVIsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBQ0k7QUFESjtPQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFBMkI7QUFBM0I7eUJBQTJCLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUQvQixBQUNJLEFBQTJCLEFBQzNCLDBCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFBMkI7QUFBM0I7eUJBQTJCLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLGNBQU0sQUFBSyxNQUYxQyxBQUVJLEFBQTJCLEFBQWlCLEFBQzVDLDRCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFBMkI7QUFBM0I7eUJBQTJCLGNBQUE7O29CQUFBO3NCQUFBLEFBQU07QUFBTjtBQUFBLGNBQU0sQUFBSyxNQUoxQyxBQUNBLEFBR0ksQUFBMkIsQUFBaUIsQUFHakQ7OztTQWxDRjs7Ozs7Ozs7O1lBS2dDLEEsVyxBQUFBO1ksQUFBTSxhLEFBQUE7WUFBTyxBLGdCQUFBLEE7Ozs7Ozs7bUJBQWM7QUFDbEQ7QSw0QkFBWSxBLEFBQ2xCOztvQkFBSSxPQUFPLElBQVgsQUFBZSxTQUFTLEFBQ3RCOzBCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ047QUFGZ0IsNEJBRU4sQUFBSSw4QkFBUSxJQUFBLEFBQUksUUFGVixBQUVOLEFBQXdCLEFBQ3hDOzswQkFBQSxBQUFRLElBQUksMEJBQTBCLFFBQUEsQUFBUSxJQUE5QyxBQUFzQyxBQUFZLEFBQ2xEOzBCQUFBLEFBQVEsSUFBSSx1QkFBdUIsUUFBQSxBQUFRLElBQTNDLEFBQW1DLEFBQVksQUFDL0M7MEJBQUEsQUFBUSxJQUFJLHVCQUF1QixRQUFBLEFBQVEsSUFBM0MsQUFBbUMsQUFBWSxBQUMvQzs0QkFBQSxBQUFVLFdBQVcsUUFBQSxBQUFRLElBQTdCLEFBQXFCLEFBQVksQUFDbEM7QUFQRCx1QkFRSyxBQUNIOzBCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ047QUFGSCw2QkFBQSxBQUVhLEFBQUksQUFDcEI7OzBCQUFBLEFBQVEsSUFBSSwwQkFBMEIsU0FBQSxBQUFRLElBQTlDLEFBQXNDLEFBQVksQUFDbEQ7NEJBQUEsQUFBVSxXQUFXLFNBQUEsQUFBUSxJQUE3QixBQUFxQixBQUFZLEFBQ2xDO0FBRUQ7O3NCQUFBLEFBQU0sU0FBUyx3QkFBWSxVQUEzQixBQUFlLEFBQXNCO2lEQUM5QixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEJTLGdCQUFNLEE7O0FBdUMxQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1dBQU8sTUFGVCxBQUFPLEFBRVEsQUFFaEI7QUFKUSxBQUNMO0FBRko7O0FBT0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLEFBQW1CLGdEQUR4QixBQUNLLEFBQTZCLEFBQ3ZDO2lCQUFhLEFBQW1CLG1EQUZsQyxBQUFPLEFBRVEsQUFBZ0MsQUFFaEQ7QUFKUSxBQUNMO0FBRkosQUFPQTs7a0JBQWUsQUFBVSxrREFBVixBQUFxQixpQkFBckIsQUFBc0Msb0JBQXJELEFBQWUsQUFBMEQ7O0FBRXpFIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9