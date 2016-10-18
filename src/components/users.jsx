import UserCard from './user-card.jsx';
import React    from 'react';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    if (this.props.garden) {

      const users = this.props.garden.toArray();
      let restUsers = users.filter((user)=>{return user.user_id!==this.props.id; });
      let deviceUsers = restUsers.filter((user)=>{return user.device_id!=="";});
      let non_deviceUsers = restUsers.filter((user)=>{return user.device_id==="";}) 
      deviceUsers.sort((a,b)=>{return b.health-a.health;});// ranking user based on plant's healthness
      restUsers = deviceUsers.concat(non_deviceUsers); //degrade non_device users to the bottom of the users cards
      console.log(restUsers, 'restUsers');
      return(

        <div className={ 'user-cards' }>

          { restUsers.map( user => {

            return (

              <UserCard key={ user.plant_id } user={ user }/>
              
            );

          }) }

        </div>

      );
      
    } else {

      return null;
      
    }
  }
}
