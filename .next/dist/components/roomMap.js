'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _redux = require('redux');

var _store = require('../store');

var _reactRedux = require('react-redux');

var _reactGoogleMaps = require('react-google-maps');

var _reactI18next = require('react-i18next');

var _startI18n = require('../tools/startI18n');

var _startI18n2 = _interopRequireDefault(_startI18n);

var _translationHelpers = require('../tools/translationHelpers');

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/roomMap.js';


var GettingStartedGoogleMap = (0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(_reactGoogleMaps.GoogleMap, {
    ref: props.onMapLoad,
    defaultZoom: 17,
    defaultCenter: props.center,
    onClick: props.onMapClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, props.markers.map(function (marker) {
    return _react2.default.createElement(_reactGoogleMaps.Marker, (0, _extends3.default)({}, marker, {
      onRightClick: function onRightClick() {
        return props.onMarkerRightClick(marker);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }));
  }));
});

var RoomMap = function (_React$Component) {
  (0, _inherits3.default)(RoomMap, _React$Component);

  function RoomMap(props) {
    (0, _classCallCheck3.default)(this, RoomMap);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RoomMap.__proto__ || (0, _getPrototypeOf2.default)(RoomMap)).call(this, props));

    console.log('hello RoomMap');

    _this.state = {
      mapWidth: props.width,
      mapHeight: props.height,
      address: props.address,

      markers: [{
        position: {
          lat: -25.363882,
          lng: 131.044922
        },
        key: 'Taiwan',
        defaultAnimation: 2
      }],

      position_initialized: false,
      center: null
    };
    return _this;
  }

  (0, _createClass3.default)(RoomMap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (process.browser) {
        console.log('hello RoomMap client');
        var self = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': this.state.address }, function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            //  map.setCenter(results[0].geometry.location);
            var pos = {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            };
            console.log(pos.lat);
            console.log(pos.lng);

            self.setState({
              center: {
                lat: pos.lat,
                lng: pos.lng
              },

              position_initialized: true
            });

            var markers = self.state.markers;

            markers.push({
              position: { lat: pos.lat, lng: pos.lng },
              defaultAnimation: 2,
              key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
            });

            self.setState({ markers: markers });
            self.forceUpdate();
          } else {
            console.log("geocode failed: " + status);
          }
        });
        /*
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          console.log("getCurrentPosition OK (" + pos.lat + ", " + pos.lng + ")");
          //map.setCenter(pos);
          self.setState({
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
             position_initialized: true,
          });
           var {markers} = self.state;
          markers.push (
              {
                position: { lat:pos.lat, lng:pos.lng},
                defaultAnimation: 2,
                key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
              },
            );
           self.setState({ markers });
           console.log("getState OK (" + self.state.center.lat + ", " + self.state.center.lng + ")");
          self.forceUpdate();
        }, function() {
          //handleLocationError(true, infoWindow, map.getCenter());
          console.log("getCurrentPosition error");
           // use default location
          self.setState({
            center: {
              lat: 25.034,
              lng: 121.56,
            },
             position_initialized: true,
          });
           var {markers} = self.state;
          markers.push (
              {
                position: { lat:self.state.center.lat, lng:self.state.center.lng},
                defaultAnimation: 2,
                key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
              },
            );
           self.setState({ markers });
          self.forceUpdate();
        });
        } else {
          // Browser doesn't support Geolocation
          console.log("Browser doesn't support Geolocation");
        }
        */
      } else {
          /*
          var pos = {
            lat: -25.363882,
            lng: 131.044922
          };
          */
          //initProps.pos = pos;
        }
    }
  }, {
    key: 'handleMapLoad',
    value: function handleMapLoad(map) {
      console.log("handleMapLoad");
      //  google.maps.event.trigger(map, 'resize');
      if (map) {
        console.log(map.getZoom());
      }
    }
  }, {
    key: 'handleMapClick',
    value: function handleMapClick(map) {
      console.log("handleMapClick");
    }
  }, {
    key: 'handleMarkerRightClick',
    value: function handleMarkerRightClick() {}
  }, {
    key: 'render',
    value: function render() {
      //  console.log("render MAP (" + this.state.center.lat + ", " + this.state.center.lng + ")");
      return _react2.default.createElement('div', { style: { width: this.state.mapWidth, height: this.state.mapHeight }, __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, this.state.position_initialized ? _react2.default.createElement(GettingStartedGoogleMap, {
        containerElement: _react2.default.createElement('div', { style: { height: this.state.mapHeight }, __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          }
        }),
        mapElement: _react2.default.createElement('div', { style: { height: this.state.mapHeight }, __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          }
        }),
        center: this.state.center,
        onMapLoad: this.handleMapLoad,
        onMapClick: this.handleMapClick,
        markers: this.state.markers,
        onMarkerRightClick: this.handleMarkerRightClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }) : _react2.default.createElement(_semanticUiReact.Loader, { active: true, inline: 'centered', size: 'massive', content: 'Loading map...', __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }));
    }
  }]);

  return RoomMap;
}(_react2.default.Component);

// export default RoomMap


exports.default = (0, _reactRedux.connect)(null, null)(RoomMap);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcm9vbU1hcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkNvb2tpZXMiLCJiaW5kQWN0aW9uQ3JlYXRvcnMiLCJpbml0U3RvcmUiLCJhZGRDb3VudCIsInNldFVzZXJuYW1lIiwiY29ubmVjdCIsIndpdGhHb29nbGVNYXAiLCJHb29nbGVNYXAiLCJNYXJrZXIiLCJ0cmFuc2xhdGUiLCJJMThuZXh0UHJvdmlkZXIiLCJzdGFydEkxOG4iLCJnZXRUcmFuc2xhdGlvbiIsIkxvYWRlciIsIkdldHRpbmdTdGFydGVkR29vZ2xlTWFwIiwicHJvcHMiLCJvbk1hcExvYWQiLCJjZW50ZXIiLCJvbk1hcENsaWNrIiwibWFya2VycyIsIm1hcCIsIm1hcmtlciIsIm9uTWFya2VyUmlnaHRDbGljayIsIlJvb21NYXAiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJtYXBXaWR0aCIsIndpZHRoIiwibWFwSGVpZ2h0IiwiaGVpZ2h0IiwiYWRkcmVzcyIsInBvc2l0aW9uIiwibGF0IiwibG5nIiwia2V5IiwiZGVmYXVsdEFuaW1hdGlvbiIsInBvc2l0aW9uX2luaXRpYWxpemVkIiwicHJvY2VzcyIsImJyb3dzZXIiLCJzZWxmIiwiZ2VvY29kZXIiLCJnb29nbGUiLCJtYXBzIiwiR2VvY29kZXIiLCJnZW9jb2RlIiwicmVzdWx0cyIsInN0YXR1cyIsIkdlb2NvZGVyU3RhdHVzIiwiT0siLCJwb3MiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwic2V0U3RhdGUiLCJwdXNoIiwiRGF0ZSIsIm5vdyIsImZvcmNlVXBkYXRlIiwiZ2V0Wm9vbSIsImhhbmRsZU1hcExvYWQiLCJoYW5kbGVNYXBDbGljayIsImhhbmRsZU1hcmtlclJpZ2h0Q2xpY2siLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUyxB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