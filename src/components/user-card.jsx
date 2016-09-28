import { ajax } from 'jquery';
import React from 'react';


export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return(
        <div className="row card-group card-outline-success text-xs-center">
          <div className="col-xs-5 card text-xs-center" style={{ border: 'none' }}>
            <img className="img-rounded media-center" style={ {width: '125px', height: '125px'} } src={ user.img }/>
            <p className="card-block graff text-success">{`${ user.user_name }`}</p>
          </div>
          <div className="col-xs-2 card text-xs-center" style={{ border: 'none' }}>
          </div>
          <div className="col-xs-5 card text-xs-center" style={{ border: 'none' }}>
            <img className="img-rounded media-center" style={ {width: '125px', height: '125px'} } src={ user.plants[0].img }/>
            <p className="card-block graff text-success">{`${ user.plants[0].name }`}</p>
          </div>
        </div>
    );
  }
}
