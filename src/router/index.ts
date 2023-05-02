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
      path: '/1_1',
      name: '1_1',
      component: () => import('../views/1_1.vue')
    },
    {
      path: '/1_2',
      name: '1_2',
      component: () => import('../views/1_2.vue')
    },
    {
      path: '/1_3',
      name: '1_3',
      component: () => import('../views/1_3.vue')
    },
    {
      path: '/1_4',
      name: '1_4',
      component: () => import('../views/1_4.vue')
    },
    {
      path: '/1_5',
      name: '1_5',
      component: () => import('../views/1_5.vue')
    },
    {
      path: '/1_6',
      name: '1_6',
      component: () => import('../views/1_6.vue')
    },
    {
      path: '/1_7',
      name: '1_7',
      component: () => import('../views/1_7.vue')
    },
    {
      path: '/2_1',
      name: '2_1',
      component: () => import('../views/2_1.vue')
    },
    {
      path: '/2_2',
      name: '2_2',
      component: () => import('../views/2_2.vue')
    },
    {
      path: '/2_3',
      name: '2_3',
      component: () => import('../views/2_3.vue')
    },
    {
      path: '/2_4',
      name: '2_4',
      component: () => import('../views/2_4.vue')
    },
    {
      path: '/2_5',
      name: '2_5',
      component: () => import('../views/2_5.vue')
    },
    {
      path: '/2_6',
      name: '2_6',
      component: () => import('../views/2_6.vue')
    },
    {
      path: '/2_7',
      name: '2_7',
      component: () => import('../views/2_7.vue')
    },
  ]
})

export default router
