import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux'

import { Main } from './main.js'
import { User } from './user.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Main changeUserName={() => this.props.setName('khan')} />
        <User username={this.props.user.name} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    myReducer: state.myReducer,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: "Name",
        value: name
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);