import './App.css'
import './sass/main.scss'
import './js/color.js'
import './js/menu.js'
import './js/tabs.js'
import { useNavigate } from 'react-router-dom'

function App({children}) {
  const navigate = useNavigate()
  

  const path = window.location.pathname
  console.log(path)

  return (
    <>
      <div class="container">
    {/* <div class="overlay-container">
        <img id="overlay" src="img/pip-boy_overlay.png" />
    </div> */}
    <div class="screen crt-effect">
            <div class="screen-reflection"></div>
            <div class="scan"></div>
            <header class="header">
                <div class="upper-header">
                    <ul class="tabs">
                        <li class={`${path.includes('stat-status') && "tab-active"}`}><a onClick={() => navigate('/stat-status')} >STAT</a></li>
                        <li class={`${path.includes('exp-jobs-section') && "tab-active"}`}><a onClick={() => navigate('/exp-jobs-section')}>EXP</a></li>
                        <li class={`${path.includes('data-section') && "tab-active"}`}><a onClick={() => navigate('/data-section')}>DATA</a></li>
                        <li class={`${path.includes('map-section') && "tab-active"}`}><a onClick={() => navigate('/map-section')}>MAP</a></li>
                        <li class={`${path.includes('color-section') && "tab-active"}`}><a onClick={() => navigate('/color-section')}>COLOR</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="tabs sub-tabs sub-header-stat sub-tabs-active">
                        <li class=""><a href='/stat-status' class="sub-header-active-tab">STATUS</a></li>
                        <li class=""><a href="#stat-special-section" class="sub-header-inactive-tab-near">SPECIAL</a></li>
                        <li class=""><a href="#stat-perk-section" class="sub-header-inactive-tab-far">PERKS</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="tabs sub-tabs sub-header-exp">
                        <li class=""><a href="#exp-jobs-section" class="sub-header-active-tab">JOBS</a></li>
                        <li class=""><a href="#exp-studies-section" class="sub-header-inactive-tab-near">STUDIES</a></li>
                        <li class=""><a href="#exp-skills-section" class="sub-header-inactive-tab-far">SKILLS</a></li>
                    </ul>
                </div>
                <div>
                    <ul class="tabs sub-tabs sub-header-void">
                        <li class=""><a href="#" class="sub-header-active-tab"></a></li>
                        <li class=""><a href="#" class="sub-header-inactive-tab-near"></a></li>
                        <li class=""><a href="#" class="sub-header-inactive-tab-far"></a></li>
                    </ul>
                </div>
            </header>
            <div class="cores-display">
              {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default App
