import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Header from './components/Header';
import Greet from './components/Greet';
import Add from './components/Add';
import { Footer } from './components/Footer';
import MainContent from './components/MainContent';


const App = () => {
  return (
    <div>
      <Header />
      <Greet/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/product' element={<Product />} />
    </Routes>
    <MainContent/>
    <Add/>
    <Footer/>
    </div>
  )
}

export default App
