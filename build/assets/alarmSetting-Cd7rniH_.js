import{u as j,r as s,j as e,I as f,d as v}from"./index-OG3N9WCC.js";const w=()=>{const m=j(),o=window.location.pathname,A=o.includes("settings")||o.includes("connect"),[N,d]=s.useState(!1),[t,c]=s.useState([]),[n,u]=s.useState(""),[r,h]=s.useState(""),[i,x]=s.useState("");s.useEffect(()=>{const a=JSON.parse(localStorage.getItem("alarms"))||[];c(a)},[]),s.useEffect(()=>{localStorage.setItem("alarms",JSON.stringify(t))},[t]);const p=()=>{if(r.trim()!==""&&i.trim()!==""&&n.trim()!==""){const a={name:n.trim(),time:`${r.trim()}:${i.trim()}`};c([...t,a]),u(""),h(""),x("")}d(!1)},g=a=>{const l=[...t];l.splice(a,1),c(l)};return e.jsxs("div",{className:"container",children:[e.jsx(f,{class:"settings-button","aria-label":"settings",onClick:()=>m(A?"/stat-status":"/settings"),children:e.jsx(v,{sx:{color:"var(--pip-boy-primary-color)",width:"12px",height:"12px"}})}),e.jsxs("div",{className:"screen crt-effect",children:[e.jsx("div",{className:"screen-reflection"}),e.jsx("div",{className:"scan"}),e.jsx("header",{className:"settings-container",children:N?e.jsxs("div",{children:[e.jsx("h1",{className:"addAlarm-title",children:"Add New Alarm"}),e.jsxs("div",{className:"newAlarm-container",children:[e.jsx("input",{type:"text",value:n,onChange:a=>u(a.target.value),placeholder:"Alarm Name",className:"fallout-name"}),e.jsxs("div",{className:"fallout-time-container",children:[e.jsx("input",{type:"number",value:r,onChange:a=>h(a.target.value),placeholder:"hh",maxLength:2,max:24,min:1,className:"fallout-number"}),e.jsx("span",{className:"colon fallout-number",children:":"}),e.jsx("input",{type:"number",value:i,onChange:a=>x(a.target.value),placeholder:"mm",maxLength:2,max:59,min:1,className:"fallout-number"})]}),e.jsx("button",{className:"add-alarm-button",disabled:!n||!r||!i,onClick:p,children:"Add Alarm"})]})]}):e.jsxs("div",{children:[e.jsxs("h1",{className:"addAlarm-title",children:["Alarms",e.jsx("button",{className:"add-alarm-button-small",onClick:()=>d(!0),children:"Add Alarm"})]}),e.jsx("ul",{className:"alarms-list",children:t.map((a,l)=>e.jsxs("li",{className:"alarms-listItem",children:[a==null?void 0:a.time,e.jsx("button",{onClick:()=>g(l),children:"Delete"})]},l))})]})})]})]})};export{w as default};