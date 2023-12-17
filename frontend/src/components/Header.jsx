import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineAddBox } from 'react-icons/md'


const Header = () => {
  return (
    // h-16 = 64px
    <div className='w-screen h-16 bg-sky-400 flex items-center justify-between'>
        <span className='absolute left-1/2 transform -translate-x-1/2'>In Reel Time</span>
        <span className='ml-auto pr-4'>
          <Link to='/catches/create'>
            <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
        </span>
    </div>
  )
}

export default Header