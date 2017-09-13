'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.setUsername = exports.addCount = exports.reducer = exports.actionTypes = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeInitialState = {
  username: '',
  count: 100
};

var actionTypes = exports.actionTypes = {
  ADD: 'ADD',
  SET_USERNAME: 'SET_USERNAME'

  // REDUCERS
};var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : storeInitialState;
  var action = arguments[1];

  switch (action.type) {
    case actionTypes.ADD:
      // merge two state 的概念
      return (0, _assign2.default)({}, state, {
        count: state.count + 2
      });
    case actionTypes.SET_USERNAME:
      return (0, _assign2.default)({}, state, {
        username: action.text
      });
    default:
      return state;
  }
};

// ACTIONS
var addCount = exports.addCount = function addCount() {
  return function (dispatch) {
    return dispatch({ type: actionTypes.ADD });
  };
};

var setUsername = exports.setUsername = function setUsername(text) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SET_USERNAME,
      text: text
    });
  };
};
/*
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800)
}
*/

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : storeInitialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsInN0b3JlSW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJjb3VudCIsImFjdGlvblR5cGVzIiwiQUREIiwiU0VUX1VTRVJOQU1FIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInRleHQiLCJhZGRDb3VudCIsImRpc3BhdGNoIiwic2V0VXNlcm5hbWUiLCJpbml0U3RvcmUiLCJpbml0aWFsU3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFhOztBQUN0QixBQUFTOztBQUNULEFBQU87Ozs7OztBQUVQLElBQU07WUFBb0IsQUFDZCxBQUNWO1NBRkYsQUFBMEIsQUFFakIsQUFJVDtBQU4wQixBQUN4Qjs7QUFLSyxJQUFNO09BQWMsQUFDcEIsQUFDTDtnQkFBYyxBQUdoQjs7QUFMTyxBQUFvQixBQU0zQjtBQU4yQixBQUN6QixNQUtXLDRCQUFVLFNBQVYsQUFBVSxVQUF1QztNQUF0QyxBQUFzQyw0RUFBOUIsQUFBOEI7TUFBWCxBQUFXLG1CQUM1RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFLLFlBQUwsQUFBaUIsQUFDZjtBQUNBO21DQUFPLEFBQWMsSUFBZCxBQUFrQjtlQUNoQixNQUFBLEFBQU0sUUFEZixBQUFPLEFBQXlCLEFBQ1QsQUFFdkI7QUFIZ0MsQUFDOUIsT0FESztTQUdGLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7a0JBQ2IsT0FEWixBQUFPLEFBQXlCLEFBQ2IsQUFFdkI7QUFIb0MsQUFDOUIsT0FESztBQUdGO2FBVlgsQUFVVyxBQUFPLEFBRW5COztBQWJNLENBQUE7O0FBZVAsQUFDQTtBQUFPLElBQU0sOEJBQVcsU0FBWCxBQUFXLFdBQUE7U0FBTSxvQkFBWSxBQUN4QztXQUFPLFNBQVMsRUFBRSxNQUFNLFlBQXhCLEFBQU8sQUFBUyxBQUFvQixBQUNyQztBQUZ1QjtBQUFqQixBQUlQOztBQUFPLElBQU0sb0NBQWMsU0FBZCxBQUFjLFlBQUEsQUFBQyxNQUFEO1NBQVUsb0JBQVksQUFDL0M7O1lBRVUsWUFEUixBQUNvQixBQUNsQjtZQUhKLEFBQU8sQUFDTCxBQUlIO0FBSkcsQUFDRSxLQUZHO0FBRGtCO0FBQXBCO0FBT1AsQUFVQTs7Ozs7Ozs7OztBQUFPLElBQU0sZ0NBQVksU0FBWixBQUFZLFlBQXNDO01BQXJDLEFBQXFDLG1GQUF0QixBQUFzQixBQUM3RDs7U0FBTyx3QkFBQSxBQUFZLFNBQVosQUFBcUIsY0FBYyxpREFBMUMsQUFBTyxBQUFtQyxBQUFvQixBQUFnQixBQUMvRTtBQUZNIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL21vcnJpcy9wcm9qZWN0L25leHRqcyJ9