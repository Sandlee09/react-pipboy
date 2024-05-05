
import vault_boy_walking from '../img/vault_boy_walking.gif'
import hungry from "../img/vault-boy/hungry.gif"
import xray from "../img/vault-boy/xray.gif"
import gun from "../img/gun.png"
import helmet from "../img/helmet.png"
import crosshair from "../img/dmg-physical.png"
import armor from "../img/dmg-shield.png"
import lightning from "../img/dmg-energy.png"
import radiation from "../img/dmg-radiation.png"
import InfoBar from '../components/infoBar'
import { useEffect, useState } from 'react'
import ActiveItems from '../components/activeItems'

const StatStatus = () => {
    const [currentTime, setCurrentTime] = useState({})
    const [appendiges, setAppendiges] = useState({
        head: 100,
        leftArm: 50,
        rightArm: 100,
        rightLeg: 100,
        leftLeg: 100
    })

    function updateMilitaryTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
      
        const militaryHours = hours < 10 ? `0${hours}` : `${hours}`;
        const militaryMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const militarySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      
        
        setCurrentTime({
            "hours": militaryHours,
            "minutes": militaryMinutes,
            "seconds": militarySeconds
        })
      }

    useEffect(() => {
        updateMilitaryTime()
        setInterval(updateMilitaryTime, 20000);
    }, [])

    return (
    <section className="core-display core-display-active" id="stat-status-section">
        <div className="vault-boy-container">
            <div className='vault-boy-top-container'>
                    <div className="progressBar">
                        <div className="progressBarPercentage" style={{width: `${appendiges.head}%`}}/>
                    </div>
            </div>
            <div className='vault-boy-middle-container'>
                <div className='vault-boy-left-container'>
                    <div className="progressBar">
                        <div className="progressBarPercentage" style={{width: `${appendiges.leftArm}%`}}/>
                    </div>
                    <div className="progressBar">
                        <div className="progressBarPercentage" style={{width: `${appendiges.leftLeg}%`}}/>
                    </div>
                </div>
                <img id="vault-boy-walking"
                 src={xray} 
                 alt="a fallout vault boy walking"/>
                <div className='vault-boy-right-container'>
                <div className="progressBar">
                        <div className="progressBarPercentage" style={{width: `${appendiges.rightArm}%`}}/>
                    </div>
                    <div className="progressBar">
                        <div className="progressBarPercentage" style={{width: `${appendiges.rightLeg}%`}}/>
                    </div>
                </div>
            </div>
           
        </div>

        <div className="info-container">
            <div className="info-icon info-icon-large info-icon-brackets">
                <img src={gun} alt="brackets"/>
            </div>
            <div className="info-icon info-icon-thin info-icon-java-container">
                <img src={crosshair} alt="java programming language logo"/>
                <p>13</p>
            </div>
            <div className="info-icon info-icon-large info-icon-web">
                <img src={helmet} alt="web application icon"/>
            </div>
            <div className="info-icon info-icon-thin info-icon-spring">
                <img src={armor} alt="spring framework logo"/>
                <p>16</p>
            </div>
            <div className="info-icon info-icon-thin info-icon-diagram">
                <img src={lightning}
                     alt="a diagram icon that symbolises databases conception"/>
                <p>7</p>
            </div>
            <div className="info-icon info-icon-thin info-icon-security">
                <img src={radiation} alt="web security icon"/>
                <p>5</p>
            </div>
        </div>
        <div className='active-items-bar-container'>
            <ActiveItems text={'STIMPAK (1)'}/>
            <ActiveItems text={'RADAWAY (2)'}/>
        </div>
        <div className='info-bar-container'>
            <InfoBar text={'HP 57/135'} textAlign={'left'}/>
            <InfoBar text={`Level ${currentTime?.hours}`} flexNumber={3} progressBarPercentage={(currentTime?.hours / 24) * 100}/>
            <InfoBar text={`AP ${currentTime?.minutes}/60`} textAlign={'right'}/>
        </div>
    </section>)
}
    
    
export default StatStatus