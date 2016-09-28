import React from 'react';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link active graff" href="api/auth/login">Login</a>
      </li>
    )
  }
}