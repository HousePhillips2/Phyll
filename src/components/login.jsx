import React from 'react';
import Auth0Lock from 'auth0-lock';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <a href="api/auth/login"><button className="dropdown-item" type="button">Login</button></a>
    );
  }
}
