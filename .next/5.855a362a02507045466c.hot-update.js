webpackHotUpdate(5,{

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(112);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(113);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(608);

var _link2 = _interopRequireDefault(_link);

var _layout = __webpack_require__(832);

var _layout2 = _interopRequireDefault(_layout);

var _universalCookie = __webpack_require__(666);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _redux = __webpack_require__(576);

var _store = __webpack_require__(613);

var _nextReduxWrapper = __webpack_require__(679);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactI18next = __webpack_require__(614);

var _startI18n = __webpack_require__(1123);

var _startI18n2 = _interopRequireDefault(_startI18n);

var _translationHelpers = __webpack_require__(1134);

var _head = __webpack_require__(247);

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = __webpack_require__(686);

var _reactResponsiveCarousel = __webpack_require__(1137);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/index.js?entry';


var search_location = [{ key: 1, text: '不限地區', value: 1 }, { key: 2, text: '台北市', value: 2 }, { key: 3, text: '新北市', value: 3 }, { key: 4, text: '新竹市', value: 4 }];

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  (0, _createClass3.default)(Index, [{
    key: 'retrieveRoomInfo',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response, result, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("+retrieveRoomInfo");
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
                  console.log('retrieveRoomInfo success: ' + data);
                  result = true;
                } else {
                  result = false;
                }

                console.log("-retrieveRoomInfo");
                return _context.abrupt('return', result);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function retrieveRoomInfo() {
        return _ref.apply(this, arguments);
      }

      return retrieveRoomInfo;
    }()
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_ref3) {
        var req = _ref3.req,
            store = _ref3.store,
            isServer = _ref3.isServer;

        var initProps, cookies, _cookies, translations, response, result, data;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
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

                _context2.next = 5;
                return (0, _translationHelpers.getTranslation)(initProps.locale, ['common', 'namespace1'], 'http://localhost:3000/static/locales/');

              case 5:
                translations = _context2.sent;

                initProps.translations = translations;

                store.dispatch((0, _store.setUsername)(initProps.username));
                store.dispatch((0, _store.setLocale)(initProps.locale));

                // get roominfo from server
                console.log("+retrieveRoomInfo");
                _context2.next = 12;
                return fetch('http://localhost:8000/roominfo/', {
                  method: 'GET',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                });

              case 12:
                response = _context2.sent;
                result = false;
                _context2.next = 16;
                return response.json();

              case 16:
                data = _context2.sent;

                console.log(response.status);
                //console.log(data);
                if (response.status === 200) {
                  /*
                    var i;
                    for (i = 0; i < data.length; i++) {
                      console.log('data['+i+']:');
                      console.log('data['+i+'].url: '+ data[i].url);
                      console.log('data['+i+'].desc: '+ data[i].description);
                      console.log('data['+i+'].photo: '+ data[i].photo);
                    }
                  */
                  initProps.room_data = data;
                  result = true;
                } else {
                  result = false;
                }

                console.log("-retrieveRoomInfo");
                //  return result;

                return _context2.abrupt('return', initProps);

              case 21:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

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
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // does NOT get called on server side
    }
  }, {
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
      };var roomCards = this.props.room_data.map(function (room, index) {

        return _react2.default.createElement(_semanticUiReact.Grid.Column, { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 209
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { style: cardStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 210
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: room.photo, __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 212
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 213
          }
        }, room.description), _react2.default.createElement(_semanticUiReact.Card.Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        }, _react2.default.createElement('span', { className: 'date', __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          }
        }, '\u79DF\u91D1:', _react2.default.createElement('strong', { style: priceStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          }
        }, '  10000/\u6708'))), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          }
        })), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          }
        }), '99 \u8B9A'))));
      });

      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/react-responsive-carousel/carousel.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        }
      }, _react2.default.createElement('div', { style: carouselDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        }
      }, _react2.default.createElement(_reactResponsiveCarousel.Carousel, { showStatus: false, showIndicators: false, showThumbs: false, infiniteLoop: true, autoPlay: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1muV8uAIP0DAAbtGK7EYFw715.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFfVl--myAAxB2AAL5Ptj5lbA233.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFfVlnG6GAVWDeAARBpjqMJy8753.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1m5DSOAOcrUAANztihPK14300.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }))), _react2.default.createElement('div', { style: searchDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown, { style: dropDownStyle, placeholder: '\u4E0D\u9650\u5730\u5340', search: true, selection: true, options: search_location, onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }), _react2.default.createElement(_semanticUiReact.Input, { style: inputStyle, size: 'medium', type: 'text', placeholder: '\u641C\u5C0B', name: 'search', onChange: this.handleInputChange, action: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, _react2.default.createElement('input', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        }
      }), ' Search')))), _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, columns: 3, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 276
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwic2V0TG9jYWxlIiwid2l0aFJlZHV4IiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJIZWFkIiwiSW5wdXQiLCJCdXR0b24iLCJHcmlkIiwiQ2FyZCIsIkljb24iLCJJbWFnZSIsIkxhYmVsIiwiRHJvcGRvd24iLCJNZW51IiwiQ2Fyb3VzZWwiLCJzZWFyY2hfbG9jYXRpb24iLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJyZXNwb25zZSIsInJlc3VsdCIsImpzb24iLCJkYXRhIiwic3RhdHVzIiwicmVxIiwic3RvcmUiLCJpc1NlcnZlciIsImluaXRQcm9wcyIsImNvb2tpZXMiLCJjb29raWUiLCJnZXQiLCJ1c2VybmFtZSIsImxvY2FsZSIsInRyYW5zbGF0aW9ucyIsImRpc3BhdGNoIiwicm9vbV9kYXRhIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldiIsInNldFN0YXRlIiwiaTE4biIsInN0YXRlIiwib2Zmc2V0IiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwic2VhcmNoRGl2U3R5bGUiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsInBhZGRpbmdUb3AiLCJwYWRkaW5nTGVmdCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImlucHV0U3R5bGUiLCJjYXJvdXNlbERpdlN0eWxlIiwiY2FyZFN0eWxlIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImdyaWREaXZTdHlsZSIsIm1hcmdpbiIsInByaWNlU3R5bGUiLCJjb2xvciIsImRyb3BEb3duU3R5bGUiLCJyb29tQ2FyZHMiLCJtYXAiLCJyb29tIiwiaW5kZXgiLCJwaG90byIsImRlc2NyaXB0aW9uIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQ0UsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7OztBQUNQLEFBQVMsQUFBTyxBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFNLEFBQU8sQUFBTyxBQUFVOztBQUNuRCxBQUFTOzs7Ozs7O0FBSVQsSUFBTSxrQkFBa0IsQ0FDdEIsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLFFBQVEsT0FERixBQUN0QixBQUErQixLQUMvQixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BQVYsQUFBZ0IsT0FBTyxPQUZELEFBRXRCLEFBQThCLEtBQzlCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixPQUFPLE9BSEQsQUFHdEIsQUFBOEIsS0FDOUIsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLE9BQU8sT0FKekIsQUFBd0IsQUFJdEIsQUFBOEI7O0ksQUFHMUI7Ozs7Ozs7Ozs7O21CQVNBO3dCQUFBLEFBQVEsSUFBUixBQUFZOzs7MEJBQzJDLEFBQzNDLEFBQ1I7OzhCQUFTLEFBQ0csQUFDVjtvQyxBQUplLEFBQWtDLEFBRTFDLEFBRVM7QUFGVCxBQUNQO0FBSGlELEFBQ25ELGlCQURpQjs7bUJBQWpCO0Esb0NBUUE7QSx5QkFBUyxBOzt1QkFDSSxTQUFBLEFBQVMsQTs7bUJBQXRCO0EsZ0NBQ0o7O3dCQUFBLEFBQVEsSUFBSSxTQUFaLEFBQXFCLEFBQ3JCO0FBQ0E7b0JB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QWEsVUFBUyxPQUF0QixBQUE0QjtvQkFBNUI7c0JBQUEsQUFBcUM7QUFBckM7eUJBQXFDLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFyQyxBQUFxQztBQUFBO1VBcEI3QyxBQUNFLEFBZUUsQUFFRSxBQUVFLEFBSVIsK0JBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx1Q0FBSyxVQUFOLEFBQWdCLE9BQU8sU0FBdkIsQUFBZ0MsR0FBRyxTQUFuQyxBQUE0QyxNQUFNLFdBQWxELEFBQTZEO29CQUE3RDtzQkFBQSxBQUNDO0FBREQ7U0FsQ04sQUFDQSxBQUNBLEFBT0ksQUF3QkEsQUFDRSxBQVFQOzs7OztFQTlQaUIsZ0JBQU0sQTs7QUFrUTFCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQzs7Y0FDWSxNQURMLEFBQ1csQUFDaEI7V0FBTyxNQUZGLEFBRVEsQUFDYjtZQUFRLE1BSFYsQUFBTyxBQUdTLEFBRWpCO0FBTFEsQUFDTDtBQUZKOztBQVFBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztpQkFBYSxBQUFtQixtREFGM0IsQUFFUSxBQUFnQyxBQUM3QztlQUFXLEFBQW1CLGlEQUhoQyxBQUFPLEFBR00sQUFBOEIsQUFFNUM7QUFMUSxBQUNMO0FBRkosQUFRQTs7a0JBQWUsQUFBVSxrREFBVixBQUFxQixpQkFBckIsQUFBc0Msb0JBQXJELEFBQWUsQUFBMEQ7O0FBRXpFIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/home/morris/project/nextjs/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/morris/project/nextjs/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(109)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44NTVhMzYyYTAyNTA3MDQ1NDY2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/YWM0ODA5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBDb29raWVzIGZyb20gJ3VuaXZlcnNhbC1jb29raWUnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQge1xuICBpbml0U3RvcmUsXG4gIGFkZENvdW50LFxuICBzZXRVc2VybmFtZSxcbiAgc2V0TG9jYWxlXG59IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyBJMThuZXh0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHN0YXJ0STE4biBmcm9tICcuLi90b29scy9zdGFydEkxOG4nXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uL3Rvb2xzL3RyYW5zbGF0aW9uSGVscGVycydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IEdyaWQsIENhcmQsIEljb24sIEltYWdlLCBMYWJlbCwgRHJvcGRvd24sIE1lbnUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XG5cblxuXG5jb25zdCBzZWFyY2hfbG9jYXRpb24gPSBbXG4gIHsga2V5OiAxLCB0ZXh0OiAn5LiN6ZmQ5Zyw5Y2AJywgdmFsdWU6IDEgfSxcbiAgeyBrZXk6IDIsIHRleHQ6ICflj7DljJfluIInLCB2YWx1ZTogMiB9LFxuICB7IGtleTogMywgdGV4dDogJ+aWsOWMl+W4gicsIHZhbHVlOiAzIH0sXG4gIHsga2V5OiA0LCB0ZXh0OiAn5paw56u55biCJywgdmFsdWU6IDQgfSxcbl1cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGhhbmRsZUNoYW5nZSA9IChldiwgZGF0YSkgPT4ge1xuICAgIC8vdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHZhbHVlfSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGRhdGEudmFsdWV9KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLnZhbHVlKTtcbiAgfTtcblxuICBhc3luYyByZXRyaWV2ZVJvb21JbmZvKCkge1xuICAgICAgY29uc29sZS5sb2coXCIrcmV0cmlldmVSb29tSW5mb1wiKTtcbiAgICAgIHZhciByZXNwb25zZSA9IGF3YWl0IGZldGNoKEJBQ0tFTkRfVVJMICsgJy9yb29taW5mby8nLCB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3JldHJpZXZlUm9vbUluZm8gc3VjY2VzczogJysgZGF0YSk7XG4gICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiLXJldHJpZXZlUm9vbUluZm9cIik7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSAsIHN0b3JlLCBpc1NlcnZlcn0pIHsgIC8vIG9ubHkgc3VwcG9ydCBpbiBzZXJ2ZXIgc2lkZSBpZiB0aGVyZSBpcyByZXEgaW4gcGFyYW1ldGVyXG4gICAgY29uc3QgaW5pdFByb3BzID0ge307XG4gICAgaWYgKHJlcSAmJiByZXEuaGVhZGVycykge1xuICAgICAgY29uc29sZS5sb2coXCJAQCBnZXRJbml0aWFsUHJvcHMgQCBzZXJ2ZXJcIik7XG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLmhlYWRlcnMuY29va2llKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQEAgSGVhZGVyIHVzZXJuYW1lID0gXCIgKyBjb29raWVzLmdldCgndXNlcm5hbWUnKSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkBAIEhlYWRlciBlbWFpbCA9IFwiICsgY29va2llcy5nZXQoJ2VtYWlsJykpO1xuICAgICAgY29uc29sZS5sb2coXCJAQCBIZWFkZXIgdG9rZW4gPSBcIiArIGNvb2tpZXMuZ2V0KCd0b2tlbicpKTtcbiAgICAgIGluaXRQcm9wcy51c2VybmFtZSA9IGNvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnNbJ2FjY2VwdC1sYW5ndWFnZSddKTtcbiAgLy8gICAgY29va2llcy5zZXQoJ2xvY2FsZScsIGxhbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQEAgZ2V0SW5pdGlhbFByb3BzIEAgY2xpZW50XCIpO1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkBAIEhlYWRlciB1c2VybmFtZSA9IFwiICsgY29va2llcy5nZXQoJ3VzZXJuYW1lJykpO1xuICAgICAgaW5pdFByb3BzLnVzZXJuYW1lID0gY29va2llcy5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgfVxuXG4gICAgaW5pdFByb3BzLmxvY2FsZSA9ICd0dyc7XG5cbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBhd2FpdCBnZXRUcmFuc2xhdGlvbihcbiAgICAgIGluaXRQcm9wcy5sb2NhbGUsXG4gICAgICBbJ2NvbW1vbicsICduYW1lc3BhY2UxJ10sXG4gICAgICBGUk9OVEVORF9VUkwrJy9zdGF0aWMvbG9jYWxlcy8nXG4gICAgKVxuICAgIGluaXRQcm9wcy50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG5cbiAgICBzdG9yZS5kaXNwYXRjaChzZXRVc2VybmFtZShpbml0UHJvcHMudXNlcm5hbWUpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChzZXRMb2NhbGUoaW5pdFByb3BzLmxvY2FsZSkpO1xuXG4gICAgLy8gZ2V0IHJvb21pbmZvIGZyb20gc2VydmVyXG4gICAgY29uc29sZS5sb2coXCIrcmV0cmlldmVSb29tSW5mb1wiKTtcbiAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChCQUNLRU5EX1VSTCArICcvcm9vbWluZm8vJywge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgIHZhciBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAvKlxuICAgICAgdmFyIGk7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YVsnK2krJ106Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhWycraSsnXS51cmw6ICcrIGRhdGFbaV0udXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGFbJytpKyddLmRlc2M6ICcrIGRhdGFbaV0uZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YVsnK2krJ10ucGhvdG86ICcrIGRhdGFbaV0ucGhvdG8pO1xuICAgICAgfVxuICAgICovXG4gICAgICBpbml0UHJvcHMucm9vbV9kYXRhID0gZGF0YTtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCItcmV0cmlldmVSb29tSW5mb1wiKTtcbiAgLy8gIHJldHVybiByZXN1bHQ7XG5cbiAgICByZXR1cm4gaW5pdFByb3BzO1xuICB9XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaTE4biA9IHN0YXJ0STE4bihwcm9wcy50cmFuc2xhdGlvbnMsIHByb3BzLmxvY2FsZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcm9vbV9kYXRhOiBbXSxcbiAgICAgIG9mZnNldDogMCxcbiAgICAgIHZhbHVlOiAnVGFpcGVpIENpdHknLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGRvZXMgTk9UIGdldCBjYWxsZWQgb24gc2VydmVyIHNpZGVcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICBjb25zb2xlLmxvZygnWycrbmFtZSsnXSA6JyArIHZhbHVlKTtcbiAgfVxuXG5cbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgc2VhcmNoRGl2U3R5bGUgPSB7XG4gICAgLy8gICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyZWVuJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnNTAlJyxcbiAgICAgICAgaGVpZ2h0OiAnODBweCcsXG4gICAgLy8gICAgdG9wOiAnNzAlJyxcbiAgICAgICAgYm90dG9tOiAnMTBweCcsXG4gICAgICAgIGxlZnQ6ICcyNSUnLFxuICAvLyAgICAgIG1hcmdpbkxlZnQ6ICcxMCUnLFxuICAgICAgICBwYWRkaW5nVG9wOiAnMjBweCcsXG4gICAgICAgIHBhZGRpbmdMZWZ0OiAnMjBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC40KScsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxuICAgIH1cbiAgICB2YXIgaW5wdXRTdHlsZSA9IHtcbiAgICAgIC8vICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgd2lkdGg6ICc3MCUnLFxuICAgIH1cbiAgICB2YXIgY2Fyb3VzZWxEaXZTdHlsZSA9IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA0ODcyOTIvcG9zaXRpb24tYWJzb2x1dGUtYnV0LXJlbGF0aXZlLXRvLXBhcmVudFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAvLyAgICBib3JkZXI6ICcxcHggc29saWQgcmVkJyxcbiAgICB9XG4gICAgdmFyIGNhcmRTdHlsZSA9IHtcbi8vICAgICAgICBib3JkZXI6ICcxcHggc29saWQgYmx1ZScsXG4gIC8vICAgICAgZmxvYXQ6ICdsZWZ0JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgLy8gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMCcsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICcwJyxcbiAgICB9XG4gICAgdmFyIGdyaWREaXZTdHlsZSA9IHtcbi8vICAgICAgICBib3JkZXI6ICcxcHggc29saWQgcmVkJyxcbiAgICAgICAgd2lkdGg6ICc4MCUnLFxuICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxuICAgICAgICBtYXJnaW5Ub3A6ICc1MHB4JyxcbiAgICB9XG4gICAgdmFyIHByaWNlU3R5bGUgPSB7XG4vLyAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJlZCcsXG4gICAgICAgIGNvbG9yOiAnIzY2NjY2NicsXG4gIC8vICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIH1cbiAgICB2YXIgZHJvcERvd25TdHlsZSA9IHtcbiAgICAvLyAgIGJvcmRlcjogJzFweCBzb2xpZCB5ZWxsb3cnLFxuICAgICAgIHdpZHRoOiAnMjBweCcsXG4gICAgLy8gICBoZWlnaHQ6ICc1cHgnLFxuICAgICAvLyAgbWFyZ2luTGVmdDogJzEwJScsXG4gICAgICAgbWFyZ2luVG9wOiAnMCcsXG4gICAgfVxuICAgIC8vIHJlbmRlciByb29tIGluZm9zXG4gICAgbGV0IHJvb21DYXJkcyA9IHRoaXMucHJvcHMucm9vbV9kYXRhLm1hcChmdW5jdGlvbihyb29tLCBpbmRleCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkLkNvbHVtbiBrZXk9e2luZGV4fT5cbiAgICAgICAgPENhcmQgc3R5bGU9e2NhcmRTdHlsZX0+XG4gICAgICAgICAgPEltYWdlIHNyYz17IHJvb20ucGhvdG8gfSAvPlxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICA8Q2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgIHtyb29tLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9DYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDxDYXJkLk1ldGE+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGF0ZSc+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLy8gIOenn+mHkTogPExhYmVsIGNvbG9yPSdvcmFuZ2UnPjEwMDAwL+aciDwvTGFiZWw+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICDnp5/ph5E6PHN0cm9uZyBzdHlsZT17cHJpY2VTdHlsZX0+ICAxMDAwMC/mnIg8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vcm9vbS51cmxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgPEljb24gbmFtZT0ndXNlcicgLz5cbiAgICAgICAgICAgICAgOTkg6K6aXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgPEkxOG5leHRQcm92aWRlciBpMThuPXt0aGlzLmkxOG59PlxuICAgIDxMYXlvdXQgdGl0bGUgPSBcIldlbGNvbWUgdG8gSW5zdFJlbnRcIj5cbiAgICAgICAge1xuICAgICAgICAvLyAgIDxkaXYgY2xhc3NOYW1lPSdqdW1ib3Ryb24nPjxoMT5IT01FPC9oMT48L2Rpdj5cbiAgICAgICAgfVxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL3N0YXRpYy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2Nhcm91c2VsLm1pbi5jc3NcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtjYXJvdXNlbERpdlN0eWxlfT5cbiAgICAgICAgICAgIDxDYXJvdXNlbCBzaG93U3RhdHVzPXtmYWxzZX0gc2hvd0luZGljYXRvcnM9e2ZhbHNlfSBzaG93VGh1bWJzPXtmYWxzZX0gaW5maW5pdGVMb29wPXt0cnVlfSBhdXRvUGxheT17dHJ1ZX0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvQ2hBRkQxbXVWOHVBSVAwREFBYnRHSzdFWUZ3NzE1LmpwZ1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1nL0NoQUZmVmwtLW15QUF4QjJBQUw1UHRqNWxiQTIzMy5qcGdcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltZy9DaEFGZlZsbkc2R0FWV0RlQUFSQnBqcU1KeTg3NTMuanBnXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvQ2hBRkQxbTVEU09BT2NyVUFBTnp0aWhQSzE0MzAwLmpwZ1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NlYXJjaERpdlN0eWxlfT5cbiAgICAgICAgICAgICAgPERyb3Bkb3duIHN0eWxlPXtkcm9wRG93blN0eWxlfSBwbGFjZWhvbGRlcj0n5LiN6ZmQ5Zyw5Y2AJyBzZWFyY2ggc2VsZWN0aW9uIG9wdGlvbnM9e3NlYXJjaF9sb2NhdGlvbn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17aW5wdXRTdHlsZX0gc2l6ZT0nbWVkaXVtJyB0eXBlPSd0ZXh0JyBwbGFjZWhvbGRlcj0n5pCc5bCLJyBuYW1lPSdzZWFyY2gnIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfSBhY3Rpb24+XG4gICAgICAgICAgICAgICAgPGlucHV0IC8+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNvbG9yPSdvcmFuZ2UnPjxJY29uIG5hbWU9J3NlYXJjaCcgLz4gU2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvSW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e2dyaWREaXZTdHlsZX0+XG4gICAgICAgICAgPEdyaWQgY2VudGVyZWQ9e2ZhbHNlfSBjb2x1bW5zPXszfSByZWxheGVkPXt0cnVlfSBzdGFja2FibGU9e3RydWV9PlxuICAgICAgICAgIHtyb29tQ2FyZHN9XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICAgIDwvSTE4bmV4dFByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTogc3RhdGUudXNlcm5hbWUsXG4gICAgY291bnQ6IHN0YXRlLmNvdW50LFxuICAgIGxvY2FsZTogc3RhdGUubG9jYWxlLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKSxcbiAgICBzZXRVc2VybmFtZTogYmluZEFjdGlvbkNyZWF0b3JzKHNldFVzZXJuYW1lLCBkaXNwYXRjaCksXG4gICAgc2V0TG9jYWxlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0TG9jYWxlLCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4KVxuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7QUFTQTtBQUFBOzs7QUFHQTs7QUFFQTtBQUFBO0FBREE7QUFGQTtBQUNBO0FBRkE7QUFRQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQUE7QUFDQTs7Ozs7O0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVRBO0FBV0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7O0FBR0E7O0FBRUE7QUFBQTtBQURBO0FBRkE7QUFDQTtBQUZBO0FBUUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUFBO0FBVUE7Ozs7Ozs7OztBQUFBO0FBRUE7QUFaQTtBQWVBO0FBRUE7QUFDQTtBQURBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBOzs7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFsR0E7QUFBQTtBQUNBO0FBbUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUlBOzs7OztBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWJBO0FBYUE7QUFFQTtBQUVBO0FBSEE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUpBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUtBO0FBRUE7QUFDQTtBQUVBO0FBSkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQUNBO0FBQ0E7QUFTQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFNQTtBQU5BO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUlBO0FBSkE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTs7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFRQTs7Ozs7QUE5UEE7QUFDQTtBQWlRQTs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==