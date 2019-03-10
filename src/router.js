import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'
import Home from '@/views/Home'
import Talks from '@/views/Talks'
import Resume from '@/views/Resume'
import Contact from '@/views/Contact'
import ContactSuccess from '@/views/ContactSuccess'
import BlogPost from '@/views/BlogPost'
import BlogPostList from '@/views/BlogPostList'
import NotFound from '@/views/NotFound'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/talks',
      name: 'talks',
      component: Talks,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: ContactSuccess,
    },
    {
      path: '/posts',
      name: 'posts',
      component: BlogPostList,
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: BlogPost,
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound,
    }
  ]
})

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
})

export default router;
