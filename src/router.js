import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Talks from '@/views/Talks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/talks',
      name: 'talks',
      component: Talks
    }
  ]
})
