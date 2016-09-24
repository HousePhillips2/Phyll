import { ajax } from 'jquery';

export default class userCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    return(
      // TODO: DEFINE CSS styles for user card
      <div className={ 'w3-card-2' }>
        <div className={ 'user-card image' }>
          <img style={ {width: '150px', heigh: '180px'} } src={ user.userImg }/>
        </div>
        <div className={ 'user-card information' }>
          <li style={ {display:'inline-block',margin:'5px'} }>{`${ user.userName }`}</li>
        </div>
        <div className={ 'user-card plants' }>
          { user.plants.slice(0, 3).map( plant => {
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
}
