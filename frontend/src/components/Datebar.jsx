import { React, useState, useRef } from 'react'
import { FaCalendarDays } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../redux/selectedDateSlice'
import { setMonthYear } from '../redux/selectedMonthYearSlice'
import 'react-datepicker/dist/react-datepicker.css'
import DateList from './DateList'
import DatePicker from 'react-datepicker'

const Datebar = () => {
  const [dpDate, setDPDate] = useState('');
  const datePickerRef = useRef(null);

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
        // Doesn't need the conversions, check the input and return formats
        setSelectedDate(new Date(date).toISOString().split('T')[0]);
      }
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

  const resetDate = () => {
    handleSelectDate('');
    handleSelectMonthYear('');
  }


  return (
    // 64px comes from h-16 = height: 64px of Header
    <div className='flex flex-col w-60 h-[calc(100vh-64px)] bg-cyan-00 border-r-0 border-black shadow-2xl' style={{ backgroundColor: '#0C3154'}} onClick={resetDate}>
      <div className='h-14 bg-sky-000 flex items-center justify-center border-b-0 border-black shadow-2xl' >
        <div className='mr-2 ml-2 h-8 bg-sky-000 flex items-center justify-center rounded-lg bg-white cursor-pointer shadow-none' onClick={(e) => e.stopPropagation()} style={{ backgroundColor: ''}}>
          <label htmlFor="datePickerInput" className='mr-2 pl-1 text-2xl cursor-pointer' style={{ color: '#001629' }}><FaCalendarDays /></label>
          <DatePicker
            ref={datePickerRef}
            className='w-[91px] pl-1 mr-2 cursor-pointer rounded-lg'
            id="datePickerInput"
            value={selectedDate == '' ? '' : selectedDate}
            selected={dpDate == '' ? '' : dpDate}
            onChange={(date) => {
              
              setDPDate(date);
              handleSelectDate(date);
              handleSelectMonthYear('');
            }}
          />
        </div>
      </div>
      <div className='w-11/12 h-0.5 mx-auto bg-blue-300'></div>
      <div className='flex-1 overflow-y-auto'>
        <DateList />
      </div>
    </div>
  )
}

export default Datebar