import React from 'react';

export default class Journals extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="card">
        <div className="card-header">
          How we got here
        </div>
        <div className="card-block">
          <p className="card-text">Dev blog entries</p>
        </div>
      </div>
      
    );
  }
}
