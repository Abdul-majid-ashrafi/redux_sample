import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/app';
import './index.css';





import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { reducer, userReducer } from './reducers.js'

const myLogger = (store) => (next) => (action) => {
  // console.log("action", action)
  next(action)
}
const store = createStore(combineReducers({ myReducer: reducer, user: userReducer }),
  {},
  applyMiddleware(logger())
)

// store.subscribe(() => {
  // console.log("Updated", store.getState())
// })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
