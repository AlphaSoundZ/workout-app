import { createRouter, createWebHistory } from 'vue-router'
import Exercice1 from '../views/Exercice1.vue'
import HomeView from '../views/HomeView.vue'
import BreakView from '../views/Break.vue'
import OverviewView from '../views/OverviewView.vue'

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
    // all other routes to homeView
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: HomeView
    },
    {
      path: '/break',
      name: 'break',
      component: BreakView
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverviewView
    }
  ]
})

export default router
