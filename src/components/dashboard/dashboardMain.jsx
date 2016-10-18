import { ajax }  from 'jquery';
import React     from 'react';

import PlantCard from './plant-card.jsx';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('inside dashboardMain:', this.props.dashboardDisplay);
    return(

      <div id="dashBar" className="row content">
        <div className="content-top column container-fluid">
          <div className="card">
            <div className="card-header">
              { this.props.dashboardDisplay.nickname }
            </div>
            <div className="card-block">
              <div className="media">
                { this.props.loggedIn ? <a className="media-left"><img className="img-rounded" style={ {width: '125px', height: '125px'} } src={ this.props.image }/></a> : null }
                { this.props.user_plants ?
                  <div className="media-body">
                    {this.props.user_plants.map(plant => <PlantCard plant={ plant } key={ plant.plant_id } { ...this.props }/>) }
                  </div>
                :
                  <div className="media-body">
                    <PlantCard plant={ this.props.dashboardDisplay } { ...this.props } />
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
