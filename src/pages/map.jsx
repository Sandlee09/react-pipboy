import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import map from '../img/commonwealth_map.webp';

const Map = () => {
  const [scale, setScale] = useState(1);
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const [beaconPosition] = useState({
    top: Math.floor(Math.random() * 250) + 20,
    left: Math.floor(Math.random() * 250) + 20
  });

  const handleWheel = (e) => {
    e.preventDefault();
    const newScale = Math.max(1, Math.min(5, scale + (e.deltaY < 0 ? 0.1 : -0.1)));
    const image = document.getElementById("map-container-inner")
    image.style.transform = `scale(${newScale})`;
    console.log(newScale)
    setScale(newScale)
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      const distance = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      setLastTouchDistance(distance);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2 && lastTouchDistance !== null) {
      e.preventDefault(); // Prevent default touch behavior (e.g., scrolling)

      const distance = Math.hypot(
        e.touches[0].pageX - e.touches[1].pageX,
        e.touches[0].pageY - e.touches[1].pageY
      );
      const newScale = scale * (distance / lastTouchDistance);
      setScale(newScale);
      setLastTouchDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    setLastTouchDistance(null);
  };

  return (
    <section className="core-display" id="map-section" ref={containerRef}>
      <div
        className="menu-container map-container"
        style={{ width: '400px', height: '300px', overflow: 'hidden' }}
      >
        <div id="map-container-inner" style={{width: '400px', height: '300px', position: 'relative'}}>

        <Draggable 
        bounds={{left: -300, right: 300, top: -200, bottom: 200}}
        nodeRef={mapRef} 
        scale={1}>
            <div ref={mapRef} style={{position: 'relative'}}>
            <img
                src={map}
                id="idf-map"
                alt="a map of Ile-de-France french region"
                
                onWheel={handleWheel}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{
                transformOrigin: 'top left',
                overflow: 'visible',
                width: '100%',
                }}
            />
            <div
            style={{
              position: 'absolute',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'red',
              boxShadow: '0 0 10px 5px rgba(255, 0, 0, 0.5)',
              zIndex: 1,
              animation: 'glow 1.5s ease-in-out infinite alternate',
              top: `${beaconPosition.top}px`,
              left: `${beaconPosition.left}px`,
            }}
          />
            </div>
            
            </Draggable>
        </div>
        
      </div>
    </section>
  );
};

export default Map;