import $            from 'jquery';
import React        from 'react';
import { render }   from 'react-dom';
import { Link }     from 'react-router';
import { connect }  from 'react-redux';

import Users        from '../components/users.jsx';
import Search       from '../components/searchBar.jsx';
import PlantFacts   from '../components/plantFacts.jsx';
import UserInfo     from '../components/userInfo.jsx';
import Login        from '../components/login.jsx';
import Logout       from '../components/logout.jsx';
import Map          from '../components/map/index.jsx';
import Chatbot      from '../components/chatbot.jsx';
import AddPlant     from '../components/addPlant.jsx';
import DashBar      from '../components/dashboardBar.jsx';
import { _getAdmin, _getPlants } from '../redux/actions/helpers';

require('../stylesheets/main.scss');


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _fetchPlant: this._fetchPlant.bind(this)
    };
  }

  componentWillMount() {
    this.props.fetchAdmin();
    this.props.fetchPlants();
  }

  componentWillUpdate() {
    this.props.admin;
    this.props.plants;
  }

  // TODO: The initial div needs to go in refactor as it is duplicated in nav

  render() {

    let dashboard = this.props.user ? <DashBar loggedInUser={ this.state.loggedInUser }/> : <div id="dashBar"></div>;
    console.log('this.props.admin:', this.props.admin);
    console.log('this.props.plants:', this.props.plants);
    return(

      <div className="container-fluid">
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
                  TODO: How to make a phyll.bot
                </div>
                <div className="card-block">
                  <p className="card-text">Get on the map with your very own bot. <a href="https://github.com/cachilders/PhyllOS">PhyllOS is yours</a> to perfect.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-1 col-lg-5 pull-lg-7 container-fluid">
            <Users users={ this.props.admin }/>
            <div className="card-wrapper">
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
          );
        }
      }
    });
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAdmin  : () => dispatch(_getAdmin()),
    fetchPlants : () => dispatch(_getPlants())
  };
}

function mapStateToProps(state) {
  return {
    plants: state.getIn([ 'plants', 'plants' ]),
    admin: state.getIn([ 'admin', 'admin' ])
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
