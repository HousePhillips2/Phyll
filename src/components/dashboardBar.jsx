import { ajax } from 'jquery';
import React from 'react';
import Charts from './charts.jsx';


export default class DashBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return(
      <div className="card">
        <div className="card-block">
          <div className="media">
            {/*<a className="media-left"><img className="img-rounded" style={ {width: '125px', height: '125px'} } src={ user.img }/></a>*/}
            <div className="media-body">
              <Charts />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
