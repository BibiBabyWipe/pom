var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
* Detect Element Resize Plugin for jQuery
*
* https://github.com/sdecima/javascript-detect-element-resize
* Sebastian Decima
*
* version: 0.5.3
**/
!function(e){function i(e){var i=e.__resizeTriggers__,t=i.firstElementChild,r=i.lastElementChild,n=t.firstElementChild
r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight,n.style.width=t.offsetWidth+1+"px",n.style.height=t.offsetHeight+1+"px",t.scrollLeft=t.scrollWidth,t.scrollTop=t.scrollHeight}function t(e){return e.offsetWidth!=e.__resizeLast__.width||e.offsetHeight!=e.__resizeLast__.height}function r(e){var r=this
i(this),this.__resizeRAF__&&c(this.__resizeRAF__),this.__resizeRAF__=_(function(){t(r)&&(r.__resizeLast__.width=r.offsetWidth,r.__resizeLast__.height=r.offsetHeight,r.__resizeListeners__.forEach(function(i){i.call(r,e)}))})}function n(){if(!o){var e=(p?p:"")+".resize-triggers { "+(L?L:"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style")
t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),i.appendChild(t),o=!0}}var s=document.attachEvent,o=!1,a=e.fn.resize
if(e.fn.resize=function(e){return this.each(function(){this==window?a.call(jQuery(this),e):addResizeListener(this,e)})},e.fn.removeResize=function(e){return this.each(function(){removeResizeListener(this,e)})},!s){var _=function(){var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)}
return function(i){return e(i)}}(),c=function(){var e=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.clearTimeout
return function(i){return e(i)}}(),d=!1,l="animation",h="",m="animationstart",f="Webkit Moz O ms".split(" "),g="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),u="",z=document.createElement("fakeelement")
if(void 0!==z.style.animationName&&(d=!0),d===!1)for(var v=0;v<f.length;v++)if(void 0!==z.style[f[v]+"AnimationName"]){u=f[v],l=u+"Animation",h="-"+u.toLowerCase()+"-",m=g[v],d=!0
break}var w="resizeanim",p="@"+h+"keyframes "+w+" { from { opacity: 0; } to { opacity: 0; } } ",L=h+"animation: 1ms "+w+"; "}window.addResizeListener=function(e,t){s?e.attachEvent("onresize",t):(e.__resizeTriggers__||("static"==getComputedStyle(e).position&&(e.style.position="relative"),n(),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=document.createElement("div")).className="resize-triggers",e.__resizeTriggers__.innerHTML='<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>',e.appendChild(e.__resizeTriggers__),i(e),e.addEventListener("scroll",r,!0),m&&e.__resizeTriggers__.addEventListener(m,function(t){t.animationName==w&&i(e)})),e.__resizeListeners__.push(t))},window.removeResizeListener=function(e,i){s?e.detachEvent("onresize",i):(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(i),1),e.__resizeListeners__.length||(e.removeEventListener("scroll",r),e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)))}}(jQuery)

}
/*
     FILE ARCHIVED ON 01:09:07 Sep 14, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:26:32 Nov 26, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 71.19
  exclusion.robots: 0.174
  exclusion.robots.policy: 0.147
  cdx.remote: 0.091
  esindex: 0.011
  LoadShardBlock: 37.058 (3)
  PetaboxLoader3.datanode: 186.325 (5)
  load_resource: 247.093
  PetaboxLoader3.resolve: 88.926
  loaddict: 130.408
*/