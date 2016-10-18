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
    const thumb = <img className="img-rounded" style={ {width: '75px', height: '75px'} } src={plant.plant_img}/>;

    const moisture = plant.health_moisture ? plant.health_moisture : 4;
    const light = plant.health_light ? plant.health_light : 4;

    return(

      <div className="card">
        <div className="card-block">
          <div className="media">
            <div className="media-body">
              <div>
                <EditPlant { ...this.props} hearts={ hearts } thumb={ thumb }/>
              </div>
              <div className="container">

                { device ? 

                    <Charts { ...this.props }/>

                : 
                
                  <div style={{marginLeft: -1 + 'rem'}} className="graff" className="text-muted">
                    <p style={{marginTop: .25 + 'rem'}}>Add a phyllOS device to track your plant's conditions</p>
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
