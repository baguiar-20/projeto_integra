(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{133:function(e,a,t){e.exports=t.p+"static/media/integra_logo.ffdf0581.png"},148:function(e,a,t){e.exports=t(193)},153:function(e,a,t){},154:function(e,a,t){},162:function(e,a,t){},163:function(e,a,t){},164:function(e,a,t){},165:function(e,a,t){},167:function(e,a,t){},168:function(e,a,t){},169:function(e,a,t){},170:function(e,a,t){},171:function(e,a,t){},172:function(e,a,t){},173:function(e,a,t){},174:function(e,a,t){},175:function(e,a,t){e.exports=t.p+"static/media/sala.6f283a64.png"},176:function(e,a,t){},180:function(e,a,t){},182:function(e,a,t){},183:function(e,a,t){},184:function(e,a,t){},185:function(e,a,t){},186:function(e,a,t){},187:function(e,a,t){},188:function(e,a,t){},189:function(e,a,t){},190:function(e,a,t){},191:function(e,a,t){},192:function(e,a,t){},193:function(e,a,t){"use strict";t.r(a);var n=t(4),l=t.n(n),r=t(70),c=t.n(r),o=(t(153),t(154),t(108)),s=t(68),i=t(106),m=t(98),u={setDatabase:"SET_DATABASE",setMongoClient:"SET_MONGO_CLIENT",setUserLogged:"SET_USER_LOGGED",showModal:"SHOW_MODAL",closeModal:"CLOSE_MODAL"},d={database:null,mongoClient:null,modalType:"",userLogged:null,showModal:!1},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case u.setMongoClient:return Object(m.a)({},e,{mongoClient:a.payload});case u.setDatabase:return Object(m.a)({},e,{database:a.payload});case u.setUserLogged:return Object(m.a)({},e,{userLogged:a.payload});case u.showModal:return Object(m.a)({},e,{showModal:!0,modalType:a.payload});case u.closeModal:return Object(m.a)({},e,{showModal:!1});default:return e}},h=Object(i.c)(Object(i.b)({general:E})),p=t(136),v=t(60),f=t(134),g=t.n(f),N=t(143),b=t(63),_={create:function(e,a){return e.collection("administradores").insertOne(a)},update:function(e,a,t){return e.collection("administradores").updateMany(a,{$set:t})},delete:function(e,a){return e.collection("administradores").deleteMany(a)},findAll:function(e){return e.collection("administradores").find({}).toArray()},anonymousLogin:function(e){return e.auth.loginWithCredential(new o.a)}},w=(t(162),t(163),function(e){return l.a.createElement("div",{className:"input_text"},l.a.createElement("input",{placeholder:e.placeholder,type:e.type?e.type:"text",name:e.name?e.name:""}),l.a.createElement("label",{className:"label"},e.label))}),S=(t(164),function(e){return l.a.createElement("button",{type:e.type,style:e.width?{width:e.width}:{},onClick:e.onClick,className:"button"},e.text)}),y=(t(165),function(e){var a=e.onCheck,t=void 0===a?function(){}:a,n=e.label,r=l.a.useState(!1),c=Object(b.a)(r,2),o=c[0],s=c[1];return l.a.createElement("div",{className:"checkbox_container"},l.a.createElement("div",{className:o?"checkbox checked":"checkbox",onClick:function(){s(!o),t(o)}}),l.a.createElement("label",null,n))}),C=Object(s.b)((function(e){return{mongoClient:e.general.mongoClient,database:e.general.database,userLogged:e.general.userLogged}}),(function(e){return{setUserLogged:function(a){return e({type:u.setUserLogged,payload:a})}}}))((function(e){var a=e.mongoClient,n=(e.userLogged,e.setUserLogged),r=l.a.useState(!1),c=Object(b.a)(r,2),o=c[0],s=c[1],i=l.a.useState(!1),m=Object(b.a)(i,2),u=m[0],d=m[1],E=function(){var e=Object(N.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=5;break}return e.next=3,_.anonymousLogin(a);case 3:t=e.sent,n(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.useEffect((function(){E()})),l.a.createElement("div",{className:"login_container"},l.a.createElement("div",{className:"ball"}),l.a.createElement("div",{className:"logo_container"},l.a.createElement("img",{src:t(133)}),l.a.createElement("p",null,"Sistema de Gerenciamento")),l.a.createElement("div",{className:"login"},l.a.createElement("h1",null,"Login"),l.a.createElement("div",{className:"card"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),"adm"===e.target.email.value?d(!0):s(!0)}},l.a.createElement(w,{name:"email",label:"E-mail",placeholder:"Ex: joao@example.com"}),l.a.createElement(w,{name:"senha",label:"Senha",type:"password",placeholder:"Informe sua senha"}),l.a.createElement(y,{label:"Manter-me Conectado"}),l.a.createElement(S,{type:"submit",text:"Confirmar"})),o&&l.a.createElement(v.Redirect,{to:"/agendamentos"}),u&&l.a.createElement(v.Redirect,{to:"/agendamento_adm"}))))})),x=(t(167),function(e){return l.a.createElement("div",{className:"topbar_container"},l.a.createElement("div",{className:"img_container"},l.a.createElement("img",{src:t(133)})),l.a.createElement("div",{className:"titulo"},l.a.createElement("h2",null,"Portal da Equipe"),l.a.createElement("h4",null,"Agendamentos")),l.a.createElement("div",{className:"user_data"},l.a.createElement("div",null,l.a.createElement("h2",null,"Catherine Torres"),l.a.createElement("h4",null,"Fisioterapeuta"))),l.a.createElement("img",{className:"profile_pic",src:"https://randomuser.me/api/portraits/women/43.jpg"}))}),M=(t(168),t(169),t(170),function(e){return l.a.createElement("div",{className:e.executado?"container_reserva_cliente executado":"container_reserva_cliente"},l.a.createElement("div",null,l.a.createElement("h1",null,"27/01/2019"),l.a.createElement("h4",null,"14:00 ~ 16:00")),l.a.createElement("div",null,l.a.createElement("h4",null,"Sala"),l.a.createElement("h1",null,"05")),l.a.createElement("div",null,l.a.createElement("h4",null,"Situa\xe7\xe3o"),l.a.createElement("h2",null,"Pendente")))}),k=function(e){return l.a.createElement("div",{className:"reserva"},l.a.createElement("i",null,l.a.createElement("h2",null,"Reservado")),l.a.createElement("h4",null,"15:00 ~ 16:00"))},R=function(e){return l.a.createElement("div",{className:"reserva"},l.a.createElement("i",null,l.a.createElement("h4",null,"Reservado")),l.a.createElement("h3",null,"Igor Nogueira"),l.a.createElement("h4",null,"15:00 ~ 16:00"))},A=["Seg","Ter","Qua","Qui","Sex","S\xe1b","Dom"],L=function(e){return l.a.createElement("div",{className:"container_week"},l.a.createElement("div",{className:"chevron"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-chevron-left"}))),A.map((function(a){return l.a.createElement("div",{onClick:e.addReservaListener,className:"week_day"},l.a.createElement("h1",null,a),l.a.createElement("h3",null,"29/Jan"),e.isAdm?l.a.createElement(R,null):l.a.createElement(k,null),l.a.createElement("div",{className:"add"},l.a.createElement("span",null,"+")))})),l.a.createElement("div",{className:"chevron"},l.a.createElement("p",null,l.a.createElement("i",{className:"fas fa-chevron-right"}))))},O=function(e){return l.a.createElement("div",{className:"sala_content"},l.a.createElement("div",{className:"sala_container"},l.a.createElement("div",null,l.a.createElement("h1",null,"Sala 01"),l.a.createElement("p",null,"Hor\xe1rios Reservados")),l.a.createElement("div",null,l.a.createElement(S,{width:"25%",text:"Detalhes",onClick:e.onClickDetalhesListener}))),l.a.createElement(L,{isAdm:e.isAdm,addReservaListener:e.addReservaListener}))},j=(t(171),t(172),t(139)),T=(t(173),function(e){return l.a.createElement("div",{className:e.show?"modal_container":"modal_container hidden"},e.header,l.a.createElement("div",null,e.body),e.footer)}),I=[{label:"08:00",value:8},{label:"09:00",value:9}],D=function(e){var a=e.show,t=e.close;return l.a.createElement(T,{show:a,header:l.a.createElement("header",null,l.a.createElement("div",null,l.a.createElement("h1",null,"Adicionar Reserva"),l.a.createElement("h3",null,"Sexta, 27 de Janeiro de 2019")),l.a.createElement("div",{className:"close_container",onClick:t},l.a.createElement("i",{className:"fa fa-times"}))),body:l.a.createElement("div",null,l.a.createElement("div",{className:"options"},l.a.createElement("div",{className:"option selected"},l.a.createElement("p",null,"Hora Avulsa")),l.a.createElement("div",{className:"option"},l.a.createElement("p",null,"Turno")),l.a.createElement("div",{className:"option"},l.a.createElement("p",null,"Mensal"))),l.a.createElement("div",{className:"horas_intervalo"},l.a.createElement("div",null,l.a.createElement("h2",null,"Hora Inicial"),l.a.createElement(j.a,{options:I})),l.a.createElement("div",null,l.a.createElement("h2",null,"Hora Final"),l.a.createElement(j.a,{options:I}))),l.a.createElement("div",{className:"resume_container"},l.a.createElement("div",null,l.a.createElement("h2",null,"Valor/Hora"),l.a.createElement("h3",null,"R$39,90")),l.a.createElement("div",null,l.a.createElement("h2",null,"Valor Total:"),l.a.createElement("h3",null,"R$139,90")))),footer:l.a.createElement("div",{className:"footer"},l.a.createElement(S,{text:"Confirmar"}))})},H={reservaCliente:"RESERVA_CLIENTE",detalhesSala:"DETALHES_SALA"},F=(t(174),function(e){return l.a.createElement(T,{show:e.show,header:l.a.createElement("header",null,l.a.createElement("h1",null,"Detalhes - Sala 01"),l.a.createElement("div",{className:"close_container",onClick:e.close},l.a.createElement("i",{className:"fa fa-times"}))),body:l.a.createElement("div",{className:"modal_sala_body"},l.a.createElement("div",{className:"carousel"},l.a.createElement("i",{className:"fa fa-chevron-left"}),l.a.createElement("img",{alt:"",src:t(175)}),l.a.createElement("i",{className:"fa fa-chevron-right"})),l.a.createElement("div",{className:"sala_details"},l.a.createElement("div",null,l.a.createElement("h2",null,"Valor/Hora:"),l.a.createElement("h3",null,"R$39,90")),l.a.createElement("div",null,l.a.createElement("h2",null,"No espa\xe7o cont\xe9m:"),l.a.createElement("h3",null,"3 cadeiras, 2 estantes, uma sala de estar e ar condicionado"))))})}),P=(t(176),t(129)),U=t.n(P),J=function(e){return l.a.createElement("div",{className:"alternating_tabs"},e.elements.map((function(a,t){return l.a.createElement("div",{className:t===e.selectedIndex?"selected":"",onClick:a.onClick},l.a.createElement("h2",null,a.name))})),0===e.selectedIndex?l.a.createElement(U.a,{to:"agendamentos"}):l.a.createElement(l.a.Fragment,null),1===e.selectedIndex?l.a.createElement(U.a,{to:"minhas_reservas"}):l.a.createElement(l.a.Fragment,null))},V=(t(180),function(e){return l.a.createElement("div",{className:"snack_container"},l.a.createElement("h2",null,"Voc\xea tem 5 reservas agendadas"))}),W=Object(s.b)((function(e){return{showModal:e.general.showModal,modalType:e.general.modalType}}),(function(e){return{openModal:function(a){return e({type:u.showModal,payload:a})},closeModal:function(){return e({type:u.closeModal})}}}))((function(e){var a=l.a.useState(0),t=Object(b.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(D,{close:function(){return e.closeModal()},show:e.showModal&&e.modalType===H.reservaCliente}),l.a.createElement(F,{close:function(){return e.closeModal()},show:e.showModal&&e.modalType===H.detalhesSala}),l.a.createElement(x,null),l.a.createElement("div",{className:"info_container"},l.a.createElement(J,{selectedIndex:n,elements:[{name:"Salas para Reservar",onClick:function(){return r(0)}},{name:"Minhas Reservas",onClick:function(){r(1)}}]}),l.a.createElement(V,null)),l.a.createElement("div",{className:"container_salas"},l.a.createElement(O,{onClickDetalhesListener:function(){e.openModal(H.detalhesSala)},addReservaListener:function(){return e.openModal(H.reservaCliente)}}),l.a.createElement(O,null)))})),$=(t(181),t(182),Object(s.b)((function(e){return{}}),(function(e){return{}}))((function(e){var a=l.a.useState(1),t=Object(b.a)(a,2),n=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(x,null),l.a.createElement("div",{className:"info_container"},l.a.createElement(J,{selectedIndex:n,elements:[{name:"Salas para Reservar",onClick:function(){return r(0)}},{name:"Minhas Reservas",onClick:function(){return r(1)}}]}),l.a.createElement(V,null)),l.a.createElement("div",{className:"container_reservas"},l.a.createElement("h1",{className:"title"},"Minhas Reservas"),l.a.createElement(M,null),l.a.createElement(M,null),l.a.createElement("h1",{className:"title"},"Hist\xf3rico"),l.a.createElement(M,{executado:!0})))}))),q=(t(183),function(e){var a=Object(v.useHistory)();return l.a.createElement("div",{onClick:function(){a.push("/"+e.page)},className:"tab "+(e.selected?"selected":"")},l.a.createElement("p",null,e.children))}),B=function(e){var a=e.pageSelected;return l.a.createElement("div",{className:"topbar_container"},l.a.createElement("div",{className:"img_container"},l.a.createElement("img",{src:t(133)})),l.a.createElement("div",{className:"tabs"},l.a.createElement(q,{page:"dashboard",selected:"dashboard"===a},"Dashboard"),l.a.createElement(q,{page:"agendamento_adm",selected:"agendamentos"===a},"Agendamentos"),l.a.createElement(q,{page:"profissionais",selected:"profissionais"===a},"Profissionais"),l.a.createElement(q,{page:"administrativo",selected:"administrativo"===a},"Administrativo"),l.a.createElement(q,{page:"salas",selected:"salas"===a},"Salas"),l.a.createElement(q,{page:"logs",selected:"logs"===a},"Logs")),l.a.createElement("div",{className:"user_data"},l.a.createElement("div",null,l.a.createElement("h2",null,"Catherine Torres"),l.a.createElement("h4",null,"Fisioterapeuta"))),l.a.createElement("img",{className:"profile_pic",src:"https://randomuser.me/api/portraits/women/43.jpg"}))},G=function(e){return l.a.createElement("div",null,l.a.createElement(B,{pageSelected:"agendamentos"}),l.a.createElement("div",{className:"container_salas"},l.a.createElement(O,{isAdm:!0}),l.a.createElement(O,{isAdm:!0})))},z=t(146),Q=t(85),X=(t(194),t(184),function(e){var a=l.a.useState(null),t=Object(b.a)(a,2),n=(t[0],t[1]);return l.a.useEffect((function(){var e=z.a("chart_agendamentos",Q.d);e.paddingRight=20;for(var a=[],t=10,l=1;l<366;l++)t+=Math.round((Math.random()<.5?1:-1)*Math.random()*10),a.push({date:new Date(2018,0,l),name:"name"+l,value:t});e.data=a,e.xAxes.push(new Q.a).renderer.grid.template.location=0;var r=e.yAxes.push(new Q.c);r.tooltip.disabled=!0,r.renderer.minWidth=35;var c=e.series.push(new Q.b);c.dataFields.dateX="date",c.dataFields.valueY="value",c.tooltipText="{valueY.value}",e.cursor=new Q.f;var o=new Q.e;o.series.push(c),e.scrollbarX=o,n(e)}),[]),l.a.createElement("div",null,l.a.createElement(B,{pageSelected:"dashboard"}),l.a.createElement("div",{className:"indicators_container"},l.a.createElement("div",null,l.a.createElement("h5",null,"5,25% ",l.a.createElement("i",{className:"fa fa-arrow-up"})," \xa0 que no m\xeas anterior"),l.a.createElement("h2",null,"25 reservas no m\xeas")),l.a.createElement("div",null,l.a.createElement("h2",null,"35 reservas canceladas"),l.a.createElement("h5",null,"5,25% ",l.a.createElement("i",{className:"fa fa-arrow-up"})," \xa0 que no m\xeas anterior"))),l.a.createElement("div",{className:"bottom_column"},l.a.createElement("div",{className:"agendamentos_chart_container"},l.a.createElement("h2",null,"Agendamentos"),l.a.createElement("div",{id:"chart_agendamentos"})),l.a.createElement("div",{className:"quickdetails_container"},l.a.createElement("h2",null,"Informa\xe7\xf5es"),l.a.createElement("h3",null,"5 Novos Profissionais"),l.a.createElement("h3",null,"57 agendamentos"),l.a.createElement("h3",null,"15 usu\xe1rios cadastrados"),l.a.createElement("h3",null,"183 agendamentos at\xe9 o momento"),l.a.createElement("h3",null,"5 pacientes para profissionais"),l.a.createElement("h3",null,"23 cancelamentos"))))}),Y=(t(185),function(e){return l.a.createElement("div",{className:"card_log"},l.a.createElement("img",{className:"profile_pic",src:"https://randomuser.me/api/portraits/women/43.jpg"}),l.a.createElement("div",null,l.a.createElement("h3",null,"Brian Ito"),l.a.createElement("h1",null,"Solicitou uma nova sala")),l.a.createElement("div",null,l.a.createElement("h4",null,"Seg, 24/Jan/2020 15:35")))}),K=(t(186),Object(s.b)((function(e){return{}}))((function(e){return l.a.createElement("div",null,l.a.createElement(B,{pageSelected:"logs"}),l.a.createElement("div",{className:"logs"},l.a.createElement(Y,null),l.a.createElement(Y,null),l.a.createElement(Y,null),l.a.createElement(Y,null)))}))),Z=(t(187),function(e){return l.a.createElement("div",{className:"card_profissional"},l.a.createElement("img",{src:"https://randomuser.me/api/portraits/women/43.jpg"}),l.a.createElement("h2",null,"Claudio Correa de Andrade Matias Pinto"),l.a.createElement("h3",null,"Fisioterapeuta"),l.a.createElement(S,{text:"Informa\xe7\xf5es"}))}),ee=(t(188),function(e){return l.a.createElement("div",null,l.a.createElement(B,{pageSelected:"profissionais"}),l.a.createElement("div",{className:"profissionais_container"},l.a.createElement(Z,null),l.a.createElement(Z,null),l.a.createElement(Z,null),l.a.createElement(Z,null),l.a.createElement(Z,null),l.a.createElement(Z,null)))}),ae=(t(189),t(190),function(e){return l.a.createElement("div",{className:"card_administrativo"},l.a.createElement("img",{src:"https://randomuser.me/api/portraits/women/43.jpg"}),l.a.createElement("h2",null,"Claudio Correa de Andrade Matias Pinto"),l.a.createElement(S,{text:"Informa\xe7\xf5es"}))}),te=function(e){return l.a.createElement("div",null,l.a.createElement(B,{pageSelected:"administrativo"}),l.a.createElement("div",{className:"container_adms"},l.a.createElement(ae,null),l.a.createElement(ae,null),l.a.createElement(ae,null),l.a.createElement(ae,null)))},ne=(t(191),t(192),function(e){return l.a.createElement("div",{className:"card_sala"},l.a.createElement("img",{src:"https://integracps.com.br/uploads/gallery/2019/04/estrutura-11556120340.jpg"}),l.a.createElement("h2",null,"Sala 03"),l.a.createElement(S,{text:"Informa\xe7\xf5es"}))}),le=function(e){return l.a.createElement("div",null,l.a.createElement(B,{pageSelected:"salas"}),l.a.createElement("div",{className:"salas_container"},l.a.createElement("div",{className:"header_salas"},l.a.createElement("div",null,l.a.createElement("h1",null,"Salas Cadastradas"),l.a.createElement("h3",null,"Abaixo seguem as salas possu\xeddas pela Integra")),l.a.createElement("div",null,l.a.createElement(S,{width:"50%",text:"Nova Sala"}))),l.a.createElement("div",{className:"salas"},l.a.createElement(ne,null),l.a.createElement(ne,null),l.a.createElement(ne,null))))};var re=function(){return l.a.useEffect((function(){var e=o.c.initializeDefaultAppClient("integra-rhnuz"),a=e.getServiceClient(o.b.factory,"mongodb-atlas").db("Integra");h.dispatch({type:u.setMongoClient,payload:e}),h.dispatch({type:u.setDatabase,payload:a})}),[]),l.a.createElement(s.a,{store:h},l.a.createElement(p.a,null,l.a.createElement(v.Route,{path:"/",exact:!0,component:C}),l.a.createElement(v.Route,{path:"/agendamentos",component:W}),l.a.createElement(v.Route,{path:"/minhas_reservas",component:$}),l.a.createElement(v.Route,{path:"/agendamento_adm",component:G}),l.a.createElement(v.Route,{path:"/dashboard",component:X}),l.a.createElement(v.Route,{path:"/administrativo",component:te}),l.a.createElement(v.Route,{path:"/profissionais",component:ee}),l.a.createElement(v.Route,{path:"/salas",component:le}),l.a.createElement(v.Route,{path:"/logs",component:K})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[148,1,3]]]);
//# sourceMappingURL=main.1f422d54.chunk.js.map