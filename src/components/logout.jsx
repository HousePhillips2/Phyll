import React from 'react';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link active graff" href="#" onClick={ this.props.logout }>Logout</a>
      </li>
    );
  }
}
