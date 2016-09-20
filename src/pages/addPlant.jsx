import SearchBar from '../components/searchBar.jsx';
import PlantFacts from '../components/plantFacts.jsx';
import PlantForm from '../components/plantForm.jsx';

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
          <PlantForm plantName={this.state.plantFacts.Common_Name} />
          <PlantFacts plantFacts = {this.state.plantFacts}/>
        </div>
      );
    }else{
      return (
        <div>
          <SearchBar fetchPlant={this._fetchPlant.bind(this)}/>
        </div>
      );
    }
  }

  _fetchPlant(plant){
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
