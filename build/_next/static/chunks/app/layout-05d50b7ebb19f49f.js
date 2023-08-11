(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1898:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var n=r(791),i=r(3428),a=r(2265),o=r(7042),s=r(9538),l=r(5600),u=r(9975),c=r(5843),d=r(7927),h=r(6520),p=r(5702);function f(e){return(0,p.Z)("MuiSkeleton",e)}(0,h.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var v=r(7437);let m=["animation","className","component","height","style","variant","width"],g=e=>e,y,b,Z,k,w=e=>{let{classes:t,variant:r,animation:n,hasChildren:i,width:a,height:o}=e;return(0,l.Z)({root:["root",r,n,i&&"withChildren",i&&!a&&"fitContent",i&&!o&&"heightAuto"]},f,t)},_=(0,s.F4)(y||(y=g`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),x=(0,s.F4)(b||(b=g`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),C=(0,c.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!1!==r.animation&&t[r.animation],r.hasChildren&&t.withChildren,r.hasChildren&&!r.width&&t.fitContent,r.hasChildren&&!r.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{let r=String(e.shape.borderRadius).match(/[\d.\-+]*\s*(.*)/)[1]||"px",n=parseFloat(e.shape.borderRadius);return(0,i.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,u.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${n}${r}/${Math.round(n/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>"pulse"===e.animation&&(0,s.iv)(Z||(Z=g`
      animation: ${0} 1.5s ease-in-out 0.5s infinite;
    `),_),({ownerState:e,theme:t})=>"wave"===e.animation&&(0,s.iv)(k||(k=g`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 1.6s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),x,(t.vars||t).palette.action.hover)),M=a.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiSkeleton"}),{animation:a="pulse",className:s,component:l="span",height:u,style:c,variant:h="text",width:p}=r,f=(0,n.Z)(r,m),g=(0,i.Z)({},r,{animation:a,component:l,variant:h,hasChildren:!!f.children}),y=w(g);return(0,v.jsx)(C,(0,i.Z)({as:l,ref:t,className:(0,o.Z)(y.root,s),ownerState:g},f,{style:(0,i.Z)({width:p,height:u},c)}))});var R=M},2498:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var n=r(791),i=r(3428),a=r(2265),o=r(7042),s=r(5959),l=r(5600),u=r(5702),c=r(1047);let d=(0,c.ZP)();var h=r(5367),p=r(3381),f=r(4775),v=r(5425),m=r(7508),g=r(7437);let y=["component","direction","spacing","divider","children","className","useFlexGap"],b=(0,f.Z)(),Z=d("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function k(e){return(0,h.Z)({props:e,name:"MuiStack",defaultTheme:b})}let w=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],_=({ownerState:e,theme:t})=>{let r=(0,i.Z)({display:"flex",flexDirection:"column"},(0,v.k9)({theme:t},(0,v.P$)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let n=(0,m.hB)(t),i=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),a=(0,v.P$)({values:e.direction,base:i}),o=(0,v.P$)({values:e.spacing,base:i});"object"==typeof a&&Object.keys(a).forEach((e,t,r)=>{let n=a[e];if(!n){let n=t>0?a[r[t-1]]:"column";a[e]=n}}),r=(0,s.Z)(r,(0,v.k9)({theme:t},o,(t,r)=>e.useFlexGap?{gap:(0,m.NA)(n,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${w(r?a[r]:e.direction)}`]:(0,m.NA)(n,t)}}))}return(0,v.dt)(t.breakpoints,r)};var x=r(5843),C=r(7927);let M=function(e={}){let{createStyledComponent:t=Z,useThemeProps:r=k,componentName:s="MuiStack"}=e,c=()=>(0,l.Z)({root:["root"]},e=>(0,u.Z)(s,e),{}),d=t(_),h=a.forwardRef(function(e,t){let s=r(e),l=(0,p.Z)(s),{component:u="div",direction:h="column",spacing:f=0,divider:v,children:m,className:b,useFlexGap:Z=!1}=l,k=(0,n.Z)(l,y),w=c();return(0,g.jsx)(d,(0,i.Z)({as:u,ownerState:{direction:h,spacing:f,useFlexGap:Z},ref:t,className:(0,o.Z)(w.root,b)},k,{children:v?function(e,t){let r=a.Children.toArray(e).filter(Boolean);return r.reduce((e,n,i)=>(e.push(n),i<r.length-1&&e.push(a.cloneElement(t,{key:`separator-${i}`})),e),[])}(m,v):m}))});return h}({createStyledComponent:(0,x.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,C.Z)({props:e,name:"MuiStack"})});var R=M},3911:function(e,t,r){Promise.resolve().then(r.bind(r,3927)),Promise.resolve().then(r.bind(r,4794)),Promise.resolve().then(r.t.bind(r,2471,23))},3927:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(7437),i=r(2498),a=r(1898);let o=()=>(0,n.jsxs)(i.Z,{spacing:1,children:[(0,n.jsx)(a.Z,{variant:"text",sx:{fontSize:"1rem"}}),(0,n.jsx)(a.Z,{variant:"circular",width:40,height:40}),(0,n.jsx)(a.Z,{variant:"rectangular",width:210,height:60}),(0,n.jsx)(a.Z,{variant:"rounded",width:210,height:60})]});function s(){return(0,n.jsx)(o,{})}},429:function(e,t,r){"use strict";r.d(t,{a:function(){return s},A:function(){return o}});var n=r(9222);let i=n.Z.create({baseURL:"https://api.themoviedb.org/3/"});i.interceptors.request.use(e=>{let t="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzA4ODU0NGRmZTUyNGIwOTAyMTQ0ZGE5Yzc1NzkyYiIsInN1YiI6IjY0ZDNkM2Q0YjZjMjY0MTE1OGM1N2FlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1y11gieWc7WsAOAp-T2y48FRu8R8P99cb0ispmh1NhA";return t&&(e.headers.Authorization="Bearer ".concat(t)),e},e=>Promise.reject(e));let a=e=>"movie/".concat(e),o=async e=>await i.get("movie/popular",{params:{page:e}}),s=async e=>await i.get(a(e))},4794:function(e,t,r){"use strict";r.r(t),r.d(t,{Providers:function(){return o}});var n=r(7437),i=r(3198),a=r(2672);let o=e=>(0,n.jsx)(i.zt,{store:a.ZP,children:e.children})},2672:function(e,t,r){"use strict";r.d(t,{CG:function(){return c},TL:function(){return u}});var n=r(3198),i=r(5159),a=r(7373),o=r(663);let s=(0,a.UY)({movieReducer:i.$F}),l=(0,o.xC)({reducer:s}),u=()=>(0,n.I0)(),c=n.v9;t.ZP=l},5159:function(e,t,r){"use strict";r.d(t,{$F:function(){return u},XA:function(){return c}});var n=r(663),i=r(4060),a=r(429);(0,n.hg)("GET_POPULAR_MOVIES",async e=>{try{let t=await (0,a.A)(e);if(200!==t.status)return[];return t.data}catch(e){return e}});let o=(0,n.oM)({name:"Movies",initialState:{details:{adult:!1,backdrop_path:"",belongs_to_collection:{backdrop_path:"",id:0,name:"",poster_path:""},budget:0,genres:[],homepage:"",id:0,imdb_id:"",original_language:"",original_title:"",overview:"",popularity:0,poster_path:"",production_companies:[],production_countries:[],release_date:"",revenue:0,runtime:0,spoken_languages:[],status:"",tagline:"",title:"",video:!1,vote_average:0,vote_count:0},popular:[]},reducers:{setPopularMovies:(e,t)=>{e.popular=t.payload.results},setDetailsMovie:(e,t)=>{e.popular=t.payload}},extraReducers:e=>{e.addCase(i.J.fulfilled,(e,t)=>{var r;e.popular=e.popular.concat(null==t?void 0:null===(r=t.payload)||void 0===r?void 0:r.results)}),e.addCase(i.m.fulfilled,(e,t)=>{e.details=null==t?void 0:t.payload})}}),{setDetailsMovie:s,setPopularMovies:l}=o.actions,u=o.reducer,c=e=>e.movieReducer},4060:function(e,t,r){"use strict";r.d(t,{J:function(){return a},m:function(){return o}});var n=r(429),i=r(663);let a=(0,i.hg)("GET_POPULAR_MOVIES",async(e,t)=>{let{fulfillWithValue:r,rejectWithValue:i}=t;try{let t=await (0,n.A)(e);if(200!==t.status)return i(null);return r(t.data)}catch(e){return i(null)}}),o=(0,i.hg)("GET_DETAILS_MOVIES",async(e,t)=>{let{fulfillWithValue:r,rejectWithValue:i}=t;try{let t=await (0,n.a)(e);if(200!==t.status)return i(null);return r(t.data)}catch(e){return i(null)}})},2471:function(){}},function(e){e.O(0,[67,971,596,744],function(){return e(e.s=3911)}),_N_E=e.O()}]);