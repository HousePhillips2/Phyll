import React from 'react';
import $ from 'jquery';

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
        <ul>
        <div>{friends.map(ppl=>
          <li>
            <img style={{width: '150px', heigh: '180px'}} src={ppl.img}/>
            <div style={{display:'inline-block'}}>
              <span style={{display:'inline-block',margin:'5px'}} key={ppl.user_name}>{`${ppl.user_name}: `}</span>
              <span style={{display:'inline-block',margin:'5px'}} key={ppl.plants}>{ppl.plants}</span>
            </div>
          </li>)}
        </div>
        </ul>
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
