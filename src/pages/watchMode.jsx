
import {useState} from 'react'
import WalkingPipBoy from '../img/vault_boy_walking.gif'
import Doomsday from '../img/vault-boy/doomsday.gif'

const WatchMode = () => {
    const [hours, setHours] = useState('03')
    const [minutes, setMinutes] = useState('24')
    return (
    <section className="core-display core-display-active" id="stat-status-section">
        <div className="watchMode-container">
        <div className="watchMode-left-container">
            <img src={Doomsday} alt={"vault-boy"}/>
        </div>
        <div className="watchMode-right-container">
            <p>{hours}</p>
            <div className='watch-divider'>
                <div/>
                <div/>
            </div>
            <p>{minutes}</p>
        </div>
        </div>
    </section>)
}
    
    
export default WatchMode