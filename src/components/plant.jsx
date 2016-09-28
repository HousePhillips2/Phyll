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
    let plant = this.props.plant;
    return (
            <div>
              <label>{plant.plant_name}</label>
              <div>
                  <img style={{width: '200px', height: '200px'}} className='img-circle' src={plant.img} />
              </div>
              <br/>
              <label>light: {plant.light_s}</label>
               <br/>
              <label>water: {plant.water_s}</label>
               <br/>
              <label>poisonous: {plant.poisonous_s}</label>
               <br/>
            </div>
            );
  }

};



    // return <div className='plant-clickable' onClick={this.handleClick} style={{display:'inline-block', width: '230px', transform:'scale(.55)', margin:'-2em'}} >

          // </div>;

              /* <View plant={plant}/> */
