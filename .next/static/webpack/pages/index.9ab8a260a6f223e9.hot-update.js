"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/plansEducationAboutUs/plans/desktopPlans/StarterPlan.tsx":
/*!*********************************************************************************!*\
  !*** ./src/components/plansEducationAboutUs/plans/desktopPlans/StarterPlan.tsx ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _shared_PlanCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/PlanCard */ \"./src/components/shared/PlanCard.tsx\");\n/* harmony import */ var _shared_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/Accordion */ \"./src/components/shared/Accordion.tsx\");\n/* harmony import */ var _shared_LearnMoreAccordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/LearnMoreAccordion */ \"./src/components/shared/LearnMoreAccordion.tsx\");\n/* harmony import */ var _plansdata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plansdata */ \"./src/components/plansEducationAboutUs/plans/plansdata.ts\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar StarterPlan = function(param) {\n    var item1 = param.item1, item2 = param.item2, item3 = param.item3, item4 = param.item4, item5 = param.item5, item6 = param.item6;\n    _s();\n    var _useState = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), learnMoreOpen = _useState[0], setLearnMoreOpen = _useState[1];\n    // Helper function to toggle Learn More\n    var toggleLearnMore = function() {\n        setLearnMoreOpen(!learnMoreOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n            sx: {\n                display: {\n                    xs: \"none\",\n                    sm: \"none\",\n                    md: \"block\",\n                    lg: \"block\",\n                    xl: \"block\"\n                }\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_PlanCard__WEBPACK_IMPORTED_MODULE_2__.PlanCardMobile, {\n                title: \"Explorer\",\n                type: \"FREE\",\n                lowertext: \"(limited availability)\",\n                buttonTitle: \"Sign up now\",\n                features: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        padding: \"0px 15px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_LearnMoreAccordion__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            title: \"Learn More\",\n                            description: \"\",\n                            isOpen: learnMoreOpen,\n                            onClick: toggleLearnMore\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Work\\\\Office\\\\www\\\\Next JS\\\\DEFI-LOGIC-main\\\\src\\\\components\\\\plansEducationAboutUs\\\\plans\\\\desktopPlans\\\\StarterPlan.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 7\n                        }, _this),\n                        Object.keys(_plansdata__WEBPACK_IMPORTED_MODULE_5__.StarterData).map(function(featureKey) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: learnMoreOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_shared_Accordion__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    title: _plansdata__WEBPACK_IMPORTED_MODULE_5__.StarterData[featureKey].title,\n                                    description: _plansdata__WEBPACK_IMPORTED_MODULE_5__.StarterData[featureKey].details,\n                                    isOpen: true,\n                                    borderBottom: true\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Work\\\\Office\\\\www\\\\Next JS\\\\DEFI-LOGIC-main\\\\src\\\\components\\\\plansEducationAboutUs\\\\plans\\\\desktopPlans\\\\StarterPlan.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 10\n                                }, _this)\n                            }, featureKey, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Work\\\\Office\\\\www\\\\Next JS\\\\DEFI-LOGIC-main\\\\src\\\\components\\\\plansEducationAboutUs\\\\plans\\\\desktopPlans\\\\StarterPlan.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 8\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Work\\\\Office\\\\www\\\\Next JS\\\\DEFI-LOGIC-main\\\\src\\\\components\\\\plansEducationAboutUs\\\\plans\\\\desktopPlans\\\\StarterPlan.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 6\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Work\\\\Office\\\\www\\\\Next JS\\\\DEFI-LOGIC-main\\\\src\\\\components\\\\plansEducationAboutUs\\\\plans\\\\desktopPlans\\\\StarterPlan.tsx\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Work\\\\Office\\\\www\\\\Next JS\\\\DEFI-LOGIC-main\\\\src\\\\components\\\\plansEducationAboutUs\\\\plans\\\\desktopPlans\\\\StarterPlan.tsx\",\n            lineNumber: 34,\n            columnNumber: 4\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Desktop\\\\Work\\\\Office\\\\www\\\\Next JS\\\\DEFI-LOGIC-main\\\\src\\\\components\\\\plansEducationAboutUs\\\\plans\\\\desktopPlans\\\\StarterPlan.tsx\",\n        lineNumber: 33,\n        columnNumber: 3\n    }, _this);\n};\n_s(StarterPlan, \"uxetIb6P0yiqK8RB0oOUKXY6vL8=\");\n_c = StarterPlan;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StarterPlan);\nvar _c;\n$RefreshReg$(_c, \"StarterPlan\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wbGFuc0VkdWNhdGlvbkFib3V0VXMvcGxhbnMvZGVza3RvcFBsYW5zL1N0YXJ0ZXJQbGFuLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQTRDO0FBQ1I7QUFDZ0M7QUFDbEI7QUFDa0I7QUFDbkI7QUFXakQsSUFBTU8sY0FBb0MsZ0JBT3BDO1FBTkxDLGNBQUFBLE9BQ0FDLGNBQUFBLE9BQ0FDLGNBQUFBLE9BQ0FDLGNBQUFBLE9BQ0FDLGNBQUFBLE9BQ0FDLGNBQUFBOztJQUVBLElBQTBDWixZQUFBQSxnRkFBQUEsQ0FBQUEsK0NBQVFBLENBQVUsS0FBSyxPQUExRGEsZ0JBQW1DYixjQUFwQmMsbUJBQW9CZDtJQUUxQyx1Q0FBdUM7SUFDdkMsSUFBTWUsa0JBQWtCLFdBQU07UUFDN0JELGlCQUFpQixDQUFDRDtJQUNuQjtJQUVBLHFCQUNDLDhEQUFDZCx1REFBYztrQkFDZCw0RUFBQ0UsOENBQUdBO1lBQ0hnQixJQUFJO2dCQUNIQyxTQUFTO29CQUNSQyxJQUFJO29CQUNKQyxJQUFJO29CQUNKQyxJQUFJO29CQUNKQyxJQUFJO29CQUNKQyxJQUFJO2dCQUNMO1lBQ0Q7c0JBRUEsNEVBQUNyQiw0REFBY0E7Z0JBQ2RzQixPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxXQUFVO2dCQUNWQyxhQUFZO2dCQUNaQyxVQUFTOzBCQUVULDRFQUFDQztvQkFBSUMsT0FBTzt3QkFBRUMsU0FBUztvQkFBVzs7c0NBQ2pDLDhEQUFDM0Isa0VBQWtCQTs0QkFDbEJvQixPQUFNOzRCQUNOUSxhQUFZOzRCQUNaQyxRQUFRcEI7NEJBQ1JxQixTQUFTbkI7Ozs7Ozt3QkFFVG9CLE9BQU9DLElBQUksQ0FBQy9CLG1EQUFXQSxFQUFFZ0MsR0FBRyxDQUFDLFNBQUNDO2lEQUM5Qiw4REFBQ1Q7MENBQ0NoQiwrQkFDQSw4REFBQ1YseURBQVNBO29DQUNUcUIsT0FBT25CLG1EQUFXLENBQUNpQyxXQUFXLENBQUNkLEtBQUs7b0NBQ3BDUSxhQUFhM0IsbURBQVcsQ0FBQ2lDLFdBQVcsQ0FBQ0MsT0FBTztvQ0FDNUNOLFFBQVEsSUFBSTtvQ0FDWk8sWUFBWTs7Ozs7OytCQU5MRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JqQjtHQTNETWhDO0tBQUFBO0FBNkROLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BsYW5zRWR1Y2F0aW9uQWJvdXRVcy9wbGFucy9kZXNrdG9wUGxhbnMvU3RhcnRlclBsYW4udHN4P2MzZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCBQbGFuQ2FyZCwgeyBQbGFuQ2FyZE1vYmlsZSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvUGxhbkNhcmRcIjtcbmltcG9ydCBBY2NvcmRpb24gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9BY2NvcmRpb25cIjtcbmltcG9ydCBMZWFybk1vcmVBY2NvcmRpb24gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9MZWFybk1vcmVBY2NvcmRpb25cIjtcbmltcG9ydCBkYXRhLCB7IFN0YXJ0ZXJEYXRhIH0gZnJvbSBcIi4uL3BsYW5zZGF0YVwiO1xuXG5pbnRlcmZhY2UgU3RhcnRlclBsYW5Qcm9wcyB7XG5cdGl0ZW0xOiBib29sZWFuO1xuXHRpdGVtMjogYm9vbGVhbjtcblx0aXRlbTM6IGJvb2xlYW47XG5cdGl0ZW00OiBib29sZWFuO1xuXHRpdGVtNTogYm9vbGVhbjtcblx0aXRlbTY6IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0YXJ0ZXJQbGFuOiBGQzxTdGFydGVyUGxhblByb3BzPiA9ICh7XG5cdGl0ZW0xLFxuXHRpdGVtMixcblx0aXRlbTMsXG5cdGl0ZW00LFxuXHRpdGVtNSxcblx0aXRlbTYsXG59KSA9PiB7XG5cdGNvbnN0IFtsZWFybk1vcmVPcGVuLCBzZXRMZWFybk1vcmVPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gdG9nZ2xlIExlYXJuIE1vcmVcblx0Y29uc3QgdG9nZ2xlTGVhcm5Nb3JlID0gKCkgPT4ge1xuXHRcdHNldExlYXJuTW9yZU9wZW4oIWxlYXJuTW9yZU9wZW4pO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0PEJveFxuXHRcdFx0XHRzeD17e1xuXHRcdFx0XHRcdGRpc3BsYXk6IHtcblx0XHRcdFx0XHRcdHhzOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdHNtOiBcIm5vbmVcIixcblx0XHRcdFx0XHRcdG1kOiBcImJsb2NrXCIsXG5cdFx0XHRcdFx0XHRsZzogXCJibG9ja1wiLFxuXHRcdFx0XHRcdFx0eGw6IFwiYmxvY2tcIixcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8UGxhbkNhcmRNb2JpbGVcblx0XHRcdFx0XHR0aXRsZT1cIkV4cGxvcmVyXCJcblx0XHRcdFx0XHR0eXBlPVwiRlJFRVwiXG5cdFx0XHRcdFx0bG93ZXJ0ZXh0PVwiKGxpbWl0ZWQgYXZhaWxhYmlsaXR5KVwiXG5cdFx0XHRcdFx0YnV0dG9uVGl0bGU9XCJTaWduIHVwIG5vd1wiXG5cdFx0XHRcdFx0ZmVhdHVyZXM9XCJcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjBweCAxNXB4XCIgfX0+XG5cdFx0XHRcdFx0XHQ8TGVhcm5Nb3JlQWNjb3JkaW9uXG5cdFx0XHRcdFx0XHRcdHRpdGxlPVwiTGVhcm4gTW9yZVwiXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPVwiXCJcblx0XHRcdFx0XHRcdFx0aXNPcGVuPXtsZWFybk1vcmVPcGVufVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVMZWFybk1vcmV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKFN0YXJ0ZXJEYXRhKS5tYXAoKGZlYXR1cmVLZXkpID0+IChcblx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2ZlYXR1cmVLZXl9PlxuXHRcdFx0XHRcdFx0XHRcdHtsZWFybk1vcmVPcGVuICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxBY2NvcmRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9e1N0YXJ0ZXJEYXRhW2ZlYXR1cmVLZXldLnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj17U3RhcnRlckRhdGFbZmVhdHVyZUtleV0uZGV0YWlsc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNPcGVuPXt0cnVlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRib3JkZXJCb3R0b21cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9QbGFuQ2FyZE1vYmlsZT5cblx0XHRcdDwvQm94PlxuXHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFydGVyUGxhbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiUGxhbkNhcmRNb2JpbGUiLCJBY2NvcmRpb24iLCJMZWFybk1vcmVBY2NvcmRpb24iLCJTdGFydGVyRGF0YSIsIlN0YXJ0ZXJQbGFuIiwiaXRlbTEiLCJpdGVtMiIsIml0ZW0zIiwiaXRlbTQiLCJpdGVtNSIsIml0ZW02IiwibGVhcm5Nb3JlT3BlbiIsInNldExlYXJuTW9yZU9wZW4iLCJ0b2dnbGVMZWFybk1vcmUiLCJGcmFnbWVudCIsInN4IiwiZGlzcGxheSIsInhzIiwic20iLCJtZCIsImxnIiwieGwiLCJ0aXRsZSIsInR5cGUiLCJsb3dlcnRleHQiLCJidXR0b25UaXRsZSIsImZlYXR1cmVzIiwiZGl2Iiwic3R5bGUiLCJwYWRkaW5nIiwiZGVzY3JpcHRpb24iLCJpc09wZW4iLCJvbkNsaWNrIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImZlYXR1cmVLZXkiLCJkZXRhaWxzIiwiYm9yZGVyQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/plansEducationAboutUs/plans/desktopPlans/StarterPlan.tsx\n"));

/***/ })

});