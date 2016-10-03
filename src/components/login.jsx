import React from 'react';
import Auth0Lock from 'auth0-lock';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <li className="nav-item">
        <a className="nav-link active graff" href="api/auth/login">Login</a>
      </li>
    );
  }
}
