(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[625],{5419:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/update-price",function(){return a(9090)}])},9090:function(e,t,a){"use strict";a.r(t);var n=a(5893),r=a(7294),u=a(6154),i=a(1163),l=a(1664),c=a.n(l);t.default=function(){let[e,t]=(0,r.useState)(""),a=(0,i.useRouter)(),l=async()=>{let e=await u.Z.get("https://agmar-paliwa.pl/apis/fuel-price");t(e.data.price)};(0,r.useEffect)(()=>{l()},[]);let p=async t=>{t.preventDefault();let n=localStorage.getItem("token");if(!n){alert("You must be logged in to update the price"),a.push("/login");return}try{await u.Z.put("https://agmar-paliwa.pl/apis/fuel-price",{price:e},{headers:{Authorization:n}}),alert("Price updated successfully")}catch(e){alert("Failed to update price")}};return(0,n.jsxs)("form",{onSubmit:p,className:"login-to-panel",children:[(0,n.jsx)("h1",{children:"AGMAR"}),(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"New price",required:!0}),(0,n.jsx)("button",{type:"submit",children:"Zmień cenę"}),(0,n.jsx)(c(),{href:"/",children:"Strona gł\xf3wna"})]})}},1163:function(e,t,a){e.exports=a(6885)}},function(e){e.O(0,[664,154,774,888,179],function(){return e(e.s=5419)}),_N_E=e.O()}]);