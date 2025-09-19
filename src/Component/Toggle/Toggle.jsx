import React from 'react'
import './Toggle.css'
// Correct way to import the icons
import { UilSun, UilMoon } from '@iconscout/react-unicons';
// import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClick = () =>{
        theme.dispatch({type: 'toggle'})
    }
    return (
        <div className="toggle" onClick={handleClick}>
            <UilMoon />
            <UilSun />
            <div className="t-button"
            style={darkMode? {left: '2px'}:{right:'2px'}}
            >

            </div>
        </div>
    )
}

export default Toggle