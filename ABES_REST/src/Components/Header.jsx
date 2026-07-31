import React from 'react'
import LOGO from '../assets/LOGO.png'

const Header = () => {
  return (
    <div>
      <div className='flex bg-black'>
        <img src={LOGO} alt="" />
        <h1 className='text-white'>Welcome To ABES Hotel</h1>    
         </div>   
        </div>
  )
}

export default Header