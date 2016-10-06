import React from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import Plant from './plant.jsx';


export default class View extends React.Component {

  constructor() {
  super();
  this.state={isShowingModal:false};
  }

// handleButton decides what action will be taken when the button on the bottom of the modal form is clicked
  handleButton(){
      if(this.props.handleButton){
        this.props.handleButton(this.props.plant);
    }
  }

  handleClick(){
    this.setState({isShowingModal: true});
  }

  handleClose(){
    this.setState({isShowingModal: false});
  }

  render() {
    return (

<div className='plant-clickable' onClick={this.handleClick.bind(this)} style={{display:'inline-block', width: '230px', transform:'scale(.55)', margin:'-2em'}} >
    <div >
            <Plant plant={this.props.plant}/>
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose.bind(this)}>
          <ModalDialog onClose={this.handleClose.bind(this)}>
            <h1>{this.props.plant.plant_name}</h1>
            <img style={{width: '300px', height: '300px'}} className='img-circle' src={this.props.plant.plant_img}/>
            <p>family: {this.props.plant.plant_family}</p>
            <p>watering: {this.props.plant.water_s}</p>
            <p class="bg-primary">soil: {this.props.plant.soil_s}</p>
            <p>fertilize: {this.props.plant.fertilizer_s}</p>
            <p>sunlight: {this.props.plant.light_s}</p>
            <p>watering: {this.props.plant.water_s}</p>
            <p>poisonous: {this.props.plant.poisonous_s}</p>
            <button
              onClick={this.handleButton.bind(this)}
            >
              Adopt me!
           </button>

          </ModalDialog>
        </ModalContainer>
      }
    </div>
    </div>

    );

  }
}
