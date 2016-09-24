import $ from 'jquery';

import Users from '../components/users.jsx';
import Search from '../components/searchBar.jsx';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      admin: [],
      plants: [],
      _fetchPlant: this._fetchPlant
    };
  }

  componentWillMount() {
    this._getPlants();
    this._getAdmin();
  }

  render() {
    return(
      <div id="home-container">
        <nav>
          <li>
            About
          </li>
          <li>
            Login
          </li>
        </nav>
        <div>
          <div className={ 'home-banner' }>
            <Search plants={ this.state.plants } fetchPlant={ this.state._fetchPlant }/>
            <img src="http://ghk.h-cdn.co/assets/15/33/980x490/landscape-1439490128-plants.jpg"/>
          </div>
        </div>
        <div>
          <Users users={ this.state.admin }/>
        </div>
      </div>
    );
  }

  _getPlants() {
    $.ajax({
      method: 'GET',
      url: 'api/plantFacts',
      success: (plants) => {
        this.setState({ plants });
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }

  _getAdmin() {
    $.ajax({
      method: 'GET',
      url: 'api/admin',
      success: (admin) => {
        this.setState({ admin });
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }

  _fetchPlant(plant){
    $.ajax({
      method: 'POST',
      url: 'api/plantFacts',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({ plant:plant }),
      success: (plantFacts) => {
        if(plantFacts.length!==0){
          this.setState({plantFacts:plantFacts[0]});
        }
      }
    });
  }

}
