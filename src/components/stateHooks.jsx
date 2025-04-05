import React from 'react'
import { useState } from 'react'
const stateHooks = () => {
    const [count, setCount] = useState(0);

    const increament = () => setCount(count +1);
    const decreament = () => setCount(count -1);
  return (
    <section>
        <h3>{count}</h3>
        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>
    </section>
  )
}

export default stateHooks