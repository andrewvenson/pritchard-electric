webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/title.js":
/*!*****************************************************!*\
  !*** ./packages/mars-theme/src/components/title.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nvar Title=(_ref)=>{var{state}=_ref;// Get data about the current URL.\nvar data=state.source.get(state.router.link);// Set the default title.\nvar title=state.frontity.title;if(data.isHome){title=\"Residential & Commercial Electricians \".concat(state.frontity.title);}else if(data.isContact){title=\"Contact an Electrician \".concat(state.frontity.title);}else if(data.isGallery){// Add titles to posts and pages, using the title and ending with the Blog Name.\n// 1. Get the post entity from the state and get its title.\n// 2. Remove any HTML tags found in the title.\n// 3. Render the proper title.\ntitle=\"Gallery \".concat(state.frontity.title);}else if(data.isFaq){title=\"FAQ \".concat(state.frontity.title);}else if(data.is404){// Add titles to 404's.\ntitle=\"404 Not Found - \".concat(state.frontity.title);}return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(frontity__WEBPACK_IMPORTED_MODULE_1__[\"Head\"],null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__[\"jsx\"])(\"title\",null,title));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(Title));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3RpdGxlLmpzPzdmZmEiXSwibmFtZXMiOlsiVGl0bGUiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwidGl0bGUiLCJmcm9udGl0eSIsImlzSG9tZSIsImlzQ29udGFjdCIsImlzR2FsbGVyeSIsImlzRmFxIiwiaXM0MDQiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQSxHQUFNQSxNQUFLLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUMzQjtBQUNBLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0E7QUFDQSxHQUFJQyxNQUFLLENBQUdOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUEzQixDQUVBLEdBQUlMLElBQUksQ0FBQ08sTUFBVCxDQUFpQixDQUNmRixLQUFLLGlEQUE0Q04sS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQTNELENBQUwsQ0FDRCxDQUZELElBRU8sSUFBSUwsSUFBSSxDQUFDUSxTQUFULENBQW9CLENBQ3pCSCxLQUFLLGtDQUE2Qk4sS0FBSyxDQUFDTyxRQUFOLENBQWVELEtBQTVDLENBQUwsQ0FDRCxDQUZNLElBRUEsSUFBSUwsSUFBSSxDQUFDUyxTQUFULENBQW9CLENBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0FKLEtBQUssbUJBQWNOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUE3QixDQUFMLENBQ0QsQ0FOTSxJQU1BLElBQUlMLElBQUksQ0FBQ1UsS0FBVCxDQUFnQixDQUNyQkwsS0FBSyxlQUFVTixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsS0FBekIsQ0FBTCxDQUNELENBRk0sSUFFQSxJQUFJTCxJQUFJLENBQUNXLEtBQVQsQ0FBZ0IsQ0FDckI7QUFDQU4sS0FBSywyQkFBc0JOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxLQUFyQyxDQUFMLENBQ0QsQ0FFRCxNQUNFLDJEQUFDLDZDQUFELE1BQ0UsdUVBQVFBLEtBQVIsQ0FERixDQURGLENBS0QsQ0E1QkQsQ0E4QmVPLHVIQUFPLENBQUNkLEtBQUQsQ0FBdEIiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL3RpdGxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVhZCwgY29ubmVjdCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5cbmNvbnN0IFRpdGxlID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgZGF0YSBhYm91dCB0aGUgY3VycmVudCBVUkwuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcbiAgLy8gU2V0IHRoZSBkZWZhdWx0IHRpdGxlLlxuICBsZXQgdGl0bGUgPSBzdGF0ZS5mcm9udGl0eS50aXRsZTtcblxuICBpZiAoZGF0YS5pc0hvbWUpIHtcbiAgICB0aXRsZSA9IGBSZXNpZGVudGlhbCAmIENvbW1lcmNpYWwgRWxlY3RyaWNpYW5zICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzQ29udGFjdCkge1xuICAgIHRpdGxlID0gYENvbnRhY3QgYW4gRWxlY3RyaWNpYW4gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9IGVsc2UgaWYgKGRhdGEuaXNHYWxsZXJ5KSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byBwb3N0cyBhbmQgcGFnZXMsIHVzaW5nIHRoZSB0aXRsZSBhbmQgZW5kaW5nIHdpdGggdGhlIEJsb2cgTmFtZS5cbiAgICAvLyAxLiBHZXQgdGhlIHBvc3QgZW50aXR5IGZyb20gdGhlIHN0YXRlIGFuZCBnZXQgaXRzIHRpdGxlLlxuICAgIC8vIDIuIFJlbW92ZSBhbnkgSFRNTCB0YWdzIGZvdW5kIGluIHRoZSB0aXRsZS5cbiAgICAvLyAzLiBSZW5kZXIgdGhlIHByb3BlciB0aXRsZS5cbiAgICB0aXRsZSA9IGBHYWxsZXJ5ICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzRmFxKSB7XG4gICAgdGl0bGUgPSBgRkFRICR7c3RhdGUuZnJvbnRpdHkudGl0bGV9YDtcbiAgfSBlbHNlIGlmIChkYXRhLmlzNDA0KSB7XG4gICAgLy8gQWRkIHRpdGxlcyB0byA0MDQncy5cbiAgICB0aXRsZSA9IGA0MDQgTm90IEZvdW5kIC0gJHtzdGF0ZS5mcm9udGl0eS50aXRsZX1gO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFRpdGxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/title.js\n");

/***/ })

})