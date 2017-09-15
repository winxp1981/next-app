'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _universalCookie = require('universal-cookie');

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _redux = require('redux');

var _store = require('../store');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _reactGoogleMaps = require('react-google-maps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/pages/stuff.js?entry';


// defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//defaultCenter={{ lat: parseFloat(props.lat), lng: parseFloat(props.lng) }}

var GettingStartedGoogleMap = (0, _reactGoogleMaps.withGoogleMap)(function (props) {
  return _react2.default.createElement(_reactGoogleMaps.GoogleMap, {
    ref: props.onMapLoad,
    defaultZoom: 17,
    defaultCenter: props.center,
    onClick: props.onMapClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.markers.map(function (marker) {
    return _react2.default.createElement(_reactGoogleMaps.Marker, (0, _extends3.default)({}, marker, {
      onRightClick: function onRightClick() {
        return props.onMarkerRightClick(marker);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }));
  }));
});

var Stuff = function (_React$Component) {
  (0, _inherits3.default)(Stuff, _React$Component);

  function Stuff(props) {
    (0, _classCallCheck3.default)(this, Stuff);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Stuff.__proto__ || (0, _getPrototypeOf2.default)(Stuff)).call(this, props));

    _this.state = {
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

    console.log('hello Stuff');
    return _this;
  }

  (0, _createClass3.default)(Stuff, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (process.browser) {
        console.log('hello Stuff client');
        var self = this;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log("getCurrentPosition OK (" + pos.lat + ", " + pos.lng + ")");
            //map.setCenter(pos);
            self.setState({
              center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude
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

            console.log("getState OK (" + self.state.center.lat + ", " + self.state.center.lng + ")");
            self.forceUpdate();
          }, function () {
            //handleLocationError(true, infoWindow, map.getCenter());
            console.log("getCurrentPosition error");
          });
        } else {
          // Browser doesn't support Geolocation
          console.log("Browser doesn't support Geolocation");
        }
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
      return _react2.default.createElement(_layout2.default, { title: 'Welcome to InstRent', __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('div', { style: { height: '700px' }, 'data-jsx': 5860229,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, this.state.position_initialized ? _react2.default.createElement(GettingStartedGoogleMap, {
        containerElement: _react2.default.createElement('div', { style: { height: '700px' }, 'data-jsx': 5860229,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }),
        mapElement: _react2.default.createElement('div', { style: { height: '690px' }, 'data-jsx': 5860229,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        }),
        center: this.state.center,
        onMapLoad: this.handleMapLoad,
        onMapClick: this.handleMapClick,
        markers: this.state.markers,
        onMarkerRightClick: this.handleMarkerRightClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }) : _react2.default.createElement('h1', {
        'data-jsx': 5860229,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, 'loading ')), _react2.default.createElement(_style2.default, {
        styleId: 5860229,
        css: '\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0dWZmLmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRJa0IiLCJmaWxlIjoicGFnZXMvc3R1ZmYuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgQ29va2llcyBmcm9tICd1bml2ZXJzYWwtY29va2llJztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgaW5pdFN0b3JlLCBhZGRDb3VudCwgc2V0VXNlcm5hbWUgfSBmcm9tICcuLi9zdG9yZSdcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJ1xuaW1wb3J0IHsgd2l0aEdvb2dsZU1hcCwgR29vZ2xlTWFwLCBNYXJrZXIgfSBmcm9tIFwicmVhY3QtZ29vZ2xlLW1hcHNcIjtcblxuLy8gZGVmYXVsdENlbnRlcj17eyBsYXQ6IC0yNS4zNjM4ODIsIGxuZzogMTMxLjA0NDkyMiB9fVxuLy9kZWZhdWx0Q2VudGVyPXt7IGxhdDogcGFyc2VGbG9hdChwcm9wcy5sYXQpLCBsbmc6IHBhcnNlRmxvYXQocHJvcHMubG5nKSB9fVxuXG5jb25zdCBHZXR0aW5nU3RhcnRlZEdvb2dsZU1hcCA9IHdpdGhHb29nbGVNYXAocHJvcHMgPT4gKFxuICA8R29vZ2xlTWFwXG4gICAgcmVmPXtwcm9wcy5vbk1hcExvYWR9XG4gICAgZGVmYXVsdFpvb209ezE3fVxuICAgIGRlZmF1bHRDZW50ZXI9e3Byb3BzLmNlbnRlcn1cbiAgICBvbkNsaWNrPXtwcm9wcy5vbk1hcENsaWNrfVxuICA+XG4gIHtwcm9wcy5tYXJrZXJzLm1hcChtYXJrZXIgPT4gKFxuICAgIDxNYXJrZXJcbiAgICAgIHsuLi5tYXJrZXJ9XG4gICAgICBvblJpZ2h0Q2xpY2s9eygpID0+IHByb3BzLm9uTWFya2VyUmlnaHRDbGljayhtYXJrZXIpfVxuICAgIC8+XG4gICkpfVxuICA8L0dvb2dsZU1hcD5cbikpO1xuXG5jbGFzcyBTdHVmZiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbyBTdHVmZicpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHJlcSwgc3RvcmUgfSkgeyAgLy8gb25seSBzdXBwb3J0IGluIHNlcnZlciBzaWRlIGlmIHRoZXJlIGlzIHJlcSBpbiBwYXJhbWV0ZXJcbiAgICBjb25zdCBpbml0UHJvcHMgPSB7fTtcbiAgICByZXR1cm4gaW5pdFByb3BzO1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgbWFya2VyczogW3tcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIGxhdDogLTI1LjM2Mzg4MixcbiAgICAgICAgbG5nOiAxMzEuMDQ0OTIyLFxuICAgICAgfSxcbiAgICAgIGtleTogYFRhaXdhbmAsXG4gICAgICBkZWZhdWx0QW5pbWF0aW9uOiAyLFxuICAgIH1dLFxuXG4gICAgcG9zaXRpb25faW5pdGlhbGl6ZWQ6IGZhbHNlLFxuICAgIGNlbnRlcjogbnVsbCxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygnaGVsbG8gU3R1ZmYgY2xpZW50Jyk7XG4gICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24ocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgICBsYXQ6IHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRDdXJyZW50UG9zaXRpb24gT0sgKFwiICsgcG9zLmxhdCArIFwiLCBcIiArIHBvcy5sbmcgKyBcIilcIik7XG4gICAgICAgIC8vbWFwLnNldENlbnRlcihwb3MpO1xuICAgICAgICBzZWxmLnNldFN0YXRlKHtcbiAgICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICAgICAgbG5nOiBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBwb3NpdGlvbl9pbml0aWFsaXplZDogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHttYXJrZXJzfSA9IHNlbGYuc3RhdGU7XG4gICAgICAgIG1hcmtlcnMucHVzaCAoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDpwb3MubGF0LCBsbmc6cG9zLmxuZ30sXG4gICAgICAgICAgICAgIGRlZmF1bHRBbmltYXRpb246IDIsXG4gICAgICAgICAgICAgIGtleTogRGF0ZS5ub3coKSwvLyBBZGQgYSBrZXkgcHJvcGVydHkgZm9yOiBodHRwOi8vZmIubWUvcmVhY3Qtd2FybmluZy1rZXlzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICk7XG5cbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7IG1hcmtlcnMgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRTdGF0ZSBPSyAoXCIgKyBzZWxmLnN0YXRlLmNlbnRlci5sYXQgKyBcIiwgXCIgKyBzZWxmLnN0YXRlLmNlbnRlci5sbmcgKyBcIilcIik7XG4gICAgICAgIHNlbGYuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAvL2hhbmRsZUxvY2F0aW9uRXJyb3IodHJ1ZSwgaW5mb1dpbmRvdywgbWFwLmdldENlbnRlcigpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRDdXJyZW50UG9zaXRpb24gZXJyb3JcIik7XG4gICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEdlb2xvY2F0aW9uXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgR2VvbG9jYXRpb25cIik7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgIC8qXG4gICAgdmFyIHBvcyA9IHtcbiAgICAgIGxhdDogLTI1LjM2Mzg4MixcbiAgICAgIGxuZzogMTMxLjA0NDkyMlxuICAgIH07XG4gICAgKi9cbiAgICAvL2luaXRQcm9wcy5wb3MgPSBwb3M7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlTWFwTG9hZChtYXApIHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRsZU1hcExvYWRcIik7XG4gICAvLyAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcihtYXAsICdyZXNpemUnKTtcbiAgICBpZiAobWFwKSB7XG4gICAgIGNvbnNvbGUubG9nKG1hcC5nZXRab29tKCkpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZU1hcENsaWNrKG1hcCkge1xuICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTWFwQ2xpY2tcIik7XG4gIH1cbiAgaGFuZGxlTWFya2VyUmlnaHRDbGljaygpIHt9XG5cbiAgcmVuZGVyICgpIHtcbiAgLy8gIGNvbnNvbGUubG9nKFwicmVuZGVyIE1BUCAoXCIgKyB0aGlzLnN0YXRlLmNlbnRlci5sYXQgKyBcIiwgXCIgKyB0aGlzLnN0YXRlLmNlbnRlci5sbmcgKyBcIilcIik7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdGl0bGUgPSBcIldlbGNvbWUgdG8gSW5zdFJlbnRcIj5cbiAgICAgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IGA3MDBweGB9fT5cbiAgICAgIHsgdGhpcy5zdGF0ZS5wb3NpdGlvbl9pbml0aWFsaXplZCA/IChcbiAgICAgICAgPEdldHRpbmdTdGFydGVkR29vZ2xlTWFwXG4gICAgICAgICAgY29udGFpbmVyRWxlbWVudD17XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGhlaWdodDogYDcwMHB4YCB9fSAvPlxuICAgICAgICAgIH1cbiAgICAgICAgICBtYXBFbGVtZW50PXtcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiBgNjkwcHhgIH19IC8+XG4gICAgICAgICAgfVxuICAgICAgICAgIGNlbnRlcj17dGhpcy5zdGF0ZS5jZW50ZXJ9XG4gICAgICAgICAgb25NYXBMb2FkPXt0aGlzLmhhbmRsZU1hcExvYWR9XG4gICAgICAgICAgb25NYXBDbGljaz17dGhpcy5oYW5kbGVNYXBDbGlja31cbiAgICAgICAgICBtYXJrZXJzPXt0aGlzLnN0YXRlLm1hcmtlcnN9XG4gICAgICAgICAgb25NYXJrZXJSaWdodENsaWNrPXt0aGlzLmhhbmRsZU1hcmtlclJpZ2h0Q2xpY2t9XG4gICAgICAgIC8+XG4gICAgICApIDogKDxoMT5sb2FkaW5nIDwvaDE+KSB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcblxuYH08L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB1c2VybmFtZTogc3RhdGUudXNlcm5hbWUsXG4gICAgY291bnQ6IHN0YXRlLmNvdW50XG4gIH1cbn1cbi8vIGV4cG9ydCBkZWZhdWx0IFN0dWZmXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLCBudWxsLCBudWxsKShTdHVmZilcbiJdfQ== */\n/*@ sourceURL=pages/stuff.js?entry */'
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
        var req = _ref.req,
            store = _ref.store;
        var initProps;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // only support in server side if there is req in parameter
                initProps = {};
                return _context.abrupt('return', initProps);

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Stuff;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    count: state.count
  };
};
// export default Stuff
exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, null)(Stuff);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3N0dWZmLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ29va2llcyIsImJpbmRBY3Rpb25DcmVhdG9ycyIsImluaXRTdG9yZSIsImFkZENvdW50Iiwic2V0VXNlcm5hbWUiLCJ3aXRoUmVkdXgiLCJ3aXRoR29vZ2xlTWFwIiwiR29vZ2xlTWFwIiwiTWFya2VyIiwiR2V0dGluZ1N0YXJ0ZWRHb29nbGVNYXAiLCJwcm9wcyIsIm9uTWFwTG9hZCIsImNlbnRlciIsIm9uTWFwQ2xpY2siLCJtYXJrZXJzIiwibWFwIiwibWFya2VyIiwib25NYXJrZXJSaWdodENsaWNrIiwiU3R1ZmYiLCJzdGF0ZSIsInBvc2l0aW9uIiwibGF0IiwibG5nIiwia2V5IiwiZGVmYXVsdEFuaW1hdGlvbiIsInBvc2l0aW9uX2luaXRpYWxpemVkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJicm93c2VyIiwic2VsZiIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwicG9zIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRTdGF0ZSIsInB1c2giLCJEYXRlIiwibm93IiwiZm9yY2VVcGRhdGUiLCJnZXRab29tIiwiaGVpZ2h0IiwiaGFuZGxlTWFwTG9hZCIsImhhbmRsZU1hcENsaWNrIiwiaGFuZGxlTWFya2VyUmlnaHRDbGljayIsInJlcSIsInN0b3JlIiwiaW5pdFByb3BzIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwidXNlcm5hbWUiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFTLEFBQVcsQUFBVTs7QUFDOUIsQUFBTzs7OztBQUNQLEFBQVMsQUFBZSxBQUFXOzs7Ozs7O0FBRW5DO0FBQ0E7O0FBRUEsSUFBTSw4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a0JBQ0EsY0FBQSxTQUFLLE9BQU8sRUFBQyxRQUFiLEFBQVksdUJBQVo7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtjQUNFLEFBQUssTUFBTCxBQUFXLHFEQUNYLEFBQUM7aUVBRVEsT0FBTyxFQUFFLFFBQWQsQUFBWSx1QkFBWjs7c0JBQUE7d0JBRkosQUFFSSxBQUVGO0FBRkU7U0FBQTsyREFHSyxPQUFPLEVBQUUsUUFBZCxBQUFZLHVCQUFaOztzQkFBQTt3QkFMSixBQUtJLEFBRUY7QUFGRTtTQUFBO2dCQUVNLEtBQUEsQUFBSyxNQVBmLEFBT3FCLEFBQ25CO21CQUFXLEtBUmIsQUFRa0IsQUFDaEI7b0JBQVksS0FUZCxBQVNtQixBQUNqQjtpQkFBUyxLQUFBLEFBQUssTUFWaEIsQUFVc0IsQUFDcEI7NEJBQW9CLEtBWHRCLEFBVzJCOztvQkFYM0I7c0JBREEsQUFDQTtBQUFBO0FBQ0UsT0FERixvQkFhRyxjQUFBO29CQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsT0FBQSxFQWhCTCxBQUNBLEFBZUs7aUJBaEJMO2FBREYsQUFDRSxBQXVCSDtBQXZCRzs7Ozs7O1lBekYyQixBLFdBQUEsQTtZQUFLLEEsYSxBQUFBOzs7OzttQkFBWTtBQUN4QztBLDRCQUFZLEE7aURBQ1gsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQVJTLGdCQUFNLEE7O0FBeUgxQixJQUFNLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFDLE9BQVUsQUFDakM7O2NBQ1ksTUFETCxBQUNXLEFBQ2hCO1dBQU8sTUFGVCxBQUFPLEFBRVEsQUFFaEI7QUFKUSxBQUNMO0FBRko7QUFNQSxBQUNBO2tCQUFlLEFBQVUsa0RBQVYsQUFBcUIsTUFBckIsQUFBMkIsTUFBMUMsQUFBZSxBQUFpQyIsImZpbGUiOiJzdHVmZi5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==