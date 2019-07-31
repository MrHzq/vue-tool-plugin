"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_methods_1 = require("./vue-methods");
var vue_storage_1 = require("./vue-storage");
var tool_methods_1 = require("./tool-methods");
exports.default = {
    install: function (Vue, config) {
        if (config === void 0) { config = {}; }
        var defaultConfig = {
            storage: 'session',
            prefix: 'vueTool',
            router: ''
        };
        var _a = Object.assign({}, defaultConfig, config), router = _a.router, storage = _a.storage, prefix = _a.prefix;
        var tool = Object.assign({}, vue_methods_1.default(router), vue_storage_1.default(storage, prefix), tool_methods_1.default);
        Vue.$tool = tool;
        Vue.prototype.$tool = tool;
    }
};
