import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Space from '@/views/space/Space'

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
    }
  ]
})
