import{u as m}from"./useCanvas-b9fb9ced.js";import{d as p,a as d,c as x}from"./index-001d42e8.js";const y=p({__name:"index",setup(g){const{canvasRef:r,context:e,width:i,height:f}=m({animate:v}),t=["                 _oo0oo_","                o8888888o",'               88" .  "88',"               (|  -_-  |)","               0    =   /0","              ___/`---'___","            .' \\|      |// '.","            / \\\\|||  :  |||// \\","          / _||||| -:- |||||- \\","          |   | \\\\\\  - /// |   |","          | \\_|  ''\\---/''  |_/ |","          .-\\__  '-'  ___/-. /","        ___'. .'  /--.--\\  `. .'___",`    ."" '<  \`.___\\_<|>_/___.' >' "".`,"   | | :  `- \\`.;`\\ _ /`;.`/ - ` : | |","   \\  \\ `_.   \\_ __\\ /__ _/   .-` /  /","=====`.____`.___ \\_____/___.-`___.-'=====","                   `=---='","  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~","        佛祖保佑     永不宕机     永无BUG","       佛曰:  ","         写字楼里写字间，写字间里程序员；        ","         程序人员写程序，又拿程序换酒钱。        ","         酒醒只在网上坐，酒醉还来网下眠；        ","         酒醉酒醒日复日，网上网下年复年。        ","         但愿老死电脑间，不愿鞠躬老板前；        ","         奔驰宝马贵者趣，公交自行程序员。        ","         别人笑我忒疯癫，我笑自己命太贱；        ","         不见满街漂亮妹，哪个归得程序员？"];let _=0,o=1;function v(){e.value&&(e.value.clearRect(0,0,i.value,f.value),h())}function h(){var u,c;e.value.shadowColor="hsla(120,100%,50%,0.5)",e.value.shadowBlur=2,e.value.fillStyle="hsla(120,100%,20%,1)";const n=i.value/2-200,s=200;e.value.globalCompositeOperation="lighter";for(let a=0;a<=_;a++){let l=t[a]||"";a===_&&(l=l.substring(0,o++)),e.value.font="16px monospace",e.value.fillText(l,n,s+a*16)}if(e.value.fillStyle="hsla(120,100%,50%,1)",t[_]){const a=n+e.value.measureText((u=t[_])==null?void 0:u.substring(0,o)).width,l=s+_*16-14;e.value.fillRect(a,l,10,14)}o>=((c=t[_])==null?void 0:c.length)&&(_++,o=0),_*16>window.innerHeight-200&&e.value.translate(0,-.5)}return(n,s)=>(d(),x("canvas",{ref_key:"canvasRef",ref:r,class:"backdrop-blur"},null,512))}});export{y as default};
