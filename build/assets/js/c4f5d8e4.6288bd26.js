"use strict";(self.webpackChunkrealm_essentials_website=self.webpackChunkrealm_essentials_website||[]).push([[634],{1459:(s,e,t)=>{t.r(e),t.d(e,{default:()=>j});var a=t(4164),o=t(8774),n=t(4586),i=t(781),c=t(1107);const l={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"};var r=t(8008),d=t(6540),m=t(4848);const h=(0,r.UU)("https://gjqsznhwkjsanuvlryxe.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqcXN6bmh3a2pzYW51dmxyeXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI1MjUwNjUsImV4cCI6MjAyODEwMTA2NX0.v4z-KTl5mK7jAWcZveJ-_WzKN5FT6FpeCW7KszDHUbc");function u(){const{siteConfig:s}=(0,n.A)();return(0,m.jsx)("header",{className:(0,a.A)("hero hero--primary",l.heroBanner),children:(0,m.jsxs)("div",{className:"container",children:[(0,m.jsx)(c.A,{as:"h1",className:"hero__title",children:s.title}),(0,m.jsx)("p",{className:"hero__subtitle",children:s.tagline}),(0,m.jsx)("div",{className:l.buttons,children:(0,m.jsx)(o.A,{className:"button button--secondary button--lg",to:"/docs/intro",children:"Docs"})})]})})}function j(){const[s,e]=(0,d.useState)([]),[t,a]=(0,d.useState)({});(0,d.useEffect)((()=>{!async function(){const{data:s}=await h.from("DownloadMetadata").select();let t=-1;console.log(s);for(const e of s){t++,console.log(e.id);let a=await h.storage.from("Downloads").download(`Downloads/${e.id}.mcaddon`);s[t].downloadData=a.data}e(s)}()}),[]);const{siteConfig:o}=(0,n.A)();return(0,m.jsxs)(i.A,{description:"Description will go into a meta tag in <head />",children:[(0,m.jsx)(u,{}),(0,m.jsx)("main",{}),(0,m.jsx)("hr",{style:{opacity:"0"}}),(0,m.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"10px"},children:[(0,m.jsxs)("div",{style:{width:"90%",display:"flex",gap:"10px",margin:"10px"},className:"mobile-card-list",children:[(0,m.jsxs)("div",{className:"card feature-card",children:[(0,m.jsxs)("div",{className:"card__body",children:[(0,m.jsx)("h4",{children:"Custom Commands"}),(0,m.jsx)("small",{children:"there is alot of custom commands in this add-on, so i recommend you take a look at out docs!"})]}),(0,m.jsx)("div",{className:"card__footer",children:(0,m.jsx)("button",{className:"button button--primary button--block",children:"View Tutorial"})})]}),(0,m.jsxs)("div",{className:"card feature-card",children:[(0,m.jsxs)("div",{className:"card__body",children:[(0,m.jsx)("h4",{children:"Wanted System"}),(0,m.jsx)("small",{children:"Our add-on has a custom wanted System, there is alot of customization to it!"})]}),(0,m.jsx)("div",{className:"card__footer",children:(0,m.jsx)("button",{className:"button button--primary button--block",children:"Visit Docs"})})]})]}),(0,m.jsx)("h6",{style:{opacity:"0.5"}})]})]})}}}]);