import React from 'react';
import $ from 'jquery';
import Plant from '../components/plant.jsx';
import Modal from '../components/plantModal.jsx';

import { render } from 'react-dom';

export default class PlantsLibrary extends React.Component {

  constructor() {
    super();
    this.state={plantsLibrary:[]};//initate state
  }

  componentWillMount() {
    this._getPlants();
  }

  render() {

    let plants= this.state.plantsLibrary;

    let plantID = 0;

    let library = plants.reduce(function(acc, plant){
      acc.push(
        <Modal
        handleClick = {this.props.handleClickPlant}
        plant={plant} key={plant.id + '-' + plantID++}
        />
        );
      return acc;
    }.bind(this), []);

    return (
     <div className= { 'conservatory' } style={{overflow: 'auto', width: '100%'}}>
      <div style={{width: '1300px'}}>
        <div>
            {library}
        </div>
      </div>
    </div>
    );


}

  _getPlants() {
    $.ajax({
      method: 'GET',
      url: '/api/plantsLibrary',
      success: (plantsLibrary) => {
        this.setState({plantsLibrary});
      }
    });
  }

}


// render(<PlantsLibrary />, document.getElementById('app'));
