import React from 'react';
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TerminalScreen from '../components/terminal';


const GoogleConnection = () => {
    const navigate = useNavigate()

    const path = window.location.pathname
    const inSettings = path.includes('settings') || path.includes('connect')


    return (
    <div className="container">
            <IconButton 
                class='watch-button'  
                aria-label="settings"
                onClick={() => navigate('/connection')}
                    
            >
                <ArrowBackIosNewIcon  sx={{
                    color: '#5A7346',
                    width: '12px',
                    height: '12px'}} />
            </IconButton>
            <div className="screen crt-effect">
                <header className="settings-container" 
                    style={{
                        height: '100%',
                        padding: '0px',
                        overflow: 'hidden'
                        }}>
                    <TerminalScreen/>
                    
                </header>
            </div>
    </div> 
  );
};

export default GoogleConnection;