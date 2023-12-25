import { React, useState, useEffect } from 'react'
import axios from 'Axios'
import { useSnackbar } from 'notistack'

const EditCatchLogModal = ({ setCatchLogs, catchLog, onClose, setShowEditModal }) => {
    const [species, setSpecies] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [length, setLength] = useState(0);
    const [weight, setWeight] = useState(0);
    const [lure, setLure] = useState('');
    const [location, setLocation] = useState('');
    // const [loading, setLoading] = useState(false);
    const id = catchLog._id;
    const {enqueueSnackbar} = useSnackbar();
    useEffect(() => {
    //   setLoading(true);
      axios
        .get(`http://localhost:5555/catchLogs/${id}`)
        .then((response) => {
          setSpecies(response.data.species);
          setDate(response.data.date);
          setLength(response.data.length);
          setWeight(response.data.weight);
          setLure(response.data.lure);
          setLocation(response.data.location);
        //   setLoading(false);
        })
        .catch((error) => {
        //   setLoading(false);
          alert('An error occurred. Please check console.');
          console.log(error);
        });
    }, []);
  
    const handleEditCatchLog = () => {
      const data = {
        species,
        date,
        length,
        weight,
        lure,
        location,
      };
    //   setLoading(true);
      axios
        .put(`http://localhost:5555/catchLogs/${id}`, data)
        .then(() => {
        //   setLoading(false);
            setCatchLogs((prevLogs) => prevLogs.map((catchLog) => (catchLog._id === id ? {...catchLog, ...data} : catchLog)));
            enqueueSnackbar('Catch updated successfully', { variant: 'success' });
            setShowEditModal(false);
          
        })
        .catch((error) => {
        //   setLoading(false);
          // alert('An error occurred. Please check console.');
          enqueueSnackbar('Error updating catch', { variant: 'error' });
          console.log(error);
        })
    };




  return (
    <div
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center'
        onClick={onClose}
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[800px] max-w-full h-[700px] bg-white rounded-xl p-4 flex flex-col justify-center bg-blue-00'
        >
            <div className='p-0 flex flex-col space-y-8 mt-0 bg-yellow-00'>
                <h1 className='text-3xl my-0 text-center bg-slate-00'>Edit Catch</h1>
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto bg-red-00'>
                    <div className=' mb-1'>
                      <label className='text-xl mr-4 text-gray-500'>Species</label>
                      <input
                          type='text'
                          value={species}
                          onChange={(e) => setSpecies(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500'>Date</label>
                      <input
                          type='date'
                          value={date}
                          // Saves date in ISO string format YYYY-MM-DD
                          onChange={(e) => setDate(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500'>Length (in)</label>
                      <input
                          type='number'
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500'>Weight (lb)</label>
                      <input
                          type='number'
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500'>Lure</label>
                      <input
                          type='text'
                          value={lure}
                          onChange={(e) => setLure(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500'>Location</label>
                      <input
                          type='text'
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <button className='mt-5 p-4 bg-sky-300 m-0 rounded-xl' onClick={handleEditCatchLog}>
                    Save
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditCatchLogModal