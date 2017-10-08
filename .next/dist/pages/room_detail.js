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

var _semanticUiReact = require('semantic-ui-react');

var _reactResponsiveCarousel = require('react-responsive-carousel');

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
        var initProps, translations, response, data;
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

                // fetch room detail
                console.log('RoomDetail (id: ' + query.id + ')');
                _context.next = 9;
                return fetch('http://localhost:8000/rooms/' + query.id, {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 9:
                response = _context.sent;
                _context.next = 12;
                return response.json();

              case 12:
                data = _context.sent;

                console.log(response.status);
                //console.log(data);
                if (response.status === 200) {
                  console.log('title: ' + data.title);
                  console.log('description: ' + data.description);
                  console.log('location: ' + data.location);
                  initProps.room_detail = data;
                } else {}

                return _context.abrupt('return', initProps);

              case 16:
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
    return _this;
  }

  (0, _createClass3.default)(RoomDetail, [{
    key: 'render',
    value: function render() {
      var roomPhotos = this.props.room_detail.room_photos.map(function (room_photos, index) {

        return _react2.default.createElement('div', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }, _react2.default.createElement('img', { src: room_photos.photo, __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }));
      });

      var gridDivStyle = {
        //  border: '1px solid red',
        width: '80%',
        margin: '0 auto',
        marginTop: '100px'
      };
      var carouselDivStyle = {
        // https://stackoverflow.com/questions/10487292/position-absolute-but-relative-to-parent
        //    position: 'relative',
        width: '100%',
        //  height: '300px',
        //  border: '1px solid green',
        marginTop: '0px'
      };
      var testBorder = {
        //    border: '1px solid blue',
      };
      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to Roomoca', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/react-responsive-carousel/carousel.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, this.props.room_detail.title))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('div', { style: carouselDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_reactResponsiveCarousel.Carousel, { showStatus: true, showIndicators: true, showThumbs: false, infiniteLoop: false, autoPlay: false, dynamicHeight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, roomPhotos))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, '\u66AB\u6642\u7559\u767D'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, label: '/\u6708', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_quarter, label: '/\u5B63', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_year, label: '/\u5E74', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }))))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, this.props.room_detail.description)), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, this.props.room_detail.balcony ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u967D\u53F0', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u967D\u53F0', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), this.props.room_detail.pet ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u990A\u5BF5\u7269', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u990A\u5BF5\u7269', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), this.props.room_detail.cook ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u958B\u4F19', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u958B\u4F19', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }), this.props.room_detail.tv ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u96FB\u8996', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u96FB\u8996', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), this.props.room_detail.ac ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B7\u6C23', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B7\u6C23', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, this.props.room_detail.ref ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B0\u7BB1', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B0\u7BB1', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), this.props.room_detail.water_hearter ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u71B1\u6C34\u5668', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u71B1\u6C34\u5668', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), this.props.room_detail.natural_gas ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u5929\u7136\u74E6\u65AF', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u5929\u7136\u74E6\u65AF', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }), this.props.room_detail.cabel_tv ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u7B2C\u56DB\u53F0', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u7B2C\u56DB\u53F0', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }), this.props.room_detail.network ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u7DB2\u8DEF', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u7DB2\u8DEF', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, this.props.room_detail.wash_machine ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u6D17\u8863\u6A5F', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u6D17\u8863\u6A5F', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), this.props.room_detail.bed ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u5E8A', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u5E8A', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }), this.props.room_detail.wardrobe ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u8863\u6AC3', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u8863\u6AC3', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), this.props.room_detail.table ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u684C\u5B50', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u684C\u5B50', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }), this.props.room_detail.sofa ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u6C99\u767C', icon: 'checkmark', color: 'green', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u6C99\u767C', icon: 'remove', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h4', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, this.props.room_detail.location))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jvb21fZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5pdFN0b3JlIiwiYWRkQ291bnQiLCJzZXRVc2VybmFtZSIsIndpdGhSZWR1eCIsInRyYW5zbGF0ZSIsIkkxOG5leHRQcm92aWRlciIsInN0YXJ0STE4biIsImdldFRyYW5zbGF0aW9uIiwiSGVhZCIsIkdyaWQiLCJDYXJkIiwiSWNvbiIsIkltYWdlIiwiTGFiZWwiLCJEcm9wZG93biIsIk1lbnUiLCJTdGF0aXN0aWMiLCJIZWFkZXIiLCJDYXJvdXNlbCIsIlJvb21EZXRhaWwiLCJyZXEiLCJzdG9yZSIsInF1ZXJ5IiwiaW5pdFByb3BzIiwibG9jYWxlIiwidHJhbnNsYXRpb25zIiwiY29uc29sZSIsImxvZyIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsInJvb21fZGV0YWlsIiwicHJvcHMiLCJpMThuIiwicm9vbVBob3RvcyIsInJvb21fcGhvdG9zIiwibWFwIiwiaW5kZXgiLCJwaG90byIsImdyaWREaXZTdHlsZSIsIndpZHRoIiwibWFyZ2luIiwibWFyZ2luVG9wIiwiY2Fyb3VzZWxEaXZTdHlsZSIsInRlc3RCb3JkZXIiLCJwcmljZV9tb250aCIsInByaWNlX3F1YXJ0ZXIiLCJwcmljZV95ZWFyIiwiYmFsY29ueSIsInBldCIsImNvb2siLCJ0diIsImFjIiwicmVmIiwid2F0ZXJfaGVhcnRlciIsIm5hdHVyYWxfZ2FzIiwiY2FiZWxfdHYiLCJuZXR3b3JrIiwid2FzaF9tYWNoaW5lIiwiYmVkIiwid2FyZHJvYmUiLCJ0YWJsZSIsInNvZmEiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXJuYW1lIiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7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QUFLUjtBQUxRO09BQUEsc0JBS1AsY0FBRCxzQkFBQSxBQUFNLE9BQUksT0FBVixBQUFpQjtvQkFBakI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLElBQVIsQUFBVztvQkFBWDtzQkFBQSxBQUFrQjtBQUFsQjtjQUFrQixBQUFLLE1BQUwsQUFBVyxZQTVHM0MsQUFDRSxBQUNBLEFBSUUsQUFDRSxBQUNFLEFBa0dFLEFBQ0UsQUFDRSxBQUF5QyxBQVN4RDs7Ozs7RUE1THNCLGdCLEFBQU07O0FBK0wvQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1dBQU8sTUFGVCxBQUFPLEFBRVEsQUFFaEI7QUFKUSxBQUNMO0FBRko7QUFNQSxBQUNBO2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsaUJBQXJCLEFBQXNDLE1BQXJELEFBQWUsQUFBNEMiLCJmaWxlIjoicm9vbV9kZXRhaWwuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=