webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/title.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/title.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar Title=(_ref)=>{var{state}=_ref;// Get data about the current URL.\nvar data=state.source.get(state.router.link);// Set the default title.\nvar title=state.frontity.title;if(data.isHome){// Add titles to taxonomies, like \"Category: Nature - Blog Name\" or \"Tag: Japan - Blog Name\".\n// 1. Get the taxonomy entity from the state to get its taxonomy term and name.\n// const { taxonomy, name } = state.source[data.taxonomy][data.id];\n// 2. Uppercase first letter of the taxonomy term (from \"category\" to \"Category\").\n// const taxonomyCapitalized =\n//   taxonomy.charAt(0).toUpperCase() + taxonomy.slice(1);\n// 3. Render the proper title.\ntitle=\"Residential & Commercial Electricians \".concat(state.frontity.title);}else if(data.isAuthor){// Add titles to authors, like \"Author: Jon Snow - Blog Name\".\n// 1. Get the author entity from the state to get its name.\nvar{name}=state.source.author[data.id];// 2. Render the proper title.\ntitle=\"Author: \".concat(Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(name),\" - \").concat(state.frontity.title);}else if(data.isPostType){// Add titles to posts and pages, using the title and ending with the Blog Name.\n// 1. Get the post entity from the state and get its title.\nvar postTitle=state.source[data.type][data.id].title.rendered;// 2. Remove any HTML tags found in the title.\nvar cleanTitle=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(postTitle);// 3. Render the proper title.\ntitle=\"\".concat(cleanTitle,\" - \").concat(state.frontity.title);}else if(data.is404){// Add titles to 404's.\ntitle=\"404 Not Found - \".concat(state.frontity.title);}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"title\",null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Title));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3RpdGxlLmpzPzdmZmEiXSwibmFtZXMiOlsiVGl0bGUiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidGl0bGUiLCJmcm9udGl0eSIsImlzSG9tZSIsImlzQXV0aG9yIiwibmFtZSIsImF1dGhvciIsImlkIiwiZGVjb2RlIiwiaXNQb3N0VHlwZSIsInBvc3RUaXRsZSIsInR5cGUiLCJyZW5kZXJlZCIsImNsZWFuVGl0bGUiLCJpczQwNCIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBLEdBQU1BLE1BQUssQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzNCO0FBQ0EsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FDQTtBQUNBLEdBQUlDLE1BQUssQ0FBR04sS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQTNCLENBRUEsR0FBSUwsSUFBSSxDQUFDTyxNQUFULENBQWlCLENBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUYsS0FBSyxpREFBNENOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUEzRCxDQUFMLENBQ0QsQ0FURCxJQVNPLElBQUlMLElBQUksQ0FBQ1EsUUFBVCxDQUFtQixDQUN4QjtBQUNBO0FBQ0EsR0FBTSxDQUFFQyxJQUFGLEVBQVdWLEtBQUssQ0FBQ0UsTUFBTixDQUFhUyxNQUFiLENBQW9CVixJQUFJLENBQUNXLEVBQXpCLENBQWpCLENBQ0E7QUFDQU4sS0FBSyxtQkFBY08sdURBQU0sQ0FBQ0gsSUFBRCxDQUFwQixlQUFnQ1YsS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQS9DLENBQUwsQ0FDRCxDQU5NLElBTUEsSUFBSUwsSUFBSSxDQUFDYSxVQUFULENBQXFCLENBQzFCO0FBQ0E7QUFDQSxHQUFNQyxVQUFTLENBQUdmLEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUFJLENBQUNlLElBQWxCLEVBQXdCZixJQUFJLENBQUNXLEVBQTdCLEVBQWlDTixLQUFqQyxDQUF1Q1csUUFBekQsQ0FDQTtBQUNBLEdBQU1DLFdBQVUsQ0FBR0wsdURBQU0sQ0FBQ0UsU0FBRCxDQUF6QixDQUNBO0FBQ0FULEtBQUssV0FBTVksVUFBTixlQUFzQmxCLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUFyQyxDQUFMLENBQ0QsQ0FSTSxJQVFBLElBQUlMLElBQUksQ0FBQ2tCLEtBQVQsQ0FBZ0IsQ0FDckI7QUFDQWIsS0FBSywyQkFBc0JOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUFyQyxDQUFMLENBQ0QsQ0FFRCxNQUNFLDJEQUFDLDZDQUFELE1BQ0UsdUVBQVFBLEtBQVIsQ0FERixDQURGLENBS0QsQ0F2Q0QsQ0F5Q2VjLHVIQUFPLENBQUNyQixLQUFELENBQXRCIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy90aXRsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEhlYWQsIGNvbm5lY3QsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuXG5jb25zdCBUaXRsZSA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IGRhdGEgYWJvdXQgdGhlIGN1cnJlbnQgVVJMLlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG4gIC8vIFNldCB0aGUgZGVmYXVsdCB0aXRsZS5cbiAgbGV0IHRpdGxlID0gc3RhdGUuZnJvbnRpdHkudGl0bGU7XG5cbiAgaWYgKGRhdGEuaXNIb21lKSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byB0YXhvbm9taWVzLCBsaWtlIFwiQ2F0ZWdvcnk6IE5hdHVyZSAtIEJsb2cgTmFtZVwiIG9yIFwiVGFnOiBKYXBhbiAtIEJsb2cgTmFtZVwiLlxuICAgIC8vIDEuIEdldCB0aGUgdGF4b25vbXkgZW50aXR5IGZyb20gdGhlIHN0YXRlIHRvIGdldCBpdHMgdGF4b25vbXkgdGVybSBhbmQgbmFtZS5cbiAgICAvLyBjb25zdCB7IHRheG9ub215LCBuYW1lIH0gPSBzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF07XG4gICAgLy8gMi4gVXBwZXJjYXNlIGZpcnN0IGxldHRlciBvZiB0aGUgdGF4b25vbXkgdGVybSAoZnJvbSBcImNhdGVnb3J5XCIgdG8gXCJDYXRlZ29yeVwiKS5cbiAgICAvLyBjb25zdCB0YXhvbm9teUNhcGl0YWxpemVkID1cbiAgICAvLyAgIHRheG9ub215LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGF4b25vbXkuc2xpY2UoMSk7XG4gICAgLy8gMy4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgUmVzaWRlbnRpYWwgJiBDb21tZXJjaWFsIEVsZWN0cmljaWFucyAke3N0YXRlLmZyb250aXR5LnRpdGxlfWA7XG4gIH0gZWxzZSBpZiAoZGF0YS5pc0F1dGhvcikge1xuICAgIC8vIEFkZCB0aXRsZXMgdG8gYXV0aG9ycywgbGlrZSBcIkF1dGhvcjogSm9uIFNub3cgLSBCbG9nIE5hbWVcIi5cbiAgICAvLyAxLiBHZXQgdGhlIGF1dGhvciBlbnRpdHkgZnJvbSB0aGUgc3RhdGUgdG8gZ2V0IGl0cyBuYW1lLlxuICAgIGNvbnN0IHsgbmFtZSB9ID0gc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXTtcbiAgICAvLyAyLiBSZW5kZXIgdGhlIHByb3BlciB0aXRsZS5cbiAgICB0aXRsZSA9IGBBdXRob3I6ICR7ZGVjb2RlKG5hbWUpfSAtICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzUG9zdFR5cGUpIHtcbiAgICAvLyBBZGQgdGl0bGVzIHRvIHBvc3RzIGFuZCBwYWdlcywgdXNpbmcgdGhlIHRpdGxlIGFuZCBlbmRpbmcgd2l0aCB0aGUgQmxvZyBOYW1lLlxuICAgIC8vIDEuIEdldCB0aGUgcG9zdCBlbnRpdHkgZnJvbSB0aGUgc3RhdGUgYW5kIGdldCBpdHMgdGl0bGUuXG4gICAgY29uc3QgcG9zdFRpdGxlID0gc3RhdGUuc291cmNlW2RhdGEudHlwZV1bZGF0YS5pZF0udGl0bGUucmVuZGVyZWQ7XG4gICAgLy8gMi4gUmVtb3ZlIGFueSBIVE1MIHRhZ3MgZm91bmQgaW4gdGhlIHRpdGxlLlxuICAgIGNvbnN0IGNsZWFuVGl0bGUgPSBkZWNvZGUocG9zdFRpdGxlKTtcbiAgICAvLyAzLiBSZW5kZXIgdGhlIHByb3BlciB0aXRsZS5cbiAgICB0aXRsZSA9IGAke2NsZWFuVGl0bGV9IC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9IGVsc2UgaWYgKGRhdGEuaXM0MDQpIHtcbiAgICAvLyBBZGQgdGl0bGVzIHRvIDQwNCdzLlxuICAgIHRpdGxlID0gYDQwNCBOb3QgRm91bmQgLSAke3N0YXRlLmZyb250aXR5LnRpdGxlfWA7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoVGl0bGUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/title.js\n");

/***/ })

})