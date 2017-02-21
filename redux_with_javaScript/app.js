import { createStore } from 'redux'
// FIRST EXAMPLE

// const initialState = {
//     result: 3,
//     lastValues: []
// }
// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD":
//             state.result += action.value
//             break;
//         case "REM":
//             state = state - action.value
//             break;
//     }
//     return state
// }
// const store = createStore(reducer)

// store.subscribe(() => {
//     console.log("Updated", store.getState())
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
//     value: 22
// })





// SECOND EXAMPLE

const initialState = {
    result: 3,
    lastValues: [],
    name: "Majid"
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result: state.result + action.value,               //   this is muteable
                lastValues: [...state.lastValues, action.value]
            }
            // state.lastValues.push(action.value)
            // state.result += action.value
            break;
        case "REM":
            state = {
                result: state.result - action.value,               //   this is muteable
                lastValues: [...state.lastValues, action.value]
            }
            break;
    }
    return state
}
const store = createStore(reducer)

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