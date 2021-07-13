(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{218:function(e,t,n){},219:function(e,t,n){},271:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(19),i=n.n(r),o=(n(218),n(164)),l=n(24),c=n(11),s=(n(219),n(37)),u=n(329),d=n(76),b=n(128),j=n(108),h=n(324),f=n(186),p=n.n(f),m=n(187),g=n.n(m),O=n(188),x=n.n(O),v=n(189),y=n.n(v),C=n(190),M=n.n(C),S=n(31),k=n(165),N=n(166),w=n(326),I=n(318),D=n(319),A=n(320),R=n(134),z=n(323),E=n(75),L=n(169),F=n.n(L),G=(n(233),n(234),n(235),n(236),n(237),n(9));function P(e){var t=e.code,n=e.setCode;return Object(G.jsx)(F.a,{placeholder:"\n    Write the Julia code you want to run.\n\n    An example code is the following:\n    \n    using Statistics\n    using DifferentialEquations\n    \n    \u03b1=1\n    \u03b2=1\n    u\u2080=1/2\n    f(u,p,t) = \u03b1*u\n    g(u,p,t) = \u03b2*u\n    dt = 1//2^(4)\n    tspan = (0.0,1.0)\n    prob = SDEProblem(f,g,u\u2080,(0.0,1.0))\n    ensembleprob = EnsembleProblem(prob)\n    sol = solve(ensembleprob; trajectories=1000)\n    mean(sol[:, end])\n    ",mode:"julia",theme:"github",name:"blah2",onChange:function(e){return n(e)},fontSize:14,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:t,setOptions:{enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:4}})}function q(e){var t=e.open,n=e.name,a=e.code,r=e.setName,i=e.setCode,o=e.setOpen,l=e.handleCreate,c=function(){r(""),i(""),o(!1)};return Object(G.jsxs)(w.a,{open:t,onClose:c,"aria-labelledby":"form-dialog-title",children:[Object(G.jsx)(I.a,{id:"form-dialog-title",children:"Create Result"}),Object(G.jsxs)(D.a,{children:[Object(G.jsx)(A.a,{children:"Complete the data to create a result."}),Object(G.jsx)(R.a,{autoFocus:!0,margin:"dense",id:"name",label:"Name",fullWidth:!0,onChange:function(e){return r(e.target.value)}}),Object(G.jsx)("br",{}),Object(G.jsx)("br",{}),Object(G.jsx)(P,{code:a,setCode:i})]}),Object(G.jsxs)(z.a,{children:[Object(G.jsx)(E.a,{onClick:c,color:"primary",children:"Cancel"}),Object(G.jsx)(E.a,{disabled:!n.trim()||!a.trim(),onClick:l,color:"primary",children:"Create"})]})]})}var H=n(174),T=n.n(H),B=n(173),V=n.n(B),W=Object(s.a)((function(e){return{buttons:{display:"flex",justifyContent:"space-evenly",padding:10}}}));function Q(e){var t=e.numElemsSelected,n=e.handleDelete,a=e.setOpen,r=W();return Object(G.jsxs)("div",{className:r.buttons,children:[Object(G.jsx)(E.a,{variant:"outlined",color:"secondary",startIcon:Object(G.jsx)(V.a,{}),onClick:function(){n()},disabled:0===t,children:"Delete"}),Object(G.jsx)(E.a,{variant:"outlined",color:"primary",startIcon:Object(G.jsx)(T.a,{}),onClick:function(){return a(!0)},children:"Create"})]})}var U=Object(s.a)((function(e){return{root:{flexDirection:"column","& .ant-empty-img-1":{fill:"light"===e.palette.type?"#aeb8c2":"#262626"},"& .ant-empty-img-2":{fill:"light"===e.palette.type?"#f5f5f7":"#595959"},"& .ant-empty-img-3":{fill:"light"===e.palette.type?"#dce0e6":"#434343"},"& .ant-empty-img-4":{fill:"light"===e.palette.type?"#fff":"#1c1c1c"},"& .ant-empty-img-5":{fillOpacity:"light"===e.palette.type?"0.8":"0.08",fill:"light"===e.palette.type?"#f5f5f5":"#fff"}},label:{marginTop:e.spacing(3)}}}));function $(){var e=U();return Object(G.jsxs)(j.b,{className:e.root,children:[Object(G.jsx)("svg",{width:"120",height:"100",viewBox:"0 0 184 152","aria-hidden":!0,focusable:"false",children:Object(G.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(G.jsxs)("g",{transform:"translate(24 31.67)",children:[Object(G.jsx)("ellipse",{className:"ant-empty-img-5",cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"}),Object(G.jsx)("path",{className:"ant-empty-img-1",d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"}),Object(G.jsx)("path",{className:"ant-empty-img-2",d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"}),Object(G.jsx)("path",{className:"ant-empty-img-3",d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"})]}),Object(G.jsx)("path",{className:"ant-empty-img-3",d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"}),Object(G.jsxs)("g",{className:"ant-empty-img-4",transform:"translate(149.65 15.383)",children:[Object(G.jsx)("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"}),Object(G.jsx)("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"})]})]})}),Object(G.jsx)("div",{className:e.label,children:"No Rows"})]})}var J=n(325),K=n(179),X=n(181);J.a.registerLanguage("julia",K.a);var Y=function(e){var t=e.code;return Object(G.jsx)(J.a,{language:"julia",style:X.a,showLineNumbers:!0,wrapLines:!0,children:t})};function Z(e){var t=e.open,n=e.code,a=e.onClose,r=function(){a(!1)};return Object(G.jsxs)(w.a,{open:t,maxWidth:"sm",fullWidth:!0,onClose:r,"aria-labelledby":"form-dialog-title",children:[Object(G.jsx)(I.a,{id:"form-dialog-title",children:"Preview Code"}),Object(G.jsx)(D.a,{dividers:!0,children:Object(G.jsx)(Y,{code:n})}),Object(G.jsx)(z.a,{children:Object(G.jsx)(E.a,{onClick:r,color:"primary",children:"Close"})})]})}var _=n(90);function ee(){var e=Object(_.a)(["\n{\n\tresults {\n        id\n        name\n        value\n        code\n        createdAt\n        status\n  }\n}\n"]);return ee=function(){return e},e}var te=Object(S.gql)(ee());function ne(){var e=Object(_.a)(["\nmutation($name: String!, $code: String!) {\n  createResult(name: $name, code: $code) {\n    result {\n      id\n      name\n      value\n      code\n      createdAt\n      status\n    }\n  }\n}\n"]);return ne=function(){return e},e}function ae(){var e=Object(_.a)(["\nmutation($resultId: Int!) {\n  deleteResult(resultId: $resultId) {\n    resultId\n  }\n}\n"]);return ae=function(){return e},e}var re=Object(S.gql)(ae()),ie=Object(S.gql)(ne()),oe=Object(s.a)((function(e){return{title:{textAlign:"center"},spinner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"},chip:{"& .MuiChip-label":{minWidth:"85px"}},root:{"& .MuiDataGrid-colCellTitle":{display:"block",textAlign:"center",width:"100%",fontWeight:"bolder",fontSize:16},"& .MuiCheckbox-root svg":{width:16,height:16,backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"#d9d9d9":"rgb(67, 67, 67)"),borderRadius:2},"& .MuiCheckbox-root svg path":{display:"none"},"& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg":{backgroundColor:"#1890ff",borderColor:"#1890ff"},"& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after":{position:"absolute",display:"table",border:"2px solid #fff",borderTop:0,borderLeft:0,transform:"rotate(45deg) translate(-50%,-50%)",opacity:1,transition:"all .2s cubic-bezier(.12,.4,.29,1.46) .1s",content:'""',top:"50%",left:"39%",width:5.71428571,height:9.14285714},"& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after":{width:8,height:8,backgroundColor:"#1890ff",transform:"none",top:"39%",border:0},border:0,color:"light"===e.palette.type?"rgba(0,0,0,.85)":"rgba(255,255,255,0.85)",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),WebkitFontSmoothing:"auto",letterSpacing:"normal","& .MuiDataGrid-columnsContainer":{backgroundColor:"light"===e.palette.type?"#fafafa":"#1d1d1d"},"& .MuiDataGrid-iconSeparator":{display:"none"},"& .MuiDataGrid-colCell, .MuiDataGrid-cell":{borderRight:"1px solid ".concat("light"===e.palette.type?"#f0f0f0":"#303030")},"& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell":{borderBottom:"1px solid ".concat("light"===e.palette.type?"#f0f0f0":"#303030")},"& .MuiDataGrid-cell":{textAlign:"center",justifyContent:"center",color:"light"===e.palette.type?"rgba(0,0,0,.85)":"rgba(255,255,255,0.65)"},"& .MuiPaginationItem-root":{borderRadius:0}}}}));var le=function(){var e=oe(),t=Object(a.useState)(""),n=Object(c.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(""),f=Object(c.a)(s,2),m=f[0],O=f[1],v=Object(a.useState)(!1),C=Object(c.a)(v,2),w=C[0],I=C[1],D=Object(a.useState)(!1),A=Object(c.a)(D,2),R=A[0],z=A[1],E=Object(a.useState)(""),L=Object(c.a)(E,2),F=L[0],P=L[1],H=Object(a.useState)([]),T=Object(c.a)(H,2),B=T[0],V=T[1],W=Object(S.useQuery)(te,{pollInterval:500}),U=W.loading,J=W.error,K=W.data,X=W.refetch,Y=[{field:"id",headerName:"ID",width:150},{field:"name",headerName:"Name",flex:1},{field:"code",headerName:"Code",flex:.5,renderCell:function(e){return Object(G.jsx)("label",{htmlFor:"icon-button-file",children:Object(G.jsx)(d.a,{color:"secondary","aria-label":"preview code",component:"span",onClick:function(){P(e.value),z(!0)},children:Object(G.jsx)(M.a,{})})})}},{field:"value",headerName:"Value",type:"number",flex:.5,renderCell:function(e){return null===e.value?"-":e.value.toExponential(4)}},{field:"status",headerName:"Status",flex:.5,renderCell:function(t){return function(t){var n=function(e){switch(e){case"FINISHED":return Object(G.jsx)(p.a,{});case"QUEUEING":return Object(G.jsx)(g.a,{});case"RUNNING":return Object(G.jsx)(x.a,{});case"FAILED":return Object(G.jsx)(y.a,{});default:return Object(G.jsx)("p",{children:"Wrong Status Code!"})}}(t);return Object(G.jsx)(u.a,{className:e.chip,avatar:n,label:t,variant:"outlined"})}(t.value)}},{field:"createdAt",headerName:"Created At",description:"Date and time of creation.",sortable:!0,type:"dateTime",flex:1,renderCell:function(e){var t=new Date(e.value);return Object(G.jsx)("p",{children:t.toUTCString()})}}],_=Object(S.useMutation)(re,{onCompleted:function(e){V([])},update:function(e,t){return le(e,t)}}),ee=Object(c.a)(_,1)[0],ne=Object(S.useMutation)(ie,{onCompleted:function(e){X()},update:function(e,t){return ce(e,t)}}),ae=Object(c.a)(ne,1)[0],le=function(e,t){var n=t.data.deleteResult,a=e.readQuery({query:te}),r=a.results.findIndex((function(e){return Number(e.id)===n.resultId})),i=[].concat(Object(l.a)(a.results.slice(0,r)),Object(l.a)(a.results.slice(r+1)));e.writeQuery({query:te,data:{results:i}})},ce=function(e,t){var n=t.data.createResult,a=e.readQuery({query:te}).results.concat(n.result);e.writeQuery({query:te,data:{results:a}})},se=function(e){return Object(G.jsx)(h.a,Object(o.a)({elevation:6,variant:"filled"},e))};return U?Object(G.jsxs)("div",{className:e.spinner,children:[" ",Object(G.jsx)(N.MetroSpinner,{size:60,color:"SlateGrey",loading:U})]}):J?Object(G.jsx)(se,{severity:"error",children:J.message}):Object(G.jsxs)("div",{children:[Object(G.jsx)(b.a,{className:e.title,variant:"h2",component:"h2",children:"Test Runs"}),Object(G.jsx)(Q,{numElemsSelected:B.length,handleDelete:function(){B.forEach((function(e){ee({variables:{resultId:e}})}))},setOpen:I}),Object(G.jsx)("div",{style:{height:800,width:"100%"},children:Object(G.jsx)(j.a,{className:e.root,hideFooterPagination:!0,showToolbar:!0,hideFooterRowCount:!0,disableSelectionOnClick:!0,autoHeight:!0,checkboxSelection:!0,rowsPerPageOptions:[],rows:K?K.results:[],columns:Y,onSelectionModelChange:function(e){V(e.selectionModel)},components:{noRowsOverlay:$}})}),Object(G.jsx)(k.Github,{url:"https://github.com/mattborghi/background-tasks-queue"}),R&&Object(G.jsx)(Z,{code:F,open:R,onClose:z}),Object(G.jsx)(q,{open:w,name:r,code:m,setName:i,setCode:O,setOpen:I,handleCreate:function(){ae({variables:{name:r,code:m}}),i(""),O(""),I(!1)}})]})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,330)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),i(e),o(e)}))};console.log("Production mode");var se=Object(S.createHttpLink)({uri:"https://backend-django-task-queues.herokuapp.com/graphql/",credentials:"same-origin"}),ue=new S.ApolloClient({link:se,cache:new S.InMemoryCache({typePolicies:{Query:{fields:{results:{merge:function(e,t){return t}}}}}})});i.a.render(Object(G.jsx)(S.ApolloProvider,{client:ue,children:Object(G.jsx)(le,{})}),document.getElementById("root")),ce()}},[[271,1,2]]]);
//# sourceMappingURL=main.30394a23.chunk.js.map