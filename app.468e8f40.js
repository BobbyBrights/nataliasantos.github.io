webpackJsonp([1,2],{"/j3P":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("U7vG"),c=a(s),u=n("QJsr"),f=a(u),d=n("9WgG"),m=a(d),p=n("cqQm"),h=a(p);n("rpem");var g=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"renderWorkImage",value:function(){var e=this.props.work.medias[0].images[0].feature_image.url,t=this.props.work.medias[0].images[0].feature_image.title;return c.default.createElement("div",{className:"cover-image"},c.default.createElement("div",{className:"image-container"},c.default.createElement(f.default,{imageUrl:e,alt:t})))}},{key:"renderContentImages",value:function(){return this.props.work.medias[0].images[0].content_images.map(function(e,t){return c.default.createElement("div",{className:"cover-image",key:t},c.default.createElement("div",{className:"image-container"},c.default.createElement(f.default,{imageUrl:e.url,alt:e.title,key:t})))})}},{key:"renderContentVideo",value:function(){var e=this.props.work.medias[0].video;return e?c.default.createElement("div",{className:"cover-video"},c.default.createElement(m.default,{contentVideo:e})):null}},{key:"renderWorkInfo",value:function(){var e=this.props.work;return c.default.createElement(h.default,{workInfo:e})}},{key:"render",value:function(){return c.default.createElement("div",{className:"work-content"},this.renderWorkImage(),this.renderWorkInfo(),this.renderContentImages(),this.renderContentVideo())}}]),t}(c.default.Component);t.default=g},0:function(e,t,n){n("+prg"),e.exports=n("lVK7")},"7WcC":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("U7vG"),c=a(s),u=n("CIox");n("quNL"),n("j3kU");var f=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"renderNavItem",value:function(){var e=void 0;switch(window.location.pathname){case"/about":e=c.default.createElement(u.Link,{to:"/",className:"nav-item"},"Work");break;case"/":e=c.default.createElement(u.Link,{to:"/about",className:"nav-item"},"About");break;default:e=c.default.createElement(u.Link,{to:"/",className:"nav-item"},"Back")}return e}},{key:"render",value:function(){return c.default.createElement("header",{className:"header"},c.default.createElement(u.Link,{to:"/",className:"logo"},"Natalia Santos ",c.default.createElement("span",{className:"logo-subtitle"},"Art Director")),c.default.createElement("nav",{className:"nav"},this.renderNavItem()))}}]),t}(c.default.Component);t.default=f},"9WgG":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("U7vG"),c=a(s);n("ki4o");var u=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={btnIconClass:"is-visible"},e.handleVideoEnded=e.handleVideoEnded.bind(e),e}return o(t,e),l(t,[{key:"vidplay",value:function(){var e=this.refs.workVideo;this.refs.playButton;e.paused?(e.play(),this.setState({btnIconClass:""})):(e.pause(),this.setState({btnIconClass:"is-visible"}))}},{key:"handleVideoEnded",value:function(){this.setState({btnIconClass:"is-visible"})}},{key:"componentDidMount",value:function(){this.refs.workVideo.addEventListener("ended",this.handleVideoEnded,!1)}},{key:"render",value:function(){var e=this,t=this.state.btnIconClass,n=this.props.contentVideo,a=(n.title,n.url),i=n.poster;return c.default.createElement("div",{className:"video-container"},c.default.createElement("video",{id:"workVideo",width:"100%",height:"auto",controls:!0,poster:i,ref:"workVideo"},c.default.createElement("source",{src:a,type:"video/mp4"}),c.default.createElement("source",{src:a,type:"video/ogg"})),c.default.createElement("div",{id:"play",ref:"playButton",className:"play-button",onClick:function(){return e.vidplay()}},c.default.createElement("i",{className:"btn-icon fa fa-play "+t,"aria-hidden":"true"})))}}]),t}(c.default.Component);t.default=u},FYkg:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n("U7vG"),r=a(i);n("CIox");n("quNL"),n("TzzK");var o=r.default.createClass({displayName:"Footer",render:function(){return r.default.createElement("footer",{className:"footer wrapper"},r.default.createElement("ul",{className:"social-links"},r.default.createElement("li",{className:"social-link"},r.default.createElement("a",{href:"https://www.facebook.com/nnataliasantos"},"Facebook")),r.default.createElement("li",{className:"social-link"},r.default.createElement("a",{href:"https://www.instagram.com/nnatsnts/"},"Instagram")),r.default.createElement("li",{className:"social-link"},r.default.createElement("a",{href:"https://www.behance.net/nnatalia"},"Behance")),r.default.createElement("li",{className:"social-link"},r.default.createElement("a",{href:"https://www.linkedin.com/in/natalia-santos-a8b83834/en"},"Linkedin"))),r.default.createElement("p",{className:"email"},"nnatalia.santos@outlook.com"))}});t.default=o},H1x6:function(e,t){},"LMm/":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("U7vG"),c=a(s),u=n("FYkg"),f=a(u),d=n("UMnV"),m=a(d),p=n("/j3P"),h=a(p),g=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return o(t,e),l(t,[{key:"filterWorkByID",value:function(e){var t=this.props.params.workId;return e.work_id===t?e:null}},{key:"renderWorkContent",value:function(){var e=m.default.filter(this.filterWorkByID.bind(this));return c.default.createElement(h.default,{work:e[0]})}},{key:"render",value:function(){return c.default.createElement("section",{id:"work"},this.renderWorkContent(),c.default.createElement(f.default,null))}}]),t}(c.default.Component);t.default=g},NAfh:function(e,t){},QJsr:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("U7vG"),c=a(s);n("mU5p");var u=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return c.default.createElement("img",{className:"image-container",src:this.props.imageUrl,alt:this.props.alt})}}]),t}(c.default.Component);t.default=u},R0Ds:function(e,t){},TzzK:function(e,t){},UMnV:function(e,t){e.exports=[{id:"0",work_id:"tnt-energy",work_title:"TNT Energy",agency:"Y&R",menu_order:"0",role:["Marcos Lee","Lucas Arruda","Natalia Santos"],description:"The TNT Energy Drink presents the new positioning, which brings the concept “Bring it on“ and intends to bring consumers a message of self-confidence. To launch the new campaign and represent this new identity, the new site follows an innovative style where we can see all TNT presence in the fashion, geek, radical and cultural universe.",link:"",freefield:["",""],medias:[{images:[{cover_image:{id:"1",title:"Cover TNT",filename:"",description:"",url:"../img/tnt/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/tnt/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"3",title:"tnt",filename:"",description:"",url:"../img/tnt/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"4",title:"tnt",filename:"",description:"",url:"../img/tnt/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"4",title:"tnt",filename:"",description:"",url:"../img/tnt/content_4.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"1",work_id:"itaipava",work_title:"Itaipava",agency:"Y&R",menu_order:"0",role:["Bernardo Tavares","Marcos Lee","Natalia Santos"],description:"Promo activation based on the viral audio ‘Hoje é dia de Maldade’ to promote the Itaipava’s campaign on internet. It was created the video ‘Hoje é dia de Verão’ showing that, for those who has the summer spirit, any time of the year can be summer.",link:"",freefield:["",""],medias:[{video:{id:"",title:"video Itaipava",filename:".mp4",url:"../img/itaipava/content_2.mp4",poster:"../img/itaipava/video-poster.jpg",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"4",title:"itaipava",filename:"",description:"",url:"../img/itaipava/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/itaipava/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[]}]}]},{id:"2",work_id:"o-boticario",work_title:"O Boticario",agency:"W3Haus",menu_order:"0",role:["Allan Diego","Tamiris Gomes","Natalia Santos"],description:"To launch the new version of Absolute Malbec the mission was to reformulate the website bringing a digital action. We create the Absolute Repertoire, a section where men could choose from objects that most represented their style. On the site it was also possible to have fashion tips and make reservations with discounts in the most sophisticated restaurants in São Paulo.",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/malbec/content_3.mp4",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"7",title:"",filename:"",description:"",url:"../img/malbec/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/malbec/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"2",title:"",filename:"",description:"",url:"../img/malbec/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"3",work_id:"lg",work_title:"LG",agency:"W3Haus",menu_order:"0",role:["Will Ferrari","Nando Sperb","Natalia Santos"],description:"Integrated campaign for the launch of the LG G3 smartphone. We created a digital experience that turned users into photographers with just a simple hand gesture: opening and closing of the user's hand in front of the camera, one of the G3's prominent tools. The idea of the interactive experience is to make the users able to take pictures of the models using a simple hand gesture in front of the webcam. With this movement, you create a photo session signed by a G3 user composing an album in a magazine format, available for download and to be shared on social networks.",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/lg/content_4.mp4",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"10",title:"",filename:"",description:"",url:"../img/lg/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/lg/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"12",title:"",filename:"",description:"",url:"../img/lg/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"12",title:"",filename:"",description:"",url:"../img/lg/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"4",work_id:"airwick",work_title:"Air Wick",agency:"W3Haus",menu_order:"0",role:["Mateus Oliveira","Rafael Darri","Natalia Santos"],description:"For the launch of the new Air Wick Home Perfume Collection, we created a platform that works as a personal home stylish, in the website, with a facebook analysis on the user’s profile, based on likes and pages, the platform identify the user’s style and offers the specific  Airwick product that matches with the user. After the results, they could sign in to receive the specific product in their home, to try the new line.",link:"",freefield:["",""],medias:[{images:[{cover_image:{id:"13",title:"",filename:"",description:"",url:"../img/airwick/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/airwick/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_3.png",alt:"",sizes:{"large-width":"","large-height":""}},{id:"14",title:"",filename:"",description:"",url:"../img/airwick/content_4.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]},{id:"5",work_id:"crystal",work_title:"Crystal",agency:"Y&R",menu_order:"0",role:["Marcos Lee","Lucas Arruda","Natalia Santos"],description:"To launch of the new campaign the mission was to reformulate the Crystal Beer website bringing a digital action that spoke the language of this audience.",link:"",freefield:["",""],medias:[{video:{id:"",title:"",filename:".mp4",url:"../img/crystal/content_3.mov",alt:"",description:"",mime_type:"video/mp4",type:"video",icon:"",width:"",height:""},images:[{cover_image:{id:"16",title:"",filename:"",description:"",url:"../img/crystal/abertura.png",alt:"",sizes:{"large-width":"","large-height":""}},feature_image:{id:"2",title:"",filename:"",description:"",url:"../img/crystal/content_1.png",alt:"",sizes:{"large-width":"","large-height":""}},content_images:[{id:"18",title:"",filename:"",description:"",url:"../img/crystal/content_2.png",alt:"",sizes:{"large-width":"","large-height":""}}]}]}]}]},"a+hm":function(e,t){},a9Hw:function(e,t){},aN1e:function(e,t){},cqQm:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("U7vG"),c=a(s);n("a9Hw");var u=function(e){function t(){return i(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"renderRoleInfo",value:function(){var e=this.props.workInfo,t=e.role.map(function(e){return e});return t.length>1?t.join(", "):t}},{key:"renderDescription",value:function(){return this.props.workInfo.description?c.default.createElement("div",{className:"work-description-text"},c.default.createElement("p",null,this.props.workInfo.description)):null}},{key:"render",value:function(){var e=this.props.workInfo;return c.default.createElement("div",{className:"work-description"},c.default.createElement("ul",{className:"work-description-info"},c.default.createElement("li",{className:"work-description-info-item"},c.default.createElement("span",{className:"item-label"},"Agency"),": ",e.agency),c.default.createElement("li",{className:"work-description-info-item"},c.default.createElement("span",{className:"item-label"},"Client: "),e.work_title),c.default.createElement("li",{className:"work-description-info-item"},c.default.createElement("span",{className:"item-label"},"Creative:")," ",this.renderRoleInfo())),this.renderDescription())}}]),t}(c.default.Component);t.default=u},d6Em:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("U7vG"),c=a(s),u=n("S8Mv"),f=a(u),d=n("CIox"),m=n("UMnV"),p=a(m),h=n("QJsr"),g=a(h);n("yUV6"),n("NAfh"),n("aN1e"),n("rpem");var v=function(e){function t(){i(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isHovering:!1,currentOver:""},e}return o(t,e),l(t,[{key:"handleMouseOver",value:function(e){var t=e.length>0;this.setState({isHovering:t,currentOver:e})}},{key:"filterWorkById",value:function(e){var t=this.state.currentOver;return e.work_id===t?e:null}},{key:"renderCoverImage",value:function(){if(this.state.isHovering){var e=p.default.filter(this.filterWorkById.bind(this)),t=e[0].medias[0].images[0].cover_image.url;return c.default.createElement(g.default,{imageUrl:t,key:e[0].id})}return null}},{key:"render",value:function(){var e=this.state.isHovering?"is-active":"",t=this.state.isHovering?"project-visible":"";return c.default.createElement("section",{id:"home",className:t},c.default.createElement("div",{className:"cover-image "+e},c.default.createElement("div",{className:"image-container"},c.default.createElement(f.default,{transitionName:"fadein",transitionEnterTimeout:1e3,transitionLeaveTimeout:1e3},this.renderCoverImage()))),c.default.createElement("div",{className:"work-list-container"},c.default.createElement("ul",{className:"work-list"},c.default.createElement("li",{className:"work-list-item",ref:"tnt-energy",onMouseOver:this.handleMouseOver.bind(this,"tnt-energy"),onMouseOut:this.handleMouseOver.bind(this)},c.default.createElement(d.Link,{to:"/works/tnt-energy",className:"work-list-item-link"},"TNT Energy")),c.default.createElement("li",{className:"work-list-item",ref:"itaipava",onMouseOver:this.handleMouseOver.bind(this,"itaipava"),onMouseOut:this.handleMouseOver.bind(this)},c.default.createElement(d.Link,{to:"/works/itaipava",className:"work-list-item-link"},"Itaipava")),c.default.createElement("li",{className:"work-list-item",ref:"o-boticario",onMouseOver:this.handleMouseOver.bind(this,"o-boticario"),onMouseOut:this.handleMouseOver.bind(this)},c.default.createElement(d.Link,{to:"/works/o-boticario",className:"work-list-item-link"},"O Boticario")),c.default.createElement("li",{className:"work-list-item",ref:"lg",onMouseOver:this.handleMouseOver.bind(this,"lg")},c.default.createElement(d.Link,{to:"/works/lg",className:"work-list-item-link"},"LG")),c.default.createElement("li",{className:"work-list-item",ref:"airwick",onMouseOver:this.handleMouseOver.bind(this,"airwick"),onMouseOut:this.handleMouseOver.bind(this)},c.default.createElement(d.Link,{to:"/works/airwick",className:"work-list-item-link"},"Air Wick")),c.default.createElement("li",{className:"work-list-item",ref:"crystal",onMouseOver:this.handleMouseOver.bind(this,"crystal"),onMouseOut:this.handleMouseOver.bind(this)},c.default.createElement(d.Link,{to:"/works/crystal",className:"work-list-item-link"},"Crystal")))))}}]),t}(c.default.Component);t.default=v},j3kU:function(e,t){},ki4o:function(e,t){},lVK7:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n("U7vG"),r=a(i),o=n("O27J"),l=n("CIox"),s=n("sMfP"),c=a(s),u=n("d6Em"),f=a(u),d=n("LMm/"),m=a(d),p=n("s+VA"),h=a(p),g=r.default.createElement(l.Router,{history:l.browserHistory},r.default.createElement(l.Route,{path:"/",component:c.default},r.default.createElement(l.IndexRoute,{component:f.default}),r.default.createElement(l.Route,{path:"/about",component:h.default}),r.default.createElement(l.Route,{path:"/works/:workId",component:m.default})));(0,o.render)(g,document.querySelector("#app"))},mU5p:function(e,t){},mwrz:function(e,t){},quNL:function(e,t){},rpem:function(e,t){},"s+VA":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n("U7vG"),r=a(i);n("R0Ds"),n("mwrz"),n("H1x6");var o=r.default.createClass({displayName:"About",render:function(){return r.default.createElement("section",{id:"about"},r.default.createElement("h2",{className:"text-about"},"Fresh graduated graphic designer, currently living in São Paulo. I started designing things as a intern in a Dublin based agency, working for brands such as Jameson and Pizza Hut. Currently I’m working at Young&Rubicam as a Art Assistant where I’m taking part in important campaigns working for brands such as Itaipava, TNT Energy Drink, VIVO, LG. Check out my work and lets talk."),r.default.createElement("div",{className:"contact-info-container"},r.default.createElement("img",{src:"/img/giphy.gif",alt:"git",className:"contact-gif"}),r.default.createElement("div",{className:"contact-info"},r.default.createElement("h3",{className:"contact-info-title"},"Find Me"),r.default.createElement("p",null,"nnatalia.santos@outlook.com"),r.default.createElement("ul",{className:"social-links"},r.default.createElement("li",{className:"social-link"},r.default.createElement("a",{href:"https://www.facebook.com/nnataliasantos"},"Facebook")),r.default.createElement("li",{className:"social-link"},r.default.createElement("a",{href:"https://www.instagram.com/nnatsnts/"},"Instagram")),r.default.createElement("li",{className:"social-link"},r.default.createElement("a",{href:"https://www.behance.net/nnatalia"},"Behance")),r.default.createElement("li",{className:"social-link"},r.default.createElement("a",{href:"https://www.linkedin.com/in/natalia-santos-a8b83834/en"},"Linkedin"))))))}});t.default=o},sMfP:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n("a+hm");var i=n("U7vG"),r=a(i),o=(n("CIox"),n("7WcC")),l=a(o),s=r.default.createClass({displayName:"App",render:function(){return r.default.createElement("div",{className:"container"},r.default.createElement(l.default,null),r.default.cloneElement(this.props.children,this.props))}});t.default=s},yUV6:function(e,t){}},[0]);
//# sourceMappingURL=app.468e8f40.js.map