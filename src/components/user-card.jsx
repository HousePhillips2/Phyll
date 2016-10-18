import { ajax } from 'jquery';
import React    from 'react';
import Charts   from './charts.jsx';

export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const user = this.props.user;
    const device = user.device_id.match(/^\w{2}:\w{2}:\w{2}:\w{2}:\w{2}:\w{2}$/);
    const message = device ? '' : 'No Device';
    const health = user.health;
    const heartFull = <i className="fa fw fa-heart"></i>;
    const heartEmpty = <i className="fa fw fa-heart-o"></i>;
    const heartColor = device ? "text-danger" : "text-muted";
    const hearts = <span className={ heartColor }> &nbsp;
                     {health > 0 ? heartFull : heartEmpty}&nbsp;
                     {health > 1 ? heartFull : heartEmpty}&nbsp;
                     {health > 2 ? heartFull : heartEmpty}&nbsp;
                     {health > 3 ? heartFull : heartEmpty}&nbsp;
                     {health > 4 ? heartFull : heartEmpty}
                   </span>;

    const moisture = user.health_moisture;
    const light = user.health_light;

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

                    { device ? 

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

                    :

                      <div className="graff text-muted">No phyllOS device attached</div>
                    
                    }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
    
  }
}
