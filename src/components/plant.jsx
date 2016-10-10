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
    let plant = this.props.plant;
    return (
      <div>
        {/*<label>{plant.plant_name}</label>*/}
        <div>
          <a href="#">
            <img 
              style={{width: '150px', height: '150px'}} 
              className='img-rounded' src={plant.plant_img} 
              data-toggle="tooltip" data-placement="top" 
              title={plant.plant_name}
            />
          </a>
        </div>
      </div>
    );
  }

};




// import React from 'react';

// export default class Plant extends React.Component {

//     constructor() {
//     super();
//   }

//   handleClick(){
//     if(this.props.handleClick){
//       this.props.handleClick(this.props.plant);
//     }
//   }

//   render(){
//     let plant = this.props.plant;
//     return (
//             <div>
//               <label>{plant.plant_name}</label>
//               <div>
//                   <img style={{width: '200px', height: '200px'}} className='img-circle' src={plant.plant_img} />
//               </div>
//               <br/>
//               <label>light: {plant.light_s}</label>
//                <br/>
//               <label>water: {plant.water_s}</label>
//                <br/>
//               <label>poisonous: {plant.poisonous_s}</label>
//                <br/>
//             </div>
//             );
//   }

// };
