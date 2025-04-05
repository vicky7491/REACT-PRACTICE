import React from 'react'
import { useState } from 'react'
import ComponentOne from './componentOne'
import ComponentTwo from './componentTwo'

const MainComponent = () => {
    
      const [count, setCount] = useState(0);
  return (
    <section>
          <ComponentOne count={count} onClickHandler={() => setCount(count + 1)}/>
          <ComponentTwo count={count} onClickHandler={() => setCount(count + 1)}/>
    </section>
  )
}

export default MainComponent