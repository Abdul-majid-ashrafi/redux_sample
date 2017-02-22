import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { reducer, userReducer } from './reducers.js'


const myLogger = (store) => (next) => (action) => {
    // console.log("action", action)
    next(action)
}
const store = createStore(combineReducers({ reducer, userReducer }), {}, applyMiddleware(logger()))

store.subscribe(() => {
    // console.log("Updated", store.getState())
})
store.dispatch({
    type: "ADD",
    value: 100
})
store.dispatch({
    type: "ADD",
    value: 22
})
store.dispatch({
    type: "REM",
    value: 19
})

store.dispatch({
    type: "Name",
    value: 'Ashraf'
})
store.dispatch({
    type: "Age",
    value: 25
})  