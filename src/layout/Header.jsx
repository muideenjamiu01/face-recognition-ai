import React from 'react'
import logo from '../images/TestAssessify.png'

const Header = () => {
  return (
    <div className='flex py-3 shadow-md'>
        <img className='w-[150px] block h-[40px]' src={logo} alt="logo" />
    </div>
  )
}

export default Header