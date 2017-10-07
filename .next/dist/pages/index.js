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

var _reactI18next = require('react-i18next');

var _startI18n = require('../tools/startI18n');

var _startI18n2 = _interopRequireDefault(_startI18n);

var _translationHelpers = require('../tools/translationHelpers');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

var _reactResponsiveCarousel = require('react-responsive-carousel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/index.js?entry';


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
                /*
                  var data = await this.fetchRoomDataSSR();
                   this.setState({
                    room_data: data
                  });
                */

                console.log("+retrieveRoomInfo client");
                fetch('http://localhost:8000/roominfo/', {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                }).then(function (res) {
                  // res instanceof Response == true.
                  if (res.ok) {
                    res.json().then(function (data) {
                      _this2.setState({
                        room_data: data
                      });
                      console.log('room data retrieve complete....');
                      /*
                        var i;
                        for (i = 0; i < data.length; i++) {
                          console.log('data['+i+']:');
                          console.log('data['+i+'].url: '+ data[i].url);
                          console.log('data['+i+'].desc: '+ data[i].description);
                          console.log('data['+i+'].photo: '+ data[i].photo);
                        }
                      */
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

                /*
                    console.log("+retrieveRoomInfo");
                    var response = await fetch(BACKEND_URL + '/roominfo/', {
                        method: 'GET',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                        },
                    });
                
                    var result = false;
                    var data = await response.json();
                    console.log(response.status);
                    //console.log(data);
                    if (response.status === 200) {
                      var i;
                      for (i = 0; i < data.length; i++) {
                        console.log('data['+i+'].url: '+ data[i].url);
                        console.log('data['+i+'].desc: '+ data[i].description);
                        console.log('data['+i+'].photo: '+ data[i].photo);
                      }
                      initProps.room_data = data;
                      result = true;
                    }
                    else {
                      result = false;
                    }
                
                    console.log("-retrieveRoomInfo");
                */

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
      var priceStyle = {
        //        border: '1px solid red',
        color: '#666666'
        //      fontWeight: 'bold',
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
            lineNumber: 266
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { style: cardStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: room.photo, __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          }
        }, room.description), _react2.default.createElement(_semanticUiReact.Card.Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }, _react2.default.createElement('span', { className: 'date', __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }, '\u79DF\u91D1:', _react2.default.createElement('strong', { style: priceStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 278
          }
        }, '  10000/\u6708'))), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        })), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          }
        }), '99 \u8B9A'))));
      });

      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/react-responsive-carousel/carousel.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }, _react2.default.createElement('div', { style: carouselDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        }
      }, _react2.default.createElement(_reactResponsiveCarousel.Carousel, { showStatus: false, showIndicators: false, showThumbs: false, infiniteLoop: true, autoPlay: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1muV8uAIP0DAAbtGK7EYFw715.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFfVl--myAAxB2AAL5Ptj5lbA233.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFfVlnG6GAVWDeAARBpjqMJy8753.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1m5DSOAOcrUAANztihPK14300.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }))), _react2.default.createElement('div', { style: searchDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown, { style: dropDownStyle, placeholder: '\u4E0D\u9650\u5730\u5340', search: true, selection: true, options: search_location, onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }), _react2.default.createElement(_semanticUiReact.Input, { style: inputStyle, size: 'medium', type: 'text', placeholder: '\u641C\u5C0B\u597D\u623F\u5C4B', name: 'search', onChange: this.handleInputChange, action: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        }
      }, _react2.default.createElement('input', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }), ' Search')))), _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, columns: 3, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 333
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwic2V0TG9jYWxlIiwid2l0aFJlZHV4IiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJIZWFkIiwiSW5wdXQiLCJCdXR0b24iLCJHcmlkIiwiQ2FyZCIsIkljb24iLCJJbWFnZSIsIkxhYmVsIiwiRHJvcGRvd24iLCJNZW51IiwiQ2Fyb3VzZWwiLCJzZWFyY2hfbG9jYXRpb24iLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiaSIsImxlbmd0aCIsInVybCIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJwcm9jZXNzIiwiYnJvd3NlciIsInRoZW4iLCJyZXMiLCJvayIsInNldFN0YXRlIiwicm9vbV9kYXRhIiwiZSIsInJlcSIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJpbml0UHJvcHMiLCJjb29raWVzIiwiY29va2llIiwiZ2V0IiwidXNlcm5hbWUiLCJsb2NhbGUiLCJ0cmFuc2xhdGlvbnMiLCJkaXNwYXRjaCIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwiZXYiLCJpMThuIiwic3RhdGUiLCJvZmZzZXQiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJzZWFyY2hEaXZTdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJib3R0b20iLCJsZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiaW5wdXRTdHlsZSIsImNhcm91c2VsRGl2U3R5bGUiLCJjYXJkU3R5bGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwiZ3JpZERpdlN0eWxlIiwibWFyZ2luIiwicHJpY2VTdHlsZSIsImNvbG9yIiwiZHJvcERvd25TdHlsZSIsInJvb21DYXJkcyIsIm1hcCIsInJvb20iLCJpbmRleCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY291bnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUNFLEFBQ0EsQUFDQSxBQUNBOztBQUVGLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFTLEFBQU8sQUFDaEIsQUFBUyxBQUFNLEFBQU0sQUFBTSxBQUFPLEFBQU8sQUFBVTs7QUFDbkQsQUFBUzs7Ozs7OztBQUlULElBQU0sa0JBQWtCLENBQ3RCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixRQUFRLE9BREYsQUFDdEIsQUFBK0IsS0FDL0IsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLE9BQU8sT0FGRCxBQUV0QixBQUE4QixLQUM5QixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BQVYsQUFBZ0IsT0FBTyxPQUhELEFBR3RCLEFBQThCLEtBQzlCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixPQUFPLE9BSnpCLEFBQXdCLEFBSXRCLEFBQThCOztJQUcxQixBOzs7Ozs7Ozs7OzttQkE0RUY7d0JBQUEsQUFBUSxJQUFSLEFBQVk7OzswQkFDMkMsQUFDM0MsQUFDUjs7OEJBQVMsQUFDRyxBQUNWO29DQUplLEFBQWtDLEFBRTFDLEFBRVMsQTtBQUZULEFBQ1A7QUFIaUQsQUFDbkQsaUJBRGlCOzttQkFBakI7QSxvQ0FRQTtBLHlCLEFBQVM7O3VCQUNJLFMsQUFBQSxB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NEMsTUFBTSxXQUFsRCxBQUE2RDtvQkFBN0Q7c0JBQUEsQUFDQztBQUREO1NBbENOLEFBQ0EsQUFDQSxBQU9JLEFBd0JBLEFBQ0UsQUFRUDs7Ozs7RUF2VGlCLGdCLEFBQU07O0FBMlQxQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1dBQU8sTUFGRixBQUVRLEFBQ2I7WUFBUSxNQUhWLEFBQU8sQUFHUyxBQUVqQjtBQUxRLEFBQ0w7QUFGSjs7QUFRQSxJQUFNLHFCQUFxQixTQUFyQixBQUFxQixtQkFBQSxBQUFDLFVBQWEsQUFDdkM7O2NBQ1ksQUFBbUIsZ0RBRHhCLEFBQ0ssQUFBNkIsQUFDdkM7aUJBQWEsQUFBbUIsbURBRjNCLEFBRVEsQUFBZ0MsQUFDN0M7ZUFBVyxBQUFtQixpREFIaEMsQUFBTyxBQUdNLEFBQThCLEFBRTVDO0FBTFEsQUFDTDtBQUZKLEFBUUE7O2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsaUJBQXJCLEFBQXNDLG9CQUFyRCxBQUFlLEFBQTBEOztBQUV6RSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==