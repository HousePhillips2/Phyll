import { ajax } from 'jquery';
import React from 'react';


export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return(
      <div className="container card-outline-success">
        <div className="row">
          <div className="col-xs-4">
            <img className="img-rounded media-center" style={ {width: '100px', height: '100px'} } src={ user.img }/>
            <h5 className="graff text-success">{`${ user.user_name }`}</h5>
          </div>
          <div className="col-xs-4">
          </div>
          <div className="col-xs-4">
            <img className="img-rounded media-center" style={ {width: '100px', height: '100px'} } src={ user.plants[0].img }/>
            <h5 className="graff text-success">{`${ user.plants[0].name }`}</h5>
          </div>
        </div>
      </div>
    );
  }
}
