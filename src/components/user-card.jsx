import { ajax } from 'jquery';
import React from 'react';
import Charts from './charts.jsx';


export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    const health = user.health || 3;
    const heartFull = <i className="fa fw fa-heart"></i>;
    const heartEmpty = <i className="fa fw fa-heart-o"></i>;
    // TODO: Refactor this ugly thing to be more functional
    const hearts = <span className="text-danger"> 
                     {user.health > 0 ? heartFull : heartEmpty}&nbsp;
                     {user.health > 1 ? heartFull : heartEmpty}&nbsp;
                     {user.health > 2 ? heartFull : heartEmpty}&nbsp;
                     {user.health > 3 ? heartFull : heartEmpty}&nbsp;
                     {user.health > 4 ? heartFull : heartEmpty}
                   </span>;

    const moisture = user.health_moisture ? user.health_moisture : 4;
    const light = user.health_light ? user.health_light : 4;

    return(

      <div className="card">
        <div className="card-block">
          <div className="media">
            <a className="media-left"><img className="img-rounded" style={ {width: '120px', height: '120px'} } src={user.plant_img}/></a>
            <div className="media-body">
              <div className="media">
                <a className="media-left"><img className="img-rounded" style={ {width: '50px', height: '50px'} } src={ user.img }/></a>
                <div className="media-body">
                  <h4 className="media-heading">{`${ user.first_name }`}'s plant: <span className="text-success">{`${ user.plant_nickname }`}</span></h4>
                  { hearts }
                  <div className="media-body">
                    <div className="media">
                      <a className="media-left"><i className="fa fa-fw fa-tint text-info"></i></a>
                      <div className="media-body">
                        <progress className="progress progress-info" value={`${ moisture }`} max="10"></progress>
                      </div>
                    </div>
                    <div className="media">
                      <a className="media-left"><i className="fa fa-fw fa-sun-o text-warning"></i></a>
                      <div className="media-body">
                        <progress className="progress progress-warning" value={`${ light }`} max="10"></progress>
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
