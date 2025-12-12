import{S as t}from"./ShikiHighlight-gg52rkoC.js";import{d as a,f as o,m as s,g as r,i as c,h as l,o as d,_ as i}from"./index-DGwKKYZr.js";import"./bundle-full-C1wOsmt5.js";const n={class:"grid grid-cols-[1fr_min(65ch,100%)_1fr] gap-y-2.5"},p={class:"col-start-2"},b=`/* 背景图片容器 */
.bg-demo {
  --bg: url('./cake.jpg');
  background: var(--bg);
  background-repeat: repeat;
}

/* 半透明蒙层 */
.my-modal {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

/* 镂空文字 */
.hollow-text-demo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  /* 文字描边 */
  -webkit-text-stroke: 1px #fff;
  /* 设置文字层背景和背景一样，覆盖上去 */
  background: var(--bg);
  background-repeat: repeat;
  /* 设置背景只到文字覆盖范围 */
  background-clip: text;
  -webkit-background-clip: text;
  /* 文字颜色 */
  color: transparent;
}`,g="css",m="github-dark",h=a({__name:"index",setup(x){return(k,e)=>(d(),o("div",n,[e[0]||(e[0]=s('<h1 class="col-start-2 text-3xl font-bold text-center" data-v-ee7e0e9b>镂空文字效果</h1><p class="col-start-2" data-v-ee7e0e9b> MDN文档：<a class="link text-primary" href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip" target="_blank" data-v-ee7e0e9b>https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip</a></p><p class="col-start-2" data-v-ee7e0e9b> 使用 background-clip: text 和 text-stroke 创建镂空文字效果 </p><div class="col-start-2 min-h-[200px] bg-demo" data-v-ee7e0e9b><div class="h-full w-full my-modal" data-v-ee7e0e9b><h1 class="hollow-text-demo" data-v-ee7e0e9b>镂空文字Hollow Text</h1></div></div><p class="col-start-2 text-sm text-gray-500" data-v-ee7e0e9b> *文字会显示背景图片，形成镂空效果 </p>',5)),r("div",p,[c(l(t),{code:b,lang:g,theme:m})])]))}}),_=i(h,[["__scopeId","data-v-ee7e0e9b"]]);export{_ as default};
