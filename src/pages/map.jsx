
import map from "../img/idf_map.png"

const Map = () => {
    return (
        <section className="core-display" id="map-section">
            <div className="menu-container map-container">
                <img src={map}
                    id="idf-map"
                    alt="a map of Ile-de-France french region"/>
            </div>
        </section>
    )
}
    
    
export default Map