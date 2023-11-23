import { React, useState } from 'react'
import axios from 'Axios'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'
import { useSnackbar } from 'notistack'

const DeleteCatchLog = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const {enqueueSnackbar} = useSnackbar();
  const handleDeleteCatchLog = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/catches/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Catch deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error occurred. Please check console.');
        enqueueSnackbar('Error deleting catch', { variant: 'error' });
        console.log(error);
      });
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Catch</h1>
      {loading ? <Spinner /> : ''}
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
  )
}

export default DeleteCatchLog