// initial state
// shape: [{id}]
const state = {
  items: []
}

const getters = {
  getTabs: (state, getters, rootState) => {
    return state.items.map(({id}) => {
      const tab = rootState.menus.all.find(obj => obj.id === id)
      return {
          id: tab.id,
          title: tab.title,
          path: tab.path
      }
    })
  }
}

const actions = {}

const mutations = {
  pushMenuToTab(state, {id}) {
    // 判断tabs.items中是否有此路由
    const has = state.items.find(item => item.id === id)
    // tabs.items中没有此路径，则增加此路径
    if (!has) {
      state.items.push({id})
    }
  },
  removeItem(state, id) {
    state.items = state.items.filter(item => {
        if(item.id != id){
            return item;
        }
    })
  }

}

export default {namespaced: true, state, getters, actions, mutations}
