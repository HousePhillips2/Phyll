import { ajax } from 'jquery';
import React from 'react';


export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    const firstName = user.user_name.split(' ')[0] + '\'s'
    return(
      <div className="card">
        <div className="card-block">
          <div className="media">
            <a className="media-left"><img className="img-rounded" style={ {width: '125px', height: '125px'} } src={ user.img }/></a>
            <div className="media-body">
              <div className="media">
                <div className="media-body graff">
                  <h4 className="media-heading header">{`${ firstName }`} <span className="text-success">{`${ user.plants[0].name }`}</span></h4>
                  Graphs why not.
                </div>
                <a className="media-right"><img className="img-rounded" style={ {width: '75px', height: '75px'} } src={ user.plants[0].img }/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
