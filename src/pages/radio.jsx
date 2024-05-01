
import { useEffect, useState } from 'react'
import RadioGraph from '../components/radiowaves'

const Radio = () => {
    const [currentStation, setCurrentStation] = useState(0)
    const [radioSettings, setRadioSettings] = useState({
        amplitudes: [4],
        periods: [19],
        speed: 1
    })
    const radioStations = {
        'Black Mountain Radio': 'test',
        'Camp Guardian Radio': null,
        "Radio New Vegas" : "",
        "Mojave Music Radio" : "",
        "Sierra Madre Broadcast" : "",
        "743.00Hz ULF" : "",
        "Mysterious BroadCast" : ""
    }

    const handleChange = (key) => {
        setCurrentStation(key)
    }

    useEffect(() => {console.log(currentStation)}, [currentStation])

    return (
    <section className="core-display core-display-active" id="stat-status-section">
        <div className="radio-container">
            <div className='radio-stations-container'>
                <ul>
                    {Object.keys(radioStations).map(key => (
                      <li
                         className={currentStation === key ? 'active' : ''}
                         onClick={() => handleChange(key)}
                         key={key}
                       >
                        <span className={`selectedRadioIcon ${currentStation === key ? 'activeRadioIcon' : ''}`}/>
                         {key}
                       </li>
                    ))}
                </ul>
            </div>
            <div className='radio-waves-container'>
                <RadioGraph
                    color="green"
                    lineWidth={1}
                    amplitudes={radioSettings.amplitudes}
                    periods={radioSettings.periods}
                    speed={radioSettings.speed}
                />
            </div>
        </div>
    </section>)
}
    
    
export default Radio