import SearchBar from './searchBar.jsx';
import PlantFacts from './plantFacts.jsx';
import PlantForm from './plantForm.jsx';

export default class AddPlant extends React.Component {
  constructor() {
    super();
    this.state={plantFacts:{}};//initate state
  }

  render() {
    let length = Object.keys(this.state.plantFacts).length;
    if (length!==0){
      return (
        <div>
          <SearchBar addMyPlant={this._addMyPlant.bind(this)}/>
          <PlantForm plantName={this.state.plantFacts.Common_Name}/>
          <PlantFacts plantFacts = {this.state.plantFacts}/>
        </div>
      );
    }else{
      return (
        <div>
          <SearchBar addMyPlant={this._addMyPlant.bind(this)}/>
          <PlantFacts plantFacts = {this.state.plantFacts}/>
        </div>
      );
    }
  }

  _addMyPlant(plant){
    console.log(plant, "inside addMyPlant");
    $.ajax({
      method: 'POST',
      url: '/plantFacts',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({plant:plant}),
      success: (plantFacts) => {
        console.log(plantFacts, "plantFacts");
        this.setState({plantFacts: plantFacts[0]});
      }
    });
  }
}
