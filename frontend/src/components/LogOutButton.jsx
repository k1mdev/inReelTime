import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import axios from "Axios";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../redux/selectedDateSlice';
import { setMonthYear } from '../redux/selectedMonthYearSlice';


const LogOutButton = () => {
    const navigate = useNavigate();
    const [textColor, setTextColor] = useState('white')
    const [backgroundColor, setBackgroundColor] = useState('#001629');
    const [cookies, removeCookie] = useCookies([]);

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

    const style = {
        padding: '0.25rem',
        fontWeight: 700,
        border: '2px solid white',
        borderRadius: '0.5rem',
        color: textColor,
        backgroundColor: backgroundColor,
        transition: 'background-color 0.3s ease',
        cursor: 'pointer',
        userSelect: 'none',
    };
  
    const handleHover = () => {
        setTextColor('#001629');
        setBackgroundColor('white');
    };
  
    const handleLeave = () => {
        setTextColor('white');
        setBackgroundColor('#001629');
    };


    // useEffect(() => {
    //     const verifyCookie = async () => {
    //       if (!cookies.token) {
    //         navigate("/login");
    //       }
    //       const { data } = await axios.post(
    //         "http://localhost:5555",
    //         {},
    //         { withCredentials: true }
    //       );
    //       const { status, user } = data;
    //       setUsername(user);
    //       return status
    //         ? toast(`Hello ${user}`, {
    //             position: "top-right",
    //           })
    //         : (removeCookie("token"), navigate("/login"));
    //     };
    //     verifyCookie();
    //   }, [cookies, navigate, removeCookie]);

    const handleLogOut = () => {
        removeCookie("token");
        navigate("/login");
        console.log("Logged Out");
        handleSelectDate('');
        handleSelectMonthYear('');
    };



    return (
        <div style={style} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            <button onClick={handleLogOut}>Sign Out</button>
        </div>
    );
}

export default LogOutButton