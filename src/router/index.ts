import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/talks',
      name: 'talks',
      // component: Talks,
      component: () => import('@/views/TalksView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      // component: Resume,
      component: () => import('@/views/ResumeView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // component: Contact,
      component: () => import('@/views/ContactView.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      // component: ContactSuccess,
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      // component: BlogPostList,
      component: () => import('@/views/PostsView.vue')
    },
    {
      path: '/post/:slug',
      name: 'post',
      // component: BlogPost,
      component: () => import('@/views/PostView.vue')
    },
    {
      path: '/books',
      name: 'books',
      // component: Books,
      component: () => import('@/views/BooksView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notfound',
      // component: NotFound,
      component: () => import('@/views/HomeView.vue')
    }
  ]
})

export default router
