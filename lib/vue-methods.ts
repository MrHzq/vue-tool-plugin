/*
 * @Author: hzq
 * @Date: 2019-07-25 15:28:31
 * @Last Modified by: hzq
 * @Last Modified time: 2019-07-31 17:33:29
 * @文件说明: 将会绑定到 Vue.prototype 的一些方法
 */
export default (router: any = '') => {
    // 页面后退
    const go = (): void => router.go(-1)
    // 页面 push跳转
    const to = (path: string = '/', query: any = {}): void => {
        router.push({ path, query })
    }
    // 页面 replace跳转
    const tor = (path: string = '/', query: any = {}): void => {
        router.replace({ path, query })
    }

    // 获取地址query id的数据
    const getid = (that: any): number => {
        return Number(that.$route.query.id) || 0
    }

    // 获取地址query 对应key的数据，可以Number、String形式返回的，默认获取 id，返回0
    const query = (
        that: any,
        key: string = 'id',
        _default: number | string = 0
    ): number | string => {
        let _r = that.$route.query[key]
        if (typeof _default === 'number') _r = Number(_r)
        return _r || _default
    }

    if (router) return { go, to, tor, getid, query }
    else return { getid, query }
}
