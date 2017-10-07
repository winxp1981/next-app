'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/morris/project/nextjs/components/externallink.js';


var ExternalLink = function ExternalLink(_ref) {
  var route = _ref.route,
      _ref$params = _ref.params,
      params = _ref$params === undefined ? {} : _ref$params,
      otherProps = (0, _objectWithoutProperties3.default)(_ref, ['route', 'params']);

  var path = _routes2.default.findByName(route).getAs(params);
  return _react2.default.createElement('a', (0, _extends3.default)({ href: path }, otherProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

ExternalLink.propTypes = {
  route: _propTypes2.default.string,
  params: _propTypes2.default.object
};

exports.default = ExternalLink;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZXh0ZXJuYWxsaW5rLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwicm91dGVyIiwiRXh0ZXJuYWxMaW5rIiwicm91dGUiLCJwYXJhbXMiLCJvdGhlclByb3BzIiwicGF0aCIsImZpbmRCeU5hbWUiLCJnZXRBcyIsInByb3BUeXBlcyIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sZUFBZSxTQUFmLEFBQWUsbUJBQTJDO01BQXhDLEFBQXdDLGFBQXhDLEFBQXdDO3lCQUFqQyxBQUFpQztNQUFqQyxBQUFpQyxxQ0FBeEIsQUFBd0IsS0FBQTtNQUFqQixBQUFpQixvRUFDOUQ7O01BQU0sT0FBTyxpQkFBQSxBQUFPLFdBQVAsQUFBa0IsT0FBbEIsQUFBeUIsTUFBdEMsQUFBYSxBQUErQixBQUM1QztxRUFDSyxNQUFILEFBQVMsUUFBVCxBQUFtQjs7Z0JBQW5CO2tCQURGLEFBQ0UsQUFFSDtBQUZHO0FBQUEsSUFBQTtBQUhKOztBQU9BLGFBQUEsQUFBYTtTQUNKLG9CQURnQixBQUNOLEFBQ2pCO1VBQVEsb0JBRlYsQUFBeUIsQUFFTCxBQUdwQjtBQUx5QixBQUN2Qjs7a0JBSUYsQUFBZSIsImZpbGUiOiJleHRlcm5hbGxpbmsuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbW9ycmlzL3Byb2plY3QvbmV4dGpzIn0=