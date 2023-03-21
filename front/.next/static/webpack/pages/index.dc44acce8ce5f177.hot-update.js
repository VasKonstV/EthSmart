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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ConnectWallet */ \"./components/ConnectWallet.js\");\n/* harmony import */ var _components_WaitForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WaitForTransactionMessage */ \"./components/WaitForTransactionMessage.js\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TransactionErrorMessage */ \"./components/TransactionErrorMessage.js\");\n/* harmony import */ var _contracts_DutchAuction_contract_address_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/DutchAuction-contract-address.json */ \"./contracts/DutchAuction-contract-address.json\");\n/* harmony import */ var _contracts_DutchAuction_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contracts/DutchAuction.json */ \"./contracts/DutchAuction.json\");\n\n\n\n\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"31337\";\nconst ERROR_CODE_TX_REJECTED_BY_USER = 4001;\nclass _class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    async _initialize(selectedAddress) {\n        this._provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.BrowserProvider(window.ethereum);\n        this._auction = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_contracts_DutchAuction_contract_address_json__WEBPACK_IMPORTED_MODULE_5__.DutchAuction, _contracts_DutchAuction_json__WEBPACK_IMPORTED_MODULE_6__.abi, await this._provider.getSigner(0));\n        this.setState({\n            selectedAccount: selectedAddress\n        }, async ()=>{\n            await this.updateBalance();\n        });\n        if (await this.updateStopped()) {\n            return;\n        }\n        this.startingPrice = await this._auction.startingPrice();\n        this.startAt = await this._auction.startAt() * 1n;\n        this.discountRate = await this._auction.discountRate();\n        this.checkPriceInterval = setInterval(()=>{\n            const now = ()=>BigInt(Math.floor(Date.now() / 1000));\n            const elapsed = now() - this.startAt;\n            let currentPrice = this._auction.getPrice();\n            let discount = this.discountRate * elapsed;\n            let newPrice = currentPrice - discount;\n            console.log(this.startingPrice);\n            this.setState({\n                currentPrice: ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.formatEther(newPrice)\n            });\n        }, 1000);\n    // const startBlockNumber = await this._provider.getBlockNumber()\n    // this._auction.on('Bought', (...args) => {\n    //   const event = args[args.length - 1]\n    //   if(event.blockNumber <= startBlockNumber) return\n    //   args[0], args[1]\n    // })\n    }\n    componentWillUnmount() {\n        clearInterval(this.checkPriceInterval);\n    }\n    async updateBalance() {\n        const newBalance = (await this._provider.getBalance(this.state.selectedAccount)).toString();\n        this.setState({\n            balance: newBalance\n        });\n    }\n    _resetState() {\n        this.setState(this.initialState);\n    }\n    _checkNetwork() {\n        if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        this.setState({\n            networkError: \"Please connect to localhost:8545\"\n        });\n        return false;\n    }\n    _getRpcErrorMessage(error) {\n        if (error.data) {\n            return error.data.message;\n        }\n        return error.message;\n    }\n    render() {\n        if (!this.state.selectedAccount) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__.ConnectWallet, {\n                connectWallet: this._connectWallet,\n                networkError: this.state.networkError,\n                dismiss: this._dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 200,\n                columnNumber: 14\n            }, this);\n        }\n        if (this.state.stopped) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Auction stopped.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 208,\n                columnNumber: 14\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                this.state.txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__.WaitingForTransactionMessage, {\n                    txHash: this.state.txBeingSent\n                }, void 0, false, {\n                    fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 214,\n                    columnNumber: 11\n                }, this),\n                this.state.transactionError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__.TransactionErrorMessage, {\n                    message: this._getRpcErrorMessage(this.state.transactionError),\n                    dismiss: this._dismissTransactionError\n                }, void 0, false, {\n                    fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 218,\n                    columnNumber: 11\n                }, this),\n                this.state.balance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your balance: \",\n                        ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.formatEther(this.state.balance),\n                        \" ETH\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 225,\n                    columnNumber: 11\n                }, this),\n                this.state.currentPrice && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Current item price: \",\n                                this.state.currentPrice,\n                                \" ETH\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 229,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: this.buy,\n                            children: \"Buy!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 230,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 228,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"_connectWallet\", async ()=>{\n            if (window.ethereum === undefined) {\n                this.setState({\n                    networkError: \"Please install Metamask!\"\n                });\n                return;\n            }\n            const [selectedAddress] = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            if (!this._checkNetwork()) {\n                return;\n            }\n            this._initialize(selectedAddress);\n            window.ethereum.on(\"accountsChanged\", (param)=>{\n                let [newAddress] = param;\n                if (newAddress === undefined) {\n                    return this._resetState();\n                }\n                this._initialize(newAddress);\n            });\n            window.ethereum.on(\"chainChanged\", (param)=>{\n                let [networkId] = param;\n                this._resetState();\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"updateStopped\", async ()=>{\n            const stopped = await this._auction.stopped();\n            if (stopped) {\n                clearInterval(this.checkPriceInterval);\n            }\n            this.setState({\n                stopped: stopped\n            });\n            return stopped;\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"_dismissNetworkError\", ()=>{\n            this.setState({\n                networkError: null\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"_dismissTransactionError\", ()=>{\n            this.setState({\n                transactionError: null\n            });\n        });\n        // nextBlock = async() => {\n        //   await this._auction.nextBlock()\n        // }\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"buy\", async ()=>{\n            //console.log((ethers.parseEther(this.state.currentPrice + 1)).toString())\n            try {\n                const tx = await this._auction.buy({\n                    value: ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.parseEther(this.state.currentPrice)\n                });\n                this.setState({\n                    txBeingSent: tx.hash\n                });\n                await tx.wait();\n            } catch (error) {\n                if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {\n                    return;\n                }\n                console.error(error);\n                this.setState({\n                    transactionError: error\n                });\n            } finally{\n                this.setState({\n                    txBeingSent: null\n                });\n                await this.updateBalance();\n                await this.updateStopped();\n            }\n        });\n        this.initialState = {\n            selectedAccount: null,\n            txBeingSent: null,\n            networkError: null,\n            transactionError: null,\n            balance: null,\n            currentPrice: null,\n            stopped: false\n        };\n        this.state = this.initialState;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxPQUFBQSxPQUFNLFVBQVc7WUFDZiwwRUFBMEU7WUFDMUUsSUFBSTtnQkFDRixNQUFNUyxLQUFLLE1BQU0sSUFBSSxDQUFDbEUsUUFBUSxDQUFDeUQsR0FBRyxDQUFDO29CQUNqQ1UsT0FBT2pGLHFEQUFpQixDQUFDLElBQUksQ0FBQzZDLEtBQUssQ0FBQ1gsWUFBWTtnQkFDbEQ7Z0JBRUEsSUFBSSxDQUFDZixRQUFRLENBQUM7b0JBQ1o2QyxhQUFhZ0IsR0FBR0csSUFBSTtnQkFDdEI7Z0JBRUEsTUFBTUgsR0FBR0ksSUFBSTtZQUNmLEVBQUUsT0FBTTlCLE9BQU87Z0JBQ2IsSUFBR0EsTUFBTStCLElBQUksS0FBSzlFLGdDQUFnQztvQkFBRTtnQkFBTyxDQUFDO2dCQUU1RCtCLFFBQVFnQixLQUFLLENBQUNBO2dCQUVkLElBQUksQ0FBQ25DLFFBQVEsQ0FBQztvQkFDWitDLGtCQUFrQlo7Z0JBQ3BCO1lBQ0YsU0FBVTtnQkFDUixJQUFJLENBQUNuQyxRQUFRLENBQUM7b0JBQ1o2QyxhQUFhLElBQUk7Z0JBQ25CO2dCQUNBLE1BQU0sSUFBSSxDQUFDM0MsYUFBYTtnQkFDeEIsTUFBTSxJQUFJLENBQUNDLGFBQWE7WUFDMUI7UUFDRjtRQTFLRSxJQUFJLENBQUMyQixZQUFZLEdBQUc7WUFDbEI3QixpQkFBaUIsSUFBSTtZQUNyQjRDLGFBQWEsSUFBSTtZQUNqQlosY0FBYyxJQUFJO1lBQ2xCYyxrQkFBa0IsSUFBSTtZQUN0Qm5CLFNBQVMsSUFBSTtZQUNiYixjQUFjLElBQUk7WUFDbEI0QixTQUFTLEtBQUs7UUFDaEI7UUFFQSxJQUFJLENBQUNqQixLQUFLLEdBQUcsSUFBSSxDQUFDSSxZQUFZO0lBQ2hDO0FBOE1GO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuXHJcbmltcG9ydCB7IENvbm5lY3RXYWxsZXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQnXHJcbmltcG9ydCB7IFdhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL1dhaXRGb3JUcmFuc2FjdGlvbk1lc3NhZ2UnXHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2FjdGlvbkVycm9yTWVzc2FnZSdcclxuXHJcbmltcG9ydCBhdWN0aW9uQWRkcmVzcyBmcm9tICcuLi9jb250cmFjdHMvRHV0Y2hBdWN0aW9uLWNvbnRyYWN0LWFkZHJlc3MuanNvbidcclxuaW1wb3J0IGF1Y3Rpb25BcnRpZmFjdCBmcm9tICcuLi9jb250cmFjdHMvRHV0Y2hBdWN0aW9uLmpzb24nXHJcblxyXG5jb25zdCBIQVJESEFUX05FVFdPUktfSUQgPSAnMzEzMzcnXHJcbmNvbnN0IEVSUk9SX0NPREVfVFhfUkVKRUNURURfQllfVVNFUiA9IDQwMDFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIHNlbGVjdGVkQWNjb3VudDogbnVsbCxcclxuICAgICAgdHhCZWluZ1NlbnQ6IG51bGwsXHJcbiAgICAgIG5ldHdvcmtFcnJvcjogbnVsbCxcclxuICAgICAgdHJhbnNhY3Rpb25FcnJvcjogbnVsbCxcclxuICAgICAgYmFsYW5jZTogbnVsbCxcclxuICAgICAgY3VycmVudFByaWNlOiBudWxsLFxyXG4gICAgICBzdG9wcGVkOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGVcclxuICB9XHJcblxyXG4gIF9jb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYod2luZG93LmV0aGVyZXVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbmV0d29ya0Vycm9yOiAnUGxlYXNlIGluc3RhbGwgTWV0YW1hc2shJ1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRBZGRyZXNzXSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cydcclxuICAgIH0pXHJcblxyXG4gICAgaWYoIXRoaXMuX2NoZWNrTmV0d29yaygpKSB7IHJldHVybiB9XHJcblxyXG4gICAgdGhpcy5faW5pdGlhbGl6ZShzZWxlY3RlZEFkZHJlc3MpXHJcblxyXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCAoW25ld0FkZHJlc3NdKSA9PiB7XHJcbiAgICAgIGlmKG5ld0FkZHJlc3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNldFN0YXRlKClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZShuZXdBZGRyZXNzKVxyXG4gICAgfSlcclxuXHJcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIChbbmV0d29ya0lkXSkgPT4ge1xyXG4gICAgICB0aGlzLl9yZXNldFN0YXRlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBfaW5pdGlhbGl6ZShzZWxlY3RlZEFkZHJlc3MpIHtcclxuICAgIHRoaXMuX3Byb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxyXG5cclxuXHJcbiAgICB0aGlzLl9hdWN0aW9uID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgYXVjdGlvbkFkZHJlc3MuRHV0Y2hBdWN0aW9uLFxyXG4gICAgICBhdWN0aW9uQXJ0aWZhY3QuYWJpLFxyXG4gICAgICBhd2FpdCB0aGlzLl9wcm92aWRlci5nZXRTaWduZXIoMClcclxuICAgIClcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRBY2NvdW50OiBzZWxlY3RlZEFkZHJlc3NcclxuICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVCYWxhbmNlKClcclxuICAgIH0pXHJcblxyXG4gICAgaWYoYXdhaXQgdGhpcy51cGRhdGVTdG9wcGVkKCkpIHsgcmV0dXJuIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0aW5nUHJpY2UgPSBhd2FpdCB0aGlzLl9hdWN0aW9uLnN0YXJ0aW5nUHJpY2UoKVxyXG4gICAgdGhpcy5zdGFydEF0ID0gKGF3YWl0IHRoaXMuX2F1Y3Rpb24uc3RhcnRBdCgpKSoxblxyXG4gICAgdGhpcy5kaXNjb3VudFJhdGUgPSBhd2FpdCB0aGlzLl9hdWN0aW9uLmRpc2NvdW50UmF0ZSgpXHJcblxyXG4gICAgdGhpcy5jaGVja1ByaWNlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm93ID0gKCkgPT4gQmlnSW50KE1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKSlcclxuICAgICAgICBjb25zdCBlbGFwc2VkID0gbm93KCkgLSB0aGlzLnN0YXJ0QXRcclxuICAgICAgICBsZXQgY3VycmVudFByaWNlID0gdGhpcy5fYXVjdGlvbi5nZXRQcmljZSgpXHJcbiAgICAgICAgbGV0IGRpc2NvdW50ID0gdGhpcy5kaXNjb3VudFJhdGUqZWxhcHNlZFxyXG4gICAgICAgIGxldCBuZXdQcmljZSA9IGN1cnJlbnRQcmljZSAtIGRpc2NvdW50XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGFydGluZ1ByaWNlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY3VycmVudFByaWNlOiBldGhlcnMuZm9ybWF0RXRoZXIobmV3UHJpY2UpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIDEwMDApXHJcblxyXG4gICAgLy8gY29uc3Qgc3RhcnRCbG9ja051bWJlciA9IGF3YWl0IHRoaXMuX3Byb3ZpZGVyLmdldEJsb2NrTnVtYmVyKClcclxuICAgIC8vIHRoaXMuX2F1Y3Rpb24ub24oJ0JvdWdodCcsICguLi5hcmdzKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICAvLyAgIGlmKGV2ZW50LmJsb2NrTnVtYmVyIDw9IHN0YXJ0QmxvY2tOdW1iZXIpIHJldHVyblxyXG5cclxuICAgIC8vICAgYXJnc1swXSwgYXJnc1sxXVxyXG4gICAgLy8gfSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0b3BwZWQgPSBhc3luYygpID0+IHtcclxuICAgIGNvbnN0IHN0b3BwZWQgPSBhd2FpdCB0aGlzLl9hdWN0aW9uLnN0b3BwZWQoKVxyXG5cclxuICAgIGlmKHN0b3BwZWQpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNoZWNrUHJpY2VJbnRlcnZhbClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3RvcHBlZDogc3RvcHBlZFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc3RvcHBlZFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2hlY2tQcmljZUludGVydmFsKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlQmFsYW5jZSgpIHtcclxuICAgIGNvbnN0IG5ld0JhbGFuY2UgPSAoYXdhaXQgdGhpcy5fcHJvdmlkZXIuZ2V0QmFsYW5jZShcclxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEFjY291bnRcclxuICAgICkpLnRvU3RyaW5nKClcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYmFsYW5jZTogbmV3QmFsYW5jZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9yZXNldFN0YXRlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSlcclxuICB9XHJcblxyXG4gIF9jaGVja05ldHdvcmsoKSB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uID09PSBIQVJESEFUX05FVFdPUktfSUQpIHsgcmV0dXJuIHRydWUgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuZXR3b3JrRXJyb3I6ICdQbGVhc2UgY29ubmVjdCB0byBsb2NhbGhvc3Q6ODU0NSdcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBfZGlzbWlzc05ldHdvcmtFcnJvciA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuZXR3b3JrRXJyb3I6IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBfZGlzbWlzc1RyYW5zYWN0aW9uRXJyb3IgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdHJhbnNhY3Rpb25FcnJvcjogbnVsbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIG5leHRCbG9jayA9IGFzeW5jKCkgPT4ge1xyXG4gIC8vICAgYXdhaXQgdGhpcy5fYXVjdGlvbi5uZXh0QmxvY2soKVxyXG4gIC8vIH1cclxuXHJcbiAgYnV5ID0gYXN5bmMoKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKChldGhlcnMucGFyc2VFdGhlcih0aGlzLnN0YXRlLmN1cnJlbnRQcmljZSArIDEpKS50b1N0cmluZygpKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdHggPSBhd2FpdCB0aGlzLl9hdWN0aW9uLmJ1eSh7XHJcbiAgICAgICAgdmFsdWU6IGV0aGVycy5wYXJzZUV0aGVyKHRoaXMuc3RhdGUuY3VycmVudFByaWNlKVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdHhCZWluZ1NlbnQ6IHR4Lmhhc2hcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGF3YWl0IHR4LndhaXQoKVxyXG4gICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICBpZihlcnJvci5jb2RlID09PSBFUlJPUl9DT0RFX1RYX1JFSkVDVEVEX0JZX1VTRVIpIHsgcmV0dXJuIH1cclxuXHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcblxyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB0cmFuc2FjdGlvbkVycm9yOiBlcnJvclxyXG4gICAgICB9KVxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdHhCZWluZ1NlbnQ6IG51bGxcclxuICAgICAgfSlcclxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVCYWxhbmNlKClcclxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVTdG9wcGVkKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9nZXRScGNFcnJvck1lc3NhZ2UoZXJyb3IpIHtcclxuICAgIGlmIChlcnJvci5kYXRhKSB7XHJcbiAgICAgIHJldHVybiBlcnJvci5kYXRhLm1lc3NhZ2VcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYoIXRoaXMuc3RhdGUuc2VsZWN0ZWRBY2NvdW50KSB7XHJcbiAgICAgIHJldHVybiA8Q29ubmVjdFdhbGxldFxyXG4gICAgICAgIGNvbm5lY3RXYWxsZXQ9e3RoaXMuX2Nvbm5lY3RXYWxsZXR9XHJcbiAgICAgICAgbmV0d29ya0Vycm9yPXt0aGlzLnN0YXRlLm5ldHdvcmtFcnJvcn1cclxuICAgICAgICBkaXNtaXNzPXt0aGlzLl9kaXNtaXNzTmV0d29ya0Vycm9yfVxyXG4gICAgICAvPlxyXG4gICAgfVxyXG5cclxuICAgIGlmKHRoaXMuc3RhdGUuc3RvcHBlZCkge1xyXG4gICAgICByZXR1cm4gPHA+QXVjdGlvbiBzdG9wcGVkLjwvcD5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RoaXMuc3RhdGUudHhCZWluZ1NlbnQgJiYgKFxyXG4gICAgICAgICAgPFdhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UgdHhIYXNoPXt0aGlzLnN0YXRlLnR4QmVpbmdTZW50fSAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnRyYW5zYWN0aW9uRXJyb3IgJiYgKFxyXG4gICAgICAgICAgPFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlXHJcbiAgICAgICAgICAgIG1lc3NhZ2U9e3RoaXMuX2dldFJwY0Vycm9yTWVzc2FnZSh0aGlzLnN0YXRlLnRyYW5zYWN0aW9uRXJyb3IpfVxyXG4gICAgICAgICAgICBkaXNtaXNzPXt0aGlzLl9kaXNtaXNzVHJhbnNhY3Rpb25FcnJvcn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3RoaXMuc3RhdGUuYmFsYW5jZSAmJlxyXG4gICAgICAgICAgPHA+WW91ciBiYWxhbmNlOiB7ZXRoZXJzLmZvcm1hdEV0aGVyKHRoaXMuc3RhdGUuYmFsYW5jZSl9IEVUSDwvcD59XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmN1cnJlbnRQcmljZSAmJlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+Q3VycmVudCBpdGVtIHByaWNlOiB7dGhpcy5zdGF0ZS5jdXJyZW50UHJpY2V9IEVUSDwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmJ1eX0+QnV5ITwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+fVxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJldGhlcnMiLCJDb25uZWN0V2FsbGV0IiwiV2FpdGluZ0ZvclRyYW5zYWN0aW9uTWVzc2FnZSIsIlRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIiwiYXVjdGlvbkFkZHJlc3MiLCJhdWN0aW9uQXJ0aWZhY3QiLCJIQVJESEFUX05FVFdPUktfSUQiLCJFUlJPUl9DT0RFX1RYX1JFSkVDVEVEX0JZX1VTRVIiLCJfaW5pdGlhbGl6ZSIsInNlbGVjdGVkQWRkcmVzcyIsIl9wcm92aWRlciIsIkJyb3dzZXJQcm92aWRlciIsIndpbmRvdyIsImV0aGVyZXVtIiwiX2F1Y3Rpb24iLCJDb250cmFjdCIsIkR1dGNoQXVjdGlvbiIsImFiaSIsImdldFNpZ25lciIsInNldFN0YXRlIiwic2VsZWN0ZWRBY2NvdW50IiwidXBkYXRlQmFsYW5jZSIsInVwZGF0ZVN0b3BwZWQiLCJzdGFydGluZ1ByaWNlIiwic3RhcnRBdCIsImRpc2NvdW50UmF0ZSIsImNoZWNrUHJpY2VJbnRlcnZhbCIsInNldEludGVydmFsIiwibm93IiwiQmlnSW50IiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImVsYXBzZWQiLCJjdXJyZW50UHJpY2UiLCJnZXRQcmljZSIsImRpc2NvdW50IiwibmV3UHJpY2UiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0RXRoZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJuZXdCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInN0YXRlIiwidG9TdHJpbmciLCJiYWxhbmNlIiwiX3Jlc2V0U3RhdGUiLCJpbml0aWFsU3RhdGUiLCJfY2hlY2tOZXR3b3JrIiwibmV0d29ya1ZlcnNpb24iLCJuZXR3b3JrRXJyb3IiLCJfZ2V0UnBjRXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInJlbmRlciIsImNvbm5lY3RXYWxsZXQiLCJfY29ubmVjdFdhbGxldCIsImRpc21pc3MiLCJfZGlzbWlzc05ldHdvcmtFcnJvciIsInN0b3BwZWQiLCJwIiwidHhCZWluZ1NlbnQiLCJ0eEhhc2giLCJ0cmFuc2FjdGlvbkVycm9yIiwiX2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImJ1eSIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwib24iLCJuZXdBZGRyZXNzIiwibmV0d29ya0lkIiwidHgiLCJ2YWx1ZSIsInBhcnNlRXRoZXIiLCJoYXNoIiwid2FpdCIsImNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});