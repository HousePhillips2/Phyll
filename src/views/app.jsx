import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './home.jsx';
import Navigation from './navigation.jsx';

import { removeUser } from '../redux/actions/actions';
import { _getUser } from '../redux/actions/helpers';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.login();
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
    logout: () => dispatch(removeUser()),
    login : () => dispatch(_getUser())
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
