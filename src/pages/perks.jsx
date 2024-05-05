
import { useState } from 'react'
import cannibal from '../img/perk/cannibal.png'
import chemist from '../img/perk/chemist.png'
import fortune_finder from '../img/perk/fortune_finder.png'
import heavy_gunner from '../img/perk/heavy_gunner.png'
import idiot_savant from '../img/perk/idiot_savant.png'
import nerd_rage from '../img/perk/nerd_rage.png'


const Perks = () => {
    const perks = [
        {
        name: "Cannibal",
        description: "The Cannibal perk allows you to consume the corpses of fallen enemies to gain health and other benefits. It's a controversial but potentially useful perk for those willing to engage in cannibalism.",
        image: cannibal
    },
        {
        name: "Chemist",
        description: "The Chemist perk increases the effectiveness of consumable chems and drugs, making their effects last longer or be more potent. It's useful for characters who rely heavily on chems in combat or for stat boosts.",
        image: chemist
        },
        {
        name: "Fortune Finder",
        description: "The Fortune Finder perk increases your chance of finding more bottle caps (the game's currency) in containers and on enemies. It's a helpful perk for players looking to accumulate more caps.",
        image: fortune_finder
        },
        {
        name: "Heavy Gunner",
        description: "The Heavy Gunner perk reduces the spread and recoil of heavy weapons like miniguns and missile launchers, making them more accurate and easier to control during sustained fire.",
        image: heavy_gunner
        },
        {
        name: "Idiot Savant",
        description: "The Idiot Savant perk occasionally grants a random experience points bonus after performing certain actions, with the chance increasing as your Intelligence stat decreases. It rewards players for keeping their Intelligence low.",
        image: idiot_savant
        },
        {
        name: "Nerd Rage",
        description: "The Nerd Rage perk temporarily increases your Damage Resistance and Damage Output when your Health drops below a certain threshold, allowing you to become a formidable force when on the brink of death.",
        image: nerd_rage
        }
    ]

    const [chosenPerks, setChosenPerks] = useState(perks[0])

    const handleSelection = (index) => {
        setChosenPerks(perks[index])
    }

    return (
    <section className="core-display core-display-active" id="stat-status-section">
        <div className="perks-container">
        <div className="perks-left-container">
            <ul>
                {perks.map((e, index) => (
                    <li className={chosenPerks.name === e.name && "active"} key={index} onClick={() => handleSelection(index)}>
                        <p>{e.name}</p>
                        <p>{e.value}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div className="perks-right-container">
            <img src={chosenPerks.image} alt={chosenPerks.name}/>
            <p>{chosenPerks.description}</p>
        </div>
        </div>
    </section>)
}
    
    
export default Perks