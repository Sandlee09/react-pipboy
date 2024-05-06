import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';

const AlarmSettings = () => {
    const navigate = useNavigate()

    const path = window.location.pathname
    const inSettings = path.includes('settings') || path.includes('connect')

    
  
    const [addingAlarm, setAddingAlarm] = useState(false);
    const [alarms, setAlarms] = useState([]);
    const [newAlarmName, setNewAlarmName] = useState('');
    const [newAlarmHour, setNewAlarmHour] = useState('');
    const [newAlarmMinute, setNewAlarmMinute] = useState('');

    // Load alarms from local storage on component mount
    useEffect(() => {
        const storedAlarms = JSON.parse(localStorage.getItem('alarms')) || [];
        setAlarms(storedAlarms);
    }, []);

    // Save alarms to local storage whenever alarms state changes
    useEffect(() => {
        localStorage.setItem('alarms', JSON.stringify(alarms));
    }, [alarms]);

    const handleAddAlarm = () => {
        if (newAlarmHour.trim() !== '' && newAlarmMinute.trim() !== '' && newAlarmName.trim() !== '') {
        const newAlarm = {
            name: newAlarmName.trim(),
            time: `${newAlarmHour.trim()}:${newAlarmMinute.trim()}`,
        };
        setAlarms([...alarms, newAlarm]);
        setNewAlarmName('');
        setNewAlarmHour('');
        setNewAlarmMinute('');
        }
        setAddingAlarm(false);
    };

    const handleDeleteAlarm = (index) => {
        const updatedAlarms = [...alarms];
        updatedAlarms.splice(index, 1);
        setAlarms(updatedAlarms);
    };

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
             {addingAlarm ? (<div>
                    <h1 className='addAlarm-title'>Add New Alarm</h1>

                    <div className='newAlarm-container'>
                        <input
                            type="text"
                            value={newAlarmName}
                            onChange={(e) => setNewAlarmName(e.target.value)}
                            placeholder="Alarm Name"
                            className="fallout-name"
                            />
                        <div className='fallout-time-container'>
                            <input
                            type="number"
                            value={newAlarmHour}
                            onChange={(e) => setNewAlarmHour(e.target.value)}
                            placeholder="hh"
                            maxLength={2}
                            max={24}
                            min={1}
                            className="fallout-number"
                            />
                            <span className="colon fallout-number">:</span>
                            <input
                            type="number"
                            value={newAlarmMinute}
                            onChange={(e) => setNewAlarmMinute(e.target.value)}
                            placeholder="mm"
                            maxLength={2}
                            max={59}
                            min={1}
                            className="fallout-number"
                            />
                            
                        </div>
                        <button className='add-alarm-button' disabled={!newAlarmName || !newAlarmHour || !newAlarmMinute} onClick={handleAddAlarm}>Add Alarm</button>
                    </div>
                </div>) : (
                    <div>
                        <h1 className='addAlarm-title'>
                            Alarms
                            <button className='add-alarm-button-small' onClick={() => setAddingAlarm(true)}>Add Alarm</button>
                        </h1>
                        <ul className='alarms-list'>
                            {alarms.map((alarm, index) => (
                            <li className='alarms-listItem' key={index}>
                                {alarm?.time}
                                <button onClick={() => handleDeleteAlarm(index)}>Delete</button>
                            </li>
                            ))}
                        </ul>
                    </div>
                )}

                
            </header>
        </div>
    </div> 
  );
};

export default AlarmSettings;