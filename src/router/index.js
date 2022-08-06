import { createRouter, createWebHashHistory } from 'vue-router'
import AuthView from "@/views/AuthView";

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
