import { ajax } from 'jquery';

export default class userCard extends React.component {
  constructor(props) {
    super();
    this.state.admins = {
      admins: [],
      syle: {
        width: '150px',
        height: '180px'
      }
    };
  }
  componentWillMount(){
    this._getAdmins();
  }
  render() {
    const admin = this.state.admins[0];
    const style = this.state.style;
    return(
      // TODO: DEFINE CSS styles for user card
      // TODO: CHANGE instances of admin to user
      <div class={ 'user-card' }>
        <div class={ 'user-card image' }>
          <img style={ {style} } src={ admin.user_img }/>
        </div>
        <div class={ 'user-card information' }>
          <li style={ {display:'inline-block',margin:'5px'} }>{`${ admin.User }`}</li>
        </div>
        <div class={ 'user-card plants' }>
          { admin.plants.map( plant => {
            return(
              <div class={ 'plant' }>
                <img style={ {style} } src={ plant.plant_img }/>
                <li>{`${ plant.name }`}</li>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  _getAdmins() {
    // TODO: DELEGATE GET request to senior component
    ajax({
      method: 'GET',
      url: 'api/admins',

      success: data => {
        this.setState({ data });
      },

      error: err => {
        throw new Error(err);
      }

    });
  }
}
