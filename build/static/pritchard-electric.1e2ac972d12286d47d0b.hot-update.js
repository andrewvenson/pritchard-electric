webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/components/nav.js":
/*!***************************************************!*\
  !*** ./packages/mars-theme/src/components/nav.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./link */ \"./packages/mars-theme/src/components/link.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}/**\n * Navigation Component\n *\n * It renders the navigation links\n */var Nav=(_ref)=>{var{state}=_ref;var[dropdown,showDropdown]=Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavContainer,null,state.theme.menu.map((_ref2)=>{var[name,link]=_ref2;// Check if the link matched the current page url\nvar isCurrentPage=state.router.link===link;//const isCurrentPage = true;\nreturn Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(NavItem,{key:name},link===\"/services/\"?Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\",{onMouseEnter:()=>{showDropdown(true);},onMouseLeave:()=>{showDropdown(false);}},\"SERVICES\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\",{onMouseOver:()=>{showDropdown(true);},onMouseLeave:()=>{showDropdown(false);},style:{padding:10,width:150,position:\"absolute\",backgroundColor:\"black\",display:dropdown?\"block\":\"none\"}},Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\",null,\"Links\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\",null,\"Links\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\",null,\"Links\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\",null,\"Links\"),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",null),Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"br\",null))):Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"],{link:link,\"aria-current\":isCurrentPage?\"page\":undefined},name));}));};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(Nav));var NavContainer=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"nav\",{target:\"e1bkzu9n0\",label:\"NavContainer\"})( false?undefined:{name:\"13lx8z\",styles:\"list-style:none;display:flex;justify-content:center;width:848px;max-width:100%;box-sizing:border-box;padding:0 24px;margin:0;overflow-x:auto;\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFK0IiLCJmaWxlIjoiQzpcXHByb2plY3RzXFxmcm9udGl0eVxccHJpdGNoYXJkLWVsZWN0cmljXFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IFtkcm9wZG93biwgc2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2Q29udGFpbmVyPlxuICAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgICBjb25zdCBpc0N1cnJlbnRQYWdlID0gc3RhdGUucm91dGVyLmxpbmsgPT09IGxpbms7XG4gICAgICAgIC8vY29uc3QgaXNDdXJyZW50UGFnZSA9IHRydWU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgICB7bGluayA9PT0gXCIvc2VydmljZXMvXCIgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNFUlZJQ0VTXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bih0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRyb3Bkb3duID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhPkxpbmtzPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxhPkxpbmtzPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxhPkxpbmtzPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxhPkxpbmtzPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA4NDhweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGNvbG9yOiAjZmZmO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmNGJiMzY7XG4gICAgICBjb2xvcjogI2Y0YmIzNjtcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});var NavItem=Object(_emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\",{target:\"e1bkzu9n1\",label:\"NavItem\"})( false?undefined:{name:\"1i24led\",styles:\"padding:0;margin:0 16px;font-size:0.9em;box-sizing:border-box;flex-shrink:0;color:#fff;& > a{display:inline-block;line-height:2em;border-bottom:2px solid;border-bottom-color:transparent;&[aria-current=\\\"page\\\"]{border-bottom-color:#f4bb36;color:#f4bb36;}}&:first-of-type{margin-left:0;}&:last-of-type{margin-right:0;&:after{content:\\\"\\\";display:inline-block;width:24px;}}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxwcm9qZWN0c1xcZnJvbnRpdHlcXHByaXRjaGFyZC1lbGVjdHJpY1xccGFja2FnZXNcXG1hcnMtdGhlbWVcXHNyY1xcY29tcG9uZW50c1xcbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBGMEIiLCJmaWxlIjoiQzpcXHByb2plY3RzXFxmcm9udGl0eVxccHJpdGNoYXJkLWVsZWN0cmljXFxwYWNrYWdlc1xcbWFycy10aGVtZVxcc3JjXFxjb21wb25lbnRzXFxuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCB9IGZyb20gXCJmcm9udGl0eVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vbGlua1wiO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gQ29tcG9uZW50XG4gKlxuICogSXQgcmVuZGVycyB0aGUgbmF2aWdhdGlvbiBsaW5rc1xuICovXG5jb25zdCBOYXYgPSAoeyBzdGF0ZSB9KSA9PiB7XG4gIGNvbnN0IFtkcm9wZG93biwgc2hvd0Ryb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8TmF2Q29udGFpbmVyPlxuICAgICAge3N0YXRlLnRoZW1lLm1lbnUubWFwKChbbmFtZSwgbGlua10pID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmsgbWF0Y2hlZCB0aGUgY3VycmVudCBwYWdlIHVybFxuICAgICAgICBjb25zdCBpc0N1cnJlbnRQYWdlID0gc3RhdGUucm91dGVyLmxpbmsgPT09IGxpbms7XG4gICAgICAgIC8vY29uc3QgaXNDdXJyZW50UGFnZSA9IHRydWU7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPE5hdkl0ZW0ga2V5PXtuYW1lfT5cbiAgICAgICAgICAgIHsvKiBJZiBsaW5rIHVybCBpcyB0aGUgY3VycmVudCBwYWdlLCBhZGQgYGFyaWEtY3VycmVudGAgZm9yIGExMXkgKi99XG4gICAgICAgICAgICB7bGluayA9PT0gXCIvc2VydmljZXMvXCIgPyAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFNFUlZJQ0VTXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bih0cnVlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGRyb3Bkb3duID8gXCJibG9ja1wiIDogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhPkxpbmtzPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxhPkxpbmtzPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxhPkxpbmtzPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgIDxhPkxpbmtzPC9hPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PXtpc0N1cnJlbnRQYWdlID8gXCJwYWdlXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L05hdkl0ZW0+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L05hdkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTmF2KTtcblxuY29uc3QgTmF2Q29udGFpbmVyID0gc3R5bGVkLm5hdmBcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA4NDhweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwIDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbmA7XG5cbmNvbnN0IE5hdkl0ZW0gPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMTZweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGNvbG9yOiAjZmZmO1xuXG4gICYgPiBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogVXNlIGZvciBzZW1hbnRpYyBhcHByb2FjaCB0byBzdHlsZSB0aGUgY3VycmVudCBsaW5rICovXG4gICAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmNGJiMzY7XG4gICAgICBjb2xvcjogI2Y0YmIzNjtcbiAgICB9XG4gIH1cblxuICAmOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG5cbiAgJjpsYXN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMDtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgIH1cbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9jb21wb25lbnRzL25hdi5qcz8zZjM3Il0sIm5hbWVzIjpbIk5hdiIsInN0YXRlIiwiZHJvcGRvd24iLCJzaG93RHJvcGRvd24iLCJ1c2VTdGF0ZSIsInRoZW1lIiwibWVudSIsIm1hcCIsIm5hbWUiLCJsaW5rIiwiaXNDdXJyZW50UGFnZSIsInJvdXRlciIsInBhZGRpbmciLCJ3aWR0aCIsInBvc2l0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsInVuZGVmaW5lZCIsImNvbm5lY3QiLCJOYXZDb250YWluZXIiLCJOYXZJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztxUkFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsR0FBTUEsSUFBRyxDQUFHLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFDekIsR0FBTSxDQUFDQyxRQUFELENBQVdDLFlBQVgsRUFBMkJDLHNEQUFRLENBQUMsS0FBRCxDQUF6QyxDQUNBLE1BQ0UsMkRBQUMsWUFBRCxNQUNHSCxLQUFLLENBQUNJLEtBQU4sQ0FBWUMsSUFBWixDQUFpQkMsR0FBakIsQ0FBcUIsU0FBa0IsSUFBakIsQ0FBQ0MsSUFBRCxDQUFPQyxJQUFQLENBQWlCLE9BQ3RDO0FBQ0EsR0FBTUMsY0FBYSxDQUFHVCxLQUFLLENBQUNVLE1BQU4sQ0FBYUYsSUFBYixHQUFzQkEsSUFBNUMsQ0FDQTtBQUNBLE1BQ0UsMkRBQUMsT0FBRCxFQUFTLEdBQUcsQ0FBRUQsSUFBZCxFQUVHQyxJQUFJLEdBQUssWUFBVCxDQUNDLHFIQUNFLCtEQUNFLFlBQVksQ0FBRSxJQUFNLENBQ2xCTixZQUFZLENBQUMsSUFBRCxDQUFaLENBQ0QsQ0FISCxDQUlFLFlBQVksQ0FBRSxJQUFNLENBQ2xCQSxZQUFZLENBQUMsS0FBRCxDQUFaLENBQ0QsQ0FOSCxhQURGLENBV0UsaUVBQ0UsV0FBVyxDQUFFLElBQU0sQ0FDakJBLFlBQVksQ0FBQyxJQUFELENBQVosQ0FDRCxDQUhILENBSUUsWUFBWSxDQUFFLElBQU0sQ0FDbEJBLFlBQVksQ0FBQyxLQUFELENBQVosQ0FDRCxDQU5ILENBT0UsS0FBSyxDQUFFLENBQ0xTLE9BQU8sQ0FBRSxFQURKLENBRUxDLEtBQUssQ0FBRSxHQUZGLENBR0xDLFFBQVEsQ0FBRSxVQUhMLENBSUxDLGVBQWUsQ0FBRSxPQUpaLENBS0xDLE9BQU8sQ0FBRWQsUUFBUSxDQUFHLE9BQUgsQ0FBYSxNQUx6QixDQVBULEVBZUUsMkVBZkYsQ0FnQkUsb0VBaEJGLENBaUJFLG9FQWpCRixDQWtCRSwyRUFsQkYsQ0FtQkUsb0VBbkJGLENBb0JFLG9FQXBCRixDQXFCRSwyRUFyQkYsQ0FzQkUsb0VBdEJGLENBdUJFLG9FQXZCRixDQXdCRSwyRUF4QkYsQ0F5QkUsb0VBekJGLENBMEJFLG9FQTFCRixDQVhGLENBREQsQ0EwQ0MsMERBQUMsNkNBQUQsRUFDRSxJQUFJLENBQUVPLElBRFIsQ0FFRSxlQUFjQyxhQUFhLENBQUcsTUFBSCxDQUFZTyxTQUZ6QyxFQUlHVCxJQUpILENBNUNKLENBREYsQ0FzREQsQ0ExREEsQ0FESCxDQURGLENBK0RELENBakVELENBbUVlVSx1SEFBTyxDQUFDbEIsR0FBRCxDQUF0QixFQUVBLEdBQU1tQixhQUFZLCt6SkFBbEIsQ0FZQSxHQUFNQyxRQUFPLGlpS0FBYiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2NvbXBvbmVudHMvbmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0LCBzdHlsZWQgfSBmcm9tIFwiZnJvbnRpdHlcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2xpbmtcIjtcblxuLyoqXG4gKiBOYXZpZ2F0aW9uIENvbXBvbmVudFxuICpcbiAqIEl0IHJlbmRlcnMgdGhlIG5hdmlnYXRpb24gbGlua3NcbiAqL1xuY29uc3QgTmF2ID0gKHsgc3RhdGUgfSkgPT4ge1xuICBjb25zdCBbZHJvcGRvd24sIHNob3dEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHJldHVybiAoXG4gICAgPE5hdkNvbnRhaW5lcj5cbiAgICAgIHtzdGF0ZS50aGVtZS5tZW51Lm1hcCgoW25hbWUsIGxpbmtdKSA9PiB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBsaW5rIG1hdGNoZWQgdGhlIGN1cnJlbnQgcGFnZSB1cmxcbiAgICAgICAgY29uc3QgaXNDdXJyZW50UGFnZSA9IHN0YXRlLnJvdXRlci5saW5rID09PSBsaW5rO1xuICAgICAgICAvL2NvbnN0IGlzQ3VycmVudFBhZ2UgPSB0cnVlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxOYXZJdGVtIGtleT17bmFtZX0+XG4gICAgICAgICAgICB7LyogSWYgbGluayB1cmwgaXMgdGhlIGN1cnJlbnQgcGFnZSwgYWRkIGBhcmlhLWN1cnJlbnRgIGZvciBhMTF5ICovfVxuICAgICAgICAgICAge2xpbmsgPT09IFwiL3NlcnZpY2VzL1wiID8gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKHRydWUpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBTRVJWSUNFU1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzaG93RHJvcGRvd24odHJ1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBkcm9wZG93biA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8YT5MaW5rczwvYT5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YT5MaW5rczwvYT5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YT5MaW5rczwvYT5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICA8YT5MaW5rczwvYT5cbiAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgICAgIGFyaWEtY3VycmVudD17aXNDdXJyZW50UGFnZSA/IFwicGFnZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9OYXZDb250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE5hdik7XG5cbmNvbnN0IE5hdkNvbnRhaW5lciA9IHN0eWxlZC5uYXZgXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogODQ4cHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG5gO1xuXG5jb25zdCBOYXZJdGVtID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBjb2xvcjogI2ZmZjtcblxuICAmID4gYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIFVzZSBmb3Igc2VtYW50aWMgYXBwcm9hY2ggdG8gc3R5bGUgdGhlIGN1cnJlbnQgbGluayAqL1xuICAgICZbYXJpYS1jdXJyZW50PVwicGFnZVwiXSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZjRiYjM2O1xuICAgICAgY29sb3I6ICNmNGJiMzY7XG4gICAgfVxuICB9XG5cbiAgJjpmaXJzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMjRweDtcbiAgICB9XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/components/nav.js\n");

/***/ })

})