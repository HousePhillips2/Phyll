import { ajax } from 'jquery';
import React from 'react';


export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return(
      <div className="card card-outline-success">
        <div className="card-text">
          <div className="card-block graff text-success text-xs-left col-xs-6">{`${ user.user_name }`}</div>
          <div className="card-block graff text-success text-xs-right col-xs-6">{`${ user.plants[0].name }`}</div>
        </div>
        <div className="card-block">
          <img className="img-rounded pull-left" style={ {width: '125px', height: '125px'} } src={ user.img }/>
          <img className="img-rounded pull-right" style={ {width: '125px', height: '125px'} } src={ user.plants[0].img }/>
        </div>
      </div>
    );
  }
}
