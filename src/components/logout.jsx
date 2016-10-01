import React from 'react';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('this.props.logout:', this.props.logout);
    return (
      <button className="dropdown-item" type="button" onClick={ this.props.logout }>Logout</button>
    );
  }
}
