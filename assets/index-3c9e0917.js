var C=Object.defineProperty;var F=(m,r,u)=>r in m?C(m,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):m[r]=u;var y=(m,r,u)=>(F(m,typeof r!="symbol"?r+"":r,u),u);import{d as I,f as j,g as B,r as X,w as V,o as $,h as q,a as A,c as L,i as N,v as W,j as U,k as Y,l as G,F as H}from"./index-001d42e8.js";import{c as _}from"./colors-78f22cf3.js";import{u as J}from"./useCanvas-b9fb9ced.js";const ee=I({__name:"index",setup(m){const r=j(),{canvasRef:u,context:t,width:b,height:g}=J({animate:S}),{x:P,y:R}=B(u),w=200,T=1e3;let M=0;const p=X("XY");let a=[];class z{constructor(e,s){y(this,"x");y(this,"y");y(this,"size");y(this,"baseX");y(this,"baseY");y(this,"density");this.x=e,this.y=s,this.size=4,this.baseX=this.x,this.baseY=this.y,this.density=Math.random()*20+1}draw(){var e,s,n,c;(e=t.value)==null||e.beginPath(),M<180?t.value.fillStyle="green":t.value.fillStyle=_[Math.floor(Math.random()*_.length)],(s=t.value)==null||s.arc(this.x,this.y,this.size,0,Math.PI*2),(n=t.value)==null||n.closePath(),(c=t.value)==null||c.fill()}update(){const e=P.value-this.x,s=R.value-this.y,n=Math.sqrt(e*e+s*s),c=e/n,i=s/n,l=w,h=(l-n)/l,v=c*h*this.density,x=i*h*this.density;if(n<w)this.x-=v,this.y-=x;else{if(this.x!==this.baseX){const f=this.x-this.baseX;this.x-=f/20}if(this.y!==this.baseY){const f=this.y-this.baseY;this.y-=f/20}}}}function k(){var h,v,x;a=[];const o=40;t.value.font=`${o}px Verdana`,(h=t.value)==null||h.fillText(p.value,0,o-10,b.value);const e=b.value/2-t.value.measureText(p.value).width*20/2,s=Math.floor((g.value-o*10)/4),n=(v=t.value)==null?void 0:v.getImageData(0,0,b.value,g.value);(x=t.value)==null||x.clearRect(0,0,b.value,g.value);const{width:c=0,height:i=0,data:l=[]}=n||{};for(let d=0;d<c;d++)for(let f=0;f<i;f++)if(l[f*4*c+d*4+3]>128){if(a.length>=T)break;a.push(new z(d*20+e,f*20+s))}}const D=X("rgba(255,255,255,");function E(){var e,s,n,c;let o=.6;for(let i=0;i<a.length;i++)for(let l=i;l<a.length;l++){const h=a[i].x-a[l].x,v=a[i].y-a[l].y,x=Math.sqrt(h*h+v*v),d=30;x<d&&(o=Number.parseFloat((1-x/d).toFixed(2)),t.value.strokeStyle=`${D.value}${o})`,(e=t.value)==null||e.beginPath(),t.value.lineWidth=1.8,(s=t.value)==null||s.moveTo(a[i].x,a[i].y),(n=t.value)==null||n.lineTo(a[l].x,a[l].y),(c=t.value)==null||c.stroke())}}function S(){var o;M++,(o=t.value)==null||o.clearRect(0,0,b.value,g.value);for(let e=0;e<a.length;e++)a[e].draw(),a[e].update();E()}return V(()=>{D.value=r.value?"rgba(255,255,255,":"rgba(0,0,0,"}),$(()=>{k()}),q(p,()=>{k()},{debounce:1e3,maxWait:5e3}),window.addEventListener("resize",()=>{window.location.reload()}),(o,e)=>(A(),L(H,null,[N(Y("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>G(p)?p.value=s:null),type:"text",class:"fixed left-2 mx-auto w-52 bg-gray/20 rounded top-2 py-1 px-2 outline-none"},null,512),[[W,U(p)]]),Y("canvas",{ref_key:"canvasRef",ref:u},null,512)],64))}});export{ee as default};
