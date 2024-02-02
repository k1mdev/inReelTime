import { React, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDelete } from 'react-icons/md'
import { FaCalendar } from 'react-icons/fa6'
import { FaRulerHorizontal } from 'react-icons/fa6'
import { FaScaleUnbalancedFlip } from 'react-icons/fa6'
import { GiFishingHook } from 'react-icons/gi'
import { FaLocationDot } from 'react-icons/fa6'
import EditCatchLogModal from './modals/EditCatchLogModal'
import DeleteCatchLogModal from './modals/DeleteCatchLogModal'

const CatchLogCardSingle = ({ catchLog }) => {
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

            <div className='flex justify-between items-center mb-1'>
                <h1 className='text-center text-2xl relative left-1/2 transform -translate-x-1/2' style={{ color: '#081D2B'}}>
                    {catchLog.species}
                </h1>
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
                    <EditCatchLogModal catchLog={catchLog} onClose={() => setShowEditModal(false)} />
            )}
            {showDeleteModal && (
                    <DeleteCatchLogModal catchLog={catchLog} onClose={() => setShowDeleteModal(false)} />
            )}
        </div>
    );
};

export default CatchLogCardSingle