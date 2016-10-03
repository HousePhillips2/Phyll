import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.isLoggedIn){
      return(
        <img src={this.props.userImg} style={{height:'50px', width:'50px'}} className="img-rounded img-outline-success"/>
      );
    } else {
      return (
        <img src="images/logo.png" style={{height:'50px', width:'50px'}} className="img-rounded img-outline-success"/>
      );
    }
  }
}