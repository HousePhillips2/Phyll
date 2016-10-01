import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './home.jsx';
import Navigation from './navigation.jsx';


import { removeUser } from '../redux/actions/actions';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <Navigation { ...this.props }/>
        { this.props.children }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(removeUser())
  };
}

function mapStateToProps(state) {
  if( state.get('loggedIn') ){
    let user = state.get('user');
    let username = user.get('firstName') + " " + user.get('lastName');

    return {
      loggedIn: state.get('loggedIn'),
      username,
      image: user.get('image')
    };
  }

  return {
    loggedIn: state.get('loggedIn')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
