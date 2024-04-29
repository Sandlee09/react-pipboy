import { useEffect } from 'react'
import StartVideo from '../assets/startup.mp4'

const StartupVideo = () => {

    useEffect(() => {
       
        var video = document.getElementById('video');
        console.log(video)
        video.play();
        video.addEventListener('ended',function(){
            window.location = '/stat-status';
        });
        
    })

    return (
    <section class="core-display" id="stat-status-section">
        <div class="screen crt-effect">
            <div class="screen-reflection screen-reflection-black"></div>
            <div class="scan"></div>

            <video id="video"  autoPlay muted="muted">
            <source src={StartVideo} type="video/mp4" />
        </video>
        </div>
        
    </section>)
}
    
    
export default StartupVideo