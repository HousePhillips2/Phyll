import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(

      <div className="footer row">
        <div className="content-top column container-fluid">
          <div className="card">
            <div className="card-block text-success">
              Footer content.
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
