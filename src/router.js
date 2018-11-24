import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import Home from '@/views/Home'
import Talks from '@/views/Talks'
import Resume from '@/views/Resume'
import Contact from '@/views/Contact'
import NotFound from '@/views/NotFound'

Vue.use(Router)
Vue.use(Meta)

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
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
