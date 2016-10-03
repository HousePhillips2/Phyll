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
        <div className="column">
          <span className="title pull-sm-left text-nowrap"><i className="phyll-glyphs logo"></i>phyll.IO</span>
          <div className="pull-xs-right" style={{marginTop: 1 + 'rem'}}>
              <div className="btn-group graff">
                <span className="btn btn-secondary dropdown-toggle dropdown-menu-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{border: 'none'}}>
                  <UserInfo { ...this.props }/>
                </span>
                <div className="dropdown-menu dropdown-menu-right">
                  { this.props.loggedIn ?
                    <Logout { ...this.props }/> :
                    <Login /> }
                  <button className="dropdown-item" type="button">Add Plant</button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" type="button">About phyll.IO</button>
                  <button className="dropdown-item" type="button">Developer Journal</button>
                  <a href="https://github.com/cachilders/Phyll"><button className="dropdown-item" type="button">Check Out the Source</button></a>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

};
