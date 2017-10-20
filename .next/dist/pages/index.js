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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

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

var _reactLoading = require('react-loading');

var _reactLoading2 = _interopRequireDefault(_reactLoading);

var _reactInfiniteScroller = require('react-infinite-scroller');

var _reactInfiniteScroller2 = _interopRequireDefault(_reactInfiniteScroller);

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
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log('Index componentDidMount (client only)');
              /*
                  console.log("+retrieveRoomInfo client");
                //  const cookies = new Cookies();
                  fetch(BACKEND_URL + '/rooms/', {
                      method: 'GET',
                      headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                //        'Authorization': 'Token '+ cookies.get('token'),
                      },
                  }).then(res => {
                    // res instanceof Response == true.
                    if (res.ok) {
                      res.json().then(data => {
                      //  console.log(data);
                        this.setState({
                          room_data: data
                        });
                        console.log('room data retrieve complete....');
              
                        var i;
                        for (i = 0; i < data.length; i++) {
                          console.log('data['+i+']:');
                          console.log('data['+i+'].id: '+ data[i].id);
                          console.log('data['+i+'].desc: '+ data[i].description);
                          console.log('data['+i+'].room_photos: '+ data[i].room_photos.length);
                          if (data[i].room_photos.length > 0) {
                            var k;
                            for (k = 0 ; k < data[i].room_photos.length ; k++) {
                              console.log('data['+i+'].room_photos: '+ data[i].room_photos[k].photo);
                            }
                          }
                        }
              
                      });
                    } else {
                      console.log("Response wasn't perfect, status: ", res.status);
                    }
                  }, function(e) {
                    console.log("Fetch failed!", e);
                  });
              
                  console.log("-retrieveRoomInfo client");
              */

              case 1:
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
      rooms: [],
      hasMoreItems: true,
      nextHref: null,

      value: 'Taipei City'
    };
    console.log('-Index ctor');
    return _this;
  }

  (0, _createClass3.default)(Index, [{
    key: 'loadRooms',
    value: function loadRooms(page) {
      var _this2 = this;

      var url = 'http://localhost:8000/rooms/?limit=3';
      if (this.state.nextHref) {
        url = this.state.nextHref;
      }

      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          //        'Authorization': 'Token '+ cookies.get('token'),
        }
      }).then(function (res) {
        // res instanceof Response == true.
        if (res.ok) {
          console.log('loadRooms res OK');
          res.json().then(function (data) {
            console.log(data);
            var rooms = _this2.state.rooms;
            data.results.map(function (room) {
              rooms.push(room);
            });

            if (data.next) {
              _this2.setState({
                rooms: rooms,
                nextHref: data.next
              });
            } else {
              _this2.setState({
                hasMoreItems: false
                // being: test infinite items
                /*
                hasMoreItems: true,
                nextHref: null
                */
                // end: test infinite items
              });
            }
            /*
              var i;
              for (i = 0; i < data.length; i++) {
                console.log('data['+i+']:');
                console.log('data['+i+'].id: '+ data[i].id);
                console.log('data['+i+'].desc: '+ data[i].description);
                console.log('data['+i+'].room_photos: '+ data[i].room_photos.length);
                if (data[i].room_photos.length > 0) {
                  var k;
                  for (k = 0 ; k < data[i].room_photos.length ; k++) {
                    console.log('data['+i+'].room_photos: '+ data[i].room_photos[k].photo);
                  }
                }
              }
            */
          });
        } else {
          console.log("Response wasn't perfect, status: ", res.status);
        }
      }, function (e) {
        console.log("Fetch failed!", e);
      });
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
      var carouselDivStyle = {
        // https://stackoverflow.com/questions/10487292/position-absolute-but-relative-to-parent
        position: 'relative'
        //  border: '1px solid red',
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
        width: '70%',
        margin: '0 auto',
        marginTop: '50px'
      };
      var searchDivStyle = {
        //    border: '1px solid green',
        position: 'absolute',
        width: '40%',
        minWidth: '400px',
        //    height: '140px',
        //    top: '70%',
        bottom: '10px',
        left: '25%',
        //      marginLeft: '10%',
        paddingTop: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        paddingBottom: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        borderRadius: '10px'
      };
      var inputStyle = {
        //  float: 'right',
        width: '100%'
      };
      var locationDivStyle = {
        display: 'inline-block',
        border: '1px solid blue',
        width: '110px',
        height: '105px',
        //  marginLeft: '10%',
        marginTop: '0'
      };
      var inputDivStyle = {
        display: 'inline',
        //   border: '1px solid blue',
        width: '100%',
        //   height: '100%',
        //  marginLeft: '10%',
        marginTop: '0'
      };
      var roomPhotoMainDivStyle = {
        position: 'relative'
        //  border: '1px solid blue',
      };
      var roomPhotoMainTitleDivStyle = {
        position: 'absolute',
        width: '100%',
        bottom: '0px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: 'rgba(255, 255, 255, 0.9)',
        paddingTop: '3px',
        paddingLeft: '3px',
        paddingBottom: '3px'
        // render room infos
      };var roomCards = this.state.rooms.map(function (room, index) {

        return _react2.default.createElement(_semanticUiReact.Grid.Column, { key: index, __source: {
            fileName: _jsxFileName,
            lineNumber: 329
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { style: cardStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 330
          }
        }, _react2.default.createElement('div', { style: roomPhotoMainDivStyle, 'data-jsx': 640748786,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          }
        }, room.room_photos.length > 0 ? _react2.default.createElement(_externalLink2.default, { route: 'room_detail', params: { id: room.id }, target: '_blank', __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          }
        }, _react2.default.createElement(_reactLazyload2.default, { placeholder: _react2.default.createElement(_reactLoading2.default, { type: 'bars', color: '#444', height: 80, width: 80, delay: 0, __source: {
              fileName: _jsxFileName,
              lineNumber: 335
            }
          }),
          height: 100, __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          }
        }, _react2.default.createElement('img', { src: room.room_photos[0].photo, width: '100%', className: 'roomCardImg', 'data-jsx': 640748786,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336
          }
        }))) :
        //    <a href={'room/'+room.id} target='_blank'><Image src={room.room_photos[0].photo} /></a> :
        _react2.default.createElement(_semanticUiReact.Icon, { name: 'image', size: 'massive', __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          }
        }), _react2.default.createElement('div', { style: roomPhotoMainTitleDivStyle, 'data-jsx': 640748786,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341
          }
        }, _react2.default.createElement('h2', {
          'data-jsx': 640748786,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          }
        }, room.title))), _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          }
        }), _react2.default.createElement(_semanticUiReact.Card.Description, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 348
          }
        }, _react2.default.createElement('span', {
          'data-jsx': 640748786,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 349
          }
        }, _react2.default.createElement(_semanticUiReact.Statistic, { color: 'red', value: '$' + room.price_month, label: '/\u6708', size: 'mini', floated: 'right', __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          }
        })), room.description)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          }
        },

        //<Button label={<Label>{room.like_count}</Label>} color='orange' icon='heart' content='' size='mini' />
        /*
        <Feed size='large'>
          <Feed.Event>
              <Feed.Meta>
                <Feed.Like><Icon name='like' />{room.like_count}</Feed.Like>
              </Feed.Meta>
          </Feed.Event>
        </Feed>
        */
        _react2.default.createElement(_semanticUiReact.Header, { as: 'h5', color: 'red', __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'like', __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          }
        }), room.like_count))), _react2.default.createElement(_style2.default, {
          styleId: 640748786,
          css: 'img.roomCardImg[data-jsx="640748786"]{opacity:1;-webkit-transition:.3s ease-in-out;-webkit-transition:.3s ease-in-out;transition:.3s ease-in-out}img.roomCardImg[data-jsx="640748786"]:hover{opacity:.8}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtYb0IsQUFHc0IsQUFLQyxVQUp3QixDQUtwQyxrQ0FKNEIsOERBQzVCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiLi4vcm91dGVzXCJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJ1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQge1xuICBpbml0U3RvcmUsXG4gIGFkZENvdW50LFxuICBzZXRVc2VybmFtZSxcbiAgc2V0TG9jYWxlXG59IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInXG5pbXBvcnQgeyBJMThuZXh0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHN0YXJ0STE4biBmcm9tICcuLi90b29scy9zdGFydEkxOG4nXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uL3Rvb2xzL3RyYW5zbGF0aW9uSGVscGVycydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IEdyaWQsIENhcmQsIEljb24sIEltYWdlLCBMYWJlbCwgRHJvcGRvd24sIE1lbnUsIFN0YXRpc3RpYywgTG9hZGVyLCBIZWFkZXIsIEZlZWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCdcbmltcG9ydCBFeHRlcm5hbExpbmsgZnJvbSAnLi4vY29tcG9uZW50cy9leHRlcm5hbExpbmsnICAvLyBmb3IgdGFyZ2V0PSdfYmxhbmsnXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xuaW1wb3J0IFJlYWN0TG9hZGluZyBmcm9tICdyZWFjdC1sb2FkaW5nJztcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tICdyZWFjdC1pbmZpbml0ZS1zY3JvbGxlcic7XG5cbmNvbnN0IHNlYXJjaF9sb2NhdGlvbiA9IFtcbiAgeyBrZXk6IDEsIHRleHQ6ICfkuI3pmZDlnLDljYAnLCB2YWx1ZTogMSB9LFxuICB7IGtleTogMiwgdGV4dDogJ+WPsOWMl+W4gicsIHZhbHVlOiAyIH0sXG4gIHsga2V5OiAzLCB0ZXh0OiAn5paw5YyX5biCJywgdmFsdWU6IDMgfSxcbiAgeyBrZXk6IDQsIHRleHQ6ICfmlrDnq7nluIInLCB2YWx1ZTogNCB9LFxuXVxuXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBoYW5kbGVDaGFuZ2UgPSAoZXYsIGRhdGEpID0+IHtcbiAgICAvL3RoaXMuc2V0U3RhdGUoe3ZhbHVlOiB2YWx1ZX0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBkYXRhLnZhbHVlfSk7XG4gICAgY29uc29sZS5sb2coZGF0YS52YWx1ZSk7XG4gIH07XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSAsIHN0b3JlLCBpc1NlcnZlcn0pIHsgIC8vIG9ubHkgc3VwcG9ydCBpbiBzZXJ2ZXIgc2lkZSBpZiB0aGVyZSBpcyByZXEgaW4gcGFyYW1ldGVyXG4gICAgY29uc3QgaW5pdFByb3BzID0ge307XG4gICAgaWYgKHJlcSAmJiByZXEuaGVhZGVycykge1xuICAgICAgY29uc29sZS5sb2coXCJAQCBnZXRJbml0aWFsUHJvcHMgQCBzZXJ2ZXJcIik7XG4gICAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLmhlYWRlcnMuY29va2llKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiQEAgSGVhZGVyIHVzZXJuYW1lID0gXCIgKyBjb29raWVzLmdldCgndXNlcm5hbWUnKSk7XG4gICAgICBjb25zb2xlLmxvZyhcIkBAIEhlYWRlciBlbWFpbCA9IFwiICsgY29va2llcy5nZXQoJ2VtYWlsJykpO1xuICAgICAgY29uc29sZS5sb2coXCJAQCBIZWFkZXIgdG9rZW4gPSBcIiArIGNvb2tpZXMuZ2V0KCd0b2tlbicpKTtcbiAgICAgIGluaXRQcm9wcy51c2VybmFtZSA9IGNvb2tpZXMuZ2V0KCd1c2VybmFtZScpO1xuICAgICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnNbJ2FjY2VwdC1sYW5ndWFnZSddKTtcbiAgLy8gICAgY29va2llcy5zZXQoJ2xvY2FsZScsIGxhbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQEAgZ2V0SW5pdGlhbFByb3BzIEAgY2xpZW50XCIpO1xuICAgICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG4gICAgICBjb25zb2xlLmxvZyhcIkBAIEhlYWRlciB1c2VybmFtZSA9IFwiICsgY29va2llcy5nZXQoJ3VzZXJuYW1lJykpO1xuICAgICAgaW5pdFByb3BzLnVzZXJuYW1lID0gY29va2llcy5nZXQoJ3VzZXJuYW1lJyk7XG4gICAgfVxuXG4gICAgaW5pdFByb3BzLmxvY2FsZSA9ICd0dyc7XG5cbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSBhd2FpdCBnZXRUcmFuc2xhdGlvbihcbiAgICAgIGluaXRQcm9wcy5sb2NhbGUsXG4gICAgICBbJ2NvbW1vbicsICduYW1lc3BhY2UxJ10sXG4gICAgICBGUk9OVEVORF9VUkwrJy9zdGF0aWMvbG9jYWxlcy8nXG4gICAgKVxuICAgIGluaXRQcm9wcy50cmFuc2xhdGlvbnMgPSB0cmFuc2xhdGlvbnM7XG5cbiAgICBzdG9yZS5kaXNwYXRjaChzZXRVc2VybmFtZShpbml0UHJvcHMudXNlcm5hbWUpKTtcbiAgICBzdG9yZS5kaXNwYXRjaChzZXRMb2NhbGUoaW5pdFByb3BzLmxvY2FsZSkpO1xuXG4gICAgaWYgKGlzU2VydmVyKSB7XG4gICAgfVxuICAgIHJldHVybiBpbml0UHJvcHM7XG4gIH1cblxuICBhc3luYyBmZXRjaFJvb21EYXRhU1NSKCkge1xuICAgIGNvbnNvbGUubG9nKFwiK2ZldGNoUm9vbURhdGFTU1JcIik7XG4gICAgdmFyIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goQkFDS0VORF9VUkwgKyAnL3Jvb21pbmZvLycsIHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICB2YXIgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXMpO1xuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdkYXRhWycraSsnXS51cmw6ICcrIGRhdGFbaV0udXJsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2RhdGFbJytpKyddLmRlc2M6ICcrIGRhdGFbaV0uZGVzY3JpcHRpb24pO1xuICAgICAgICBjb25zb2xlLmxvZygnZGF0YVsnK2krJ10ucGhvdG86ICcrIGRhdGFbaV0ucGhvdG8pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRhdGEgPSBbXTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCItZmV0Y2hSb29tRGF0YVNTUlwiKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBpZiAoIXByb2Nlc3MuYnJvd3NlcikgeyAvLyBzZXJ2ZXJcbiAgICAgIGNvbnNvbGUubG9nKCdJbmRleCBjb21wb25lbnRXaWxsTW91bnQgb24gc2VydmVyJyk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ0BAIGNvbXBvbmVudFdpbGxVbm1vdW50Jyk7XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZygnSW5kZXggY29tcG9uZW50RGlkTW91bnQgKGNsaWVudCBvbmx5KScpO1xuLypcbiAgICBjb25zb2xlLmxvZyhcIityZXRyaWV2ZVJvb21JbmZvIGNsaWVudFwiKTtcbiAgLy8gIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcygpO1xuICAgIGZldGNoKEJBQ0tFTkRfVVJMICsgJy9yb29tcy8nLCB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gIC8vICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdUb2tlbiAnKyBjb29raWVzLmdldCgndG9rZW4nKSxcbiAgICAgICAgfSxcbiAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAvLyByZXMgaW5zdGFuY2VvZiBSZXNwb25zZSA9PSB0cnVlLlxuICAgICAgaWYgKHJlcy5vaykge1xuICAgICAgICByZXMuanNvbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHJvb21fZGF0YTogZGF0YVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyb29tIGRhdGEgcmV0cmlldmUgY29tcGxldGUuLi4uJyk7XG5cbiAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFbJytpKyddOicpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGFbJytpKyddLmlkOiAnKyBkYXRhW2ldLmlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhWycraSsnXS5kZXNjOiAnKyBkYXRhW2ldLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhWycraSsnXS5yb29tX3Bob3RvczogJysgZGF0YVtpXS5yb29tX3Bob3Rvcy5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKGRhdGFbaV0ucm9vbV9waG90b3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB2YXIgaztcbiAgICAgICAgICAgICAgZm9yIChrID0gMCA7IGsgPCBkYXRhW2ldLnJvb21fcGhvdG9zLmxlbmd0aCA7IGsrKykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhWycraSsnXS5yb29tX3Bob3RvczogJysgZGF0YVtpXS5yb29tX3Bob3Rvc1trXS5waG90byk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlIHdhc24ndCBwZXJmZWN0LCBzdGF0dXM6IFwiLCByZXMuc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkZldGNoIGZhaWxlZCFcIiwgZSk7XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIi1yZXRyaWV2ZVJvb21JbmZvIGNsaWVudFwiKTtcbiovXG4gIH1cblxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIGNvbnNvbGUubG9nICgnK0luZGV4IGN0b3InKVxuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmkxOG4gPSBzdGFydEkxOG4ocHJvcHMudHJhbnNsYXRpb25zLCBwcm9wcy5sb2NhbGUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvb21zOiBbXSxcbiAgICAgIGhhc01vcmVJdGVtczogdHJ1ZSxcbiAgICAgIG5leHRIcmVmOiBudWxsLFxuXG4gICAgICB2YWx1ZTogJ1RhaXBlaSBDaXR5JyxcbiAgICB9XG4gICAgY29uc29sZS5sb2cgKCctSW5kZXggY3RvcicpXG4gIH1cblxuICBsb2FkUm9vbXMocGFnZSkge1xuICAgIHZhciB1cmwgPSBCQUNLRU5EX1VSTCArICcvcm9vbXMvP2xpbWl0PTMnXG4gICAgaWYodGhpcy5zdGF0ZS5uZXh0SHJlZikge1xuICAgICAgICB1cmwgPSB0aGlzLnN0YXRlLm5leHRIcmVmO1xuICAgIH1cblxuICAgIGZldGNoKHVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAvLyAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnVG9rZW4gJysgY29va2llcy5nZXQoJ3Rva2VuJyksXG4gICAgICAgIH0sXG4gICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgLy8gcmVzIGluc3RhbmNlb2YgUmVzcG9uc2UgPT0gdHJ1ZS5cbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2xvYWRSb29tcyByZXMgT0snKTtcbiAgICAgICAgcmVzLmpzb24oKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgdmFyIHJvb21zID0gdGhpcy5zdGF0ZS5yb29tcztcbiAgICAgICAgZGF0YS5yZXN1bHRzLm1hcCgocm9vbSkgPT4ge1xuICAgICAgICAgIHJvb21zLnB1c2gocm9vbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGRhdGEubmV4dCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcm9vbXM6IHJvb21zLFxuICAgICAgICAgICAgICAgIG5leHRIcmVmOiBkYXRhLm5leHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaGFzTW9yZUl0ZW1zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBiZWluZzogdGVzdCBpbmZpbml0ZSBpdGVtc1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgaGFzTW9yZUl0ZW1zOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5leHRIcmVmOiBudWxsXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAvLyBlbmQ6IHRlc3QgaW5maW5pdGUgaXRlbXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhWycraSsnXTonKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhWycraSsnXS5pZDogJysgZGF0YVtpXS5pZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YVsnK2krJ10uZGVzYzogJysgZGF0YVtpXS5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YVsnK2krJ10ucm9vbV9waG90b3M6ICcrIGRhdGFbaV0ucm9vbV9waG90b3MubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChkYXRhW2ldLnJvb21fcGhvdG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdmFyIGs7XG4gICAgICAgICAgICAgIGZvciAoayA9IDAgOyBrIDwgZGF0YVtpXS5yb29tX3Bob3Rvcy5sZW5ndGggOyBrKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGF0YVsnK2krJ10ucm9vbV9waG90b3M6ICcrIGRhdGFbaV0ucm9vbV9waG90b3Nba10ucGhvdG8pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAqL1xuXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSB3YXNuJ3QgcGVyZmVjdCwgc3RhdHVzOiBcIiwgcmVzLnN0YXR1cyk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24oZSkge1xuICAgICAgY29uc29sZS5sb2coXCJGZXRjaCBmYWlsZWQhXCIsIGUpO1xuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xuICAgIGNvbnNvbGUubG9nKCdbJytuYW1lKyddIDonICsgdmFsdWUpO1xuICB9XG5cblxuICByZW5kZXIgKCkge1xuICAgIHZhciBjYXJvdXNlbERpdlN0eWxlID0ge1xuICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMDQ4NzI5Mi9wb3NpdGlvbi1hYnNvbHV0ZS1idXQtcmVsYXRpdmUtdG8tcGFyZW50XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgLy8gIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLFxuICAgIH1cbiAgICB2YXIgY2FyZFN0eWxlID0ge1xuLy8gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcbiAgLy8gICAgICBmbG9hdDogJ2xlZnQnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAvLyAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXJnaW5Ub3A6ICcwJyxcbiAgICAgICAgbWFyZ2luTGVmdDogJzAnLFxuICAgIH1cbiAgICB2YXIgZ3JpZERpdlN0eWxlID0ge1xuLy8gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLFxuICAgICAgICB3aWR0aDogJzcwJScsXG4gICAgICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgICAgIG1hcmdpblRvcDogJzUwcHgnLFxuICAgIH1cbiAgICB2YXIgc2VhcmNoRGl2U3R5bGUgPSB7XG4gICAgLy8gICAgYm9yZGVyOiAnMXB4IHNvbGlkIGdyZWVuJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnNDAlJyxcbiAgICAgICAgbWluV2lkdGg6ICc0MDBweCcsXG4gICAgLy8gICAgaGVpZ2h0OiAnMTQwcHgnLFxuICAgIC8vICAgIHRvcDogJzcwJScsXG4gICAgICAgIGJvdHRvbTogJzEwcHgnLFxuICAgICAgICBsZWZ0OiAnMjUlJyxcbiAgLy8gICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcbiAgICAgICAgcGFkZGluZ1RvcDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nTGVmdDogJzIwcHgnLFxuICAgICAgICBwYWRkaW5nUmlnaHQ6ICcyMHB4JyxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogJzIwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNCknLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICB9XG4gICAgdmFyIGlucHV0U3R5bGUgPSB7XG4gICAgICAvLyAgZmxvYXQ6ICdyaWdodCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfVxuICAgIHZhciBsb2NhdGlvbkRpdlN0eWxlID0ge1xuICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBibHVlJyxcbiAgICAgICB3aWR0aDogJzExMHB4JyxcbiAgICAgICBoZWlnaHQ6ICcxMDVweCcsXG4gICAgIC8vICBtYXJnaW5MZWZ0OiAnMTAlJyxcbiAgICAgICBtYXJnaW5Ub3A6ICcwJyxcbiAgICB9XG4gICAgdmFyIGlucHV0RGl2U3R5bGUgPSB7XG4gICAgICAgZGlzcGxheTogJ2lubGluZScsXG4gICAgLy8gICBib3JkZXI6ICcxcHggc29saWQgYmx1ZScsXG4gICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAvLyAgIGhlaWdodDogJzEwMCUnLFxuICAgICAvLyAgbWFyZ2luTGVmdDogJzEwJScsXG4gICAgICAgbWFyZ2luVG9wOiAnMCcsXG4gICAgfVxuICAgIHZhciByb29tUGhvdG9NYWluRGl2U3R5bGUgPXtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vICBib3JkZXI6ICcxcHggc29saWQgYmx1ZScsXG4gICAgfVxuICAgIHZhciByb29tUGhvdG9NYWluVGl0bGVEaXZTdHlsZSA9e1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgYm90dG9tOiAnMHB4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScsXG4gICAgICBwYWRkaW5nVG9wOiAnM3B4JyxcbiAgICAgIHBhZGRpbmdMZWZ0OiAnM3B4JyxcbiAgICAgIHBhZGRpbmdCb3R0b206ICczcHgnLFxuICAgIH1cbiAgICAvLyByZW5kZXIgcm9vbSBpbmZvc1xuICAgIGxldCByb29tQ2FyZHMgPSB0aGlzLnN0YXRlLnJvb21zLm1hcChmdW5jdGlvbihyb29tLCBpbmRleCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxHcmlkLkNvbHVtbiBrZXk9e2luZGV4fT5cbiAgICAgICAgPENhcmQgc3R5bGU9e2NhcmRTdHlsZX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3Jvb21QaG90b01haW5EaXZTdHlsZX0+XG4gICAgICAgIHtcbiAgICAgICAgICAocm9vbS5yb29tX3Bob3Rvcy5sZW5ndGggPiAwKSA/XG4gICAgICAgICAgICA8RXh0ZXJuYWxMaW5rIHJvdXRlPSdyb29tX2RldGFpbCcgcGFyYW1zPXt7aWQ6IHJvb20uaWR9fSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgIDxMYXp5TG9hZCBwbGFjZWhvbGRlcj17PFJlYWN0TG9hZGluZyB0eXBlPSdiYXJzJyBjb2xvcj0nIzQ0NCcgaGVpZ2h0PXs4MH0gd2lkdGg9ezgwfSBkZWxheT17MH0gLz59XG4gICAgICAgICAgICAgIGhlaWdodD17MTAwfT48aW1nIHNyYz17cm9vbS5yb29tX3Bob3Rvc1swXS5waG90b30gd2lkdGg9JzEwMCUnIGNsYXNzTmFtZT0ncm9vbUNhcmRJbWcnIC8+PC9MYXp5TG9hZD5cbiAgICAgICAgICAgIDwvRXh0ZXJuYWxMaW5rPiA6XG4gICAgICAgIC8vICAgIDxhIGhyZWY9eydyb29tLycrcm9vbS5pZH0gdGFyZ2V0PSdfYmxhbmsnPjxJbWFnZSBzcmM9e3Jvb20ucm9vbV9waG90b3NbMF0ucGhvdG99IC8+PC9hPiA6XG4gICAgICAgICAgICA8SWNvbiBuYW1lPSdpbWFnZScgc2l6ZT0nbWFzc2l2ZScvPlxuICAgICAgICB9XG4gICAgICAgICAgIDxkaXYgc3R5bGU9e3Jvb21QaG90b01haW5UaXRsZURpdlN0eWxlfT5cbiAgICAgICAgICAgICA8aDI+e3Jvb20udGl0bGV9PC9oMj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgIDxDYXJkLkhlYWRlcj5cbiAgICAgICAgICAgIDwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cbiAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgPFN0YXRpc3RpYyBjb2xvcj0ncmVkJyB2YWx1ZT17JyQnK3Jvb20ucHJpY2VfbW9udGh9IGxhYmVsPScv5pyIJyBzaXplPSdtaW5pJyBmbG9hdGVkPSdyaWdodCcvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtyb29tLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9DYXJkLkRlc2NyaXB0aW9uPlxuICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgICAge1xuICAgICAgICAgICAgLy88QnV0dG9uIGxhYmVsPXs8TGFiZWw+e3Jvb20ubGlrZV9jb3VudH08L0xhYmVsPn0gY29sb3I9J29yYW5nZScgaWNvbj0naGVhcnQnIGNvbnRlbnQ9Jycgc2l6ZT0nbWluaScgLz5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICA8RmVlZCBzaXplPSdsYXJnZSc+XG4gICAgICAgICAgICAgIDxGZWVkLkV2ZW50PlxuICAgICAgICAgICAgICAgICAgPEZlZWQuTWV0YT5cbiAgICAgICAgICAgICAgICAgICAgPEZlZWQuTGlrZT48SWNvbiBuYW1lPSdsaWtlJyAvPntyb29tLmxpa2VfY291bnR9PC9GZWVkLkxpa2U+XG4gICAgICAgICAgICAgICAgICA8L0ZlZWQuTWV0YT5cbiAgICAgICAgICAgICAgPC9GZWVkLkV2ZW50PlxuICAgICAgICAgICAgPC9GZWVkPlxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIDxIZWFkZXIgYXM9J2g1JyBjb2xvcj0ncmVkJz48SWNvbiBuYW1lPSdsaWtlJy8+e3Jvb20ubGlrZV9jb3VudH08L0hlYWRlcj5cbiAgICAgICAgICB9XG4gICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGltZy5yb29tQ2FyZEltZyB7XG4gICAgICAgICAgXHRvcGFjaXR5OiAxO1xuICAgICAgICAgIFx0LXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgXHR0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZy5yb29tQ2FyZEltZzpob3ZlciB7XG4gICAgICAgIFx0ICBvcGFjaXR5OiAuODtcbiAgICAgICAgICB9XG4gIGB9PC9zdHlsZT5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgICk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgPEkxOG5leHRQcm92aWRlciBpMThuPXt0aGlzLmkxOG59PlxuICAgIDxMYXlvdXQgdGl0bGUgPSBcIldlbGNvbWUgdG8gUm9vbW9jYVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi4uL3N0YXRpYy9yZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2Nhcm91c2VsLm1pbi5jc3NcIi8+XG4gICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e2Nhcm91c2VsRGl2U3R5bGV9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvQ2hBRkQxbXVWOHVBSVAwREFBYnRHSzdFWUZ3NzE1LmpwZ1wiIHdpZHRoPScxMDAlJy8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIDxDYXJvdXNlbCBzaG93U3RhdHVzPXtmYWxzZX0gc2hvd0luZGljYXRvcnM9e2ZhbHNlfSBzaG93VGh1bWJzPXtmYWxzZX0gaW5maW5pdGVMb29wPXt0cnVlfSBhdXRvUGxheT17dHJ1ZX0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1nL0NoQUZEMW11Vjh1QUlQMERBQWJ0R0s3RVlGdzcxNS5qcGdcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWcvQ2hBRmZWbC0tbXlBQXhCMkFBTDVQdGo1bGJBMjMzLmpwZ1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltZy9DaEFGZlZsbkc2R0FWV0RlQUFSQnBqcU1KeTg3NTMuanBnXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1nL0NoQUZEMW01RFNPQU9jclVBQU56dGloUEsxNDMwMC5qcGdcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3NlYXJjaERpdlN0eWxlfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17bG9jYXRpb25EaXZTdHlsZX0+XG4gICAgICAgICAgICAgICAgPERyb3Bkb3duIHBsYWNlaG9sZGVyPSfkuI3pmZDlnLDljYAnIHNpemU9J2xhcmdlJyBmbHVpZCBzZWxlY3Rpb24gb3B0aW9ucz17c2VhcmNoX2xvY2F0aW9ufSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9Lz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e2lucHV0RGl2U3R5bGV9PlxuICAgICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17aW5wdXRTdHlsZX0gc2l6ZT0nbGFyZ2UnIHR5cGU9J3RleHQnIHBsYWNlaG9sZGVyPSfmkJzlsIvlpb3miL/lsYsnIG5hbWU9J3NlYXJjaCcgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9IGFjdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCAvPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNvbG9yPSdvcmFuZ2UnPjxJY29uIG5hbWU9J3NlYXJjaCcgLz4gU2VhcmNoPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9JbnB1dD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e2dyaWREaXZTdHlsZX0+XG4gICAgICAgICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICAgICAgIHBhZ2VTdGFydD17MH1cbiAgICAgICAgICAgbG9hZE1vcmU9e3RoaXMubG9hZFJvb21zLmJpbmQodGhpcyl9XG4gICAgICAgICAgIGhhc01vcmU9e3RoaXMuc3RhdGUuaGFzTW9yZUl0ZW1zfVxuICAgICAgICAgICBsb2FkZXI9ezxSZWFjdExvYWRpbmcgdHlwZT0nc3Bpbm5pbmdCdWJibGVzJyBjb2xvcj0nIzk5QkJGRicgaGVpZ2h0PXs2NH0gd2lkdGg9ezY0fSBkZWxheT17MH0gLz59XG4gICAgICAgICAgIHRocmVzaG9sZD17LTUwfSA+XG4gICAgICAgICAgICAgPEdyaWQgY2VudGVyZWQ9e2ZhbHNlfSBjb2x1bW5zPXszfSByZWxheGVkPXt0cnVlfSBzdGFja2FibGU9e3RydWV9PlxuICAgICAgICAgICAgICAgeyByb29tQ2FyZHMgfVxuICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICA8L0luZmluaXRlU2Nyb2xsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICAgIDwvSTE4bmV4dFByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTogc3RhdGUudXNlcm5hbWUsXG4gICAgY291bnQ6IHN0YXRlLmNvdW50LFxuICAgIGxvY2FsZTogc3RhdGUubG9jYWxlLFxuICB9XG59XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKSxcbiAgICBzZXRVc2VybmFtZTogYmluZEFjdGlvbkNyZWF0b3JzKHNldFVzZXJuYW1lLCBkaXNwYXRjaCksXG4gICAgc2V0TG9jYWxlOiBiaW5kQWN0aW9uQ3JlYXRvcnMoc2V0TG9jYWxlLCBkaXNwYXRjaCksXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEluZGV4KVxuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
        }));
      });

      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, _react2.default.createElement(_layout2.default, { title: 'Welcome to Roomoca', __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: '../static/react-responsive-carousel/carousel.min.css', __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      })), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }, _react2.default.createElement('div', { style: carouselDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, _react2.default.createElement('img', { src: '../static/img/ChAFD1muV8uAIP0DAAbtGK7EYFw715.jpg', width: '100%', __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      })), _react2.default.createElement('div', { style: searchDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, _react2.default.createElement('div', { style: inputDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, _react2.default.createElement(_semanticUiReact.Input, { style: inputStyle, size: 'large', type: 'text', placeholder: '\u641C\u5C0B\u597D\u623F\u5C4B', name: 'search', onChange: this.handleInputChange, action: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, _react2.default.createElement('input', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { type: 'submit', color: 'orange', __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'search', __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }), ' Search'))))), _react2.default.createElement('div', { style: gridDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }, _react2.default.createElement(_reactInfiniteScroller2.default, {
        pageStart: 0,
        loadMore: this.loadRooms.bind(this),
        hasMore: this.state.hasMoreItems,
        loader: _react2.default.createElement(_reactLoading2.default, { type: 'spinningBubbles', color: '#99BBFF', height: 64, width: 64, delay: 0, __source: {
            fileName: _jsxFileName,
            lineNumber: 436
          }
        }),
        threshold: -50, __source: {
          fileName: _jsxFileName,
          lineNumber: 432
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { centered: false, columns: 3, relaxed: true, stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 438
        }
      }, roomCards))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwic2V0TG9jYWxlIiwid2l0aFJlZHV4IiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJIZWFkIiwiSW5wdXQiLCJCdXR0b24iLCJHcmlkIiwiQ2FyZCIsIkljb24iLCJJbWFnZSIsIkxhYmVsIiwiRHJvcGRvd24iLCJNZW51IiwiU3RhdGlzdGljIiwiTG9hZGVyIiwiSGVhZGVyIiwiRmVlZCIsIkNhcm91c2VsIiwiRXh0ZXJuYWxMaW5rIiwiTGF6eUxvYWQiLCJSZWFjdExvYWRpbmciLCJJbmZpbml0ZVNjcm9sbCIsInNlYXJjaF9sb2NhdGlvbiIsImtleSIsInRleHQiLCJ2YWx1ZSIsIkluZGV4IiwiY29uc29sZSIsImxvZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJpIiwibGVuZ3RoIiwidXJsIiwiZGVzY3JpcHRpb24iLCJwaG90byIsInByb2Nlc3MiLCJicm93c2VyIiwicmVxIiwic3RvcmUiLCJpc1NlcnZlciIsImluaXRQcm9wcyIsImNvb2tpZXMiLCJjb29raWUiLCJnZXQiLCJ1c2VybmFtZSIsImxvY2FsZSIsInRyYW5zbGF0aW9ucyIsImRpc3BhdGNoIiwicHJvcHMiLCJoYW5kbGVDaGFuZ2UiLCJldiIsInNldFN0YXRlIiwiaTE4biIsInN0YXRlIiwicm9vbXMiLCJoYXNNb3JlSXRlbXMiLCJuZXh0SHJlZiIsInBhZ2UiLCJ0aGVuIiwicmVzIiwib2siLCJyZXN1bHRzIiwibWFwIiwicm9vbSIsInB1c2giLCJuZXh0IiwiZSIsImV2ZW50IiwidGFyZ2V0IiwibmFtZSIsImNhcm91c2VsRGl2U3R5bGUiLCJwb3NpdGlvbiIsImNhcmRTdHlsZSIsIndpZHRoIiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsImdyaWREaXZTdHlsZSIsIm1hcmdpbiIsInNlYXJjaERpdlN0eWxlIiwibWluV2lkdGgiLCJib3R0b20iLCJsZWZ0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImlucHV0U3R5bGUiLCJsb2NhdGlvbkRpdlN0eWxlIiwiZGlzcGxheSIsImJvcmRlciIsImhlaWdodCIsImlucHV0RGl2U3R5bGUiLCJyb29tUGhvdG9NYWluRGl2U3R5bGUiLCJyb29tUGhvdG9NYWluVGl0bGVEaXZTdHlsZSIsImNvbG9yIiwicm9vbUNhcmRzIiwiaW5kZXgiLCJyb29tX3Bob3RvcyIsImlkIiwidGl0bGUiLCJwcmljZV9tb250aCIsImxpa2VfY291bnQiLCJoYW5kbGVJbnB1dENoYW5nZSIsImxvYWRSb29tcyIsImJpbmQiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFDRSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFPLEFBQ2hCLEFBQVMsQUFBTSxBQUFNLEFBQU0sQUFBTyxBQUFPLEFBQVUsQUFBTSxBQUFXLEFBQVEsQUFBUTs7QUFDcEYsQUFBUzs7QSxBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7QUF0QlA7QUFtQnVEOzs7QUFLdkQsSUFBTSxrQkFBa0Is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LEFBU1Y7Ozs7O0VBN1ppQixnQkFBTSxBOztBQWlhMUIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxPQUFVLEFBQ2pDOztjQUNZLE1BREwsQUFDVyxBQUNoQjtXQUFPLE1BRkYsQUFFUSxBQUNiO1lBQVEsTUFIVixBQUFPLEFBR1MsQUFFakI7QUFMUSxBQUNMO0FBRko7O0FBUUEsSUFBTSxxQkFBcUIsU0FBckIsQUFBcUIsbUJBQUEsQUFBQyxVQUFhLEFBQ3ZDOztjQUNZLEFBQW1CLGdEQUR4QixBQUNLLEFBQTZCLEFBQ3ZDO2lCQUFhLEFBQW1CLG1EQUYzQixBQUVRLEFBQWdDLEFBQzdDO2VBQVcsQUFBbUIsaURBSGhDLEFBQU8sQUFHTSxBQUE4QixBQUU1QztBQUxRLEFBQ0w7QUFGSixBQVFBOztrQkFBZSxBQUFVLGtEQUFWLEFBQXFCLGlCQUFyQixBQUFzQyxvQkFBckQsQUFBZSxBQUEwRDs7QUFFekUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=