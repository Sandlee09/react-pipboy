import{u as v,a as N,r as s,j as e}from"./index-OG3N9WCC.js";const g="/assets/bell-D8YxXL1f.gif",f="/assets/thumbs-up-Dfnk2X6L.png",A="/assets/Only%20You-CGn7IvEx.mp3",S=()=>{const c=v(),[t]=N(),[n,i]=s.useState(!1),[o,l]=s.useState(60),[m,d]=s.useState(""),[u,x]=s.useState("00"),[h,j]=s.useState("00"),p=()=>{i(!0),l(60)};return s.useEffect(()=>{var a=document.getElementById("audio-element");a==null||a.play()},[]),s.useEffect(()=>{d(t.get("name")),x(t.get("hour")),j(t.get("minute"))},[]),s.useEffect(()=>{let a;return n&&(a=setInterval(()=>{l(r=>r===1?(i(!1),c("/stat-status"),clearInterval(a),60):r-1)},1e3)),()=>clearInterval(a)},[n,c]),n?e.jsx("div",{className:"container",children:e.jsxs("div",{className:"screen crt-effect",children:[e.jsx("div",{className:"screen-reflection"}),e.jsx("div",{className:"scan"}),e.jsxs("header",{className:"upcomingAlarm-container",children:[e.jsx("div",{className:"thumbsUp-container",children:e.jsx("img",{src:f,alt:"thumbs up"})}),e.jsxs("div",{className:"upcomingAlarm-title-container",children:[e.jsx("h2",{className:"thumbsUp-title",children:"Crisis Averted!"}),e.jsxs("h4",{className:"thumbsUp-countdown",children:["Resetting in: ",o,"secs"]}),e.jsx("div",{className:"upcomingAlarm-top-border"})]})]})]})}):e.jsx("div",{className:"container",children:e.jsxs("div",{className:"screen crt-effect",children:[e.jsx("div",{className:"screen-reflection"}),e.jsx("div",{className:"scan"}),e.jsxs("header",{className:"upcomingAlarm-container",children:[e.jsxs("div",{className:"upcomingAlarm-title-container",children:[e.jsx("h2",{className:"upcomingAlarm-title",children:m}),e.jsx("div",{className:"upcomingAlarm-top-border"})]}),e.jsx("div",{className:"bellAnimation",children:e.jsx("img",{src:g,alt:"bell"})}),e.jsxs("div",{className:"upcomingAlarm-time",children:[e.jsx("p",{children:u}),e.jsxs("div",{className:"alarm-divider",children:[e.jsx("div",{}),e.jsx("div",{})]}),e.jsx("p",{children:h})]}),e.jsx("div",{className:"upcomingAlarm-option-container",children:e.jsx("div",{className:"upcomingAlarm-option",onClick:p,children:"Snooze"})}),e.jsx("audio",{id:"audio-element",autoplay:!0,loop:!0,children:e.jsx("source",{src:A,type:"audio/mp3"})})]})]})})};export{S as default};
