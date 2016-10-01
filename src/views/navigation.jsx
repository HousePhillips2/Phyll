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
          <div className="pull-sm-right">
            <ul className="nav nav-inline text-sm-right"style={{padding: .2 + 'em'}}>
              <li className="nav-item">
                <a className="nav-link graff" href="#">About</a>
              </li>
              { this.props.loggedIn ?
                <Logout { ...this.props }/> :
                <Login /> }
            </ul>
            { this.props.loggedIn ? <UserInfo { ...this.props }/> : <div></div> }
          </div>
        </div>
      </div>
    );
  }

};
