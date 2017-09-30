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

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/layout.js';


var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {

      var footerStyle = {
        //    border: '1px solid red',
        width: '100%',
        //  height: '200px',
        //    height: '100px',
        //    backgroundColor: '#FFBB66',
        paddingTop: '40px'
      };

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, this.props.title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/font-awesome/css/font-awesome.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBNKKAhKocKWQ43dc6NT3fCyaLPTdxmAX0', type: 'text/javascript', __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), this.props.children, _react2.default.createElement('div', { style: footerStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement(_semanticUiReact.Segment.Group, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'Left'), _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Middle'), _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Right'))));
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;
/*
export default ({ children,                                                                                                                                     }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="../static/font-awesome/css/font-awesome.min.css" />
    </Head>
    <Header />
    { this.props.userName }

    { children }

    <footer>
      {'Footer'}
    </footer>
  </div>
)
*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiSGVhZGVyIiwiU2VnbWVudCIsIkRpdmlkZXIiLCJMYXlvdXQiLCJwcm9wcyIsImZvb3RlclN0eWxlIiwid2lkdGgiLCJwYWRkaW5nVG9wIiwidGl0bGUiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVM7Ozs7Ozs7SSxBQUVaO2tDQUNKOztrQkFBQSxBQUFZLE9BQU87d0NBQUE7O2lJQUFBLEFBQ1gsQUFDUDs7Ozs7NkJBRVMsQUFFUjs7VUFBSTtBQUVBO2VBRmMsQUFFUCxBQUNUO0FBQ0Y7QUFDQTtBQUNJO29CQU5KLEFBQWtCLEFBTUYsQUFHaEI7QUFUa0IsQUFDbEI7OzZCQVNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUztBQUFUO0FBQUEsY0FBUyxBQUFLLE1BRGhCLEFBQ0UsQUFBb0IsQUFDcEIsZ0RBQU0sU0FBTixBQUFjO29CQUFkO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFIRixBQUdFLEFBRUE7QUFGQTtvREFFUSxLQUFSLEFBQVk7b0JBQVo7c0JBTEYsQUFLRSxBQUNBO0FBREE7b0RBQ1EsS0FBUixBQUFZO29CQUFaO3NCQU5GLEFBTUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyx5RUFBd0UsS0FBbkYsQUFBdUY7b0JBQXZGO3NCQVBGLEFBT0UsQUFFQTtBQUZBO2tEQUVNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO29CQUE1QjtzQkFURixBQVNFLEFBRUE7QUFGQTtvREFFUSxLQUFSLEFBQVksMkZBQTBGLE1BQXRHLEFBQTJHO29CQUEzRztzQkFYRixBQVdFLEFBR0E7QUFIQTtrREFHTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBZkosQUFDRSxBQWNFLEFBRUY7QUFGRTsyQkFFRixBQUFDOztvQkFBRDtzQkFqQkYsQUFpQkUsQUFFRTtBQUZGO0FBQUEsZUFFRSxBQUFLLE1BbkJULEFBbUJlLEFBRWIsMEJBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQzs7b0JBQUQ7c0JBREEsQUFDQSxBQUNBO0FBREE7QUFBQSwwQkFDQyxjQUFELHlCQUFBLEFBQVMsU0FBTSxZQUFmO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EseUJBQUEsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBRkYsQUFFRSxBQUNBLDJCQUFBLEFBQUM7O29CQUFEO3NCQUFBO0FBQUE7QUFBQSxTQTNCTixBQUNFLEFBcUJFLEFBRUEsQUFHRSxBQUtQOzs7OztFQWhEa0IsZ0JBQU0sQSxBQW1EM0I7O2tCQUFBLEFBQWU7QUFDZiIsImZpbGUiOiJsYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=