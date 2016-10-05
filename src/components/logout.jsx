import React from 'react';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="dropdown-item" type="button" onClick={ this.props.logout }>Logout</button>
    );
  }
}
