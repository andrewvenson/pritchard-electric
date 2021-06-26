webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/faq.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/faq.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./packages/mars-theme/src/components/footer.js\");\n/* harmony import */ var react_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-faq-component */ \"./node_modules/react-faq-component/build/index.es.js\");\nvar Faq=(_ref)=>{var{state,actions}=_ref;//useEffect(() => {\n//actions.source.fetch(\"/home-post\", { force: true });\n//}, []);\n//const data = state.source.get(\"/home-post/\");\n//   if (data.isPost) {\n//     const category = state.source.post[data.id];\n//     const firstHeader = category.content.rendered;\n//\nvar[faqs,setFaqs]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"https://manage.pritchardelectric.net/wp-json/wp/v2/posts/64\").then(res=>{var rows=[];var data=res.data.content.rendered.replace(/\\n/g,'');var seperated=data.replace(/<\\/p>/,'|');var seperatedtwo=seperated.replace(/<\\/h2>/,'');var seperatedthree=seperatedtwo.replace(/<h2>/,'');var seperatedfour=seperatedthree.replace(/<p>/,'|').split(\"|\");console.log(seperatedfour.split(\"|\"));seperatedfour.forEach((item,index)=>{console.log(item,index);});});},[]);var data={title:\"FAQs\",rows:[{title:\"When should I consider calling an electrician?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"When your life and well being is more valuable than your money. Of all the types of work that can have hazardous effects, immediate and unexpected. The electrical field is the most dangerous. Electrical grounding and GFCI protection is probably the most misunderstood and critical at the same time.\")},{title:\"Why would I need a new electrical circuit?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If you are adding equipment that has a large electrical demand it may require its own circuit.\")},{title:\"What do I do if my circuit keeps overloading?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"Confirm the electrical demand of each item on that circuit. It may be as easy as moving an item to another location and plugging in to another circuit. If you find that is not an option then a new circuit to split the load may be necessary.\\\"\")},{title:\"I have too many power strips behind my entertainment center and want to reduce the clutter. How can Pritchard Electric help me?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"The best course of action would be to add receptacles in the desired locations to reduce cords. It would also be a good idea to add a surge protection device in the electrical panel to provide the surge protection that the power strip may be providing.\")},{title:\"Can you change an existing switch to a dimmer switch?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"In most cases you can change an existing switch to a dimmer switch with no work on the wiring. The exception would be if the dimmer needs a neutral wire and it is not available in the switch box.\")},{title:\"Why is a breaker in my panel feel hot to touch?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If a breaker in your panel is hot to the touch the first thing to do is read the amps on the wire connected to that breaker to determine if the breaker is nearing overload. They can operate at 80% of maximum load for an extended period of time with no other adverse effects than the breaker feeling warm. If hot enough you can't leave your finger on it a loose connection or a bad connection between the breaker and the buss bar may be the problem.\")},{title:\"How can I tell when an electrical outlet is not safe or needs to be replaced?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If you plug into an electrical outlet and it is loose it should be replaced. If the power is intermittent it is probably loose and loose connections cause heat and heat can cause a fire.\")}]};var styles={// bgColor: 'white',\ntitleTextColor:\"#1f40a3\",rowTitleColor:\"#1f40a3\"// rowContentColor: 'grey',\n// arrowColor: \"red\",\n};var config={animate:true// arrowIcon: \"V\",\n// tabFocus: true\n};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"main\",{style:{width:\"100%\",boxShadow:\"inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"section\",{style:{display:\"flex\",justifyContent:\"center\",padding:\"50px\",marginTop:\"50px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{width:\"980px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react_faq_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{data:data,styles:styles,config:config}))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{marginTop:\"100px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null)));};// Connect the Item to gain access to `state` as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Faq));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZhcS5qcz9jY2YzIl0sIm5hbWVzIjpbIkZhcSIsInN0YXRlIiwiYWN0aW9ucyIsImZhcXMiLCJzZXRGYXFzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJyb3dzIiwiZGF0YSIsImNvbnRlbnQiLCJyZW5kZXJlZCIsInJlcGxhY2UiLCJzZXBlcmF0ZWQiLCJzZXBlcmF0ZWR0d28iLCJzZXBlcmF0ZWR0aHJlZSIsInNlcGVyYXRlZGZvdXIiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwidGl0bGUiLCJzdHlsZXMiLCJ0aXRsZVRleHRDb2xvciIsInJvd1RpdGxlQ29sb3IiLCJjb25maWciLCJhbmltYXRlIiwid2lkdGgiLCJib3hTaGFkb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BLEdBQU1BLElBQUcsQ0FBRyxRQUF3QixJQUF2QixDQUFFQyxLQUFGLENBQVNDLE9BQVQsQ0FBdUIsTUFDbEM7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDRDtBQUdDLEdBQU0sQ0FBQ0MsSUFBRCxDQUFPQyxPQUFQLEVBQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEMsQ0FFQUMsdURBQVMsQ0FBQyxJQUFNLENBQ2pCQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsNkRBQVYsRUFBeUVDLElBQXpFLENBQThFQyxHQUFHLEVBQUksQ0FFcEYsR0FBSUMsS0FBSSxDQUFHLEVBQVgsQ0FFQSxHQUFJQyxLQUFJLENBQUdGLEdBQUcsQ0FBQ0UsSUFBSixDQUFTQyxPQUFULENBQWlCQyxRQUFqQixDQUEwQkMsT0FBMUIsQ0FBa0MsS0FBbEMsQ0FBeUMsRUFBekMsQ0FBWCxDQUNBLEdBQUlDLFVBQVMsQ0FBR0osSUFBSSxDQUFDRyxPQUFMLENBQWEsT0FBYixDQUFzQixHQUF0QixDQUFoQixDQUNBLEdBQUlFLGFBQVksQ0FBR0QsU0FBUyxDQUFDRCxPQUFWLENBQWtCLFFBQWxCLENBQTRCLEVBQTVCLENBQW5CLENBQ0EsR0FBSUcsZUFBYyxDQUFHRCxZQUFZLENBQUNGLE9BQWIsQ0FBcUIsTUFBckIsQ0FBNkIsRUFBN0IsQ0FBckIsQ0FDQSxHQUFJSSxjQUFhLENBQUdELGNBQWMsQ0FBQ0gsT0FBZixDQUF1QixLQUF2QixDQUE4QixHQUE5QixFQUFtQ0ssS0FBbkMsQ0FBeUMsR0FBekMsQ0FBcEIsQ0FFQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlILGFBQWEsQ0FBQ0MsS0FBZCxDQUFvQixHQUFwQixDQUFaLEVBRUFELGFBQWEsQ0FBQ0ksT0FBZCxDQUFzQixDQUFDQyxJQUFELENBQU9DLEtBQVAsR0FBaUIsQ0FDdENKLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRSxJQUFaLENBQWtCQyxLQUFsQixFQUdBLENBSkQsRUFNQSxDQWxCRCxFQW1CRSxDQXBCUSxDQW9CTixFQXBCTSxDQUFULENBc0JBLEdBQU1iLEtBQUksQ0FBRyxDQUNYYyxLQUFLLENBQUUsTUFESSxDQUVYZixJQUFJLENBQUUsQ0FDSixDQUNFZSxLQUFLLENBQUUsZ0RBRFQsQ0FFRWIsT0FBTyxDQUNMLGdYQUhKLENBREksQ0FhSixDQUNFYSxLQUFLLENBQUUsNENBRFQsQ0FFRWIsT0FBTyxDQUNMLG9LQUhKLENBYkksQ0FzQkosQ0FDRWEsS0FBSyxDQUFFLCtDQURULENBRUViLE9BQU8sQ0FDTCx3VEFISixDQXRCSSxDQWlDSixDQUNFYSxLQUFLLENBQ0gsaUlBRkosQ0FHRWIsT0FBTyxDQUNMLGtVQUpKLENBakNJLENBNkNKLENBQ0VhLEtBQUssQ0FBRSx1REFEVCxDQUVFYixPQUFPLENBQ0wseVFBSEosQ0E3Q0ksQ0F1REosQ0FDRWEsS0FBSyxDQUFFLGlEQURULENBRUViLE9BQU8sQ0FDTCxzZ0JBSEosQ0F2REksQ0FxRUosQ0FDRWEsS0FBSyxDQUNILCtFQUZKLENBR0ViLE9BQU8sQ0FDTCxnUUFKSixDQXJFSSxDQUZLLENBQWIsQ0FxRkEsR0FBTWMsT0FBTSxDQUFHLENBQ2I7QUFDQUMsY0FBYyxDQUFFLFNBRkgsQ0FHYkMsYUFBYSxDQUFFLFNBQ2Y7QUFDQTtBQUxhLENBQWYsQ0FRQSxHQUFNQyxPQUFNLENBQUcsQ0FDYkMsT0FBTyxDQUFFLElBQ1Q7QUFDQTtBQUhhLENBQWYsQ0FNQSxNQUNFLG1FQUNFLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsTUFERixDQUVMQyxTQUFTLENBQUUseUNBRk4sQ0FEVCxFQU1FLHFFQUNFLEtBQUssQ0FBRSxDQUNMQyxPQUFPLENBQUUsTUFESixDQUVMQyxjQUFjLENBQUUsUUFGWCxDQUdMQyxPQUFPLENBQUUsTUFISixDQUlMQyxTQUFTLENBQUUsTUFKTixDQURULEVBUUUsaUVBQUssS0FBSyxDQUFFLENBQUVMLEtBQUssQ0FBRSxPQUFULENBQVosRUFDRSwwREFBQywyREFBRCxFQUFLLElBQUksQ0FBRXBCLElBQVgsQ0FBaUIsTUFBTSxDQUFFZSxNQUF6QixDQUFpQyxNQUFNLENBQUVHLE1BQXpDLEVBREYsQ0FSRixDQU5GLENBa0JFLGlFQUFLLEtBQUssQ0FBRSxDQUFFTyxTQUFTLENBQUUsT0FBYixDQUFaLEVBQ0UsMERBQUMsK0NBQUQsTUFERixDQWxCRixDQURGLENBd0JELENBaEtELENBa0tBO0FBQ2VDLHVIQUFPLENBQUN0QyxHQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mYXEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCBHbG9iYWwsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBGQVEgZnJvbSBcInJlYWN0LWZhcS1jb21wb25lbnRcIjtcblxuY29uc3QgRmFxID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvL3VzZUVmZmVjdCgoKSA9PiB7XG4gIC8vYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvaG9tZS1wb3N0XCIsIHsgZm9yY2U6IHRydWUgfSk7XG4gIC8vfSwgW10pO1xuXG4gIC8vY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvaG9tZS1wb3N0L1wiKTtcblxuICAvLyAgIGlmIChkYXRhLmlzUG9zdCkge1xuICAvLyAgICAgY29uc3QgY2F0ZWdvcnkgPSBzdGF0ZS5zb3VyY2UucG9zdFtkYXRhLmlkXTtcbiAgLy8gICAgIGNvbnN0IGZpcnN0SGVhZGVyID0gY2F0ZWdvcnkuY29udGVudC5yZW5kZXJlZDtcblx0Ly9cbiAgXG5cbiAgY29uc3QgW2ZhcXMsIHNldEZhcXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdGF4aW9zLmdldChcImh0dHBzOi8vbWFuYWdlLnByaXRjaGFyZGVsZWN0cmljLm5ldC93cC1qc29uL3dwL3YyL3Bvc3RzLzY0XCIpLnRoZW4ocmVzID0+IHtcblxuXHRcdGxldCByb3dzID0gW11cblxuXHRcdGxldCBkYXRhID0gcmVzLmRhdGEuY29udGVudC5yZW5kZXJlZC5yZXBsYWNlKC9cXG4vZywgJycpO1xuXHRcdGxldCBzZXBlcmF0ZWQgPSBkYXRhLnJlcGxhY2UoLzxcXC9wPi8sICd8Jyk7XG5cdFx0bGV0IHNlcGVyYXRlZHR3byA9IHNlcGVyYXRlZC5yZXBsYWNlKC88XFwvaDI+LywgJycpO1xuXHRcdGxldCBzZXBlcmF0ZWR0aHJlZSA9IHNlcGVyYXRlZHR3by5yZXBsYWNlKC88aDI+LywgJycpO1xuXHRcdGxldCBzZXBlcmF0ZWRmb3VyID0gc2VwZXJhdGVkdGhyZWUucmVwbGFjZSgvPHA+LywgJ3wnKS5zcGxpdChcInxcIik7XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coc2VwZXJhdGVkZm91ci5zcGxpdChcInxcIikpXG5cblx0XHRzZXBlcmF0ZWRmb3VyLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhpdGVtLCBpbmRleClcblxuXG5cdFx0fSlcblxuXHR9KVxuICB9LCBbXSlcblxuICBjb25zdCBkYXRhID0ge1xuICAgIHRpdGxlOiBcIkZBUXNcIixcbiAgICByb3dzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIldoZW4gc2hvdWxkIEkgY29uc2lkZXIgY2FsbGluZyBhbiBlbGVjdHJpY2lhbj9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgV2hlbiB5b3VyIGxpZmUgYW5kIHdlbGwgYmVpbmcgaXMgbW9yZSB2YWx1YWJsZSB0aGFuIHlvdXIgbW9uZXkuIE9mXG4gICAgICAgICAgICBhbGwgdGhlIHR5cGVzIG9mIHdvcmsgdGhhdCBjYW4gaGF2ZSBoYXphcmRvdXMgZWZmZWN0cywgaW1tZWRpYXRlIGFuZFxuICAgICAgICAgICAgdW5leHBlY3RlZC4gVGhlIGVsZWN0cmljYWwgZmllbGQgaXMgdGhlIG1vc3QgZGFuZ2Vyb3VzLiBFbGVjdHJpY2FsXG4gICAgICAgICAgICBncm91bmRpbmcgYW5kIEdGQ0kgcHJvdGVjdGlvbiBpcyBwcm9iYWJseSB0aGUgbW9zdCBtaXN1bmRlcnN0b29kIGFuZFxuICAgICAgICAgICAgY3JpdGljYWwgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJXaHkgd291bGQgSSBuZWVkIGEgbmV3IGVsZWN0cmljYWwgY2lyY3VpdD9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSWYgeW91IGFyZSBhZGRpbmcgZXF1aXBtZW50IHRoYXQgaGFzIGEgbGFyZ2UgZWxlY3RyaWNhbCBkZW1hbmQgaXRcbiAgICAgICAgICAgIG1heSByZXF1aXJlIGl0cyBvd24gY2lyY3VpdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJXaGF0IGRvIEkgZG8gaWYgbXkgY2lyY3VpdCBrZWVwcyBvdmVybG9hZGluZz9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQ29uZmlybSB0aGUgZWxlY3RyaWNhbCBkZW1hbmQgb2YgZWFjaCBpdGVtIG9uIHRoYXQgY2lyY3VpdC4gSXQgbWF5XG4gICAgICAgICAgICBiZSBhcyBlYXN5IGFzIG1vdmluZyBhbiBpdGVtIHRvIGFub3RoZXIgbG9jYXRpb24gYW5kIHBsdWdnaW5nIGluIHRvXG4gICAgICAgICAgICBhbm90aGVyIGNpcmN1aXQuIElmIHlvdSBmaW5kIHRoYXQgaXMgbm90IGFuIG9wdGlvbiB0aGVuIGEgbmV3XG4gICAgICAgICAgICBjaXJjdWl0IHRvIHNwbGl0IHRoZSBsb2FkIG1heSBiZSBuZWNlc3NhcnkuXCJcbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICBcIkkgaGF2ZSB0b28gbWFueSBwb3dlciBzdHJpcHMgYmVoaW5kIG15IGVudGVydGFpbm1lbnQgY2VudGVyIGFuZCB3YW50IHRvIHJlZHVjZSB0aGUgY2x1dHRlci4gSG93IGNhbiBQcml0Y2hhcmQgRWxlY3RyaWMgaGVscCBtZT9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIGJlc3QgY291cnNlIG9mIGFjdGlvbiB3b3VsZCBiZSB0byBhZGQgcmVjZXB0YWNsZXMgaW4gdGhlIGRlc2lyZWRcbiAgICAgICAgICAgIGxvY2F0aW9ucyB0byByZWR1Y2UgY29yZHMuIEl0IHdvdWxkIGFsc28gYmUgYSBnb29kIGlkZWEgdG8gYWRkIGFcbiAgICAgICAgICAgIHN1cmdlIHByb3RlY3Rpb24gZGV2aWNlIGluIHRoZSBlbGVjdHJpY2FsIHBhbmVsIHRvIHByb3ZpZGUgdGhlIHN1cmdlXG4gICAgICAgICAgICBwcm90ZWN0aW9uIHRoYXQgdGhlIHBvd2VyIHN0cmlwIG1heSBiZSBwcm92aWRpbmcuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ2FuIHlvdSBjaGFuZ2UgYW4gZXhpc3Rpbmcgc3dpdGNoIHRvIGEgZGltbWVyIHN3aXRjaD9cIixcbiAgICAgICAgY29udGVudDogKFxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSW4gbW9zdCBjYXNlcyB5b3UgY2FuIGNoYW5nZSBhbiBleGlzdGluZyBzd2l0Y2ggdG8gYSBkaW1tZXIgc3dpdGNoXG4gICAgICAgICAgICB3aXRoIG5vIHdvcmsgb24gdGhlIHdpcmluZy4gVGhlIGV4Y2VwdGlvbiB3b3VsZCBiZSBpZiB0aGUgZGltbWVyXG4gICAgICAgICAgICBuZWVkcyBhIG5ldXRyYWwgd2lyZSBhbmQgaXQgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgc3dpdGNoIGJveC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJXaHkgaXMgYSBicmVha2VyIGluIG15IHBhbmVsIGZlZWwgaG90IHRvIHRvdWNoP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJZiBhIGJyZWFrZXIgaW4geW91ciBwYW5lbCBpcyBob3QgdG8gdGhlIHRvdWNoIHRoZSBmaXJzdCB0aGluZyB0byBkb1xuICAgICAgICAgICAgaXMgcmVhZCB0aGUgYW1wcyBvbiB0aGUgd2lyZSBjb25uZWN0ZWQgdG8gdGhhdCBicmVha2VyIHRvIGRldGVybWluZVxuICAgICAgICAgICAgaWYgdGhlIGJyZWFrZXIgaXMgbmVhcmluZyBvdmVybG9hZC4gVGhleSBjYW4gb3BlcmF0ZSBhdCA4MCUgb2ZcbiAgICAgICAgICAgIG1heGltdW0gbG9hZCBmb3IgYW4gZXh0ZW5kZWQgcGVyaW9kIG9mIHRpbWUgd2l0aCBubyBvdGhlciBhZHZlcnNlXG4gICAgICAgICAgICBlZmZlY3RzIHRoYW4gdGhlIGJyZWFrZXIgZmVlbGluZyB3YXJtLiBJZiBob3QgZW5vdWdoIHlvdSBjYW4ndCBsZWF2ZVxuICAgICAgICAgICAgeW91ciBmaW5nZXIgb24gaXQgYSBsb29zZSBjb25uZWN0aW9uIG9yIGEgYmFkIGNvbm5lY3Rpb24gYmV0d2VlbiB0aGVcbiAgICAgICAgICAgIGJyZWFrZXIgYW5kIHRoZSBidXNzIGJhciBtYXkgYmUgdGhlIHByb2JsZW0uXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6XG4gICAgICAgICAgXCJIb3cgY2FuIEkgdGVsbCB3aGVuIGFuIGVsZWN0cmljYWwgb3V0bGV0IGlzIG5vdCBzYWZlIG9yIG5lZWRzIHRvIGJlIHJlcGxhY2VkP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJZiB5b3UgcGx1ZyBpbnRvIGFuIGVsZWN0cmljYWwgb3V0bGV0IGFuZCBpdCBpcyBsb29zZSBpdCBzaG91bGQgYmVcbiAgICAgICAgICAgIHJlcGxhY2VkLiBJZiB0aGUgcG93ZXIgaXMgaW50ZXJtaXR0ZW50IGl0IGlzIHByb2JhYmx5IGxvb3NlIGFuZFxuICAgICAgICAgICAgbG9vc2UgY29ubmVjdGlvbnMgY2F1c2UgaGVhdCBhbmQgaGVhdCBjYW4gY2F1c2UgYSBmaXJlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfTtcblxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgLy8gYmdDb2xvcjogJ3doaXRlJyxcbiAgICB0aXRsZVRleHRDb2xvcjogXCIjMWY0MGEzXCIsXG4gICAgcm93VGl0bGVDb2xvcjogXCIjMWY0MGEzXCIsXG4gICAgLy8gcm93Q29udGVudENvbG9yOiAnZ3JleScsXG4gICAgLy8gYXJyb3dDb2xvcjogXCJyZWRcIixcbiAgfTtcblxuICBjb25zdCBjb25maWcgPSB7XG4gICAgYW5pbWF0ZTogdHJ1ZSxcbiAgICAvLyBhcnJvd0ljb246IFwiVlwiLFxuICAgIC8vIHRhYkZvY3VzOiB0cnVlXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpblxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiaW5zZXQgMCA4cHggOHB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjUpXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgcGFkZGluZzogXCI1MHB4XCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjUwcHhcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCI5ODBweFwiIH19PlxuICAgICAgICAgIDxGQVEgZGF0YT17ZGF0YX0gc3R5bGVzPXtzdHlsZXN9IGNvbmZpZz17Y29uZmlnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwMHB4XCIgfX0+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbi8vIENvbm5lY3QgdGhlIEl0ZW0gdG8gZ2FpbiBhY2Nlc3MgdG8gYHN0YXRlYCBhcyBhIHByb3BcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoRmFxKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/faq.js\n");

/***/ })

})