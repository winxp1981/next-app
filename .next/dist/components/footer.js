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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../routes');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _store = require('../store');

var _reactI18next = require('react-i18next');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/footer.js';
//import Link from 'next/link'


var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer(props, context) {
    (0, _classCallCheck3.default)(this, Footer);

    //console.log('@@ Header ctor isUserLoggedIn (' + Header.isUserLoggedIn + ')');
    var _this = (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call(this, props, context));

    _this.t = props.t;
    return _this;
  }

  (0, _createClass3.default)(Footer, [{
    key: 'handleLogout',
    value: function handleLogout(event) {
      console.log("logout");
      logoutUser();
    }
  }, {
    key: 'render',
    value: function render() {
      var footerDivStyle = {
        //    border: '1px solid red',
        width: '70%',
        height: '200px',
        //    height: '100px',
        //    backgroundColor: '#FFBB66',
        paddingTop: '80px',
        margin: '0 auto'
      };
      var dividerStyle = {
        //    border: '1px solid red',
        width: '100%',
        height: '3px',
        backgroundColor: '#DCDCDC'
      };
      return _react2.default.createElement('div', { style: footerDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_semanticUiReact.Divider, { style: dividerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_semanticUiReact.List, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_routes.Link, { route: 'about', params: { id: '888' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('a', { className: '', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, '\u95DC\u65BC\u6211\u5011'))), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, '\u806F\u7E6B\u6211\u5011'), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, '\u5DE5\u4F5C\u6A5F\u6703'), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, '\u670D\u52D9\u689D\u6B3E'), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, '\u554F\u8207\u7B54')), _react2.default.createElement(_semanticUiReact.List, { horizontal: true, floated: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, '2018 Roomoca. All Rights Reserved.')));
    }
  }]);

  return Footer;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

// export default Header
exports.default = (0, _reactI18next.translate)(['common'])((0, _reactRedux.connect)(null, null)(Footer));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImNvbm5lY3QiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwidHJhbnNsYXRlIiwiSGVhZCIsIlNlZ21lbnQiLCJEaXZpZGVyIiwiTGlzdCIsIkZvb3RlciIsInByb3BzIiwiY29udGV4dCIsInQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJsb2dvdXRVc2VyIiwiZm9vdGVyRGl2U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJtYXJnaW4iLCJkaXZpZGVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpZCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFVOztBQUM5QixBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFTLEFBQVMsQUFBUzs7Ozs7QUFQM0I7OztJQVVNLEE7a0NBRUo7O2tCQUFBLEFBQVksT0FBWixBQUFtQixTQUFTO3dDQUUxQjs7QUFGMEI7c0lBQUEsQUFDcEIsT0FEb0IsQUFDYixBQUViOztVQUFBLEFBQUssSUFBSSxNQUhpQixBQUcxQixBQUFlO1dBQ2hCOzs7OztpQyxBQUVZLE9BQU8sQUFDaEI7Y0FBQSxBQUFRLElBQVIsQUFBYSxBQUNiO0FBQ0g7Ozs7NkJBRVMsQUFDUjtVQUFJO0FBRUE7ZUFGaUIsQUFFVixBQUNQO2dCQUhpQixBQUdULEFBQ1o7QUFDQTtBQUNJO29CQU5pQixBQU1MLEFBQ1o7Z0JBUEosQUFBcUIsQUFPVCxBQUVaO0FBVHFCLEFBQ3JCO1VBUUk7QUFFQTtlQUZlLEFBRVIsQUFDUDtnQkFIZSxBQUdQLEFBQ1I7eUJBSkosQUFBbUIsQUFJRSxBQUVyQjtBQU5tQixBQUNuQjs2QkFNRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0E7QUFEQTtPQUFBLGtCQUNBLEFBQUMsMENBQVEsT0FBVCxBQUFnQjtvQkFBaEI7c0JBREEsQUFDQSxBQUNFO0FBREY7MEJBQ0UsQUFBQyx1Q0FBSyxZQUFOO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQVc7QUFBWDtBQUFBLHlCQUFXLEFBQUMsOEJBQUssT0FBTixBQUFZLFNBQVEsUUFBUSxFQUFDLElBQTdCLEFBQTRCLEFBQUs7b0JBQWpDO3NCQUFBLEFBQXlDO0FBQXpDO3lCQUF5QyxjQUFBLE9BQUcsV0FBSCxBQUFhO29CQUFiO3NCQUFBO0FBQUE7U0FEdEQsQUFDRSxBQUFXLEFBQXlDLEFBQ3BELCtDQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLDZDQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBSEYsQUFHRSxBQUNBLDZDQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBSkYsQUFJRSxBQUNBLDZDQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUE7QUFBQTtBQUFBLFNBUEosQUFFRSxBQUtFLEFBRUYsd0NBQUEsQUFBQyx1Q0FBSyxZQUFOLE1BQWlCLFNBQWpCLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQTtBQUFBO0FBQUEsU0FYTixBQUNFLEFBU0UsQUFDRSxBQU1QOzs7OztFQTlDa0IsZ0IsQUFBTTs7QUFpRDNCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQztTQUFBLEFBQU8sQUFFUjtBQUhEOztBQUtBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2QztTQUFBLEFBQU8sQUFFUjtBQUhEOztBQUtBLEFBQ0E7a0JBQWUsNkJBQVUsQ0FBVixBQUFVLEFBQUMsV0FBVyx5QkFBQSxBQUFRLE1BQVIsQUFBYyxNQUFuRCxBQUFlLEFBQXNCLEFBQW9CIiwiZmlsZSI6ImZvb3Rlci5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==