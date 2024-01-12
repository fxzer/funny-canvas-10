var T=Object.defineProperty;var C=(h,o,e)=>o in h?T(h,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):h[o]=e;var l=(h,o,e)=>(C(h,typeof o!="symbol"?o+"":o,e),e);import{c as _}from"./colors-78f22cf3.js";import{u as A}from"./useCanvas-b9fb9ced.js";import{d as E,b as z,o as G,e as I,a as O,c as W}from"./index-001d42e8.js";const H=E({__name:"index",setup(h){const{canvasRef:o,context:e,width:f,height:d}=A({animate:S}),{x,y}=z(),v=[],i=100,g=i*.25;let m,u,k,c,p,M;class b{constructor(t){l(this,"x");l(this,"y");l(this,"xBase");l(this,"yBase");l(this,"offset");l(this,"duration");l(this,"range");l(this,"dir");l(this,"rad");l(this,"rotateAngle");this.x=t.x,this.y=t.y,this.xBase=this.x,this.yBase=this.y,this.offset=n(0,1e3),this.duration=n(20,60),this.range=n(3,6),this.dir=n(0,1)>.5?1:-1,this.rad=n(2,4),this.rotateAngle=n(0,Math.PI*2)}draw(){e.value&&(e.value.save(),e.value.beginPath(),e.value.translate(this.x,this.y),e.value.rotate(this.rotateAngle),e.value.rect(-6,-6,12,12),e.value.fill(),e.value.stroke(),e.value.closePath(),e.value.restore())}update(){this.x=this.xBase+this.dir*Math.sin((k+this.offset)/this.duration)*this.range,this.y=this.yBase+this.dir*Math.cos((k+this.offset)/this.duration)*this.range;const t=w(this,new b({x:x.value,y:y.value}));this.x=this.x+Math.cos(t)*100,this.y=this.y+Math.sin(t)*100}}function w(a,t){const s=a.x-t.x,r=a.y-t.y;return Math.atan2(r,s)}function B(){x.value=f.value/2,y.value=d.value/2,m=0,u=0,v.length=0,k=0,R()}function n(a,t){return Math.random()*(t-a)+a}function R(){for(let a=-i/2;a<f.value+i;a+=i){m++;for(let t=-i/2;t<d.value+i;t+=i)a===-i/2&&u++,v.push(new b({x:a+n(-g,g),y:t+n(-g,g)}))}}let P=0;function S(){var t;if(!e.value)return;P++,(t=e.value)==null||t.clearRect(0,0,f.value,d.value),e.value.lineWidth=2,e.value.beginPath(),P%60===0&&(e.value.strokeStyle=_[Math.floor(Math.random()*_.length)]);for(let s=0;s<m;s++)for(let r=0;r<u;r++)c=v[s*u+r],p=s===m-1?null:v[(s+1)*u+r],M=r===u-1?null:v[s*u+r+1],p&&(e.value.moveTo(c.x,c.y),e.value.lineTo(p.x,p.y)),M&&(e.value.moveTo(c.x,c.y),e.value.lineTo(M.x,M.y));e.value.stroke(),e.value.fillStyle="#000",v.forEach(s=>{s.update(),s.draw()});const a=e.value.createRadialGradient(x.value,y.value,0,x.value,y.value,400);a.addColorStop(0,"hsla(0, 0%, 0%, 0)"),a.addColorStop(1,"hsla(0, 0%, 0%, 0.85)"),e.value.fillStyle=a,e.value.fillRect(0,0,f.value,d.value)}return B(),G(()=>{e.value.strokeStyle="green"}),I(o,B),(a,t)=>(O(),W("canvas",{ref_key:"canvasRef",ref:o,"bg-black":""},null,512))}});export{H as default};
