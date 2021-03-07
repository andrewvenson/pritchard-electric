webpackHotUpdate("pritchard-electric",{

/***/ "./packages/mars-theme/src/index.js":
/*!******************************************!*\
  !*** ./packages/mars-theme/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ \"./packages/mars-theme/src/components/index.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\n/* harmony import */ var _frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontity/html2react/processors/link */ \"./node_modules/@frontity/html2react/processors/link.tsx\");\nvar homeHandler={pattern:\"/\",func:(_ref)=>{var{state}=_ref;state.source.data[\"/\"].isHome=true;}};var contactHandler={pattern:\"/contact\",func:(_ref2)=>{var{state}=_ref2;state.source.data[\"/contact/\"].isContact=true;}};var faqHandler={pattern:\"/faq\",func:(_ref3)=>{var{state}=_ref3;state.source.data[\"/faq/\"].isFaq=true;}};var galleryHandler={pattern:\"/gallery\",func:(_ref4)=>{var{state}=_ref4;state.source.data[\"/gallery/\"].isGallery=true;}};var commercialHandler={pattern:\"/commercial-electrical-services\",func:(_ref5)=>{var{state}=_ref5;state.source.data[\"/commercial-electrical-services/\"].isCommercial=true;}};var lightingHandler={pattern:\"/lighting-services\",func:(_ref6)=>{var{state}=_ref6;state.source.data[\"/lighting-services/\"].isLighting=true;}};var residentialHandler={pattern:\"/residential-electrical-services\",func:(_ref7)=>{var{state}=_ref7;state.source.data[\"/commercial-electrical-services/\"].isCommercial=true;}};var marsTheme={name:\"@frontity/mars-theme\",roots:{/**\n     * In Frontity, any package can add React components to the site.\n     * We use roots for that, scoped to the `theme` namespace.\n     */theme:_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"]},state:{/**\n     * State is where the packages store their default settings and other\n     * relevant state. It is scoped to the `theme` namespace.\n     */theme:{autoPrefetch:\"in-view\",menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\n   * Actions are functions that modify the state or deal with other parts of\n   * Frontity like libraries.\n   */actions:{theme:{toggleMobileMenu:(_ref8)=>{var{state}=_ref8;state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:(_ref9)=>{var{state}=_ref9;state.theme.isMobileMenuOpen=false;},init:(_ref10)=>{var{libraries}=_ref10;libraries.source.handlers.push(homeHandler);libraries.source.handlers.push(contactHandler);libraries.source.handlers.push(faqHandler);libraries.source.handlers.push(galleryHandler);}}},libraries:{html2react:{/**\n       * Add a processor to `html2react` so it processes the `<img>` tags\n       * and internal link inside the content HTML.\n       * You can add your own processors too.\n       */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_2__[\"default\"],_frontity_html2react_processors_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tYXJzLXRoZW1lL3NyYy9pbmRleC5qcz8xOGE2Il0sIm5hbWVzIjpbImhvbWVIYW5kbGVyIiwicGF0dGVybiIsImZ1bmMiLCJzdGF0ZSIsInNvdXJjZSIsImRhdGEiLCJpc0hvbWUiLCJjb250YWN0SGFuZGxlciIsImlzQ29udGFjdCIsImZhcUhhbmRsZXIiLCJpc0ZhcSIsImdhbGxlcnlIYW5kbGVyIiwiaXNHYWxsZXJ5IiwiY29tbWVyY2lhbEhhbmRsZXIiLCJpc0NvbW1lcmNpYWwiLCJsaWdodGluZ0hhbmRsZXIiLCJpc0xpZ2h0aW5nIiwicmVzaWRlbnRpYWxIYW5kbGVyIiwibWFyc1RoZW1lIiwibmFtZSIsInJvb3RzIiwidGhlbWUiLCJUaGVtZSIsImF1dG9QcmVmZXRjaCIsIm1lbnUiLCJpc01vYmlsZU1lbnVPcGVuIiwiZmVhdHVyZWQiLCJzaG93T25MaXN0Iiwic2hvd09uUG9zdCIsImFjdGlvbnMiLCJ0b2dnbGVNb2JpbGVNZW51IiwiY2xvc2VNb2JpbGVNZW51IiwiaW5pdCIsImxpYnJhcmllcyIsImhhbmRsZXJzIiwicHVzaCIsImh0bWwycmVhY3QiLCJwcm9jZXNzb3JzIiwiaW1hZ2UiLCJpZnJhbWUiLCJsaW5rIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsR0FBTUEsWUFBVyxDQUFHLENBQ2xCQyxPQUFPLENBQUUsR0FEUyxDQUVsQkMsSUFBSSxDQUFFLFFBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsTUFDbkJBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLENBQWtCLEdBQWxCLEVBQXVCQyxNQUF2QixDQUFnQyxJQUFoQyxDQUNELENBSmlCLENBQXBCLENBT0EsR0FBTUMsZUFBYyxDQUFHLENBQ3JCTixPQUFPLENBQUUsVUFEWSxDQUVyQkMsSUFBSSxDQUFFLFNBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsT0FDbkJBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLENBQWtCLFdBQWxCLEVBQStCRyxTQUEvQixDQUEyQyxJQUEzQyxDQUNELENBSm9CLENBQXZCLENBT0EsR0FBTUMsV0FBVSxDQUFHLENBQ2pCUixPQUFPLENBQUUsTUFEUSxDQUVqQkMsSUFBSSxDQUFFLFNBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsT0FDbkJBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLENBQWtCLE9BQWxCLEVBQTJCSyxLQUEzQixDQUFtQyxJQUFuQyxDQUNELENBSmdCLENBQW5CLENBT0EsR0FBTUMsZUFBYyxDQUFHLENBQ3JCVixPQUFPLENBQUUsVUFEWSxDQUVyQkMsSUFBSSxDQUFFLFNBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsT0FDbkJBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLENBQWtCLFdBQWxCLEVBQStCTyxTQUEvQixDQUEyQyxJQUEzQyxDQUNELENBSm9CLENBQXZCLENBT0EsR0FBTUMsa0JBQWlCLENBQUcsQ0FDeEJaLE9BQU8sQ0FBRSxpQ0FEZSxDQUV4QkMsSUFBSSxDQUFFLFNBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsT0FDbkJBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLENBQWtCLGtDQUFsQixFQUFzRFMsWUFBdEQsQ0FBcUUsSUFBckUsQ0FDRCxDQUp1QixDQUExQixDQU9BLEdBQU1DLGdCQUFlLENBQUcsQ0FDdEJkLE9BQU8sQ0FBRSxvQkFEYSxDQUV0QkMsSUFBSSxDQUFFLFNBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsT0FDbkJBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLENBQWtCLHFCQUFsQixFQUF5Q1csVUFBekMsQ0FBc0QsSUFBdEQsQ0FDRCxDQUpxQixDQUF4QixDQU9BLEdBQU1DLG1CQUFrQixDQUFHLENBQ3pCaEIsT0FBTyxDQUFFLGtDQURnQixDQUV6QkMsSUFBSSxDQUFFLFNBQWUsSUFBZCxDQUFFQyxLQUFGLENBQWMsT0FDbkJBLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxJQUFiLENBQWtCLGtDQUFsQixFQUFzRFMsWUFBdEQsQ0FBcUUsSUFBckUsQ0FDRCxDQUp3QixDQUEzQixDQU9BLEdBQU1JLFVBQVMsQ0FBRyxDQUNoQkMsSUFBSSxDQUFFLHNCQURVLENBRWhCQyxLQUFLLENBQUUsQ0FDTDtBQUNKO0FBQ0E7QUFDQSxPQUNJQyxLQUFLLENBQUVDLG1EQUxGLENBRlMsQ0FTaEJuQixLQUFLLENBQUUsQ0FDTDtBQUNKO0FBQ0E7QUFDQSxPQUNJa0IsS0FBSyxDQUFFLENBQ0xFLFlBQVksQ0FBRSxTQURULENBRUxDLElBQUksQ0FBRSxFQUZELENBR0xDLGdCQUFnQixDQUFFLEtBSGIsQ0FJTEMsUUFBUSxDQUFFLENBQ1JDLFVBQVUsQ0FBRSxLQURKLENBRVJDLFVBQVUsQ0FBRSxLQUZKLENBSkwsQ0FMRixDQVRTLENBeUJoQjtBQUNGO0FBQ0E7QUFDQSxLQUNFQyxPQUFPLENBQUUsQ0FDUFIsS0FBSyxDQUFFLENBQ0xTLGdCQUFnQixDQUFFLFNBQWUsSUFBZCxDQUFFM0IsS0FBRixDQUFjLE9BQy9CQSxLQUFLLENBQUNrQixLQUFOLENBQVlJLGdCQUFaLENBQStCLENBQUN0QixLQUFLLENBQUNrQixLQUFOLENBQVlJLGdCQUE1QyxDQUNELENBSEksQ0FJTE0sZUFBZSxDQUFFLFNBQWUsSUFBZCxDQUFFNUIsS0FBRixDQUFjLE9BQzlCQSxLQUFLLENBQUNrQixLQUFOLENBQVlJLGdCQUFaLENBQStCLEtBQS9CLENBQ0QsQ0FOSSxDQU9MTyxJQUFJLENBQUUsVUFBbUIsSUFBbEIsQ0FBRUMsU0FBRixDQUFrQixRQUN2QkEsU0FBUyxDQUFDN0IsTUFBVixDQUFpQjhCLFFBQWpCLENBQTBCQyxJQUExQixDQUErQm5DLFdBQS9CLEVBQ0FpQyxTQUFTLENBQUM3QixNQUFWLENBQWlCOEIsUUFBakIsQ0FBMEJDLElBQTFCLENBQStCNUIsY0FBL0IsRUFDQTBCLFNBQVMsQ0FBQzdCLE1BQVYsQ0FBaUI4QixRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0IxQixVQUEvQixFQUNBd0IsU0FBUyxDQUFDN0IsTUFBVixDQUFpQjhCLFFBQWpCLENBQTBCQyxJQUExQixDQUErQnhCLGNBQS9CLEVBQ0QsQ0FaSSxDQURBLENBN0JPLENBNkNoQnNCLFNBQVMsQ0FBRSxDQUNURyxVQUFVLENBQUUsQ0FDVjtBQUNOO0FBQ0E7QUFDQTtBQUNBLFNBQ01DLFVBQVUsQ0FBRSxDQUFDQyw2RUFBRCxDQUFRQyw4RUFBUixDQUFnQkMsNEVBQWhCLENBTkYsQ0FESCxDQTdDSyxDQUFsQixDQXlEZXRCLHdFQUFmIiwiZmlsZSI6Ii4vcGFja2FnZXMvbWFycy10aGVtZS9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IGltYWdlIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2ltYWdlXCI7XG5pbXBvcnQgaWZyYW1lIGZyb20gXCJAZnJvbnRpdHkvaHRtbDJyZWFjdC9wcm9jZXNzb3JzL2lmcmFtZVwiO1xuaW1wb3J0IGxpbmsgZnJvbSBcIkBmcm9udGl0eS9odG1sMnJlYWN0L3Byb2Nlc3NvcnMvbGlua1wiO1xuXG5jb25zdCBob21lSGFuZGxlciA9IHtcbiAgcGF0dGVybjogXCIvXCIsXG4gIGZ1bmM6ICh7IHN0YXRlIH0pID0+IHtcbiAgICBzdGF0ZS5zb3VyY2UuZGF0YVtcIi9cIl0uaXNIb21lID0gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IGNvbnRhY3RIYW5kbGVyID0ge1xuICBwYXR0ZXJuOiBcIi9jb250YWN0XCIsXG4gIGZ1bmM6ICh7IHN0YXRlIH0pID0+IHtcbiAgICBzdGF0ZS5zb3VyY2UuZGF0YVtcIi9jb250YWN0L1wiXS5pc0NvbnRhY3QgPSB0cnVlO1xuICB9LFxufTtcblxuY29uc3QgZmFxSGFuZGxlciA9IHtcbiAgcGF0dGVybjogXCIvZmFxXCIsXG4gIGZ1bmM6ICh7IHN0YXRlIH0pID0+IHtcbiAgICBzdGF0ZS5zb3VyY2UuZGF0YVtcIi9mYXEvXCJdLmlzRmFxID0gdHJ1ZTtcbiAgfSxcbn07XG5cbmNvbnN0IGdhbGxlcnlIYW5kbGVyID0ge1xuICBwYXR0ZXJuOiBcIi9nYWxsZXJ5XCIsXG4gIGZ1bmM6ICh7IHN0YXRlIH0pID0+IHtcbiAgICBzdGF0ZS5zb3VyY2UuZGF0YVtcIi9nYWxsZXJ5L1wiXS5pc0dhbGxlcnkgPSB0cnVlO1xuICB9LFxufTtcblxuY29uc3QgY29tbWVyY2lhbEhhbmRsZXIgPSB7XG4gIHBhdHRlcm46IFwiL2NvbW1lcmNpYWwtZWxlY3RyaWNhbC1zZXJ2aWNlc1wiLFxuICBmdW5jOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgc3RhdGUuc291cmNlLmRhdGFbXCIvY29tbWVyY2lhbC1lbGVjdHJpY2FsLXNlcnZpY2VzL1wiXS5pc0NvbW1lcmNpYWwgPSB0cnVlO1xuICB9LFxufTtcblxuY29uc3QgbGlnaHRpbmdIYW5kbGVyID0ge1xuICBwYXR0ZXJuOiBcIi9saWdodGluZy1zZXJ2aWNlc1wiLFxuICBmdW5jOiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgc3RhdGUuc291cmNlLmRhdGFbXCIvbGlnaHRpbmctc2VydmljZXMvXCJdLmlzTGlnaHRpbmcgPSB0cnVlO1xuICB9LFxufTtcblxuY29uc3QgcmVzaWRlbnRpYWxIYW5kbGVyID0ge1xuICBwYXR0ZXJuOiBcIi9yZXNpZGVudGlhbC1lbGVjdHJpY2FsLXNlcnZpY2VzXCIsXG4gIGZ1bmM6ICh7IHN0YXRlIH0pID0+IHtcbiAgICBzdGF0ZS5zb3VyY2UuZGF0YVtcIi9jb21tZXJjaWFsLWVsZWN0cmljYWwtc2VydmljZXMvXCJdLmlzQ29tbWVyY2lhbCA9IHRydWU7XG4gIH0sXG59O1xuXG5jb25zdCBtYXJzVGhlbWUgPSB7XG4gIG5hbWU6IFwiQGZyb250aXR5L21hcnMtdGhlbWVcIixcbiAgcm9vdHM6IHtcbiAgICAvKipcbiAgICAgKiBJbiBGcm9udGl0eSwgYW55IHBhY2thZ2UgY2FuIGFkZCBSZWFjdCBjb21wb25lbnRzIHRvIHRoZSBzaXRlLlxuICAgICAqIFdlIHVzZSByb290cyBmb3IgdGhhdCwgc2NvcGVkIHRvIHRoZSBgdGhlbWVgIG5hbWVzcGFjZS5cbiAgICAgKi9cbiAgICB0aGVtZTogVGhlbWUsXG4gIH0sXG4gIHN0YXRlOiB7XG4gICAgLyoqXG4gICAgICogU3RhdGUgaXMgd2hlcmUgdGhlIHBhY2thZ2VzIHN0b3JlIHRoZWlyIGRlZmF1bHQgc2V0dGluZ3MgYW5kIG90aGVyXG4gICAgICogcmVsZXZhbnQgc3RhdGUuIEl0IGlzIHNjb3BlZCB0byB0aGUgYHRoZW1lYCBuYW1lc3BhY2UuXG4gICAgICovXG4gICAgdGhlbWU6IHtcbiAgICAgIGF1dG9QcmVmZXRjaDogXCJpbi12aWV3XCIsXG4gICAgICBtZW51OiBbXSxcbiAgICAgIGlzTW9iaWxlTWVudU9wZW46IGZhbHNlLFxuICAgICAgZmVhdHVyZWQ6IHtcbiAgICAgICAgc2hvd09uTGlzdDogZmFsc2UsXG4gICAgICAgIHNob3dPblBvc3Q6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBBY3Rpb25zIGFyZSBmdW5jdGlvbnMgdGhhdCBtb2RpZnkgdGhlIHN0YXRlIG9yIGRlYWwgd2l0aCBvdGhlciBwYXJ0cyBvZlxuICAgKiBGcm9udGl0eSBsaWtlIGxpYnJhcmllcy5cbiAgICovXG4gIGFjdGlvbnM6IHtcbiAgICB0aGVtZToge1xuICAgICAgdG9nZ2xlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xuICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gIXN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW47XG4gICAgICB9LFxuICAgICAgY2xvc2VNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XG4gICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBpbml0OiAoeyBsaWJyYXJpZXMgfSkgPT4ge1xuICAgICAgICBsaWJyYXJpZXMuc291cmNlLmhhbmRsZXJzLnB1c2goaG9tZUhhbmRsZXIpO1xuICAgICAgICBsaWJyYXJpZXMuc291cmNlLmhhbmRsZXJzLnB1c2goY29udGFjdEhhbmRsZXIpO1xuICAgICAgICBsaWJyYXJpZXMuc291cmNlLmhhbmRsZXJzLnB1c2goZmFxSGFuZGxlcik7XG4gICAgICAgIGxpYnJhcmllcy5zb3VyY2UuaGFuZGxlcnMucHVzaChnYWxsZXJ5SGFuZGxlcik7XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGxpYnJhcmllczoge1xuICAgIGh0bWwycmVhY3Q6IHtcbiAgICAgIC8qKlxuICAgICAgICogQWRkIGEgcHJvY2Vzc29yIHRvIGBodG1sMnJlYWN0YCBzbyBpdCBwcm9jZXNzZXMgdGhlIGA8aW1nPmAgdGFnc1xuICAgICAgICogYW5kIGludGVybmFsIGxpbmsgaW5zaWRlIHRoZSBjb250ZW50IEhUTUwuXG4gICAgICAgKiBZb3UgY2FuIGFkZCB5b3VyIG93biBwcm9jZXNzb3JzIHRvby5cbiAgICAgICAqL1xuICAgICAgcHJvY2Vzc29yczogW2ltYWdlLCBpZnJhbWUsIGxpbmtdLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtYXJzVGhlbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/mars-theme/src/index.js\n");

/***/ })

})