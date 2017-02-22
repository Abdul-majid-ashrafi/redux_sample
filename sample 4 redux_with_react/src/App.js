// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { Main } from './components/main.js'
// import { User } from './components/user.js'

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: "Majid"
//     }
//   }
//   changeUserName(newName) {
//     this.setState({
//       username: newName
//     })
//   }
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//         <Main changeUserName={this.changeUserName.bind(this)} />
//         <User username={this.state.username} />
//       </div>
//     );
//   }
// }

// export default App;















// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import logger from 'redux-logger'
// import { reducer, userReducer } from './reducers.js'



// export const reducer = (
//     state = {
//         result: 3,
//         lastValues: []
//     }, action) => {
//     switch (action.type) {
//         case "ADD":
//             state = {
//                 result: state.result + action.value,               //   this is muteable
//                 lastValues: [...state.lastValues, action.value]
//             }
//             // state.lastValues.push(action.value)
//             // state.result += action.value
//             break;
//         case "REM":
//             state = {
//                 result: state.result - action.value,               //   this is muteable
//                 lastValues: [...state.lastValues, action.value]
//             }
//             break;
//     }
//     return state
// }


// export const userReducer = (
//     state = {
//         name: "Majid ",
//         age: 24
//     }, action) => {
//     switch (action.type) {
//         case "Name":
//             state = {
//                 name: state.name + action.value,
//                 age: state.age
//             }
//             break;
//         case "Age":
//             state = {
//                 name: state.name,
//                 age: action.value
//             }
//             break;
//     }
//     return state
// }



// const myLogger = (store) => (next) => (action) => {
//     // console.log("action", action)
//     next(action)
// }
// const store = createStore(combineReducers({ reducer, userReducer }), {}, applyMiddleware(logger()))

// store.subscribe(() => {
//     // console.log("Updated", store.getState())
// })
// store.dispatch({
//     type: "ADD",
//     value: 100
// })
// store.dispatch({
//     type: "ADD",
//     value: 22
// })
// store.dispatch({
//     type: "REM",
//     value: 19
// })

// store.dispatch({
//     type: "Name",
//     value: 'Ashraf'
// })
// store.dispatch({
//     type: "Age",
//     value: 25
// })  