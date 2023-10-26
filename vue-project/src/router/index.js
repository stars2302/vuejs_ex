import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/template',
      name: 'template',
      component: () => import('../views/TempView.vue')
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import('../views/ReactivityView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/ComputedView.vue')
    },
    {
      path: '/binding',
      name: 'binding',
      component: () => import('../views/BindingView.vue')
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('../views/CrView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListView.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/EventView.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('../views/FormView.vue')
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: () => import('../views/LifecycleView.vue')
    },
    {
      path: '/watcher',
      name: 'watcher',
      component: () => import('../views/WatcherView.vue')
    },
    {
      path: '/refs',
      name: 'refs',
      component: () => import('../views/RefsView.vue')
    }
  ]
})

export default router
