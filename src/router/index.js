import { createRouter, createWebHistory } from 'vue-router'
// import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      // component: About
      component: () => import('../views/About.vue')
    },
    {
      path: '/views',
      name: '/views',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../views/Upload.vue')
    },
    {
      path: '/today',
      name: 'today',
      component: () => import('../views/Today.vue')
    },
    {
      path: '/deep',
      name: 'deep',
      component: () => import('../views/Deep.vue')
    },
    {
      path: '/track',
      name: 'track',
      component: () => import('../views/track.vue')
    }
  ]
})

export default router
