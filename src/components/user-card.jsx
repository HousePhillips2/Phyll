import { ajax } from 'jquery';
import React from 'react';
import Charts from './charts.jsx';


export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    const firstName = user.user_name.split(' ')[0] + '\'s'
    // TODO: This score will be dynamically populated using n full hearts with the remainder of five hollow
    const score = <span className="text-danger"><i className="fa fa-heart"></i> <i className="fa fa-heart"></i> <i className="fa fa-heart-o"></i> <i className="fa fa-heart-o"></i> <i className="fa fa-heart-o"></i></span>
    return(
      <div className="card">
        <div className="card-block">
          <div className="media">
            <a className="media-left"><img className="img-rounded" style={ {width: '120px', height: '120px'} } src={user.plants[0].img}/></a>
            <div className="media-body">
              <div className="media">
                <a className="media-left"><img className="img-rounded" style={ {width: '50px', height: '50px'} } src={ user.img }/></a>
                <div className="media-body graff">
                  <h4 className="media-heading">{`${ firstName }`} <span className="text-success">{`${ user.plants[0].name }`}</span></h4>
                  { score }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
