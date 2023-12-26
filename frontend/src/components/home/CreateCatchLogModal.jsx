import { React } from 'react'
import axios from 'Axios'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateCatchLogModal = ({ setCatchLogs, onClose, setShowCreateModal }) => {
    const [species, setSpecies] = useState('');
    // Default date was initially new Date()
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [length, setLength] = useState(0);
    const [weight, setWeight] = useState(0);
    const [lure, setLure] = useState('');
    const [location, setLocation] = useState('');
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {enqueueSnackbar} = useSnackbar();
    const handleSaveCatchLog = () => {
        const data = {
          species,
          date,
          length,
          weight,
          lure,
          location,
        };
        // setLoading(true);
        axios
        .post('http://localhost:5555/catchLogs', data)
        .then(() => {
            // setLoading(false);
            // May cause issues when creating new log and it's not inserted in the correct/default sorted order of logs
            // Current method does not allow for deleting newly created log without page refresh and does not add new date to datebar
            // Commenting out snackbar and uncommenting window location will revert to original method
            setCatchLogs((prevLogs) => [...prevLogs, data]);
            enqueueSnackbar('Catch created successfully', { variant: 'success' });
            setShowCreateModal(false);
            // window.location = '/';
            // Can't use navigate like in reference bc it navigates to same (root) route which it's alr on
        })
        .catch((error) => {
            // setLoading(false);
            // alert('An error occurred. Please check console.');
            enqueueSnackbar('Error creating catch', { variant: 'error' });
            console.log(error);
        })
    };


    console.log("Created date: ", date);


  return (
    <form
        className='fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center select-none'
        onClick={onClose}
    >
        <div
            onClick={(e) => e.stopPropagation()}
            className='w-[800px] max-w-full h-[700px] bg-white rounded-xl p-4 flex flex-col justify-center'
        >
            <div className='p-0 flex flex-col space-y-8 mt-0 bg-yellow-00'>
                <h1 className='text-3xl my-0 text-center bg-slate-00'>Create Catch</h1>
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto bg-red-00'>
                    <div className=' mb-1'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='speciesInput'>Species</label>
                      <input
                          id='speciesInput'
                          type='text'
                          value={species}
                          onChange={(e) => setSpecies(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='dateInput'>Date</label>
                      <input
                          id='dateInput'
                          type='date'
                          value={date}
                          // Saves date in ISO string format YYYY-MM-DD
                          onChange={(e) => setDate(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='lengthInput'>Length (in)</label>
                      <input
                          id='lengthInput'
                          type='number'
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='weightInput'>Weight (lb)</label>
                      <input
                          id='weightInput'
                          type='number'
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='lureInput'>Lure</label>
                      <input
                          id='lureInput'
                          type='text'
                          value={lure}
                          onChange={(e) => setLure(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <div className='my-1'>
                      <label className='text-xl mr-4 text-gray-500' htmlFor='locationInput'>Location</label>
                      <input
                          id='locationInput'
                          type='text'
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className='border-2 border-gray-500 px-4 py-2 w-full'
                      />
                    </div>
                    <button className='mt-5 p-4 bg-sky-300 m-0 rounded-xl' onClick={handleSaveCatchLog}>
                    Save
                    </button>
                </div>
            </div>
        </div>
    </form>
    
  )
}

export default CreateCatchLogModal