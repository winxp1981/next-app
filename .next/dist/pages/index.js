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

        var initProps, cookies, _cookies, translations, response, result, data, i;

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
                  for (i = 0; i < data.length; i++) {
                    console.log('data[' + i + ']:');
                    console.log('data[' + i + '].url: ' + data[i].url);
                    console.log('data[' + i + '].desc: ' + data[i].description);
                    console.log('data[' + i + '].photo: ' + data[i].photo);
                  }
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
        //    border: '1px solid yellow',
        width: '100%',
        height: '40px',
        marginLeft: '10%',
        marginBottom: '40px'
      };
      var inputStyle = {
        //      float: 'left',
        width: '30%'
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
        margin: '0 auto'
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
            lineNumber: 193
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { style: cardStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { src: room.photo, __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          }
        }, room.description), _react2.default.createElement(_semanticUiReact.Card.Meta, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          }
        }, _react2.default.createElement('span', { className: 'date', __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          }
        }, '\u79DF\u91D1:', _react2.default.createElement('strong', { style: priceStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          }
        }, '  10000/\u6708'))), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 208
          }
        })), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 214
          }
        }, _react2.default.createElement('a', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 215
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'user', __source: {
            fileName: _jsxFileName,
            lineNumber: 216
          }
        }), '99 \u8B9A'))));
      });

      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        }
      }, _react2.default.createElement('div', { style: searchDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, _react2.default.createElement(_semanticUiReact.Dropdown, { style: dropDownStyle, placeholder: '\u4E0D\u9650\u5730\u5340', search: true, selection: true, options: search_location, onChange: this.handleChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        }
      }), _react2.default.createElement(_semanticUiReact.Input, { style: inputStyle, size: 'medium', type: 'text', placeholder: '\u641C\u5C0B', name: 'search', onChange: this.handleInputChange, action: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        }
      }, _react2.default.createElement('input', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', color: 'brown', __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        }
      }, 'Search'))), _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, columns: 3, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 243
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwic2V0TG9jYWxlIiwid2l0aFJlZHV4IiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJIZWFkIiwiSW5wdXQiLCJCdXR0b24iLCJHcmlkIiwiQ2FyZCIsIkljb24iLCJJbWFnZSIsIkxhYmVsIiwiRHJvcGRvd24iLCJNZW51Iiwic2VhcmNoX2xvY2F0aW9uIiwia2V5IiwidGV4dCIsInZhbHVlIiwiSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJyZXN1bHQiLCJqc29uIiwiZGF0YSIsInN0YXR1cyIsInJlcSIsInN0b3JlIiwiaXNTZXJ2ZXIiLCJpbml0UHJvcHMiLCJjb29raWVzIiwiY29va2llIiwiZ2V0IiwidXNlcm5hbWUiLCJsb2NhbGUiLCJ0cmFuc2xhdGlvbnMiLCJkaXNwYXRjaCIsImkiLCJsZW5ndGgiLCJ1cmwiLCJkZXNjcmlwdGlvbiIsInBob3RvIiwicm9vbV9kYXRhIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldiIsInNldFN0YXRlIiwiaTE4biIsInN0YXRlIiwib2Zmc2V0IiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwic2VhcmNoRGl2U3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJpbnB1dFN0eWxlIiwiY2FyZFN0eWxlIiwibWFyZ2luVG9wIiwiZ3JpZERpdlN0eWxlIiwibWFyZ2luIiwicHJpY2VTdHlsZSIsImNvbG9yIiwiZHJvcERvd25TdHlsZSIsInJvb21DYXJkcyIsIm1hcCIsInJvb20iLCJpbmRleCIsImhhbmRsZUlucHV0Q2hhbmdlIiwiQ29tcG9uZW50Iiwi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TCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDJDQUFTLE9BQVYsQUFBaUIsZUFBZSxhQUFoQyxBQUE0Qyw0QkFBTyxRQUFuRCxNQUEwRCxXQUExRCxNQUFvRSxTQUFwRSxBQUE2RSxpQkFBaUIsVUFBVSxLQUF4RyxBQUE2RztvQkFBN0c7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsQUFBQyx3Q0FBTSxPQUFQLEFBQWMsWUFBWSxNQUExQixBQUErQixVQUFTLE1BQXhDLEFBQTZDLFFBQU8sYUFBcEQsQUFBZ0UsZ0JBQUssTUFBckUsQUFBMEUsVUFBUyxVQUFVLEtBQTdGLEFBQWtHLG1CQUFtQixRQUFySDtvQkFBQTtzQkFBQSxBQUNFO0FBREY7OztvQkFDRTtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMseUNBQU8sTUFBUixBQUFhLFVBQVMsT0FBdEIsQUFBNEI7b0JBQTVCO3NCQUFBO0FBQUE7U0FMTixBQUNFLEFBRUUsQUFFRSxBQUdKLDZCQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVk7b0JBQVo7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUMsdUNBQUssVUFBTixBQUFnQixPQUFPLFNBQXZCLEFBQWdDLEdBQUcsU0FBbkMsQUFBNEMsTUFBTSxXQUFsRCxBQUE2RDtvQkFBN0Q7c0JBQUEsQUFDQztBQUREO1NBakJOLEFBQ0EsQUFDQSxBQU1JLEFBUUUsQUFDQSxBQVFQOzs7OztFQTlOaUIsZ0JBQU0sQTs7QUFrTzFCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLGdCQUFBLEFBQUMsT0FBVSxBQUNqQzs7Y0FDWSxNQURMLEFBQ1csQUFDaEI7V0FBTyxNQUZGLEFBRVEsQUFDYjtZQUFRLE1BSFYsQUFBTyxBQUdTLEFBRWpCO0FBTFEsQUFDTDtBQUZKOztBQVFBLElBQU0scUJBQXFCLFNBQXJCLEFBQXFCLG1CQUFBLEFBQUMsVUFBYSxBQUN2Qzs7Y0FDWSxBQUFtQixnREFEeEIsQUFDSyxBQUE2QixBQUN2QztpQkFBYSxBQUFtQixtREFGM0IsQUFFUSxBQUFnQyxBQUM3QztlQUFXLEFBQW1CLGlEQUhoQyxBQUFPLEFBR00sQUFBOEIsQUFFNUM7QUFMUSxBQUNMO0FBRkosQUFRQTs7a0JBQWUsQUFBVSxrREFBVixBQUFxQixpQkFBckIsQUFBc0Msb0JBQXJELEFBQWUsQUFBMEQ7O0FBRXpFIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9