import SearchBar from './searchBar.jsx';
import PlantFacts from './plantFacts.jsx';

export default class AddPlant extends React.Component {
  constructor() {
    super();
    this.state={plantFacts:{}};//initate state
  }

  _addMyPlant(){
    $.ajax({
      method: 'GET',
      url: '/plantFacts',
      success: (plantFacts) => {
        this.setState({plantFacts});
      }
    });
  }

  render() {
    console.log(this,'add plant Component');
    return (
      <div>
        <SearchBar will={'hi'} addMyPlant={this._addMyPlant.bind(this)}/>
        <PlantFacts plantFacts = {this.state.plantFacts}/>
      </div>
    )
  }

}