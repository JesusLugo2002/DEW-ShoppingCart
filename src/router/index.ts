import { createRouter, createWebHistory } from 'vue-router'

import ShopView from '@/views/ShopView.vue'
import CartView from '@/views/CartView.vue'

const routes = [
  { path: '/', redirect: '/shop' },
  { path: '/shop', component: ShopView, name: 'shop' },
  { path: '/cart', component: CartView, name: 'cart' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
