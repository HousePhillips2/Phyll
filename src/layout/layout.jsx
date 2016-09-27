import React from 'react';
import {Link} from 'react-router';
import SignIn from '../components/signIn.jsx';

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <nav className="nav nav-pills" style={{color: 'green'}}>
          <ul className="nav navbar-nav">
            <li className="nav-item active" key='current'>
              <a className="nav-link" href="#"><em>Phyll </em><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item" key='Add My Plant'>
              <Link className="nav-link" to='/addPlant' ><strong>Add My plant</strong></Link>
            </li>
            <li className="nav-item" key='My Dashboard'>
              <Link className="nav-link" to='/myDashboard'><strong>My Dashboard</strong></Link>
            </li>
            <li className="nav-item" key='iGarden'>
              <Link className="nav-link" to='/garden'><strong>iGarden</strong></Link>
            </li>
            <li className="nav-item" key='Conservatory'>
              <Link className="nav-link" to='/plantsLibrary'><strong>Conservatory</strong></Link>
            </li>
            <li className="nav-item" key='Sign In'>
              <strong className="nav-link"><SignIn /></strong>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
