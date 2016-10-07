import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Plant from './plant.jsx';


export default class View extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.fetchPlant(this.props.plant.plant_name);
  }

  render() {
    return (

      <div className='plant-clickable' onClick={this.handleClick} style={{display:'inline-block', transform:'scale(.95)'}} >
        <div >
          <Plant plant={this.props.plant}/>
        </div>
      </div>

    );

  }
}

      // {
      //   this.state.isShowingModal &&
      //   <ModalContainer onClose={this.handleClose.bind(this)}>
      //     <ModalDialog onClose={this.handleClose.bind(this)}>
      //       <h1>{this.props.plant.plant_name}</h1>
      //       <img style={{width: '300px', height: '300px'}} className='img-circle' src={this.props.plant.plant_img}/>
      //       <p>family: {this.props.plant.plant_family}</p>
      //       <p>watering: {this.props.plant.water_s}</p>
      //       <p class="bg-primary">soil: {this.props.plant.soil_s}</p>
      //       <p>fertilize: {this.props.plant.fertilizer_s}</p>
      //       <p>sunlight: {this.props.plant.light_s}</p>
      //       <p>watering: {this.props.plant.water_s}</p>
      //       <p>poisonous: {this.props.plant.poisonous_s}</p>
      //       <button onClick={this.handleButton.bind(this)}>
      //         Adopt me!
      //      </button>

      //     </ModalDialog>
      //   </ModalContainer>
      // }