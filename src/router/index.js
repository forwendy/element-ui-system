import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Space from '@/views/space/Space'
import SpaceDetail from '@/views/space/SpaceDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/space',
      name: 'Space',
      component: Space
    }, {
      path: '/space/detail/:id',
      name: 'SpaceDetail',
      meta: {},
      component: SpaceDetail,
      props: true // pass route.params to props
    }
  ]
})
