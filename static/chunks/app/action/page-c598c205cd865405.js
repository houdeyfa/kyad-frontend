(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[124],{5786:function(e,t,a){Promise.resolve().then(a.bind(a,2754))},2754:function(e,t,a){"use strict";a.r(t);var r=a(9268),n=a(6008),o=a(1625),s=a.n(o),i=a(6006);t.default=()=>{let[e,t]=(0,i.useState)(""),[a,o]=(0,i.useState)(""),[c,l]=(0,i.useState)(""),[p,_]=(0,i.useState)([]),[u,d]=(0,i.useState)("");(0,n.useRouter)();let h=(0,n.useSearchParams)(),g=h.get("kid"),m=async r=>{r.preventDefault();let n=localStorage.getItem("token");try{let r=await fetch("https://keep-your-anger-down-production.up.railway.app/save_action/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token ".concat(n)},body:JSON.stringify({description:e,level:a,time:c,isgood:!0,kid_id:g})}),s=await r.json();console.log(s),t(""),o(""),l("")}catch(e){console.error(e)}};return(0,i.useEffect)(()=>{let e=localStorage.getItem("token");fetch("https://keep-your-anger-down-production.up.railway.app/kid/".concat(g,"/"),{headers:{Authorization:"Token ".concat(e)}}).then(e=>e.json()).then(e=>d(e.name)).catch(e=>console.error("Error fetching kids:",e))},[]),(0,r.jsxs)("div",{className:s().main,children:[(0,r.jsx)("div",{children:(0,r.jsxs)("p",{className:s().paragraph,children:["Are you grateful to ",u,"? ",(0,r.jsx)("br",{})," What do you have?"]})}),(0,r.jsxs)("form",{onSubmit:m,className:s().form,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"description",className:s().label,children:"Description:"}),(0,r.jsx)("input",{type:"text",id:"description",value:e,className:s().input,onChange:e=>t(e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"level",className:s().label,children:"Level:"}),(0,r.jsx)("input",{type:"text",id:"level",value:a,className:s().input,onChange:e=>o(e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"time",className:s().label,children:"Time:"}),(0,r.jsx)("input",{type:"text",id:"time",value:c,className:s().input,onChange:e=>l(e.target.value)})]}),(0,r.jsx)("button",{type:"submit",className:s().button,children:"ADD"})]}),(0,r.jsx)("div",{children:((0,i.useEffect)(()=>{let e=localStorage.getItem("token");fetch("https://keep-your-anger-down-production.up.railway.app/act/".concat(g,"/1/"),{headers:{Authorization:"Token ".concat(e)}}).then(e=>e.json()).then(e=>_(e)).catch(e=>console.error("Error fetching kids:",e))},[]),(0,r.jsx)("div",{className:s().cardlist,children:p.map(e=>(0,r.jsx)("div",{className:s().cardkid,children:(0,r.jsxs)("h2",{children:[e.description," -- ",e.time]})}))}))})]})}},1625:function(e){e.exports={main:"page_main__iY5BK",paragraph:"page_paragraph__Bu3R9",form:"page_form__QMnbx",div:"page_div__TCLD9",label:"page_label__xCNq5",input:"page_input__voZx1",button:"page_button__Bd8rT",inputusername:"page_inputusername__t0J79",inputpass:"page_inputpass__GTBkL",description:"page_description___hOGE",code:"page_code__xOGVw",grid:"page_grid__epUxM",card:"page_card__j45z0",center:"page_center__CZmEF",logo:"page_logo__8jRDO",content:"page_content__222Lc",vercelLogo:"page_vercelLogo__Gt_9y",rotate:"page_rotate__Ur0vB"}},3177:function(e,t,a){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=a(6006),n=Symbol.for("react.element"),o=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var r,c={},l=null,p=null;for(r in void 0!==a&&(l=""+a),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,r)&&!i.hasOwnProperty(r)&&(c[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===c[r]&&(c[r]=t[r]);return{$$typeof:n,type:e,key:l,ref:p,props:c,_owner:s.current}}t.jsx=c,t.jsxs=c},9268:function(e,t,a){"use strict";e.exports=a(3177)},6008:function(e,t,a){e.exports=a(794)}},function(e){e.O(0,[253,769,744],function(){return e(e.s=5786)}),_N_E=e.O()}]);