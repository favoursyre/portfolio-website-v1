(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5827)}])},5827:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return q}});var r=n(5893),i=n(7294),a=n(9669),o=n.n(a),s=n(7357),l=n(1519),c=n(6886),d=n(7564),u=n(7212),h=n(8987),m=n(9953),p=n(5861),f=n(2734),g=n(3454);function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return x(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(){var t=(0,f.Z)(),e=j(i.useState([]),2),n=e[0],a=e[1];return i.useEffect((function(){o().get("/about",{headers:{Accept:"application/json","Access-Control-Allow-Origin":g.env.BACKEND_URL}}).then((function(t){a(t.data)})).catch((function(t){return console.log(t)}))}),[]),(0,r.jsxs)("div",{id:"about",children:[(0,r.jsx)(s.Z,{maxWidth:{sm:720,md:1236},width:1,margin:"0 auto",paddingX:2,paddingY:{xs:4,sm:6,md:8},children:(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(s.Z,{marginBottom:4,children:[(0,r.jsx)(p.Z,{variant:"h3",align:"center",fontWeight:700,marginTop:t.spacing(1),"data-aos":"fade-up",gutterBottom:!0,children:"About me"}),(0,r.jsxs)(p.Z,{variant:"h6",color:t.palette.text.secondary,align:"center","data-aos":"fade-up",marginTop:4,marginBottom:6,children:["I'm an undergraduate final year Computer Science student of University of Nigeria, Nsukka (Our academic staff union has been on strike for a while now). ",(0,r.jsx)("br",{}),"I'm a Software Engineer with 2+ years worth of experience who is bent on using his skills to solve real world problems and create value."]}),(0,r.jsx)(p.Z,{variant:"h4",align:"center",fontWeight:550,"data-aos":"fade-up",marginTop:4,marginBottom:6,children:"What's in it for you?"})]}),(0,r.jsx)(c.ZP,{container:!0,spacing:4,children:n.map((function(e,n){return(0,r.jsx)(c.ZP,{item:!0,xs:12,sm:6,md:4,children:(0,r.jsxs)(u.ZP,{component:"div",disableGutters:!0,sx:{alignItems:"flex-start",padding:0},children:[(0,r.jsx)(h.Z,{children:(0,r.jsx)(s.Z,{color:t.palette.primary.main,children:(0,r.jsx)(d.Z,{sx:{fontSize:"40px"},children:e.icon})})}),(0,r.jsx)(m.Z,{primary:e.title,secondary:e.description,primaryTypographyProps:{variant:"h4",gutterBottom:!0,sx:{fontWeight:700}},secondaryTypographyProps:{variant:"subtitle1",gutterBottom:!0},sx:{margin:0}})]})},n)}))})]})}),(0,r.jsx)(l.Z,{})]})},Z=n(5152),v=n(9661),b=n(891),w=n(9308),A=n(6769),S=n(3454);function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function I(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return B(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var k=function(){var t=(0,f.Z)(),e=I(i.useState([]),2),a=e[0],l=e[1];i.useEffect((function(){o().get("/contact",{headers:{Accept:"application/json","Access-Control-Allow-Origin":S.env.BACKEND_URL}}).then((function(t){l(t.data)})).catch((function(t){return console.log(t)}))}),[]);var c=i.useMemo((function(){return(0,Z.default)((function(){return Promise.all([n.e(269),n.e(821)]).then(n.bind(n,6821))}),{loadableGenerated:{webpack:function(){return[6821]}},loading:function(){return(0,r.jsx)("p",{children:"A map is loading..."})},ssr:!1})}),[]);return(0,r.jsx)("div",{id:"contact",children:(0,r.jsx)(s.Z,{position:"relative",marginBottom:15,children:(0,r.jsxs)(s.Z,{maxWidth:{sm:720,md:1236},width:1,margin:"0 auto",paddingX:2,paddingY:{xs:4,sm:6,md:8},paddingBottom:10,children:[(0,r.jsxs)(s.Z,{marginBottom:4,children:[(0,r.jsx)(p.Z,{variant:"h3",align:"center",fontWeight:700,marginTop:t.spacing(1),"data-aos":"fade-up",gutterBottom:!0,children:"Get in touch"}),(0,r.jsx)(p.Z,{variant:"h6",align:"center",color:t.palette.text.secondary,"data-aos":"fade-up",marginTop:4,marginBottom:6,children:"I would really love to hear from you"})]}),a.map((function(e,n){return(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(s.Z,{marginBottom:4,children:(0,r.jsx)(c,{coordinates:[e.latitude,e.longitude],zoom:13})}),(0,r.jsxs)(s.Z,{display:"flex",flexDirection:{xs:"column",sm:"row"},justifyContent:"center",marginTop:6,marginBottom:3,children:[(0,r.jsxs)(s.Z,{component:u.ZP,disableGutters:!0,width:"auto",padding:0,marginRight:10,children:[(0,r.jsx)(s.Z,{component:h.Z,minWidth:"auto !important",marginRight:2,children:(0,r.jsx)(s.Z,{component:v.Z,backgroundColor:t.palette.primary.main,width:40,height:40,children:(0,r.jsx)(b.Z,{fontSize:"small"})})}),(0,r.jsx)(m.Z,{primary:"Email",secondary:e.email})]}),(0,r.jsxs)(s.Z,{component:u.ZP,disableGutters:!0,width:"auto",padding:0,marginRight:10,children:[(0,r.jsx)(s.Z,{component:h.Z,minWidth:"auto !important",marginRight:2,children:(0,r.jsx)(s.Z,{component:v.Z,backgroundColor:t.palette.primary.main,width:40,height:40,children:(0,r.jsx)(w.Z,{fontSize:"small"})})}),(0,r.jsx)(m.Z,{primary:"Location",secondary:e.address})]}),(0,r.jsxs)(s.Z,{component:u.ZP,disableGutters:!0,width:"auto",padding:0,children:[(0,r.jsx)(s.Z,{component:h.Z,minWidth:"auto !important",marginRight:2,children:(0,r.jsx)(s.Z,{component:v.Z,backgroundColor:t.palette.primary.main,width:40,height:40,children:(0,r.jsx)(A.Z,{fontSize:"small"})})}),(0,r.jsx)(m.Z,{primary:"Phone Number",secondary:"+234-9090982848"})]})]})]},n)}))]})})})},C=n(2679),T=n(7948),W=n(8396),E=n(3321),P=n(2769),z=n(660),_=function(){var t=(0,f.Z)(),e=(0,W.Z)(t.breakpoints.up("md"),{defaultMatches:!0});return(0,r.jsx)(i.Fragment,{children:(0,r.jsxs)(s.Z,{display:"flex",flexDirection:{xs:"column",sm:"row"},alignItems:{xs:"stretched",sm:"flex-start"},justifyContent:"center",marginTop:4,children:[(0,r.jsx)(E.Z,{component:"a",variant:"contained",color:"primary",size:"large",href:"#about",endIcon:(0,r.jsx)(P.Z,{}),fullWidth:!e,disableElevation:!0,sx:{padding:"15px 30px",marginRight:"15px",fontSize:"16px",textTransform:"uppercase",border:"2px solid "+t.palette.primary.main,"&:hover":{backgroundColor:"transparent",color:t.palette.primary.main,border:"2px solid "+t.palette.primary.main}},children:"Learn More"}),(0,r.jsx)(s.Z,{marginTop:{xs:2,sm:0},marginLeft:{sm:1},width:{xs:"100%",md:"auto"},children:(0,r.jsx)(E.Z,{component:"a",variant:"outlined",color:"primary",size:"large",href:"#",endIcon:(0,r.jsx)(z.Z,{}),fullWidth:!e,disableElevation:!0,sx:{padding:"15px 30px",marginRight:"15px",fontSize:"16px",textTransform:"uppercase",border:"2px solid "+t.palette.primary.main,"&:hover":{backgroundColor:t.palette.primary.main,color:t.palette.common.white,border:"2px solid "+t.palette.primary.main}},children:"Download CV"})})]})})},O=function(){var t=(0,f.Z)(),e=(0,W.Z)(t.breakpoints.up("md"),{defaultMatches:!0});return(0,r.jsx)("div",{id:"home",children:(0,r.jsxs)(s.Z,{sx:{width:1,height:1},children:[(0,r.jsx)(T.Z,{padding:0,maxWidth:"100%",children:(0,r.jsxs)(s.Z,{display:"flex",flexDirection:{xs:"column",md:"row"},position:"relative",minHeight:{md:600},children:[(0,r.jsx)(s.Z,{width:1,order:{xs:2,md:1},display:"flex",alignItems:"center",children:(0,r.jsx)(T.Z,{children:(0,r.jsxs)(s.Z,{"data-aos":e?"fade-right":"fade-up",children:[(0,r.jsxs)(s.Z,{marginBottom:2,children:[(0,r.jsxs)(p.Z,{color:t.palette.text.primary,variant:"h1",fontWeight:1e3,fontSize:60,align:"center",children:["Favour Ndubuisi"," "]}),(0,r.jsx)(p.Z,{color:t.palette.primary.main,variant:"h3",fontWeight:450,fontSize:30,align:"center",marginBottom:3,children:"Software Engineer & Pentester"})]}),(0,r.jsx)(s.Z,{marginBottom:3,children:(0,r.jsx)(p.Z,{variant:"h6",component:"p",color:t.palette.text.secondary,align:"center",children:"Your friendly neighborhood nerd saving the world with codes."})}),(0,r.jsx)(_,{})]})})}),(0,r.jsx)(s.Z,{sx:{flex:{xs:"0 0 100%",md:"0 0 50%"},position:"relative",maxWidth:{xs:"100%",md:"50%"},order:{xs:1,md:2}},children:(0,r.jsx)(s.Z,{sx:{width:{xs:1,md:"50vw"},height:"100%",position:"relative"},children:(0,r.jsx)(s.Z,{sx:{width:"100%",height:"100%",overflow:"hidden"},children:(0,r.jsx)(s.Z,{sx:{overflow:"hidden",left:"0%",width:1,height:1,position:{xs:"relative",md:"absolute"},clipPath:{xs:"none",md:"polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)"},shapeOutside:{xs:"none",md:"polygon(10% 0%, 100% 0, 100% 100%, 0% 100%)"}},children:(0,r.jsx)(s.Z,{sx:{height:{xs:"auto",md:1},"& img":{objectFit:"cover"},"& .lazy-load-image-loaded":{height:1,width:1}},children:(0,r.jsx)(s.Z,{component:C.LazyLoadImage,src:"/images/syre.jpg",alt:"Background Image",effect:"blur",height:{xs:"auto",md:1},maxHeight:{xs:300,md:1},width:1,maxWidth:1})})})})})})]})}),(0,r.jsx)(l.Z,{sx:{mt:3}})]})})},L=n(6242),N=n(2023),R=n(4267),D=n(3965),U=n(7918),M=n(3454);function G(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return G(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return G(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var X=function(){var t=(0,f.Z)(),e=Y(i.useState([]),2),n=e[0],a=e[1];return i.useEffect((function(){o().get("/projects",{headers:{Accept:"application/json","Access-Control-Allow-Origin":M.env.BACKEND_URL}}).then((function(t){a(t.data)})).catch((function(t){return console.log(t)}))}),[]),(0,r.jsxs)("div",{id:"projects",children:[(0,r.jsxs)(s.Z,{maxWidth:{sm:720,md:1236},width:1,margin:"0 auto",paddingX:2,paddingY:{xs:4,sm:6,md:8},children:[(0,r.jsxs)(s.Z,{marginBottom:4,children:[(0,r.jsx)(p.Z,{variant:"h3",align:"center",fontWeight:700,marginTop:t.spacing(1),"data-aos":"fade-up",gutterBottom:!0,children:"Projects"}),(0,r.jsx)(p.Z,{variant:"h6",color:t.palette.text.secondary,align:"center","data-aos":"fade-up",marginTop:4,marginBottom:6,children:"Here are some of the projects that I have been opportuned to work on"})]}),(0,r.jsx)(c.ZP,{container:!0,spacing:4,children:n.map((function(e,n){return(0,r.jsx)(c.ZP,{item:!0,xs:12,md:4,"data-aos":"fade-up","data-aos-delay":100,"data-aos-offset":100,"data-aos-duration":600,children:(0,r.jsx)(s.Z,{display:"block",width:1,height:1,sx:{transition:"all .2s ease-in-out","&:hover":{transform:"translateY(-".concat(t.spacing(.5),")")}},children:(0,r.jsxs)(s.Z,{component:L.Z,width:1,height:1,display:"flex",flexDirection:"column",sx:{backgroundImage:"none"},children:[(0,r.jsx)(D.Z,{title:e.name,sx:{position:"relative",height:{xs:240,sm:340,md:280},overflow:"hidden","& .slick-slide img":{objectFit:"cover"},"& .slick-prev, & .slick-next":{zIndex:2,top:0,bottom:"100%",left:"100%",right:0,transform:"translate(-100%, 50%)",marginLeft:t.spacing(-2),width:32,height:32,"&:before":{fontSize:t.spacing(3)}},"& .slick-prev":{marginLeft:t.spacing(-6)},"& .lazy-load-image-background.lazy-load-image-loaded":{display:"flex !important"}},children:(0,r.jsx)(s.Z,{component:C.LazyLoadImage,effect:"blur",src:e.image,height:{xs:240,sm:340,md:280},width:"100%",sx:{objectFit:"cover"}})}),(0,r.jsxs)(R.Z,{children:[(0,r.jsx)(p.Z,{variant:"h6",gutterBottom:!0,align:"left",fontWeight:700,children:e.name}),(0,r.jsx)(p.Z,{variant:"subtitle2",color:t.palette.text.secondary,align:"left",children:e.description}),(0,r.jsx)(s.Z,{marginTop:2,display:"flex",justifyContent:"space-between",children:(0,r.jsx)(s.Z,{marginTop:2,children:e.tags.map((function(t,e){return(0,r.jsx)(U.Z,{label:t.name,variant:"outlined",sx:{m:1}},e)}))})})]}),(0,r.jsx)(s.Z,{flexGrow:1}),(0,r.jsx)(N.Z,{sx:{justifyContent:"flex-end"},children:(0,r.jsx)(E.Z,{component:"a",href:e.link,target:"_blank",sx:{textTransform:"none"},children:"Source Code"})})]})})},n)}))})]}),(0,r.jsx)(l.Z,{})]})},F=n(5675),K=n(3454);function $(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function H(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,a=[],o=!0,s=!1;try{for(n=n.call(t);!(o=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(l){s=!0,i=l}finally{try{o||null==n.return||n.return()}finally{if(s)throw i}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return $(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var V=function(){var t=(0,f.Z)(),e=H(i.useState([]),2),n=e[0],a=e[1];return i.useEffect((function(){o().get("/technologies",{headers:{Accept:"application/json","Access-Control-Allow-Origin":K.env.BACKEND_URL}}).then((function(t){console.log(t),console.log(t.data),a(t.data)})).catch((function(t){return console.log(t)}))}),[]),(0,r.jsxs)("div",{id:"technologies",children:[(0,r.jsx)(s.Z,{maxWidth:{sm:720,md:1236},width:1,margin:"0 auto",paddingX:2,paddingY:{xs:4,sm:6,md:8},children:(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(s.Z,{marginBottom:4,children:[(0,r.jsx)(p.Z,{variant:"h3",align:"center",fontWeight:700,marginTop:t.spacing(1),"data-aos":"fade-up",gutterBottom:!0,children:"Technologies"}),(0,r.jsx)(p.Z,{variant:"h6",align:"center",color:t.palette.text.secondary,"data-aos":"fade-up",marginTop:4,marginBottom:6,children:"The following are the various technologies that I'm familiar with"})]}),(0,r.jsx)(c.ZP,{container:!0,spacing:2,children:n.map((function(e,n){return(0,r.jsx)(c.ZP,{item:!0,xs:12,md:3,children:(0,r.jsx)(s.Z,{width:1,height:1,"data-aos":"fade-up","data-aos-delay":100,"data-aos-offset":100,"data-aos-duration":600,component:L.Z,display:"flex",flexDirection:"column",alignItems:"center",boxShadow:0,variant:"outlined",borderRadius:2,children:(0,r.jsxs)(R.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",transition:"all .2s ease-in-out","&:hover":{transform:"translateY(-".concat(t.spacing(1),")")}},children:[(0,r.jsx)(s.Z,{marginBottom:1,children:(0,r.jsx)(s.Z,{component:v.Z,width:60,height:60,marginBottom:2,backgroundColor:"transparent",variant:"rounded",borderRadius:2,children:(0,r.jsx)(F.default,{src:e.icon,height:50,width:50})})}),(0,r.jsx)(p.Z,{align:"center",color:t.palette.text.primary,fontWeight:"bold",children:e.name})]})})},n)}))})]})}),(0,r.jsx)(l.Z,{})]})},q=function(){return(0,r.jsxs)("div",{id:"home",children:[(0,r.jsx)(O,{}),(0,r.jsx)(y,{}),(0,r.jsx)(X,{}),(0,r.jsx)(V,{}),(0,r.jsx)(k,{})]})}}},function(t){t.O(0,[212,774,888,179],(function(){return e=8581,t(t.s=e);var e}));var e=t.O();_N_E=e}]);