import React, { Component } from 'react';
import { connect }          from 'react-redux';

import Home                 from './home.jsx';
import Conservatory         from './conservatory.jsx';
import Navigation           from './navigation.jsx';
import {
  _getGarden, 
  _getPlants, 
  _fetchPlant, 
  _getUser,
  _getAdmin,
  _getJournals,
  _getPhylls }              from '../redux/actions/helpers';
import {
  toggleNewPlant,
  toggleGuestView,
  setFocus,
  setGuest, 
  setUser,
  setPlantFacts,
  removeUser }              from '../redux/actions/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.login();
    this.props.fetchPlants();
    this.props.fetchGarden();
    this.props.fetchPhylls();
    this.props.fetchDevs();
    this.props.fetchJournals();
    if (this.props.id){
     this.props.fetchUserPlantGeneric(this.props.id);
    };
  }

  render() {

    return(

      <div className="container-fluid">

        <Navigation { ...this.props }/>

        {React.cloneElement(this.props.children, {...this.props})} {/*This flags in ESLint, but successfully passes down props to all child views*/}
        
      </div>

    );

  }
}

function mapDispatchToProps(dispatch) {
  return {
    login                 : () => dispatch(_getUser()),
    getUser               : () => dispatch(_getUser()), // Helper dispatch for clarity. This is the same function call as above.
    logout                : () => dispatch(removeUser()),
    fetchUser             : () => dispatch(setUser()),
    fetchGarden           : () => dispatch(_getGarden()),
    fetchPlants           : () => dispatch(_getPlants()),
    clearPlantFacts       : () => dispatch(setPlantFacts('')),
    toggleNewPlant        : () => dispatch(toggleNewPlant()),
    toggleGuestView       : () => dispatch(toggleGuestView()),
    setFocus              : () => dispatch(setFocus()), // Define map center based on current conditions
    setGuest              : (guest) => dispatch(setGuest(guest)),
    fetchPhylls           : () => dispatch(_getPhylls()), // Update/create device list object {id:device_id, location:[lat,lon]}
    fetchDevs             : () => dispatch(_getAdmin()),
    fetchJournals         : () => dispatch(_getJournals()),
    fetchPlant            : (plant) => dispatch(_fetchPlant(plant)),
    fetchUserPlantGeneric : (userId) => dispatch(_fetch_User_Plants(userId))
  };
}

function mapStateToProps(state) {
  const user = state.get('user');
  if( state.get('loggedIn') ){
    return {
      devs          : state.getIn([ 'admins', 'admins' ]),
      journals      : state.getIn([ 'journals', 'journals' ]),
      plantFacts    : state.getIn([ 'plantFacts', 'plantFacts' ]),
      plants        : state.getIn([ 'plants', 'plants' ]),
      garden        : state.getIn([ 'garden', 'garden' ]),
      phylls        : state.get('phylls'),
      mapFocus      : state.get('mapFocus'),
      guest         : state.get('guest'),
      newPlant      : state.get('newPlant'),
      guestView     : state.get('guestView'),
      loggedIn      : state.get('loggedIn'),
      user_plants   : user.get('user_plants'),
      username      : user.get('name'),
      image         : user.get('image'),
      plant_generic : user.get('generic'),
      firstName     : user.get('firstName'),
      lastName      : user.get('lastName'),
      id            : user.get('id'),
    };
  }

  if (state.get('plantFacts') ) {
    return {
      loggedIn    : state.get('loggedIn'),
      id          : state.get('id'),
      newPlant    : state.get('newPlant'),
      guestView   : state.get('guestView'),
      guest       : state.get('guest'),
      mapFocus    : state.get('mapFocus'),
      phylls      : state.get('phylls'),
      devs        : state.getIn([ 'admins', 'admins' ]),
      journals    : state.getIn([ 'journals', 'journals' ]),
      plantFacts  : state.getIn([ 'plantFacts', 'plantFacts' ]),
      plants      : state.getIn([ 'plants', 'plants' ]),
      garden      : state.getIn([ 'garden', 'garden' ]),
    };
  }

  return {
    loggedIn  : state.get('loggedIn'),
    id        : state.get('id'),
    newPlant  : state.get('newPlant'),
    guestView : state.get('guestView'),
    guest     : state.get('guest'),
    mapFocus  : state.get('mapFocus'),
    phylls    : state.get('phylls'),
    devs      : state.getIn([ 'admins', 'admins' ]),
    journals  : state.getIn([ 'journals', 'journals' ]),
    plants    : state.getIn([ 'plants', 'plants' ]),
    garden    : state.getIn([ 'garden', 'garden' ]),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
