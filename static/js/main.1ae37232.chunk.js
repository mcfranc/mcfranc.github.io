(window["webpackJsonpnew-profile"]=window["webpackJsonpnew-profile"]||[]).push([[0],{16:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(5),o=n.n(a),l=n(3),i=n(2),u=Object(i.b)({projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROJECT_SELECTED":return e;default:return[{index:"01",name:"Inkscribe",url:"#",desc:"Creative microblogging platform - coming soon",technology:"MongoDB, Express, React, Node.js"},{index:"02",name:"Plantza",url:"https://plantza-alan1010010.herokuapp.com/",desc:"Plant rental marketplace",technology:"Ruby on Rails, PostgreSQL, Heroku"},{index:"03",name:"Plantis",url:"http://www.plantis.co/",desc:"Social house-plant management system",technology:"Ruby on Rails, PostgreSQL, Heroku"}]}},activeProject:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROJECT_SELECTED":return t.payload;default:return e}}}),s=n(11),p=n(12),j=n(14),m=n(13),v=n(15);function d(e){return{type:"PROJECT_SELECTED",payload:e}}var E=Object(l.b)((function(e){return{activeProject:e.activeProject}}),(function(e){return Object(i.a)({selectProject:d},e)}))((function(e){var t="project-index";return e.project===e.activeProject&&(t+=" active-project-link"),r.a.createElement("span",null,r.a.createElement("span",{className:t,onClick:function(){return e.selectProject(e.project)}},e.project.index)," \xa0")})),f=function(e){function t(){return Object(s.a)(this,t),Object(j.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"renderList",value:function(){return this.props.projects.map((function(e){return r.a.createElement(E,{key:e.name,project:e})}))}},{key:"render",value:function(){return r.a.createElement("div",null," Projects: \xa0",this.renderList())}}]),t}(c.Component);var h=Object(l.b)((function(e){return{projects:e.projects}}))(f);var P=Object(l.b)((function(e){return{activeProject:e.activeProject}}))((function(e){return e.activeProject?r.a.createElement("div",{className:"active-project"},r.a.createElement("a",{href:e.activeProject.url},r.a.createElement("p",null,e.activeProject.name)),r.a.createElement("p",null,e.activeProject.desc),r.a.createElement("p",{className:"technology"},e.activeProject.technology)):r.a.createElement("div",{className:"active-project"})})),b=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(h,null),r.a.createElement(P,null))};n(26);o.a.render(r.a.createElement(l.a,{store:Object(i.c)(u)},r.a.createElement(b,null)),document.querySelector(".project-description"))}},[[16,1,2]]]);
//# sourceMappingURL=main.1ae37232.chunk.js.map