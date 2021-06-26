webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/faq.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/faq.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./packages/mars-theme/src/components/footer.js\");\n/* harmony import */ var react_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-faq-component */ \"./node_modules/react-faq-component/build/index.es.js\");\nvar Faq=(_ref)=>{var{state,actions}=_ref;//useEffect(() => {\n//actions.source.fetch(\"/home-post\", { force: true });\n//}, []);\n//const data = state.source.get(\"/home-post/\");\n//   if (data.isPost) {\n//     const category = state.source.post[data.id];\n//     const firstHeader = category.content.rendered;\n//\nvar[faqs,setFaqs]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"https://manage.pritchardelectric.net/wp-json/wp/v2/posts/64\").then(res=>{var rows=[];var data=res.data.content.rendered.replace(/\\n/g,'');var seperated=data.replace(/<\\/p>/,'|');var seperatedtwo=seperated.replace(/<\\/h2>/,'');var seperatedthree=seperatedtwo.replace(/<h2>/,'');var seperatedfour=seperatedthree.replace(/<p>/,'|');var questAns=seperatedfour.split(\"|\");console.log(questAns);var test=questAns.forEach((item,index)=>{if(index!=questAns.length-1){console.log(item,index);row.push({title:item});}});});},[]);var data={title:\"FAQs\",rows:[{title:\"When should I consider calling an electrician?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"When your life and well being is more valuable than your money. Of all the types of work that can have hazardous effects, immediate and unexpected. The electrical field is the most dangerous. Electrical grounding and GFCI protection is probably the most misunderstood and critical at the same time.\")},{title:\"Why would I need a new electrical circuit?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If you are adding equipment that has a large electrical demand it may require its own circuit.\")},{title:\"What do I do if my circuit keeps overloading?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"Confirm the electrical demand of each item on that circuit. It may be as easy as moving an item to another location and plugging in to another circuit. If you find that is not an option then a new circuit to split the load may be necessary.\\\"\")},{title:\"I have too many power strips behind my entertainment center and want to reduce the clutter. How can Pritchard Electric help me?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"The best course of action would be to add receptacles in the desired locations to reduce cords. It would also be a good idea to add a surge protection device in the electrical panel to provide the surge protection that the power strip may be providing.\")},{title:\"Can you change an existing switch to a dimmer switch?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"In most cases you can change an existing switch to a dimmer switch with no work on the wiring. The exception would be if the dimmer needs a neutral wire and it is not available in the switch box.\")},{title:\"Why is a breaker in my panel feel hot to touch?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If a breaker in your panel is hot to the touch the first thing to do is read the amps on the wire connected to that breaker to determine if the breaker is nearing overload. They can operate at 80% of maximum load for an extended period of time with no other adverse effects than the breaker feeling warm. If hot enough you can't leave your finger on it a loose connection or a bad connection between the breaker and the buss bar may be the problem.\")},{title:\"How can I tell when an electrical outlet is not safe or needs to be replaced?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If you plug into an electrical outlet and it is loose it should be replaced. If the power is intermittent it is probably loose and loose connections cause heat and heat can cause a fire.\")}]};var styles={// bgColor: 'white',\ntitleTextColor:\"#1f40a3\",rowTitleColor:\"#1f40a3\"// rowContentColor: 'grey',\n// arrowColor: \"red\",\n};var config={animate:true// arrowIcon: \"V\",\n// tabFocus: true\n};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"main\",{style:{width:\"100%\",boxShadow:\"inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"section\",{style:{display:\"flex\",justifyContent:\"center\",padding:\"50px\",marginTop:\"50px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{width:\"980px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react_faq_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{data:data,styles:styles,config:config}))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{marginTop:\"100px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null)));};// Connect the Item to gain access to `state` as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Faq));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZhcS5qcz9jY2YzIl0sIm5hbWVzIjpbIkZhcSIsInN0YXRlIiwiYWN0aW9ucyIsImZhcXMiLCJzZXRGYXFzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJyb3dzIiwiZGF0YSIsImNvbnRlbnQiLCJyZW5kZXJlZCIsInJlcGxhY2UiLCJzZXBlcmF0ZWQiLCJzZXBlcmF0ZWR0d28iLCJzZXBlcmF0ZWR0aHJlZSIsInNlcGVyYXRlZGZvdXIiLCJxdWVzdEFucyIsInNwbGl0IiwiY29uc29sZSIsImxvZyIsInRlc3QiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwibGVuZ3RoIiwicm93IiwicHVzaCIsInRpdGxlIiwic3R5bGVzIiwidGl0bGVUZXh0Q29sb3IiLCJyb3dUaXRsZUNvbG9yIiwiY29uZmlnIiwiYW5pbWF0ZSIsIndpZHRoIiwiYm94U2hhZG93IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1hcmdpblRvcCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQSxHQUFNQSxJQUFHLENBQUcsUUFBd0IsSUFBdkIsQ0FBRUMsS0FBRixDQUFTQyxPQUFULENBQXVCLE1BQ2xDO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0Q7QUFHQyxHQUFNLENBQUNDLElBQUQsQ0FBT0MsT0FBUCxFQUFrQkMsc0RBQVEsQ0FBQyxFQUFELENBQWhDLENBRUFDLHVEQUFTLENBQUMsSUFBTSxDQUNqQkMsNENBQUssQ0FBQ0MsR0FBTixDQUFVLDZEQUFWLEVBQXlFQyxJQUF6RSxDQUE4RUMsR0FBRyxFQUFJLENBRXBGLEdBQUlDLEtBQUksQ0FBRyxFQUFYLENBRUEsR0FBSUMsS0FBSSxDQUFHRixHQUFH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dEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZhcS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBzdHlsZWQsIGNvbm5lY3QsIEdsb2JhbCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEZBUSBmcm9tIFwicmVhY3QtZmFxLWNvbXBvbmVudFwiO1xuXG5jb25zdCBGYXEgPSAoeyBzdGF0ZSwgYWN0aW9ucyB9KSA9PiB7XG4gIC8vdXNlRWZmZWN0KCgpID0+IHtcbiAgLy9hY3Rpb25zLnNvdXJjZS5mZXRjaChcIi9ob21lLXBvc3RcIiwgeyBmb3JjZTogdHJ1ZSB9KTtcbiAgLy99LCBbXSk7XG5cbiAgLy9jb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChcIi9ob21lLXBvc3QvXCIpO1xuXG4gIC8vICAgaWYgKGRhdGEuaXNQb3N0KSB7XG4gIC8vICAgICBjb25zdCBjYXRlZ29yeSA9IHN0YXRlLnNvdXJjZS5wb3N0W2RhdGEuaWRdO1xuICAvLyAgICAgY29uc3QgZmlyc3RIZWFkZXIgPSBjYXRlZ29yeS5jb250ZW50LnJlbmRlcmVkO1xuXHQvL1xuICBcblxuICBjb25zdCBbZmFxcywgc2V0RmFxc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblx0YXhpb3MuZ2V0KFwiaHR0cHM6Ly9tYW5hZ2UucHJpdGNoYXJkZWxlY3RyaWMubmV0L3dwLWpzb24vd3AvdjIvcG9zdHMvNjRcIikudGhlbihyZXMgPT4ge1xuXG5cdFx0bGV0IHJvd3MgPSBbXVxuXG5cdFx0bGV0IGRhdGEgPSByZXMuZGF0YS5jb250ZW50LnJlbmRlcmVkLnJlcGxhY2UoL1xcbi9nLCAnJyk7XG5cdFx0bGV0IHNlcGVyYXRlZCA9IGRhdGEucmVwbGFjZSgvPFxcL3A+LywgJ3wnKTtcblx0XHRsZXQgc2VwZXJhdGVkdHdvID0gc2VwZXJhdGVkLnJlcGxhY2UoLzxcXC9oMj4vLCAnJyk7XG5cdFx0bGV0IHNlcGVyYXRlZHRocmVlID0gc2VwZXJhdGVkdHdvLnJlcGxhY2UoLzxoMj4vLCAnJyk7XG5cdFx0bGV0IHNlcGVyYXRlZGZvdXIgPSBzZXBlcmF0ZWR0aHJlZS5yZXBsYWNlKC88cD4vLCAnfCcpXG5cblx0XHRsZXQgcXVlc3RBbnMgPSBzZXBlcmF0ZWRmb3VyLnNwbGl0KFwifFwiKVxuXHRcdFxuXHRcdGNvbnNvbGUubG9nKHF1ZXN0QW5zKVxuXG5cdFx0bGV0IHRlc3QgPSBxdWVzdEFucy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdFx0aWYoaW5kZXggIT0gcXVlc3RBbnMubGVuZ3RoIC0gMSl7XG5cdFx0XHRcdGNvbnNvbGUubG9nKGl0ZW0sIGluZGV4KVxuXHRcdFx0XHRyb3cucHVzaCh7dGl0bGU6IGl0ZW19KVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0fSlcbiAgfSwgW10pXG5cbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0aXRsZTogXCJGQVFzXCIsXG4gICAgcm93czogW1xuICAgICAge1xuICAgICAgICB0aXRsZTogXCJXaGVuIHNob3VsZCBJIGNvbnNpZGVyIGNhbGxpbmcgYW4gZWxlY3RyaWNpYW4/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFdoZW4geW91ciBsaWZlIGFuZCB3ZWxsIGJlaW5nIGlzIG1vcmUgdmFsdWFibGUgdGhhbiB5b3VyIG1vbmV5LiBPZlxuICAgICAgICAgICAgYWxsIHRoZSB0eXBlcyBvZiB3b3JrIHRoYXQgY2FuIGhhdmUgaGF6YXJkb3VzIGVmZmVjdHMsIGltbWVkaWF0ZSBhbmRcbiAgICAgICAgICAgIHVuZXhwZWN0ZWQuIFRoZSBlbGVjdHJpY2FsIGZpZWxkIGlzIHRoZSBtb3N0IGRhbmdlcm91cy4gRWxlY3RyaWNhbFxuICAgICAgICAgICAgZ3JvdW5kaW5nIGFuZCBHRkNJIHByb3RlY3Rpb24gaXMgcHJvYmFibHkgdGhlIG1vc3QgbWlzdW5kZXJzdG9vZCBhbmRcbiAgICAgICAgICAgIGNyaXRpY2FsIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiV2h5IHdvdWxkIEkgbmVlZCBhIG5ldyBlbGVjdHJpY2FsIGNpcmN1aXQ/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIElmIHlvdSBhcmUgYWRkaW5nIGVxdWlwbWVudCB0aGF0IGhhcyBhIGxhcmdlIGVsZWN0cmljYWwgZGVtYW5kIGl0XG4gICAgICAgICAgICBtYXkgcmVxdWlyZSBpdHMgb3duIGNpcmN1aXQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiV2hhdCBkbyBJIGRvIGlmIG15IGNpcmN1aXQga2VlcHMgb3ZlcmxvYWRpbmc/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIENvbmZpcm0gdGhlIGVsZWN0cmljYWwgZGVtYW5kIG9mIGVhY2ggaXRlbSBvbiB0aGF0IGNpcmN1aXQuIEl0IG1heVxuICAgICAgICAgICAgYmUgYXMgZWFzeSBhcyBtb3ZpbmcgYW4gaXRlbSB0byBhbm90aGVyIGxvY2F0aW9uIGFuZCBwbHVnZ2luZyBpbiB0b1xuICAgICAgICAgICAgYW5vdGhlciBjaXJjdWl0LiBJZiB5b3UgZmluZCB0aGF0IGlzIG5vdCBhbiBvcHRpb24gdGhlbiBhIG5ld1xuICAgICAgICAgICAgY2lyY3VpdCB0byBzcGxpdCB0aGUgbG9hZCBtYXkgYmUgbmVjZXNzYXJ5LlwiXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6XG4gICAgICAgICAgXCJJIGhhdmUgdG9vIG1hbnkgcG93ZXIgc3RyaXBzIGJlaGluZCBteSBlbnRlcnRhaW5tZW50IGNlbnRlciBhbmQgd2FudCB0byByZWR1Y2UgdGhlIGNsdXR0ZXIuIEhvdyBjYW4gUHJpdGNoYXJkIEVsZWN0cmljIGhlbHAgbWU/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSBiZXN0IGNvdXJzZSBvZiBhY3Rpb24gd291bGQgYmUgdG8gYWRkIHJlY2VwdGFjbGVzIGluIHRoZSBkZXNpcmVkXG4gICAgICAgICAgICBsb2NhdGlvbnMgdG8gcmVkdWNlIGNvcmRzLiBJdCB3b3VsZCBhbHNvIGJlIGEgZ29vZCBpZGVhIHRvIGFkZCBhXG4gICAgICAgICAgICBzdXJnZSBwcm90ZWN0aW9uIGRldmljZSBpbiB0aGUgZWxlY3RyaWNhbCBwYW5lbCB0byBwcm92aWRlIHRoZSBzdXJnZVxuICAgICAgICAgICAgcHJvdGVjdGlvbiB0aGF0IHRoZSBwb3dlciBzdHJpcCBtYXkgYmUgcHJvdmlkaW5nLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIkNhbiB5b3UgY2hhbmdlIGFuIGV4aXN0aW5nIHN3aXRjaCB0byBhIGRpbW1lciBzd2l0Y2g/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEluIG1vc3QgY2FzZXMgeW91IGNhbiBjaGFuZ2UgYW4gZXhpc3Rpbmcgc3dpdGNoIHRvIGEgZGltbWVyIHN3aXRjaFxuICAgICAgICAgICAgd2l0aCBubyB3b3JrIG9uIHRoZSB3aXJpbmcuIFRoZSBleGNlcHRpb24gd291bGQgYmUgaWYgdGhlIGRpbW1lclxuICAgICAgICAgICAgbmVlZHMgYSBuZXV0cmFsIHdpcmUgYW5kIGl0IGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIHN3aXRjaCBib3guXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiV2h5IGlzIGEgYnJlYWtlciBpbiBteSBwYW5lbCBmZWVsIGhvdCB0byB0b3VjaD9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSWYgYSBicmVha2VyIGluIHlvdXIgcGFuZWwgaXMgaG90IHRvIHRoZSB0b3VjaCB0aGUgZmlyc3QgdGhpbmcgdG8gZG9cbiAgICAgICAgICAgIGlzIHJlYWQgdGhlIGFtcHMgb24gdGhlIHdpcmUgY29ubmVjdGVkIHRvIHRoYXQgYnJlYWtlciB0byBkZXRlcm1pbmVcbiAgICAgICAgICAgIGlmIHRoZSBicmVha2VyIGlzIG5lYXJpbmcgb3ZlcmxvYWQuIFRoZXkgY2FuIG9wZXJhdGUgYXQgODAlIG9mXG4gICAgICAgICAgICBtYXhpbXVtIGxvYWQgZm9yIGFuIGV4dGVuZGVkIHBlcmlvZCBvZiB0aW1lIHdpdGggbm8gb3RoZXIgYWR2ZXJzZVxuICAgICAgICAgICAgZWZmZWN0cyB0aGFuIHRoZSBicmVha2VyIGZlZWxpbmcgd2FybS4gSWYgaG90IGVub3VnaCB5b3UgY2FuJ3QgbGVhdmVcbiAgICAgICAgICAgIHlvdXIgZmluZ2VyIG9uIGl0IGEgbG9vc2UgY29ubmVjdGlvbiBvciBhIGJhZCBjb25uZWN0aW9uIGJldHdlZW4gdGhlXG4gICAgICAgICAgICBicmVha2VyIGFuZCB0aGUgYnVzcyBiYXIgbWF5IGJlIHRoZSBwcm9ibGVtLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgIFwiSG93IGNhbiBJIHRlbGwgd2hlbiBhbiBlbGVjdHJpY2FsIG91dGxldCBpcyBub3Qgc2FmZSBvciBuZWVkcyB0byBiZSByZXBsYWNlZD9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSWYgeW91IHBsdWcgaW50byBhbiBlbGVjdHJpY2FsIG91dGxldCBhbmQgaXQgaXMgbG9vc2UgaXQgc2hvdWxkIGJlXG4gICAgICAgICAgICByZXBsYWNlZC4gSWYgdGhlIHBvd2VyIGlzIGludGVybWl0dGVudCBpdCBpcyBwcm9iYWJseSBsb29zZSBhbmRcbiAgICAgICAgICAgIGxvb3NlIGNvbm5lY3Rpb25zIGNhdXNlIGhlYXQgYW5kIGhlYXQgY2FuIGNhdXNlIGEgZmlyZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIC8vIGJnQ29sb3I6ICd3aGl0ZScsXG4gICAgdGl0bGVUZXh0Q29sb3I6IFwiIzFmNDBhM1wiLFxuICAgIHJvd1RpdGxlQ29sb3I6IFwiIzFmNDBhM1wiLFxuICAgIC8vIHJvd0NvbnRlbnRDb2xvcjogJ2dyZXknLFxuICAgIC8vIGFycm93Q29sb3I6IFwicmVkXCIsXG4gIH07XG5cbiAgY29uc3QgY29uZmlnID0ge1xuICAgIGFuaW1hdGU6IHRydWUsXG4gICAgLy8gYXJyb3dJY29uOiBcIlZcIixcbiAgICAvLyB0YWJGb2N1czogdHJ1ZVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW5cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYm94U2hhZG93OiBcImluc2V0IDAgOHB4IDhweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC41KVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8c2VjdGlvblxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiNTBweFwiLFxuICAgICAgICAgIG1hcmdpblRvcDogXCI1MHB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiOTgwcHhcIiB9fT5cbiAgICAgICAgICA8RkFRIGRhdGE9e2RhdGF9IHN0eWxlcz17c3R5bGVzfSBjb25maWc9e2NvbmZpZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMDBweFwiIH19PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG4vLyBDb25uZWN0IHRoZSBJdGVtIHRvIGdhaW4gYWNjZXNzIHRvIGBzdGF0ZWAgYXMgYSBwcm9wXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KEZhcSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/faq.js\n");

/***/ })

})