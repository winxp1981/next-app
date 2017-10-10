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

var _semanticUiReact = require('semantic-ui-react');

var _reactResponsiveCarousel = require('react-responsive-carousel');

var _roomMap = require('../components/roomMap');

var _roomMap2 = _interopRequireDefault(_roomMap);

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
            query = _ref2.query,
            isServer = _ref2.isServer;
        var initProps, translations, cookies, response, data;
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

                if (isServer) {
                  console.log("RoomDetail getInitialProps isSserver: " + isServer);
                  cookies = new _universalCookie2.default(req.headers.cookie);

                  console.log("@@ cookies username = " + cookies.get('username'));
                  console.log("@@ cookies email = " + cookies.get('email'));
                  console.log("@@ cookies token = " + cookies.get('token'));
                  initProps.username = cookies.get('username');

                  store.dispatch((0, _store.setUsername)(initProps.username));
                  store.dispatch((0, _store.setLocale)(initProps.locale));
                }

                // fetch room detail
                console.log('RoomDetail (id: ' + query.id + ')');
                _context.next = 10;
                return fetch('http://localhost:8000/rooms/' + query.id, {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 10:
                response = _context.sent;
                _context.next = 13;
                return response.json();

              case 13:
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

              case 17:
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
            lineNumber: 76
          }
        }, _react2.default.createElement('img', { src: room_photos.photo, __source: {
            fileName: _jsxFileName,
            lineNumber: 77
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
          lineNumber: 101
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to Roomoca', __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/react-responsive-carousel/carousel.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, this.props.room_detail.title))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('div', { style: carouselDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement(_reactResponsiveCarousel.Carousel, { showStatus: true, showIndicators: true, showThumbs: false, infiniteLoop: false, autoPlay: false, dynamicHeight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, roomPhotos))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement(_semanticUiReact.List, { divided: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, '\u576A\u6578'), this.props.room_detail.area), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, '\u683C\u5C40'), this.props.room_detail.layout), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, '\u6A13\u5C64'), this.props.room_detail.floor), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, '\u5C4B\u9F61'), this.props.room_detail.age), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, '\u985E\u578B'), this.props.room_detail.building_type), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, '\u623F\u578B'), this.props.room_detail.room_type), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, '\u8ECA\u4F4D'), this.props.room_detail.parking ? '有' : '無'))), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', disabled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, '\u79DF\u91D1'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, label: '/\u6708', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_quarter, label: '/\u5B63', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_year, label: '/\u5E74', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })))))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, this.props.room_detail.description)), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, this.props.room_detail.balcony ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u967D\u53F0', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u967D\u53F0', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), this.props.room_detail.pet ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u990A\u5BF5\u7269', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u990A\u5BF5\u7269', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }), this.props.room_detail.cook ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u958B\u4F19', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u958B\u4F19', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), this.props.room_detail.tv ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u96FB\u8996', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u96FB\u8996', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), this.props.room_detail.ac ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B7\u6C23', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B7\u6C23', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, this.props.room_detail.ref ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B0\u7BB1', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B0\u7BB1', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }), this.props.room_detail.water_hearter ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u71B1\u6C34\u5668', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u71B1\u6C34\u5668', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }), this.props.room_detail.natural_gas ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u5929\u7136\u74E6\u65AF', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u5929\u7136\u74E6\u65AF', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }), this.props.room_detail.cabel_tv ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u7B2C\u56DB\u53F0', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u7B2C\u56DB\u53F0', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }), this.props.room_detail.network ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u7DB2\u8DEF', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u7DB2\u8DEF', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }, this.props.room_detail.wash_machine ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u6D17\u8863\u6A5F', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u6D17\u8863\u6A5F', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }), this.props.room_detail.bed ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u5E8A', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u5E8A', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        }
      }), this.props.room_detail.wardrobe ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u8863\u6AC3', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u8863\u6AC3', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }), this.props.room_detail.table ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u684C\u5B50', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u684C\u5B50', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }), this.props.room_detail.sofa ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u6C99\u767C', icon: 'checkmark', color: 'blue', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u6C99\u767C', icon: 'remove', size: 'medium', __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      })))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', disabled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, this.props.room_detail.location), _react2.default.createElement(_roomMap2.default, { width: '720px', height: '350px', address: this.props.room_detail.location, __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }))))))));
    }
  }]);

  return RoomDetail;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
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
// export default About
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, mapDispatchToProps)(RoomDetail);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jvb21fZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ29va2llcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImluaXRTdG9yZSIsImFkZENvdW50Iiwic2V0VXNlcm5hbWUiLCJzZXRMb2NhbGUiLCJ3aXRoUmVkdXgiLCJ0cmFuc2xhdGUiLCJJMThuZXh0UHJvdmlkZXIiLCJzdGFydEkxOG4iLCJnZXRUcmFuc2xhdGlvbiIsIkhlYWQiLCJHcmlkIiwiQ2FyZCIsIkljb24iLCJJbWFnZSIsIkxhYmVsIiwiRHJvcGRvd24iLCJNZW51IiwiU3RhdGlzdGljIiwiSGVhZGVyIiwiTGlzdCIsIkRpdmlkZXIiLCJDYXJvdXNlbCIsIlJvb21NYXAiLCJSb29tRGV0YWlsIiwicmVxIiwic3RvcmUiLCJxdWVyeSIsImlzU2VydmVyIiwiaW5pdFByb3BzIiwibG9jYWxlIiwidHJhbnNsYXRpb25zIiwiY29uc29sZSIsImxvZyIsImNvb2tpZXMiLCJoZWFkZXJzIiwiY29va2llIiwiZ2V0IiwidXNlcm5hbWUiLCJkaXNwYXRjaCIsImlkIiwiZmV0Y2giLCJtZXRob2QiLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxvY2F0aW9uIiwicm9vbV9kZXRhaWwiLCJwcm9wcyIsImkxOG4iLCJyb29tUGhvdG9zIiwicm9vbV9waG90b3MiLCJtYXAiLCJpbmRleCIsInBob3RvIiwiZ3JpZERpdlN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJjYXJvdXNlbERpdlN0eWxlIiwidGVzdEJvcmRlciIsImFyZWEiLCJsYXlvdXQiLCJmbG9vciIsImFnZSIsImJ1aWxkaW5nX3R5cGUiLCJyb29tX3R5cGUiLCJwYXJraW5nIiwicHJpY2VfbW9udGgiLCJwcmljZV9xdWFydGVyIiwicHJpY2VfeWVhciIsImJhbGNvbnkiLCJwZXQiLCJjb29rIiwidHYiLCJhYyIsInJlZiIsIndhdGVyX2hlYXJ0ZXIiLCJuYXR1cmFsX2dhcyIsImNhYmVsX3R2IiwibmV0d29yayIsIndhc2hfbWFjaGluZSIsImJlZCIsIndhcmRyb2JlIiwidGFibGUiLCJzb2ZhIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQVMsQUFBVyxBQUFVLEFBQWE7O0FBQzNDLEFBQU87Ozs7QUFDUCxBQUFTLEFBQ1QsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQU0sQUFBTSxBQUFPLEFBQU8sQUFBVSxBQUFNLEFBQVcsQUFBUSxBQUFNOztBQUNsRixBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztJLEFBR0Q7Ozs7Ozs7WSxBQUUyQixZQUFBLEE7WUFBSyxBLGMsQUFBQTtZQUFPLEEsY0FBQSxBO1ksQUFBTyxpQkFBQSxBOzs7OzttQkFBZTtBQUN6RDtBLDRCQUFZLEFBQ2xCLEE7OzBCQUFBLEFBQVUsU0FBVixBQUFtQjs7dUJBQ1Esd0NBQ3pCLFVBRHlCLEFBQ2YsUUFDVixDQUFBLEFBQUMsVUFGd0IsQUFFekIsQUFBVyxlOzttQkFGUDtBLHdDQUtOOzswQkFBQSxBQUFVLGVBQVYsQUFBeUIsQUFFekI7O29CQUFBLEFBQUksVUFBVSxBQUNaOzBCQUFBLEFBQVEsSUFBSSwyQ0FBWixBQUFzRCxBQUNoRDtBQUZNLDRCQUVJLEFBQUksOEJBQVEsSUFBQSxBQUFJLFFBRnBCLEFBRUksQUFBd0IsQUFDeEM7OzBCQUFBLEFBQVEsSUFBSSwyQkFBMkIsUUFBQSxBQUFRLElBQS9DLEFBQXVDLEFBQVksQUFDbkQ7MEJBQUEsQUFBUSxJQUFJLHdCQUF3QixRQUFBLEFBQVEsSUFBNUMsQUFBb0MsQUFBWSxBQUNoRDswQkFBQSxBQUFR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TUFBbEQsQUFBdUQ7b0JBQXZEO3NCQURBLEFBQ0E7QUFBQTtPQUFBLG9CQUNBLEFBQUMsd0NBQU0sU0FBUCxBQUFlLGdCQUFLLE1BQXBCLEFBQXlCLFVBQVMsTUFBbEMsQUFBdUM7b0JBQXZDO3NCQWZKLEFBZUksQUFFQTtBQUZBO09BQUEsUUFFQSxBQUFLLE1BQUwsQUFBVyxZQUFYLEFBQXVCLHVCQUN2QixBQUFDLHdDQUFNLFNBQVAsQUFBZSxnQkFBSyxNQUFwQixBQUF5QixhQUFZLE9BQXJDLEFBQTJDLFFBQU8sTUFBbEQsQUFBdUQ7b0JBQXZEO3NCQURBLEFBQ0E7QUFBQTtPQUFBLG9CQUNBLEFBQUMsd0NBQU0sU0FBUCxBQUFlLGdCQUFLLE1BQXBCLEFBQXlCLFVBQVMsTUFBbEMsQUFBdUM7b0JBQXZDO3NCQS9IVixBQXlERSxBQUlFLEFBK0NFLEFBbUJJLEFBS1I7QUFMUTtPQUFBLHNCQUtQLGNBQUQsc0JBQUEsQUFBTSxPQUFJLE9BQVYsQUFBaUI7b0JBQWpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxVQUFoQjtvQkFBQTtzQkFBQSxBQUE0QjtBQUE1QjtjQUE0QixBQUFLLE1BQUwsQUFBVyxZQUR6QyxBQUNFLEFBQW1ELEFBQ25ELDJCQUFBLEFBQUMsbUNBQVEsT0FBVCxBQUFlLFNBQVEsUUFBdkIsQUFBOEIsU0FBUSxTQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsWUFBM0QsQUFBdUU7b0JBQXZFO3NCQS9JZCxBQUNFLEFBQ0EsQUFJRSxBQUNFLEFBQ0UsQUFvSUUsQUFDRSxBQUVFLEFBU2Y7QUFUZTs7Ozs7O0VBbE9PLGdCLEFBQU07O0FBK08vQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1lBQVEsTUFGVixBQUFPLEFBRVMsQUFFakI7QUFKUSxBQUNMO0FBRko7O0FBT0EsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLEFBQW1CLGdEQUR4QixBQUNLLEFBQTZCLEFBQ3ZDO2lCQUFhLEFBQW1CLG1EQUYzQixBQUVRLEFBQWdDLEFBQzdDO2VBQVcsQUFBbUIsaURBSGhDLEFBQU8sQUFHTSxBQUE4QixBQUU1QztBQUxRLEFBQ0w7QUFGSjtBQU9BLEFBQ0E7a0JBQWUsQUFBVSxrREFBVixBQUFxQixpQkFBckIsQUFBc0Msb0JBQXJELEFBQWUsQUFBMEQiLCJmaWxlIjoicm9vbV9kZXRhaWwuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=