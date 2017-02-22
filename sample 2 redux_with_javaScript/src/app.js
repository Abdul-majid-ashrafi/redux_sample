import { createStore, combineReducers } from 'redux'
import { reducer, userReducer } from './reducers.js'


// const store = createStore(combineReducers({ reducer, userReducer }))
const store = createStore(combineReducers({ reducer, userReducer }) )

store.subscribe(() => {
    console.log("Updated", store.getState())
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