import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'


const Header = () => {
  return (
    // h-16 = 64px
    <div className='w-screen h-16 bg-sky-000 flex items-center border-b-0 shadow-2xl' style={{ fontFamily: 'Poppins, Verdana, sans-serif', backgroundColor: '#001629', boxShadow: '0 8px 8px -6px rgba(0, 0, 0, 0.5)' }}>
        <span className='absolute left-1/2 transform -translate-x-1/2 select-none font-bold text-2xl text-white'>In Reel Time</span>
    </div>
  )
}

export default Header