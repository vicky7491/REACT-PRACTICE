import React from 'react'

const UserStatus = (props) => {
  if(props.loggedIn && props.isAdmin){
    return <h2>Welcome Admin</h2>
  }
  else{
    return <h2>Welcome User</h2>
  }
  }
export default UserStatus