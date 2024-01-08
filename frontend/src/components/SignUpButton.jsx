import { React, useState } from 'react'

const SignUpButton = () => {

    const [textColor, setTextColor] = useState('white')
    const [backgroundColor, setBackgroundColor] = useState('#001629');

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

    const handleClick = () => {
        window.location = '/signup';
    }
  
    return (
        <div style={style} onMouseEnter={handleHover} onMouseLeave={handleLeave}>
            Sign Up
        </div>
    );
}

export default SignUpButton