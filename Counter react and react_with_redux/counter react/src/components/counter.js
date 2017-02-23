import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)

    this.state = { value: 0 }
  }
  onIncrement(){
    this.setState({
      value : this.state.value+1
    })
  }
  onDecrement(){
    this.setState({
      value : this.state.value-1
    })
  }
  render() {
    return (
      <p>
        Clicked: {this.state.value} times
        {' '}
        <button onClick={this.onIncrement}>
          +
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          -
        </button>
        {' '}

      </p>
    )
  }
}

export default Counter
