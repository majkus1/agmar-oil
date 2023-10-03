"use strict";
exports.id = 894;
exports.ids = [894];
exports.modules = {

/***/ 29:
/***/ ((module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 167:
/***/ ((__unused_webpack_module, exports) => {



exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}


/***/ })

};
;