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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _footer = require('./footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/layout.js';
//import Link from 'next/link'


var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, this.props.title), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement('script', { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('link', { href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/font-awesome/css/font-awesome.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBNKKAhKocKWQ43dc6NT3fCyaLPTdxmAX0', type: 'text/javascript', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), this.props.children, _react2.default.createElement(_footer2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWQiLCJIZWFkZXIiLCJGb290ZXIiLCJMYXlvdXQiLCJwcm9wcyIsInRpdGxlIiwiY2hpbGRyZW4iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7O0FBSFA7OztJLEFBS007a0NBQ0o7O2tCQUFBLEFBQVksT0FBTzt3Q0FBQTs7aUlBQUEsQUFDWCxBQUNQOzs7Ozs2QkFFUyxBQUVSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQVM7QUFBVDtBQUFBLGNBQVMsQUFBSyxNQURoQixBQUNFLEFBQW9CLEFBQ3BCLGdEQUFNLFNBQU4sQUFBYztvQkFBZDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtvQkFBOUI7c0JBSEYsQUFHRSxBQUVBO0FBRkE7b0RBRVEsS0FBUixBQUFZO29CQUFaO3NCQUxGLEFBS0UsQUFDQTtBQURBO29EQUNRLEtBQVIsQUFBWTtvQkFBWjtzQkFORixBQU1FLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcseUVBQXdFLEtBQW5GLEFBQXVGO29CQUF2RjtzQkFQRixBQU9FLEFBRUE7QUFGQTtrREFFTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBVEYsQUFTRSxBQUVBO0FBRkE7b0RBRVEsS0FBUixBQUFZLDJGQUEwRixNQUF0RyxBQUEyRztvQkFBM0c7c0JBWEYsQUFXRSxBQUdBO0FBSEE7a0RBR00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7b0JBQTVCO3NCQWZKLEFBQ0UsQUFjRSxBQUVGO0FBRkU7MkJBRUYsQUFBQzs7b0JBQUQ7c0JBakJGLEFBaUJFLEFBRUU7QUFGRjtBQUFBLGVBRUUsQUFBSyxNQW5CVCxBQW1CZSxBQUViLDBCQUFBLEFBQUM7O29CQUFEO3NCQXRCSixBQUNFLEFBcUJFLEFBR0w7QUFISztBQUFBOzs7OztFQTdCYSxnQixBQUFNLEFBbUMzQjs7a0JBQUEsQUFBZTtBQUNmIiwiZmlsZSI6ImxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==