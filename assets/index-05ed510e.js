import{u as M}from"./useCanvas-b9fb9ced.js";import{d as v,a as x,c as _}from"./index-001d42e8.js";const P=v({__name:"index",setup(p){const{context:n,canvasRef:c,width:u,height:o}=M({init:i,animate:m});function i(){n.value.strokeStyle="#c9cdd440";const t={x:0,y:Math.random()*o.value},a={x:u.value,y:Math.random()*o.value};r({start:t,length:10,angle:Math.PI/4*(Math.random()*2-1)}),r({start:a,length:10,angle:Math.random()*(Math.PI*5/4-Math.PI*3/4)+Math.PI*3/4})}let e=[];function r(t,a=0){const h=l(t);d(t),(a<4||Math.random()<.5)&&e.push(()=>r({start:h,length:t.length+(Math.random()*2-1),angle:t.angle-.2*Math.random()},a+1)),(a<4||Math.random()<.5)&&e.push(()=>r({start:h,length:t.length+(Math.random()*2-1),angle:t.angle+.2*Math.random()},a+1))}function f(){const t=[];e=e.filter(a=>Math.random()>.4?(t.push(a),!1):!0),t.forEach(a=>a())}let s=0;function m(){s+=1,s%3===0&&f()}function g(t,a){n.value.beginPath(),n.value.moveTo(t.x,t.y),n.value.lineTo(a.x,a.y),n.value.stroke()}function l(t){return{x:t.start.x+t.length*Math.cos(t.angle),y:t.start.y+t.length*Math.sin(t.angle)}}function d(t){g(t.start,l(t))}return(t,a)=>(x(),_("canvas",{ref_key:"canvasRef",ref:c},null,512))}});export{P as default};
