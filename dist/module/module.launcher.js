'use strict';var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var ModuleLauncher=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],c=arguments[1],d=arguments[2];_classCallCheck(this,a),this._modules=b,this._dataObserver=c,this._elementBuilder=d,this._observeDomMutation=this._observeDomMutation.bind(this),this._observer=new MutationObserver(this._observeDomMutation),this._intersectionObserver='IntersectionObserver'in window&&'IntersectionObserverEntry'in window?new IntersectionObserver(this._wokeUpElements.bind(this),{root:null,rootMargin:'0px',thresholds:[1]}):null,this._instanceMap=new Map,this._sleepersMap=new Map,this._stylesLoaded=new Set,this._batchStyles=[],this._batchStylesBusy=!1,b.length&&this._init()}return _createClass(a,[{key:'_init',value:function _init(){this.registerObserver(document.body),this._bootstrap()}},{key:'registerObserver',value:function registerObserver(a,b){var c=Object.assign({attributes:!1,childList:!0,characterData:!1,subtree:!0},b);this._observer.observe(a,c)}},{key:'_eachModule',value:function _eachModule(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;if('function'==typeof a)for(var b=0,c=this._modules.length;b<c;b++)a(this._modules[b])}},{key:'_eachElement',value:function _eachElement(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;a&&b&&Array.from(a).forEach(function(a){'function'==typeof a.querySelectorAll&&b(a)})}},{key:'_addInstance',value:function _addInstance(a,b){this._instanceMap.set(a,b)}},{key:'_destructInstance',value:function _destructInstance(a){var b=this._instanceMap.get(a);b&&('function'==typeof b.destruct&&b.destruct(),this._instanceMap.delete(a))}},{key:'_bindController',value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d,e,f=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!b){a.next=14;break}if('function'!=typeof c.importController){a.next=7;break}return a.next=4,c.importController();case 4:a.t0=a.sent,a.next=8;break;case 7:a.t0=null;case 8:return d=a.t0,a.next=11,c.dependencyManager.resolve();case 11:e=a.sent,d&&e&&!this._instanceMap.has(b)&&window.requestAnimationFrame(function(){f._addInstance(b,new d(b,f._dataObserver,f._elementBuilder,e))}),this._stylesLoaded.has(c.name)||'function'!=typeof c.importStyles||this._addStyles(c.name,c.importStyles);case 14:case'end':return a.stop();}},a,this)}));return function _bindController(){return a.apply(this,arguments)}}()},{key:'_wokeUpElements',value:function _wokeUpElements(a,b){var c=this;a.filter(function(a){return a.isIntersecting}).forEach(function(a){if(c._sleepersMap.has(a.target)){var d=c._sleepersMap.get(a.target);c._bindController(a.target,d),c._sleepersMap.delete(a.target)}b.unobserve(a.target)})}},{key:'_addAsSleeper',value:function _addAsSleeper(a,b){var c=this;a.forEach(function(d){c._intersectionObserver?(c._sleepersMap.set(d,b),c._intersectionObserver.observe(d)):c._bindController(a,b)})}},{key:'_launchMatchingElements',value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:this._eachModule(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(d){var e,f,g,h;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:for(e=0,f=c._modules.length;e<f;e++)g=Array.from(b.querySelectorAll(d.selector)),h='function'==typeof b.matches?b.matches(d.selector):null,h&&(g=[b]),c._addAsSleeper(g,d);case 1:case'end':return a.stop();}},a,c)}));return function(){return a.apply(this,arguments)}}());case 1:case'end':return a.stop();}},a,this)}));return function _launchMatchingElements(){return a.apply(this,arguments)}}()},{key:'_bootstrap',value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(){var b=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:this._eachModule(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(c){var d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:d=Array.from(document.querySelectorAll(c.selector)),b._addAsSleeper(d,c);case 2:case'end':return a.stop();}},a,b)}));return function(){return a.apply(this,arguments)}}());case 1:case'end':return a.stop();}},a,this)}));return function _bootstrap(){return a.apply(this,arguments)}}()},{key:'removedElement',value:function removedElement(a){this._destructInstance(a)}},{key:'_observeDomMutation',value:function _observeDomMutation(a){for(var b,c=this,d=0,e=a.length;d<e;d++)switch(b=a[d],b.type){case'childList':this._eachElement(b.addedNodes,function(a){c._launchMatchingElements(a)}),this._eachElement(b.removedNodes,function(a){c.removedElement(a)});break;default:throw new Error('Unsupported Mutation Type '+b.type);}}},{key:'_addStyles',value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d,e;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(this._stylesLoaded.add(b),'function'!=typeof c){a.next=10;break}return a.next=4,c();case 4:d=a.sent,e=document.createElement('style'),e.type='text/css',e.styleSheet?e.styleSheet.cssText=d:e.appendChild(document.createTextNode(d)),this._batchStyles.push(e),this._batchStylesBusy||this._batchPaint();case 10:return a.abrupt('return',this);case 11:case'end':return a.stop();}},a,this)}));return function _addStyles(){return a.apply(this,arguments)}}()},{key:'_batchPaint',value:function _batchPaint(){var a=this;this._batchStylesBusy=!0;var b=document.createDocumentFragment();window.setTimeout(function(){var c=a._batchStyles;a._batchStyles=[],a._batchStylesBusy=!1;for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d]);window.requestAnimationFrame(function(){document.head.appendChild(b)})},100)}}]),a}();exports.ModuleLauncher=ModuleLauncher;