import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calls from '../views/Calls.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calls',
    name: 'Calls',
    component: Calls,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
