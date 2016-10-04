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
      <div className="container-fluid">
        <Navigation { ...this.props }/>
        { this.props.children }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login : () => dispatch(_getUser()),
    logout: () => dispatch(removeUser())
  };
}

function mapStateToProps(state) {
  if( state.get('loggedIn') ){
    let user = state.get('user');

    return {
      loggedIn: state.get('loggedIn'),
      username: user.name,
      image: user.get('image'),
      firstName: user.firstName,
      lastName: user.lastName
    };
  }

  return {
    loggedIn: state.get('loggedIn')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
