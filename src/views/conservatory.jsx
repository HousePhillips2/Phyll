import $            from 'jquery';
import React        from 'react';
import { render }   from 'react-dom';
import { Link }     from 'react-router';
import { connect }  from 'react-redux';

import Users        from '../components/users.jsx';
import Search       from '../components/searchBar.jsx';
import PlantFacts   from '../components/plantFacts.jsx';
import UserInfo     from '../components/userInfo.jsx';
import Login        from '../components/login.jsx';
import Logout       from '../components/logout.jsx';
import Plant        from '../components/plant.jsx';
import Modal        from '../components/plantModal.jsx';
import Footer       from '../components/footer.jsx';

// import AddPlant     from '../components/addPlant.jsx';
// import Map          from '../components/map/index.jsx';
// import Chatbot      from '../components/chatbot.jsx';
// import DashBar      from '../components/dashboardBar.jsx';

import { _getGarden, _getPlants, _fetchPlant } from '../redux/actions/helpers';
import { toggleNewPlant } from '../redux/actions/actions';

require('../stylesheets/main.scss');

$(() => $('[data-toggle="tooltip"]').tooltip());

class Conservatory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlants();
  }

  // TODO: The initial div needs to go in refactor as it is duplicated in nav

  render() {
    let plantFacts = this.props.plantFacts ? <PlantFacts id="plantFacts" { ...this.props }/> : <div id="plantFacts"></div>;
    let plants;
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
        { plants ? 
          <div>
            { plants.map( plant => {
              return (

                <Modal { ...this.props } handleClick={ this.props.handleClickPlant } plant={ plant } key={ plant.plant_name }/>
                
              );
            }) }
          </div>
          : null
        }
        <Footer { ...this.props} />
      </div>

    );
  }
  
}

function mapDispatchToProps(dispatch) {
  return {
    fetchGarden    : () => dispatch(_getGarden()),
    fetchPlants   : () => dispatch(_getPlants()),
    toggleNewPlant: () => dispatch(toggleNewPlant()),
    fetchPlant    : (plant) => dispatch(_fetchPlant(plant))
  };
}

function mapStateToProps(state) {
  const user = state.get('user');
  if( state.get('loggedIn') ){
    return {
      plants: state.getIn([ 'plants', 'plants' ]),
      garden: state.getIn([ 'garden', 'garden' ]),
      user_plants: user.get('user_plants'),
      loggedIn: state.get('loggedIn'),
      username: user.get('name'),
      image: user.get('image'),
      firstName: user.get('firstName'),
      lastName: user.get('lastName'),
      plantFacts: state.getIn(['plantFacts', 'plantFacts']),
      id: user.get('id'),
      newPlant: state.get('newPlant')
    };
  }

  if (state.get('plantFacts') ) {
    return {
      plantFacts: state.getIn(['plantFacts', 'plantFacts']),
      plants: state.getIn([ 'plants', 'plants' ]),
      garden: state.getIn([ 'garden', 'garden' ]),
      loggedIn: state.get('loggedIn'),
      id: state.get('id'),
      newPlant: state.get('newPlant')
    };
  }

  return {
    plants: state.getIn([ 'plants', 'plants' ]),
    garden: state.getIn([ 'garden', 'garden' ]),
    loggedIn: state.get('loggedIn'),
    id: state.get('id'),
    newPlant: state.get('newPlant')
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Conservatory);

