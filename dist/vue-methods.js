"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: hzq
 * @Date: 2019-07-25 15:28:31
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-31 15:05:34
 * @文件说明: 将会绑定到 Vue.prototype 的一些方法
 */
exports.default = {
    install: function (Vue, router) {
        if (router === void 0) { router = ''; }
        if (router) {
            // 页面后退
            Vue.prototype.$go = function () { return router.go(-1); };
            // 页面 push跳转
            Vue.prototype.$to = function (path, query) {
                if (path === void 0) { path = '/'; }
                if (query === void 0) { query = {}; }
                router.push({ path: path, query: query });
            };
            // 页面 replace跳转
            Vue.prototype.$tor = function (path, query) {
                if (path === void 0) { path = '/'; }
                if (query === void 0) { query = {}; }
                router.replace({ path: path, query: query });
            };
        }
        // 获取地址query id的数据
        Vue.prototype.$id = function (that) {
            return Number(that.$route.query.id) || 0;
        };
        // 获取地址query 对应key的数据，可以Number、String形式返回的，默认获取 id，返回0
        Vue.prototype.$query = function (that, key, _default) {
            if (key === void 0) { key = 'id'; }
            if (_default === void 0) { _default = 0; }
            var _r = that.$route.query[key];
            if (typeof _default === 'number')
                _r = Number(_r);
            return _r || _default;
        };
    }
};
