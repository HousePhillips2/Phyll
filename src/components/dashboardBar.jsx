import { ajax } from 'jquery';
import React from 'react';
import Charts from './charts.jsx';


export default class DashBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.loggedInUser;
    return(
      <div id="dashBar" className="row content">
        <div className="content-top column container-fluid">
          <div className="card">
            <div className="card-header">
              { user.name }
            </div>
            <div className="card-block">
              <div className="media">
                <a className="media-left"><img className="img-rounded" style={ {width: '125px', height: '125px'} } src={ user.img }/></a>
                <div className="media-body">
                  <Charts />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
