"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[29],{5029:(e,t,r)=>{r.r(t),r.d(t,{default:()=>P});var s=r(5043),i=r(2298),n=Object.defineProperty,a=(e,t,r)=>((e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!==typeof t?t+"":t,r),o=new Map,c=new WeakMap,l=0,d=void 0;function u(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(c.has(r)||(l+=1,c.set(r,l.toString())),c.get(r)):"0"):e[t]}`;var r})).toString()}function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==s){const i=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:n,elements:a}=function(e){const t=u(e);let r=o.get(t);if(!r){const s=new Map;let i;const n=new IntersectionObserver((t=>{t.forEach((t=>{var r;const n=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=n),null==(r=s.get(t.target))||r.forEach((e=>{e(n,t)}))}))}),e);i=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:n,elements:s},o.set(t,r)}return r}(r),c=a.get(e)||[];return a.has(e)||a.set(e,c),c.push(t),n.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(a.delete(e),n.unobserve(e)),0===a.size&&(n.disconnect(),o.delete(i))}}s.Component;const _=s.createContext({}),g=!0;function p(e){let{baseColor:t,highlightColor:r,width:s,height:i,borderRadius:n,circle:a,direction:o,duration:c,enableAnimation:l=g,customHighlightBackground:d}=e;const u={};return"rtl"===o&&(u["--animation-direction"]="reverse"),"number"===typeof c&&(u["--animation-duration"]=`${c}s`),l||(u["--pseudo-element-display"]="none"),"string"!==typeof s&&"number"!==typeof s||(u.width=s),"string"!==typeof i&&"number"!==typeof i||(u.height=i),"string"!==typeof n&&"number"!==typeof n||(u.borderRadius=n),a&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof r&&(u["--highlight-color"]=r),"string"===typeof d&&(u["--custom-highlight-background"]=d),u}function m(e){let{count:t=1,wrapper:r,className:i,containerClassName:n,containerTestId:a,circle:o=!1,style:c,...l}=e;var d,u,h;const m=s.useContext(_),f={...l};for(const[s,_]of Object.entries(l))"undefined"===typeof _&&delete f[s];const y={...m,...f,circle:o},v={...c,...p(y)};let b="react-loading-skeleton";i&&(b+=` ${i}`);const x=null!==(d=y.inline)&&void 0!==d&&d,C=[],j=Math.ceil(t);for(let _=0;_<j;_++){let e=v;if(j>t&&_===j-1){const r=null!==(u=e.width)&&void 0!==u?u:"100%",s=t%1,i="number"===typeof r?r*s:`calc(${r} * ${s})`;e={...e,width:i}}const r=s.createElement("span",{className:b,style:e,key:_},"\u200c");x?C.push(r):C.push(s.createElement(s.Fragment,{key:_},r,s.createElement("br",null)))}return s.createElement("span",{className:n,"data-testid":a,"aria-live":"polite","aria-busy":null!==(h=y.enableAnimation)&&void 0!==h?h:g},r?C.map(((e,t)=>s.createElement(r,{key:t},e))):C)}const f="SkeletonCardStyle_skeleton_card__1rK4I",y="SkeletonCardStyle_skeleton_card_image_container__KbFOH",v="SkeletonCardStyle_skeleton_card_content__rv-PK",b="SkeletonCardStyle_skeleton_card_title__Ch0Qp";var x=r(579);const C=()=>(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)("div",{className:y,children:(0,x.jsx)(m,{height:250,width:250})}),(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)(m,{className:b}),(0,x.jsx)(m,{className:b})]})]}),j="Card_product_card__F3n+l",k="Card_product_card_image_container__0xKsz",w="Card_product_card_content__kV2-p",S="Card_product_card_title__GghfA",N="Card_card_footer__ZcUJp",V="Card_product_card_price__ZCoeW",A="Card_purchase_button_add__SXAtS";var L=r(3216);const R=e=>{let{id:t,title:r,price:n,description:a,image:o,category:c}=e;const l=(0,s.useContext)(i.A),d=(0,L.Zp)(),[u,h]=s.useState("style.purchase_button_add"),[_,g]=s.useState("Buy");return(0,x.jsxs)("div",{className:j,id:String(t),children:[(0,x.jsx)("div",{className:k,children:(0,x.jsx)("img",{src:o,loading:"lazy",alt:"Product Image"})}),(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("div",{className:S,children:r}),(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("div",{className:V,children:n+"$"}),(0,x.jsx)("button",{className:A,onClick:()=>{l.setCurrentProduct({category:c,description:a,id:t,image:o,price:n,title:r}),window.scrollTo({top:0,behavior:"auto"}),d("/full_card")},children:_})]})]})]})},I=e=>{let{id:t,title:r,price:i,description:n,image:a,category:o}=e;const c={id:t,title:r,price:i,description:n,image:a,category:o},{ref:l,inView:d}=function(){let{threshold:e,delay:t,trackVisibility:r,rootMargin:i,root:n,triggerOnce:a,skip:o,initialInView:c,fallbackInView:l,onChange:d}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var u;const[_,g]=s.useState(null),p=s.useRef(),[m,f]=s.useState({inView:!!c,entry:void 0});p.current=d,s.useEffect((()=>{if(o||!_)return;let s;return s=h(_,((e,t)=>{f({inView:e,entry:t}),p.current&&p.current(e,t),t.isIntersecting&&a&&s&&(s(),s=void 0)}),{root:n,rootMargin:i,threshold:e,trackVisibility:r,delay:t},l),()=>{s&&s()}}),[Array.isArray(e)?e.toString():e,_,n,i,a,o,r,l,t]);const y=null==(u=m.entry)?void 0:u.target,v=s.useRef();_||!y||a||o||v.current===y||(v.current=y,f({inView:!!c,entry:void 0}));const b=[g,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}({triggerOnce:!0,threshold:.2});return(0,x.jsx)("div",{ref:l,children:d?(0,x.jsx)(R,{...c}):(0,x.jsx)(C,{})})},E="searchField_form_container__U2T3+",O="searchField_search_field__GiSc7",$="searchField_search_ico__K0xxy",F=e=>{let{search:t,setSearch:r}=e;(0,s.useContext)(i.A);return(0,x.jsx)("div",{className:E,children:(0,x.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,x.jsx)("input",{className:O,type:"text",placeholder:"Search...",value:t,onChange:e=>r(e.target.value),onClick:e=>r("")}),(0,x.jsx)("img",{className:$,src:"https://i7.uihere.com/icons/805/425/292/cx-6239a19d5332d5b6eb5d8056dc178ad4.png"})]})})},M="categoriesList_categories__xL8RD",B="categoriesList_checked_category__Q8T8V",K=e=>{let{category:t,setCategory:r,categories:s,setCategories:i}=e;const n=e=>{r(e.currentTarget.className)},a=e=>e&&0!==e.length?e[0].toUpperCase()+e.slice(1):e;return(0,x.jsxs)("div",{className:M,children:[(0,x.jsx)("h3",{children:"\u0412\u044b\u0431\u0440\u0430\u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:"}),(0,x.jsx)("h3",{className:B,children:t?a(t):"All"}),(0,x.jsx)("hr",{}),(0,x.jsx)("div",{onClick:()=>r(""),children:"All"}),s.map(((e,t)=>(0,x.jsx)("div",{className:e,onClick:n,children:a(e)},t)))]})},T={cards_container:"Cards_cards_container__G7u9B",side_bar:"Cards_side_bar__JCo8U",cards:"Cards_cards__tk0ov"};function P(){const e=(0,s.useContext)(i.A),[t,r]=s.useState(!0),[n,a]=s.useState(""),[o,c]=s.useState([""]),[l,d]=s.useState("");return s.useEffect((()=>{fetch("https://fakestoreapi.com/products/categories").then((e=>e.json())).then((e=>c(e))).finally((()=>r(!1)))}),[]),(0,x.jsxs)("div",{className:T.cards_container,children:[(0,x.jsxs)("div",{className:T.side_bar,children:[(0,x.jsx)(F,{search:n,setSearch:a}),(0,x.jsx)(K,{categories:o,setCategories:c,category:l,setCategory:d})]}),(0,x.jsx)("div",{className:T.cards,children:t?Array(4).fill("").map(((e,t)=>(0,x.jsx)(C,{},t))):e.products.filter((e=>e.title.toLocaleLowerCase().includes(n.toLocaleLowerCase()))).filter((e=>e.category.toLocaleLowerCase().includes(l.toLocaleLowerCase()))).map((e=>(0,x.jsx)(I,{...e},e.id)))})]})}}}]);
//# sourceMappingURL=29.4939aa9b.chunk.js.map