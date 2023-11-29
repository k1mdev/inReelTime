import { React, useState } from 'react'
import axios from 'Axios'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'
import { useSnackbar } from 'notistack'

const CreateCatchLog = () => {
  const [species, setSpecies] = useState('');
  const [date, setDate] = useState(new Date());
  const [length, setLength] = useState(0);
  const [lure, setLure] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {enqueueSnackbar} = useSnackbar();
  const handleSaveCatchLog = () => {
    const data = {
      species,
      date,
      length,
      lure,
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/catchLogs', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Catch created successfully', { variant: 'success' });
        // navigate('/');
        window.location = '/';
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error occurred. Please check console.');
        enqueueSnackbar('Error creating catch', { variant: 'error' });
        console.log(error);
      })
  };
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Catch</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Species</label>
          <input
            type='text'
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Length</label>
          <input
            type='number'
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Lure</label>
          <input
            type='text'
            value={lure}
            onChange={(e) => setLure(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveCatchLog}>
          Save
        </button>
      </div>
    </div>
  )
}

export default CreateCatchLog