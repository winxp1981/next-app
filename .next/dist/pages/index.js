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