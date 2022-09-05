/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @studio-freight/lenis */ \"./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\");\n\n\n\nvar lenis = new _studio_freight_lenis__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  direction: 'vertical',\n  lerp: 0.1,\n  smooth: true\n});\n\nvar raf = function raf() {\n  lenis.raf();\n  requestAnimationFrame(raf);\n};\n\nvar updatePositions = function updatePositions() {\n  var $$sections = document.querySelectorAll('.section:not(.intro)');\n  var viewportHeight = window.innerHeight;\n  $$sections.forEach(function ($section) {\n    var sectionHeight = $section.offsetHeight;\n    $section.style.top = (sectionHeight - viewportHeight) * -1 + 'px';\n  });\n};\n\nwindow.onload = updatePositions;\nwindow.onresize = updatePositions;\nupdatePositions();\nrequestAnimationFrame(raf);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7O0FBQWE7O0FBRWI7QUFFQSxJQUFNQyxLQUFLLEdBQUcsSUFBSUQsNkRBQUosQ0FBVTtFQUNwQkUsU0FBUyxFQUFFLFVBRFM7RUFFcEJDLElBQUksRUFBRSxHQUZjO0VBR3BCQyxNQUFNLEVBQUU7QUFIWSxDQUFWLENBQWQ7O0FBTUEsSUFBTUMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtFQUNkSixLQUFLLENBQUNJLEdBQU47RUFDQUMscUJBQXFCLENBQUNELEdBQUQsQ0FBckI7QUFDSCxDQUhEOztBQUtBLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtFQUMxQixJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBQW5CO0VBQ0EsSUFBTUMsY0FBYyxHQUFHQyxNQUFNLENBQUNDLFdBQTlCO0VBRUFMLFVBQVUsQ0FBQ00sT0FBWCxDQUFtQixVQUFBQyxRQUFRLEVBQUk7SUFDM0IsSUFBTUMsYUFBYSxHQUFHRCxRQUFRLENBQUNFLFlBQS9CO0lBQ0FGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlQyxHQUFmLEdBQXNCLENBQUNILGFBQWEsR0FBR0wsY0FBakIsSUFBbUMsQ0FBQyxDQUFyQyxHQUEwQyxJQUEvRDtFQUNILENBSEQ7QUFJSCxDQVJEOztBQVVBQyxNQUFNLENBQUNRLE1BQVAsR0FBZ0JiLGVBQWhCO0FBQ0FLLE1BQU0sQ0FBQ1MsUUFBUCxHQUFrQmQsZUFBbEI7QUFFQUEsZUFBZTtBQUNmRCxxQkFBcUIsQ0FBQ0QsR0FBRCxDQUFyQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9hcHAuanM/Y2QxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBMZW5pcyBmcm9tICdAc3R1ZGlvLWZyZWlnaHQvbGVuaXMnO1xuXG5jb25zdCBsZW5pcyA9IG5ldyBMZW5pcyh7XG4gICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgIGxlcnA6IDAuMSxcbiAgICBzbW9vdGg6IHRydWUsXG59KTtcblxuY29uc3QgcmFmID0gKCkgPT4ge1xuICAgIGxlbmlzLnJhZigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWYpO1xufVxuXG5jb25zdCB1cGRhdGVQb3NpdGlvbnMgPSAoKSA9PiB7XG4gICAgY29uc3QgJCRzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWN0aW9uOm5vdCguaW50cm8pJyk7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICAkJHNlY3Rpb25zLmZvckVhY2goJHNlY3Rpb24gPT4ge1xuICAgICAgICBjb25zdCBzZWN0aW9uSGVpZ2h0ID0gJHNlY3Rpb24ub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAkc2VjdGlvbi5zdHlsZS50b3AgPSAoKHNlY3Rpb25IZWlnaHQgLSB2aWV3cG9ydEhlaWdodCkgKiAtMSkgKyAncHgnXG4gICAgfSk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSB1cGRhdGVQb3NpdGlvbnM7XG53aW5kb3cub25yZXNpemUgPSB1cGRhdGVQb3NpdGlvbnM7XG5cbnVwZGF0ZVBvc2l0aW9ucygpO1xucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZik7Il0sIm5hbWVzIjpbIkxlbmlzIiwibGVuaXMiLCJkaXJlY3Rpb24iLCJsZXJwIiwic21vb3RoIiwicmFmIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidXBkYXRlUG9zaXRpb25zIiwiJCRzZWN0aW9ucyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJmb3JFYWNoIiwiJHNlY3Rpb24iLCJzZWN0aW9uSGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic3R5bGUiLCJ0b3AiLCJvbmxvYWQiLCJvbnJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9hcHAuc2Nzcz85ZWY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

/***/ }),

/***/ "./node_modules/tiny-emitter/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-emitter/index.js ***!
  \********************************************/
/***/ ((module) => {

eval("function E () {\n  // Keep this empty so it's easier to inherit from\n  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)\n}\n\nE.prototype = {\n  on: function (name, callback, ctx) {\n    var e = this.e || (this.e = {});\n\n    (e[name] || (e[name] = [])).push({\n      fn: callback,\n      ctx: ctx\n    });\n\n    return this;\n  },\n\n  once: function (name, callback, ctx) {\n    var self = this;\n    function listener () {\n      self.off(name, listener);\n      callback.apply(ctx, arguments);\n    };\n\n    listener._ = callback\n    return this.on(name, listener, ctx);\n  },\n\n  emit: function (name) {\n    var data = [].slice.call(arguments, 1);\n    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();\n    var i = 0;\n    var len = evtArr.length;\n\n    for (i; i < len; i++) {\n      evtArr[i].fn.apply(evtArr[i].ctx, data);\n    }\n\n    return this;\n  },\n\n  off: function (name, callback) {\n    var e = this.e || (this.e = {});\n    var evts = e[name];\n    var liveEvents = [];\n\n    if (evts && callback) {\n      for (var i = 0, len = evts.length; i < len; i++) {\n        if (evts[i].fn !== callback && evts[i].fn._ !== callback)\n          liveEvents.push(evts[i]);\n      }\n    }\n\n    // Remove event from queue to prevent memory leak\n    // Suggested by https://github.com/lazd\n    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910\n\n    (liveEvents.length)\n      ? e[name] = liveEvents\n      : delete e[name];\n\n    return this;\n  }\n};\n\nmodule.exports = E;\nmodule.exports.TinyEmitter = E;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdGlueS1lbWl0dGVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0M7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7O0FBRUEsWUFBWSxTQUFTO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90aW55LWVtaXR0ZXIvaW5kZXguanM/NmZmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBFICgpIHtcbiAgLy8gS2VlcCB0aGlzIGVtcHR5IHNvIGl0J3MgZWFzaWVyIHRvIGluaGVyaXQgZnJvbVxuICAvLyAodmlhIGh0dHBzOi8vZ2l0aHViLmNvbS9saXBzbWFjayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvaXNzdWVzLzMpXG59XG5cbkUucHJvdG90eXBlID0ge1xuICBvbjogZnVuY3Rpb24gKG5hbWUsIGNhbGxiYWNrLCBjdHgpIHtcbiAgICB2YXIgZSA9IHRoaXMuZSB8fCAodGhpcy5lID0ge30pO1xuXG4gICAgKGVbbmFtZV0gfHwgKGVbbmFtZV0gPSBbXSkpLnB1c2goe1xuICAgICAgZm46IGNhbGxiYWNrLFxuICAgICAgY3R4OiBjdHhcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIG9uY2U6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaywgY3R4KSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGZ1bmN0aW9uIGxpc3RlbmVyICgpIHtcbiAgICAgIHNlbGYub2ZmKG5hbWUsIGxpc3RlbmVyKTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KGN0eCwgYXJndW1lbnRzKTtcbiAgICB9O1xuXG4gICAgbGlzdGVuZXIuXyA9IGNhbGxiYWNrXG4gICAgcmV0dXJuIHRoaXMub24obmFtZSwgbGlzdGVuZXIsIGN0eCk7XG4gIH0sXG5cbiAgZW1pdDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB2YXIgZGF0YSA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgZXZ0QXJyID0gKCh0aGlzLmUgfHwgKHRoaXMuZSA9IHt9KSlbbmFtZV0gfHwgW10pLnNsaWNlKCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBsZW4gPSBldnRBcnIubGVuZ3RoO1xuXG4gICAgZm9yIChpOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2dEFycltpXS5mbi5hcHBseShldnRBcnJbaV0uY3R4LCBkYXRhKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfSxcblxuICBvZmY6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuICAgIHZhciBlID0gdGhpcy5lIHx8ICh0aGlzLmUgPSB7fSk7XG4gICAgdmFyIGV2dHMgPSBlW25hbWVdO1xuICAgIHZhciBsaXZlRXZlbnRzID0gW107XG5cbiAgICBpZiAoZXZ0cyAmJiBjYWxsYmFjaykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGV2dHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKGV2dHNbaV0uZm4gIT09IGNhbGxiYWNrICYmIGV2dHNbaV0uZm4uXyAhPT0gY2FsbGJhY2spXG4gICAgICAgICAgbGl2ZUV2ZW50cy5wdXNoKGV2dHNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlbW92ZSBldmVudCBmcm9tIHF1ZXVlIHRvIHByZXZlbnQgbWVtb3J5IGxlYWtcbiAgICAvLyBTdWdnZXN0ZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL2xhemRcbiAgICAvLyBSZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9zY290dGNvcmdhbi90aW55LWVtaXR0ZXIvY29tbWl0L2M2ZWJmYWE5YmM5NzNiMzNkMTEwYTg0YTMwNzc0MmI3Y2Y5NGM5NTMjY29tbWl0Y29tbWVudC01MDI0OTEwXG5cbiAgICAobGl2ZUV2ZW50cy5sZW5ndGgpXG4gICAgICA/IGVbbmFtZV0gPSBsaXZlRXZlbnRzXG4gICAgICA6IGRlbGV0ZSBlW25hbWVdO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gRTtcbm1vZHVsZS5leHBvcnRzLlRpbnlFbWl0dGVyID0gRTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/tiny-emitter/index.js\n");

/***/ }),

/***/ "./node_modules/virtual-scroll/lib/virtualscroll.js":
/*!**********************************************************!*\
  !*** ./node_modules/virtual-scroll/lib/virtualscroll.js ***!
  \**********************************************************/
/***/ (function(module) {

eval("!function(e,t){ true?module.exports=t():0}(this,function(){var e=0;function t(t){return\"__private_\"+e+++\"_\"+t}function i(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError(\"attempted to use private field on non-instance\");return e}function n(){}n.prototype={on:function(e,t,i){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:i}),this},once:function(e,t,i){var n=this;function o(){n.off(e,o),t.apply(i,arguments)}return o._=t,this.on(e,o,i)},emit:function(e){for(var t=[].slice.call(arguments,1),i=((this.e||(this.e={}))[e]||[]).slice(),n=0,o=i.length;n<o;n++)i[n].fn.apply(i[n].ctx,t);return this},off:function(e,t){var i=this.e||(this.e={}),n=i[e],o=[];if(n&&t)for(var s=0,h=n.length;s<h;s++)n[s].fn!==t&&n[s].fn._!==t&&o.push(n[s]);return o.length?i[e]=o:delete i[e],this}};var o=n;o.TinyEmitter=n;var s,h=\"virtualscroll\",r=t(\"options\"),a=t(\"el\"),l=t(\"emitter\"),u=t(\"event\"),c=t(\"touchStart\"),d=t(\"bodyTouchAction\");return function(){function e(e){var t=this;Object.defineProperty(this,r,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),this._onWheel=function(e){var n=i(t,r)[r],o=i(t,u)[u];o.deltaX=e.wheelDeltaX||-1*e.deltaX,o.deltaY=e.wheelDeltaY||-1*e.deltaY,s.isFirefox&&1===e.deltaMode&&(o.deltaX*=n.firefoxMultiplier,o.deltaY*=n.firefoxMultiplier),o.deltaX*=n.mouseMultiplier,o.deltaY*=n.mouseMultiplier,t._notify(e)},this._onMouseWheel=function(e){var n=i(t,u)[u];n.deltaX=e.wheelDeltaX?e.wheelDeltaX:0,n.deltaY=e.wheelDeltaY?e.wheelDeltaY:e.wheelDelta,t._notify(e)},this._onTouchStart=function(e){var n=e.targetTouches?e.targetTouches[0]:e;i(t,c)[c].x=n.pageX,i(t,c)[c].y=n.pageY},this._onTouchMove=function(e){var n=i(t,r)[r];n.preventTouch&&!e.target.classList.contains(n.unpreventTouchClass)&&e.preventDefault();var o=i(t,u)[u],s=e.targetTouches?e.targetTouches[0]:e;o.deltaX=(s.pageX-i(t,c)[c].x)*n.touchMultiplier,o.deltaY=(s.pageY-i(t,c)[c].y)*n.touchMultiplier,i(t,c)[c].x=s.pageX,i(t,c)[c].y=s.pageY,t._notify(e)},this._onKeyDown=function(e){var n=i(t,u)[u];n.deltaX=n.deltaY=0;var o=window.innerHeight-40;switch(e.keyCode){case 37:case 38:n.deltaY=i(t,r)[r].keyStep;break;case 39:case 40:n.deltaY=-i(t,r)[r].keyStep;break;case 32:n.deltaY=o*(e.shiftKey?1:-1);break;default:return}t._notify(e)},i(this,a)[a]=window,e&&e.el&&(i(this,a)[a]=e.el,delete e.el),s||(s={hasWheelEvent:\"onwheel\"in document,hasMouseWheelEvent:\"onmousewheel\"in document,hasTouch:\"ontouchstart\"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:\"onkeydown\"in document,isFirefox:navigator.userAgent.indexOf(\"Firefox\")>-1}),i(this,r)[r]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:\"vs-touchmove-allowed\",useKeyboard:!0,useTouch:!0},e),i(this,l)[l]=new o,i(this,u)[u]={y:0,x:0,deltaX:0,deltaY:0},i(this,c)[c]={x:null,y:null},i(this,d)[d]=null,void 0!==i(this,r)[r].passive&&(this.listenerOptions={passive:i(this,r)[r].passive})}var t=e.prototype;return t._notify=function(e){var t=i(this,u)[u];t.x+=t.deltaX,t.y+=t.deltaY,i(this,l)[l].emit(h,{x:t.x,y:t.y,deltaX:t.deltaX,deltaY:t.deltaY,originalEvent:e})},t._bind=function(){s.hasWheelEvent&&i(this,a)[a].addEventListener(\"wheel\",this._onWheel,this.listenerOptions),s.hasMouseWheelEvent&&i(this,a)[a].addEventListener(\"mousewheel\",this._onMouseWheel,this.listenerOptions),s.hasTouch&&i(this,r)[r].useTouch&&(i(this,a)[a].addEventListener(\"touchstart\",this._onTouchStart,this.listenerOptions),i(this,a)[a].addEventListener(\"touchmove\",this._onTouchMove,this.listenerOptions)),s.hasPointer&&s.hasTouchWin&&(i(this,d)[d]=document.body.style.msTouchAction,document.body.style.msTouchAction=\"none\",i(this,a)[a].addEventListener(\"MSPointerDown\",this._onTouchStart,!0),i(this,a)[a].addEventListener(\"MSPointerMove\",this._onTouchMove,!0)),s.hasKeyDown&&i(this,r)[r].useKeyboard&&document.addEventListener(\"keydown\",this._onKeyDown)},t._unbind=function(){s.hasWheelEvent&&i(this,a)[a].removeEventListener(\"wheel\",this._onWheel),s.hasMouseWheelEvent&&i(this,a)[a].removeEventListener(\"mousewheel\",this._onMouseWheel),s.hasTouch&&(i(this,a)[a].removeEventListener(\"touchstart\",this._onTouchStart),i(this,a)[a].removeEventListener(\"touchmove\",this._onTouchMove)),s.hasPointer&&s.hasTouchWin&&(document.body.style.msTouchAction=i(this,d)[d],i(this,a)[a].removeEventListener(\"MSPointerDown\",this._onTouchStart,!0),i(this,a)[a].removeEventListener(\"MSPointerMove\",this._onTouchMove,!0)),s.hasKeyDown&&i(this,r)[r].useKeyboard&&document.removeEventListener(\"keydown\",this._onKeyDown)},t.on=function(e,t){i(this,l)[l].on(h,e,t);var n=i(this,l)[l].e;n&&n[h]&&1===n[h].length&&this._bind()},t.off=function(e,t){i(this,l)[l].off(h,e,t);var n=i(this,l)[l].e;(!n[h]||n[h].length<=0)&&this._unbind()},t.destroy=function(){i(this,l)[l].off(),this._unbind()},e}()});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdmlydHVhbC1zY3JvbGwvbGliL3ZpcnR1YWxzY3JvbGwuanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxLQUFvRCxvQkFBb0IsQ0FBMkUsQ0FBQyxpQkFBaUIsUUFBUSxjQUFjLDZCQUE2QixnQkFBZ0Isb0hBQW9ILFNBQVMsY0FBYyxhQUFhLG1CQUFtQix3QkFBd0IsRUFBRSw4QkFBOEIsV0FBVyxPQUFPLHNCQUFzQixXQUFXLGFBQWEsZ0NBQWdDLDRCQUE0QixrQkFBa0IsMkRBQTJELGtDQUFrQyxJQUFJLDhCQUE4QixZQUFZLG1CQUFtQix3QkFBd0IsY0FBYywrQkFBK0IsSUFBSSw2Q0FBNkMsMENBQTBDLFFBQVEsZ0JBQWdCLHNIQUFzSCxrQkFBa0IsY0FBYyxXQUFXLDhCQUE4Qix5QkFBeUIsZ0NBQWdDLHlCQUF5QixnQ0FBZ0MseUJBQXlCLGdDQUFnQyx5QkFBeUIsZ0NBQWdDLHlCQUF5QixnQ0FBZ0MseUJBQXlCLDRCQUE0Qiw0QkFBNEIseU9BQXlPLGdDQUFnQyxnQkFBZ0Isc0dBQXNHLGdDQUFnQywyQ0FBMkMsd0NBQXdDLCtCQUErQixnQkFBZ0Isd0ZBQXdGLHVEQUF1RCx1SkFBdUosNkJBQTZCLGdCQUFnQixvQkFBb0IsNEJBQTRCLGtCQUFrQiwyQ0FBMkMsTUFBTSw0Q0FBNEMsTUFBTSxxQ0FBcUMsTUFBTSxlQUFlLGFBQWEscUVBQXFFLDZUQUE2VCw4QkFBOEIsMkpBQTJKLHFDQUFxQywwQkFBMEIsZUFBZSxjQUFjLHlFQUF5RSw2QkFBNkIsRUFBRSxrQkFBa0IsNkJBQTZCLG1CQUFtQixpREFBaUQsNERBQTRELEVBQUUsb0JBQW9CLDZ1QkFBNnVCLHNCQUFzQiw4bUJBQThtQixvQkFBb0IsdUJBQXVCLHFCQUFxQix1Q0FBdUMscUJBQXFCLHdCQUF3QixxQkFBcUIsd0NBQXdDLHNCQUFzQixrQ0FBa0MsR0FBRyxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3ZpcnR1YWwtc2Nyb2xsL2xpYi92aXJ0dWFsc2Nyb2xsLmpzPzZiODEiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6KGV8fHNlbGYpLnZpcnR1YWxTY3JvbGw9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7dmFyIGU9MDtmdW5jdGlvbiB0KHQpe3JldHVyblwiX19wcml2YXRlX1wiK2UrKytcIl9cIit0fWZ1bmN0aW9uIGkoZSx0KXtpZighT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byB1c2UgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7cmV0dXJuIGV9ZnVuY3Rpb24gbigpe31uLnByb3RvdHlwZT17b246ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPXRoaXMuZXx8KHRoaXMuZT17fSk7cmV0dXJuKG5bZV18fChuW2VdPVtdKSkucHVzaCh7Zm46dCxjdHg6aX0pLHRoaXN9LG9uY2U6ZnVuY3Rpb24oZSx0LGkpe3ZhciBuPXRoaXM7ZnVuY3Rpb24gbygpe24ub2ZmKGUsbyksdC5hcHBseShpLGFyZ3VtZW50cyl9cmV0dXJuIG8uXz10LHRoaXMub24oZSxvLGkpfSxlbWl0OmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cywxKSxpPSgodGhpcy5lfHwodGhpcy5lPXt9KSlbZV18fFtdKS5zbGljZSgpLG49MCxvPWkubGVuZ3RoO248bztuKyspaVtuXS5mbi5hcHBseShpW25dLmN0eCx0KTtyZXR1cm4gdGhpc30sb2ZmOmZ1bmN0aW9uKGUsdCl7dmFyIGk9dGhpcy5lfHwodGhpcy5lPXt9KSxuPWlbZV0sbz1bXTtpZihuJiZ0KWZvcih2YXIgcz0wLGg9bi5sZW5ndGg7czxoO3MrKyluW3NdLmZuIT09dCYmbltzXS5mbi5fIT09dCYmby5wdXNoKG5bc10pO3JldHVybiBvLmxlbmd0aD9pW2VdPW86ZGVsZXRlIGlbZV0sdGhpc319O3ZhciBvPW47by5UaW55RW1pdHRlcj1uO3ZhciBzLGg9XCJ2aXJ0dWFsc2Nyb2xsXCIscj10KFwib3B0aW9uc1wiKSxhPXQoXCJlbFwiKSxsPXQoXCJlbWl0dGVyXCIpLHU9dChcImV2ZW50XCIpLGM9dChcInRvdWNoU3RhcnRcIiksZD10KFwiYm9keVRvdWNoQWN0aW9uXCIpO3JldHVybiBmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dmFyIHQ9dGhpcztPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxyLHt3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxhLHt3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxsLHt3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx1LHt3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxjLHt3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyxkLHt3cml0YWJsZTohMCx2YWx1ZTp2b2lkIDB9KSx0aGlzLl9vbldoZWVsPWZ1bmN0aW9uKGUpe3ZhciBuPWkodCxyKVtyXSxvPWkodCx1KVt1XTtvLmRlbHRhWD1lLndoZWVsRGVsdGFYfHwtMSplLmRlbHRhWCxvLmRlbHRhWT1lLndoZWVsRGVsdGFZfHwtMSplLmRlbHRhWSxzLmlzRmlyZWZveCYmMT09PWUuZGVsdGFNb2RlJiYoby5kZWx0YVgqPW4uZmlyZWZveE11bHRpcGxpZXIsby5kZWx0YVkqPW4uZmlyZWZveE11bHRpcGxpZXIpLG8uZGVsdGFYKj1uLm1vdXNlTXVsdGlwbGllcixvLmRlbHRhWSo9bi5tb3VzZU11bHRpcGxpZXIsdC5fbm90aWZ5KGUpfSx0aGlzLl9vbk1vdXNlV2hlZWw9ZnVuY3Rpb24oZSl7dmFyIG49aSh0LHUpW3VdO24uZGVsdGFYPWUud2hlZWxEZWx0YVg/ZS53aGVlbERlbHRhWDowLG4uZGVsdGFZPWUud2hlZWxEZWx0YVk/ZS53aGVlbERlbHRhWTplLndoZWVsRGVsdGEsdC5fbm90aWZ5KGUpfSx0aGlzLl9vblRvdWNoU3RhcnQ9ZnVuY3Rpb24oZSl7dmFyIG49ZS50YXJnZXRUb3VjaGVzP2UudGFyZ2V0VG91Y2hlc1swXTplO2kodCxjKVtjXS54PW4ucGFnZVgsaSh0LGMpW2NdLnk9bi5wYWdlWX0sdGhpcy5fb25Ub3VjaE1vdmU9ZnVuY3Rpb24oZSl7dmFyIG49aSh0LHIpW3JdO24ucHJldmVudFRvdWNoJiYhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKG4udW5wcmV2ZW50VG91Y2hDbGFzcykmJmUucHJldmVudERlZmF1bHQoKTt2YXIgbz1pKHQsdSlbdV0scz1lLnRhcmdldFRvdWNoZXM/ZS50YXJnZXRUb3VjaGVzWzBdOmU7by5kZWx0YVg9KHMucGFnZVgtaSh0LGMpW2NdLngpKm4udG91Y2hNdWx0aXBsaWVyLG8uZGVsdGFZPShzLnBhZ2VZLWkodCxjKVtjXS55KSpuLnRvdWNoTXVsdGlwbGllcixpKHQsYylbY10ueD1zLnBhZ2VYLGkodCxjKVtjXS55PXMucGFnZVksdC5fbm90aWZ5KGUpfSx0aGlzLl9vbktleURvd249ZnVuY3Rpb24oZSl7dmFyIG49aSh0LHUpW3VdO24uZGVsdGFYPW4uZGVsdGFZPTA7dmFyIG89d2luZG93LmlubmVySGVpZ2h0LTQwO3N3aXRjaChlLmtleUNvZGUpe2Nhc2UgMzc6Y2FzZSAzODpuLmRlbHRhWT1pKHQscilbcl0ua2V5U3RlcDticmVhaztjYXNlIDM5OmNhc2UgNDA6bi5kZWx0YVk9LWkodCxyKVtyXS5rZXlTdGVwO2JyZWFrO2Nhc2UgMzI6bi5kZWx0YVk9byooZS5zaGlmdEtleT8xOi0xKTticmVhaztkZWZhdWx0OnJldHVybn10Ll9ub3RpZnkoZSl9LGkodGhpcyxhKVthXT13aW5kb3csZSYmZS5lbCYmKGkodGhpcyxhKVthXT1lLmVsLGRlbGV0ZSBlLmVsKSxzfHwocz17aGFzV2hlZWxFdmVudDpcIm9ud2hlZWxcImluIGRvY3VtZW50LGhhc01vdXNlV2hlZWxFdmVudDpcIm9ubW91c2V3aGVlbFwiaW4gZG9jdW1lbnQsaGFzVG91Y2g6XCJvbnRvdWNoc3RhcnRcImluIGRvY3VtZW50LGhhc1RvdWNoV2luOm5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzJiZuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cz4xLGhhc1BvaW50ZXI6ISF3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQsaGFzS2V5RG93bjpcIm9ua2V5ZG93blwiaW4gZG9jdW1lbnQsaXNGaXJlZm94Om5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkZpcmVmb3hcIik+LTF9KSxpKHRoaXMscilbcl09T2JqZWN0LmFzc2lnbih7bW91c2VNdWx0aXBsaWVyOjEsdG91Y2hNdWx0aXBsaWVyOjIsZmlyZWZveE11bHRpcGxpZXI6MTUsa2V5U3RlcDoxMjAscHJldmVudFRvdWNoOiExLHVucHJldmVudFRvdWNoQ2xhc3M6XCJ2cy10b3VjaG1vdmUtYWxsb3dlZFwiLHVzZUtleWJvYXJkOiEwLHVzZVRvdWNoOiEwfSxlKSxpKHRoaXMsbClbbF09bmV3IG8saSh0aGlzLHUpW3VdPXt5OjAseDowLGRlbHRhWDowLGRlbHRhWTowfSxpKHRoaXMsYylbY109e3g6bnVsbCx5Om51bGx9LGkodGhpcyxkKVtkXT1udWxsLHZvaWQgMCE9PWkodGhpcyxyKVtyXS5wYXNzaXZlJiYodGhpcy5saXN0ZW5lck9wdGlvbnM9e3Bhc3NpdmU6aSh0aGlzLHIpW3JdLnBhc3NpdmV9KX12YXIgdD1lLnByb3RvdHlwZTtyZXR1cm4gdC5fbm90aWZ5PWZ1bmN0aW9uKGUpe3ZhciB0PWkodGhpcyx1KVt1XTt0LngrPXQuZGVsdGFYLHQueSs9dC5kZWx0YVksaSh0aGlzLGwpW2xdLmVtaXQoaCx7eDp0LngseTp0LnksZGVsdGFYOnQuZGVsdGFYLGRlbHRhWTp0LmRlbHRhWSxvcmlnaW5hbEV2ZW50OmV9KX0sdC5fYmluZD1mdW5jdGlvbigpe3MuaGFzV2hlZWxFdmVudCYmaSh0aGlzLGEpW2FdLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLHRoaXMuX29uV2hlZWwsdGhpcy5saXN0ZW5lck9wdGlvbnMpLHMuaGFzTW91c2VXaGVlbEV2ZW50JiZpKHRoaXMsYSlbYV0uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIix0aGlzLl9vbk1vdXNlV2hlZWwsdGhpcy5saXN0ZW5lck9wdGlvbnMpLHMuaGFzVG91Y2gmJmkodGhpcyxyKVtyXS51c2VUb3VjaCYmKGkodGhpcyxhKVthXS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLHRoaXMuX29uVG91Y2hTdGFydCx0aGlzLmxpc3RlbmVyT3B0aW9ucyksaSh0aGlzLGEpW2FdLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSx0aGlzLmxpc3RlbmVyT3B0aW9ucykpLHMuaGFzUG9pbnRlciYmcy5oYXNUb3VjaFdpbiYmKGkodGhpcyxkKVtkXT1kb2N1bWVudC5ib2R5LnN0eWxlLm1zVG91Y2hBY3Rpb24sZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uPVwibm9uZVwiLGkodGhpcyxhKVthXS5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLHRoaXMuX29uVG91Y2hTdGFydCwhMCksaSh0aGlzLGEpW2FdLmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJNb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUsITApKSxzLmhhc0tleURvd24mJmkodGhpcyxyKVtyXS51c2VLZXlib2FyZCYmZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIix0aGlzLl9vbktleURvd24pfSx0Ll91bmJpbmQ9ZnVuY3Rpb24oKXtzLmhhc1doZWVsRXZlbnQmJmkodGhpcyxhKVthXS5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIix0aGlzLl9vbldoZWVsKSxzLmhhc01vdXNlV2hlZWxFdmVudCYmaSh0aGlzLGEpW2FdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsdGhpcy5fb25Nb3VzZVdoZWVsKSxzLmhhc1RvdWNoJiYoaSh0aGlzLGEpW2FdLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdGhpcy5fb25Ub3VjaFN0YXJ0KSxpKHRoaXMsYSlbYV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlKSkscy5oYXNQb2ludGVyJiZzLmhhc1RvdWNoV2luJiYoZG9jdW1lbnQuYm9keS5zdHlsZS5tc1RvdWNoQWN0aW9uPWkodGhpcyxkKVtkXSxpKHRoaXMsYSlbYV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1TUG9pbnRlckRvd25cIix0aGlzLl9vblRvdWNoU3RhcnQsITApLGkodGhpcyxhKVthXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyTW92ZVwiLHRoaXMuX29uVG91Y2hNb3ZlLCEwKSkscy5oYXNLZXlEb3duJiZpKHRoaXMscilbcl0udXNlS2V5Ym9hcmQmJmRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsdGhpcy5fb25LZXlEb3duKX0sdC5vbj1mdW5jdGlvbihlLHQpe2kodGhpcyxsKVtsXS5vbihoLGUsdCk7dmFyIG49aSh0aGlzLGwpW2xdLmU7biYmbltoXSYmMT09PW5baF0ubGVuZ3RoJiZ0aGlzLl9iaW5kKCl9LHQub2ZmPWZ1bmN0aW9uKGUsdCl7aSh0aGlzLGwpW2xdLm9mZihoLGUsdCk7dmFyIG49aSh0aGlzLGwpW2xdLmU7KCFuW2hdfHxuW2hdLmxlbmd0aDw9MCkmJnRoaXMuX3VuYmluZCgpfSx0LmRlc3Ryb3k9ZnVuY3Rpb24oKXtpKHRoaXMsbClbbF0ub2ZmKCksdGhpcy5fdW5iaW5kKCl9LGV9KCl9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/virtual-scroll/lib/virtualscroll.js\n");

/***/ }),

/***/ "./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ e)\n/* harmony export */ });\n/* harmony import */ var tiny_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-emitter */ \"./node_modules/tiny-emitter/index.js\");\n/* harmony import */ var virtual_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! virtual-scroll */ \"./node_modules/virtual-scroll/lib/virtualscroll.js\");\nclass e extends tiny_emitter__WEBPACK_IMPORTED_MODULE_0__{constructor({lerp:t=.1,smooth:e=!0,direction:r=\"vertical\",wrapper:s=window,content:o=document.body}={}){var l,h,n;super(),this.onWindowResize=()=>{this.wrapperWidth=window.innerWidth,this.wrapperHeight=window.innerHeight},this.onWrapperResize=t=>{const i=t[0];if(i){const t=i.contentRect;this.wrapperWidth=t.width,this.wrapperHeight=t.height}},this.onContentResize=t=>{const i=t[0];if(i){const t=i.contentRect;this.contentWidth=t.width,this.contentHeight=t.height}},this.onVirtualScroll=({deltaY:t,originalEvent:i})=>{i.ctrlKey||(this.stopped?i.preventDefault():(this.smooth&&i.preventDefault(),this.targetScroll-=t,this.targetScroll=Math.max(0,Math.min(this.targetScroll,this.limit))))},this.onScroll=t=>{if(!(this.stopped||this.scrolling&&this.smooth)){const t=this.scroll;this.targetScroll=this.scroll=this.wrapperNode[this.scrollProperty],this.velocity=this.scroll-t,this.notify()}},this.wrapperNode=s,this.contentNode=o,this.lerp=t,this.smooth=e,this.direction=r,this.wrapperNode.addEventListener(\"scroll\",this.onScroll,!1);const c=(null==(l=navigator)||null==(h=l.userAgentData)?void 0:h.platform)||(null==(n=navigator)?void 0:n.platform)||\"unknown\";this.virtualScroll=new virtual_scroll__WEBPACK_IMPORTED_MODULE_1__({el:this.wrapperNode,firefoxMultiplier:50,mouseMultiplier:c.indexOf(\"Win\")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),this.virtualScroll.on(this.onVirtualScroll),this.wrapperNode===window?(this.wrapperNode.addEventListener(\"resize\",this.onWindowResize,!1),this.onWindowResize()):(this.wrapperHeight=this.wrapperNode.offsetHeight,this.wrapperWidth=this.wrapperNode.offsetWidth,this.wrapperObserver=new ResizeObserver(this.onWrapperResize),this.wrapperObserver.observe(this.wrapperNode)),this.contentHeight=this.contentNode.offsetHeight,this.contentWidth=this.contentNode.offsetWidth,this.contentObserver=new ResizeObserver(this.onContentResize),this.contentObserver.observe(this.contentNode),this.targetScroll=this.scroll=this.wrapperNode[this.scrollProperty],this.velocity=0}get scrollProperty(){let t;return t=this.wrapperNode===window?\"horizontal\"===this.direction?\"scrollX\":\"scrollY\":\"horizontal\"===this.direction?\"scrollLeft\":\"scrollTop\",t}start(){this.stopped=!1}stop(){this.stopped=!0}destroy(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener(\"resize\",this.onWindowResize,!1),this.wrapperNode.removeEventListener(\"scroll\",this.onScroll,!1),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()}get limit(){return\"horizontal\"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}raf(){if(this.stopped||!this.smooth)return;let t=this.scroll;var i;this.scroll=(1-(i=this.lerp))*this.scroll+i*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=t=this.targetScroll),this.velocity=this.scroll-t,this.scrolling&&(this._scrollTo(this.scroll),this.notify()),this.scrolling=this.scroll!==this.targetScroll}_scrollTo(t){\"horizontal\"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)}notify(){this.emit(\"scroll\",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})}scrollTo(t,{offset:i=0,immediate:e=!1}={}){let r;if(\"number\"==typeof t)r=t;else if(\"top\"===t)r=0;else if(\"bottom\"===t)r=this.limit;else{let i;if(\"string\"==typeof t)i=document.querySelector(t);else{if(null==t||!t.nodeType)return;i=t}if(!t)return;let e=0;if(this.wrapperNode!==window){const t=this.wrapperNode.getBoundingClientRect();e=\"horizontal\"===this.direction?t.left:t.top}const s=i.getBoundingClientRect();r=(\"horizontal\"===this.direction?s.left:s.top)+this.scroll-e}r+=i,this.targetScroll=r,this.scrolling=!0,this.smooth&&!e||(this.scroll=r,this._scrollTo(this.scroll))}}\n//# sourceMappingURL=lenis.modern.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN0dWRpby1mcmVpZ2h0L2xlbmlzL2Rpc3QvbGVuaXMubW9kZXJuLm1qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEQsZ0JBQWdCLHlDQUFDLENBQUMsYUFBYSxzRkFBc0YsR0FBRyxFQUFFLFVBQVUsaUNBQWlDLDBFQUEwRSwwQkFBMEIsYUFBYSxNQUFNLHNCQUFzQix1REFBdUQsMEJBQTBCLGFBQWEsTUFBTSxzQkFBc0IsdURBQXVELHdCQUF3Qix5QkFBeUIsSUFBSSx5S0FBeUssbUJBQW1CLGlEQUFpRCxvQkFBb0IsK0dBQStHLCtJQUErSSwrSEFBK0gsdUJBQXVCLDJDQUFDLEVBQUUsd0hBQXdILG1wQkFBbXBCLHFCQUFxQixNQUFNLDhJQUE4SSxRQUFRLGdCQUFnQixPQUFPLGdCQUFnQixVQUFVLE1BQU0sK1FBQStRLFlBQVksOEdBQThHLE1BQU0scUNBQXFDLGtCQUFrQixNQUFNLGdTQUFnUyxhQUFhLDRGQUE0RixTQUFTLG9CQUFvQixvSEFBb0gsRUFBRSxZQUFZLDBCQUEwQixHQUFHLEVBQUUsTUFBTSwwQkFBMEIsc0JBQXNCLGtDQUFrQyxLQUFLLE1BQU0sa0RBQWtELEtBQUssK0JBQStCLElBQUksYUFBYSxRQUFRLDhCQUE4QixpREFBaUQsNkNBQTZDLGtDQUFrQyw2REFBNkQseUdBQThIO0FBQzN4SCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ac3R1ZGlvLWZyZWlnaHQvbGVuaXMvZGlzdC9sZW5pcy5tb2Rlcm4ubWpzPzY3NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHQgZnJvbVwidGlueS1lbWl0dGVyXCI7aW1wb3J0IGkgZnJvbVwidmlydHVhbC1zY3JvbGxcIjtjbGFzcyBlIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcih7bGVycDp0PS4xLHNtb290aDplPSEwLGRpcmVjdGlvbjpyPVwidmVydGljYWxcIix3cmFwcGVyOnM9d2luZG93LGNvbnRlbnQ6bz1kb2N1bWVudC5ib2R5fT17fSl7dmFyIGwsaCxuO3N1cGVyKCksdGhpcy5vbldpbmRvd1Jlc2l6ZT0oKT0+e3RoaXMud3JhcHBlcldpZHRoPXdpbmRvdy5pbm5lcldpZHRoLHRoaXMud3JhcHBlckhlaWdodD13aW5kb3cuaW5uZXJIZWlnaHR9LHRoaXMub25XcmFwcGVyUmVzaXplPXQ9Pntjb25zdCBpPXRbMF07aWYoaSl7Y29uc3QgdD1pLmNvbnRlbnRSZWN0O3RoaXMud3JhcHBlcldpZHRoPXQud2lkdGgsdGhpcy53cmFwcGVySGVpZ2h0PXQuaGVpZ2h0fX0sdGhpcy5vbkNvbnRlbnRSZXNpemU9dD0+e2NvbnN0IGk9dFswXTtpZihpKXtjb25zdCB0PWkuY29udGVudFJlY3Q7dGhpcy5jb250ZW50V2lkdGg9dC53aWR0aCx0aGlzLmNvbnRlbnRIZWlnaHQ9dC5oZWlnaHR9fSx0aGlzLm9uVmlydHVhbFNjcm9sbD0oe2RlbHRhWTp0LG9yaWdpbmFsRXZlbnQ6aX0pPT57aS5jdHJsS2V5fHwodGhpcy5zdG9wcGVkP2kucHJldmVudERlZmF1bHQoKToodGhpcy5zbW9vdGgmJmkucHJldmVudERlZmF1bHQoKSx0aGlzLnRhcmdldFNjcm9sbC09dCx0aGlzLnRhcmdldFNjcm9sbD1NYXRoLm1heCgwLE1hdGgubWluKHRoaXMudGFyZ2V0U2Nyb2xsLHRoaXMubGltaXQpKSkpfSx0aGlzLm9uU2Nyb2xsPXQ9PntpZighKHRoaXMuc3RvcHBlZHx8dGhpcy5zY3JvbGxpbmcmJnRoaXMuc21vb3RoKSl7Y29uc3QgdD10aGlzLnNjcm9sbDt0aGlzLnRhcmdldFNjcm9sbD10aGlzLnNjcm9sbD10aGlzLndyYXBwZXJOb2RlW3RoaXMuc2Nyb2xsUHJvcGVydHldLHRoaXMudmVsb2NpdHk9dGhpcy5zY3JvbGwtdCx0aGlzLm5vdGlmeSgpfX0sdGhpcy53cmFwcGVyTm9kZT1zLHRoaXMuY29udGVudE5vZGU9byx0aGlzLmxlcnA9dCx0aGlzLnNtb290aD1lLHRoaXMuZGlyZWN0aW9uPXIsdGhpcy53cmFwcGVyTm9kZS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5vblNjcm9sbCwhMSk7Y29uc3QgYz0obnVsbD09KGw9bmF2aWdhdG9yKXx8bnVsbD09KGg9bC51c2VyQWdlbnREYXRhKT92b2lkIDA6aC5wbGF0Zm9ybSl8fChudWxsPT0obj1uYXZpZ2F0b3IpP3ZvaWQgMDpuLnBsYXRmb3JtKXx8XCJ1bmtub3duXCI7dGhpcy52aXJ0dWFsU2Nyb2xsPW5ldyBpKHtlbDp0aGlzLndyYXBwZXJOb2RlLGZpcmVmb3hNdWx0aXBsaWVyOjUwLG1vdXNlTXVsdGlwbGllcjpjLmluZGV4T2YoXCJXaW5cIik+LTE/MTouNCx1c2VLZXlib2FyZDohMSx1c2VUb3VjaDohMSxwYXNzaXZlOiExfSksdGhpcy52aXJ0dWFsU2Nyb2xsLm9uKHRoaXMub25WaXJ0dWFsU2Nyb2xsKSx0aGlzLndyYXBwZXJOb2RlPT09d2luZG93Pyh0aGlzLndyYXBwZXJOb2RlLmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIix0aGlzLm9uV2luZG93UmVzaXplLCExKSx0aGlzLm9uV2luZG93UmVzaXplKCkpOih0aGlzLndyYXBwZXJIZWlnaHQ9dGhpcy53cmFwcGVyTm9kZS5vZmZzZXRIZWlnaHQsdGhpcy53cmFwcGVyV2lkdGg9dGhpcy53cmFwcGVyTm9kZS5vZmZzZXRXaWR0aCx0aGlzLndyYXBwZXJPYnNlcnZlcj1uZXcgUmVzaXplT2JzZXJ2ZXIodGhpcy5vbldyYXBwZXJSZXNpemUpLHRoaXMud3JhcHBlck9ic2VydmVyLm9ic2VydmUodGhpcy53cmFwcGVyTm9kZSkpLHRoaXMuY29udGVudEhlaWdodD10aGlzLmNvbnRlbnROb2RlLm9mZnNldEhlaWdodCx0aGlzLmNvbnRlbnRXaWR0aD10aGlzLmNvbnRlbnROb2RlLm9mZnNldFdpZHRoLHRoaXMuY29udGVudE9ic2VydmVyPW5ldyBSZXNpemVPYnNlcnZlcih0aGlzLm9uQ29udGVudFJlc2l6ZSksdGhpcy5jb250ZW50T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmNvbnRlbnROb2RlKSx0aGlzLnRhcmdldFNjcm9sbD10aGlzLnNjcm9sbD10aGlzLndyYXBwZXJOb2RlW3RoaXMuc2Nyb2xsUHJvcGVydHldLHRoaXMudmVsb2NpdHk9MH1nZXQgc2Nyb2xsUHJvcGVydHkoKXtsZXQgdDtyZXR1cm4gdD10aGlzLndyYXBwZXJOb2RlPT09d2luZG93P1wiaG9yaXpvbnRhbFwiPT09dGhpcy5kaXJlY3Rpb24/XCJzY3JvbGxYXCI6XCJzY3JvbGxZXCI6XCJob3Jpem9udGFsXCI9PT10aGlzLmRpcmVjdGlvbj9cInNjcm9sbExlZnRcIjpcInNjcm9sbFRvcFwiLHR9c3RhcnQoKXt0aGlzLnN0b3BwZWQ9ITF9c3RvcCgpe3RoaXMuc3RvcHBlZD0hMH1kZXN0cm95KCl7dmFyIHQ7dGhpcy53cmFwcGVyTm9kZT09PXdpbmRvdyYmdGhpcy53cmFwcGVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsdGhpcy5vbldpbmRvd1Jlc2l6ZSwhMSksdGhpcy53cmFwcGVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsdGhpcy5vblNjcm9sbCwhMSksdGhpcy52aXJ0dWFsU2Nyb2xsLmRlc3Ryb3koKSxudWxsPT0odD10aGlzLndyYXBwZXJPYnNlcnZlcil8fHQuZGlzY29ubmVjdCgpLHRoaXMuY29udGVudE9ic2VydmVyLmRpc2Nvbm5lY3QoKX1nZXQgbGltaXQoKXtyZXR1cm5cImhvcml6b250YWxcIj09PXRoaXMuZGlyZWN0aW9uP3RoaXMuY29udGVudFdpZHRoLXRoaXMud3JhcHBlcldpZHRoOnRoaXMuY29udGVudEhlaWdodC10aGlzLndyYXBwZXJIZWlnaHR9cmFmKCl7aWYodGhpcy5zdG9wcGVkfHwhdGhpcy5zbW9vdGgpcmV0dXJuO2xldCB0PXRoaXMuc2Nyb2xsO3ZhciBpO3RoaXMuc2Nyb2xsPSgxLShpPXRoaXMubGVycCkpKnRoaXMuc2Nyb2xsK2kqdGhpcy50YXJnZXRTY3JvbGwsTWF0aC5yb3VuZCh0aGlzLnNjcm9sbCk9PT1NYXRoLnJvdW5kKHRoaXMudGFyZ2V0U2Nyb2xsKSYmKHRoaXMuc2Nyb2xsPXQ9dGhpcy50YXJnZXRTY3JvbGwpLHRoaXMudmVsb2NpdHk9dGhpcy5zY3JvbGwtdCx0aGlzLnNjcm9sbGluZyYmKHRoaXMuX3Njcm9sbFRvKHRoaXMuc2Nyb2xsKSx0aGlzLm5vdGlmeSgpKSx0aGlzLnNjcm9sbGluZz10aGlzLnNjcm9sbCE9PXRoaXMudGFyZ2V0U2Nyb2xsfV9zY3JvbGxUbyh0KXtcImhvcml6b250YWxcIj09PXRoaXMuZGlyZWN0aW9uP3RoaXMud3JhcHBlck5vZGUuc2Nyb2xsVG8odCwwKTp0aGlzLndyYXBwZXJOb2RlLnNjcm9sbFRvKDAsdCl9bm90aWZ5KCl7dGhpcy5lbWl0KFwic2Nyb2xsXCIse3Njcm9sbDp0aGlzLnNjcm9sbCxsaW1pdDp0aGlzLmxpbWl0LHZlbG9jaXR5OnRoaXMudmVsb2NpdHksZGlyZWN0aW9uOnRoaXMuZGlyZWN0aW9uLHByb2dyZXNzOnRoaXMuc2Nyb2xsL3RoaXMubGltaXR9KX1zY3JvbGxUbyh0LHtvZmZzZXQ6aT0wLGltbWVkaWF0ZTplPSExfT17fSl7bGV0IHI7aWYoXCJudW1iZXJcIj09dHlwZW9mIHQpcj10O2Vsc2UgaWYoXCJ0b3BcIj09PXQpcj0wO2Vsc2UgaWYoXCJib3R0b21cIj09PXQpcj10aGlzLmxpbWl0O2Vsc2V7bGV0IGk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpaT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHQpO2Vsc2V7aWYobnVsbD09dHx8IXQubm9kZVR5cGUpcmV0dXJuO2k9dH1pZighdClyZXR1cm47bGV0IGU9MDtpZih0aGlzLndyYXBwZXJOb2RlIT09d2luZG93KXtjb25zdCB0PXRoaXMud3JhcHBlck5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7ZT1cImhvcml6b250YWxcIj09PXRoaXMuZGlyZWN0aW9uP3QubGVmdDp0LnRvcH1jb25zdCBzPWkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cj0oXCJob3Jpem9udGFsXCI9PT10aGlzLmRpcmVjdGlvbj9zLmxlZnQ6cy50b3ApK3RoaXMuc2Nyb2xsLWV9cis9aSx0aGlzLnRhcmdldFNjcm9sbD1yLHRoaXMuc2Nyb2xsaW5nPSEwLHRoaXMuc21vb3RoJiYhZXx8KHRoaXMuc2Nyb2xsPXIsdGhpcy5fc2Nyb2xsVG8odGhpcy5zY3JvbGwpKX19ZXhwb3J0e2UgYXMgZGVmYXVsdH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sZW5pcy5tb2Rlcm4ubWpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/web/assets/js/app": 0,
/******/ 			"web/assets/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["web/assets/css/app"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["web/assets/css/app"], () => (__webpack_require__("./src/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;