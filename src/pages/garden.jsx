export default class Layout extends React.Component {
  constructor() {
    super();
    this.state={friends:[]};//initate state
  }
  componentWillMount() {
    this._getFriends();
  }
  render() {
    let friends= this.state.friends;
    return(
      <div>
        <h1>Make The World A Better Place</h1>
        <div>{friends.map(ppl=>
          <li>
            <img style={{width: '150px', heigh: '180px'}} src={ppl.img}/>
            <div style={{display:'inline-block'}}>
              <li style={{display:'inline-block',margin:'5px'}}>{`${ppl.user_name}: `}</li>
              <li style={{display:'inline-block',margin:'5px'}}>{ppl.plants}</li>
            </div>
          </li>)}
        </div>
      </div>
    );
  }
  _getFriends() {
    $.ajax({
      method: 'GET',
      url: '/api/garden',
      success: (friends) => {
        this.setState({friends});
      }
    });
  }

}
