import React from 'react';
<<<<<<< bee7bb5e257545ee6f1dc51fb1d15e114f434a4a
import $ from 'jquery';

=======
>>>>>>> [bug out] Add another missing dependency
export default class Layout extends React.Component {
  constructor() {
    super();
    this.state={plantsLibrary:[]};//initate state
  }
  componentWillMount() {
    this._getPlants();
  }
  render() {
    let plants= this.state.plantsLibrary;
    return(
      <div>
        <h1>Explore Plants Conservatory</h1>
        <div>{plants.map(plant=>
          <li>
            <img style={{width: '150px', height: '150px'}} src={plant.img}/>
              <ul>
                  <li style={{display:'inline-block',margin:'5px'}}>{`name: ${plant.plant_name}`}</li>
                  <li style={{display:'inline-block',margin:'5px'}}>{`water: ${plant.water_s}`}</li>
                  <li style={{display:'inline-block',margin:'5px'}}>{`light: ${plant.light_s}`}</li>
                  <li style={{display:'inline-block',margin:'5px'}}>{`fertilize: ${plant.fertilizer_s}`}</li>
              </ul>
          </li>)}
        </div>
      </div>
    );
  }
  _getPlants() {
    $.ajax({
      method: 'GET',
      url: '/plantsLibrary',
      success: (plantsLibrary) => {
        this.setState({plantsLibrary});
      }
    });
  }
}
