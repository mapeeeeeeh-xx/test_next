"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   registerUser: function() { return /* binding */ registerUser; }\n/* harmony export */ });\n/* harmony import */ var _app_api_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/api/routes */ \"(app-pages-browser)/./app/api/routes.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.7.7/node_modules/axios/lib/axios.js\");\n// lib/auth.ts\n\n\nasync function loginUser(identifier, password) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(_app_api_routes__WEBPACK_IMPORTED_MODULE_0__.loginAPIURL, {\n            identifier,\n            password\n        });\n        return response;\n    } catch (error) {\n        throw new Error(\"Login failed\");\n    }\n}\nasync function registerUser(email, username, password) {\n    try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(_app_api_routes__WEBPACK_IMPORTED_MODULE_0__.registerAPIURL, {\n            email,\n            username,\n            password\n        });\n        return response.data;\n    } catch (error) {\n        throw new Error(\"Registration failed\");\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxjQUFjO0FBRWlEO0FBQ3JDO0FBRW5CLGVBQWVHLFVBQVVDLFVBQWtCLEVBQUVDLFFBQWdCO0lBQ2xFLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLDZDQUFLQSxDQUFDSyxJQUFJLENBQUNQLHdEQUFXQSxFQUFFO1lBQUVJO1lBQVlDO1FBQVM7UUFDdEUsT0FBT0M7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZCxNQUFNLElBQUlDLE1BQU07SUFDbEI7QUFDRjtBQUVPLGVBQWVDLGFBQWFDLEtBQWEsRUFBRUMsUUFBZ0IsRUFBRVAsUUFBZ0I7SUFDbEYsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTUosNkNBQUtBLENBQUNLLElBQUksQ0FBQ04sMkRBQWNBLEVBQUU7WUFBRVU7WUFBT0M7WUFBVVA7UUFBUztRQUM5RSxPQUFPQyxTQUFTTyxJQUFJO0lBQ3RCLEVBQUUsT0FBT0wsT0FBTztRQUNkLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGliL2F1dGgudHNcblxuaW1wb3J0IHsgbG9naW5BUElVUkwsIHJlZ2lzdGVyQVBJVVJMIH0gZnJvbSAnQC9hcHAvYXBpL3JvdXRlcyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5Vc2VyKGlkZW50aWZpZXI6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChsb2dpbkFQSVVSTCwgeyBpZGVudGlmaWVyLCBwYXNzd29yZCB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2dpbiBmYWlsZWQnKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXJVc2VyKGVtYWlsOiBzdHJpbmcsIHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QocmVnaXN0ZXJBUElVUkwsIHsgZW1haWwsIHVzZXJuYW1lLCBwYXNzd29yZCB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZ2lzdHJhdGlvbiBmYWlsZWQnKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImxvZ2luQVBJVVJMIiwicmVnaXN0ZXJBUElVUkwiLCJheGlvcyIsImxvZ2luVXNlciIsImlkZW50aWZpZXIiLCJwYXNzd29yZCIsInJlc3BvbnNlIiwicG9zdCIsImVycm9yIiwiRXJyb3IiLCJyZWdpc3RlclVzZXIiLCJlbWFpbCIsInVzZXJuYW1lIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/auth.ts\n"));

/***/ })

});