webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/title.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/title.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar Title=(_ref)=>{var{state}=_ref;// Get data about the current URL.\nvar data=state.source.get(state.router.link);// Set the default title.\nvar title=state.frontity.title;if(data.link==\"/\"){// Add titles to taxonomies, like \"Category: Nature - Blog Name\" or \"Tag: Japan - Blog Name\".\n// 1. Get the taxonomy entity from the state to get its taxonomy term and name.\nvar{taxonomy,name}=state.source[data.taxonomy][data.id];// 2. Uppercase first letter of the taxonomy term (from \"category\" to \"Category\").\nvar taxonomyCapitalized=taxonomy.charAt(0).toUpperCase()+taxonomy.slice(1);// 3. Render the proper title.\ntitle=\"\".concat(taxonomyCapitalized,\": \").concat(Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(name),\" - \").concat(state.frontity.title);}else if(data.isAuthor){// Add titles to authors, like \"Author: Jon Snow - Blog Name\".\n// 1. Get the author entity from the state to get its name.\nvar{name:_name}=state.source.author[data.id];// 2. Render the proper title.\ntitle=\"Author: \".concat(Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(_name),\" - \").concat(state.frontity.title);}else if(data.isPostType){// Add titles to posts and pages, using the title and ending with the Blog Name.\n// 1. Get the post entity from the state and get its title.\nvar postTitle=state.source[data.type][data.id].title.rendered;// 2. Remove any HTML tags found in the title.\nvar cleanTitle=Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"decode\"])(postTitle);// 3. Render the proper title.\ntitle=\"\".concat(cleanTitle,\" - \").concat(state.frontity.title);}else if(data.is404){// Add titles to 404's.\ntitle=\"404 Not Found - \".concat(state.frontity.title);}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"title\",null,\"test\"));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Title));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3RpdGxlLmpzPzdmZmEiXSwibmFtZXMiOlsiVGl0bGUiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidGl0bGUiLCJmcm9udGl0eSIsInRheG9ub215IiwibmFtZSIsImlkIiwidGF4b25vbXlDYXBpdGFsaXplZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJkZWNvZGUiLCJpc0F1dGhvciIsImF1dGhvciIsImlzUG9zdFR5cGUiLCJwb3N0VGl0bGUiLCJ0eXBlIiwicmVuZGVyZWQiLCJjbGVhblRpdGxlIiwiaXM0MDQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxHQUFNQSxNQUFLLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUMzQjtBQUNBLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0E7QUFDQSxHQUFJQyxNQUFLLENBQUdOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUEzQixDQUVBLEdBQUlMLElBQUksQ0FBQ0ksSUFBTCxFQUFhLEdBQWpCLENBQXNCLENBQ3BCO0FBQ0E7QUFDQSxHQUFNLENBQUVHLFFBQUYsQ0FBWUMsSUFBWixFQUFxQlQsS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ08sUUFBbEIsRUFBNEJQLElBQUksQ0FBQ1MsRUFBakMsQ0FBM0IsQ0FDQTtBQUNBLEdBQU1DLG9CQUFtQixDQUN2QkgsUUFBUSxDQUFDSSxNQUFULENBQWdCLENBQWhCLEVBQW1CQyxXQUFuQixHQUFtQ0wsUUFBUSxDQUFDTSxLQUFULENBQWUsQ0FBZixDQURyQyxDQUVBO0FBQ0FSLEtBQUssV0FBTUssbUJBQU4sY0FBOEJJLHVEQUFNLENBQUNOLElBQUQsQ0FBcEMsZUFBZ0RULEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUEvRCxDQUFMLENBQ0QsQ0FURCxJQVNPLElBQUlMLElBQUksQ0FBQ2UsUUFBVCxDQUFtQixDQUN4QjtBQUNBO0FBQ0EsR0FBTSxDQUFFUCxJQUFJLENBQUpBLEtBQUYsRUFBV1QsS0FBSyxDQUFDRSxNQUFOLENBQWFlLE1BQWIsQ0FBb0JoQixJQUFJLENBQUNTLEVBQXpCLENBQWpCLENBQ0E7QUFDQUosS0FBSyxtQkFBY1MsdURBQU0sQ0FBQ04sS0FBRCxDQUFwQixlQUFnQ1QsS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQS9DLENBQUwsQ0FDRCxDQU5NLElBTUEsSUFBSUwsSUFBSSxDQUFDaUIsVUFBVCxDQUFxQixDQUMxQjtBQUNBO0FBQ0EsR0FBTUMsVUFBUyxDQUFHbkIsS0FBSyxDQUFDRSxNQUFOLENBQWFELElBQUksQ0FBQ21CLElBQWxCLEVBQXdCbkIsSUFBSSxDQUFDUyxFQUE3QixFQUFpQ0osS0FBakMsQ0FBdUNlLFFBQXpELENBQ0E7QUFDQSxHQUFNQyxXQUFVLENBQUdQLHVEQUFNLENBQUNJLFNBQUQsQ0FBekIsQ0FDQTtBQUNBYixLQUFLLFdBQU1nQixVQUFOLGVBQXNCdEIsS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQXJDLENBQUwsQ0FDRCxDQVJNLElBUUEsSUFBSUwsSUFBSSxDQUFDc0IsS0FBVCxDQUFnQixDQUNyQjtBQUNBakIsS0FBSywyQkFBc0JOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUFyQyxDQUFMLENBQ0QsQ0FFRCxNQUNFLDJEQUFDLDZDQUFELE1BQ0UsOEVBREYsQ0FERixDQUtELENBdkNELENBeUNla0IsdUhBQU8sQ0FBQ3pCLEtBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3RpdGxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZCwgY29ubmVjdCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmNvbnN0IFRpdGxlID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgZGF0YSBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gU2V0IHRoZSBkZWZhdWx0IHRpdGxlLlxuICBsZXQgdGl0bGUgPSBzdGF0ZS5mcm9udGl0eS50aXRsZTtcblxuICBpZiAoZGF0YS5saW5rID09IFwiL1wiKSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byB0YXhvbm9taWVzLCBsaWtlIFwiQ2F0ZWdvcnk6IE5hdHVyZSAtIEJsb2cgTmFtZVwiIG9yIFwiVGFnOiBKYXBhbiAtIEJsb2cgTmFtZVwiLlxuICAgIC8vIDEuIEdldCB0aGUgdGF4b25vbXkgZW50aXR5IGZyb20gdGhlIHN0YXRlIHRvIGdldCBpdHMgdGF4b25vbXkgdGVybSBhbmQgbmFtZS5cbiAgICBjb25zdCB7IHRheG9ub215LCBuYW1lIH0gPSBzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF07XG4gICAgLy8gMi4gVXBwZXJjYXNlIGZpcnN0IGxldHRlciBvZiB0aGUgdGF4b25vbXkgdGVybSAoZnJvbSBcImNhdGVnb3J5XCIgdG8gXCJDYXRlZ29yeVwiKS5cbiAgICBjb25zdCB0YXhvbm9teUNhcGl0YWxpemVkID1cbiAgICAgIHRheG9ub215LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGF4b25vbXkuc2xpY2UoMSk7XG4gICAgLy8gMy4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgJHt0YXhvbm9teUNhcGl0YWxpemVkfTogJHtkZWNvZGUobmFtZSl9IC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9IGVsc2UgaWYgKGRhdGEuaXNBdXRob3IpIHtcbiAgICAvLyBBZGQgdGl0bGVzIHRvIGF1dGhvcnMsIGxpa2UgXCJBdXRob3I6IEpvbiBTbm93IC0gQmxvZyBOYW1lXCIuXG4gICAgLy8gMS4gR2V0IHRoZSBhdXRob3IgZW50aXR5IGZyb20gdGhlIHN0YXRlIHRvIGdldCBpdHMgbmFtZS5cbiAgICBjb25zdCB7IG5hbWUgfSA9IHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF07XG4gICAgLy8gMi4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgQXV0aG9yOiAke2RlY29kZShuYW1lKX0gLSAke3N0YXRlLmZyb250aXR5LnRpdGxlfWA7XG4gIH0gZWxzZSBpZiAoZGF0YS5pc1Bvc3RUeXBlKSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byBwb3N0cyBhbmQgcGFnZXMsIHVzaW5nIHRoZSB0aXRsZSBhbmQgZW5kaW5nIHdpdGggdGhlIEJsb2cgTmFtZS5cbiAgICAvLyAxLiBHZXQgdGhlIHBvc3QgZW50aXR5IGZyb20gdGhlIHN0YXRlIGFuZCBnZXQgaXRzIHRpdGxlLlxuICAgIGNvbnN0IHBvc3RUaXRsZSA9IHN0YXRlLnNvdXJjZVtkYXRhLnR5cGVdW2RhdGEuaWRdLnRpdGxlLnJlbmRlcmVkO1xuICAgIC8vIDIuIFJlbW92ZSBhbnkgSFRNTCB0YWdzIGZvdW5kIGluIHRoZSB0aXRsZS5cbiAgICBjb25zdCBjbGVhblRpdGxlID0gZGVjb2RlKHBvc3RUaXRsZSk7XG4gICAgLy8gMy4gUmVuZGVyIHRoZSBwcm9wZXIgdGl0bGUuXG4gICAgdGl0bGUgPSBgJHtjbGVhblRpdGxlfSAtICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzNDA0KSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byA0MDQncy5cbiAgICB0aXRsZSA9IGA0MDQgTm90IEZvdW5kIC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT50ZXN0PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRpdGxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/title.js\n");

/***/ })

})