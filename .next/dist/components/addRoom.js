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

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

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
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var response, result, data;
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
                    host: 1, // TODO: 登入後把 pk 存在cookie
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
                result = false;
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
                    result = true;
                  } else {
                  console.log(data);
                  result = false;
                }

                console.log("-addRoom");
                return _context.abrupt('return', result);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function addRoom() {
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

      function uploadRoomPhotos(_x, _x2, _x3) {
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
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log('+handleUpload');
              // print state for debugging
              _this.showInputState();
              _this.showCheckboxState();

              _context3.next = 5;
              return _this.addRoom();

            case 5:
              _context3.next = 7;
              return _this.uploadRoomPhotos(0, 5, _this.state.files);

            case 7:
              console.log('-handleUpload');

            case 8:
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
          lineNumber: 318
        }
      }, _react2.default.createElement('div', { style: infoDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        }
      }, _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      }, '\u5730\u5740'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '', style: titleInputStyle, name: 'location', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      }, '\u6A19\u984C'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '', style: titleInputStyle, name: 'title', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      }, '\u63CF\u8FF0'), _react2.default.createElement(_semanticUiReact.TextArea, { placeholder: '', style: titleInputStyle, name: 'description', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        }
      }, '\u576A\u6578'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        }
      }, _react2.default.createElement('input', { type: 'number', min: '1', className: 'vIntegerField', placeholder: '20', name: 'area', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        }
      }, '\u6A13\u5C64'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '5/15', name: 'floor', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      }, '\u683C\u5C40'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '1/1/1', name: 'layout', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        }
      }, '\u5C4B\u9F61'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        }
      }, _react2.default.createElement('input', (_React$createElement = { type: 'number', min: '1', name: 'age', className: 'vIntegerField', placeholder: '5' }, (0, _defineProperty3.default)(_React$createElement, 'name', 'age'), (0, _defineProperty3.default)(_React$createElement, 'onChange', this.handleInputChange), (0, _defineProperty3.default)(_React$createElement, '__source', {
        fileName: _jsxFileName,
        lineNumber: 349
      }), _React$createElement)))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      }, '\u5750\u5411'), _react2.default.createElement(_semanticUiReact.Input, { placeholder: '\u5750\u5317\u671D\u5357', name: 'direction', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        }
      }, '\u5EFA\u7BC9\u985E\u578B'), _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: '\u96FB\u68AF\u5927\u6A13', search: true, selection: true, options: building_type, onChange: this.handleBuildingTypeChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'teal', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        }
      }, '\u623F\u578B'), _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: '\u7368\u7ACB\u5957\u623F', search: true, selection: true, options: room_type, onChange: this.handleRoomTypeChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        }
      })), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        }
      }, '\u6708\u79DF\u91D1'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '20000', name: 'price_month', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        }
      }, '\u5B63\u79DF\u91D1'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '20000', name: 'price_quarter', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 371
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        }
      }, '\u5E74\u79DF\u91D1'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '20000', name: 'price_year', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        }
      }, '\u62BC\u91D1 (\u55AE\u4F4D:\u6708)'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '2', name: 'deposit', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        }
      }), _react2.default.createElement(_semanticUiReact.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, _react2.default.createElement(_semanticUiReact.Label, { size: 'big', color: 'pink', horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        }
      }, '\u7BA1\u7406\u8CBB'), _react2.default.createElement(_semanticUiReact.Input, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        }
      }, _react2.default.createElement('input', { type: 'number', min: '0', className: 'vIntegerField', placeholder: '2000', name: 'mgmt_fee', onChange: this.handleInputChange, __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        }
      }))), _react2.default.createElement('br', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        }
      }), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u8ECA\u4F4D', name: 'parking', value: this.state.parking, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u967D\u53F0', name: 'balcony', value: this.state.balcony, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u990A\u5BF5\u7269', name: 'pet', value: this.state.pet, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u958B\u4F19', name: 'cook', value: this.state.cook, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u8FD1\u6377\u904B', name: 'mrt', value: this.state.mrt, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u96FB\u8996', name: 'tv', value: this.state.tv, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u51B7\u6C23', name: 'ac', value: this.state.ac, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u51B0\u7BB1', name: 'ref', value: this.state.ref, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u71B1\u6C34\u5668', name: 'water_hearter', value: this.state.water_hearter, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u5929\u7136\u74E6\u65AF', name: 'natural_gas', value: this.state.natural_gas, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u7B2C\u56DB\u53F0', name: 'cabel_tv', value: this.state.cabel_tv, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u7DB2\u8DEF', name: 'network', value: this.state.network, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u6D17\u8863\u6A5F', name: 'wash_machine', value: this.state.wash_machine, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u5E8A', name: 'bed', value: this.state.bed, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u8863\u6AC3', name: 'wardrobe', value: this.state.wardrobe, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u684C\u5B50', name: 'table', value: this.state.table, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 408
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u6C99\u767C', name: 'sofa', value: this.state.sofa, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        }
      })), _react2.default.createElement('span', { style: checkboxSpanStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: '\u6905\u5B50', name: 'chair', value: this.state.chair, onClick: this.handleCbClick, __source: {
          fileName: _jsxFileName,
          lineNumber: 410
        }
      }))), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 412
        }
      }, '\u4E0A\u50B3\u7167\u7247 (\u62D6\u66F3\u5230\u4E0B\u65B9)'), _react2.default.createElement('div', { style: dropzoneDivStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 413
        }
      }, _react2.default.createElement(_reactDropzone2.default, { onDrop: this.onDrop.bind(this), style: dropzoneStyle, __source: {
          fileName: _jsxFileName,
          lineNumber: 414
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415
        }
      }, 'Drag photos here'))), _react2.default.createElement('aside', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        }
      }, _react2.default.createElement('ul', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 419
        }
      }, this.state.files.map(function (f) {
        return _react2.default.createElement('li', { key: f.name, __source: {
            fileName: _jsxFileName,
            lineNumber: 421
          }
        }, f.name, ' - ', f.size, ' bytes');
      }))), this.state.files.length > 0 && this.state.uploading ? _react2.default.createElement(_semanticUiReact.Progress, { value: this.state.current_file_index, total: this.state.total_files, color: 'yellow', __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        }
      }) : '', _react2.default.createElement(_semanticUiReact.Button, { color: 'green', onClick: this.handleUpload, __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'plus', __source: {
          fileName: _jsxFileName,
          lineNumber: 426
        }
      }), 'add'));
    }
  }]);

  return AddRoom;
}(_react2.default.Component);

exports.default = AddRoom;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWRkUm9vbS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJjb25uZWN0IiwidHJhbnNsYXRlIiwiSGVhZCIsIkRyb3B6b25lIiwiQnV0dG9uIiwiSWNvbiIsIlByb2dyZXNzIiwiTGlzdCIsIklucHV0IiwiVGV4dEFyZWEiLCJMYWJlbCIsIkl0ZW0iLCJEaXZpZGVyIiwiRHJvcGRvd24iLCJDaGVja2JveCIsIl8iLCJidWlsZGluZ190eXBlIiwia2V5IiwidGV4dCIsInZhbHVlIiwicm9vbV90eXBlIiwiQWRkUm9vbSIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNldFN0YXRlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsImhvc3QiLCJsb2NhdGlvbiIsInN0YXRlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImFyZWEiLCJsYXlvdXQiLCJmbG9vciIsImRpcmVjdGlvbiIsImFnZSIsInByaWNlX21vbnRoIiwicHJpY2VfcXVhcnRlciIsInByaWNlX3llYXIiLCJkZXBvc2l0IiwibWdtdF9mZWUiLCJwYXJraW5nIiwiYmFsY29ueSIsInBldCIsImNvb2siLCJtcnQiLCJ0diIsImFjIiwicmVmIiwid2F0ZXJfaGVhcnRlciIsIm5hdHVyYWxfZ2FzIiwiY2FiZWxfdHYiLCJuZXR3b3JrIiwid2FzaF9tYWNoaW5lIiwiYmVkIiwid2FyZHJvYmUiLCJ0YWJsZSIsInNvZmEiLCJjaGFpciIsInJlc3BvbnNlIiwicmVzdWx0IiwianNvbiIsImRhdGEiLCJzdGF0dXMiLCJfa2V5Iiwicm9vbV9pZCIsIl9maWxlcyIsInVwbG9hZGluZyIsInRvdGFsX2ZpbGVzIiwiaSIsImZkIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJjdXJyZW50X2ZpbGVfaW5kZXgiLCJoYW5kbGVVcGxvYWQiLCJzaG93SW5wdXRTdGF0ZSIsInNob3dDaGVja2JveFN0YXRlIiwiYWRkUm9vbSIsInVwbG9hZFJvb21QaG90b3MiLCJoYW5kbGVDYkNsaWNrIiwiZXYiLCJuYW1lIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImhhbmRsZUJ1aWxkaW5nVHlwZUNoYW5nZSIsIm9wdGlvbiIsImZpbmQiLCJoYW5kbGVSb29tVHlwZUNoYW5nZSIsImJpbmQiLCJkcm9wem9uZURpdlN0eWxlIiwiYm9yZGVyIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJkcm9wem9uZVN0eWxlIiwiaW5mb0RpdlN0eWxlIiwidGl0bGVJbnB1dFN0eWxlIiwiY2hlY2tib3hTcGFuU3R5bGUiLCJtYXJnaW5MZWZ0Iiwib25Ecm9wIiwibWFwIiwiZiIsInNpemUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTOztBQUNULEFBQVM7O0FBQ1QsQUFBTzs7OztBQUVQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVEsQUFBTSxBQUFVLEFBQU0sQUFBTyxBQUFVLEFBQU8sQUFBTSxBQUFTLEFBQVU7O0FBQ3hGLEFBQU87Ozs7Ozs7QUFUUDs7QUFNQTs7O0FBS0EsSUFBTSxnQkFBZ0IsQ0FDcEIsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLFFBQVEsT0FESixBQUNwQixBQUErQixLQUMvQixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BQVYsQUFBZ0IsTUFBTSxPQUZGLEFBRXBCLEFBQTZCLEtBQzdCLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixNQUFNLE9BSEYsQUFHcEIsQUFBNkIsS0FDN0IsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLE1BQU0sT0FKeEIsQUFBc0IsQUFJcEIsQUFBNkI7O0FBRy9CLElBQU0sWUFBWSxDQUNoQixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BQVYsQUFBZ0IsUUFBUSxPQURSLEFBQ2hCLEFBQStCLEtBQy9CLEVBQUUsS0FBRixBQUFPLEdBQUcsTUFBVixBQUFnQixRQUFRLE9BRlIsQUFFaEIsQUFBK0IsS0FDL0IsRUFBRSxLQUFGLEFBQU8sR0FBRyxNQUFWLEFBQWdCLE1BQU0sT0FITixBQUdoQixBQUE2QixLQUM3QixFQUFFLEtBQUYsQUFBTyxHQUFHLE1BQVYsQUFBZ0IsUUFBUSxPQUoxQixBQUFrQixBQUloQixBQUErQjs7SUFHM0IsQTs7Ozs7MkJBQ0csQSxPQUFPLEFBQ1o7Y0FBQSxBQUFRLElBQUksWUFBVSxNQUFWLEFBQWdCLFNBQTVCLEFBQXFDLEFBQ3JDO1dBQUEsQUFBSztlQUFMLEFBQWMsQUFDTCxBQUVWO0FBSGUsQUFDWjs7Ozs7Ozs7OzttQkFLRjt3QkFBQSxBQUFRLElBQVIsQUFBWTs7OzBCQUN3QyxBQUN4QyxBQUNSOzs4QkFBUyxBQUNHLEFBQ1Y7b0NBSjhDLEFBRXZDLEFBRVMsQUFFbEI7QUFKUyxBQUNQOzswQkFJQSxBQUNRLEdBQUcsQUFDVDs4QkFBVSxLQUFBLEFBQUssTUFGakIsQUFFdUIsQUFDckI7MkJBQU8sS0FBQSxBQUFLLE1BSGQsQUFHb0IsQUFDbEI7aUNBQWEsS0FBQSxBQUFLLE1BSnBCLEFBSTBCLEFBQ3hCOzBCQUFNLEtBQUEsQUFBSyxNQUxiLEFBS21CLEFBQ2pCOzRCQUFRLEtBQUEsQUFBSyxNQU5mLEFBTXFCLEFBQ25COzJCQUFPLEtBQUEsQUFBSyxNQVBkLEFBT29CLEFBQ2xCOytCQUFXLEtBQUEsQUFBSyxNQVJsQixBQVF3QixBQUN0Qjt5QkFBSyxLQUFBLEFBQUssTUFUWixBQVNrQixBQUNoQjttQ0FBZSxLQUFBLEFBQUssTUFWdEIsQUFVNEIsQUFDMUI7K0JBQVcsS0FBQSxBQUFLLE1BWGxCLEFBV3dCLEFBQ3RCO2lDQUFhLEtBQUEsQUFBSyxNQVpwQixBQVkwQixBQUN4QjttQ0FBZSxLQUFBLEFBQUssTUFidEIsQUFhNEIsQUFDMUI7Z0NBQVksS0FBQSxBQUFLLE1BZG5CLEFBY3lCLEFBQ3ZCOzZCQUFTLEtBQUEsQUFBSyxNQWZoQixBQWVzQixBQUNwQjs4QkFBVSxLQUFBLEFBQUssTUFoQmpCLEFBZ0J1QixBQUNyQjs2QkFBUyxLQUFBLEFBQUssTUFqQmhCLEFBaUJzQixBQUNwQjs2QkFBUyxLQUFBLEFBQUssTUFsQmhCLEFBa0JzQixBQUNwQjt5QkFBSyxLQUFBLEFBQUssTUFuQlosQUFtQmtCLEFBQ2hCOzBCQUFNLEtBQUEsQUFBSyxNQXBCYixBQW9CbUIsQUFDakI7eUJBQUssS0FBQSxBQUFLLE1BckJaLEFBcUJrQixBQUNoQjt3QkFBSSxLQUFBLEFBQUssTUF0QlgsQUFzQmlCLEFBQ2Y7d0JBQUksS0FBQSxBQUFLLE1BdkJYLEFBdUJpQixBQUNmO3lCQUFLLEtBQUEsQUFBSyxNQXhCWixBQXdCa0IsQUFDaEI7bUNBQWUsS0FBQSxBQUFLLE1BekJ0QixBQXlCNEIsQUFDMUI7aUNBQWEsS0FBQSxBQUFLLE1BMUJwQixBQTBCMEIsQUFDeEI7OEJBQVUsS0FBQSxBQUFLLE1BM0JqQixBQTJCdUIsQUFDckI7NkJBQVMsS0FBQSxBQUFLLE1BNUJoQixBQTRCc0IsQUFDcEI7a0NBQWMsS0FBQSxBQUFLLE1BN0JyQixBQTZCMkIsQUFDekI7eUJBQUssS0FBQSxBQUFLLE1BOUJaLEFBOEJrQixBQUNoQjs4QkFBVSxLQUFBLEFBQUssTUEvQmpCLEFBK0J1QixBQUNyQjsyQkFBTyxLQUFBLEFBQUssTUFoQ2QsQUFnQ29CLEFBQ2xCOzBCQUFNLEtBQUEsQUFBSyxNQWpDYixBQWlDbUIsQUFDakI7MkJBQU8sS0FBQSxBQUFLLE0sQUF6Q0MsQUFBK0IsQUFNMUMsQUFDSixBQWtDb0I7QUFsQ3BCLEFBQ0UsbUJBRkU7QUFOMEMsQUFDaEQsaUJBRGlCOzttQkFBakI7QSxvQ0E4Q0E7QSx5QixBQUFTOzt1QkFDSSxTQUFBLEEsQUFBUzs7bUJBQXRCO0EsZ0NBQ0o7O3dCQUFBLEFBQVEsSUFBSSxTQUFaLEFBQXFCLEFBQ3JCO0FBQ0E7b0JBQUksU0FBQSxBQUFTLFdBQVQsQUFBb0IsT0FDcEIsU0FBQSxBQUFTLFdBRGIsQUFDd0IsS0FBTyxBQUMvQjtBQUNFOzRCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7QUFDQTs2QkFBQSxBQUFTLEFBQ1Y7QUFORCx5QkFPSyxBQUNIOzBCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7MkJBQUEsQUFBUyxBQUNWO0FBRUQ7O3dCQUFBLEFBQVEsSUFBUixBQUFZO2lELEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkcsQUFHYyxNLEFBQU0sUyxBQUFTOzs7OzttQkFDcEM7d0JBQUEsQUFBUSxJQUFJLHdCQUF3QixPQUF4QixBQUErQixTQUEzQyxBQUFvRDs7c0JBQ2hELE9BQUEsQUFBTyxXLEFBQVc7Ozs7O2tELEFBQ1g7O21CQUVYOztxQkFBQSxBQUFLOzZCQUFMLEFBQWMsQUFDRCxBQUdiO0FBSmMsQUFDWjs7cUJBR0YsQUFBSzsrQkFDVSxPQURmLEFBQWMsQUFDUSxBQUlqQjtBQUxTLEFBQ1o7O29CLEFBSU87OztzQkFBSSxJQUFJLE9BQU8sQTs7O0FBQ3RCOzt3QkFBQSxBQUFRLElBQUssc0JBQWIsQUFBaUMsQUFDN0I7QSxxQkFBTSxJQUFBLEFBQUksQUFDZCxBOzttQkFBQSxBQUFHLE9BQUgsQUFBVSxRQUFWLEFBQWtCLEFBQ2xCO21CQUFBLEFBQUcsT0FBSCxBQUFVLFNBQVMsT0FBbkIsQUFBbUIsQUFBTzs7OzswQkFFK0IsQUFDN0MsQUFDUjs7QUFGcUQsQUFFNUMsQUFHVDtBQUhTLEFBQ1A7d0IsQUFIZSxBQUFvQyxBQUsvQztBQUwrQyxBQUNyRCxpQkFEaUI7O21CQUFqQjtBLHFDQVFBO0EseUIsQUFBUzs7dUJBQ0ksU0FBQSxBQUFTLEE7O21CQUF0QjtBLGlDQUNKOzt3QkFBQSxBQUFRLElBQUksU0FBWixBQUFxQixBQUNyQjtBQUNBO29CQUFJLFNBQUEsQUFBUyxXQUFULEFBQW9CLE9BQ3RCLFNBQUEsQUFBUyxXQURYLEFBQ3NCLEtBQU8sQUFDM0I7QUFDRTs0QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzZCQUFBLEFBQVMsQUFDVjtBQUxILHlCQU1PLEFBQ0g7MEJBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjsyQkFBQSxBQUFTLEFBQ1Y7QUFFSDs7cUJBQUEsQUFBSztzQ0FDaUIsSUFEdEIsQUFBYyxBQUNVO0FBRFYsQUFDWjs7bUJBOUI2QjtBOzs7O21CQWtDakM7O3dCQUFBLEFBQVEsSUFBUixBQUFZO2tELEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FHVSxBQUNmO2NBQUEsQUFBUSxJQUFJLDBCQUEwQixLQUFBLEFBQUssTUFBM0MsQUFBaUQsQUFDakQ7Y0FBQSxBQUFRLElBQUksdUJBQXVCLEtBQUEsQUFBSyxNQUF4QyxBQUE4QyxBQUM5QztjQUFBLEFBQVEsSUFBSSw2QkFBNkIsS0FBQSxBQUFLLE1BQTlDLEFBQW9ELEFBQ3BEO2NBQUEsQUFBUSxJQUFJLHNCQUFzQixLQUFBLEFBQUssTUFBdkMsQUFBNkMsQUFDN0M7Y0FBQSxBQUFRLElBQUksd0JBQXdCLEtBQUEsQUFBSyxNQUF6QyxBQUErQyxBQUMvQztjQUFBLEFBQVEsSUFBSSx1QkFBdUIsS0FBQSxBQUFLLE1BQXhDLEFBQThDLEFBQzlDO2NBQUEsQUFBUSxJQUFJLDJCQUEyQixLQUFBLEFBQUssTUFBNUMsQUFBa0QsQUFDbEQ7Y0FBQSxBQUFRLElBQUkscUJBQXFCLEtBQUEsQUFBSyxNQUF0QyxBQUE0QyxBQUM1QztjQUFBLEFBQVEsSUFBSSwrQkFBK0IsS0FBQSxBQUFLLE1BQWhELEFBQXNELEFBQ3REO2NBQUEsQUFBUSxJQUFJLDJCQUEyQixLQUFBLEFBQUssTUFBNUMsQUFBa0QsQUFDbEQ7Y0FBQSxBQUFRLElBQUksNkJBQTZCLEtBQUEsQUFBSyxNQUE5QyxBQUFvRCxBQUNwRDtjQUFBLEFBQVEsSUFBSSwrQkFBK0IsS0FBQSxBQUFLLE1BQWhELEFBQXNELEFBQ3REO2NBQUEsQUFBUSxJQUFJLDRCQUE0QixLQUFBLEFBQUssTUFBN0MsQUFBbUQsQUFDbkQ7Y0FBQSxBQUFRLElBQUkseUJBQXlCLEtBQUEsQUFBSyxNQUExQyxBQUFnRCxBQUNoRDtjQUFBLEFBQVEsSUFBSSwwQkFBMEIsS0FBQSxBQUFLLE1BQTNDLEFBQWlELEFBQ2xEOzs7O3dDQUVtQixBQUNwQjtjQUFBLEFBQVEsSUFBSSx5QkFBeUIsS0FBQSxBQUFLLE1BQTFDLEFBQWdELEFBQ2hEO2NBQUEsQUFBUSxJQUFJLHlCQUF5QixLQUFBLEFBQUssTUFBMUMsQUFBZ0QsQUFDaEQ7Y0FBQSxBQUFRLElBQUkscUJBQXFCLEtBQUEsQUFBSyxNQUF0QyxBQUE0QyxBQUM1QztjQUFBLEFBQVEsSUFBSSxzQkFBc0IsS0FBQSxBQUFLLE1BQXZDLEFBQTZDLEFBQzdDO2NBQUEsQUFBUSxJQUFJLHFCQUFxQixLQUFBLEFBQUssTUFBdEMsQUFBNEMsQUFDNUM7Y0FBQSxBQUFRLElBQUksb0JBQW9CLEtBQUEsQUFBSyxNQUFyQyxBQUEyQyxBQUMzQztjQUFBLEFBQVEsSUFBSSxvQkFBb0IsS0FBQSxBQUFLLE1BQXJDLEFBQTJDLEFBQzNDO2NBQUEsQUFBUSxJQUFJLHFCQUFxQixLQUFBLEFBQUssTUFBdEMsQUFBNEMsQUFDNUM7Y0FBQSxBQUFRLElBQUksK0JBQStCLEtBQUEsQUFBSyxNQUFoRCxBQUFzRCxBQUN0RDtjQUFBLEFBQVEsSUFBSSw2QkFBNkIsS0FBQSxBQUFLLE1BQTlDLEFBQW9ELEFBQ3BEO2NBQUEsQUFBUSxJQUFJLDBCQUEwQixLQUFBLEFBQUssTUFBM0MsQUFBaUQsQUFDakQ7Y0FBQSxBQUFRLElBQUkseUJBQXlCLEtBQUEsQUFBSyxNQUExQyxBQUFnRCxBQUNoRDtjQUFBLEFBQVEsSUFBSSw4QkFBOEIsS0FBQSxBQUFLLE1BQS9DLEFBQXFELEFBQ3JEO2NBQUEsQUFBUSxJQUFJLHFCQUFxQixLQUFBLEFBQUssTUFBdEMsQUFBNEMsQUFDNUM7Y0FBQSxBQUFRLElBQUksMEJBQTBCLEtBQUEsQUFBSyxNQUEzQyxBQUFpRCxBQUNqRDtjQUFBLEFBQVEsSUFBSSx1QkFBdUIsS0FBQSxBQUFLLE1BQXhDLEFBQThDLEFBQzlDO2NBQUEsQUFBUSxJQUFJLHNCQUFzQixLQUFBLEFBQUssTUFBdkMsQUFBNkMsQUFDN0M7Y0FBQSxBQUFRLElBQUksdUJBQXVCLEtBQUEsQUFBSyxNQUF4QyxBQUE4QyxBQUMvQztBQW1ERDs7O3FCQUFjO2lCQUFBOzt3Q0FBQTs7a0lBQUE7O1VBakRkLEFBaURjLHdGQWpEQyxvQkFBQTtzRUFBQTtrQkFBQTs2Q0FBQTtpQkFDYjtzQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO0FBQ0E7b0JBQUEsQUFBSyxBQUNMO29CQUphLEFBSWIsQUFBSzs7K0JBSlE7cUJBTVAsTUFOTyxBQU1QLEFBQUs7O2lCQU5FOytCQUFBO3FCQVNQLE1BQUEsQUFBSyxpQkFBTCxBQUFzQixHQUF0QixBQUF5QixHQUFHLE1BQUEsQUFBSyxNQVQxQixBQVNQLEFBQXVDOztpQkFDN0M7c0JBQUEsQUFBUSxJQVZLLEFBVWIsQUFBWTs7aUJBVkM7aUJBQUE7K0JBQUE7O0FBQUE7bUJBQUE7QUFpREQ7O1VBcENkLEFBb0NjLGdCQXBDRSxVQUFBLEFBQUMsSUFBRCxBQUFLLE1BQVMsQUFDaEM7QUFDQTtBQUNJO1lBQUEsQUFBSywyQ0FDRixLQURILEFBQ1EsTUFBUSxJQUFFLEtBRGxCLEFBQ3VCLEFBRTNCO0FBQ0c7QUE2QmE7O1VBM0JkLEFBMkJjLG9CQTNCTSxVQUFBLEFBQUMsT0FBVSxBQUM3QjtVQUFNLFNBQVMsTUFBZixBQUFxQixBQUNyQjtVQUFNLFFBQVEsT0FBZCxBQUFxQixBQUNyQjtVQUFNLE9BQU8sT0FBYixBQUFvQixBQUNwQjtZQUFBLEFBQUssMkNBQUwsQUFDRyxNQURILEFBQ1UsQUFFVjtjQUFBLEFBQVEsSUFBSSxNQUFBLEFBQUksT0FBSixBQUFTLFFBQXJCLEFBQTZCLEFBQzlCO0FBbUJhOztVQWpCZCxBQWlCYywyQkFqQmEsVUFBQSxBQUFDLElBQUQsQUFBSyxNQUFTLEFBQ3ZDO0FBQ0E7VUFBTSxTQUFTLGlCQUFBLEFBQUUsS0FBRixBQUFPLGVBQWUsRUFBRSxPQUFPLEtBQTlDLEFBQWUsQUFBc0IsQUFBYyxBQUNuRDtZQUFBLEFBQUs7dUJBQ1ksT0FEakIsQUFBYyxBQUNVLEFBRXhCO0FBSGMsQUFDWjtjQUVGLEFBQVEsSUFBSSxPQUFaLEFBQW1CLEFBQ3BCO0FBVWE7O1VBUmQsQUFRYyx1QkFSUyxVQUFBLEFBQUMsSUFBRCxBQUFLLE1BQVMsQUFDbkM7VUFBTSxTQUFTLGlCQUFBLEFBQUUsS0FBRixBQUFPLFdBQVcsRUFBRSxPQUFPLEtBQTFDLEFBQWUsQUFBa0IsQUFBYyxBQUMvQztZQUFBLEFBQUs7bUJBQ1EsT0FEYixBQUFjLEFBQ00sQUFFcEI7QUFIYyxBQUNaO2NBRUYsQUFBUSxJQUFJLE9BQVosQUFBbUIsQUFDcEI7QUFFYSxBQUVaOztVQUFBLEFBQUs7YUFBUSxBQUNKLEFBQ1A7MEJBRlcsQUFFUyxBQUNwQjttQkFIVyxBQUdFLEFBQ2I7aUJBSlcsQUFJQSxBQUVYOztnQkFOVyxBQU1ELEFBQ1Y7YUFQVyxBQU9KLEFBQ1A7bUJBUlcsQUFRRSxBQUNiO1lBVFcsQUFTTCxBQUNOO2NBVlcsQUFVSCxBQUNSO2FBWFcsQUFXSixBQUNQO2lCQVpXLEFBWUEsQUFDWDtXQWJXLEFBYU4sQUFDTDtxQkFkVyxBQWNJLEFBQ2Y7aUJBZlcsQUFlQSxBQUNYO21CQWhCVyxBQWdCRSxBQUNiO3FCQWpCVyxBQWlCSSxBQUNmO2tCQWxCVyxBQWtCQyxBQUNaO2VBbkJXLEFBbUJGLEFBQ1Q7Z0JBcEJXLEFBb0JELEFBRVY7O2VBdEJXLEFBc0JGLEFBQ1Q7ZUF2QlcsQUF1QkYsQUFDVDtXQXhCVyxBQXdCTixBQUNMO1lBekJXLEFBeUJMLEFBQ047V0ExQlcsQUEwQk4sQUFDTDtVQTNCVyxBQTJCUCxBQUNKO1VBNUJXLEFBNEJQLEFBQ0o7V0E3QlcsQUE2Qk4sQUFDTDtxQkE5QlcsQUE4QkksQUFDZjttQkEvQlcsQUErQkUsQUFDYjtnQkFoQ1csQUFnQ0QsQUFDVjtlQWpDVyxBQWlDRixBQUNUO29CQWxDVyxBQWtDRyxBQUNkO1dBbkNXLEFBbUNOLEFBQ0w7Z0JBcENXLEFBb0NELEFBQ1Y7YUFyQ1csQUFxQ0osQUFDUDtZQXRDVyxBQXNDTCxBQUNOO2FBdkNGLEFBQWEsQUF1Q0osQUFFVDtBQXpDYSxBQUNYO1VBd0NGLEFBQUssaUJBQUwsQUFBc0IsS0EzQ1Y7V0E0Q2I7Ozs7OzZCQUVRO1VBQ1A7O1VBQUk7Z0JBQW1CLEFBQ2IsQUFDUjtlQUZxQixBQUVkLEFBQ1A7Z0JBSHFCLEFBR2IsQUFDUjtnQkFKRixBQUF1QixBQUliLEFBRVY7QUFOdUIsQUFDckI7VUFLRTtBQUVGO2VBRmtCLEFBRVgsQUFDUDtnQkFIa0IsQUFHVixBQUNSO2dCQUpGLEFBQW9CLEFBSVYsQUFFVjtBQU5vQixBQUNuQjtVQUtHO0FBRUY7ZUFGaUIsQUFFVixBQUNYO0FBQ0k7Z0JBSkYsQUFBbUIsQUFJVCxBQUVWO0FBTm1CLEFBQ25CO1VBS0k7QUFFQTtlQUZKLEFBQXNCLEFBRVgsQUFFWDtBQUpzQixBQUNwQjtVQUdFO0FBRUE7b0JBQVksQUFDaEI7QUFIQSxBQUF3QixBQUt4QjtBQUx3QixBQUN4Qjs2QkFLRSxjQUFBOztvQkFBQTtzQkFBQSxBQVVBO0FBVkE7QUFBQSxPQUFBLGtCQVVBLGNBQUEsU0FBSyxPQUFMLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsQUFBd0IsUUFBTyxZQUEvQjtvQkFBQTtzQkFBQTtBQUFBO1NBQU4sQUFBTSxBQUFvRCxpQ0FBQSxBQUFDLHdDQUFNLGFBQVAsQUFBbUIsSUFBRyxPQUF0QixBQUE2QixpQkFBaUIsTUFBOUMsQUFBbUQsWUFBVyxVQUFVLEtBQXhFLEFBQTZFO29CQUE3RTtzQkFENUQsQUFDRSxBQUEwRCxBQUMxRDtBQUQwRDs7O29CQUMxRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsQUFBd0IsUUFBTyxZQUEvQjtvQkFBQTtzQkFBQTtBQUFBO1NBQU4sQUFBTSxBQUFvRCxpQ0FBQSxBQUFDLHdDQUFNLGFBQVAsQUFBbUIsSUFBRyxPQUF0QixBQUE2QixpQkFBaUIsTUFBOUMsQUFBbUQsU0FBUSxVQUFVLEtBQXJFLEFBQTBFO29CQUExRTtzQkFINUQsQUFHRSxBQUEwRCxBQUMxRDtBQUQwRDs7O29CQUMxRDtzQkFKRixBQUlFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsQUFBd0IsUUFBTyxZQUEvQjtvQkFBQTtzQkFBQTtBQUFBO1NBQU4sQUFBTSxBQUFvRCxpQ0FBQSxBQUFDLDJDQUFTLGFBQVYsQUFBc0IsSUFBRyxPQUF6QixBQUFnQyxpQkFBaUIsTUFBakQsQUFBc0QsZUFBYyxVQUFVLEtBQTlFLEFBQW1GO29CQUFuRjtzQkFMNUQsQUFLRSxBQUEwRCxBQUMxRDtBQUQwRDs7O29CQUMxRDtzQkFORixBQU1FLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsQUFBd0IsUUFBTyxZQUEvQjtvQkFBQTtzQkFBQTtBQUFBO1NBQU4sQUFBTSxBQUNKLGlDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGtEQUNTLE1BQVAsQUFBWSxVQUFTLEtBQXJCLEFBQXlCLEtBQUksV0FBN0IsQUFBdUMsaUJBQWdCLGFBQXZELEFBQW1FLE1BQUssTUFBeEUsQUFBNkUsUUFBTyxVQUFVLEtBQTlGLEFBQW1HO29CQUFuRztzQkFUTixBQU9FLEFBQ0UsQUFDRSxBQUdKO0FBSEk7OztvQkFHSjtzQkFaRixBQVlFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsQUFBd0IsUUFBTyxZQUEvQjtvQkFBQTtzQkFBQTtBQUFBO1NBQU4sQUFBTSxBQUNKLGlDQUFBLEFBQUMsd0NBQU0sYUFBUCxBQUFtQixRQUFPLE1BQTFCLEFBQStCLFNBQVEsVUFBVSxLQUFqRCxBQUFzRDtvQkFBdEQ7c0JBZEosQUFhRSxBQUNFLEFBRUY7QUFGRTs7O29CQUVGO3NCQWhCRixBQWdCRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUFNO0FBQU47QUFBQSx5QkFBTSxBQUFDLHdDQUFNLE1BQVAsQUFBWSxPQUFNLE9BQWxCLEFBQXdCLFFBQU8sWUFBL0I7b0JBQUE7c0JBQUE7QUFBQTtTQUFOLEFBQU0sQUFBb0QsaUNBQUEsQUFBQyx3Q0FBTSxhQUFQLEFBQW1CLFNBQVEsTUFBM0IsQUFBZ0MsVUFBUyxVQUFVLEtBQW5ELEFBQXdEO29CQUF4RDtzQkFqQjVELEFBaUJFLEFBQTBELEFBQzFEO0FBRDBEOzs7b0JBQzFEO3NCQWxCRixBQWtCRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUFNO0FBQU47QUFBQSx5QkFBTSxBQUFDLHdDQUFNLE1BQVAsQUFBWSxPQUFNLE9BQWxCLEFBQXdCLFFBQU8sWUFBL0I7b0JBQUE7c0JBQUE7QUFBQTtTQUFOLEFBQU0sQUFDSixpQ0FBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSwwRUFDUyxNQUFQLEFBQVksVUFBUyxLQUFyQixBQUF5QixLQUFJLE1BQTdCLEFBQWtDLE9BQU0sV0FBeEMsQUFBa0QsaUJBQWdCLGFBQWxFLEFBQThFLG1FQUE5RSxBQUF1Rix3RUFBZ0IsS0FBdkcsQUFBNEc7a0JBQTVHO29CQUFBO0FBQUEsVUFyQk4sQUFtQkUsQUFDRSxBQUlGOztvQkFBQTtzQkF4QkYsQUF3QkUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFBTTtBQUFOO0FBQUEseUJBQU0sQUFBQyx3Q0FBTSxNQUFQLEFBQVksT0FBTSxPQUFsQixBQUF3QixRQUFPLFlBQS9CO29CQUFBO3NCQUFBO0FBQUE7U0FBTixBQUFNLEFBQW9ELGlDQUFBLEFBQUMsd0NBQU0sYUFBUCxBQUFtQiw0QkFBTyxNQUExQixBQUErQixhQUFZLFVBQVUsS0FBckQsQUFBMEQ7b0JBQTFEO3NCQXpCNUQsQUF5QkUsQUFBMEQsQUFDMUQ7QUFEMEQ7OztvQkFDMUQ7c0JBMUJGLEFBMEJFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsQUFBd0IsUUFBTyxZQUEvQjtvQkFBQTtzQkFBQTtBQUFBO1NBQU4sQUFBTSxBQUNKLDZDQUFBLEFBQUMsMkNBQVMsYUFBVixBQUFzQiw0QkFBTyxRQUE3QixNQUFvQyxXQUFwQyxNQUE4QyxTQUE5QyxBQUF1RCxlQUFlLFVBQVUsS0FBaEYsQUFBcUY7b0JBQXJGO3NCQTVCSixBQTJCRSxBQUNFLEFBRUY7QUFGRTs7O29CQUVGO3NCQTlCRixBQThCRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUFNO0FBQU47QUFBQSx5QkFBTSxBQUFDLHdDQUFNLE1BQVAsQUFBWSxPQUFNLE9BQWxCLEFBQXdCLFFBQU8sWUFBL0I7b0JBQUE7c0JBQUE7QUFBQTtTQUFOLEFBQU0sQUFDSixpQ0FBQSxBQUFDLDJDQUFTLGFBQVYsQUFBc0IsNEJBQU8sUUFBN0IsTUFBb0MsV0FBcEMsTUFBOEMsU0FBOUMsQUFBdUQsV0FBVyxVQUFVLEtBQTVFLEFBQWlGO29CQUFqRjtzQkFoQ0osQUErQkUsQUFDRSxBQUVGO0FBRkU7OztvQkFFRjtzQkFsQ0YsQUFrQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFBTTtBQUFOO0FBQUEseUJBQU0sQUFBQyx3Q0FBTSxNQUFQLEFBQVksT0FBTSxPQUFsQixBQUF3QixRQUFPLFlBQS9CO29CQUFBO3NCQUFBO0FBQUE7U0FBTixBQUFNLEFBQ0osdUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ1MsTUFBUCxBQUFZLFVBQVMsS0FBckIsQUFBeUIsS0FBSSxXQUE3QixBQUF1QyxpQkFBZ0IsYUFBdkQsQUFBbUUsU0FBUSxNQUEzRSxBQUFnRixlQUFjLFVBQVUsS0FBeEcsQUFBNkc7b0JBQTdHO3NCQXJDTixBQW1DRSxBQUNFLEFBQ0UsQUFHSjtBQUhJOzs7b0JBR0o7c0JBeENGLEFBd0NFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsQUFBd0IsUUFBTyxZQUEvQjtvQkFBQTtzQkFBQTtBQUFBO1NBQU4sQUFBTSxBQUNKLHVDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGtEQUNTLE1BQVAsQUFBWSxVQUFTLEtBQXJCLEFBQXlCLEtBQUksV0FBN0IsQUFBdUMsaUJBQWdCLGFBQXZELEFBQW1FLFNBQVEsTUFBM0UsQUFBZ0YsaUJBQWdCLFVBQVUsS0FBMUcsQUFBK0c7b0JBQS9HO3NCQTNDTixBQXlDRSxBQUNFLEFBQ0UsQUFHSjtBQUhJOzs7b0JBR0o7c0JBOUNGLEFBOENFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUFBLEFBQU07QUFBTjtBQUFBLHlCQUFNLEFBQUMsd0NBQU0sTUFBUCxBQUFZLE9BQU0sT0FBbEIsQUFBd0IsUUFBTyxZQUEvQjtvQkFBQTtzQkFBQTtBQUFBO1NBQU4sQUFBTSxBQUNKLHVDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGtEQUNTLE1BQVAsQUFBWSxVQUFTLEtBQXJCLEFBQXlCLEtBQUksV0FBN0IsQUFBdUMsaUJBQWdCLGFBQXZELEFBQW1FLFNBQVEsTUFBM0UsQUFBZ0YsY0FBYSxVQUFVLEtBQXZHLEFBQTRHO29CQUE1RztzQkFqRE4sQUErQ0UsQUFDRSxBQUNFLEFBR0o7QUFISTs7O29CQUdKO3NCQXBERixBQW9ERSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFBQSxBQUFNO0FBQU47QUFBQSx5QkFBTSxBQUFDLHdDQUFNLE1BQVAsQUFBWSxPQUFNLE9BQWxCLEFBQXdCLFFBQU8sWUFBL0I7b0JBQUE7c0JBQUE7QUFBQTtTQUFOLEFBQU0sQUFDSix1REFBQSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxrREFDUyxNQUFQLEFBQVksVUFBUyxLQUFyQixBQUF5QixLQUFJLFdBQTdCLEFBQXVDLGlCQUFnQixhQUF2RCxBQUFtRSxLQUFJLE1BQXZFLEFBQTRFLFdBQVUsVUFBVSxLQUFoRyxBQUFxRztvQkFBckc7c0JBdkROLEFBcURFLEFBQ0UsQUFDRSxBQUdKO0FBSEk7OztvQkFHSjtzQkExREYsQUEwREUsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQzs7b0JBQUQ7c0JBQUEsQUFBTTtBQUFOO0FBQUEseUJBQU0sQUFBQyx3Q0FBTSxNQUFQLEFBQVksT0FBTSxPQUFsQixBQUF3QixRQUFPLFlBQS9CO29CQUFBO3NCQUFBO0FBQUE7U0FBTixBQUFNLEFBQ0osdUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsa0RBQ1MsTUFBUCxBQUFZLFVBQVMsS0FBckIsQUFBeUIsS0FBSSxXQUE3QixBQUF1QyxpQkFBZ0IsYUFBdkQsQUFBbUUsUUFBTyxNQUExRSxBQUErRSxZQUFXLFVBQVUsS0FBcEcsQUFBeUc7b0JBQXpHO3NCQTdETixBQTJERSxBQUNFLEFBQ0UsQUFHSjtBQUhJOzs7b0JBR0o7c0JBaEVGLEFBZ0VFLEFBQ0U7QUFERjtBQUFBLDBCQUNFLGNBQUEsVUFBTSxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFBZ0M7QUFBaEM7eUJBQWdDLEFBQUMsMkNBQVMsT0FBVixBQUFnQixnQkFBSyxNQUFyQixBQUEwQixXQUFVLE9BQU8sS0FBQSxBQUFLLE1BQWhELEFBQXNELFNBQVMsU0FBUyxLQUF4RSxBQUE2RTtvQkFBN0U7c0JBakVwQyxBQWlFSSxBQUFnQyxBQUNoQztBQURnQzsyQkFDaEMsY0FBQSxVQUFNLE9BQU4sQUFBYTtvQkFBYjtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsQUFBQywyQ0FBUyxPQUFWLEFBQWdCLGdCQUFLLE1BQXJCLEFBQTBCLFdBQVUsT0FBTyxLQUFBLEFBQUssTUFBaEQsQUFBc0QsU0FBUyxTQUFTLEtBQXhFLEFBQTZFO29CQUE3RTtzQkFsRXBDLEFBa0VJLEFBQWdDLEFBQ2hDO0FBRGdDOzJCQUNoQyxjQUFBLFVBQU0sT0FBTixBQUFhO29CQUFiO3NCQUFBLEFBQWdDO0FBQWhDO3lCQUFnQyxBQUFDLDJDQUFTLE9BQVYsQUFBZ0Isc0JBQU0sTUFBdEIsQUFBMkIsT0FBTSxPQUFPLEtBQUEsQUFBSyxNQUE3QyxBQUFtRCxLQUFLLFNBQVMsS0FBakUsQUFBc0U7b0JBQXRFO3NCQW5FcEMsQUFtRUksQUFBZ0MsQUFDaEM7QUFEZ0M7MkJBQ2hDLGNBQUEsVUFBTSxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFBZ0M7QUFBaEM7eUJBQWdDLEFBQUMsMkNBQVMsT0FBVixBQUFnQixnQkFBSyxNQUFyQixBQUEwQixRQUFPLE9BQU8sS0FBQSxBQUFLLE1BQTdDLEFBQW1ELE1BQU0sU0FBUyxLQUFsRSxBQUF1RTtvQkFBdkU7c0JBcEVwQyxBQW9FSSxBQUFnQyxBQUNoQztBQURnQzsyQkFDaEMsY0FBQSxVQUFNLE9BQU4sQUFBYTtvQkFBYjtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsQUFBQywyQ0FBUyxPQUFWLEFBQWdCLHNCQUFNLE1BQXRCLEFBQTJCLE9BQU0sT0FBTyxLQUFBLEFBQUssTUFBN0MsQUFBbUQsS0FBSyxTQUFTLEtBQWpFLEFBQXNFO29CQUF0RTtzQkFyRXBDLEFBcUVJLEFBQWdDLEFBQ2hDO0FBRGdDOzJCQUNoQyxjQUFBLFVBQU0sT0FBTixBQUFhO29CQUFiO3NCQUFBLEFBQWdDO0FBQWhDO3lCQUFnQyxBQUFDLDJDQUFTLE9BQVYsQUFBZ0IsZ0JBQUssTUFBckIsQUFBMEIsTUFBSyxPQUFPLEtBQUEsQUFBSyxNQUEzQyxBQUFpRCxJQUFJLFNBQVMsS0FBOUQsQUFBbUU7b0JBQW5FO3NCQXRFcEMsQUFzRUksQUFBZ0MsQUFDaEM7QUFEZ0M7MkJBQ2hDLGNBQUEsVUFBTSxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFBZ0M7QUFBaEM7eUJBQWdDLEFBQUMsMkNBQVMsT0FBVixBQUFnQixnQkFBSyxNQUFyQixBQUEwQixNQUFLLE9BQU8sS0FBQSxBQUFLLE1BQTNDLEFBQWlELElBQUksU0FBUyxLQUE5RCxBQUFtRTtvQkFBbkU7c0JBdkVwQyxBQXVFSSxBQUFnQyxBQUNoQztBQURnQzsyQkFDaEMsY0FBQSxVQUFNLE9BQU4sQUFBYTtvQkFBYjtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsQUFBQywyQ0FBUyxPQUFWLEFBQWdCLGdCQUFLLE1BQXJCLEFBQTBCLE9BQU0sT0FBTyxLQUFBLEFBQUssTUFBNUMsQUFBa0QsS0FBSyxTQUFTLEtBQWhFLEFBQXFFO29CQUFyRTtzQkF4RXBDLEFBd0VJLEFBQWdDLEFBQ2hDO0FBRGdDOzJCQUNoQyxjQUFBLFVBQU0sT0FBTixBQUFhO29CQUFiO3NCQUFBLEFBQWdDO0FBQWhDO3lCQUFnQyxBQUFDLDJDQUFTLE9BQVYsQUFBZ0Isc0JBQU0sTUFBdEIsQUFBMkIsaUJBQWdCLE9BQU8sS0FBQSxBQUFLLE1BQXZELEFBQTZELGVBQWUsU0FBUyxLQUFyRixBQUEwRjtvQkFBMUY7c0JBekVwQyxBQXlFSSxBQUFnQyxBQUNoQztBQURnQzsyQkFDaEMsY0FBQSxVQUFNLE9BQU4sQUFBYTtvQkFBYjtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsQUFBQywyQ0FBUyxPQUFWLEFBQWdCLDRCQUFPLE1BQXZCLEFBQTRCLGVBQWMsT0FBTyxLQUFBLEFBQUssTUFBdEQsQUFBNEQsYUFBYSxTQUFTLEtBQWxGLEFBQXVGO29CQUF2RjtzQkExRXBDLEFBMEVJLEFBQWdDLEFBQ2hDO0FBRGdDOzJCQUNoQyxjQUFBLFVBQU0sT0FBTixBQUFhO29CQUFiO3NCQUFBLEFBQWdDO0FBQWhDO3lCQUFnQyxBQUFDLDJDQUFTLE9BQVYsQUFBZ0Isc0JBQU0sTUFBdEIsQUFBMkIsWUFBVyxPQUFPLEtBQUEsQUFBSyxNQUFsRCxBQUF3RCxVQUFVLFNBQVMsS0FBM0UsQUFBZ0Y7b0JBQWhGO3NCQTNFcEMsQUEyRUksQUFBZ0MsQUFDaEM7QUFEZ0M7MkJBQ2hDLGNBQUEsVUFBTSxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFBZ0M7QUFBaEM7eUJBQWdDLEFBQUMsMkNBQVMsT0FBVixBQUFnQixnQkFBSyxNQUFyQixBQUEwQixXQUFVLE9BQU8sS0FBQSxBQUFLLE1BQWhELEFBQXNELFNBQVMsU0FBUyxLQUF4RSxBQUE2RTtvQkFBN0U7c0JBNUVwQyxBQTRFSSxBQUFnQyxBQUNoQztBQURnQzsyQkFDaEMsY0FBQSxVQUFNLE9BQU4sQUFBYTtvQkFBYjtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsQUFBQywyQ0FBUyxPQUFWLEFBQWdCLHNCQUFNLE1BQXRCLEFBQTJCLGdCQUFlLE9BQU8sS0FBQSxBQUFLLE1BQXRELEFBQTRELGNBQWMsU0FBUyxLQUFuRixBQUF3RjtvQkFBeEY7c0JBN0VwQyxBQTZFSSxBQUFnQyxBQUNoQztBQURnQzsyQkFDaEMsY0FBQSxVQUFNLE9BQU4sQUFBYTtvQkFBYjtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsQUFBQywyQ0FBUyxPQUFWLEFBQWdCLFVBQUksTUFBcEIsQUFBeUIsT0FBTSxPQUFPLEtBQUEsQUFBSyxNQUEzQyxBQUFpRCxLQUFLLFNBQVMsS0FBL0QsQUFBb0U7b0JBQXBFO3NCQTlFcEMsQUE4RUksQUFBZ0MsQUFDaEM7QUFEZ0M7MkJBQ2hDLGNBQUEsVUFBTSxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFBZ0M7QUFBaEM7eUJBQWdDLEFBQUMsMkNBQVMsT0FBVixBQUFnQixnQkFBSyxNQUFyQixBQUEwQixZQUFXLE9BQU8sS0FBQSxBQUFLLE1BQWpELEFBQXVELFVBQVUsU0FBUyxLQUExRSxBQUErRTtvQkFBL0U7c0JBL0VwQyxBQStFSSxBQUFnQyxBQUNoQztBQURnQzsyQkFDaEMsY0FBQSxVQUFNLE9BQU4sQUFBYTtvQkFBYjtzQkFBQSxBQUFnQztBQUFoQzt5QkFBZ0MsQUFBQywyQ0FBUyxPQUFWLEFBQWdCLGdCQUFLLE1BQXJCLEFBQTBCLFNBQVEsT0FBTyxLQUFBLEFBQUssTUFBOUMsQUFBb0QsT0FBTyxTQUFTLEtBQXBFLEFBQXlFO29CQUF6RTtzQkFoRnBDLEFBZ0ZJLEFBQWdDLEFBQ2hDO0FBRGdDOzJCQUNoQyxjQUFBLFVBQU0sT0FBTixBQUFhO29CQUFiO3NCQUFBLEFBQWdDO0FBQWhDO3lCQUFnQyxBQUFDLDJDQUFTLE9BQVYsQUFBZ0IsZ0JBQUssTUFBckIsQUFBMEIsUUFBTyxPQUFPLEtBQUEsQUFBSyxNQUE3QyxBQUFtRCxNQUFNLFNBQVMsS0FBbEUsQUFBdUU7b0JBQXZFO3NCQWpGcEMsQUFpRkksQUFBZ0MsQUFDaEM7QUFEZ0M7MkJBQ2hDLGNBQUEsVUFBTSxPQUFOLEFBQWE7b0JBQWI7c0JBQUEsQUFBZ0M7QUFBaEM7eUJBQWdDLEFBQUMsMkNBQVMsT0FBVixBQUFnQixnQkFBSyxNQUFyQixBQUEwQixTQUFRLE9BQU8sS0FBQSxBQUFLLE1BQTlDLEFBQW9ELE9BQU8sU0FBUyxLQUFwRSxBQUF5RTtvQkFBekU7c0JBNUZwQyxBQVVBLEFBa0ZJLEFBQWdDLEFBRWxDO0FBRmtDOzRCQUVsQyxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0E5RkYsQUE4RkUsQUFDQSw4RUFBQSxjQUFBLFNBQUssT0FBTCxBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFTLFFBQVEsS0FBQSxBQUFLLE9BQUwsQUFBWSxLQUE5QixBQUFrQixBQUFpQixPQUFPLE9BQTFDLEFBQWlEO29CQUFqRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBakdOLEFBK0ZFLEFBQ0UsQUFDRSxBQUdKLHVDQUFBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBRUk7QUFGSjtBQUFBLGNBRUksQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFJLGFBQUE7K0JBQUssY0FBQSxRQUFJLEtBQUssRUFBVCxBQUFXO3NCQUFYO3dCQUFBLEFBQWtCO0FBQWxCO1NBQUEsSUFBQSxBQUFvQixNQUFTLFNBQTdCLEFBQStCLE1BQXBDLEFBQUs7QUF2R2xDLEFBb0dFLEFBQ0UsQUFFSSxBQUlILGlCQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsU0FBakIsQUFBMEIsS0FBSyxLQUFBLEFBQUssTUFBckMsQUFBMkMsNEJBQVksQUFBQywyQ0FBUyxPQUFPLEtBQUEsQUFBSyxNQUF0QixBQUE0QixvQkFBb0IsT0FBTyxLQUFBLEFBQUssTUFBNUQsQUFBa0UsYUFBYSxPQUEvRSxBQUFxRjtvQkFBckY7c0JBQXZELEFBQXVEO0FBQUE7T0FBQSxJQTNHM0QsQUEyRzhKLEFBQzVKLG9CQUFBLEFBQUMseUNBQU8sT0FBUixBQUFjLFNBQVEsU0FBUyxLQUEvQixBQUFvQztvQkFBcEM7c0JBQUEsQUFBa0Q7QUFBbEQ7eUJBQWtELEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFsRCxBQUFrRDtBQUFBO1VBN0d0RCxBQUNFLEFBNEdFLEFBR0w7Ozs7O0VBbFptQixnQkFBTSxBLEFBcVo1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJhZGRSb29tLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9