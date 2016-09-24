import React from 'react';
import $ from 'jquery';
import {LineChart} from 'react-easy-chart';


export default class MyDashboard extends React.Component {
  constructor() {
    super();
    this.state={plant:{}};//initate state
  }
  componentWillMount() {
    this._getData();
  }
  render() {
      const keys = Object.keys(this.state.plant);
      const plant_data = this.state.plant;
      const user =this.state.plant.User;
      return (
       <div>
            <h1>Everyday is an awesome day, {user}!</h1>
            <img style={{width: '300px', heigh: '380px', display: 'inline-block'}} src='http://www.ikea.com/ie/en/images/range-introduction/ikea-plant-and-pot__1364299621645-s4.jpg'/>
            <div style={{display: 'inline-block'}}>{keys.map(key=> <li key={key}>{`${key}: ${plant_data[key]}`}</li>)}</div>
              
       </div>
      );
  }
  _getData() {
    $.ajax({
      method: 'GET',
      url: 'api/plantData',
      success: (plant) => {
        this.setState({plant});
      }
    });
  }
}
