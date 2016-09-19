
export default class PlantFacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      const keys = Object.keys(this.props.plantFacts);
      const plantFacts = this.props.plantFacts;
      console.log(plantFacts, 'inside PlantFacts');
      return (
       <div className='row' style={{margin:'50px'}}>
            <div className='col-xs-2'>
              <img style={{width: '100%'}} src={plantFacts.img}/>
            </div>
            <div className='col-xs-10'>
              <div>{keys.map(key=> <li>{`${key}: ${plantFacts[key]}`}</li>)}</div>
            </div>
       </div>
      );      
  }
}
