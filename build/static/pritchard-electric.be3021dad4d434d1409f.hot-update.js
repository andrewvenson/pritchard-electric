webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/faq.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/faq.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ \"./packages/mars-theme/src/components/footer.js\");\n/* harmony import */ var react_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-faq-component */ \"./node_modules/react-faq-component/build/index.es.js\");\nvar Faq=(_ref)=>{var{state,actions}=_ref;//useEffect(() => {\n//actions.source.fetch(\"/home-post\", { force: true });\n//}, []);\n//const data = state.source.get(\"/home-post/\");\n//   if (data.isPost) {\n//     const category = state.source.post[data.id];\n//     const firstHeader = category.content.rendered;\n//\nvar[faqs,setFaqs]=Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(()=>{axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"https://manage.pritchardelectric.net/wp-json/wp/v2/posts/64\").then(res=>{console.log(res.data);var data=res.data.content.rendered.replace(/\\n/g,'');var seperated=data.replace(/<\\/p>/,'|');var seperatedtwo=seperated.replace(/<\\/h2>/,'');var seperatedthree=seperatedtwo.replace(/<h2>/,'');var seperatedfour=seperatedthree.replace(/<p>/,'|');console.log(seperatedfour.split(\"|\"));});},[]);var data={title:\"FAQs\",rows:[{title:\"When should I consider calling an electrician?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"When your life and well being is more valuable than your money. Of all the types of work that can have hazardous effects, immediate and unexpected. The electrical field is the most dangerous. Electrical grounding and GFCI protection is probably the most misunderstood and critical at the same time.\")},{title:\"Why would I need a new electrical circuit?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If you are adding equipment that has a large electrical demand it may require its own circuit.\")},{title:\"What do I do if my circuit keeps overloading?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"Confirm the electrical demand of each item on that circuit. It may be as easy as moving an item to another location and plugging in to another circuit. If you find that is not an option then a new circuit to split the load may be necessary.\\\"\")},{title:\"I have too many power strips behind my entertainment center and want to reduce the clutter. How can Pritchard Electric help me?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"The best course of action would be to add receptacles in the desired locations to reduce cords. It would also be a good idea to add a surge protection device in the electrical panel to provide the surge protection that the power strip may be providing.\")},{title:\"Can you change an existing switch to a dimmer switch?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"In most cases you can change an existing switch to a dimmer switch with no work on the wiring. The exception would be if the dimmer needs a neutral wire and it is not available in the switch box.\")},{title:\"Why is a breaker in my panel feel hot to touch?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If a breaker in your panel is hot to the touch the first thing to do is read the amps on the wire connected to that breaker to determine if the breaker is nearing overload. They can operate at 80% of maximum load for an extended period of time with no other adverse effects than the breaker feeling warm. If hot enough you can't leave your finger on it a loose connection or a bad connection between the breaker and the buss bar may be the problem.\")},{title:\"How can I tell when an electrical outlet is not safe or needs to be replaced?\",content:Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\",null,\"If you plug into an electrical outlet and it is loose it should be replaced. If the power is intermittent it is probably loose and loose connections cause heat and heat can cause a fire.\")}]};var styles={// bgColor: 'white',\ntitleTextColor:\"#1f40a3\",rowTitleColor:\"#1f40a3\"// rowContentColor: 'grey',\n// arrowColor: \"red\",\n};var config={animate:true// arrowIcon: \"V\",\n// tabFocus: true\n};return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"main\",{style:{width:\"100%\",boxShadow:\"inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"section\",{style:{display:\"flex\",justifyContent:\"center\",padding:\"50px\",marginTop:\"50px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{width:\"980px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react_faq_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"],{data:data,styles:styles,config:config}))),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{style:{marginTop:\"100px\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null)));};// Connect the Item to gain access to `state` as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(Faq));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2ZhcS5qcz9jY2YzIl0sIm5hbWVzIjpbIkZhcSIsInN0YXRlIiwiYWN0aW9ucyIsImZhcXMiLCJzZXRGYXFzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNvbnRlbnQiLCJyZW5kZXJlZCIsInJlcGxhY2UiLCJzZXBlcmF0ZWQiLCJzZXBlcmF0ZWR0d28iLCJzZXBlcmF0ZWR0aHJlZSIsInNlcGVyYXRlZGZvdXIiLCJzcGxpdCIsInRpdGxlIiwicm93cyIsInN0eWxlcyIsInRpdGxlVGV4dENvbG9yIiwicm93VGl0bGVDb2xvciIsImNvbmZpZyIsImFuaW1hdGUiLCJ3aWR0aCIsImJveFNoYWRvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInBhZGRpbmciLCJtYXJnaW5Ub3AiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUEsR0FBTUEsSUFBRyxDQUFHLFFBQXdCLElBQXZCLENBQUVDLEtBQUYsQ0FBU0MsT0FBVCxDQUF1QixNQUNsQztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNEO0FBR0MsR0FBTSxDQUFDQyxJQUFELENBQU9DLE9BQVAsRUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQyxDQUVBQyx1REFBUyxDQUFDLElBQU0sQ0FDakJDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSw2REFBVixFQUF5RUMsSUFBekUsQ0FBOEVDLEdBQUcsRUFBSSxDQUNwRkMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ0csSUFBaEIsRUFDQSxHQUFJQSxLQUFJLENBQUdILEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxPQUFULENBQWlCQyxRQUFqQixDQUEwQkMsT0FBMUIsQ0FBa0MsS0FBbEMsQ0FBeUMsRUFBekMsQ0FBWCxDQUNBLEdBQUlDLFVBQVMsQ0FBR0osSUFBSSxDQUFDRyxPQUFMLENBQWEsT0FBYixDQUFzQixHQUF0QixDQUFoQixDQUNBLEdBQUlFLGFBQVksQ0FBR0QsU0FBUyxDQUFDRCxPQUFWLENBQWtCLFFBQWxCLENBQTRCLEVBQTVCLENBQW5CLENBQ0EsR0FBSUcsZUFBYyxDQUFHRCxZQUFZLENBQUNGLE9BQWIsQ0FBcUIsTUFBckIsQ0FBNkIsRUFBN0IsQ0FBckIsQ0FDQSxHQUFJSSxjQUFhLENBQUdELGNBQWMsQ0FBQ0gsT0FBZixDQUF1QixLQUF2QixDQUE4QixHQUE5QixDQUFwQixDQUVBTCxPQUFPLENBQUNDLEdBQVIsQ0FBWVEsYUFBYSxDQUFDQyxLQUFkLENBQW9CLEdBQXBCLENBQVosRUFDQSxDQVRELEVBVUUsQ0FYUSxDQVdOLEVBWE0sQ0FBVCxDQWFBLEdBQU1SLEtBQUksQ0FBRyxDQUNYUyxLQUFLLENBQUUsTUFESSxDQUVYQyxJQUFJLENBQUUsQ0FDSixDQUNFRCxLQUFLLENBQUUsZ0RBRFQsQ0FFRVIsT0FBTyxDQUNMLGdYQUhKLENBREksQ0FhSixDQUNFUSxLQUFLLENBQUUsNENBRFQsQ0FFRVIsT0FBTyxDQUNMLG9LQUhKLENBYkksQ0FzQkosQ0FDRVEsS0FBSyxDQUFFLCtDQURULENBRUVSLE9BQU8sQ0FDTCx3VEFISixDQXRCSSxDQWlDSixDQUNFUSxLQUFLLENBQ0gsaUlBRkosQ0FHRVIsT0FBTyxDQUNMLGtVQUpKLENBakNJLENBNkNKLENBQ0VRLEtBQUssQ0FBRSx1REFEVCxDQUVFUixPQUFPLENBQ0wseVFBSEosQ0E3Q0ksQ0F1REosQ0FDRVEsS0FBSyxDQUFFLGlEQURULENBRUVSLE9BQU8sQ0FDTCxzZ0JBSEosQ0F2REksQ0FxRUosQ0FDRVEsS0FBSyxDQUNILCtFQUZKLENBR0VSLE9BQU8sQ0FDTCxnUUFKSixDQXJFSSxDQUZLLENBQWIsQ0FxRkEsR0FBTVUsT0FBTSxDQUFHLENBQ2I7QUFDQUMsY0FBYyxDQUFFLFNBRkgsQ0FHYkMsYUFBYSxDQUFFLFNBQ2Y7QUFDQTtBQUxhLENBQWYsQ0FRQSxHQUFNQyxPQUFNLENBQUcsQ0FDYkMsT0FBTyxDQUFFLElBQ1Q7QUFDQTtBQUhhLENBQWYsQ0FNQSxNQUNFLG1FQUNFLEtBQUssQ0FBRSxDQUNMQyxLQUFLLENBQUUsTUFERixDQUVMQyxTQUFTLENBQUUseUNBRk4sQ0FEVCxFQU1FLHFFQUNFLEtBQUssQ0FBRSxDQUNMQyxPQUFPLENBQUUsTUFESixDQUVMQyxjQUFjLENBQUUsUUFGWCxDQUdMQyxPQUFPLENBQUUsTUFISixDQUlMQyxTQUFTLENBQUUsTUFKTixDQURULEVBUUUsaUVBQUssS0FBSyxDQUFFLENBQUVMLEtBQUssQ0FBRSxPQUFULENBQVosRUFDRSwwREFBQywyREFBRCxFQUFLLElBQUksQ0FBRWhCLElBQVgsQ0FBaUIsTUFBTSxDQUFFVyxNQUF6QixDQUFpQyxNQUFNLENBQUVHLE1BQXpDLEVBREYsQ0FSRixDQU5GLENBa0JFLGlFQUFLLEtBQUssQ0FBRSxDQUFFTyxTQUFTLENBQUUsT0FBYixDQUFaLEVBQ0UsMERBQUMsK0NBQUQsTUFERixDQWxCRixDQURGLENBd0JELENBdkpELENBeUpBO0FBQ2VDLHVIQUFPLENBQUNuQyxHQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9mYXEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgc3R5bGVkLCBjb25uZWN0LCBHbG9iYWwsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBGQVEgZnJvbSBcInJlYWN0LWZhcS1jb21wb25lbnRcIjtcblxuY29uc3QgRmFxID0gKHsgc3RhdGUsIGFjdGlvbnMgfSkgPT4ge1xuICAvL3VzZUVmZmVjdCgoKSA9PiB7XG4gIC8vYWN0aW9ucy5zb3VyY2UuZmV0Y2goXCIvaG9tZS1wb3N0XCIsIHsgZm9yY2U6IHRydWUgfSk7XG4gIC8vfSwgW10pO1xuXG4gIC8vY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoXCIvaG9tZS1wb3N0L1wiKTtcblxuICAvLyAgIGlmIChkYXRhLmlzUG9zdCkge1xuICAvLyAgICAgY29uc3QgY2F0ZWdvcnkgPSBzdGF0ZS5zb3VyY2UucG9zdFtkYXRhLmlkXTtcbiAgLy8gICAgIGNvbnN0IGZpcnN0SGVhZGVyID0gY2F0ZWdvcnkuY29udGVudC5yZW5kZXJlZDtcblx0Ly9cbiAgXG5cbiAgY29uc3QgW2ZhcXMsIHNldEZhcXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG5cdGF4aW9zLmdldChcImh0dHBzOi8vbWFuYWdlLnByaXRjaGFyZGVsZWN0cmljLm5ldC93cC1qc29uL3dwL3YyL3Bvc3RzLzY0XCIpLnRoZW4ocmVzID0+IHtcblx0XHRjb25zb2xlLmxvZyhyZXMuZGF0YSlcblx0XHRsZXQgZGF0YSA9IHJlcy5kYXRhLmNvbnRlbnQucmVuZGVyZWQucmVwbGFjZSgvXFxuL2csICcnKTtcblx0XHRsZXQgc2VwZXJhdGVkID0gZGF0YS5yZXBsYWNlKC88XFwvcD4vLCAnfCcpO1xuXHRcdGxldCBzZXBlcmF0ZWR0d28gPSBzZXBlcmF0ZWQucmVwbGFjZSgvPFxcL2gyPi8sICcnKTtcblx0XHRsZXQgc2VwZXJhdGVkdGhyZWUgPSBzZXBlcmF0ZWR0d28ucmVwbGFjZSgvPGgyPi8sICcnKTtcblx0XHRsZXQgc2VwZXJhdGVkZm91ciA9IHNlcGVyYXRlZHRocmVlLnJlcGxhY2UoLzxwPi8sICd8Jyk7XG5cdFx0XG5cdFx0Y29uc29sZS5sb2coc2VwZXJhdGVkZm91ci5zcGxpdChcInxcIikpXG5cdH0pXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgdGl0bGU6IFwiRkFRc1wiLFxuICAgIHJvd3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IFwiV2hlbiBzaG91bGQgSSBjb25zaWRlciBjYWxsaW5nIGFuIGVsZWN0cmljaWFuP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaGVuIHlvdXIgbGlmZSBhbmQgd2VsbCBiZWluZyBpcyBtb3JlIHZhbHVhYmxlIHRoYW4geW91ciBtb25leS4gT2ZcbiAgICAgICAgICAgIGFsbCB0aGUgdHlwZXMgb2Ygd29yayB0aGF0IGNhbiBoYXZlIGhhemFyZG91cyBlZmZlY3RzLCBpbW1lZGlhdGUgYW5kXG4gICAgICAgICAgICB1bmV4cGVjdGVkLiBUaGUgZWxlY3RyaWNhbCBmaWVsZCBpcyB0aGUgbW9zdCBkYW5nZXJvdXMuIEVsZWN0cmljYWxcbiAgICAgICAgICAgIGdyb3VuZGluZyBhbmQgR0ZDSSBwcm90ZWN0aW9uIGlzIHByb2JhYmx5IHRoZSBtb3N0IG1pc3VuZGVyc3Rvb2QgYW5kXG4gICAgICAgICAgICBjcml0aWNhbCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIldoeSB3b3VsZCBJIG5lZWQgYSBuZXcgZWxlY3RyaWNhbCBjaXJjdWl0P1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJZiB5b3UgYXJlIGFkZGluZyBlcXVpcG1lbnQgdGhhdCBoYXMgYSBsYXJnZSBlbGVjdHJpY2FsIGRlbWFuZCBpdFxuICAgICAgICAgICAgbWF5IHJlcXVpcmUgaXRzIG93biBjaXJjdWl0LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIldoYXQgZG8gSSBkbyBpZiBteSBjaXJjdWl0IGtlZXBzIG92ZXJsb2FkaW5nP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDb25maXJtIHRoZSBlbGVjdHJpY2FsIGRlbWFuZCBvZiBlYWNoIGl0ZW0gb24gdGhhdCBjaXJjdWl0LiBJdCBtYXlcbiAgICAgICAgICAgIGJlIGFzIGVhc3kgYXMgbW92aW5nIGFuIGl0ZW0gdG8gYW5vdGhlciBsb2NhdGlvbiBhbmQgcGx1Z2dpbmcgaW4gdG9cbiAgICAgICAgICAgIGFub3RoZXIgY2lyY3VpdC4gSWYgeW91IGZpbmQgdGhhdCBpcyBub3QgYW4gb3B0aW9uIHRoZW4gYSBuZXdcbiAgICAgICAgICAgIGNpcmN1aXQgdG8gc3BsaXQgdGhlIGxvYWQgbWF5IGJlIG5lY2Vzc2FyeS5cIlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOlxuICAgICAgICAgIFwiSSBoYXZlIHRvbyBtYW55IHBvd2VyIHN0cmlwcyBiZWhpbmQgbXkgZW50ZXJ0YWlubWVudCBjZW50ZXIgYW5kIHdhbnQgdG8gcmVkdWNlIHRoZSBjbHV0dGVyLiBIb3cgY2FuIFByaXRjaGFyZCBFbGVjdHJpYyBoZWxwIG1lP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGUgYmVzdCBjb3Vyc2Ugb2YgYWN0aW9uIHdvdWxkIGJlIHRvIGFkZCByZWNlcHRhY2xlcyBpbiB0aGUgZGVzaXJlZFxuICAgICAgICAgICAgbG9jYXRpb25zIHRvIHJlZHVjZSBjb3Jkcy4gSXQgd291bGQgYWxzbyBiZSBhIGdvb2QgaWRlYSB0byBhZGQgYVxuICAgICAgICAgICAgc3VyZ2UgcHJvdGVjdGlvbiBkZXZpY2UgaW4gdGhlIGVsZWN0cmljYWwgcGFuZWwgdG8gcHJvdmlkZSB0aGUgc3VyZ2VcbiAgICAgICAgICAgIHByb3RlY3Rpb24gdGhhdCB0aGUgcG93ZXIgc3RyaXAgbWF5IGJlIHByb3ZpZGluZy5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogXCJDYW4geW91IGNoYW5nZSBhbiBleGlzdGluZyBzd2l0Y2ggdG8gYSBkaW1tZXIgc3dpdGNoP1wiLFxuICAgICAgICBjb250ZW50OiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJbiBtb3N0IGNhc2VzIHlvdSBjYW4gY2hhbmdlIGFuIGV4aXN0aW5nIHN3aXRjaCB0byBhIGRpbW1lciBzd2l0Y2hcbiAgICAgICAgICAgIHdpdGggbm8gd29yayBvbiB0aGUgd2lyaW5nLiBUaGUgZXhjZXB0aW9uIHdvdWxkIGJlIGlmIHRoZSBkaW1tZXJcbiAgICAgICAgICAgIG5lZWRzIGEgbmV1dHJhbCB3aXJlIGFuZCBpdCBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSBzd2l0Y2ggYm94LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiBcIldoeSBpcyBhIGJyZWFrZXIgaW4gbXkgcGFuZWwgZmVlbCBob3QgdG8gdG91Y2g/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIElmIGEgYnJlYWtlciBpbiB5b3VyIHBhbmVsIGlzIGhvdCB0byB0aGUgdG91Y2ggdGhlIGZpcnN0IHRoaW5nIHRvIGRvXG4gICAgICAgICAgICBpcyByZWFkIHRoZSBhbXBzIG9uIHRoZSB3aXJlIGNvbm5lY3RlZCB0byB0aGF0IGJyZWFrZXIgdG8gZGV0ZXJtaW5lXG4gICAgICAgICAgICBpZiB0aGUgYnJlYWtlciBpcyBuZWFyaW5nIG92ZXJsb2FkLiBUaGV5IGNhbiBvcGVyYXRlIGF0IDgwJSBvZlxuICAgICAgICAgICAgbWF4aW11bSBsb2FkIGZvciBhbiBleHRlbmRlZCBwZXJpb2Qgb2YgdGltZSB3aXRoIG5vIG90aGVyIGFkdmVyc2VcbiAgICAgICAgICAgIGVmZmVjdHMgdGhhbiB0aGUgYnJlYWtlciBmZWVsaW5nIHdhcm0uIElmIGhvdCBlbm91Z2ggeW91IGNhbid0IGxlYXZlXG4gICAgICAgICAgICB5b3VyIGZpbmdlciBvbiBpdCBhIGxvb3NlIGNvbm5lY3Rpb24gb3IgYSBiYWQgY29ubmVjdGlvbiBiZXR3ZWVuIHRoZVxuICAgICAgICAgICAgYnJlYWtlciBhbmQgdGhlIGJ1c3MgYmFyIG1heSBiZSB0aGUgcHJvYmxlbS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTpcbiAgICAgICAgICBcIkhvdyBjYW4gSSB0ZWxsIHdoZW4gYW4gZWxlY3RyaWNhbCBvdXRsZXQgaXMgbm90IHNhZmUgb3IgbmVlZHMgdG8gYmUgcmVwbGFjZWQ/XCIsXG4gICAgICAgIGNvbnRlbnQ6IChcbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIElmIHlvdSBwbHVnIGludG8gYW4gZWxlY3RyaWNhbCBvdXRsZXQgYW5kIGl0IGlzIGxvb3NlIGl0IHNob3VsZCBiZVxuICAgICAgICAgICAgcmVwbGFjZWQuIElmIHRoZSBwb3dlciBpcyBpbnRlcm1pdHRlbnQgaXQgaXMgcHJvYmFibHkgbG9vc2UgYW5kXG4gICAgICAgICAgICBsb29zZSBjb25uZWN0aW9ucyBjYXVzZSBoZWF0IGFuZCBoZWF0IGNhbiBjYXVzZSBhIGZpcmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICBdLFxuICB9O1xuXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAvLyBiZ0NvbG9yOiAnd2hpdGUnLFxuICAgIHRpdGxlVGV4dENvbG9yOiBcIiMxZjQwYTNcIixcbiAgICByb3dUaXRsZUNvbG9yOiBcIiMxZjQwYTNcIixcbiAgICAvLyByb3dDb250ZW50Q29sb3I6ICdncmV5JyxcbiAgICAvLyBhcnJvd0NvbG9yOiBcInJlZFwiLFxuICB9O1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhbmltYXRlOiB0cnVlLFxuICAgIC8vIGFycm93SWNvbjogXCJWXCIsXG4gICAgLy8gdGFiRm9jdXM6IHRydWVcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIGJveFNoYWRvdzogXCJpbnNldCAwIDhweCA4cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuNSlcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjUwcHhcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiNTBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjk4MHB4XCIgfX0+XG4gICAgICAgICAgPEZBUSBkYXRhPXtkYXRhfSBzdHlsZXM9e3N0eWxlc30gY29uZmlnPXtjb25maWd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuLy8gQ29ubmVjdCB0aGUgSXRlbSB0byBnYWluIGFjY2VzcyB0byBgc3RhdGVgIGFzIGEgcHJvcFxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChGYXEpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/faq.js\n");

/***/ })

})