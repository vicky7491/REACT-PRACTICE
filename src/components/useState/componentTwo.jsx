import React from 'react'
import { useState } from 'react'

const ComponentTwo = ({count, onClickHandler}) => {

    const handleClick = () => onClickHandler();
  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increament</button>
    </div>
  )
}

export default ComponentTwo