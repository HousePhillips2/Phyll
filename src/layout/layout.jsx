import React from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <nav className="nav nav-pills" style={{color: 'green'}}>
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#"><em>Phyll </em><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/addPlant' ><strong>Add My plant</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/myDashboard'><strong>My Dashboard</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/garden'><strong>iGarden</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/plantsLibrary'><strong>Conservatory</strong></Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
