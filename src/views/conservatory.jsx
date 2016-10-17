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
import Plant        from '../components/plant.jsx';
import Modal        from '../components/plantModal.jsx';
import Footer       from '../components/footer.jsx';

$(() => $('[data-toggle="tooltip"]').tooltip());

export default class Conservatory extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPlants();
  }

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

              <Search className="form-control form-control-lg" { ...this.props } />
            
            :
            
              null

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

