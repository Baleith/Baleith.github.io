(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(0),o=a.n(r),l=a(4),c=a(167),s=a.n(c),d=function(e){var t=e.contactActive,a=e.onClick;return o.a.createElement("aside",{id:"aside-right",className:s.a.container,onClick:a,onKeyPress:a,role:"button",tabIndex:0},o.a.createElement("span",{className:(t?s.a.active:s.a.inActive)+" "+s.a.span},"kontakt"))};d.propTypes={contactActive:l.bool.isRequired,onClick:l.func.isRequired};var u=a(169),m=a.n(u),p=function(e){var t=e.aboutActive,a=e.contactActive,n=e.onClick,i=t||a;return o.a.createElement("div",{id:"top",className:m.a.top,onClick:n,onKeyPress:n,role:"button",tabIndex:0},o.a.createElement("span",{className:(i?m.a.inActive:m.a.active)+" "+m.a.span},"Välkommen"))};p.propTypes={contactActive:l.bool.isRequired,aboutActive:l.bool.isRequired,onClick:l.func.isRequired};var v=a(173),g=a(152),b=a(171),f=a.n(b),h=function(){return o.a.createElement("div",{id:"bottom",className:f.a.container},o.a.createElement(v.b.Provider,{value:{className:f.a.arrow}},o.a.createElement("div",null,o.a.createElement(g.a,null))))},E=a(174),k=a.n(E),y=a(178),C=a(176),N=a.n(C),w=function(e){var t=e.isOpen;function a(){window.location.href="mailto:jonathan.j.nilsson@gmail.com"}return o.a.createElement("div",{id:"contact",className:N.a.container+" "+(t?N.a.isOpening:N.a.isClosing)},o.a.createElement("div",{className:N.a.titleContainer},o.a.createElement("h1",{className:N.a.title},"Kontakta mig")),o.a.createElement("div",{className:N.a.bodyContainer},o.a.createElement("p",{className:N.a.body},"Vad trevligt att du vill prata med mig."),o.a.createElement("p",{className:N.a.body},"Det gör du enklast över mail,"),o.a.createElement("p",{className:N.a.body},"eller på LinkedIn."),o.a.createElement("div",{className:N.a.linksContainer},o.a.createElement("div",{className:N.a.mailContainer,onClick:a,onKeyPress:a,role:"button",tabIndex:0},o.a.createElement(v.b.Provider,{value:{className:N.a.mail}},o.a.createElement("div",null,o.a.createElement(y.a,null)))),o.a.createElement("div",{className:N.a.linkedInContainer},o.a.createElement("a",{href:"https://www.linkedin.com/in/jonathan-nilsson-263b70153/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(v.b.Provider,{value:{className:N.a.linkedin}},o.a.createElement("div",null,o.a.createElement(y.b,null))))))))};w.propTypes={isOpen:l.bool.isRequired};a(179);var x=a(181),A=a.n(x),j=function(e){var t=e.isOpen;return o.a.createElement("div",{className:A.a.container+" "+(t?A.a.isOpening:A.a.isClosing)},o.a.createElement("div",{className:A.a.titleContainer},o.a.createElement("h1",{className:A.a.title},"Hej,")),o.a.createElement("div",{className:A.a.bodyContainer},o.a.createElement("div",{className:A.a.openerText},o.a.createElement("p",{className:A.a.italic},"Jag heter ",o.a.createElement("span",{className:A.a.bold},"Jonathan Nilsson")),o.a.createElement("p",{className:A.a.italic},"Jag letar efter en ",o.a.createElement("span",{className:A.a.bold},"kul")," och ",o.a.createElement("span",{className:A.a.bold},"lärorik")," arbetsplats.")),o.a.createElement("p",{className:A.a.body},"Jag är en självlärd utvecklare som tycker det är kul att koda både backend och frontend."),o.a.createElement("p",{className:A.a.body},"Mitt mål är att jag ska kunna röra mig självsäkert över hela stacken.")))};j.propTypes={isOpen:l.bool.isRequired};var q=a(183),R=a.n(q),T=function(e){var t=e.aboutActive,a=e.contactActive,n=t||a;return o.a.createElement("div",{className:R.a.container+" "+(n?R.a.isClosing:R.a.isOpening)},o.a.createElement("div",{className:R.a.wrapper},o.a.createElement("h1",{className:R.a.h1},o.a.createElement("span",{className:R.a.span1}),o.a.createElement("span",{className:R.a.span2}),o.a.createElement("span",{className:R.a.span3}),o.a.createElement("span",{className:R.a.span4}),o.a.createElement("span",{className:R.a.span5}),"HEJ.")),o.a.createElement("p",{className:R.a.inProgress},"Responsiv design - in progress!"))};T.propTypes={contactActive:l.bool.isRequired,aboutActive:l.bool.isRequired};var P=function(e){var t=e.contactActive,a=e.aboutActive;return o.a.createElement("div",{id:"landing",className:k.a.container},o.a.createElement(j,{isOpen:a}),o.a.createElement(T,{aboutActive:a,contactActive:t}),o.a.createElement(w,{isOpen:t}))};P.propTypes={aboutActive:l.bool.isRequired,contactActive:l.bool.isRequired};var O=a(143),L=(a(48),a(154)),S=a.n(L),I=(a(186),a(188),a(189)),M=a.n(I),_=function(e){var t=e.tags.map(function(e,t){return o.a.createElement("li",{key:t.toString()},o.a.createElement("span",{className:M.a.span},e))});return o.a.createElement("ul",{className:M.a.ul},t)};_.propTypes={tags:Object(l.arrayOf)(l.string).isRequired};a(191);var H=a(192),K=a.n(H),F=function(e){var t=e.url,a=e.name;return o.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:K.a.bttn},a)};F.propTypes={url:l.string.isRequired,name:l.string.isRequired};var J=a(194),G=a.n(J),B=function(e){return o.a.createElement("div",{className:"even"===e.type?G.a.even:G.a.odd},o.a.createElement("div",{className:G.a.divider+" "+G.a.dividerFirst}),o.a.createElement("div",{className:G.a.divider+" "+G.a.dividerMiddle}),o.a.createElement("div",{className:G.a.divider+" "+G.a.dividerLast}))},V=function(e){var t=e.data,a=t.git,n=t.url,i=t.img,r=t.title,l=t.desc,c=t.tags;return o.a.createElement("div",{className:S.a.even+" "+S.a.projectContainer},o.a.createElement("div",{className:S.a.previewContainer},o.a.createElement("div",{className:S.a.imgContainer},o.a.createElement("img",{className:S.a.img,src:i,alt:"ds"}),o.a.createElement("div",{className:S.a.linksContainer},o.a.createElement(F,{url:a,name:"</Källa>"}),n?o.a.createElement(F,{url:n,name:"Besök"}):null)),o.a.createElement("div",{className:S.a.title},o.a.createElement("h2",{className:S.a.h2},r,o.a.createElement("span",{className:S.a.lastLetter},"."))),o.a.createElement("div",{className:S.a.body},o.a.createElement("p",{className:S.a.p},l)),o.a.createElement("div",{className:S.a.tagContainer},o.a.createElement(_,{tags:c}))),o.a.createElement("div",{className:S.a.dividerContainer},o.a.createElement(B,{type:"even"})))};V.propTypes={data:Object(l.shape)({img:l.string.isRequired,title:l.string.isRequired,url:l.string,git:l.string.isRequired,desc:l.string.isRequired,tags:Object(l.arrayOf)(l.string).isRequired}).isRequired};var Y=function(e){var t=e.data,a=t.git,n=t.url,i=t.img,r=t.title,l=t.desc,c=t.tags;return o.a.createElement("div",{className:S.a.odd+" "+S.a.projectContainer},o.a.createElement("div",{className:S.a.previewContainer},o.a.createElement("div",{className:S.a.title},o.a.createElement("h2",{className:S.a.h2},r)),o.a.createElement("div",{className:S.a.imgContainer},o.a.createElement("img",{className:S.a.img,src:i,alt:"project"}),o.a.createElement("div",{className:S.a.linksContainer},o.a.createElement(F,{url:a,name:"</Källa>"}),n?o.a.createElement(F,{url:n,name:"Besök"}):null)),o.a.createElement("div",{className:S.a.body},o.a.createElement("p",{className:S.a.p},l)),o.a.createElement("div",{className:S.a.tagContainer},o.a.createElement(_,{tags:c}))),o.a.createElement("div",{className:S.a.dividerContainer},o.a.createElement(B,{type:"odd"})))};Y.propTypes={data:Object(l.shape)({img:l.string.isRequired,title:l.string.isRequired,url:l.string,git:l.string.isRequired,desc:l.string.isRequired,tags:Object(l.arrayOf)(l.string).isRequired}).isRequired};var D=function(e){var t=e.data;return t.id%2?o.a.createElement(V,{data:t}):o.a.createElement(Y,{data:t})};D.propTypes={data:Object(l.shape)({id:l.number.isRequired,img:l.string.isRequired,title:l.string.isRequired,url:l.string,git:l.string.isRequired,desc:l.string.isRequired,tags:Object(l.arrayOf)(l.string).isRequired}).isRequired};var Q=a(196),U=a.n(Q),W=a(197),X=a.n(W),Z=a(198),z=a.n(Z),$=a(199),ee=a.n($),te=a(200),ae=a.n(te),ne=a(201),ie=[{id:0,url:"https://baleith.github.io/",git:"https://github.com/Baleith/Portfolio/tree/master",title:"Portfolio",img:a.n(ne).a,desc:"Den här sidan är utvecklad i React(Gatsby). Css är strukturerad med css-modules.",tags:["React","Gatsby","Css-modules","Scss"]},{id:1,url:"https://matforgiftad.se/",git:"https://bitbucket.org/Baleith/public-matforgiftad/src/master/",title:"Matförgiftad",img:z.a,desc:"En tjänst för att anmäla en misstänkt matförgiftning. Fyll i ett detaljerat formulär så hjälp vi dig att maila den ansvariga instansen i relevant kommun. Kodad i Laravel och Vue.js.",tags:["Vue.js","PHP","Laravel","Scss"]},{id:2,url:"https://tillnyktrad.se/",git:"https://bitbucket.org/Baleith/share-alkohol/src/master/",title:"Tillnyktrad",img:X.a,desc:"En alkoholförbrännings räknare byggd i Laravel och Vue.js. Med sökfunktion över hela systembolagets sortiment som hämtas över deras offentliga api.",tags:["Vue.js","PHP","Laravel","Scss"]},{id:3,url:"https://www.bostader.se/",git:"https://bitbucket.org/Baleith/share-styrbostad/src/master/",title:"Styrbostad",img:U.a,desc:"Samlingsida för hyreslägenheter. Lägenheterna samlas in med hjälp av en headless crawler i node.js, skrapar totalt ett 30tal bostadssidor. Utöver node.js så är backend byggd i Laravel och Vue.js för frontend.",tags:["Vue.js","PHP","Laravel","Node","PhantomJS"]},{id:4,url:null,git:"https://bitbucket.org/Baleith/footboll-api/src/master/",title:"Fotbolls vm",img:ae.a,desc:"Ett api över fotbolls vm med inlogg över OAuth2. Endpoints för bl.a lägga till och uppdatera matchresultat/lag/spelare, hämta hem spelare/lag utefter t.ex grupper, mål, utvisningar.",tags:["PHP","Laravel","REST","OAuth2"]},{id:5,url:null,git:"https://bitbucket.org/Baleith/share-hypedgamers/src/master/",title:"Hypedgamers",img:ee.a,desc:"Social gaming community, ungerfär som youtube fast för gaming. Utvecklad i Laravel. Features som uppladdning av bilder/video, inloggning, filtrering, upvoting, kommentering.  ",tags:["PHP","Laravel","JavaScript","JQuery","Scss"]}],re=a(202),oe=a.n(re),le=function(){var e=ie.map(function(e){return o.a.createElement(D,{data:e,key:e.id})});return o.a.createElement("div",{id:"projects",className:oe.a.container},o.a.createElement("h1",{className:oe.a.h1},o.a.createElement("span",{className:oe.a.span}),"Projects"),e)},ce=(a(204),a(206)),se=a.n(ce),de=function(e){var t=e.onClick;return o.a.createElement("footer",{id:"footer",className:se.a.footer},o.a.createElement("button",{title:"Back to top",className:se.a.scroll,onClick:t,type:"button"},o.a.createElement(v.b.Provider,{value:{className:se.a.arrow}},o.a.createElement("div",null,o.a.createElement(g.b,null)))))};de.propTypes={onClick:l.func.isRequired};var ue=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={intervalId:0},t}i()(t,e);var a=t.prototype;return a.scrollStep=function(){var e=this.state.intervalId;0===window.pageYOffset&&clearInterval(e),window.scroll(0,window.pageYOffset-50)},a.scrollToTop=function(){var e=setInterval(this.scrollStep.bind(this),16.66);this.setState({intervalId:e})},a.render=function(){var e=this;return o.a.createElement(de,{onClick:function(){e.scrollToTop()}})},t}(o.a.Component),me=a(208),pe=a.n(me),ve=function(e){var t=e.aboutActive,a=e.onClick;return o.a.createElement("aside",{id:"aside-left",className:pe.a.container,onClick:a,onKeyPress:a,role:"button",tabIndex:0},o.a.createElement("span",{className:(t?pe.a.active:pe.a.inActive)+" "+pe.a.span},"Om",o.a.createElement("span",{className:pe.a.hidden},"x"),"mig"))};ve.propTypes={aboutActive:l.bool.isRequired,onClick:l.func.isRequired},a.d(t,"default",function(){return ge});var ge=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={aboutActive:!1,contactActive:!1},t.handleClickAbout=function(){t.setState(function(e){return{contactActive:!1,aboutActive:!e.aboutActive}})},t.handleClickContact=function(){t.setState(function(e){return{aboutActive:!1,contactActive:!e.contactActive}})},t.handleClickHome=function(){t.setState({aboutActive:!1,contactActive:!1})},t}return i()(t,e),t.prototype.render=function(){var e=this.state,t=e.aboutActive,a=e.contactActive;return o.a.createElement(O.a,null,o.a.createElement(ve,{aboutActive:t,onClick:this.handleClickAbout}),o.a.createElement(p,{aboutActive:t,contactActive:a,onClick:this.handleClickHome}),o.a.createElement(d,{contactActive:a,onClick:this.handleClickContact}),o.a.createElement(P,{contactActive:a,aboutActive:t}),o.a.createElement(h,null),o.a.createElement(le,null),o.a.createElement(ue,null))},t}(r.Component)},141:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return v}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(139),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var s=a(141),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var u=a(35);a.d(t,"parsePath",function(){return u.a});var m=i.a.createContext({}),p=function(e){return i.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function v(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(e,t,a){"use strict";var n=a(144),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(150),s=a.n(c),d=a(142),u=(a(146),function(e){var t=e.children;return r.a.createElement(d.StaticQuery,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{id:"app"},t))},data:n})});u.propTypes={children:l.a.node.isRequired},t.a=u},144:function(e){e.exports={data:{site:{siteMetadata:{title:"Jonathan Nilsson"}}}}},145:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),o=a.n(r),l=a(52),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},146:function(e,t,a){},154:function(e,t,a){e.exports={projectContainer:"project-module--projectContainer--3WD0O",dividerContainer:"project-module--dividerContainer--10PYW",imgContainer:"project-module--imgContainer--3Qsz8",img:"project-module--img--19vnZ",linksContainer:"project-module--linksContainer--1Dlc4",title:"project-module--title--vou2H",body:"project-module--body--3uMYc",tagContainer:"project-module--tagContainer--f2Cn3",odd:"project-module--odd--12j8P",previewContainer:"project-module--previewContainer--3kjA9",even:"project-module--even--1p2ML"}},167:function(e,t,a){e.exports={container:"contact-module--container--2CNEj",navText:"contact-module--navText--e-SDn",span:"contact-module--span--2SiXc contact-module--navText--e-SDn",active:"contact-module--active--oA_XL",inActive:"contact-module--inActive--3pyuk"}},169:function(e,t,a){e.exports={top:"home-module--top--1llpT",span:"home-module--span--2QZ-5 _util--navText--2_TYG",active:"home-module--active--1_-S2",inActive:"home-module--inActive--8R17G"}},171:function(e,t,a){e.exports={container:"bottom-module--container--qOen_",arrow:"bottom-module--arrow--1jDFm",bounce:"bottom-module--bounce--2T8eP"}},174:function(e,t,a){e.exports={container:"landing-module--container--3PL32"}},176:function(e,t,a){e.exports={container:"contact-module--container--18upe",isClosing:"contact-module--isClosing--1cV3K",isOpening:"contact-module--isOpening--2vLDB",titleContainer:"contact-module--titleContainer--2Y4JJ",title:"contact-module--title--Lkl01 _util--crossedText--3AkAN",bodyContainer:"contact-module--bodyContainer--Af8ib",body:"contact-module--body--1t27t",mailContainer:"contact-module--mailContainer--3x3K4",mail:"contact-module--mail--nh9Ka",linkedin:"contact-module--linkedin--3OirC",linksContainer:"contact-module--linksContainer--3CYoF"}},181:function(e,t,a){e.exports={container:"about-module--container--1RY1j",isClosing:"about-module--isClosing--u6X5d",isOpening:"about-module--isOpening--1Qir9",titleContainer:"about-module--titleContainer--2Ywqu",title:"about-module--title--3NeWk _util--crossedText--3AkAN",bodyContainer:"about-module--bodyContainer--3Y-gO",italic:"about-module--italic--2TFmx",bold:"about-module--bold--VWMIR _util--crossedText--3AkAN",openerText:"about-module--openerText--2ykKP",body:"about-module--body--37W9-",h2:"about-module--h2--39fLI"}},183:function(e,t,a){e.exports={container:"welcome-text-module--container--2WtkZ",h1:"welcome-text-module--h1--3UPYK",isOpening:"welcome-text-module--isOpening--tme0g",isClosing:"welcome-text-module--isClosing--3Ixbp",span1:"welcome-text-module--span1--1cM2_",span2:"welcome-text-module--span2--7qyo1",span3:"welcome-text-module--span3--32Aow",span4:"welcome-text-module--span4--2aHud",span5:"welcome-text-module--span5--3E-qb",rotation3:"welcome-text-module--rotation3--20ZjW",rotation4:"welcome-text-module--rotation4--w-tEZ",rotation5:"welcome-text-module--rotation5--35cuZ",rotation6:"welcome-text-module--rotation6--1C0wJ",rotation7:"welcome-text-module--rotation7--3UcIk",rotation8:"welcome-text-module--rotation8--GV6e0",rotation9:"welcome-text-module--rotation9--2Fcd5",rotation10:"welcome-text-module--rotation10--2_duf",wrapper:"welcome-text-module--wrapper--2B5H8",inProgress:"welcome-text-module--inProgress--s5DkM"}},189:function(e,t,a){e.exports={ul:"tagList-module--ul--2kAuA",span:"tagList-module--span--3wVb9 _util--lightGrayText--2AvU4"}},192:function(e,t,a){e.exports={span:"anchor-module--span--1r2dG",a:"anchor-module--a--YrrX8",btn:"anchor-module--btn--3tkv8",first:"anchor-module--first--2-mz8",bttn:"anchor-module--bttn--MwT7M _util--mainBackgroundColorGreen--HprIc"}},194:function(e,t,a){e.exports={divider:"divider-module--divider--2LH5- undefined",dividerFirst:"divider-module--dividerFirst--3FHfF",dividerMiddle:"divider-module--dividerMiddle--Vx-us",dividerLast:"divider-module--dividerLast--4mW7P",odd:"divider-module--odd--Di0oF",even:"divider-module--even--2HQvM"}},196:function(e,t,a){e.exports=a.p+"static/styrbostsad-69a888130ed9674d622ad92598841a7f.jpg"},197:function(e,t,a){e.exports=a.p+"static/tillnyktrad-b90e99bfb81a67c83d1cd8bda324027b.jpg"},198:function(e,t,a){e.exports=a.p+"static/matforgiftad-c6ff542b7c2362bcc2cb98fbc732a68b.jpg"},199:function(e,t,a){e.exports=a.p+"static/hyped-33be62437a11f10492d70c0d0a42bea2.jpg"},200:function(e,t,a){e.exports=a.p+"static/fotboll-855298ca38b9bbf79c1f18a9d9606bed.jpg"},201:function(e,t,a){e.exports=a.p+"static/portfolio-0aa39b8172906293835ad95e97867f86.jpg"},202:function(e,t,a){e.exports={container:"projects-module--container--3odt5 undefined",h1:"projects-module--h1--2KPME",span:"projects-module--span--3_c5x _util--crossedText--3AkAN"}},206:function(e,t,a){e.exports={footer:"footer-module--footer--1X1DK",scroll:"footer-module--scroll--1zULJ",arrow:"footer-module--arrow--1nCqR"}},208:function(e,t,a){e.exports={container:"about-module--container--2Kwbh",hidden:"about-module--hidden--35B5K",span:"about-module--span--DIIMt _util--navText--2_TYG",active:"about-module--active--36oGX",inActive:"about-module--inActive--sTjaM"}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-244b45298fb8f9d68665.js.map