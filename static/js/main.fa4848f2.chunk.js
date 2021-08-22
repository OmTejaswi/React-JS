(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),o=a.n(c),l=a(17),s=a.n(l),n=(a(15),a(8)),i=(a(23),a(7)),r=a.n(i),d=a(10),h=a(0);function b(e){return Object(h.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(h.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(h.jsx)("span",{className:"navbar-toggler-icon"})}),Object(h.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(h.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/home",children:e.nav1})}),Object(h.jsx)("li",{className:"nav-item",children:Object(h.jsx)(d.b,{className:"nav-link",to:"/about",children:e.nav2})}),Object(h.jsxs)("li",{className:"form-check form-switch nav-item my-2",children:[Object(h.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(h.jsx)("label",{className:"form-check-label text-".concat("light"===e.mode?"dark":"light"),htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]}),Object(h.jsxs)("form",{className:"d-flex",children:[Object(h.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(h.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}function j(e){document.title="TextUtils-Home";var t=Object(c.useState)(""),a=Object(n.a)(t,2),o=a[0],l=a[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("h1",{style:{color:"light"===e.mode?"black":"white"},children:e.heading}),Object(h.jsx)("textarea",{className:"form-control",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},value:o,id:"box",rows:"8",onChange:function(e){l(e.target.value)},placeholder:"Enter Text Here"})]}),Object(h.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var t=o.toUpperCase();l(t),e.alert("success",": Converted to uppercase!")},children:"Convert to upper case"}),Object(h.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var t=o.toLocaleLowerCase();l(t),e.alert("success",": Converted to lowercase!")},children:"Convert to lower case"}),Object(h.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){var t=document.getElementById("box");navigator.clipboard.writeText(t.value),e.alert("success",": Copied to clipboard!")},children:"Copy"}),Object(h.jsx)("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){l(""),e.alert("success",": textbox cleared!")},children:"Clear"})]}),Object(h.jsxs)("div",{className:"container my-2",children:[Object(h.jsx)("h2",{style:{color:"light"===e.mode?"black":"white"},children:"You text summary"}),Object(h.jsxs)("p",{style:{color:"light"===e.mode?"black":"white"},children:[o.length," characters and ",o.split(" ").length," words"]}),Object(h.jsxs)("p",{style:{color:"light"===e.mode?"black":"white"},children:[.008*o.split(" ").length," word will take minutes to read for an average person"]}),Object(h.jsx)("h2",{style:{color:"light"===e.mode?"black":"white"},children:"Preview"}),Object(h.jsx)("p",{children:o.length>0?o:"Enter something the the text box to preview it."})]})]})}function m(e){document.title="TextUtils-About";var t=Object(c.useState)({color:"black",backgroundColor:"white",borderRadius:"10px"}),a=Object(n.a)(t,2),o=(a[0],a[1],Object(c.useState)("Enable Dark Mode")),l=Object(n.a)(o,2);l[0],l[1];return Object(h.jsxs)("div",{id:"about-us",className:"container",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white",borderRadius:"10px"},children:[Object(h.jsx)("h1",{children:"About Us"}),Object(h.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(h.jsx)("button",{className:"accordion-button",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(h.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},"aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via style transitions. You can modify any of this with custom style or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(h.jsx)("button",{className:"accordion-button collapsed",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(h.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},"aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via style transitions. You can modify any of this with custom style or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(h.jsxs)("div",{className:"accordion-item",children:[Object(h.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(h.jsx)("button",{className:"accordion-button collapsed",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(h.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse",style:{backgroundColor:"light"===e.mode?"white":"black",color:"light"===e.mode?"black":"white"},"aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(h.jsxs)("div",{className:"accordion-body",children:[Object(h.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via style transitions. You can modify any of this with custom style or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(h.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(h.jsx)("br",{})]})}function u(e){return e.alert&&Object(h.jsxs)("div",{className:"alert alert-".concat(e.alert.typ," alert-dismissible fade show"),role:"alert",children:[Object(h.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.typ)}),e.alert.msg]})}b.prototype={title:r.a.string.isRequired,nav1:r.a.string};var g=a(2);var p=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],o=t[1],l=Object(c.useState)(null),s=Object(n.a)(l,2),i=s[0],r=s[1],p=function(e,t){r({typ:e,msg:t}),setTimeout((function(){r(null)}),2e3)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(b,{title:"TextUtils",nav1:"Home",nav2:"About Us",mode:a,toggleMode:function(){"light"===a?(o("dark"),document.body.style.background="#042743",p("success",": Dark mode has been enabled")):"dark"===a&&(o("light"),document.body.style.background="white",p("success",": Dark mode has been disabled"))}}),Object(h.jsx)(u,{alert:i}),Object(h.jsx)("div",{className:"container my-3",children:Object(h.jsxs)(g.c,{children:[Object(h.jsx)(g.a,{exact:!0,path:"/about",children:Object(h.jsx)(m,{mode:a})}),Object(h.jsx)(g.a,{exact:!0,path:"/home",children:Object(h.jsx)(j,{heading:"Enter the text to analyze",mode:a,alert:p})}),Object(h.jsx)(g.a,{exact:!0,path:"/",children:Object(h.jsx)(j,{heading:"Enter the text to analyze",mode:a,alert:p})})]})})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,o=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),c(e),o(e),l(e),s(e)}))};s.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);