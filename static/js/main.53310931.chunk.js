(this["webpackJsonpstar-wars-explorer"]=this["webpackJsonpstar-wars-explorer"]||[]).push([[0],Array(23).concat([function(e,a,t){e.exports=t.p+"static/media/ewok.7783a166.svg"},,,,function(e,a,t){e.exports=t(81)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/darth-vader.416eea40.png"},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/male.a002fca4.svg"},function(e,a,t){e.exports=t.p+"static/media/female.bee40cff.svg"},function(e,a,t){},,,,,,,,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/admiral-ackbar.7c490d30.svg"},function(e,a,t){e.exports=t.p+"static/media/boba-fett.2f2b2e27.svg"},function(e,a,t){e.exports=t.p+"static/media/c3p0.b583f44b.svg"},function(e,a,t){e.exports=t.p+"static/media/chewbacca.92969fb7.svg"},function(e,a,t){e.exports=t.p+"static/media/clone-trooper.8dd121d2.svg"},function(e,a,t){e.exports=t.p+"static/media/darth-maul.e5c6747c.svg"},function(e,a,t){e.exports=t.p+"static/media/darth-vader.62fd30a9.svg"},function(e,a,t){e.exports=t.p+"static/media/emperor-palpatine.4d0bec89.svg"},function(e,a,t){e.exports=t.p+"static/media/greedo.c91254bc.svg"},function(e,a,t){e.exports=t.p+"static/media/han-solo.443c155f.svg"},function(e,a,t){e.exports=t.p+"static/media/jabba-the-hutt.54bd5058.svg"},function(e,a,t){e.exports=t.p+"static/media/jango-fett.a06f3b71.svg"},function(e,a,t){e.exports=t.p+"static/media/jawa.08dbce77.svg"},function(e,a,t){e.exports=t.p+"static/media/lando-calrissian.994cd2eb.svg"},function(e,a,t){e.exports=t.p+"static/media/luke-skywalker.3f170e84.svg"},function(e,a,t){e.exports=t.p+"static/media/obiwan-kenobi.ecaabf76.svg"},function(e,a,t){e.exports=t.p+"static/media/princess-leia.356346ce.svg"},function(e,a,t){e.exports=t.p+"static/media/qui-gon-jinn.80a24ae8.svg"},function(e,a,t){e.exports=t.p+"static/media/r2d2.faa1256d.svg"},function(e,a,t){e.exports=t.p+"static/media/red-five.939e1f12.svg"},function(e,a,t){e.exports=t.p+"static/media/stormtrooper.76b51338.svg"},function(e,a,t){e.exports=t.p+"static/media/tusken-raider.b738872d.svg"},function(e,a,t){e.exports=t.p+"static/media/yoda.8ba1cf66.svg"},,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(7),s=t.n(c),l=t(26),o=t(13),i=t(8),m=t(9),u=t(10),d=t(11),f=t(12),h=(t(32),function(e){return n.a.createElement("div",{className:"overflow-y-hidden"},n.a.createElement("div",{id:"stars"}),n.a.createElement("div",{id:"stars2"}),n.a.createElement("div",{id:"stars3"}),n.a.createElement("div",{id:"stars4"}),e.children)}),p=(t(33),function(){return n.a.createElement(h,null,n.a.createElement("div",{className:"loading heading-star-wars-font blinking flex justify-end items-end pa4"},"Loading..."))}),v=(t(34),function(){return n.a.createElement("div",{className:"title-container vh-100 tc heading-star-wars-font yellow relative"},n.a.createElement("div",{className:"title dib animated zoomIn slower"},"Star Wars",n.a.createElement("br",null),"Explorer"),n.a.createElement("div",{className:"title-mobile animated fadeInDownBig slow"},"Star Wars",n.a.createElement("br",null),"Explorer"),n.a.createElement("img",{className:"darth-vader-image relative",src:t(35),alt:"Darth Vader"}))}),g=(t(36),function(e){var a=e.resourceTitle,t=e.resourceCount,r=e.handleSearchChange;return n.a.createElement("div",{className:"heading dib tc mb3 mt5 flex justify-center items-center"},n.a.createElement("div",{className:"resource-info flex flex-column pa3 br4"},n.a.createElement("h1",{className:"resource-title tc dib ma0 mb2 heading-star-wars-font f1"},a),n.a.createElement("h2",{className:"resource-count tc dib ma0"},t)),n.a.createElement("input",{className:"search-input pa2 f4",type:"search",placeholder:"Find ".concat(a),onChange:r,"data-id":"".concat(a,"-search")}))}),E=(t(37),t(38),function(e){return n.a.createElement("div",{className:"card-wrapper dib br3 pa3 ma2 ttc"},e.children)}),b=function(e){var a=e.index,r=e.resourceData,c=e.resourceObject;return n.a.createElement("div",{className:"resource relative"},n.a.createElement("div",{className:"mb3"},n.a.createElement("h1",{className:"name di"},c.name),"n/a"===c.gender?"":function(e){switch(e){case"male":return n.a.createElement("img",{className:"gender-icon male",src:t(39),alt:"Male"});case"female":return n.a.createElement("img",{className:"gender-icon female",src:t(40),alt:"Female"})}}(c.gender)),n.a.createElement("div",{className:"attributes flex"},n.a.createElement("div",null,n.a.createElement("h1",null,"height"),n.a.createElement("h2",{className:"ttl"},c.height/100," m"),n.a.createElement("h1",null,"mass"),n.a.createElement("h2",{className:"ttn"},"unknown"===c.mass?"Unknown":"".concat(c.mass," kg")),n.a.createElement("h1",null,"skin"),n.a.createElement("h2",null,c.skin_color)),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",null,n.a.createElement("h1",null,"eyes; hair"),n.a.createElement("h2",null,"".concat(c.eye_color,"; ").concat(c.hair_color)),n.a.createElement("h1",null,"birth year"),n.a.createElement("h2",null,c.birth_year),n.a.createElement("h1",null,"homeworld"),n.a.createElement("h2",null,r[1][c.homeworld-1].name)),n.a.createElement("h3",{className:"number"},a+1)))},w=function(e){var a=e.index,t=e.resourceObject;return n.a.createElement("div",{className:"resource relative"},n.a.createElement("h1",{className:"name"},t.name),n.a.createElement("div",{className:"attributes flex"},n.a.createElement("div",null,n.a.createElement("h1",null,"rotation period"),n.a.createElement("h2",{className:"ttl"},t.rotation_period," hrs"),n.a.createElement("h1",null,"orbital period"),n.a.createElement("h2",{className:"ttl"},t.orbital_period," days"),n.a.createElement("h1",null,"diameter"),n.a.createElement("h2",{className:"ttl"},t.diameter," m"),n.a.createElement("h1",null,"climate"),n.a.createElement("h2",null,t.climate)),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",null,n.a.createElement("h1",null,"gravity"),n.a.createElement("h2",{className:"ttl"},t.gravity),n.a.createElement("h1",null,"terrain"),n.a.createElement("h2",null,t.terrain),n.a.createElement("h1",null,"surface water"),n.a.createElement("h2",null,t.surface_water,"%"),n.a.createElement("h1",null,"population"),n.a.createElement("h2",null,t.population))),n.a.createElement("h3",{className:"number"},a+1))},N=function(e){var a=e.index,t=e.resourceData,r=e.resourceObject;return n.a.createElement("div",{className:"reosurce relative"},n.a.createElement("h1",{className:"name species-name"},r.name),n.a.createElement("div",{className:"attributes flex"},n.a.createElement("div",null,n.a.createElement("h1",null,"classification"),n.a.createElement("h2",null,r.classification),n.a.createElement("h1",null,"average height"),n.a.createElement("h2",{className:"ttn"},"n/a"===r.average_height?"N/A":"".concat(r.average_height/100," m")),n.a.createElement("h1",null,"hair"),n.a.createElement("h2",null,r.hair_colors),n.a.createElement("h1",null,"skin"),n.a.createElement("h2",null,r.skin_colors)),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",null,n.a.createElement("h1",null,"eyes"),n.a.createElement("h2",null,r.eye_colors),n.a.createElement("h1",null,"Average lifespan"),n.a.createElement("h2",{className:"ttn"},"unknown"===r.average_lifespan?"Unknown":"indefinite"===r.average_lifespan?"Indefinite":"".concat(r.average_lifespan," years")),n.a.createElement("h1",null,"Language"),n.a.createElement("h2",null,r.language),n.a.createElement("h1",null,"Homeworld"),n.a.createElement("h2",null,"number"===typeof r.homeworld?t[1][r.homeworld-1].name:r.homeworld))),n.a.createElement("h3",{className:"number"},a+1))},k=function(e){var a=e.index,t=e.resourceTitle,r=e.resourceData,c=e.resourceObject;switch(t){case"people":return n.a.createElement(E,null,n.a.createElement(b,{index:a,resourceData:r,resourceObject:c}));case"planets":return n.a.createElement(E,null,n.a.createElement(w,{index:a,resourceObject:c}));case"species":return n.a.createElement(E,null,n.a.createElement(N,{index:a,resourceData:r,resourceObject:c}))}},x=function(e){return n.a.createElement("div",{className:"overflow-y-scroll vh-75"},e.children)},y=function(e){Object(f.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).state={hasError:!1},e}return Object(m.a)(t,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",{className:"tc"},"Error"):this.props.children}}]),t}(n.a.Component),_=function(e){var a=e.resourceTitle,t=e.resourceData,r=e.filteredResourceData;return 0===e.resourceCount?n.a.createElement("div",{className:"no-results tc ma0 f2 silver serif"},"no ".concat(a," found")):n.a.createElement(x,null,n.a.createElement(y,null,n.a.createElement("div",{className:"flex justify-center content-start flex-wrap pl6 pr6"},r[function(e){return"people"===e?0:"planets"===e?1:"species"===e?2:void 0}(a)].map((function(e,r){return n.a.createElement(k,{key:r,index:r,resourceTitle:a,resourceData:t,resourceObject:e})})))))},j=function(e){var a=e.resourceTitle,t=e.resourceData,r=e.filteredResourceData,c=e.resourceCount,s=e.handleSearchChange;return n.a.createElement("div",{className:"resource-page vh-100"},n.a.createElement(g,{resourceTitle:a,filteredResourceData:r,resourceCount:c,handleSearchChange:s}),n.a.createElement(_,{resourceTitle:a,resourceData:t,filteredResourceData:r,resourceCount:c}))},C=(t(41),t(1)),S=function(e){return n.a.createElement(h,null,n.a.createElement(C.Link,{className:"home-icon menu-icon material-icons animated fadeInLeftBig slower",to:"home",activeClass:"active",spy:!0,smooth:!0,offset:0,duration:500},"home"),n.a.createElement(C.Link,{className:"info-icon menu-icon material-icons animated fadeInLeftBig slower",onClick:e.scrollToBottom,to:"footer",smooth:!0,offset:0,duration:500},"info"),n.a.createElement(C.Link,{className:"people-icon menu-icon material-icons animated fadeInDownBig slower",to:"people",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},"account_circle"),n.a.createElement(C.Link,{className:"planets-icon menu-icon material-icons animated fadeInDownBig slower",to:"planets",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},"language"),n.a.createElement(C.Link,{className:"species-icon menu-icon material-icons animated fadeInRightBig slower",to:"species",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},"supervisor_account"),n.a.createElement("ul",{className:"left-nav f5"},n.a.createElement("li",{className:"home-link animated fadeInLeftBig slower"},n.a.createElement(C.Link,{className:"left-nav-link",to:"home",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},n.a.createElement("div",{className:"flex items-center mb2 ml2"},n.a.createElement("div",{className:"left-nav-indicator"}),n.a.createElement("span",{className:"left-nav-text"},"Home")))),n.a.createElement("li",{className:"people-link animated fadeInLeftBig slower"},n.a.createElement(C.Link,{className:"left-nav-link",to:"people",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},n.a.createElement("div",{className:"flex items-center mb2 ml2"},n.a.createElement("div",{className:"left-nav-indicator"}),n.a.createElement("span",{className:"left-nav-text"},"people")))),n.a.createElement("li",{className:"planets-link animated fadeInLeftBig slower"},n.a.createElement(C.Link,{className:"left-nav-link",to:"planets",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},n.a.createElement("div",{className:"flex items-center mb2 ml2"},n.a.createElement("div",{className:"left-nav-indicator"}),n.a.createElement("span",{className:"left-nav-text"},"planets")))),n.a.createElement("li",{className:"species-link animated fadeInLeftBig slower"},n.a.createElement(C.Link,{className:"left-nav-link",to:"species",activeClass:"active",spy:!0,smooth:!0,offset:-70,duration:500},n.a.createElement("div",{className:"flex items-center mb2 ml2"},n.a.createElement("div",{className:"left-nav-indicator"}),n.a.createElement("span",{className:"left-nav-text"},"species"))))),e.children)},D=(t(52),t(18)),O=t.n(D),L=function(e,a){return n.a.createElement("img",{className:"footer-icon",src:e(a),width:"60",alt:"Random Star Wars character"})},T=function(e){switch(Math.round(Math.random()*(e.length-1))){case 0:return t(54);case 1:return t(55);case 2:return t(56);case 3:return t(57);case 4:return t(58);case 5:return t(59);case 6:return t(60);case 7:return t(61);case 8:return t(23);case 9:return t(62);case 10:return t(63);case 11:return t(64);case 12:return t(65);case 13:return t(66);case 14:return t(67);case 15:return t(68);case 16:return t(69);case 17:return t(70);case 18:return t(71);case 19:return t(72);case 20:return t(73);case 21:return t(74);case 22:return t(75);case 23:return t(76);default:return t(23)}},B=["../../images/footer/admiral-ackbar.svg","../../images/footer/boba-fett.svg","../../images/footer/c3p0.svg","../../images/footer/chewbacca.svg","../../images/footer/clone-trooper.svg","../../images/footer/darth-maul.svg","../../images/footer/darth-vader.svg","../../images/footer/emperor-palpatine.svg","../../images/footer/ewok.svg","../../images/footer/greedo.svg","../../images/footer/han-solo.svg","../../images/footer/jabba-the-hutt.svg","../../images/footer/jango-fett.svg","../../images/footer/jawa.svg","../../images/footer/lando-calrissian.svg","../../images/footer/luke-skywalker.svg","../../images/footer/obiwan-kenobi.svg","../../images/footer/princess-leia.svg","../../images/footer/qui-gon-jinn.svg","../../images/footer/r2d2.svg","../../images/footer/red-five.svg","../../images/footer/stormtrooper.svg","../../images/footer/tusken-raider.svg","../../images/footer/yoda.svg"],I=function(){return n.a.createElement("div",{className:"flex justify-between items-center pa3 pb1"},n.a.createElement(O.a,{left:!0},n.a.createElement("a",{className:"more-link footer-text-link",href:"https://github.com/christopherstraub",target:"_blank",rel:"noopener noreferrer"},"More by me")),L(T,B),n.a.createElement(O.a,{right:!0},n.a.createElement("a",{className:"api-link footer-text-link",href:"https://github.com/phalt/swapi",target:"_blank",rel:"noopener noreferrer"},"API")))},F=t(24),R=t.n(F),M=t(25),A=t.n(M),W=function(e){Object(f.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(i.a)(this,t),(e=a.call(this)).handleSearchChange=function(a){if("people-search"===a.target.dataset.id){var t=Object(o.a)(e.state.resourceSearch);t[0]=a.target.value,e.setState({resourceSearch:t})}if("planets-search"===a.target.dataset.id){var r=Object(o.a)(e.state.resourceSearch);r[1]=a.target.value,e.setState({resourceSearch:r})}if("species-search"===a.target.dataset.id){var n=Object(o.a)(e.state.resourceSearch);n[2]=a.target.value,e.setState({resourceSearch:n})}},e.state={dataFetched:!1,resourceData:[],resourceSearch:["","",""],urlsToFetch:["https://christopherstraub.github.io/swapi/resources/fixtures/people.json","https://christopherstraub.github.io/swapi/resources/fixtures/planets.json","https://christopherstraub.github.io/swapi/resources/fixtures/species.json"],resourceTitles:["people","planets","species"]},e.handleSearchChange=e.handleSearchChange.bind(Object(u.a)(e)),e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all(this.state.urlsToFetch.map((function(e){return fetch(e).then((function(e){if(200===e.status)return e.json()}))}))).then((function(a){var t=a[0].map((function(e){return e.fields})),r=a[1].map((function(e){return e.fields})),n=a[2].map((function(e){return e.fields}));e.setState({resourceData:[t,r,n]}),e.setState({dataFetched:!0})})).catch((function(e){console.log(e)}))}},{key:"scrollToBottom",value:function(){C.animateScroll.scrollToBottom()}},{key:"render",value:function(){var e=this,a=this.state,t=a.dataFetched,r=a.resourceData,c=a.resourceSearch,s=a.resourceTitles,o=c.map((function(e){return e.toLocaleLowerCase().replace(/\s/g,"").replace(/\./,"")})),i=r.map((function(e,a,t){return e.map((function(e){e.edited,e.created,e.people;var a=Object(l.a)(e,["edited","created","people"]);return void 0!==a.height&&"unknown"!==a.height&&(a.height="".concat(a.height,"m")),void 0!==a.mass&&"unknown"!==a.mass&&(a.mass="".concat(a.mass,"kg")),"number"===typeof a.homeworld?a.homeworld=t[1][a.homeworld-1].name:null===a.homeworld&&(e.homeworld="no homeworld"),void 0!==a.surface_water&&"unknown"!==a.surface_water&&(a.surface_water="".concat(a.surface_water,"%")),void 0!==a.diameter&&"unknown"!==a.diameter&&(a.diameter="".concat(a.diameter,"m")),void 0!==a.rotation_period&&"unknown"!==a.rotation_period&&(a.rotation_period="".concat(a.rotation_period,"hrs")),void 0!==a.orbital_period&&"unknown"!==a.orbital_period&&(a.orbital_period="".concat(a.orbital_period,"days")),void 0!==a.average_lifespan&&"unknown"!==a.average_lifespan&&(a.average_lifespan="".concat(a.average_lifespan,"years")),void 0!==a.average_height&&"unknown"!==a.average_height&&(a.average_height="".concat(a.average_height,"m")),Object.values(a)}))})),m=r.map((function(e,a){return e.filter((function(e,t){return i[a][t].toString().toLocaleLowerCase().replace(/\s/g,"").includes(o[a])}))}));return t?n.a.createElement(S,{scrollToBottom:this.scrollToBottom},n.a.createElement("div",{id:"home"},n.a.createElement(v,null)),s.map((function(a,t){return n.a.createElement(R.a,{key:t,effect:"fadeIn"},n.a.createElement("div",{id:a},n.a.createElement(j,{key:t,resourceTitle:a,resourceData:r,filteredResourceData:m,resourceCount:m[t].length,handleSearchChange:e.handleSearchChange})))})),n.a.createElement(A.a,null,n.a.createElement(I,null))):n.a.createElement(p,null)}}]),t}(r.Component);t(78),t(79),t(80);s.a.render(n.a.createElement(W,null),document.getElementById("root"))}]),[[27,1,2]]]);
//# sourceMappingURL=main.53310931.chunk.js.map