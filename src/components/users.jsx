import UserCard from './user-card.jsx';
import React from 'react';

export default class Users extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const users = this.props.users;
    return(
      <div className={ 'user-cards' }>
        { users.map( user => {
          return (
            <UserCard user= { user }/>
          );
        }) }
      </div>
    );
  }
}
