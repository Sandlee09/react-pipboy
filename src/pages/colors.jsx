import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import '../js/color.js'

const Colors = () => {
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
            <div className="core-display" id="color-section">
            <div className="color-container">
            <div className="color-boxes">
                <div className="color-box color-box-active" id="color-box-green_default">
                    <p className="color-name">Green Default</p>
                </div>
                <div className="color-box" id="color-box-blue_nuka_cola">
                    <p className="color-name">Blue Nuka Cola</p>
                </div>
                <div className="color-box" id="color-box-orange_mojave">
                    <p className="color-name">Orange Mojave</p>
                </div>
                <div className="color-box" id="color-box-purple">
                    <p className="color-name">Purple</p>
                </div>
                <div className="color-box" id="color-box-red">
                    <p className="color-name">Red</p>
                </div>
                <div className="color-box" id="color-box-green_mutant">
                    <p className="color-name">Green Mutant</p>
                </div>
                <div className="color-box" id="color-box-pink_boy">
                    <p className="color-name">Pink Boy</p>
                </div>
                <div className="color-box" id="color-box-night_blue">
                    <p className="color-name">Night Blue</p>
                </div>
                <div className="color-box" id="color-box-ice">
                    <p className="color-name">Ice</p>
                </div>
                <div className="color-box" id="color-box-gold">
                    <p className="color-name">Gold</p>
                </div>
            </div>
        </div>
                </div>
            </header>
        </div>
    </div> 
  );
};

export default Colors;