import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    }
  ]
})