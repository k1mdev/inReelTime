import { React, useEffect, useState } from 'react'
import axios from 'Axios'
import Spinner from '../components/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import { IoIosAddCircle } from "react-icons/io";
import CatchLogsTable from '../components/home/CatchLogsTable'
import CatchLogCard from '../components/home/CatchLogCard'
import CreateCatchLogModal from '../components/home/CreateCatchLogModal'

import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../redux/selectedDateSlice';
import { setMonthYear } from '../redux/selectedMonthYearSlice';

const Home = () => {
  const [catchLogs, setCatchLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const selectedDate = useSelector(state => state.date.selectedDate);
  const selectedMonthYear = useSelector(state => state.monthYear.selectedMonthYear);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/catchLogs')
      .then((response) => {
        setCatchLogs(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const options = { month: 'short', day: 'numeric', year: 'numeric' };




  
  return (
    <div className='h-[calc(100vh-64px)] p-0 flex flex-col bg-white'>
      <div className='flex justify-between items-center mt-4 mb-4'>
        <span className='text-center text-3xl relative left-1/2 transform -translate-x-1/2 select-none font-medium' style={{ fontFamily: 'Poppins, Verdana, sans-serif', color: '#061D33' }}>
          {selectedDate == '' && selectedMonthYear == '' ? 'All Catches' : (selectedDate == '' && selectedMonthYear != '' ? selectedMonthYear : new Date(`${selectedDate}T00:00:00`).toLocaleDateString('en-US', options))}
        </span>
        <IoIosAddCircle
          className='text-sky-900 text-5xl mr-8 cursor-pointer hover:text-black'
          // style={{ color: '#0C3154' }}
          onClick={() => setShowCreateModal(true)}
        />
      </div>

      {/* 64px comes from h-16 = height: 64px of Header */}
      {/* (Removed) 100px is height of "Catch List" text row */}
      {/* (Removed) 32px is height of table/card select */}
      {/* 36px is height of "All Catches" text */}
      {/* (Removed) 16px is padding distance, x2 for top and bottom */}
      {/* UPDATE */}
      {/* Subtracted additional 20px (manually guessed & checked) accounting for padding and new mb under "All Catches" row*/}
      <div className='h-[calc(100vh-64px-36px)] overflow-y-auto'>
        {loading ? (
          <Spinner />
          ) : (
          //prop drilling from here to CatchLogCard to CatchLogCardSingle to EditCatchLogModal/DeleteCatchLogModal, catchLogs needed only for first layer
          <CatchLogCard catchLogs={catchLogs} setCatchLogs={setCatchLogs} />
        )}
      </div>
      {showCreateModal && (
        <CreateCatchLogModal setCatchLogs={setCatchLogs} onClose={() => setShowCreateModal(false)} setShowCreateModal={setShowCreateModal} />
      )}
    </div>
  )
}

export default Home