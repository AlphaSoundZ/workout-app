import{B as p,E as f}from"./Exercice1Component-7dabffb2.js";import{r as a,_ as h,a as r,o as _,c as m,b as i,d as c,e as g,t as v,F as y,f as k}from"./index-fa5d1409.js";const w={data(){return{title:"Leg Raises (liegend)",description:`Muskelgruppe: 
 Unterer Teil der geraden Bauchmuskelatur 
 
 Zu beachten: 
 Beine orthogonal zum Boden 
 
 Variationen: 
 Beine anwinkeln (Knie zur Brust ziehen) 
 
 Wiederholungszahl: 
 15-20`,modelFile:"leg-raises.glb",clock:a(0),timer:a(0),roundLength:60,clockInterval:null,state:null}},setup(){return console.log("/workout-app/"),{clock:a(0),clockInterval:null}},async mounted(){var e=await this.syncTimeDiff();console.log("date: ",e);const t=document.getElementById("break"),n=document.getElementById("exercice");this.clock=Math.ceil((new Date().valueOf()+e.valueOf())/1e3%this.roundLength),await new Promise(s=>setTimeout(s,(this.clock-(new Date().valueOf()+e.valueOf())/1e3%this.roundLength)*1e3)),this.clockInterval=setInterval(()=>{this.clock=Math.ceil((new Date().valueOf()+e.valueOf())/1e3%this.roundLength),this.timer=parseInt(this.clock.toFixed(0))*-1+this.roundLength+1,this.timer>15?(this.timer-=15,t.style.opacity="0",n.style.opacity="1"):(t.style.opacity="1",n.style.opacity="0"),this.clock>=this.roundLength&&(this.clock=0,console.log("round finished",(new Date().valueOf()+e.valueOf())/1e3%this.roundLength))},100)},methods:{async syncTimeDiff(){try{const e=new Date,t=new XMLHttpRequest;t.open("HEAD",window.location.href.toString(),!1),t.setRequestHeader("Content-Type","text/html"),t.send("");const n=t.getResponseHeader("Date"),s=new Date,o=s.valueOf()-e.valueOf(),l=new Date(n).valueOf()+o/2;return console.log("diff:",o),l.valueOf()-s.valueOf()}catch{return console.log("AJAX not supported, use CPU time"),0}}},components:{BreakCompoent:p,Exercice1Component:f}};const B=i("h3",{class:"credits"},"von Emil, Maxim & Jan Jacob",-1),x={class:"container",id:"exercice",style:{opacity:"0"}},D={class:"container",id:"break",style:{opacity:"0"}},O={class:"timer-container"},F={class:"button"},L=k('<svg width="79" height="46" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_618_1123)"><path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)"></path></g><defs><filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123"></feGaussianBlur></filter><linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.6"></stop><stop offset="1" stop-color="white" stop-opacity="0.05"></stop></linearGradient></defs></svg>',1);function I(e,t,n,s,o,l){const d=r("Exercice1Component"),u=r("BreakCompoent");return _(),m(y,null,[B,i("div",x,[c(d,{modelFile:o.modelFile,title:o.title,description:o.description},null,8,["modelFile","title","description"])]),i("div",D,[c(u)]),i("div",O,[i("button",F,[g(v(o.timer+" Seconds")+" ",1),L])])],64)}const E=h(w,[["render",I]]);export{E as default};