import SearchBar from '../components/searchBar.jsx';
import PlantFacts from '../components/plantFacts.jsx';
import PlantForm from '../components/plantForm.jsx';



export default class AddPlant extends React.Component {
  constructor() {
    super();
    this.state={plantFacts:[]};//initate state
  }

  render() {
    if (this.state.plantFacts.length!==0){
      return (
        <div>
          <PlantForm plantName={this.state.plantFacts.plant_name} plantId={this.state.plantFacts.id}/>
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
    //console.log(plant, "inside addMyPlant");
    $.ajax({
      method: 'POST',
      url: '/api/plantFacts',
      json: true,
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({plant:plant}),
      success: (plantFacts) => {
        if(plantFacts.length!==0){
          this.setState({plantFacts:plantFacts[0]});
        }
      }
    });
  }
}
