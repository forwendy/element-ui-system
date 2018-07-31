import demo from './modules/mock-demo'
import menu from './modules/menu'

const Mock = require('mockjs')

//当post或get请求到/news路由时Mock会拦截请求并返回上面的数据
Mock.mock('/makerstar_portal/demo', /post|get/i, demo);

Mock.mock('/makerstar_portal/menu', /post|get/i, menu);
