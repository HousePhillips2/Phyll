import $          from 'jquery';
import React      from 'react';
import { render } from 'react-dom';
import {Link}     from 'react-router';

import Users      from '../components/users.jsx';
import Search     from '../components/searchBar.jsx';
import PlantFacts from '../components/plantFacts.jsx';
import UserInfo   from '../components/userInfo.jsx';
import Login      from '../components/login.jsx';
import Logout     from '../components/logout.jsx';
import Map        from '../components/map/index.jsx';
import Chatbot    from '../components/chatbot.jsx';
<<<<<<< a9671ad0ffd8e36de79c424f6526dd07e78305f6
import DashBar    from '../components/dashboardBar.jsx';
import AddPlant   from '../components/addplant.jsx';
=======
import AddPlant   from '../components/addPlant.jsx';
>>>>>>> [style] Add health feedback
import DashBar    from '../components/dashboardBar.jsx';

require('../stylesheets/main.scss');
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      admin: [],
      plants: [],
      _fetchPlant: this._fetchPlant.bind(this),
      isLoggedIn: false,
      loggedInUser: '',
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

    let dashboard = this.state.isLoggedIn ? <DashBar loggedInUser={ this.state.loggedInUser }/> : <div id="dashBar"></div>;
    let loginToggle = this.state.isLoggedIn ? <Logout logout={this._logout.bind(this)}/> : <Login />;

    return(
      <div className="container-fluid">
        <div className="row header">
          <div className="column">
            <span className="title pull-sm-left text-nowrap"><i className="phyll-glyphs logo"></i>phyll.IO</span>
            <div className="pull-sm-right" style={{marginTop: 1 + 'rem'}}>
                <div className="btn-group graff">
                  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{border: 'none'}}>
                    <UserInfo userName={this.state.userName} userImg={this.state.userImg} isLoggedIn={this.state.isLoggedIn}/>
                  </button>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Login />
                    <Logout logout={this._logout.bind(this)}/>
                    <button className="dropdown-item" type="button">Add Plant</button>
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" type="button">About phyll.IO</button>
                    <button className="dropdown-item" type="button">Developer Journal</button>
                    <button className="dropdown-item" type="button">Check Out the Source</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="row search">
          <div className="column jumbotron jumbo-bg">
<<<<<<< a9671ad0ffd8e36de79c424f6526dd07e78305f6
          <div className="col-xs-12 jumbotron jumbo-bg">
=======
>>>>>>> [style] Add health feedback
            <Search className="form-control form-control-lg" plants={ this.state.plants } fetchPlant={ this.state._fetchPlant } dataToggle="modal" dataTarget="#plantModal"/>
          </div>
        </div>
        <div className="row content" id="plantModal" tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="content-top column container-fluid" role="document">
            <div className="card">
              <div className="card-header">
                  Stuff about selected plant (TODO: Hide this)
                </div>
                <div className="card-block">
                  <div className="modal-content" id="plantFact"></div>
                </div>
              </div>
            </div>
          </div>
        <div className="row content">
          <div className="content-top column container-fluid" role="document">
            <div id="plantModal" tabIndex="-1" role="dialog" aria-hidden="true">
              <div id="plantFact"></div>
            </div>
          </div>
        </div>
        { dashboard }
        <div className="row content">
          <div className="content-2 col-lg-7 push-lg-5 container-fluid">
          <div className="content-top column container-fluid">
            <div className="card">
              <div className="card-header">
<<<<<<< da7c099bb5eaf5ccdc2a6f3b7b62cb8fd88fd58b
                  Add a new plant to your collection (TODO: Hide this and fix the thing)
                </div>
                <div className="card-block">
                  <AddPlant />
                </div>
=======
                User Dash Widget (TODO: Hide this and make it work)
              </div>
              <div className="card-block">
                <DashBar />
              </div>
            </div>
          </div>
        </div>
        <div className="row content">
          <div className="content-top column container-fluid">
            <div className="card">
              <div className="card-header">
                Add a new plant to your collection (TODO: Hide this and fix the thing)
              </div>
              <div className="card-block">
                <AddPlant />
              </div>
>>>>>>> [feature] Prep home for dashboard content
            </div>
          </div>
          <div className="content-2 col-lg-7 push-lg-5 container-fluid">
            <div className="card-wrapper">
              <Chatbot userName={this.state.userName} loggedIn={this.state.isLoggedIn}/>
              <div className="card hidden-xs hidden-sm">
                <div className="card-header">
                  Active Bots
                </div>
                <Map/>
              </div>
              <div className="card">
                <div className="card-header">
<<<<<<< a9671ad0ffd8e36de79c424f6526dd07e78305f6
                  TODO: How to make a phyll.bot
=======
<<<<<<< 13fca98878b10015a03d6799e117d1660841abda
>>>>>>> [style] Add health feedback
                  Conservatory
                </div>
                <div className="card-block">
                  <p className="card-text">There are so many wonderful plants for your home. Discover the perfect one.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
=======
>>>>>>> [style] Add health feedback
                  Build Your Own Phyllbot
                </div>
                <div className="card-block">
<<<<<<< a9671ad0ffd8e36de79c424f6526dd07e78305f6
                  <p className="card-text">Get on the map with your very own bot. <a href="https://github.com/cachilders/PhyllOS">PhyllOS is yours</a> to perfect.</p>
=======
                  <p className="card-text">Get on the map with your very own bot. PhyllOS is yours to perfect.</p>
>>>>>>> [style] Add health feedback
                </div>
              </div>
            </div>
          </div>
          <div className="content-1 col-lg-5 pull-lg-7 container-fluid">
            <div className="card-wrapper">
            <Users users={ this.state.admin }/>
            <div className="card">
                <div className="card-header">
                  Conservatory
                </div>
                <div className="card-block">
                  <p className="card-text">There are so many wonderful plants for your home. Discover the perfect one.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer row">
          <div className="content-top column container-fluid">
            <div className="card">
              <div className="card-header">
                Footer Widget (TODO: whatevs)
              </div>
              <div className="card-block">
                Content
              </div>
            </div>
          </div>
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
    })
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
    })
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
            <PlantFacts plantFacts={plantFacts[0]} user={ this.state.loggedInUser }/>,
            document.getElementById('plantFact')
          )
        }
      }
    })
  }
  _getUser() {
    $.ajax({
      method: 'GET',
      url: 'api/auth/loggedin',
      success: (userInfo) => {
        if(userInfo){
          this.setState({loggedInUser: userInfo});
          this.setState({userName: userInfo.name});
          this.setState({userImg: userInfo.img});
          this.setState({isLoggedIn:!this.state.isLoggedIn});
        }
      },
      error: (err) => {
        throw new Error(err);
      }
    })
  }
  _logout() {
    $.ajax({
      method: 'GET',
      url: 'api/auth/logout',
      success: (data) => {
        this.setState({isLoggedIn:!this.state.isLoggedIn});
      },
      error: (err) => {
        throw new Error(err);
      }
    })
  }
}
