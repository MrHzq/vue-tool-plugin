import VueMethods from './tool-methods'
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
            prefix: 'tool_',
            router: ''
        }
        const { router, storage, prefix } = (<any>Object).assign(
            {},
            defaultConfig,
            config
        )
        Vue.use(VueMethods, router)

        if (storage) Vue.use(VueStorage, storage, prefix)

        const tool = (<any>Object).assign({}, ToolMethods)
        Vue.$tool = tool
        Vue.prototype.$tool = tool
    }
}
