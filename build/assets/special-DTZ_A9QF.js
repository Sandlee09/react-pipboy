import{r as o,j as e}from"./index-OG3N9WCC.js";const l="/assets/agility-D68RRz69.gif",r="/assets/charisma-DspdBWgv.gif",m="/assets/endurance-j0FIlGFz.gif",u="/assets/intelligence-BYUYbxlE.gif",d="/assets/luck-BSqjPiCC.gif",p="/assets/perception-CWd2hsRf.gif",h="/assets/strength-B4DsDnjp.gif",f=()=>{const i=[{name:"Strength",value:5,description:"Strength is a measure of physical power. It affects how much you can carry, and how much damage you can inflict in melee combat.",image:h},{name:"Perception",value:5,description:"Perception is your overall awareness and senses. It affects your ability to see enemies, loot containers, and other gameplay elements.",image:p},{name:"Endurance",value:5,description:"Endurance is a measure of your overall physical health and survivability. It affects your total Hit Points.",image:m},{name:"Charisma",value:2,description:"Charisma is your ability to persuade others. It affects your success in dialogue options and interactions with NPCs.",image:r},{name:"Intelligence",value:1,description:"Intelligence is a measure of your overall mental prowess and aptitude. It affects your skill points gained per level.",image:u},{name:"Agility",value:7,description:"Agility affects your Sneak value and Bash Melee attack. Sneak skills, and the number of Action Points available for V.A.T.S.",image:l},{name:"Luck",value:6,description:"Luck is a measure of your general good fortune. It affects your critical chance and other random outcomes in the game.",image:d}],[s,n]=o.useState(i[0]),c=a=>{n(i[a])};return e.jsx("section",{className:"core-display core-display-active",id:"stat-status-section",children:e.jsxs("div",{className:"special-container",children:[e.jsx("div",{className:"special-left-container",children:e.jsx("ul",{children:i.map((a,t)=>e.jsxs("li",{className:s.name===a.name&&"active",onClick:()=>c(t),children:[e.jsx("p",{children:a.name}),e.jsx("p",{children:a.value})]},t))})}),e.jsxs("div",{className:"special-right-container",children:[e.jsx("img",{src:s.image,alt:s.name}),e.jsx("p",{children:s.description})]})]})})};export{f as default};