import React from 'react'
import { Link } from 'react-router-dom'
import { PiBook, PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { FaFish } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaRulerHorizontal } from "react-icons/fa6";
import { GiFishingHook } from "react-icons/gi";





const CatchCard = ({catches}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {catches.map((item) => (
            <div
                key={item._id}
                className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
            >
                {/* <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                    {item.species}
                </h2> */}
                <h4 className='my-2 text-gray-500'>
                    {item._id}
                </h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <FaFish className='text-red-300 text-2xl' />
                    <h2 className='my-1'>
                        {item.species}
                    </h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <FaCalendar className='text-red-300 text-2xl' />
                    <h2 className='my-1'>
                        {item.date}
                    </h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <FaRulerHorizontal className='text-red-300 text-2xl' />
                    <h2 className='my-1'>
                        {item.length}
                    </h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <GiFishingHook className='text-red-300 text-2xl' />
                    <h2 className='my-1'>
                        {item.lure}
                    </h2>
                </div>
                <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                    <Link to={`/catches/details/${item._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
                    </Link>
                    <Link to={`/catches/edit/${item._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/>
                    </Link>
                    <Link to={`/catches/delete/${item._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black'/>
                    </Link>
                </div>
            </div>

        ))}
    </div>
  )
}

export default CatchCard