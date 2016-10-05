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
import { _getAdmin, _getPlants, _fetchPlant } from '../redux/actions/helpers';

require('../stylesheets/main.scss');


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlants();
    this.props.fetchAdmin();
  }

  // TODO: The initial div needs to go in refactor as it is duplicated in nav

  render() {

    let dashboard = this.props.loggedIn ? <DashBar id="dashBar" { ...this.props }/> : <div id="dashBar"></div>;
    let plantFacts = this.props.plantFacts ? <PlantFacts id="dashBar" { ...this.props }/> : <div id="plantFacts"></div>;

    return(

      <div className="container-fluid">
        <div className="row search">
          <div className="column jumbotron jumbo-bg">
          { this.props.plants ?
            <Search className="form-control form-control-lg" { ...this.props } /> :
            null
          }
          </div>
        </div>
        { plantFacts }
        { dashboard }
        <div className="row content">
          <div className="content-2 col-lg-7 push-lg-5 container-fluid">
            <div className="card-wrapper">
              <Chatbot { ...this.props }/>
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
            <Users { ...this.props }/>
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
        {/*<div className="footer row">
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
        </div>*/}
      </div>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAdmin  : () => dispatch(_getAdmin()),
    fetchPlants : () => dispatch(_getPlants()),
    fetchPlant  : (plant) => dispatch(_fetchPlant(plant))
  };
}

function mapStateToProps(state) {
  const user = state.get('user');
  if( state.get('loggedIn') ){
    return {
      plants: state.getIn([ 'plants', 'plants' ]),
      admin: state.getIn([ 'admin', 'admin' ]),
      loggedIn: state.get('loggedIn'),
      username: user.get('name'),
      image: user.get('image'),
      firstName: user.get('firstName'),
      lastName: user.get('lastName'),
      plantFacts: state.getIn(['plantFacts', 'plantFacts']),
      id: user.get('id')
    };
  }

  if (state.get('plantFacts') ) {
    return {
      plantFacts: state.getIn(['plantFacts', 'plantFacts']),
      plants: state.getIn([ 'plants', 'plants' ]),
      admin: state.getIn([ 'admin', 'admin' ]),
      loggedIn: state.get('loggedIn'),
      id: state.get('id')
    }
  }

  return {
    plants: state.getIn([ 'plants', 'plants' ]),
    admin: state.getIn([ 'admin', 'admin' ]),
    loggedIn: state.get('loggedIn'),
    id: state.get('id')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);