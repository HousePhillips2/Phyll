
export default class PlantFacts extends React.Component {
  constructor() {
    super();
    this.state={plantFacts:{}};//initate state
  }
  componentWillMount() {
    this._getData();
  }
  render() {
      const keys = Object.keys(this.state.plantFacts);
      const plantFacts = this.state.plantFacts;
      return (
       <div>
            <div style={{display: 'inline-block'}}>{keys.map(key=> <li>{`${key}: ${plantFacts[key]}`}</li>)}</div>
       </div>
      );      
  }
  _getData() {
    $.ajax({
      method: 'GET',
      url: '/plantFacts',
      success: (plantFacts) => {
        console.log(plantFacts, 'facts froms server')
        this.setState({plantFacts})
      }
    })
  }
}
