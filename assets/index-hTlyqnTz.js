import{d as m,a as g,b as u,f as x,g as t,j as y,J as h,R as _,h as c,i as b,o as k,_ as S}from"./index-DGwKKYZr.js";import{S as D}from"./ShikiHighlight-gg52rkoC.js";import"./bundle-full-C1wOsmt5.js";const R="/demo3/assets/avt-83JCmNSi.png",P="/demo3/assets/pikachu-BDAmag9F.png",w={class:"grid grid-cols-[1fr_min(65ch,100%)_1fr] gap-y-2.5"},C={class:"col-start-2"},E={class:"form-control"},N={class:"col-start-2 flex items-center justify-center"},W=["src"],B={class:"col-start-2"},H=`.card-3d {
  height: 60vh;
  min-height: 400px;
  max-height: 60vh;
  width: auto;
  display: inline-block;
}

.card-3d img {
  height: 100%;
  width: auto;
  display: block;
  box-shadow:
    -3px -3px 10px #5c5d54,
    3px 3px 10px #5c5d54;
}

.card-3d:hover {
  transform:
    perspective(500px)
    rotateY(var(--ry, 0deg))
    rotateX(var(--rx, 0deg));
  transition: 0.3s;
}

/* JavaScript 代码 */
const yRange = [-10, 10];
const xRange = [-10, 10];

function _getRotateDeg(range, position, length) {
  return range[0] + (range[1] - range[0]) * position / length;
}

// 鼠标移动事件
card.addEventListener('mousemove', (e) => {
  const { offsetWidth, offsetHeight } = card;
  const { offsetX, offsetY } = e;
  const ry = _getRotateDeg(yRange, offsetX, offsetWidth);
  const rx = _getRotateDeg(xRange, offsetY, offsetHeight);

  card.style.setProperty('--ry', -ry + 'deg');
  card.style.setProperty('--rx', rx + 'deg');
});

// 鼠标移出事件
card.addEventListener('mouseleave', () => {
  card.style.setProperty('--ry', '0');
  card.style.setProperty('--rx', '0');
});`,L="css",V="github-dark",X=m({__name:"index",setup(Y){const n=g("avt"),s=g(null);return u(()=>{if(!s.value)return;const p=[-10,10],e=[-10,10];function a(l,d,i){const[o,r]=l;return o===void 0||r===void 0?0:o+(r-o)*d/i}s.value.addEventListener("mousemove",l=>{const{offsetWidth:d,offsetHeight:i}=s.value,{offsetX:o,offsetY:r}=l,f=a(p,o,d),v=a(e,r,i);s.value.style.setProperty("--ry",-f+"deg"),s.value.style.setProperty("--rx",v+"deg")}),s.value.addEventListener("mouseleave",()=>{s.value.style.setProperty("--ry","0"),s.value.style.setProperty("--rx","0")})}),(p,e)=>(k(),x("div",w,[e[3]||(e[3]=t("h1",{class:"col-start-2 text-3xl font-bold text-center"},"3D 卡片效果",-1)),e[4]||(e[4]=t("p",{class:"col-start-2"},[y(" MDN文档："),t("a",{class:"link text-primary",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/transform",target:"_blank"},"https://developer.mozilla.org/en-US/docs/Web/CSS/transform")],-1)),e[5]||(e[5]=t("p",{class:"col-start-2"}," 使用 CSS transform 和 perspective 创建 3D 卡片效果，鼠标移动时卡片会跟随旋转 ",-1)),t("div",C,[t("div",E,[e[2]||(e[2]=t("label",{class:"label"},[t("span",{class:"label-text font-semibold"},"选择图片")],-1)),h(t("select",{"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),class:"select select-bordered w-full max-w-xs"},[...e[1]||(e[1]=[t("option",{value:"avt"},"头像 (avt.png)",-1),t("option",{value:"pikachu"},"皮卡丘 (pikachu.png)",-1)])],512),[[_,n.value]])])]),t("div",N,[t("div",{ref_key:"card",ref:s,class:"card-3d"},[t("img",{src:n.value==="avt"?c(R):c(P),alt:"3D卡片"},null,8,W)],512)]),e[6]||(e[6]=t("p",{class:"col-start-2 text-sm text-gray-500"}," *将鼠标移动到卡片上，卡片会跟随鼠标移动产生 3D 旋转效果 ",-1)),t("div",B,[b(c(D),{code:H,lang:L,theme:V})])]))}}),j=S(X,[["__scopeId","data-v-4d69eeb2"]]);export{j as default};
