import React from 'react';

var Plant = React.createClass({

  handleClick:function(){
    if(this.props.handleClick){
      this.props.handleClick(this.props.plant);
    }
  },

  render:function(){
    var plant = this.props.plant;

    return <div className='plant clickable' onClick={this.handleClick} style={this.props.style} >
            <div>
              <label className='title'>{plant.plant_name}</label>
              <br/>
              <label>{plant.family}</label>
               <br/>
              <label>{plant.water_S}</label>
               <br/>
              <label>{plant.soil_S}</label>
               <br/>
              <label>{plant.fertilizer_S}</label>
            </div>
            <img className='artwork' src={plant.img}/>
          </div>;

  }

});
