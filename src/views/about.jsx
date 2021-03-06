import $            from 'jquery';
import React        from 'react';
import { render }   from 'react-dom';
import { Link }     from 'react-router';

import Users        from '../components/users.jsx';
import Search       from '../components/searchBar.jsx';
import PlantFacts   from '../components/plantFacts.jsx';
import UserInfo     from '../components/userInfo.jsx';
import Login        from '../components/login.jsx';
import Logout       from '../components/logout.jsx';
import Footer       from '../components/footer.jsx';
import Devs         from '../components/devs.jsx';
import Journals     from '../components/journals.jsx';

export default class Conservatory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlants();
    this.props.fetchDevs();
    this.props.fetchJournals();
  }

  render() {
    let plants;
    let plantFacts = this.props.plantFacts ? <PlantFacts id="plantFacts" { ...this.props }/> : null;
    let devs = this.props.devs ? <Devs {...this.props}/> : null;
    let journals = this.props.journals ? <Journals {...this.props}/> : null;
    if (this.props.plants) {
      plants = this.props.plants.toArray();
    }

    return(

      <div className="container-fluid">
        <div className="row search">
          <div className="column jumbotron jumbo-bg">

            { this.props.plants ?
              <Search className="form-control form-control-lg" { ...this.props } /> : null
            }

          </div>
        </div>

        { plantFacts }

        <div className="row content">
          <div className="content xs-12 container-fluid">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-header">
                  What we do
                </div>
                <div className="card-block">
                  <p className="card-text">Phyll is an open-source hardware and software platform for monitoring and improving the lives of houseplants.</p>
                  <p className="card-text">Central to Phyll's philosophy is simplicity without sacrifice. Register your device and add a plant to get started with watering alerts and vital soil quality data. Just having a look? No problem, Phyll's trove of horticultural best practices is available for all visitors, with or without our equipment, and our public social dashboard is always there to show the world where your green thumb ranks against other members of the community.</p>
                </div>
              </div>

              { devs }

              { journals }

              <div className="card">
                <div className="card-header">
                  What we used
                </div>
                <div className="card-block">
                  <p className="card-text"><a href="https://facebook.github.io/react/">React</a> &middot; <a href="http://redux.js.org">Redux</a> &middot; <a href="https://www.postgresql.org">PostgreSQL</a> &middot; <a href="https://www.mongodb.com">MongoDB</a> &middot; <a href="https://expressjs.com">Express</a> &middot; <a href="https://webpack.github.io">Webpack</a> &middot; <a href="https://www.twilio.com">Twilio</a> &middot; <a href="http://passportjs.org">Passport</a> &middot; <a href="https://facebook.github.io/immutable-js/">Immutable</a> &middot; <a href="http://www.chartjs.org">Chart.js</a> &middot; <a href="http://johnny-five.io">Johnny-Five</a> &middot; <a href="https://tessel.io">Tessel</a> &middot; <a href="https://www.raspberrypi.org">Raspberry Pi</a> &middot; <a href="http://getbootstrap.com">Bootstrap</a>  &middot; <a href="https://api.ai/">api.ai</a> &middot; <a href="https://circleci.com">CircleCI</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer { ...this.props} />

      </div>

    );

  }
}
