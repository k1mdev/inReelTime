import { React, useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateCatchLog from './pages/CreateCatchLog'
import ShowCatchLog from './pages/ShowCatchLog'
import EditCatchLog from './pages/EditCatchLog'
import DeleteCatchLog from './pages/DeleteCatchLog'
import Header from './components/Header'
import Datebar from './components/Datebar'
import EditCatchLogModal from './components/home/EditCatchLogModal'
import e from 'cors'

const App = () => {


  const [selectedDate, setSelectedDate] = useState(null);


  const handleSelectDate = (date) => {
    if (date == selectedDate) {
      setSelectedDate(null)
    }
    else {
      // Store selected date as ISO string format YYYY-MM-DD
      // IDET it needs the conversions, check the input and return formats
      setSelectedDate(new Date(date).toISOString().split('T')[0]);
    }
    // console.log("Selected date (App):", selectedDate);
  }

  console.log("App Sel Date: ", selectedDate);

  return (
    <div>
      {/* Prop drilling */}
      <Header />
      <div className='flex'>
        {/* Prop drilling passing from here to Datebar to DatePicker */}
        <span className='flex-none'><Datebar selectedDate={selectedDate} handleSelectDate={handleSelectDate} /></span>
        <span className='flex-1'>
          <Routes >
          <Route path='/' element={<Home selectedDate={selectedDate}/>} />
          <Route path='/catches/create' element={<CreateCatchLog />} />
          <Route path='/catches/details/:id' element={<ShowCatchLog />} />
          <Route path='/catches/edit/:id' element={<EditCatchLogModal />} />
          <Route path='/catches/delete/:id' element={<DeleteCatchLog />} />
          </Routes>
        </span>
      </div>
    </div>
  )
}

export default App