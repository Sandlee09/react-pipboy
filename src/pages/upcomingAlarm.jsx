
import {useState, useEffect} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Bell from '../img/bell.gif'
import ThumbsUp from '../img/vault-boy/thumbs-up.png'
import OnlyYou from '../assets/playlist/Only You.mp3'

const UpcomingAlarm = () => {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [isSnoozed, setIsSnoozed] = useState(false);
    const [snoozeCountdown, setSnoozeCountdown] = useState(60);
    const [title, setTitle] = useState('')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')

    const handleSnooze = () => {
        setIsSnoozed(true)
        setSnoozeCountdown(60)
    }

    useEffect(() => {
        var audio = document.getElementById('audio-element');
        audio?.play();
    }, [])

    useEffect(() => {
        setTitle(searchParams.get('name'))
        setHours(searchParams.get('hour'))
        setMinutes(searchParams.get('minute'))
    }, [])

    useEffect(() => {
        let countdownInterval;
      
        if (isSnoozed) {
          countdownInterval = setInterval(() => {
            setSnoozeCountdown((prevCountdown) => {
              if (prevCountdown === 1) {
                setIsSnoozed(false);
                navigate('/stat-status');
                clearInterval(countdownInterval);
                return 60; // Reset countdown to 60 seconds
              } else {
                return prevCountdown - 1;
              }
            });
          }, 1000);
        }
      
        return () => clearInterval(countdownInterval);
      }, [isSnoozed, navigate]);

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
                    <h4 className="thumbsUp-countdown">Resetting in: {snoozeCountdown}secs</h4>
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
                <audio id="audio-element" autoplay loop>
                    <source src={OnlyYou} type="audio/mp3"/>
                </audio>
                
            </header>
        </div>
    </div>)
}
    
    
export default UpcomingAlarm