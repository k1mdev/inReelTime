import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/curUserSlice'
import { setDate } from '../redux/selectedDateSlice'
import { setMonthYear } from '../redux/selectedMonthYearSlice'


const LogOutButton = () => {
    const navigate = useNavigate();
    const [textColor, setTextColor] = useState('white')
    const [backgroundColor, setBackgroundColor] = useState('#001629');
    const [cookies, removeCookie] = useCookies([]);

    const dispatch = useDispatch();
    
    // Unnecessary since subsequent logins auto adjusts redux state
    const curUser = useSelector(state => state.user.curUser);
    const setCurUser = (id) => {
      dispatch(setUser(id));
    }

    const selectedDate = useSelector(state => state.date.selectedDate);
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

    const handleLogOut = () => {
        removeCookie("token");
        navigate("/login");
        // Unnecessary
        setCurUser('')
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