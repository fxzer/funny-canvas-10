var M=Object.defineProperty;var g=(l,a,t)=>a in l?M(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t;var i=(l,a,t)=>(g(l,typeof a!="symbol"?a+"":a,t),t);import{c as P}from"./colors-78f22cf3.js";import{u as b}from"./useCanvas-b9fb9ced.js";import{d as w,f as C,a as R,c as E}from"./index-001d42e8.js";const H=w({__name:"index",setup(l){const{canvasRef:a,context:t,width:u,height:h}=b({init:m,animate:p});let o=[];function v(e){return e[Math.floor(Math.random()*e.length)]}const c={x:innerWidth/2,y:innerHeight/2};addEventListener("click",e=>{c.x=e.clientX,c.y=e.clientY});class d{constructor(s,r,n,_,k){i(this,"x");i(this,"y");i(this,"radius");i(this,"color");i(this,"radians",Math.random()*Math.PI*2);i(this,"velocity");i(this,"ttl");this.x=s,this.y=r,this.radius=n,this.color=_,this.velocity=k,this.ttl=2e3}draw(){t.value&&(t.value.beginPath(),t.value.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),t.value.fillStyle=this.color,t.value.fill(),t.value.closePath())}update(){this.ttl--,this.x+=this.velocity.x,this.y+=this.velocity.y,this.draw()}}function m(){o=[],f()}const y=C();function p(){t.value&&(t.value.clearRect(0,0,u.value,h.value),t.value.fillStyle=y.value?"rgba(0,0,0,0.05)":"rgba(255, 255, 255, 0.05)",t.value.fillRect(0,0,u.value,h.value)),o.forEach((e,s)=>{e.ttl<=0?o.splice(s,1):e.update()})}function f(e=30){const s=v(P),r=Math.PI*2/e;for(let n=0;n<e;n++)o.push(new d(c.x,c.y,4,s,{x:Math.cos(r*n),y:Math.sin(r*n)}))}function x(){setTimeout(f,50)}return(e,s)=>(R(),E("canvas",{ref_key:"canvasRef",ref:a,class:"backdrop-blur",onClick:x},null,512))}});export{H as default};
