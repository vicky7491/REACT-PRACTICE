import React from 'react'
import { useState } from 'react'

const ComponentOne = ({count, onClickHandler}) => {
  const handleCLick = () => onClickHandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCLick}>Increament</button>
    </div>
  )
}

export default ComponentOne