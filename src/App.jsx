import './App.css'
import './sass/main.scss'
import './js/color.js'
import './js/menu.js'
import './js/tabs.js'
import { useNavigate } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import WatchLaterIcon from '@mui/icons-material/WatchLater';

function App({children}) {
  const navigate = useNavigate()
  

  const path = window.location.pathname
  const showSubmenu = path.includes('special') || path.includes('stat-status') || path.includes('perks')

  return (
    <>
      <div className="container">
            <IconButton 
                class='settings-button'  
                aria-label="settings"
                onClick={() => navigate('/settings')}
            >
                <SettingsIcon  sx={{
                    color: 'var(--pip-boy-primary-color)',
                    width: '12px',
                    height: '12px'}} />
            </IconButton>
            <IconButton 
                class='watch-button'  
                aria-label="settings"
                onClick={() => {
                    if(path.includes('watch-mode')) {
                        navigate('/stat-status')
                    } else {
                        navigate('/watch-mode')
                    }
                }}
                    
            >
                <WatchLaterIcon  sx={{
                    color: 'var(--pip-boy-primary-color)',
                    width: '12px',
                    height: '12px'}} />
            </IconButton>
            <div className="screen crt-effect">
                    <div className="screen-reflection"></div>
                    <div className="scan"></div>
                
                    <header className="header">
                        <div className="upper-header">
                            
                            <ul className="tabs">
                                <li className={`${showSubmenu && "tab-active"}`}><a onClick={() => navigate('/stat-status')} >STAT</a></li>
                                <li className={`${path.includes('exp-jobs-section') && "tab-active"}`}><a onClick={() => navigate('/exp-jobs-section')}>INV</a></li>
                                <li className={`${path.includes('data-section') && "tab-active"}`}><a onClick={() => navigate('/data-section')}>DATA</a></li>
                                <li className={`${path.includes('map-section') && "tab-active"}`}><a onClick={() => navigate('/map-section')}>MAP</a></li>
                                <li className={`${path.includes('radio') && "tab-active"}`}><a onClick={() => navigate('/radio')}>RADIO</a></li>
                            </ul>
                        </div>
                        {showSubmenu && (
                        <div>
                            <ul className="tabs sub-tabs sub-header-stat sub-tabs-active">
                                <li className=""><a href='#' className={path.includes('stat-status') ? "sub-header-active-tab" : "sub-header-inactive-tab-far"} onClick={() => navigate('/stat-status')}>STATUS</a></li>
                                <li className=""><a href="#" className={path.includes('special') ? "sub-header-active-tab" : "sub-header-inactive-tab-far"} onClick={() => navigate('/special')}>SPECIAL</a></li>
                                <li className=""><a href="#" className={path.includes('perks') ? "sub-header-active-tab" : "sub-header-inactive-tab-far"} onClick={() => navigate('/perks')}>PERKS</a></li>
                            </ul>
                        </div>
                        )}
                    
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
