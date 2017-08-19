import React from 'react';
import  Auth  from './Auth/Auth.js';
import axios from 'axios';
const baseUrl = 'http://localhost:5000';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', input: ''};
    this.auth = new Auth();
  }

  getId = () => {
    this.setState( { user: this.auth.getId() });
  }

  handleClick = () => {
    axios.post(`${baseUrl}/request`, { request: this.state.input, id: this.state.user })
      .then((data) => {
        console.log(data.data);
      })
  }
  
  stop = () => {
    axios.post(`${baseUrl}/stop`, { id: this.state.user })
      .then((data) => {
        console.log(data.data);
      })
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ input: event.target.value})
  }
 
  componentDidMount() {
    if (!this.auth.isAuthenticated()) {
      this.auth.handleAuthentication();
    }
    this.getId();
  }

  render() {
    return (
      <div>
         <h3> submit request:  </h3>
        <textarea value={this.state.input} onChange={this.handleChange} name="" id="" cols="30" rows="10"></textarea>
      <br />
        <button onClick={ this.handleClick }> submit</button>
        <button onClick={ this.stop }> stop</button>
        
      </div>
    )

  }

}
