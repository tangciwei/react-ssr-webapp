module.exports =

    /******/ (function (modules) { // webpackBootstrap

        /******/ // The module cache

        /******/
        var installedModules = {};

        /******/

        /******/ // The require function

        /******/
        function __webpack_require__(moduleId) {

            /******/

            /******/ // Check if module is in cache

            /******/
            if (installedModules[moduleId]) {

                /******/
                return installedModules[moduleId].exports;

                /******/
            }

            /******/ // Create a new module (and put it into the cache)

            /******/ var module = installedModules[moduleId] = {

                /******/
                i: moduleId,

                /******/
                l: false,

                /******/
                exports: {}

                /******/
            };

            /******/

            /******/ // Execute the module function

            /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

            /******/

            /******/ // Flag the module as loaded

            /******/
            module.l = true;

            /******/

            /******/ // Return the exports of the module

            /******/
            return module.exports;

            /******/
        }

        /******/

        /******/

        /******/ // expose the modules object (__webpack_modules__)

        /******/
        __webpack_require__.m = modules;

        /******/

        /******/ // expose the module cache

        /******/
        __webpack_require__.c = installedModules;

        /******/

        /******/ // define getter function for harmony exports

        /******/
        __webpack_require__.d = function (exports, name, getter) {

            /******/
            if (!__webpack_require__.o(exports, name)) {

                /******/ Object.defineProperty(exports, name, {

                    /******/
                    configurable: false,

                    /******/
                    enumerable: true,

                    /******/
                    get: getter

                    /******/
                });

                /******/
            }

            /******/
        };

        /******/

        /******/ // getDefaultExport function for compatibility with non-harmony modules

        /******/
        __webpack_require__.n = function (module) {

            /******/
            var getter = module && module.__esModule ?

                /******/ function getDefault() {
                    return module.default;
                } :

                /******/ function getModuleExports() {
                    return module;
                };

            /******/ __webpack_require__.d(getter, 'a', getter);

            /******/
            return getter;

            /******/
        };

        /******/

        /******/ // Object.prototype.hasOwnProperty.call

        /******/
        __webpack_require__.o = function (object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        };

        /******/

        /******/ // __webpack_public_path__

        /******/
        __webpack_require__.p = '/public/';

        /******/

        /******/ // Load entry module and return exports

        /******/
        return __webpack_require__(__webpack_require__.s = 0);

        /******/
    })

    /************************************************************************/

    /******/ ([

        /* 0 */

        /***/ (function (module, exports) {

            throw new Error('Module build failed: SyntaxError: /Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/client/server-entry.js: Unexpected token (3:15)\n\n  1 | import React from \'react\';\n  2 | import App from \'./App.jsx\';\n> 3 | export default <App/>;\n    |                ^\n  4 | \n    at Parser.raise (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:3939:15)\n    at Parser.unexpected (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:5248:16)\n    at Parser.parseExprAtom (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:6328:20)\n    at Parser.parseExprSubscripts (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:5924:21)\n    at Parser.parseMaybeUnary (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:5903:21)\n    at Parser.parseExprOps (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:5812:21)\n    at Parser.parseMaybeConditional (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:5784:21)\n    at Parser.parseMaybeAssign (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:5731:21)\n    at Parser.parseExportDefaultExpression (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:8237:22)\n    at Parser.parseExport (/Users/tangciwei/learn/code/2018-09-14-learning/10-15-reactssr/my/node_modules/_@babel_parser@7.1.3@@babel/parser/lib/index.js:8177:31)');

            /***/
        })

        /******/ ]);
