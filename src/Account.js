import React from 'react';
import  Auth  from './Auth/Auth.js';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: ''};
    this.auth = new Auth();
  }

  getId = () => {
    this.setState( { user: this.auth.getId() });
  }
 
  componentDidMount() {
    if (!this.auth.isAuthenticated()) {
      this.auth.handleAuthentication();
    }
    this.getId();
  }
  render() {
    console.log(this.state)
    return (
      <div>
        you are logged in
        </div>
    )

  }

}
