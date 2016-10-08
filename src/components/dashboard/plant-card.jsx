import { ajax } from 'jquery';
import React from 'react';

import Charts from '../charts.jsx';
import EditPlant from '../editPlant.jsx';


export default class PlantCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.plant);
    const plant = this.props.plant;
    const health = plant.health || 3;
    const heartFull = <i className="fa fw fa-heart"></i>;
    const heartEmpty = <i className="fa fw fa-heart-o"></i>;
    // TODO: Refactor this ugly thing to be more functional
    const hearts = <span className="text-danger"> 
                     {plant.health > 0 ? heartFull : heartEmpty}&nbsp;
                     {plant.health > 1 ? heartFull : heartEmpty}&nbsp;
                     {plant.health > 2 ? heartFull : heartEmpty}&nbsp;
                     {plant.health > 3 ? heartFull : heartEmpty}&nbsp;
                     {plant.health > 4 ? heartFull : heartEmpty}
                   </span>;

    const moisture = plant.health_moisture ? plant.health_moisture : 4;
    const light = plant.health_light ? plant.health_light : 4;

    return(

      <div className="card">
        <div className="card-block">
          <div className="media">
            <a className="media-left"><img className="img-rounded" style={ {width: '85px', height: '85px'} } src={plant.plant_img}/></a>
            <div className="media-body">
              <div>
                <EditPlant { ...this.props}/>
              </div>
              <div className="media-body" style={ { padding: 1 + 'rem' } }>
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
              <Charts { ...this.props } />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}
