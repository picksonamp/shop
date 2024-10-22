"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[64],{3064:(e,t,s)=>{s.r(t),s.d(t,{default:()=>F});var a=s(5043),r=s(2298);const c="card_product_card__tePeH",i="card_product_card_image_container__wE25V",n="card_product_card_content__ZYA1g",l="card_product_card_title__-pDqf",o="card_card_footer__3HjZ+",d="card_product_card_price__k-mWt",_="card_purchase_button_add__+spF2";var h=s(579);const u=e=>{let{id:t,title:s,price:u,description:m,image:p,category:g}=e;(0,a.useContext)(r.A);const[x,f]=a.useState("style.purchase_button_add"),[y,j]=a.useState("Buy");return(0,h.jsxs)("div",{className:c,id:String(t),children:[(0,h.jsx)("div",{className:i,children:(0,h.jsx)("img",{src:p,loading:"lazy",alt:"Product Image"})}),(0,h.jsxs)("div",{className:n,children:[(0,h.jsx)("div",{className:l,children:s}),(0,h.jsxs)("div",{className:o,children:[(0,h.jsx)("div",{className:d,children:u+"$"}),(0,h.jsx)("button",{className:_,children:y})]})]})]})},m="searchField_form_container__U2T3+",p="searchField_search_field__GiSc7",g="searchField_search_ico__K0xxy",x=e=>{let{search:t,setSearch:s}=e;(0,a.useContext)(r.A);return(0,h.jsx)("div",{className:m,children:(0,h.jsxs)("form",{onSubmit:e=>{e.preventDefault()},children:[(0,h.jsx)("input",{className:p,type:"text",placeholder:"Search...",value:t,onChange:e=>s(e.target.value),onClick:e=>s("")}),(0,h.jsx)("img",{className:g,src:"https://i7.uihere.com/icons/805/425/292/cx-6239a19d5332d5b6eb5d8056dc178ad4.png"})]})})},f="categoriesList_categories__xL8RD",y="categoriesList_checked_category__Q8T8V",j=e=>{let{category:t,setCategory:s,categories:a,setCategories:r}=e;const c=e=>{s(e.currentTarget.className)},i=e=>e&&0!==e.length?e[0].toUpperCase()+e.slice(1):e;return(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("h3",{children:"\u0412\u044b\u0431\u0440\u0430\u043d\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f:"}),(0,h.jsx)("h3",{className:y,children:t?i(t):"All"}),(0,h.jsx)("hr",{}),(0,h.jsx)("div",{onClick:()=>s(""),children:"All"}),a.map(((e,t)=>(0,h.jsx)("div",{className:e,onClick:c,children:i(e)},t)))]})},C={cards_container:"Cards_cards_container__G7u9B",side_bar:"Cards_side_bar__JCo8U",cards:"Cards_cards__tk0ov"},v=a.createContext({}),b=!0;function N(e){let{baseColor:t,highlightColor:s,width:a,height:r,borderRadius:c,circle:i,direction:n,duration:l,enableAnimation:o=b,customHighlightBackground:d}=e;const _={};return"rtl"===n&&(_["--animation-direction"]="reverse"),"number"===typeof l&&(_["--animation-duration"]=`${l}s`),o||(_["--pseudo-element-display"]="none"),"string"!==typeof a&&"number"!==typeof a||(_.width=a),"string"!==typeof r&&"number"!==typeof r||(_.height=r),"string"!==typeof c&&"number"!==typeof c||(_.borderRadius=c),i&&(_.borderRadius="50%"),"undefined"!==typeof t&&(_["--base-color"]=t),"undefined"!==typeof s&&(_["--highlight-color"]=s),"string"===typeof d&&(_["--custom-highlight-background"]=d),_}function k(e){let{count:t=1,wrapper:s,className:r,containerClassName:c,containerTestId:i,circle:n=!1,style:l,...o}=e;var d,_,h;const u=a.useContext(v),m={...o};for(const[a,C]of Object.entries(o))"undefined"===typeof C&&delete m[a];const p={...u,...m,circle:n},g={...l,...N(p)};let x="react-loading-skeleton";r&&(x+=` ${r}`);const f=null!==(d=p.inline)&&void 0!==d&&d,y=[],j=Math.ceil(t);for(let C=0;C<j;C++){let e=g;if(j>t&&C===j-1){const s=null!==(_=e.width)&&void 0!==_?_:"100%",a=t%1,r="number"===typeof s?s*a:`calc(${s} * ${a})`;e={...e,width:r}}const s=a.createElement("span",{className:x,style:e,key:C},"\u200c");f?y.push(s):y.push(a.createElement(a.Fragment,{key:C},s,a.createElement("br",null)))}return a.createElement("span",{className:c,"data-testid":i,"aria-live":"polite","aria-busy":null!==(h=p.enableAnimation)&&void 0!==h?h:b},s?y.map(((e,t)=>a.createElement(s,{key:t},e))):y)}const S="SkeletonCardStyle_skeleton_card__1rK4I",w="SkeletonCardStyle_skeleton_card_image_container__KbFOH",L="SkeletonCardStyle_skeleton_card_content__rv-PK",A="SkeletonCardStyle_skeleton_card_title__Ch0Qp",E=()=>(0,h.jsxs)("div",{className:S,children:[(0,h.jsx)("div",{className:w,children:(0,h.jsx)(k,{height:250,width:250})}),(0,h.jsxs)("div",{className:L,children:[(0,h.jsx)(k,{className:A}),(0,h.jsx)(k,{className:A}),(0,h.jsx)(k,{className:A})]})]});function F(){const e=(0,a.useContext)(r.A),[t,s]=a.useState(!0),[c,i]=a.useState(""),[n,l]=a.useState([""]),[o,d]=a.useState("");return a.useEffect((()=>{fetch("https://fakestoreapi.com/products/categories").then((e=>e.json())).then((e=>l(e))).finally((()=>s(!1)))}),[]),(0,h.jsxs)("div",{className:C.cards_container,children:[(0,h.jsxs)("div",{className:C.side_bar,children:[(0,h.jsx)(x,{search:c,setSearch:i}),(0,h.jsx)(j,{categories:n,setCategories:l,category:o,setCategory:d})]}),(0,h.jsx)("div",{className:C.cards,children:t?Array(9).fill("").map(((e,t)=>(0,h.jsx)(E,{},t))):e.products.filter((e=>e.title.toLocaleLowerCase().includes(c.toLocaleLowerCase()))).filter((e=>e.category.toLocaleLowerCase().includes(o.toLocaleLowerCase()))).map((e=>(0,h.jsx)(u,{...e},e.id)))})]})}}}]);
//# sourceMappingURL=64.907464aa.chunk.js.map