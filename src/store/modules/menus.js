import menus from '../../api/menus'
// initial state
// shape: [{id,title,path}]
const state = {
  all: []
}

const getters = {}

const actions = {
  getAllMenus({commit}) {
    menus.getMenus(data => {
      commit('setMenus', data)
    })
  },
  addMenuToTabs({state, commit}, menu) {
      const tabItem = state.all.find(item => item.id === menu.id)
      if(tabItem){
          commit('tabs/pushMenuToTab',{id: menu.id, title: menu.title, path: menu.path},{ root: true })
      }
  }
}

const mutations = {
  setMenus(state, menus) {
    state.all = menus
  }
}

export default {namespaced: true, state, getters, actions, mutations}
