"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@chakra-ui+provider@2.4.2_@emotion+react@11.11.3_@types+react@18.3.17_react@19.0.0-rc-02c0e82_ftlaghgk6xmmeslnf6rvstldue";
exports.ids = ["vendor-chunks/@chakra-ui+provider@2.4.2_@emotion+react@11.11.3_@types+react@18.3.17_react@19.0.0-rc-02c0e82_ftlaghgk6xmmeslnf6rvstldue"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@chakra-ui+provider@2.4.2_@emotion+react@11.11.3_@types+react@18.3.17_react@19.0.0-rc-02c0e82_ftlaghgk6xmmeslnf6rvstldue/node_modules/@chakra-ui/provider/dist/chunk-3DDHO3UN.mjs":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chakra-ui+provider@2.4.2_@emotion+react@11.11.3_@types+react@18.3.17_react@19.0.0-rc-02c0e82_ftlaghgk6xmmeslnf6rvstldue/node_modules/@chakra-ui/provider/dist/chunk-3DDHO3UN.mjs ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChakraProvider: () => (/* binding */ ChakraProvider)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_css_reset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/css-reset */ \"(ssr)/./node_modules/.pnpm/@chakra-ui+css-reset@2.3.0_@emotion+react@11.11.3_@types+react@18.3.17_react@19.0.0-rc-02c0e8_u2nwdrkmzlrkmew42tm3lmm6jm/node_modules/@chakra-ui/css-reset/dist/chunk-B4LBJQ3X.mjs\");\n/* harmony import */ var _chakra_ui_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/portal */ \"(ssr)/./node_modules/.pnpm/@chakra-ui+portal@2.1.0_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-202410_bnsjhrvnf7eybgi2yvhypn7yju/node_modules/@chakra-ui/portal/dist/chunk-HK66PB7M.mjs\");\n/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/system */ \"(ssr)/./node_modules/.pnpm/@chakra-ui+system@2.6.2_@emotion+react@11.11.3_@types+react@18.3.17_react@19.0.0-rc-02c0e824-_o67q43ydf6jhidxacngnpl4aae/node_modules/@chakra-ui/system/dist/chunk-MFVQSVQB.mjs\");\n/* harmony import */ var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/system */ \"(ssr)/./node_modules/.pnpm/@chakra-ui+color-mode@2.2.0_react@19.0.0-rc-02c0e824-20241028/node_modules/@chakra-ui/color-mode/dist/chunk-AMBGAKG2.mjs\");\n/* harmony import */ var _chakra_ui_react_env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react-env */ \"(ssr)/./node_modules/.pnpm/@chakra-ui+react-env@3.1.0_react@19.0.0-rc-02c0e824-20241028/node_modules/@chakra-ui/react-env/dist/chunk-VMD3UMGK.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ ChakraProvider auto */ // src/chakra-provider.tsx\n\n\n\n\n\nvar ChakraProvider = (props)=>{\n    const { children, colorModeManager, portalZIndex, resetScope, resetCSS = true, theme = {}, environment, cssVarsRoot, disableEnvironment, disableGlobalStyle } = props;\n    const _children = /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react_env__WEBPACK_IMPORTED_MODULE_1__.EnvironmentProvider, {\n        environment,\n        disabled: disableEnvironment,\n        children\n    });\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme,\n        cssVarsRoot,\n        children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.ColorModeProvider, {\n            colorModeManager,\n            options: theme.config,\n            children: [\n                resetCSS ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_css_reset__WEBPACK_IMPORTED_MODULE_4__.CSSReset, {\n                    scope: resetScope\n                }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_css_reset__WEBPACK_IMPORTED_MODULE_4__.CSSPolyfill, {}),\n                !disableGlobalStyle && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.GlobalStyle, {}),\n                portalZIndex ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_portal__WEBPACK_IMPORTED_MODULE_5__.PortalManager, {\n                    zIndex: portalZIndex,\n                    children: _children\n                }) : _children\n            ]\n        })\n    });\n};\n //# sourceMappingURL=chunk-3DDHO3UN.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNoYWtyYS11aStwcm92aWRlckAyLjQuMl9AZW1vdGlvbityZWFjdEAxMS4xMS4zX0B0eXBlcytyZWFjdEAxOC4zLjE3X3JlYWN0QDE5LjAuMC1yYy0wMmMwZTgyX2Z0bGFnaGdrNnhtbWVzbG5mNnJ2c3RsZHVlL25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL3Byb3ZpZGVyL2Rpc3QvY2h1bmstM0RESE8zVU4ubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ1I7QUFPdkI7QUFLQTtBQTRFSDtBQWZHLElBQU0saUJBQWdELENBQUM7SUFDNUQsTUFBTSxFQUNKLFVBQ0Esa0JBQ0EsY0FDQSxZQUNBLFdBQVcsTUFDWCxRQUFRLENBQUMsR0FDVCxhQUNBLGFBQ0Esb0JBQ0Esb0JBQ0YsR0FBSTtJQUVKLE1BQU0sWUFDSix1RUFBQyxxRUFBbUIsRUFBbkI7UUFDQztRQUNBLFVBQVU7UUFFVDtJQUFBO0lBSUwsT0FDRSx1RUFBQyw0REFBYSxFQUFiO1FBQWM7UUFBc0I7UUFDbkMsa0ZBQUMsZ0VBQWlCLEVBQWpCO1lBQ0M7WUFDQSxTQUFTLE1BQU07WUFFZDtnQkFBQSxXQUFXLHVFQUFDLDBEQUFRLEVBQVI7b0JBQVMsT0FBTztnQkFBQSxDQUFZLElBQUssdUVBQUMsNkRBQVcsRUFBWCxFQUFZO2dCQUMxRCxDQUFDLHNCQUFzQix1RUFBQywwREFBVyxFQUFYLEVBQVk7Z0JBQ3BDLGVBQ0MsdUVBQUMsNERBQWEsRUFBYjtvQkFBYyxRQUFRO29CQUFlO2dCQUFBLENBQVUsSUFFaEQ7YUFBQTtRQUFBO0lBRUosQ0FDRjtBQUVKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL3NyYy9jaGFrcmEtcHJvdmlkZXIudHN4PzU2YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ1NTUmVzZXQsIENTU1BvbHlmaWxsIH0gZnJvbSBcIkBjaGFrcmEtdWkvY3NzLXJlc2V0XCJcbmltcG9ydCB7IFBvcnRhbE1hbmFnZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9wb3J0YWxcIlxuaW1wb3J0IHtcbiAgQ29sb3JNb2RlUHJvdmlkZXIsXG4gIENvbG9yTW9kZVByb3ZpZGVyUHJvcHMsXG4gIEdsb2JhbFN0eWxlLFxuICBUaGVtZVByb3ZpZGVyLFxuICBUaGVtZVByb3ZpZGVyUHJvcHMsXG59IGZyb20gXCJAY2hha3JhLXVpL3N5c3RlbVwiXG5pbXBvcnQgeyBEaWN0IH0gZnJvbSBcIkBjaGFrcmEtdWkvdXRpbHNcIlxuaW1wb3J0IHtcbiAgRW52aXJvbm1lbnRQcm92aWRlcixcbiAgRW52aXJvbm1lbnRQcm92aWRlclByb3BzLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdC1lbnZcIlxuXG5leHBvcnQgaW50ZXJmYWNlIENoYWtyYVByb3ZpZGVyUHJvcHNcbiAgZXh0ZW5kcyBQaWNrPFRoZW1lUHJvdmlkZXJQcm9wcywgXCJjc3NWYXJzUm9vdFwiPiB7XG4gIC8qKlxuICAgKiBhIHRoZW1lLiBpZiBvbWl0dGVkLCB1c2VzIHRoZSBkZWZhdWx0IHRoZW1lIHByb3ZpZGVkIGJ5IGNoYWtyYVxuICAgKi9cbiAgdGhlbWU/OiBEaWN0XG4gIC8qKlxuICAgKiBDb21tb24gei1pbmRleCB0byB1c2UgZm9yIGBQb3J0YWxgXG4gICAqXG4gICAqIEBkZWZhdWx0IHVuZGVmaW5lZFxuICAgKi9cbiAgcG9ydGFsWkluZGV4PzogbnVtYmVyXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGBDU1NSZXNldGAgY29tcG9uZW50IHdpbGwgYmUgbW91bnRlZCB0byBoZWxwXG4gICAqIHlvdSByZXNldCBicm93c2VyIHN0eWxlc1xuICAgKlxuICAgKiBAZGVmYXVsdCB0cnVlXG4gICAqL1xuICByZXNldENTUz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFRoZSBzZWxlY3RvciB0byBzY29wZSB0aGUgY3NzIHJlc2V0IHN0eWxlcyB0by5cbiAgICovXG4gIHJlc2V0U2NvcGU/OiBzdHJpbmdcbiAgLyoqXG4gICAqIG1hbmFnZXIgdG8gcGVyc2lzdCBhIHVzZXJzIGNvbG9yIG1vZGUgcHJlZmVyZW5jZSBpblxuICAgKlxuICAgKiBvbWl0IGlmIHlvdSBkb24ndCByZW5kZXIgc2VydmVyLXNpZGVcbiAgICogZm9yIFNTUjogY2hvb3NlIGBjb29raWVTdG9yYWdlTWFuYWdlcmBcbiAgICpcbiAgICogQGRlZmF1bHQgbG9jYWxTdG9yYWdlTWFuYWdlclxuICAgKi9cbiAgY29sb3JNb2RlTWFuYWdlcj86IENvbG9yTW9kZVByb3ZpZGVyUHJvcHNbXCJjb2xvck1vZGVNYW5hZ2VyXCJdXG4gIC8qKlxuICAgKiBZb3VyIGFwcGxpY2F0aW9uIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gIC8qKlxuICAgKiBUaGUgZW52aXJvbm1lbnQgKGB3aW5kb3dgIGFuZCBgZG9jdW1lbnRgKSB0byBiZSB1c2VkIGJ5XG4gICAqIGFsbCBjb21wb25lbnRzIGFuZCBob29rcy5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgd2Ugc21hcnRseSBkZXRlcm1pbmUgdGhlIG93bmVyRG9jdW1lbnQgYW5kIGRlZmF1bHRWaWV3XG4gICAqIGJhc2VkIG9uIHdoZXJlIGBDaGFrcmFQcm92aWRlcmAgaXMgcmVuZGVyZWQuXG4gICAqL1xuICBlbnZpcm9ubWVudD86IEVudmlyb25tZW50UHJvdmlkZXJQcm9wc1tcImVudmlyb25tZW50XCJdXG4gIC8qKlxuICAgKiBEaXNhYmxlZCB0aGUgdXNlIG9mIGF1dG9tYXRpYyB3aW5kb3cgYW5kIGRvY3VtZW50IGRldGVjdGlvbi5cbiAgICogVGhpcyByZW1vdmVkIHRoZSBpbmplY3RlZCBgPHNwYW4vPmAgZWxlbWVudFxuICAgKi9cbiAgZGlzYWJsZUVudmlyb25tZW50PzogYm9vbGVhblxuICAvKipcbiAgICogSWYgYHRydWVgLCBDaGFrcmEgd2lsbCBub3QgbW91bnQgdGhlIGdsb2JhbCBzdHlsZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWUuXG4gICAqL1xuICBkaXNhYmxlR2xvYmFsU3R5bGU/OiBib29sZWFuXG59XG5cbi8qKlxuICogVGhlIGdsb2JhbCBwcm92aWRlciB0aGF0IG11c3QgYmUgYWRkZWQgdG8gbWFrZSBhbGwgQ2hha3JhIGNvbXBvbmVudHNcbiAqIHdvcmsgY29ycmVjdGx5XG4gKi9cbmV4cG9ydCBjb25zdCBDaGFrcmFQcm92aWRlcjogUmVhY3QuRkM8Q2hha3JhUHJvdmlkZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNvbG9yTW9kZU1hbmFnZXIsXG4gICAgcG9ydGFsWkluZGV4LFxuICAgIHJlc2V0U2NvcGUsXG4gICAgcmVzZXRDU1MgPSB0cnVlLFxuICAgIHRoZW1lID0ge30sXG4gICAgZW52aXJvbm1lbnQsXG4gICAgY3NzVmFyc1Jvb3QsXG4gICAgZGlzYWJsZUVudmlyb25tZW50LFxuICAgIGRpc2FibGVHbG9iYWxTdHlsZSxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgX2NoaWxkcmVuID0gKFxuICAgIDxFbnZpcm9ubWVudFByb3ZpZGVyXG4gICAgICBlbnZpcm9ubWVudD17ZW52aXJvbm1lbnR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZUVudmlyb25tZW50fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Vudmlyb25tZW50UHJvdmlkZXI+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZSBhcyBEaWN0fSBjc3NWYXJzUm9vdD17Y3NzVmFyc1Jvb3R9PlxuICAgICAgPENvbG9yTW9kZVByb3ZpZGVyXG4gICAgICAgIGNvbG9yTW9kZU1hbmFnZXI9e2NvbG9yTW9kZU1hbmFnZXJ9XG4gICAgICAgIG9wdGlvbnM9e3RoZW1lLmNvbmZpZ31cbiAgICAgID5cbiAgICAgICAge3Jlc2V0Q1NTID8gPENTU1Jlc2V0IHNjb3BlPXtyZXNldFNjb3BlfSAvPiA6IDxDU1NQb2x5ZmlsbCAvPn1cbiAgICAgICAgeyFkaXNhYmxlR2xvYmFsU3R5bGUgJiYgPEdsb2JhbFN0eWxlIC8+fVxuICAgICAgICB7cG9ydGFsWkluZGV4ID8gKFxuICAgICAgICAgIDxQb3J0YWxNYW5hZ2VyIHpJbmRleD17cG9ydGFsWkluZGV4fT57X2NoaWxkcmVufTwvUG9ydGFsTWFuYWdlcj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBfY2hpbGRyZW5cbiAgICAgICAgKX1cbiAgICAgIDwvQ29sb3JNb2RlUHJvdmlkZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@chakra-ui+provider@2.4.2_@emotion+react@11.11.3_@types+react@18.3.17_react@19.0.0-rc-02c0e82_ftlaghgk6xmmeslnf6rvstldue/node_modules/@chakra-ui/provider/dist/chunk-3DDHO3UN.mjs\n");

/***/ })

};
;