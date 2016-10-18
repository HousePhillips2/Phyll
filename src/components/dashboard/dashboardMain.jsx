import { ajax }  from 'jquery';
import React     from 'react';

import PlantCard from './plant-card.jsx';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      
      <div id="dashBar" className="row content">
        <div className="content-top column container-fluid">
          <div className="card">
            <div className="card-header">
              <a className="media-left"><img className="img-rounded" style={ {width: '50px', height: '50px'} } src={ this.props.image }/></a>
              <div className="media-body">
                <h4 className="media-heading">{ this.props.username }</h4>
                Plant count: <span className="text-success">{ this.props.user_plants.length }</span>
              </div>
            </div>
            <div className="card-block">
              <div className="media">

                { this.props.user_plants.length > 0 ?

                  <div className="media-body">

                    {this.props.user_plants.map(plant => <PlantCard plant={ plant } key={ plant.plant_id } { ...this.props}/>) }

                  </div>

                : 

                  <div className="media-body">
                    <div className="head text-success">You don't have any plants! That's easy to fix. Use the search bar above to add one to your profile.</div>
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
