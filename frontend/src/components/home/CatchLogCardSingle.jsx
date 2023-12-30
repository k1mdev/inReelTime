import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiBook, PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { BiShow } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { FaFish } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaRulerHorizontal } from "react-icons/fa6";
import { FaScaleUnbalancedFlip } from "react-icons/fa6";
import { GiFishingHook } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

import CatchLogModal from './CatchLogModal'
import EditCatchLogModal from './EditCatchLogModal'
import DeleteCatchLogModal from './DeleteCatchLogModal'

const CatchLogCardSingle = ({ catchLogs, setCatchLogs, catchLog }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Format date from ISO YYYY-MM-DD to MM-DD-YYYY
    const formatDate = (date) => {
        const [year, month, day] = date.split('-');
        return `${month}/${day}/${year}`;
    }

    return (
        <div
            key={catchLog._id}
            className='border-2 border-gray-600 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl select-none'
            style={{backgroundColor: '#E0FCFF'}}
        >
            {/* <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                {catchLog.species}
            </h2> */}
            {/* <h4 className='my-2 text-gray-500'>
                {catchLog._id}
            </h4> */}

            <div className='flex justify-between items-center mb-1'>
                <h1 className='text-center text-2xl relative left-1/2 transform -translate-x-1/2' style={{ color: '#081D2B'}}>
                    {catchLog.species}
                </h1>
                {/* <div className='flex space-x-1'>
                    <AiOutlineEdit
                            className='text-2xl text-yellow-600 hover:text-black cursor-pointer'
                            onClick={() => setShowEditModal(true)}
                    />

                    <MdOutlineDelete
                        className='text-2xl text-red-600 hover:text-black cursor-pointer'
                        onClick={() => setShowDeleteModal(true)}
                    />
                </div> */}
            </div>

            <div className='w-11/12 h-0.5 bg-gray-500 mx-auto mb-3'></div>

            <div className='flex flex-col space-y-1.5 h-[175px] mb-3'>
                <div className='flex justify-start items-center gap-x-2'>
                    <FaCalendar className='text-sky-800 text-2xl' />
                    <h2 className=''>
                        {formatDate(catchLog.date)}
                    </h2>
                </div>
                {catchLog.length != 0 && <div className='flex justify-start items-center gap-x-2'>
                    <FaRulerHorizontal className='text-sky-800 text-2xl' />
                    <h2 className=''>
                        {catchLog.length} in
                    </h2>
                </div>}
                {catchLog.weight != 0 && <div className='flex justify-start items-center gap-x-2'>
                    <FaScaleUnbalancedFlip className='text-sky-800 text-2xl' />
                    <h2 className=''>
                        {catchLog.weight} lb
                    </h2>
                </div>}
                {catchLog.lure != '' && <div className='flex justify-start items-center gap-x-2'>
                    <GiFishingHook className='text-sky-800 text-2xl' />
                    <h2 className=''>
                        {catchLog.lure}
                    </h2>
                </div>}
                {catchLog.location != '' && <div className='flex justify-start items-center gap-x-2'>
                    <FaLocationDot className='text-sky-800 text-2xl' />
                    <h2 className=''>
                        {catchLog.location}
                    </h2>
                </div>}
                <div className='flex space-x-6 absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                    <AiOutlineEdit
                            className='text-2xl text-yellow-600 hover:text-black cursor-pointer'
                            onClick={() => setShowEditModal(true)}
                    />

                    <MdOutlineDelete
                        className='text-2xl text-red-600 hover:text-black cursor-pointer'
                        onClick={() => setShowDeleteModal(true)}
                    />
                </div>
            </div>
            
            {showEditModal && (
                    <EditCatchLogModal setCatchLogs={setCatchLogs} catchLog={catchLog} onClose={() => setShowEditModal(false)} setShowEditModal={setShowEditModal}/>
            )}
            {showDeleteModal && (
                    <DeleteCatchLogModal setCatchLogs={setCatchLogs} catchLog={catchLog} onClose={() => setShowDeleteModal(false)} setShowDeleteModal={setShowDeleteModal}/>
            )}
        </div>
    );
};

export default CatchLogCardSingle