
import vault_boy_walking from '../img/vault_boy_walking.gif'
import brackets from '../img/brackets.png'
import java_logo from "../img/java_logo.png"
import python_logo from "../img/python_logo.png"
import web_application_logo from "../img/web_application_logo.png"
import spring_logo from "../img/spring_logo.png"
import engineering from "../img/engineering.png"
import diagram from "../img/diagram.png"
import security from "../img/security.png"

const StatStatus = () => {
    return (
    <section class="core-display core-display-active" id="stat-status-section">
        <div class="vault-boy-container">
            <img id="vault-boy-walking"
                 src={vault_boy_walking} alt="a fallout vault boy walking"/>
        </div>
        {/* <div class="health-gauge-container">
            <div class="health-gauge health-gauge-top"></div>
            <div class="health-gauge health-gauge-right-top"></div>
            <div class="health-gauge health-gauge-right-bottom"></div>
            <div class="health-gauge health-gauge-bottom"></div>
            <div class="health-gauge health-gauge-left-bottom"></div>
            <div class="health-gauge health-gauge-left-top"></div>
        </div> */}
        {/* <div class="info-container">
            <div class="info-icon info-icon-large info-icon-brackets">
                <img src={brackets} alt="brackets"/>
            </div>
            <div class="info-icon info-icon-thin info-icon-java-container">
                <img src={java_logo} alt="java programming language logo"/>
                <p>85</p>
            </div>
            <div class="info-icon info-icon-thin info info-icon-python-container">
                <img src={python_logo} alt="python programming language logo"/>
                <p>80</p>
            </div>
            <div class="info-icon info-icon-large info-icon-web">
                <img src={web_application_logo} alt="web application icon"/>
            </div>
            <div class="info-icon info-icon-thin info-icon-spring">
                <img src={spring_logo} alt="spring framework logo"/>
                <p>70</p>
            </div>
            <div class="info-icon info-icon-large info-icon-engineering">
                <img src={engineering} alt="a cog on a hand that symbolises engineering"/>
            </div>
            <div class="info-icon info-icon-thin info-icon-diagram">
                <img src={diagram}
                     alt="a diagram icon that symbolises databases conception"/>
                <p>65</p>
            </div>
            <div class="info-icon info-icon-thin info-icon-security">
                <img src={security} alt="web security icon"/>
                <p>60</p>
            </div>
        </div> */}
        {/* <div class="identity-container">
            <p>Cyril BERTHOUT : Concepteur développeur d'applications</p>
        </div> */}
    </section>)
}
    
    
export default StatStatus