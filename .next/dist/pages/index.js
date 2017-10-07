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

var _externallink = require('../components/externallink');

var _externallink2 = _interopRequireDefault(_externallink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/index.js?entry';
// import Link from 'next/link'


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
            lineNumber: 261
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { style: cardStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 262
          }
        }, room.room_photos.length > 0 ? _react2.default.createElement(_externallink2.default, { route: 'room_detail', params: { id: room.id }, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: room.room_photos[0].photo, __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          }
        }))) :
        //    <a href={'room/'+room.id} target='_blank'><Image src={room.room_photos[0].photo} /></a> :
        _react2.default.createElement(_semanticUiReact.Icon, { name: 'image', size: 'massive', __source: {
            fileName: _jsxFileName,
            lineNumber: 267
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
        }, room.title), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          }
        }, _react2.default.createElement('span', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          }
        }, _react2.default.createElement(_semanticUiReact.Statistic, { color: 'red', value: '$' + room.price_month, label: '/\u6708', size: 'mini', floated: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          }
        })), room.description)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
            fileName: _jsxFileName,
            lineNumber: 282
          }
        }), parseInt(Math.random() * 100), ' \u8B9A'))));
      });

      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/react-responsive-carousel/carousel.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, _react2.default.createElement('div', { style: carouselDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, _react2.default.createElement(_reactResponsiveCarousel.Carousel, { showStatus: false, showIndicators: false, showThumbs: false, infiniteLoop: true, autoPlay: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1muV8uAIP0DAAbtGK7EYFw715.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFfVl--myAAxB2AAL5Ptj5lbA233.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFfVlnG6GAVWDeAARBpjqMJy8753.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1m5DSOAOcrUAANztihPK14300.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        }
      }))), _react2.default.createElement('div', { style: searchDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown, { style: dropDownStyle, placeholder: '\u4E0D\u9650\u5730\u5340', search: true, selection: true, options: search_location, onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        }
      }), _react2.default.createElement(_semanticUiReact.Input, { style: inputStyle, size: 'medium', type: 'text', placeholder: '\u641C\u5C0B\u597D\u623F\u5C4B', name: 'search', onChange: this.handleInputChange, action: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        }
      }, _react2.default.createElement('input', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        }
      }), ' Search')))), _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, columns: 3, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 326
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwic2V0TG9jYWxlIiwid2l0aFJlZHV4IiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJIZWFkIiwiSW5wdXQiLCJCdXR0b24iLCJHcmlkIiwiQ2FyZCIsIkljb24iLCJJbWFnZSIsIkxhYmVsIiwiRHJvcGRvd24iLCJNZW51IiwiU3RhdGlzdGljIiwiQ2Fyb3VzZWwiLCJFeHRlcm5hbExpbmsiLCJzZWFyY2hfbG9jYXRpb24iLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwiaSIsImxlbmd0aCIsInVybCIsImRlc2NyaXB0aW9uIiwicGhvdG8iLCJwcm9jZXNzIiwiYnJvd3NlciIsInRoZW4iLCJyZXMiLCJvayIsInNldFN0YXRlIiwicm9vbV9kYXRhIiwiaWQiLCJyb29tX3Bob3RvcyIsImsiLCJlIiwicmVxIiwic3RvcmUiLCJpc1NlcnZlciIsImluaXRQcm9wcyIsImNvb2tpZXMiLCJjb29raWUiLCJnZXQiLCJ1c2VybmFtZSIsImxvY2FsZSIsInRyYW5zbGF0aW9ucyIsImRpc3BhdGNoIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldiIsImkxOG4iLCJzdGF0ZSIsIm9mZnNldCIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsInNlYXJjaERpdlN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJvdHRvbSIsImxlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0xlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJpbnB1dFN0eWxlIiwiY2Fyb3VzZWxEaXZTdHlsZSIsImNhcmRTdHlsZSIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJncmlkRGl2U3R5bGUiLCJtYXJnaW4iLCJkcm9wRG93blN0eWxlIiwicm9vbUNhcmRzIiwibWFwIiwicm9vbSIsImluZGV4IiwidGl0bGUiLCJwcmljZV9tb250aCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY291bnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFDRSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPLEFBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQU0sQUFBTyxBQUFPLEFBQVUsQUFBTTs7QUFDekQsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7O0FBbkJQOzs7QUFzQkEsSUFBTSxrQkFBa0IsQ0FDdEIsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLFFBQVEsT0FERixBQUN0QixBQUErQixLQUMvQixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BQVYsQUFBZ0IsT0FBTyxPQUZELEFBRXRCLEFBQThCLEtBQzlCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixPQUFPLE9BSEQsQUFHdEIsQUFBOEIsS0FDOUIsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLE9BQU8sT0FKekIsQUFBd0IsQUFJdEIsQUFBOEI7O0lBRzFCLEE7Ozs7Ozs7Ozs7O21CQTRFRjt3QkFBQSxBQUFRLElBQVIsQUFBWTs7OzBCQUMyQyxBQUMzQyxBQUNSOzs4QkFBUyxBQUNHLEFBQ1Y7b0NBSmUsQUFBa0MsQUFFMUMsQUFFUyxBO0FBRlQsQUFDUDtBQUhpRCxBQUNuRCxpQkFEaUI7O21CQUFqQjtBLG9DQVFBO0EseUIsQUFBUzs7dUJBQ0ksU0FBQSxBLEFBQVM7O21CQUF0QjtBLGdDQUNKOzt3QkFBQSxBQUFRLElBQUksU0FBWixBQUFxQixBQUNyQjtBQUNBO29CQUFJLFNBQUEsQUFBUyxXQUFiLEFBQXdCLEtBQUssQUFFM0I7dUJBQUssSUFBTCxBQUFTLEdBQUcsSUFBSSxLQUFoQixBQUFxQixRQUFyQixBQUE2QixLQUFLLEFBQ2hDOzRCQUFBLEFBQVEsSUFBSSxVQUFBLEFBQVEsSUFBUixBQUFVLFlBQVcsS0FBQSxBQUFLLEdBQXRDLEFBQXlDLEFBQ3pDOzRCQUFBLEFBQVEsSUFBSSxVQUFBLEFBQVEsSUFBUixBQUFVLGFBQVksS0FBQSxBQUFLLEdBQXZDLEFBQTBDLEFBQzFDOzRCQUFBLEFBQVEsSUFBSSxVQUFBLEFBQVEsSUFBUixBQUFVLGNBQWEsS0FBQSxBQUFLLEdBQXhDLEFBQTJDLEFBQzVDO0FBQ0Y7QUFQRCx1QkFRSyxBQUNIO3lCQUFBLEFBQU8sQUFDUjtBQUNEO3dCQUFBLEFBQVEsSUFBUixBQUFZO2lELEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQUlQO29CQUFJLENBQUMsUUFBTCxBQUFhLFNBQVMsQUFBRTtBQUN0QjswQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUdvQixBQUNyQjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2I7Ozs7Ozs7Ozs7O21CQUdDO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjs7MEJBQStCLEFBQ25CLEFBQ1I7OzhCQUFTLEFBQ0csQUFDVjtvQ0FKTixBQUErQixBQUVsQixBQUVTO0FBRlQsQUFDUDtBQUh5QixBQUMzQixtQkFESixBQU1HLEtBQUssZUFBTyxBQUNiO0FBQ0E7c0JBQUksSUFBSixBQUFRLElBQUksQUFDVjt3QkFBQSxBQUFJLE9BQUosQUFBVyxLQUFLLGdCQUFRLEFBQ3hCO0FBQ0U7NkJBQUEsQUFBSzttQ0FBTCxBQUFjLEFBQ0QsQUFFYjtBQUhjLEFBQ1o7OEJBRUYsQUFBUSxJQUFSLEFBQVksQUFFWjs7MEJBQUEsQUFBSSxBQUNKOzJCQUFLLElBQUwsQUFBUyxHQUFHLElBQUksS0FBaEIsQUFBcUIsUUFBckIsQUFBNkIsS0FBSyxBQUNoQztnQ0FBQSxBQUFRLElBQUksVUFBQSxBQUFRLElBQXBCLEFBQXNCLEFBQ3RCO2dDQUFBLEFBQVEsSUFBSSxVQUFBLEFBQVEsSUFBUixBQUFVLFdBQVUsS0FBQSxBQUFLLEdBQXJDLEFBQXdDLEFBQ3hDO2dDQUFBLEFBQVEsSUFBSSxVQUFBLEFBQVEsSUFBUixBQUFVLGFBQVksS0FBQSxBQUFLLEdBQXZDLEFBQTBDLEFBQzFDO2dDQUFBLEFBQVEsSUFBSSxVQUFBLEFBQVEsSUFBUixBQUFVLG9CQUFtQixLQUFBLEFBQUssR0FBTCxBQUFRLFlBQWpELEFBQTZELEFBQzdEOzRCQUFJLEtBQUEsQUFBSyxHQUFMLEFBQVEsWUFBUixBQUFvQixTQUF4QixBQUFpQyxHQUFHLEFBQ2xDOzhCQUFBLEFBQUksQUFDSjsrQkFBSyxJQUFMLEFBQVMsR0FBSSxJQUFJLEtBQUEsQUFBSyxHQUFMLEFBQVEsWUFBekIsQUFBcUMsUUFBckMsQUFBOEMsS0FBSyxBQUNqRDtvQ0FBQSxBQUFRLElBQUksVUFBQSxBQUFRLElBQVIsQUFBVSxvQkFBbUIsS0FBQSxBQUFLLEdBQUwsQUFBUSxZQUFSLEFBQW9CLEdBQTdELEFBQWdFLEFBQ2pFO0FBQ0Y7QUFDRjtBQUVGO0FBckJELEFBc0JEO0FBdkJELHlCQXVCTyxBQUNMOzRCQUFBLEFBQVEsSUFBUixBQUFZLHFDQUFxQyxJQUFqRCxBQUFxRCxBQUN0RDtBQUNGO0FBbENELG1CQWtDRyxVQUFBLEFBQVMsR0FBRyxBQUNiOzBCQUFBLEFBQVEsSUFBUixBQUFZLGlCQUFaLEFBQTZCLEFBQzlCO0FBcENELEFBc0NBOzt3QkFBQSxBQUFRLElBQVIsQUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WSxBQW5KaUIsWSxBQUFBO1lBQU0sQSxjQUFBLEE7WUFBTyxBLGlCQUFBLEE7Ozs7Ozs7bUJBQWM7QUFDbEQ7QSw0QkFBWSxBLEFBQ2xCOztvQkFBSSxPQUFPLElBQVgsQUFBZSxTQUFTLEFBQ3RCOzBCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ047QUFGZ0IsNEJBRU4sQUFBSSw4QkFBUSxJQUFBLEFBQUksUUFGVixBQUVOLEFBQXdCLEFBQ3hDOzswQkFBQSxBQUFRLElBQUksMEJBQTBCLFFBQUEsQUFBUSxJQUE5QyxBQUFzQyxBQUFZLEFBQ2xEOzBCQUFBLEFBQVEsSUFBSSx1QkFBdUIsUUFBQSxBQUFRLElBQTNDLEFBQW1DLEFBQVksQUFDL0M7MEJBQUEsQUFBUSxJQUFJLHVCQUF1QixRQUFBLEFBQVEsSUFBM0MsQUFBbUMsQUFBWSxBQUMvQzs0QkFBQSxBQUFVLFdBQVcsUUFBQSxBQUFRLElBQTdCLEFBQXFCLEFBQVksQUFDakM7MEJBQUEsQUFBUSxJQUFJLElBQUEsQUFBSSxRQUFoQixBQUFZLEFBQVksQUFDNUI7QUFDRztBQVRELHVCQVVLLEFBQ0g7MEJBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBQUZILDZCQUFBLEFBRWEsQUFBSSxBQUNwQjs7MEJBQUEsQUFBUSxJQUFJLDBCQUEwQixTQUFBLEFBQVEsSUFBOUMsQUFBc0MsQUFBWSxBQUNsRDs0QkFBQSxBQUFVLFdBQVcsU0FBQSxBQUFRLElBQTdCLEFBQXFCLEFBQVksQUFDbEM7QUFFRDs7MEJBQUEsQUFBVSxTQUFWLEFBQW1COzs7dUJBRVEsd0NBQ3pCLFVBRHlCLEFBQ2YsUUFDVixDQUFBLEFBQUMsVUFGd0IsQUFFekIsQUFBVyxlOzttQkFGUDtBLHlDQUtOOzswQkFBQSxBQUFVLGVBQVYsQUFBeUIsQUFFekI7O3NCQUFBLEFBQU0sU0FBUyx3QkFBWSxVQUEzQixBQUFlLEFBQXNCLEFBQ3JDO3NCQUFBLEFBQU0sU0FBUyxzQkFBVSxVQUF6QixBQUFlLEFBQW9CLEFBRXZDOztBQStCSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBQSxBQUFJLFVBQVUsQUFDYjtrREFDTSxBOzs7Ozs7Ozs7Ozs7Ozs7QUF1RlQ7OztpQkFBQSxBQUFhLE9BQU87d0NBQ2xCOztZQUFBLEFBQVEsSUFEVSxBQUNsQixBQUFhOztvSUFESyxBQUVaOztVQS9KUixBQTZKb0IsZUE3SkwsVUFBQSxBQUFDLElBQUQsQUFBSyxNQUFTLEFBQzNCO0FBQ0E7WUFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLEtBQXRCLEFBQWMsQUFBYSxBQUMzQjtjQUFBLEFBQVEsSUFBSSxLQUFaLEFBQWlCLEFBQ2xCO0FBeUptQixBQUdsQjs7VUFBQSxBQUFLLE9BQU8seUJBQVUsTUFBVixBQUFnQixjQUFjLE1BQTFDLEFBQVksQUFBb0MsQUFFaEQ7O1VBQUEsQUFBSztpQkFBUSxBQUNBLEFBQ1g7Y0FGVyxBQUVILEFBQ1I7YUFIRixBQUFhLEFBR0osQUFFVDtBQUxhLEFBQ1g7WUFJRixBQUFRLElBVlUsQUFVbEIsQUFBYTtXQUNkOzs7OztzQ0FHaUIsQSxPQUFPLEFBQ3ZCO1VBQU0sU0FBUyxNQUFmLEFBQXFCLEFBQ3JCO1VBQU0sUUFBUSxPQUFkLEFBQXFCLEFBQ3JCO1VBQU0sT0FBTyxPQUFiLEFBQW9CLEFBQ3BCO2NBQUEsQUFBUSxJQUFJLE1BQUEsQUFBSSxPQUFKLEFBQVMsUUFBckIsQUFBNkIsQUFDOUI7Ozs7NkJBR1MsQUFDUjtVQUFJO0FBRUE7a0JBRmlCLEFBRVAsQUFDVjtlQUhpQixBQUdWLEFBQ1A7Z0JBSmlCLEFBSVQsQUFDWjtBQUNJO2dCQU5pQixBQU1ULEFBQ1I7Y0FQaUIsQUFPWCxBQUNaO0FBQ007b0JBVGlCLEFBU0wsQUFDWjtxQkFWaUIsQUFVSixBQUNiO3lCQVhpQixBQVdBLEFBQ2pCO3NCQVpKLEFBQXFCLEFBWUgsQUFFbEI7QUFkcUIsQUFDckI7VUFhSTtBQUVBO2VBRkosQUFBaUIsQUFFTixBQUVYO0FBSmlCLEFBQ2Y7VUFHRTtBQUVBO2tCQUFVLEFBQ2Q7QUFIQSxBQUF1QixBQUt2QjtBQUx1QixBQUNuQjtVQUlBO0FBRU47QUFDTTtlQUhZLEFBR0wsQUFDYjtBQUNNO21CQUxZLEFBS0QsQUFDWDtvQkFOSixBQUFnQixBQU1BLEFBRWhCO0FBUmdCLEFBQ3BCO1VBT1E7QUFFQTtlQUZlLEFBRVIsQUFDUDtnQkFIZSxBQUdQLEFBQ1I7bUJBSkosQUFBbUIsQUFJSixBQUVmO0FBTm1CLEFBQ3ZCO1VBS1E7QUFFRDtlQUZpQixBQUVWLEFBQ1Y7QUFDQztBQUNFO21CQUFXLEFBRWQ7QUFQQSxBQUFvQjtBQUFBLEFBQ3BCLFFBT0EsSUFBSSxpQkFBWSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFTLE1BQVQsQUFBZSxPQUFPLEFBRTNEOzsrQkFDQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxLQUFiLEFBQWtCO3NCQUFsQjt3QkFBQSxBQUNBO0FBREE7U0FBQSxrQkFDQSxBQUFDLHVDQUFLLE9BQU4sQUFBYTtzQkFBYjt3QkFBQSxBQUVHO0FBRkg7Z0JBRUcsQUFBSyxZQUFMLEFBQWlCLFNBQWxCLEFBQTJCLG9CQUN6QixBQUFDLHdDQUFhLE9BQWQsQUFBb0IsZUFBYyxRQUFRLEVBQUMsSUFBSSxLQUEvQyxBQUEwQyxBQUFVLE1BQUssUUFBekQsQUFBZ0U7c0JBQWhFO3dCQUFBLEFBQXlFO0FBQXpFO1NBQUEsa0JBQXlFLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUc7QUFBSDtBQUFBLDJCQUFHLEFBQUMsd0NBQU0sS0FBSyxLQUFBLEFBQUssWUFBTCxBQUFpQixHQUE3QixBQUFnQztzQkFBaEM7d0JBRDlFLEFBQ0UsQUFBeUUsQUFBRyxBQUNoRjtBQURnRjs7QUFFNUU7d0JBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsU0FBUSxNQUFuQixBQUF3QjtzQkFBeEI7d0JBTEosQUFLSSxBQUVGO0FBRkU7NEJBRUQsY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNFO0FBREY7QUFBQSwyQkFDRyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0c7QUFESDtBQUFBLGdCQURGLEFBQ0UsQUFDUSxBQUVSLHdCQUFDLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsQUFBQyw0Q0FBVSxPQUFYLEFBQWlCLE9BQU0sT0FBTyxNQUFJLEtBQWxDLEFBQXVDLGFBQWEsT0FBcEQsQUFBMEQsV0FBSyxNQUEvRCxBQUFvRSxRQUFPLFNBQTNFLEFBQW1GO3NCQUFuRjt3QkFGSixBQUNFLEFBQ0UsQUFFRDtBQUZDO2tCQWJSLEFBT0UsQUFJRSxBQUlRLEFBR1YsK0JBQUMsY0FBRCxzQkFBQSxBQUFNLFdBQVEsT0FBZDtzQkFBQTt3QkFBQSxBQUNFO0FBREY7MkJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsMkJBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBREYsQUFDRSxBQUNFO0FBREY7cUJBQ1csS0FBQSxBQUFLLFdBRmxCLEFBRUksQUFBdUIsTUF2Qi9CLEFBQ0EsQUFDQSxBQWtCRSxBQUNFLEFBU1A7QUFoQ0QsQUFBZ0IsQUFrQ2hCLE9BbENnQjs7NkJBbUNoQixBQUFDLCtDQUFnQixNQUFNLEtBQXZCLEFBQTRCO29CQUE1QjtzQkFBQSxBQUNBO0FBREE7T0FBQSxrQkFDQSxBQUFDLGtDQUFPLE9BQVIsQUFBZ0I7b0JBQWhCO3NCQUFBLEFBSUk7QUFKSjt5QkFJSSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxpREFDUSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtvQkFBNUI7c0JBTE4sQUFJSSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLG1EQUFTLFlBQVYsQUFBc0IsT0FBTyxnQkFBN0IsQUFBNkMsT0FBTyxZQUFwRCxBQUFnRSxPQUFPLGNBQXZFLEFBQXFGLE1BQU0sVUFBM0YsQUFBcUc7b0JBQXJHO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxnREFDUyxLQUFMLEFBQVM7b0JBQVQ7c0JBRk4sQUFDRSxBQUNJLEFBRUo7QUFGSTsyQkFFSixjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxnREFDUyxLQUFMLEFBQVM7b0JBQVQ7c0JBTE4sQUFJRSxBQUNJLEFBRUo7QUFGSTsyQkFFSixjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxnREFDUyxLQUFMLEFBQVM7b0JBQVQ7c0JBUk4sQUFPRSxBQUNJLEFBRUo7QUFGSTsyQkFFSixjQUFBOztvQkFBQTtzQkFBQSxBQUNJO0FBREo7QUFBQSxnREFDUyxLQUFMLEFBQVM7b0JBQVQ7c0JBWlIsQUFDRSxBQVVFLEFBQ0ksQUFHTjtBQUhNOzRCQUdOLGNBQUEsU0FBSyxPQUFMLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsMkNBQVMsT0FBVixBQUFpQixlQUFlLGFBQWhDLEFBQTRDLDRCQUFPLFFBQW5ELE1BQTBELFdBQTFELE1BQW9FLFNBQXBFLEFBQTZFLGlCQUFpQixVQUFVLEtBQXhHLEFBQTZHO29CQUE3RztzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLHdDQUFNLE9BQVAsQUFBYyxZQUFZLE1BQTFCLEFBQStCLFVBQVMsTUFBeEMsQUFBNkMsUUFBTyxhQUFwRCxBQUFnRSxrQ0FBUSxNQUF4RSxBQUE2RSxVQUFTLFVBQVUsS0FBaEcsQUFBcUcsbUJBQW1CLFFBQXhIO29CQUFBO3NCQUFBLEFBQ0U7QUFERjs7O29CQUNFO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyx5Q0FBTyxNQUFSLEFBQWEsVUFBUyxPQUF0QixBQUE0QjtvQkFBNUI7c0JBQUEsQUFBcUM7QUFBckM7eUJBQXFDLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFyQyxBQUFxQztBQUFBO1VBcEI3QyxBQUNFLEFBZUUsQUFFRSxBQUVFLEFBSVIsK0JBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxVQUFOLEFBQWdCLE9BQU8sU0FBdkIsQUFBZ0MsR0FBRyxTQUFuQyxBQUE0QyxNQUFNLFdBQWxELEFBQTZEO29CQUE3RDtzQkFBQSxBQUNDO0FBREQ7U0FsQ04sQUFDQSxBQUNBLEFBT0ksQUF3QkEsQUFDRSxBQVFQOzs7OztFQS9TaUIsZ0IsQUFBTTs7QUFtVDFCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQzs7Y0FDWSxNQURMLEFBQ1csQUFDaEI7V0FBTyxNQUZGLEFBRVEsQUFDYjtZQUFRLE1BSFYsQUFBTyxBQUdTLEFBRWpCO0FBTFEsQUFDTDtBQUZKOztBQVFBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztpQkFBYSxBQUFtQixtREFGM0IsQUFFUSxBQUFnQyxBQUM3QztlQUFXLEFBQW1CLGlEQUhoQyxBQUFPLEFBR00sQUFBOEIsQUFFNUM7QUFMUSxBQUNMO0FBRkosQUFRQTs7a0JBQWUsQUFBVSxrREFBVixBQUFxQixpQkFBckIsQUFBc0Msb0JBQXJELEFBQWUsQUFBMEQ7O0FBRXpFIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9