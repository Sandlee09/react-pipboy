import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ScreenSize = () => {
    const navigate = useNavigate()
    const [left, setLeft] = useState(0);

    const path = window.location.pathname
    const inSettings = path.includes('settings') || path.includes('connect')

     // Function to handle left arrow click
    const handleLeftArrowClick = () => {
        setLeft((prevLeft) => prevLeft - 10);
    };

    // Function to handle right arrow click
    const handleRightArrowClick = () => {
        setLeft((prevLeft) => prevLeft + 10);
    };
  
    // Update the CSS variable for #root element
    const rootElement = document.documentElement;
    rootElement.style.setProperty('--root-left', `${left}px`);

    return (
    <div className="container">
        <IconButton 
                class='settings-button'  
                aria-label="settings"
                onClick={() => inSettings ? navigate('/stat-status') : navigate('/settings')}
            >
                <SettingsIcon  sx={{
                    color: 'var(--pip-boy-primary-color)',
                    width: '12px',
                    height: '12px'}} />
            </IconButton>
        <div className="screen crt-effect">
            <div className="screen-reflection"></div>
            <div className="scan"></div>
            <header className="settings-container">
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <IconButton 
                        className='bg-transparent'  
                        aria-label="settings"
                        onClick={handleLeftArrowClick}
                    >
                        <KeyboardDoubleArrowLeftIcon  sx={{
                            color: 'var(--pip-boy-primary-color)',
                            width: '40px',
                            height: '40px'}} />
                    </IconButton>
                    <h1 className='flex items-center'>Adjust X-axis Position</h1>
                     <IconButton  
                        className='bg-transparent'  
                        aria-label="settings"
                        onClick={handleRightArrowClick}
                    >
                        <KeyboardDoubleArrowRightIcon  sx={{
                            color: 'var(--pip-boy-primary-color)',
                            width: '40px',
                            height: '40px'}} />
                    </IconButton>
                </div>
            </div>
                
            </header>
        </div>
    </div> 
  );
};

export default ScreenSize;