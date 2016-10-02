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
            <div className="pull-xs-right" style={{marginTop: 1 + 'rem'}}>
                <div className="btn-group graff">
                  <span className="btn btn-secondary dropdown-toggle dropdown-menu-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{border: 'none'}}>
                    <UserInfo userName={this.state.userName} userImg={this.state.userImg} isLoggedIn={this.state.isLoggedIn}/>
                  </span>
                  <div className="dropdown-menu dropdown-menu-right">
                    { loginToggle }
                    <div className="dropdown-divider"></div>
                    <button className="dropdown-item" type="button">About phyll.IO</button>
                    <button className="dropdown-item" type="button">Developer Journal</button>
                    <a href="https://github.com/cachilders/Phyll"><button className="dropdown-item" type="button">Check Out the Source</button></a>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className="row search">
          <div className="column jumbotron jumbo-bg">
            <Search className="form-control form-control-lg" plants={ this.state.plants } fetchPlant={ this.state._fetchPlant } dataToggle="modal" dataTarget="#plantModal"/>
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
                  Conservatory
                </div>
                <div className="card-block">
                  <p className="card-text">There are so many wonderful plants for your home. Discover the perfect one.</p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  Build Your Own Phyllbot
                  TODO: How to make a phyll.bot
                </div>
                <div className="card-block">
                  <p className="card-text">Get on the map with your very own bot. <a href="https://github.com/cachilders/PhyllOS">PhyllOS is yours</a> to perfect.</p>
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
            <PlantFacts plantFacts={plantFacts[0]} user={ this.state.loggedInUser }/>,
            document.getElementById('plantFact'),
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
          this.setState({loggedInUser: userInfo});
          this.setState({userName: userInfo.name});
          this.setState({userImg: userInfo.img});
          this.setState({isLoggedIn:!this.state.isLoggedIn});
        }
      },
      error: (err) => {
        throw new Error(err);
      }
    });
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
    });
  }
}
