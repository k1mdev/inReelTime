import React from 'react'
import { Link } from 'react-router-dom'
import { PiBook, PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from 'react-icons/md'
import { FaFish } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa6";
import { FaRulerHorizontal } from "react-icons/fa6";
import { GiFishingHook } from "react-icons/gi";
import CatchLogCardSingle from './CatchLogCardSingle'


const CatchLogCard = ({catchLogs, setCatchLogs, selectedDate, selectedMonthYear, handleSelectMonthYear}) => {

  const monthYrOptions = { month: 'short', year: 'numeric' };

  catchLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  const unfiltered = [...catchLogs];
  // Comparison valid bc compares ISO to ISO format
  // const filtered = selectedDate == null ? unfiltered : unfiltered.filter(catchLog => catchLog.date == selectedDate);
  const filtered = selectedDate == null && selectedMonthYear == null ? unfiltered : (selectedDate == null && selectedMonthYear != null ? unfiltered.filter(catchLog => new Date(`${catchLog.date}T00:00:00`).toLocaleDateString('en-US', monthYrOptions) == selectedMonthYear) : unfiltered.filter(catchLog => catchLog.date == selectedDate));


  if (filtered.length == 0) {
    return (
      <div className='flex items-center justify-center pt-8'>
        <h2>No Logged Catches</h2>
      </div>
    )
  }
  else {
    return (
      <div className='grid justify-center px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filtered.map((item) => (
              <CatchLogCardSingle catchLogs={catchLogs} setCatchLogs={setCatchLogs} key={item._id} catchLog={item} />
          ))}
      </div>
    )
  }
}

export default CatchLogCard