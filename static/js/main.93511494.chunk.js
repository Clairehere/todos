(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{135:function(e){e.exports=JSON.parse('{"welcome":{"title":"Bienvenue sur la merveille et \xe9tonnante application TODO \ud83d\ude01"},"priority":{"title":"Priorit\xe9 : ","low":"faible","middle":"moyenne","high":"\xe9lev\xe9e"},"task":{"tile":"T\xe2che","name":"Nom","description":"Description","is-checked":"Fait","isn-t-checked":" \xc0 faire","none":"Aucune t\xe2che","add":"Ajouter une nouvelle t\xe2che"},"action":{"cancel":"Annuler","submit":"Valider"}}')},160:function(e,t,n){},161:function(e,t,n){},196:function(e,t,n){"use strict";n.r(t);var i=n(79),a=n(10),c=n(0),r=n.n(c),s=n(11),o=n.n(s),l=(n(160),n(161),n(57)),u=n(15),d="/task/:id?",j=n(21),b=n(259),O=n(25),h=n(46),f=n.n(h),p=n(18),m=n(231),x=n(234),k=n(236),v=n(256),y=n(229),g=n(232),C="SELECT_LIST",T="EDIT_LIST",L="CHECK_TASK",S="PUSH_TASK",D="REMOVE_TASK",M="EDIT_TASK",I=function(e){return function(t){return t({type:L,payload:e})}},w=n(235),V=n(233),F=n(125),E=n.n(F),N=n(3),A=Object(p.a)(u.e,f()((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper}}})),Object(b.a)("common"),Object(O.b)((function(e){return{tasks:e.data.initialTasks.filter((function(t){var n;return t.listId===(null===(n=e.data.selectedList)||void 0===n?void 0:n.id)}))||[]}}),{checkTask:I}))((function(e){e.t;var t=e.history,n=e.tasks,i=e.classes,a=e.checkTask;return Object(N.jsx)(y.a,{"aria-label":"tasks",className:i.root,children:n.sort((function(e){return e.isChecked?1:-1})).map((function(e){var n,i="checkbox-list-secondary-label-".concat(e.id);return Object(N.jsxs)("div",{children:[Object(N.jsxs)(m.a,{dense:!0,children:[Object(N.jsx)(g.a,{children:Object(N.jsx)(v.a,{edge:"start",onChange:function(){return a(e)},checked:e.isChecked,inputProps:{"aria-labelledby":i}})}),Object(N.jsx)(x.a,{style:{textDecoration:e.isChecked?"line-through":"none"},primary:e.name,secondary:(null===(n=e.description)||void 0===n?void 0:n.length)>15?e.description.substr(0,15)+"...":e.description}),Object(N.jsx)(w.a,{children:Object(N.jsx)(V.a,{edge:"end","aria-label":"push",onClick:function(){return t.push(d.replace(":id?",e.id))},children:Object(N.jsx)(E.a,{})})})]},e),Object(N.jsx)(k.a,{})]},e.id)}))})})),W=n(258),P=n(239),B=n(240),q=n(255),K=n(242),R=n(243);var z=Object(p.a)(Object(O.b)(null,{pushTask:function(e){return function(t){return t({type:S,payload:e})}}}))((function(e){var t=e.open,n=e.handleClose,i=e.t,a=e.pushTask,r=Object(c.useState)(""),s=Object(j.a)(r,2),o=s[0],l=s[1],u=Object(c.useState)(""),d=Object(j.a)(u,2),b=d[0],O=d[1];return Object(N.jsx)(W.a,{open:t,onClose:n,maxWidth:"xs",fullWidth:!0,"aria-labelledby":"form-dialog-title",children:Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a({name:o,description:b}),n(),l(""),O("")},children:[Object(N.jsx)(P.a,{id:i("task.tile"),children:i("task.tile")}),Object(N.jsxs)(B.a,{children:[Object(N.jsx)(q.a,{autoFocus:!0,required:!0,onChange:function(e){return l(e.target.value)},value:o||"",label:i("task.name"),margin:"dense",id:"name",type:"text",fullWidth:!0}),Object(N.jsx)(q.a,{onChange:function(e){return O(e.target.value)},value:b||"",label:i("task.description"),margin:"dense",id:"description",type:"text",fullWidth:!0})]}),Object(N.jsxs)(K.a,{children:[Object(N.jsx)(R.a,{onClick:n,color:"primary",children:i("action.cancel")}),Object(N.jsx)(R.a,{type:"submit",color:"primary",children:i("action.submit")})]})]})})})),_=n(130),J=n.n(_),H=function(e){return function(t){return t({type:T,payload:e})}},U=n(244),$=n(260),G=n(245),Q=n(246),X=n(254),Y=n(129),Z=n.n(Y);var ee=Object(p.a)(Object(O.b)((function(e){return{selectedList:e.data.selectedList||{}}}),{editList:H}))((function(e){var t=e.open,n=e.handleClose,i=e.t,r=e.editList,s=e.selectedList,o=Object(c.useState)(0),l=Object(j.a)(o,2),u=l[0],d=l[1],b=function(e){e.preventDefault(),r(Object(a.a)(Object(a.a)({},s),{},{deadline:new Date(Date.now()+24*u*60*60*1e3)})),n()};return Object(N.jsx)(W.a,{open:t,onClose:n,maxWidth:"xs",fullWidth:!0,"aria-labelledby":"form-dialog-title",children:Object(N.jsxs)("form",{onSubmit:b,children:[Object(N.jsx)(P.a,{id:i("task.tile"),children:i("Deadline")}),Object(N.jsx)(B.a,{children:Object(N.jsx)(q.a,{label:i("Fin dans (en jours)"),required:!0,InputProps:{inputProps:{min:0}},id:"standard-basic",autoFocus:!0,value:u,margin:"dense",onChange:function(e){return d(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&b},type:"number"})}),Object(N.jsxs)(K.a,{children:[Object(N.jsx)(R.a,{onClick:n,color:"primary",children:i("action.cancel")}),Object(N.jsx)(R.a,{type:"submit",color:"primary",children:i("action.submit")})]})]})})})),te=Object(U.a)({root:{display:"flex",marginTop:"10px",justifyContent:"center"},flash:{color:function(e){return e.alertDate?"red":"black"},animationName:"$flash",animationDuration:function(e){return e.alertDate?"3s":"0s"},animationTimingFunction:"linear",animationIterationCount:"infinite"},"@keyframes flash":{"0%":{opacity:1},"40%":{opacity:0},"100%":{opacity:1}}}),ne=Object(p.a)(Object(b.a)("common"))((function(e){var t=e.t,n=e.defaultValue,i=e.setValue,r=Object(c.useState)(!1),s=Object(j.a)(r,2),o=s[0],l=s[1],u=Object(c.useState)(n.name),d=Object(j.a)(u,2),b=d[0],O=d[1],h=Object(c.useState)(!1),f=Object(j.a)(h,2),p=f[0],m=f[1],x=Object(c.useMemo)((function(){return new Date(Date.now()+864e5)}),[]),k=Object(c.useMemo)((function(){if(n&&n.deadline)return n.deadline<x}),[n,x]),v=te({alertDate:k}),y=function(){i(Object(a.a)(Object(a.a)({},n),{},{name:b})),l(!1)};return o?Object(N.jsxs)("div",{className:v.root,children:[Object(N.jsx)(q.a,{required:!0,id:"standard-basic",autoFocus:!0,value:b,onChange:function(e){return O(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&y()},type:"text"}),Object(N.jsx)($.a,{title:t("submit"),children:Object(N.jsx)(V.a,{"aria-label":"submit",onClick:function(){return y()},children:Object(N.jsx)(G.a,{fontSize:"small"})})}),Object(N.jsx)($.a,{title:t("cancel"),onClick:function(){return l(!1)},children:Object(N.jsx)(V.a,{"aria-label":"cancel",children:Object(N.jsx)(Q.a,{fontSize:"small"})})})]}):Object(N.jsxs)("div",{className:v.root,children:[Object(N.jsxs)("h2",{onClick:function(){return l(!0)},children:[" ",n.name]})," ",Object(N.jsx)($.a,{title:"Deadline :"+Object(X.a)(n.deadline,"dd/MM/yyyy"),children:Object(N.jsx)(R.a,{"aria-label":"archive",onClick:function(){return m(!0)},children:Object(N.jsx)(Z.a,{edge:"start",className:v.flash})})}),Object(N.jsx)(ee,{open:p,handleClose:function(){return m(!1)},t:t})]})})),ie=Object(p.a)(f()((function(){return{container:{display:"flex",justifyContent:"center"}}})),Object(b.a)("common"),Object(O.b)((function(e){return{lists:e.data.initialLists||[],selectedList:e.data.selectedList||{}}}),{editList:H}))((function(e){var t=e.t,n=e.classes,i=(e.lists,e.selectedList),a=e.editList,r=Object(c.useState)(!1),s=Object(j.a)(r,2),o=s[0],l=s[1];return Object(N.jsxs)(N.Fragment,{children:[i&&Object(N.jsx)("div",{className:n.container,children:Object(N.jsxs)("div",{children:[Object(N.jsx)(ne,{defaultValue:i,setValue:function(e){return a(e)}}),Object(N.jsxs)(R.a,{"aria-label":"push",style:{marginTop:"5px"},onClick:function(){return l(!0)},children:[Object(N.jsx)(J.a,{edge:"start"})," ",t("task.add")]}),Object(N.jsx)(A,{})]})},"container"),Object(N.jsx)(z,{open:o,handleClose:function(){return l(!1)},t:t})]})})),ae=n(139),ce=n(5),re=n(248),se=n(71),oe=n(247),le=n(131),ue=n.n(le),de=function(e){return{menuButton:{marginRight:e.spacing(2)}}},je=function(e){return Object(p.a)(u.e,Object(ce.a)(de),Object(b.a)("common"))((function(t){var n=t.classes,i=t.t,c=t.history,r=Object(ae.a)(t,["classes","t","history"]);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(oe.a,{position:"static",children:Object(N.jsxs)(re.a,{children:[Object(N.jsx)(V.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer",onClick:function(){return c.push("/")},children:Object(N.jsx)(ue.a,{})}),Object(N.jsx)(se.a,{className:n.title,variant:"h6",noWrap:!0,children:i("welcome.title")})]})}),Object(N.jsx)("div",{children:Object(N.jsx)(e,Object(a.a)({},r))})]})}))},be=n(251),Oe=n(249),he=n(250),fe=n(134),pe=n.n(fe),me=Object(p.a)(Object(b.a)("common"))((function(e){var t=e.t,n=e.defaultValue,i=e.setValue,a=e.setEditMode,r=Object(c.useState)(n),s=Object(j.a)(r,2),o=s[0],l=s[1],u=function(){i(o),a(!1)};return Object(N.jsxs)("div",{children:[Object(N.jsx)(q.a,{required:!0,id:"standard-basic",autoFocus:!0,value:o,onChange:function(e){return l(e.target.value)},onKeyPress:function(e){return"Enter"===e.key&&u()},type:"text"}),Object(N.jsx)($.a,{title:t("submit"),children:Object(N.jsx)(V.a,{"aria-label":"submit",onClick:function(){return u()},children:Object(N.jsx)(G.a,{fontSize:"small"})})}),Object(N.jsx)($.a,{title:t("cancel"),onClick:function(){return a(!1)},children:Object(N.jsx)(V.a,{"aria-label":"cancel",children:Object(N.jsx)(Q.a,{fontSize:"small"})})})]})})),xe=n(133),ke=n.n(xe),ve=n(132),ye=n.n(ve),ge=Object(p.a)(u.e,f()((function(){return{title:{fontSize:14},icon:{marginLeft:"10px"}}})),Object(b.a)("common"),Object(O.b)((function(e,t){return{tasks:e.data.initialTasks.filter((function(e){return e.id===t.match.params.id}))||[]}}),{checkTask:I,removeTask:function(e){return function(t){return t({type:D,payload:e})}},editTask:function(e){return function(t){return t({type:M,payload:e})}}}))((function(e){var t=e.t,n=e.classes,i=e.tasks,r=e.checkTask,s=e.removeTask,o=e.history,l=e.editTask,u=Object(c.useMemo)((function(){return i[0]}),[i]),d=Object(c.useState)(!1),b=Object(j.a)(d,2),O=b[0],h=b[1],f=Object(c.useState)(!1),p=Object(j.a)(f,2),m=p[0],x=p[1];return Object(N.jsxs)(Oe.a,{children:[Object(N.jsxs)(he.a,{container:!0,justifyContent:"space-between",children:[O?Object(N.jsx)(me,{setEditMode:h,defaultValue:u.name,setValue:function(e){return l(Object(a.a)(Object(a.a)({},u),{},{name:e}))}}):Object(N.jsx)(se.a,{variant:"h5",component:"h2",onClick:function(){return h(!0)},children:u.name}),Object(N.jsxs)("div",{children:[!O&&Object(N.jsx)(V.a,{className:n.icon,"aria-label":"check",onClick:function(){return r(u)},children:Object(N.jsx)($.a,{title:u.isChecked?t("task.is-checked"):t("task.isn-t-checked"),children:u.isChecked?Object(N.jsx)(ye.a,{}):Object(N.jsx)(ke.a,{})})}),Object(N.jsx)(V.a,{className:n.icon,edge:"end","aria-label":"remove",onClick:function(){return function(e){s(e),o.push("/")}(u)},children:Object(N.jsx)($.a,{title:"Attention la suppression est definitive",children:Object(N.jsx)(pe.a,{})})})]})]}),Object(N.jsx)("br",{}),m?Object(N.jsx)(me,{setEditMode:x,defaultValue:u.description,setValue:function(e){return l(Object(a.a)(Object(a.a)({},u),{},{description:e}))}}):Object(N.jsx)(se.a,{className:n.title,color:"textSecondary",gutterBottom:!0,onClick:function(){return x(!0)},children:u.description})]})})),Ce=Object(p.a)(u.e,f()((function(){return{container:{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"30px"}}})),Object(b.a)("common"),Object(O.b)((function(e,t){return{tasks:e.data.initialTasks.filter((function(e){return e.id===t.match.params.id}))||[]}})))((function(e){var t=e.t,n=e.classes,i=e.tasks,a=Object(c.useMemo)((function(){return i[0]}),[i]);return Object(N.jsx)("div",{className:n.container,children:Object(N.jsx)(be.a,{children:a?Object(N.jsx)(ge,{}):Object(N.jsx)(Oe.a,{children:Object(N.jsxs)(se.a,{variant:"h5",component:"h2",children:[" ",t("task.none")]})})})})}));var Te=function(){return Object(N.jsxs)(l.a,{basename:"/src",children:[Object(N.jsx)(u.a,{exact:!0,path:"/",component:je(ie)}),Object(N.jsx)(u.a,{exact:!0,path:d,component:je(Ce)})]})},Le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,261)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},Se=n(137),De=n(237),Me=n(253),Ie=n(107),we=n(252),Ve=n(135),Fe=n(64),Ee=n(136),Ne=function(e){return function(t,n,i){return e((function(e,n){return t(e,n)}),n,i)}},Ae=function(e){return function(e){return function(t){return e(t)}}},We=n(138),Pe=[{id:"firstList",name:"Action avant d\xe9collage",createdAt:new Date("01-01-2020"),deadline:new Date("08-30-2021")}],Be={initialLists:Pe,initialTasks:[{id:"firstTask",name:"Freins",description:"V\xe9rifier qu'ils soient efficaces et asymetriques",position:0,isChecked:!1,listId:"firstList"},{id:"secondTask",name:"Cap + Bille",description:"V\xe9rifier qu'il diminue une fois puis deux et que la bille est \xe0 droite",position:1,isChecked:!1,listId:"firstList"},{id:"treeTask",name:"Action avant la rotation",description:"Vitesse disponible, badin actif, pas d'alarme",position:2,isChecked:!1,listId:"firstList"},{id:"otherTask",name:"Pain",description:null,position:0,isChecked:!1,listId:"secondList"}],selectedList:Pe[0]},qe=Object(Fe.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(a.a)(Object(a.a)({},e),{},{selectedList:t.payload});case T:return Object(a.a)(Object(a.a)({},e),{},{initialLists:[t.payload],selectedList:t.payload});case L:var n=e.initialTasks,i=n.findIndex((function(e){return e.id===t.payload.id}));return n[i].isChecked=!n[i].isChecked,Object(a.a)(Object(a.a)({},e),{},{initialTasks:n});case S:var c=[].concat(Object(We.a)(e.initialTasks||[]),[Object(a.a)(Object(a.a)({},t.payload),{},{isChecked:!1,listId:e.selectedList.id,position:null,id:(Math.random()+1).toString(36).substring(7)})]);return Object(a.a)(Object(a.a)({},e),{},{initialTasks:c});case D:var r=e.initialTasks;return Object(a.a)(Object(a.a)({},e),{},{initialTasks:r.filter((function(e){return e.id!==t.payload.id}))});case M:var s=e.initialTasks,o=s.findIndex((function(e){return e.id===t.payload.id}));return s[o]=t.payload,Object(a.a)(Object(a.a)({},e),{},{initialTasks:s});default:return e}},notifications:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type,e}});var Ke=Object(Se.a)({palette:{primary:{light:"#63ccff",main:"#009be5",dark:"#006db3"}}});Ke=Object(a.a)(Object(a.a)({},Ke),{},{overrides:{MuiDrawer:{paper:{backgroundColor:"#18202c"}},MuiButton:{label:{textTransform:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"}}},MuiTabs:{root:{marginLeft:Ke.spacing(1)},indicator:{height:3,borderTopLeftRadius:3,borderTopRightRadius:3,backgroundColor:Ke.palette.common.white}},MuiTab:{root:Object(i.a)({textTransform:"none",margin:"0 16px",minWidth:0,padding:0},Ke.breakpoints.up("md"),{padding:0,minWidth:0})},MuiIconButton:{root:{padding:Ke.spacing(1)}},MuiTooltip:{tooltip:{borderRadius:4}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemText:{primary:{fontWeight:Ke.typography.fontWeightMedium}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}},MuiAvatar:{root:{width:32,height:32}}}});var Re=function(e){var t=[Ae,Ee.a],n=[Fe.a.apply(void 0,t),Ne],i=Fe.c.apply(void 0,n);return Object(Fe.d)(qe,e,i)}();Ie.a.init({interpolation:{escapeValue:!1},lng:"fr",resources:{fr:{common:Ve}}}),o.a.render(Object(N.jsx)(O.a,{store:Re,children:Object(N.jsx)(we.a,{i18n:Ie.a,children:Object(N.jsx)(De.a,{theme:Ke,children:Object(N.jsxs)(r.a.Fragment,{children:[Object(N.jsx)(Me.a,{}),Object(N.jsx)(Te,{})]})})})}),document.getElementById("root")),Le()}},[[196,1,2]]]);
//# sourceMappingURL=main.93511494.chunk.js.map