webpackJsonp([1,2],{"/j3P":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(t){return j(O(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("nug2"),c=a(l),u=n("pp5j"),f=a(u),d=n("U7vG"),m=a(d),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=n("QJsr"),b=a(w),v=n("9WgG"),k=a(v),y=n("cqQm"),_=a(y);n("rpem");var E={WorkContent:{displayName:"WorkContent"}},j=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-content.jsx",components:E,locals:[e],imports:[m.default]}),O=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-content.jsx",components:E,locals:[],imports:[m.default,c.default]}),N=s("WorkContent")(function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),g(t,[{key:"renderWorkImage",value:function(){var e=this.props.work.medias[0].images[0].feature_image.url,t=this.props.work.medias[0].images[0].feature_image.title;return m.default.createElement("div",{className:"cover-image"},m.default.createElement("div",{className:"image-container"},m.default.createElement(b.default,{imageUrl:e,alt:t})))}},{key:"renderContentImages",value:function(){return this.props.work.medias[0].images[0].content_images.map(function(e,t){return m.default.createElement("div",{className:"cover-image",key:t},m.default.createElement("div",{className:"image-container"},m.default.createElement(b.default,{imageUrl:e.url,alt:e.title,key:t})))})}},{key:"renderContentVideo",value:function(){var e=this.props.work.medias[0].video;return e?m.default.createElement("div",{className:"cover-video"},m.default.createElement(k.default,{contentVideo:e})):null}},{key:"renderWorkInfo",value:function(){var e=this.props.work;return m.default.createElement(_.default,{workInfo:e})}},{key:"render",value:function(){return m.default.createElement("div",{className:"work-content"},this.renderWorkImage(),this.renderWorkInfo(),this.renderContentImages(),this.renderContentVideo())}}]),t}(m.default.Component));t.default=N}).call(t,n("3IRH")(e))},0:function(e,t,n){n("+prg"),e.exports=n("lVK7")},"7WcC":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(t){return v(k(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("nug2"),c=a(l),u=n("pp5j"),f=a(u),d=n("U7vG"),m=a(d),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=n("CIox");n("quNL"),n("j3kU");var b={Header:{displayName:"Header"}},v=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/header/index.jsx",components:b,locals:[e],imports:[m.default]}),k=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/header/index.jsx",components:b,locals:[],imports:[m.default,c.default]}),y=s("Header")(function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),g(t,[{key:"renderNavItem",value:function(){var e=void 0;switch(window.location.pathname){case"/about":e=m.default.createElement(w.Link,{to:"/",className:"nav-item"},"Work");break;case"/":e=m.default.createElement(w.Link,{to:"/about",className:"nav-item"},"About");break;default:e=m.default.createElement(w.Link,{to:"/",className:"nav-item"},"Back")}return e}},{key:"render",value:function(){return m.default.createElement("header",{className:"header"},m.default.createElement(w.Link,{to:"/",className:"logo"},"Natalia Santos ",m.default.createElement("span",{className:"logo-subtitle"},"Art Director")),m.default.createElement("nav",{className:"nav"},this.renderNavItem()))}}]),t}(m.default.Component));t.default=y}).call(t,n("3IRH")(e))},"9WgG":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(t){return b(v(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("nug2"),c=a(l),u=n("pp5j"),f=a(u),d=n("U7vG"),m=a(d),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("ki4o");var w={WorkVideo:{displayName:"WorkVideo"}},b=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-video.jsx",components:w,locals:[e],imports:[m.default]}),v=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-video.jsx",components:w,locals:[],imports:[m.default,c.default]}),k=s("WorkVideo")(function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={btnIconClass:"is-visible"},e.handleVideoEnded=e.handleVideoEnded.bind(e),e}return r(t,e),g(t,[{key:"vidplay",value:function(){var e=this.refs.workVideo;this.refs.playButton;e.paused?(e.play(),this.setState({btnIconClass:""})):(e.pause(),this.setState({btnIconClass:"is-visible"}))}},{key:"handleVideoEnded",value:function(){this.setState({btnIconClass:"is-visible"})}},{key:"componentDidMount",value:function(){this.refs.workVideo.addEventListener("ended",this.handleVideoEnded,!1)}},{key:"render",value:function(){var e=this,t=this.state.btnIconClass,n=this.props.contentVideo,a=(n.title,n.url),i=n.poster;return m.default.createElement("div",{className:"video-container"},m.default.createElement("video",{id:"workVideo",width:"100%",height:"auto",controls:!0,poster:i,ref:"workVideo"},m.default.createElement("source",{src:a,type:"video/mp4"}),m.default.createElement("source",{src:a,type:"video/ogg"})),m.default.createElement("div",{id:"play",ref:"playButton",className:"play-button",onClick:function(){return e.vidplay()}},m.default.createElement("i",{className:"btn-icon fa fa-play "+t,"aria-hidden":"true"})))}}]),t}(m.default.Component));t.default=k}).call(t,n("3IRH")(e))},FYkg:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(t){return p(h(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("nug2"),r=a(o),s=n("pp5j"),l=a(s),c=n("U7vG"),u=a(c),f=n("xPnc"),d=a(f);n("CIox");n("quNL"),n("TzzK");var m={_component:{}},p=(0,d.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/footer/index.jsx",components:m,locals:[e],imports:[u.default]}),h=(0,l.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/footer/index.jsx",components:m,locals:[],imports:[u.default,r.default]}),g=i("_component")(u.default.createClass({displayName:"Footer",render:function(){return u.default.createElement("footer",{className:"footer wrapper"},u.default.createElement("ul",{className:"social-links"},u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.facebook.com/nnataliasantos"},"Facebook")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.instagram.com/nnatsnts/"},"Instagram")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.behance.net/nnatalia"},"Behance")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.linkedin.com/in/natalia-santos-a8b83834/en"},"Linkedin"))),u.default.createElement("p",{className:"email"},"nnatalia.santos@outlook.com"))}}));t.default=g}).call(t,n("3IRH")(e))},H1x6:function(e,t){},"LMm/":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(t){return j(O(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("nug2"),c=a(l),u=n("pp5j"),f=a(u),d=n("U7vG"),m=a(d),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=n("FYkg"),b=a(w),v=n("UMnV"),k=a(v),y=n("/j3P"),_=a(y),E={PageWork:{displayName:"PageWork"}},j=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-work.jsx",components:E,locals:[e],imports:[m.default]}),O=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-work.jsx",components:E,locals:[],imports:[m.default,c.default]}),N=s("PageWork")(function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return r(t,e),g(t,[{key:"filterWorkByID",value:function(e){var t=this.props.params.workId;return e.work_id===t?e:null}},{key:"renderWorkContent",value:function(){var e=k.default.filter(this.filterWorkByID.bind(this));return m.default.createElement(_.default,{work:e[0]})}},{key:"render",value:function(){return m.default.createElement("section",{id:"work"},this.renderWorkContent(),m.default.createElement(b.default,null))}}]),t}(m.default.Component));t.default=N}).call(t,n("3IRH")(e))},NAfh:function(e,t){},QJsr:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(t){return b(v(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("nug2"),c=a(l),u=n("pp5j"),f=a(u),d=n("U7vG"),m=a(d),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("mU5p");var w={WorkImage:{displayName:"WorkImage"}},b=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-image.jsx",components:w,locals:[e],imports:[m.default]}),v=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-image.jsx",components:w,locals:[],imports:[m.default,c.default]}),k=s("WorkImage")(function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),g(t,[{key:"render",value:function(){return m.default.createElement("img",{className:"image-container",src:this.props.imageUrl,alt:this.props.alt})}}]),t}(m.default.Component));t.default=k}).call(t,n("3IRH")(e))},R0Ds:function(e,t){},TzzK:function(e,t){},UMnV:function(e,t){e.exports=[{id:"0",work_id:"tnt-energy",work_title:"TNT Energy",agency:"Y&R",menu_order:"0",role:["Marcos Lee","Lucas Arruda","Natalia Santos"],description:"The TNT Energy Drink presents the new positioning, which brings the concept “Bring it on“ and intends to bring consumers a message of self-confidence. To launch the new campaign and represent this new identity, the new site follows an innovative style where we can see all TNT presence in the fashion, geek, radical and cultural universe.",link:"",freefield:["",""],medias:[{images:[{cover_image:{id:"1",title:"Cover TNT",filename:"",description:"",url:"../img/tnt/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/tnt/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"3",title:"tnt",filename:"",description:"",url:"../img/tnt/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"4",title:"tnt",filename:"",description:"",url:"../img/tnt/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"4",title:"tnt",filename:"",description:"",url:"../img/tnt/content_4.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"1",work_id:"itaipava",work_title:"Itaipava",agency:"Y&R",menu_order:"0",role:["Bernardo Tavares","Marcos Lee","Natalia Santos"],description:"Promo activation based on the viral audio ‘Hoje é dia de Maldade’ to promote the Itaipava’s campaign on internet. It was created the video ‘Hoje é dia de Verão’ showing that, for those who has the summer spirit, any time of the year can be summer.",link:"",freefield:["",""],medias:[{video:{id:"",title:"video Itaipava",filename:".mp4",url:"../img/itaipava/content_2.mp4",poster:"../img/itaipava/video-poster.jpg",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"4",title:"itaipava",filename:"",description:"",url:"../img/itaipava/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/itaipava/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[]}]}]},{id:"2",work_id:"o-boticario",work_title:"O Boticario",agency:"W3Haus",menu_order:"0",role:["Allan Diego","Tamiris Gomes","Natalia Santos"],description:"To launch the new version of Absolute Malbec - O Boticário's most premium perfume - the mission was to reformulate ConfrariaMalbec.com bringing a digital action that spoke the language of this sophisticated audience. It was then that we created the Absolute Repertoire, a section within the site where men could choose from hundreds of objects those who most represented their essence and thus assemble their absolute repertoire. On the site it was also possible to have fashion tips and make reservations with discounts in the most sophisticated restaurants in São Paulo.",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/malbec/content_3.mp4",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"7",title:"",filename:"",description:"",url:"../img/malbec/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/malbec/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"2",title:"",filename:"",description:"",url:"../img/malbec/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"3",work_id:"lg",work_title:"LG",agency:"W3Haus",menu_order:"0",role:["Will Ferrari","Nando Sperb","Natalia Santos"],description:"Integrated campaign for the launch of the LG G3 smartphone. We created a digital experience that turned users into photographers with just a simple hand gesture: opening and closing of the user's hand in front of the camera, one of the G3's prominent tools. The idea of the interactive experience is to make the users able to take pictures of the models using a simple hand gesture in front of the webcam. With this movement, you create a photo session signed by a G3 user composing an album in a magazine format, available for download and to be shared on social networks.",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/lg/content_4.mp4",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"10",title:"",filename:"",description:"",url:"../img/lg/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/lg/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"12",title:"",filename:"",description:"",url:"../img/lg/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"12",title:"",filename:"",description:"",url:"../img/lg/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"4",work_id:"airwick",work_title:"Air Wick",agency:"W3Haus",menu_order:"0",role:["Mateus Oliveira","Rafael Darri","Natalia Santos"],description:"For the launch of the new Air Wick Home Perfume Collection, we created a platform that works as a personal home stylish, in the website, with a facebook analysis on the user’s profile, based on likes and pages, the platform identify the user’s style and offers the specific  Airwick product that matches with the user. After the results, they could sign in to receive the specific product in their home, to try the new line.",link:"",freefield:["",""],medias:[{images:[{cover_image:{id:"13",title:"",filename:"",description:"",url:"../img/airwick/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/airwick/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_4.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"5",work_id:"crystal",work_title:"Crystal",agency:"Y&R",menu_order:"0",role:["Marcos Lee","Lucas Arruda","Natalia Santos"],description:"To launch of the new campaign the mission was to reformulate the Crystal Beer website bringing a digital action that spoke the language of this audience.",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/crystal/content_3.mov",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"16",title:"",filename:"",description:"",url:"../img/crystal/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/crystal/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"18",title:"",filename:"",description:"",url:"../img/crystal/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]}]},"a+hm":function(e,t){},a9Hw:function(e,t){},aN1e:function(e,t){},cqQm:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(t){return b(v(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("nug2"),c=a(l),u=n("pp5j"),f=a(u),d=n("U7vG"),m=a(d),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();n("a9Hw");var w={WorkInfo:{displayName:"WorkInfo"}},b=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-info.jsx",components:w,locals:[e],imports:[m.default]}),v=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/work/work-info.jsx",components:w,locals:[],imports:[m.default,c.default]}),k=s("WorkInfo")(function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),g(t,[{key:"renderRoleInfo",value:function(){var e=this.props.workInfo,t=e.role.map(function(e){return e});return t.length>1?t.join(", "):t}},{key:"renderDescription",value:function(){return this.props.workInfo.description?m.default.createElement("div",{className:"work-description-text"},m.default.createElement("p",null,this.props.workInfo.description)):null}},{key:"render",value:function(){var e=this.props.workInfo;return m.default.createElement("div",{className:"work-description"},m.default.createElement("ul",{className:"work-description-info"},m.default.createElement("li",{className:"work-description-info-item"},m.default.createElement("span",{className:"item-label"},"Agency"),": ",e.agency),m.default.createElement("li",{className:"work-description-info-item"},m.default.createElement("span",{className:"item-label"},"Client: "),e.work_title),m.default.createElement("li",{className:"work-description-info-item"},m.default.createElement("span",{className:"item-label"},"Creative:")," ",this.renderRoleInfo())),this.renderDescription())}}]),t}(m.default.Component));t.default=k}).call(t,n("3IRH")(e))},d6Em:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return function(t){return O(N(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("nug2"),c=a(l),u=n("pp5j"),f=a(u),d=n("U7vG"),m=a(d),p=n("xPnc"),h=a(p),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),w=n("S8Mv"),b=a(w),v=n("CIox"),k=n("UMnV"),y=a(k),_=n("QJsr"),E=a(_);n("yUV6"),n("NAfh"),n("aN1e"),n("rpem");var j={Home:{displayName:"Home"}},O=(0,h.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-home.jsx",components:j,locals:[e],imports:[m.default]}),N=(0,f.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-home.jsx",components:j,locals:[],imports:[m.default,c.default]}),I=s("Home")(function(e){function t(){i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isHovering:!1,currentOver:""},e}return r(t,e),g(t,[{key:"handleMouseOver",value:function(e){var t=e.length>0;this.setState({isHovering:t,currentOver:e})}},{key:"filterWorkById",value:function(e){var t=this.state.currentOver;return e.work_id===t?e:null}},{key:"renderCoverImage",value:function(){if(this.state.isHovering){var e=y.default.filter(this.filterWorkById.bind(this)),t=e[0].medias[0].images[0].cover_image.url;return m.default.createElement(E.default,{imageUrl:t,key:e[0].id})}return null}},{key:"render",value:function(){var e=this.state.isHovering?"is-active":"",t=this.state.isHovering?"project-visible":"";return m.default.createElement("section",{id:"home",className:t},m.default.createElement("div",{className:"cover-image "+e},m.default.createElement("div",{className:"image-container"},m.default.createElement(b.default,{transitionName:"fadein",transitionEnterTimeout:1e3,transitionLeaveTimeout:1e3},this.renderCoverImage()))),m.default.createElement("div",{className:"work-list-container"},m.default.createElement("ul",{className:"work-list"},m.default.createElement("li",{className:"work-list-item",ref:"tnt-energy",onMouseOver:this.handleMouseOver.bind(this,"tnt-energy"),onMouseOut:this.handleMouseOver.bind(this)},m.default.createElement(v.Link,{to:"/works/tnt-energy",className:"work-list-item-link"},"TNT Energy")),m.default.createElement("li",{className:"work-list-item",ref:"itaipava",onMouseOver:this.handleMouseOver.bind(this,"itaipava"),onMouseOut:this.handleMouseOver.bind(this)},m.default.createElement(v.Link,{to:"/works/itaipava",className:"work-list-item-link"},"Itaipava")),m.default.createElement("li",{className:"work-list-item",ref:"o-boticario",onMouseOver:this.handleMouseOver.bind(this,"o-boticario"),onMouseOut:this.handleMouseOver.bind(this)},m.default.createElement(v.Link,{to:"/works/o-boticario",className:"work-list-item-link"},"O Boticario")),m.default.createElement("li",{className:"work-list-item",ref:"lg",onMouseOver:this.handleMouseOver.bind(this,"lg")},m.default.createElement(v.Link,{to:"/works/lg",className:"work-list-item-link"},"LG")),m.default.createElement("li",{className:"work-list-item",ref:"airwick",onMouseOver:this.handleMouseOver.bind(this,"airwick"),onMouseOut:this.handleMouseOver.bind(this)},m.default.createElement(v.Link,{to:"/works/airwick",className:"work-list-item-link"},"Air Wick")),m.default.createElement("li",{className:"work-list-item",ref:"crystal",onMouseOver:this.handleMouseOver.bind(this,"crystal"),onMouseOut:this.handleMouseOver.bind(this)},m.default.createElement(v.Link,{to:"/works/crystal",className:"work-list-item-link"},"Crystal")))))}}]),t}(m.default.Component));t.default=I}).call(t,n("3IRH")(e))},j3kU:function(e,t){},ki4o:function(e,t){},lVK7:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n("U7vG"),o=a(i),r=n("O27J"),s=n("CIox"),l=n("sMfP"),c=a(l),u=n("d6Em"),f=a(u),d=n("LMm/"),m=a(d),p=n("s+VA"),h=a(p),g=o.default.createElement(s.Router,{history:s.browserHistory},o.default.createElement(s.Route,{path:"/",component:c.default},o.default.createElement(s.IndexRoute,{component:f.default}),o.default.createElement(s.Route,{path:"/about",component:h.default}),o.default.createElement(s.Route,{path:"/works/:workId",component:m.default})));(0,r.render)(g,document.querySelector("#app"))},mU5p:function(e,t){},mwrz:function(e,t){},quNL:function(e,t){},rpem:function(e,t){},"s+VA":function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(t){return p(h(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("nug2"),r=a(o),s=n("pp5j"),l=a(s),c=n("U7vG"),u=a(c),f=n("xPnc"),d=a(f);n("R0Ds"),n("mwrz"),n("H1x6");var m={_component:{}},p=(0,d.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-about.jsx",components:m,locals:[e],imports:[u.default]}),h=(0,l.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/components/page-about.jsx",components:m,locals:[],imports:[u.default,r.default]}),g=i("_component")(u.default.createClass({displayName:"About",render:function(){return u.default.createElement("section",{id:"about"},u.default.createElement("h2",{className:"text-about"},"Fresh graduated graphic designer, currently living in São Paulo. I started designing things as a intern in a Dublin based agency, working for brands such as Jameson and Pizza Hut. Currently I’m working at Young&Rubicam as a Art Assistant where I’m taking part in important campaigns working for brands such as Itaipava, TNT Energy Drink, VIVO, LG. Check out my work and lets talk."),u.default.createElement("div",{className:"contact-info-container"},u.default.createElement("img",{src:"/img/giphy.gif",alt:"git",className:"contact-gif"}),u.default.createElement("div",{className:"contact-info"},u.default.createElement("h3",{className:"contact-info-title"},"Find Me"),u.default.createElement("p",null,"nnatalia.santos@outlook.com"),u.default.createElement("ul",{className:"social-links"},u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.facebook.com/nnataliasantos"},"Facebook")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.instagram.com/nnatsnts/"},"Instagram")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.behance.net/nnatalia"},"Behance")),u.default.createElement("li",{className:"social-link"},u.default.createElement("a",{href:"https://www.linkedin.com/in/natalia-santos-a8b83834/en"},"Linkedin"))))))}}));t.default=g}).call(t,n("3IRH")(e))},sMfP:function(e,t,n){"use strict";(function(e){function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return function(t){return g(w(t,e),e)}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("nug2"),r=a(o),s=n("pp5j"),l=a(s),c=n("U7vG"),u=a(c),f=n("xPnc"),d=a(f);n("a+hm");var m=(n("CIox"),n("7WcC")),p=a(m),h={_component:{}},g=(0,d.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/App.jsx",components:h,locals:[e],imports:[u.default]}),w=(0,l.default)({filename:"/Users/tamih/Documents/projects/pessoal/nataliasantos.github.io/src/App.jsx",components:h,locals:[],imports:[u.default,r.default]}),b=i("_component")(u.default.createClass({displayName:"App",render:function(){return u.default.createElement("div",{className:"container"},u.default.createElement(p.default,null),u.default.cloneElement(this.props.children,this.props))}}));t.default=b}).call(t,n("3IRH")(e))},yUV6:function(e,t){}},[0]);
//# sourceMappingURL=app.fa49d66a.js.map