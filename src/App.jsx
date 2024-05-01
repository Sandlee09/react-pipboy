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
      <div className="container">
    {/* <div className="overlay-container">
        <img id="overlay" src="img/pip-boy_overlay.png" />
    </div> */}
    <div className="screen crt-effect">
            <div className="screen-reflection"></div>
            <div className="scan"></div>
           
            <header className="header">
                <div className="upper-header">
                    <ul className="tabs">
                        <li className={`${path.includes('stat-status') && "tab-active"}`}><a onClick={() => navigate('/stat-status')} >STAT</a></li>
                        <li className={`${path.includes('exp-jobs-section') && "tab-active"}`}><a onClick={() => navigate('/exp-jobs-section')}>INV</a></li>
                        <li className={`${path.includes('data-section') && "tab-active"}`}><a onClick={() => navigate('/data-section')}>DATA</a></li>
                        <li className={`${path.includes('map-section') && "tab-active"}`}><a onClick={() => navigate('/map-section')}>MAP</a></li>
                        <li className={`${path.includes('radio') && "tab-active"}`}><a onClick={() => navigate('/radio')}>RADIO</a></li>
                    </ul>
                </div>
                {path.includes('stat-status') && (
                <div>
                    <ul className="tabs sub-tabs sub-header-stat sub-tabs-active">
                        <li className=""><a href='/stat-status' className="sub-header-active-tab">STATUS</a></li>
                        <li className=""><a href="#stat-special-section" className="sub-header-inactive-tab-near">SPECIAL</a></li>
                        <li className=""><a href="#stat-perk-section" className="sub-header-inactive-tab-far">PERKS</a></li>
                    </ul>
                </div>
                )}
               
                <div>
                    <ul className="tabs sub-tabs sub-header-exp">
                        <li className=""><a href="#exp-jobs-section" className="sub-header-active-tab">JOBS</a></li>
                        <li className=""><a href="#exp-studies-section" className="sub-header-inactive-tab-near">STUDIES</a></li>
                        <li className=""><a href="#exp-skills-section" className="sub-header-inactive-tab-far">SKILLS</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="tabs sub-tabs sub-header-void">
                        <li className=""><a href="#" className="sub-header-active-tab"></a></li>
                        <li className=""><a href="#" className="sub-header-inactive-tab-near"></a></li>
                        <li className=""><a href="#" className="sub-header-inactive-tab-far"></a></li>
                    </ul>
                </div>
            
                <div className="cores-display">
                    {children}
                </div>
            </header>
            
        </div>
    </div>
    </>
  )
}

export default App
