
import vault_boy_walking from '../img/vault_boy_walking.gif'
import brackets from '../img/brackets.png'
import java_logo from "../img/java_logo.png"
import python_logo from "../img/python_logo.png"
import web_application_logo from "../img/web_application_logo.png"
import spring_logo from "../img/spring_logo.png"
import engineering from "../img/engineering.png"
import diagram from "../img/diagram.png"
import security from "../img/security.png"
import gun from "../img/gun.png"
import helmet from "../img/helmet.png"
import crosshair from "../img/crosshair-icon.jpg"
import armor from "../img/armor-icon.jpg"
import lightning from "../img/lightning-icon.jpg"
import radiation from "../img/radiation-icon.jpg"
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
    console.log(currentTime)

    return (
    <section class="core-display core-display-active" id="stat-status-section">
        <div class="vault-boy-container">
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
                 src={vault_boy_walking} alt="a fallout vault boy walking"/>
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
        {/* <div class="health-gauge-container">
            <div class="health-gauge health-gauge-top"></div>
            <div class="health-gauge health-gauge-right-top"></div>
            <div class="health-gauge health-gauge-right-bottom"></div>
            <div class="health-gauge health-gauge-bottom"></div>
            <div class="health-gauge health-gauge-left-bottom"></div>
            <div class="health-gauge health-gauge-left-top"></div>
        </div> */}
        <div class="info-container">
            <div class="info-icon info-icon-large info-icon-brackets">
                <img src={gun} alt="brackets"/>
            </div>
            <div class="info-icon info-icon-thin info-icon-java-container">
                <img src={crosshair} alt="java programming language logo"/>
                <p>13</p>
            </div>
            <div class="info-icon info-icon-large info-icon-web">
                <img src={helmet} alt="web application icon"/>
            </div>
            <div class="info-icon info-icon-thin info-icon-spring">
                <img src={armor} alt="spring framework logo"/>
                <p>16</p>
            </div>
            <div class="info-icon info-icon-thin info-icon-diagram">
                <img src={lightning}
                     alt="a diagram icon that symbolises databases conception"/>
                <p>7</p>
            </div>
            <div class="info-icon info-icon-thin info-icon-security">
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