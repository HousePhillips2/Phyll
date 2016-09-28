import React from 'react';
// import React, {PropTypes} from 'react';
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
// import Modal from 'react-bootstrap-modal';


export default class View extends React.Component {

  constructor() {
  super();
  this.state={isShowingModal:false};//initate state
  }

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
    return <div onClick={this.handleClick.bind(this)}>Click for more info!
      {
        this.state.isShowingModal &&
        <ModalContainer onClose={this.handleClose.bind(this)}>
          <ModalDialog onClose={this.handleClose.bind(this)}>
            <h1>{this.props.plant.plant_name}</h1>
            <img style={{width: '300px', height: '300px'}} className='img-circle' src={this.props.plant.img}/>
            <p>family: {this.props.plant.plant_family}</p>
            <p>watering: {this.props.plant.water_s}</p>
            <p>soil: {this.props.plant.soil_s}</p>
            <p>fertilize: {this.props.plant.fertilize_s}</p>
            <p>sunlight: {this.props.plant.light_s}</p>
            <p>watering: {this.props.plant.water_s}</p>
            <button
              onClick={this.handleButton}
            >
              Adopt me!
           </button>

          </ModalDialog>
        </ModalContainer>
      }
    </div>;
  }
}
