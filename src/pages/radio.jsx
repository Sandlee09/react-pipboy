
import { useEffect, useState } from 'react'
import RadioGraph from '../components/radiowaves'
import {getFileName,  blackMountainSongs, newVegasSongs, mojaveSongs, mysteriousBroadcastSongs, ulfSongs, sierraMadreSongs } from '../utils/music'

const Radio = () => {
    const [currentStation, setCurrentStation] = useState(0)
    const [currentSong, setCurrentSong] = useState()
    const [radioSettings, setRadioSettings] = useState({
        amplitudes: [4],
        periods: [19],
        speed: 1
    })
    const radioStations = {
        'Black Mountain Radio': 'active',
        'Camp Guardian Radio': null,
        "Radio New Vegas" : "active",
        "Mojave Music Radio" : "active",
        "Sierra Madre Broadcast" : "active",
        "743.00Hz ULF" : "active",
        "Mysterious BroadCast" : "active"
    }

    const handleChange = (key) => {
        setCurrentStation(key)
    }

    const generateRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        if(currentStation) {
            setRadioSettings({
                aplitudes: [generateRandom(1,30)],
                periods: [generateRandom(25,100)],
                speed: 1
            })
    
            let song = null
            const rand = generateRandom(0, 5)
            if(currentStation == "Black Mountain Radio") {
                song = blackMountainSongs[rand]
            }

            if(currentStation == "Radio New Vegas") {
                song = newVegasSongs[rand]
            }

            if(currentStation == "Mojave Music Radio") {
                song = mojaveSongs[rand]
            }

            if(currentStation == "Sierra Madre Broadcast") {
                song = sierraMadreSongs[rand]
            }

            if(currentStation == "743.00Hz ULF") {
                song = ulfSongs[rand]
            }

            if(currentStation == "Mysterious BroadCast") {
                song = mysteriousBroadcastSongs[rand]
            }

            setCurrentSong(song)
        }
    }, [currentStation])

    useEffect(() => {
        var audio = document.getElementById('player');
        audio?.play();
    }, [currentSong])


    return (
    <section className="core-display core-display-active" id="stat-status-section">
        <div className="radio-container">
            <div className='radio-stations-container'>
                <ul>
                    {Object.keys(radioStations).map(key => (
                      <li
                        style={{opacity: radioStations[key] ? '1' : '0.3'}}
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
                {currentSong && 
                <audio id="player" autoplay loop>
                    <source src={currentSong} type="audio/mp3"/>
                </audio>}

                {currentSong && <p className='nowPlaying'>Now Playing: {getFileName(currentSong)}</p>}
            </div>
        </div>
    </section>)
}
    
    
export default Radio