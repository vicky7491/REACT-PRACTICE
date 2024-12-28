import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Header from './components/Header';


const App = () => {
  return (
    <div>
      <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product />} />
    </Routes>
    </div>
  )
}

export default App
