export const reducer = (
  state = {
    result: 3,
    lastValues: []
  }, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        result: state.result + action.value,               //   this is muteable
        lastValues: [...state.lastValues, action.value]
      }
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


export const userReducer = (
  state = {
    name: "Majid ",
    age: 24
  }, action) => {
  switch (action.type) {
    case "Name":
      state = {
        // name: state.name + action.value,
        name: action.value,
        age: state.age
      }
      break;
    case "Age":
      state = {
        name: state.name,
        age: action.value
      }
      break;
  }
  return state
}
