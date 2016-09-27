import $ from 'jquery';
import React from 'react';
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
      <div id="home-container" className="container">
        <div className="container">
          <div className="pull-sm-right">
              <ul className="nav nav-inline text-sm-right">
                <li className="nav-item">
                  <a className="nav-link graff" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active graff" href="/login">Login</a>
                </li>
              </ul>
          </div>
        </div>
        <div id="hero">
          <div className="jumbotron jumbotron-fluid row jumbo-bg">
            <div className="container">
              {/*<img src="images/IMG_7495.jpg"/>*/}
              <span className="title">phyll.IO</span>
              <p className="lead graff">Something about plants</p>
              <Search className="form-control form-control-lg" plants={ this.state.plants } fetchPlant={ this.state._fetchPlant }/>
            </div>
          </div>
        </div>
        <div className="container">
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
