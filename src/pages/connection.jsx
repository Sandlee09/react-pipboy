import React from 'react';
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';


const Connection = () => {
    const navigate = useNavigate()

    const path = window.location.pathname
    const inSettings = path.includes('settings') || path.includes('connect')


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
                <div className='settings-title-container'>
                    <h2 className="settings-title">CONNECTION SETUP</h2>
                    <div className='settings-top-border'/>
                </div>
                
                <div className='settings-option-container'>
                    <div className="settings-option" onClick={() => navigate('/google-connection')}>Hack Google</div>
                    
                </div>
            

                <div className='settings-title-container'>
                    <div className='settings-bottom-border'/>
                </div>
                
            </header>
        </div>
    </div> 
  );
};

export default Connection;