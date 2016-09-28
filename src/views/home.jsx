import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import Users from '../components/users.jsx';
import Search from '../components/searchBar.jsx';
import PlantFacts from '../components/plantFacts.jsx';
import UserInfo from '../components/userInfo.jsx';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      admin: [],
      plants: [],
      _fetchPlant: this._fetchPlant,
      isLoggedIn: false,
      userName:'',
      userImg:''
    };
  }

  componentWillMount() {
    this._getPlants();
    this._getAdmin();
    this._getUser();
  }

  render() {
    console.log(this.state.isLoggedIn,'loggedin?')
    return(
      <div id="home-container" className="container">
        <div className="container">
          <span className="title pull-sm-left" style={{marginLeft: -.5 + 'em'}}><i className="phyll-glyphs logo"></i>phyll.IO</span>
          <div className="pull-sm-right">
              <ul className="nav nav-inline text-sm-right"style={{padding: .2 + 'em'}}>
                <li className="nav-item">
                  <a className="nav-link graff" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active graff" href="/api/auth/login">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active graff" href="/api/auth/logout">Logout</a>
                </li>
              </ul>
              <UserInfo userName={this.state.userName} userImg={this.state.userImg}/>
          </div>
        </div>
        <div id="hero">
          <div className="jumbotron jumbotron-fluid row jumbo-bg">
            <div className="container">
              {/*<img src="images/IMG_7495.jpg"/>*/}
              
              <Search className="form-control form-control-lg" plants={ this.state.plants } fetchPlant={ this.state._fetchPlant } dataToggle="modal" dataTarget="#plantModal"/>
              
            </div>
          </div>
        </div>
        <div className="modal fade" id="plantModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel3" aria-hidden="true">
          <div className="modal-dialog " role="document">
            <div className="modal-content" id="plantFact">
<<<<<<< f91b96eaf31c2958c2513f24d1784cf6ac3feed5

=======
>>>>>>> [feature] Add logo via custom glyph font
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
          render(
            <PlantFacts plantFacts={plantFacts[0]} />,
            document.getElementById('plantFact')
          );
        }
      }
    });
  }

  _getUser() {
    $.ajax({
      method: 'GET',
      url: 'api/auth/loggedin',
      success: (userInfo) => {
        if(userInfo){
          this.setState({userName: userInfo.name});
          this.setState({userImg: userInfo.img});
          this.setState({isLoggedIn:!this.state.isLoggedIn})
        }
      },
      error: (err) => {
        throw new Error(err);
      }
    });
  }

}
