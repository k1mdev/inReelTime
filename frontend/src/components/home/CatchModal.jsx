import React from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { FaFish } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaRulerHorizontal } from "react-icons/fa6";
import { GiFishingHook } from "react-icons/gi";

const CatchModal = ({ catchLog, onClose }) => {
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
            <h4 className='my-2 text-gray-500'>
                {catchLog._id}
            </h4>
            <div className='flex justify-start items-center gap-x-2'>
                <FaFish className='text-red-300 text-2xl' />
                <h2 className='my-1'>
                    {catchLog.species}
                </h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <FaCalendar className='text-red-300 text-2xl' />
                <h2 className='my-1'>
                    {catchLog.date}
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
        </div>
    </div>
  )
}

export default CatchModal