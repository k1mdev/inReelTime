import { React, useEffect, useState } from 'react'
import axios from 'Axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'

const ShowCatch = () => {
  const [catchLog, setCatchLog] = useState({});
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/catches/${id}`)
      .then((response) => {
        setCatchLog(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Show Catch</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id</span>
            <span>{catchLog._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Species</span>
            <span>{catchLog.species}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Date</span>
            <span>{catchLog.date}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Length</span>
            <span>{catchLog.length}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Lure</span>
            <span>{catchLog.lure}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time</span>
            <span>{new Date(catchLog.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time</span>
            <span>{new Date(catchLog.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default ShowCatch