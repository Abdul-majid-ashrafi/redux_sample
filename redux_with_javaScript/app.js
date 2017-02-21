import { createStore } from 'redux'
console.log(87879)

const initialState = {
    result: 3,
    lastValues: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state.result += action.value
            // console.log(state)
            break;
        case "REM":
            state = state - action.value
            break;
        // default: return state
    }
    return state
}
const store = createStore(reducer)

store.subscribe(() => {
    console.log("Updated", store.getState())
    // console.log("store", store)
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
    value: 22
})