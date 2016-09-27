import React from 'react';
import $ from 'jquery';

export default class SignIn extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return(
    <div id = 'auth'>
      <a href="/login">Login</a>
    </div>
    );
  }
}

