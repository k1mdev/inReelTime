import { React, useEffect, useState } from 'react'
import { FaCalendarDays } from "react-icons/fa6";

import axios from 'Axios'
import Spinner from '../components/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import CatchLogsTable from '../components/home/CatchLogsTable'
import CatchLogCard from '../components/home/CatchLogCard'



const Datebar = () => {
  const [catchLogs, setCatchLogs] = useState([]);
  const [uniqueDates, setUniqueDates] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/catchLogs')
      .then((response) => {
        setCatchLogs((prevCatchLogs) => [...prevCatchLogs, ...response.data.data]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  useEffect(() => {
    if (catchLogs.length > 0) {
      const uniqueDatesSet = new Set(catchLogs.map((item) => item.date));
      setUniqueDates([...uniqueDatesSet]);
    }
  }, [catchLogs]);

  // const uniqueDates = new Set(catchLogs.map((item) => item.date));
  
  const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

  return (
    // 64px comes from h-16 = height: 64px of Header
    <div className='flex flex-col w-60 h-[calc(100vh-64px)] bg-sky-300'>
        <div className='h-14 bg-sky-600 flex items-center justify-center'>
            <span className='mr-2'>Date</span>
            <button className='bg-sky-300'><FaCalendarDays /></button>
        </div>
        <div className='flex-1 overflow-y-auto'>
        {loading ? (
          <Spinner />
        ) : (
          uniqueDates.map((date, index) => (
            <h2 key={index}>{new Date(date).toLocaleDateString('en-US', options)}</h2>
        ))
        )}
        </div>
    </div>
  )
}

export default Datebar