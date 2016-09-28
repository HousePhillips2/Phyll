import React from 'react';
import View from './plantModal.jsx';

export default class Plant extends React.Component {

    constructor() {
    super();
  }

  handleClick(){
    if(this.props.handleClick){
      this.props.handleClick(this.props.plant);
    }
  }

  render(){
    // let plant = this.props.plant;

    return <div className='plant-clickable' onClick={this.handleClick} style={{display:'inline-block', width: '230px', transform:'scale(.55)', margin:'-2em'}} >
            <div>
              <label>{this.props.plant.plant_name}</label>
            <img style={{width: '200px', height: '200px'}} className='img-circle' src={this.props.plant.img}/>
              <br/>
              <label>light: {this.props.plant.light_s}</label>
               <br/>
              <label>water: {this.props.plant.water_s}</label>
               <br/>
              <label>poisonous: {this.props.plant.poisonous_s}</label>
               <br/>
              <View plant={this.props.plant}/>
            </div>
          </div>;
  }

};
