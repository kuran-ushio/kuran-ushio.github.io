(self.webpackChunkgatsby_blog=self.webpackChunkgatsby_blog||[]).push([[991],{1422:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7294),l=a(5444),r=a(7446),o=[{key:"Home",title:"首页",to:"/"},{key:"Blog",title:"笔记",to:"/m/blog"},{key:"Works",title:"练习",to:"/m/works"}];var c=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return n.createElement("header",{className:"mHeader-module--header--3VpTH"},n.createElement("div",{className:"mHeader-module--header-bar--29-4_"},n.createElement("div",{className:"mHeader-module--icon--E8UBq"},n.createElement("img",{src:r.Z,alt:"avatar"})),n.createElement("div",{className:"mHeader-module--top-info--32z56"},n.createElement("div",null,"Ushio"),n.createElement("span",null,"To reveal all mysteries and doubts, have the lust for life.")),n.createElement("div",{className:"mHeader-module--top-close--1Mo6L",onClick:function(){a(!t)},role:"button"},n.createElement("div",{className:t?"mHeader-module--close-active--1zALV":"mHeader-module--close-off--1-nuD"})),t&&n.createElement("div",{className:"mHeader-module--top-menu--1kKFv"},n.createElement("ul",null,o.map((function(e){return n.createElement("li",{key:e.key},n.createElement(l.rU,{to:e.to},e.title),n.createElement("div",{className:"mHeader-module--divider--31zPb"}))}))))))}},8345:function(e,t,a){"use strict";var n=a(7294);t.Z=function(){return n.createElement("footer",{className:"linear-bg"})}},6684:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),l=a(5444),r=[{key:"Home",title:"首页",to:"/"},{key:"Blog",title:"笔记",to:"/blog"},{key:"Works",title:"练习",to:"/works"}];var o=function(e){return n.createElement("header",{className:"topnav-module--top-nav--3H5jB"},n.createElement("div",{className:"linear-bg"}),n.createElement("div",{className:"topnav-module--nav-bar--2U4uD"},n.createElement("ul",null,r.map((function(t){return n.createElement("li",{key:t.key,className:e.active===t.key?"topnav-module--li-active--vd_oh":null},n.createElement(l.rU,{to:t.to},t.title,n.createElement("span",{className:"topnav-module--title-en--1Av9d"}," / ",t.key)))})))))}},5603:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),l=a(6684),r=a(1422),o=a(8345),c=a(7720);var i=function(e){var t=this,a=e.data,i=(0,n.useState)(!1),m=i[0],s=i[1],d=(0,n.useState)(""),u=d[0],v=d[1],w=a.works.frontmatter,E=w.images.split(","),p=(0,c.EY)(),k=function(e){p||(v(e),s(!0))};return n.createElement("div",{className:"page"},n.createElement("title",null,"Blog - My Space"),p?n.createElement(r.Z,null):n.createElement(l.Z,null),n.createElement("main",{className:"work-module--main-works--3KSJC"},n.createElement("div",{className:"work-module--works-container--1bjix"},n.createElement("h3",{className:"work-module--works-title--3JLGZ"},w.title),n.createElement("div",{className:"work-module--works-desc--3FyFi"},w.desc),n.createElement("div",{className:"work-module--works-tags--2f6Kw"},"标签: ",w.techs.replace(/,/g,", ")),n.createElement("div",{className:"work-module--works-imgs--3aLkm"},n.createElement("ul",null,E.map((function(e){return n.createElement("li",{key:e,onClick:k.bind(t,e)},n.createElement("img",{src:"/images/"+e,alt:"works"}))}))))),n.createElement("div",{className:"mask"+(m?"":" mask-hidden"),onClick:function(e){p||"IMG"!==e.target.nodeName&&s(!1)},role:"dialog"},n.createElement("div",{className:"pic-container"},n.createElement("div",{className:"pic-border"},n.createElement("div",{className:"close"},n.createElement("svg",{t:"1588043317665",className:"icon",viewBox:"0 0 1027 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1447",width:"24",height:"24"},n.createElement("path",{d:"M926.04967852 879.09971899l-366.57303359-366.57303359 366.5730336-366.5730336c12.64044946-12.64044946 12.64044946-33.70786523 0-46.3483147s-33.70786523-12.64044946-46.3483147 0l-366.5730336 366.5730336-366.5730336-366.5730336c-12.64044946-12.64044946-33.70786523-12.64044946-46.3483147 0-12.64044946 12.64044946-12.64044946 33.70786523 0 46.3483147l366.5730336 366.5730336-366.5730336 366.57303359c-8.42696631 8.42696631-12.64044946 21.06741578-8.4269663 33.70786524 4.21348315 12.64044946 16.85393261 21.06741578 29.49438208 21.06741577 8.42696631 0 16.85393261-4.21348315 21.06741576-8.42696631l366.5730336-366.5730336 366.57303361 366.5730336c4.21348315 4.21348315 12.64044946 8.42696631 21.06741578 8.42696631 12.64044946 0 25.28089893-8.42696631 29.49438207-21.06741577 8.42696631-12.64044946 8.42696631-25.28089893 0-33.70786524z","p-id":"1448",fill:"#ee9ca7"}))),n.createElement("div",{className:"corner corner-lt"}),n.createElement("div",{className:"corner corner-tl"}),n.createElement("div",{className:"corner corner-rb"}),n.createElement("div",{className:"corner corner-br"}),n.createElement("div",{className:"pic"},n.createElement("img",{src:"/images/"+u,alt:"img"})))))),!p&&n.createElement(o.Z,null))}},7720:function(e,t){t.Vs=function(e){return e>999?"999+":e+""},t.EY=function(){return navigator.userAgent.toLowerCase().match(/(ipad|ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i)},t.AD=function(){var e,t=navigator.userAgent.toLowerCase();e="/"===window.location.pathname?"":window.location.pathname;var a=t.match(/(ipad|ipod|iphone os|midp|ucweb|android|windows ce|windows mobile)/i),n=/^\/m\/*.*$/i.test(window.location.pathname);a&&!n?window.location.href=window.location.origin+"/m"+e+window.location.search:!a&&n&&(window.location.href=window.location.origin+window.location.pathname.replace("/m","")+window.location.search)}},7446:function(e,t,a){"use strict";t.Z=a.p+"static/avatar-a245f5a141ee7672fd4950d820091a5b.jpeg"}}]);
//# sourceMappingURL=component---src-templates-works-detail-js-9bbad1f3a1566dd7fbdc.js.map