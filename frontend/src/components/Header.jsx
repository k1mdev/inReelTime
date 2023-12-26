import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'


const Header = () => {
  return (
    // h-16 = 64px
    <div className='w-screen h-16 bg-sky-300 flex items-center border-b-2 border-black'>
        <span className='absolute left-1/2 transform -translate-x-1/2 select-none'>In Reel Time</span>
    </div>
  )
}

export default Header