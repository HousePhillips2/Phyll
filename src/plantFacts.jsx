
export default class PlantFacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const keys = Object.keys(this.props.plantFacts);
      const plantFacts = this.props.plantFacts;
      return (
       <div>
            <div style={{display: 'inline-block'}}>{keys.map(key=> <li>{`${key}: ${plantFacts[key]}`}</li>)}</div>
       </div>
      );      
  }
}
