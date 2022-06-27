(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.hztestrp = {}));
})(this, (function (exports) { 'use strict';

    function index(){
        console.log('99112233');
        console.log('99112233');
        console.log('99112233');
    }

    const cc = ()=>{
        alert('tiandadida 9999888');
    };

    exports.cc = cc;
    exports["default"] = index;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
