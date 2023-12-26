import { React, useEffect, useState } from 'react'
import { FaCalendarDays } from "react-icons/fa6";
import { GrPowerReset } from "react-icons/gr";


import axios from 'Axios'
import Spinner from '../components/spinner'
import { Link } from 'react-router-dom'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import CatchLogsTable from '../components/home/CatchLogsTable'
import CatchLogCard from '../components/home/CatchLogCard'
import DateList from './DateList';
import { useNavigate } from 'react-router-dom';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


const Datebar = ({selectedDate, handleSelectDate, selectedMonthYear, handleSelectMonthYear}) => {
  const [catchLogs, setCatchLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);

  // Is this necessary?
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/catchLogs')
      .then((response) => {
        setCatchLogs((prevCatchLogs) => [...prevCatchLogs, ...response.data.data]);
        setLoading(false);
        // Does this need window.location too?
        // navigate('/') was originally abv but produced not defined warning
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  const formatDate = (date) => {
    if (date === null) {
      return '';
    }
    if (date.length == 10 && date[2] == '/' && date[4] == '/') {
      return date;
    }
    else if (date.length == 10 && date[4] == '-' && date[6] == '-')  {
      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    }
    else {
      return date;
    }
  }


  // useEffect(() => {
  // }, [selectedDate]);


  return (
    // 64px comes from h-16 = height: 64px of Header
    <div className='flex flex-col w-60 h-[calc(100vh-64px)] bg-sky-300 border-r-2 border-black'>
      <div className='h-14 bg-sky-600 flex items-center justify-center border-b-2 border-black'>
          <span className='mr-2'><label htmlFor="datePickerInput" className='cursor-pointer text-3xl'><FaCalendarDays /></label></span>
          <DatePicker
            className='w-[91px] pl-1 mr-2 cursor-pointer'
            id="datePickerInput"
            value={selectedDate == null ? '' : selectedDate}
            selected={date == null ? '' : date}
            // onChange={(date) => {
            //   setDate(date);
            //   handleSelectDate(date);
            // }}
            onSelect={(date) => {
              setDate(date);
              handleSelectDate(date);
              handleSelectMonthYear(null);
            }}
          />
          <GrPowerReset
            onClick={() => {
              handleSelectDate(null);
              handleSelectMonthYear(null);
            }}
            className='cursor-pointer text-xl h-6 w-6 p-[1.5px] bg-white rounded-full hover:bg-gray-300 active:bg-blue-700'
          />
        </div>
        <div className='flex-1 overflow-y-auto'>
        {loading ? (
          <Spinner />
        ) : (
          <DateList catchLogs={catchLogs} selectedDate={selectedDate} handleSelectDate={handleSelectDate} selectedMonthYear={selectedMonthYear} handleSelectMonthYear={handleSelectMonthYear} />
        )}
        </div>
    </div>
  )
}

export default Datebar