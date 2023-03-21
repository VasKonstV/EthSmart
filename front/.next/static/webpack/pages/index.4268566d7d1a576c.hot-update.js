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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _class; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ConnectWallet */ \"./components/ConnectWallet.js\");\n/* harmony import */ var _components_WaitForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/WaitForTransactionMessage */ \"./components/WaitForTransactionMessage.js\");\n/* harmony import */ var _components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/TransactionErrorMessage */ \"./components/TransactionErrorMessage.js\");\n/* harmony import */ var _contracts_DutchAuction_contract_address_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/DutchAuction-contract-address.json */ \"./contracts/DutchAuction-contract-address.json\");\n/* harmony import */ var _contracts_DutchAuction_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contracts/DutchAuction.json */ \"./contracts/DutchAuction.json\");\n\n\n\n\n\n\n\n\n\nconst HARDHAT_NETWORK_ID = \"31337\";\nconst ERROR_CODE_TX_REJECTED_BY_USER = 4001;\nclass _class extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n    async _initialize(selectedAddress) {\n        this._provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.BrowserProvider(window.ethereum);\n        this._auction = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_contracts_DutchAuction_contract_address_json__WEBPACK_IMPORTED_MODULE_5__.DutchAuction, _contracts_DutchAuction_json__WEBPACK_IMPORTED_MODULE_6__.abi, await this._provider.getSigner(0));\n        this.setState({\n            selectedAccount: selectedAddress\n        }, async ()=>{\n            await this.updateBalance();\n        });\n        if (await this.updateStopped()) {\n            return;\n        }\n        this.startingPrice = await this._auction.startingPrice();\n        this.startAt = await this._auction.startAt() * 1n;\n        this.discountRate = await this._auction.discountRate();\n        this.checkPriceInterval = setInterval(async ()=>{\n            const now = ()=>BigInt(Math.floor(Date.now() / 1000));\n            const elapsed = now() - this.startAt;\n            let currentPrice = await this._auction.getPrice();\n            alert(currentPrice);\n            let discount = this.discountRate * elapsed;\n            let newPrice = currentPrice - discount;\n            console.log(this.startingPrice);\n            this.setState({\n                currentPrice: ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.formatEther(newPrice)\n            });\n        }, 1000);\n    // const startBlockNumber = await this._provider.getBlockNumber()\n    // this._auction.on('Bought', (...args) => {\n    //   const event = args[args.length - 1]\n    //   if(event.blockNumber <= startBlockNumber) return\n    //   args[0], args[1]\n    // })\n    }\n    componentWillUnmount() {\n        clearInterval(this.checkPriceInterval);\n    }\n    async updateBalance() {\n        const newBalance = (await this._provider.getBalance(this.state.selectedAccount)).toString();\n        this.setState({\n            balance: newBalance\n        });\n    }\n    _resetState() {\n        this.setState(this.initialState);\n    }\n    _checkNetwork() {\n        if (window.ethereum.networkVersion === HARDHAT_NETWORK_ID) {\n            return true;\n        }\n        this.setState({\n            networkError: \"Please connect to localhost:8545\"\n        });\n        return false;\n    }\n    _getRpcErrorMessage(error) {\n        if (error.data) {\n            return error.data.message;\n        }\n        return error.message;\n    }\n    render() {\n        if (!this.state.selectedAccount) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__.ConnectWallet, {\n                connectWallet: this._connectWallet,\n                networkError: this.state.networkError,\n                dismiss: this._dismissNetworkError\n            }, void 0, false, {\n                fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 202,\n                columnNumber: 14\n            }, this);\n        }\n        if (this.state.stopped) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Auction stopped.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                lineNumber: 210,\n                columnNumber: 14\n            }, this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                this.state.txBeingSent && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WaitForTransactionMessage__WEBPACK_IMPORTED_MODULE_3__.WaitingForTransactionMessage, {\n                    txHash: this.state.txBeingSent\n                }, void 0, false, {\n                    fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 216,\n                    columnNumber: 11\n                }, this),\n                this.state.transactionError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransactionErrorMessage__WEBPACK_IMPORTED_MODULE_4__.TransactionErrorMessage, {\n                    message: this._getRpcErrorMessage(this.state.transactionError),\n                    dismiss: this._dismissTransactionError\n                }, void 0, false, {\n                    fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 220,\n                    columnNumber: 11\n                }, this),\n                this.state.balance && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Your balance: \",\n                        ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.formatEther(this.state.balance),\n                        \" ETH\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 227,\n                    columnNumber: 11\n                }, this),\n                this.state.currentPrice && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Current item price: \",\n                                this.state.currentPrice,\n                                \" ETH\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 231,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: this.buy,\n                            children: \"Buy!\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 232,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\IDE\\\\VS\\\\Sol_tests\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 230,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    constructor(props){\n        super(props);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"_connectWallet\", async ()=>{\n            if (window.ethereum === undefined) {\n                this.setState({\n                    networkError: \"Please install Metamask!\"\n                });\n                return;\n            }\n            const [selectedAddress] = await window.ethereum.request({\n                method: \"eth_requestAccounts\"\n            });\n            if (!this._checkNetwork()) {\n                return;\n            }\n            this._initialize(selectedAddress);\n            window.ethereum.on(\"accountsChanged\", (param)=>{\n                let [newAddress] = param;\n                if (newAddress === undefined) {\n                    return this._resetState();\n                }\n                this._initialize(newAddress);\n            });\n            window.ethereum.on(\"chainChanged\", (param)=>{\n                let [networkId] = param;\n                this._resetState();\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"updateStopped\", async ()=>{\n            const stopped = await this._auction.stopped();\n            if (stopped) {\n                clearInterval(this.checkPriceInterval);\n            }\n            this.setState({\n                stopped: stopped\n            });\n            return stopped;\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"_dismissNetworkError\", ()=>{\n            this.setState({\n                networkError: null\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"_dismissTransactionError\", ()=>{\n            this.setState({\n                transactionError: null\n            });\n        });\n        // nextBlock = async() => {\n        //   await this._auction.nextBlock()\n        // }\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"nextBlock\", async());\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(this, \"buy\", async ()=>{\n            //console.log((ethers.parseEther(this.state.currentPrice + 1)).toString())\n            try {\n                const tx = await this._auction.buy({\n                    value: ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.parseEther(this.state.currentPrice)\n                });\n                this.setState({\n                    txBeingSent: tx.hash\n                });\n                await tx.wait();\n            } catch (error) {\n                if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {\n                    return;\n                }\n                console.error(error);\n                this.setState({\n                    transactionError: error\n                });\n            } finally{\n                this.setState({\n                    txBeingSent: null\n                });\n                await this.updateBalance();\n                await this.updateStopped();\n            }\n        });\n        this.initialState = {\n            selectedAccount: null,\n            txBeingSent: null,\n            networkError: null,\n            transactionError: null,\n            balance: null,\n            currentPrice: null,\n            stopped: false\n        };\n        this.state = this.initialState;\n    }\n}\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNUO0FBRTRCO0FBQzJCO0FBQ1A7QUFFSDtBQUNoQjtBQUU1RCxNQUFNUSxxQkFBcUI7QUFDM0IsTUFBTUMsaUNBQWlDO0FBRXhCLHFCQUFjUiw0Q0FBU0E7SUE4Q3BDLE1BQU1TLFlBQVlDLGVBQWUsRUFBRTtRQUNqQyxJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJViwwREFBc0IsQ0FBQ1ksT0FBT0MsUUFBUTtRQUczRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJZCxtREFBZSxDQUNqQ0ksdUZBQTJCLEVBQzNCQyw2REFBbUIsRUFDbkIsTUFBTSxJQUFJLENBQUNLLFNBQVMsQ0FBQ1EsU0FBUyxDQUFDO1FBR2pDLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1lBQ1pDLGlCQUFpQlg7UUFDbkIsR0FBRyxVQUFZO1lBQ2IsTUFBTSxJQUFJLENBQUNZLGFBQWE7UUFDMUI7UUFFQSxJQUFHLE1BQU0sSUFBSSxDQUFDQyxhQUFhLElBQUk7WUFBRTtRQUFPLENBQUM7UUFFekMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsTUFBTSxJQUFJLENBQUNULFFBQVEsQ0FBQ1MsYUFBYTtRQUN0RCxJQUFJLENBQUNDLE9BQU8sR0FBRyxNQUFPLElBQUksQ0FBQ1YsUUFBUSxDQUFDVSxPQUFPLEtBQUksRUFBRTtRQUNqRCxJQUFJLENBQUNDLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQ1gsUUFBUSxDQUFDVyxZQUFZO1FBRXBELElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdDLFlBQVksVUFBVztZQUM3QyxNQUFNQyxNQUFNLElBQU1DLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsS0FBS0osR0FBRyxLQUFHO1lBQy9DLE1BQU1LLFVBQVVMLFFBQVEsSUFBSSxDQUFDSixPQUFPO1lBQ3BDLElBQUlVLGVBQWUsTUFBTSxJQUFJLENBQUNwQixRQUFRLENBQUNxQixRQUFRO1lBQy9DQyxNQUFNRjtZQUNOLElBQUlHLFdBQVcsSUFBSSxDQUFDWixZQUFZLEdBQUNRO1lBQ2pDLElBQUlLLFdBQVdKLGVBQWVHO1lBQzlCRSxRQUFRQyxHQUFHLENBQUMsSUFBSSxDQUFDakIsYUFBYTtZQUM5QixJQUFJLENBQUNKLFFBQVEsQ0FBQztnQkFDWmUsY0FBY2xDLHNEQUFrQixDQUFDc0M7WUFDbkM7UUFDSixHQUFHO0lBRUgsaUVBQWlFO0lBQ2pFLDRDQUE0QztJQUM1Qyx3Q0FBd0M7SUFDeEMscURBQXFEO0lBRXJELHFCQUFxQjtJQUNyQixLQUFLO0lBQ1A7SUFnQkFJLHVCQUF1QjtRQUNyQkMsY0FBYyxJQUFJLENBQUNqQixrQkFBa0I7SUFDdkM7SUFFQSxNQUFNTCxnQkFBZ0I7UUFDcEIsTUFBTXVCLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQ2xDLFNBQVMsQ0FBQ21DLFVBQVUsQ0FDakQsSUFBSSxDQUFDQyxLQUFLLENBQUMxQixlQUFlLENBQzVCLEVBQUcyQixRQUFRO1FBRVgsSUFBSSxDQUFDNUIsUUFBUSxDQUFDO1lBQ1o2QixTQUFTSjtRQUNYO0lBQ0Y7SUFFQUssY0FBYztRQUNaLElBQUksQ0FBQzlCLFFBQVEsQ0FBQyxJQUFJLENBQUMrQixZQUFZO0lBQ2pDO0lBRUFDLGdCQUFnQjtRQUNkLElBQUl2QyxPQUFPQyxRQUFRLENBQUN1QyxjQUFjLEtBQUs5QyxvQkFBb0I7WUFBRSxPQUFPLElBQUk7UUFBQyxDQUFDO1FBRTFFLElBQUksQ0FBQ2EsUUFBUSxDQUFDO1lBQ1prQyxjQUFjO1FBQ2hCO1FBRUEsT0FBTyxLQUFLO0lBQ2Q7SUFnREFDLG9CQUFvQkMsS0FBSyxFQUFFO1FBQ3pCLElBQUlBLE1BQU1DLElBQUksRUFBRTtZQUNkLE9BQU9ELE1BQU1DLElBQUksQ0FBQ0MsT0FBTztRQUMzQixDQUFDO1FBRUQsT0FBT0YsTUFBTUUsT0FBTztJQUN0QjtJQUVBQyxTQUFTO1FBQ1AsSUFBRyxDQUFDLElBQUksQ0FBQ1osS0FBSyxDQUFDMUIsZUFBZSxFQUFFO1lBQzlCLHFCQUFPLDhEQUFDbkIsb0VBQWFBO2dCQUNuQjBELGVBQWUsSUFBSSxDQUFDQyxjQUFjO2dCQUNsQ1AsY0FBYyxJQUFJLENBQUNQLEtBQUssQ0FBQ08sWUFBWTtnQkFDckNRLFNBQVMsSUFBSSxDQUFDQyxvQkFBb0I7Ozs7OztRQUV0QyxDQUFDO1FBRUQsSUFBRyxJQUFJLENBQUNoQixLQUFLLENBQUNpQixPQUFPLEVBQUU7WUFDckIscUJBQU8sOERBQUNDOzBCQUFFOzs7Ozs7UUFDWixDQUFDO1FBRUQscUJBQ0U7O2dCQUNHLElBQUksQ0FBQ2xCLEtBQUssQ0FBQ21CLFdBQVcsa0JBQ3JCLDhEQUFDL0QsK0ZBQTRCQTtvQkFBQ2dFLFFBQVEsSUFBSSxDQUFDcEIsS0FBSyxDQUFDbUIsV0FBVzs7Ozs7O2dCQUc3RCxJQUFJLENBQUNuQixLQUFLLENBQUNxQixnQkFBZ0Isa0JBQzFCLDhEQUFDaEUsd0ZBQXVCQTtvQkFDdEJzRCxTQUFTLElBQUksQ0FBQ0gsbUJBQW1CLENBQUMsSUFBSSxDQUFDUixLQUFLLENBQUNxQixnQkFBZ0I7b0JBQzdETixTQUFTLElBQUksQ0FBQ08sd0JBQXdCOzs7Ozs7Z0JBSXpDLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ0UsT0FBTyxrQkFDakIsOERBQUNnQjs7d0JBQUU7d0JBQWVoRSxzREFBa0IsQ0FBQyxJQUFJLENBQUM4QyxLQUFLLENBQUNFLE9BQU87d0JBQUU7Ozs7Ozs7Z0JBRTFELElBQUksQ0FBQ0YsS0FBSyxDQUFDWixZQUFZLGtCQUN0Qiw4REFBQ21DOztzQ0FDQyw4REFBQ0w7O2dDQUFFO2dDQUFxQixJQUFJLENBQUNsQixLQUFLLENBQUNaLFlBQVk7Z0NBQUM7Ozs7Ozs7c0NBQ2hELDhEQUFDb0M7NEJBQU9DLFNBQVMsSUFBSSxDQUFDQyxHQUFHO3NDQUFFOzs7Ozs7Ozs7Ozs7OztJQUlyQztJQTdOQUMsWUFBWUMsS0FBSyxDQUFFO1FBQ2pCLEtBQUssQ0FBQ0E7UUFlUmQsZ0ZBQUFBLE9BQUFBLGtCQUFpQixVQUFZO1lBQzNCLElBQUdoRCxPQUFPQyxRQUFRLEtBQUs4RCxXQUFXO2dCQUNoQyxJQUFJLENBQUN4RCxRQUFRLENBQUM7b0JBQ1prQyxjQUFjO2dCQUNoQjtnQkFDQTtZQUNGLENBQUM7WUFFRCxNQUFNLENBQUM1QyxnQkFBZ0IsR0FBRyxNQUFNRyxPQUFPQyxRQUFRLENBQUMrRCxPQUFPLENBQUM7Z0JBQ3REQyxRQUFRO1lBQ1Y7WUFFQSxJQUFHLENBQUMsSUFBSSxDQUFDMUIsYUFBYSxJQUFJO2dCQUFFO1lBQU8sQ0FBQztZQUVwQyxJQUFJLENBQUMzQyxXQUFXLENBQUNDO1lBRWpCRyxPQUFPQyxRQUFRLENBQUNpRSxFQUFFLENBQUMsbUJBQW1CLFNBQWtCO29CQUFqQixDQUFDQyxXQUFXO2dCQUNqRCxJQUFHQSxlQUFlSixXQUFXO29CQUMzQixPQUFPLElBQUksQ0FBQzFCLFdBQVc7Z0JBQ3pCLENBQUM7Z0JBRUQsSUFBSSxDQUFDekMsV0FBVyxDQUFDdUU7WUFDbkI7WUFFQW5FLE9BQU9DLFFBQVEsQ0FBQ2lFLEVBQUUsQ0FBQyxnQkFBZ0IsU0FBaUI7b0JBQWhCLENBQUNFLFVBQVU7Z0JBQzdDLElBQUksQ0FBQy9CLFdBQVc7WUFDbEI7UUFDRjtRQThDQTNCLGdGQUFBQSxPQUFBQSxpQkFBZ0IsVUFBVztZQUN6QixNQUFNeUMsVUFBVSxNQUFNLElBQUksQ0FBQ2pELFFBQVEsQ0FBQ2lELE9BQU87WUFFM0MsSUFBR0EsU0FBUztnQkFDVnBCLGNBQWMsSUFBSSxDQUFDakIsa0JBQWtCO1lBQ3ZDLENBQUM7WUFFRCxJQUFJLENBQUNQLFFBQVEsQ0FBQztnQkFDWjRDLFNBQVNBO1lBQ1g7WUFFQSxPQUFPQTtRQUNUO1FBOEJBRCxnRkFBQUEsT0FBQUEsd0JBQXVCLElBQU07WUFDM0IsSUFBSSxDQUFDM0MsUUFBUSxDQUFDO2dCQUNaa0MsY0FBYyxJQUFJO1lBQ3BCO1FBQ0Y7UUFFQWUsZ0ZBQUFBLE9BQUFBLDRCQUEyQixJQUFNO1lBQy9CLElBQUksQ0FBQ2pELFFBQVEsQ0FBQztnQkFDWmdELGtCQUFrQixJQUFJO1lBQ3hCO1FBQ0Y7UUFFQSwyQkFBMkI7UUFDM0Isb0NBQW9DO1FBQ3BDLElBQUk7UUFDSmMsZ0ZBQUFBLE9BQUFBLGFBQVlDO1FBRVpWLGdGQUFBQSxPQUFBQSxPQUFNLFVBQVc7WUFDZiwwRUFBMEU7WUFDMUUsSUFBSTtnQkFDRixNQUFNVyxLQUFLLE1BQU0sSUFBSSxDQUFDckUsUUFBUSxDQUFDMEQsR0FBRyxDQUFDO29CQUNqQ1ksT0FBT3BGLHFEQUFpQixDQUFDLElBQUksQ0FBQzhDLEtBQUssQ0FBQ1osWUFBWTtnQkFDbEQ7Z0JBRUEsSUFBSSxDQUFDZixRQUFRLENBQUM7b0JBQ1o4QyxhQUFha0IsR0FBR0csSUFBSTtnQkFDdEI7Z0JBRUEsTUFBTUgsR0FBR0ksSUFBSTtZQUNmLEVBQUUsT0FBTWhDLE9BQU87Z0JBQ2IsSUFBR0EsTUFBTWlDLElBQUksS0FBS2pGLGdDQUFnQztvQkFBRTtnQkFBTyxDQUFDO2dCQUU1RGdDLFFBQVFnQixLQUFLLENBQUNBO2dCQUVkLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQztvQkFDWmdELGtCQUFrQlo7Z0JBQ3BCO1lBQ0YsU0FBVTtnQkFDUixJQUFJLENBQUNwQyxRQUFRLENBQUM7b0JBQ1o4QyxhQUFhLElBQUk7Z0JBQ25CO2dCQUNBLE1BQU0sSUFBSSxDQUFDNUMsYUFBYTtnQkFDeEIsTUFBTSxJQUFJLENBQUNDLGFBQWE7WUFDMUI7UUFDRjtRQTVLRSxJQUFJLENBQUM0QixZQUFZLEdBQUc7WUFDbEI5QixpQkFBaUIsSUFBSTtZQUNyQjZDLGFBQWEsSUFBSTtZQUNqQlosY0FBYyxJQUFJO1lBQ2xCYyxrQkFBa0IsSUFBSTtZQUN0Qm5CLFNBQVMsSUFBSTtZQUNiZCxjQUFjLElBQUk7WUFDbEI2QixTQUFTLEtBQUs7UUFDaEI7UUFFQSxJQUFJLENBQUNqQixLQUFLLEdBQUcsSUFBSSxDQUFDSSxZQUFZO0lBQ2hDO0FBZ05GO0FBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcclxuXHJcbmltcG9ydCB7IENvbm5lY3RXYWxsZXQgfSBmcm9tICcuLi9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQnXHJcbmltcG9ydCB7IFdhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL1dhaXRGb3JUcmFuc2FjdGlvbk1lc3NhZ2UnXHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uRXJyb3JNZXNzYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2FjdGlvbkVycm9yTWVzc2FnZSdcclxuXHJcbmltcG9ydCBhdWN0aW9uQWRkcmVzcyBmcm9tICcuLi9jb250cmFjdHMvRHV0Y2hBdWN0aW9uLWNvbnRyYWN0LWFkZHJlc3MuanNvbidcclxuaW1wb3J0IGF1Y3Rpb25BcnRpZmFjdCBmcm9tICcuLi9jb250cmFjdHMvRHV0Y2hBdWN0aW9uLmpzb24nXHJcblxyXG5jb25zdCBIQVJESEFUX05FVFdPUktfSUQgPSAnMzEzMzcnXHJcbmNvbnN0IEVSUk9SX0NPREVfVFhfUkVKRUNURURfQllfVVNFUiA9IDQwMDFcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG4gICAgdGhpcy5pbml0aWFsU3RhdGUgPSB7XHJcbiAgICAgIHNlbGVjdGVkQWNjb3VudDogbnVsbCxcclxuICAgICAgdHhCZWluZ1NlbnQ6IG51bGwsXHJcbiAgICAgIG5ldHdvcmtFcnJvcjogbnVsbCxcclxuICAgICAgdHJhbnNhY3Rpb25FcnJvcjogbnVsbCxcclxuICAgICAgYmFsYW5jZTogbnVsbCxcclxuICAgICAgY3VycmVudFByaWNlOiBudWxsLFxyXG4gICAgICBzdG9wcGVkOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGVcclxuICB9XHJcblxyXG4gIF9jb25uZWN0V2FsbGV0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYod2luZG93LmV0aGVyZXVtID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgbmV0d29ya0Vycm9yOiAnUGxlYXNlIGluc3RhbGwgTWV0YW1hc2shJ1xyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRBZGRyZXNzXSA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5yZXF1ZXN0KHtcclxuICAgICAgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cydcclxuICAgIH0pXHJcblxyXG4gICAgaWYoIXRoaXMuX2NoZWNrTmV0d29yaygpKSB7IHJldHVybiB9XHJcblxyXG4gICAgdGhpcy5faW5pdGlhbGl6ZShzZWxlY3RlZEFkZHJlc3MpXHJcblxyXG4gICAgd2luZG93LmV0aGVyZXVtLm9uKCdhY2NvdW50c0NoYW5nZWQnLCAoW25ld0FkZHJlc3NdKSA9PiB7XHJcbiAgICAgIGlmKG5ld0FkZHJlc3MgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNldFN0YXRlKClcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5faW5pdGlhbGl6ZShuZXdBZGRyZXNzKVxyXG4gICAgfSlcclxuXHJcbiAgICB3aW5kb3cuZXRoZXJldW0ub24oJ2NoYWluQ2hhbmdlZCcsIChbbmV0d29ya0lkXSkgPT4ge1xyXG4gICAgICB0aGlzLl9yZXNldFN0YXRlKClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyBfaW5pdGlhbGl6ZShzZWxlY3RlZEFkZHJlc3MpIHtcclxuICAgIHRoaXMuX3Byb3ZpZGVyID0gbmV3IGV0aGVycy5Ccm93c2VyUHJvdmlkZXIod2luZG93LmV0aGVyZXVtKVxyXG5cclxuXHJcbiAgICB0aGlzLl9hdWN0aW9uID0gbmV3IGV0aGVycy5Db250cmFjdChcclxuICAgICAgYXVjdGlvbkFkZHJlc3MuRHV0Y2hBdWN0aW9uLFxyXG4gICAgICBhdWN0aW9uQXJ0aWZhY3QuYWJpLFxyXG4gICAgICBhd2FpdCB0aGlzLl9wcm92aWRlci5nZXRTaWduZXIoMClcclxuICAgIClcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc2VsZWN0ZWRBY2NvdW50OiBzZWxlY3RlZEFkZHJlc3NcclxuICAgIH0sIGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgdGhpcy51cGRhdGVCYWxhbmNlKClcclxuICAgIH0pXHJcblxyXG4gICAgaWYoYXdhaXQgdGhpcy51cGRhdGVTdG9wcGVkKCkpIHsgcmV0dXJuIH1cclxuXHJcbiAgICB0aGlzLnN0YXJ0aW5nUHJpY2UgPSBhd2FpdCB0aGlzLl9hdWN0aW9uLnN0YXJ0aW5nUHJpY2UoKVxyXG4gICAgdGhpcy5zdGFydEF0ID0gKGF3YWl0IHRoaXMuX2F1Y3Rpb24uc3RhcnRBdCgpKSoxblxyXG4gICAgdGhpcy5kaXNjb3VudFJhdGUgPSBhd2FpdCB0aGlzLl9hdWN0aW9uLmRpc2NvdW50UmF0ZSgpXHJcblxyXG4gICAgdGhpcy5jaGVja1ByaWNlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChhc3luYygpID0+IHtcclxuICAgICAgICBjb25zdCBub3cgPSAoKSA9PiBCaWdJbnQoTWF0aC5mbG9vcihEYXRlLm5vdygpLzEwMDApKVxyXG4gICAgICAgIGNvbnN0IGVsYXBzZWQgPSBub3coKSAtIHRoaXMuc3RhcnRBdFxyXG4gICAgICAgIGxldCBjdXJyZW50UHJpY2UgPSBhd2FpdCB0aGlzLl9hdWN0aW9uLmdldFByaWNlKClcclxuICAgICAgICBhbGVydChjdXJyZW50UHJpY2UpXHJcbiAgICAgICAgbGV0IGRpc2NvdW50ID0gdGhpcy5kaXNjb3VudFJhdGUqZWxhcHNlZFxyXG4gICAgICAgIGxldCBuZXdQcmljZSA9IGN1cnJlbnRQcmljZSAtIGRpc2NvdW50XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGFydGluZ1ByaWNlKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY3VycmVudFByaWNlOiBldGhlcnMuZm9ybWF0RXRoZXIobmV3UHJpY2UpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIDEwMDApXHJcblxyXG4gICAgLy8gY29uc3Qgc3RhcnRCbG9ja051bWJlciA9IGF3YWl0IHRoaXMuX3Byb3ZpZGVyLmdldEJsb2NrTnVtYmVyKClcclxuICAgIC8vIHRoaXMuX2F1Y3Rpb24ub24oJ0JvdWdodCcsICguLi5hcmdzKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IGV2ZW50ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdXHJcbiAgICAvLyAgIGlmKGV2ZW50LmJsb2NrTnVtYmVyIDw9IHN0YXJ0QmxvY2tOdW1iZXIpIHJldHVyblxyXG5cclxuICAgIC8vICAgYXJnc1swXSwgYXJnc1sxXVxyXG4gICAgLy8gfSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZVN0b3BwZWQgPSBhc3luYygpID0+IHtcclxuICAgIGNvbnN0IHN0b3BwZWQgPSBhd2FpdCB0aGlzLl9hdWN0aW9uLnN0b3BwZWQoKVxyXG5cclxuICAgIGlmKHN0b3BwZWQpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNoZWNrUHJpY2VJbnRlcnZhbClcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgc3RvcHBlZDogc3RvcHBlZFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gc3RvcHBlZFxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMuY2hlY2tQcmljZUludGVydmFsKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlQmFsYW5jZSgpIHtcclxuICAgIGNvbnN0IG5ld0JhbGFuY2UgPSAoYXdhaXQgdGhpcy5fcHJvdmlkZXIuZ2V0QmFsYW5jZShcclxuICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEFjY291bnRcclxuICAgICkpLnRvU3RyaW5nKClcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgYmFsYW5jZTogbmV3QmFsYW5jZVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIF9yZXNldFN0YXRlKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSlcclxuICB9XHJcblxyXG4gIF9jaGVja05ldHdvcmsoKSB7XHJcbiAgICBpZiAod2luZG93LmV0aGVyZXVtLm5ldHdvcmtWZXJzaW9uID09PSBIQVJESEFUX05FVFdPUktfSUQpIHsgcmV0dXJuIHRydWUgfVxyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuZXR3b3JrRXJyb3I6ICdQbGVhc2UgY29ubmVjdCB0byBsb2NhbGhvc3Q6ODU0NSdcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG5cclxuICBfZGlzbWlzc05ldHdvcmtFcnJvciA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBuZXR3b3JrRXJyb3I6IG51bGxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBfZGlzbWlzc1RyYW5zYWN0aW9uRXJyb3IgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgdHJhbnNhY3Rpb25FcnJvcjogbnVsbFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIG5leHRCbG9jayA9IGFzeW5jKCkgPT4ge1xyXG4gIC8vICAgYXdhaXQgdGhpcy5fYXVjdGlvbi5uZXh0QmxvY2soKVxyXG4gIC8vIH1cclxuICBuZXh0QmxvY2sgPSBhc3luYygpXHJcblxyXG4gIGJ1eSA9IGFzeW5jKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZygoZXRoZXJzLnBhcnNlRXRoZXIodGhpcy5zdGF0ZS5jdXJyZW50UHJpY2UgKyAxKSkudG9TdHJpbmcoKSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgdGhpcy5fYXVjdGlvbi5idXkoe1xyXG4gICAgICAgIHZhbHVlOiBldGhlcnMucGFyc2VFdGhlcih0aGlzLnN0YXRlLmN1cnJlbnRQcmljZSlcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHR4QmVpbmdTZW50OiB0eC5oYXNoXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBhd2FpdCB0eC53YWl0KClcclxuICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgaWYoZXJyb3IuY29kZSA9PT0gRVJST1JfQ09ERV9UWF9SRUpFQ1RFRF9CWV9VU0VSKSB7IHJldHVybiB9XHJcblxyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG5cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdHJhbnNhY3Rpb25FcnJvcjogZXJyb3JcclxuICAgICAgfSlcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHR4QmVpbmdTZW50OiBudWxsXHJcbiAgICAgIH0pXHJcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlQmFsYW5jZSgpXHJcbiAgICAgIGF3YWl0IHRoaXMudXBkYXRlU3RvcHBlZCgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZ2V0UnBjRXJyb3JNZXNzYWdlKGVycm9yKSB7XHJcbiAgICBpZiAoZXJyb3IuZGF0YSkge1xyXG4gICAgICByZXR1cm4gZXJyb3IuZGF0YS5tZXNzYWdlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2VcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmKCF0aGlzLnN0YXRlLnNlbGVjdGVkQWNjb3VudCkge1xyXG4gICAgICByZXR1cm4gPENvbm5lY3RXYWxsZXRcclxuICAgICAgICBjb25uZWN0V2FsbGV0PXt0aGlzLl9jb25uZWN0V2FsbGV0fVxyXG4gICAgICAgIG5ldHdvcmtFcnJvcj17dGhpcy5zdGF0ZS5uZXR3b3JrRXJyb3J9XHJcbiAgICAgICAgZGlzbWlzcz17dGhpcy5fZGlzbWlzc05ldHdvcmtFcnJvcn1cclxuICAgICAgLz5cclxuICAgIH1cclxuXHJcbiAgICBpZih0aGlzLnN0YXRlLnN0b3BwZWQpIHtcclxuICAgICAgcmV0dXJuIDxwPkF1Y3Rpb24gc3RvcHBlZC48L3A+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnR4QmVpbmdTZW50ICYmIChcclxuICAgICAgICAgIDxXYWl0aW5nRm9yVHJhbnNhY3Rpb25NZXNzYWdlIHR4SGFzaD17dGhpcy5zdGF0ZS50eEJlaW5nU2VudH0gLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS50cmFuc2FjdGlvbkVycm9yICYmIChcclxuICAgICAgICAgIDxUcmFuc2FjdGlvbkVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICBtZXNzYWdlPXt0aGlzLl9nZXRScGNFcnJvck1lc3NhZ2UodGhpcy5zdGF0ZS50cmFuc2FjdGlvbkVycm9yKX1cclxuICAgICAgICAgICAgZGlzbWlzcz17dGhpcy5fZGlzbWlzc1RyYW5zYWN0aW9uRXJyb3J9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmJhbGFuY2UgJiZcclxuICAgICAgICAgIDxwPllvdXIgYmFsYW5jZToge2V0aGVycy5mb3JtYXRFdGhlcih0aGlzLnN0YXRlLmJhbGFuY2UpfSBFVEg8L3A+fVxyXG5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5jdXJyZW50UHJpY2UgJiZcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPkN1cnJlbnQgaXRlbSBwcmljZToge3RoaXMuc3RhdGUuY3VycmVudFByaWNlfSBFVEg8L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5idXl9PkJ1eSE8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZXRoZXJzIiwiQ29ubmVjdFdhbGxldCIsIldhaXRpbmdGb3JUcmFuc2FjdGlvbk1lc3NhZ2UiLCJUcmFuc2FjdGlvbkVycm9yTWVzc2FnZSIsImF1Y3Rpb25BZGRyZXNzIiwiYXVjdGlvbkFydGlmYWN0IiwiSEFSREhBVF9ORVRXT1JLX0lEIiwiRVJST1JfQ09ERV9UWF9SRUpFQ1RFRF9CWV9VU0VSIiwiX2luaXRpYWxpemUiLCJzZWxlY3RlZEFkZHJlc3MiLCJfcHJvdmlkZXIiLCJCcm93c2VyUHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSIsIl9hdWN0aW9uIiwiQ29udHJhY3QiLCJEdXRjaEF1Y3Rpb24iLCJhYmkiLCJnZXRTaWduZXIiLCJzZXRTdGF0ZSIsInNlbGVjdGVkQWNjb3VudCIsInVwZGF0ZUJhbGFuY2UiLCJ1cGRhdGVTdG9wcGVkIiwic3RhcnRpbmdQcmljZSIsInN0YXJ0QXQiLCJkaXNjb3VudFJhdGUiLCJjaGVja1ByaWNlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5vdyIsIkJpZ0ludCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJlbGFwc2VkIiwiY3VycmVudFByaWNlIiwiZ2V0UHJpY2UiLCJhbGVydCIsImRpc2NvdW50IiwibmV3UHJpY2UiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0RXRoZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFySW50ZXJ2YWwiLCJuZXdCYWxhbmNlIiwiZ2V0QmFsYW5jZSIsInN0YXRlIiwidG9TdHJpbmciLCJiYWxhbmNlIiwiX3Jlc2V0U3RhdGUiLCJpbml0aWFsU3RhdGUiLCJfY2hlY2tOZXR3b3JrIiwibmV0d29ya1ZlcnNpb24iLCJuZXR3b3JrRXJyb3IiLCJfZ2V0UnBjRXJyb3JNZXNzYWdlIiwiZXJyb3IiLCJkYXRhIiwibWVzc2FnZSIsInJlbmRlciIsImNvbm5lY3RXYWxsZXQiLCJfY29ubmVjdFdhbGxldCIsImRpc21pc3MiLCJfZGlzbWlzc05ldHdvcmtFcnJvciIsInN0b3BwZWQiLCJwIiwidHhCZWluZ1NlbnQiLCJ0eEhhc2giLCJ0cmFuc2FjdGlvbkVycm9yIiwiX2Rpc21pc3NUcmFuc2FjdGlvbkVycm9yIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImJ1eSIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0IiwibWV0aG9kIiwib24iLCJuZXdBZGRyZXNzIiwibmV0d29ya0lkIiwibmV4dEJsb2NrIiwiYXN5bmMiLCJ0eCIsInZhbHVlIiwicGFyc2VFdGhlciIsImhhc2giLCJ3YWl0IiwiY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});