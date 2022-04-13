import { createRouter, createWebHistory } from 'vue-router'
import Index from './pages/index.vue'

const routes = [{ path: '/', name: 'home', component: Index }]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
