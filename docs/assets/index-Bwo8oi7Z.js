(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=document.getElementById("digital-hours"),f=document.getElementById("digital-minutes"),h=document.getElementById("digital-week-day"),p=document.getElementById("digital-day"),E=document.getElementById("digital-month"),D=document.getElementById("digital-year"),c=document.documentElement.style,I=["Sunday","Monday","Tusday","Wednesday","Thursday","Friday","Saturday"],M=["January","February","March","April","May","June","July","August","September","October","November","December"],i=n=>n<10?"0"+n:n,a=()=>{const n=new Date,o=n.getHours(),r=n.getMinutes(),s=n.getSeconds(),e=n.getDay(),t=n.getDate(),d=n.getMonth(),l=n.getFullYear();g.textContent=i(o),f.textContent=i(r),h.textContent=I[e],p.textContent=t,E.textContent=M[d],D.textContent=l;const u=o*30+r/2;c.setProperty("--hour-hand-rotate",u+"deg");const m=r*6+s/10;c.setProperty("--minutes-hand-rotate",m+"deg");const y=s*6;c.setProperty("--seconds-hand-rotate",y+"deg")};a();setInterval(a,1e3);
