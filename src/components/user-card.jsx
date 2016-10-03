import { ajax } from 'jquery';
import React from 'react';
import Charts from './charts.jsx';


export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    const firstName = user.user_name.split(' ')[0] + '\'s';
    const heartFull = <i className="fa fw fa-heart"></i>;
    const heartEmpty =  <i className="fa fw fa-heart-o"></i>;
    // TODO: This score will be dynamically populated using n full hearts with the remainder of five hollow
    const health = <span className="text-danger"> {heartFull} {heartFull} {heartFull} {heartEmpty} {heartEmpty} </span>;
    // TODO: The water and light quick glance will be derived from most recent data at page load
    const moisture = Math.floor(Math.random() * (100 - 1)) + 1;
    const light = Math.floor(Math.random() * (100 - 1)) + 1;

    return(

      <div className="card">
        <div className="card-block">
          <div className="media">
            <a className="media-left"><img className="img-rounded" style={ {width: '120px', height: '120px'} } src={user.plants[0].img}/></a>
            <div className="media-body">
              <div className="media">
                <a className="media-left"><img className="img-rounded" style={ {width: '50px', height: '50px'} } src={ user.img }/></a>
                <div className="media-body">
                  <h4 className="media-heading">{`${ firstName }`} <span className="text-success">{`${ user.plants[0].name }`}</span></h4>
                  { health }
                  <div className="media-body">
                    <div className="media">
                      <a className="media-left"><i className="fa fa-fw fa-tint text-info"></i></a>
                      <div className="media-body">
                        <progress className="progress progress-info" value={`${ moisture }`} max="100"></progress>
                      </div>
                    </div>
                    <div className="media">
                      <a className="media-left"><i className="fa fa-fw fa-sun-o text-warning"></i></a>
                      <div className="media-body">
                        <progress className="progress progress-warning" value={`${ light }`} max="100"></progress>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
