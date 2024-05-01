import { useEffect } from 'react'
import StartVideo from '../assets/startup.mp4'

const StartupVideo = () => {

    useEffect(() => {
       
        var video = document.getElementById('video');
        video.play();
        video.addEventListener('ended',function(){
            window.location = '/stat-status';
        });
        
    })

    return (
    <section className="core-display" id="stat-status-section">
        <div className="screen crt-effect">
            <div className="screen-reflection screen-reflection-black"></div>
            <div className="scan"></div>

            <video id="video"  autoPlay muted="muted">
            <source src={StartVideo} type="video/mp4" />
        </video>
        </div>
        
    </section>)
}
    
    
export default StartupVideo