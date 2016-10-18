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
import Map          from '../components/map/index.jsx';
import Chatbot      from '../components/chatbot.jsx';
import AddPlant     from '../components/addPlant.jsx';
import Dashboard    from '../components/dashboard/dashboardMain.jsx';
import Footer       from '../components/footer.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let dashboard = this.props.loggedIn ? <Dashboard id="dashboard" { ...this.props }/> : <div id="dashboard"></div>;
    let plantFacts = this.props.plantFacts ? <PlantFacts id="plantFacts" { ...this.props }/> : <div id="plantFacts"></div>;

    return(

      <div className="container-fluid">
        <div className="row search">
          <div className="column jumbotron jumbo-bg">

          { this.props.plants ?

            <Search className="form-control form-control-lg" { ...this.props } />
          :

            null

          }

          </div>
        </div>

        { plantFacts }

        { dashboard }

        <div className="row content">
          <div className="content-2 col-lg-7 push-lg-5 container-fluid">
            <div className="card-wrapper">

              <Chatbot { ...this.props }/>

              <div className="card  hidden-sm-down">
                <div className="card-header">
                  Conservatory
                </div>
                <div className="card-block">
                  <p className="card-text">There are so many wonderful plants for your home. <Link to="/conservatory">Discover the perfect one</Link>.</p>
                </div>
              </div>
              <div className="card hidden-md-down">
                <div className="card-header">
                  Active Bots
                </div>
                <Map/>
              </div>
              <div className="card hidden-sm-down">
                <div className="card-header">
                  Make a phyll.bot of your own
                </div>
                <div className="card-block">
                  <p className="card-text">Get on the map with your very own bot. <a href="https://github.com/housephillips2/PhyllOS">PhyllOS is yours</a> to perfect.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="content-1 col-lg-5 pull-lg-7 container-fluid">

            <Users { ...this.props }/>

          </div>
        </div>

        <Footer { ...this.props} />

      </div>

    );
    
  }
}

