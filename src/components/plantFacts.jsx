import React from 'react';
import AddPlant   from './addPlant.jsx';

export default class PlantFacts extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.closeHandler = this.closeHandler.bind(this);
  }

  clickHandler() {
    this.props.toggleNewPlant();
  }

  closeHandler() {
    this.props.fetchPlant('');
  }

  render() {

    const plantFacts = this.props.plantFacts[0];
    
    if (this.props.plantFacts.length > 0) {

      if (this.props.newPlant) {

        return (

          <AddPlant { ...this.props }/>

        );

      } else {

        return (

          <div className="row content">
            <div className="content-top column container-fluid">
              <div className="card">
                <div className="card-header">
                  <span className="pull-xs-left">{plantFacts.plant_name}</span>
                  <span onClick={this.closeHandler} className="close-pane pull-xs-right"><i className="fa fa-times-circle-o" aria-hidden="true"></i></span>
                </div>
                <div className="card-block graff">
                  <div className="media">
                    <span className="media-left">
                      <img style={{width: 175 + 'px'}} className="img-rounded" src={plantFacts.img}/>
                      <p>
                        <button type="button" onClick={this.clickHandler} className="btn btn-block btn-success media-left media-bottom" style={{marginTop: .5 + 'rem'}}>Add Plant</button>
                      </p>
                    </span>
                    <div className="media-body">
                      <div className="list-group">
                        <span className="list-group-item list-group-item-action list-group-item-info">
                          <i className="fa fa-tint"></i> {plantFacts.water_l}
                        </span>
                        <span className="list-group-item list-group-item-action list-group-item-warning">
                          <i className="fa fa-sun-o"></i> {plantFacts.light_l}
                        </span>
                        <span className="list-group-item list-group-item-action list-group-item-danger">
                          <i className="fa fa-medkit"></i> {plantFacts.poisonous_l}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        );
      }

    } else {

      return null;

    }
  }
}
