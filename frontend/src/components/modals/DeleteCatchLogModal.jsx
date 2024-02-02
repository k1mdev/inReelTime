import { React } from 'react'
import axios from 'axios'

const DeleteCatchLogModal = ({ catchLog, onClose }) => {
  const id = catchLog._id;
  const handleDeleteCatchLog = () => {
    axios
      .delete(`/api/catchLogs/${id}`)
      .then(() => {
        window.location = '/';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center select-none'
        onClick={onClose}
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[800px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
        >
            <div className='p-4'>
                <h1 className='text-3xl my-4'>Delete Catch</h1>
                <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                    <h3>Are you sure you want to delete this catch?</h3>
                    <button
                    className='p-4 bg-red-600 text-white m-8 w-full'
                    onClick={handleDeleteCatchLog}
                    >
                    Yes
                    </button>
                </div>
            </div>
        </div>
    </form>
    
  )
}

export default DeleteCatchLogModal