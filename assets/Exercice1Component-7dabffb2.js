import{_ as a,o as n,c as r,a as _,d as p,b as t,t as s,F as u}from"./index-fa5d1409.js";const h={data(){return{}},methods:{}},$={class:"break"};function f(c,i,e,d,l,o){return n(),r("h1",$,"Break")}const v=a(h,[["render",f]]),b={data(){return{}},props:["modelFile","title","description"],setup(){},mounted(){},methods:{getModelPath(){return`/workout-app/3dModels/${this.$props.modelFile}`}}},g={class:"infobox-container"},x={class:"title"};function B(c,i,e,d,l,o){const m=_("model-viewer");return n(),r(u,null,[p(m,{src:o.getModelPath(),"camera-controls":"","touch-action":"pan-y",autoplay:"true","shadow-intensity":"1","disable-zoom":"","disable-pan":"","camera-orbit":"90deg 0 8m","camera-target":"0m 0.5m 0m"},null,8,["src"]),t("div",g,[t("h1",x,s(e.title),1),t("p",null,s(e.description),1)])],64)}const y=a(b,[["render",B]]);export{v as B,y as E};
