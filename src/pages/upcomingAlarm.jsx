
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Bell from '../img/bell.gif'
import ThumbsUp from '../img/vault-boy/thumbs-up.png'

const UpcomingAlarm = ({title="Alarm", hours = '00', minutes = '00'}) => {
    const navigate = useNavigate()
    const [isSnoozed, setIsSnoozed] = useState(false);

    const handleSnooze = () => {
        setIsSnoozed(true)
        setTimeout(() => navigate('/stat-status'), 5000);
    }

    return isSnoozed ? (
        <div className="container">
        <div className="screen crt-effect">
            <div className="screen-reflection"></div>
            <div className="scan"></div>
            <header className="upcomingAlarm-container">
            <div className='thumbsUp-container'>
                    <img src={ThumbsUp} alt="thumbs up"/>
                </div>
                <div className='upcomingAlarm-title-container'>
                    <h2 className="thumbsUp-title">Crisis Averted!</h2>
                    <div className='upcomingAlarm-top-border'/>
                </div>
            </header>
        </div>
    </div>     
    ) : (
    <div className="container">
        <div className="screen crt-effect">
            <div className="screen-reflection"></div>
            <div className="scan"></div>
            <header className="upcomingAlarm-container">
                <div className='upcomingAlarm-title-container'>
                    <h2 className="upcomingAlarm-title">{title}</h2>
                    <div className='upcomingAlarm-top-border'/>
                </div>

                <div className='bellAnimation'>
                    <img src={Bell} alt="bell"/>
                </div>

                <div className="upcomingAlarm-time">
                    <p>{hours}</p>
                    <div className='alarm-divider'>
                        <div/>
                        <div/>
                    </div>
                    <p>{minutes}</p>
                </div>
                
                <div className='upcomingAlarm-option-container'>
                    <div className="upcomingAlarm-option" onClick={handleSnooze}>Snooze</div>
                </div>
            
                
            </header>
        </div>
    </div>)
}
    
    
export default UpcomingAlarm