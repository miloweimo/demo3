import{S as e}from"./ShikiHighlight-gg52rkoC.js";import{d as i,f as b,m as a,g as v,i as l,h as r,o as c,_ as n}from"./index-DGwKKYZr.js";import"./bundle-full-C1wOsmt5.js";const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAeBJREFUaEPtWN1NwzAQPqeWeLUUI/xGN6Aj0A3YoB2BTgBMQDcARugEwASFDXgsUiLlkQdXRy2lVVolsRvXbVJdXnN27rvvfr4Lg44/rOP+AwE4NYPEADHgGQFKIc8Aeh8nBupCGMfqhTEYNw0zImYAbJKmi9eqO4IxIMTlgPPevKnzhXOfSbK4PToAKZX56Ps5ARi6gkGEMWMwyu3bwUCSLJzTVUr1CAAPBMBEQAghouhiFEVMuKaAsUOEfrEDnYwBKa/mAGywj/NlticEoNDXeXO+JQDwG4BlboBQALCbtW1LAMBwNVQ+XADszoGzACCE6nO+6e+lcVgBfTpoG5Vyqwa8GHCZzoYpAlDk9pAM5AJvWldDRri1lgGX4jc2wQGsWFnrlFKftIY3zqFfVKMmt1tTxDtpVQZirTw3cjovTqvEPkoRnwOA2mGm9fKe854Rf1sMUBGXJKt1yShro1Kq2lVR6+WkhoFnSxsdHqML2RQqFfHBVsqKFKIirquDgDWAX3suNMVV1GmPKOzTZpKbx++3isPQcpU4Te38AMSx+mEMrpt+3fccIs7S9Peu6h7rHMgFWOMftL4AtP6bZllWuYdbAfg6EPo8AQgdYdv9xIAtQqHfEwOhI2y7v/MM/ANjdptAhSRx1wAAAABJRU5ErkJggg==",s="data:image/svg+xml,%3csvg%20width='128'%20height='128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M121.718%2073.272v9.953c3.957-7.584%206.199-16.05%206.199-24.995C127.917%2026.079%2099.273%200%2063.958%200%2028.644%200%200%2026.079%200%2058.23c0%20.403.028.806.028%201.21l22.97-25.953h13.34l-19.76%2027.187h6.42V53.77l13.728-19.477v49.361H22.998V73.272H2.158c5.951%2020.284%2023.608%2036.208%2045.998%2041.399-1.44%203.3-5.618%2011.263-12.565%2012.674-8.607%201.764%2023.358.428%2046.163-13.178%2017.519-4.611%2031.938-15.849%2039.77-30.513h-13.506V73.272H85.02V59.464l22.998-25.977h13.008l-19.429%2027.187h6.421v-7.433l13.727-19.402v39.433h-.027zm-78.24%202.822a10.516%2010.516%200%200%201-.996-4.535V44.548c0-1.613.332-3.124.996-4.535a11.66%2011.66%200%200%201%202.713-3.68c1.134-1.032%202.49-1.864%204.04-2.468%201.55-.605%203.21-.908%204.982-.908h11.292c1.77%200%203.431.303%204.981.908%201.522.604%202.85%201.41%203.986%202.418l-12.26%2016.303v-2.898a1.96%201.96%200%200%200-.665-1.512c-.443-.403-.996-.604-1.66-.604-.665%200-1.218.201-1.661.604a1.96%201.96%200%200%200-.664%201.512v9.071L44.364%2077.606a10.556%2010.556%200%200%201-.886-1.512zm35.73-4.535c0%201.613-.332%203.124-.997%204.535a11.66%2011.66%200%200%201-2.712%203.68c-1.134%201.032-2.49%201.864-4.04%202.469-1.55.604-3.21.907-4.982.907H55.185c-1.77%200-3.431-.303-4.981-.907-1.55-.605-2.906-1.437-4.041-2.47a12.49%2012.49%200%200%201-1.384-1.512l13.727-18.217v6.375c0%20.605.222%201.109.665%201.512.442.403.996.604%201.66.604.664%200%201.218-.201%201.66-.604a1.96%201.96%200%200%200%20.665-1.512V53.87L75.97%2036.838c.913.932%201.66%201.99%202.214%203.175.664%201.41.996%202.922.996%204.535v27.011h.028z'/%3e%3c/svg%3e",g={class:"grid grid-cols-[1fr_min(65ch,100%)_1fr] gap-y-2.5"},m={class:"col-start-2"},o=`/* 变白色 - 使用 filter */
.twhite {
  filter: brightness(100);
}

/* 对于黑色SVG图，使用 invert(1) 反色 */
.filterinvert {
  filter: invert(1);
}

/* 变红色 - 使用 mask */
.tred {
  width: 50px;
  height: 50px;
  background: rgb(255, 0, 0);
  -webkit-mask: url(./data.png);
  mask: url(./data.png);
  -webkit-mask-size: 50px 50px;
  mask-size: 50px 50px;
}

.atred {
  width: 50px;
  height: 50px;
  background: rgb(255, 0, 0);
  -webkit-mask: url(./404.svg);
  mask: url(./404.svg);
  -webkit-mask-size: 50px 50px;
  mask-size: 50px 50px;
}

/* 渐变色 */
.jb {
  width: 50px;
  height: 50px;
  background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%);
  -webkit-mask: url(./data.png);
  mask: url(./data.png);
  -webkit-mask-size: 50px 50px;
  mask-size: 50px 50px;
}

.ajb {
  width: 50px;
  height: 50px;
  background: linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(0,0,255,1) 100%);
  -webkit-mask: url(./404.svg);
  mask: url(./404.svg);
  -webkit-mask-size: 50px 50px;
  mask-size: 50px 50px;
}

/* 橘色 */
.torange {
  width: 50px;
  height: 50px;
  background: linear-gradient(orange, orange);
  -webkit-mask: url(./data.png);
  mask: url(./data.png);
  -webkit-mask-size: 50px 50px;
  mask-size: 50px 50px;
}

.atorange {
  width: 50px;
  height: 50px;
  background: linear-gradient(orange, orange);
  -webkit-mask: url(./404.svg);
  mask: url(./404.svg);
  -webkit-mask-size: 50px 50px;
  mask-size: 50px 50px;
}`,p="css",x="github-dark",h=i({__name:"index",setup(k){return(A,d)=>(c(),b("div",g,[d[0]||(d[0]=a('<h1 class="col-start-2 text-3xl font-bold text-center" data-v-bdd0bd71>CSS 修改图片颜色</h1><p class="col-start-2" data-v-bdd0bd71> MDN文档：<a class="link text-primary" href="https://developer.mozilla.org/en-US/docs/Web/CSS/mask" target="_blank" data-v-bdd0bd71>https://developer.mozilla.org/en-US/docs/Web/CSS/mask</a></p><p class="col-start-2" data-v-bdd0bd71> 使用 filter 和 mask 属性修改图片颜色，实现图标任意颜色赋色 </p><div class="col-start-2" data-v-bdd0bd71><h2 class="text-xl font-semibold mb-4" data-v-bdd0bd71>透明黑线图片 (data.png)</h2><div class="flex flex-wrap gap-6 items-center justify-center p-4 bg-base-200 rounded-lg" data-v-bdd0bd71><div class="text-center" data-v-bdd0bd71><div class="mb-2" data-v-bdd0bd71><img src="'+t+'" alt="原图" class="w-16 h-16" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>原图</div></div><div class="text-center" data-v-bdd0bd71><div class="mb-2 twhite" data-v-bdd0bd71><img src="'+t+'" alt="改白色" class="w-16 h-16" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>改白色</div></div><div class="text-center" data-v-bdd0bd71><div class="mb-2 tred" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>改红色</div></div><div class="text-center" data-v-bdd0bd71><div class="mb-2 jb" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>渐变</div></div><div class="text-center" data-v-bdd0bd71><div class="mb-2 torange" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>橘色</div></div></div></div><div class="col-start-2" data-v-bdd0bd71><h2 class="text-xl font-semibold mb-4" data-v-bdd0bd71>黑色SVG图 (404.svg)</h2><div class="flex flex-wrap gap-6 items-center justify-center p-4 bg-base-200 rounded-lg" data-v-bdd0bd71><div class="text-center" data-v-bdd0bd71><div class="mb-2" data-v-bdd0bd71><img src="'+s+'" alt="原图" class="w-16 h-16" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>原图</div></div><div class="text-center" data-v-bdd0bd71><div class="mb-2 filterinvert" data-v-bdd0bd71><img src="'+s+'" alt="改白色" class="w-16 h-16" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>改白色</div></div><div class="text-center" data-v-bdd0bd71><div class="mb-2 atred" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>改红色</div></div><div class="text-center" data-v-bdd0bd71><div class="mb-2 ajb" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>渐变</div></div><div class="text-center" data-v-bdd0bd71><div class="mb-2 atorange" data-v-bdd0bd71></div><div class="text-sm" data-v-bdd0bd71>橘色</div></div></div></div><p class="col-start-2 text-sm text-gray-500" data-v-bdd0bd71> *使用 mask 属性时，需要用背景色替代图片，图片作为遮罩使用 </p>',6)),v("div",m,[l(r(e),{code:o,lang:p,theme:x})]),d[1]||(d[1]=a('<div class="col-start-2" data-v-bdd0bd71><h2 class="text-xl font-semibold mb-2" data-v-bdd0bd71>参考资料</h2><ul class="list-disc list-inside space-y-1" data-v-bdd0bd71><li data-v-bdd0bd71><a class="link text-primary" href="https://github.com/chokcoco/iCSS/issues/16" target="_blank" data-v-bdd0bd71>谈谈一些有趣的CSS题目（28）-- 不可思议的颜色混合模式 mix-blend-mode</a></li><li data-v-bdd0bd71><a class="link text-primary" href="https://www.cnblogs.com/coco1s/p/8080211.html" target="_blank" data-v-bdd0bd71>两行 CSS 代码实现图片任意颜色赋色技术</a></li><li data-v-bdd0bd71><a class="link text-primary" href="https://www.zhangxinxu.com/wordpress/2018/11/css-change-icon-color/" target="_blank" data-v-bdd0bd71>纯CSS实现任意格式图标变色的研究</a></li></ul></div>',1))]))}}),S=n(h,[["__scopeId","data-v-bdd0bd71"]]);export{S as default};
