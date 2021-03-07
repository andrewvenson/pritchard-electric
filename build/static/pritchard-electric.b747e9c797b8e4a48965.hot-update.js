webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\nvar homeHandler={pattern:\"/\",func:(_ref)=>{var{state}=_ref;state.source.data[\"/\"].isHome=true;}};var contactHandler={pattern:\"/contact\",func:(_ref2)=>{var{state}=_ref2;state.source.data[\"/contact/\"].isContact=true;}};var faqHandler={pattern:\"/faq\",func:(_ref3)=>{var{state}=_ref3;state.source.data[\"/faq/\"].isFaq=true;}};var galleryHandler={pattern:\"/gallery\",func:(_ref4)=>{var{state}=_ref4;state.source.data[\"/gallery/\"].isGallery=true;}};var commercialHandler={pattern:\"/commercial-electrical-services\",func:(_ref5)=>{var{state}=_ref5;state.source.data[\"/commercial-electrical-services/\"].isCommercial=true;}};var marsTheme={name:\"@frontity/mars-theme\",roots:{/**\n     * In Frontity, any package can add React components to the site.\n     * We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{autoPrefetch:\"in-view\",menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{toggleMobileMenu:(_ref6)=>{var{state}=_ref6;state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:(_ref7)=>{var{state}=_ref7;state.theme.isMobileMenuOpen=false;},init:(_ref8)=>{var{libraries}=_ref8;libraries.source.handlers.push(homeHandler);libraries.source.handlers.push(contactHandler);libraries.source.handlers.push(faqHandler);libraries.source.handlers.push(galleryHandler);}}},libraries:{html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * and internal link inside the content HTML.\n       * You can add your own processors too.\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbImhvbWVIYW5kbGVyIiwicGF0dGVybiIsImZ1bmMiLCJzdGF0ZSIsInNvdXJjZSIsImRhdGEiLCJpc0hvbWUiLCJjb250YWN0SGFuZGxlciIsImlzQ29udGFjdCIsImZhcUhhbmRsZXIiLCJpc0ZhcSIsImdhbGxlcnlIYW5kbGVyIiwiaXNHYWxsZXJ5IiwiY29tbWVyY2lhbEhhbmRsZXIiLCJpc0NvbW1lcmNpYWwiLCJtYXJzVGhlbWUiLCJuYW1lIiwicm9vdHMiLCJ0aGVtZSIsIlRoZW1lIiwiYXV0b1ByZWZldGNoIiwibWVudSIsImlzTW9iaWxlTWVudU9wZW4iLCJmZWF0dXJlZCIsInNob3dPbkxpc3QiLCJzaG93T25Qb3N0IiwiYWN0aW9ucyIsInRvZ2dsZU1vYmlsZU1lbnUiLCJjbG9zZU1vYmlsZU1lbnUiLCJpbml0IiwibGlicmFyaWVzIiwiaGFuZGxlcnMiLCJwdXNoIiwiaHRtbDJyZWFjdCIsInByb2Nlc3NvcnMiLCJpbWFnZSIsImlmcmFtZSIsImxpbmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQSxHQUFNQSxZQUFXLENBQUcsQ0FDbEJDLE9BQU8sQ0FBRSxHQURTLENBRWxCQyxJQUFJLENBQUUsUUFBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxNQUNuQkEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQWIsQ0FBa0IsR0FBbEIsRUFBdUJDLE1BQXZCLENBQWdDLElBQWhDLENBQ0QsQ0FKaUIsQ0FBcEIsQ0FPQSxHQUFNQyxlQUFjLENBQUcsQ0FDckJOLE9BQU8sQ0FBRSxVQURZLENBRXJCQyxJQUFJLENBQUUsU0FBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxPQUNuQkEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQWIsQ0FBa0IsV0FBbEIsRUFBK0JHLFNBQS9CLENBQTJDLElBQTNDLENBQ0QsQ0FKb0IsQ0FBdkIsQ0FPQSxHQUFNQyxXQUFVLENBQUcsQ0FDakJSLE9BQU8sQ0FBRSxNQURRLENBRWpCQyxJQUFJLENBQUUsU0FBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxPQUNuQkEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQWIsQ0FBa0IsT0FBbEIsRUFBMkJLLEtBQTNCLENBQW1DLElBQW5DLENBQ0QsQ0FKZ0IsQ0FBbkIsQ0FPQSxHQUFNQyxlQUFjLENBQUcsQ0FDckJWLE9BQU8sQ0FBRSxVQURZLENBRXJCQyxJQUFJLENBQUUsU0FBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxPQUNuQkEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQWIsQ0FBa0IsV0FBbEIsRUFBK0JPLFNBQS9CLENBQTJDLElBQTNDLENBQ0QsQ0FKb0IsQ0FBdkIsQ0FPQSxHQUFNQyxrQkFBaUIsQ0FBRyxDQUN4QlosT0FBTyxDQUFFLGlDQURlLENBRXhCQyxJQUFJLENBQUUsU0FBZSxJQUFkLENBQUVDLEtBQUYsQ0FBYyxPQUNuQkEsS0FBSyxDQUFDQyxNQUFOLENBQWFDLElBQWIsQ0FBa0Isa0NBQWxCLEVBQXNEUyxZQUF0RCxDQUFxRSxJQUFyRSxDQUNELENBSnVCLENBQTFCLENBT0EsR0FBTUMsVUFBUyxDQUFHLENBQ2hCQyxJQUFJLENBQUUsc0JBRFUsQ0FFaEJDLEtBQUssQ0FBRSxDQUNMO0FBQ0o7QUFDQTtBQUNBLE9BQ0lDLEtBQUssQ0FBRUMsbURBTEYsQ0FGUyxDQVNoQmhCLEtBQUssQ0FBRSxDQUNMO0FBQ0o7QUFDQTtBQUNBLE9BQ0llLEtBQUssQ0FBRSxDQUNMRSxZQUFZLENBQUUsU0FEVCxDQUVMQyxJQUFJLENBQUUsRUFGRCxDQUdMQyxnQkFBZ0IsQ0FBRSxLQUhiLENBSUxDLFFBQVEsQ0FBRSxDQUNSQyxVQUFVLENBQUUsS0FESixDQUVSQyxVQUFVLENBQUUsS0FGSixDQUpMLENBTEYsQ0FUUyxDQXlCaEI7QUFDRjtBQUNBO0FBQ0EsS0FDRUMsT0FBTyxDQUFFLENBQ1BSLEtBQUssQ0FBRSxDQUNMUyxnQkFBZ0IsQ0FBRSxTQUFlLElBQWQsQ0FBRXhCLEtBQUYsQ0FBYyxPQUMvQkEsS0FBSyxDQUFDZSxLQUFOLENBQVlJLGdCQUFaLENBQStCLENBQUNuQixLQUFLLENBQUNlLEtBQU4sQ0FBWUksZ0JBQTVDLENBQ0QsQ0FISSxDQUlMTSxlQUFlLENBQUUsU0FBZSxJQUFkLENBQUV6QixLQUFGLENBQWMsT0FDOUJBLEtBQUssQ0FBQ2UsS0FBTixDQUFZSSxnQkFBWixDQUErQixLQUEvQixDQUNELENBTkksQ0FPTE8sSUFBSSxDQUFFLFNBQW1CLElBQWxCLENBQUVDLFNBQUYsQ0FBa0IsT0FDdkJBLFNBQVMsQ0FBQzFCLE1BQVYsQ0FBaUIyQixRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JoQyxXQUEvQixFQUNBOEIsU0FBUyxDQUFDMUIsTUFBVixDQUFpQjJCLFFBQWpCLENBQTBCQyxJQUExQixDQUErQnpCLGNBQS9CLEVBQ0F1QixTQUFTLENBQUMxQixNQUFWLENBQWlCMkIsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCdkIsVUFBL0IsRUFDQXFCLFNBQVMsQ0FBQzFCLE1BQVYsQ0FBaUIyQixRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JyQixjQUEvQixFQUNELENBWkksQ0FEQSxDQTdCTyxDQTZDaEJtQixTQUFTLENBQUUsQ0FDVEcsVUFBVSxDQUFFLENBQ1Y7QUFDTjtBQUNBO0FBQ0E7QUFDQSxTQUNNQyxVQUFVLENBQUUsQ0FBQ0MsNkVBQUQsQ0FBUUMsOEVBQVIsQ0FBZ0JDLDRFQUFoQixDQU5GLENBREgsQ0E3Q0ssQ0FBbEIsQ0F5RGV0Qix3RUFBZiIsImZpbGUiOiIuL3BhY2thZ2VzL21hcnMtdGhlbWUvc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRoZW1lIGZyb20gXCIuL2NvbXBvbmVudHNcIjtcbmltcG9ydCBpbWFnZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pbWFnZVwiO1xuaW1wb3J0IGlmcmFtZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pZnJhbWVcIjtcbmltcG9ydCBsaW5rIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2xpbmtcIjtcblxuY29uc3QgaG9tZUhhbmRsZXIgPSB7XG4gIHBhdHRlcm46IFwiL1wiLFxuICBmdW5jOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgc3RhdGUuc291cmNlLmRhdGFbXCIvXCJdLmlzSG9tZSA9IHRydWU7XG4gIH0sXG59O1xuXG5jb25zdCBjb250YWN0SGFuZGxlciA9IHtcbiAgcGF0dGVybjogXCIvY29udGFjdFwiLFxuICBmdW5jOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgc3RhdGUuc291cmNlLmRhdGFbXCIvY29udGFjdC9cIl0uaXNDb250YWN0ID0gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IGZhcUhhbmRsZXIgPSB7XG4gIHBhdHRlcm46IFwiL2ZhcVwiLFxuICBmdW5jOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgc3RhdGUuc291cmNlLmRhdGFbXCIvZmFxL1wiXS5pc0ZhcSA9IHRydWU7XG4gIH0sXG59O1xuXG5jb25zdCBnYWxsZXJ5SGFuZGxlciA9IHtcbiAgcGF0dGVybjogXCIvZ2FsbGVyeVwiLFxuICBmdW5jOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgc3RhdGUuc291cmNlLmRhdGFbXCIvZ2FsbGVyeS9cIl0uaXNHYWxsZXJ5ID0gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IGNvbW1lcmNpYWxIYW5kbGVyID0ge1xuICBwYXR0ZXJuOiBcIi9jb21tZXJjaWFsLWVsZWN0cmljYWwtc2VydmljZXNcIixcbiAgZnVuYzogKHsgc3RhdGUgfSkgPT4ge1xuICAgIHN0YXRlLnNvdXJjZS5kYXRhW1wiL2NvbW1lcmNpYWwtZWxlY3RyaWNhbC1zZXJ2aWNlcy9cIl0uaXNDb21tZXJjaWFsID0gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IG1hcnNUaGVtZSA9IHtcbiAgbmFtZTogXCJAZnJvbnRpdHkvbWFycy10aGVtZVwiLFxuICByb290czoge1xuICAgIC8qKlxuICAgICAqIEluIEZyb250aXR5LCBhbnkgcGFja2FnZSBjYW4gYWRkIFJlYWN0IGNvbXBvbmVudHMgdG8gdGhlIHNpdGUuXG4gICAgICogV2UgdXNlIHJvb3RzIGZvciB0aGF0LCBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxuICAgICAqL1xuICAgIHRoZW1lOiBUaGVtZSxcbiAgfSxcbiAgc3RhdGU6IHtcbiAgICAvKipcbiAgICAgKiBTdGF0ZSBpcyB3aGVyZSB0aGUgcGFja2FnZXMgc3RvcmUgdGhlaXIgZGVmYXVsdCBzZXR0aW5ncyBhbmQgb3RoZXJcbiAgICAgKiByZWxldmFudCBzdGF0ZS4gSXQgaXMgc2NvcGVkIHRvIHRoZSBgdGhlbWVgIG5hbWVzcGFjZS5cbiAgICAgKi9cbiAgICB0aGVtZToge1xuICAgICAgYXV0b1ByZWZldGNoOiBcImluLXZpZXdcIixcbiAgICAgIG1lbnU6IFtdLFxuICAgICAgaXNNb2JpbGVNZW51T3BlbjogZmFsc2UsXG4gICAgICBmZWF0dXJlZDoge1xuICAgICAgICBzaG93T25MaXN0OiBmYWxzZSxcbiAgICAgICAgc2hvd09uUG9zdDogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFjdGlvbnMgYXJlIGZ1bmN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgc3RhdGUgb3IgZGVhbCB3aXRoIG90aGVyIHBhcnRzIG9mXG4gICAqIEZyb250aXR5IGxpa2UgbGlicmFyaWVzLlxuICAgKi9cbiAgYWN0aW9uczoge1xuICAgIHRoZW1lOiB7XG4gICAgICB0b2dnbGVNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSAhc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbjtcbiAgICAgIH0sXG4gICAgICBjbG9zZU1vYmlsZU1lbnU6ICh7IHN0YXRlIH0pID0+IHtcbiAgICAgICAgc3RhdGUudGhlbWUuaXNNb2JpbGVNZW51T3BlbiA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGluaXQ6ICh7IGxpYnJhcmllcyB9KSA9PiB7XG4gICAgICAgIGxpYnJhcmllcy5zb3VyY2UuaGFuZGxlcnMucHVzaChob21lSGFuZGxlcik7XG4gICAgICAgIGxpYnJhcmllcy5zb3VyY2UuaGFuZGxlcnMucHVzaChjb250YWN0SGFuZGxlcik7XG4gICAgICAgIGxpYnJhcmllcy5zb3VyY2UuaGFuZGxlcnMucHVzaChmYXFIYW5kbGVyKTtcbiAgICAgICAgbGlicmFyaWVzLnNvdXJjZS5oYW5kbGVycy5wdXNoKGdhbGxlcnlIYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgbGlicmFyaWVzOiB7XG4gICAgaHRtbDJyZWFjdDoge1xuICAgICAgLyoqXG4gICAgICAgKiBBZGQgYSBwcm9jZXNzb3IgdG8gYGh0bWwycmVhY3RgIHNvIGl0IHByb2Nlc3NlcyB0aGUgYDxpbWc+YCB0YWdzXG4gICAgICAgKiBhbmQgaW50ZXJuYWwgbGluayBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC5cbiAgICAgICAqIFlvdSBjYW4gYWRkIHlvdXIgb3duIHByb2Nlc3NvcnMgdG9vLlxuICAgICAgICovXG4gICAgICBwcm9jZXNzb3JzOiBbaW1hZ2UsIGlmcmFtZSwgbGlua10sXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1hcnNUaGVtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})