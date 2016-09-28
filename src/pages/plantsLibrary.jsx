import React from 'react';
import $ from 'jquery';
import Plant from '../components/plant.jsx';
import View from '../components/plantModal.jsx';

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

/*
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles} >

          <h2 ref="subtitle">Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
*/

    let library = plants.reduce(function(acc, plant){
      acc.push(
        <Plant
        handleClick = {this.props.handleClickPlant}
        plant={plant} key={plant.id + '-' + plantID++}
        // style={this.props.plantStyle}
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

    // return (
    //   <div>
    //     <h1>Explore Plants Conservatory</h1>
    //     <div>{plants.map(plant=>
    //       <li>
    //         <img style={{width: '150px', height: '150px'}} src={plant.img}/>
    //           <ul>
    //               <li style={{display:'inline-block',margin:'5px'}}>{`name: ${plant.plant_name}`}</li>
    //               <li style={{display:'inline-block',margin:'5px'}}>{`water: ${plant.water_s}`}</li>
    //               <li style={{display:'inline-block',margin:'5px'}}>{`light: ${plant.light_s}`}</li>
    //               <li style={{display:'inline-block',margin:'5px'}}>{`fertilize: ${plant.fertilizer_s}`}</li>
    //           </ul>
    //       </li>)}
    //     </div>
    //   </div>
    // );


render(<PlantsLibrary />, document.getElementById('app'));
