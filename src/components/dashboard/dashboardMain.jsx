import { ajax } from 'jquery';
import React from 'react';

import PlantCard from './plant-card.jsx';


export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
  let plants = this.props.user_plants;

    return(
      
      <div id="dashBar" className="row content">
        <div className="content-top column container-fluid">
          <div className="card">
            <div className="card-header">
              { this.props.username }
            </div>
            <div className="card-block">
              <div className="media">
                <a className="media-left"><img className="img-rounded" style={ {width: '125px', height: '125px'} } src={ this.props.image }/></a>
                { plants.length > 0 ?
                  <div className="media-body">
                    {plants.map(plant => <PlantCard plant={ plant } key={ plant.id } { ...this.props}/>) }
                  </div>
                : 
                  <div className="media-body">
                    <div className="head text-success">You don't have any plants! That's easy to fix. Use the search bar above to add your favorite to your profile.</div>
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
