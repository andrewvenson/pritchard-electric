webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/faq.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/faq.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./packages/mars-theme/src/components/footer.js\");\n/* harmony import */ var react_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-faq-component */ \"./node_modules/react-faq-component/build/index.es.js\");\nvar Faq=(_ref)=>{var{state,actions}=_ref;//useEffect(() => {\n//actions.source.fetch(\"/home-post\", { force: true });\n//}, []);\n//const data = state.source.get(\"/home-post/\");\n//   if (data.isPost) {\n//     const category = state.source.post[data.id];\n//     const firstHeader = category.content.rendered;\n//\nvar[faqs,setFaqs]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"https://manage.pritchardelectric.net/wp-json/wp/v2/posts/64\").then(res=>{var rows=[];var data=res.data.content.rendered.replace(/\\n/g,'');var seperated=data.replace(/<\\/p>/,'|');var seperatedtwo=seperated.replace(/<\\/h2>/,'');var seperatedthree=seperatedtwo.replace(/<h2>/,'');var seperatedfour=seperatedthree.replace(/<p>/,'|');var questAns=seperatedfour.split(\"|\");console.log(questAns);var test=questAns.forEach((item,index)=>{if(index!=questAns.length-1){console.log(item,index);row.push({});}});});},[]);var data={title:\"FAQs\",rows:[{title:\"When should I consider calling an electrician?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"When your life and well being is more valuable than your money. Of all the types of work that can have hazardous effects, immediate and unexpected. The electrical field is the most dangerous. Electrical grounding and GFCI protection is probably the most misunderstood and critical at the same time.\")},{title:\"Why would I need a new electrical circuit?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If you are adding equipment that has a large electrical demand it may require its own circuit.\")},{title:\"What do I do if my circuit keeps overloading?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"Confirm the electrical demand of each item on that circuit. It may be as easy as moving an item to another location and plugging in to another circuit. If you find that is not an option then a new circuit to split the load may be necessary.\\\"\")},{title:\"I have too many power strips behind my entertainment center and want to reduce the clutter. How can Pritchard Electric help me?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"The best course of action would be to add receptacles in the desired locations to reduce cords. It would also be a good idea to add a surge protection device in the electrical panel to provide the surge protection that the power strip may be providing.\")},{title:\"Can you change an existing switch to a dimmer switch?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"In most cases you can change an existing switch to a dimmer switch with no work on the wiring. The exception would be if the dimmer needs a neutral wire and it is not available in the switch box.\")},{title:\"Why is a breaker in my panel feel hot to touch?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If a breaker in your panel is hot to the touch the first thing to do is read the amps on the wire connected to that breaker to determine if the breaker is nearing overload. They can operate at 80% of maximum load for an extended period of time with no other adverse effects than the breaker feeling warm. If hot enough you can't leave your finger on it a loose connection or a bad connection between the breaker and the buss bar may be the problem.\")},{title:\"How can I tell when an electrical outlet is not safe or needs to be replaced?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If you plug into an electrical outlet and it is loose it should be replaced. If the power is intermittent it is probably loose and loose connections cause heat and heat can cause a fire.\")}]};var styles={// bgColor: 'white',\ntitleTextColor:\"#1f40a3\",rowTitleColor:\"#1f40a3\"// rowContentColor: 'grey',\n// arrowColor: \"red\",\n};var config={animate:true// arrowIcon: \"V\",\n// tabFocus: true\n};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"main\",{style:{width:\"100%\",boxShadow:\"inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"section\",{style:{display:\"flex\",justifyContent:\"center\",padding:\"50px\",marginTop:\"50px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{width:\"980px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react_faq_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{data:data,styles:styles,config:config}))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{marginTop:\"100px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null)));};// Connect the Item to gain access to `state` as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Faq));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZhcS5qcz9jY2YzIl0sIm5hbWVzIjpbIkZhcSIsInN0YXRlIiwiYWN0aW9ucyIsImZhcXMiLCJzZXRGYXFzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJyb3dzIiwiZGF0YSIsImNvbnRlbnQiLCJyZW5kZXJlZCIsInJlcGxhY2UiLCJzZXBlcmF0ZWQiLCJzZXBlcmF0ZWR0d28iLCJzZXBlcmF0ZWR0aHJlZSIsInNlcGVyYXRlZGZvdXIiLCJxdWVzdEFucyIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsInRlc3QiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwibGVuZ3RoIiwicm93IiwicHVzaCIsInRpdGxlIiwic3R5bGVzIiwidGl0bGVUZXh0Q29sb3IiLCJyb3dUaXRsZUNvbG9yIiwiY29uZmlnIiwiYW5pbWF0ZSIsIndpZHRoIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1hcmdpblRvcCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSxHQUFNQSxJQUFHLENBQUcsUUFBd0IsSUFBdkIsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQXVCLE1BQ2xDO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0Q7QUFHQyxHQUFNLENBQUNDLElBQUQsQ0FBT0MsT0FBUCxFQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDLENBRUFDLHVEQUFTLENBQUMsSUFBTSxDQUNqQkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDZEQUFWLEVBQXlFQyxJQUF6RSxDQUE4RUMsR0FBRyxFQUFJLENBRXBGLEdBQUlDLEtBQUksQ0FBRyxFQUFYLENBRUEsR0FBSUMsS0FBSSxDQUFHRixHQUFH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cy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZhcS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QsIEdsb2JhbCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEZBUSBmcm9tIFwicmVhY3QtZmFxLWNvbXBvbmVudFwiO1xuXG5jb25zdCBGYXEgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG4gIC8vdXNlRWZmZWN0KCgpID0+IHtcbiAgLy9hY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9ob21lLXBvc3RcIiwgeyBmb3JjZTogdHJ1ZSB9KTtcbiAgLy99LCBbXSk7XG5cbiAgLy9jb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChcIi9ob21lLXBvc3QvXCIpO1xuXG4gIC8vICAgaWYgKGRhdGEuaXNQb3N0KSB7XG4gIC8vICAgICBjb25zdCBjYXRlZ29yeSA9IHN0YXRlLnNvdXJjZS5wb3N0W2RhdGEuaWRdO1xuICAvLyAgICAgY29uc3QgZmlyc3RIZWFkZXIgPSBjYXRlZ29yeS5jb250ZW50LnJlbmRlcmVkO1xuXHQvL1xuICBcblxuICBjb25zdCBbZmFxcywgc2V0RmFxc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblx0YXhpb3MuZ2V0KFwiaHR0cHM6Ly9tYW5hZ2UucHJpdGNoYXJkZWxlY3RyaWMubmV0L3dwLWpzb24vd3AvdjIvcG9zdHMvNjRcIikudGhlbihyZXMgPT4ge1xuXG5cdFx0bGV0IHJvd3MgPSBbXVxuXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5jb250ZW50LnJlbmRlcmVkLnJlcGxhY2UoL1xcbi9nLCAnJyk7XG5cdFx0bGV0IHNlcGVyYXRlZCA9IGRhdGEucmVwbGFjZSgvPFxcL3A+LywgJ3wnKTtcblx0XHRsZXQgc2VwZXJhdGVkdHdvID0gc2VwZXJhdGVkLnJlcGxhY2UoLzxcXC9oMj4vLCAnJyk7XG5cdFx0bGV0IHNlcGVyYXRlZHRocmVlID0gc2VwZXJhdGVkdHdvLnJlcGxhY2UoLzxoMj4vLCAnJyk7XG5cdFx0bGV0IHNlcGVyYXRlZGZvdXIgPSBzZXBlcmF0ZWR0aHJlZS5yZXBsYWNlKC88cD4vLCAnfCcpXG5cblx0XHRsZXQgcXVlc3RBbnMgPSBzZXBlcmF0ZWRmb3VyLnNwbGl0KFwifFwiKVxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKHF1ZXN0QW5zKVxuXG5cdFx0bGV0IHRlc3QgPSBxdWVzdEFucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYoaW5kZXggIT0gcXVlc3RBbnMubGVuZ3RoIC0gMSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0sIGluZGV4KVxuXHRcdFx0XHRyb3cucHVzaCh7fSlcblx0XHRcdH1cblx0XHR9KVxuXG5cdH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiRkFRc1wiLFxuICAgIHJvd3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiV2hlbiBzaG91bGQgSSBjb25zaWRlciBjYWxsaW5nIGFuIGVsZWN0cmljaWFuP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaGVuIHlvdXIgbGlmZSBhbmQgd2VsbCBiZWluZyBpcyBtb3JlIHZhbHVhYmxlIHRoYW4geW91ciBtb25leS4gT2ZcbiAgICAgICAgICAgIGFsbCB0aGUgdHlwZXMgb2Ygd29yayB0aGF0IGNhbiBoYXZlIGhhemFyZG91cyBlZmZlY3RzLCBpbW1lZGlhdGUgYW5kXG4gICAgICAgICAgICB1bmV4cGVjdGVkLiBUaGUgZWxlY3RyaWNhbCBmaWVsZCBpcyB0aGUgbW9zdCBkYW5nZXJvdXMuIEVsZWN0cmljYWxcbiAgICAgICAgICAgIGdyb3VuZGluZyBhbmQgR0ZDSSBwcm90ZWN0aW9uIGlzIHByb2JhYmx5IHRoZSBtb3N0IG1pc3VuZGVyc3Rvb2QgYW5kXG4gICAgICAgICAgICBjcml0aWNhbCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIldoeSB3b3VsZCBJIG5lZWQgYSBuZXcgZWxlY3RyaWNhbCBjaXJjdWl0P1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJZiB5b3UgYXJlIGFkZGluZyBlcXVpcG1lbnQgdGhhdCBoYXMgYSBsYXJnZSBlbGVjdHJpY2FsIGRlbWFuZCBpdFxuICAgICAgICAgICAgbWF5IHJlcXVpcmUgaXRzIG93biBjaXJjdWl0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIldoYXQgZG8gSSBkbyBpZiBteSBjaXJjdWl0IGtlZXBzIG92ZXJsb2FkaW5nP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDb25maXJtIHRoZSBlbGVjdHJpY2FsIGRlbWFuZCBvZiBlYWNoIGl0ZW0gb24gdGhhdCBjaXJjdWl0LiBJdCBtYXlcbiAgICAgICAgICAgIGJlIGFzIGVhc3kgYXMgbW92aW5nIGFuIGl0ZW0gdG8gYW5vdGhlciBsb2NhdGlvbiBhbmQgcGx1Z2dpbmcgaW4gdG9cbiAgICAgICAgICAgIGFub3RoZXIgY2lyY3VpdC4gSWYgeW91IGZpbmQgdGhhdCBpcyBub3QgYW4gb3B0aW9uIHRoZW4gYSBuZXdcbiAgICAgICAgICAgIGNpcmN1aXQgdG8gc3BsaXQgdGhlIGxvYWQgbWF5IGJlIG5lY2Vzc2FyeS5cIlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgIFwiSSBoYXZlIHRvbyBtYW55IHBvd2VyIHN0cmlwcyBiZWhpbmQgbXkgZW50ZXJ0YWlubWVudCBjZW50ZXIgYW5kIHdhbnQgdG8gcmVkdWNlIHRoZSBjbHV0dGVyLiBIb3cgY2FuIFByaXRjaGFyZCBFbGVjdHJpYyBoZWxwIG1lP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGUgYmVzdCBjb3Vyc2Ugb2YgYWN0aW9uIHdvdWxkIGJlIHRvIGFkZCByZWNlcHRhY2xlcyBpbiB0aGUgZGVzaXJlZFxuICAgICAgICAgICAgbG9jYXRpb25zIHRvIHJlZHVjZSBjb3Jkcy4gSXQgd291bGQgYWxzbyBiZSBhIGdvb2QgaWRlYSB0byBhZGQgYVxuICAgICAgICAgICAgc3VyZ2UgcHJvdGVjdGlvbiBkZXZpY2UgaW4gdGhlIGVsZWN0cmljYWwgcGFuZWwgdG8gcHJvdmlkZSB0aGUgc3VyZ2VcbiAgICAgICAgICAgIHByb3RlY3Rpb24gdGhhdCB0aGUgcG93ZXIgc3RyaXAgbWF5IGJlIHByb3ZpZGluZy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJDYW4geW91IGNoYW5nZSBhbiBleGlzdGluZyBzd2l0Y2ggdG8gYSBkaW1tZXIgc3dpdGNoP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJbiBtb3N0IGNhc2VzIHlvdSBjYW4gY2hhbmdlIGFuIGV4aXN0aW5nIHN3aXRjaCB0byBhIGRpbW1lciBzd2l0Y2hcbiAgICAgICAgICAgIHdpdGggbm8gd29yayBvbiB0aGUgd2lyaW5nLiBUaGUgZXhjZXB0aW9uIHdvdWxkIGJlIGlmIHRoZSBkaW1tZXJcbiAgICAgICAgICAgIG5lZWRzIGEgbmV1dHJhbCB3aXJlIGFuZCBpdCBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBzd2l0Y2ggYm94LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIldoeSBpcyBhIGJyZWFrZXIgaW4gbXkgcGFuZWwgZmVlbCBob3QgdG8gdG91Y2g/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIElmIGEgYnJlYWtlciBpbiB5b3VyIHBhbmVsIGlzIGhvdCB0byB0aGUgdG91Y2ggdGhlIGZpcnN0IHRoaW5nIHRvIGRvXG4gICAgICAgICAgICBpcyByZWFkIHRoZSBhbXBzIG9uIHRoZSB3aXJlIGNvbm5lY3RlZCB0byB0aGF0IGJyZWFrZXIgdG8gZGV0ZXJtaW5lXG4gICAgICAgICAgICBpZiB0aGUgYnJlYWtlciBpcyBuZWFyaW5nIG92ZXJsb2FkLiBUaGV5IGNhbiBvcGVyYXRlIGF0IDgwJSBvZlxuICAgICAgICAgICAgbWF4aW11bSBsb2FkIGZvciBhbiBleHRlbmRlZCBwZXJpb2Qgb2YgdGltZSB3aXRoIG5vIG90aGVyIGFkdmVyc2VcbiAgICAgICAgICAgIGVmZmVjdHMgdGhhbiB0aGUgYnJlYWtlciBmZWVsaW5nIHdhcm0uIElmIGhvdCBlbm91Z2ggeW91IGNhbid0IGxlYXZlXG4gICAgICAgICAgICB5b3VyIGZpbmdlciBvbiBpdCBhIGxvb3NlIGNvbm5lY3Rpb24gb3IgYSBiYWQgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZVxuICAgICAgICAgICAgYnJlYWtlciBhbmQgdGhlIGJ1c3MgYmFyIG1heSBiZSB0aGUgcHJvYmxlbS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICBcIkhvdyBjYW4gSSB0ZWxsIHdoZW4gYW4gZWxlY3RyaWNhbCBvdXRsZXQgaXMgbm90IHNhZmUgb3IgbmVlZHMgdG8gYmUgcmVwbGFjZWQ/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIElmIHlvdSBwbHVnIGludG8gYW4gZWxlY3RyaWNhbCBvdXRsZXQgYW5kIGl0IGlzIGxvb3NlIGl0IHNob3VsZCBiZVxuICAgICAgICAgICAgcmVwbGFjZWQuIElmIHRoZSBwb3dlciBpcyBpbnRlcm1pdHRlbnQgaXQgaXMgcHJvYmFibHkgbG9vc2UgYW5kXG4gICAgICAgICAgICBsb29zZSBjb25uZWN0aW9ucyBjYXVzZSBoZWF0IGFuZCBoZWF0IGNhbiBjYXVzZSBhIGZpcmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAvLyBiZ0NvbG9yOiAnd2hpdGUnLFxuICAgIHRpdGxlVGV4dENvbG9yOiBcIiMxZjQwYTNcIixcbiAgICByb3dUaXRsZUNvbG9yOiBcIiMxZjQwYTNcIixcbiAgICAvLyByb3dDb250ZW50Q29sb3I6ICdncmV5JyxcbiAgICAvLyBhcnJvd0NvbG9yOiBcInJlZFwiLFxuICB9O1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhbmltYXRlOiB0cnVlLFxuICAgIC8vIGFycm93SWNvbjogXCJWXCIsXG4gICAgLy8gdGFiRm9jdXM6IHRydWVcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDhweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNSlcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjUwcHhcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjk4MHB4XCIgfX0+XG4gICAgICAgICAgPEZBUSBkYXRhPXtkYXRhfSBzdHlsZXM9e3N0eWxlc30gY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuLy8gQ29ubmVjdCB0aGUgSXRlbSB0byBnYWluIGFjY2VzcyB0byBgc3RhdGVgIGFzIGEgcHJvcFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGYXEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/faq.js\n");

/***/ })

})