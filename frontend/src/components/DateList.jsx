import { React, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../redux/selectedDateSlice';
import { setMonthYear } from '../redux/selectedMonthYearSlice';
import axios from 'Axios'



const DateList = () => {

    const [catchLogs, setCatchLogs] = useState([]);
    useEffect(() => {
        axios
        .get('http://localhost:5555/catchLogs')
        .then((response) => {
            setCatchLogs((prevCatchLogs) => [...prevCatchLogs, ...response.data.data]);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    const selectedDate = useSelector(state => state.date.selectedDate);
    const dispatch = useDispatch();
    const setSelectedDate = (date) => {
      dispatch(setDate(date));
    }
    const handleSelectDate = (date) => {
        if (date == selectedDate || date == '') {
          setSelectedDate('')
        }
        else {
          // Store selected date as ISO string format YYYY-MM-DD
          // IDET it needs the conversions, check the input and return formats
          setSelectedDate(new Date(date).toISOString().split('T')[0]);
        }
        // console.log("Selected date (App):", selectedDate);
    }

    const selectedMonthYear = useSelector(state => state.monthYear.selectedMonthYear);
    const setSelectedMonthYear = (date) => {
        dispatch(setMonthYear(date));
    }
    const handleSelectMonthYear = (monthYear) => {
        if (monthYear == selectedMonthYear) {
          setSelectedMonthYear('')
        }
        else {
          // Store selected month year as 'MMM YYYY'
          setSelectedMonthYear(monthYear);
        }
    }

    const monthYrOptions = { month: 'short', year: 'numeric' };
    const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dateSet = new Set(catchLogs.map((catchLog) => {
        return catchLog.date;

    }));
    const dateList = [...dateSet];
    dateList.sort((a, b) => new Date(b) - new Date(a));

    const monthSet = new Set(dateList.map((date) => months[date.substring(5, 7) - 1]));
    const monthList = [...monthSet];

    const yearSet = new Set(dateList.map((date) => date.substring(0, 4)));
    const yearList = [...yearSet];

    const monthYrSet = new Set (dateList.map((date) => {
        // return `${months[date.substring(5, 7) - 1]} ${date.substring(0, 4)}`;
        return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', monthYrOptions);
    }));
    const monthYrList = [...monthYrSet];

    return (
        // Needs keys for nested layers
        <div className='pl-4 py-3 select-none text-white'>
            {monthYrList.map((monthYr, monthYrindex) => (
                <div className='mb-2'>
                    {/* <br /> not needed bc <a> alr adds new line? */}
                    <a className='text-xl cursor-pointer font-medium hover:text-black'
                        onClick={(e) => {
                            e.stopPropagation();
                            handleSelectMonthYear(monthYr);
                            handleSelectDate('');
                        }}
                        style={{fontWeight: monthYr == selectedMonthYear ? 'bold' : 'normal', fontFamily: 'Poppins, Verdana, sans-serif'}}
                    >
                            {monthYr}
                    </a>
                    <div className='ml-6'>
                        {dateList.map((date, dateIndex) => (
                            new Date(`${date}T00:00:00`).toLocaleDateString('en-US', monthYrOptions) == monthYr ?
                            <div>
                                {/* Maybe use catchLog IDs as keys instead of list's */}
                                {/* Format date from ISO YYYY-MM-DD to Weekday, MM DD, YYYY */}
                                <a
                                    className='cursor-pointer hover:text-black'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSelectDate(date);
                                        handleSelectMonthYear('');
                                    }}
                                    style={{fontWeight: date == selectedDate ? 'bold' : 'normal', fontFamily: 'Poppins, Verdana, sans-serif'}
                                }>
                                    {new Date(`${date}T00:00:00`).toLocaleDateString('en-US', dateOptions)}
                                </a>
                                {/* Also needs key, cannot be same as abv */}
                                <br />
                            </div>
                            :
                            <></>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DateList