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

var _routes = require('../routes');

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

var _externalLink = require('../components/externalLink');

var _externalLink2 = _interopRequireDefault(_externalLink);

var _reactLazyload = require('react-lazyload');

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/index.js?entry';
// import Link from 'next/link'
// for target='_blank'


var search_location = [{ key: 1, text: '不限地區', value: 1 }, { key: 2, text: '台北市', value: 2 }, { key: 3, text: '新北市', value: 3 }, { key: 4, text: '新竹市', value: 4 }];

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  (0, _createClass3.default)(Index, [{
    key: 'fetchRoomDataSSR',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response, result, data, i;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("+fetchRoomDataSSR");
                _context.next = 3;
                return fetch('http://localhost:8000/roominfo/', {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 3:
                response = _context.sent;
                result = false;
                _context.next = 7;
                return response.json();

              case 7:
                data = _context.sent;

                console.log(response.status);
                //console.log(data);
                if (response.status === 200) {
                  for (i = 0; i < data.length; i++) {
                    console.log('data[' + i + '].url: ' + data[i].url);
                    console.log('data[' + i + '].desc: ' + data[i].description);
                    console.log('data[' + i + '].photo: ' + data[i].photo);
                  }
                } else {
                  data = [];
                }
                console.log("-fetchRoomDataSSR");
                return _context.abrupt('return', data);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchRoomDataSSR() {
        return _ref.apply(this, arguments);
      }

      return fetchRoomDataSSR;
    }()
  }, {
    key: 'componentWillMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!process.browser) {
                  // server
                  console.log('Index componentWillMount on server');
                }

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillMount() {
        return _ref2.apply(this, arguments);
      }

      return componentWillMount;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('@@ componentWillUnmount');
    }
  }, {
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var _this2 = this;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('Index componentDidMount (client only)');
                console.log("+retrieveRoomInfo client");
                fetch('http://localhost:8000/rooms/', {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                }).then(function (res) {
                  // res instanceof Response == true.
                  if (res.ok) {
                    res.json().then(function (data) {
                      //  console.log(data);
                      _this2.setState({
                        room_data: data
                      });
                      console.log('room data retrieve complete....');

                      var i;
                      for (i = 0; i < data.length; i++) {
                        console.log('data[' + i + ']:');
                        console.log('data[' + i + '].id: ' + data[i].id);
                        console.log('data[' + i + '].desc: ' + data[i].description);
                        console.log('data[' + i + '].room_photos: ' + data[i].room_photos.length);
                        if (data[i].room_photos.length > 0) {
                          var k;
                          for (k = 0; k < data[i].room_photos.length; k++) {
                            console.log('data[' + i + '].room_photos: ' + data[i].room_photos[k].photo);
                          }
                        }
                      }
                    });
                  } else {
                    console.log("Response wasn't perfect, status: ", res.status);
                  }
                }, function (e) {
                  console.log("Fetch failed!", e);
                });

                console.log("-retrieveRoomInfo client");

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref5) {
        var req = _ref5.req,
            store = _ref5.store,
            isServer = _ref5.isServer;

        var initProps, cookies, _cookies, translations;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
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
                  console.log(req.headers['accept-language']);
                  //    cookies.set('locale', lang);
                } else {
                  console.log("@@ getInitialProps @ client");
                  _cookies = new _universalCookie2.default();

                  console.log("@@ Header username = " + _cookies.get('username'));
                  initProps.username = _cookies.get('username');
                }

                initProps.locale = 'tw';

                _context4.next = 5;
                return (0, _translationHelpers.getTranslation)(initProps.locale, ['common', 'namespace1'], 'http://localhost:3000/static/locales/');

              case 5:
                translations = _context4.sent;

                initProps.translations = translations;

                store.dispatch((0, _store.setUsername)(initProps.username));
                store.dispatch((0, _store.setLocale)(initProps.locale));

                if (isServer) {}
                return _context4.abrupt('return', initProps);

              case 11:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getInitialProps(_x) {
        return _ref4.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    console.log('+Index ctor');

    var _this = (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call(this, props));

    _this.handleChange = function (ev, data) {
      //this.setState({value: value});
      _this.setState({ value: data.value });
      console.log(data.value);
    };

    _this.i18n = (0, _startI18n2.default)(props.translations, props.locale);

    _this.state = {
      room_data: [],
      offset: 0,
      value: 'Taipei City'
    };
    console.log('-Index ctor');
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      console.log('[' + name + '] :' + value);
    }
  }, {
    key: 'render',
    value: function render() {
      var searchDivStyle = {
        //    border: '1px solid green',
        position: 'absolute',
        width: '50%',
        height: '80px',
        //    top: '70%',
        bottom: '10px',
        left: '25%',
        //      marginLeft: '10%',
        paddingTop: '20px',
        paddingLeft: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '10px'
      };
      var inputStyle = {
        //  float: 'right',
        width: '70%'
      };
      var carouselDivStyle = {
        // https://stackoverflow.com/questions/10487292/position-absolute-but-relative-to-parent
        position: 'relative'
        //    border: '1px solid red',
      };
      var cardStyle = {
        //        border: '1px solid blue',
        //      float: 'left',
        width: '100%',
        //      height: '100%',
        marginTop: '0',
        marginLeft: '0'
      };
      var gridDivStyle = {
        //        border: '1px solid red',
        width: '80%',
        margin: '0 auto',
        marginTop: '50px'
      };
      var dropDownStyle = {
        //   border: '1px solid yellow',
        width: '20px',
        //   height: '5px',
        //  marginLeft: '10%',
        marginTop: '0'
        // render room infos
      };var roomCards = this.state.room_data.map(function (room, index) {

        return _react2.default.createElement(_semanticUiReact.Grid.Column, { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { style: cardStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 233
          }
        }, room.room_photos.length > 0 ? _react2.default.createElement(_externalLink2.default, { route: 'room_detail', params: { id: room.id }, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 236
          }
        }, _react2.default.createElement(_reactLazyload2.default, { placeholder: _react2.default.createElement(_semanticUiReact.Loader, { active: true, inline: 'centered', size: 'large', content: 'Loading', __source: {
              fileName: _jsxFileName,
              lineNumber: 237
            }
          }), height: 100, __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: room.room_photos[0].photo, __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          }
        }))) :
        //    <a href={'room/'+room.id} target='_blank'><Image src={room.room_photos[0].photo} /></a> :
        _react2.default.createElement(_semanticUiReact.Icon, { name: 'image', size: 'massive', __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 243
          }
        }, room.title), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 246
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 247
          }
        }, _react2.default.createElement(_semanticUiReact.Statistic, { color: 'red', value: '$' + room.price_month, label: '/\u6708', size: 'mini', floated: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        })), room.description)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 253
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 254
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
            fileName: _jsxFileName,
            lineNumber: 255
          }
        }), parseInt(Math.random() * 100), ' \u8B9A'))));
      });

      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to Roomoca', __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/react-responsive-carousel/carousel.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, _react2.default.createElement('div', { style: carouselDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, _react2.default.createElement(_reactResponsiveCarousel.Carousel, { showStatus: false, showIndicators: false, showThumbs: false, infiniteLoop: true, autoPlay: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1muV8uAIP0DAAbtGK7EYFw715.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFfVl--myAAxB2AAL5Ptj5lbA233.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFfVlnG6GAVWDeAARBpjqMJy8753.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1m5DSOAOcrUAANztihPK14300.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        }
      }))), _react2.default.createElement('div', { style: searchDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown, { style: dropDownStyle, placeholder: '\u4E0D\u9650\u5730\u5340', search: true, selection: true, options: search_location, onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        }
      }), _react2.default.createElement(_semanticUiReact.Input, { style: inputStyle, size: 'medium', type: 'text', placeholder: '\u641C\u5C0B\u597D\u623F\u5C4B', name: 'search', onChange: this.handleInputChange, action: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        }
      }, _react2.default.createElement('input', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        }
      }), ' Search')))), _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, columns: 3, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        }
      }, roomCards)))));
    }
  }]);

  return Index;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    count: state.count,
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

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, mapStateToProps, mapDispatchToProps)(Index);

// export default Index
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwic2V0TG9jYWxlIiwid2l0aFJlZHV4IiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJIZWFkIiwiSW5wdXQiLCJCdXR0b24iLCJHcmlkIiwiQ2FyZCIsIkljb24iLCJJbWFnZSIsIkxhYmVsIiwiRHJvcGRvd24iLCJNZW51IiwiU3RhdGlzdGljIiwiTG9hZGVyIiwiQ2Fyb3VzZWwiLCJFeHRlcm5hbExpbmsiLCJMYXp5TG9hZCIsInNlYXJjaF9sb2NhdGlvbiIsImtleSIsInRleHQiLCJ2YWx1ZSIsIkluZGV4IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJpIiwibGVuZ3RoIiwidXJsIiwiZGVzY3JpcHRpb24iLCJwaG90byIsInByb2Nlc3MiLCJicm93c2VyIiwidGhlbiIsInJlcyIsIm9rIiwic2V0U3RhdGUiLCJyb29tX2RhdGEiLCJpZCIsInJvb21fcGhvdG9zIiwiayIsImUiLCJyZXEiLCJzdG9yZSIsImlzU2VydmVyIiwiaW5pdFByb3BzIiwiY29va2llcyIsImNvb2tpZSIsImdldCIsInVzZXJuYW1lIiwibG9jYWxlIiwidHJhbnNsYXRpb25zIiwiZGlzcGF0Y2giLCJwcm9wcyIsImhhbmRsZUNoYW5nZSIsImV2IiwiaTE4biIsInN0YXRlIiwib2Zmc2V0IiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwic2VhcmNoRGl2U3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImlucHV0U3R5bGUiLCJjYXJvdXNlbERpdlN0eWxlIiwiY2FyZFN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImdyaWREaXZTdHlsZSIsIm1hcmdpbiIsImRyb3BEb3duU3R5bGUiLCJyb29tQ2FyZHMiLCJtYXAiLCJyb29tIiwiaW5kZXgiLCJ0aXRsZSIsInByaWNlX21vbnRoIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUNFLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFTLEFBQU8sQUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTSxBQUFPLEFBQU8sQUFBVSxBQUFNLEFBQVc7O0FBQ3BFLEFBQVM7O0FBQ1QsQUFBTyxBLEFBQVA7Ozs7QUFDQSxBQUFPOzs7Ozs7O0FBcEJQO0FBbUJ1RDs7O0FBSXZELElBQU0sa0JBQWtCLENBQ3RCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixRQUFRLE9BREYsQUFDdEIsQUFBK0IsS0FDL0IsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLE9BQU8sT0FGRCxBQUV0QixBQUE4QixLQUM5QixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BQVYsQUFBZ0IsT0FBTyxPQUhELEFBR3RCLEFBQThCLEtBQzlCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixPQUFPLE9BSnpCLEFBQXdCLEFBSXRCLEFBQThCOztJLEFBSTFCOzs7Ozs7Ozs7OzttQkE2Q0Y7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TUFBUixBQUFhLFVBQVMsT0FBdEIsQUFBNEI7b0JBQTVCO3NCQUFBLEFBQXFDO0FBQXJDO3lCQUFxQyxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBckMsQUFBcUM7QUFBQTtVQXBCN0MsQUFDRSxBQWVFLEFBRUUsQUFFRSxBQUlSLCtCQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssVUFBTixBQUFnQixPQUFPLFNBQXZCLEFBQWdDLEdBQUcsU0FBbkMsQUFBNEMsTUFBTSxXQUFsRCxBQUE2RDtvQkFBN0Q7c0JBQUEsQUFDQztBQUREO1NBL0JOLEFBQ0EsQUFDQSxBQUlJLEFBd0JBLEFBQ0UsQUFRUDs7Ozs7RUEvUWlCLGdCLEFBQU07O0FBbVIxQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1dBQU8sTUFGRixBQUVRLEFBQ2I7WUFBUSxNQUhWLEFBQU8sQUFHUyxBQUVqQjtBQUxRLEFBQ0w7QUFGSjs7QUFRQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2NBQ1ksQUFBbUIsZ0RBRHhCLEFBQ0ssQUFBNkIsQUFDdkM7aUJBQWEsQUFBbUIsbURBRjNCLEFBRVEsQUFBZ0MsQUFDN0M7ZUFBVyxBQUFtQixpREFIaEMsQUFBTyxBQUdNLEFBQThCLEFBRTVDO0FBTFEsQUFDTDtBQUZKLEFBUUE7O2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsaUJBQXJCLEFBQXNDLG9CQUFyRCxBQUFlLEFBQTBEOztBQUV6RSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==