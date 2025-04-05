import React from 'react'

const Weather = () => {
    let temp = 3;
  

    if(temp < 15){
       return <h4>it's Cold outside</h4>
    }
    else if(temp>=15 && temp<=25){
       return <h3>it's nice outside</h3>
    }
    else if(temp>25){
      return  <h2>it's hard outside</h2>
    }
}

export default Weather