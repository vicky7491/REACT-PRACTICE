import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='py-7 px-10 bg-emerald-600 text-white flex items-center justify-between'>
        <h2 className='text-2xl '>Vicky <input className='text-black' type="text" /></h2>
        <div className='flex gap-10 text-lg underline'>

            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
            {/* <a className='text-xl underline' href="/">Home</a>
            <a className='text-xl underline' href="/about">About</a>
            <a className='text-xl underline' href="/contact">Contact</a>
            <a className='text-xl underline' href="/product">Product</a> */}
        </div>
    </div>

  )
}

export default Header