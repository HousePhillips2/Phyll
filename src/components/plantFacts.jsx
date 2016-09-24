import React from 'react';
export default class PlantFacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const keys = Object.keys(this.props.plantFacts).slice(1);
      keys.splice(keys.indexOf('img'),1) ;
      const plantFacts = this.props.plantFacts;
      // console.log(plantFacts, 'inside PlantFacts');
      return (
       <div className='row' style={{margin:'50px'}}>
            <div className='col-xs-10'>
              <img style={{width: '50%', height:'50%'}} src={plantFacts.img}/>
              <div>{keys.map(key=> <li>{`${key}: ${plantFacts[key]}`}</li>)}</div>
            </div>
       </div>
      );      
  }
}
