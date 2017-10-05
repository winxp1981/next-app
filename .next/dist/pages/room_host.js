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

var _addRoom = require('../components/addRoom');

var _addRoom2 = _interopRequireDefault(_addRoom);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/room_host.js?entry';


var RoomHost = function (_React$Component) {
  (0, _inherits3.default)(RoomHost, _React$Component);

  (0, _createClass3.default)(RoomHost, null, [{
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
                return _context.abrupt('return', initProps);

              case 7:
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

  function RoomHost(props) {
    (0, _classCallCheck3.default)(this, RoomHost);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RoomHost.__proto__ || (0, _getPrototypeOf2.default)(RoomHost)).call(this, props));

    _this.i18n = (0, _startI18n2.default)(props.translations, props.locale);
    console.log('hello room_host');
    return _this;
  }

  (0, _createClass3.default)(RoomHost, [{
    key: 'render',
    value: function render() {
      var headerDivStyle = {
        //  border: '1px red solid',
        width: '20%',
        margin: '0 auto'
      };
      var addRoomDivStyle = {
        //  border: '1px red solid',
        width: '80%',
        margin: '0 auto'
      };
      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('div', { style: headerDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', icon: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'home', color: 'orange', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(_semanticUiReact.Header.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, '\u623F\u6771\u5C08\u5340'))), _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement('div', { style: addRoomDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_addRoom2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }))));
    }
  }]);

  return RoomHost;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    count: state.count
  };
};
// export default About
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, null)(RoomHost);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jvb21faG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwid2l0aFJlZHV4IiwidHJhbnNsYXRlIiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJIZWFkIiwiQWRkUm9vbSIsIkhlYWRlciIsIkltYWdlIiwiSXRlbSIsIkljb24iLCJSb29tSG9zdCIsInJlcSIsInN0b3JlIiwicXVlcnkiLCJpbml0UHJvcHMiLCJsb2NhbGUiLCJ0cmFuc2xhdGlvbnMiLCJwcm9wcyIsImkxOG4iLCJjb25zb2xlIiwibG9nIiwiaGVhZGVyRGl2U3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsImFkZFJvb21EaXZTdHlsZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUyxBQUFXLEFBQVU7O0FBQzlCLEFBQU87Ozs7QUFDUCxBQUFTLEFBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBUSxBQUFPLEFBQU07Ozs7Ozs7SSxBQUd4Qjs7Ozs7OztZLEFBQzJCLFksQUFBQTtZLEFBQUssYyxBQUFBO1ksQUFBTyxjLEFBQUE7Ozs7O21CQUFZO0FBQy9DO0EsNEJBQVksQUFDbEIsQTs7MEJBQUEsQUFBVSxTQUFWLEFBQW1COzt1QkFDUSx3Q0FDekIsVUFEeUIsQUFDZixRQUNWLENBQUEsQUFBQyxVQUZ3QixBQUV6QixBQUFXLGU7O21CQUZQO0Esd0NBS047OzBCQUFBLEFBQVUsZUFBVixBQUF5QjtpREFDbEIsQTs7Ozs7Ozs7Ozs7Ozs7O0FBR1Q7OztvQkFBQSxBQUFZLE9BQU87d0NBQUE7OzBJQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLLE9BQU8seUJBQVUsTUFBVixBQUFnQixjQUFjLE1BQTFDLEFBQVksQUFBb0MsQUFDaEQ7WUFBQSxBQUFRLElBSFMsQUFHakIsQUFBWTtXQUNiOzs7Ozs2QkFFUyxBQUNSO1VBQUk7QUFFRjtlQUZtQixBQUVaLEFBQ1A7Z0JBSEYsQUFBcUIsQUFHWCxBQUVWO0FBTHFCLEFBQ3JCO1VBSUk7QUFFRjtlQUZvQixBQUViLEFBQ1A7Z0JBSEYsQUFBc0IsQUFHWixBQUVWO0FBTHNCLEFBQ3RCOzZCQUtFLEFBQUMsK0NBQWdCLE1BQU0sS0FBdkIsQUFBNEI7b0JBQTVCO3NCQUFBLEFBQ0E7QUFEQTtPQUFBLGtCQUNBLEFBQUMsa0NBQU8sT0FBUixBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxPQUFMLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssTUFBaEI7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssTUFBTixBQUFXLFFBQU8sT0FBbEIsQUFBd0IsVUFBUyxNQUFqQyxBQUFzQztvQkFBdEM7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0MsY0FBRCx3QkFBQSxBQUFROztvQkFBUjtzQkFBQTtBQUFBO0FBQUEsU0FKTixBQUNFLEFBQ0UsQUFFRSxBQUtKLCtDQUFBLEFBQUM7O29CQUFEO3NCQVRGLEFBU0UsQUFFQTtBQUZBO0FBQUEsMEJBRUEsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQzs7b0JBQUQ7c0JBZEosQUFDRSxBQUNBLEFBV0UsQUFDQSxBQUtMO0FBTEs7QUFBQTs7Ozs7RUE1Q2UsZ0JBQU0sQTs7QUFvRDdCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQzs7Y0FDWSxNQURMLEFBQ1csQUFDaEI7V0FBTyxNQUZULEFBQU8sQUFFUSxBQUVoQjtBQUpRLEFBQ0w7QUFGSjtBQU1BLEFBQ0E7a0JBQWUsQUFBVSxrREFBVixBQUFxQixpQkFBckIsQUFBc0MsTUFBckQsQUFBZSxBQUE0QyIsImZpbGUiOiJyb29tX2hvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=