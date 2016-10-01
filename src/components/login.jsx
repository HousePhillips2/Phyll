import React from 'react';
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