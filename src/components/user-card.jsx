import { ajax } from 'jquery';

export default class userCard extends React.Component {

  constructor() {
    super();
    this.state={admins:[]};//initate state
  }

  componentWillMount() {
    this._getAdmins();
  }

  render() {
    const admin = this.state.admins[0] || { plants: [] };
    console.log('admin:', admin);

    return(
      // TODO: DEFINE CSS styles for user card
      // TODO: CHANGE instances of admin to user
      <div className={ 'user-card' }>
        <div className={ 'user-card image' }>
          <img style={ {width: '150px', heigh: '180px'} } src={ admin.user_img }/>
        </div>
        <div className={ 'user-card information' }>
          <li style={ {display:'inline-block',margin:'5px'} }>{`${ admin.User }`}</li>
        </div>
        <div className={ 'user-card plants' }>
          { admin.plants.map( plant => {
            // TODO: REMOVE return statement
            return(
              <div className={ 'plant' }>
                <img style={ {width: '150px', heigh: '180px'} } src={ plant.img }/>
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
      url: 'api/admin',

      success: admins => {
        console.log(admins);
        this.setState( {admins} );
      },

      error: err => {
        throw new Error(err);
      }

    });
  }
}
