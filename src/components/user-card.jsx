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
      <div className="card-deck-wrapper">
        <div className="card-deck">
          <div className="card card-inverse card pull-left" style={{ border: 0 }}>
            <img className="card-img-top media-middle text-sm-center" style={ {width: '150px', height: '150px'} } src={ user.img }/>
            <div className="card-block">
<<<<<<< 924459d164f7df12bde49699b9178b034ebc38b3
<<<<<<< f91b96eaf31c2958c2513f24d1784cf6ac3feed5
<<<<<<< c407e9b80df84f22b08411afef9e1acb3d09b0d6
=======
<<<<<<< 8c67e695d7c1fa60d84463f82cab9c5eafd2bb88
>>>>>>> [bug out] Handle errors with user loops and tether.js
              <h4 className="card-footer head text-success text-sm-center">{`${ user.user_name }`}</h4>
=======
              <h4 className="card-footer head text-success text-sm-center">{`${ user.user-name }`}</h4>
>>>>>>> [bug out] Handle errors with user loops and tether.js
<<<<<<< 924459d164f7df12bde49699b9178b034ebc38b3
=======
              <h4 className="card-footer head text-success text-sm-center">{`${ user.user_name }`}</h4>
>>>>>>> [feature] Add logo via custom glyph font
=======
>>>>>>> [bug out] Handle errors with user loops and tether.js
              {/*<p className="card-text graff">Some text of some sort</p>*/}
            </div>
          </div>
          <div className="card center-block" style={{ border: 0 }}>
            <div className="card-block media-middle text-sm-center center-block">
              <h1 className=""><i className="fa fa-heart fa-lg head text-danger"></i></h1>
            </div>
          </div>
          <div className="card pull-right" style={{ border: 0 }}>
            <div className="card card-inverse card" style={{ border: 0 }}>
              <img className="card-img-top media-middle text-sm-center" style={ {width: '150px', height: '150px'} } src={ user.plants[0].img }/>
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