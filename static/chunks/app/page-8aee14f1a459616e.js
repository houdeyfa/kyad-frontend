(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8708:function(e,a,t){Promise.resolve().then(t.bind(t,2241))},2241:function(e,a,t){"use strict";t.r(a);var n=t(9268),s=t(6008),r=t(9527),c=t.n(r),o=t(6006);t(5846),a.default=()=>{let e=(0,s.useRouter)(),a=null;(0,o.useEffect)(()=>{a=localStorage.getItem("token")},[]);let[t,r]=(0,o.useState)([]);return(0,o.useEffect)(()=>{fetch("https://keep-your-anger-down-production.up.railway.app/kids/",{headers:{Authorization:"Token ".concat(a)}}).then(e=>e.json()).then(e=>r(e.kids)).catch(e=>console.error("Error fetching kids:",e))},[]),(0,n.jsxs)("div",{className:c().main,children:[(0,n.jsxs)("p",{className:c().paragraph,children:["KEEP YOUR ANGER ",(0,n.jsx)("br",{})," \uD83D\uDE04 DOWN \uD83D\uDE04"]}),(0,n.jsx)("div",{className:c().cardlist,id:"listContainer",children:t.map(a=>(0,n.jsxs)("div",{className:c().cardkid,children:[(0,n.jsx)("h2",{children:a.name}),(0,n.jsx)("button",{className:c().addbutton,onClick:()=>e.push("/action?kid=".concat(a.id)),children:"+"})]}))}),(0,n.jsx)("button",{className:c().passbutton,onClick:()=>e.push("/pass"),children:"?"})]})}},9527:function(e){e.exports={main:"page_main__WunS6",cardkid:"page_cardkid__yjfxu",cardlist:"page_cardlist__iJnS7",addbutton:"page_addbutton__glDQQ",passbutton:"page_passbutton__p925u",paragraph:"page_paragraph__OaeJN",description:"page_description__ihOGI",code:"page_code__6jdGX",grid:"page_grid__8s97H",card:"page_card__iAZT9",center:"page_center__diPtZ",logo:"page_logo__DgL_7",content:"page_content__9kT_h",vercelLogo:"page_vercelLogo__GI_o9",rotate:"page_rotate__hFOw7"}}},function(e){e.O(0,[934,253,769,744],function(){return e(e.s=8708)}),_N_E=e.O()}]);