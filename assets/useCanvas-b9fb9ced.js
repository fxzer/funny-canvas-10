import{r as n,o as w,n as m,A as h}from"./index-001d42e8.js";function A(v){const{init:u,animate:s}=v||{};let t=0;const e=n(),i=n(window.innerWidth),a=n(window.innerHeight),r=n(),c=h(()=>{e.value.width=i.value=window.innerWidth,e.value.height=a.value=window.innerHeight},300);return w(()=>{var d;if(e.value){let o=function(){cancelAnimationFrame(t)},l=function(){o(),t=requestAnimationFrame(l),s&&s(o)};e.value.width=i.value,e.value.height=a.value,r.value=(d=e.value)==null?void 0:d.getContext("2d"),u&&u(o),l()}window.addEventListener("resize",c)}),m(()=>{window.removeEventListener("resize",c),cancelAnimationFrame(t)}),{width:i,height:a,canvasRef:e,context:r}}export{A as u};
