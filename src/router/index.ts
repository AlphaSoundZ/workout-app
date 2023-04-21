import { createRouter, createWebHistory } from 'vue-router'
import Exercice1 from '../views/Exercice1.vue'
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
      name: 'exercice1',
      component: Exercice1
    },
    /*{
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }*/
  ]
})

export default router
