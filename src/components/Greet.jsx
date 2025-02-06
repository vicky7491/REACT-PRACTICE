import React from 'react'


const greet = "I am ";
const date = new Date();
const Greet = () => {
  return (
    <div>
       <h1>{greet} {16+2} years old</h1>  //we can also give any expression inside the curly braces
       <p> today date is {date.getDate()}</p>
    </div>
   
  )
}

export default Greet