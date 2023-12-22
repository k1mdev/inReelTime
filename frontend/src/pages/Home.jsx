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
  const [showType, setShowType] = useState('card');
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
    <div className='p-4'>
      <div className='text-center font-medium text-3xl'>
        {selectedDate == null ? 'All Catches' : new Date(`${selectedDate}T00:00:00`).toLocaleDateString('en-US', options)}
      </div>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg '
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg '
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Catch List</h1>
        {/* <Link to='/catches/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link> */}
        <MdOutlineAddBox
          className='text-sky-800 text-4xl'
          onClick={() => setShowCreateModal(true)}
        />
      </div>
      {/* 64px comes from h-16 = height: 64px of Header */}
      {/* 100px is height of "Catch List" text row */}
      {/* 32px is height of table/card select */}
      {/* 36px is height of "All Catches" text */}
      {/* 16px is padding distance, x2 for top and bottom */}
      <div className='h-[calc(100vh-64px-100px-32px-36px-32px)] overflow-y-auto'>
        {loading ? (
          <Spinner />
        ) : showType == 'table' ? (
          <CatchLogsTable catchLogs={catchLogs} selectedDate={selectedDate}/>
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