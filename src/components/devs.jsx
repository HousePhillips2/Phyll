import React from 'react';

export default class Devs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="card">
        <div className="card-header">
          Who we are
        </div>
        <div className="card-block">
          <p className="card-text">Team bios</p>
        </div>
      </div>
      
    );
  }
}
