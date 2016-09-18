import {Link} from 'react-router';

export default class Layout extends React.Component {
  render(){
    return (
      <div>
        <div className='menu'>
          <ul>
            <li>
              <Link to='/addPlant'>Add My Plant</Link>
            </li>
            <li>
              <Link to='/myDashboard'>My Dashboard</Link>
            </li>
            <li>
              <Link to='/garden'>iGarden</Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
} 