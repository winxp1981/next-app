'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.setLocale = exports.setUsername = exports.addCount = exports.reducer = exports.actionTypes = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeInitialState = {
  username: '',
  locale: '',
  count: 100
};

var actionTypes = exports.actionTypes = {
  ADD: 'ADD',
  SET_USERNAME: 'SET_USERNAME',
  SET_LOCALE: 'SET_LOCALE'

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
    case actionTypes.SET_LOCALE:
      return (0, _assign2.default)({}, state, {
        locale: action.text
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

var setLocale = exports.setLocale = function setLocale(text) {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SET_LOCALE,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsInRodW5rTWlkZGxld2FyZSIsInN0b3JlSW5pdGlhbFN0YXRlIiwidXNlcm5hbWUiLCJsb2NhbGUiLCJjb3VudCIsImFjdGlvblR5cGVzIiwiQUREIiwiU0VUX1VTRVJOQU1FIiwiU0VUX0xPQ0FMRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0ZXh0IiwiYWRkQ291bnQiLCJkaXNwYXRjaCIsInNldFVzZXJuYW1lIiwic2V0TG9jYWxlIiwiaW5pdFN0b3JlIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQVMsQUFBYTs7QUFDdEIsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7QUFFUCxJQUFNO1lBQW9CLEFBQ2QsQUFDVjtVQUZ3QixBQUVoQixBQUNSO1NBSEYsQUFBMEIsQUFHakIsQUFJVDtBQVAwQixBQUN4Qjs7QUFNSyxJQUFNO09BQWMsQUFDcEIsQUFDTDtnQkFGeUIsQUFFWCxBQUNkO2NBQVksQUFHZDs7QUFOTyxBQUFvQixBQU8zQjtBQVAyQixBQUN6QixNQU1XLDRCQUFVLFNBQVYsQUFBVSxVQUF1QztNQUF0QyxBQUFzQyw0RUFBOUIsQUFBOEI7TUFBWCxBQUFXLG1CQUM1RDs7VUFBUSxPQUFSLEFBQWUsQUFDYjtTQUFLLFlBQUwsQUFBaUIsQUFDZjtBQUNBO21DQUFPLEFBQWMsSUFBZCxBQUFrQjtlQUNoQixNQUFBLEFBQU0sUUFEZixBQUFPLEFBQXlCLEFBQ1QsQUFFekI7QUFIa0MsQUFDOUIsT0FESztTQUdKLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7a0JBQ2IsT0FEWixBQUFPLEFBQXlCLEFBQ2IsQUFFckI7QUFIa0MsQUFDOUIsT0FESztTQUdKLFlBQUwsQUFBaUIsQUFDZjttQ0FBTyxBQUFjLElBQWQsQUFBa0I7Z0JBQ2YsT0FEVixBQUFPLEFBQXlCLEFBQ2YsQUFFbkI7QUFIa0MsQUFDOUIsT0FESztBQUdBO2FBZFgsQUFjVyxBQUFPLEFBRW5COztBQWpCTSxDQUFBOztBQW1CUCxBQUNBO0FBQU8sSUFBTSw4QkFBVyxTQUFYLEFBQVcsV0FBQTtTQUFNLG9CQUFZLEFBQ3hDO1dBQU8sU0FBUyxFQUFFLE1BQU0sWUFBeEIsQUFBTyxBQUFTLEFBQW9CLEFBQ3JDO0FBRnVCO0FBQWpCLEFBSVA7O0FBQU8sSUFBTSxvQ0FBYyxTQUFkLEFBQWMsWUFBQSxBQUFDLE1BQUQ7U0FBVSxvQkFBWSxBQUMvQzs7WUFFVSxZQURSLEFBQ29CLEFBQ2xCO1lBSEosQUFBTyxBQUNMLEFBSUg7QUFKRyxBQUNFLEtBRkc7QUFEa0I7QUFBcEIsQUFRUDs7QUFBTyxJQUFNLGdDQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsTUFBRDtTQUFVLG9CQUFZLEFBQzdDOztZQUVVLFlBRFIsQUFDb0IsQUFDbEI7WUFISixBQUFPLEFBQ0wsQUFJSDtBQUpHLEFBQ0UsS0FGRztBQURnQjtBQUFsQjtBQU9QLEFBVUE7Ozs7Ozs7Ozs7QUFBTyxJQUFNLGdDQUFZLFNBQVosQUFBWSxZQUFzQztNQUFyQyxBQUFxQyxtRkFBdEIsQUFBc0IsQUFDN0Q7O1NBQU8sd0JBQUEsQUFBWSxTQUFaLEFBQXFCLGNBQWMsaURBQTFDLEFBQU8sQUFBbUMsQUFBb0IsQUFBZ0IsQUFDL0U7QUFGTSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9tb3JyaXMvcHJvamVjdC9uZXh0anMifQ==