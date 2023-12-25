import { React, useState } from 'react'

const DateList = ({catchLogs, selectedDate, handleSelectDate, selectedMonthYear, handleSelectMonthYear }) => {


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
    console.log(monthYrList);

    return (
        // Needs keys for nested layers
        <div className='pl-4 py-2 select-none'>
            {monthYrList.map((monthYr, monthYrindex) => (
                <div>
                    {/* <br /> not needed bc <a> alr adds new line? */}
                    <a className='text-xl text-green-600'
                        onClick={() => {
                            handleSelectMonthYear(monthYr);
                            handleSelectDate(null);
                        }}
                        style={{fontWeight: monthYr == selectedMonthYear ? 'bold' : 'normal'}
                    }>
                            {monthYr}
                    </a>
                    <div className='ml-6'>
                        {dateList.map((date, dateIndex) => (
                            new Date(`${date}T00:00:00`).toLocaleDateString('en-US', monthYrOptions) == monthYr ?
                            <div>
                                {/* Maybe use catchLog IDs as keys instead of list's */}
                                {/* Format date from ISO YYYY-MM-DD to Weekday, MM DD, YYYY */}
                                <a
                                    onClick={() => {
                                        handleSelectDate(date);
                                        handleSelectMonthYear(null);
                                    }}
                                    style={{fontWeight: date == selectedDate ? 'bold' : 'normal'}
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