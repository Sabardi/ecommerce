import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Product from '../views/Product.vue';
import Contact from '../views/Contact.vue';
import DetailProduk from '../views/Detail.vue';
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
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/product/:id',
    name: 'DetailProduk',
    component: DetailProduk
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
