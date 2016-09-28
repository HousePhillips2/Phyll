import { ajax } from 'jquery';
import React from 'react';
import {Chart} from '../components/line-chart.jsx';

export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return(
      // TODO: DEFINE CSS styles for user card
      <div className="card-deck-wrapper" style={{ border: 1 }}>
        <div className="card-deck">
          <div className="card card-inverse card pull-left" style={{ border: 0 }}>
            <img className="img-circle" style={ {width: '100px', height: '100px'} } src={ user.img }/>
            <div className="card-block">
              <h4 className="card-footer head text-success text-sm-center">{`${ user.user_name }`}</h4>
              {/*<p className="card-text graff">Some text of some sort</p>*/}
            </div>
          </div>
          <div className="card center-block" style={{ border: 0 }}>
          </div>
          <div className="card pull-right" style={{ border: 0 }}>
            <div className="card card-inverse card" style={{ border: 0 }}>
              <img className="img-circle" style={ {width: '100px', height: '100px'} } src={ user.plants[0].img }/>
              <div className="card-block">
                <h4 className="card-footer head text-success text-sm-center">{`${ user.plants[0].name }`}</h4>
                {/*<p className="card-text graff">Some text of some sort</p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}