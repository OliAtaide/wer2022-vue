import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Calls from '../views/Calls.vue'
import Organization from '../views/Organization.vue'
import Contact from '../views/Contact.vue'
import Pricing from '../views/Pricing.vue'

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
  },
  {
    path: '/organization',
    name: 'Organization',
    component: Organization,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
