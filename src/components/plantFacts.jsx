import React from 'react';
import AddPlant   from './addPlant.jsx';

export default class PlantFacts extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      newPlant: false
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({newPlant: true});
  }

  render() {
    const keys = Object.keys(this.props.plantFacts).slice(1);
    keys.splice(keys.indexOf('img'),1) ;
    const plantFacts = this.props.plantFacts;
    const user = this.props.user;
    // console.log(plantFacts, 'inside PlantFacts');

    if (this.state.newPlant) {
      return (
        <AddPlant plantFacts={plantFacts} user={user}/>
      );
    } else {
      return (
        <div className="card">
          <div className="card-header">
            {plantFacts.plant_name}
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
      );
    }
  }
}

      //  <div className='row' style={{margin:'50px'}}>
      //       <div className='col-xs-10'>
      //         <img style={{width: '50%', height:'50%'}} src={plantFacts.img}/>
      //         <div>{keys.map(key=> <li>{`${key}: ${plantFacts[key]}`}</li>)}</div>
      //       </div>
      //  </div>
