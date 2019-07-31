"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: hzq
 * @Date: 2019-07-25 15:13:02
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-31 17:36:12
 * @文件说明: storage的相关处理，将会绑定到 Vue.prototype 上面
 * 默认值 storage：window.sessionStorage；prefix：tool
 */
exports.default = (function (storageKey, prefix) {
    if (!storageKey)
        return {};
    var storage = window.sessionStorage;
    if (storageKey === 'local')
        storage = window.localStorage;
    // 检查 是否能够写入Storage
    var canWriteStorage = function () {
        try {
            storage.setItem('@@', '1');
            storage.removeItem('@@');
            return true;
        }
        catch (e) {
            return false;
        }
    };
    if (!canWriteStorage()) {
        throw new Error('Invalid Storage：该浏览器不支持Storage，可能原因：浏览器版本过低、处于无痕模式等等');
    }
    if (prefix)
        prefix += '_';
    // storage 设置一项
    var setItem = function (key, data) {
        if (key === void 0) { key = 'set-key'; }
        if (data === void 0) { data = 'set-key-value'; }
        storage.setItem(prefix + key, JSON.stringify(data));
    };
    // storage 获取一项
    var getItem = function (key) {
        if (key === void 0) { key = 'set-key'; }
        return JSON.parse(storage.getItem(prefix + key) || '');
    };
    // storage 移除一项
    var removeItem = function (key) {
        storage.removeItem(prefix + key);
    };
    // storage 移除一项或多项
    var clearItem = function (key) {
        if (typeof key === 'string')
            removeItem(key);
        else if (Array.isArray(key) && key.length) {
            key.map(function (k) { return removeItem(k); });
        }
    };
    // storage 移除所有项
    var clearItemAll = function () {
        storage.clear();
    };
    return { setItem: setItem, getItem: getItem, removeItem: removeItem, clearItem: clearItem, clearItemAll: clearItemAll };
});
