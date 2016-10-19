import { ajax }  from 'jquery';
import React     from 'react';

import PlantCard from './plant-card.jsx';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.toggleGuestView();
    this.props.setFocus();
  }

  render() {

    let thumb = this.props.guestView ? this.props.guest.image : this.props.image;
    let name = this.props.guestView ? this.props.guest.name : this.props.username;
    let close = <span onClick={this.clickHandler} className="close-pane pull-xs-right"><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>

    return(
      <div id="dashBar" className="row content">
        <div className="content-top column container-fluid">
          <div className="card">
            <div className="card-header">
              <a className="media-left"><img className="img-rounded" style={ {width: '50px', height: '50px'} } src={ thumb }/></a>
              <div className="media-body">
                <h4 className="media-heading">{ name } { this.props.guestView ? close : null }</h4>

                { this.props.guestView ? 

                  null

                :

                  <span>Plant count: <span className="text-success">{ this.props.user_plants.length }</span></span>

                }

              </div>
            </div>
            <div className="card-block">

                { this.props.guestView ?

                  <div className="media">

                    { this.props.guest.user_plants.length > 0 ?

                      <div className="media-body">

                        {this.props.guest.user_plants.map(plant => <PlantCard plant={ plant } key={ plant.plant_id } { ...this.props}/>) }

                      </div>

                    : 

                      <div className="media-body">
                        <div className="head text-success">{ this.props.guest.firstName } doesn't have any plants. Don't be like { this.props.guest.firstName }.</div>
                      </div>

                    }

                  </div>
                  
                :
                
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

                }

            </div>
          </div>
        </div>
      </div>

    );
    
  }
}
