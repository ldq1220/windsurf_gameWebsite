"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@chakra-ui+react-use-event-listener@2.1.0_react@19.0.0-rc-02c0e824-20241028";
exports.ids = ["vendor-chunks/@chakra-ui+react-use-event-listener@2.1.0_react@19.0.0-rc-02c0e824-20241028"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@chakra-ui+react-use-event-listener@2.1.0_react@19.0.0-rc-02c0e824-20241028/node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@chakra-ui+react-use-event-listener@2.1.0_react@19.0.0-rc-02c0e824-20241028/node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs ***!
  \************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useEventListener: () => (/* binding */ useEventListener)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@15.0.2_react-dom@19.0.0-rc-02c0e824-20241028_react@19.0.0-rc-02c0e824-20241028__react@19.0.0-rc-02c0e824-20241028/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react-use-callback-ref */ \"(ssr)/./node_modules/.pnpm/@chakra-ui+react-use-callback-ref@2.1.0_react@19.0.0-rc-02c0e824-20241028/node_modules/@chakra-ui/react-use-callback-ref/dist/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ useEventListener auto */ // src/index.ts\n\n\nfunction useEventListener(target, event, handler, options) {\n    const listener = (0,_chakra_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_1__.useCallbackRef)(handler);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const node = typeof target === \"function\" ? target() : target != null ? target : document;\n        if (!handler || !node) return;\n        node.addEventListener(event, listener, options);\n        return ()=>{\n            node.removeEventListener(event, listener, options);\n        };\n    }, [\n        event,\n        target,\n        options,\n        listener,\n        handler\n    ]);\n    return ()=>{\n        const node = typeof target === \"function\" ? target() : target != null ? target : document;\n        node == null ? void 0 : node.removeEventListener(event, listener, options);\n    };\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGNoYWtyYS11aStyZWFjdC11c2UtZXZlbnQtbGlzdGVuZXJAMi4xLjBfcmVhY3RAMTkuMC4wLXJjLTAyYzBlODI0LTIwMjQxMDI4L25vZGVfbW9kdWxlcy9AY2hha3JhLXVpL3JlYWN0LXVzZS1ldmVudC1saXN0ZW5lci9kaXN0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ0s7QUF1QnhCLFNBQVMsaUJBQ2QsUUFDQSxPQUNBLFNBQ0EsU0FDQTtJQUNBLE1BQU0sV0FBVyxpRkFBYyxDQUFDLE9BQU87SUFFdkMsZ0RBQVMsQ0FBQztRQUNSLE1BQU0sT0FBTyxPQUFPLFdBQVcsYUFBYSxPQUFPLElBQUksMEJBQVU7UUFFakUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRXZCLEtBQUssaUJBQWlCLE9BQU8sVUFBVSxPQUFPO1FBQzlDLE9BQU87WUFDTCxLQUFLLG9CQUFvQixPQUFPLFVBQVUsT0FBTztRQUNuRDtJQUNGLEdBQUc7UUFBQztRQUFPO1FBQVE7UUFBUztRQUFVLE9BQU87S0FBQztJQUU5QyxPQUFPO1FBQ0wsTUFBTSxPQUFPLE9BQU8sV0FBVyxhQUFhLE9BQU8sSUFBSSwwQkFBVTtRQUNqRSw2QkFBTSxvQkFBb0IsT0FBTyxVQUFVO0lBQzdDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LnRzPzUyZDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUNhbGxiYWNrUmVmIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3QtdXNlLWNhbGxiYWNrLXJlZlwiXG5cbnR5cGUgVGFyZ2V0ID0gRXZlbnRUYXJnZXQgfCBudWxsIHwgKCgpID0+IEV2ZW50VGFyZ2V0IHwgbnVsbClcbnR5cGUgT3B0aW9ucyA9IGJvb2xlYW4gfCBBZGRFdmVudExpc3RlbmVyT3B0aW9uc1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgRG9jdW1lbnRFdmVudE1hcD4oXG4gIHRhcmdldDogVGFyZ2V0LFxuICBldmVudDogSyxcbiAgaGFuZGxlcj86IChldmVudDogRG9jdW1lbnRFdmVudE1hcFtLXSkgPT4gdm9pZCxcbiAgb3B0aW9ucz86IE9wdGlvbnMsXG4pOiBWb2lkRnVuY3Rpb25cbmV4cG9ydCBmdW5jdGlvbiB1c2VFdmVudExpc3RlbmVyPEsgZXh0ZW5kcyBrZXlvZiBXaW5kb3dFdmVudE1hcD4oXG4gIHRhcmdldDogVGFyZ2V0LFxuICBldmVudDogSyxcbiAgaGFuZGxlcj86IChldmVudDogV2luZG93RXZlbnRNYXBbS10pID0+IHZvaWQsXG4gIG9wdGlvbnM/OiBPcHRpb25zLFxuKTogVm9pZEZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcjxLIGV4dGVuZHMga2V5b2YgR2xvYmFsRXZlbnRIYW5kbGVyc0V2ZW50TWFwPihcbiAgdGFyZ2V0OiBUYXJnZXQsXG4gIGV2ZW50OiBLLFxuICBoYW5kbGVyPzogKGV2ZW50OiBHbG9iYWxFdmVudEhhbmRsZXJzRXZlbnRNYXBbS10pID0+IHZvaWQsXG4gIG9wdGlvbnM/OiBPcHRpb25zLFxuKTogVm9pZEZ1bmN0aW9uXG5leHBvcnQgZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcihcbiAgdGFyZ2V0OiBUYXJnZXQsXG4gIGV2ZW50OiBzdHJpbmcsXG4gIGhhbmRsZXI6ICgoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkKSB8IHVuZGVmaW5lZCxcbiAgb3B0aW9ucz86IE9wdGlvbnMsXG4pIHtcbiAgY29uc3QgbGlzdGVuZXIgPSB1c2VDYWxsYmFja1JlZihoYW5kbGVyKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IHR5cGVvZiB0YXJnZXQgPT09IFwiZnVuY3Rpb25cIiA/IHRhcmdldCgpIDogdGFyZ2V0ID8/IGRvY3VtZW50XG5cbiAgICBpZiAoIWhhbmRsZXIgfHwgIW5vZGUpIHJldHVyblxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgICB9XG4gIH0sIFtldmVudCwgdGFyZ2V0LCBvcHRpb25zLCBsaXN0ZW5lciwgaGFuZGxlcl0pXG5cbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25zdCBub2RlID0gdHlwZW9mIHRhcmdldCA9PT0gXCJmdW5jdGlvblwiID8gdGFyZ2V0KCkgOiB0YXJnZXQgPz8gZG9jdW1lbnRcbiAgICBub2RlPy5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgb3B0aW9ucylcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@chakra-ui+react-use-event-listener@2.1.0_react@19.0.0-rc-02c0e824-20241028/node_modules/@chakra-ui/react-use-event-listener/dist/index.mjs\n");

/***/ })

};
;