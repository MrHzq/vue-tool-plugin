"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tool_methods_1 = require("./tool-methods");
var vue_storage_1 = require("./vue-storage");
var tool_methods_2 = require("./tool-methods");
exports.default = {
    install: function (Vue, config) {
        if (config === void 0) { config = {}; }
        var defaultConfig = {
            storage: 'session',
            prefix: 'tool_',
            router: ''
        };
        var _a = Object.assign({}, defaultConfig, config), router = _a.router, storage = _a.storage, prefix = _a.prefix;
        Vue.use(tool_methods_1.default, router);
        if (storage)
            Vue.use(vue_storage_1.default, storage, prefix);
        var tool = Object.assign({}, tool_methods_2.default);
        Vue.$tool = tool;
        Vue.prototype.$tool = tool;
    }
};
