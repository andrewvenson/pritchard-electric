webpackHotUpdate("list",{

/***/ "./packages/mars-theme/src/components/list/list.js":
/*!*********************************************************!*\
  !*** ./packages/mars-theme/src/components/list/list.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home */ \"./packages/mars-theme/src/components/home.js\");\n/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-item */ \"./packages/mars-theme/src/components/list/list-item.js\");\n/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination */ \"./packages/mars-theme/src/components/list/pagination.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}var List=(_ref)=>{var{state}=_ref;// Get the data of the current list.\nvar data=state.source.get(state.router.link);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Container,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"div\",null,data.isTaxonomy&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Header,null,data.taxonomy,\":\",\" \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source[data.taxonomy][data.id].name))),data.isAuthor&&Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(Header,null,\"Author: \",Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(\"b\",null,Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"decode\"])(state.source.author[data.id].name))),data.items.map((_ref2)=>{var{type,id}=_ref2;var item=state.source[type][id];// Render one Item component for each one.\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_list_item__WEBPACK_IMPORTED_MODULE_4__[\"default\"],{key:item.id,item:item});}),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_6__[\"jsx\"])(_pagination__WEBPACK_IMPORTED_MODULE_5__[\"default\"],null)));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(List));var Container=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"section\",{target:\"exiu6z10\",label:\"Container\"})( false?undefined:{name:\"mlgc7z\",styles:\"width:100%;margin:0;list-style:none;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ2dDIiwiZmlsZSI6IkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vaG9tZVwiXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAge2RhdGEudGF4b25vbXl9OntcIiBcIn1cbiAgICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICBcbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var Header=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"h3\",{target:\"exiu6z11\",label:\"Header\"})( false?undefined:{name:\"p2cv\",styles:\"font-weight:300;text-transform:capitalize;color:rgba(12,17,43,0.9);\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRHdCIiwiZmlsZSI6IkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbGlzdFxcbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgSG9tZSBmcm9tIFwiLi4vaG9tZVwiXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9saXN0LWl0ZW1cIjtcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gXCIuL3BhZ2luYXRpb25cIjtcblxuY29uc3QgTGlzdCA9ICh7IHN0YXRlIH0pID0+IHtcbiAgLy8gR2V0IHRoZSBkYXRhIG9mIHRoZSBjdXJyZW50IGxpc3QuXG4gIGNvbnN0IGRhdGEgPSBzdGF0ZS5zb3VyY2UuZ2V0KHN0YXRlLnJvdXRlci5saW5rKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2PlxuICAgICAgICB7ZGF0YS5pc1RheG9ub215ICYmIChcbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAge2RhdGEudGF4b25vbXl9OntcIiBcIn1cbiAgICAgICAgICAgIDxiPntkZWNvZGUoc3RhdGUuc291cmNlW2RhdGEudGF4b25vbXldW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogSWYgdGhlIGxpc3QgaXMgZm9yIGEgc3BlY2lmaWMgYXV0aG9yLCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgICAgIHtkYXRhLmlzQXV0aG9yICYmIChcbiAgICAgICAgICA8SGVhZGVyPlxuICAgICAgICAgICAgQXV0aG9yOiA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZS5hdXRob3JbZGF0YS5pZF0ubmFtZSl9PC9iPlxuICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBJdGVyYXRlIG92ZXIgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0LiAqL31cbiAgICAgICAge2RhdGEuaXRlbXMubWFwKCh7IHR5cGUsIGlkIH0pID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3RhdGUuc291cmNlW3R5cGVdW2lkXTtcbiAgICAgICAgICAvLyBSZW5kZXIgb25lIEl0ZW0gY29tcG9uZW50IGZvciBlYWNoIG9uZS5cbiAgICAgICAgICByZXR1cm4gPEl0ZW0ga2V5PXtpdGVtLmlkfSBpdGVtPXtpdGVtfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICAgIDxQYWdpbmF0aW9uIC8+XG4gICAgICA8L2Rpdj5cbiAgICBcbiAgICAgIHsvKiBJZiB0aGUgbGlzdCBpcyBhIHRheG9ub215LCB3ZSByZW5kZXIgYSB0aXRsZS4gKi99XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KExpc3QpO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbmA7XG5cbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oM2BcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiByZ2JhKDEyLCAxNywgNDMsIDAuOSk7XG5gO1xuIl19 */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL2xpc3QvbGlzdC5qcz8zZGM3Il0sIm5hbWVzIjpbIkxpc3QiLCJzdGF0ZSIsImRhdGEiLCJzb3VyY2UiLCJnZXQiLCJyb3V0ZXIiLCJsaW5rIiwiaXNUYXhvbm9teSIsInRheG9ub215IiwiZGVjb2RlIiwiaWQiLCJuYW1lIiwiaXNBdXRob3IiLCJhdXRob3IiLCJpdGVtcyIsIm1hcCIsInR5cGUiLCJpdGVtIiwiY29ubmVjdCIsIkNvbnRhaW5lciIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztxUkFNQSxHQUFNQSxLQUFJLENBQUcsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUMxQjtBQUNBLEdBQU1DLEtBQUksQ0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEdBQWIsQ0FBaUJILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUE5QixDQUFiLENBRUEsTUFDRSwyREFBQyxTQUFELE1BQ0UscUVBQ0dKLElBQUksQ0FBQ0ssVUFBTCxFQUNDLDBEQUFDLE1BQUQsTUFDR0wsSUFBSSxDQUFDTSxRQURSLEtBQ21CLEdBRG5CLENBRUUsbUVBQUlDLHVEQUFNLENBQUNSLEtBQUssQ0FBQ0UsTUFBTixDQUFhRCxJQUFJLENBQUNNLFFBQWxCLEVBQTRCTixJQUFJLENBQUNRLEVBQWpDLEVBQXFDQyxJQUF0QyxDQUFWLENBRkYsQ0FGSixDQVNHVCxJQUFJLENBQUNVLFFBQUwsRUFDQywwREFBQyxNQUFELGlCQUNVLG1FQUFJSCx1REFBTSxDQUFDUixLQUFLLENBQUNFLE1BQU4sQ0FBYVUsTUFBYixDQUFvQlgsSUFBSSxDQUFDUSxFQUF6QixFQUE2QkMsSUFBOUIsQ0FBVixDQURWLENBVkosQ0FnQkdULElBQUksQ0FBQ1ksS0FBTCxDQUFXQyxHQUFYLENBQWUsU0FBa0IsSUFBakIsQ0FBRUMsSUFBRixDQUFRTixFQUFSLENBQWlCLE9BQ2hDLEdBQU1PLEtBQUksQ0FBR2hCLEtBQUssQ0FBQ0UsTUFBTixDQUFhYSxJQUFiLEVBQW1CTixFQUFuQixDQUFiLENBQ0E7QUFDQSxNQUFPLDJEQUFDLGtEQUFELEVBQU0sR0FBRyxDQUFFTyxJQUFJLENBQUNQLEVBQWhCLENBQW9CLElBQUksQ0FBRU8sSUFBMUIsRUFBUCxDQUNELENBSkEsQ0FoQkgsQ0FxQkUsMERBQUMsbURBQUQsTUFyQkYsQ0FERixDQURGLENBNkJELENBakNELENBbUNlQyx1SEFBTyxDQUFDbEIsSUFBRCxDQUF0QixFQUVBLEdBQU1tQixVQUFTLHNpRkFBZixDQU1BLEdBQU1DLE9BQU0sMmpGQUFaIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvY29tcG9uZW50cy9saXN0L2xpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQsIGRlY29kZSB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4uL2hvbWVcIlxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vbGlzdC1pdGVtXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi9wYWdpbmF0aW9uXCI7XG5cbmNvbnN0IExpc3QgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIC8vIEdldCB0aGUgZGF0YSBvZiB0aGUgY3VycmVudCBsaXN0LlxuICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdj5cbiAgICAgICAge2RhdGEuaXNUYXhvbm9teSAmJiAoXG4gICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgIHtkYXRhLnRheG9ub215fTp7XCIgXCJ9XG4gICAgICAgICAgICA8Yj57ZGVjb2RlKHN0YXRlLnNvdXJjZVtkYXRhLnRheG9ub215XVtkYXRhLmlkXS5uYW1lKX08L2I+XG4gICAgICAgICAgPC9IZWFkZXI+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIElmIHRoZSBsaXN0IGlzIGZvciBhIHNwZWNpZmljIGF1dGhvciwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgICAgICB7ZGF0YS5pc0F1dGhvciAmJiAoXG4gICAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICAgIEF1dGhvcjogPGI+e2RlY29kZShzdGF0ZS5zb3VyY2UuYXV0aG9yW2RhdGEuaWRdLm5hbWUpfTwvYj5cbiAgICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgKX1cblxuICAgICAgICB7LyogSXRlcmF0ZSBvdmVyIHRoZSBpdGVtcyBvZiB0aGUgbGlzdC4gKi99XG4gICAgICAgIHtkYXRhLml0ZW1zLm1hcCgoeyB0eXBlLCBpZCB9KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbSA9IHN0YXRlLnNvdXJjZVt0eXBlXVtpZF07XG4gICAgICAgICAgLy8gUmVuZGVyIG9uZSBJdGVtIGNvbXBvbmVudCBmb3IgZWFjaCBvbmUuXG4gICAgICAgICAgcmV0dXJuIDxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gLz47XG4gICAgICAgIH0pfVxuICAgICAgICA8UGFnaW5hdGlvbiAvPlxuICAgICAgPC9kaXY+XG4gICAgXG4gICAgICB7LyogSWYgdGhlIGxpc3QgaXMgYSB0YXhvbm9teSwgd2UgcmVuZGVyIGEgdGl0bGUuICovfVxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChMaXN0KTtcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5gO1xuXG5jb25zdCBIZWFkZXIgPSBzdHlsZWQuaDNgXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogcmdiYSgxMiwgMTcsIDQzLCAwLjkpO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/list/list.js\n");

/***/ })

})