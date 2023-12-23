import { React, useState } from 'react'

const DateList = ({catchLogs, selectedDate, handleSelectDate}) => {


    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

    const datesSet = new Set(catchLogs.map((item) => {
        return item.date;

    }));
    const list = [...datesSet];
    list.sort((a, b) => new Date(b) - new Date(a));


    // console.log("Selected Date (DP):", selectedDate);
    // console.log("CatchLogs: ", catchLogs);

    return (
        <div>
            {list.map((date, index) => (
                <>
                    {/* Maybe use catchLog IDs as keys instead of list's */}
                    {/* Format date from ISO YYYY-MM-DD to Weekday, MM DD, YYYY */}
                    <a onClick={() => handleSelectDate(date)} key={index} style={{fontWeight: date == selectedDate ? 'bold' : 'normal'}}>{new Date(`${date}T00:00:00`).toLocaleDateString('en-US', options)}</a>
                    {/* Also needs key, cannot be same as abv */}
                    <br />
                </>
            ))}
        </div>
    )
}

export default DateList