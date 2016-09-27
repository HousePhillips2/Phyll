import React from 'react';

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

    return <div className='plant-clickable' onClick={this.handleClick} style={{display:'inline-block', width: '230px', transform:'scale(.7)', margin:'-2em'}} >
            <div>
              <label className='title'>{this.props.plant.plant_name}</label>
            <img style={{width: '200px', height: '200px'}} className='img-circle' src={this.props.plant.img}/>
              <br/>
              <label>{this.props.plant.plant_family}</label>
               <br/>
              <label>{this.props.plant.water_s}</label>
               <br/>
              <label>{this.props.plant.soil_s}</label>
               <br/>
              <label>{this.props.plant.fertilizer_s}</label>
            </div>
          </div>;
  }

};
