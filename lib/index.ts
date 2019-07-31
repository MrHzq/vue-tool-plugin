import VueMethods from './vue-methods'
import VueStorage from './vue-storage'
import ToolMethods from './tool-methods'

export default {
    install(Vue: any, config = {}) {
        interface Config {
            storage: string
            prefix: string
            router: string | object
        }
        const defaultConfig: Config = {
            storage: 'session',
            prefix: 'vueTool',
            router: ''
        }
        const { router, storage, prefix } = (<any>Object).assign(
            {},
            defaultConfig,
            config
        )

        const tool = (<any>Object).assign(
            {},
            VueMethods(router),
            VueStorage(storage, prefix),
            ToolMethods
        )

        Vue.$tool = tool
        Vue.prototype.$tool = tool
    }
}
