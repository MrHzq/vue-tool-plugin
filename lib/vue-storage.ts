/*
 * @Author: hzq
 * @Date: 2019-07-25 15:13:02
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-31 17:36:12
 * @文件说明: storage的相关处理，将会绑定到 Vue.prototype 上面
 * 默认值 storage：window.sessionStorage；prefix：tool
 */
export default (storageKey: string, prefix: string) => {
    if (!storageKey) return {}

    let storage = window.sessionStorage
    if (storageKey === 'local') storage = window.localStorage

    // 检查 是否能够写入Storage
    const canWriteStorage = () => {
        try {
            storage.setItem('@@', '1')
            storage.removeItem('@@')
            return true
        } catch (e) {
            return false
        }
    }
    if (!canWriteStorage()) {
        throw new Error(
            'Invalid Storage：该浏览器不支持Storage，可能原因：浏览器版本过低、处于无痕模式等等'
        )
    }

    if (prefix) prefix += '_'

    // storage 设置一项
    const setItem = (
        key: string = 'set-key',
        data: any = 'set-key-value'
    ): void => {
        storage.setItem(prefix + key, JSON.stringify(data))
    }

    // storage 获取一项
    const getItem = (key: string = 'set-key') => {
        return JSON.parse(storage.getItem(prefix + key) || '')
    }

    // storage 移除一项
    const removeItem = (key: string): void => {
        storage.removeItem(prefix + key)
    }

    // storage 移除一项或多项
    const clearItem = (key: any): void => {
        if (typeof key === 'string') removeItem(key)
        else if (Array.isArray(key) && key.length) {
            key.map(k => removeItem(k))
        }
    }

    // storage 移除所有项
    const clearItemAll = (): void => {
        storage.clear()
    }

    return { setItem, getItem, removeItem, clearItem, clearItemAll }
}
