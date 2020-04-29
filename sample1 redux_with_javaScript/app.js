import { createStore } from 'redux'

const initialState = {
    result: 3,
    lastValues: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state.result += action.value
            break;
        case "REM":
            state = state - action.value
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
    value: 22
})
