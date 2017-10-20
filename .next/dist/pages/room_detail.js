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

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

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
                  initProps.token = cookies.get('token');
                  if (initProps.token === undefined) {
                    initProps.loggedIn = false;
                  } else {
                    initProps.loggedIn = true;
                  }

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
                    'Content-Type': 'application/json',
                    'Authorization': initProps.loggedIn ? 'Token ' + initProps.token : ''
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

    _this.handleOpen = function () {
      if (_this.props.loggedIn) {
        console.log('已登入....');
        _this.setState({ isUserLike: !_this.state.isUserLike });
      } else {
        console.log('請先登入');
        _this.setState({ openPleaseLoginInPopup: true });
      }
    };

    _this.handleClose = function () {
      console.log('on close');
      _this.setState({ openPleaseLoginInPopup: false });
    };

    _this.i18n = (0, _startI18n2.default)(props.translations, props.locale);
    console.log('CTOR');
    _this.state = {
      openPleaseLoginInPopup: false,
      isUserLike: _this.props.room_detail.is_user_like
    };
    return _this;
  }

  (0, _createClass3.default)(RoomDetail, [{
    key: 'render',
    value: function render() {
      var roomPhotos = this.props.room_detail.room_photos.map(function (room_photos, index) {

        return _react2.default.createElement('div', { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          }
        }, _react2.default.createElement('img', { src: room_photos.photo, __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          }
        }));
      });

      var gridDivStyle = {
        //    border: '1px solid red',
        width: '75%',
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
        //    position: 'relative',
      };
      var attrDivStyle = {
        //  border: '1px solid red',
        //  backgroundColor: 'rgba(240, 240, 240, 1)',
      };
      var attrLabelColor = 'orange';

      var btnDivStyle = {
        //    border: '1px solid red',
        marginTop: '50px'
        //  backgroundColor: 'rgba(240, 240, 240, 1)',
        //  position: 'absolute',
        //  bottom: '50px',
      };
      var likeButton = this.state.isUserLike ? _react2.default.createElement(_semanticUiReact.Button, { circular: true, icon: 'heart', size: 'large', color: 'pink', __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }) : _react2.default.createElement(_semanticUiReact.Button, { circular: true, icon: 'empty heart', size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      });
      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to Roomoca', __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/react-responsive-carousel/carousel.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), _react2.default.createElement('script', { src: 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyBNKKAhKocKWQ43dc6NT3fCyaLPTdxmAX0', type: 'text/javascript', __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h1', __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, this.props.room_detail.title)), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement(_semanticUiReact.Popup, {
        trigger: likeButton,
        content: '\u8ACB\u5148\u767B\u5165',
        on: 'click',
        open: this.state.openPleaseLoginInPopup,
        onClose: this.handleClose,
        onOpen: this.handleOpen,
        position: 'top right',
        inverted: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, icon: 'facebook f', size: 'large', color: 'blue', __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, icon: 'wechat', size: 'large', color: 'green', __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, icon: 'twitter', size: 'large', color: 'teal', __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, _react2.default.createElement('div', { style: carouselDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }, _react2.default.createElement(_reactResponsiveCarousel.Carousel, { showStatus: true, showIndicators: true, showThumbs: true, infiniteLoop: false, autoPlay: false, dynamicHeight: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        }
      }, roomPhotos))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react2.default.createElement(_semanticUiReact.List, { divided: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        }
      }, '\u576A\u6578'), this.props.room_detail.area), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, '\u683C\u5C40'), this.props.room_detail.layout), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        }
      }, '\u6A13\u5C64'), this.props.room_detail.floor), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }, '\u5C4B\u9F61'), this.props.room_detail.age), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        }
      }, '\u985E\u578B'), this.props.room_detail.building_type), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        }
      }, '\u623F\u578B'), this.props.room_detail.room_type), _react2.default.createElement(_semanticUiReact.List.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { color: 'orange', horizontal: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }, '\u8ECA\u4F4D'), this.props.room_detail.parking ? '有' : '無'))), _react2.default.createElement(_semanticUiReact.Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, _react2.default.createElement(_semanticUiReact.Table, { size: 'large', unstackable: true, color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        }
      }, '\u79DF\u91D1'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, '\u62BC\u91D1'), _react2.default.createElement(_semanticUiReact.Table.HeaderCell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, '\u670D\u52D9\u8CBB'))), _react2.default.createElement(_semanticUiReact.Table.Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Row, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        }
      }, '\u6708\u7E73'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, label: '/\u6708', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      })), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      })), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, label: '/\u5E74', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }))), _react2.default.createElement(_semanticUiReact.Table.Row, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        }
      }, '\u5B63\u7E73'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + (this.props.room_detail.price_quarter / 3).toFixed(0), label: '/\u6708', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      })), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      })), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, label: '/\u5E74', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        }
      }))), _react2.default.createElement(_semanticUiReact.Table.Row, { textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, '\u5E74\u7E73'), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + (this.props.room_detail.price_year / 12).toFixed(0), label: '/\u6708', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      })), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      })), _react2.default.createElement(_semanticUiReact.Table.Cell, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      }, _react2.default.createElement(_semanticUiReact.Statistic, { horizontal: true, color: 'red', value: '$' + this.props.room_detail.price_month, label: '/\u5E74', size: 'mini', __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        }
      })))))), _react2.default.createElement('div', { style: btnDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'brown', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, '\u6211\u8981\u770B\u623F'), _react2.default.createElement(_semanticUiReact.Button, { color: 'green', size: 'huge', __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, '\u6211\u8981\u79DF')))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { color: 'yellow', __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h3', __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }, this.props.room_detail.description))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { color: 'yellow', __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, _react2.default.createElement('div', { style: attrDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, this.props.room_detail.balcony ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u967D\u53F0', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u967D\u53F0', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        }
      }), this.props.room_detail.pet ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u990A\u5BF5\u7269', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u990A\u5BF5\u7269', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }), this.props.room_detail.cook ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u958B\u4F19', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u958B\u4F19', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }), this.props.room_detail.tv ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u96FB\u8996', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u96FB\u8996', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }), this.props.room_detail.ac ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B7\u6C23', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B7\u6C23', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, this.props.room_detail.ref ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B0\u7BB1', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u51B0\u7BB1', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }), this.props.room_detail.water_hearter ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u71B1\u6C34\u5668', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u71B1\u6C34\u5668', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      }), this.props.room_detail.natural_gas ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u5929\u7136\u74E6\u65AF', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u5929\u7136\u74E6\u65AF', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }), this.props.room_detail.cabel_tv ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u7B2C\u56DB\u53F0', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u7B2C\u56DB\u53F0', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }), this.props.room_detail.network ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u7DB2\u8DEF', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u7DB2\u8DEF', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        }
      }, this.props.room_detail.wash_machine ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u6D17\u8863\u6A5F', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u6D17\u8863\u6A5F', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }), this.props.room_detail.bed ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u5E8A', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u5E8A', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }), this.props.room_detail.wardrobe ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u8863\u6AC3', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u8863\u6AC3', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }), this.props.room_detail.table ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u684C\u5B50', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u684C\u5B50', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }), this.props.room_detail.sofa ? _react2.default.createElement(_semanticUiReact.Label, { content: '\u6C99\u767C', icon: 'checkmark', color: attrLabelColor, size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }) : _react2.default.createElement(_semanticUiReact.Label, { content: '\u6C99\u767C', icon: 'remove', size: 'medium', circular: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      })))))), _react2.default.createElement(_semanticUiReact.Grid.Row, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: testBorder, __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', disabled: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, this.props.room_detail.location), _react2.default.createElement(_roomMap2.default, { width: '720px', height: '350px', address: this.props.room_detail.location, __source: {
          fileName: _jsxFileName,
          lineNumber: 351
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Jvb21fZGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwianNDb29raWUiLCJDb29raWVzIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiaW5pdFN0b3JlIiwiYWRkQ291bnQiLCJzZXRVc2VybmFtZSIsInNldExvY2FsZSIsIndpdGhSZWR1eCIsInRyYW5zbGF0ZSIsIkkxOG5leHRQcm92aWRlciIsInN0YXJ0STE4biIsImdldFRyYW5zbGF0aW9uIiwiSGVhZCIsIkdyaWQiLCJDYXJkIiwiSWNvbiIsIkltYWdlIiwiTGFiZWwiLCJEcm9wZG93biIsIk1lbnUiLCJTdGF0aXN0aWMiLCJIZWFkZXIiLCJMaXN0IiwiRGl2aWRlciIsIlNlZ21lbnQiLCJCdXR0b24iLCJUYWJsZSIsIlBvcHVwIiwiQ2Fyb3VzZWwiLCJSb29tTWFwIiwiUm9vbURldGFpbCIsInJlcSIsInN0b3JlIiwicXVlcnkiLCJpc1NlcnZlciIsImluaXRQcm9wcyIsImxvY2FsZSIsInRyYW5zbGF0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJjb29raWVzIiwiaGVhZGVycyIsImNvb2tpZSIsImdldCIsInVzZXJuYW1lIiwidG9rZW4iLCJ1bmRlZmluZWQiLCJsb2dnZWRJbiIsImRpc3BhdGNoIiwiaWQiLCJmZXRjaCIsIm1ldGhvZCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJyb29tX2RldGFpbCIsInByb3BzIiwiaGFuZGxlT3BlbiIsInNldFN0YXRlIiwiaXNVc2VyTGlrZSIsInN0YXRlIiwib3BlblBsZWFzZUxvZ2luSW5Qb3B1cCIsImhhbmRsZUNsb3NlIiwiaTE4biIsImlzX3VzZXJfbGlrZSIsInJvb21QaG90b3MiLCJyb29tX3Bob3RvcyIsIm1hcCIsImluZGV4IiwicGhvdG8iLCJncmlkRGl2U3R5bGUiLCJ3aWR0aCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsImNhcm91c2VsRGl2U3R5bGUiLCJ0ZXN0Qm9yZGVyIiwiYXR0ckRpdlN0eWxlIiwiYXR0ckxhYmVsQ29sb3IiLCJidG5EaXZTdHlsZSIsImxpa2VCdXR0b24iLCJhcmVhIiwibGF5b3V0IiwiZmxvb3IiLCJhZ2UiLCJidWlsZGluZ190eXBlIiwicm9vbV90eXBlIiwicGFya2luZyIsInByaWNlX21vbnRoIiwicHJpY2VfcXVhcnRlciIsInRvRml4ZWQiLCJwcmljZV95ZWFyIiwiYmFsY29ueSIsInBldCIsImNvb2siLCJ0diIsImFjIiwicmVmIiwid2F0ZXJfaGVhcnRlciIsIm5hdHVyYWxfZ2FzIiwiY2FiZWxfdHYiLCJuZXR3b3JrIiwid2FzaF9tYWNoaW5lIiwiYmVkIiwid2FyZHJvYmUiLCJ0YWJsZSIsInNvZmEiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQVcsQUFBVSxBQUFhOztBQUMzQyxBQUFPOzs7O0FBQ1AsQUFBUyxBQUNULEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFNLEFBQU0sQUFBTyxBQUFPLEFBQVUsQUFBTSxBQUFXLEFBQVEsQUFBTSxBQUFTLEFBQVMsQUFBUSxBQUFPOztBQUNuSCxBQUFTOztBQUNULEFBQU87Ozs7Ozs7OztJLEFBR0Q7Ozs7Ozs7WSxBQUUyQixZLEFBQUE7WUFBSyxBLGMsQUFBQTtZQUFPLEEsYyxBQUFBO1lBQU8sQSxpQixBQUFBOzs7OzttQkFBZTtBQUN6RDtBLDRCLEFBQVksQUFDbEI7OzBCQUFBLEFBQVUsU0FBVixBQUFtQjs7dUJBQ1Esd0NBQ3pCLFVBRHlCLEFBQ2YsUUFDVixDQUFBLEFBQUMsVUFGd0IsQUFFekIsQUFBVyxlOzttQkFGUDtB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LGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLFVBQWhCO29CQUFBO3NCQUFBLEFBQTRCO0FBQTVCO2NBQTRCLEFBQUssTUFBTCxBQUFXLFlBRHpDLEFBQ0UsQUFBbUQsQUFDbkQsMkJBQUEsQUFBQyxtQ0FBUSxPQUFULEFBQWUsU0FBUSxRQUF2QixBQUE4QixTQUFRLFNBQVUsS0FBQSxBQUFLLE1BQUwsQUFBVyxZQUEzRCxBQUF1RTtvQkFBdkU7c0JBL01kLEFBQ0UsQUFDQSxBQUtFLEFBQ0UsQUFDRSxBQW1NRSxBQUNFLEFBRUUsQUFTZjtBQVRlOzs7Ozs7RUE3VU8sZ0JBQU0sQTs7QUEwVi9CLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQzs7Y0FDWSxNQURMLEFBQ1csQUFDaEI7WUFBUSxNQUZWLEFBQU8sQUFFUyxBQUVqQjtBQUpRLEFBQ0w7QUFGSjs7QUFPQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2NBQ1ksQUFBbUIsZ0RBRHhCLEFBQ0ssQUFBNkIsQUFDdkM7aUJBQWEsQUFBbUIsbURBRjNCLEFBRVEsQUFBZ0MsQUFDN0M7ZUFBVyxBQUFtQixpREFIaEMsQUFBTyxBQUdNLEFBQThCLEFBRTVDO0FBTFEsQUFDTDtBQUZKO0FBT0EsQUFDQTtrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLGlCQUFyQixBQUFzQyxvQkFBckQsQUFBZSxBQUEwRCIsImZpbGUiOiJyb29tX2RldGFpbC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==