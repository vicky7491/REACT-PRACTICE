import axios from 'axios'
import React, { useState } from 'react'
import { Routes } from 'react-router-dom'
import About from './pages/About';


const App = () => {

  const [data, setData] = useState([])

  const getData = async ()=>{
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    setData(response.data)
  
  }

  return (
    <div className='p-10'>
        <h2 className='text-5xl bg-black-700'>Hello guys</h2>
          <div>
            <Routes>
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        <button onClick={getData} className='bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded mt-11 ml-11 active:scale-90'>get data</button>
        <div className='p-5 mt-5 bg-gray-950 text-white'>
          {data.map(function(elem,idx){
          return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
            <img className='h-40' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
          })}
        </div>
    </div>
  )
}

export default App
