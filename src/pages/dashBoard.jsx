import React from 'react';
import $ from 'jquery';
import {LineChart} from 'react-easy-chart';
import {AreaChart} from 'react-easy-chart';
import {PieChart} from 'react-easy-chart';
import {Legend} from 'react-easy-chart';


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
            <LineChart
              axes
              xType={'text'}
              dataPoints
              lineColors={['green', 'cyan']}
              width={500}
              height={250}
              interpolate={'cardinal'}
              data={[
                [
                  { x: 'Mon', y: 25 },
                  { x: 'Tue', y: 10 },
                  { x: 'Wed', y: 25 },
                  { x: 'Thu', y: 10 },
                  { x: 'Fri', y: 12 },
                  { x: 'Sat', y: 25 },
                  { x: 'Sun', y: 25 },

                ], [
                  { x: 'Mon', y: 35 },
                  { x: 'Tue', y: 20 },
                  { x: 'Wed', y: 15 },
                  { x: 'Thu', y: 15 },
                  { x: 'Fri', y: 2 },
                  { x: 'Sat', y: 35 },
                  { x: 'Sun', y: 15 },
                ]
              ]}
            />
            <AreaChart
              axes
              xType={'text'}
              dataPoints
              areaColors={['green', 'orange']}
              width={500}
              height={250}
              interpolate={'cardinal'}
              data={[
                [
                  { x: 'Mon', y: 25 },
                  { x: 'Tue', y: 10 },
                  { x: 'Wed', y: 25 },
                  { x: 'Thu', y: 10 },
                  { x: 'Fri', y: 12 },
                  { x: 'Sat', y: 25 },
                  { x: 'Sun', y: 25 },

                ], [
                  { x: 'Mon', y: 35 },
                  { x: 'Tue', y: 20 },
                  { x: 'Wed', y: 15 },
                  { x: 'Thu', y: 15 },
                  { x: 'Fri', y: 2 },
                  { x: 'Sat', y: 35 },
                  { x: 'Sun', y: 15 },
                ]
              ]}
            />
              <PieChart
                size = {150}
                data = {
                        [
                          {key: 'Cats', value: 100},
                          {key: 'Dogs', value: 200},
                          {key: 'Other', value: 50}
                        ]
                }
              />
              <Legend
                dataId={'key'}
                horizontal
                data={
                      [
                          {key: 'Cats', value: 100},
                          {key: 'Dogs', value: 200},
                          {key: 'Other', value: 50}
                      ]
                }
              />
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
