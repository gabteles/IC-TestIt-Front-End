webpackJsonp([0],[,,,,function(e,t,a){"use strict";var n=a(15),s=a.n(n),i=s.a.create({baseURL:"http://ic-testit.azurewebsites.net/api/",headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),r=function(e,t){var a=new URLSearchParams;return a.append("email",e),a.append("password",t),s.a.post("http://ic-testit.azurewebsites.net/token",a,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})},o=function(e){return i.get(e)},u=function(e,t){return i.post(e,t)},l=function(e,t){return i.put(e,t)};t.a={login:r,get:o,post:u,put:l}},,,,,,function(e,t,a){function n(e){a(45)}var s=a(1)(a(38),a(64),n,null,null);e.exports=s.exports},function(e,t,a){"use strict";var n=a(2),s=a(70),i=a(58),r=a.n(i),o=a(55),u=a.n(o),l=a(60),d=a.n(l),c=a(54),m=a.n(c);n.default.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Home",component:r.a},{path:"/signup/",name:"FinishSignUp",component:u.a},{path:"/signup/:id",name:"FinishSignUp",component:u.a},{path:"/home/",name:"Main",component:d.a},{path:"/turma",nome:"CreateClass",component:m.a}]})},function(e,t,a){function n(e){a(48)}var s=a(1)(a(34),a(67),n,null,null);e.exports=s.exports},,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),s=a(13),i=a.n(s),r=a(12),o=a.n(r),u=a(11),l=a(14);n.default.use(l.a),n.default.use(i.a),n.default.config.productionTip=!1,n.default.http.options.root="http://ic-testit.azurewebsites.net",n.default.router=u.a,n.default.material.registerTheme("default",{primary:{color:"indigo",hue:900},accent:{color:"amber",hue:800},warn:"black",background:{color:"blue",hue:900,textColor:"black"}}),new n.default({el:"#app-main",router:u.a,template:"<App/>",components:{App:o.a}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(57),s=a.n(n),i=a(56),r=a.n(i);t.default={name:"app-main",components:{VHeader:s.a,VFooter:r.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vlogin",data:function(){return{room:{description:null},student:{email:null,name:null,identifyer:null}}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(10),s=a.n(n),i=a(4);t.default={name:"signUp",components:{VForm:s.a},data:function(){return{user:{name:"",email:"",password:"",phone:"",birthday:"",type:2,organizationid:7,Identifyer:"",id:""},rpwd:""}},mounted:function(){this.getData()},methods:{getData:function(){var e=this;this.user.id=this.$route.params.id,i.a.get("/user/"+this.user.id).then(function(t){e.user=t.data})},handleSubmit:function(e){i.a.put("/user/"+this.user.id,e)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VFooter"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"vform",data:function(){return{rpassword:""}},mounted:function(){this.getDate()},props:["user","handleSubmit"],methods:{compare:function(e,t){return e===t},getDate:function(){},signUp:function(e){e.preventDefault(),this.handleSubmit(this.user)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"VHeader"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(10),s=a.n(n),i=a(59),r=a.n(i),o=a(4);t.default={name:"home",components:{VForm:s.a,VLogin:r.a},data:function(){return{user:{name:"",email:"",password:"",phone:"",birthday:"",type:1,organizationid:7,Identifyer:"Professor"}}},methods:{handleSubmit:function(e){o.a.post("/user",e)}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(4);t.default={name:"vlogin",data:function(){return{user:{email:null,password:null},msg:""}},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),n.a.login(this.user.email,this.user.password).then(function(e){200===e.status&&(console.log("Usuário logado com sucesso."),localStorage.setItem("token",e.data.access_token),t.$router.push("/home"))},function(e){console.log(e),console.log("Usuário e/ou senha inválidos."),t.msg="Usuário e/ou senha inválidos."})}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"main",data:function(){return{loggedIn:!1}},mounted:function(){this.loggedIn=null!==localStorage.getItem("token")},methods:{logOut:function(){localStorage.clear(),this.loggedIn=!1,this.$router.push("/")}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,a){e.exports=a.p+"static/img/logo.cda235f.jpg"},function(e,t,a){function n(e){a(44)}var s=a(1)(a(35),a(63),n,null,null);e.exports=s.exports},function(e,t,a){function n(e){a(50)}var s=a(1)(a(36),a(69),n,null,null);e.exports=s.exports},function(e,t,a){var n=a(1)(a(37),a(61),null,null,null);e.exports=n.exports},function(e,t,a){function n(e){a(46)}var s=a(1)(a(39),a(65),n,null,null);e.exports=s.exports},function(e,t,a){function n(e){a(49)}var s=a(1)(a(40),a(68),n,null,null);e.exports=s.exports},function(e,t,a){function n(e){a(43)}var s=a(1)(a(41),a(62),n,null,null);e.exports=s.exports},function(e,t,a){function n(e){a(47)}var s=a(1)(a(42),a(66),n,null,null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("p",[e._v("Test It 2017")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vlogin"},[a("form",{attrs:{novalidate:""},on:{submit:function(t){e.handleSubmit(t)}}},[a("md-input-container",[a("label",[e._v("Email")]),e._v(" "),a("md-input",{attrs:{type:"email"},model:{value:e.user.email,callback:function(t){e.user.email=t},expression:"user.email"}})],1),e._v(" "),a("md-input-container",{attrs:{"md-has-password":""}},[a("label",[e._v("Senha")]),e._v(" "),a("md-input",{attrs:{type:"password"},model:{value:e.user.password,callback:function(t){e.user.password=t},expression:"user.password"}})],1),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit"}},[e._v("Login")]),e._v(" "),a("label",{staticClass:"label-error"},[e._v(e._s(e.msg))])],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"dash"},[a("md-whiteframe",{staticClass:" a dash-item form-one"},[a("span",{staticClass:"md-title class-title"},[e._v("Cadastrar Turma")]),e._v(" "),a("form",{staticClass:"form-save-class"},[a("md-input-container",[a("label",[e._v("Descrição da turma")]),e._v(" "),a("md-input",{model:{value:e.room.description,callback:function(t){e.room.description=t},expression:"room.description"}})],1),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit"}},[e._v("Salvar")])],1)]),e._v(" "),a("md-whiteframe",{staticClass:" b  dash-item form-two"},[a("span",{staticClass:"md-title class-title"},[e._v("Adicionar Aluno")]),e._v(" "),a("form",{staticClass:"form-save-student"},[a("md-input-container",[a("label",[e._v("Nome do aluno")]),e._v(" "),a("md-input",{model:{value:e.student.name,callback:function(t){e.student.name=t},expression:"student.name"}})],1),e._v(" "),a("md-input-container",[a("label",[e._v("Email")]),e._v(" "),a("md-input",{model:{value:e.student.email,callback:function(t){e.student.email=t},expression:"student.email"}})],1),e._v(" "),a("md-input-container",[a("label",[e._v("Identificador (Ex: RA, CPF, RG)")]),e._v(" "),a("md-input",{model:{value:e.student.identifyer,callback:function(t){e.student.identifyer=t},expression:"student.identifyer"}})],1),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit"}},[e._v("Salvar")])],1)]),e._v(" "),e._m(0)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("md-table",{staticClass:"c table-class"},[a("md-table-header",[a("md-table-row",[a("md-table-head",[e._v("Aluno(ID)")]),e._v(" "),a("md-table-head",[e._v("Turma")])],1)],1),e._v(" "),a("md-table-body",e._l(1,function(t,n){return a("md-table-row",{key:n},[a("md-table-cell",[e._v("ID")]),e._v(" "),e._l(1,function(t,n){return a("md-table-cell",{key:n},[e._v("Descrição")])})],2)}))],1)}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vform"},[a("form",{attrs:{novalidate:""},on:{submit:function(t){e.signUp(t)}}},[a("md-input-container",[a("label",[e._v("Nome")]),e._v(" "),a("md-input",{attrs:{required:""},model:{value:e.user.name,callback:function(t){e.user.name=t},expression:"user.name"}})],1),e._v(" "),a("md-input-container",[a("label",[e._v("Email")]),e._v(" "),a("md-input",{attrs:{type:"email",required:""},model:{value:e.user.email,callback:function(t){e.user.email=t},expression:"user.email"}})],1),e._v(" "),a("md-input-container",[a("label",[e._v("Senha")]),e._v(" "),a("md-input",{attrs:{type:"password",required:""},model:{value:e.user.password,callback:function(t){e.user.password=t},expression:"user.password"}})],1),e._v(" "),a("md-input-container",[a("label",[e._v("Confirme a Senha")]),e._v(" "),a("md-input",{attrs:{type:"password",required:""},model:{value:e.rpassword,callback:function(t){e.rpassword=t},expression:"rpassword"}})],1),e._v(" "),e.compare(e.user.password,e.rpassword)?e._e():a("span",[e._v("*Senhas não coincidem")]),e._v(" "),a("md-input-container",[a("label",[e._v("Data de Nascimento")]),e._v(" "),a("md-input",{attrs:{type:"date"},model:{value:e.user.birthday,callback:function(t){e.user.birthday=t},expression:"user.birthday"}})],1),e._v(" "),a("md-input-container",[a("label",[e._v("Telefone")]),e._v(" "),a("md-input",{model:{value:e.user.phone,callback:function(t){e.user.phone=t},expression:"user.phone"}})],1),e._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{type:"submit"}},[e._v("Cadastrar")])],1)])},staticRenderFns:[]}},function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("img",{attrs:{src:a(53),alt:"Test It"}})])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main has-ripple blue"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.loggedIn,expression:"loggedIn"}],staticClass:"logout"},[a("a",{on:{click:function(t){e.logOut()}}},[a("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}})])]),e._v(" "),a("md-ink-ripple"),e._v(" "),a("md-list",{staticClass:"list"},[a("md-toolbar",{attrs:{"md-theme":"white"}},[a("span",{staticClass:"md-title"},[e._v("Menu")])]),e._v(" "),a("md-divider"),e._v(" "),a("md-list-item",{attrs:{href:"#/home"}},[e._v("Provas")]),e._v(" "),a("md-list-item",{attrs:{href:"#/home"}},[e._v("Turmas")]),e._v(" "),a("md-list-item",{attrs:{href:"#/home"}},[e._v("Configurações")])],1),e._v(" "),a("div",{staticClass:"dash"},[a("md-whiteframe",{staticClass:"a dash-item has-ripple blue"},[a("md-ink-ripple"),e._v(" "),a("md-icon",{staticClass:"md-size-4x md-accent"},[e._v("subject")]),e._v(" "),a("span",[e._v("Provas")])],1),e._v(" "),a("md-whiteframe",{staticClass:"b dash-item has-ripple blue"},[a("md-ink-ripple"),e._v(" "),a("md-icon",{staticClass:"md-size-4x md-accent"},[e._v("border_color")]),e._v(" "),a("span",[e._v("Realizar Prova")])],1),e._v(" "),a("md-whiteframe",{staticClass:"c dash-item has-ripple blue"},[a("md-ink-ripple"),e._v(" "),a("md-icon",{staticClass:"md-size-4x md-accent"},[e._v("edit")]),e._v(" "),a("span",[e._v("Provas Realizadas")])],1),e._v(" "),a("md-whiteframe",{staticClass:"d dash-item has-ripple blue"},[a("md-ink-ripple"),e._v(" "),a("md-icon",{staticClass:"md-size-4x md-accent"},[e._v("check")]),e._v(" "),a("span",[e._v("Notas")])],1),e._v(" "),a("md-whiteframe",{staticClass:"e dash-item has-ripple blue"},[a("md-ink-ripple"),e._v(" "),a("md-icon",{staticClass:"md-size-4x md-accent"},[e._v("folder")]),e._v(" "),a("span",[e._v("Materiais de Consulta")])],1),e._v(" "),a("md-whiteframe",{staticClass:"f dash-item has-ripple blue"},[a("md-ink-ripple"),e._v(" "),a("md-icon",{staticClass:"md-size-4x md-accent"},[e._v("trending_up")]),e._v(" "),a("span",[e._v("Estatisticas")])],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("VHeader"),e._v(" "),a("div",{attrs:{id:"app-container"}},[a("router-view")],1),e._v(" "),a("VFooter")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[e._m(0),e._v(" "),a("div",{staticClass:"form"},[a("md-tabs",{staticClass:"md-transparent"},[a("md-tab",{attrs:{"md-label":"Login"}},[a("VLogin")],1),e._v(" "),a("md-tab",{attrs:{"md-label":"Cadastre-se"}},[a("VForm",{attrs:{user:e.user,handleSubmit:e.handleSubmit}})],1)],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text"},[a("h1",[e._v("Uma nova ferramenta de ensino")]),e._v(" "),a("p",[e._v("\n      O Test It é uma ferramenta de ensino, com a proposta de trazer uma plataforma de aprendizado\n      com maior suporte as necessidades do aluno, e um maior número de opções e recursos para o professor.\n    ")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"signUp"},[a("h1",[e._v("Concluir Cadastro")]),e._v(" "),a("div",{staticClass:"page"},[a("VForm",{attrs:{user:e.user,handleSubmit:e.handleSubmit}})],1)])},staticRenderFns:[]}},,,,function(e,t){}],[33]);
//# sourceMappingURL=app.19460caa8902f9d258bc.js.map