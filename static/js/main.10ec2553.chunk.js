(this.webpackJsonpreact_practice=this.webpackJsonpreact_practice||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(6),a=n.n(s),l=(n(11),n(4)),i=n(2),o=n(1);var d=function(){return Object(o.jsx)("h1",{children:"Error Page"})};class j extends c.a.Component{render(){const{count:e,handleClick:t}=this.props;return Object(o.jsxs)("h2",{onClick:t,children:["Click ",e," times"]})}}class g extends c.a.Component{render(){const{count:e,handleMouseOver:t}=this.props;return Object(o.jsxs)("h2",{onMouseOver:t,children:["MouseOver ",e," times"]})}}class h extends c.a.Component{constructor(e){super(e),this.incrementCount=()=>{this.setState((e=>({count:e.count+1})))},this.state={count:0}}render(){return Object(o.jsx)("div",{children:this.props.render(this.state.count,this.incrementCount)})}}var u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"click counter"}),Object(o.jsx)(h,{render:(e,t)=>Object(o.jsx)(j,{count:e,handleClick:t})}),Object(o.jsx)("hr",{}),Object(o.jsx)("h1",{children:"hover counter"}),Object(o.jsx)(h,{render:(e,t)=>Object(o.jsx)(g,{count:e,handleMouseOver:t})}),Object(o.jsx)("hr",{})]})};n(13);class b extends c.a.Component{constructor(e){super(e),this.getDraggableElement=this.getDraggableElement.bind(this)}componentDidMount(){const e=document.querySelectorAll(".draggable"),t=document.querySelectorAll(".container");e.forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{e.classList.remove("dragging")}))})),t.forEach((e=>{e.addEventListener("dragover",(t=>{t.preventDefault();const n=this.getDraggableElement(e,t.clientY),r=document.querySelector(".dragging");null==n?e.append(r):e.insertBefore(r,n)}))}))}getDraggableElement(e,t){return[...e.querySelectorAll(".draggable:not(.dragging)")].reduce(((e,n)=>{const r=n.getBoundingClientRect(),c=t-r.top-r.height/2;return c<0&&c>e.offset?{offset:c,element:n}:e}),{offset:Number.NEGATIVE_INFINITY}).element}render(){return Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("p",{className:"draggable",draggable:"true",children:"1"}),Object(o.jsx)("p",{className:"draggable",draggable:"true",children:"2"})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("p",{className:"draggable",draggable:"true",children:"3"}),Object(o.jsx)("p",{className:"draggable",draggable:"true",children:"4"})]})]})}}var p=b;function x(){const e=[{title:"Ep1_Counter",path:"ep1_counter"},{title:"Ep2_Draggable",path:"ep2_draggable"}].map((e=>Object(o.jsx)(l.b,{to:e.path,children:e.title},e.path)));return Object(o.jsx)("div",{children:e})}var O=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(l.b,{to:"/",children:"Home"}),Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{path:"/",element:Object(o.jsx)(x,{})}),Object(o.jsx)(i.a,{path:"/ep1_counter",element:Object(o.jsx)(u,{})}),Object(o.jsx)(i.a,{path:"/ep2_draggable",element:Object(o.jsx)(p,{})}),Object(o.jsx)(i.a,{path:"*",element:Object(o.jsx)(d,{})})]})]})})};var m=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((({getCLS:t,getFID:n,getFCP:r,getLCP:c,getTTFB:s})=>{t(e),n(e),r(e),c(e),s(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),m()}},[[14,1,2]]]);
//# sourceMappingURL=main.10ec2553.chunk.js.map