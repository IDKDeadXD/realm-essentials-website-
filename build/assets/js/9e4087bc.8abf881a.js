"use strict";(self.webpackChunkrealm_essentials_website=self.webpackChunkrealm_essentials_website||[]).push([[711],{9331:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});t(6540);var a=t(8774),r=t(1312),i=t(1213),n=t(6266),l=t(781),c=t(1107),h=t(4848);function d(e){let{year:s,posts:t}=e;const r=(0,n.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c.A,{as:"h3",id:s,children:s}),(0,h.jsx)("ul",{children:t.map((e=>{return(0,h.jsx)("li",{children:(0,h.jsxs)(a.A,{to:e.metadata.permalink,children:[(s=e.metadata.date,r.format(new Date(s)))," - ",e.metadata.title]})},e.metadata.date);var s}))})]})}function o(e){let{years:s}=e;return(0,h.jsx)("section",{className:"margin-vert--lg",children:(0,h.jsx)("div",{className:"container",children:(0,h.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,h.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,h.jsx)(d,{...e})},s)))})})})}function m(e){let{archive:s}=e;const t=(0,r.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,r.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),n=function(e){const s=e.reduce(((e,s)=>{const t=s.metadata.date.split("-")[0],a=e.get(t)??[];return e.set(t,[s,...a])}),new Map);return Array.from(s,(e=>{let[s,t]=e;return{year:s,posts:t}}))}(s.blogPosts);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(i.be,{title:t,description:a}),(0,h.jsxs)(l.A,{children:[(0,h.jsx)("header",{className:"hero hero--primary",children:(0,h.jsxs)("div",{className:"container",children:[(0,h.jsx)(c.A,{as:"h1",className:"hero__title",children:t}),(0,h.jsx)("p",{className:"hero__subtitle",children:a})]})}),(0,h.jsx)("main",{children:n.length>0&&(0,h.jsx)(o,{years:n})})]})]})}}}]);