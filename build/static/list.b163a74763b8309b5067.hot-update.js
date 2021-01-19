webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagination */ \"./packages/mars-theme/src/components/list/pagination.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Container,null,state.router.link==\"/\"?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",null,\"Hello there\"):Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\",null,data.isTaxonomy&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Header,null,data.taxonomy,\":\",\" \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source[data.taxonomy][data.id].name))),data.isAuthor&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(Header,null,\"Author: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source.author[data.id].name))),data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{key:item.id,item:item});}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_pagination__WEBPACK_IMPORTED_MODULE_4__[\"default\"],null)));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"447sei\",styles:\"width:800px;margin:0;padding:24px;list-style:none;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRGdDIiwiZmlsZSI6IkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7c3RhdGUucm91dGVyLmxpbmsgPT0gXCIvXCIgP1xuXG4gICAgICA8ZGl2PkhlbGxvIHRoZXJlPC9kaXY+IDpcbiAgICAgIFxuICAgICAgPGRpdj5cblxuICAgICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAge2RhdGEudGF4b25vbXl9OntcIiBcIn1cbiAgICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICBcbiAgICB9XG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h3\",{target:\"exiu6z11\",label:\"Header\"})( false?undefined:{name:\"p2cv\",styles:\"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RHdCIiwiZmlsZSI6IkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICB7c3RhdGUucm91dGVyLmxpbmsgPT0gXCIvXCIgP1xuXG4gICAgICA8ZGl2PkhlbGxvIHRoZXJlPC9kaXY+IDpcbiAgICAgIFxuICAgICAgPGRpdj5cblxuICAgICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAge2RhdGEudGF4b25vbXl9OntcIiBcIn1cbiAgICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICBcbiAgICB9XG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyNHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuYDtcblxuY29uc3QgSGVhZGVyID0gc3R5bGVkLmgzYFxuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6IHJnYmEoMTIsIDE3LCA0MywgMC45KTtcbmA7XG4iXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbIkxpc3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiaXNUYXhvbm9teSIsInRheG9ub215IiwiZGVjb2RlIiwiaWQiLCJuYW1lIiwiaXNBdXRob3IiLCJhdXRob3IiLCJpdGVtcyIsIm1hcCIsInR5cGUiLCJpdGVtIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O3FSQUtBLEdBQU1BLEtBQUksQ0FBRyxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQzFCO0FBQ0EsR0FBTUMsS0FBSSxDQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsR0FBYixDQUFpQkgsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQTlCLENBQWIsQ0FFQSxNQUNFLDJEQUFDLFNBQUQsTUFDR0wsS0FBSyxDQUFDSSxNQUFOLENBQWFDLElBQWIsRUFBcUIsR0FBckIsQ0FFRCxtRkFGQyxDQUlELHFFQUVHSixJQUFJLENBQUNLLFVBQUwsRUFDQywwREFBQyxNQUFELE1BQ0dMLElBQUksQ0FBQ00sUUFEUixLQUNtQixHQURuQixDQUVFLG1FQUFJQyx1REFBTSxDQUFDUixLQUFLLENBQUNFLE1BQU4sQ0FBYUQsSUFBSSxDQUFDTSxRQUFsQixFQUE0Qk4sSUFBSSxDQUFDUSxFQUFqQyxFQUFxQ0MsSUFBdEMsQ0FBVixDQUZGLENBSEosQ0FVR1QsSUFBSSxDQUFDVSxRQUFMLEVBQ0MsMERBQUMsTUFBRCxpQkFDVSxtRUFBSUgsdURBQU0sQ0FBQ1IsS0FBSyxDQUFDRSxNQUFOLENBQWFVLE1BQWIsQ0FBb0JYLElBQUksQ0FBQ1EsRUFBekIsRUFBNkJDLElBQTlCLENBQVYsQ0FEVixDQVhKLENBaUJHVCxJQUFJLENBQUNZLEtBQUwsQ0FBV0MsR0FBWCxDQUFlLFNBQWtCLElBQWpCLENBQUVDLElBQUYsQ0FBUU4sRUFBUixDQUFpQixPQUNoQyxHQUFNTyxLQUFJLENBQUdoQixLQUFLLENBQUNFLE1BQU4sQ0FBYWEsSUFBYixFQUFtQk4sRUFBbkIsQ0FBYixDQUNBO0FBQ0EsTUFBTywyREFBQyxrREFBRCxFQUFNLEdBQUcsQ0FBRU8sSUFBSSxDQUFDUCxFQUFoQixDQUFvQixJQUFJLENBQUVPLElBQTFCLEVBQVAsQ0FDRCxDQUpBLENBakJILENBc0JFLDBEQUFDLG1EQUFELE1BdEJGLENBTEYsQ0FERixDQW1DRCxDQXZDRCxDQXlDZUMsdUhBQU8sQ0FBQ2xCLElBQUQsQ0FBdEIsRUFFQSxHQUFNbUIsVUFBUyw0cEZBQWYsQ0FPQSxHQUFNQyxPQUFNLG1xRkFBWiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbGlzdC9saXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCwgc3R5bGVkLCBkZWNvZGUgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBJdGVtIGZyb20gXCIuL2xpc3QtaXRlbVwiO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIi4vcGFnaW5hdGlvblwiO1xuXG5jb25zdCBMaXN0ID0gKHsgc3RhdGUgfSkgPT4ge1xuICAvLyBHZXQgdGhlIGRhdGEgb2YgdGhlIGN1cnJlbnQgbGlzdC5cbiAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIHtzdGF0ZS5yb3V0ZXIubGluayA9PSBcIi9cIiA/XG5cbiAgICAgIDxkaXY+SGVsbG8gdGhlcmU8L2Rpdj4gOlxuICAgICAgXG4gICAgICA8ZGl2PlxuXG4gICAgICAgIHtkYXRhLmlzVGF4b25vbXkgJiYgKFxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICB7ZGF0YS50YXhvbm9teX06e1wiIFwifVxuICAgICAgICAgICAgPGI+e2RlY29kZShzdGF0ZS5zb3VyY2VbZGF0YS50YXhvbm9teV1bZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBmb3IgYSBzcGVjaWZpYyBhdXRob3IsIHdlIHJlbmRlciBhIHRpdGxlLiAqL31cbiAgICAgICAge2RhdGEuaXNBdXRob3IgJiYgKFxuICAgICAgICAgIDxIZWFkZXI+XG4gICAgICAgICAgICBBdXRob3I6IDxiPntkZWNvZGUoc3RhdGUuc291cmNlLmF1dGhvcltkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIEl0ZXJhdGUgb3ZlciB0aGUgaXRlbXMgb2YgdGhlIGxpc3QuICovfVxuICAgICAgICB7ZGF0YS5pdGVtcy5tYXAoKHsgdHlwZSwgaWQgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdGF0ZS5zb3VyY2VbdHlwZV1baWRdO1xuICAgICAgICAgIC8vIFJlbmRlciBvbmUgSXRlbSBjb21wb25lbnQgZm9yIGVhY2ggb25lLlxuICAgICAgICAgIHJldHVybiA8SXRlbSBrZXk9e2l0ZW0uaWR9IGl0ZW09e2l0ZW19IC8+O1xuICAgICAgICB9KX1cbiAgICAgICAgPFBhZ2luYXRpb24gLz5cbiAgICAgIDwvZGl2PlxuICAgIFxuICAgIH1cbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjkpO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})