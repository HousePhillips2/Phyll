import ajax from 'jquery';

import Users from '../components/users.jsx';
import Search from '../components/searchBar.jsx';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = { admin: [], records: [] };
  }

  componentWillMount() {
    this._getRecords();
    this._getAdmin();
  }

  render() {
    return(
      <div id="home-container">
        <nav>
          <div>
            About
          </div>
          {/* <Router>
            <Route path='/about' component={ home }/>
          </Router>
          <div>
            Login
          </div>
          <Router>
            <Route path='/about' component={ home }/>
          </Router> */}
        </nav>
        <div>
          <div className={ 'home-banner' }>
            <Search records={ this.state.records }/>
            <img src="http://ghk.h-cdn.co/assets/15/33/980x490/landscape-1439490128-plants.jpg"/>
          </div>
        </div>
        <div>
          <Users users={ this.state.admin }/>
        </div>
      </div>
    );
  }

  _getRecords() {
    ajax({
      method: 'GET',
      url: '/api/admin',
      success: (admin) => {
        this.setState({ admin });
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }

  _getAdmin() {
    ajax({
      method: 'GET',
      url: '/api/admin',
      success: (admin) => {
        this.setState({ admin });
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }

}