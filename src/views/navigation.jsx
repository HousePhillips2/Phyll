import React, { Component } from 'react';

import Login from '../components/login.jsx';
import Logout from '../components/logout.jsx';
import UserInfo from '../components/userInfo.jsx';


export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row header">
        <div className="col-xs-12">
          <span className="title pull-sm-left text-nowrap"><i className="phyll-glyphs logo"></i>phyll.IO</span>
          <div className="pull-sm-right" >
              <div className="btn-group graff">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{border: 'none'}}>
                  { this.props.loggedIn ? <UserInfo { ...this.props }/> : <div></div> }
                </button>
                <div className="dropdown-menu dropdown-menu-right">
                  { this.props.loggedIn ?
                    <Logout { ...this.props }/> :
                    <Login /> }
                  <button className="dropdown-item" type="button">Add Plant</button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" type="button">About phyll.IO</button>
                  <button className="dropdown-item" type="button">Developer Journal</button>
                  <button className="dropdown-item" type="button">Check Out the Source</button>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }

};
