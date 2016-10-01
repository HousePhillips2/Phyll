import React from 'react';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this.props.logout:', this.props.logout);
    return (
      <li className="nav-item">
        <a className="nav-link active graff" href="#" onClick={ this.props.logout }>Logout</a>
      </li>
    );
  }
}
