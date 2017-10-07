'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _jsCookie = require('js-cookie');

var _jsCookie2 = _interopRequireDefault(_jsCookie);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactI18next = require('react-i18next');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _semanticUiReact = require('semantic-ui-react');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/addRoom.js';
//import Link from 'next/link'

// https://react-dropzone.js.org/


var building_type = [{ key: 1, text: '電梯大樓', value: 1 }, { key: 2, text: '公寓', value: 2 }, { key: 3, text: '透天', value: 3 }, { key: 4, text: '別墅', value: 4 }];

var room_type = [{ key: 1, text: '獨立套房', value: 1 }, { key: 2, text: '分租套房', value: 2 }, { key: 3, text: '雅房', value: 3 }, { key: 4, text: '整層住家', value: 4 }];

var AddRoom = function (_React$Component) {
  (0, _inherits3.default)(AddRoom, _React$Component);

  (0, _createClass3.default)(AddRoom, [{
    key: 'onDrop',
    value: function onDrop(files) {
      console.log('total: ' + files.length + ' files');
      this.setState({
        files: files
      });
    }
  }, {
    key: 'addRoom',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(userpk) {
        var response, room_id, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("+addRoom");
                _context.next = 3;
                return fetch('http://localhost:8000/rooms/', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: (0, _stringify2.default)({
                    host: userpk, // get pk from cookie
                    location: this.state.location,
                    title: this.state.title,
                    description: this.state.description,
                    area: this.state.area,
                    layout: this.state.layout,
                    floor: this.state.floor,
                    direction: this.state.direction,
                    age: this.state.age,
                    building_type: this.state.building_type,
                    room_type: this.state.room_type,
                    price_month: this.state.price_month,
                    price_quarter: this.state.price_quarter,
                    price_year: this.state.price_year,
                    deposit: this.state.deposit,
                    mgmt_fee: this.state.mgmt_fee,
                    parking: this.state.parking,
                    balcony: this.state.balcony,
                    pet: this.state.pet,
                    cook: this.state.cook,
                    mrt: this.state.mrt,
                    tv: this.state.tv,
                    ac: this.state.ac,
                    ref: this.state.ref,
                    water_hearter: this.state.water_hearter,
                    natural_gas: this.state.natural_gas,
                    cabel_tv: this.state.cabel_tv,
                    network: this.state.network,
                    wash_machine: this.state.wash_machine,
                    bed: this.state.bed,
                    wardrobe: this.state.wardrobe,
                    table: this.state.table,
                    sofa: this.state.sofa,
                    chair: this.state.chair
                  })
                });

              case 3:
                response = _context.sent;
                room_id = -1;
                _context.next = 7;
                return response.json();

              case 7:
                data = _context.sent;

                console.log(response.status);
                //console.log(data);
                if (response.status === 200 || response.status === 201) // 201: The request has been fulfilled and has resulted in one or more new resources being created.
                  {
                    console.log(data);
                    // TODO: id 當做回傳值
                    console.log('room id : ' + data.id);
                    room_id = data.id;
                  } else {
                  console.log(data);
                  room_id = -1;
                }

                console.log("-addRoom");
                return _context.abrupt('return', room_id);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addRoom(_x) {
        return _ref.apply(this, arguments);
      }

      return addRoom;
    }()
  }, {
    key: 'uploadRoomPhotos',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_key, room_id, _files) {
        var i, fd, response, result, data;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log("+uploadRoomPhotos (" + _files.length + " photos)");

                if (!(_files.length === 0)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt('return', true);

              case 3:

                this.setState({
                  uploading: true
                });

                this.setState({
                  total_files: _files.length
                });

                i = 0;

              case 6:
                if (!(i < _files.length)) {
                  _context2.next = 24;
                  break;
                }

                console.log('uploading image: ' + i);
                fd = new FormData();

                fd.append('room', room_id);
                fd.append('photo', _files[i]);

                _context2.next = 13;
                return fetch('http://localhost:8000/roomsimage/', {
                  method: 'POST',
                  headers: {
                    //'Authorization': 'Token '+ userToken
                  },
                  body: fd
                });

              case 13:
                response = _context2.sent;
                result = false;
                _context2.next = 17;
                return response.json();

              case 17:
                data = _context2.sent;

                console.log(response.status);
                //console.log(data);
                if (response.status === 200 || response.status === 201) // 201: The request has been fulfilled and has resulted in one or more new resources being created.
                  {
                    console.log(data);
                    result = true;
                  } else {
                  console.log(data);
                  result = false;
                }

                this.setState({
                  current_file_index: i + 1
                });

              case 21:
                i++;
                _context2.next = 6;
                break;

              case 24:

                console.log("-uploadRoomPhotos");
                return _context2.abrupt('return', result);

              case 26:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function uploadRoomPhotos(_x2, _x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return uploadRoomPhotos;
    }()
  }, {
    key: 'showInputState',
    value: function showInputState() {
      console.log('this.state.location: ' + this.state.location);
      console.log('this.state.title: ' + this.state.title);
      console.log('this.state.description: ' + this.state.description);
      console.log('this.state.area: ' + this.state.area);
      console.log('this.state.layout: ' + this.state.layout);
      console.log('this.state.floor: ' + this.state.floor);
      console.log('this.state.direction: ' + this.state.direction);
      console.log('this.state.age: ' + this.state.age);
      console.log('this.state.building_type: ' + this.state.building_type);
      console.log('this.state.room_type: ' + this.state.room_type);
      console.log('this.state.price_month: ' + this.state.price_month);
      console.log('this.state.price_quarter: ' + this.state.price_quarter);
      console.log('this.state.price_year: ' + this.state.price_year);
      console.log('this.state.deposit: ' + this.state.deposit);
      console.log('this.state.mgmt_fee: ' + this.state.mgmt_fee);
    }
  }, {
    key: 'showCheckboxState',
    value: function showCheckboxState() {
      console.log('this.state.parking: ' + this.state.parking);
      console.log('this.state.balcony: ' + this.state.balcony);
      console.log('this.state.pet: ' + this.state.pet);
      console.log('this.state.cook: ' + this.state.cook);
      console.log('this.state.mrt: ' + this.state.mrt);
      console.log('this.state.tv: ' + this.state.tv);
      console.log('this.state.ac: ' + this.state.ac);
      console.log('this.state.ref: ' + this.state.ref);
      console.log('this.state.water_hearter: ' + this.state.water_hearter);
      console.log('this.state.natural_gas: ' + this.state.natural_gas);
      console.log('this.state.cabel_tv: ' + this.state.cabel_tv);
      console.log('this.state.network: ' + this.state.network);
      console.log('this.state.wash_machine: ' + this.state.wash_machine);
      console.log('this.state.bed: ' + this.state.bed);
      console.log('this.state.wardrobe: ' + this.state.wardrobe);
      console.log('this.state.table: ' + this.state.table);
      console.log('this.state.sofa: ' + this.state.sofa);
      console.log('this.state.chair: ' + this.state.chair);
    }
  }]);

  function AddRoom() {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, AddRoom);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddRoom.__proto__ || (0, _getPrototypeOf2.default)(AddRoom)).call(this));

    _this.handleUpload = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
      var userpk, room_id;
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('+handleUpload');
              // print state for debugging
              userpk = _jsCookie2.default.get('userpk');

              console.log('pk: ' + userpk);

              if (!(userpk === undefined)) {
                _context3.next = 9;
                break;
              }

              console.log('請先登入');
              _this.setState({
                message_to_user: '請先登入'
              });
              return _context3.abrupt('return');

            case 9:
              _this.setState({
                message_to_user: ''
              });

            case 10:

              _this.showInputState();
              _this.showCheckboxState();

              _context3.next = 14;
              return _this.addRoom(userpk);

            case 14:
              room_id = _context3.sent;

              if (!(room_id > 0)) {
                _context3.next = 18;
                break;
              }

              _context3.next = 18;
              return _this.uploadRoomPhotos(0, room_id, _this.state.files);

            case 18:
              console.log('-handleUpload');

            case 19:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this2);
    }));

    _this.handleCbClick = function (ev, data) {
      //    console.log('+handleCbClick');
      //    console.log(data.name +' : ' + data.value);
      _this.setState((0, _defineProperty3.default)({}, data.name, 1 - data.value));
      //    console.log('-handleCbClick');
    };

    _this.handleInputChange = function (event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      _this.setState((0, _defineProperty3.default)({}, name, value));
      console.log('[' + name + '] :' + value);
    };

    _this.handleBuildingTypeChange = function (ev, data) {
      // See https://lodash.com/docs/#find
      var option = _lodash2.default.find(building_type, { value: data.value });
      _this.setState({
        building_type: option.text
      });
      console.log(option.text);
    };

    _this.handleRoomTypeChange = function (ev, data) {
      var option = _lodash2.default.find(room_type, { value: data.value });
      _this.setState({
        room_type: option.text
      });
      console.log(option.text);
    };

    _this.state = {
      files: [],
      current_file_index: 0,
      total_files: 1,
      uploading: false,
      message_to_user: '',

      location: '',
      title: '',
      description: '',
      area: 1,
      layout: '',
      floor: '',
      direction: '',
      age: 0,
      building_type: '電梯大樓',
      room_type: '獨立套房',
      price_month: 0,
      price_quarter: 0,
      price_year: 0,
      deposit: 0,
      mgmt_fee: 0,

      parking: 0,
      balcony: 0,
      pet: 0,
      cook: 0,
      mrt: 0,
      tv: 0,
      ac: 0,
      ref: 0,
      water_hearter: 0,
      natural_gas: 0,
      cabel_tv: 0,
      network: 0,
      wash_machine: 0,
      bed: 0,
      wardrobe: 0,
      table: 0,
      sofa: 0,
      chair: 0
    };
    _this.uploadRoomPhotos.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AddRoom, [{
    key: 'render',
    value: function render() {
      var _React$createElement;

      var dropzoneDivStyle = {
        border: '3px grey dashed',
        width: '100%',
        height: '100px',
        margin: '0 auto'
      };
      var dropzoneStyle = {
        // border: '3px red dashed',
        width: '100%',
        height: '100%',
        margin: '0 auto'
      };
      var infoDivStyle = {
        //  border: '1px green solid',
        width: '100%',
        //    height: '100%',
        margin: '0 auto'
      };
      var titleInputStyle = {
        //  float: 'right',
        width: '100%'
      };
      var checkboxSpanStyle = {
        //    border: '1px green solid',
        marginLeft: '30px'
        //    width: '100%',
      };
      return _react2.default.createElement('section', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        }
      }, _react2.default.createElement('div', { style: infoDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        }
      }, _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      }, '\u5730\u5740'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '', style: titleInputStyle, name: 'location', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }, '\u6A19\u984C'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '', style: titleInputStyle, name: 'title', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }, '\u63CF\u8FF0'), _react2.default.createElement(_semanticUiReact.TextArea, { placeholder: '', style: titleInputStyle, name: 'description', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      }, '\u576A\u6578'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357
        }
      }, _react2.default.createElement('input', { type: 'number', min: '1', className: 'vIntegerField', placeholder: '20', name: 'area', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }, '\u6A13\u5C64'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '5/15', name: 'floor', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      }, '\u683C\u5C40'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '1/1/1', name: 'layout', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }, '\u5C4B\u9F61'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, _react2.default.createElement('input', (_React$createElement = { type: 'number', min: '1', name: 'age', className: 'vIntegerField', placeholder: '5' }, (0, _defineProperty3.default)(_React$createElement, 'name', 'age'), (0, _defineProperty3.default)(_React$createElement, 'onChange', this.handleInputChange), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 370
      }), _React$createElement)))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }, '\u5750\u5411'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '\u5750\u5317\u671D\u5357', name: 'direction', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, '\u5EFA\u7BC9\u985E\u578B'), _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: '\u96FB\u68AF\u5927\u6A13', search: true, selection: true, options: building_type, onChange: this.handleBuildingTypeChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }, '\u623F\u578B'), _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: '\u7368\u7ACB\u5957\u623F', search: true, selection: true, options: room_type, onChange: this.handleRoomTypeChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        }
      }, '\u6708\u79DF\u91D1'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '20000', name: 'price_month', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        }
      }, '\u5B63\u79DF\u91D1'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '20000', name: 'price_quarter', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }, '\u5E74\u79DF\u91D1'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '20000', name: 'price_year', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, '\u62BC\u91D1 (\u55AE\u4F4D:\u6708)'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '2', name: 'deposit', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, '\u7BA1\u7406\u8CBB'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '2000', name: 'mgmt_fee', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u8ECA\u4F4D', name: 'parking', value: this.state.parking, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u967D\u53F0', name: 'balcony', value: this.state.balcony, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u990A\u5BF5\u7269', name: 'pet', value: this.state.pet, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u958B\u4F19', name: 'cook', value: this.state.cook, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u8FD1\u6377\u904B', name: 'mrt', value: this.state.mrt, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u96FB\u8996', name: 'tv', value: this.state.tv, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u51B7\u6C23', name: 'ac', value: this.state.ac, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u51B0\u7BB1', name: 'ref', value: this.state.ref, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u71B1\u6C34\u5668', name: 'water_hearter', value: this.state.water_hearter, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u5929\u7136\u74E6\u65AF', name: 'natural_gas', value: this.state.natural_gas, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 423
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u7B2C\u56DB\u53F0', name: 'cabel_tv', value: this.state.cabel_tv, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u7DB2\u8DEF', name: 'network', value: this.state.network, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u6D17\u8863\u6A5F', name: 'wash_machine', value: this.state.wash_machine, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u5E8A', name: 'bed', value: this.state.bed, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 427
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u8863\u6AC3', name: 'wardrobe', value: this.state.wardrobe, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 428
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u684C\u5B50', name: 'table', value: this.state.table, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 429
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u6C99\u767C', name: 'sofa', value: this.state.sofa, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 430
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u6905\u5B50', name: 'chair', value: this.state.chair, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 431
        }
      }))), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 433
        }
      }, '\u4E0A\u50B3\u7167\u7247 (\u62D6\u66F3\u5230\u4E0B\u65B9)'), _react2.default.createElement('div', { style: dropzoneDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 434
        }
      }, _react2.default.createElement(_reactDropzone2.default, { onDrop: this.onDrop.bind(this), style: dropzoneStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 435
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 436
        }
      }, 'Drag photos here'))), _react2.default.createElement('aside', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 439
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 440
        }
      }, this.state.files.map(function (f) {
        return _react2.default.createElement('li', { key: f.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          }
        }, f.name, ' - ', f.size, ' bytes');
      }))), this.state.files.length > 0 && this.state.uploading ? _react2.default.createElement(_semanticUiReact.Progress, { value: this.state.current_file_index, total: this.state.total_files, color: 'yellow', __source: {
          fileName: _jsxFileName,
          lineNumber: 446
        }
      }) : '', _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.handleUpload, __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 447
        }
      }), 'add'), this.state.message_to_user.length > 0 ? _react2.default.createElement(_semanticUiReact.Message, { negative: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 449
        }
      }, _react2.default.createElement(_semanticUiReact.Message.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        }
      }, this.state.message_to_user, ' ')) : '');
    }
  }]);

  return AddRoom;
}(_react2.default.Component);

exports.default = AddRoom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkUm9vbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsImpzQ29va2llIiwiYmluZEFjdGlvbkNyZWF0b3JzIiwiY29ubmVjdCIsInRyYW5zbGF0ZSIsIkhlYWQiLCJEcm9wem9uZSIsIkJ1dHRvbiIsIkljb24iLCJQcm9ncmVzcyIsIkxpc3QiLCJJbnB1dCIsIlRleHRBcmVhIiwiTGFiZWwiLCJJdGVtIiwiRGl2aWRlciIsIkRyb3Bkb3duIiwiQ2hlY2tib3giLCJNZXNzYWdlIiwiXyIsImJ1aWxkaW5nX3R5cGUiLCJrZXkiLCJ0ZXh0IiwidmFsdWUiLCJyb29tX3R5cGUiLCJBZGRSb29tIiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic2V0U3RhdGUiLCJ1c2VycGsiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiaG9zdCIsImxvY2F0aW9uIiwic3RhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYXJlYSIsImxheW91dCIsImZsb29yIiwiZGlyZWN0aW9uIiwiYWdlIiwicHJpY2VfbW9udGgiLCJwcmljZV9xdWFydGVyIiwicHJpY2VfeWVhciIsImRlcG9zaXQiLCJtZ210X2ZlZSIsInBhcmtpbmciLCJiYWxjb255IiwicGV0IiwiY29vayIsIm1ydCIsInR2IiwiYWMiLCJyZWYiLCJ3YXRlcl9oZWFydGVyIiwibmF0dXJhbF9nYXMiLCJjYWJlbF90diIsIm5ldHdvcmsiLCJ3YXNoX21hY2hpbmUiLCJiZWQiLCJ3YXJkcm9iZSIsInRhYmxlIiwic29mYSIsImNoYWlyIiwicmVzcG9uc2UiLCJyb29tX2lkIiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJpZCIsIl9rZXkiLCJfZmlsZXMiLCJ1cGxvYWRpbmciLCJ0b3RhbF9maWxlcyIsImkiLCJmZCIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzdWx0IiwiY3VycmVudF9maWxlX2luZGV4IiwiaGFuZGxlVXBsb2FkIiwiZ2V0IiwidW5kZWZpbmVkIiwibWVzc2FnZV90b191c2VyIiwic2hvd0lucHV0U3RhdGUiLCJzaG93Q2hlY2tib3hTdGF0ZSIsImFkZFJvb20iLCJ1cGxvYWRSb29tUGhvdG9zIiwiaGFuZGxlQ2JDbGljayIsImV2IiwibmFtZSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJoYW5kbGVCdWlsZGluZ1R5cGVDaGFuZ2UiLCJvcHRpb24iLCJmaW5kIiwiaGFuZGxlUm9vbVR5cGVDaGFuZ2UiLCJiaW5kIiwiZHJvcHpvbmVEaXZTdHlsZSIsImJvcmRlciIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiZHJvcHpvbmVTdHlsZSIsImluZm9EaXZTdHlsZSIsInRpdGxlSW5wdXRTdHlsZSIsImNoZWNrYm94U3BhblN0eWxlIiwibWFyZ2luTGVmdCIsIm9uRHJvcCIsIm1hcCIsImYiLCJzaXplIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBRVAsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFDRSxBQUFRLEFBQU0sQUFBVSxBQUFNLEFBQU8sQUFBVSxBQUMvQyxBQUFNLEFBQVMsQUFBVSxBQUFVOztBQUVyQyxBQUFPOzs7Ozs7O0FBWlA7O0FBTUE7OztBQVFBLElBQU0sZ0JBQWdCLENBQ3BCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixRQUFRLE9BREosQUFDcEIsQUFBK0IsS0FDL0IsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLE1BQU0sT0FGRixBQUVwQixBQUE2QixLQUM3QixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BQVYsQUFBZ0IsTUFBTSxPQUhGLEFBR3BCLEFBQTZCLEtBQzdCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixNQUFNLE9BSnhCLEFBQXNCLEFBSXBCLEFBQTZCOztBQUcvQixJQUFN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QSxBQWtGSSxBQUFnQyxBQUVsQztBQUZrQzs0QkFFbEMsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBOUZGLEFBOEZFLEFBQ0EsOEVBQUEsY0FBQSxTQUFLLE9BQUwsQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyx5Q0FBUyxRQUFRLEtBQUEsQUFBSyxPQUFMLEFBQVksS0FBOUIsQUFBa0IsQUFBaUIsT0FBTyxPQUExQyxBQUFpRDtvQkFBakQ7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQWpHTixBQStGRSxBQUNFLEFBQ0UsQUFHSix1Q0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUVJO0FBRko7QUFBQSxjQUVJLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxhQUFBOytCQUFLLGNBQUEsUUFBSSxLQUFLLEVBQVQsQUFBVztzQkFBWDt3QkFBQSxBQUFrQjtBQUFsQjtTQUFBLElBQUEsQUFBb0IsTUFBUyxTQUE3QixBQUErQixNQUFwQyxBQUFLO0FBdkdsQyxBQW9HRSxBQUNFLEFBRUksQUFJSCxpQkFBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLFNBQWpCLEFBQTBCLEtBQUssS0FBQSxBQUFLLE1BQXJDLEFBQTJDLDRCQUFZLEFBQUMsMkNBQVMsT0FBTyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsb0JBQW9CLE9BQU8sS0FBQSxBQUFLLE1BQTVELEFBQWtFLGFBQWEsT0FBL0UsQUFBcUY7b0JBQXJGO3NCQUF2RCxBQUF1RDtBQUFBO09BQUEsSUEzRzNELEFBMkc4SixBQUM1SixvQkFBQSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLFNBQVMsS0FBL0IsQUFBb0M7b0JBQXBDO3NCQUFBLEFBQWtEO0FBQWxEO3lCQUFrRCxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBbEQsQUFBa0Q7QUFBQTtVQTVHcEQsQUE0R0UsQUFDRyxhQUFBLEFBQUssTUFBTCxBQUFXLGdCQUFYLEFBQTJCLFNBQTVCLEFBQXFDLG9CQUN2QyxBQUFDLDBDQUFRLFVBQVQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0csY0FBRCx5QkFBQSxBQUFTOztvQkFBVDtzQkFBQSxBQUFrQjtBQUFsQjtBQUFBLGNBQWtCLEFBQUssTUFBdkIsQUFBNkIsaUJBRjdCLEFBQ0YsQUFDRSxRQWhITixBQUNFLEFBaUhJLEFBR1A7Ozs7O0VBemFtQixnQkFBTSxBLEFBNGE1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJhZGRSb29tLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9