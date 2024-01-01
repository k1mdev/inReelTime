import React from 'react'
import CatchLogCardSingle from './CatchLogCardSingle'
import { useSelector } from 'react-redux'


const CatchLogCard = ({catchLogs, setCatchLogs}) => {
  const selectedDate = useSelector(state => state.date.selectedDate);
  const selectedMonthYear = useSelector(state => state.monthYear.selectedMonthYear);

  const monthYrOptions = { month: 'short', year: 'numeric' };

  catchLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  const unfiltered = [...catchLogs];
  // Comparison valid bc compares ISO to ISO format
  // const filtered = selectedDate == null ? unfiltered : unfiltered.filter(catchLog => catchLog.date == selectedDate);
  const filtered = selectedDate == '' && selectedMonthYear == '' ? unfiltered : (selectedDate == '' && selectedMonthYear != '' ? unfiltered.filter(catchLog => new Date(`${catchLog.date}T00:00:00`).toLocaleDateString('en-US', monthYrOptions) == selectedMonthYear) : unfiltered.filter(catchLog => catchLog.date == selectedDate));


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