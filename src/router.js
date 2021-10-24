import Vue from 'vue'
import Meta from 'vue-meta'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Meta)

const Home = () => import('@/views/Home')
const Talks = () => import('@/views/Talks')
const Resume = () => import('@/views/Resume')
const Contact = () => import('@/views/Contact')
const ContactSuccess = () => import('@/views/ContactSuccess')
const BlogPost = () => import('@/views/BlogPost')
const BlogPostList = () => import('@/views/BlogPostList')
const NotFound = () => import('@/views/NotFound')
const Books = () => import('@/views/Books')

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
      path: '/books',
      name: 'books',
      component: Books,
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
