
import { useState } from 'react'
import agility from '../img/special/agility.gif'
import charisma from '../img/special/charisma.gif'
import endurance from '../img/special/endurance.gif'
import intelligence from '../img/special/intelligence.gif'
import luck from '../img/special/luck.gif'
import perception from '../img/special/perception.gif'
import strength from '../img/special/strength.gif'


const Special = () => {
    const specials = [
        {
        name: "Strength",
        value: 5,
        description: "Strength is a measure of physical power. It affects how much you can carry, and how much damage you can inflict in melee combat.",
        image: strength
        },
        {
        name: "Perception",
        value: 5,
        description: "Perception is your overall awareness and senses. It affects your ability to see enemies, loot containers, and other gameplay elements.",
        image: perception
        },
        {
        name: "Endurance",
        value: 5,
        description: "Endurance is a measure of your overall physical health and survivability. It affects your total Hit Points.",
        image: endurance
        },
        {
        name: "Charisma",
        value: 2,
        description: "Charisma is your ability to persuade others. It affects your success in dialogue options and interactions with NPCs.",
        image: charisma
        },
        {
        name: "Intelligence",
        value: 1,
        description: "Intelligence is a measure of your overall mental prowess and aptitude. It affects your skill points gained per level.",
        image: intelligence
        },
        {
        name: "Agility",
        value: 7,
        description: "Agility affects your Sneak value and Bash Melee attack. Sneak skills, and the number of Action Points available for V.A.T.S.",
        image: agility
        },
        {
        name: "Luck",
        value: 6,
        description: "Luck is a measure of your general good fortune. It affects your critical chance and other random outcomes in the game.",
        image: luck
        }
    ]

    const [chosenSpecial, setChosenSpecial] = useState(specials[0])

    const handleSelection = (index) => {
        setChosenSpecial(specials[index])
    }

    return (
    <section className="core-display core-display-active" id="stat-status-section">
        <div className="special-container">
        <div className="special-left-container">
            <ul>
                {specials.map((e, index) => (
                    <li className={chosenSpecial.name === e.name && "active"} key={index} onClick={() => handleSelection(index)}>
                        <p>{e.name}</p>
                        <p>{e.value}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className="special-right-container">
            <img src={chosenSpecial.image} alt={chosenSpecial.name}/>
            <p>{chosenSpecial.description}</p>
        </div>
        </div>
    </section>)
}
    
    
export default Special