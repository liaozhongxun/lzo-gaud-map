import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create.vue'

const routes = [
  {
    path: '/',
    name: 'create',
    component: Create
  },
  {
    path: '/poidata',
    name: 'poidata',
    component: () => import(/* webpackChunkName: "about" */ '../views/POI_Data.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
