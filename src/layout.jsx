import {Link} from 'react-router';

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <nav className="navbar navbar-light bg-faded" style={{color: 'green'}}>
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#"><em>Phyll </em><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/addPlant' ><strong>Add My Plant</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/myDashboard'><strong>My Dashboard</strong></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/garden'><strong>iGarden</strong></Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}
