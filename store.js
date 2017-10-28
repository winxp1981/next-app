import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const storeInitialState = {
  username: '',
  avatar: '',
  locale: '',
  count: 100
}


export const actionTypes = {
  ADD: 'ADD',
  SET_USERNAME: 'SET_USERNAME',
  SET_AVATAR: 'SET_AVATAR',
  SET_LOCALE: 'SET_LOCALE',
}

// REDUCERS
export const reducer = (state = storeInitialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      // merge two state 的概念
      return Object.assign({}, state, {
        count: state.count + 2
      })
    case actionTypes.SET_USERNAME:
      return Object.assign({}, state, {
        username: action.text
      })
      case actionTypes.SET_AVATAR:
        return Object.assign({}, state, {
          avatar: action.text
        })
    case actionTypes.SET_LOCALE:
      return Object.assign({}, state, {
        locale: action.text
      })
    default: return state
  }
}

// ACTIONS
export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const setUsername = (text) => dispatch => {
  return dispatch(
    {
      type: actionTypes.SET_USERNAME,
      text
    })
}

export const setAvatar = (text) => dispatch => {
  return dispatch(
    {
      type: actionTypes.SET_AVATAR,
      text
    })
}

export const setLocale = (text) => dispatch => {
  return dispatch(
    {
      type: actionTypes.SET_LOCALE,
      text
    })
}
/*
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800)
}
*/

export const initStore = (initialState = storeInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
