import{B as p,E as f}from"./Exercice1Component-0db117a5.js";import{r as l,_ as h,a as r,o as m,c as _,b as i,d as c,e as g,t as v,F as k,f as y}from"./index-f985363e.js";const w={data(){return{title:"Plank mit Gewichten",description:`Muskelgruppe: 
 Rumpfmuskulatur, vordere und hintere Schultermuskulatur 
 
 Zu beachten: 
 Körpermittelpunkt nicht verändern 
 
 Variationen: 
 Mit Liegestützen kombinieren 
 
 Wiederholungsanzahl: 
 15-20`,modelFile:"push-up-dumbbell.glb",clock:l(0),timer:l(0),roundLength:60,clockInterval:null,state:null}},setup(){return console.log("/workout-app/"),{clock:l(0),clockInterval:null}},async mounted(){var e=await this.syncTimeDiff();console.log("date: ",e);const t=document.getElementById("break"),o=document.getElementById("exercice");this.clock=Math.ceil((new Date().valueOf()+e.valueOf())/1e3%this.roundLength),await new Promise(s=>setTimeout(s,(this.clock-(new Date().valueOf()+e.valueOf())/1e3%this.roundLength)*1e3)),this.clockInterval=setInterval(()=>{this.clock=Math.ceil((new Date().valueOf()+e.valueOf())/1e3%this.roundLength),this.timer=parseInt(this.clock.toFixed(0))*-1+this.roundLength+1,this.timer>15?(this.timer-=15,t.style.opacity="0",o.style.opacity="1"):(t.style.opacity="1",o.style.opacity="0"),this.clock>=this.roundLength&&(this.clock=0,console.log("round finished",(new Date().valueOf()+e.valueOf())/1e3%this.roundLength))},100)},methods:{async syncTimeDiff(){try{const e=new Date,t=new XMLHttpRequest;t.open("HEAD",window.location.href.toString(),!1),t.setRequestHeader("Content-Type","text/html"),t.send("");const o=t.getResponseHeader("Date"),s=new Date,n=s.valueOf()-e.valueOf(),a=new Date(o).valueOf()+n/2;return console.log("diff:",n),a.valueOf()-s.valueOf()}catch{return console.log("AJAX not supported, use CPU time"),0}}},components:{BreakCompoent:p,Exercice1Component:f}};const x=i("h3",{class:"credits"},"von Emil, Maxim & Jan Jacob",-1),B={class:"container",id:"exercice",style:{opacity:"0"}},D={class:"container",id:"break",style:{opacity:"0"}},O={class:"timer-container"},b={class:"button"},F=y('<svg width="79" height="46" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_618_1123)"><path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)"></path></g><defs><filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123"></feGaussianBlur></filter><linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.6"></stop><stop offset="1" stop-color="white" stop-opacity="0.05"></stop></linearGradient></defs></svg>',1);function L(e,t,o,s,n,a){const u=r("Exercice1Component"),d=r("BreakCompoent");return m(),_(k,null,[x,i("div",B,[c(u,{modelFile:n.modelFile,title:n.title,description:n.description},null,8,["modelFile","title","description"])]),i("div",D,[c(d)]),i("div",O,[i("button",b,[g(v(n.timer+" Seconds")+" ",1),F])])],64)}const C=h(w,[["render",L]]);export{C as default};
