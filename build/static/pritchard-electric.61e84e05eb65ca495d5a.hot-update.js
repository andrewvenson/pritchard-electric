webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/faq.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/faq.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./packages/mars-theme/src/components/footer.js\");\n/* harmony import */ var react_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-faq-component */ \"./node_modules/react-faq-component/build/index.es.js\");\nfunction asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value;}catch(error){reject(error);return;}if(info.done){resolve(value);}else{Promise.resolve(value).then(_next,_throw);}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"next\",value);}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,\"throw\",err);}_next(undefined);});};}var Faq=(_ref)=>{var{state,actions}=_ref;var[faqs,setFaqs]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(/*#__PURE__*/_asyncToGenerator(function*(){var results=yield axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"https://manage.pritchardelectric.net/wp-json/wp/v2/posts/64?timestamp=\".concat(new Date().getTime()),{'Cache-Control':'no-cache','Pragma':'no-cache','Expires':'0'});var data=results.data.content.rendered.replace(/\\n/g,'');data=data.replace(/<h2>/g,'');data=data.replace(/<\\/h2>/g,'');data=data.replace(/<\\/p>/g,'|');data=data.replace(/<p>/g,'|');var questAns=data.split(\"|\");console.log(questAns);var row=[];questAns.forEach((item,index)=>{if(index!==questAns.length-1){console.log(index);if(index%2===0){row.push({title:item,content:\"\"});}}console.log(row);});questAns.forEach((item,index)=>{if(index!==questAns.length-1){console.log(index);if(index%2===0){row.push({title:item,content:\"\"});}}console.log(row);});setFaqs({title:\"FAQs\",rows:row});}),[]);var data={title:\"FAQs\",/*\n    rows: [\n      {\n        title: \"When should I consider calling an electrician?\",\n        content: (\n          <p>\n            When your life and well being is more valuable than your money. Of\n            all the types of work that can have hazardous effects, immediate and\n            unexpected. The electrical field is the most dangerous. Electrical\n            grounding and GFCI protection is probably the most misunderstood and\n            critical at the same time.\n          </p>\n        ),\n      },\n      {\n        title: \"Why would I need a new electrical circuit?\",\n        content: (\n          <p>\n            If you are adding equipment that has a large electrical demand it\n            may require its own circuit.\n          </p>\n        ),\n      },\n      {\n        title: \"What do I do if my circuit keeps overloading?\",\n        content: (\n          <p>\n            Confirm the electrical demand of each item on that circuit. It may\n            be as easy as moving an item to another location and plugging in to\n            another circuit. If you find that is not an option then a new\n            circuit to split the load may be necessary.\n          </p>\n        ),\n      },\n      {\n        title:\n          \"I have too many power strips behind my entertainment center and want to reduce the clutter. How can Pritchard Electric help me?\",\n        content: (\n          <p>\n            The best course of action would be to add receptacles in the desired\n            locations to reduce cords. It would also be a good idea to add a\n            surge protection device in the electrical panel to provide the surge\n            protection that the power strip may be providing.\n          </p>\n        ),\n      },\n      {\n        title: \"Can you change an existing switch to a dimmer switch?\",\n        content: (\n          <p>\n            In most cases you can change an existing switch to a dimmer switch\n            with no work on the wiring. The exception would be if the dimmer\n            needs a neutral wire and it is not available in the switch box.\n          </p>\n        ),\n      },\n      {\n        title: \"Why is a breaker in my panel feel hot to touch?\",\n        content: (\n          <p>\n            If a breaker in your panel is hot to the touch the first thing to do\n            is read the amps on the wire connected to that breaker to determine\n            if the breaker is nearing overload. They can operate at 80% of\n            maximum load for an extended period of time with no other adverse\n            effects than the breaker feeling warm. If hot enough you can't leave\n            your finger on it a loose connection or a bad connection between the\n            breaker and the buss bar may be the problem.\n          </p>\n        ),\n      },\n      {\n        title:\n          \"How can I tell when an electrical outlet is not safe or needs to be replaced?\",\n        content: (\n          <p>\n            If you plug into an electrical outlet and it is loose it should be\n            replaced. If the power is intermittent it is probably loose and\n            loose connections cause heat and heat can cause a fire.\n          </p>\n        ),\n      },\n    ],\n    */rows:faqs};var styles={// bgColor: 'white',\ntitleTextColor:\"#1f40a3\",rowTitleColor:\"#1f40a3\"// rowContentColor: 'grey',\n// arrowColor: \"red\",\n};var config={animate:true// arrowIcon: \"V\",\n// tabFocus: true\n};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"main\",{style:{width:\"100%\",boxShadow:\"inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"section\",{style:{display:\"flex\",justifyContent:\"center\",padding:\"50px\",marginTop:\"50px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{width:\"980px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react_faq_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{data:faqs,styles:styles,config:config}))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{marginTop:\"100px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null)));};// Connect the Item to gain access to `state` as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Faq));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZhcS5qcz9jY2YzIl0sIm5hbWVzIjpbIkZhcSIsInN0YXRlIiwiYWN0aW9ucyIsImZhcXMiLCJzZXRGYXFzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJyZXN1bHRzIiwiYXhpb3MiLCJnZXQiLCJEYXRlIiwiZ2V0VGltZSIsImRhdGEiLCJjb250ZW50IiwicmVuZGVyZWQiLCJyZXBsYWNlIiwicXVlc3RBbnMiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJyb3ciLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwibGVuZ3RoIiwicHVzaCIsInRpdGxlIiwicm93cyIsInN0eWxlcyIsInRpdGxlVGV4dENvbG9yIiwicm93VGl0bGVDb2xvciIsImNvbmZpZyIsImFuaW1hdGUiLCJ3aWR0aCIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Oztta0JBTUEsR0FBTUEsSUFBRyxDQUFHLFFBQXdCLElBQXZCLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUF1QixNQUVsQyxHQUFNLENBQUNDLElBQUQsQ0FBT0MsT0FBUCxFQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDLENBRUFDLHVEQUFTLGdDQUFDLFdBQVksQ0FDdkIsR0FBTUMsUUFBTyxNQUFTQyw2Q0FBSyxDQUFDQyxHQUFOLGlGQUFtRixHQUFJQyxLQUFKLEdBQVdDLE9BQVgsRUFBbkYsRUFBMkcsQ0FBQyxnQkFBaUIsVUFBbEIsQ0FBOEIsU0FBVSxVQUF4QyxDQUFvRCxVQUFXLEdBQS9ELENBQTNHLENBQXRCLENBRUEsR0FBSUMsS0FBSSxDQUFHTCxPQUFPLENBQUNLLElBQVIsQ0FBYUMsT0FBYixDQUFxQkMsUUFBckIsQ0FBOEJDLE9BQTlCLENBQXNDLEtBQXRDLENBQTZDLEVBQTdDLENBQVgsQ0FD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RSxLQUFLLENBQUUsQ0FDTEMsT0FBTyxDQUFFLE1BREosQ0FFTEMsY0FBYyxDQUFFLFFBRlgsQ0FHTEMsT0FBTyxDQUFFLE1BSEosQ0FJTEMsU0FBUyxDQUFFLE1BSk4sQ0FEVCxFQVFFLGlFQUFLLEtBQUssQ0FBRSxDQUFFTCxLQUFLLENBQUUsT0FBVCxDQUFaLEVBQ0UsMERBQUMsMkRBQUQsRUFBSyxJQUFJLENBQUU5QixJQUFYLENBQWlCLE1BQU0sQ0FBRXlCLE1BQXpCLENBQWlDLE1BQU0sQ0FBRUcsTUFBekMsRUFERixDQVJGLENBTkYsQ0FrQkUsaUVBQUssS0FBSyxDQUFFLENBQUVPLFNBQVMsQ0FBRSxPQUFiLENBQVosRUFDRSwwREFBQywrQ0FBRCxNQURGLENBbEJGLENBREYsQ0F3QkQsQ0F2S0QsQ0F5S0E7QUFDZUMsdUhBQU8sQ0FBQ3ZDLEdBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZhcS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QsIEdsb2JhbCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEZBUSBmcm9tIFwicmVhY3QtZmFxLWNvbXBvbmVudFwiO1xuXG5jb25zdCBGYXEgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG5cbiAgY29uc3QgW2ZhcXMsIHNldEZhcXNdID0gdXNlU3RhdGUoe30pO1xuXG4gIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vbWFuYWdlLnByaXRjaGFyZGVsZWN0cmljLm5ldC93cC1qc29uL3dwL3YyL3Bvc3RzLzY0P3RpbWVzdGFtcD0ke25ldyBEYXRlKCkuZ2V0VGltZSgpfWAsIHsnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsICdQcmFnbWEnOiAnbm8tY2FjaGUnLCAnRXhwaXJlcyc6ICcwJ30pO1xuXG5cdGxldCBkYXRhID0gcmVzdWx0cy5kYXRhLmNvbnRlbnQucmVuZGVyZWQucmVwbGFjZSgvXFxuL2csICcnKTtcblx0ZGF0YSA9IGRhdGEucmVwbGFjZSgvPGgyPi9nLCAnJyk7XG5cdGRhdGEgPSBkYXRhLnJlcGxhY2UoLzxcXC9oMj4vZywgJycpO1xuXHRkYXRhID0gZGF0YS5yZXBsYWNlKC88XFwvcD4vZywgJ3wnKTtcblx0ZGF0YSA9IGRhdGEucmVwbGFjZSgvPHA+L2csICd8Jyk7XG5cblx0bGV0IHF1ZXN0QW5zID0gZGF0YS5zcGxpdChcInxcIilcblx0XG5cdGNvbnNvbGUubG9nKHF1ZXN0QW5zKVxuXG5cdGxldCByb3cgPSBbXVxuXHRxdWVzdEFucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdGlmKGluZGV4ICE9PSBxdWVzdEFucy5sZW5ndGggLSAxICl7XG5cdFx0XHRjb25zb2xlLmxvZyhpbmRleClcblx0XHRcdGlmKGluZGV4JTIgPT09IDApe1xuXHRcdFx0XHRyb3cucHVzaCh7dGl0bGU6IGl0ZW0sIGNvbnRlbnQ6IFwiXCJ9KVxuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhyb3cpXG5cdH0pXG5cblx0cXVlc3RBbnMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcblx0XHRpZihpbmRleCAhPT0gcXVlc3RBbnMubGVuZ3RoIC0gMSApe1xuXHRcdFx0Y29uc29sZS5sb2coaW5kZXgpXG5cdFx0XHRpZihpbmRleCUyID09PSAwKXtcblx0XHRcdFx0cm93LnB1c2goe3RpdGxlOiBpdGVtLCBjb250ZW50OiBcIlwifSlcblx0XHRcdH1cblx0XHR9XG5cdFx0Y29uc29sZS5sb2cocm93KVxuXHR9KVxuXHRzZXRGYXFzKHt0aXRsZTogXCJGQVFzXCIsIHJvd3M6IHJvd30pO1xuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiRkFRc1wiLFxuLypcbiAgICByb3dzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIldoZW4gc2hvdWxkIEkgY29uc2lkZXIgY2FsbGluZyBhbiBlbGVjdHJpY2lhbj9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2hlbiB5b3VyIGxpZmUgYW5kIHdlbGwgYmVpbmcgaXMgbW9yZSB2YWx1YWJsZSB0aGFuIHlvdXIgbW9uZXkuIE9mXG4gICAgICAgICAgICBhbGwgdGhlIHR5cGVzIG9mIHdvcmsgdGhhdCBjYW4gaGF2ZSBoYXphcmRvdXMgZWZmZWN0cywgaW1tZWRpYXRlIGFuZFxuICAgICAgICAgICAgdW5leHBlY3RlZC4gVGhlIGVsZWN0cmljYWwgZmllbGQgaXMgdGhlIG1vc3QgZGFuZ2Vyb3VzLiBFbGVjdHJpY2FsXG4gICAgICAgICAgICBncm91bmRpbmcgYW5kIEdGQ0kgcHJvdGVjdGlvbiBpcyBwcm9iYWJseSB0aGUgbW9zdCBtaXN1bmRlcnN0b29kIGFuZFxuICAgICAgICAgICAgY3JpdGljYWwgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJXaHkgd291bGQgSSBuZWVkIGEgbmV3IGVsZWN0cmljYWwgY2lyY3VpdD9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSWYgeW91IGFyZSBhZGRpbmcgZXF1aXBtZW50IHRoYXQgaGFzIGEgbGFyZ2UgZWxlY3RyaWNhbCBkZW1hbmQgaXRcbiAgICAgICAgICAgIG1heSByZXF1aXJlIGl0cyBvd24gY2lyY3VpdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJXaGF0IGRvIEkgZG8gaWYgbXkgY2lyY3VpdCBrZWVwcyBvdmVybG9hZGluZz9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQ29uZmlybSB0aGUgZWxlY3RyaWNhbCBkZW1hbmQgb2YgZWFjaCBpdGVtIG9uIHRoYXQgY2lyY3VpdC4gSXQgbWF5XG4gICAgICAgICAgICBiZSBhcyBlYXN5IGFzIG1vdmluZyBhbiBpdGVtIHRvIGFub3RoZXIgbG9jYXRpb24gYW5kIHBsdWdnaW5nIGluIHRvXG4gICAgICAgICAgICBhbm90aGVyIGNpcmN1aXQuIElmIHlvdSBmaW5kIHRoYXQgaXMgbm90IGFuIG9wdGlvbiB0aGVuIGEgbmV3XG4gICAgICAgICAgICBjaXJjdWl0IHRvIHNwbGl0IHRoZSBsb2FkIG1heSBiZSBuZWNlc3NhcnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6XG4gICAgICAgICAgXCJJIGhhdmUgdG9vIG1hbnkgcG93ZXIgc3RyaXBzIGJlaGluZCBteSBlbnRlcnRhaW5tZW50IGNlbnRlciBhbmQgd2FudCB0byByZWR1Y2UgdGhlIGNsdXR0ZXIuIEhvdyBjYW4gUHJpdGNoYXJkIEVsZWN0cmljIGhlbHAgbWU/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSBiZXN0IGNvdXJzZSBvZiBhY3Rpb24gd291bGQgYmUgdG8gYWRkIHJlY2VwdGFjbGVzIGluIHRoZSBkZXNpcmVkXG4gICAgICAgICAgICBsb2NhdGlvbnMgdG8gcmVkdWNlIGNvcmRzLiBJdCB3b3VsZCBhbHNvIGJlIGEgZ29vZCBpZGVhIHRvIGFkZCBhXG4gICAgICAgICAgICBzdXJnZSBwcm90ZWN0aW9uIGRldmljZSBpbiB0aGUgZWxlY3RyaWNhbCBwYW5lbCB0byBwcm92aWRlIHRoZSBzdXJnZVxuICAgICAgICAgICAgcHJvdGVjdGlvbiB0aGF0IHRoZSBwb3dlciBzdHJpcCBtYXkgYmUgcHJvdmlkaW5nLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNhbiB5b3UgY2hhbmdlIGFuIGV4aXN0aW5nIHN3aXRjaCB0byBhIGRpbW1lciBzd2l0Y2g/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEluIG1vc3QgY2FzZXMgeW91IGNhbiBjaGFuZ2UgYW4gZXhpc3Rpbmcgc3dpdGNoIHRvIGEgZGltbWVyIHN3aXRjaFxuICAgICAgICAgICAgd2l0aCBubyB3b3JrIG9uIHRoZSB3aXJpbmcuIFRoZSBleGNlcHRpb24gd291bGQgYmUgaWYgdGhlIGRpbW1lclxuICAgICAgICAgICAgbmVlZHMgYSBuZXV0cmFsIHdpcmUgYW5kIGl0IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIHN3aXRjaCBib3guXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiV2h5IGlzIGEgYnJlYWtlciBpbiBteSBwYW5lbCBmZWVsIGhvdCB0byB0b3VjaD9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSWYgYSBicmVha2VyIGluIHlvdXIgcGFuZWwgaXMgaG90IHRvIHRoZSB0b3VjaCB0aGUgZmlyc3QgdGhpbmcgdG8gZG9cbiAgICAgICAgICAgIGlzIHJlYWQgdGhlIGFtcHMgb24gdGhlIHdpcmUgY29ubmVjdGVkIHRvIHRoYXQgYnJlYWtlciB0byBkZXRlcm1pbmVcbiAgICAgICAgICAgIGlmIHRoZSBicmVha2VyIGlzIG5lYXJpbmcgb3ZlcmxvYWQuIFRoZXkgY2FuIG9wZXJhdGUgYXQgODAlIG9mXG4gICAgICAgICAgICBtYXhpbXVtIGxvYWQgZm9yIGFuIGV4dGVuZGVkIHBlcmlvZCBvZiB0aW1lIHdpdGggbm8gb3RoZXIgYWR2ZXJzZVxuICAgICAgICAgICAgZWZmZWN0cyB0aGFuIHRoZSBicmVha2VyIGZlZWxpbmcgd2FybS4gSWYgaG90IGVub3VnaCB5b3UgY2FuJ3QgbGVhdmVcbiAgICAgICAgICAgIHlvdXIgZmluZ2VyIG9uIGl0IGEgbG9vc2UgY29ubmVjdGlvbiBvciBhIGJhZCBjb25uZWN0aW9uIGJldHdlZW4gdGhlXG4gICAgICAgICAgICBicmVha2VyIGFuZCB0aGUgYnVzcyBiYXIgbWF5IGJlIHRoZSBwcm9ibGVtLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgIFwiSG93IGNhbiBJIHRlbGwgd2hlbiBhbiBlbGVjdHJpY2FsIG91dGxldCBpcyBub3Qgc2FmZSBvciBuZWVkcyB0byBiZSByZXBsYWNlZD9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSWYgeW91IHBsdWcgaW50byBhbiBlbGVjdHJpY2FsIG91dGxldCBhbmQgaXQgaXMgbG9vc2UgaXQgc2hvdWxkIGJlXG4gICAgICAgICAgICByZXBsYWNlZC4gSWYgdGhlIHBvd2VyIGlzIGludGVybWl0dGVudCBpdCBpcyBwcm9iYWJseSBsb29zZSBhbmRcbiAgICAgICAgICAgIGxvb3NlIGNvbm5lY3Rpb25zIGNhdXNlIGhlYXQgYW5kIGhlYXQgY2FuIGNhdXNlIGEgZmlyZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgIF0sXG4gICAgKi9cbiAgICByb3dzOiBmYXFzXG4gIH07XG5cbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIC8vIGJnQ29sb3I6ICd3aGl0ZScsXG4gICAgdGl0bGVUZXh0Q29sb3I6IFwiIzFmNDBhM1wiLFxuICAgIHJvd1RpdGxlQ29sb3I6IFwiIzFmNDBhM1wiLFxuICAgIC8vIHJvd0NvbnRlbnRDb2xvcjogJ2dyZXknLFxuICAgIC8vIGFycm93Q29sb3I6IFwicmVkXCIsXG4gIH07XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGFuaW1hdGU6IHRydWUsXG4gICAgLy8gYXJyb3dJY29uOiBcIlZcIixcbiAgICAvLyB0YWJGb2N1czogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYm94U2hhZG93OiBcImluc2V0IDAgOHB4IDhweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41KVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiNTBweFwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiOTgwcHhcIiB9fT5cbiAgICAgICAgICA8RkFRIGRhdGE9e2ZhcXN9IHN0eWxlcz17c3R5bGVzfSBjb25maWc9e2NvbmZpZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMDBweFwiIH19PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG4vLyBDb25uZWN0IHRoZSBJdGVtIHRvIGdhaW4gYWNjZXNzIHRvIGBzdGF0ZWAgYXMgYSBwcm9wXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZhcSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/faq.js\n");

/***/ })

})