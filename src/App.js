import React, { Component } from 'react';
import  Auth  from './Auth/Auth.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
  }
  login() {
    const auth = new Auth();
    auth.login();
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Posh Bot</h2>
        </div>
   <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default App;
