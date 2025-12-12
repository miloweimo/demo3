import{S as t}from"./ShikiHighlight-gg52rkoC.js";import{d as a,f as s,m as o,g as r,i as d,h as n,o as i,_ as c}from"./index-DGwKKYZr.js";import"./bundle-full-C1wOsmt5.js";const l={class:"grid grid-cols-[1fr_min(65ch,100%)_1fr] gap-y-2.5"},p={class:"col-start-2"},m=`h1 {
  font-family: monospace;
  font-weight: black;
  font-size: 100px;
  color: white;
  position: relative;
  z-index: 2;
}

h1::before {
  /* content 复制h1 */
  content: 'Shadow';
  color: black;
  position: absolute;
  /* 对阴影变形 */
  transform: translate(-39px, 17px) scaleY(0.5) skew(50deg);
  /* 阴影放在文字下面 */
  z-index: -1;
  /* 阴影模糊 */
  filter: blur(3px);
  /* 透明渐变 */
  -webkit-mask-image: linear-gradient(transparent, black);
  mask-image: linear-gradient(transparent, black);
}`,f="css",b="github-dark",h=a({__name:"index",setup(g){return(x,e)=>(i(),s("div",l,[e[0]||(e[0]=o('<h1 class="col-start-2 text-3xl font-bold text-center" data-v-10eb94dd>文字阴影效果</h1><p class="col-start-2" data-v-10eb94dd> MDN文档：<a class="link text-primary" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before" target="_blank" data-v-10eb94dd>https://developer.mozilla.org/en-US/docs/Web/CSS/::before</a></p><p class="col-start-2" data-v-10eb94dd> 使用 ::before 伪元素、transform、filter 和 mask-image 创建文字阴影效果 </p><div class="col-start-2 min-h-[200px] bg-gray-300 flex items-center justify-center" data-v-10eb94dd><h1 class="text-shadow-demo" data-v-10eb94dd>Shadow</h1></div><p class="col-start-2 text-sm text-gray-500" data-v-10eb94dd> *使用伪元素创建阴影，可以实现更复杂的阴影效果 </p>',5)),r("div",p,[d(n(t),{code:m,lang:f,theme:b})])]))}}),S=c(h,[["__scopeId","data-v-10eb94dd"]]);export{S as default};
