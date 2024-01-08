import { React, useState, useEffect } from 'react'
import CatchLogCardSingle from './CatchLogCardSingle'
import { useSelector } from 'react-redux'
import axios from 'Axios'


const CatchLogCard = () => {

  // const instead?
  var curUser = useSelector(state => state.user.curUser);

  const [catchLogs, setCatchLogs] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5555/catchLogs')
      .then((response) => {
        setCatchLogs(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const selectedDate = useSelector(state => state.date.selectedDate);
  const selectedMonthYear = useSelector(state => state.monthYear.selectedMonthYear);

  const monthYrOptions = { month: 'short', year: 'numeric' };

  catchLogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  // filter userLogs immediately after fetching?
  const unfiltered = [...catchLogs];
  const userLogs = unfiltered.filter(catchLog => {
    if (catchLog.user == curUser) {
      return catchLog
    }
  });
  // Comparison valid bc compares ISO to ISO format
  const filtered = selectedDate == '' && selectedMonthYear == '' ? userLogs : (selectedDate == '' && selectedMonthYear != '' ? userLogs.filter(catchLog => new Date(`${catchLog.date}T00:00:00`).toLocaleDateString('en-US', monthYrOptions) == selectedMonthYear) : userLogs.filter(catchLog => catchLog.date == selectedDate));


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
              <CatchLogCardSingle key={item._id} catchLog={item} />
          ))}
      </div>
    )
  }
}

export default CatchLogCard