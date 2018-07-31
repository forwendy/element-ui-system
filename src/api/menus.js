const menuData = [
  {
    id: 1,
    title: '空间管理',
    path: 'space'
  }, {
    id: 2,
    title: '合同管理',
    path: 'contract'
  }, {
    id: 3,
    title: '客户管理',
    path: 'customer'
  }, {
    id: 4,
    title: '数据管理',
    path: 'data'
  }
]

export default {
    getMenus (cb) {
        setTimeout(() => cb(menuData), 100)
    }
}
