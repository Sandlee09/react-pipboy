import { useState, useEffect } from 'react';
import WalkingPipBoy from '../img/vault_boy_walking.gif';
import Doomsday from '../img/vault-boy/doomsday.gif';

const WatchMode = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');

  return (
    <section className="core-display core-display-active" id="stat-status-section">
      <div className="watchMode-container">
        <div className="watchMode-left-container">
          <img src={Doomsday} alt={"vault-boy"} />
        </div>
        <div className="watchMode-right-container">
          <p>{hours}</p>
          <div className='watch-divider'>
            <div />
            <div />
          </div>
          <p>{minutes}</p>
        </div>
      </div>
    </section>
  );
};

export default WatchMode;