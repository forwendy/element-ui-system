import Vue from 'vue'
import Vuex from 'vuex'
import tabs from './modules/tabs'
import menus from './modules/menus'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules:{
        menus,
        tabs
    },
    strict: debug
})
