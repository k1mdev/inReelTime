import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaFish } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaRulerHorizontal } from "react-icons/fa6";
import { GiFishingHook } from "react-icons/gi";
import { Link } from 'react-router-dom';

import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'

const CatchLogModal = ({ catchLog, onClose }) => {
  return (
    <div
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
        >
            <AiOutlineClose
                className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                onClick={onClose}
            />
            <div className='flex justify-center items-baseline'>
                <h4 className='my-2 text-black text-4xl text-center pr-6'>
                    {catchLog.species}
                </h4>
                <Link to={`/catches/edit/${catchLog._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/>
                </Link>
                <Link to={`/catches/delete/${catchLog._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black'/>
                </Link>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <FaCalendar className='text-red-300 text-2xl' />
                <h2 className='my-1'>
                    {new Date(catchLog.date).toLocaleDateString()}
                </h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <FaRulerHorizontal className='text-red-300 text-2xl' />
                <h2 className='my-1'>
                    {catchLog.length}
                </h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <GiFishingHook className='text-red-300 text-2xl' />
                <h2 className='my-1'>
                    {catchLog.lure}
                </h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                {/* <Link to={`/catches/details/${catchLog._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
                </Link> */}

            </div>
        </div>
    </div>
  )
}

export default CatchLogModal