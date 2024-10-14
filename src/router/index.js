import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Make sure this path is correct
import About from '../views/About.vue' // Example route for About page

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
