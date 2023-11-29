import { React, useState } from 'react'

const DatePicker = ({catchLogs}) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

    console.log("From date picker: ");
    console.log(catchLogs);
    console.log(typeof(catchLogs));

    const datesSet = new Set(catchLogs.map((item) => item.date));
    const list = [...datesSet];

    return (
        <div>
            {list.map((date, index) => (
                <h3 key={index}>{new Date(date).toLocaleDateString('en-US', options)}</h3>
            ))}
        </div>
    )
}

export default DatePicker