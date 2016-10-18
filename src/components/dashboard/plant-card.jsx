import { ajax }  from 'jquery';
import React     from 'react';

// import Charts from '../charts.jsx'; // Uncomment this line and comment the one below to revert
import Charts    from '../charts-alt.jsx';
import EditPlant from '../editPlant.jsx';

export default class PlantCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const plant = this.props.plant;
    const device = plant.device_id.match(/^\w{2}:\w{2}:\w{2}:\w{2}:\w{2}:\w{2}$/);
    const message = device ? '' : 'No Device';
    const health = plant.health;
    const heartFull = <i className="fa fw fa-heart"></i>;
    const heartEmpty = <i className="fa fw fa-heart-o"></i>;
    const heartColor = device ? "text-danger" : "text-muted";
    const hearts = <span className={ heartColor }>
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
              <div className="container">
                { hearts }
                { device ?
                  <div className="container">
                    <Charts { ...this.props }/>
                  </div>
                : 
                  <div className="graff text-muted">
                    Add a phyllOS device to track your plant's conditions
                  </div>

                }

              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }
}
