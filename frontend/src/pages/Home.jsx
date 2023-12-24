import { React, useEffect, useState } from 'react'
import axios from 'Axios'
import Spinner from '../components/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import CatchLogsTable from '../components/home/CatchLogsTable'
import CatchLogCard from '../components/home/CatchLogCard'
import CreateCatchLogModal from '../components/home/CreateCatchLogModal'

const Home = ({selectedDate}) => {
  const [catchLogs, setCatchLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
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
    <div className='p-4 pb-2 flex flex-col'>
      <div className='flex justify-between mb-4'>
        <span className='text-center font-medium text-3xl relative left-1/2 transform -translate-x-1/2'>
          {selectedDate == null ? 'All Catches' : new Date(`${selectedDate}T00:00:00`).toLocaleDateString('en-US', options)}
        </span>
        <MdOutlineAddBox
          className='text-sky-800 text-5xl mr-8'
          onClick={() => setShowCreateModal(true)}
        />
      </div>

      {/* 64px comes from h-16 = height: 64px of Header */}
      {/* 100px is height of "Catch List" text row */}
      {/* 32px is height of table/card select */}
      {/* 36px is height of "All Catches" text */}
      {/* 16px is padding distance, x2 for top and bottom */}
      {/* UPDATE */}
      {/* Removed "Catch List" */}
      {/* Removed table/card select */}
      {/* Subtracted additional 20px (manually guessed & checked) accounting for padding and new mb under "All Catches" row*/}
      <div className='h-[calc(100vh-64px-36px-32px-20px)] overflow-y-auto'>
        {loading ? (
          <Spinner />
        ) : (
          //prop drilling from here to CatchLogCard to CatchLogCardSingle to EditCatchLogModal/DeleteCatchLogModal, catchLogs needed only for first layer
          <CatchLogCard catchLogs={catchLogs} setCatchLogs={setCatchLogs} selectedDate={selectedDate} />
        )}
      </div>
      {showCreateModal && (
        <CreateCatchLogModal setCatchLogs={setCatchLogs} onClose={() => setShowCreateModal(false)} setShowCreateModal={setShowCreateModal} />
      )}
    </div>
  )
}

export default Home