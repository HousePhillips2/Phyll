import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';

export default class UserInfo extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
        <span>{ this.props.username }</span>
        <img src={ this.props.image } style={{height:'50px', width:'50px'}} className="img-rounded img-outline-success"/>
      </div>
    );
  }
}
