webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\nvar homeHandler={pattern:\"/\",func:(_ref)=>{var{state}=_ref;state.source.data[\"/\"].isHome=true;}};var contactHandler={pattern:\"/contact\",func:(_ref2)=>{var{state}=_ref2;state.source.data[\"/contact/\"].isContact=true;}};var faqHandler={pattern:\"/faq\",func:(_ref3)=>{var{state}=_ref3;state.source.data[\"/faq/\"].isContact=true;}};var galleryHandler={pattern:\"/gallery\",func:(_ref4)=>{var{state}=_ref4;state.source.data[\"/gallery/\"].isContact=true;}};var marsTheme={name:\"@frontity/mars-theme\",roots:{/**\n     * In Frontity, any package can add React components to the site.\n     * We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{autoPrefetch:\"in-view\",menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{toggleMobileMenu:(_ref5)=>{var{state}=_ref5;state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:(_ref6)=>{var{state}=_ref6;state.theme.isMobileMenuOpen=false;},init:(_ref7)=>{var{libraries}=_ref7;libraries.source.handlers.push(homeHandler);libraries.source.handlers.push(contactHandler);}}},libraries:{html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * and internal link inside the content HTML.\n       * You can add your own processors too.\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbImhvbWVIYW5kbGVyIiwicGF0dGVybiIsImZ1bmMiLCJzdGF0ZSIsInNvdXJjZSIsImRhdGEiLCJpc0hvbWUiLCJjb250YWN0SGFuZGxlciIsImlzQ29udGFjdCIsImZhcUhhbmRsZXIiLCJnYWxsZXJ5SGFuZGxlciIsIm1hcnNUaGVtZSIsIm5hbWUiLCJyb290cyIsInRoZW1lIiwiVGhlbWUiLCJhdXRvUHJlZmV0Y2giLCJtZW51IiwiaXNNb2JpbGVNZW51T3BlbiIsImZlYXR1cmVkIiwic2hvd09uTGlzdCIsInNob3dPblBvc3QiLCJhY3Rpb25zIiwidG9nZ2xlTW9iaWxlTWVudSIsImNsb3NlTW9iaWxlTWVudSIsImluaXQiLCJsaWJyYXJpZXMiLCJoYW5kbGVycyIsInB1c2giLCJodG1sMnJlYWN0IiwicHJvY2Vzc29ycyIsImltYWdlIiwiaWZyYW1lIiwibGluayJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLEdBQU1BLFlBQVcsQ0FBRyxDQUNsQkMsT0FBTyxDQUFFLEdBRFMsQ0FFbEJDLElBQUksQ0FBRSxRQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE1BQ25CQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixDQUFrQixHQUFsQixFQUF1QkMsTUFBdkIsQ0FBZ0MsSUFBaEMsQ0FDRCxDQUppQixDQUFwQixDQU9BLEdBQU1DLGVBQWMsQ0FBRyxDQUNyQk4sT0FBTyxDQUFFLFVBRFksQ0FFckJDLElBQUksQ0FBRSxTQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE9BQ25CQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixDQUFrQixXQUFsQixFQUErQkcsU0FBL0IsQ0FBMkMsSUFBM0MsQ0FDRCxDQUpvQixDQUF2QixDQU9BLEdBQU1DLFdBQVUsQ0FBRyxDQUNqQlIsT0FBTyxDQUFFLE1BRFEsQ0FFakJDLElBQUksQ0FBRSxTQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE9BQ25CQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixDQUFrQixPQUFsQixFQUEyQkcsU0FBM0IsQ0FBdUMsSUFBdkMsQ0FDRCxDQUpnQixDQUFuQixDQU9BLEdBQU1FLGVBQWMsQ0FBRyxDQUNyQlQsT0FBTyxDQUFFLFVBRFksQ0FFckJDLElBQUksQ0FBRSxTQUFlLElBQWQsQ0FBRUMsS0FBRixDQUFjLE9BQ25CQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsSUFBYixDQUFrQixXQUFsQixFQUErQkcsU0FBL0IsQ0FBMkMsSUFBM0MsQ0FDRCxDQUpvQixDQUF2QixDQU9BLEdBQU1HLFVBQVMsQ0FBRyxDQUNoQkMsSUFBSSxDQUFFLHNCQURVLENBRWhCQyxLQUFLLENBQUUsQ0FDTDtBQUNKO0FBQ0E7QUFDQSxPQUNJQyxLQUFLLENBQUVDLG1EQUxGLENBRlMsQ0FTaEJaLEtBQUssQ0FBRSxDQUNMO0FBQ0o7QUFDQTtBQUNBLE9BQ0lXLEtBQUssQ0FBRSxDQUNMRSxZQUFZLENBQUUsU0FEVCxDQUVMQyxJQUFJLENBQUUsRUFGRCxDQUdMQyxnQkFBZ0IsQ0FBRSxLQUhiLENBSUxDLFFBQVEsQ0FBRSxDQUNSQyxVQUFVLENBQUUsS0FESixDQUVSQyxVQUFVLENBQUUsS0FGSixDQUpMLENBTEYsQ0FUUyxDQXlCaEI7QUFDRjtBQUNBO0FBQ0EsS0FDRUMsT0FBTyxDQUFFLENBQ1BSLEtBQUssQ0FBRSxDQUNMUyxnQkFBZ0IsQ0FBRSxTQUFlLElBQWQsQ0FBRXBCLEtBQUYsQ0FBYyxPQUMvQkEsS0FBSyxDQUFDVyxLQUFOLENBQVlJLGdCQUFaLENBQStCLENBQUNmLEtBQUssQ0FBQ1csS0FBTixDQUFZSSxnQkFBNUMsQ0FDRCxDQUhJLENBSUxNLGVBQWUsQ0FBRSxTQUFlLElBQWQsQ0FBRXJCLEtBQUYsQ0FBYyxPQUM5QkEsS0FBSyxDQUFDVyxLQUFOLENBQVlJLGdCQUFaLENBQStCLEtBQS9CLENBQ0QsQ0FOSSxDQU9MTyxJQUFJLENBQUUsU0FBbUIsSUFBbEIsQ0FBRUMsU0FBRixDQUFrQixPQUN2QkEsU0FBUyxDQUFDdEIsTUFBVixDQUFpQnVCLFFBQWpCLENBQTBCQyxJQUExQixDQUErQjVCLFdBQS9CLEVBQ0EwQixTQUFTLENBQUN0QixNQUFWLENBQWlCdUIsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCckIsY0FBL0IsRUFDRCxDQVZJLENBREEsQ0E3Qk8sQ0EyQ2hCbUIsU0FBUyxDQUFFLENBQ1RHLFVBQVUsQ0FBRSxDQUNWO0FBQ047QUFDQTtBQUNBO0FBQ0EsU0FDTUMsVUFBVSxDQUFFLENBQUNDLDZFQUFELENBQVFDLDhFQUFSLENBQWdCQyw0RUFBaEIsQ0FORixDQURILENBM0NLLENBQWxCLENBdURldEIsd0VBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XG5pbXBvcnQgaW1hZ2UgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaW1hZ2VcIjtcbmltcG9ydCBpZnJhbWUgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvaWZyYW1lXCI7XG5pbXBvcnQgbGluayBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9saW5rXCI7XG5cbmNvbnN0IGhvbWVIYW5kbGVyID0ge1xuICBwYXR0ZXJuOiBcIi9cIixcbiAgZnVuYzogKHsgc3RhdGUgfSkgPT4ge1xuICAgIHN0YXRlLnNvdXJjZS5kYXRhW1wiL1wiXS5pc0hvbWUgPSB0cnVlO1xuICB9LFxufTtcblxuY29uc3QgY29udGFjdEhhbmRsZXIgPSB7XG4gIHBhdHRlcm46IFwiL2NvbnRhY3RcIixcbiAgZnVuYzogKHsgc3RhdGUgfSkgPT4ge1xuICAgIHN0YXRlLnNvdXJjZS5kYXRhW1wiL2NvbnRhY3QvXCJdLmlzQ29udGFjdCA9IHRydWU7XG4gIH0sXG59O1xuXG5jb25zdCBmYXFIYW5kbGVyID0ge1xuICBwYXR0ZXJuOiBcIi9mYXFcIixcbiAgZnVuYzogKHsgc3RhdGUgfSkgPT4ge1xuICAgIHN0YXRlLnNvdXJjZS5kYXRhW1wiL2ZhcS9cIl0uaXNDb250YWN0ID0gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IGdhbGxlcnlIYW5kbGVyID0ge1xuICBwYXR0ZXJuOiBcIi9nYWxsZXJ5XCIsXG4gIGZ1bmM6ICh7IHN0YXRlIH0pID0+IHtcbiAgICBzdGF0ZS5zb3VyY2UuZGF0YVtcIi9nYWxsZXJ5L1wiXS5pc0NvbnRhY3QgPSB0cnVlO1xuICB9LFxufTtcblxuY29uc3QgbWFyc1RoZW1lID0ge1xuICBuYW1lOiBcIkBmcm9udGl0eS9tYXJzLXRoZW1lXCIsXG4gIHJvb3RzOiB7XG4gICAgLyoqXG4gICAgICogSW4gRnJvbnRpdHksIGFueSBwYWNrYWdlIGNhbiBhZGQgUmVhY3QgY29tcG9uZW50cyB0byB0aGUgc2l0ZS5cbiAgICAgKiBXZSB1c2Ugcm9vdHMgZm9yIHRoYXQsIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgdGhlbWU6IFRoZW1lLFxuICB9LFxuICBzdGF0ZToge1xuICAgIC8qKlxuICAgICAqIFN0YXRlIGlzIHdoZXJlIHRoZSBwYWNrYWdlcyBzdG9yZSB0aGVpciBkZWZhdWx0IHNldHRpbmdzIGFuZCBvdGhlclxuICAgICAqIHJlbGV2YW50IHN0YXRlLiBJdCBpcyBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHRoZW1lOiB7XG4gICAgICBhdXRvUHJlZmV0Y2g6IFwiaW4tdmlld1wiLFxuICAgICAgbWVudTogW10sXG4gICAgICBpc01vYmlsZU1lbnVPcGVuOiBmYWxzZSxcbiAgICAgIGZlYXR1cmVkOiB7XG4gICAgICAgIHNob3dPbkxpc3Q6IGZhbHNlLFxuICAgICAgICBzaG93T25Qb3N0OiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICAvKipcbiAgICogQWN0aW9ucyBhcmUgZnVuY3Rpb25zIHRoYXQgbW9kaWZ5IHRoZSBzdGF0ZSBvciBkZWFsIHdpdGggb3RoZXIgcGFydHMgb2ZcbiAgICogRnJvbnRpdHkgbGlrZSBsaWJyYXJpZXMuXG4gICAqL1xuICBhY3Rpb25zOiB7XG4gICAgdGhlbWU6IHtcbiAgICAgIHRvZ2dsZU1vYmlsZU1lbnU6ICh7IHN0YXRlIH0pID0+IHtcbiAgICAgICAgc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbiA9ICFzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuO1xuICAgICAgfSxcbiAgICAgIGNsb3NlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgaW5pdDogKHsgbGlicmFyaWVzIH0pID0+IHtcbiAgICAgICAgbGlicmFyaWVzLnNvdXJjZS5oYW5kbGVycy5wdXNoKGhvbWVIYW5kbGVyKTtcbiAgICAgICAgbGlicmFyaWVzLnNvdXJjZS5oYW5kbGVycy5wdXNoKGNvbnRhY3RIYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGlicmFyaWVzOiB7XG4gICAgaHRtbDJyZWFjdDoge1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBwcm9jZXNzb3IgdG8gYGh0bWwycmVhY3RgIHNvIGl0IHByb2Nlc3NlcyB0aGUgYDxpbWc+YCB0YWdzXG4gICAgICAgKiBhbmQgaW50ZXJuYWwgbGluayBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC5cbiAgICAgICAqIFlvdSBjYW4gYWRkIHlvdXIgb3duIHByb2Nlc3NvcnMgdG9vLlxuICAgICAgICovXG4gICAgICBwcm9jZXNzb3JzOiBbaW1hZ2UsIGlmcmFtZSwgbGlua10sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hcnNUaGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})