import React from 'react'


const User = () => {
    return <User name="Nitish"/>
  
}

const App = (props) => {
    console.log(props);
    
  return <section>
    <h1>Name: {props.name}</h1>
  </section>
  
  
}


export default User