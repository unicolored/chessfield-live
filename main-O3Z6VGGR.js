import{C as b,D as T,F as w,G as I,H as f,I as S,J as y,K as A,L as x,M as F,N as _,O as R,f as u,i as s,j as v,k as p,l,n as c,p as D,q as M,r as C,s as n,t as r,u as d,v as k,z as m}from"./chunk-6HLPFSOJ.js";var P=[{path:"",pathMatch:"full",loadComponent:()=>import("./chunk-52BLAM7Q.js").then(t=>t.LiveComponent)}];var E={providers:[T({eventCoalescing:!0}),R(P),F(x()),S(y())]};var a=class t{darkMode=v(!1);isDarkMode=this.darkMode.asReadonly();platformID=s(p);constructor(){let e=f(this.platformID);if(e){let o=window.matchMedia("(prefers-color-scheme: dark)").matches;this.darkMode.set(o)}console.log("this.darkMode()",this.darkMode()),console.log("this.isDarkMode()",this.isDarkMode()),w(()=>{e&&window.localStorage.setItem("darkMode",this.isDarkMode()?"dark":"light")})}toggleTheme(){let e=this.isDarkMode();this.darkMode.set(!e)}setDarkMode(e){this.darkMode.set(e)}static \u0275fac=function(o){return new(o||t)};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})};function B(t,e){t&1&&m(0," \u{1F31D} LIGHT ")}function N(t,e){t&1&&m(0," \u{1F31A} DARK ")}var h=class t{themeService=s(a);isDarkMode=this.themeService.isDarkMode();platformID=s(p);ngOnInit(){if(f(this.platformID)){let o=window.localStorage.getItem("darkMode")??"light";console.log("stored",o);let i=o==="dark";this.setDarkMode(i)}}setDarkMode(e){this.themeService.setDarkMode(e),this.updateTheme(e)}toggleTheme(){this.themeService.toggleTheme(),this.updateTheme(this.themeService.isDarkMode())}updateTheme(e){this.isDarkMode=e,e?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")}static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["app-theme-toggle"]],decls:3,vars:1,consts:[[1,"btn","btn-ghost","btn-lg","btn-circle","border-0",3,"click"]],template:function(o,i){o&1&&(n(0,"button",0),k("click",function(){return i.toggleTheme()}),D(1,B,1,0)(2,N,1,0),r()),o&2&&(l(),C(i.themeService.isDarkMode()?1:2))},dependencies:[I],encapsulation:2})};var g=class t{title="chessfield-live";isLoading=!1;static \u0275fac=function(o){return new(o||t)};static \u0275cmp=c({type:t,selectors:[["app-root"]],features:[b([a])],decls:9,vars:2,consts:[[1,"navbar","bg-base-100","shadow-sm"],[1,"navbar-start"],["aria-label","success",1,"status","status-success","status-lg","ml-2"],[1,"navbar-center"],["href","/",1,"btn","btn-ghost","border-0","text-xl"],[1,"navbar-end"],[1,"mr-2"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"div",1),d(2,"div",2),r(),n(3,"div",3)(4,"a",4),m(5,"Chessfield \u{1F37F} Live"),r()(),n(6,"div",5),d(7,"app-theme-toggle",6),r()(),d(8,"router-outlet")),o&2&&(l(2),M("animate-ping",i.isLoading))},dependencies:[_,h],encapsulation:2})};A(g,E).catch(t=>console.error(t));
