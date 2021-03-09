import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',  
    component: () => import('../views/About.vue')
  },
  {
    path: '/person/:id',
    name: 'Person',
    component: () => import('../views/Person.vue')
  },
  {
    path: '/person/:id/posts',
    name: 'Posts',
    component: () => import('../views/Posts.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),  
})

export default router
