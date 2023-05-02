import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/1',
      name: '1',
      component: () => import('../views/1.vue')
    },
    {
      path: '/2',
      name: '2',
      component: () => import('../views/2.vue')
    },
    {
      path: '/3',
      name: '3',
      component: () => import('../views/3.vue')
    },
  ]
})

export default router
